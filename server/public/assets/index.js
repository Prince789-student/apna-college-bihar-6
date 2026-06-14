var xk=Object.defineProperty;var Rk=(t,e,n)=>e in t?xk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ir=(t,e,n)=>(Rk(t,typeof e!="symbol"?e+"":e,n),n);function Pk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var v6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zw={exports:{}},Fu={},Hw={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),Ck=Symbol.for("react.portal"),bk=Symbol.for("react.fragment"),Nk=Symbol.for("react.strict_mode"),Dk=Symbol.for("react.profiler"),Ok=Symbol.for("react.provider"),Lk=Symbol.for("react.context"),Vk=Symbol.for("react.forward_ref"),Mk=Symbol.for("react.suspense"),jk=Symbol.for("react.memo"),Uk=Symbol.for("react.lazy"),Xy=Symbol.iterator;function Fk(t){return t===null||typeof t!="object"?null:(t=Xy&&t[Xy]||t["@@iterator"],typeof t=="function"?t:null)}var Ww={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qw=Object.assign,Kw={};function po(t,e,n){this.props=t,this.context=e,this.refs=Kw,this.updater=n||Ww}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gw(){}Gw.prototype=po.prototype;function Hp(t,e,n){this.props=t,this.context=e,this.refs=Kw,this.updater=n||Ww}var Wp=Hp.prototype=new Gw;Wp.constructor=Hp;qw(Wp,po.prototype);Wp.isPureReactComponent=!0;var Zy=Array.isArray,Qw=Object.prototype.hasOwnProperty,qp={current:null},Yw={key:!0,ref:!0,__self:!0,__source:!0};function Jw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qw.call(e,r)&&!Yw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:qp.current}}function $k(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function Bk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e_=/\/+/g;function ad(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bk(""+t.key):e.toString(36)}function _c(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case Ck:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ad(o,0):r,Zy(i)?(n="",t!=null&&(n=t.replace(e_,"$&/")+"/"),_c(i,e,n,"",function(u){return u})):i!=null&&(Kp(i)&&(i=$k(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(e_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zy(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+ad(s,l);o+=_c(s,e,n,c,i)}else if(c=Fk(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+ad(s,l++),o+=_c(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hl(t,e,n){if(t==null)return t;var r=[],i=0;return _c(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},vc={transition:null},Hk={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:vc,ReactCurrentOwner:qp};function Xw(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Hl,forEach:function(t,e,n){Hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hl(t,function(){e++}),e},toArray:function(t){return Hl(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=po;ce.Fragment=bk;ce.Profiler=Dk;ce.PureComponent=Hp;ce.StrictMode=Nk;ce.Suspense=Mk;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;ce.act=Xw;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Qw.call(e,c)&&!Yw.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:Lk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ok,_context:t},t.Consumer=t};ce.createElement=Jw;ce.createFactory=function(t){var e=Jw.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:Vk,render:t}};ce.isValidElement=Kp;ce.lazy=function(t){return{$$typeof:Uk,_payload:{_status:-1,_result:t},_init:zk}};ce.memo=function(t,e){return{$$typeof:jk,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=vc.transition;vc.transition={};try{t()}finally{vc.transition=e}};ce.unstable_act=Xw;ce.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ce.useContext=function(t){return Mt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ce.useId=function(){return Mt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ce.useRef=function(t){return Mt.current.useRef(t)};ce.useState=function(t){return Mt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Mt.current.useTransition()};ce.version="18.3.1";Hw.exports=ce;var D=Hw.exports;const G=Uu(D),Wk=Pk({__proto__:null,default:G},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qk=D,Kk=Symbol.for("react.element"),Gk=Symbol.for("react.fragment"),Qk=Object.prototype.hasOwnProperty,Yk=qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jk={key:!0,ref:!0,__self:!0,__source:!0};function Zw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qk.call(e,r)&&!Jk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Kk,type:t,key:s,ref:o,props:i,_owner:Yk.current}}Fu.Fragment=Gk;Fu.jsx=Zw;Fu.jsxs=Zw;zw.exports=Fu;var g=zw.exports,ff={},eE={exports:{}},an={},tE={exports:{}},nE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Z){var re=B.length;B.push(Z);e:for(;0<re;){var we=re-1>>>1,H=B[we];if(0<i(H,Z))B[we]=Z,B[re]=H,re=we;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],re=B.pop();if(re!==Z){B[0]=re;e:for(var we=0,H=B.length,Y=H>>>1;we<Y;){var oe=2*(we+1)-1,be=B[oe],Se=oe+1,at=B[Se];if(0>i(be,re))Se<H&&0>i(at,be)?(B[we]=at,B[Se]=re,we=Se):(B[we]=be,B[oe]=re,we=oe);else if(Se<H&&0>i(at,re))B[we]=at,B[Se]=re,we=Se;else break e}}return Z}function i(B,Z){var re=B.sortIndex-Z.sortIndex;return re!==0?re:B.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,f=null,m=3,w=!1,P=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var Z=n(u);Z!==null;){if(Z.callback===null)r(u);else if(Z.startTime<=B)r(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=n(u)}}function O(B){if(x=!1,S(B),!P)if(n(c)!==null)P=!0,le(j);else{var Z=n(u);Z!==null&&Ve(O,Z.startTime-B)}}function j(B,Z){P=!1,x&&(x=!1,E(_),_=-1),w=!0;var re=m;try{for(S(Z),f=n(c);f!==null&&(!(f.expirationTime>Z)||B&&!R());){var we=f.callback;if(typeof we=="function"){f.callback=null,m=f.priorityLevel;var H=we(f.expirationTime<=Z);Z=t.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),S(Z)}else r(c);f=n(c)}if(f!==null)var Y=!0;else{var oe=n(u);oe!==null&&Ve(O,oe.startTime-Z),Y=!1}return Y}finally{f=null,m=re,w=!1}}var F=!1,T=null,_=-1,I=5,k=-1;function R(){return!(t.unstable_now()-k<I)}function b(){if(T!==null){var B=t.unstable_now();k=B;var Z=!0;try{Z=T(!0,B)}finally{Z?A():(F=!1,T=null)}}else F=!1}var A;if(typeof v=="function")A=function(){v(b)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Q=me.port2;me.port1.onmessage=b,A=function(){Q.postMessage(null)}}else A=function(){C(b,0)};function le(B){T=B,F||(F=!0,A())}function Ve(B,Z){_=C(function(){B(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||w||(P=!0,le(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var re=m;m=Z;try{return B()}finally{m=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=m;m=B;try{return Z()}finally{m=re}},t.unstable_scheduleCallback=function(B,Z,re){var we=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?we+re:we):re=we,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,B={id:d++,callback:Z,priorityLevel:B,startTime:re,expirationTime:H,sortIndex:-1},re>we?(B.sortIndex=re,e(u,B),n(c)===null&&B===n(u)&&(x?(E(_),_=-1):x=!0,Ve(O,re-we))):(B.sortIndex=H,e(c,B),P||w||(P=!0,le(j))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var Z=m;return function(){var re=m;m=Z;try{return B.apply(this,arguments)}finally{m=re}}}})(nE);tE.exports=nE;var Xk=tE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zk=D,on=Xk;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rE=new Set,ja={};function as(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(ja[t]=e,t=0;t<e.length;t++)rE.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t_={},n_={};function tx(t){return pf.call(n_,t)?!0:pf.call(t_,t)?!1:ex.test(t)?n_[t]=!0:(t_[t]=!0,!1)}function nx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rx(t,e,n,r){if(e===null||typeof e>"u"||nx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);_t[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);_t[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Qp);_t[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yp(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rx(e,n,i,r)&&(n=null),r||i===null?tx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xr=Zk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),ks=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Jp=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),yf=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),oE=Symbol.for("react.offscreen"),r_=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=r_&&t[r_]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,ld;function ca(t){if(ld===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ld=e&&e[1]||""}return`
`+ld+t}var cd=!1;function ud(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function ix(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=ud(t.type,!1),t;case 11:return t=ud(t.type.render,!1),t;case 1:return t=ud(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case ks:return"Portal";case mf:return"Profiler";case Jp:return"StrictMode";case gf:return"Suspense";case yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sE:return(t.displayName||"Context")+".Consumer";case iE:return(t._context.displayName||"Context")+".Provider";case Xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zp:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case jr:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function sx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===Jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ox(t){var e=aE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=ox(t))}function lE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function i_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cE(t,e){e=e.checked,e!=null&&Yp(t,"checked",e,!1)}function wf(t,e){cE(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ef(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ef(t,e,n){(e!=="number"||qc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function o_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ua(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function uE(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function a_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function If(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,dE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ax=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){ax.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function fE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function pE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lx=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(lx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function em(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,Us=null,Fs=null;function l_(t){if(t=wl(t)){if(typeof xf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Wu(e),xf(t.stateNode,t.type,e))}}function mE(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function gE(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,l_(t),e)for(t=0;t<e.length;t++)l_(e[t])}}function yE(t,e){return t(e)}function _E(){}var hd=!1;function vE(t,e,n){if(hd)return t(e,n);hd=!0;try{return yE(t,e,n)}finally{hd=!1,(Us!==null||Fs!==null)&&(_E(),gE())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var r=Wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Rf=!1;if(gr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Rf=!1}function cx(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ea=!1,Kc=null,Gc=!1,Pf=null,ux={onError:function(t){Ea=!0,Kc=t}};function hx(t,e,n,r,i,s,o,l,c){Ea=!1,Kc=null,cx.apply(ux,arguments)}function dx(t,e,n,r,i,s,o,l,c){if(hx.apply(this,arguments),Ea){if(Ea){var u=Kc;Ea=!1,Kc=null}else throw Error(U(198));Gc||(Gc=!0,Pf=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c_(t){if(ls(t)!==t)throw Error(U(188))}function fx(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return c_(i),t;if(s===r)return c_(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function EE(t){return t=fx(t),t!==null?TE(t):null}function TE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=TE(t);if(e!==null)return e;t=t.sibling}return null}var IE=on.unstable_scheduleCallback,u_=on.unstable_cancelCallback,px=on.unstable_shouldYield,mx=on.unstable_requestPaint,qe=on.unstable_now,gx=on.unstable_getCurrentPriorityLevel,tm=on.unstable_ImmediatePriority,SE=on.unstable_UserBlockingPriority,Qc=on.unstable_NormalPriority,yx=on.unstable_LowPriority,AE=on.unstable_IdlePriority,$u=null,Yn=null;function _x(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:Ex,vx=Math.log,wx=Math.LN2;function Ex(t){return t>>>=0,t===0?32:31-(vx(t)/wx|0)|0}var Gl=64,Ql=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ha(l):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function Tx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ix(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Tx(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kE(){var t=Gl;return Gl<<=1,!(Gl&4194240)&&(Gl=64),t}function dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function Sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function xE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var RE,rm,PE,CE,bE,bf=!1,Yl=[],Xr=null,Zr=null,ei=null,$a=new Map,Ba=new Map,Fr=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h_(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function Yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wl(e),e!==null&&rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kx(t,e,n,r,i){switch(e){case"focusin":return Xr=Yo(Xr,t,e,n,r,i),!0;case"dragenter":return Zr=Yo(Zr,t,e,n,r,i),!0;case"mouseover":return ei=Yo(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $a.set(s,Yo($a.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ba.set(s,Yo(Ba.get(s)||null,t,e,n,r,i)),!0}return!1}function NE(t){var e=Mi(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=wE(n),e!==null){t.blockedOn=e,bE(t.priority,function(){PE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=wl(n),e!==null&&rm(e),t.blockedOn=n,!1;e.shift()}return!0}function d_(t,e,n){wc(t)&&n.delete(e)}function xx(){bf=!1,Xr!==null&&wc(Xr)&&(Xr=null),Zr!==null&&wc(Zr)&&(Zr=null),ei!==null&&wc(ei)&&(ei=null),$a.forEach(d_),Ba.forEach(d_)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,xx)))}function za(t){function e(i){return Jo(i,t)}if(0<Yl.length){Jo(Yl[0],t);for(var n=1;n<Yl.length;n++){var r=Yl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&Jo(Xr,t),Zr!==null&&Jo(Zr,t),ei!==null&&Jo(ei,t),$a.forEach(e),Ba.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)NE(n),n.blockedOn===null&&Fr.shift()}var $s=xr.ReactCurrentBatchConfig,Jc=!0;function Rx(t,e,n,r){var i=ve,s=$s.transition;$s.transition=null;try{ve=1,im(t,e,n,r)}finally{ve=i,$s.transition=s}}function Px(t,e,n,r){var i=ve,s=$s.transition;$s.transition=null;try{ve=4,im(t,e,n,r)}finally{ve=i,$s.transition=s}}function im(t,e,n,r){if(Jc){var i=Nf(t,e,n,r);if(i===null)Td(t,e,r,Xc,n),h_(t,r);else if(kx(i,t,e,n,r))r.stopPropagation();else if(h_(t,r),e&4&&-1<Ax.indexOf(t)){for(;i!==null;){var s=wl(i);if(s!==null&&RE(s),s=Nf(t,e,n,r),s===null&&Td(t,e,r,Xc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Td(t,e,r,null,n)}}var Xc=null;function Nf(t,e,n,r){if(Xc=null,t=em(r),t=Mi(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xc=t,null}function DE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gx()){case tm:return 1;case SE:return 4;case Qc:case yx:return 16;case AE:return 536870912;default:return 16}default:return 16}}var Kr=null,sm=null,Ec=null;function OE(){if(Ec)return Ec;var t,e=sm,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ec=i.slice(t,1<r?1-r:void 0)}function Tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function f_(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jl:f_,this.isPropagationStopped=f_,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},om=ln(mo),vl=Oe({},mo,{view:0,detail:0}),Cx=ln(vl),fd,pd,Xo,Bu=Oe({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(fd=t.screenX-Xo.screenX,pd=t.screenY-Xo.screenY):pd=fd=0,Xo=t),fd)},movementY:function(t){return"movementY"in t?t.movementY:pd}}),p_=ln(Bu),bx=Oe({},Bu,{dataTransfer:0}),Nx=ln(bx),Dx=Oe({},vl,{relatedTarget:0}),md=ln(Dx),Ox=Oe({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=ln(Ox),Vx=Oe({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mx=ln(Vx),jx=Oe({},mo,{data:0}),m_=ln(jx),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$x[t])?!!e[t]:!1}function am(){return Bx}var zx=Oe({},vl,{key:function(t){if(t.key){var e=Ux[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:am,charCode:function(t){return t.type==="keypress"?Tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hx=ln(zx),Wx=Oe({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=ln(Wx),qx=Oe({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:am}),Kx=ln(qx),Gx=Oe({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=ln(Gx),Yx=Oe({},Bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=ln(Yx),Xx=[9,13,27,32],lm=gr&&"CompositionEvent"in window,Ta=null;gr&&"documentMode"in document&&(Ta=document.documentMode);var Zx=gr&&"TextEvent"in window&&!Ta,LE=gr&&(!lm||Ta&&8<Ta&&11>=Ta),y_=String.fromCharCode(32),__=!1;function VE(t,e){switch(t){case"keyup":return Xx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ME(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function eR(t,e){switch(t){case"compositionend":return ME(e);case"keypress":return e.which!==32?null:(__=!0,y_);case"textInput":return t=e.data,t===y_&&__?null:t;default:return null}}function tR(t,e){if(Rs)return t==="compositionend"||!lm&&VE(t,e)?(t=OE(),Ec=sm=Kr=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return LE&&e.locale!=="ko"?null:e.data;default:return null}}var nR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nR[t.type]:e==="textarea"}function jE(t,e,n,r){mE(r),e=Zc(e,"onChange"),0<e.length&&(n=new om("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ia=null,Ha=null;function rR(t){QE(t,0)}function zu(t){var e=bs(t);if(lE(e))return t}function iR(t,e){if(t==="change")return e}var UE=!1;if(gr){var gd;if(gr){var yd="oninput"in document;if(!yd){var w_=document.createElement("div");w_.setAttribute("oninput","return;"),yd=typeof w_.oninput=="function"}gd=yd}else gd=!1;UE=gd&&(!document.documentMode||9<document.documentMode)}function E_(){Ia&&(Ia.detachEvent("onpropertychange",FE),Ha=Ia=null)}function FE(t){if(t.propertyName==="value"&&zu(Ha)){var e=[];jE(e,Ha,t,em(t)),vE(rR,e)}}function sR(t,e,n){t==="focusin"?(E_(),Ia=e,Ha=n,Ia.attachEvent("onpropertychange",FE)):t==="focusout"&&E_()}function oR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Ha)}function aR(t,e){if(t==="click")return zu(e)}function lR(t,e){if(t==="input"||t==="change")return zu(e)}function cR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:cR;function Wa(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pf.call(e,i)||!On(t[i],e[i]))return!1}return!0}function T_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function I_(t,e){var n=T_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T_(n)}}function $E(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$E(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function BE(){for(var t=window,e=qc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qc(t.document)}return e}function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uR(t){var e=BE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$E(n.ownerDocument.documentElement,n)){if(r!==null&&cm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=I_(n,s);var o=I_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hR=gr&&"documentMode"in document&&11>=document.documentMode,Ps=null,Df=null,Sa=null,Of=!1;function S_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Of||Ps==null||Ps!==qc(r)||(r=Ps,"selectionStart"in r&&cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sa&&Wa(Sa,r)||(Sa=r,r=Zc(Df,"onSelect"),0<r.length&&(e=new om("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ps)))}function Xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},_d={},zE={};gr&&(zE=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Hu(t){if(_d[t])return _d[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zE)return _d[t]=e[n];return t}var HE=Hu("animationend"),WE=Hu("animationiteration"),qE=Hu("animationstart"),KE=Hu("transitionend"),GE=new Map,A_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(t,e){GE.set(t,e),as(e,[t])}for(var vd=0;vd<A_.length;vd++){var wd=A_[vd],dR=wd.toLowerCase(),fR=wd[0].toUpperCase()+wd.slice(1);Ei(dR,"on"+fR)}Ei(HE,"onAnimationEnd");Ei(WE,"onAnimationIteration");Ei(qE,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(KE,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pR=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function k_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dx(r,e,void 0,t),t.currentTarget=null}function QE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;k_(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;k_(i,l,u),s=c}}}if(Gc)throw t=Pf,Gc=!1,Pf=null,t}function ke(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var r=t+"__bubble";n.has(r)||(YE(e,t,2,!1),n.add(r))}function Ed(t,e,n){var r=0;e&&(r|=4),YE(n,t,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Zl]){t[Zl]=!0,rE.forEach(function(n){n!=="selectionchange"&&(pR.has(n)||Ed(n,!1,t),Ed(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,Ed("selectionchange",!1,e))}}function YE(t,e,n,r){switch(DE(e)){case 1:var i=Rx;break;case 4:i=Px;break;default:i=im}n=i.bind(null,e,n,t),i=void 0,!Rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Td(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mi(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vE(function(){var u=s,d=em(n),f=[];e:{var m=GE.get(t);if(m!==void 0){var w=om,P=t;switch(t){case"keypress":if(Tc(n)===0)break e;case"keydown":case"keyup":w=Hx;break;case"focusin":P="focus",w=md;break;case"focusout":P="blur",w=md;break;case"beforeblur":case"afterblur":w=md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=p_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Kx;break;case HE:case WE:case qE:w=Lx;break;case KE:w=Qx;break;case"scroll":w=Cx;break;case"wheel":w=Jx;break;case"copy":case"cut":case"paste":w=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=g_}var x=(e&4)!==0,C=!x&&t==="scroll",E=x?m!==null?m+"Capture":null:m;x=[];for(var v=u,S;v!==null;){S=v;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,E!==null&&(O=Fa(v,E),O!=null&&x.push(Ka(v,O,S)))),C)break;v=v.return}0<x.length&&(m=new w(m,P,null,n,d),f.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==kf&&(P=n.relatedTarget||n.fromElement)&&(Mi(P)||P[yr]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(P=n.relatedTarget||n.toElement,w=u,P=P?Mi(P):null,P!==null&&(C=ls(P),P!==C||P.tag!==5&&P.tag!==6)&&(P=null)):(w=null,P=u),w!==P)){if(x=p_,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=g_,O="onPointerLeave",E="onPointerEnter",v="pointer"),C=w==null?m:bs(w),S=P==null?m:bs(P),m=new x(O,v+"leave",w,n,d),m.target=C,m.relatedTarget=S,O=null,Mi(d)===u&&(x=new x(E,v+"enter",P,n,d),x.target=S,x.relatedTarget=C,O=x),C=O,w&&P)t:{for(x=w,E=P,v=0,S=x;S;S=vs(S))v++;for(S=0,O=E;O;O=vs(O))S++;for(;0<v-S;)x=vs(x),v--;for(;0<S-v;)E=vs(E),S--;for(;v--;){if(x===E||E!==null&&x===E.alternate)break t;x=vs(x),E=vs(E)}x=null}else x=null;w!==null&&x_(f,m,w,x,!1),P!==null&&C!==null&&x_(f,C,P,x,!0)}}e:{if(m=u?bs(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=iR;else if(v_(m))if(UE)j=lR;else{j=oR;var F=sR}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=aR);if(j&&(j=j(t,u))){jE(f,j,n,d);break e}F&&F(t,m,u),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Ef(m,"number",m.value)}switch(F=u?bs(u):window,t){case"focusin":(v_(F)||F.contentEditable==="true")&&(Ps=F,Df=u,Sa=null);break;case"focusout":Sa=Df=Ps=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,S_(f,n,d);break;case"selectionchange":if(hR)break;case"keydown":case"keyup":S_(f,n,d)}var T;if(lm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Rs?VE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(LE&&n.locale!=="ko"&&(Rs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Rs&&(T=OE()):(Kr=d,sm="value"in Kr?Kr.value:Kr.textContent,Rs=!0)),F=Zc(u,_),0<F.length&&(_=new m_(_,t,null,n,d),f.push({event:_,listeners:F}),T?_.data=T:(T=ME(n),T!==null&&(_.data=T)))),(T=Zx?eR(t,n):tR(t,n))&&(u=Zc(u,"onBeforeInput"),0<u.length&&(d=new m_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}QE(f,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fa(t,n),s!=null&&r.unshift(Ka(t,s,i)),s=Fa(t,e),s!=null&&r.push(Ka(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function x_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Fa(n,s),c!=null&&o.unshift(Ka(n,c,l))):i||(c=Fa(n,s),c!=null&&o.push(Ka(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mR=/\r\n?/g,gR=/\u0000|\uFFFD/g;function R_(t){return(typeof t=="string"?t:""+t).replace(mR,`
`).replace(gR,"")}function ec(t,e,n){if(e=R_(e),R_(t)!==e&&n)throw Error(U(425))}function eu(){}var Lf=null,Vf=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,yR=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,_R=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(t){return P_.resolve(null).then(t).catch(vR)}:jf;function vR(t){setTimeout(function(){throw t})}function Id(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),za(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);za(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function C_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),qn="__reactFiber$"+go,Ga="__reactProps$"+go,yr="__reactContainer$"+go,Uf="__reactEvents$"+go,wR="__reactListeners$"+go,ER="__reactHandles$"+go;function Mi(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=C_(t);t!==null;){if(n=t[qn])return n;t=C_(t)}return e}t=n,n=t.parentNode}return null}function wl(t){return t=t[qn]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Wu(t){return t[Ga]||null}var Ff=[],Ns=-1;function Ti(t){return{current:t}}function Re(t){0>Ns||(t.current=Ff[Ns],Ff[Ns]=null,Ns--)}function Ie(t,e){Ns++,Ff[Ns]=t.current,t.current=e}var fi={},kt=Ti(fi),zt=Ti(!1),Ki=fi;function to(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function tu(){Re(zt),Re(kt)}function b_(t,e,n){if(kt.current!==fi)throw Error(U(168));Ie(kt,e),Ie(zt,n)}function JE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,sx(t)||"Unknown",i));return Oe({},n,r)}function nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Ki=kt.current,Ie(kt,t),Ie(zt,zt.current),!0}function N_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=JE(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,Re(zt),Re(kt),Ie(kt,t)):Re(zt),Ie(zt,n)}var lr=null,qu=!1,Sd=!1;function XE(t){lr===null?lr=[t]:lr.push(t)}function TR(t){qu=!0,XE(t)}function Ii(){if(!Sd&&lr!==null){Sd=!0;var t=0,e=ve;try{var n=lr;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,qu=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),IE(tm,Ii),i}finally{ve=e,Sd=!1}}return null}var Ds=[],Os=0,ru=null,iu=0,dn=[],fn=0,Gi=null,cr=1,ur="";function Oi(t,e){Ds[Os++]=iu,Ds[Os++]=ru,ru=t,iu=e}function ZE(t,e,n){dn[fn++]=cr,dn[fn++]=ur,dn[fn++]=Gi,Gi=t;var r=cr;t=ur;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-bn(e)+i|n<<i|r,ur=s+t}else cr=1<<s|n<<i|r,ur=t}function um(t){t.return!==null&&(Oi(t,1),ZE(t,1,0))}function hm(t){for(;t===ru;)ru=Ds[--Os],Ds[Os]=null,iu=Ds[--Os],Ds[Os]=null;for(;t===Gi;)Gi=dn[--fn],dn[fn]=null,ur=dn[--fn],dn[fn]=null,cr=dn[--fn],dn[fn]=null}var sn=null,tn=null,Ce=!1,Rn=null;function eT(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function D_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,tn=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,tn=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(Ce){var e=tn;if(e){var n=e;if(!D_(t,e)){if($f(t))throw Error(U(418));e=ti(n.nextSibling);var r=sn;e&&D_(t,e)?eT(r,n):(t.flags=t.flags&-4097|2,Ce=!1,sn=t)}}else{if($f(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ce=!1,sn=t}}}function O_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function tc(t){if(t!==sn)return!1;if(!Ce)return O_(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=tn)){if($f(t))throw tT(),Error(U(418));for(;e;)eT(t,e),e=ti(e.nextSibling)}if(O_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=sn?ti(t.stateNode.nextSibling):null;return!0}function tT(){for(var t=tn;t;)t=ti(t.nextSibling)}function no(){tn=sn=null,Ce=!1}function dm(t){Rn===null?Rn=[t]:Rn.push(t)}var IR=xr.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function nc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function L_(t){var e=t._init;return e(t._payload)}function nT(t){function e(E,v){if(t){var S=E.deletions;S===null?(E.deletions=[v],E.flags|=16):S.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=si(E,v),E.index=0,E.sibling=null,E}function s(E,v,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<v?(E.flags|=2,v):S):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,S,O){return v===null||v.tag!==6?(v=bd(S,E.mode,O),v.return=E,v):(v=i(v,S),v.return=E,v)}function c(E,v,S,O){var j=S.type;return j===xs?d(E,v,S.props.children,O,S.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&L_(j)===v.type)?(O=i(v,S.props),O.ref=Zo(E,v,S),O.return=E,O):(O=Pc(S.type,S.key,S.props,null,E.mode,O),O.ref=Zo(E,v,S),O.return=E,O)}function u(E,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Nd(S,E.mode,O),v.return=E,v):(v=i(v,S.children||[]),v.return=E,v)}function d(E,v,S,O,j){return v===null||v.tag!==7?(v=zi(S,E.mode,O,j),v.return=E,v):(v=i(v,S),v.return=E,v)}function f(E,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bd(""+v,E.mode,S),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wl:return S=Pc(v.type,v.key,v.props,null,E.mode,S),S.ref=Zo(E,null,v),S.return=E,S;case ks:return v=Nd(v,E.mode,S),v.return=E,v;case jr:var O=v._init;return f(E,O(v._payload),S)}if(ua(v)||Go(v))return v=zi(v,E.mode,S,null),v.return=E,v;nc(E,v)}return null}function m(E,v,S,O){var j=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(E,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wl:return S.key===j?c(E,v,S,O):null;case ks:return S.key===j?u(E,v,S,O):null;case jr:return j=S._init,m(E,v,j(S._payload),O)}if(ua(S)||Go(S))return j!==null?null:d(E,v,S,O,null);nc(E,S)}return null}function w(E,v,S,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(S)||null,l(v,E,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Wl:return E=E.get(O.key===null?S:O.key)||null,c(v,E,O,j);case ks:return E=E.get(O.key===null?S:O.key)||null,u(v,E,O,j);case jr:var F=O._init;return w(E,v,S,F(O._payload),j)}if(ua(O)||Go(O))return E=E.get(S)||null,d(v,E,O,j,null);nc(v,O)}return null}function P(E,v,S,O){for(var j=null,F=null,T=v,_=v=0,I=null;T!==null&&_<S.length;_++){T.index>_?(I=T,T=null):I=T.sibling;var k=m(E,T,S[_],O);if(k===null){T===null&&(T=I);break}t&&T&&k.alternate===null&&e(E,T),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k,T=I}if(_===S.length)return n(E,T),Ce&&Oi(E,_),j;if(T===null){for(;_<S.length;_++)T=f(E,S[_],O),T!==null&&(v=s(T,v,_),F===null?j=T:F.sibling=T,F=T);return Ce&&Oi(E,_),j}for(T=r(E,T);_<S.length;_++)I=w(T,E,_,S[_],O),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?_:I.key),v=s(I,v,_),F===null?j=I:F.sibling=I,F=I);return t&&T.forEach(function(R){return e(E,R)}),Ce&&Oi(E,_),j}function x(E,v,S,O){var j=Go(S);if(typeof j!="function")throw Error(U(150));if(S=j.call(S),S==null)throw Error(U(151));for(var F=j=null,T=v,_=v=0,I=null,k=S.next();T!==null&&!k.done;_++,k=S.next()){T.index>_?(I=T,T=null):I=T.sibling;var R=m(E,T,k.value,O);if(R===null){T===null&&(T=I);break}t&&T&&R.alternate===null&&e(E,T),v=s(R,v,_),F===null?j=R:F.sibling=R,F=R,T=I}if(k.done)return n(E,T),Ce&&Oi(E,_),j;if(T===null){for(;!k.done;_++,k=S.next())k=f(E,k.value,O),k!==null&&(v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return Ce&&Oi(E,_),j}for(T=r(E,T);!k.done;_++,k=S.next())k=w(T,E,_,k.value,O),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?_:k.key),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return t&&T.forEach(function(b){return e(E,b)}),Ce&&Oi(E,_),j}function C(E,v,S,O){if(typeof S=="object"&&S!==null&&S.type===xs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Wl:e:{for(var j=S.key,F=v;F!==null;){if(F.key===j){if(j=S.type,j===xs){if(F.tag===7){n(E,F.sibling),v=i(F,S.props.children),v.return=E,E=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&L_(j)===F.type){n(E,F.sibling),v=i(F,S.props),v.ref=Zo(E,F,S),v.return=E,E=v;break e}n(E,F);break}else e(E,F);F=F.sibling}S.type===xs?(v=zi(S.props.children,E.mode,O,S.key),v.return=E,E=v):(O=Pc(S.type,S.key,S.props,null,E.mode,O),O.ref=Zo(E,v,S),O.return=E,E=O)}return o(E);case ks:e:{for(F=S.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(E,v.sibling),v=i(v,S.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Nd(S,E.mode,O),v.return=E,E=v}return o(E);case jr:return F=S._init,C(E,v,F(S._payload),O)}if(ua(S))return P(E,v,S,O);if(Go(S))return x(E,v,S,O);nc(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,S),v.return=E,E=v):(n(E,v),v=bd(S,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return C}var ro=nT(!0),rT=nT(!1),su=Ti(null),ou=null,Ls=null,fm=null;function pm(){fm=Ls=ou=null}function mm(t){var e=su.current;Re(su),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){ou=t,fm=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(fm!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(ou===null)throw Error(U(308));Ls=t,ou.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var ji=null;function gm(t){ji===null?ji=[t]:ji.push(t)}function iT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gm(e)):(n.next=i.next,i.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_r(t,n)}return i=r.interleaved,i===null?(e.next=e,gm(r)):(e.next=i.next,i.next=e),r.interleaved=e,_r(t,n)}function Ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}function V_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function au(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,d=u=c=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(m=e,w=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){f=P.call(w,f,m);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,m=typeof P=="function"?P.call(w,f,m):P,m==null)break e;f=Oe({},f,m);break e;case 2:Ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=f):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=f}}function M_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var El={},Jn=Ti(El),Qa=Ti(El),Ya=Ti(El);function Ui(t){if(t===El)throw Error(U(174));return t}function _m(t,e){switch(Ie(Ya,e),Ie(Qa,t),Ie(Jn,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:If(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=If(e,t)}Re(Jn),Ie(Jn,e)}function io(){Re(Jn),Re(Qa),Re(Ya)}function oT(t){Ui(Ya.current);var e=Ui(Jn.current),n=If(e,t.type);e!==n&&(Ie(Qa,t),Ie(Jn,n))}function vm(t){Qa.current===t&&(Re(Jn),Re(Qa))}var Ne=Ti(0);function lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ad=[];function wm(){for(var t=0;t<Ad.length;t++)Ad[t]._workInProgressVersionPrimary=null;Ad.length=0}var Sc=xr.ReactCurrentDispatcher,kd=xr.ReactCurrentBatchConfig,Qi=0,De=null,nt=null,ht=null,cu=!1,Aa=!1,Ja=0,SR=0;function wt(){throw Error(U(321))}function Em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Tm(t,e,n,r,i,s){if(Qi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sc.current=t===null||t.memoizedState===null?RR:PR,t=n(r,i),Aa){s=0;do{if(Aa=!1,Ja=0,25<=s)throw Error(U(301));s+=1,ht=nt=null,e.updateQueue=null,Sc.current=CR,t=n(r,i)}while(Aa)}if(Sc.current=uu,e=nt!==null&&nt.next!==null,Qi=0,ht=nt=De=null,cu=!1,e)throw Error(U(300));return t}function Im(){var t=Ja!==0;return Ja=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?De.memoizedState=ht=t:ht=ht.next=t,ht}function wn(){if(nt===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=ht===null?De.memoizedState:ht.next;if(e!==null)ht=e,nt=t;else{if(t===null)throw Error(U(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ht===null?De.memoizedState=ht=t:ht=ht.next=t}return ht}function Xa(t,e){return typeof e=="function"?e(t):e}function xd(t){var e=wn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((Qi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,De.lanes|=d,Yi|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,On(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rd(t){var e=wn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);On(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aT(){}function lT(t,e){var n=De,r=wn(),i=e(),s=!On(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,Sm(hT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Za(9,uT.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(U(349));Qi&30||cT(n,e,i)}return i}function cT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uT(t,e,n,r){e.value=n,e.getSnapshot=r,dT(e)&&fT(t)}function hT(t,e,n){return n(function(){dT(e)&&fT(t)})}function dT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function fT(t){var e=_r(t,1);e!==null&&Nn(e,t,1,-1)}function j_(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=xR.bind(null,De,t),[e.memoizedState,t]}function Za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pT(){return wn().memoizedState}function Ac(t,e,n,r){var i=Hn();De.flags|=t,i.memoizedState=Za(1|e,n,void 0,r===void 0?null:r)}function Ku(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,r!==null&&Em(r,o.deps)){i.memoizedState=Za(e,n,s,r);return}}De.flags|=t,i.memoizedState=Za(1|e,n,s,r)}function U_(t,e){return Ac(8390656,8,t,e)}function Sm(t,e){return Ku(2048,8,t,e)}function mT(t,e){return Ku(4,2,t,e)}function gT(t,e){return Ku(4,4,t,e)}function yT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _T(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,yT.bind(null,e,t),n)}function Am(){}function vT(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wT(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ET(t,e,n){return Qi&21?(On(n,e)||(n=kE(),De.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function AR(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=kd.transition;kd.transition={};try{t(!1),e()}finally{ve=n,kd.transition=r}}function TT(){return wn().memoizedState}function kR(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},IT(t))ST(e,n);else if(n=iT(t,e,n,r),n!==null){var i=Ot();Nn(n,t,r,i),AT(n,e,r)}}function xR(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(IT(t))ST(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,On(l,o)){var c=e.interleaved;c===null?(i.next=i,gm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=iT(t,e,i,r),n!==null&&(i=Ot(),Nn(n,t,r,i),AT(n,e,r))}}function IT(t){var e=t.alternate;return t===De||e!==null&&e===De}function ST(t,e){Aa=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function AT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}var uu={readContext:vn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},RR={readContext:vn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:U_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4194308,4,yT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ac(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ac(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kR.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:j_,useDebugValue:Am,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=j_(!1),e=t[0];return t=AR.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Hn();if(Ce){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),dt===null)throw Error(U(349));Qi&30||cT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,U_(hT.bind(null,r,s,t),[t]),r.flags|=2048,Za(9,uT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=dt.identifierPrefix;if(Ce){var n=ur,r=cr;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PR={readContext:vn,useCallback:vT,useContext:vn,useEffect:Sm,useImperativeHandle:_T,useInsertionEffect:mT,useLayoutEffect:gT,useMemo:wT,useReducer:xd,useRef:pT,useState:function(){return xd(Xa)},useDebugValue:Am,useDeferredValue:function(t){var e=wn();return ET(e,nt.memoizedState,t)},useTransition:function(){var t=xd(Xa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:aT,useSyncExternalStore:lT,useId:TT,unstable_isNewReconciler:!1},CR={readContext:vn,useCallback:vT,useContext:vn,useEffect:Sm,useImperativeHandle:_T,useInsertionEffect:mT,useLayoutEffect:gT,useMemo:wT,useReducer:Rd,useRef:pT,useState:function(){return Rd(Xa)},useDebugValue:Am,useDeferredValue:function(t){var e=wn();return nt===null?e.memoizedState=t:ET(e,nt.memoizedState,t)},useTransition:function(){var t=Rd(Xa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:aT,useSyncExternalStore:lT,useId:TT,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ii(t),s=fr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Nn(e,t,i,r),Ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ii(t),s=fr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Nn(e,t,i,r),Ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=ii(t),i=fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(Nn(e,t,r,n),Ic(e,t,r))}};function F_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,r)||!Wa(i,s):!0}function kT(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(i=Ht(e)?Ki:kt.current,r=e.contextTypes,s=(r=r!=null)?to(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vn(s):(s=Ht(e)?Ki:kt.current,i.context=to(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gu.enqueueReplaceState(i,i.state,null),au(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",r=e;do n+=ix(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bR=typeof WeakMap=="function"?WeakMap:Map;function xT(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,np=r),qf(t,e)},n}function RT(t,e,n){n=fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qf(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function B_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WR.bind(null,t,e,n),e.then(t,t))}function z_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function H_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var NR=xr.ReactCurrentOwner,Bt=!1;function Dt(t,e,n,r){e.child=t===null?rT(e,null,n,r):ro(e,t.child,n,r)}function W_(t,e,n,r,i){n=n.render;var s=e.ref;return Bs(e,i),r=Tm(t,e,n,r,s,i),n=Im(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(Ce&&n&&um(e),e.flags|=1,Dt(t,e,r,i),e.child)}function q_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,PT(t,e,s,r,i)):(t=Pc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,r)&&t.ref===e.ref)return vr(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function PT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wa(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,vr(t,e,i)}return Kf(t,e,n,r,i)}function CT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Ms,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Ms,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Ms,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Ms,Zt),Zt|=r;return Dt(t,e,i,n),e.child}function bT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kf(t,e,n,r,i){var s=Ht(n)?Ki:kt.current;return s=to(e,s),Bs(e,i),n=Tm(t,e,n,r,s,i),r=Im(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(Ce&&r&&um(e),e.flags|=1,Dt(t,e,n,i),e.child)}function K_(t,e,n,r,i){if(Ht(n)){var s=!0;nu(e)}else s=!1;if(Bs(e,i),e.stateNode===null)kc(t,e),kT(e,n,r),Wf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vn(u):(u=Ht(n)?Ki:kt.current,u=to(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&$_(e,o,r,u),Ur=!1;var m=e.memoizedState;o.state=m,au(e,r,o,i),c=e.memoizedState,l!==r||m!==c||zt.current||Ur?(typeof d=="function"&&(Hf(e,n,d,r),c=e.memoizedState),(l=Ur||F_(e,n,l,r,m,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sT(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:kn(e.type,l),o.props=u,f=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=vn(c):(c=Ht(n)?Ki:kt.current,c=to(e,c));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==c)&&$_(e,o,r,c),Ur=!1,m=e.memoizedState,o.state=m,au(e,r,o,i);var P=e.memoizedState;l!==f||m!==P||zt.current||Ur?(typeof w=="function"&&(Hf(e,n,w,r),P=e.memoizedState),(u=Ur||F_(e,n,u,r,m,P,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Gf(t,e,n,r,s,i)}function Gf(t,e,n,r,i,s){bT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&N_(e,n,!1),vr(t,e,s);r=e.stateNode,NR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,l,s)):Dt(t,e,l,s),e.memoizedState=r.state,i&&N_(e,n,!0),e.child}function NT(t){var e=t.stateNode;e.pendingContext?b_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&b_(t,e.context,!1),_m(t,e.containerInfo)}function G_(t,e,n,r,i){return no(),dm(i),e.flags|=256,Dt(t,e,n,r),e.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function DT(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ne,i&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yf(n),e.memoizedState=Qf,t):km(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=si(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=si(l,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qf,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function km(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rc(t,e,n,r){return r!==null&&dm(r),ro(e,t.child,null,n),t=km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pd(Error(U(422))),rc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ju({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Yf(o),e.memoizedState=Qf,s);if(!(e.mode&1))return rc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Pd(s,r,void 0),rc(t,e,o,r)}if(l=(o&t.childLanes)!==0,Bt||l){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_r(t,i),Nn(r,t,i,-1))}return Nm(),r=Pd(Error(U(421))),rc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=ti(i.nextSibling),sn=e,Ce=!0,Rn=null,t!==null&&(dn[fn++]=cr,dn[fn++]=ur,dn[fn++]=Gi,cr=t.id,ur=t.overflow,Gi=e),e=km(e,r.children),e.flags|=4096,e)}function Q_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zf(t.return,e,n)}function Cd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function OT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Dt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q_(t,n,e);else if(t.tag===19)Q_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cd(e,!0,n,null,s);break;case"together":Cd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OR(t,e,n){switch(e.tag){case 3:NT(e),no();break;case 5:oT(e);break;case 1:Ht(e.type)&&nu(e);break;case 4:_m(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(su,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?DT(t,e,n):(Ie(Ne,Ne.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Ie(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return OT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,CT(t,e,n)}return vr(t,e,n)}var LT,Jf,VT,MT;LT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jf=function(){};VT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ui(Jn.current);var s=null;switch(n){case"input":i=vf(t,i),r=vf(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Tf(t,i),r=Tf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=eu)}Sf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ke("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};MT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LR(t,e,n){var r=e.pendingProps;switch(hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Ht(e.type)&&tu(),Et(e),null;case 3:return r=e.stateNode,io(),Re(zt),Re(kt),wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(sp(Rn),Rn=null))),Jf(t,e),Et(e),null;case 5:vm(e);var i=Ui(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)VT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Et(e),null}if(t=Ui(Jn.current),tc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qn]=e,r[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<da.length;i++)ke(da[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":i_(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":o_(r,s),ke("invalid",r)}Sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ec(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ec(r.textContent,l,t),i=["children",""+l]):ja.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":ql(r),s_(r,s,!0);break;case"textarea":ql(r),a_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=eu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qn]=e,t[Ga]=r,LT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Af(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<da.length;i++)ke(da[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":i_(t,r),i=vf(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ke("invalid",t);break;case"textarea":o_(t,r),i=Tf(t,r),ke("invalid",t);break;default:i=r}Sf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?pE(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dE(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ua(t,c):typeof c=="number"&&Ua(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ke("scroll",t):c!=null&&Yp(t,s,c,o))}switch(n){case"input":ql(t),s_(t,r,!1);break;case"textarea":ql(t),a_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?js(t,!!r.multiple,s,!1):r.defaultValue!=null&&js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)MT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ui(Ya.current),Ui(Jn.current),tc(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:ec(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ec(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return Et(e),null;case 13:if(Re(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&tn!==null&&e.mode&1&&!(e.flags&128))tT(),no(),e.flags|=98560,s=!1;else if(s=tc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[qn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else Rn!==null&&(sp(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?rt===0&&(rt=3):Nm())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return io(),Jf(t,e),t===null&&qa(e.stateNode.containerInfo),Et(e),null;case 10:return mm(e.type._context),Et(e),null;case 17:return Ht(e.type)&&tu(),Et(e),null;case 19:if(Re(Ne),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ea(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lu(t),o!==null){for(e.flags|=128,ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>oo&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304)}else{if(!r)if(t=lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return Et(e),null}else 2*qe()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Ne.current,Ie(Ne,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return bm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function VR(t,e){switch(hm(e),e.tag){case 1:return Ht(e.type)&&tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Re(zt),Re(kt),wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vm(e),null;case 13:if(Re(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ne),null;case 4:return io(),null;case 10:return mm(e.type._context),null;case 22:case 23:return bm(),null;case 24:return null;default:return null}}var ic=!1,St=!1,MR=typeof WeakSet=="function"?WeakSet:Set,K=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function Xf(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Y_=!1;function jR(t,e){if(Lf=Jc,t=BE(),cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++u===i&&(l=o),m===s&&++d===r&&(c=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vf={focusedElem:t,selectionRange:n},Jc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,C=P.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?x:kn(e.type,x),C);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Fe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return P=Y_,Y_=!1,P}function ka(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xf(e,n,s)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jT(t){var e=t.alternate;e!==null&&(t.alternate=null,jT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Ga],delete e[Uf],delete e[wR],delete e[ER])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UT(t){return t.tag===5||t.tag===3||t.tag===4}function J_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=eu));else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}var pt=null,xn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)FT(t,e,n),n=n.sibling}function FT(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:St||Vs(n,e);case 6:var r=pt,i=xn;pt=null,Vr(t,e,n),pt=r,xn=i,pt!==null&&(xn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(xn?(t=pt,n=n.stateNode,t.nodeType===8?Id(t.parentNode,n):t.nodeType===1&&Id(t,n),za(t)):Id(pt,n.stateNode));break;case 4:r=pt,i=xn,pt=n.stateNode.containerInfo,xn=!0,Vr(t,e,n),pt=r,xn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xf(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!St&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Vr(t,e,n),St=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function X_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MR),e.forEach(function(r){var i=KR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:pt=l.stateNode,xn=!1;break e;case 3:pt=l.stateNode.containerInfo,xn=!0;break e;case 4:pt=l.stateNode.containerInfo,xn=!0;break e}l=l.return}if(pt===null)throw Error(U(160));FT(s,o,i),pt=null,xn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$T(e,t),e=e.sibling}function $T(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Bn(t),r&4){try{ka(3,t,t.return),Qu(3,t)}catch(x){Fe(t,t.return,x)}try{ka(5,t,t.return)}catch(x){Fe(t,t.return,x)}}break;case 1:Sn(e,t),Bn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(Sn(e,t),Bn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{Ua(i,"")}catch(x){Fe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cE(i,s),Af(l,o);var u=Af(l,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?pE(i,f):d==="dangerouslySetInnerHTML"?dE(i,f):d==="children"?Ua(i,f):Yp(i,d,f,u)}switch(l){case"input":wf(i,s);break;case"textarea":uE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?js(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?js(i,!!s.multiple,s.defaultValue,!0):js(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ga]=s}catch(x){Fe(t,t.return,x)}}break;case 6:if(Sn(e,t),Bn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Fe(t,t.return,x)}}break;case 3:if(Sn(e,t),Bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(x){Fe(t,t.return,x)}break;case 4:Sn(e,t),Bn(t);break;case 13:Sn(e,t),Bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pm=qe())),r&4&&X_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(St=(u=St)||d,Sn(e,t),St=u):Sn(e,t),Bn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(K=t,d=t.child;d!==null;){for(f=K=d;K!==null;){switch(m=K,w=m.child,m.tag){case 0:case 11:case 14:case 15:ka(4,m,m.return);break;case 1:Vs(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){Fe(r,n,x)}}break;case 5:Vs(m,m.return);break;case 22:if(m.memoizedState!==null){ev(f);continue}}w!==null?(w.return=m,K=w):ev(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=fE("display",o))}catch(x){Fe(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Fe(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Sn(e,t),Bn(t),r&4&&X_(t);break;case 21:break;default:Sn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ua(i,""),r.flags&=-33);var s=J_(t);tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=J_(t);ep(t,l,o);break;default:throw Error(U(161))}}catch(c){Fe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UR(t,e,n){K=t,BT(t)}function BT(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ic;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||St;l=ic;var u=St;if(ic=o,(St=c)&&!u)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null?tv(i):c!==null?(c.return=o,K=c):tv(i);for(;s!==null;)K=s,BT(s),s=s.sibling;K=i,ic=l,St=u}Z_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Z_(t)}}function Z_(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&M_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}M_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}St||e.flags&512&&Zf(e)}catch(m){Fe(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function ev(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function tv(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(c){Fe(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Fe(e,i,c)}}var s=e.return;try{Zf(e)}catch(c){Fe(e,s,c)}break;case 5:var o=e.return;try{Zf(e)}catch(c){Fe(e,o,c)}}}catch(c){Fe(e,e.return,c)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var FR=Math.ceil,hu=xr.ReactCurrentDispatcher,xm=xr.ReactCurrentOwner,yn=xr.ReactCurrentBatchConfig,ge=0,dt=null,Je=null,yt=0,Zt=0,Ms=Ti(0),rt=0,el=null,Yi=0,Yu=0,Rm=0,xa=null,Ft=null,Pm=0,oo=1/0,or=null,du=!1,np=null,ri=null,sc=!1,Gr=null,fu=0,Ra=0,rp=null,xc=-1,Rc=0;function Ot(){return ge&6?qe():xc!==-1?xc:xc=qe()}function ii(t){return t.mode&1?ge&2&&yt!==0?yt&-yt:IR.transition!==null?(Rc===0&&(Rc=kE()),Rc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:DE(t.type)),t):1}function Nn(t,e,n,r){if(50<Ra)throw Ra=0,rp=null,Error(U(185));_l(t,n,r),(!(ge&2)||t!==dt)&&(t===dt&&(!(ge&2)&&(Yu|=n),rt===4&&$r(t,yt)),Wt(t,r),n===1&&ge===0&&!(e.mode&1)&&(oo=qe()+500,qu&&Ii()))}function Wt(t,e){var n=t.callbackNode;Ix(t,e);var r=Yc(t,t===dt?yt:0);if(r===0)n!==null&&u_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&u_(n),e===1)t.tag===0?TR(nv.bind(null,t)):XE(nv.bind(null,t)),_R(function(){!(ge&6)&&Ii()}),n=null;else{switch(xE(r)){case 1:n=tm;break;case 4:n=SE;break;case 16:n=Qc;break;case 536870912:n=AE;break;default:n=Qc}n=YT(n,zT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zT(t,e){if(xc=-1,Rc=0,ge&6)throw Error(U(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=Yc(t,t===dt?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pu(t,r);else{e=r;var i=ge;ge|=2;var s=WT();(dt!==t||yt!==e)&&(or=null,oo=qe()+500,Bi(t,e));do try{zR();break}catch(l){HT(t,l)}while(1);pm(),hu.current=s,ge=i,Je!==null?e=0:(dt=null,yt=0,e=rt)}if(e!==0){if(e===2&&(i=Cf(t),i!==0&&(r=i,e=ip(t,i))),e===1)throw n=el,Bi(t,0),$r(t,r),Wt(t,qe()),n;if(e===6)$r(t,r);else{if(i=t.current.alternate,!(r&30)&&!$R(i)&&(e=pu(t,r),e===2&&(s=Cf(t),s!==0&&(r=s,e=ip(t,s))),e===1))throw n=el,Bi(t,0),$r(t,r),Wt(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Li(t,Ft,or);break;case 3:if($r(t,r),(r&130023424)===r&&(e=Pm+500-qe(),10<e)){if(Yc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jf(Li.bind(null,t,Ft,or),e);break}Li(t,Ft,or);break;case 4:if($r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FR(r/1960))-r,10<r){t.timeoutHandle=jf(Li.bind(null,t,Ft,or),r);break}Li(t,Ft,or);break;case 5:Li(t,Ft,or);break;default:throw Error(U(329))}}}return Wt(t,qe()),t.callbackNode===n?zT.bind(null,t):null}function ip(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=pu(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&sp(e)),t}function sp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function $R(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!On(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $r(t,e){for(e&=~Rm,e&=~Yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function nv(t){if(ge&6)throw Error(U(327));zs();var e=Yc(t,0);if(!(e&1))return Wt(t,qe()),null;var n=pu(t,e);if(t.tag!==0&&n===2){var r=Cf(t);r!==0&&(e=r,n=ip(t,r))}if(n===1)throw n=el,Bi(t,0),$r(t,e),Wt(t,qe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,Ft,or),Wt(t,qe()),null}function Cm(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(oo=qe()+500,qu&&Ii())}}function Ji(t){Gr!==null&&Gr.tag===0&&!(ge&6)&&zs();var e=ge;ge|=1;var n=yn.transition,r=ve;try{if(yn.transition=null,ve=1,t)return t()}finally{ve=r,yn.transition=n,ge=e,!(ge&6)&&Ii()}}function bm(){Zt=Ms.current,Re(Ms)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yR(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(hm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tu();break;case 3:io(),Re(zt),Re(kt),wm();break;case 5:vm(r);break;case 4:io();break;case 13:Re(Ne);break;case 19:Re(Ne);break;case 10:mm(r.type._context);break;case 22:case 23:bm()}n=n.return}if(dt=t,Je=t=si(t.current,null),yt=Zt=e,rt=0,el=null,Rm=Yu=Yi=0,Ft=xa=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function HT(t,e){do{var n=Je;try{if(pm(),Sc.current=uu,cu){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cu=!1}if(Qi=0,ht=nt=De=null,Aa=!1,Ja=0,xm.current=null,n===null||n.return===null){rt=1,el=e,Je=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=yt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=z_(o);if(w!==null){w.flags&=-257,H_(w,o,l,s,e),w.mode&1&&B_(s,u,e),e=w,c=u;var P=e.updateQueue;if(P===null){var x=new Set;x.add(c),e.updateQueue=x}else P.add(c);break e}else{if(!(e&1)){B_(s,u,e),Nm();break e}c=Error(U(426))}}else if(Ce&&l.mode&1){var C=z_(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),H_(C,o,l,s,e),dm(so(c,l));break e}}s=c=so(c,l),rt!==4&&(rt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=xT(s,c,e);V_(s,E);break e;case 1:l=c;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ri===null||!ri.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=RT(s,l,e);V_(s,O);break e}}s=s.return}while(s!==null)}KT(n)}catch(j){e=j,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function WT(){var t=hu.current;return hu.current=uu,t===null?uu:t}function Nm(){(rt===0||rt===3||rt===2)&&(rt=4),dt===null||!(Yi&268435455)&&!(Yu&268435455)||$r(dt,yt)}function pu(t,e){var n=ge;ge|=2;var r=WT();(dt!==t||yt!==e)&&(or=null,Bi(t,e));do try{BR();break}catch(i){HT(t,i)}while(1);if(pm(),ge=n,hu.current=r,Je!==null)throw Error(U(261));return dt=null,yt=0,rt}function BR(){for(;Je!==null;)qT(Je)}function zR(){for(;Je!==null&&!px();)qT(Je)}function qT(t){var e=QT(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?KT(t):Je=e,xm.current=null}function KT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VR(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Je=null;return}}else if(n=LR(n,e,Zt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);rt===0&&(rt=5)}function Li(t,e,n){var r=ve,i=yn.transition;try{yn.transition=null,ve=1,HR(t,e,n,r)}finally{yn.transition=i,ve=r}return null}function HR(t,e,n,r){do zs();while(Gr!==null);if(ge&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sx(t,s),t===dt&&(Je=dt=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sc||(sc=!0,YT(Qc,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=ve;ve=1;var l=ge;ge|=4,xm.current=null,jR(t,n),$T(n,t),uR(Vf),Jc=!!Lf,Vf=Lf=null,t.current=n,UR(n),mx(),ge=l,ve=o,yn.transition=s}else t.current=n;if(sc&&(sc=!1,Gr=t,fu=i),s=t.pendingLanes,s===0&&(ri=null),_x(n.stateNode),Wt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(du)throw du=!1,t=np,np=null,t;return fu&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===rp?Ra++:(Ra=0,rp=t):Ra=0,Ii(),null}function zs(){if(Gr!==null){var t=xE(fu),e=yn.transition,n=ve;try{if(yn.transition=null,ve=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,fu=0,ge&6)throw Error(U(331));var i=ge;for(ge|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:ka(8,d,s)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var m=d.sibling,w=d.return;if(jT(d),d===u){K=null;break}if(m!==null){m.return=w,K=m;break}K=w}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ka(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,K=E;break e}K=s.return}}var v=t.current;for(K=v;K!==null;){o=K;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,K=S;else e:for(o=v;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qu(9,l)}}catch(j){Fe(l,l.return,j)}if(l===o){K=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,K=O;break e}K=l.return}}if(ge=i,Ii(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{ve=n,yn.transition=e}}return!1}function rv(t,e,n){e=so(n,e),e=xT(t,e,1),t=ni(t,e,1),e=Ot(),t!==null&&(_l(t,1,e),Wt(t,e))}function Fe(t,e,n){if(t.tag===3)rv(t,t,n);else for(;e!==null;){if(e.tag===3){rv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=so(n,t),t=RT(e,t,1),e=ni(e,t,1),t=Ot(),e!==null&&(_l(e,1,t),Wt(e,t));break}}e=e.return}}function WR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(yt&n)===n&&(rt===4||rt===3&&(yt&130023424)===yt&&500>qe()-Pm?Bi(t,0):Rm|=n),Wt(t,e)}function GT(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=Ot();t=_r(t,e),t!==null&&(_l(t,e,n),Wt(t,n))}function qR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),GT(t,n)}function KR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),GT(t,n)}var QT;QT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,OR(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Ce&&e.flags&1048576&&ZE(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kc(t,e),t=e.pendingProps;var i=to(e,kt.current);Bs(e,n),i=Tm(null,e,r,t,i,n);var s=Im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,nu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ym(e),i.updater=Gu,e.stateNode=i,i._reactInternals=e,Wf(e,r,t,n),e=Gf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&um(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QR(r),t=kn(r,t),i){case 0:e=Kf(null,e,r,t,n);break e;case 1:e=K_(null,e,r,t,n);break e;case 11:e=W_(null,e,r,t,n);break e;case 14:e=q_(null,e,r,kn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Kf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),K_(t,e,r,i,n);case 3:e:{if(NT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sT(t,e),au(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=so(Error(U(423)),e),e=G_(t,e,r,n,i);break e}else if(r!==i){i=so(Error(U(424)),e),e=G_(t,e,r,n,i);break e}else for(tn=ti(e.stateNode.containerInfo.firstChild),sn=e,Ce=!0,Rn=null,n=rT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){e=vr(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return oT(e),t===null&&Bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mf(r,i)?o=null:s!==null&&Mf(r,s)&&(e.flags|=32),bT(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return DT(t,e,n);case 4:return _m(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),W_(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(su,r._currentValue),r._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===i.children&&!zt.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=fr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),zf(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bs(e,n),i=vn(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=kn(r,e.pendingProps),i=kn(r.type,i),q_(t,e,r,i,n);case 15:return PT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),kc(t,e),e.tag=1,Ht(r)?(t=!0,nu(e)):t=!1,Bs(e,n),kT(e,r,i),Wf(e,r,i,n),Gf(null,e,r,!0,t,n);case 19:return OT(t,e,n);case 22:return CT(t,e,n)}throw Error(U(156,e.tag))};function YT(t,e){return IE(t,e)}function GR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new GR(t,e,n,r)}function Dm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QR(t){if(typeof t=="function")return Dm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xp)return 11;if(t===Zp)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return zi(n.children,i,s,e);case Jp:o=8,i|=8;break;case mf:return t=mn(12,n,e,i|2),t.elementType=mf,t.lanes=s,t;case gf:return t=mn(13,n,e,i),t.elementType=gf,t.lanes=s,t;case yf:return t=mn(19,n,e,i),t.elementType=yf,t.lanes=s,t;case oE:return Ju(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iE:o=10;break e;case sE:o=9;break e;case Xp:o=11;break e;case Zp:o=14;break e;case jr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=mn(22,t,r,e),t.elementType=oE,t.lanes=n,t.stateNode={isHidden:!1},t}function bd(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Nd(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Om(t,e,n,r,i,s,o,l,c){return t=new YR(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ym(s),t}function JR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function JT(t){if(!t)return fi;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ht(n))return JE(t,n,e)}return e}function XT(t,e,n,r,i,s,o,l,c){return t=Om(n,r,!0,t,i,s,o,l,c),t.context=JT(null),n=t.current,r=Ot(),i=ii(n),s=fr(r,i),s.callback=e??null,ni(n,s,i),t.current.lanes=i,_l(t,i,r),Wt(t,r),t}function Xu(t,e,n,r){var i=e.current,s=Ot(),o=ii(i);return n=JT(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(Nn(t,i,o,s),Ic(t,i,o)),o}function mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lm(t,e){iv(t,e),(t=t.alternate)&&iv(t,e)}function XR(){return null}var ZT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}Zu.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Xu(t,e,null,null)};Zu.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){Xu(null,t,null,null)}),e[yr]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=CE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&NE(t)}};function Mm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sv(){}function ZR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=mu(o);s.call(u)}}var o=XT(e,r,t,0,null,!1,!1,"",sv);return t._reactRootContainer=o,t[yr]=o.current,qa(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=mu(c);l.call(u)}}var c=Om(t,0,!1,null,null,!1,!1,"",sv);return t._reactRootContainer=c,t[yr]=c.current,qa(t.nodeType===8?t.parentNode:t),Ji(function(){Xu(e,c,n,r)}),c}function th(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=mu(o);l.call(c)}}Xu(e,o,t,i)}else o=ZR(n,e,t,i,r);return mu(o)}RE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(nm(e,n|1),Wt(e,qe()),!(ge&6)&&(oo=qe()+500,Ii()))}break;case 13:Ji(function(){var r=_r(t,1);if(r!==null){var i=Ot();Nn(r,t,1,i)}}),Lm(t,1)}};rm=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=Ot();Nn(e,t,134217728,n)}Lm(t,134217728)}};PE=function(t){if(t.tag===13){var e=ii(t),n=_r(t,e);if(n!==null){var r=Ot();Nn(n,t,e,r)}Lm(t,e)}};CE=function(){return ve};bE=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};xf=function(t,e,n){switch(e){case"input":if(wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wu(r);if(!i)throw Error(U(90));lE(r),wf(r,i)}}}break;case"textarea":uE(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};yE=Cm;_E=Ji;var eP={usingClientEntryPoint:!1,Events:[wl,bs,Wu,mE,gE,Cm]},ta={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tP={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=EE(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||XR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{$u=oc.inject(tP),Yn=oc}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eP;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mm(e))throw Error(U(200));return JR(t,e,null,n)};an.createRoot=function(t,e){if(!Mm(t))throw Error(U(299));var n=!1,r="",i=ZT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Om(t,1,!1,null,null,n,!1,r,i),t[yr]=e.current,qa(t.nodeType===8?t.parentNode:t),new Vm(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=EE(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return Ji(t)};an.hydrate=function(t,e,n){if(!eh(e))throw Error(U(200));return th(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Mm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=XT(e,null,t,1,n??null,i,!1,s,o),t[yr]=e.current,qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zu(e)};an.render=function(t,e,n){if(!eh(e))throw Error(U(200));return th(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!eh(t))throw Error(U(40));return t._reactRootContainer?(Ji(function(){th(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};an.unstable_batchedUpdates=Cm;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!eh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return th(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function eI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eI)}catch(t){console.error(t)}}eI(),eE.exports=an;var nP=eE.exports,ov=nP;ff.createRoot=ov.createRoot,ff.hydrateRoot=ov.hydrateRoot;const rP="modulepreload",iP=function(t){return"/"+t},av={},ne=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=iP(s),s in av)return;av[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":rP,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tl.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const lv="popstate";function sP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return op("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gu(i)}return aP(e,n,null,t)}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oP(){return Math.random().toString(36).substr(2,8)}function cv(t,e){return{usr:t.state,key:t.key,idx:e}}function op(t,e,n,r){return n===void 0&&(n=null),tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:n,key:e&&e.key||r||oP()})}function gu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Qr.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(tl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Qr.Pop;let C=d(),E=C==null?null:C-u;u=C,c&&c({action:l,location:x.location,delta:E})}function m(C,E){l=Qr.Push;let v=op(x.location,C,E);n&&n(v,C),u=d()+1;let S=cv(v,u),O=x.createHref(v);try{o.pushState(S,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&c&&c({action:l,location:x.location,delta:1})}function w(C,E){l=Qr.Replace;let v=op(x.location,C,E);n&&n(v,C),u=d();let S=cv(v,u),O=x.createHref(v);o.replaceState(S,"",O),s&&c&&c({action:l,location:x.location,delta:0})}function P(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:gu(C);return v=v.replace(/ $/,"%20"),Ke(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let x={get action(){return l},get location(){return t(i,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(lv,f),c=C,()=>{i.removeEventListener(lv,f),c=null}},createHref(C){return e(i,C)},createURL:P,encodeLocation(C){let E=P(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:w,go(C){return o.go(C)}};return x}var uv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(uv||(uv={}));function lP(t,e,n){return n===void 0&&(n="/"),cP(t,e,n,!1)}function cP(t,e,n,r){let i=typeof e=="string"?yo(e):e,s=Um(i.pathname||"/",n);if(s==null)return null;let o=tI(t);uP(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=EP(s);l=vP(o[c],u,r)}return l}function tI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ke(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=oi([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),tI(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yP(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of nI(s.path))i(s,o,c)}),e}function nI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nI(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function uP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_P(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hP=/^:[\w-]+$/,dP=3,fP=2,pP=1,mP=10,gP=-2,hv=t=>t==="*";function yP(t,e){let n=t.split("/"),r=n.length;return n.some(hv)&&(r+=gP),e&&(r+=fP),n.filter(i=>!hv(i)).reduce((i,s)=>i+(hP.test(s)?dP:s===""?pP:mP),r)}function _P(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=dv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=dv({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:oi([s,f.pathname]),pathnameBase:kP(oi([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=oi([s,f.pathnameBase]))}return o}function dv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let x=l[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const P=l[f];return w&&!P?u[m]=void 0:u[m]=(P||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function EP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Um(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const TP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,IP=t=>TP.test(t);function SP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yo(t):t,s;if(n)if(IP(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),jm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=fv(n.substring(1),"/"):s=fv(n,e)}else s=e;return{pathname:s,search:xP(r),hash:RP(i)}}function fv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function AP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fm(t,e){let n=AP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $m(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yo(t):(i=tl({},t),Ke(!i.pathname||!i.pathname.includes("?"),Dd("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),Dd("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),Dd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let c=SP(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),kP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rI=["post","put","patch","delete"];new Set(rI);const CP=["get",...rI];new Set(CP);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nl.apply(this,arguments)}const Bm=D.createContext(null),bP=D.createContext(null),Si=D.createContext(null),nh=D.createContext(null),rr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),iI=D.createContext(null);function NP(t,e){let{relative:n}=e===void 0?{}:e;_o()||Ke(!1);let{basename:r,navigator:i}=D.useContext(Si),{hash:s,pathname:o,search:l}=oI(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:oi([r,o])),i.createHref({pathname:c,search:l,hash:s})}function _o(){return D.useContext(nh)!=null}function vo(){return _o()||Ke(!1),D.useContext(nh).location}function sI(t){D.useContext(Si).static||D.useLayoutEffect(t)}function zm(){let{isDataRoute:t}=D.useContext(rr);return t?KP():DP()}function DP(){_o()||Ke(!1);let t=D.useContext(Bm),{basename:e,future:n,navigator:r}=D.useContext(Si),{matches:i}=D.useContext(rr),{pathname:s}=vo(),o=JSON.stringify(Fm(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return sI(()=>{l.current=!0}),D.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=$m(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:oi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const OP=D.createContext(null);function LP(t){let e=D.useContext(rr).outlet;return e&&D.createElement(OP.Provider,{value:t},e)}function w6(){let{matches:t}=D.useContext(rr),e=t[t.length-1];return e?e.params:{}}function oI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Si),{matches:i}=D.useContext(rr),{pathname:s}=vo(),o=JSON.stringify(Fm(i,r.v7_relativeSplatPath));return D.useMemo(()=>$m(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function VP(t,e){return MP(t,e)}function MP(t,e,n,r){_o()||Ke(!1);let{navigator:i}=D.useContext(Si),{matches:s}=D.useContext(rr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=vo(),d;if(e){var f;let C=typeof e=="string"?yo(e):e;c==="/"||(f=C.pathname)!=null&&f.startsWith(c)||Ke(!1),d=C}else d=u;let m=d.pathname||"/",w=m;if(c!=="/"){let C=c.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=lP(t,{pathname:w}),x=BP(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:oi([c,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:oi([c,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&x?D.createElement(nh.Provider,{value:{location:nl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qr.Pop}},x):x}function jP(){let t=qP(),e=PP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const UP=D.createElement(jP,null);class FP extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(rr.Provider,{value:this.props.routeContext},D.createElement(iI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $P(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Bm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(rr.Provider,{value:e},r)}function BP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Ke(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:w}=n,P=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||P){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let w,P=!1,x=null,C=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||UP,c&&(u<0&&m===0?(GP("route-fallback",!1),P=!0,C=null):u===m&&(P=!0,C=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),v=()=>{let S;return w?S=x:P?S=C:f.route.Component?S=D.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,D.createElement($P,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?D.createElement(FP,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var aI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(aI||{}),yu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yu||{});function zP(t){let e=D.useContext(Bm);return e||Ke(!1),e}function HP(t){let e=D.useContext(bP);return e||Ke(!1),e}function WP(t){let e=D.useContext(rr);return e||Ke(!1),e}function lI(t){let e=WP(),n=e.matches[e.matches.length-1];return n.route.id||Ke(!1),n.route.id}function qP(){var t;let e=D.useContext(iI),n=HP(yu.UseRouteError),r=lI(yu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function KP(){let{router:t}=zP(aI.UseNavigateStable),e=lI(yu.UseNavigateStable),n=D.useRef(!1);return sI(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nl({fromRouteId:e},s)))},[t,e])}const pv={};function GP(t,e,n){!e&&!pv[t]&&(pv[t]=!0)}function QP(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function _u(t){let{to:e,replace:n,state:r,relative:i}=t;_o()||Ke(!1);let{future:s,static:o}=D.useContext(Si),{matches:l}=D.useContext(rr),{pathname:c}=vo(),u=zm(),d=$m(e,Fm(l,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return D.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Hm(t){return LP(t.context)}function J(t){Ke(!1)}function YP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1,future:l}=t;_o()&&Ke(!1);let c=e.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:c,navigator:s,static:o,future:nl({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=yo(r));let{pathname:d="/",search:f="",hash:m="",state:w=null,key:P="default"}=r,x=D.useMemo(()=>{let C=Um(d,c);return C==null?null:{location:{pathname:C,search:f,hash:m,state:w,key:P},navigationType:i}},[c,d,f,m,w,P,i]);return x==null?null:D.createElement(Si.Provider,{value:u},D.createElement(nh.Provider,{children:n,value:x}))}function JP(t){let{children:e,location:n}=t;return VP(ap(e),n)}new Promise(()=>{});function ap(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,ap(r.props.children,s));return}r.type!==J&&Ke(!1),!r.props.index||!r.props.children||Ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ap(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lp(){return lp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lp.apply(this,arguments)}function XP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function eC(t,e){return t.button===0&&(!e||e==="_self")&&!ZP(t)}const tC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nC="6";try{window.__reactRouterVersion=nC}catch{}const rC="startTransition",mv=Wk[rC];function iC(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=sP({window:i,v5Compat:!0}));let o=s.current,[l,c]=D.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=D.useCallback(f=>{u&&mv?mv(()=>c(f)):c(f)},[c,u]);return D.useLayoutEffect(()=>o.listen(d),[o,d]),D.useEffect(()=>QP(r),[r]),D.createElement(YP,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const sC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qe=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=e,m=XP(e,tC),{basename:w}=D.useContext(Si),P,x=!1;if(typeof u=="string"&&oC.test(u)&&(P=u,sC))try{let S=new URL(window.location.href),O=u.startsWith("//")?new URL(S.protocol+u):new URL(u),j=Um(O.pathname,w);O.origin===S.origin&&j!=null?u=j+O.search+O.hash:x=!0}catch{}let C=NP(u,{relative:i}),E=aC(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||E(S)}return D.createElement("a",lp({},m,{href:P||C,onClick:x||s?r:v,ref:n,target:c}))});var gv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gv||(gv={}));var yv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(yv||(yv={}));function aC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,c=zm(),u=vo(),d=oI(t,{relative:o});return D.useCallback(f=>{if(eC(f,n)){f.preventDefault();let m=r!==void 0?r:gu(u)===gu(d);c(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,d,r,i,n,t,s,o,l])}let lC={data:""},cC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||lC},uC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,hC=/\/\*[^]*?\*\/|  +/g,_v=/\n+/g,Br=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Br(o,s):s+"{"+Br(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Br(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Br.p?Br.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},sr={},cI=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+cI(t[n]);return e}return t},dC=(t,e,n,r,i)=>{let s=cI(t),o=sr[s]||(sr[s]=(c=>{let u=0,d=11;for(;u<c.length;)d=101*d+c.charCodeAt(u++)>>>0;return"go"+d})(s));if(!sr[o]){let c=s!==t?t:(u=>{let d,f,m=[{}];for(;d=uC.exec(u.replace(hC,""));)d[4]?m.shift():d[3]?(f=d[3].replace(_v," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(_v," ").trim();return m[0]})(t);sr[o]=Br(i?{["@keyframes "+o]:c}:c,n?"":"."+o)}let l=n&&sr.g?sr.g:null;return n&&(sr.g=sr[o]),((c,u,d,f)=>{f?u.data=u.data.replace(f,c):u.data.indexOf(c)===-1&&(u.data=d?c+u.data:u.data+c)})(sr[o],e,r,l),o},fC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":Br(l,""):l===!1?"":l}return r+i+(o??"")},"");function rh(t){let e=this||{},n=t.call?t(e.p):t;return dC(n.unshift?n.raw?fC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,cC(e.target),e.g,e.o,e.k)}let uI,cp,up;rh.bind({g:1});let wr=rh.bind({k:1});function pC(t,e,n,r){Br.p=e,uI=t,cp=n,up=r}function Ai(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),c=l.className||i.className;n.p=Object.assign({theme:cp&&cp()},l),n.o=/ *go\d+/.test(c),l.className=rh.apply(n,r)+(c?" "+c:""),e&&(l.ref=o);let u=t;return t[0]&&(u=l.as||t,delete l.as),up&&u[0]&&up(l),uI(u,l)}return e?e(i):i}}var mC=t=>typeof t=="function",vu=(t,e)=>mC(t)?t(e):t,gC=(()=>{let t=0;return()=>(++t).toString()})(),hI=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),yC=20,Wm="default",dI=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return dI(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Cc=[],fI={toasts:[],pausedAt:void 0,settings:{toastLimit:yC}},Gn={},pI=(t,e=Wm)=>{Gn[e]=dI(Gn[e]||fI,t),Cc.forEach(([n,r])=>{n===e&&r(Gn[e])})},mI=t=>Object.keys(Gn).forEach(e=>pI(t,e)),_C=t=>Object.keys(Gn).find(e=>Gn[e].toasts.some(n=>n.id===t)),ih=(t=Wm)=>e=>{pI(e,t)},vC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},wC=(t={},e=Wm)=>{let[n,r]=D.useState(Gn[e]||fI),i=D.useRef(Gn[e]);D.useEffect(()=>(i.current!==Gn[e]&&r(Gn[e]),Cc.push([e,r]),()=>{let o=Cc.findIndex(([l])=>l===e);o>-1&&Cc.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,c,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((c=t[o.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||vC[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},EC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||gC()}),Tl=t=>(e,n)=>{let r=EC(e,t,n);return ih(r.toasterId||_C(r.id))({type:2,toast:r}),r.id},ye=(t,e)=>Tl("blank")(t,e);ye.error=Tl("error");ye.success=Tl("success");ye.loading=Tl("loading");ye.custom=Tl("custom");ye.dismiss=(t,e)=>{let n={type:3,toastId:t};e?ih(e)(n):mI(n)};ye.dismissAll=t=>ye.dismiss(void 0,t);ye.remove=(t,e)=>{let n={type:4,toastId:t};e?ih(e)(n):mI(n)};ye.removeAll=t=>ye.remove(void 0,t);ye.promise=(t,e,n)=>{let r=ye.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?vu(e.success,i):void 0;return s?ye.success(s,{id:r,...n,...n==null?void 0:n.success}):ye.dismiss(r),i}).catch(i=>{let s=e.error?vu(e.error,i):void 0;s?ye.error(s,{id:r,...n,...n==null?void 0:n.error}):ye.dismiss(r)}),t};var TC=1e3,IC=(t,e="default")=>{let{toasts:n,pausedAt:r}=wC(t,e),i=D.useRef(new Map).current,s=D.useCallback((f,m=TC)=>{if(i.has(f))return;let w=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,w)},[]);D.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(w=>{if(w.duration===1/0)return;let P=(w.duration||0)+w.pauseDuration-(f-w.createdAt);if(P<0){w.visible&&ye.dismiss(w.id);return}return setTimeout(()=>ye.dismiss(w.id,e),P)});return()=>{m.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=D.useCallback(ih(e),[e]),l=D.useCallback(()=>{o({type:5,time:Date.now()})},[o]),c=D.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),u=D.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=D.useCallback((f,m)=>{let{reverseOrder:w=!1,gutter:P=8,defaultPosition:x}=m||{},C=n.filter(S=>(S.position||x)===(f.position||x)&&S.height),E=C.findIndex(S=>S.id===f.id),v=C.filter((S,O)=>O<E&&S.visible).length;return C.filter(S=>S.visible).slice(...w?[v+1]:[0,v]).reduce((S,O)=>S+(O.height||0)+P,0)},[n]);return D.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},SC=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,AC=wr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kC=wr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xC=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${SC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${AC} 0.15s ease-out forwards;
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
    animation: ${kC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,RC=wr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,PC=Ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${RC} 1s linear infinite;
`,CC=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,bC=wr`
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
}`,NC=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${CC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${bC} 0.2s ease-out forwards;
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
`,DC=Ai("div")`
  position: absolute;
`,OC=Ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,LC=wr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,VC=Ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${LC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,MC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(VC,null,e):e:n==="blank"?null:D.createElement(OC,null,D.createElement(PC,{...r}),n!=="loading"&&D.createElement(DC,null,n==="error"?D.createElement(xC,{...r}):D.createElement(NC,{...r})))},jC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,UC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,FC="0%{opacity:0;} 100%{opacity:1;}",$C="0%{opacity:1;} 100%{opacity:0;}",BC=Ai("div")`
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
`,zC=Ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,HC=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=hI()?[FC,$C]:[jC(n),UC(n)];return{animation:e?`${wr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${wr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},WC=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?HC(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(MC,{toast:t}),o=D.createElement(zC,{...t.ariaProps},vu(t.message,t));return D.createElement(BC,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});pC(D.createElement);var qC=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let c=o.getBoundingClientRect().height;r(t,c)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},KC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:hI()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},GC=rh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ac=16,QC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:c,handlers:u}=IC(n,s);return D.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:ac,left:ac,right:ac,bottom:ac,pointerEvents:"none",...o},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(d=>{let f=d.position||e,m=u.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),w=KC(f,m);return D.createElement(qC,{id:d.id,key:d.id,onHeightUpdate:u.updateHeight,className:d.visible?GC:"",style:w},d.type==="custom"?vu(d.message,d):i?i(d):D.createElement(WC,{toast:d,position:f}))}))},Od=ye,YC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const JC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pe=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...c},u)=>D.createElement("svg",{ref:u,...YC,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${JC(t)}`,...c},[...e.map(([d,f])=>D.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},XC=Pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),ZC=Pe("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),vv=Pe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),wv=Pe("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),Ev=Pe("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Tv=Pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),eb=Pe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),tb=Pe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),nb=Pe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),rb=Pe("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),ib=Pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),sb=Pe("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]),ob=Pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),Iv=Pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),ab=Pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),lb=Pe("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Sv=Pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),gI=Pe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),yI=Pe("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),cb=Pe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Av=Pe("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),ub=Pe("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),hb=Pe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),db=Pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fb=Pe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),pb=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[d],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_I(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw new gb;const m=s<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),f!==64){const P=u<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yb=function(t){const e=_I(t);return vI.encodeByteArray(e,!0)},wu=function(t){return yb(t).replace(/\./g,"")},wI=function(t){try{return vI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _b(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vb=()=>_b().__FIREBASE_DEFAULTS__,wb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Eb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wI(t[1]);return e&&JSON.parse(e)},sh=()=>{try{return pb()||vb()||wb()||Eb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EI=t=>{var e,n;return(n=(e=sh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},TI=t=>{const e=EI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},II=()=>{var t;return(t=sh())==null?void 0:t.config},SI=t=>{var e;return(e=sh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function AI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[wu(JSON.stringify(n)),wu(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ib(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function Sb(){var e;const t=(e=sh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ab(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rb(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pb(){return!Sb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kI(){try{return typeof indexedDB=="object"}catch{return!1}}function xI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function Cb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bb,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Nb(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,l,r)}}function Nb(t,e){return t.replace(Db,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Db=/\{\$([^}]+)}/g;function Ob(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kv(s)&&kv(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Lb(t,e){const n=new Vb(t,e);return n.subscribe.bind(n)}class Vb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ld),i.error===void 0&&(i.error=Ld),i.complete===void 0&&(i.complete=Ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ld(){}/**
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
 */function se(t){return t&&t._delegate?t._delegate:t}/**
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
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qm(t){return(await fetch(t,{credentials:"include"})).ok}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fb(e))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vi){return this.instances.has(e)}getOptions(e=Vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ub(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vi){return this.component?this.component.multipleInstances?e:Vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ub(t){return t===Vi?void 0:t}function Fb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Bb={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},zb=he.INFO,Hb={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Wb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Hb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Km{constructor(e){this.name=e,this._logLevel=zb,this._logHandler=Wb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const qb=(t,e)=>e.some(n=>t instanceof n);let xv,Rv;function Kb(){return xv||(xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gb(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RI=new WeakMap,hp=new WeakMap,PI=new WeakMap,Vd=new WeakMap,Gm=new WeakMap;function Qb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&RI.set(n,t)}).catch(()=>{}),Gm.set(e,t),e}function Yb(t){if(hp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hp.set(t,e)}let dp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jb(t){dp=t(dp)}function Xb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Md(this),e,...n);return PI.set(r,e.sort?e.sort():[e]),pr(r)}:Gb().includes(t)?function(...e){return t.apply(Md(this),e),pr(RI.get(this))}:function(...e){return pr(t.apply(Md(this),e))}}function Zb(t){return typeof t=="function"?Xb(t):(t instanceof IDBTransaction&&Yb(t),qb(t,Kb())?new Proxy(t,dp):t)}function pr(t){if(t instanceof IDBRequest)return Qb(t);if(Vd.has(t))return Vd.get(t);const e=Zb(t);return e!==t&&(Vd.set(t,e),Gm.set(e,t)),e}const Md=t=>Gm.get(t);function oh(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pr(o.result),c.oldVersion,c.newVersion,pr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function jd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),pr(n).then(()=>{})}const eN=["get","getKey","getAll","getAllKeys","count"],tN=["put","add","delete","clear"],Ud=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eN.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Ud.set(e,s),s}Jb(t=>({...t,get:(e,n,r)=>Pv(e,n)||t.get(e,n,r),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fp="@firebase/app",Cv="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Km("@firebase/app"),iN="@firebase/app-compat",sN="@firebase/analytics-compat",oN="@firebase/analytics",aN="@firebase/app-check-compat",lN="@firebase/app-check",cN="@firebase/auth",uN="@firebase/auth-compat",hN="@firebase/database",dN="@firebase/data-connect",fN="@firebase/database-compat",pN="@firebase/functions",mN="@firebase/functions-compat",gN="@firebase/installations",yN="@firebase/installations-compat",_N="@firebase/messaging",vN="@firebase/messaging-compat",wN="@firebase/performance",EN="@firebase/performance-compat",TN="@firebase/remote-config",IN="@firebase/remote-config-compat",SN="@firebase/storage",AN="@firebase/storage-compat",kN="@firebase/firestore",xN="@firebase/ai",RN="@firebase/firestore-compat",PN="firebase",CN="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="[DEFAULT]",bN={[fp]:"fire-core",[iN]:"fire-core-compat",[oN]:"fire-analytics",[sN]:"fire-analytics-compat",[lN]:"fire-app-check",[aN]:"fire-app-check-compat",[cN]:"fire-auth",[uN]:"fire-auth-compat",[hN]:"fire-rtdb",[dN]:"fire-data-connect",[fN]:"fire-rtdb-compat",[pN]:"fire-fn",[mN]:"fire-fn-compat",[gN]:"fire-iid",[yN]:"fire-iid-compat",[_N]:"fire-fcm",[vN]:"fire-fcm-compat",[wN]:"fire-perf",[EN]:"fire-perf-compat",[TN]:"fire-rc",[IN]:"fire-rc-compat",[SN]:"fire-gcs",[AN]:"fire-gcs-compat",[kN]:"fire-fst",[RN]:"fire-fst-compat",[xN]:"fire-vertex","fire-js":"fire-js",[PN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Map,NN=new Map,mp=new Map;function bv(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(mp.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;mp.set(e,t);for(const n of Eu.values())bv(n,t);for(const n of NN.values())bv(n,t);return!0}function hs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new cs("app","Firebase",DN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=CN;function CI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(n||(n=II()),!n)throw ai.create("no-options");const s=Eu.get(i);if(s){if(pi(n,s.options)&&pi(r,s.config))return s;throw ai.create("duplicate-app",{appName:i})}const o=new $b(i);for(const c of mp.values())o.addComponent(c);const l=new ON(n,r,o);return Eu.set(i,l),l}function ah(t=pp){const e=Eu.get(t);if(!e&&t===pp&&II())return CI();if(!e)throw ai.create("no-app",{appName:t});return e}function qt(t,e,n){let r=bN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(o.join(" "));return}Ln(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const LN="firebase-heartbeat-database",VN=1,rl="firebase-heartbeat-store";let Fd=null;function bI(){return Fd||(Fd=oh(LN,VN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ai.create("idb-open",{originalErrorMessage:t.message})})),Fd}async function MN(t){try{const n=(await bI()).transaction(rl),r=await n.objectStore(rl).get(NI(t));return await n.done,r}catch(e){if(e instanceof Mn)Er.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function Nv(t,e){try{const r=(await bI()).transaction(rl,"readwrite");await r.objectStore(rl).put(e,NI(t)),await r.done}catch(n){if(n instanceof Mn)Er.warn(n.message);else{const r=ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function NI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jN=1024,UN=30;class FN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>UN){const o=zN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dv(),{heartbeatsToSend:r,unsentEntries:i}=$N(this._heartbeatsCache.heartbeats),s=wu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Er.warn(n),""}}}function Dv(){return new Date().toISOString().substring(0,10)}function $N(t,e=jN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ov(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ov(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kI()?xI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Nv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Nv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ov(t){return wu(JSON.stringify({version:2,heartbeats:t})).length}function zN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){Ln(new En("platform-logger",e=>new nN(e),"PRIVATE")),Ln(new En("heartbeat",e=>new FN(e),"PRIVATE")),qt(fp,Cv,t),qt(fp,Cv,"esm2020"),qt("fire-js","")}HN("");function DI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WN=DI,OI=new cs("auth","Firebase",DI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Km("@firebase/auth");function qN(t,...e){Tu.logLevel<=he.WARN&&Tu.warn(`Auth (${ds}): ${t}`,...e)}function bc(t,...e){Tu.logLevel<=he.ERROR&&Tu.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw Ym(t,...e)}function Kt(t,...e){return Ym(t,...e)}function Qm(t,e,n){const r={...WN(),[e]:n};return new cs("auth","Firebase",r).create(e,{appName:t.name})}function Lt(t){return Qm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),Qm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return OI.create(t,...e)}function z(t,e,...n){if(!t)throw Ym(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bc(e),new Error(e)}function Tr(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Jm(){return Lv()==="http:"||Lv()==="https:"}function Lv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jm()||kb()||"connection"in navigator)?navigator.onLine:!0}function GN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ib()||xb()}get(){return KN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e){Tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JN=new Il(3e4,6e4);function st(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ot(t,e,n,r,i={}){return VI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return Ab()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),LI.fetch()(await MI(t,t.config.apiHost,n,l),u)})}async function VI(t,e,n){t._canInitEmulator=!1;const r={...QN,...e};try{const i=new ZN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qm(t,d,u);Tn(t,d)}}catch(i){if(i instanceof Mn)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function Rr(t,e,n,r,i={}){const s=await ot(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function MI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Xm(t.config,i):`${t.config.apiScheme}://${i}`;return YN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function XN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),JN.get())})}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){return t!==void 0&&t.getResponse!==void 0}function Mv(t){return t!==void 0&&t.enterprise!==void 0}class jI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(t){return(await ot(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function UI(t,e){return ot(t,"GET","/v2/recaptchaConfig",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(t,e){return ot(t,"POST","/v1/accounts:delete",e)}async function n2(t,e){return ot(t,"POST","/v1/accounts:update",e)}async function Iu(t,e){return ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r2(t,e=!1){const n=se(t),r=await n.getIdToken(e),i=ch(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pa($d(i.auth_time)),issuedAtTime:Pa($d(i.iat)),expirationTime:Pa($d(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $d(t){return Number(t)*1e3}function ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bc("JWT malformed, contained fewer than 3 sections"),null;try{const i=wI(n);return i?JSON.parse(i):(bc("Failed to decode base64 JWT payload"),null)}catch(i){return bc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jv(t){const e=ch(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&i2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function i2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Xi(t,Iu(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?FI(i.providerUserInfo):[],o=a2(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new gp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function o2(t){const e=se(t);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(t,e){const n=await VI(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await MI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(c.credentials="include"),LI.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c2(t,e){return ot(t,"POST","/v2/accounts:revokeToken",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=jv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hs;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new s2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r2(this,e)}reload(){return o2(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await Xi(this,t2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:w,providerData:P,stsTokenManager:x}=n;z(f&&x,e,"internal-error");const C=Hs.fromJSON(this.name,x);z(typeof f=="string",e,"internal-error"),Mr(r,e.name),Mr(i,e.name),z(typeof m=="boolean",e,"internal-error"),z(typeof w=="boolean",e,"internal-error"),Mr(s,e.name),Mr(o,e.name),Mr(l,e.name),Mr(c,e.name),Mr(u,e.name),Mr(d,e.name);const E=new Pn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:C,createdAt:u,lastLoginAt:d});return P&&Array.isArray(P)&&(E.providerData=P.map(v=>({...v}))),c&&(E._redirectEventId=c),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hs;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?FI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hs;l.updateFromIdToken(r);const c=new Pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Map;function dr(t){Tr(t instanceof Function,"Expected a class definition");let e=Uv.get(t);return e?(Tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$I.type="NONE";const Fv=$I;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Iu(this.auth,{idToken:e}).catch(()=>{});return n?Pn._fromGetAccountInfoResponse(this.auth,n,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(dr(Fv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dr(Fv);const o=Nc(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await Iu(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Pn._fromGetAccountInfoResponse(e,m,d)}else f=Pn._fromJSON(e,d);u!==s&&(l=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ws(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(BI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KI(e))return"Blackberry";if(GI(e))return"Webos";if(zI(e))return"Safari";if((e.includes("chrome/")||HI(e))&&!e.includes("edge/"))return"Chrome";if(qI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function BI(t=xt()){return/firefox\//i.test(t)}function zI(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HI(t=xt()){return/crios\//i.test(t)}function WI(t=xt()){return/iemobile/i.test(t)}function qI(t=xt()){return/android/i.test(t)}function KI(t=xt()){return/blackberry/i.test(t)}function GI(t=xt()){return/webos/i.test(t)}function Zm(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function u2(t=xt()){var e;return Zm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function h2(){return Rb()&&document.documentMode===10}function QI(t=xt()){return Zm(t)||qI(t)||GI(t)||KI(t)||/windows phone/i.test(t)||WI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e=[]){let n;switch(t){case"Browser":n=$v(xt());break;case"Worker":n=`${$v(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class d2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function f2(t,e={}){return ot(t,"GET","/v2/passwordPolicy",st(t,e))}/**
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
 */const p2=6;class m2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??p2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bv(this),this.idTokenSubscription=new Bv(this),this.beforeStateQueue=new d2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=OI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Iu(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Lt(this));const n=e?se(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f2(this),n=new m2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&qN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ft(t){return se(t)}class Bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lb(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y2(t){Sl=t}function eg(t){return Sl.loadJS(t)}function _2(){return Sl.recaptchaV2Script}function v2(){return Sl.recaptchaEnterpriseScript}function w2(){return Sl.gapiScript}function JI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=500,T2=6e4,lc=1e12;class I2{constructor(e){this.auth=e,this.counter=lc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new k2(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||lc;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||lc;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||lc;return(r=this._widgets.get(n))==null||r.execute(),""}}class S2{constructor(){this.enterprise=new A2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class A2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class k2{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=x2(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},T2)},E2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function x2(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const R2="recaptcha-enterprise",Ca="NO_RECAPTCHA";class XI{constructor(e){this.type=R2,this.auth=ft(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{UI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new jI(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;Mv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ca)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S2().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Mv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=v2();c.length!==0&&(c+=l),eg(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function na(t,e,n,r=!1,i=!1){const s=new XI(t);let o;if(i)o=Ca;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function li(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await na(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await na(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await na(t,e,n);return r(t,l).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await na(t,e,n,!1,!0);return r(t,d)}return Promise.reject(c)})}else{const l=await na(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function P2(t){const e=ft(t),n=await UI(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new jI(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new XI(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(t,e){const n=hs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pi(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function b2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function N2(t,e,n){const r=ft(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ZI(e),{host:o,port:l}=D2(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(pi(u,r.config.emulator)&&pi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,us(o)?qm(`${s}//${o}${c}`):i||O2()}function ZI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function D2(t){const e=ZI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zv(o)}}}function zv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e){return ot(t,"POST","/v1/accounts:resetPassword",st(t,e))}async function V2(t,e){return ot(t,"POST","/v1/accounts:update",e)}async function M2(t,e){return ot(t,"POST","/v1/accounts:signUp",e)}async function j2(t,e){return ot(t,"POST","/v1/accounts:update",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,e){return Rr(t,"POST","/v1/accounts:signInWithPassword",st(t,e))}async function hh(t,e){return ot(t,"POST","/v1/accounts:sendOobCode",st(t,e))}async function F2(t,e){return hh(t,e)}async function $2(t,e){return hh(t,e)}async function B2(t,e){return hh(t,e)}async function z2(t,e){return hh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}async function W2(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends uh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ol(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ol(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,n,"signInWithPassword",U2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return H2(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,r,"signUpPassword",M2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return W2(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Rr(t,"POST","/v1/accounts:signInWithIdp",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="http://localhost";class Ir extends uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:q2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t,e){return ot(t,"POST","/v1/accounts:sendVerificationCode",st(t,e))}async function K2(t,e){return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e))}async function G2(t,e){const n=await Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e));if(n.temporaryProof)throw ma(t,"account-exists-with-different-credential",n);return n}const Q2={USER_NOT_FOUND:"user-not-found"};async function Y2(t,e){const n={...e,operation:"REAUTH"};return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,n),Q2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends uh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ba({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ba({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return K2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return G2(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Y2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ba({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X2(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class dh{constructor(e){const n=fa(pa(e)),r=n.apiKey??null,i=n.oobCode??null,s=J2(n.mode??null);z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=X2(e);try{return new dh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return ol._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dh.parseLink(n);return z(r,"argument-error"),ol._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class To extends Eo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Dc extends To{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),Ir._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Ir._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Dc.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Dc.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Dc(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function e1(t,e){return Rr(t,"POST","/v1/accounts:signUp",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=Wv(r);return new tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wv(r);return new tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E6(t){var i;if(Xe(t.app))return Promise.reject(Lt(t));const e=ft(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new tr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await e1(e,{returnSecureToken:!0}),r=await tr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Mn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Su.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Su(e,n,r,i)}}function t1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Su._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T6(t,e){const n=se(t);await fh(!0,n,e);const{providerUserInfo:r}=await n2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=n1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function r1(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",r)}async function fh(t,e,n){await sl(e);const r=n1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(t,e,n=!1){const{auth:r}=t;if(Xe(r.app))return Promise.reject(Lt(r));const i="reauthenticate";try{const s=await Xi(t,t1(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=ch(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e,n=!1){if(Xe(t.app))return Promise.reject(Lt(t));const r="signIn",i=await t1(t,r,e),s=await tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ph(t,e){return i1(ft(t),e)}async function eD(t,e){const n=se(t);return await fh(!1,n,e.providerId),r1(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(t,e){return Rr(t,"POST","/v1/accounts:signInWithCustomToken",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I6(t,e){if(Xe(t.app))return Promise.reject(Lt(t));const n=ft(t),r=await tD(n,{token:e,returnSecureToken:!0}),i=await tr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e,n){var r;z(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),z(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t){const e=ft(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function S6(t,e,n){const r=ft(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&mh(r,i,n),await li(r,i,"getOobCode",$2,"EMAIL_PASSWORD_PROVIDER")}async function A6(t,e,n){await L2(se(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tg(t),r})}async function k6(t,e){await j2(se(t),{oobCode:e})}async function nD(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t),o=await li(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e1,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&tg(t),c}),l=await tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function rD(t,e,n){return Xe(t.app)?Promise.reject(Lt(t)):ph(se(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x6(t,e,n){const r=ft(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){z(l.handleCodeInApp,r,"argument-error"),l&&mh(r,o,l)}s(i,n),await li(r,i,"getOobCode",B2,"EMAIL_PASSWORD_PROVIDER")}function R6(t,e){const n=dh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function P6(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=se(t),i=fs.credentialWithLink(e,n||il());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ph(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e){return ot(t,"POST","/v1/accounts:createAuthUri",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C6(t,e){const n=Jm()?il():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await iD(se(t),r);return i||[]}async function b6(t,e){const n=se(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&mh(n.auth,i,e);const{email:s}=await F2(n.auth,i);s!==t.email&&await t.reload()}async function N6(t,e,n){const r=se(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&mh(r.auth,s,n);const{email:o}=await z2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(t,e){return ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=se(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xi(r,sD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function O6(t,e){const n=se(t);return Xe(n.auth.app)?Promise.reject(Lt(n.auth)):s1(n,e,null)}function L6(t,e){return s1(se(t),null,e)}async function s1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Xi(t,V2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=ch(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Ks(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new aD(r,n);case"github.com":return new lD(r,n);case"google.com":return new cD(r,n);case"twitter.com":return new uD(r,n,t.screenName||null);case"custom":case"anonymous":return new Ks(r,null);default:return new Ks(r,e,n)}}class Ks{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class o1 extends Ks{constructor(e,n,r,i){super(e,n,r),this.username=i}}class aD extends Ks{constructor(e,n){super(e,"facebook.com",n)}}class lD extends o1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class cD extends Ks{constructor(e,n){super(e,"google.com",n)}}class uD extends o1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function V6(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:oD(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t,e){return se(t).setPersistence(e)}function dD(t,e,n,r){return se(t).onIdTokenChanged(e,n,r)}function fD(t,e,n){return se(t).beforeAuthStateChanged(e,n)}function pD(t,e,n,r){return se(t).onAuthStateChanged(e,n,r)}function mD(t){return se(t).signOut()}function M6(t,e){return ft(t).revokeAccessToken(e)}async function j6(t){return se(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t,e){return ot(t,"POST","/v2/accounts/mfaEnrollment:start",st(t,e))}const Au="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Au,"1"),this.storage.removeItem(Au),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=1e3,yD=10;class l1 extends a1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=QI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);h2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l1.type="LOCAL";const c1=l1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1 extends a1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u1.type="SESSION";const h1=u1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await _D(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=yh("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function wD(t){Ye().location.href=t}/**
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
 */function ng(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function ED(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ID(){return ng()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="firebaseLocalStorageDb",SD=1,ku="firebaseLocalStorage",f1="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(t,e){return t.transaction([ku],e?"readwrite":"readonly").objectStore(ku)}function AD(){const t=indexedDB.deleteDatabase(d1);return new Al(t).toPromise()}function yp(){const t=indexedDB.open(d1,SD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ku,{keyPath:f1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ku)?e(r):(r.close(),await AD(),e(await yp()))})})}async function Kv(t,e,n){const r=_h(t,!0).put({[f1]:e,value:n});return new Al(r).toPromise()}async function kD(t,e){const n=_h(t,!1).get(e),r=await new Al(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=_h(t,!0).delete(e);return new Al(n).toPromise()}const xD=800,RD=3;class p1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ng()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(ID()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ED(),!this.activeServiceWorker)return;this.sender=new vD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yp();return await Kv(e,Au,"1"),await Gv(e,Au),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_h(i,!1).getAll();return new Al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p1.type="LOCAL";const PD=p1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t,e){return ot(t,"POST","/v2/accounts/mfaSignIn:start",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=JI("rcb"),CD=new Il(3e4,6e4);class bD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ye().grecaptcha)!=null&&e.render)}load(e,n=""){return z(ND(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Vv(Ye().grecaptcha)?Promise.resolve(Ye().grecaptcha):new Promise((r,i)=>{const s=Ye().setTimeout(()=>{i(Kt(e,"network-request-failed"))},CD.get());Ye()[Bd]=()=>{Ye().clearTimeout(s),delete Ye()[Bd];const l=Ye().grecaptcha;if(!l||!Vv(l)){i(Kt(e,"internal-error"));return}const c=l.render;l.render=(u,d)=>{const f=c(u,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${_2()}?${wo({onload:Bd,render:"explicit",hl:n})}`;eg(o).catch(()=>{clearTimeout(s),i(Kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Ye().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ND(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class DD{async load(e){return new I2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="recaptcha",OD={theme:"light",type:"image"};class LD{constructor(e,n,r={...OD}){this.parameters=r,this.type=Na,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ft(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new DD:new bD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Jm()&&!ng(),this.auth,"internal-error"),await VD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await e2(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function VD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ba._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function MD(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t),i=await g1(r,e,se(n));return new m1(i,s=>ph(r,s))}async function U6(t,e,n){const r=se(t);await fh(!1,r,"phone");const i=await g1(r.auth,e,se(n));return new m1(i,s=>eD(r,s))}async function g1(t,e,n){var r;if(!t._getRecaptchaConfig())try{await P2(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){z(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await li(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Ca){z((n==null?void 0:n.type)===Na,d,"argument-error");const m=await zd(d,f,n);return qv(d,m)}return qv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{z(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;z(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await li(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===Ca){z((n==null?void 0:n.type)===Na,f,"argument-error");const w=await zd(f,m,n);return Qv(f,w)}return Qv(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await li(t,s,"sendVerificationCode",async(u,d)=>{if(d.captchaResponse===Ca){z((n==null?void 0:n.type)===Na,u,"argument-error");const f=await zd(u,d,n);return Hv(u,f)}return Hv(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function zd(t,e,n){z(n.type===Na,t,"argument-error");const r=await n.verify();z(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function kl(t,e){return e?dr(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jD(t){return i1(t.auth,new rg(t),t.bypassAuthState)}function UD(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Z2(n,new rg(t),t.bypassAuthState)}async function FD(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),r1(n,new rg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jD;case"linkViaPopup":case"linkViaRedirect":return FD;case"reauthViaPopup":case"reauthViaRedirect":return UD;default:Tn(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new Il(2e3,1e4);async function Yv(t,e,n){if(Xe(t.app))return Promise.reject(Kt(t,"operation-not-supported-in-this-environment"));const r=ft(t);lh(t,e,Eo);const i=kl(r,n);return new Yr(r,"signInViaPopup",e,i).executeNotNull()}async function F6(t,e,n){const r=se(t);lh(r.auth,e,Eo);const i=kl(r.auth,n);return new Yr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yr extends y1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=yh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$D.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="pendingRedirect",Oc=new Map;class zD extends y1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oc.get(this.auth._key());if(!e){try{const r=await HD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oc.set(this.auth._key(),e)}return this.bypassAuthState||Oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HD(t,e){const n=w1(e),r=v1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function _1(t,e){return v1(t)._set(w1(e),"true")}function WD(t,e){Oc.set(t._key(),e)}function v1(t){return dr(t._redirectPersistence)}function w1(t){return Nc(BD,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t,e,n){return KD(t,e,n)}async function KD(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t);lh(t,e,Eo),await r._initializationPromise;const i=kl(r,n);return await _1(i,r),i._openRedirect(r,e,"signInViaRedirect")}function $6(t,e,n){return GD(t,e,n)}async function GD(t,e,n){const r=se(t);lh(r.auth,e,Eo),await r.auth._initializationPromise;const i=kl(r.auth,n);await fh(!1,r,e.providerId),await _1(i,r.auth);const s=await YD(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function QD(t,e){return await ft(t)._initializationPromise,E1(t,e,!1)}async function E1(t,e,n=!1){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t),i=kl(r,e),o=await new zD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function YD(t){const e=yh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=10*60*1e3;class XD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!T1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jv(e))}saveEventToCache(e){this.cachedEventUids.add(Jv(e)),this.lastProcessedEventTime=Date.now()}}function Jv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function T1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return T1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e={}){return ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nO=/^https?/;async function rO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eO(t);for(const n of e)try{if(iO(n))return}catch{}Tn(t,"unauthorized-domain")}function iO(t){const e=il(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nO.test(n))return!1;if(tO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const sO=new Il(3e4,6e4);function Xv(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oO(t){return new Promise((e,n)=>{var i,s,o;function r(){Xv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xv(),n(Kt(t,"network-request-failed"))},timeout:sO.get()})}if((s=(i=Ye().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ye().gapi)!=null&&o.load)r();else{const l=JI("iframefcb");return Ye()[l]=()=>{gapi.load?r():n(Kt(t,"network-request-failed"))},eg(`${w2()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Lc=null,e})}let Lc=null;function aO(t){return Lc=Lc||oO(t),Lc}/**
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
 */const lO=new Il(5e3,15e3),cO="__/auth/iframe",uO="emulator/auth/iframe",hO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fO(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xm(e,uO):`https://${t.config.authDomain}/${cO}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=dO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wo(r).slice(1)}`}async function pO(t){const e=await aO(t),n=Ye().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:fO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),l=Ye().setTimeout(()=>{s(o)},lO.get());function c(){Ye().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const mO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gO=500,yO=600,_O="_blank",vO="http://localhost";class Zv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wO(t,e,n,r=gO,i=yO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...mO,width:r.toString(),height:i.toString(),top:s,left:o},u=xt().toLowerCase();n&&(l=HI(u)?_O:n),BI(u)&&(e=e||vO,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[w,P])=>`${m}${w}=${P},`,"");if(u2(u)&&l!=="_self")return EO(e||"",l),new Zv(null);const f=window.open(e||"",l,d);z(f,t,"popup-blocked");try{f.focus()}catch{}return new Zv(f)}function EO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const TO="__/auth/handler",IO="emulator/auth/handler",SO=encodeURIComponent("fac");async function e0(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof Eo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ob(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof To){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${SO}=${encodeURIComponent(c)}`:"";return`${AO(t)}?${wo(l).slice(1)}${u}`}function AO({config:t}){return t.emulator?Xm(t,IO):`https://${t.authDomain}/${TO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="webStorageSupport";class kO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h1,this._completeRedirectFn=E1,this._overrideRedirectResult=WD}async _openPopup(e,n,r,i){var o;Tr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await e0(e,n,r,il(),i);return wO(e,s,yh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await e0(e,n,r,il(),i);return wD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pO(e),r=new XD(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hd,{type:Hd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Hd];s!==void 0&&n(!!s),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return QI()||zI()||Zm()}}const xO=kO;var t0="@firebase/auth",n0="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CO(t){Ln(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YI(t)},u=new g2(r,i,s,c);return b2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new En("auth-internal",e=>{const n=ft(e.getProvider("auth").getImmediate());return(r=>new RO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(t0,n0,PO(t)),qt(t0,n0,"esm2020")}/**
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
 */const bO=5*60,NO=SI("authIdTokenMaxAge")||bO;let r0=null;const DO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NO)return;const i=n==null?void 0:n.token;r0!==i&&(r0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OO(t=ah()){const e=hs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C2(t,{popupRedirectResolver:xO,persistence:[PD,c1,h1]}),r=SI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=DO(s.toString());fD(n,o,()=>o(n.currentUser)),dD(n,l=>o(l))}}const i=EI("auth");return i&&N2(n,`http://${i}`),n}function LO(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}y2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CO("Browser");var VO="firebase",MO="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(VO,MO,"app");var i0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ci,I1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(k,R,b){for(var A=Array(arguments.length-2),me=2;me<arguments.length;me++)A[me-2]=arguments[me];return _.prototype[R].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,I){I||(I=0);const k=Array(16);if(typeof _=="string")for(var R=0;R<16;++R)k[R]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(R=0;R<16;++R)k[R]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],R=T.g[2];let b=T.g[3],A;A=_+(b^I&(R^b))+k[0]+3614090360&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(R^_&(I^R))+k[1]+3905402710&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(I^b&(_^I))+k[2]+606105819&4294967295,R=b+(A<<17&4294967295|A>>>15),A=I+(_^R&(b^_))+k[3]+3250441966&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(b^I&(R^b))+k[4]+4118548399&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(R^_&(I^R))+k[5]+1200080426&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(I^b&(_^I))+k[6]+2821735955&4294967295,R=b+(A<<17&4294967295|A>>>15),A=I+(_^R&(b^_))+k[7]+4249261313&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(b^I&(R^b))+k[8]+1770035416&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(R^_&(I^R))+k[9]+2336552879&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(I^b&(_^I))+k[10]+4294925233&4294967295,R=b+(A<<17&4294967295|A>>>15),A=I+(_^R&(b^_))+k[11]+2304563134&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(b^I&(R^b))+k[12]+1804603682&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(R^_&(I^R))+k[13]+4254626195&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(I^b&(_^I))+k[14]+2792965006&4294967295,R=b+(A<<17&4294967295|A>>>15),A=I+(_^R&(b^_))+k[15]+1236535329&4294967295,I=R+(A<<22&4294967295|A>>>10),A=_+(R^b&(I^R))+k[1]+4129170786&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^R&(_^I))+k[6]+3225465664&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(b^_))+k[11]+643717713&4294967295,R=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(R^b))+k[0]+3921069994&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(R^b&(I^R))+k[5]+3593408605&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^R&(_^I))+k[10]+38016083&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(b^_))+k[15]+3634488961&4294967295,R=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(R^b))+k[4]+3889429448&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(R^b&(I^R))+k[9]+568446438&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^R&(_^I))+k[14]+3275163606&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(b^_))+k[3]+4107603335&4294967295,R=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(R^b))+k[8]+1163531501&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(R^b&(I^R))+k[13]+2850285829&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^R&(_^I))+k[2]+4243563512&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^I&(b^_))+k[7]+1735328473&4294967295,R=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(R^b))+k[12]+2368359562&4294967295,I=R+(A<<20&4294967295|A>>>12),A=_+(I^R^b)+k[5]+4294588738&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^R)+k[8]+2272392833&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^I)+k[11]+1839030562&4294967295,R=b+(A<<16&4294967295|A>>>16),A=I+(R^b^_)+k[14]+4259657740&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(I^R^b)+k[1]+2763975236&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^R)+k[4]+1272893353&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^I)+k[7]+4139469664&4294967295,R=b+(A<<16&4294967295|A>>>16),A=I+(R^b^_)+k[10]+3200236656&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(I^R^b)+k[13]+681279174&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^R)+k[0]+3936430074&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^I)+k[3]+3572445317&4294967295,R=b+(A<<16&4294967295|A>>>16),A=I+(R^b^_)+k[6]+76029189&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(I^R^b)+k[9]+3654602809&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^R)+k[12]+3873151461&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^I)+k[15]+530742520&4294967295,R=b+(A<<16&4294967295|A>>>16),A=I+(R^b^_)+k[2]+3299628645&4294967295,I=R+(A<<23&4294967295|A>>>9),A=_+(R^(I|~b))+k[0]+4096336452&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~R))+k[7]+1126891415&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~I))+k[14]+2878612391&4294967295,R=b+(A<<15&4294967295|A>>>17),A=I+(b^(R|~_))+k[5]+4237533241&4294967295,I=R+(A<<21&4294967295|A>>>11),A=_+(R^(I|~b))+k[12]+1700485571&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~R))+k[3]+2399980690&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~I))+k[10]+4293915773&4294967295,R=b+(A<<15&4294967295|A>>>17),A=I+(b^(R|~_))+k[1]+2240044497&4294967295,I=R+(A<<21&4294967295|A>>>11),A=_+(R^(I|~b))+k[8]+1873313359&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~R))+k[15]+4264355552&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~I))+k[6]+2734768916&4294967295,R=b+(A<<15&4294967295|A>>>17),A=I+(b^(R|~_))+k[13]+1309151649&4294967295,I=R+(A<<21&4294967295|A>>>11),A=_+(R^(I|~b))+k[4]+4149444226&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~R))+k[11]+3174756917&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~I))+k[2]+718787259&4294967295,R=b+(A<<15&4294967295|A>>>17),A=I+(b^(R|~_))+k[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,k=this.C;let R=this.h,b=0;for(;b<_;){if(R==0)for(;b<=I;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(k[R++]=T.charCodeAt(b++),R==this.blockSize){i(this,k),R=0;break}}else for(;b<_;)if(k[R++]=T[b++],R==this.blockSize){i(this,k),R=0;break}}this.h=R,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let k=0;k<32;k+=8)T[_++]=this.g[I]>>>k&255;return T};function s(T,_){var I=l;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;const I=[];let k=!0;for(let R=T.length-1;R>=0;R--){const b=T[R]|0;k&&b==_||(I[R]=b,k=!1)}this.g=I}var l={};function c(T){return-128<=T&&T<128?s(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return C(u(-T));const _=[];let I=1;for(let k=0;T>=I;k++)_[k]=T/I|0,I*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return C(d(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(_,8));let k=f;for(let b=0;b<T.length;b+=8){var R=Math.min(8,T.length-b);const A=parseInt(T.substring(b,b+R),_);R<8?(R=u(Math.pow(_,R)),k=k.j(R).add(u(A))):(k=k.j(I),k=k.add(u(A)))}return k}var f=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-C(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const k=this.i(I);T+=(k>=0?k:4294967296+k)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(x(this))return"-"+C(this).toString(T);const _=u(Math.pow(T,6));var I=this;let k="";for(;;){const R=O(I,_).g;I=E(I,R.j(_));let b=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=R,P(I))return b+k;for(;b.length<6;)b="0"+b;k=b+k}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function x(T){return T.h==-1}t.l=function(T){return T=E(this,T),x(T)?-1:P(T)?0:1};function C(T){const _=T.g.length,I=[];for(let k=0;k<_;k++)I[k]=~T.g[k];return new o(I,~T.h).add(m)}t.abs=function(){return x(this)?C(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let k=0;for(let R=0;R<=_;R++){let b=k+(this.i(R)&65535)+(T.i(R)&65535),A=(b>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);k=A>>>16,b&=65535,A&=65535,I[R]=A<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(T,_){return T.add(C(_))}t.j=function(T){if(P(this)||P(T))return f;if(x(this))return x(T)?C(this).j(C(T)):C(C(this).j(T));if(x(T))return C(this.j(C(T)));if(this.l(w)<0&&T.l(w)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var k=0;k<2*_;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(let R=0;R<T.g.length;R++){const b=this.i(k)>>>16,A=this.i(k)&65535,me=T.i(R)>>>16,Q=T.i(R)&65535;I[2*k+2*R]+=A*Q,v(I,2*k+2*R),I[2*k+2*R+1]+=b*Q,v(I,2*k+2*R+1),I[2*k+2*R+1]+=A*me,v(I,2*k+2*R+1),I[2*k+2*R+2]+=b*me,v(I,2*k+2*R+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function v(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function S(T,_){this.g=T,this.h=_}function O(T,_){if(P(_))throw Error("division by zero");if(P(T))return new S(f,f);if(x(T))return _=O(C(T),_),new S(C(_.g),C(_.h));if(x(_))return _=O(T,C(_)),new S(C(_.g),_.h);if(T.g.length>30){if(x(T)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,k=_;k.l(T)<=0;)I=j(I),k=j(k);var R=F(I,1),b=F(k,1);for(k=F(k,2),I=F(I,2);!P(k);){var A=b.add(k);A.l(T)<=0&&(R=R.add(I),b=A),k=F(k,1),I=F(I,1)}return _=E(T,R.j(_)),new S(R,_)}for(R=f;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),b=u(I),A=b.j(_);x(A)||A.l(T)>0;)I-=k,b=u(I),A=b.j(_);P(b)&&(b=m),R=R.add(b),T=E(T,A)}return new S(R,T)}t.B=function(T){return O(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let k=0;k<_;k++)I[k]=this.i(k)&T.i(k);return new o(I,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let k=0;k<_;k++)I[k]=this.i(k)|T.i(k);return new o(I,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let k=0;k<_;k++)I[k]=this.i(k)^T.i(k);return new o(I,this.h^T.h)};function j(T){const _=T.g.length+1,I=[];for(let k=0;k<_;k++)I[k]=T.i(k)<<1|T.i(k-1)>>>31;return new o(I,T.h)}function F(T,_){const I=_>>5;_%=32;const k=T.g.length-I,R=[];for(let b=0;b<k;b++)R[b]=_>0?T.i(b+I)>>>_|T.i(b+I+1)<<32-_:T.i(b+I);return new o(R,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,I1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ci=o}).apply(typeof i0<"u"?i0:typeof self<"u"?self:typeof window<"u"?window:{});var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S1,ga,A1,Vc,_p,k1,x1,R1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof cc=="object"&&cc];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in p))break e;p=p[N]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,N,L){for(var $=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)$[ae-2]=arguments[ae];return h.prototype[N].apply(y,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function P(a,h){for(let y=1;y<arguments.length;y++){const N=arguments[y];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=a.length||0;const L=N.length||0;a.length=p+L;for(let $=0;$<L;$++)a[p+$]=N[$]}else a.push(N)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){o.setTimeout(()=>{throw a},0)}function E(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const y=S.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var S=new x(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,T=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(I)}};function I(){for(var a;a=E();){try{a.h.call(a.g)}catch(p){C(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function me(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(me,R),me.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Q="closure_listenable_"+(Math.random()*1e6|0),le=0;function Ve(a,h,p,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++le,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Z(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function re(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function we(a){const h={};for(const p in a)h[p]=a[p];return h}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(a,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)a[p]=y[p];for(let L=0;L<H.length;L++)p=H[L],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function oe(a){this.src=a,this.g={},this.h=0}oe.prototype.add=function(a,h,p,y,N){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const $=Se(a,h,y,N);return $>-1?(h=a[$],p||(h.fa=!1)):(h=new Ve(h,this.src,L,!!y,N),h.fa=p,a.push(h)),h};function be(a,h){const p=h.type;if(p in a.g){var y=a.g[p],N=Array.prototype.indexOf.call(y,h,void 0),L;(L=N>=0)&&Array.prototype.splice.call(y,N,1),L&&(B(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Se(a,h,p,y){for(let N=0;N<a.length;++N){const L=a[N];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==y)return N}return-1}var at="closure_lm_"+(Math.random()*1e6|0),Me={};function Rt(a,h,p,y,N){if(y&&y.once)return Yt(a,h,p,y,N);if(Array.isArray(h)){for(let L=0;L<h.length;L++)Rt(a,h[L],p,y,N);return null}return p=bo(p),a&&a[Q]?a.J(h,p,l(y)?!!y.capture:!!y,N):Qt(a,h,p,!1,y,N)}function Qt(a,h,p,y,N,L){if(!h)throw Error("Invalid event type");const $=l(N)?!!N.capture:!!N;let ae=Jt(a);if(ae||(a[at]=ae=new oe(a)),p=ae.add(h,p,y,$,L),p.proxy)return p;if(y=Pt(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)b||(N=$),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(cn(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Pt(){function a(p){return h.call(a.src,a.listener,p)}const h=In;return a}function Yt(a,h,p,y,N){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Yt(a,h[L],p,y,N);return null}return p=bo(p),a&&a[Q]?a.K(h,p,l(y)?!!y.capture:!!y,N):Qt(a,h,p,!0,y,N)}function He(a,h,p,y,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)He(a,h[L],p,y,N);else y=l(y)?!!y.capture:!!y,p=bo(p),a&&a[Q]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=Se(h,p,y,N),p>-1&&(B(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=Jt(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Se(h,p,y,N)),(p=a>-1?h[a]:null)&&lt(p))}function lt(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Q])be(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(cn(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Jt(h))?(be(p,a),p.h==0&&(p.src=null,h[at]=null)):B(a)}}}function cn(a){return a in Me?Me[a]:Me[a]="on"+a}function In(a,h){if(a.da)a=!0;else{h=new me(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&lt(a),a=p.call(y,h)}return a}function Jt(a){return a=a[at],a instanceof oe?a:null}var Un="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(a){return typeof a=="function"?a:(a[Un]||(a[Un]=function(h){return a.handleEvent(h)}),a[Un])}function je(){k.call(this),this.i=new oe(this),this.M=this,this.G=null}f(je,k),je.prototype[Q]=!0,je.prototype.removeEventListener=function(a,h,p,y){He(this,a,h,p,y)};function Ct(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var N=h;h=new R(y,a),Y(h,N)}N=!0;let L,$;if(p)for($=p.length-1;$>=0;$--)L=h.g=p[$],N=Nl(L,y,!0,h)&&N;if(L=h.g=a,N=Nl(L,y,!0,h)&&N,N=Nl(L,y,!1,h)&&N,p)for($=0;$<p.length;$++)L=h.g=p[$],N=Nl(L,y,!1,h)&&N}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)B(p[y]);delete a.g[h],a.h--}}this.G=null},je.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},je.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Nl(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let L=0;L<h.length;++L){const $=h[L];if($&&!$.da&&$.capture==p){const ae=$.listener,tt=$.ha||$.src;$.fa&&be(a.i,$),N=ae.call(tt,y)!==!1&&N}}return N&&!y.defaultPrevented}function tk(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function iy(a){a.g=tk(()=>{a.g=null,a.i&&(a.i=!1,iy(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class nk extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:iy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function No(a){k.call(this),this.h=a,this.g={}}f(No,k);var sy=[];function oy(a){Z(a.g,function(h,p){this.g.hasOwnProperty(p)&&lt(h)},a),a.g={}}No.prototype.N=function(){No.Z.N.call(this),oy(this)},No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hh=o.JSON.stringify,rk=o.JSON.parse,ik=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ay(){}function ly(){}var Do={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wh(){R.call(this,"d")}f(Wh,R);function qh(){R.call(this,"c")}f(qh,R);var Ri={},cy=null;function Dl(){return cy=cy||new je}Ri.Ia="serverreachability";function uy(a){R.call(this,Ri.Ia,a)}f(uy,R);function Oo(a){const h=Dl();Ct(h,new uy(h))}Ri.STAT_EVENT="statevent";function hy(a,h){R.call(this,Ri.STAT_EVENT,a),this.stat=h}f(hy,R);function bt(a){const h=Dl();Ct(h,new hy(h,a))}Ri.Ja="timingevent";function dy(a,h){R.call(this,Ri.Ja,a),this.size=h}f(dy,R);function Lo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Vo(){this.g=!0}Vo.prototype.ua=function(){this.g=!1};function sk(a,h,p,y,N,L){a.info(function(){if(a.g)if(L){var $="",ae=L.split("&");for(let Ee=0;Ee<ae.length;Ee++){var tt=ae[Ee].split("=");if(tt.length>1){const ct=tt[0];tt=tt[1];const $n=ct.split("_");$=$n.length>=2&&$n[1]=="type"?$+(ct+"="+tt+"&"):$+(ct+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+$})}function ok(a,h,p,y,N,L,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+L+" "+$})}function gs(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+lk(a,p)+(y?" "+y:"")})}function ak(a,h){a.info(function(){return"TIMEOUT: "+h})}Vo.prototype.info=function(){};function lk(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let $=1;$<y.length;$++)y[$]=""}}}}return Hh(L)}catch{return h}}var Ol={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},py;function Kh(){}f(Kh,ay),Kh.prototype.g=function(){return new XMLHttpRequest},py=new Kh;function Mo(a){return encodeURIComponent(String(a))}function ck(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Cr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new No(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new my}function my(){this.i=null,this.g="",this.h=!1}var gy={},Gh={};function Qh(a,h,p){a.M=1,a.A=Vl(Fn(h)),a.u=p,a.R=!0,yy(a,null)}function yy(a,h){a.F=Date.now(),Ll(a),a.B=Fn(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Cy(p.i,"t",y),a.C=0,p=a.j.L,a.h=new my,a.g=Gy(a.j,p?h:null,!a.u),a.P>0&&(a.O=new nk(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(sy[0]=N.toString()),N=sy);for(let L=0;L<N.length;L++){const $=Rt(p,N[L],y||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?we(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Oo(),sk(a.i,a.v,a.B,a.l,a.S,a.u)}Cr.prototype.ba=function(a){a=a.target;const h=this.O;h&&Dr(a)==3?h.j():this.Y(a)},Cr.prototype.Y=function(a){try{if(a==this.g)e:{const ae=Dr(this.g),tt=this.g.ya(),Ee=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||My(this.g)))){this.K||ae!=4||tt==7||(tt==8||Ee<=0?Oo(3):Oo(2)),Yh(this);var h=this.g.ca();this.X=h;var p=uk(this);if(this.o=h==200,ok(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(y)){var L=y;break t}}L=null}if(a=L)gs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Jh(this,a);else{this.o=!1,this.m=3,bt(12),Pi(this),jo(this);break e}}if(this.R){a=!0;let ct;for(;!this.K&&this.C<p.length;)if(ct=hk(this,p),ct==Gh){ae==4&&(this.m=4,bt(14),a=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==gy){this.m=4,bt(15),gs(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else gs(this.i,this.l,ct,null),Jh(this,ct);if(_y(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||p.length!=0||this.h.h||(this.m=1,bt(16),a=!1),this.o=this.o&&a,!a)gs(this.i,this.l,p,"[Invalid Chunked Response]"),Pi(this),jo(this);else if(p.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),sd($),$.P=!0,bt(11))}}else gs(this.i,this.l,p,null),Jh(this,p);ae==4&&Pi(this),this.o&&!this.K&&(ae==4?Hy(this.j,this):(this.o=!1,Ll(this)))}else Ak(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),Pi(this),jo(this)}}}catch{}finally{}};function uk(a){if(!_y(a))return a.g.la();const h=My(a.g);if(h==="")return"";let p="";const y=h.length,N=Dr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Pi(a),jo(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<y;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(N&&L==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function _y(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function hk(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Gh:(p=Number(h.substring(p,y)),isNaN(p)?gy:(y+=1,y+p>h.length?Gh:(h=h.slice(y,y+p),a.C=y+p,h)))}Cr.prototype.cancel=function(){this.K=!0,Pi(this)};function Ll(a){a.T=Date.now()+a.H,vy(a,a.H)}function vy(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Lo(u(a.aa,a),h)}function Yh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Cr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ak(this.i,this.B),this.M!=2&&(Oo(),bt(17)),Pi(this),this.m=2,jo(this)):vy(this,this.T-a)};function jo(a){a.j.I==0||a.K||Hy(a.j,a)}function Pi(a){Yh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,oy(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Jh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Xh(p.h,a))){if(!a.L&&Xh(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)$l(p),Ul(p);else break e;id(p),bt(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Lo(u(p.Va,p),6e3));Ty(p.h)<=1&&p.ta&&(p.ta=void 0)}else bi(p,11)}else if((a.L||p.g==a)&&$l(p),!A(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let Ee=N[h];const ct=Ee[0];if(!(ct<=p.K))if(p.K=ct,Ee=Ee[1],p.I==2)if(Ee[0]=="c"){p.M=Ee[1],p.ba=Ee[2];const $n=Ee[3];$n!=null&&(p.ka=$n,p.j.info("VER="+p.ka));const Ni=Ee[4];Ni!=null&&(p.za=Ni,p.j.info("SVER="+p.za));const Or=Ee[5];Or!=null&&typeof Or=="number"&&Or>0&&(y=1.5*Or,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Lr=a.g;if(Lr){const zl=Lr.g?Lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zl){var L=y.h;L.g||zl.indexOf("spdy")==-1&&zl.indexOf("quic")==-1&&zl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Zh(L,L.h),L.h=null))}if(y.G){const od=Lr.g?Lr.g.getResponseHeader("X-HTTP-Session-Id"):null;od&&(y.wa=od,Ae(y.J,y.G,od))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var $=a;if(y.na=Ky(y,y.L?y.ba:null,y.W),$.L){Iy(y.h,$);var ae=$,tt=y.O;tt&&(ae.H=tt),ae.D&&(Yh(ae),Ll(ae)),y.g=$}else By(y);p.i.length>0&&Fl(p)}else Ee[0]!="stop"&&Ee[0]!="close"||bi(p,7);else p.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?bi(p,7):rd(p):Ee[0]!="noop"&&p.l&&p.l.qa(Ee),p.A=0)}}Oo(4)}catch{}}var dk=class{constructor(a,h){this.g=a,this.map=h}};function wy(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ey(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ty(a){return a.h?1:a.g?a.g.size:0}function Xh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Zh(a,h){a.g?a.g.add(h):a.h=h}function Iy(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}wy.prototype.cancel=function(){if(this.i=Sy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Sy(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return w(a.i)}var Ay=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fk(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let N,L=null;y>=0?(N=a[p].substring(0,y),L=a[p].substring(y+1)):N=a[p],h(N,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function br(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof br?(this.l=a.l,Uo(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.u),this.h=a.h,ed(this,by(a.i)),this.m=a.m):a&&(h=String(a).match(Ay))?(this.l=!1,Uo(this,h[1]||"",!0),this.o=$o(h[2]||""),this.g=$o(h[3]||"",!0),Fo(this,h[4]),this.h=$o(h[5]||"",!0),ed(this,h[6]||"",!0),this.m=$o(h[7]||"")):(this.l=!1,this.i=new zo(null,this.l))}br.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Bo(h,ky,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Bo(h,ky,!0),"@"),a.push(Mo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Bo(p,p.charAt(0)=="/"?gk:mk,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Bo(p,_k)),a.join("")},br.prototype.resolve=function(a){const h=Fn(this);let p=!!a.j;p?Uo(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)Fo(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=h.h.lastIndexOf("/");N!=-1&&(y=h.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const L=[];for(let $=0;$<N.length;){const ae=N[$++];ae=="."?y&&$==N.length&&L.push(""):ae==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&$==N.length&&L.push("")):(L.push(ae),y=!0)}y=L.join("/")}else y=N}return p?h.h=y:p=a.i.toString()!=="",p?ed(h,by(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Fn(a){return new br(a)}function Uo(a,h,p){a.j=p?$o(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ed(a,h,p){h instanceof zo?(a.i=h,vk(a.i,a.l)):(p||(h=Bo(h,yk)),a.i=new zo(h,a.l))}function Ae(a,h,p){a.i.set(h,p)}function Vl(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function $o(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,pk),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pk(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ky=/[#\/\?@]/g,mk=/[#\?:]/g,gk=/[#\?]/g,yk=/[#\?@]/g,_k=/#/g;function zo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ci(a){a.g||(a.g=new Map,a.h=0,a.i&&fk(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=zo.prototype,t.add=function(a,h){Ci(this),this.i=null,a=ys(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function xy(a,h){Ci(a),h=ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ry(a,h){return Ci(a),h=ys(a,h),a.g.has(h)}t.forEach=function(a,h){Ci(this),this.g.forEach(function(p,y){p.forEach(function(N){a.call(h,N,y,this)},this)},this)};function Py(a,h){Ci(a);let p=[];if(typeof h=="string")Ry(a,h)&&(p=p.concat(a.g.get(ys(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ci(this),this.i=null,a=ys(this,a),Ry(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Py(this,a),a.length>0?String(a[0]):h):h};function Cy(a,h,p){xy(a,h),p.length>0&&(a.i=null,a.g.set(ys(a,h),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const N=Mo(p);p=Py(this,p);for(let L=0;L<p.length;L++){let $=N;p[L]!==""&&($+="="+Mo(p[L])),a.push($)}}return this.i=a.join("&")};function by(a){const h=new zo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vk(a,h){h&&!a.j&&(Ci(a),a.i=null,a.g.forEach(function(p,y){const N=y.toLowerCase();y!=N&&(xy(this,y),Cy(this,N,p))},a)),a.j=h}function wk(a,h){const p=new Vo;if(o.Image){const y=new Image;y.onload=d(Nr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Nr,p,"TestLoadImage: error",!1,h,y),y.onabort=d(Nr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Nr,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Ek(a,h){const p=new Vo,y=new AbortController,N=setTimeout(()=>{y.abort(),Nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?Nr(p,"TestPingServer: ok",!0,h):Nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Nr(p,"TestPingServer: error",!1,h)})}function Nr(a,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function Tk(){this.g=new ik}function td(a){this.i=a.Sb||null,this.h=a.ab||!1}f(td,ay),td.prototype.g=function(){return new Ml(this.i,this.h)};function Ml(a,h){je.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ml,je),t=Ml.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ny(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ny(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ho(this):Wo(this),this.readyState==3&&Ny(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ho(this))},t.Na=function(a){this.g&&(this.response=a,Ho(this))},t.ga=function(){this.g&&Ho(this)};function Ho(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Wo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Dy(a){let h="";return Z(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function nd(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Dy(p),typeof a=="string"?p!=null&&Mo(p):Ae(a,h,p))}function Ue(a){je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ue,je);var Ik=/^https?$/i,Sk=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():py.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Oy(this,L);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Sk,h,void 0)>=0)||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of p)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Oy(this,L)}};function Oy(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ly(a),jl(a)}function Ly(a){a.A||(a.A=!0,Ct(a,"complete"),Ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ct(this,"complete"),Ct(this,"abort"),jl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jl(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Vy(this):this.Xa())},t.Xa=function(){Vy(this)};function Vy(a){if(a.h&&typeof s<"u"){if(a.v&&Dr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ct(a,"readystatechange"),Dr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=L===0){let $=String(a.D).match(Ay)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),y=!Ik.test($?$.toLowerCase():"")}p=y}if(p)Ct(a,"complete"),Ct(a,"success");else{a.o=6;try{var N=Dr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Ly(a)}}finally{jl(a)}}}}function jl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||Ct(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),rk(h)}};function My(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ak(a){const h={};a=(a.g&&Dr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(A(a[y]))continue;var p=ck(a[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[N]||[];h[N]=L,L.push(p)}re(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function jy(a){this.za=0,this.i=[],this.j=new Vo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qo("baseRetryDelayMs",5e3,a),this.Za=qo("retryDelaySeedMs",1e4,a),this.Ta=qo("forwardChannelMaxRetries",2,a),this.va=qo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new wy(a&&a.concurrentRequestLimit),this.Ba=new Tk,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=jy.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,y){bt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Ky(this,null,this.W),Fl(this)};function rd(a){if(Uy(a),a.I==3){var h=a.V++,p=Fn(a.J);if(Ae(p,"SID",a.M),Ae(p,"RID",h),Ae(p,"TYPE","terminate"),Ko(a,p),h=new Cr(a,a.j,h),h.M=2,h.A=Vl(Fn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Gy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ll(h)}qy(a)}function Ul(a){a.g&&(sd(a),a.g.cancel(),a.g=null)}function Uy(a){Ul(a),a.v&&(o.clearTimeout(a.v),a.v=null),$l(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Fl(a){if(!Ey(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),F||(j(),F=!0),T.add(h,a),a.D=0}}function kk(a,h){return Ty(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Lo(u(a.Ea,a,h),Wy(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Cr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=we(L),Y(L,this.U)):L=this.U),this.u!==null||this.R||(N.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=$y(this,N,h),p=Fn(this.J),Ae(p,"RID",a),Ae(p,"CVER",22),this.G&&Ae(p,"X-HTTP-Session-Id",this.G),Ko(this,p),L&&(this.R?h="headers="+Mo(Dy(L))+"&"+h:this.u&&nd(p,this.u,L)),Zh(this.h,N),this.Ra&&Ae(p,"TYPE","init"),this.S?(Ae(p,"$req",h),Ae(p,"SID","null"),N.U=!0,Qh(N,p,null)):Qh(N,p,h),this.I=2}}else this.I==3&&(a?Fy(this,a):this.i.length==0||Ey(this.h)||Fy(this))};function Fy(a,h){var p;h?p=h.l:p=a.V++;const y=Fn(a.J);Ae(y,"SID",a.M),Ae(y,"RID",p),Ae(y,"AID",a.K),Ko(a,y),a.u&&a.o&&nd(y,a.u,a.o),p=new Cr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=$y(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Zh(a.h,p),Qh(p,y,h)}function Ko(a,h){a.H&&Z(a.H,function(p,y){Ae(h,y,p)}),a.l&&Z({},function(p,y){Ae(h,y,p)})}function $y(a,h,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var N=a.i;let ae=-1;for(;;){const tt=["count="+p];ae==-1?p>0?(ae=N[0].g,tt.push("ofs="+ae)):ae=0:tt.push("ofs="+ae);let Ee=!0;for(let ct=0;ct<p;ct++){var L=N[ct].g;const $n=N[ct].map;if(L-=ae,L<0)ae=Math.max(0,N[ct].g-100),Ee=!1;else try{L="req"+L+"_"||"";try{var $=$n instanceof Map?$n:Object.entries($n);for(const[Ni,Or]of $){let Lr=Or;l(Or)&&(Lr=Hh(Or)),tt.push(L+Ni+"="+encodeURIComponent(Lr))}}catch(Ni){throw tt.push(L+"type="+encodeURIComponent("_badmap")),Ni}}catch{y&&y($n)}}if(Ee){$=tt.join("&");break e}}$=void 0}return a=a.i.splice(0,p),h.G=a,$}function By(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),F||(j(),F=!0),T.add(h,a),a.A=0}}function id(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Lo(u(a.Da,a),Wy(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,zy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Lo(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Ul(this),zy(this))};function sd(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function zy(a){a.g=new Cr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Fn(a.na);Ae(h,"RID","rpc"),Ae(h,"SID",a.M),Ae(h,"AID",a.K),Ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(h,"TO",a.ia),Ae(h,"TYPE","xmlhttp"),Ko(a,h),a.u&&a.o&&nd(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Vl(Fn(h)),p.u=null,p.R=!0,yy(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Ul(this),id(this),bt(19))};function $l(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Hy(a,h){var p=null;if(a.g==h){$l(a),sd(a),a.g=null;var y=2}else if(Xh(a.h,h))p=h.G,Iy(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;y=Dl(),Ct(y,new dy(y,p)),Fl(a)}else By(a);else if(N=h.m,N==3||N==0&&h.X>0||!(y==1&&kk(a,h)||y==2&&id(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),N){case 1:bi(a,5);break;case 4:bi(a,10);break;case 3:bi(a,6);break;default:bi(a,2)}}}function Wy(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function bi(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),y=a.Ua;const N=!y;y=new br(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Uo(y,"https"),Vl(y),N?wk(y.toString(),p):Ek(y.toString(),p)}else bt(2);a.I=0,a.l&&a.l.pa(h),qy(a),Uy(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function qy(a){if(a.I=0,a.ja=[],a.l){const h=Sy(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Ky(a,h,p){var y=p instanceof br?Fn(p):new br(p);if(y.g!="")h&&(y.g=h+"."+y.g),Fo(y,y.u);else{var N=o.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const L=new br(null);y&&Uo(L,y),h&&(L.g=h),N&&Fo(L,N),p&&(L.h=p),y=L}return p=a.G,h=a.wa,p&&h&&Ae(y,p,h),Ae(y,"VER",a.ka),Ko(a,y),y}function Gy(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ue(new td({ab:p})):new Ue(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qy(){}t=Qy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Bl(){}Bl.prototype.g=function(a,h){return new Xt(a,h)};function Xt(a,h){je.call(this),this.g=new jy(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}f(Xt,je),Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){rd(this.g)},Xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Hh(a),a=p);h.i.push(new dk(h.Ya++,a)),h.I==3&&Fl(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,rd(this.g),delete this.g,Xt.Z.N.call(this)};function Yy(a){Wh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Yy,Wh);function Jy(){qh.call(this),this.status=1}f(Jy,qh);function _s(a){this.g=a}f(_s,Qy),_s.prototype.ra=function(){Ct(this.g,"a")},_s.prototype.qa=function(a){Ct(this.g,new Yy(a))},_s.prototype.pa=function(a){Ct(this.g,new Jy)},_s.prototype.oa=function(){Ct(this.g,"b")},Bl.prototype.createWebChannel=Bl.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,R1=function(){return new Bl},x1=function(){return Dl()},k1=Ri,_p={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ol.NO_ERROR=0,Ol.TIMEOUT=8,Ol.HTTP_ERROR=6,Vc=Ol,fy.COMPLETE="complete",A1=fy,ly.EventType=Do,Do.OPEN="a",Do.CLOSE="b",Do.ERROR="c",Do.MESSAGE="d",je.prototype.listen=je.prototype.J,ga=ly,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,S1=Ue}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io="12.11.0";function jO(t){Io=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zi=new Km("@firebase/firestore");function Es(){return Zi.logLevel}function q(t,...e){if(Zi.logLevel<=he.DEBUG){const n=e.map(ig);Zi.debug(`Firestore (${Io}): ${t}`,...n)}}function Sr(t,...e){if(Zi.logLevel<=he.ERROR){const n=e.map(ig);Zi.error(`Firestore (${Io}): ${t}`,...n)}}function es(t,...e){if(Zi.logLevel<=he.WARN){const n=e.map(ig);Zi.warn(`Firestore (${Io}): ${t}`,...n)}}function ig(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,P1(t,r,n)}function P1(t,e,n){let r=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sr(r),new Error(r)}function _e(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||P1(e,i,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class C1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class FO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $O{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new C1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new It(e)}}class BO{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class zO{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new BO(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class s0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HO{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new s0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new s0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=WO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function vp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Wd(i)===Wd(s)?de(i,s):Wd(i)?1:-1}return de(t.length,e.length)}const qO=55296,KO=57343;function Wd(t){const e=t.charCodeAt(0);return e>=qO&&e<=KO}function ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="__name__";class Wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return de(e.length,n.length)}static compareSegments(e,n){const r=Wn.isNumericId(e),i=Wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):vp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ci.fromString(e.substring(4,e.length-2))}}class Te extends Wn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const GO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Wn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return GO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===o0}static keyField(){return new gt([o0])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function b1(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QO(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function a0(t){if(!X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function l0(t){if(X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function N1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vh(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function YO(t,e){if(e<=0)throw new W(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function et(t,e){const n={typeString:t};return e&&(n.value=e),n}function xl(t,e){if(!N1(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=-62135596800,u0=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*u0);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<c0)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/u0}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-c0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:et("string",xe._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new xe(0,0))}static max(){return new te(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const al=-1;function JO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new mi(i,X.empty(),e)}function XO(t){return new mi(t.readTime,t.key,al)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(te.min(),X.empty(),al)}static max(){return new mi(te.max(),X.empty(),al)}}function ZO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==eL)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=-1;function Eh(t){return t==null}function xu(t){return t===0&&1/t==-1/0}function rL(t){return typeof t=="number"&&Number.isInteger(t)&&!xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="";function iL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=h0(e)),e=sL(t.get(n),e);return h0(e)}function sL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case D1:n+="";break;default:n+=s}}return n}function h0(t){return t+D1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function O1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new f0(this.data.getIterator())}getIteratorFrom(e){return new f0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class f0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new it(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class L1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new L1("Invalid base64 string: "+s):s}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const oL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=oL.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="server_timestamp",M1="__type__",j1="__previous_value__",U1="__local_write_time__";function ag(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[M1])==null?void 0:r.stringValue)===V1}function Th(t){const e=t.mapValue.fields[j1];return ag(e)?Th(e):e}function ll(t){const e=gi(t.mapValue.fields[U1].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n,r,i,s,o,l,c,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=f}}const Ru="(default)";class cl{constructor(e,n){this.projectId=e,this.database=n||Ru}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database===Ru}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}function lL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="__type__",$1="__max__",hc={mapValue:{fields:{__type__:{stringValue:$1}}}},B1="__vector__",Pu="value";function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ag(t)?4:uL(t)?9007199254740991:cL(t)?10:11:ee(28295,{value:t})}function nr(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ll(t).isEqual(ll(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),l=gi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yi(i.bytesValue).isEqual(yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return We(i.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return We(i.integerValue)===We(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=We(i.doubleValue),l=We(s.doubleValue);return o===l?xu(o)===xu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(d0(o)!==d0(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!nr(o[c],l[c])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function ul(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=We(s.integerValue||s.doubleValue),c=We(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return p0(t.timestampValue,e.timestampValue);case 4:return p0(ll(t),ll(e));case 5:return vp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=yi(s),c=yi(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=de(l[u],c[u]);if(d!==0)return d}return de(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=de(We(s.latitude),We(o.latitude));return l!==0?l:de(We(s.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return m0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,w,P,x;const l=s.fields||{},c=o.fields||{},u=(m=l[Pu])==null?void 0:m.arrayValue,d=(w=c[Pu])==null?void 0:w.arrayValue,f=de(((P=u==null?void 0:u.values)==null?void 0:P.length)||0,((x=d==null?void 0:d.values)==null?void 0:x.length)||0);return f!==0?f:m0(u,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===hc.mapValue&&o===hc.mapValue)return 0;if(s===hc.mapValue)return 1;if(o===hc.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const m=vp(c[f],d[f]);if(m!==0)return m;const w=lo(l[c[f]],u[d[f]]);if(w!==0)return w}return de(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function p0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=gi(t),r=gi(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function m0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=lo(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function co(t){return wp(t)}function wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wp(n.fields[o])}`;return i+"}"}(t.mapValue):ee(61005,{value:t})}function Mc(t){switch(_i(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Th(t);return e?16+Mc(e):16;case 5:return 2*t.stringValue.length;case 6:return yi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Mc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ki(r.fields,(s,o)=>{i+=s.length+Mc(o)}),i}(t.mapValue);default:throw ee(13486,{value:t})}}function g0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ep(t){return!!t&&"integerValue"in t}function lg(t){return!!t&&"arrayValue"in t}function y0(t){return!!t&&"nullValue"in t}function _0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jc(t){return!!t&&"mapValue"in t}function cL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[F1])==null?void 0:r.stringValue)===B1}function Da(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Da(t.arrayValue.values[n]);return e}return{...t}}function uL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===$1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(n)}setAll(e){let n=gt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Da(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(Da(this.value))}}function z1(t){const e=[];return ki(t.fields,(n,r)=>{const i=new gt([n]);if(jc(r)){const s=z1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,te.min(),te.min(),te.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new At(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new At(e,2,n,te.min(),te.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,te.min(),te.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cu{constructor(e,n){this.position=e,this.inclusive=n}}function v0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function w0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function hL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class H1{}class Ze extends H1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fL(e,n,r):n==="array-contains"?new gL(e,r):n==="in"?new yL(e,r):n==="not-in"?new _L(e,r):n==="array-contains-any"?new vL(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pL(e,r):new mL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(lo(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends H1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Vn(e,n)}matches(e){return W1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function W1(t){return t.op==="and"}function q1(t){return dL(t)&&W1(t)}function dL(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Tp(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+co(t.value);if(q1(t))return t.filters.map(e=>Tp(e)).join(",");{const e=t.filters.map(n=>Tp(n)).join(",");return`${t.op}(${e})`}}function K1(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof Vn?function(r,i){return i instanceof Vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&K1(o,i.filters[l]),!0):!1}(t,e):void ee(19439)}function G1(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(G1).join(" ,")+"}"}(t):"Filter"}class fL extends Ze{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class pL extends Ze{constructor(e,n){super(e,"in",n),this.keys=Q1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mL extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Q1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Q1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class gL extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lg(n)&&ul(n.arrayValue,this.value)}}class yL extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ul(this.value.arrayValue,n)}}class _L extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ul(this.value.arrayValue,n)}}class vL extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ul(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function E0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wL(t,e,n,r,i,s,o)}function cg(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>co(r)).join(",")),e.Te=n}return e.Te}function ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!w0(t.startAt,e.startAt)&&w0(t.endAt,e.endAt)}function Ip(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function EL(t,e,n,r,i,s,o,l){return new ko(t,e,n,r,i,s,o,l)}function Ih(t){return new ko(t)}function T0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TL(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Y1(t){return t.collectionGroup!==null}function Oa(t){const e=ie(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new hl(s,r))}),n.has(gt.keyField().canonicalString())||e.Ee.push(new hl(gt.keyField(),r))}return e.Ee}function Xn(t){const e=ie(t);return e.Ie||(e.Ie=IL(e,Oa(t))),e.Ie}function IL(t,e){if(t.limitType==="F")return E0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new hl(i.field,s)});const n=t.endAt?new Cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cu(t.startAt.position,t.startAt.inclusive):null;return E0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sp(t,e){const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function SL(t,e){const n=t.explicitOrderBy.concat([e]);return new ko(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function bu(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sh(t,e){return ug(Xn(t),Xn(e))&&t.limitType===e.limitType}function J1(t){return`${cg(Xn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>G1(i)).join(", ")}]`),Eh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>co(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>co(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function Ah(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Oa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=v0(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Oa(r),i)||r.endAt&&!function(o,l,c){const u=v0(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Oa(r),i))}(t,e)}function AL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function X1(t){return(e,n)=>{let r=!1;for(const i of Oa(t)){const s=kL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kL(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?lo(c,u):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return O1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=new Le(X.comparator);function Ar(){return xL}const Z1=new Le(X.comparator);function ya(...t){let e=Z1;for(const n of t)e=e.insert(n.key,n);return e}function eS(t){let e=Z1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fi(){return La()}function tS(){return La()}function La(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const RL=new Le(X.comparator),PL=new it(X.comparator);function fe(...t){let e=PL;for(const n of t)e=e.add(n);return e}const CL=new it(de);function bL(){return CL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function nS(t){return{integerValue:""+t}}function rS(t,e){return rL(e)?nS(e):hg(t,e)}/**
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
 */class kh{constructor(){this._=void 0}}function NL(t,e,n){return t instanceof dl?function(i,s){const o={fields:{[M1]:{stringValue:V1},[U1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ag(s)&&(s=Th(s)),s&&(o.fields[j1]=s),{mapValue:o}}(n,e):t instanceof uo?sS(t,e):t instanceof fl?oS(t,e):function(i,s){const o=iS(i,s),l=I0(o)+I0(i.Ae);return Ep(o)&&Ep(i.Ae)?nS(l):hg(i.serializer,l)}(t,e)}function DL(t,e,n){return t instanceof uo?sS(t,e):t instanceof fl?oS(t,e):n}function iS(t,e){return t instanceof pl?function(r){return Ep(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dl extends kh{}class uo extends kh{constructor(e){super(),this.elements=e}}function sS(t,e){const n=aS(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class fl extends kh{constructor(e){super(),this.elements=e}}function oS(t,e){let n=aS(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class pl extends kh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function I0(t){return We(t.integerValue||t.doubleValue)}function aS(t){return lg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.field=e,this.transform=n}}function OL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof uo&&i instanceof uo||r instanceof fl&&i instanceof fl?ao(r.elements,i.elements,nr):r instanceof pl&&i instanceof pl?nr(r.Ae,i.Ae):r instanceof dl&&i instanceof dl}(t.transform,e.transform)}class LL{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xh{}function lS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fg(t.key,_n.none()):new Rl(t.key,t.data,_n.none());{const n=t.data,r=$t.empty();let i=new it(gt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new nn(i.toArray()),_n.none())}}function VL(t,e,n){t instanceof Rl?function(i,s,o){const l=i.value.clone(),c=A0(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!Uc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=A0(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(cS(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Va(t,e,n,r){return t instanceof Rl?function(s,o,l,c){if(!Uc(s.precondition,o))return l;const u=s.value.clone(),d=k0(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,l,c){if(!Uc(s.precondition,o))return l;const u=k0(s.fieldTransforms,c,o),d=o.data;return d.setAll(cS(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Uc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ML(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=iS(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function S0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ao(r,i,(s,o)=>OL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rl extends xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function A0(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,DL(o,l,n[i]))}return r}function k0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,NL(s,o,e))}return r}class fg extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jL extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=lS(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>S0(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>S0(n,r))}}class pg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return RL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pg(e,n,r,i)}}/**
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
 */class FL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $L{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,pe;function BL(t){switch(t){case V.OK:return ee(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function uS(t){if(t===void 0)return Sr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ge.OK:return V.OK;case Ge.CANCELLED:return V.CANCELLED;case Ge.UNKNOWN:return V.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return V.INTERNAL;case Ge.UNAVAILABLE:return V.UNAVAILABLE;case Ge.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ge.NOT_FOUND:return V.NOT_FOUND;case Ge.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ge.ABORTED:return V.ABORTED;case Ge.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ge.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:t})}}(pe=Ge||(Ge={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zL(){return new TextEncoder}/**
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
 */const HL=new ci([4294967295,4294967295],0);function x0(t){const e=zL().encode(t),n=new I1;return n.update(e),new Uint8Array(n.digest())}function R0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ci([n,r],0),new ci([i,s],0)]}class mg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ci.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(ci.fromNumber(r)));return i.compare(HL)===1&&(i=new ci([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=x0(e),[r,i]=R0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=x0(e),[r,i]=R0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rh(te.min(),i,new Le(de),Ar(),fe())}}class Pl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pl(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class hS{constructor(e,n){this.targetId=e,this.Ce=n}}class dS{constructor(e,n,r=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class P0{constructor(){this.ve=0,this.Fe=C0(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),n=fe(),r=fe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee(38017,{changeType:s})}}),new Pl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=C0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class WL{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ar(),this.Je=dc(),this.He=dc(),this.Ze=new Le(de)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ip(s))if(r===0){const o=new X(s.path);this.et(n,o,At.newNoDocument(o,te.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=yi(r).toUint8Array()}catch(c){if(c instanceof L1)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new mg(o,i,s)}catch(c){return es(c instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ip(l.target)){const c=new X(l.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,At.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=fe();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Rh(e,n,this.Ze,this.je,r);return this.je=Ar(),this.Je=dc(),this.He=dc(),this.Ze=new Le(de),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new P0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new it(de),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new it(de),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new P0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function dc(){return new Le(X.comparator)}function C0(){return new Le(X.comparator)}const qL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GL=(()=>({and:"AND",or:"OR"}))();class QL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ap(t,e){return t.useProto3Json||Eh(e)?e:{value:e}}function Nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YL(t,e){return Nu(t,e.toTimestamp())}function Zn(t){return _e(!!t,49232),te.fromTimestamp(function(n){const r=gi(n);return new xe(r.seconds,r.nanos)}(t))}function gg(t,e){return kp(t,e).canonicalString()}function kp(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pS(t){const e=Te.fromString(t);return _e(vS(e),10190,{key:e.toString()}),e}function xp(t,e){return gg(t.databaseId,e.path)}function qd(t,e){const n=pS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(gS(n))}function mS(t,e){return gg(t.databaseId,e)}function JL(t){const e=pS(t);return e.length===4?Te.emptyPath():gS(e)}function Rp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gS(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function b0(t,e,n){return{name:xp(t,e),fields:n.value.mapValue.fields}}function XL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(_e(d===void 0||typeof d=="string",58123),vt.fromBase64String(d||"")):(_e(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),vt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?V.UNKNOWN:uS(u.code);return new W(d,u.message||"")}(o);n=new dS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qd(t,r.document.name),s=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):te.min(),l=new $t({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(i,s,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Fc(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qd(t,r.document),s=r.readTime?Zn(r.readTime):te.min(),o=At.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qd(t,r.document),s=r.removedTargetIds||[];n=new Fc([],s,i,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $L(i,s),l=r.targetId;n=new hS(l,o)}}return n}function ZL(t,e){let n;if(e instanceof Rl)n={update:b0(t,e.key,e.value)};else if(e instanceof fg)n={delete:xp(t,e.key)};else if(e instanceof xi)n={update:b0(t,e.key,e.data),updateMask:lV(e.fieldMask)};else{if(!(e instanceof jL))return ee(16599,{dt:e.type});n={verify:xp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:YL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee(27497)}(t,e.precondition)),n}function eV(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Zn(i.updateTime):Zn(s);return o.isEqual(te.min())&&(o=Zn(s)),new LL(o,i.transformResults||[])}(n,e))):[]}function tV(t,e){return{documents:[mS(t,e.path)]}}function nV(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=mS(t,i);const s=function(u){if(u.length!==0)return _S(Vn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Is(m.field),direction:sV(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ap(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function rV(t){let e=JL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=yS(f);return m instanceof Vn&&q1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(P){return new hl(Ss(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Eh(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,w=f.values||[];return new Cu(w,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,w=f.values||[];return new Cu(w,m)}(n.endAt)),EL(e,i,o,s,l,"F",c,u)}function iV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ss(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ss(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>yS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function sV(t){return qL[t]}function oV(t){return KL[t]}function aV(t){return GL[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Ss(t){return gt.fromServerFormat(t.fieldPath)}function _S(t){return t instanceof Ze?function(n){if(n.op==="=="){if(_0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(y0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(y0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:oV(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(i=>_S(i));return r.length===1?r[0]:{compositeFilter:{op:aV(n.op),filters:r}}}(t):ee(54877,{filter:t})}function lV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function wS(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e){this.yt=e}}function uV(t){const e=rV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(){this.bn=new dV}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(mi.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class dV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(Te.comparator)).toArray()}}/**
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
 */const N0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ES=41943040;class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(ES,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const D0="LruGarbageCollector",fV=1048576;function O0([t,e],[n,r]){const i=de(t,n);return i===0?de(e,r):i}class pV{constructor(e){this.Pr=e,this.buffer=new it(O0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();O0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class mV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(D0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?q(D0,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Ar(3e5)})}}class gV{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(wh.ce);const r=new pV(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(N0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),N0):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Es()<=he.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function yV(t,e){return new gV(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Va(r.mutation,i,nn.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ya();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ar();const o=La(),l=function(){return La()}();return n.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof xi)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Va(d.mutation,u,d.mutation.getFieldMask(),xe.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>l.set(u,new vV(d,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=La();let i=new Le((o,l)=>o-l),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||nn.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(i.get(l.batchId)||fe()).add(c);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=tS();d.forEach(m=>{if(!s.has(m)){const w=lS(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return TL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Y1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Fi());let l=al,c=s;return o.next(u=>M.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,fe())).next(d=>({batchId:l,changes:eS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,c=>{const u=function(f,m){return new ko(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let l=ya();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&Va(d.mutation,u,nn.empty(),xe.now()),Ah(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:uV(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class TV{constructor(){this.overlays=new Le(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Fi(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Fi(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Fi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FL(n,r));let s=this.Lr.get(n);s===void 0&&(s=fe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class IV{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.kr=new it(ut.qr),this.Kr=new it(ut.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ut(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new Te([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new X(new Te([])),r=new ut(n,e),i=new ut(n,e+1);let s=fe();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return X.comparator(e.key,n.key)||de(e.Jr,n.Jr)}static Ur(e,n){return de(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new it(ut.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UL(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new ut(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?og:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(de);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new ut(new X(s),0);let l=new it(de);return this.Hr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new ut(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.ti=e,this.docs=function(){return new Le(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():At.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ar();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ZO(XO(d),r)<=0||(i.has(d.key)||Ah(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kV(this)}getSize(e){return M.resolve(this.size)}}class kV extends _V{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e){this.persistence=e,this.ri=new ps(n=>cg(n),ug),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new yg,this.targetCount=0,this.oi=ho._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ho(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n){this._i={},this.overlays={},this.ai=new wh(0),this.ui=!1,this.ui=!0,this.ci=new IV,this.referenceDelegate=e(this),this.li=new xV(this),this.indexManager=new hV,this.remoteDocumentCache=function(i){return new AV(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new cV(n),this.Pi=new EV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new SV(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new RV(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class RV extends tL{constructor(e){super(),this.currentSequenceNumber=e}}class _g{constructor(e){this.persistence=e,this.Ri=new yg,this.Ai=null}static Vi(e){return new _g(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=X.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Du{constructor(e,n){this.persistence=e,this.fi=new ps(r=>iL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=yV(this,n)}static Vi(e,n){return new Du(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Mc(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vg(e,n.fromCache,r,i)}}/**
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
 */class PV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Pb()?8:nL(xt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new PV;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Es()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Es()<=he.DEBUG&&q("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Es()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):M.resolve())}gs(e,n){if(T0(n))return M.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bu(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ss(n,l);return this.bs(n,u,o,c.readTime)?this.gs(e,bu(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,i){return T0(n)||i.isEqual(te.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Es()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.Ds(e,o,n,JO(i,al)).next(l=>l))})}Ss(e,n){let r=new it(X1(e));return n.forEach((i,s)=>{Ah(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Es()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.fs.getDocumentsMatchingQuery(e,n,mi.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="LocalStore",bV=3e8;class NV{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Le(de),this.Fs=new ps(s=>cg(s),ug),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wV(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function DV(t,e,n,r){return new NV(t,e,n,r)}async function IS(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=fe();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function OV(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,m=f.keys();let w=M.resolve();return m.forEach(P=>{w=w.next(()=>d.getEntry(c,P)).next(x=>{const C=u.docVersions.get(P);_e(C!==null,48541),x.version.compareTo(C)<0&&(f.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=fe();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function SS(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function LV(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(vt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(x,C,E){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=bV?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,w,d)&&l.push(n.li.updateTargetData(s,w))});let c=Ar(),u=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(VV(s,o,e.documentUpdates).next(d=>{c=d.Bs,u=d.Ls})),!r.isEqual(te.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.vs=i,s))}function VV(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ar();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):q(wg,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:i}})}function MV(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=og),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jV(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=ie(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ao(o))throw o;q(wg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function L0(t,e,n){const r=ie(t);let i=te.min(),s=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=ie(c),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(u,d)}(r,o,Xn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:fe())).next(l=>(UV(r,AL(e),l),{documents:l,ks:s})))}function UV(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class V0{constructor(){this.activeTargetIds=bL()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FV{constructor(){this.vo=new V0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new V0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="ConnectivityMonitor";class j0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(M0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(M0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fc=null;function Cp(){return fc===null?fc=function(){return 268435456+Math.round(2147483648*Math.random())}():fc++,"0x"+fc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="RestConnection",BV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class zV{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Ru?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Cp(),l=this.Qo(e,n.toUriEncodedString());q(Kd,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,i,s);const{host:u}=new URL(l),d=us(u);return this.zo(e,l,c,r,d).then(f=>(q(Kd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw es(Kd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=BV[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection",ra=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Gs extends zV{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gs.c_){const e=x1();ra(e,k1.STAT_EVENT,n=>{n.stat===_p.PROXY?q(Tt,"STAT_EVENT: detected buffering proxy"):n.stat===_p.NOPROXY&&q(Tt,"STAT_EVENT: detected no buffering proxy")}),Gs.c_=!0}}zo(e,n,r,i,s){const o=Cp();return new Promise((l,c)=>{const u=new S1;u.setWithCredentials(!0),u.listenOnce(A1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vc.NO_ERROR:const f=u.getResponseJson();q(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Vc.TIMEOUT:q(Tt,`RPC '${e}' ${o} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const m=u.getStatus();if(q(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const x=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(P.status);c(new W(x,P.message))}else c(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{q(Tt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);q(Tt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Cp(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");q(Tt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const d=o.createWebChannel(u,l);this.E_(d);let f=!1,m=!1;const w=new HV({Jo:P=>{m?q(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(f||(q(Tt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),q(Tt,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},Ho:()=>d.close()});return ra(d,ga.EventType.OPEN,()=>{m||(q(Tt,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),ra(d,ga.EventType.CLOSE,()=>{m||(m=!0,q(Tt,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.I_(d))}),ra(d,ga.EventType.ERROR,P=>{m||(m=!0,es(Tt,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),w.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),ra(d,ga.EventType.MESSAGE,P=>{var x;if(!m){const C=P.data[0];_e(!!C,16349);const E=C,v=(E==null?void 0:E.error)||((x=E[0])==null?void 0:x.error);if(v){q(Tt,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let O=function(T){const _=Ge[T];if(_!==void 0)return uS(_)}(S),j=v.message;S==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,j="Unknown error status: "+S+" with message "+v.message),m=!0,w.o_(new W(O,j)),d.close()}else q(Tt,`RPC '${e}' stream ${i} received:`,C),w.__(C)}}),Gs.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return R1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(t){return new Gs(t)}function Gd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){return new QL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs.c_=!1;class AS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="PersistentStream";class kS{constructor(e,n,r,i,s,o,l,c){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new AS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(U0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(U0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qV extends kS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=XL(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Zn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Rp(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Ip(c)?{documents:tV(s,c)}:{query:nV(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fS(s,o.resumeToken);const u=Ap(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Nu(s,o.snapshotVersion.toTimestamp());const u=Ap(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=iV(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Rp(this.serializer),n.removeTarget=e,this.q_(n)}}class KV extends kS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=eV(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Rp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZL(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{}class QV extends GV{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,kp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,kp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function YV(t,e,n,r){return new QV(t,e,n,r)}class JV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const ts="RemoteStore";class XV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ms(this)&&(q(ts,"Restarting streams for network reachability change."),await async function(c){const u=ie(c);u.Ia.add(4),await Cl(u),u.Va.set("Unknown"),u.Ia.delete(4),await Ch(u)}(this))})}),this.Va=new JV(r,i)}}async function Ch(t){if(ms(t))for(const e of t.Ra)await e(!0)}async function Cl(t){for(const e of t.Ra)await e(!1)}function xS(t,e){const n=ie(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Sg(n)?Ig(n):xo(n).O_()&&Tg(n,e))}function Eg(t,e){const n=ie(t),r=xo(n);n.Ea.delete(e),r.O_()&&RS(n,e),n.Ea.size===0&&(r.O_()?r.L_():ms(n)&&n.Va.set("Unknown"))}function Tg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(t).Z_(e)}function RS(t,e){t.da.$e(e),xo(t).X_(e)}function Ig(t){t.da=new WL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),xo(t).start(),t.Va.ua()}function Sg(t){return ms(t)&&!xo(t).x_()&&t.Ea.size>0}function ms(t){return ie(t).Ia.size===0}function PS(t){t.da=void 0}async function ZV(t){t.Va.set("Online")}async function eM(t){t.Ea.forEach((e,n)=>{Tg(t,e)})}async function tM(t,e){PS(t),Sg(t)?(t.Va.ha(e),Ig(t)):t.Va.set("Unknown")}async function nM(t,e,n){if(t.Va.set("Online"),e instanceof dS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){q(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof Fc?t.da.Xe(e):e instanceof hS?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await SS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.Ea.get(u);d&&s.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=s.Ea.get(c);if(!d)return;s.Ea.set(c,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),RS(s,c);const f=new Jr(d.target,c,u,d.sequenceNumber);Tg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(ts,"Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!Ao(e))throw e;t.Ia.add(1),await Cl(t),t.Va.set("Offline"),n||(n=()=>SS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(ts,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ch(t)})}function CS(t,e){return e().catch(n=>Ou(t,n,e))}async function bh(t){const e=ie(t),n=vi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:og;for(;rM(e);)try{const i=await MV(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,iM(e,i)}catch(i){await Ou(e,i)}bS(e)&&NS(e)}function rM(t){return ms(t)&&t.Ta.length<10}function iM(t,e){t.Ta.push(e);const n=vi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function bS(t){return ms(t)&&!vi(t).x_()&&t.Ta.length>0}function NS(t){vi(t).start()}async function sM(t){vi(t).ra()}async function oM(t){const e=vi(t);for(const n of t.Ta)e.ea(n.mutations)}async function aM(t,e,n){const r=t.Ta.shift(),i=pg.from(r,e,n);await CS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bh(t)}async function lM(t,e){e&&vi(t).Y_&&await async function(r,i){if(function(o){return BL(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();vi(r).B_(),await CS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bh(r)}}(t,e),bS(t)&&NS(t)}async function F0(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),q(ts,"RemoteStore received new credentials");const r=ms(n);n.Ia.add(3),await Cl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ch(n)}async function cM(t,e){const n=ie(t);e?(n.Ia.delete(2),await Ch(n)):e||(n.Ia.add(2),await Cl(n),n.Va.set("Unknown"))}function xo(t){return t.ma||(t.ma=function(n,r,i){const s=ie(n);return s.sa(),new qV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:ZV.bind(null,t),Yo:eM.bind(null,t),t_:tM.bind(null,t),H_:nM.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Sg(t)?Ig(t):t.Va.set("Unknown")):(await t.ma.stop(),PS(t))})),t.ma}function vi(t){return t.fa||(t.fa=function(n,r,i){const s=ie(n);return s.sa(),new KV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:sM.bind(null,t),t_:lM.bind(null,t),ta:oM.bind(null,t),na:aM.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await bh(t)):(await t.fa.stop(),t.Ta.length>0&&(q(ts,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ag(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Ao(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $0{constructor(){this.ga=new Le(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class fo{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fo(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class hM{constructor(){this.queries=B0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=B0(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function B0(){return new ps(t=>J1(t),Sh)}async function xg(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new uM,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=kg(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Pg(n)}async function Rg(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dM(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Pg(n)}function fM(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Pg(t){t.Ca.forEach(e=>{e.next()})}var bp,z0;(z0=bp||(bp={})).Ma="default",z0.Cache="cache";class Cg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.key=e}}class OS{constructor(e){this.key=e}}class pM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=fe(),this.mutatedKeys=fe(),this.eu=X1(e),this.tu=new Qs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new $0,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),w=Ah(this.query,f)?f:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;m&&w?m.data.isEqual(w.data)?P!==x&&(r.track({type:3,doc:w}),C=!0):this.su(m,w)||(r.track({type:2,doc:w}),C=!0,(c&&this.eu(w,c)>0||u&&this.eu(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),C=!0):m&&!w&&(r.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(w?(o=o.add(w),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(w,P){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:C})}};return x(w)-x(P)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Ya.size===0&&this.current&&!i?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new fo(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=fe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new OS(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new DS(r))}),n}cu(e){this.Za=e.ks,this.Ya=fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const bg="SyncEngine";class mM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gM{constructor(e){this.key=e,this.hu=!1}}class yM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ps(l=>J1(l),Sh),this.Eu=new Map,this.Iu=new Set,this.Ru=new Le(X.comparator),this.Au=new Map,this.Vu=new yg,this.du={},this.mu=new Map,this.fu=ho.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _M(t,e,n=!0){const r=FS(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await LS(r,e,n,!0),i}async function vM(t,e){const n=FS(t);await LS(n,e,!0,!1)}async function LS(t,e,n,r){const i=await jV(t.localStore,Xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await wM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&xS(t.remoteStore,i),l}async function wM(t,e,n,r,i){t.pu=(f,m,w)=>async function(x,C,E,v){let S=C.view.ru(E);S.bs&&(S=await L0(x.localStore,C.query,!1).then(({documents:T})=>C.view.ru(T,S)));const O=v&&v.targetChanges.get(C.targetId),j=v&&v.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(S,x.isPrimaryClient,O,j);return W0(x,C.targetId,F.au),F.snapshot}(t,f,m,w);const s=await L0(t.localStore,e,!0),o=new pM(e,s.ks),l=o.ru(s.documents),c=Pl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);W0(t,n,u.au);const d=new mM(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function EM(t,e,n){const r=ie(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Sh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Eg(r.remoteStore,i.targetId),Np(r,i.targetId)}).catch(So)):(Np(r,i.targetId),await Pp(r.localStore,i.targetId,!0))}async function TM(t,e){const n=ie(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Eg(n.remoteStore,r.targetId))}async function IM(t,e,n){const r=CM(t);try{const i=await function(o,l){const c=ie(o),u=xe.now(),d=l.reduce((w,P)=>w.add(P.key),fe());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Ar(),x=fe();return c.xs.getEntries(w,d).next(C=>{P=C,P.forEach((E,v)=>{v.isValidDocument()||(x=x.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(C=>{f=C;const E=[];for(const v of l){const S=ML(v,f.get(v.key).overlayedDocument);S!=null&&E.push(new xi(v.key,S,z1(S.value.mapValue),_n.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,E,l)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(f,x);return c.documentOverlayCache.saveOverlays(w,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:eS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Le(de)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,i.batchId,n),await bl(r,i.changes),await bh(r.remoteStore)}catch(i){const s=kg(i,"Failed to persist write");n.reject(s)}}async function VS(t,e){const n=ie(t);try{const r=await LV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?_e(o.hu,14607):i.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await bl(n,r,e)}catch(r){await So(r)}}function H0(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=ie(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(u=!0)}),u&&Pg(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SM(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Le(X.comparator);o=o.insert(s,At.newNoDocument(s,te.min()));const l=fe().add(s),c=new Rh(te.min(),new Map,new Le(de),o,l);await VS(r,c),r.Ru=r.Ru.remove(s),r.Au.delete(e),Ng(r)}else await Pp(r.localStore,e,!1).then(()=>Np(r,e,n)).catch(So)}async function AM(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await OV(n.localStore,e);jS(n,r,null),MS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bl(n,i)}catch(i){await So(i)}}async function kM(t,e,n){const r=ie(t);try{const i=await function(o,l){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(_e(f!==null,37113),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);jS(r,e,n),MS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bl(r,i)}catch(i){await So(i)}}function MS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function jS(t,e,n){const r=ie(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Np(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||US(t,r)})}function US(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Eg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Ng(t))}function W0(t,e,n){for(const r of n)r instanceof DS?(t.Vu.addReference(r.key,e),xM(t,r)):r instanceof OS?(q(bg,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||US(t,r.key)):ee(19791,{wu:r})}function xM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(q(bg,"New document in limbo: "+n),t.Iu.add(r),Ng(t))}function Ng(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Te.fromString(e)),r=t.fu.next();t.Au.set(r,new gM(n)),t.Ru=t.Ru.insert(n,r),xS(t.remoteStore,new Jr(Xn(Ih(n.path)),r,"TargetPurposeLimboResolution",wh.ce))}}async function bl(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=vg.Is(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const d=ie(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(u,m=>M.forEach(m.Ts,w=>d.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>M.forEach(m.Es,w=>d.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!Ao(f))throw f;q(wg,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const w=d.vs.get(m),P=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(P);d.vs=d.vs.insert(m,x)}}}(r.localStore,s))}async function RM(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){q(bg,"User change. New user:",e.toKey());const r=await IS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new W(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bl(n,r.Ns)}}function PM(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let i=fe();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function FS(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=VS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SM.bind(null,e),e.Pu.H_=dM.bind(null,e.eventManager),e.Pu.yu=fM.bind(null,e.eventManager),e}function CM(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kM.bind(null,e),e}class Lu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ph(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return DV(this.persistence,new CV,e.initialUser,this.serializer)}Cu(e){return new TS(_g.Vi,this.serializer)}Du(e){return new FV}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lu.provider={build:()=>new Lu};class bM extends Lu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof Du,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mV(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new TS(r=>Du.Vi(r,n),this.serializer)}}class Dp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>H0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RM.bind(null,this.syncEngine),await cM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hM}()}createDatastore(e){const n=Ph(e.databaseInfo.databaseId),r=WV(e.databaseInfo);return YV(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new XV(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>H0(this.syncEngine,n,0),function(){return j0.v()?new j0:new $V}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,d){const f=new yM(i,s,o,l,c,u);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);q(ts,"RemoteStore shutting down."),s.Ia.add(5),await Cl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Dp.provider={build:()=>new Dp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="FirestoreClient";class NM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=sg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(wi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(wi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qd(t,e){t.asyncQueue.verifyOperationInProgress(),q(wi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await IS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function q0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DM(t);q(wi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>F0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>F0(e.remoteStore,i)),t._onlineComponents=e}async function DM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(wi,"Using user provided OfflineComponentProvider");try{await Qd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await Qd(t,new Lu)}}else q(wi,"Using default OfflineComponentProvider"),await Qd(t,new bM(void 0));return t._offlineComponents}async function $S(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(wi,"Using user provided OnlineComponentProvider"),await q0(t,t._uninitializedComponentsProvider._online)):(q(wi,"Using default OnlineComponentProvider"),await q0(t,new Dp))),t._onlineComponents}function OM(t){return $S(t).then(e=>e.syncEngine)}async function Vu(t){const e=await $S(t),n=e.eventManager;return n.onListen=_M.bind(null,e.syncEngine),n.onUnlisten=EM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TM.bind(null,e.syncEngine),n}function LM(t,e,n,r){const i=new Dg(r),s=new Cg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>xg(await Vu(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Rg(await Vu(t),s))}}function VM(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Dg({next:m=>{d.Nu(),o.enqueueAndForget(()=>Rg(s,f));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Cg(Ih(l.path),d,{includeMetadataChanges:!0,qa:!0});return xg(s,f)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}function MM(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Dg({next:m=>{d.Nu(),o.enqueueAndForget(()=>Rg(s,f)),m.fromCache&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Cg(l,d,{includeMetadataChanges:!0,qa:!0});return xg(s,f)}(await Vu(t),t.asyncQueue,e,n,r)),r.promise}function jM(t,e){const n=new mr;return t.asyncQueue.enqueueAndForget(async()=>IM(await OM(t),e,n)),n.promise}/**
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
 */function BS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM="ComponentProvider",K0=new Map;function FM(t,e,n,r,i){return new aL(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,BS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="firestore.googleapis.com",G0=!0;class Q0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zS,this.ssl=G0}else this.host=e.host,this.ssl=e.ssl??G0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ES;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fV)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Q0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Q0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UO;switch(r.type){case"firstParty":return new zO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=K0.get(n);r&&(q(UM,"Removing Datastore"),K0.delete(n),r.terminate())}(this),Promise.resolve()}}function $M(t,e,n,r={}){var u;t=Gt(t,Nh);const i=us(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&qm(`https://${l}`),s.host!==zS&&s.host!==l&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!pi(c,o)&&(t._setSettings(c),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=It.MOCK_USER;else{d=AI(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(m)}t._authCredentials=new FO(new C1(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xl(n,$e._jsonSchema))return new $e(e,r||null,new X(Te.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:et("string",$e._jsonSchemaVersion),referencePath:et("string")};class ui extends Pr{constructor(e,n,r){super(e,n,Ih(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new X(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function As(t,e,...n){if(t=se(t),b1("collection","path",e),t instanceof Nh){const r=Te.fromString(e,...n);return l0(r),new ui(t,null,r)}{if(!(t instanceof $e||t instanceof ui))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return l0(r),new ui(t.firestore,null,r)}}function hi(t,e,...n){if(t=se(t),arguments.length===1&&(e=sg.newId()),b1("doc","path",e),t instanceof Nh){const r=Te.fromString(e,...n);return a0(r),new $e(t,null,new X(r))}{if(!(t instanceof $e||t instanceof ui))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return a0(r),new $e(t.firestore,t instanceof ui?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="AsyncQueue";class J0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new AS(this,"async_queue_retry"),this._c=()=>{const r=Gd();r&&q(Y0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Gd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Gd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new mr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;q(Y0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Sr("INTERNAL UNHANDLED ERROR: ",X0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Ag.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ee(47125,{Pc:X0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function X0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class kr extends Nh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new J0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new J0(e),this._firestoreClient=void 0,await e}}}function BM(t,e){const n=typeof t=="object"?t:ah(),r=typeof t=="string"?t:e||Ru,i=hs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=TI("firestore");s&&$M(i,...s)}return i}function Dh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zM(t),t._firestoreClient}function zM(t){var r,i,s,o;const e=t._freezeSettings(),n=FM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new NM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(vt.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pn(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:et("string",pn._jsonSchemaVersion),bytes:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(xl(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:et("string",er._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
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
 */class Dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Dn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:et("string",Dn._jsonSchemaVersion),vectorValues:et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=/^__.*__$/;class WM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rl(e,this.data,n,this.fieldTransforms)}}class HS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function WS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:t})}}class Oh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Oh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Mu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(WS(this.dataSource)&&HM.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class qM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ph(e)}A(e,n,r,i=!1){return new Oh({dataSource:e,methodName:n,targetDoc:r,path:gt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lh(t){const e=t._freezeSettings(),n=Ph(t._databaseId);return new qM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qS(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);jg("Data must be an object, but it was:",o,r);const l=KS(r,o);let c,u;if(s.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=ns(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);YS(d,m)||d.push(m)}c=new nn(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new WM(new $t(l),c,u)}class Vh extends Ro{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vh}}function KM(t,e,n){return new Oh({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lg extends Ro{_toFieldTransform(e){return new dg(e.path,new dl)}isEqual(e){return e instanceof Lg}}class Vg extends Ro{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=KM(this,e,!0),r=this.Sc.map(s=>Po(s,n)),i=new uo(r);return new dg(e.path,i)}isEqual(e){return e instanceof Vg&&pi(this.Sc,e.Sc)}}class Mg extends Ro{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new pl(e.serializer,rS(e.serializer,this.bc));return new dg(e.path,n)}isEqual(e){return e instanceof Mg&&this.bc===e.bc}}function GM(t,e,n,r){const i=t.A(1,e,n);jg("Data must be an object, but it was:",i,r);const s=[],o=$t.empty();ki(r,(c,u)=>{const d=QS(e,c,n);u=se(u);const f=i.fc(d);if(u instanceof Vh)s.push(d);else{const m=Po(u,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new nn(s);return new HS(o,l,i.fieldTransforms)}function QM(t,e,n,r,i,s){const o=t.A(1,e,n),l=[ns(e,r,n)],c=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(ns(e,s[m])),c.push(s[m+1]);const u=[],d=$t.empty();for(let m=l.length-1;m>=0;--m)if(!YS(u,l[m])){const w=l[m];let P=c[m];P=se(P);const x=o.fc(w);if(P instanceof Vh)u.push(w);else{const C=Po(P,x);C!=null&&(u.push(w),d.set(w,C))}}const f=new nn(u);return new HS(d,f,o.fieldTransforms)}function YM(t,e,n,r=!1){return Po(n,t.A(r?4:3,e))}function Po(t,e){if(GS(t=se(t)))return jg("Unsupported field value:",e,t),KS(t,e);if(t instanceof Ro)return function(r,i){if(!WS(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Po(l,i.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:Nu(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nu(i.serializer,s)}}if(r instanceof er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:fS(i.serializer,r._byteString)};if(r instanceof $e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Dn)return function(o,l){const c=o instanceof Dn?o.toArray():o;return{mapValue:{fields:{[F1]:{stringValue:B1},[Pu]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return hg(l.serializer,d)})}}}}}}(r,i);if(wS(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${vh(r)}`)}(t,e)}function KS(t,e){const n={};return O1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Po(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function GS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof er||t instanceof pn||t instanceof $e||t instanceof Ro||t instanceof Dn||wS(t))}function jg(t,e,n){if(!GS(n)||!N1(n)){const r=vh(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ns(t,e,n){if((e=se(e))instanceof Og)return e._internalPath;if(typeof e=="string")return QS(t,e);throw Mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const JM=new RegExp("[~\\*/\\[\\]]");function QS(t,e,n){if(e.search(JM)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Og(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new W(V.INVALID_ARGUMENT,l+t+c)}function YS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Pu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>We(o.doubleValue));return new Dn(n)}convertGeoPoint(e){return new er(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Th(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const n=gi(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);_e(vS(r),9688,{name:e});const i=new cl(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Ug extends XM{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Z0(){return new Lg("serverTimestamp")}function z6(...t){return new Vg("arrayUnion",t)}function H6(t){return new Mg("increment",t)}const ew="@firebase/firestore",tw="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZM extends JS{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fg{}class $g extends Fg{}function ia(t,e,...n){let r=[];e instanceof Fg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Bg).length,l=s.filter(c=>c instanceof Mh).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mh extends $g{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mh(e,n,r)}_apply(e){const n=this._parse(e);return ZS(e._query,n),new Pr(e.firestore,e.converter,Sp(e._query,n))}_parse(e){const n=Lh(e.firestore);return function(s,o,l,c,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){iw(f,d);const P=[];for(const x of f)P.push(rw(c,s,x));m={arrayValue:{values:P}}}else m=rw(c,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||iw(f,d),m=YM(l,o,f,d==="in"||d==="not-in");return Ze.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function An(t,e,n){const r=e,i=ns("where",t);return Mh._create(i,r,n)}class Bg extends Fg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)ZS(o,c),o=Sp(o,c)}(e._query,n),new Pr(e.firestore,e.converter,Sp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zg extends $g{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hl(s,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,SL(e._query,n))}}function W6(t,e="asc"){const n=e,r=ns("orderBy",t);return zg._create(r,n)}class Hg extends $g{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Hg(e,n,r)}_apply(e){return new Pr(e.firestore,e.converter,bu(e._query,this._limit,this._limitType))}}function q6(t){return YO("limit",t),Hg._create("limit",t,"F")}function rw(t,e,n){if(typeof(n=se(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Y1(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!X.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return g0(t,new X(r))}if(n instanceof $e)return g0(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vh(n)}.`)}function iw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function eA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hi extends JS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ns("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hi._jsonSchema={type:et("string",Hi._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class $c extends Hi{data(e={}){return super.data(e)}}class Wi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new va(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $c(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new $c(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new $c(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:e4(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function e4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
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
 */Wi._jsonSchemaVersion="firestore/querySnapshot/1.0",Wi._jsonSchema={type:et("string",Wi._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){t=Gt(t,$e);const e=Gt(t.firestore,kr),n=Dh(e);return VM(n,t._key).then(r=>nA(e,t,r))}function pc(t){t=Gt(t,Pr);const e=Gt(t.firestore,kr),n=Dh(e),r=new Ug(e);return XS(t._query),MM(n,t._query).then(i=>new Wi(e,r,t,i))}function sw(t,e,n){t=Gt(t,$e);const r=Gt(t.firestore,kr),i=eA(t.converter,e,n),s=Lh(r);return jh(r,[qS(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function Ys(t,e,n,...r){t=Gt(t,$e);const i=Gt(t.firestore,kr),s=Lh(i);let o;return o=typeof(e=se(e))=="string"||e instanceof Og?QM(s,"updateDoc",t._key,e,n,r):GM(s,"updateDoc",t._key,e),jh(i,[o.toMutation(t._key,_n.exists(!0))])}function K6(t){return jh(Gt(t.firestore,kr),[new fg(t._key,_n.none())])}function t4(t,e){const n=Gt(t.firestore,kr),r=hi(t),i=eA(t.converter,e),s=Lh(t.firestore);return jh(n,[qS(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function n4(t,...e){var u,d,f;t=se(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||nw(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(nw(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof $e)o=Gt(t.firestore,kr),l=Ih(t._key.path),s={next:m=>{e[r]&&e[r](nA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Gt(t,Pr);o=Gt(m.firestore,kr),l=m._query;const w=new Ug(o);s={next:P=>{e[r]&&e[r](new Wi(o,w,m,P))},error:e[r+1],complete:e[r+2]},XS(t._query)}const c=Dh(o);return LM(c,l,i,s)}function jh(t,e){const n=Dh(t);return jM(n,e)}function nA(t,e,n){const r=n.docs.get(e._key),i=new Ug(t);return new Hi(t,i,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){jO(ds),Ln(new En("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new kr(new $O(r.getProvider("auth-internal")),new HO(o,r.getProvider("app-check-internal")),lL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),qt(ew,tw,e),qt(ew,tw,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="firebasestorage.googleapis.com",iA="storageBucket",r4=2*60*1e3,i4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Mn{constructor(e,n,r=0){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function Yd(t){return"storage/"+t}function Wg(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(Be.UNKNOWN,t)}function s4(t){return new ze(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function o4(t){return new ze(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function a4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(Be.UNAUTHENTICATED,t)}function l4(){return new ze(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function c4(t){return new ze(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function u4(){return new ze(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function h4(){return new ze(Be.CANCELED,"User canceled the upload/download.")}function d4(t){return new ze(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function f4(t){return new ze(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function p4(){return new ze(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+iA+"' property when initializing the app?")}function m4(){return new ze(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function g4(){return new ze(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function y4(t){return new ze(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Op(t){return new ze(Be.INVALID_ARGUMENT,t)}function sA(){return new ze(Be.APP_DELETED,"The Firebase app was deleted.")}function _4(t){return new ze(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ma(t,e){return new ze(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function sa(t){throw new ze(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw f4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},x=n===rA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${x}/${i}/${C}`,"i"),S=[{regex:l,indices:c,postModify:s},{regex:w,indices:P,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<S.length;O++){const j=S[O],F=j.regex.exec(e);if(F){const T=F[j.indices.bucket];let _=F[j.indices.path];_||(_=""),r=new rn(T,_),j.postModify(r);break}}if(r==null)throw d4(e);return r}}class v4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(w,c())},C)}function m(){s&&clearTimeout(s)}function w(C,...E){if(u){m();return}if(C){m(),d.call(null,C,...E);return}if(c()||o){m(),d.call(null,C,...E);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let P=!1;function x(C){P||(P=!0,m(),!u&&(i!==null?(C||(l=2),clearTimeout(i),f(0)):C||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function E4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(t){return t!==void 0}function I4(t){return typeof t=="object"&&!Array.isArray(t)}function qg(t){return typeof t=="string"||t instanceof String}function ow(t){return Kg()&&t instanceof Blob}function Kg(){return typeof Blob<"u"}function aw(t,e,n,r){if(r<e)throw Op(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Op(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function oA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qi||(qi={}));/**
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
 */function S4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n,r,i,s,o,l,c,u,d,f,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,x)=>{this.resolve_=P,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new mc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===qi.NO_ERROR,c=s.getStatus();if(!l||S4(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===qi.ABORT;r(!1,new mc(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new mc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());T4(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=Wg();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?sA():h4();o(c)}else{const c=u4();o(c)}};this.canceled_?n(!1,new mc(!1,null,!0)):this.backoffId_=w4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&E4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function k4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function x4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function R4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function P4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function C4(t,e,n,r,i,s,o=!0,l=!1){const c=oA(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return R4(d,e),k4(d,n),x4(d,s),P4(d,r),new A4(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function N4(...t){const e=b4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Kg())return new Blob(t);throw new ze(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function D4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function O4(t){if(typeof atob>"u")throw y4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Jd{constructor(e,n){this.data=e,this.contentType=n||null}}function L4(t,e){switch(t){case Qn.RAW:return new Jd(aA(e));case Qn.BASE64:case Qn.BASE64URL:return new Jd(lA(t,e));case Qn.DATA_URL:return new Jd(M4(e),j4(e))}throw Wg()}function aA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function V4(t){let e;try{e=decodeURIComponent(t)}catch{throw Ma(Qn.DATA_URL,"Malformed data URL.")}return aA(e)}function lA(t,e){switch(t){case Qn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ma(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ma(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=O4(e)}catch(i){throw i.message.includes("polyfill")?i:Ma(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class cA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ma(Qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=U4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function M4(t){const e=new cA(t);return e.base64?lA(Qn.BASE64,e.rest):V4(e.rest)}function j4(t){return new cA(t).contentType}function U4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){let r=0,i="";ow(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ow(this.data_)){const r=this.data_,i=D4(r,e,n);return i===null?null:new qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qr(r,!0)}}static getBlob(...e){if(Kg()){const n=e.map(r=>r instanceof qr?r.data_:r);return new qr(N4.apply(null,n))}else{const n=e.map(o=>qg(o)?L4(Qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new qr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t){let e;try{e=JSON.parse(t)}catch{return null}return I4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function hA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t,e){return e}class Nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||B4}}let gc=null;function z4(t){return!qg(t)||t.length<2?t:hA(t)}function dA(){if(gc)return gc;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(s,o){return z4(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Nt("size");return i.xform=r,t.push(i),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),gc=t,gc}function H4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function W4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return H4(r,t),r}function fA(t,e,n){const r=uA(e);return r===null?null:W4(t,r,n)}function q4(t,e,n,r){const i=uA(e);if(i===null||!qg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),w=Gg(m,n,r),P=oA({alt:"media",token:u});return w+P})[0]}function K4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class pA{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){if(!t)throw Wg()}function G4(t,e){function n(r,i){const s=fA(t,i,e);return mA(s!==null),s}return n}function Q4(t,e){function n(r,i){const s=fA(t,i,e);return mA(s!==null),q4(s,i,t.host,t._protocol)}return n}function gA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=l4():i=a4():n.getStatus()===402?i=o4(t.bucket):n.getStatus()===403?i=c4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Y4(t){const e=gA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=s4(t.path)),s.serverResponse=i.serverResponse,s}return n}function J4(t,e,n){const r=e.fullServerUrl(),i=Gg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new pA(i,s,Q4(t,n),o);return l.errorHandler=Y4(e),l}function X4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Z4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=X4(null,e)),r}function ej(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=Z4(e,r,i),d=K4(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",w=qr.getBlob(f,r,m);if(w===null)throw m4();const P={name:u.fullPath},x=Gg(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,v=new pA(x,C,G4(t,n),E);return v.urlParams=P,v.headers=o,v.body=w.uploadData(),v.errorHandler=gA(e),v}class tj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw sa("cannot .send() more than once");if(us(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nj extends tj{initXhr(){this.xhr_.responseType="text"}}function yA(){return new nj}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hA(this._location.path)}get storage(){return this._service}get parent(){const e=F4(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _4(e)}}function rj(t,e,n){t._throwIfRoot("uploadBytes");const r=ej(t.storage,t._location,dA(),new qr(e,!0),n);return t.storage.makeRequestWithTokens(r,yA).then(i=>({metadata:i,ref:t}))}function ij(t){t._throwIfRoot("getDownloadURL");const e=J4(t.storage,t._location,dA());return t.storage.makeRequestWithTokens(e,yA).then(n=>{if(n===null)throw g4();return n})}function sj(t,e){const n=$4(t._location.path,e),r=new rn(t._location.bucket,n);return new rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oj(t){return/^[A-Za-z]+:\/\//.test(t)}function aj(t,e){return new rs(t,e)}function _A(t,e){if(t instanceof Qg){const n=t;if(n._bucket==null)throw p4();const r=new rs(n,n._bucket);return e!=null?_A(r,e):r}else return e!==void 0?sj(t,e):t}function lj(t,e){if(e&&oj(e)){if(t instanceof Qg)return aj(t,e);throw Op("To use ref(service, url), the first argument must be a Storage instance.")}else return _A(t,e)}function lw(t,e){const n=e==null?void 0:e[iA];return n==null?null:rn.makeFromBucketSpec(n,t)}function cj(t,e,n,r={}){t.host=`${e}:${n}`;const i=us(e);i&&qm(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:AI(s,t.app.options.projectId))}class Qg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=rA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=r4,this._maxUploadRetryTime=i4,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=lw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=lw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){aw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){aw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new v4(sA());{const o=C4(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const cw="@firebase/storage",uw="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="storage";function G6(t,e,n){return t=se(t),rj(t,e,n)}function Q6(t){return t=se(t),ij(t)}function Y6(t,e){return t=se(t),lj(t,e)}function uj(t=ah(),e){t=se(t);const r=hs(t,vA).getImmediate({identifier:e}),i=TI("storage");return i&&hj(r,...i),r}function hj(t,e,n,r={}){cj(t,e,n,r)}function dj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qg(n,r,i,e,ds)}function fj(){Ln(new En(vA,dj,"PUBLIC").setMultipleInstances(!0)),qt(cw,uw,""),qt(cw,uw,"esm2020")}fj();const wA="@firebase/installations",Yg="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=1e4,TA=`w:${Yg}`,IA="FIS_v2",pj="https://firebaseinstallations.googleapis.com/v1",mj=60*60*1e3,gj="installations",yj="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},is=new cs(gj,yj,_j);function SA(t){return t instanceof Mn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA({projectId:t}){return`${pj}/projects/${t}/installations`}function kA(t){return{token:t.token,requestStatus:2,expiresIn:wj(t.expiresIn),creationTime:Date.now()}}async function xA(t,e){const r=(await e.json()).error;return is.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vj(t,{refreshToken:e}){const n=RA(t);return n.append("Authorization",Ej(e)),n}async function PA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wj(t){return Number(t.replace("s","000"))}function Ej(t){return`${IA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=AA(t),i=RA(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:IA,appId:t.appId,sdkVersion:TA},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await PA(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:kA(u.authToken)}}else throw await xA("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ij(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sj=/^[cdef][\w-]{21}$/,Lp="";function Aj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=kj(t);return Sj.test(n)?n:Lp}catch{return Lp}}function kj(t){return Ij(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=new Map;function NA(t,e){const n=Uh(t);DA(n,e),xj(n,e)}function DA(t,e){const n=bA.get(t);if(n)for(const r of n)r(e)}function xj(t,e){const n=Rj();n&&n.postMessage({key:t,fid:e}),Pj()}let $i=null;function Rj(){return!$i&&"BroadcastChannel"in self&&($i=new BroadcastChannel("[Firebase] FID Change"),$i.onmessage=t=>{DA(t.data.key,t.data.fid)}),$i}function Pj(){bA.size===0&&$i&&($i.close(),$i=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cj="firebase-installations-database",bj=1,ss="firebase-installations-store";let Xd=null;function Jg(){return Xd||(Xd=oh(Cj,bj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}})),Xd}async function ju(t,e){const n=Uh(t),i=(await Jg()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&NA(t,e.fid),e}async function OA(t){const e=Uh(t),r=(await Jg()).transaction(ss,"readwrite");await r.objectStore(ss).delete(e),await r.done}async function Fh(t,e){const n=Uh(t),i=(await Jg()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&NA(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(t){let e;const n=await Fh(t.appConfig,r=>{const i=Nj(r),s=Dj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Nj(t){const e=t||{fid:Aj(),registrationStatus:0};return LA(e)}function Dj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(is.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Oj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Lj(t)}:{installationEntry:e}}async function Oj(t,e){try{const n=await Tj(t,e);return ju(t.appConfig,n)}catch(n){throw SA(n)&&n.customData.serverCode===409?await OA(t.appConfig):await ju(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Lj(t){let e=await hw(t.appConfig);for(;e.registrationStatus===1;)await CA(100),e=await hw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xg(t);return r||n}return e}function hw(t){return Fh(t,e=>{if(!e)throw is.create("installation-not-found");return LA(e)})}function LA(t){return Vj(t)?{fid:t.fid,registrationStatus:0}:t}function Vj(t){return t.registrationStatus===1&&t.registrationTime+EA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mj({appConfig:t,heartbeatServiceProvider:e},n){const r=jj(t,n),i=vj(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:TA,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await PA(()=>fetch(r,l));if(c.ok){const u=await c.json();return kA(u)}else throw await xA("Generate Auth Token",c)}function jj(t,{fid:e}){return`${AA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(t,e=!1){let n;const r=await Fh(t.appConfig,s=>{if(!VA(s))throw is.create("not-registered");const o=s.authToken;if(!e&&$j(o))return s;if(o.requestStatus===1)return n=Uj(t,e),s;{if(!navigator.onLine)throw is.create("app-offline");const l=zj(s);return n=Fj(t,l),l}});return n?await n:r.authToken}async function Uj(t,e){let n=await dw(t.appConfig);for(;n.authToken.requestStatus===1;)await CA(100),n=await dw(t.appConfig);const r=n.authToken;return r.requestStatus===0?Zg(t,e):r}function dw(t){return Fh(t,e=>{if(!VA(e))throw is.create("not-registered");const n=e.authToken;return Hj(n)?{...e,authToken:{requestStatus:0}}:e})}async function Fj(t,e){try{const n=await Mj(t,e),r={...e,authToken:n};return await ju(t.appConfig,r),n}catch(n){if(SA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await OA(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ju(t.appConfig,r)}throw n}}function VA(t){return t!==void 0&&t.registrationStatus===2}function $j(t){return t.requestStatus===2&&!Bj(t)}function Bj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mj}function zj(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Hj(t){return t.requestStatus===1&&t.requestTime+EA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wj(t){const e=t,{installationEntry:n,registrationPromise:r}=await Xg(e);return r?r.catch(console.error):Zg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qj(t,e=!1){const n=t;return await Kj(n),(await Zg(n,e)).token}async function Kj(t){const{registrationPromise:e}=await Xg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gj(t){if(!t||!t.options)throw Zd("App Configuration");if(!t.name)throw Zd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zd(t){return is.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="installations",Qj="installations-internal",Yj=t=>{const e=t.getProvider("app").getImmediate(),n=Gj(e),r=hs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Jj=t=>{const e=t.getProvider("app").getImmediate(),n=hs(e,MA).getImmediate();return{getId:()=>Wj(n),getToken:i=>qj(n,i)}};function Xj(){Ln(new En(MA,Yj,"PUBLIC")),Ln(new En(Qj,Jj,"PRIVATE"))}Xj();qt(wA,Yg);qt(wA,Yg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj="/firebase-messaging-sw.js",eU="/firebase-cloud-messaging-push-scope",jA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",tU="https://fcmregistrations.googleapis.com/v1",UA="google.c.a.c_id",nU="google.c.a.c_l",rU="google.c.a.ts",iU="google.c.a.e",fw=1e4;var pw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(pw||(pw={}));/**
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
 */var ml;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ml||(ml={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function sU(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="fcm_token_details_db",oU=5,mw="fcm_token_object_Store";async function aU(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ef))return null;let e=null;return(await oh(ef,oU,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(mw))return;const l=o.objectStore(mw),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:u.createTime??Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:ar(u.vapidKey)}}}else if(i===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ar(u.auth),p256dh:ar(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ar(u.vapidKey)}}}else if(i===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ar(u.auth),p256dh:ar(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ar(u.vapidKey)}}}}}})).close(),await jd(ef),await jd("fcm_vapid_details_db"),await jd("undefined"),lU(e)?e:null}function lU(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cU="firebase-messaging-database",uU=1,gl="firebase-messaging-store";let tf=null;function FA(){return tf||(tf=oh(cU,uU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gl)}}})),tf}async function hU(t){const e=$A(t),r=await(await FA()).transaction(gl).objectStore(gl).get(e);if(r)return r;{const i=await aU(t.appConfig.senderId);if(i)return await ey(t,i),i}}async function ey(t,e){const n=$A(t),i=(await FA()).transaction(gl,"readwrite");return await i.objectStore(gl).put(e,n),await i.done,e}function $A({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Vt=new cs("messaging","Messaging",dU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fU(t,e){const n=await ny(t),r=BA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(ty(t.appConfig),i)).json()}catch(o){throw Vt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Vt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Vt.create("token-subscribe-no-token");return s.token}async function pU(t,e){const n=await ny(t),r=BA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${ty(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Vt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Vt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Vt.create("token-update-no-token");return s.token}async function mU(t,e){const r={method:"DELETE",headers:await ny(t)};try{const s=await(await fetch(`${ty(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Vt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Vt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ty({projectId:t}){return`${tU}/projects/${t}/registrations`}async function ny({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function BA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==jA&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gU=7*24*60*60*1e3;async function yU(t){const e=await vU(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ar(e.getKey("auth")),p256dh:ar(e.getKey("p256dh"))},r=await hU(t.firebaseDependencies);if(r){if(wU(r.subscriptionOptions,n))return Date.now()>=r.createTime+gU?_U(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await mU(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return gw(t.firebaseDependencies,n)}else return gw(t.firebaseDependencies,n)}async function _U(t,e){try{const n=await pU(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await ey(t.firebaseDependencies,r),n}catch(n){throw n}}async function gw(t,e){const r={token:await fU(t,e),createTime:Date.now(),subscriptionOptions:e};return await ey(t,r),r.token}async function vU(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:sU(e)})}function wU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return EU(e,t),TU(e,t),IU(e,t),e}function EU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function TU(t,e){e.data&&(t.data=e.data)}function IU(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(t){return typeof t=="object"&&!!t&&UA in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */AU("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function AU(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(t){if(!t||!t.options)throw nf("App Configuration Object");if(!t.name)throw nf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw nf(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function nf(t){return Vt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=kU(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RU(t){try{t.swRegistration=await navigator.serviceWorker.register(Zj,{scope:eU}),t.swRegistration.update().catch(()=>{}),await PU(t.swRegistration)}catch(e){throw Vt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function PU(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${fw} ms`)),fw),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CU(t,e){if(!e&&!t.swRegistration&&await RU(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Vt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bU(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=jA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e){if(!navigator)throw Vt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Vt.create("permission-blocked");return await bU(t,e==null?void 0:e.vapidKey),await CU(t,e==null?void 0:e.serviceWorkerRegistration),yU(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NU(t,e,n){const r=DU(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[UA],message_name:n[nU],message_time:n[rU],message_device_time:Math.floor(Date.now()/1e3)})}function DU(t){switch(t){case ml.NOTIFICATION_CLICKED:return"notification_open";case ml.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OU(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ml.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(yw(n)):t.onMessageHandler.next(yw(n)));const r=n.data;SU(r)&&r[iU]==="1"&&await NU(t,n.messageType,r)}const _w="@firebase/messaging",vw="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU=t=>{const e=new xU(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>OU(e,n)),e},VU=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>zA(e,r)}};function MU(){Ln(new En("messaging",LU,"PUBLIC")),Ln(new En("messaging-internal",VU,"PRIVATE")),qt(_w,vw),qt(_w,vw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(){try{await xI()}catch{return!1}return typeof window<"u"&&kI()&&Cb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jU(t=ah()){return HA().then(e=>{if(!e)throw Vt.create("unsupported-browser")},e=>{throw Vt.create("indexed-db-unsupported")}),hs(se(t),"messaging").getImmediate()}async function UU(t,e){return t=se(t),zA(t,e)}MU();const FU={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},$h=CI(FU),un=OO($h);hD(un,c1);const en=BM($h),J6=uj($h),rf=new Kn;let Vp=null;const $U="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";HA().then(t=>{t&&(Vp=jU($h))}).catch(t=>console.log("Firebase messaging not supported:",t));/*! Capacitor: https://capacitorjs.com/ - MIT License */var os;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(os||(os={}));class Bc extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const BU=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},zU=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:BU(t),s=()=>i()!=="web",o=f=>{const m=u.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(w=>w.name===f)},c=f=>t.console.error(f),u=new Map,d=(f,m={})=>{const w=u.get(f);if(w)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),w.proxy;const P=i(),x=l(f);let C;const E=async()=>(!C&&P in m?C=typeof m[P]=="function"?C=await m[P]():C=m[P]:e!==null&&!C&&"web"in m&&(C=typeof m.web=="function"?C=await m.web():C=m.web),C),v=(_,I)=>{var k,R;if(x){const b=x==null?void 0:x.methods.find(A=>I===A.name);if(b)return b.rtype==="promise"?A=>n.nativePromise(f,I.toString(),A):(A,me)=>n.nativeCallback(f,I.toString(),A,me);if(_)return(k=_[I])===null||k===void 0?void 0:k.bind(_)}else{if(_)return(R=_[I])===null||R===void 0?void 0:R.bind(_);throw new Bc(`"${f}" plugin is not implemented on ${P}`,os.Unimplemented)}},S=_=>{let I;const k=(...R)=>{const b=E().then(A=>{const me=v(A,_);if(me){const Q=me(...R);return I=Q==null?void 0:Q.remove,Q}else throw new Bc(`"${f}.${_}()" is not implemented on ${P}`,os.Unimplemented)});return _==="addListener"&&(b.remove=async()=>I()),b};return k.toString=()=>`${_.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:_,writable:!1,configurable:!1}),k},O=S("addListener"),j=S("removeListener"),F=(_,I)=>{const k=O({eventName:_},I),R=async()=>{const A=await k;j({eventName:_,callbackId:A},I)},b=new Promise(A=>k.then(()=>A({remove:R})));return b.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await R()},b},T=new Proxy({},{get(_,I){switch(I){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?F:O;case"removeListener":return j;default:return S(I)}}});return r[f]=T,u.set(f,{name:f,proxy:T,platforms:new Set([...Object.keys(m),...x?[P]:[]])}),T};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=c,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=Bc,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},HU=t=>t.Capacitor=zU(t),gn=HU(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),jn=gn.registerPlugin;class Bh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new gn.Exception(e,os.Unimplemented)}unavailable(e="not available"){return new gn.Exception(e,os.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const WU=jn("WebView"),ww=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Ew=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class qU extends Bh{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Ew(i).trim(),s=Ew(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=ww(e.key),r=ww(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const KU=jn("CapacitorCookies",{web:()=>new qU}),GU=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),QU=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},YU=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=e?encodeURIComponent(u):u,c+=`${s}=${l}&`}),c.slice(0,-1)):(l=e?encodeURIComponent(o):o,c=`${s}=${l}`),`${r}&${c}`},"").substr(1):null,WA=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=QU(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,c)=>{s.append(c,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class JU extends Bh{async request(e){const n=WA(e,e.webFetchExtra),r=YU(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await s.blob(),c=await GU(u);break;case"json":c=await s.json();break;case"document":case"text":default:c=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:c,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const XU=jn("CapacitorHttp",{web:()=>new JU});var Mp;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Mp||(Mp={}));var jp;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(jp||(jp={}));class ZU extends Bh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const eF=jn("SystemBars",{web:()=>new ZU}),X6=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:gn,CapacitorCookies:KU,CapacitorException:Bc,CapacitorHttp:XU,get ExceptionCode(){return os},get SystemBarType(){return jp},SystemBars:eF,get SystemBarsStyle(){return Mp},WebPlugin:Bh,WebView:WU,buildRequestInit:WA,registerPlugin:jn},Symbol.toStringTag,{value:"Module"}));var Tw;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(Tw||(Tw={}));var Iw;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(Iw||(Iw={}));const tF=jn("FirebaseAuthentication",{web:()=>ne(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),qA=D.createContext();function Co(){return D.useContext(qA)}function nF({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(!0),s=D.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async x=>{if(!x){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",x.email);try{const C=hi(en,"users",x.uid),E=await tA(C),v=x.email==="prince86944@gmail.com";if(E.exists()){const S=E.data();console.log("[AUTH] Existing user data found:",S.role),v&&S.role!==o.SUPER_ADMIN?(await Ys(C,{role:o.SUPER_ADMIN}),n({...x,...S,role:o.SUPER_ADMIN})):n({...x,...S})}else{console.log("[AUTH] No existing profile. Creating new entry...");const S={uid:x.uid,name:x.displayName||"Scholar",email:x.email,phone:x.phoneNumber||"",createdAt:Z0(),role:v?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await sw(C,S),n({...x,...S})}}catch(C){console.error("[AUTH] Profile sync critical failure:",C),n({uid:x.uid,email:x.email,name:x.displayName||"Scholar",role:x.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function c(x,C,E,v){const S=await nD(un,x,C),O={uid:S.user.uid,name:E,email:x,phone:v,createdAt:Z0(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await sw(hi(en,"users",S.user.uid),O),S.user}async function u(x,C){return rD(un,x,C)}async function d(){var C;if(gn.isNativePlatform())try{const E=await tF.signInWithGoogle();if((C=E==null?void 0:E.credential)!=null&&C.idToken){const v=Kn.credential(E.credential.idToken),S=await ph(un,v);return await l(S.user),S.user}throw new Error("Native Google Login failed")}catch(E){console.error("Native Google Login Error:",E);const v=await Yv(un,rf);return await l(v.user),v.user}else try{const E=await Yv(un,rf);return await l(E.user),E.user}catch(E){return console.warn("Popup failed or blocked, falling back to Redirect...",E),await qD(un,rf)}}function f(x){return window.recaptchaVerifier||(window.recaptchaVerifier=new LD(un,"recaptcha-container",{size:"invisible"})),MD(un,x,window.recaptchaVerifier)}async function m(x){e&&(await Ys(hi(en,"users",e.uid),x),n(C=>({...C,...x})))}function w(){return mD(un)}D.useEffect(()=>pD(un,async C=>{e||i(!0);try{C?await l(C):n(null)}catch(E){console.error("Auth sync error:",E)}finally{i(!1)}}),[]),D.useEffect(()=>{QD(un).then(async x=>{x!=null&&x.user&&(console.log("[AUTH] Redirect result success:",x.user.email),await l(x.user))}).catch(x=>{console.error("[AUTH] Redirect result error:",x)})},[]);const P={user:e,ROLES:o,login:u,signup:c,logout:w,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return g.jsx(qA.Provider,{value:P,children:t})}const zn=jn("Preferences",{web:()=>ne(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),ue=jn("AppBlocker"),KA=D.createContext(null);function Sw(){return D.useContext(KA)}function rF({children:t}){const{user:e}=Co(),n=(H,Y)=>{try{const oe=localStorage.getItem(H);return oe!==null?JSON.parse(oe):Y}catch{return Y}},[r,i]=D.useState(!1),[s,o]=D.useState(0),[l,c]=D.useState("OTHERS"),[u,d]=D.useState(0),[f,m]=D.useState(0),[w,P]=D.useState(0),[x,C]=D.useState("COUNTDOWN"),[E,v]=D.useState(!1),[S,O]=D.useState(!1),[j,F]=D.useState(()=>n("allowedPackages","")),[T,_]=D.useState(()=>n("lockMode","NORMAL")),[I,k]=D.useState([]),[R,b]=D.useState(""),A=D.useRef(null),me=()=>{var H,Y,oe,be,Se;return gn.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((Y=(H=window.Capacitor).isNativePlatform)==null?void 0:Y.call(H))||((be=(oe=window.Capacitor).isPluginAvailable)==null?void 0:be.call(oe,"AppBlocker")))||((Se=gn.isPluginAvailable)==null?void 0:Se.call(gn,"AppBlocker"))},Q=async()=>{if(me())try{if(ue&&ue.getInstalledApps){const{apps:H}=await ue.getInstalledApps();k(H.sort((Y,oe)=>Y.name.localeCompare(oe.name)))}}catch(H){console.error("Fetch Apps Error:",H)}};D.useEffect(()=>{(async()=>{if(me()){await Q();try{const Y=await zn.get({key:"countdownEndTime"}),oe=Number(Y.value||0);if(oe>Date.now()){const be=Math.ceil((oe-Date.now())/1e3);o(be),i(!0),C("COUNTDOWN");const Se=await zn.get({key:"allowedPackages"});Se.value&&F(Se.value),console.log("Restored active focus session on initialization:",be,"seconds remaining")}else ue&&ue.stopBlocker&&await ue.stopBlocker(),ue&&ue.removeAdminRights&&await ue.removeAdminRights(),await zn.set({key:"isBlockerActive",value:"false"}),await zn.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(Y){console.error("Error restoring blocker state:",Y)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const le=H=>{if(F(H),localStorage.setItem("allowedPackages",JSON.stringify(H)),me()){zn.set({key:"allowedPackages",value:H});try{const Y=(H||"").split(",").filter(Boolean);Y.includes("com.apnacollegebihar.online")||Y.push("com.apnacollegebihar.online"),ue&&ue.setAllowedPackages&&ue.setAllowedPackages({packages:Y})}catch{}}},Ve=H=>{_(H),localStorage.setItem("lockMode",JSON.stringify(H)),me()&&zn.set({key:"lockMode",value:H})},B=H=>{if(H||v(!1),i(H),localStorage.setItem("timerActive",JSON.stringify(H)),me())try{if(H){if(ue&&ue.setBlockerActive&&ue.setBlockerActive({active:!0}),x==="COUNTDOWN"){ue&&ue.startCountdown&&ue.startCountdown({minutes:Math.ceil(s/60)});const oe=Date.now()+s*1e3;zn.set({key:"countdownEndTime",value:String(oe)})}const Y=(j||"").split(",").filter(Boolean);Y.includes("com.apnacollegebihar.online")||Y.push("com.apnacollegebihar.online"),ue&&ue.setAllowedPackages&&ue.setAllowedPackages({packages:Y}),zn.set({key:"isBlockerActive",value:"true"})}else ue&&ue.stopBlocker&&ue.stopBlocker(),ue&&ue.removeAdminRights&&ue.removeAdminRights(),zn.set({key:"isBlockerActive",value:"false"}),zn.set({key:"countdownEndTime",value:"0"})}catch(Y){console.error("Native Blocker Error:",Y)}},Z=H=>{O(H),localStorage.setItem("focusBroken",JSON.stringify(H))};D.useEffect(()=>{const H=Y=>{Y.key==="timerActive"&&i(JSON.parse(Y.newValue)),Y.key==="focusBroken"&&O(JSON.parse(Y.newValue)),Y.key==="lockMode"&&_(JSON.parse(Y.newValue))};return window.addEventListener("storage",H),()=>window.removeEventListener("storage",H)},[]),D.useEffect(()=>{r||o(x==="COUNTDOWN"?u*3600+f*60+w:0)},[x,u,f,w,r]);const re=async(H=null)=>{if(!e)return;const Y=H||(E?u*3600+f*60+w+s:x==="STOPWATCH"?s:u*3600+f*60-s);if(Y<5){v(!1),B(!1);return}try{const oe=new Date().toLocaleDateString("en-CA");await t4(As(en,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:Y,date:oe,createdAt:new Date().toISOString()});const be=hi(en,"users",e.uid),Se=await tA(be);if(Se.exists()){const at=Se.data(),Rt=at.lastStudyDate!==oe?Y:(at.todayStudyTime||0)+Y,Qt=new Date;Qt.setDate(Qt.getDate()-1);const Pt=Qt.toLocaleDateString("en-CA");let Yt=at.streak||0,He=at.streakDate||"";He!==oe&&He!==Pt&&(Yt=0),Rt>=7200&&He!==oe&&(He===Pt?Yt+=1:Yt=1,He=oe),await Ys(be,{totalStudyTime:(at.totalStudyTime||0)+Y,todayStudyTime:Rt,lastStudyDate:oe,streak:Yt,streakDate:He,isStudying:!1})}R&&(await Ys(hi(en,"Tasks",R),{done:!0}),b("")),v(!1),B(!1)}catch(oe){v(!1),console.error("Global Save Error:",oe)}};D.useEffect(()=>{e&&Ys(hi(en,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),D.useEffect(()=>{const H=Y=>{r&&(Y.preventDefault(),Y.returnValue="")};return window.addEventListener("beforeunload",H),()=>{window.removeEventListener("beforeunload",H)}},[r]),D.useEffect(()=>(r?A.current=setInterval(()=>{o(x==="COUNTDOWN"?H=>H<=1?(C("STOPWATCH"),v(!0),0):H-1:H=>H+1)},1e3):clearInterval(A.current),()=>clearInterval(A.current)),[r,x,e,u,f,w,R]);const we={timerActive:r,setTimerActive:B,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:c,customHours:u,setCustomHours:d,customMinutes:f,setCustomMinutes:m,customSeconds:w,setCustomSeconds:P,timerMode:x,setTimerMode:C,overtimeActive:E,setOvertimeActive:v,saveGlobalSession:re,focusBroken:S,setFocusBroken:Z,allowedPackages:j,setAllowedPackages:le,lockMode:T,setLockMode:Ve,installedApps:I,fetchApps:Q,selectedTaskId:R,setSelectedTaskId:b,launchApp:async H=>{if(me())try{ue&&ue.unlockApp&&await ue.unlockApp(),ue&&ue.launchApp&&await ue.launchApp({packageName:H})}catch(Y){console.error(Y)}},openUsageAccessSettings:async()=>{if(me())try{ue&&ue.requestUsageStatsPermission&&await ue.requestUsageStatsPermission()}catch(H){console.error(H)}}};return g.jsx(KA.Provider,{value:we,children:t})}const iF=jn("App",{web:()=>ne(()=>import("./web3.js"),[]).then(t=>new t.AppWeb)});var Aw;(function(t){t[t.Sunday=1]="Sunday",t[t.Monday=2]="Monday",t[t.Tuesday=3]="Tuesday",t[t.Wednesday=4]="Wednesday",t[t.Thursday=5]="Thursday",t[t.Friday=6]="Friday",t[t.Saturday=7]="Saturday"})(Aw||(Aw={}));const oa=jn("LocalNotifications",{web:()=>ne(()=>import("./web4.js"),[]).then(t=>new t.LocalNotificationsWeb)});var sF=typeof Element<"u",oF=typeof Map=="function",aF=typeof Set=="function",lF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function zc(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!zc(t[r],e[r]))return!1;return!0}var s;if(oF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!zc(r.value[1],e.get(r.value[0])))return!1;return!0}if(aF&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(lF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(sF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!zc(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var cF=function(e,n){try{return zc(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const uF=Uu(cF);var hF=function(t,e,n,r,i,s,o,l){if(!t){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,l],d=0;c=new Error(e.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},dF=hF;const kw=Uu(dF);var fF=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!c(d))return!1;var f=e[d],m=n[d];if(s=r?r.call(i,f,m,d):void 0,s===!1||s===void 0&&f!==m)return!1}return!0};const pF=Uu(fF);var GA=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(GA||{}),sf={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},xw=Object.values(GA),zh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},QA=Object.entries(zh).reduce((t,[e,n])=>(t[n]=e,t),{}),Cn="data-rh",Js={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Xs=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},mF=t=>{let e=Xs(t,"title");const n=Xs(t,Js.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Xs(t,Js.DEFAULT_TITLE);return e||r||void 0},gF=t=>Xs(t,Js.ON_CHANGE_CLIENT_STATE)||(()=>{}),of=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),yF=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),_F=t=>console&&typeof console.warn=="function"&&console.warn(t),aa=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&_F(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(c=>{let u;const d=Object.keys(c);for(let m=0;m<d.length;m+=1){const w=d[m],P=w.toLowerCase();e.indexOf(P)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(P==="rel"&&c[P].toLowerCase()==="stylesheet")&&(u=P),e.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(u=w)}if(!u||!c[u])return!1;const f=c[u].toLowerCase();return r[u]||(r[u]={}),o[u]||(o[u]={}),r[u][f]?!1:(o[u][f]=!0,!0)}).reverse().forEach(c=>i.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const u=l[c],d={...r[u],...o[u]};r[u]=d}return i},[]).reverse()},vF=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},wF=t=>({baseTag:yF(["href"],t),bodyAttributes:of("bodyAttributes",t),defer:Xs(t,Js.DEFER),encode:Xs(t,Js.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:of("htmlAttributes",t),linkTags:aa("link",["rel","href"],t),metaTags:aa("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:aa("noscript",["innerHTML"],t),onChangeClientState:gF(t),scriptTags:aa("script",["src","innerHTML"],t),styleTags:aa("style",["cssText"],t),title:mF(t),titleAttributes:of("titleAttributes",t),prioritizeSeoTags:vF(t,Js.PRIORITIZE_SEO_TAGS)}),YA=t=>Array.isArray(t)?t.join(""):t,EF=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},af=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(EF(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},Rw=(t,e)=>({...t,[e]:void 0}),TF=["noscript","script","style"],Up=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),JA=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),IF=(t,e,n,r)=>{const i=JA(n),s=YA(e);return i?`<${t} ${Cn}="true" ${i}>${Up(s,r)}</${t}>`:`<${t} ${Cn}="true">${Up(s,r)}</${t}>`},SF=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const f=typeof s[d]>"u"?d:`${d}="${Up(s[d],n)}"`;return u?`${u} ${f}`:f},""),l=s.innerHTML||s.cssText||"",c=TF.indexOf(t)===-1;return`${r}<${t} ${Cn}="true" ${o}${c?"/>":`>${l}</${t}>`}`},""),XA=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=zh[r];return n[i||r]=t[r],n},e),AF=(t,e,n)=>{const r={key:e,[Cn]:!0},i=XA(n,r);return[G.createElement("title",i,e)]},Hc=(t,e)=>e.map((n,r)=>{const i={key:r,[Cn]:!0};return Object.keys(n).forEach(s=>{const l=zh[s]||s;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[l]=n[s]}),G.createElement(t,i)}),hn=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>AF(t,e.title,e.titleAttributes),toString:()=>IF(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>XA(e),toString:()=>JA(e)};default:return{toComponent:()=>Hc(t,e),toString:()=>SF(t,e,n)}}},kF=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=af(t,sf.meta),s=af(e,sf.link),o=af(n,sf.script);return{priorityMethods:{toComponent:()=>[...Hc("meta",i.priority),...Hc("link",s.priority),...Hc("script",o.priority)],toString:()=>`${hn("meta",i.priority,r)} ${hn("link",s.priority,r)} ${hn("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},xF=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:u}=t;let{linkTags:d,metaTags:f,scriptTags:m}=t,w={toComponent:()=>[],toString:()=>""};return u&&({priorityMethods:w,linkTags:d,metaTags:f,scriptTags:m}=kF(t)),{priority:w,base:hn("base",e,r),bodyAttributes:hn("bodyAttributes",n,r),htmlAttributes:hn("htmlAttributes",i,r),link:hn("link",d,r),meta:hn("meta",f,r),noscript:hn("noscript",s,r),script:hn("script",m,r),style:hn("style",o,r),title:hn("title",{title:l,titleAttributes:c},r)}},Fp=xF,yc=[],ry=!!(typeof window<"u"&&window.document&&window.document.createElement),$p=class{constructor(t,e){ir(this,"instances",[]);ir(this,"canUseDOM",ry);ir(this,"context");ir(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?yc:this.instances,add:t=>{(this.canUseDOM?yc:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?yc:this.instances).indexOf(t);(this.canUseDOM?yc:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Fp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},RF=parseInt(G.version.split(".")[0],10),Bp=RF>=19,PF={},ZA=G.createContext(PF),Zs,ek=(Zs=class extends D.Component{constructor(n){super(n);ir(this,"helmetData");Bp?this.helmetData=null:this.helmetData=new $p(this.props.context||{},Zs.canUseDOM)}render(){return Bp?G.createElement(G.Fragment,null,this.props.children):G.createElement(ZA.Provider,{value:this.helmetData.value},this.props.children)}},ir(Zs,"canUseDOM",ry),Zs),ws=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${Cn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText"){const d=l.cssText;c.appendChild(document.createTextNode(d))}else{const d=u,f=typeof l[d]>"u"?"":l[d];c.setAttribute(u,f)}c.setAttribute(Cn,"true"),i.some((u,d)=>(o=d,c.isEqualNode(u)))?i.splice(o,1):s.push(c)}),i.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},zp=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(Cn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const c=e[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);const u=s.indexOf(l);u!==-1&&s.splice(u,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(Cn):n.getAttribute(Cn)!==o.join(",")&&n.setAttribute(Cn,o.join(","))},CF=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=YA(t)),zp("title",e)},Pw=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:d,title:f,titleAttributes:m}=t;zp("body",r),zp("html",i),CF(f,m);const w={baseTag:ws("base",n),linkTags:ws("link",s),metaTags:ws("meta",o),noscriptTags:ws("noscript",l),scriptTags:ws("script",u),styleTags:ws("style",d)},P={},x={};Object.keys(w).forEach(C=>{const{newTags:E,oldTags:v}=w[C];E.length&&(P[C]=E),v.length&&(x[C]=w[C].oldTags)}),e&&e(),c(t,P,x)},la=null,bF=t=>{la&&cancelAnimationFrame(la),t.defer?la=requestAnimationFrame(()=>{Pw(t,()=>{la=null})}):(Pw(t),la=null)},NF=bF,Cw=class extends D.Component{constructor(){super(...arguments);ir(this,"rendered",!1)}shouldComponentUpdate(e){return!pF(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=wF(e.get().map(s=>{const{context:o,...l}=s.props;return l}));ek.canUseDOM?NF(i):Fp&&(r=Fp(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Wc=[],bw=t=>{const e={};for(const n of Object.keys(t))e[QA[n]||n]=t[n];return e},Di=t=>{const e={};for(const n of Object.keys(t)){const r=zh[n];e[r||n]=t[n]}return e},Nw=(t,e)=>{if(!ry)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const c=e[l];c==null||c===!1?n.removeAttribute(l):c===!0?n.setAttribute(l,""):n.setAttribute(l,String(c))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},lf=()=>{const t={},e={};for(const n of Wc){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,bw(r)),i&&Object.assign(e,bw(i))}Nw("html",t),Nw("body",e)},DF=class extends D.Component{componentDidMount(){Wc.push(this),lf()}componentDidUpdate(){lf()}componentWillUnmount(){const t=Wc.indexOf(this);t!==-1&&Wc.splice(t,1),lf()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return G.createElement("title",Di(e),t)}renderBase(){const{base:t}=this.props;return t?G.createElement("base",Di(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("meta",{key:n,...Di(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("link",{key:n,...Di(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("noscript",{key:n,...s})})}render(){return G.createElement(G.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},df,OF=(df=class extends D.Component{shouldComponentUpdate(t){return!uF(Rw(this.props,"helmetData"),Rw(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return kw(xw.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${xw.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),kw(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return G.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((c,u)=>(c[QA[u]||u]=s[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof $p)){const i=r;r=new $p(i.context,!0),delete n.helmetData}return Bp?G.createElement(DF,{...n}):r?G.createElement(Cw,{...n,context:r.value}):G.createElement(ZA.Consumer,null,i=>G.createElement(Cw,{...n,context:i}))}},ir(df,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),df);function LF({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return G.useEffect(()=>{document.title=o;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",e);const c=document.querySelector('meta[property="og:title"]');c&&c.setAttribute("content",o);const u=document.querySelector('meta[property="og:description"]');u&&u.setAttribute("content",e)},[o,e]),g.jsxs(OF,{children:[g.jsx("title",{children:o}),g.jsx("meta",{name:"description",content:e}),g.jsx("meta",{name:"keywords",content:n}),g.jsx("link",{rel:"canonical",href:r}),g.jsx("meta",{property:"og:type",content:"website"}),g.jsx("meta",{property:"og:url",content:r}),g.jsx("meta",{property:"og:title",content:o}),g.jsx("meta",{property:"og:description",content:e}),g.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),g.jsx("meta",{property:"og:image",content:i}),g.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),g.jsx("meta",{name:"twitter:title",content:o}),g.jsx("meta",{name:"twitter:description",content:e}),g.jsx("meta",{name:"twitter:image",content:i}),s&&g.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}function VF(){return gn.isNativePlatform()?g.jsxs("footer",{className:"shrink-0 bg-transparent text-slate-500 py-8 px-6 mt-4 w-full",children:[g.jsxs("div",{className:"flex justify-center gap-6 mb-6",children:[g.jsx(Qe,{to:"/about",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"About"}),g.jsx(Qe,{to:"/contact",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Contact"}),g.jsx(Qe,{to:"/privacy-policy",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Privacy"}),g.jsx(Qe,{to:"/terms",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Terms"})]}),g.jsxs("div",{className:"text-center flex flex-col items-center justify-center gap-2",children:[g.jsxs("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:["© ",new Date().getFullYear()," Apna College Bihar."]}),g.jsxs("p",{className:"text-[10px] font-bold text-slate-500 tracking-wider",children:["Made with ",g.jsx("span",{className:"text-red-500",children:"❤️"})," for BEU STUDENTS"]})]})]}):g.jsxs("footer",{className:"relative bg-white pt-20 pb-8 px-6 md:px-16 mt-auto",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"}),g.jsxs("div",{className:"container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8",children:[g.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Apna College Bihar Logo",className:"w-12 h-12 rounded-xl shadow-sm"}),g.jsxs("div",{children:[g.jsx("span",{className:"text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none",children:"APNA COLLEGE BIHAR"}),g.jsx("span",{className:"text-[8px] text-blue-600 font-bold uppercase tracking-[0.4em] mt-1.5 block",children:"Official Study Engine"})]})]}),g.jsx("p",{className:"text-slate-500 font-medium text-sm leading-relaxed max-w-sm",children:"The largest academic platform dedicated to Bihar engineering students. Free notes, PYQs, syllabus, and counselling tools."}),g.jsxs("div",{className:"flex gap-3 pt-2",children:[g.jsx("a",{href:"https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:g.jsx(lb,{size:20,className:"group-hover:scale-110 transition-transform"})}),g.jsx("a",{href:"https://t.me/apnacollegebihar",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:g.jsx(gI,{size:20,className:"group-hover:scale-110 transition-transform"})}),g.jsx("a",{href:"https://youtube.com/@apnacollegebihar",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:g.jsx(fb,{size:20,className:"group-hover:scale-110 transition-transform"})})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Resources"}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx(Qe,{to:"/notes",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"B.Tech Notes"}),g.jsx(Qe,{to:"/pyq",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"PYQ Papers"}),g.jsx(Qe,{to:"/syllabus",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"BEU Syllabus"}),g.jsx(Qe,{to:"/cgpa",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"CGPA Calculator"})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Company"}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx(Qe,{to:"/about",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"About Us"}),g.jsx(Qe,{to:"/author",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Creator & Author"}),g.jsx(Qe,{to:"/contact",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Contact Us"}),g.jsx(Qe,{to:"/directory",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Sitemap"})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Legal"}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx(Qe,{to:"/privacy-policy",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Privacy Policy"}),g.jsx(Qe,{to:"/terms",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Terms & Conditions"}),g.jsx(Qe,{to:"/delete-account",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Delete Account"})]})]})]}),g.jsxs("div",{className:"container mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",children:[g.jsxs("p",{className:"text-[11px] font-black text-slate-400 uppercase tracking-widest",children:["© ",new Date().getFullYear()," APNA COLLEGE BIHAR. ALL RIGHTS RESERVED."]}),g.jsxs("p",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1",children:["Made with ",g.jsx(ib,{size:12,className:"text-rose-500 fill-rose-500"})," in Bihar"]})]})]})}const cf=jn("AppBlocker");function Dw(){var me;const t=gn.isNativePlatform(),e=vo(),n=zm(),{user:r,updateProfileData:i,logout:s,loading:o}=Co(),[l,c]=D.useState(""),[u,d]=D.useState(!1),[f,m]=D.useState(!1),[w,P]=D.useState(navigator.onLine),{timerActive:x,lockMode:C}=Sw(),[E,v]=D.useState(!1),[S,O]=D.useState(null),[j,F]=D.useState(!1),T=[{title:"BEU Tools",items:[{name:"BEU Result",path:"/beu-result",icon:g.jsx(nb,{size:16})},{name:"Attendance",path:"/attendance",icon:g.jsx(ub,{size:16})},{name:"Timetable",path:"/timetable",icon:g.jsx(Ev,{size:16})},{name:"Notes",path:"/notes",icon:g.jsx(vv,{size:16})},{name:"PYQ Papers",path:"/pyq",icon:g.jsx(tb,{size:16})},{name:"SGPA / CGPA",path:"/cgpa",icon:g.jsx(rb,{size:16})},{name:"Syllabus",path:"/syllabus",icon:g.jsx(sb,{size:16})}]},{title:"Study Tools",items:[{name:"Study Timer",path:"/study",icon:g.jsx(Av,{size:16})},{name:"Scientific Calc",path:"/calculator",icon:g.jsx(wv,{size:16})},{name:"Study Resources",path:"/study-resources",icon:g.jsx(ob,{size:16})},{name:"Personal Manager",path:"/extras",icon:g.jsx(hb,{size:16})},{name:"Achievements",path:"/achievements",icon:g.jsx(ZC,{size:16})}]},{title:"Counselling",items:[{name:"College Predictor",path:"/ugeac-predictor?tab=finder",icon:g.jsx(gI,{size:16})},{name:"Rank Predictor",path:"/ugeac-predictor?tab=predictor",icon:g.jsx(wv,{size:16})},{name:"Counselling Guide",path:"/ugeac-predictor?tab=guide",icon:g.jsx(vv,{size:16})}]}];D.useEffect(()=>{const Q=()=>P(!0),le=()=>P(!1);return window.addEventListener("online",Q),window.addEventListener("offline",le),()=>{window.removeEventListener("online",Q),window.removeEventListener("offline",le)}},[]),D.useEffect(()=>{d(!1),(async()=>{if(!(!r||!w)&&!t&&Vp)try{if(await Notification.requestPermission()==="granted"){const Ve=await UU(Vp,{vapidKey:$U});Ve&&await Ys(hi(en,"users",r.uid),{fcmToken:Ve})}}catch(le){console.error("Push notification setup failed:",le)}})()},[r,w,t]),D.useEffect(()=>{if(!r||!r.uid||!w)return;const Q=new Date,le=ia(As(en,"nudges"),An("toUserId","==",r.uid),An("timestamp",">=",Q)),Ve=n4(le,H=>{H.docChanges().forEach(Y=>{if(Y.type==="added"){const be=`📚 ${Y.doc.data().fromUserName||"Scholar"} says: padh lo padh lo kam dega!`;ye(be,{duration:6e3,icon:"💡",style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Study Nudge 📚",{body:be,icon:"/logo-acb.png"})}})});if(!t)return()=>Ve();(async()=>{var at;const H=new Date().toLocaleDateString("en-CA"),Y=new Date().getHours();if(Y>=5){const Me=`morning_greeting_${H}`;if(!localStorage.getItem(Me)){const Rt=ia(As(en,"StudySessions"),An("userId","==",r.uid),An("date","==",H)),Pt=!(await pc(Rt)).empty||x||Y>=8,Yt=r.name||"Bihari Babu";let He="",lt="";Pt?(He="Good Morning Biru 🌞",lt=`Subah-subah yaad aa gaya ki duniya mein ek banda aur hai jo bade-bade sapne dekhta hai aur phir unhe pura karne ki koshish bhi karta hai. 😄

Aaj ka mission simple hai:

Bakchodi limited 😜
Mehnat unlimited 💪
Tension zero 😌

Aur haan, agar aaj motivation na mile to yaad rakhna — sapne free hain, lekin unki EMI roz ki mehnat se bharni padti hai. 😅

Din mast jaye bhai, kuch aisa karna ki raat ko lage ki aaj ka din waste nahi gaya. ❤️✨`):(He=`Good Morning Bhai ${Yt} ☀️`,lt=`Uth ja bidu 😄, kitna soyega?

Naya din hai, naya chance hai. Kal jo nahi hua uska tension chhod, aaj jo kar sakta hai uspar focus kar.

Chai ☕ pi, fresh ho, aur lag ja apne kaam par. Thoda-thoda karke hi bade sapne pure hote hain.

Aur haan, mobile scroll karne se pehle apna target yaad kar lena. 😏

Chal bhai, aaj ka din phod dete hain. 💪🔥
Good Morning, have a great day! 🌞✨`),ye.custom(cn=>g.jsxs("div",{className:`${cn.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter'] z-[9999]`,children:[g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-xl",children:"🌅"}),g.jsx("h4",{className:"text-xs font-black uppercase tracking-wider text-amber-400",children:He})]}),g.jsx("button",{onClick:()=>ye.dismiss(cn.id),className:"text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-lg",children:"Close"})]}),g.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider leading-relaxed whitespace-pre-line text-slate-300",children:lt})]}),{duration:15e3}),"Notification"in window&&Notification.permission==="granted"&&new Notification(He,{body:lt.replace(/\n\n/g," "),icon:"/logo-acb.png"}),localStorage.setItem(Me,"true")}}let oe=!1;if(Y>=8){const Me=`timetable_alert_${H}`;if(!localStorage.getItem(Me)){const Qt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],Yt=(((at=r.timetableV3)==null?void 0:at[Qt])||[]).filter(He=>He.subject&&He.subject.trim()!=="");if(Yt.length>0){const lt=`🗓️ Aaj ki Classes:
${Yt.map(cn=>`• ${cn.startTime||""}: ${cn.subject}`).join(`
`)}
Time par pahunch jana biru, padhai shuru karo! 😉`;ye(lt,{duration:8e3,icon:"🗓️",style:{background:"#f8fafc",color:"#0f172a",fontWeight:"800",fontSize:"11px",border:"1px solid #e2e8f0"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Timetable Classes Alert",{body:lt,icon:"/logo-acb.png"})}localStorage.setItem(Me,"true"),oe=!0}}const be=()=>{var Me;if(Y>=6){const Rt=`attendance_alert_${H}`;if(!localStorage.getItem(Rt)){const Pt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],He=(((Me=r.timetableV3)==null?void 0:Me[Pt])||[]).filter(lt=>lt.subject&&lt.subject.trim()!=="").map(lt=>lt.subject.trim().toLowerCase());if(He.length>0){const lt=r.attendance||[],cn=[];He.forEach(In=>{const Jt=lt.find(Un=>Un.name.trim().toLowerCase()===In);if(Jt){const Un=Jt.total>0?Number((Jt.present/Jt.total*100).toFixed(1)):0,bo=je=>je<75?0:je<=80?1:je<=85?2:je<=90?3:je<=95?4:5;Un<75?cn.push({type:"danger",text:`🚨 Critical Attendance Alert: ${Jt.name} me attendance sirf ${Un}% hai (75% se niche)! College me back lag jayega biru, fatfat class lagao! 😤🔥`}):cn.push({type:"success",text:`🔥 Gazab Bhai! ${Jt.name} me attendance ${Un}% hai. Sessional me +${bo(Un)} number pakke hain tere! aise hi lagatar class karte raho! 💪✨`})}}),cn.forEach((In,Jt)=>{setTimeout(()=>{t?oa.schedule({notifications:[{title:"Attendance Alert",body:In.text,id:new Date().getTime()%1e5+Jt}]}):(ye(In.text,{duration:8e3,icon:In.type==="danger"?"🚨":"🔥",style:{background:In.type==="danger"?"#fecaca":"#d1fae5",color:In.type==="danger"?"#991b1b":"#065f46",fontWeight:"800",fontSize:"11px",border:`1px solid ${In.type==="danger"?"#fca5a5":"#6ee7b7"}`}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Attendance Alert",{body:In.text,icon:"/logo-acb.png"}))},Jt*1e3)})}localStorage.setItem(Rt,"true")}}};oe?setTimeout(be,2e3):be();const Se=async()=>{const Me=`target_check_${H}`;if(!localStorage.getItem(Me)){const Rt=ia(As(en,"Tasks"),An("userId","==",r.uid),An("date","==",H)),Qt=await pc(Rt);if(Qt.empty){const Pt="🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥";t?oa.schedule({notifications:[{title:"Target Alert",body:Pt,id:new Date().getTime()%1e5}]}):ye(Pt,{duration:8e3,icon:"🎯",style:{background:"#fffbeb",color:"#b45309",fontWeight:"800",fontSize:"11px",border:"1px solid #fde68a"}})}else{const Pt=`🎯 Targets Setup: Aaj ke ${Qt.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke dikha de aaj! 💪🔥`;t?oa.schedule({notifications:[{title:"Targets Setup",body:Pt,id:new Date().getTime()%1e5}]}):ye(Pt,{duration:8e3,icon:"✅",style:{background:"#f0fdf4",color:"#166534",fontWeight:"800",fontSize:"11px",border:"1px solid #bbf7d0"}})}localStorage.setItem(Me,"true")}};oe?setTimeout(Se,4e3):setTimeout(Se,1500)})();const Z=async()=>{if(x)return;const H=new Date().toLocaleDateString("en-CA"),Y=ia(As(en,"StudySessions"),An("userId","==",r.uid),An("date","==",H));if((await pc(Y)).docs.reduce((Me,Rt)=>Me+(Number(Rt.data().duration)||0),0)>=10800)return;const Se=ia(As(en,"Tasks"),An("userId","==",r.uid),An("date","==",H),An("done","==",!1));if(!(await pc(Se)).empty){const Me="📚 Bhai padh le, target complete karna hai, time waste mat kar! Sapne free hain biru, par unki EMI roz ki mehnat se bharni padti hai! 😉🔥";t?oa.schedule({notifications:[{title:"Padhai Remainder! 📚",body:Me,id:new Date().getTime()%1e5}]}):(ye(Me,{duration:9e3,icon:"✍️",style:{background:"#fff1f2",color:"#be123c",fontWeight:"900",fontSize:"11px",border:"1px solid #fecdd3"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Padhai Remainder! 📚",{body:Me,icon:"/logo-acb.png"}))}},re=setTimeout(Z,12e4),we=setInterval(Z,9e5);return()=>{Ve(),clearTimeout(re),clearInterval(we)}},[r,x,w,C]);const _=async Q=>{if(Q.preventDefault(),!(l.length<10)){m(!0);try{await i({phone:l}),d(!1)}catch(le){console.error(le)}finally{m(!1)}}};D.useEffect(()=>{if(t){x?cf.lockApp().catch(console.error):cf.unlockApp().catch(console.error);const Q=iF.addListener("appStateChange",({isActive:le})=>{le&&x&&cf.lockApp().catch(console.error)});return()=>{Q.then(le=>le.remove())}}},[x,C,t]),D.useEffect(()=>{t&&oa.requestPermissions().catch(console.error)},[t]);const I=(me=r==null?void 0:r.metadata)!=null&&me.creationTime?new Date(r.metadata.creationTime).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"Recently",k=()=>{const{timerActive:Q,timerTime:le}=Sw();if(!Q||e.pathname==="/study")return null;const Ve=Math.floor(le%3600/60),B=le%60;return g.jsxs("div",{onClick:()=>n("/study"),className:"flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-800 transition-all shadow-lg active:scale-95 group animate-pulse",children:[g.jsx(Av,{size:14,className:"text-blue-500 group-hover:text-white transition-colors"}),g.jsxs("span",{className:"text-[10px] md:text-xs font-black text-white tabular-nums tracking-tighter",children:[Ve.toString().padStart(2,"0"),":",B.toString().padStart(2,"0")]})]})},b=(Q=>Q==="/"?"Home":Q.includes("/study-resources")?"Study Resources":Q.includes("/study")?"Study Zone":Q.includes("/notes")?"B.Tech Notes":Q.includes("/pyq")?"PYQ Papers":Q.includes("/syllabus")?"BEU Syllabus":Q.includes("/cgpa")?"CGPA Calculator":Q.includes("/ugeac-predictor")?"UGEAC Predictor":Q.includes("/calculator")?"Calculator":Q.includes("/achievements")?"Achievements":Q.includes("/groups")?"Study Groups":Q.includes("/timetable")?"BEU Timetable":Q.includes("/attendance")?"BEU Attendance Tracker":Q.includes("/extras")?"Personal Manager":Q.includes("/calendar")?"Calendar":Q.includes("/beu-result")?"BEU Result":Q.includes("/admin")?"Admin Panel":"ACB Hub")(e.pathname),A=({to:Q,icon:le,label:Ve})=>{const B=e.pathname===Q||Q!=="/"&&e.pathname.startsWith(Q);return g.jsxs(Qe,{to:Q,onClick:()=>v(!1),className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${B?"bg-blue-600 text-white shadow-md shadow-blue-600/20":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[g.jsx("div",{className:`${B?"text-white":"text-slate-400"}`,children:typeof le=="function"?g.jsx(le,{size:18}):le}),g.jsx("span",{className:"text-[12px] uppercase tracking-wider font-black",children:Ve})]})};return g.jsxs("div",{className:"flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative",children:[g.jsx(LF,{title:b}),t&&g.jsxs("header",{className:"bg-white border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0 px-4 py-3 flex items-center justify-between",children:[g.jsx("button",{onClick:()=>n(-1),className:"p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors active:scale-95 flex items-center justify-center",children:g.jsx(eb,{size:20,strokeWidth:3})}),g.jsx("div",{className:"flex items-center justify-center",children:g.jsx("span",{className:"text-[12px] font-black tracking-widest uppercase text-slate-900 truncate px-2",children:b})}),g.jsx("div",{className:"flex items-center gap-2",children:g.jsx(k,{})})]}),!t&&g.jsx("header",{className:"bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0",children:g.jsxs("div",{className:"max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 md:gap-3 group cursor-pointer",onClick:()=>n("/"),children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"}),g.jsxs("div",{className:"block min-w-0",children:[g.jsx("span",{className:"text-[11px] sm:text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none truncate",children:"Apna College Bihar"}),g.jsx("span",{className:"text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block",children:"Official App"})]})]}),g.jsxs("nav",{className:"hidden lg:flex items-center gap-6",children:[g.jsx(Qe,{to:"/",className:"text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:"Home"}),T.map((Q,le)=>g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>O(S===le?null:le),className:"flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:[Q.title,g.jsx(Tv,{size:12,className:`transition-transform duration-200 ${S===le?"rotate-180":""}`})]}),S===le&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>O(null)}),g.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top",children:Q.items.map(Ve=>g.jsxs(Qe,{to:Ve.path,className:"flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold",onClick:()=>O(null),children:[g.jsx("span",{className:"w-4 h-4 text-slate-500",children:Ve.icon}),g.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest",children:Ve.name})]},Ve.name))})]})]},Q.title))]}),g.jsxs("div",{className:"flex items-center gap-3",children:[o?g.jsx("div",{className:"w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}):r?g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(k,{}),g.jsxs("div",{className:`relative ${t?"hidden":"hidden lg:block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:"ApnaCollegeBihar_Stable.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>F(!j),className:"flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-50 border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group",children:[g.jsx("div",{className:"w-5 h-5 rounded-lg overflow-hidden bg-slate-100",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Profile",className:"w-full h-full object-cover"})}),g.jsx("span",{className:"hidden md:inline",children:"My Profile"}),g.jsx(Tv,{size:12,className:`transition-transform duration-300 ${j?"rotate-180":""}`})]}),j&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>F(!1)}),g.jsxs("div",{className:"absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right",children:[g.jsxs("div",{className:"px-5 py-5 border-b border-slate-100 mb-2 text-center",children:[g.jsx("div",{className:"w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"ACB",className:"w-full h-full object-cover"})}),g.jsx("p",{className:"text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1",children:"ACB Official Account"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-900 truncate",children:r.email}),g.jsxs("div",{className:"flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold",children:[g.jsx(Ev,{size:10,className:"text-blue-500"}),g.jsxs("span",{children:["Joined: ",g.jsx("strong",{className:"text-slate-900",children:I})]})]})]}),g.jsx("div",{className:"space-y-1",children:g.jsxs("button",{onClick:()=>s(),className:"flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group",children:[g.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors",children:g.jsx(Iv,{size:14})}),g.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Logout Session"})]})})]})]})]})]}):g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(k,{}),g.jsxs("div",{className:`relative ${t?"hidden":"hidden lg:block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:"ApnaCollegeBihar_Stable.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsx(Qe,{to:"/login",className:"hidden md:block px-4 py-2.5 md:px-5 md:py-3 text-slate-600 hover:text-slate-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-colors",children:"Login"}),g.jsx(Qe,{to:"/signup",className:"px-3 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/30 active:scale-95 shrink-0",children:"Sign Up"})]}),g.jsx("button",{onClick:()=>v(!0),className:"flex lg:hidden items-center justify-center p-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors ml-1 shrink-0",children:g.jsx(ab,{size:24})})]})]})}),g.jsxs("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-[#f8fafc] flex flex-col",children:[g.jsx("div",{className:`w-full grow shrink-0 pb-24 lg:pb-8 min-h-[80vh] ${e.pathname==="/"?"":"p-4 md:p-6 lg:p-8 max-w-7xl mx-auto"}`,children:g.jsx(Hm,{})}),g.jsx(VF,{})]}),E&&g.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden",onClick:()=>v(!1)}),g.jsxs("aside",{className:`fixed inset-y-0 right-0 w-72 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${E?"translate-x-0":"translate-x-full"}`,children:[g.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50",children:[g.jsx("span",{className:"text-[10px] font-black tracking-widest uppercase text-slate-400 block leading-none",children:"Navigation Menu"}),g.jsx("button",{onClick:()=>v(!1),className:"text-slate-400 hover:text-slate-900 bg-white p-2 rounded-xl shadow-sm border border-slate-200",children:g.jsx(db,{size:16,strokeWidth:3})})]}),g.jsx("div",{className:"flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar",children:T.map(Q=>g.jsxs("div",{children:[g.jsxs("p",{className:"px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[g.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"})," ",Q.title]}),g.jsx("div",{className:"space-y-1",children:Q.items.map(le=>g.jsx(A,{to:le.path,icon:()=>le.icon,label:le.name},le.name))})]},Q.title))}),g.jsx("div",{className:"p-4 border-t border-slate-100 bg-slate-50",children:g.jsxs("button",{onClick:()=>s(),className:"w-full flex items-center justify-center gap-2 px-4 py-4 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest shadow-sm border border-slate-200",children:[g.jsx(Iv,{size:16,strokeWidth:2.5})," Logout Session"]})})]}),u&&w&&g.jsx("div",{className:"fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:g.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:g.jsx(cb,{size:32})}),g.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),g.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:_,className:"space-y-6",children:[g.jsxs("div",{className:"flex gap-2",children:[g.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),g.jsx("input",{type:"tel",maxLength:10,value:l,onChange:Q=>c(Q.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),g.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})})]})}const MF=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=Co(),[i,s]=D.useState(""),[o,l]=D.useState(!1);if(e)return g.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),g.jsx(_u,{to:"/login",replace:!0});const c=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",u=async f=>{if(f.preventDefault(),i.length<10)return Od.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),Od.success("Mobile number linked securely!")}catch{Od.error("Failed to save. Try again.")}finally{l(!1)}};return c?g.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(yI,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[g.jsxs("div",{className:"relative group",children:[g.jsx(Sv,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),g.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),g.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),g.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[g.jsx(Sv,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),g.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):g.jsx(Hm,{})},jF=()=>{const{user:t,loading:e,ROLES:n}=Co();return e?g.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?g.jsx(Hm,{}):g.jsx(_u,{to:"/",replace:!0})},UF=G.lazy(()=>ne(()=>import("./Home.js"),["assets/Home.js","assets/search.js","assets/loader-2.js","assets/external-link.js","assets/map-pin.js","assets/briefcase.js","assets/check-circle.js","assets/download.js","assets/arrow-right.js","assets/chevron-right.js","assets/arrow-up-right.js","assets/layers.js","assets/database.js","assets/target.js","assets/zap.js","assets/plus.js","assets/minus.js"]));G.lazy(()=>ne(()=>import("./HomeOverview.js"),["assets/HomeOverview.js","assets/sparkles.js","assets/users.js","assets/flame.js","assets/check-circle.js","assets/zap.js","assets/arrow-right.js"]));const FF=G.lazy(()=>ne(()=>import("./Author.js"),["assets/Author.js","assets/target.js","assets/check-circle.js"])),Ow=G.lazy(()=>ne(()=>import("./AppHub.js"),["assets/AppHub.js","assets/log-in.js","assets/trash-2.js","assets/arrow-right.js","assets/users.js","assets/briefcase.js","assets/external-link.js"])),$F=G.lazy(()=>ne(()=>import("./Notifications.js"),["assets/Notifications.js","assets/search.js","assets/arrow-up-right.js"])),BF=G.lazy(()=>ne(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js"])),zF=G.lazy(()=>ne(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js"])),HF=G.lazy(()=>ne(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/UgeacData.js","assets/pdfHelper.js","assets/check-circle-2.js","assets/zap.js","assets/layers.js","assets/download.js","assets/info.js","assets/building-2.js","assets/chevron-up.js","assets/trash-2.js","assets/plus.js","assets/wifi.js","assets/search.js","assets/map-pin.js","assets/external-link.js","assets/UgeacPredictor.css"])),uf=G.lazy(()=>ne(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),hf=G.lazy(()=>ne(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),Lw=G.lazy(()=>ne(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-up.js"])),WF=G.lazy(()=>ne(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/check-circle.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/bar-chart-3.js"])),qF=G.lazy(()=>ne(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js"])),KF=G.lazy(()=>ne(()=>import("./StudyResources.js"),["assets/StudyResources.js","assets/loader-2.js","assets/plus.js","assets/alert-circle.js","assets/search.js","assets/external-link.js"])),GF=G.lazy(()=>ne(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),QF=G.lazy(()=>ne(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/bar-chart-3.js","assets/search.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),YF=G.lazy(()=>ne(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js"])),JF=G.lazy(()=>ne(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),XF=G.lazy(()=>ne(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/chevron-right.js"])),ZF=G.lazy(()=>ne(()=>import("./Timetable.js"),["assets/Timetable.js","assets/arrow-right.js","assets/save.js","assets/info.js","assets/plus.js"])),e6=G.lazy(()=>ne(()=>import("./Attendance.js"),["assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/minus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),t6=G.lazy(()=>ne(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/external-link.js","assets/info.js"])),n6=G.lazy(()=>ne(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js"])),r6=G.lazy(()=>ne(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),i6=G.lazy(()=>ne(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/database.js","assets/eye.js"])),s6=G.lazy(()=>ne(()=>import("./Terms.js"),["assets/Terms.js","assets/check-circle-2.js"])),o6=G.lazy(()=>ne(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/trash-2.js","assets/log-in.js"])),a6=G.lazy(()=>ne(()=>import("./About.js"),["assets/About.js","assets/sparkles.js","assets/users.js"])),l6=G.lazy(()=>ne(()=>import("./Contact.js"),["assets/Contact.js","assets/check-circle-2.js","assets/help-circle.js"])),c6=G.lazy(()=>ne(()=>import("./SearchSEO.js"),["assets/SearchSEO.js","assets/search.js","assets/loader-2.js","assets/arrow-right.js"])),Vw=G.lazy(()=>ne(()=>import("./BeuToolSEO.js"),["assets/BeuToolSEO.js","assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/minus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js","assets/Timetable.js","assets/arrow-right.js","assets/save.js","assets/BeuCgpa.js","assets/check-circle.js","assets/chevron-up.js","assets/bar-chart-3.js","assets/BeuResult.js"])),Mw=G.lazy(()=>ne(()=>import("./FeatureSEO.js"),["assets/FeatureSEO.js","assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js","assets/Group.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js","assets/StudyResources.js","assets/loader-2.js","assets/external-link.js","assets/ScientificCalc.js","assets/PersonalManager.js","assets/arrow-left.js","assets/save.js"])),jw=G.lazy(()=>ne(()=>import("./CollegeProfile.js"),["assets/CollegeProfile.js","assets/collegeData.js","assets/building-2.js","assets/arrow-right.js","assets/chevron-right.js","assets/check-circle.js","assets/map-pin.js","assets/download.js","assets/layers.js","assets/users.js","assets/target.js","assets/wifi.js","assets/clock.js"])),Uw=G.lazy(()=>ne(()=>import("./BranchHub.js"),["assets/BranchHub.js","assets/chevron-right.js","assets/cpu.js","assets/briefcase.js","assets/bar-chart-3.js","assets/users.js","assets/help-circle.js"])),u6=G.lazy(()=>ne(()=>import("./UgeacInfo.js"),["assets/UgeacInfo.js","assets/chevron-right.js","assets/help-circle.js","assets/check-circle-2.js"])),Fw=G.lazy(()=>ne(()=>import("./SubjectPage.js"),["assets/SubjectPage.js","assets/chevron-right.js","assets/loader-2.js","assets/download.js"])),h6=G.lazy(()=>ne(()=>import("./HackathonHub.js"),["assets/HackathonHub.js","assets/chevron-right.js","assets/plus.js","assets/search.js","assets/loader-2.js","assets/external-link.js","assets/building-2.js","assets/check-circle-2.js","assets/users.js"])),d6=G.lazy(()=>ne(()=>import("./SitemapDirectory.js"),["assets/SitemapDirectory.js","assets/UgeacData.js","assets/building-2.js","assets/cpu.js","assets/arrow-right.js"])),f6=G.lazy(()=>ne(()=>import("./CollegeDirectory.js"),["assets/CollegeDirectory.js","assets/collegeData.js","assets/building-2.js","assets/search.js","assets/target.js","assets/map-pin.js","assets/layers.js","assets/check-circle.js","assets/chevron-right.js"])),$w=G.lazy(()=>ne(()=>import("./CompareColleges.js"),["assets/CompareColleges.js","assets/UgeacData.js","assets/layers.js","assets/arrow-right.js"])),p6=G.lazy(()=>ne(()=>import("./PercentilePredictor.js"),[]));function m6(){return g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function g6(){var w,P,x;const{user:t,updateProfileData:e,logout:n}=Co(),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,c]=D.useState(""),[u,d]=D.useState(!1);if(D.useEffect(()=>{t&&(i(t.name&&t.name!=="Scholar"?t.name:""),o(t.collegeName||""),c(t.phone&&t.phone!=="NOT LINKED"?t.phone:""))},[t]),!(t&&(!(t!=null&&t.phone)||((w=t==null?void 0:t.phone)==null?void 0:w.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED"||!(t!=null&&t.name)||((P=t==null?void 0:t.name)==null?void 0:P.trim())===""||(t==null?void 0:t.name)==="Scholar"||!(t!=null&&t.collegeName)||((x=t==null?void 0:t.collegeName)==null?void 0:x.trim())==="")))return null;const m=async C=>{if(C.preventDefault(),!r.trim())return ye.error("Please enter your name!");if(!s.trim())return ye.error("Please enter your college name!");if(l.length<10)return ye.error("Enter a valid 10-digit mobile number!");d(!0);try{await e({name:r.trim(),collegeName:s.trim(),phone:l}),ye.success("Profile setup completed successfully!")}catch{ye.error("Failed to save. Try again.")}finally{d(!1)}};return g.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(yI,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Profile Setup"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-6",children:"Please complete your details to unlock and secure your college portal access."}),g.jsxs("form",{onSubmit:m,className:"w-full space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Full Name"}),g.jsx("input",{type:"text",value:r,onChange:C=>i(C.target.value),placeholder:"YOUR FULL NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"College Name"}),g.jsx("input",{type:"text",value:s,onChange:C=>o(C.target.value),placeholder:"YOUR COLLEGE NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Mobile Number"}),g.jsx("input",{type:"tel",value:l,onChange:C=>c(C.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsx("button",{type:"submit",disabled:u,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:u?"Saving details...":"Save & Continue"})]}),g.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function y6(){const{user:t,loading:e}=Co(),[n,r]=D.useState(!0),[i,s]=D.useState(window.innerWidth<768),o=gn.isNativePlatform();new URLSearchParams(window.location.search).get("standalone")==="true"&&sessionStorage.setItem("standalone","true");const c=o||sessionStorage.getItem("standalone")==="true";if(D.useEffect(()=>{const u=()=>s(window.innerWidth<768);return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),D.useEffect(()=>{const u=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(u)),()=>clearTimeout(u)},[e]),n)return g.jsxs("div",{className:"min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return g.jsxs(g.Fragment,{children:[g.jsx(QC,{position:"top-right"}),g.jsx(g6,{}),g.jsx(G.Suspense,{fallback:g.jsx(m6,{}),children:g.jsxs(JP,{children:[g.jsx(J,{path:"/hub",element:g.jsx(Ow,{})}),g.jsx(J,{path:"/login",element:g.jsx(BF,{})}),g.jsx(J,{path:"/signup",element:g.jsx(zF,{})}),g.jsx(J,{path:"/privacy-policy",element:g.jsx(i6,{})}),g.jsx(J,{path:"/terms",element:g.jsx(s6,{})}),g.jsx(J,{path:"/delete-account",element:g.jsx(o6,{})}),g.jsx(J,{path:"/about",element:g.jsx(a6,{})}),g.jsx(J,{path:"/author",element:g.jsx(FF,{})}),g.jsx(J,{path:"/contact",element:g.jsx(l6,{})}),g.jsx(J,{path:"/directory",element:c?g.jsx(_u,{to:"/",replace:!0}):g.jsx(d6,{})}),o&&g.jsx(J,{path:"/",element:g.jsx(Ow,{})}),g.jsxs(J,{element:g.jsx(Dw,{}),children:[!o&&g.jsx(J,{path:"/",element:g.jsx(UF,{})}),g.jsx(J,{path:"/notifications",element:g.jsx($F,{})}),g.jsx(J,{path:"/search/:keyword",element:g.jsx(c6,{})}),g.jsx(J,{path:"/notes",element:g.jsx(uf,{})}),g.jsx(J,{path:"/notes/:branchId/:semesterId",element:g.jsx(uf,{})}),g.jsx(J,{path:"/notes/:branchId",element:g.jsx(uf,{})}),g.jsx(J,{path:"/pyq",element:g.jsx(hf,{})}),g.jsx(J,{path:"/pyq/:branchId/:semesterId",element:g.jsx(hf,{})}),g.jsx(J,{path:"/pyq/:branchId",element:g.jsx(hf,{})}),g.jsx(J,{path:"/attendance",element:g.jsx(e6,{})}),g.jsx(J,{path:"/timetable",element:g.jsx(ZF,{})}),g.jsx(J,{path:"/study",element:g.jsx(qF,{})}),g.jsx(J,{path:"/study-resources",element:g.jsx(KF,{})}),g.jsx(J,{path:"/calculator",element:g.jsx(GF,{})}),g.jsx(J,{path:"/groups",element:g.jsx(JF,{})}),g.jsx(J,{path:"/groups/:groupId",element:g.jsx(XF,{})}),g.jsx(J,{path:"/achievements",element:g.jsx(YF,{})}),g.jsx(J,{path:"/extras",element:g.jsx(n6,{})}),g.jsx(J,{path:"/calendar",element:g.jsx(r6,{})}),g.jsx(J,{path:"/cgpa",element:g.jsx(WF,{})}),g.jsx(J,{path:"/ugeac-predictor",element:g.jsx(HF,{})}),g.jsx(J,{path:"/beu-result",element:g.jsx(t6,{})}),g.jsx(J,{path:"/syllabus",element:g.jsx(Lw,{})}),g.jsx(J,{path:"/syllabus/:branchId",element:g.jsx(Lw,{})}),g.jsx(J,{path:"/colleges",element:g.jsx(f6,{})}),g.jsx(J,{path:"/college/:collegeSlug",element:g.jsx(jw,{})}),g.jsx(J,{path:"/college/:collegeSlug/:section",element:g.jsx(jw,{})}),g.jsx(J,{path:"/branch/:branchId",element:g.jsx(Uw,{})}),g.jsx(J,{path:"/branch/:branchId/:section",element:g.jsx(Uw,{})}),g.jsx(J,{path:"/ugeac/:page",element:g.jsx(u6,{})}),g.jsx(J,{path:"/subject/:subjectSlug",element:g.jsx(Fw,{})}),g.jsx(J,{path:"/subject/:subjectSlug/:section",element:g.jsx(Fw,{})}),g.jsx(J,{path:"/hackathons",element:g.jsx(h6,{})}),g.jsx(J,{path:"/compare",element:g.jsx($w,{})}),g.jsx(J,{path:"/compare/:college1VsCollege2",element:g.jsx($w,{})}),g.jsx(J,{path:"/percentile-predictor",element:g.jsx(p6,{})}),g.jsx(J,{path:"/beu/:tool",element:g.jsx(Vw,{})}),g.jsx(J,{path:"/beu/:tool/:keyword",element:g.jsx(Vw,{})}),g.jsx(J,{path:"/feature/:feature",element:g.jsx(Mw,{})}),g.jsx(J,{path:"/feature/:feature/:keyword",element:g.jsx(Mw,{})})]}),g.jsx(J,{element:g.jsx(MF,{}),children:g.jsx(J,{element:g.jsx(Dw,{}),children:g.jsx(J,{element:g.jsx(jF,{}),children:g.jsx(J,{path:"/dashboard/admin",element:g.jsx(QF,{})})})})}),g.jsx(J,{path:"*",element:g.jsx(_u,{to:"/",replace:!0})})]})})]})}catch(u){return console.error("App Crash:",u),g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[g.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:g.jsx(XC,{size:32})}),g.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),g.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const Bw=document.getElementById("root");if(!Bw)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=ff.createRoot(Bw);console.log("[DEBUG] Rendering app to root..."),t.render(g.jsx(G.StrictMode,{children:g.jsx(ek,{children:g.jsx(nF,{children:g.jsx(rF,{children:g.jsx(iC,{children:g.jsx(y6,{})})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{tA as $,ZC as A,vv as B,Ev as C,Tv as D,An as E,tb as F,rb as G,v6 as H,Uu as I,Ys as J,hi as K,Qe as L,lb as M,K6 as N,t4 as O,Z0 as P,Y6 as Q,G as R,LF as S,Av as T,hb as U,J6 as V,G6 as W,db as X,fb as Y,Q6 as Z,ne as _,Co as a,Sw as a0,XC as a1,OO as a2,j6 as a3,ib as a4,Od as a5,gn as a6,jn as a7,z6 as a8,H6 as a9,P6 as aA,MD as aB,T6 as aC,O6 as aD,L6 as aE,D6 as aF,N2 as aG,N6 as aH,qD as aI,Yv as aJ,$6 as aK,F6 as aL,eD as aM,Ir as aN,V6 as aO,Fv as aP,PD as aQ,h1 as aR,c1 as aS,X6 as aT,Bh as aa,k6 as ab,nD as ac,A6 as ad,C6 as ae,QD as af,Dc as ag,R6 as ah,Iw as ai,fs as aj,zr as ak,Hr as al,Kn as am,LD as an,U6 as ao,Wr as ap,o2 as aq,M6 as ar,b6 as as,S6 as at,x6 as au,Tw as av,hD as aw,E6 as ax,I6 as ay,rD as az,W6 as b,As as c,en as d,sb as e,wv as f,pc as g,gI as h,Pe as i,g as j,eb as k,q6 as l,cb as m,yI as n,n4 as o,Iv as p,ia as q,D as r,VF as s,nb as t,zm as u,ub as v,ob as w,ye as x,w6 as y,vo as z};
