var qk=Object.defineProperty;var Kk=(t,e,n)=>e in t?qk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ir=(t,e,n)=>(Kk(t,typeof e!="symbol"?e+"":e,n),n);function Gk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var N6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tE={exports:{}},$u={},nE={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),Qk=Symbol.for("react.portal"),Yk=Symbol.for("react.fragment"),Jk=Symbol.for("react.strict_mode"),Xk=Symbol.for("react.profiler"),Zk=Symbol.for("react.provider"),ex=Symbol.for("react.context"),tx=Symbol.for("react.forward_ref"),nx=Symbol.for("react.suspense"),rx=Symbol.for("react.memo"),ix=Symbol.for("react.lazy"),n_=Symbol.iterator;function sx(t){return t===null||typeof t!="object"?null:(t=n_&&t[n_]||t["@@iterator"],typeof t=="function"?t:null)}var rE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iE=Object.assign,sE={};function po(t,e,n){this.props=t,this.context=e,this.refs=sE,this.updater=n||rE}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function oE(){}oE.prototype=po.prototype;function Gp(t,e,n){this.props=t,this.context=e,this.refs=sE,this.updater=n||rE}var Qp=Gp.prototype=new oE;Qp.constructor=Gp;iE(Qp,po.prototype);Qp.isPureReactComponent=!0;var r_=Array.isArray,aE=Object.prototype.hasOwnProperty,Yp={current:null},lE={key:!0,ref:!0,__self:!0,__source:!0};function cE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)aE.call(e,r)&&!lE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_l,type:t,key:s,ref:o,props:i,_owner:Yp.current}}function ox(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function ax(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var i_=/\/+/g;function cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ax(""+t.key):e.toString(36)}function vc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case Qk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cd(o,0):r,r_(i)?(n="",t!=null&&(n=t.replace(i_,"$&/")+"/"),vc(i,e,n,"",function(u){return u})):i!=null&&(Jp(i)&&(i=ox(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(i_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",r_(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+cd(s,l);o+=vc(s,e,n,c,i)}else if(c=sx(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+cd(s,l++),o+=vc(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],i=0;return vc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},wc={transition:null},cx={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:wc,ReactCurrentOwner:Yp};function uE(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!Jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=po;ce.Fragment=Yk;ce.Profiler=Xk;ce.PureComponent=Gp;ce.StrictMode=Jk;ce.Suspense=nx;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx;ce.act=uE;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)aE.call(e,c)&&!lE.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_l,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:ex,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zk,_context:t},t.Consumer=t};ce.createElement=cE;ce.createFactory=function(t){var e=cE.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:tx,render:t}};ce.isValidElement=Jp;ce.lazy=function(t){return{$$typeof:ix,_payload:{_status:-1,_result:t},_init:lx}};ce.memo=function(t,e){return{$$typeof:rx,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=wc.transition;wc.transition={};try{t()}finally{wc.transition=e}};ce.unstable_act=uE;ce.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ce.useContext=function(t){return Mt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ce.useId=function(){return Mt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ce.useRef=function(t){return Mt.current.useRef(t)};ce.useState=function(t){return Mt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Mt.current.useTransition()};ce.version="18.3.1";nE.exports=ce;var D=nE.exports;const G=Bu(D),ux=Gk({__proto__:null,default:G},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=D,dx=Symbol.for("react.element"),fx=Symbol.for("react.fragment"),px=Object.prototype.hasOwnProperty,mx=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gx={key:!0,ref:!0,__self:!0,__source:!0};function hE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)px.call(e,r)&&!gx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dx,type:t,key:s,ref:o,props:i,_owner:mx.current}}$u.Fragment=fx;$u.jsx=hE;$u.jsxs=hE;tE.exports=$u;var m=tE.exports,pf={},dE={exports:{}},an={},fE={exports:{}},pE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Z){var re=$.length;$.push(Z);e:for(;0<re;){var we=re-1>>>1,H=$[we];if(0<i(H,Z))$[we]=Z,$[re]=H,re=we;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Z=$[0],re=$.pop();if(re!==Z){$[0]=re;e:for(var we=0,H=$.length,J=H>>>1;we<J;){var le=2*(we+1)-1,Ve=$[le],Se=le+1,at=$[Se];if(0>i(Ve,re))Se<H&&0>i(at,Ve)?($[we]=at,$[Se]=re,we=Se):($[we]=Ve,$[le]=re,we=le);else if(Se<H&&0>i(at,re))$[we]=at,$[Se]=re,we=Se;else break e}}return Z}function i($,Z){var re=$.sortIndex-Z.sortIndex;return re!==0?re:$.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,f=null,g=3,w=!1,P=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var Z=n(u);Z!==null;){if(Z.callback===null)r(u);else if(Z.startTime<=$)r(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=n(u)}}function O($){if(x=!1,E($),!P)if(n(c)!==null)P=!0,oe(j);else{var Z=n(u);Z!==null&&Ce(O,Z.startTime-$)}}function j($,Z){P=!1,x&&(x=!1,T(_),_=-1),w=!0;var re=g;try{for(E(Z),f=n(c);f!==null&&(!(f.expirationTime>Z)||$&&!R());){var we=f.callback;if(typeof we=="function"){f.callback=null,g=f.priorityLevel;var H=we(f.expirationTime<=Z);Z=t.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),E(Z)}else r(c);f=n(c)}if(f!==null)var J=!0;else{var le=n(u);le!==null&&Ce(O,le.startTime-Z),J=!1}return J}finally{f=null,g=re,w=!1}}var F=!1,I=null,_=-1,S=5,k=-1;function R(){return!(t.unstable_now()-k<S)}function b(){if(I!==null){var $=t.unstable_now();k=$;var Z=!0;try{Z=I(!0,$)}finally{Z?A():(F=!1,I=null)}}else F=!1}var A;if(typeof v=="function")A=function(){v(b)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,q=me.port2;me.port1.onmessage=b,A=function(){q.postMessage(null)}}else A=function(){C(b,0)};function oe($){I=$,F||(F=!0,A())}function Ce($,Z){_=C(function(){$(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||w||(P=!0,oe(j))},t.unstable_forceFrameRate=function($){0>$||125<$||(S=0<$?Math.floor(1e3/$):5)},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var re=g;g=Z;try{return $()}finally{g=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var re=g;g=$;try{return Z()}finally{g=re}},t.unstable_scheduleCallback=function($,Z,re){var we=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?we+re:we):re=we,$){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,$={id:d++,callback:Z,priorityLevel:$,startTime:re,expirationTime:H,sortIndex:-1},re>we?($.sortIndex=re,e(u,$),n(c)===null&&$===n(u)&&(x?(T(_),_=-1):x=!0,Ce(O,re-we))):($.sortIndex=H,e(c,$),P||w||(P=!0,oe(j))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Z=g;return function(){var re=g;g=Z;try{return $.apply(this,arguments)}finally{g=re}}}})(pE);fE.exports=pE;var yx=fE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=D,on=yx;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mE=new Set,ja={};function as(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(ja[t]=e,t=0;t<e.length;t++)mE.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=Object.prototype.hasOwnProperty,vx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,s_={},o_={};function wx(t){return mf.call(o_,t)?!0:mf.call(s_,t)?!1:vx.test(t)?o_[t]=!0:(s_[t]=!0,!1)}function Ex(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Tx(t,e,n,r){if(e===null||typeof e>"u"||Ex(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xp=/[\-:]([a-z])/g;function Zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xp,Zp);_t[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xp,Zp);_t[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xp,Zp);_t[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function em(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tx(e,n,i,r)&&(n=null),r||i===null?wx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xr=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),ks=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),gf=Symbol.for("react.profiler"),gE=Symbol.for("react.provider"),yE=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),rm=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),_E=Symbol.for("react.offscreen"),a_=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=a_&&t[a_]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,ud;function ca(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var hd=!1;function dd(t,e){if(!t||hd)return"";hd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{hd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function Ix(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=dd(t.type,!1),t;case 11:return t=dd(t.type.render,!1),t;case 1:return t=dd(t.type,!0),t;default:return""}}function vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case ks:return"Portal";case gf:return"Profiler";case tm:return"StrictMode";case yf:return"Suspense";case _f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yE:return(t.displayName||"Context")+".Consumer";case gE:return(t._context.displayName||"Context")+".Provider";case nm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rm:return e=t.displayName||null,e!==null?e:vf(t.type)||"Memo";case jr:e=t._payload,t=t._init;try{return vf(t(e))}catch{}}return null}function Sx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===tm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ax(t){var e=vE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kl(t){t._valueTracker||(t._valueTracker=Ax(t))}function wE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=vE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wf(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function l_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function EE(t,e){e=e.checked,e!=null&&em(t,"checked",e,!1)}function Ef(t,e){EE(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tf(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function c_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tf(t,e,n){(e!=="number"||Qc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function u_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ua(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function TE(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function h_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function IE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?IE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gl,SE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gl=Gl||document.createElement("div"),Gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kx=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){kx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function AE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function kE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=AE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xx=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Af(t,e){if(e){if(xx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,Us=null,Fs=null;function d_(t){if(t=El(t)){if(typeof Rf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Ku(e),Rf(t.stateNode,t.type,e))}}function xE(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function RE(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,d_(t),e)for(t=0;t<e.length;t++)d_(e[t])}}function PE(t,e){return t(e)}function CE(){}var fd=!1;function bE(t,e,n){if(fd)return t(e,n);fd=!0;try{return PE(t,e,n)}finally{fd=!1,(Us!==null||Fs!==null)&&(CE(),RE())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Pf=!1;if(gr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Pf=!1}function Rx(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ea=!1,Yc=null,Jc=!1,Cf=null,Px={onError:function(t){Ea=!0,Yc=t}};function Cx(t,e,n,r,i,s,o,l,c){Ea=!1,Yc=null,Rx.apply(Px,arguments)}function bx(t,e,n,r,i,s,o,l,c){if(Cx.apply(this,arguments),Ea){if(Ea){var u=Yc;Ea=!1,Yc=null}else throw Error(U(198));Jc||(Jc=!0,Cf=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function NE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function f_(t){if(ls(t)!==t)throw Error(U(188))}function Nx(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return f_(i),t;if(s===r)return f_(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function DE(t){return t=Nx(t),t!==null?OE(t):null}function OE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=OE(t);if(e!==null)return e;t=t.sibling}return null}var LE=on.unstable_scheduleCallback,p_=on.unstable_cancelCallback,Dx=on.unstable_shouldYield,Ox=on.unstable_requestPaint,Ke=on.unstable_now,Lx=on.unstable_getCurrentPriorityLevel,sm=on.unstable_ImmediatePriority,VE=on.unstable_UserBlockingPriority,Xc=on.unstable_NormalPriority,Vx=on.unstable_LowPriority,ME=on.unstable_IdlePriority,zu=null,Yn=null;function Mx(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(zu,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:Fx,jx=Math.log,Ux=Math.LN2;function Fx(t){return t>>>=0,t===0?32:31-(jx(t)/Ux|0)|0}var Ql=64,Yl=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ha(l):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function Bx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Bx(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jE(){var t=Ql;return Ql<<=1,!(Ql&4194240)&&(Ql=64),t}function pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function zx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function UE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var FE,am,BE,$E,zE,Nf=!1,Jl=[],Xr=null,Zr=null,ei=null,Ba=new Map,$a=new Map,Fr=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function m_(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function Yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&am(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Wx(t,e,n,r,i){switch(e){case"focusin":return Xr=Yo(Xr,t,e,n,r,i),!0;case"dragenter":return Zr=Yo(Zr,t,e,n,r,i),!0;case"mouseover":return ei=Yo(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ba.set(s,Yo(Ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$a.set(s,Yo($a.get(s)||null,t,e,n,r,i)),!0}return!1}function HE(t){var e=Mi(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=NE(n),e!==null){t.blockedOn=e,zE(t.priority,function(){BE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xf=r,n.target.dispatchEvent(r),xf=null}else return e=El(n),e!==null&&am(e),t.blockedOn=n,!1;e.shift()}return!0}function g_(t,e,n){Ec(t)&&n.delete(e)}function qx(){Nf=!1,Xr!==null&&Ec(Xr)&&(Xr=null),Zr!==null&&Ec(Zr)&&(Zr=null),ei!==null&&Ec(ei)&&(ei=null),Ba.forEach(g_),$a.forEach(g_)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,qx)))}function za(t){function e(i){return Jo(i,t)}if(0<Jl.length){Jo(Jl[0],t);for(var n=1;n<Jl.length;n++){var r=Jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&Jo(Xr,t),Zr!==null&&Jo(Zr,t),ei!==null&&Jo(ei,t),Ba.forEach(e),$a.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)HE(n),n.blockedOn===null&&Fr.shift()}var Bs=xr.ReactCurrentBatchConfig,eu=!0;function Kx(t,e,n,r){var i=ve,s=Bs.transition;Bs.transition=null;try{ve=1,lm(t,e,n,r)}finally{ve=i,Bs.transition=s}}function Gx(t,e,n,r){var i=ve,s=Bs.transition;Bs.transition=null;try{ve=4,lm(t,e,n,r)}finally{ve=i,Bs.transition=s}}function lm(t,e,n,r){if(eu){var i=Df(t,e,n,r);if(i===null)Sd(t,e,r,tu,n),m_(t,r);else if(Wx(i,t,e,n,r))r.stopPropagation();else if(m_(t,r),e&4&&-1<Hx.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&FE(s),s=Df(t,e,n,r),s===null&&Sd(t,e,r,tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var tu=null;function Df(t,e,n,r){if(tu=null,t=im(r),t=Mi(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=NE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function WE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lx()){case sm:return 1;case VE:return 4;case Xc:case Vx:return 16;case ME:return 536870912;default:return 16}default:return 16}}var Kr=null,cm=null,Tc=null;function qE(){if(Tc)return Tc;var t,e=cm,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tc=i.slice(t,1<r?1-r:void 0)}function Ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function y_(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:y_,this.isPropagationStopped=y_,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},um=ln(mo),wl=Oe({},mo,{view:0,detail:0}),Qx=ln(wl),md,gd,Xo,Hu=Oe({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(md=t.screenX-Xo.screenX,gd=t.screenY-Xo.screenY):gd=md=0,Xo=t),md)},movementY:function(t){return"movementY"in t?t.movementY:gd}}),__=ln(Hu),Yx=Oe({},Hu,{dataTransfer:0}),Jx=ln(Yx),Xx=Oe({},wl,{relatedTarget:0}),yd=ln(Xx),Zx=Oe({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),eR=ln(Zx),tR=Oe({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nR=ln(tR),rR=Oe({},mo,{data:0}),v_=ln(rR),iR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oR[t])?!!e[t]:!1}function hm(){return aR}var lR=Oe({},wl,{key:function(t){if(t.key){var e=iR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hm,charCode:function(t){return t.type==="keypress"?Ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cR=ln(lR),uR=Oe({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w_=ln(uR),hR=Oe({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hm}),dR=ln(hR),fR=Oe({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),pR=ln(fR),mR=Oe({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gR=ln(mR),yR=[9,13,27,32],dm=gr&&"CompositionEvent"in window,Ta=null;gr&&"documentMode"in document&&(Ta=document.documentMode);var _R=gr&&"TextEvent"in window&&!Ta,KE=gr&&(!dm||Ta&&8<Ta&&11>=Ta),E_=String.fromCharCode(32),T_=!1;function GE(t,e){switch(t){case"keyup":return yR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function QE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function vR(t,e){switch(t){case"compositionend":return QE(e);case"keypress":return e.which!==32?null:(T_=!0,E_);case"textInput":return t=e.data,t===E_&&T_?null:t;default:return null}}function wR(t,e){if(Rs)return t==="compositionend"||!dm&&GE(t,e)?(t=qE(),Tc=cm=Kr=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return KE&&e.locale!=="ko"?null:e.data;default:return null}}var ER={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ER[t.type]:e==="textarea"}function YE(t,e,n,r){xE(r),e=nu(e,"onChange"),0<e.length&&(n=new um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ia=null,Ha=null;function TR(t){aT(t,0)}function Wu(t){var e=bs(t);if(wE(e))return t}function IR(t,e){if(t==="change")return e}var JE=!1;if(gr){var _d;if(gr){var vd="oninput"in document;if(!vd){var S_=document.createElement("div");S_.setAttribute("oninput","return;"),vd=typeof S_.oninput=="function"}_d=vd}else _d=!1;JE=_d&&(!document.documentMode||9<document.documentMode)}function A_(){Ia&&(Ia.detachEvent("onpropertychange",XE),Ha=Ia=null)}function XE(t){if(t.propertyName==="value"&&Wu(Ha)){var e=[];YE(e,Ha,t,im(t)),bE(TR,e)}}function SR(t,e,n){t==="focusin"?(A_(),Ia=e,Ha=n,Ia.attachEvent("onpropertychange",XE)):t==="focusout"&&A_()}function AR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(Ha)}function kR(t,e){if(t==="click")return Wu(e)}function xR(t,e){if(t==="input"||t==="change")return Wu(e)}function RR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:RR;function Wa(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mf.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function k_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function x_(t,e){var n=k_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=k_(n)}}function ZE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ZE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eT(){for(var t=window,e=Qc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qc(t.document)}return e}function fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PR(t){var e=eT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ZE(n.ownerDocument.documentElement,n)){if(r!==null&&fm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=x_(n,s);var o=x_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CR=gr&&"documentMode"in document&&11>=document.documentMode,Ps=null,Of=null,Sa=null,Lf=!1;function R_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||Ps==null||Ps!==Qc(r)||(r=Ps,"selectionStart"in r&&fm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sa&&Wa(Sa,r)||(Sa=r,r=nu(Of,"onSelect"),0<r.length&&(e=new um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ps)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},wd={},tT={};gr&&(tT=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function qu(t){if(wd[t])return wd[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tT)return wd[t]=e[n];return t}var nT=qu("animationend"),rT=qu("animationiteration"),iT=qu("animationstart"),sT=qu("transitionend"),oT=new Map,P_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(t,e){oT.set(t,e),as(e,[t])}for(var Ed=0;Ed<P_.length;Ed++){var Td=P_[Ed],bR=Td.toLowerCase(),NR=Td[0].toUpperCase()+Td.slice(1);Ei(bR,"on"+NR)}Ei(nT,"onAnimationEnd");Ei(rT,"onAnimationIteration");Ei(iT,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(sT,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DR=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function C_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bx(r,e,void 0,t),t.currentTarget=null}function aT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;C_(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;C_(i,l,u),s=c}}}if(Jc)throw t=Cf,Jc=!1,Cf=null,t}function ke(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(lT(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),lT(n,t,r,e)}var ec="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[ec]){t[ec]=!0,mE.forEach(function(n){n!=="selectionchange"&&(DR.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ec]||(e[ec]=!0,Id("selectionchange",!1,e))}}function lT(t,e,n,r){switch(WE(e)){case 1:var i=Kx;break;case 4:i=Gx;break;default:i=lm}n=i.bind(null,e,n,t),i=void 0,!Pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mi(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}bE(function(){var u=s,d=im(n),f=[];e:{var g=oT.get(t);if(g!==void 0){var w=um,P=t;switch(t){case"keypress":if(Ic(n)===0)break e;case"keydown":case"keyup":w=cR;break;case"focusin":P="focus",w=yd;break;case"focusout":P="blur",w=yd;break;case"beforeblur":case"afterblur":w=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=__;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=dR;break;case nT:case rT:case iT:w=eR;break;case sT:w=pR;break;case"scroll":w=Qx;break;case"wheel":w=gR;break;case"copy":case"cut":case"paste":w=nR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=w_}var x=(e&4)!==0,C=!x&&t==="scroll",T=x?g!==null?g+"Capture":null:g;x=[];for(var v=u,E;v!==null;){E=v;var O=E.stateNode;if(E.tag===5&&O!==null&&(E=O,T!==null&&(O=Fa(v,T),O!=null&&x.push(Ka(v,O,E)))),C)break;v=v.return}0<x.length&&(g=new w(g,P,null,n,d),f.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==xf&&(P=n.relatedTarget||n.fromElement)&&(Mi(P)||P[yr]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(P=n.relatedTarget||n.toElement,w=u,P=P?Mi(P):null,P!==null&&(C=ls(P),P!==C||P.tag!==5&&P.tag!==6)&&(P=null)):(w=null,P=u),w!==P)){if(x=__,O="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=w_,O="onPointerLeave",T="onPointerEnter",v="pointer"),C=w==null?g:bs(w),E=P==null?g:bs(P),g=new x(O,v+"leave",w,n,d),g.target=C,g.relatedTarget=E,O=null,Mi(d)===u&&(x=new x(T,v+"enter",P,n,d),x.target=E,x.relatedTarget=C,O=x),C=O,w&&P)t:{for(x=w,T=P,v=0,E=x;E;E=vs(E))v++;for(E=0,O=T;O;O=vs(O))E++;for(;0<v-E;)x=vs(x),v--;for(;0<E-v;)T=vs(T),E--;for(;v--;){if(x===T||T!==null&&x===T.alternate)break t;x=vs(x),T=vs(T)}x=null}else x=null;w!==null&&b_(f,g,w,x,!1),P!==null&&C!==null&&b_(f,C,P,x,!0)}}e:{if(g=u?bs(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var j=IR;else if(I_(g))if(JE)j=xR;else{j=AR;var F=SR}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=kR);if(j&&(j=j(t,u))){YE(f,j,n,d);break e}F&&F(t,g,u),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Tf(g,"number",g.value)}switch(F=u?bs(u):window,t){case"focusin":(I_(F)||F.contentEditable==="true")&&(Ps=F,Of=u,Sa=null);break;case"focusout":Sa=Of=Ps=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,R_(f,n,d);break;case"selectionchange":if(CR)break;case"keydown":case"keyup":R_(f,n,d)}var I;if(dm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Rs?GE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(KE&&n.locale!=="ko"&&(Rs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Rs&&(I=qE()):(Kr=d,cm="value"in Kr?Kr.value:Kr.textContent,Rs=!0)),F=nu(u,_),0<F.length&&(_=new v_(_,t,null,n,d),f.push({event:_,listeners:F}),I?_.data=I:(I=QE(n),I!==null&&(_.data=I)))),(I=_R?vR(t,n):wR(t,n))&&(u=nu(u,"onBeforeInput"),0<u.length&&(d=new v_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=I))}aT(f,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fa(t,n),s!=null&&r.unshift(Ka(t,s,i)),s=Fa(t,e),s!=null&&r.push(Ka(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function b_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Fa(n,s),c!=null&&o.unshift(Ka(n,c,l))):i||(c=Fa(n,s),c!=null&&o.push(Ka(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OR=/\r\n?/g,LR=/\u0000|\uFFFD/g;function N_(t){return(typeof t=="string"?t:""+t).replace(OR,`
`).replace(LR,"")}function tc(t,e,n){if(e=N_(e),N_(t)!==e&&n)throw Error(U(425))}function ru(){}var Vf=null,Mf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,VR=typeof clearTimeout=="function"?clearTimeout:void 0,D_=typeof Promise=="function"?Promise:void 0,MR=typeof queueMicrotask=="function"?queueMicrotask:typeof D_<"u"?function(t){return D_.resolve(null).then(t).catch(jR)}:Uf;function jR(t){setTimeout(function(){throw t})}function Ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),za(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);za(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function O_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),qn="__reactFiber$"+go,Ga="__reactProps$"+go,yr="__reactContainer$"+go,Ff="__reactEvents$"+go,UR="__reactListeners$"+go,FR="__reactHandles$"+go;function Mi(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=O_(t);t!==null;){if(n=t[qn])return n;t=O_(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[qn]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Ku(t){return t[Ga]||null}var Bf=[],Ns=-1;function Ti(t){return{current:t}}function Re(t){0>Ns||(t.current=Bf[Ns],Bf[Ns]=null,Ns--)}function Ie(t,e){Ns++,Bf[Ns]=t.current,t.current=e}var fi={},kt=Ti(fi),zt=Ti(!1),Ki=fi;function to(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function iu(){Re(zt),Re(kt)}function L_(t,e,n){if(kt.current!==fi)throw Error(U(168));Ie(kt,e),Ie(zt,n)}function cT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,Sx(t)||"Unknown",i));return Oe({},n,r)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Ki=kt.current,Ie(kt,t),Ie(zt,zt.current),!0}function V_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=cT(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,Re(zt),Re(kt),Ie(kt,t)):Re(zt),Ie(zt,n)}var lr=null,Gu=!1,kd=!1;function uT(t){lr===null?lr=[t]:lr.push(t)}function BR(t){Gu=!0,uT(t)}function Ii(){if(!kd&&lr!==null){kd=!0;var t=0,e=ve;try{var n=lr;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,Gu=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),LE(sm,Ii),i}finally{ve=e,kd=!1}}return null}var Ds=[],Os=0,ou=null,au=0,dn=[],fn=0,Gi=null,cr=1,ur="";function Oi(t,e){Ds[Os++]=au,Ds[Os++]=ou,ou=t,au=e}function hT(t,e,n){dn[fn++]=cr,dn[fn++]=ur,dn[fn++]=Gi,Gi=t;var r=cr;t=ur;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var s=32-Nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-Nn(e)+i|n<<i|r,ur=s+t}else cr=1<<s|n<<i|r,ur=t}function pm(t){t.return!==null&&(Oi(t,1),hT(t,1,0))}function mm(t){for(;t===ou;)ou=Ds[--Os],Ds[Os]=null,au=Ds[--Os],Ds[Os]=null;for(;t===Gi;)Gi=dn[--fn],dn[fn]=null,ur=dn[--fn],dn[fn]=null,cr=dn[--fn],dn[fn]=null}var sn=null,tn=null,be=!1,Pn=null;function dT(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function M_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,tn=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,tn=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(be){var e=tn;if(e){var n=e;if(!M_(t,e)){if($f(t))throw Error(U(418));e=ti(n.nextSibling);var r=sn;e&&M_(t,e)?dT(r,n):(t.flags=t.flags&-4097|2,be=!1,sn=t)}}else{if($f(t))throw Error(U(418));t.flags=t.flags&-4097|2,be=!1,sn=t}}}function j_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function nc(t){if(t!==sn)return!1;if(!be)return j_(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=tn)){if($f(t))throw fT(),Error(U(418));for(;e;)dT(t,e),e=ti(e.nextSibling)}if(j_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=sn?ti(t.stateNode.nextSibling):null;return!0}function fT(){for(var t=tn;t;)t=ti(t.nextSibling)}function no(){tn=sn=null,be=!1}function gm(t){Pn===null?Pn=[t]:Pn.push(t)}var $R=xr.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function rc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U_(t){var e=t._init;return e(t._payload)}function pT(t){function e(T,v){if(t){var E=T.deletions;E===null?(T.deletions=[v],T.flags|=16):E.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=si(T,v),T.index=0,T.sibling=null,T}function s(T,v,E){return T.index=E,t?(E=T.alternate,E!==null?(E=E.index,E<v?(T.flags|=2,v):E):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,E,O){return v===null||v.tag!==6?(v=Dd(E,T.mode,O),v.return=T,v):(v=i(v,E),v.return=T,v)}function c(T,v,E,O){var j=E.type;return j===xs?d(T,v,E.props.children,O,E.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&U_(j)===v.type)?(O=i(v,E.props),O.ref=Zo(T,v,E),O.return=T,O):(O=Cc(E.type,E.key,E.props,null,T.mode,O),O.ref=Zo(T,v,E),O.return=T,O)}function u(T,v,E,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Od(E,T.mode,O),v.return=T,v):(v=i(v,E.children||[]),v.return=T,v)}function d(T,v,E,O,j){return v===null||v.tag!==7?(v=zi(E,T.mode,O,j),v.return=T,v):(v=i(v,E),v.return=T,v)}function f(T,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dd(""+v,T.mode,E),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ql:return E=Cc(v.type,v.key,v.props,null,T.mode,E),E.ref=Zo(T,null,v),E.return=T,E;case ks:return v=Od(v,T.mode,E),v.return=T,v;case jr:var O=v._init;return f(T,O(v._payload),E)}if(ua(v)||Go(v))return v=zi(v,T.mode,E,null),v.return=T,v;rc(T,v)}return null}function g(T,v,E,O){var j=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return j!==null?null:l(T,v,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ql:return E.key===j?c(T,v,E,O):null;case ks:return E.key===j?u(T,v,E,O):null;case jr:return j=E._init,g(T,v,j(E._payload),O)}if(ua(E)||Go(E))return j!==null?null:d(T,v,E,O,null);rc(T,E)}return null}function w(T,v,E,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(E)||null,l(v,T,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ql:return T=T.get(O.key===null?E:O.key)||null,c(v,T,O,j);case ks:return T=T.get(O.key===null?E:O.key)||null,u(v,T,O,j);case jr:var F=O._init;return w(T,v,E,F(O._payload),j)}if(ua(O)||Go(O))return T=T.get(E)||null,d(v,T,O,j,null);rc(v,O)}return null}function P(T,v,E,O){for(var j=null,F=null,I=v,_=v=0,S=null;I!==null&&_<E.length;_++){I.index>_?(S=I,I=null):S=I.sibling;var k=g(T,I,E[_],O);if(k===null){I===null&&(I=S);break}t&&I&&k.alternate===null&&e(T,I),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k,I=S}if(_===E.length)return n(T,I),be&&Oi(T,_),j;if(I===null){for(;_<E.length;_++)I=f(T,E[_],O),I!==null&&(v=s(I,v,_),F===null?j=I:F.sibling=I,F=I);return be&&Oi(T,_),j}for(I=r(T,I);_<E.length;_++)S=w(I,T,_,E[_],O),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),v=s(S,v,_),F===null?j=S:F.sibling=S,F=S);return t&&I.forEach(function(R){return e(T,R)}),be&&Oi(T,_),j}function x(T,v,E,O){var j=Go(E);if(typeof j!="function")throw Error(U(150));if(E=j.call(E),E==null)throw Error(U(151));for(var F=j=null,I=v,_=v=0,S=null,k=E.next();I!==null&&!k.done;_++,k=E.next()){I.index>_?(S=I,I=null):S=I.sibling;var R=g(T,I,k.value,O);if(R===null){I===null&&(I=S);break}t&&I&&R.alternate===null&&e(T,I),v=s(R,v,_),F===null?j=R:F.sibling=R,F=R,I=S}if(k.done)return n(T,I),be&&Oi(T,_),j;if(I===null){for(;!k.done;_++,k=E.next())k=f(T,k.value,O),k!==null&&(v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return be&&Oi(T,_),j}for(I=r(T,I);!k.done;_++,k=E.next())k=w(I,T,_,k.value,O),k!==null&&(t&&k.alternate!==null&&I.delete(k.key===null?_:k.key),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return t&&I.forEach(function(b){return e(T,b)}),be&&Oi(T,_),j}function C(T,v,E,O){if(typeof E=="object"&&E!==null&&E.type===xs&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ql:e:{for(var j=E.key,F=v;F!==null;){if(F.key===j){if(j=E.type,j===xs){if(F.tag===7){n(T,F.sibling),v=i(F,E.props.children),v.return=T,T=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&U_(j)===F.type){n(T,F.sibling),v=i(F,E.props),v.ref=Zo(T,F,E),v.return=T,T=v;break e}n(T,F);break}else e(T,F);F=F.sibling}E.type===xs?(v=zi(E.props.children,T.mode,O,E.key),v.return=T,T=v):(O=Cc(E.type,E.key,E.props,null,T.mode,O),O.ref=Zo(T,v,E),O.return=T,T=O)}return o(T);case ks:e:{for(F=E.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(T,v.sibling),v=i(v,E.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Od(E,T.mode,O),v.return=T,T=v}return o(T);case jr:return F=E._init,C(T,v,F(E._payload),O)}if(ua(E))return P(T,v,E,O);if(Go(E))return x(T,v,E,O);rc(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,E),v.return=T,T=v):(n(T,v),v=Dd(E,T.mode,O),v.return=T,T=v),o(T)):n(T,v)}return C}var ro=pT(!0),mT=pT(!1),lu=Ti(null),cu=null,Ls=null,ym=null;function _m(){ym=Ls=cu=null}function vm(t){var e=lu.current;Re(lu),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){cu=t,ym=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(ym!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(cu===null)throw Error(U(308));Ls=t,cu.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var ji=null;function wm(t){ji===null?ji=[t]:ji.push(t)}function gT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wm(e)):(n.next=i.next,i.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_r(t,n)}return i=r.interleaved,i===null?(e.next=e,wm(r)):(e.next=i.next,i.next=e),r.interleaved=e,_r(t,n)}function Sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,om(t,n)}}function F_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,d=u=c=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(g=e,w=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){f=P.call(w,f,g);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,g=typeof P=="function"?P.call(w,f,g):P,g==null)break e;f=Oe({},f,g);break e;case 2:Ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=f):d=d.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=f}}function B_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Tl={},Jn=Ti(Tl),Qa=Ti(Tl),Ya=Ti(Tl);function Ui(t){if(t===Tl)throw Error(U(174));return t}function Tm(t,e){switch(Ie(Ya,e),Ie(Qa,t),Ie(Jn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}Re(Jn),Ie(Jn,e)}function io(){Re(Jn),Re(Qa),Re(Ya)}function _T(t){Ui(Ya.current);var e=Ui(Jn.current),n=Sf(e,t.type);e!==n&&(Ie(Qa,t),Ie(Jn,n))}function Im(t){Qa.current===t&&(Re(Jn),Re(Qa))}var Ne=Ti(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function Sm(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var Ac=xr.ReactCurrentDispatcher,Rd=xr.ReactCurrentBatchConfig,Qi=0,De=null,nt=null,ht=null,du=!1,Aa=!1,Ja=0,zR=0;function wt(){throw Error(U(321))}function Am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function km(t,e,n,r,i,s){if(Qi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ac.current=t===null||t.memoizedState===null?KR:GR,t=n(r,i),Aa){s=0;do{if(Aa=!1,Ja=0,25<=s)throw Error(U(301));s+=1,ht=nt=null,e.updateQueue=null,Ac.current=QR,t=n(r,i)}while(Aa)}if(Ac.current=fu,e=nt!==null&&nt.next!==null,Qi=0,ht=nt=De=null,du=!1,e)throw Error(U(300));return t}function xm(){var t=Ja!==0;return Ja=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?De.memoizedState=ht=t:ht=ht.next=t,ht}function wn(){if(nt===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=ht===null?De.memoizedState:ht.next;if(e!==null)ht=e,nt=t;else{if(t===null)throw Error(U(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ht===null?De.memoizedState=ht=t:ht=ht.next=t}return ht}function Xa(t,e){return typeof e=="function"?e(t):e}function Pd(t){var e=wn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((Qi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,De.lanes|=d,Yi|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,Ln(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cd(t){var e=wn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ln(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vT(){}function wT(t,e){var n=De,r=wn(),i=e(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,$t=!0),r=r.queue,Rm(IT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Za(9,TT.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(U(349));Qi&30||ET(n,e,i)}return i}function ET(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function TT(t,e,n,r){e.value=n,e.getSnapshot=r,ST(e)&&AT(t)}function IT(t,e,n){return n(function(){ST(e)&&AT(t)})}function ST(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function AT(t){var e=_r(t,1);e!==null&&Dn(e,t,1,-1)}function $_(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=qR.bind(null,De,t),[e.memoizedState,t]}function Za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kT(){return wn().memoizedState}function kc(t,e,n,r){var i=Hn();De.flags|=t,i.memoizedState=Za(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,r!==null&&Am(r,o.deps)){i.memoizedState=Za(e,n,s,r);return}}De.flags|=t,i.memoizedState=Za(1|e,n,s,r)}function z_(t,e){return kc(8390656,8,t,e)}function Rm(t,e){return Qu(2048,8,t,e)}function xT(t,e){return Qu(4,2,t,e)}function RT(t,e){return Qu(4,4,t,e)}function PT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function CT(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,PT.bind(null,e,t),n)}function Pm(){}function bT(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function NT(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function DT(t,e,n){return Qi&21?(Ln(n,e)||(n=jE(),De.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function HR(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{ve=n,Rd.transition=r}}function OT(){return wn().memoizedState}function WR(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},LT(t))VT(e,n);else if(n=gT(t,e,n,r),n!==null){var i=Ot();Dn(n,t,r,i),MT(n,e,r)}}function qR(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(LT(t))VT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ln(l,o)){var c=e.interleaved;c===null?(i.next=i,wm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=gT(t,e,i,r),n!==null&&(i=Ot(),Dn(n,t,r,i),MT(n,e,r))}}function LT(t){var e=t.alternate;return t===De||e!==null&&e===De}function VT(t,e){Aa=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function MT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,om(t,n)}}var fu={readContext:vn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},KR={readContext:vn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:z_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kc(4194308,4,PT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kc(4194308,4,t,e)},useInsertionEffect:function(t,e){return kc(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WR.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:$_,useDebugValue:Pm,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=$_(!1),e=t[0];return t=HR.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Hn();if(be){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),dt===null)throw Error(U(349));Qi&30||ET(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,z_(IT.bind(null,r,s,t),[t]),r.flags|=2048,Za(9,TT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=dt.identifierPrefix;if(be){var n=ur,r=cr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GR={readContext:vn,useCallback:bT,useContext:vn,useEffect:Rm,useImperativeHandle:CT,useInsertionEffect:xT,useLayoutEffect:RT,useMemo:NT,useReducer:Pd,useRef:kT,useState:function(){return Pd(Xa)},useDebugValue:Pm,useDeferredValue:function(t){var e=wn();return DT(e,nt.memoizedState,t)},useTransition:function(){var t=Pd(Xa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:vT,useSyncExternalStore:wT,useId:OT,unstable_isNewReconciler:!1},QR={readContext:vn,useCallback:bT,useContext:vn,useEffect:Rm,useImperativeHandle:CT,useInsertionEffect:xT,useLayoutEffect:RT,useMemo:NT,useReducer:Cd,useRef:kT,useState:function(){return Cd(Xa)},useDebugValue:Pm,useDeferredValue:function(t){var e=wn();return nt===null?e.memoizedState=t:DT(e,nt.memoizedState,t)},useTransition:function(){var t=Cd(Xa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:vT,useSyncExternalStore:wT,useId:OT,unstable_isNewReconciler:!1};function xn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ii(t),s=fr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Dn(e,t,i,r),Sc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ii(t),s=fr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Dn(e,t,i,r),Sc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=ii(t),i=fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(Dn(e,t,r,n),Sc(e,t,r))}};function H_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,r)||!Wa(i,s):!0}function jT(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(i=Ht(e)?Ki:kt.current,r=e.contextTypes,s=(r=r!=null)?to(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function W_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Em(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vn(s):(s=Ht(e)?Ki:kt.current,i.context=to(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yu.enqueueReplaceState(i,i.state,null),uu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",r=e;do n+=Ix(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kf(t,e){try{}catch(n){setTimeout(function(){throw n})}}var YR=typeof WeakMap=="function"?WeakMap:Map;function UT(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mu||(mu=!0,rp=r),Kf(t,e)},n}function FT(t,e,n){n=fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kf(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function q_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uP.bind(null,t,e,n),e.then(t,t))}function K_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function G_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var JR=xr.ReactCurrentOwner,$t=!1;function Dt(t,e,n,r){e.child=t===null?mT(e,null,n,r):ro(e,t.child,n,r)}function Q_(t,e,n,r,i){n=n.render;var s=e.ref;return $s(e,i),r=km(t,e,n,r,s,i),n=xm(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(be&&n&&pm(e),e.flags|=1,Dt(t,e,r,i),e.child)}function Y_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,BT(t,e,s,r,i)):(t=Cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,r)&&t.ref===e.ref)return vr(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function BT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wa(s,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,vr(t,e,i)}return Gf(t,e,n,r,i)}function $T(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Ms,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Ms,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Ms,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Ms,Zt),Zt|=r;return Dt(t,e,i,n),e.child}function zT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=Ht(n)?Ki:kt.current;return s=to(e,s),$s(e,i),n=km(t,e,n,r,s,i),r=xm(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(be&&r&&pm(e),e.flags|=1,Dt(t,e,n,i),e.child)}function J_(t,e,n,r,i){if(Ht(n)){var s=!0;su(e)}else s=!1;if($s(e,i),e.stateNode===null)xc(t,e),jT(e,n,r),qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vn(u):(u=Ht(n)?Ki:kt.current,u=to(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&W_(e,o,r,u),Ur=!1;var g=e.memoizedState;o.state=g,uu(e,r,o,i),c=e.memoizedState,l!==r||g!==c||zt.current||Ur?(typeof d=="function"&&(Wf(e,n,d,r),c=e.memoizedState),(l=Ur||H_(e,n,l,r,g,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yT(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:xn(e.type,l),o.props=u,f=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=vn(c):(c=Ht(n)?Ki:kt.current,c=to(e,c));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||g!==c)&&W_(e,o,r,c),Ur=!1,g=e.memoizedState,o.state=g,uu(e,r,o,i);var P=e.memoizedState;l!==f||g!==P||zt.current||Ur?(typeof w=="function"&&(Wf(e,n,w,r),P=e.memoizedState),(u=Ur||H_(e,n,u,r,g,P,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Qf(t,e,n,r,s,i)}function Qf(t,e,n,r,i,s){zT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&V_(e,n,!1),vr(t,e,s);r=e.stateNode,JR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,l,s)):Dt(t,e,l,s),e.memoizedState=r.state,i&&V_(e,n,!0),e.child}function HT(t){var e=t.stateNode;e.pendingContext?L_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&L_(t,e.context,!1),Tm(t,e.containerInfo)}function X_(t,e,n,r,i){return no(),gm(i),e.flags|=256,Dt(t,e,n,r),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function WT(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ne,i&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zu(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Yf,t):Cm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return XR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=si(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=si(l,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cm(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ic(t,e,n,r){return r!==null&&gm(r),ro(e,t.child,null,n),t=Cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bd(Error(U(422))),ic(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zu({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return ic(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=bd(s,r,void 0),ic(t,e,o,r)}if(l=(o&t.childLanes)!==0,$t||l){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_r(t,i),Dn(r,t,i,-1))}return Vm(),r=bd(Error(U(421))),ic(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=ti(i.nextSibling),sn=e,be=!0,Pn=null,t!==null&&(dn[fn++]=cr,dn[fn++]=ur,dn[fn++]=Gi,cr=t.id,ur=t.overflow,Gi=e),e=Cm(e,r.children),e.flags|=4096,e)}function Z_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hf(t.return,e,n)}function Nd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Dt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Z_(t,n,e);else if(t.tag===19)Z_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nd(e,!0,n,null,s);break;case"together":Nd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZR(t,e,n){switch(e.tag){case 3:HT(e),no();break;case 5:_T(e);break;case 1:Ht(e.type)&&su(e);break;case 4:Tm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(lu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?WT(t,e,n):(Ie(Ne,Ne.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Ie(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,$T(t,e,n)}return vr(t,e,n)}var KT,Xf,GT,QT;KT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};GT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ui(Jn.current);var s=null;switch(n){case"input":i=wf(t,i),r=wf(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=If(t,i),r=If(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ru)}Af(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ke("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};QT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eP(t,e,n){var r=e.pendingProps;switch(mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Ht(e.type)&&iu(),Et(e),null;case 3:return r=e.stateNode,io(),Re(zt),Re(kt),Sm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(op(Pn),Pn=null))),Xf(t,e),Et(e),null;case 5:Im(e);var i=Ui(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)GT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Et(e),null}if(t=Ui(Jn.current),nc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qn]=e,r[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<da.length;i++)ke(da[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":l_(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":u_(r,s),ke("invalid",r)}Af(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tc(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tc(r.textContent,l,t),i=["children",""+l]):ja.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":Kl(r),c_(r,s,!0);break;case"textarea":Kl(r),h_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ru)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=IE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qn]=e,t[Ga]=r,KT(t,e,!1,!1),e.stateNode=t;e:{switch(o=kf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<da.length;i++)ke(da[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":l_(t,r),i=wf(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ke("invalid",t);break;case"textarea":u_(t,r),i=If(t,r),ke("invalid",t);break;default:i=r}Af(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?kE(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&SE(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ua(t,c):typeof c=="number"&&Ua(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ke("scroll",t):c!=null&&em(t,s,c,o))}switch(n){case"input":Kl(t),c_(t,r,!1);break;case"textarea":Kl(t),h_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?js(t,!!r.multiple,s,!1):r.defaultValue!=null&&js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)QT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ui(Ya.current),Ui(Jn.current),nc(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:tc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return Et(e),null;case 13:if(Re(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&tn!==null&&e.mode&1&&!(e.flags&128))fT(),no(),e.flags|=98560,s=!1;else if(s=nc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[qn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else Pn!==null&&(op(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?rt===0&&(rt=3):Vm())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return io(),Xf(t,e),t===null&&qa(e.stateNode.containerInfo),Et(e),null;case 10:return vm(e.type._context),Et(e),null;case 17:return Ht(e.type)&&iu(),Et(e),null;case 19:if(Re(Ne),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ea(s,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hu(t),o!==null){for(e.flags|=128,ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>oo&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304)}else{if(!r)if(t=hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return Et(e),null}else 2*Ke()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Ne.current,Ie(Ne,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Lm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function tP(t,e){switch(mm(e),e.tag){case 1:return Ht(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Re(zt),Re(kt),Sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Im(e),null;case 13:if(Re(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Ne),null;case 4:return io(),null;case 10:return vm(e.type._context),null;case 22:case 23:return Lm(),null;case 24:return null;default:return null}}var sc=!1,St=!1,nP=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function Zf(t,e,n){try{n()}catch(r){Be(t,e,r)}}var ev=!1;function rP(t,e){if(Vf=eu,t=eT(),fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,f=t,g=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++d===r&&(c=o),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},eu=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,C=P.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?x:xn(e.type,x),C);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Be(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return P=ev,ev=!1,P}function ka(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zf(e,n,s)}i=i.next}while(i!==r)}}function Ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function YT(t){var e=t.alternate;e!==null&&(t.alternate=null,YT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Ga],delete e[Ff],delete e[UR],delete e[FR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JT(t){return t.tag===5||t.tag===3||t.tag===4}function tv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}function np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}var pt=null,Rn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)XT(t,e,n),n=n.sibling}function XT(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(zu,n)}catch{}switch(n.tag){case 5:St||Vs(n,e);case 6:var r=pt,i=Rn;pt=null,Vr(t,e,n),pt=r,Rn=i,pt!==null&&(Rn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(Rn?(t=pt,n=n.stateNode,t.nodeType===8?Ad(t.parentNode,n):t.nodeType===1&&Ad(t,n),za(t)):Ad(pt,n.stateNode));break;case 4:r=pt,i=Rn,pt=n.stateNode.containerInfo,Rn=!0,Vr(t,e,n),pt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zf(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!St&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Be(n,e,l)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Vr(t,e,n),St=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function nv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nP),e.forEach(function(r){var i=dP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:pt=l.stateNode,Rn=!1;break e;case 3:pt=l.stateNode.containerInfo,Rn=!0;break e;case 4:pt=l.stateNode.containerInfo,Rn=!0;break e}l=l.return}if(pt===null)throw Error(U(160));XT(s,o,i),pt=null,Rn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ZT(e,t),e=e.sibling}function ZT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),$n(t),r&4){try{ka(3,t,t.return),Ju(3,t)}catch(x){Be(t,t.return,x)}try{ka(5,t,t.return)}catch(x){Be(t,t.return,x)}}break;case 1:An(e,t),$n(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(An(e,t),$n(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{Ua(i,"")}catch(x){Be(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&EE(i,s),kf(l,o);var u=kf(l,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?kE(i,f):d==="dangerouslySetInnerHTML"?SE(i,f):d==="children"?Ua(i,f):em(i,d,f,u)}switch(l){case"input":Ef(i,s);break;case"textarea":TE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?js(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?js(i,!!s.multiple,s.defaultValue,!0):js(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ga]=s}catch(x){Be(t,t.return,x)}}break;case 6:if(An(e,t),$n(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Be(t,t.return,x)}}break;case 3:if(An(e,t),$n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(x){Be(t,t.return,x)}break;case 4:An(e,t),$n(t);break;case 13:An(e,t),$n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dm=Ke())),r&4&&nv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(St=(u=St)||d,An(e,t),St=u):An(e,t),$n(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(g=Q,w=g.child,g.tag){case 0:case 11:case 14:case 15:ka(4,g,g.return);break;case 1:Vs(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){Be(r,n,x)}}break;case 5:Vs(g,g.return);break;case 22:if(g.memoizedState!==null){iv(f);continue}}w!==null?(w.return=g,Q=w):iv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=AE("display",o))}catch(x){Be(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Be(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),$n(t),r&4&&nv(t);break;case 21:break;default:An(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ua(i,""),r.flags&=-33);var s=tv(t);np(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=tv(t);tp(t,l,o);break;default:throw Error(U(161))}}catch(c){Be(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iP(t,e,n){Q=t,eI(t)}function eI(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sc;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||St;l=sc;var u=St;if(sc=o,(St=c)&&!u)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null?sv(i):c!==null?(c.return=o,Q=c):sv(i);for(;s!==null;)Q=s,eI(s),s=s.sibling;Q=i,sc=l,St=u}rv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):rv(t)}}function rv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&B_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}B_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}St||e.flags&512&&ep(e)}catch(g){Be(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function iv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function sv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ju(4,e)}catch(c){Be(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Be(e,i,c)}}var s=e.return;try{ep(e)}catch(c){Be(e,s,c)}break;case 5:var o=e.return;try{ep(e)}catch(c){Be(e,o,c)}}}catch(c){Be(e,e.return,c)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var sP=Math.ceil,pu=xr.ReactCurrentDispatcher,bm=xr.ReactCurrentOwner,yn=xr.ReactCurrentBatchConfig,ge=0,dt=null,Je=null,yt=0,Zt=0,Ms=Ti(0),rt=0,el=null,Yi=0,Xu=0,Nm=0,xa=null,Ft=null,Dm=0,oo=1/0,or=null,mu=!1,rp=null,ri=null,oc=!1,Gr=null,gu=0,Ra=0,ip=null,Rc=-1,Pc=0;function Ot(){return ge&6?Ke():Rc!==-1?Rc:Rc=Ke()}function ii(t){return t.mode&1?ge&2&&yt!==0?yt&-yt:$R.transition!==null?(Pc===0&&(Pc=jE()),Pc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:WE(t.type)),t):1}function Dn(t,e,n,r){if(50<Ra)throw Ra=0,ip=null,Error(U(185));vl(t,n,r),(!(ge&2)||t!==dt)&&(t===dt&&(!(ge&2)&&(Xu|=n),rt===4&&Br(t,yt)),Wt(t,r),n===1&&ge===0&&!(e.mode&1)&&(oo=Ke()+500,Gu&&Ii()))}function Wt(t,e){var n=t.callbackNode;$x(t,e);var r=Zc(t,t===dt?yt:0);if(r===0)n!==null&&p_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&p_(n),e===1)t.tag===0?BR(ov.bind(null,t)):uT(ov.bind(null,t)),MR(function(){!(ge&6)&&Ii()}),n=null;else{switch(UE(r)){case 1:n=sm;break;case 4:n=VE;break;case 16:n=Xc;break;case 536870912:n=ME;break;default:n=Xc}n=lI(n,tI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tI(t,e){if(Rc=-1,Pc=0,ge&6)throw Error(U(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=Zc(t,t===dt?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yu(t,r);else{e=r;var i=ge;ge|=2;var s=rI();(dt!==t||yt!==e)&&(or=null,oo=Ke()+500,$i(t,e));do try{lP();break}catch(l){nI(t,l)}while(1);_m(),pu.current=s,ge=i,Je!==null?e=0:(dt=null,yt=0,e=rt)}if(e!==0){if(e===2&&(i=bf(t),i!==0&&(r=i,e=sp(t,i))),e===1)throw n=el,$i(t,0),Br(t,r),Wt(t,Ke()),n;if(e===6)Br(t,r);else{if(i=t.current.alternate,!(r&30)&&!oP(i)&&(e=yu(t,r),e===2&&(s=bf(t),s!==0&&(r=s,e=sp(t,s))),e===1))throw n=el,$i(t,0),Br(t,r),Wt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Li(t,Ft,or);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=Dm+500-Ke(),10<e)){if(Zc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(Li.bind(null,t,Ft,or),e);break}Li(t,Ft,or);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sP(r/1960))-r,10<r){t.timeoutHandle=Uf(Li.bind(null,t,Ft,or),r);break}Li(t,Ft,or);break;case 5:Li(t,Ft,or);break;default:throw Error(U(329))}}}return Wt(t,Ke()),t.callbackNode===n?tI.bind(null,t):null}function sp(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=yu(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&op(e)),t}function op(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function oP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~Nm,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function ov(t){if(ge&6)throw Error(U(327));zs();var e=Zc(t,0);if(!(e&1))return Wt(t,Ke()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var r=bf(t);r!==0&&(e=r,n=sp(t,r))}if(n===1)throw n=el,$i(t,0),Br(t,e),Wt(t,Ke()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,Ft,or),Wt(t,Ke()),null}function Om(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(oo=Ke()+500,Gu&&Ii())}}function Ji(t){Gr!==null&&Gr.tag===0&&!(ge&6)&&zs();var e=ge;ge|=1;var n=yn.transition,r=ve;try{if(yn.transition=null,ve=1,t)return t()}finally{ve=r,yn.transition=n,ge=e,!(ge&6)&&Ii()}}function Lm(){Zt=Ms.current,Re(Ms)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VR(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(mm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&iu();break;case 3:io(),Re(zt),Re(kt),Sm();break;case 5:Im(r);break;case 4:io();break;case 13:Re(Ne);break;case 19:Re(Ne);break;case 10:vm(r.type._context);break;case 22:case 23:Lm()}n=n.return}if(dt=t,Je=t=si(t.current,null),yt=Zt=e,rt=0,el=null,Nm=Xu=Yi=0,Ft=xa=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function nI(t,e){do{var n=Je;try{if(_m(),Ac.current=fu,du){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}du=!1}if(Qi=0,ht=nt=De=null,Aa=!1,Ja=0,bm.current=null,n===null||n.return===null){rt=1,el=e,Je=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=yt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=K_(o);if(w!==null){w.flags&=-257,G_(w,o,l,s,e),w.mode&1&&q_(s,u,e),e=w,c=u;var P=e.updateQueue;if(P===null){var x=new Set;x.add(c),e.updateQueue=x}else P.add(c);break e}else{if(!(e&1)){q_(s,u,e),Vm();break e}c=Error(U(426))}}else if(be&&l.mode&1){var C=K_(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),G_(C,o,l,s,e),gm(so(c,l));break e}}s=c=so(c,l),rt!==4&&(rt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=UT(s,c,e);F_(s,T);break e;case 1:l=c;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(ri===null||!ri.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=FT(s,l,e);F_(s,O);break e}}s=s.return}while(s!==null)}sI(n)}catch(j){e=j,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function rI(){var t=pu.current;return pu.current=fu,t===null?fu:t}function Vm(){(rt===0||rt===3||rt===2)&&(rt=4),dt===null||!(Yi&268435455)&&!(Xu&268435455)||Br(dt,yt)}function yu(t,e){var n=ge;ge|=2;var r=rI();(dt!==t||yt!==e)&&(or=null,$i(t,e));do try{aP();break}catch(i){nI(t,i)}while(1);if(_m(),ge=n,pu.current=r,Je!==null)throw Error(U(261));return dt=null,yt=0,rt}function aP(){for(;Je!==null;)iI(Je)}function lP(){for(;Je!==null&&!Dx();)iI(Je)}function iI(t){var e=aI(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?sI(t):Je=e,bm.current=null}function sI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tP(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Je=null;return}}else if(n=eP(n,e,Zt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);rt===0&&(rt=5)}function Li(t,e,n){var r=ve,i=yn.transition;try{yn.transition=null,ve=1,cP(t,e,n,r)}finally{yn.transition=i,ve=r}return null}function cP(t,e,n,r){do zs();while(Gr!==null);if(ge&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zx(t,s),t===dt&&(Je=dt=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oc||(oc=!0,lI(Xc,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=ve;ve=1;var l=ge;ge|=4,bm.current=null,rP(t,n),ZT(n,t),PR(Mf),eu=!!Vf,Mf=Vf=null,t.current=n,iP(n),Ox(),ge=l,ve=o,yn.transition=s}else t.current=n;if(oc&&(oc=!1,Gr=t,gu=i),s=t.pendingLanes,s===0&&(ri=null),Mx(n.stateNode),Wt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mu)throw mu=!1,t=rp,rp=null,t;return gu&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===ip?Ra++:(Ra=0,ip=t):Ra=0,Ii(),null}function zs(){if(Gr!==null){var t=UE(gu),e=yn.transition,n=ve;try{if(yn.transition=null,ve=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,gu=0,ge&6)throw Error(U(331));var i=ge;for(ge|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:ka(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var g=d.sibling,w=d.return;if(YT(d),d===u){Q=null;break}if(g!==null){g.return=w,Q=g;break}Q=w}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ka(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Q=T;break e}Q=s.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Q=E;else e:for(o=v;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ju(9,l)}}catch(j){Be(l,l.return,j)}if(l===o){Q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Q=O;break e}Q=l.return}}if(ge=i,Ii(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(zu,t)}catch{}r=!0}return r}finally{ve=n,yn.transition=e}}return!1}function av(t,e,n){e=so(n,e),e=UT(t,e,1),t=ni(t,e,1),e=Ot(),t!==null&&(vl(t,1,e),Wt(t,e))}function Be(t,e,n){if(t.tag===3)av(t,t,n);else for(;e!==null;){if(e.tag===3){av(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=so(n,t),t=FT(e,t,1),e=ni(e,t,1),t=Ot(),e!==null&&(vl(e,1,t),Wt(e,t));break}}e=e.return}}function uP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(yt&n)===n&&(rt===4||rt===3&&(yt&130023424)===yt&&500>Ke()-Dm?$i(t,0):Nm|=n),Wt(t,e)}function oI(t,e){e===0&&(t.mode&1?(e=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):e=1);var n=Ot();t=_r(t,e),t!==null&&(vl(t,e,n),Wt(t,n))}function hP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),oI(t,n)}function dP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),oI(t,n)}var aI;aI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,ZR(t,e,n);$t=!!(t.flags&131072)}else $t=!1,be&&e.flags&1048576&&hT(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xc(t,e),t=e.pendingProps;var i=to(e,kt.current);$s(e,n),i=km(null,e,r,t,i,n);var s=xm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,su(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Em(e),i.updater=Yu,e.stateNode=i,i._reactInternals=e,qf(e,r,t,n),e=Qf(null,e,r,!0,s,n)):(e.tag=0,be&&s&&pm(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pP(r),t=xn(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=J_(null,e,r,t,n);break e;case 11:e=Q_(null,e,r,t,n);break e;case 14:e=Y_(null,e,r,xn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),J_(t,e,r,i,n);case 3:e:{if(HT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yT(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=so(Error(U(423)),e),e=X_(t,e,r,n,i);break e}else if(r!==i){i=so(Error(U(424)),e),e=X_(t,e,r,n,i);break e}else for(tn=ti(e.stateNode.containerInfo.firstChild),sn=e,be=!0,Pn=null,n=mT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){e=vr(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return _T(e),t===null&&zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jf(r,i)?o=null:s!==null&&jf(r,s)&&(e.flags|=32),zT(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&zf(e),null;case 13:return WT(t,e,n);case 4:return Tm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Q_(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(lu,r._currentValue),r._currentValue=o,s!==null)if(Ln(s.value,o)){if(s.children===i.children&&!zt.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=fr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Hf(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=vn(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=xn(r,e.pendingProps),i=xn(r.type,i),Y_(t,e,r,i,n);case 15:return BT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),xc(t,e),e.tag=1,Ht(r)?(t=!0,su(e)):t=!1,$s(e,n),jT(e,r,i),qf(e,r,i,n),Qf(null,e,r,!0,t,n);case 19:return qT(t,e,n);case 22:return $T(t,e,n)}throw Error(U(156,e.tag))};function lI(t,e){return LE(t,e)}function fP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new fP(t,e,n,r)}function Mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pP(t){if(typeof t=="function")return Mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nm)return 11;if(t===rm)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return zi(n.children,i,s,e);case tm:o=8,i|=8;break;case gf:return t=mn(12,n,e,i|2),t.elementType=gf,t.lanes=s,t;case yf:return t=mn(13,n,e,i),t.elementType=yf,t.lanes=s,t;case _f:return t=mn(19,n,e,i),t.elementType=_f,t.lanes=s,t;case _E:return Zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gE:o=10;break e;case yE:o=9;break e;case nm:o=11;break e;case rm:o=14;break e;case jr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=mn(22,t,r,e),t.elementType=_E,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jm(t,e,n,r,i,s,o,l,c){return t=new mP(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Em(s),t}function gP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cI(t){if(!t)return fi;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ht(n))return cT(t,n,e)}return e}function uI(t,e,n,r,i,s,o,l,c){return t=jm(n,r,!0,t,i,s,o,l,c),t.context=cI(null),n=t.current,r=Ot(),i=ii(n),s=fr(r,i),s.callback=e??null,ni(n,s,i),t.current.lanes=i,vl(t,i,r),Wt(t,r),t}function eh(t,e,n,r){var i=e.current,s=Ot(),o=ii(i);return n=cI(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(Dn(t,i,o,s),Sc(t,i,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Um(t,e){lv(t,e),(t=t.alternate)&&lv(t,e)}function yP(){return null}var hI=typeof reportError=="function"?reportError:function(t){};function Fm(t){this._internalRoot=t}th.prototype.render=Fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));eh(t,e,null,null)};th.prototype.unmount=Fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){eh(null,t,null,null)}),e[yr]=null}};function th(t){this._internalRoot=t}th.prototype.unstable_scheduleHydration=function(t){if(t){var e=$E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&HE(t)}};function Bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cv(){}function _P(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_u(o);s.call(u)}}var o=uI(e,r,t,0,null,!1,!1,"",cv);return t._reactRootContainer=o,t[yr]=o.current,qa(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=_u(c);l.call(u)}}var c=jm(t,0,!1,null,null,!1,!1,"",cv);return t._reactRootContainer=c,t[yr]=c.current,qa(t.nodeType===8?t.parentNode:t),Ji(function(){eh(e,c,n,r)}),c}function rh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=_u(o);l.call(c)}}eh(e,o,t,i)}else o=_P(n,e,t,i,r);return _u(o)}FE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(om(e,n|1),Wt(e,Ke()),!(ge&6)&&(oo=Ke()+500,Ii()))}break;case 13:Ji(function(){var r=_r(t,1);if(r!==null){var i=Ot();Dn(r,t,1,i)}}),Um(t,1)}};am=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=Ot();Dn(e,t,134217728,n)}Um(t,134217728)}};BE=function(t){if(t.tag===13){var e=ii(t),n=_r(t,e);if(n!==null){var r=Ot();Dn(n,t,e,r)}Um(t,e)}};$E=function(){return ve};zE=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Rf=function(t,e,n){switch(e){case"input":if(Ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ku(r);if(!i)throw Error(U(90));wE(r),Ef(r,i)}}}break;case"textarea":TE(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};PE=Om;CE=Ji;var vP={usingClientEntryPoint:!1,Events:[El,bs,Ku,xE,RE,Om]},ta={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wP={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=DE(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||yP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{zu=ac.inject(wP),Yn=ac}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vP;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bm(e))throw Error(U(200));return gP(t,e,null,n)};an.createRoot=function(t,e){if(!Bm(t))throw Error(U(299));var n=!1,r="",i=hI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jm(t,1,!1,null,null,n,!1,r,i),t[yr]=e.current,qa(t.nodeType===8?t.parentNode:t),new Fm(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=DE(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return Ji(t)};an.hydrate=function(t,e,n){if(!nh(e))throw Error(U(200));return rh(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Bm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uI(e,null,t,1,n??null,i,!1,s,o),t[yr]=e.current,qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new th(e)};an.render=function(t,e,n){if(!nh(e))throw Error(U(200));return rh(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!nh(t))throw Error(U(40));return t._reactRootContainer?(Ji(function(){rh(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};an.unstable_batchedUpdates=Om;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return rh(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function dI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dI)}catch{}}dI(),dE.exports=an;var EP=dE.exports,uv=EP;pf.createRoot=uv.createRoot,pf.hydrateRoot=uv.hydrateRoot;const TP="modulepreload",IP=function(t){return"/"+t},hv={},ee=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=IP(s),s in hv)return;hv[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":TP,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tl.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const dv="popstate";function SP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ap("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vu(i)}return kP(e,n,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $m(t,e){if(!t)try{throw new Error(e)}catch{}}function AP(){return Math.random().toString(36).substr(2,8)}function fv(t,e){return{usr:t.state,key:t.key,idx:e}}function ap(t,e,n,r){return n===void 0&&(n=null),tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:n,key:e&&e.key||r||AP()})}function vu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function kP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Qr.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(tl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Qr.Pop;let C=d(),T=C==null?null:C-u;u=C,c&&c({action:l,location:x.location,delta:T})}function g(C,T){l=Qr.Push;let v=ap(x.location,C,T);n&&n(v,C),u=d()+1;let E=fv(v,u),O=x.createHref(v);try{o.pushState(E,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&c&&c({action:l,location:x.location,delta:1})}function w(C,T){l=Qr.Replace;let v=ap(x.location,C,T);n&&n(v,C),u=d();let E=fv(v,u),O=x.createHref(v);o.replaceState(E,"",O),s&&c&&c({action:l,location:x.location,delta:0})}function P(C){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:vu(C);return v=v.replace(/ $/,"%20"),Ge(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let x={get action(){return l},get location(){return t(i,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(dv,f),c=C,()=>{i.removeEventListener(dv,f),c=null}},createHref(C){return e(i,C)},createURL:P,encodeLocation(C){let T=P(C);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:w,go(C){return o.go(C)}};return x}var pv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pv||(pv={}));function xP(t,e,n){return n===void 0&&(n="/"),RP(t,e,n,!1)}function RP(t,e,n,r){let i=typeof e=="string"?yo(e):e,s=zm(i.pathname||"/",n);if(s==null)return null;let o=fI(t);PP(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=FP(s);l=jP(o[c],u,r)}return l}function fI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=oi([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fI(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:VP(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of pI(s.path))i(s,o,c)}),e}function pI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=pI(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function PP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CP=/^:[\w-]+$/,bP=3,NP=2,DP=1,OP=10,LP=-2,mv=t=>t==="*";function VP(t,e){let n=t.split("/"),r=n.length;return n.some(mv)&&(r+=LP),e&&(r+=NP),n.filter(i=>!mv(i)).reduce((i,s)=>i+(CP.test(s)?bP:s===""?DP:OP),r)}function MP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=gv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=gv({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:oi([s,f.pathname]),pathnameBase:WP(oi([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=oi([s,f.pathnameBase]))}return o}function gv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=UP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let x=l[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const P=l[f];return w&&!P?u[g]=void 0:u[g]=(P||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function UP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$m(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $m(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const BP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$P=t=>BP.test(t);function zP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yo(t):t,s;if(n)if($P(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),$m(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=yv(n.substring(1),"/"):s=yv(n,e)}else s=e;return{pathname:s,search:qP(r),hash:KP(i)}}function yv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ld(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function HP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hm(t,e){let n=HP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yo(t):(i=tl({},t),Ge(!i.pathname||!i.pathname.includes("?"),Ld("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),Ld("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),Ld("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}l=f>=0?e[f]:"/"}let c=zP(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),WP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,KP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function GP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mI=["post","put","patch","delete"];new Set(mI);const QP=["get",...mI];new Set(QP);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nl.apply(this,arguments)}const qm=D.createContext(null),YP=D.createContext(null),Si=D.createContext(null),ih=D.createContext(null),rr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),gI=D.createContext(null);function JP(t,e){let{relative:n}=e===void 0?{}:e;_o()||Ge(!1);let{basename:r,navigator:i}=D.useContext(Si),{hash:s,pathname:o,search:l}=_I(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:oi([r,o])),i.createHref({pathname:c,search:l,hash:s})}function _o(){return D.useContext(ih)!=null}function vo(){return _o()||Ge(!1),D.useContext(ih).location}function yI(t){D.useContext(Si).static||D.useLayoutEffect(t)}function Km(){let{isDataRoute:t}=D.useContext(rr);return t?dC():XP()}function XP(){_o()||Ge(!1);let t=D.useContext(qm),{basename:e,future:n,navigator:r}=D.useContext(Si),{matches:i}=D.useContext(rr),{pathname:s}=vo(),o=JSON.stringify(Hm(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return yI(()=>{l.current=!0}),D.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=Wm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:oi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const ZP=D.createContext(null);function eC(t){let e=D.useContext(rr).outlet;return e&&D.createElement(ZP.Provider,{value:t},e)}function D6(){let{matches:t}=D.useContext(rr),e=t[t.length-1];return e?e.params:{}}function _I(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Si),{matches:i}=D.useContext(rr),{pathname:s}=vo(),o=JSON.stringify(Hm(i,r.v7_relativeSplatPath));return D.useMemo(()=>Wm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function tC(t,e){return nC(t,e)}function nC(t,e,n,r){_o()||Ge(!1);let{navigator:i}=D.useContext(Si),{matches:s}=D.useContext(rr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=vo(),d;if(e){var f;let C=typeof e=="string"?yo(e):e;c==="/"||(f=C.pathname)!=null&&f.startsWith(c)||Ge(!1),d=C}else d=u;let g=d.pathname||"/",w=g;if(c!=="/"){let C=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=xP(t,{pathname:w}),x=aC(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:oi([c,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:oi([c,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&x?D.createElement(ih.Provider,{value:{location:nl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qr.Pop}},x):x}function rC(){let t=hC(),e=GP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const iC=D.createElement(rC,null);class sC extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){}render(){return this.state.error!==void 0?D.createElement(rr.Provider,{value:this.props.routeContext},D.createElement(gI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oC(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(qm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(rr.Provider,{value:e},r)}function aC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Ge(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:w}=n,P=f.route.loader&&g[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||P){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let w,P=!1,x=null,C=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||iC,c&&(u<0&&g===0?(fC("route-fallback",!1),P=!0,C=null):u===g&&(P=!0,C=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),v=()=>{let E;return w?E=x:P?E=C:f.route.Component?E=D.createElement(f.route.Component,null):f.route.element?E=f.route.element:E=d,D.createElement(oC,{match:f,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:E})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?D.createElement(sC,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var vI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(vI||{}),wu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wu||{});function lC(t){let e=D.useContext(qm);return e||Ge(!1),e}function cC(t){let e=D.useContext(YP);return e||Ge(!1),e}function uC(t){let e=D.useContext(rr);return e||Ge(!1),e}function wI(t){let e=uC(),n=e.matches[e.matches.length-1];return n.route.id||Ge(!1),n.route.id}function hC(){var t;let e=D.useContext(gI),n=cC(wu.UseRouteError),r=wI(wu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function dC(){let{router:t}=lC(vI.UseNavigateStable),e=wI(wu.UseNavigateStable),n=D.useRef(!1);return yI(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nl({fromRouteId:e},s)))},[t,e])}const _v={};function fC(t,e,n){!e&&!_v[t]&&(_v[t]=!0)}function pC(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Eu(t){let{to:e,replace:n,state:r,relative:i}=t;_o()||Ge(!1);let{future:s,static:o}=D.useContext(Si),{matches:l}=D.useContext(rr),{pathname:c}=vo(),u=Km(),d=Wm(e,Hm(l,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return D.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Gm(t){return eC(t.context)}function Y(t){Ge(!1)}function mC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1,future:l}=t;_o()&&Ge(!1);let c=e.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:c,navigator:s,static:o,future:nl({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=yo(r));let{pathname:d="/",search:f="",hash:g="",state:w=null,key:P="default"}=r,x=D.useMemo(()=>{let C=zm(d,c);return C==null?null:{location:{pathname:C,search:f,hash:g,state:w,key:P},navigationType:i}},[c,d,f,g,w,P,i]);return x==null?null:D.createElement(Si.Provider,{value:u},D.createElement(ih.Provider,{children:n,value:x}))}function gC(t){let{children:e,location:n}=t;return tC(lp(e),n)}new Promise(()=>{});function lp(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,lp(r.props.children,s));return}r.type!==Y&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cp(){return cp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cp.apply(this,arguments)}function yC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _C(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vC(t,e){return t.button===0&&(!e||e==="_self")&&!_C(t)}const wC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],EC="6";try{window.__reactRouterVersion=EC}catch{}const TC="startTransition",vv=ux[TC];function IC(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=SP({window:i,v5Compat:!0}));let o=s.current,[l,c]=D.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=D.useCallback(f=>{u&&vv?vv(()=>c(f)):c(f)},[c,u]);return D.useLayoutEffect(()=>o.listen(d),[o,d]),D.useEffect(()=>pC(r),[r]),D.createElement(mC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const SC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fe=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=e,g=yC(e,wC),{basename:w}=D.useContext(Si),P,x=!1;if(typeof u=="string"&&AC.test(u)&&(P=u,SC))try{let E=new URL(window.location.href),O=u.startsWith("//")?new URL(E.protocol+u):new URL(u),j=zm(O.pathname,w);O.origin===E.origin&&j!=null?u=j+O.search+O.hash:x=!0}catch{}let C=JP(u,{relative:i}),T=kC(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function v(E){r&&r(E),E.defaultPrevented||T(E)}return D.createElement("a",cp({},g,{href:P||C,onClick:x||s?r:v,ref:n,target:c}))});var wv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wv||(wv={}));var Ev;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ev||(Ev={}));function kC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,c=Km(),u=vo(),d=_I(t,{relative:o});return D.useCallback(f=>{if(vC(f,n)){f.preventDefault();let g=r!==void 0?r:vu(u)===vu(d);c(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,d,r,i,n,t,s,o,l])}let xC={data:""},RC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||xC},PC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,CC=/\/\*[^]*?\*\/|  +/g,Tv=/\n+/g,$r=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?$r(o,s):s+"{"+$r(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=$r(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=$r.p?$r.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},sr={},EI=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+EI(t[n]);return e}return t},bC=(t,e,n,r,i)=>{let s=EI(t),o=sr[s]||(sr[s]=(c=>{let u=0,d=11;for(;u<c.length;)d=101*d+c.charCodeAt(u++)>>>0;return"go"+d})(s));if(!sr[o]){let c=s!==t?t:(u=>{let d,f,g=[{}];for(;d=PC.exec(u.replace(CC,""));)d[4]?g.shift():d[3]?(f=d[3].replace(Tv," ").trim(),g.unshift(g[0][f]=g[0][f]||{})):g[0][d[1]]=d[2].replace(Tv," ").trim();return g[0]})(t);sr[o]=$r(i?{["@keyframes "+o]:c}:c,n?"":"."+o)}let l=n&&sr.g?sr.g:null;return n&&(sr.g=sr[o]),((c,u,d,f)=>{f?u.data=u.data.replace(f,c):u.data.indexOf(c)===-1&&(u.data=d?c+u.data:u.data+c)})(sr[o],e,r,l),o},NC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":$r(l,""):l===!1?"":l}return r+i+(o??"")},"");function sh(t){let e=this||{},n=t.call?t(e.p):t;return bC(n.unshift?n.raw?NC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,RC(e.target),e.g,e.o,e.k)}let TI,up,hp;sh.bind({g:1});let wr=sh.bind({k:1});function DC(t,e,n,r){$r.p=e,TI=t,up=n,hp=r}function Ai(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),c=l.className||i.className;n.p=Object.assign({theme:up&&up()},l),n.o=/ *go\d+/.test(c),l.className=sh.apply(n,r)+(c?" "+c:""),e&&(l.ref=o);let u=t;return t[0]&&(u=l.as||t,delete l.as),hp&&u[0]&&hp(l),TI(u,l)}return e?e(i):i}}var OC=t=>typeof t=="function",rl=(t,e)=>OC(t)?t(e):t,LC=(()=>{let t=0;return()=>(++t).toString()})(),II=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),VC=20,Qm="default",SI=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return SI(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},bc=[],AI={toasts:[],pausedAt:void 0,settings:{toastLimit:VC}},Gn={},kI=(t,e=Qm)=>{Gn[e]=SI(Gn[e]||AI,t),bc.forEach(([n,r])=>{n===e&&r(Gn[e])})},xI=t=>Object.keys(Gn).forEach(e=>kI(t,e)),MC=t=>Object.keys(Gn).find(e=>Gn[e].toasts.some(n=>n.id===t)),oh=(t=Qm)=>e=>{kI(e,t)},jC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},RI=(t={},e=Qm)=>{let[n,r]=D.useState(Gn[e]||AI),i=D.useRef(Gn[e]);D.useEffect(()=>(i.current!==Gn[e]&&r(Gn[e]),bc.push([e,r]),()=>{let o=bc.findIndex(([l])=>l===e);o>-1&&bc.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,c,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((c=t[o.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||jC[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},UC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||LC()}),Il=t=>(e,n)=>{let r=UC(e,t,n);return oh(r.toasterId||MC(r.id))({type:2,toast:r}),r.id},pe=(t,e)=>Il("blank")(t,e);pe.error=Il("error");pe.success=Il("success");pe.loading=Il("loading");pe.custom=Il("custom");pe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?oh(e)(n):xI(n)};pe.dismissAll=t=>pe.dismiss(void 0,t);pe.remove=(t,e)=>{let n={type:4,toastId:t};e?oh(e)(n):xI(n)};pe.removeAll=t=>pe.remove(void 0,t);pe.promise=(t,e,n)=>{let r=pe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?rl(e.success,i):void 0;return s?pe.success(s,{id:r,...n,...n==null?void 0:n.success}):pe.dismiss(r),i}).catch(i=>{let s=e.error?rl(e.error,i):void 0;s?pe.error(s,{id:r,...n,...n==null?void 0:n.error}):pe.dismiss(r)}),t};var FC=1e3,PI=(t,e="default")=>{let{toasts:n,pausedAt:r}=RI(t,e),i=D.useRef(new Map).current,s=D.useCallback((f,g=FC)=>{if(i.has(f))return;let w=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},g);i.set(f,w)},[]);D.useEffect(()=>{if(r)return;let f=Date.now(),g=n.map(w=>{if(w.duration===1/0)return;let P=(w.duration||0)+w.pauseDuration-(f-w.createdAt);if(P<0){w.visible&&pe.dismiss(w.id);return}return setTimeout(()=>pe.dismiss(w.id,e),P)});return()=>{g.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=D.useCallback(oh(e),[e]),l=D.useCallback(()=>{o({type:5,time:Date.now()})},[o]),c=D.useCallback((f,g)=>{o({type:1,toast:{id:f,height:g}})},[o]),u=D.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=D.useCallback((f,g)=>{let{reverseOrder:w=!1,gutter:P=8,defaultPosition:x}=g||{},C=n.filter(E=>(E.position||x)===(f.position||x)&&E.height),T=C.findIndex(E=>E.id===f.id),v=C.filter((E,O)=>O<T&&E.visible).length;return C.filter(E=>E.visible).slice(...w?[v+1]:[0,v]).reduce((E,O)=>E+(O.height||0)+P,0)},[n]);return D.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let g=i.get(f.id);g&&(clearTimeout(g),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},BC=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$C=wr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,zC=wr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,CI=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${BC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$C} 0.15s ease-out forwards;
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
    animation: ${zC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,HC=wr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,bI=Ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${HC} 1s linear infinite;
`,WC=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,qC=wr`
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
}`,NI=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${WC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${qC} 0.2s ease-out forwards;
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
`,KC=Ai("div")`
  position: absolute;
`,GC=Ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,QC=wr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,YC=Ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${QC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,DI=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(YC,null,e):e:n==="blank"?null:D.createElement(GC,null,D.createElement(bI,{...r}),n!=="loading"&&D.createElement(KC,null,n==="error"?D.createElement(CI,{...r}):D.createElement(NI,{...r})))},JC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,XC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,ZC="0%{opacity:0;} 100%{opacity:1;}",eb="0%{opacity:1;} 100%{opacity:0;}",tb=Ai("div")`
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
`,nb=Ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,rb=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=II()?[ZC,eb]:[JC(n),XC(n)];return{animation:e?`${wr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${wr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},OI=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?rb(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(DI,{toast:t}),o=D.createElement(nb,{...t.ariaProps},rl(t.message,t));return D.createElement(tb,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});DC(D.createElement);var ib=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let c=o.getBoundingClientRect().height;r(t,c)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},sb=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:II()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},ob=sh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,lc=16,LI=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:c,handlers:u}=PI(n,s);return D.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:lc,left:lc,right:lc,bottom:lc,pointerEvents:"none",...o},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(d=>{let f=d.position||e,g=u.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),w=sb(f,g);return D.createElement(ib,{id:d.id,key:d.id,onHeightUpdate:u.updateHeight,className:d.visible?ob:"",style:w},d.type==="custom"?rl(d.message,d):i?i(d):D.createElement(OI,{toast:d,position:f}))}))},Nc=pe;const ab=Object.freeze(Object.defineProperty({__proto__:null,CheckmarkIcon:NI,ErrorIcon:CI,LoaderIcon:bI,ToastBar:OI,ToastIcon:DI,Toaster:LI,default:Nc,resolveValue:rl,toast:pe,useToaster:PI,useToasterStore:RI},Symbol.toStringTag,{value:"Module"}));var lb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const cb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pe=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...c},u)=>D.createElement("svg",{ref:u,...lb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${cb(t)}`,...c},[...e.map(([d,f])=>D.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},ub=Pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),hb=Pe("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Iv=Pe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Sv=Pe("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),Av=Pe("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),kv=Pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),db=Pe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),fb=Pe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),pb=Pe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),mb=Pe("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),gb=Pe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),yb=Pe("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]),_b=Pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),xv=Pe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),vb=Pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),wb=Pe("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Rv=Pe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),dp=Pe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),VI=Pe("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Pv=Pe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Cv=Pe("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),Eb=Pe("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),Tb=Pe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ib=Pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Sb=Pe("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Ab=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(g=64)),r.push(n[d],n[f],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(MI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw new xb;const g=s<<2|l>>4;if(r.push(g),u!==64){const w=l<<4&240|u>>2;if(r.push(w),f!==64){const P=u<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rb=function(t){const e=MI(t);return jI.encodeByteArray(e,!0)},Tu=function(t){return Rb(t).replace(/\./g,"")},UI=function(t){try{return jI.decodeString(t,!0)}catch{}return null};/**
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
 */function Pb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cb=()=>Pb().__FIREBASE_DEFAULTS__,bb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&UI(t[1]);return e&&JSON.parse(e)},ah=()=>{try{return Ab()||Cb()||bb()||Nb()}catch{return}},FI=t=>{var e,n;return(n=(e=ah())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},BI=t=>{const e=FI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$I=()=>{var t;return(t=ah())==null?void 0:t.config},zI=t=>{var e;return(e=ah())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[Tu(JSON.stringify(n)),Tu(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ob(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function Lb(){var e;const t=(e=ah())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ub(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fb(){return!Lb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WI(){try{return typeof indexedDB=="object"}catch{return!1}}function qI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function Bb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$b,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zb(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new jn(i,l,r)}}function zb(t,e){return t.replace(Hb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hb=/\{\$([^}]+)}/g;function Wb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bv(s)&&bv(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qb(t,e){const n=new Kb(t,e);return n.subscribe.bind(n)}class Kb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vd),i.error===void 0&&(i.error=Vd),i.complete===void 0&&(i.complete=Vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch{}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vd(){}/**
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
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ym(t){return(await fetch(t,{credentials:"include"})).ok}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Db;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jb(e))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vi){return this.instances.has(e)}getOptions(e=Vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vi){return this.component?this.component.multipleInstances?e:Vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yb(t){return t===Vi?void 0:t}function Jb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Zb={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},eN=ue.INFO,tN={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},nN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tN[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jm{constructor(e){this.name=e,this._logLevel=eN,this._logHandler=nN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const rN=(t,e)=>e.some(n=>t instanceof n);let Nv,Dv;function iN(){return Nv||(Nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sN(){return Dv||(Dv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KI=new WeakMap,fp=new WeakMap,GI=new WeakMap,Md=new WeakMap,Xm=new WeakMap;function oN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&KI.set(n,t)}).catch(()=>{}),Xm.set(e,t),e}function aN(t){if(fp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fp.set(t,e)}let pp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||GI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lN(t){pp=t(pp)}function cN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return GI.set(r,e.sort?e.sort():[e]),pr(r)}:sN().includes(t)?function(...e){return t.apply(jd(this),e),pr(KI.get(this))}:function(...e){return pr(t.apply(jd(this),e))}}function uN(t){return typeof t=="function"?cN(t):(t instanceof IDBTransaction&&aN(t),rN(t,iN())?new Proxy(t,pp):t)}function pr(t){if(t instanceof IDBRequest)return oN(t);if(Md.has(t))return Md.get(t);const e=uN(t);return e!==t&&(Md.set(t,e),Xm.set(e,t)),e}const jd=t=>Xm.get(t);function lh(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pr(o.result),c.oldVersion,c.newVersion,pr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function Ud(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),pr(n).then(()=>{})}const hN=["get","getKey","getAll","getAllKeys","count"],dN=["put","add","delete","clear"],Fd=new Map;function Ov(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hN.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Fd.set(e,s),s}lN(t=>({...t,get:(e,n,r)=>Ov(e,n)||t.get(e,n,r),has:(e,n)=>!!Ov(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mp="@firebase/app",Lv="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Jm("@firebase/app"),mN="@firebase/app-compat",gN="@firebase/analytics-compat",yN="@firebase/analytics",_N="@firebase/app-check-compat",vN="@firebase/app-check",wN="@firebase/auth",EN="@firebase/auth-compat",TN="@firebase/database",IN="@firebase/data-connect",SN="@firebase/database-compat",AN="@firebase/functions",kN="@firebase/functions-compat",xN="@firebase/installations",RN="@firebase/installations-compat",PN="@firebase/messaging",CN="@firebase/messaging-compat",bN="@firebase/performance",NN="@firebase/performance-compat",DN="@firebase/remote-config",ON="@firebase/remote-config-compat",LN="@firebase/storage",VN="@firebase/storage-compat",MN="@firebase/firestore",jN="@firebase/ai",UN="@firebase/firestore-compat",FN="firebase",BN="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="[DEFAULT]",$N={[mp]:"fire-core",[mN]:"fire-core-compat",[yN]:"fire-analytics",[gN]:"fire-analytics-compat",[vN]:"fire-app-check",[_N]:"fire-app-check-compat",[wN]:"fire-auth",[EN]:"fire-auth-compat",[TN]:"fire-rtdb",[IN]:"fire-data-connect",[SN]:"fire-rtdb-compat",[AN]:"fire-fn",[kN]:"fire-fn-compat",[xN]:"fire-iid",[RN]:"fire-iid-compat",[PN]:"fire-fcm",[CN]:"fire-fcm-compat",[bN]:"fire-perf",[NN]:"fire-perf-compat",[DN]:"fire-rc",[ON]:"fire-rc-compat",[LN]:"fire-gcs",[VN]:"fire-gcs-compat",[MN]:"fire-fst",[UN]:"fire-fst-compat",[jN]:"fire-vertex","fire-js":"fire-js",[FN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map,zN=new Map,yp=new Map;function Vv(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(yp.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;yp.set(e,t);for(const n of Iu.values())Vv(n,t);for(const n of zN.values())Vv(n,t);return!0}function hs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new cs("app","Firebase",HN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=BN;function QI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(n||(n=$I()),!n)throw ai.create("no-options");const s=Iu.get(i);if(s){if(pi(n,s.options)&&pi(r,s.config))return s;throw ai.create("duplicate-app",{appName:i})}const o=new Xb(i);for(const c of yp.values())o.addComponent(c);const l=new WN(n,r,o);return Iu.set(i,l),l}function ch(t=gp){const e=Iu.get(t);if(!e&&t===gp&&$I())return QI();if(!e)throw ai.create("no-app",{appName:t});return e}function qt(t,e,n){let r=$N[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(o.join(" "));return}Vn(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const qN="firebase-heartbeat-database",KN=1,il="firebase-heartbeat-store";let Bd=null;function YI(){return Bd||(Bd=lh(qN,KN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(il)}catch{}}}}).catch(t=>{throw ai.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function GN(t){try{const n=(await YI()).transaction(il),r=await n.objectStore(il).get(JI(t));return await n.done,r}catch(e){if(e instanceof jn)Er.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function Mv(t,e){try{const r=(await YI()).transaction(il,"readwrite");await r.objectStore(il).put(e,JI(t)),await r.done}catch(n){if(n instanceof jn)Er.warn(n.message);else{const r=ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function JI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QN=1024,YN=30;class JN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>YN){const o=eD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jv(),{heartbeatsToSend:r,unsentEntries:i}=XN(this._heartbeatsCache.heartbeats),s=Tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Er.warn(n),""}}}function jv(){return new Date().toISOString().substring(0,10)}function XN(t,e=QN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WI()?qI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uv(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}function eD(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){Vn(new En("platform-logger",e=>new fN(e),"PRIVATE")),Vn(new En("heartbeat",e=>new JN(e),"PRIVATE")),qt(mp,Lv,t),qt(mp,Lv,"esm2020"),qt("fire-js","")}tD("");function XI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nD=XI,ZI=new cs("auth","Firebase",XI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Jm("@firebase/auth");function rD(t,...e){Su.logLevel<=ue.WARN&&Su.warn(`Auth (${ds}): ${t}`,...e)}function Dc(t,...e){Su.logLevel<=ue.ERROR&&Su.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw eg(t,...e)}function Kt(t,...e){return eg(t,...e)}function Zm(t,e,n){const r={...nD(),[e]:n};return new cs("auth","Firebase",r).create(e,{appName:t.name})}function Lt(t){return Zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),Zm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ZI.create(t,...e)}function z(t,e,...n){if(!t)throw eg(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dc(e),new Error(e)}function Tr(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function tg(){return Fv()==="http:"||Fv()==="https:"}function Fv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tg()||Mb()||"connection"in navigator)?navigator.onLine:!0}function sD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ob()||jb()}get(){return iD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){Tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lD=new Sl(3e4,6e4);function st(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ot(t,e,n,r,i={}){return t1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return Vb()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),e1.fetch()(await n1(t,t.config.apiHost,n,l),u)})}async function t1(t,e,n){t._canInitEmulator=!1;const r={...oD,...e};try{const i=new uD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zm(t,d,u);Tn(t,d)}}catch(i){if(i instanceof jn)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function Rr(t,e,n,r,i={}){const s=await ot(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function n1(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ng(t.config,i):`${t.config.apiScheme}://${i}`;return aD.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function cD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),lD.get())})}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){return t!==void 0&&t.getResponse!==void 0}function $v(t){return t!==void 0&&t.enterprise!==void 0}class r1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(t){return(await ot(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function i1(t,e){return ot(t,"GET","/v2/recaptchaConfig",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e){return ot(t,"POST","/v1/accounts:delete",e)}async function fD(t,e){return ot(t,"POST","/v1/accounts:update",e)}async function Au(t,e){return ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pD(t,e=!1){const n=se(t),r=await n.getIdToken(e),i=hh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pa($d(i.auth_time)),issuedAtTime:Pa($d(i.iat)),expirationTime:Pa($d(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $d(t){return Number(t)*1e3}function hh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dc("JWT malformed, contained fewer than 3 sections"),null;try{const i=UI(n);return i?JSON.parse(i):(Dc("Failed to decode base64 JWT payload"),null)}catch(i){return Dc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zv(t){const e=hh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&mD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Xi(t,Au(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?s1(i.providerUserInfo):[],o=_D(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _p(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function yD(t){const e=se(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _D(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function s1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e){const n=await t1(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await n1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(c.credentials="include"),e1.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wD(t,e){return ot(t,"POST","/v2/accounts:revokeToken",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=zv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hs;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new gD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _p(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pD(this,e)}reload(){return yD(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await Xi(this,dD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:w,providerData:P,stsTokenManager:x}=n;z(f&&x,e,"internal-error");const C=Hs.fromJSON(this.name,x);z(typeof f=="string",e,"internal-error"),Mr(r,e.name),Mr(i,e.name),z(typeof g=="boolean",e,"internal-error"),z(typeof w=="boolean",e,"internal-error"),Mr(s,e.name),Mr(o,e.name),Mr(l,e.name),Mr(c,e.name),Mr(u,e.name),Mr(d,e.name);const T=new Cn({uid:f,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:C,createdAt:u,lastLoginAt:d});return P&&Array.isArray(P)&&(T.providerData=P.map(v=>({...v}))),c&&(T._redirectEventId=c),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hs;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ol(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?s1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hs;l.updateFromIdToken(r);const c=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _p(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function dr(t){Tr(t instanceof Function,"Expected a class definition");let e=Hv.get(t);return e?(Tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o1.type="NONE";const Wv=o1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Au(this.auth,{idToken:e}).catch(()=>{});return n?Cn._fromGetAccountInfoResponse(this.auth,n,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(dr(Wv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dr(Wv);const o=Oc(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const g=await Au(e,{idToken:d}).catch(()=>{});if(!g)break;f=await Cn._fromGetAccountInfoResponse(e,g,d)}else f=Cn._fromJSON(e,d);u!==s&&(l=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ws(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d1(e))return"Blackberry";if(f1(e))return"Webos";if(l1(e))return"Safari";if((e.includes("chrome/")||c1(e))&&!e.includes("edge/"))return"Chrome";if(h1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a1(t=xt()){return/firefox\//i.test(t)}function l1(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c1(t=xt()){return/crios\//i.test(t)}function u1(t=xt()){return/iemobile/i.test(t)}function h1(t=xt()){return/android/i.test(t)}function d1(t=xt()){return/blackberry/i.test(t)}function f1(t=xt()){return/webos/i.test(t)}function rg(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ED(t=xt()){var e;return rg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function TD(){return Ub()&&document.documentMode===10}function p1(t=xt()){return rg(t)||h1(t)||f1(t)||d1(t)||/windows phone/i.test(t)||u1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e=[]){let n;switch(t){case"Browser":n=qv(xt());break;case"Worker":n=`${qv(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class ID{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SD(t,e={}){return ot(t,"GET","/v2/passwordPolicy",st(t,e))}/**
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
 */const AD=6;class kD{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??AD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kv(this),this.idTokenSubscription=new Kv(this),this.beforeStateQueue=new ID(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Au(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch{await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Lt(this));const n=e?se(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SD(this),n=new kD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&rD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ft(t){return se(t)}class Kv{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RD(t){Al=t}function ig(t){return Al.loadJS(t)}function PD(){return Al.recaptchaV2Script}function CD(){return Al.recaptchaEnterpriseScript}function bD(){return Al.gapiScript}function g1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=500,DD=6e4,cc=1e12;class OD{constructor(e){this.auth=e,this.counter=cc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new MD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||cc;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||cc;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||cc;return(r=this._widgets.get(n))==null||r.execute(),""}}class LD{constructor(){this.enterprise=new VD}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class VD{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class MD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=jD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},DD)},ND))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function jD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const UD="recaptcha-enterprise",Ca="NO_RECAPTCHA";class y1{constructor(e){this.type=UD,this.auth=ft(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{i1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new r1(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;$v(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ca)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LD().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$v(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=CD();c.length!==0&&(c+=l),ig(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function na(t,e,n,r=!1,i=!1){const s=new y1(t);let o;if(i)o=Ca;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function li(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await na(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){const c=await na(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await na(t,e,n);return r(t,l).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){const d=await na(t,e,n,!1,!0);return r(t,d)}return Promise.reject(c)})}else{const l=await na(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function FD(t){const e=ft(t),n=await i1(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new r1(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new y1(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t,e){const n=hs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pi(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function $D(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zD(t,e,n){const r=ft(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_1(e),{host:o,port:l}=HD(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(pi(u,r.config.emulator)&&pi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,us(o)?Ym(`${s}//${o}${c}`):i||WD()}function _1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HD(t){const e=_1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gv(o)}}}function Gv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qD(t,e){return ot(t,"POST","/v1/accounts:resetPassword",st(t,e))}async function KD(t,e){return ot(t,"POST","/v1/accounts:update",e)}async function GD(t,e){return ot(t,"POST","/v1/accounts:signUp",e)}async function QD(t,e){return ot(t,"POST","/v1/accounts:update",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(t,e){return Rr(t,"POST","/v1/accounts:signInWithPassword",st(t,e))}async function fh(t,e){return ot(t,"POST","/v1/accounts:sendOobCode",st(t,e))}async function JD(t,e){return fh(t,e)}async function XD(t,e){return fh(t,e)}async function ZD(t,e){return fh(t,e)}async function e2(t,e){return fh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}async function n2(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends dh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new al(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new al(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,n,"signInWithPassword",YD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return t2(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,r,"signUpPassword",GD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return n2(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const r2="http://localhost";class Ir extends dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:r2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv(t,e){return ot(t,"POST","/v1/accounts:sendVerificationCode",st(t,e))}async function i2(t,e){return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e))}async function s2(t,e){const n=await Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e));if(n.temporaryProof)throw ma(t,"account-exists-with-different-credential",n);return n}const o2={USER_NOT_FOUND:"user-not-found"};async function a2(t,e){const n={...e,operation:"REAUTH"};return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,n),o2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends dh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ba({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ba({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return i2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return s2(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return a2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ba({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c2(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class ph{constructor(e){const n=fa(pa(e)),r=n.apiKey??null,i=n.oobCode??null,s=l2(n.mode??null);z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=c2(e);try{return new ph(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return al._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ph.parseLink(n);return z(r,"argument-error"),al._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function v1(t,e){return Rr(t,"POST","/v1/accounts:signUp",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=Yv(r);return new tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yv(r);return new tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O6(t){var i;if(Xe(t.app))return Promise.reject(Lt(t));const e=ft(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new tr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await v1(e,{returnSecureToken:!0}),r=await tr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends jn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ku(e,n,r,i)}}function w1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L6(t,e){const n=se(t);await mh(!0,n,e);const{providerUserInfo:r}=await fD(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=E1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function T1(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",r)}async function mh(t,e,n){await ol(e);const r=E1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e,n=!1){const{auth:r}=t;if(Xe(r.app))return Promise.reject(Lt(r));const i="reauthenticate";try{const s=await Xi(t,w1(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=hh(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(t,e,n=!1){if(Xe(t.app))return Promise.reject(Lt(t));const r="signIn",i=await w1(t,r,e),s=await tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gh(t,e){return I1(ft(t),e)}async function h2(t,e){const n=se(t);return await mh(!1,n,e.providerId),T1(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e){return Rr(t,"POST","/v1/accounts:signInWithCustomToken",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V6(t,e){if(Xe(t.app))return Promise.reject(Lt(t));const n=ft(t),r=await d2(n,{token:e,returnSecureToken:!0}),i=await tr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e,n){var r;z(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),z(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t){const e=ft(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function M6(t,e,n){const r=ft(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&yh(r,i,n),await li(r,i,"getOobCode",XD,"EMAIL_PASSWORD_PROVIDER")}async function j6(t,e,n){await qD(se(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sg(t),r})}async function U6(t,e){await QD(se(t),{oobCode:e})}async function f2(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t),o=await li(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",v1,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&sg(t),c}),l=await tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function p2(t,e,n){return Xe(t.app)?Promise.reject(Lt(t)):gh(se(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F6(t,e,n){const r=ft(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){z(l.handleCodeInApp,r,"argument-error"),l&&yh(r,o,l)}s(i,n),await li(r,i,"getOobCode",ZD,"EMAIL_PASSWORD_PROVIDER")}function B6(t,e){const n=ph.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function $6(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=se(t),i=fs.credentialWithLink(e,n||sl());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),gh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(t,e){return ot(t,"POST","/v1/accounts:createAuthUri",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z6(t,e){const n=tg()?sl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await m2(se(t),r);return i||[]}async function H6(t,e){const n=se(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&yh(n.auth,i,e);const{email:s}=await JD(n.auth,i);s!==t.email&&await t.reload()}async function W6(t,e,n){const r=se(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&yh(r.auth,s,n);const{email:o}=await e2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(t,e){return ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=se(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xi(r,g2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function K6(t,e){const n=se(t);return Xe(n.auth.app)?Promise.reject(Lt(n.auth)):S1(n,e,null)}function G6(t,e){return S1(se(t),null,e)}async function S1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Xi(t,KD(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=hh(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Ks(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new _2(r,n);case"github.com":return new v2(r,n);case"google.com":return new w2(r,n);case"twitter.com":return new E2(r,n,t.screenName||null);case"custom":case"anonymous":return new Ks(r,null);default:return new Ks(r,e,n)}}class Ks{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class A1 extends Ks{constructor(e,n,r,i){super(e,n,r),this.username=i}}class _2 extends Ks{constructor(e,n){super(e,"facebook.com",n)}}class v2 extends A1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class w2 extends Ks{constructor(e,n){super(e,"google.com",n)}}class E2 extends A1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Q6(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:y2(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t,e){return se(t).setPersistence(e)}function I2(t,e,n,r){return se(t).onIdTokenChanged(e,n,r)}function S2(t,e,n){return se(t).beforeAuthStateChanged(e,n)}function A2(t,e,n,r){return se(t).onAuthStateChanged(e,n,r)}function k2(t){return se(t).signOut()}function Y6(t,e){return ft(t).revokeAccessToken(e)}async function J6(t){return se(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t,e){return ot(t,"POST","/v2/accounts/mfaEnrollment:start",st(t,e))}const xu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xu,"1"),this.storage.removeItem(xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=1e3,R2=10;class x1 extends k1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,R2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},x2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x1.type="LOCAL";const R1=x1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1 extends k1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P1.type="SESSION";const C1=P1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await P2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=vh("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function b2(t){Ye().location.href=t}/**
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
 */function og(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function N2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function O2(){return og()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="firebaseLocalStorageDb",L2=1,Ru="firebaseLocalStorage",N1="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wh(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function V2(){const t=indexedDB.deleteDatabase(b1);return new kl(t).toPromise()}function vp(){const t=indexedDB.open(b1,L2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ru,{keyPath:N1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ru)?e(r):(r.close(),await V2(),e(await vp()))})})}async function Xv(t,e,n){const r=wh(t,!0).put({[N1]:e,value:n});return new kl(r).toPromise()}async function M2(t,e){const n=wh(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function Zv(t,e){const n=wh(t,!0).delete(e);return new kl(n).toPromise()}const j2=800,U2=3;class D1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>U2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(O2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await N2(),!this.activeServiceWorker)return;this.sender=new C2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vp();return await Xv(e,xu,"1"),await Zv(e,xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>M2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wh(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D1.type="LOCAL";const F2=D1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t,e){return ot(t,"POST","/v2/accounts/mfaSignIn:start",st(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=g1("rcb"),B2=new Sl(3e4,6e4);class $2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ye().grecaptcha)!=null&&e.render)}load(e,n=""){return z(z2(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Bv(Ye().grecaptcha)?Promise.resolve(Ye().grecaptcha):new Promise((r,i)=>{const s=Ye().setTimeout(()=>{i(Kt(e,"network-request-failed"))},B2.get());Ye()[zd]=()=>{Ye().clearTimeout(s),delete Ye()[zd];const l=Ye().grecaptcha;if(!l||!Bv(l)){i(Kt(e,"internal-error"));return}const c=l.render;l.render=(u,d)=>{const f=c(u,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${PD()}?${wo({onload:zd,render:"explicit",hl:n})}`;ig(o).catch(()=>{clearTimeout(s),i(Kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Ye().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function z2(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class H2{async load(e){return new OD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="recaptcha",W2={theme:"light",type:"image"};class q2{constructor(e,n,r={...W2}){this.parameters=r,this.type=Na,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ft(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new H2:new $2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(tg()&&!og(),this.auth,"internal-error"),await K2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await hD(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function K2(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ba._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function G2(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t),i=await L1(r,e,se(n));return new O1(i,s=>gh(r,s))}async function X6(t,e,n){const r=se(t);await mh(!1,r,"phone");const i=await L1(r.auth,e,se(n));return new O1(i,s=>h2(r,s))}async function L1(t,e,n){var r;if(!t._getRecaptchaConfig())try{await FD(t)}catch{}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){z(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await li(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Ca){z((n==null?void 0:n.type)===Na,d,"argument-error");const g=await Hd(d,f,n);return Jv(d,g)}return Jv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{z(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;z(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await li(t,l,"mfaSmsSignIn",async(f,g)=>{if(g.phoneSignInInfo.captchaResponse===Ca){z((n==null?void 0:n.type)===Na,f,"argument-error");const w=await Hd(f,g,n);return e0(f,w)}return e0(f,g)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await li(t,s,"sendVerificationCode",async(u,d)=>{if(d.captchaResponse===Ca){z((n==null?void 0:n.type)===Na,u,"argument-error");const f=await Hd(u,d,n);return Qv(u,f)}return Qv(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function Hd(t,e,n){z(n.type===Na,t,"argument-error");const r=await n.verify();z(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function xl(t,e){return e?dr(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q2(t){return I1(t.auth,new ag(t),t.bypassAuthState)}function Y2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),u2(n,new ag(t),t.bypassAuthState)}async function J2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),T1(n,new ag(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q2;case"linkViaPopup":case"linkViaRedirect":return J2;case"reauthViaPopup":case"reauthViaRedirect":return Y2;default:Tn(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=new Sl(2e3,1e4);async function t0(t,e,n){if(Xe(t.app))return Promise.reject(Kt(t,"operation-not-supported-in-this-environment"));const r=ft(t);uh(t,e,Eo);const i=xl(r,n);return new Yr(r,"signInViaPopup",e,i).executeNotNull()}async function Z6(t,e,n){const r=se(t);uh(r.auth,e,Eo);const i=xl(r.auth,n);return new Yr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yr extends V1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X2.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="pendingRedirect",Vc=new Map;class eO extends V1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await tO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tO(t,e){const n=U1(e),r=j1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function M1(t,e){return j1(t)._set(U1(e),"true")}function nO(t,e){Vc.set(t._key(),e)}function j1(t){return dr(t._redirectPersistence)}function U1(t){return Oc(Z2,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t,e,n){return iO(t,e,n)}async function iO(t,e,n){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t);uh(t,e,Eo),await r._initializationPromise;const i=xl(r,n);return await M1(i,r),i._openRedirect(r,e,"signInViaRedirect")}function e9(t,e,n){return sO(t,e,n)}async function sO(t,e,n){const r=se(t);uh(r.auth,e,Eo),await r.auth._initializationPromise;const i=xl(r.auth,n);await mh(!1,r,e.providerId),await M1(i,r.auth);const s=await aO(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function oO(t,e){return await ft(t)._initializationPromise,F1(t,e,!1)}async function F1(t,e,n=!1){if(Xe(t.app))return Promise.reject(Lt(t));const r=ft(t),i=xl(r,e),o=await new eO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function aO(t){const e=vh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=10*60*1e3;class cO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lO&&this.cachedEventUids.clear(),this.cachedEventUids.has(n0(e))}saveEventToCache(e){this.cachedEventUids.add(n0(e)),this.lastProcessedEventTime=Date.now()}}function n0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(t,e={}){return ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fO=/^https?/;async function pO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hO(t);for(const n of e)try{if(mO(n))return}catch{}Tn(t,"unauthorized-domain")}function mO(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fO.test(n))return!1;if(dO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gO=new Sl(3e4,6e4);function r0(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yO(t){return new Promise((e,n)=>{var i,s,o;function r(){r0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{r0(),n(Kt(t,"network-request-failed"))},timeout:gO.get()})}if((s=(i=Ye().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ye().gapi)!=null&&o.load)r();else{const l=g1("iframefcb");return Ye()[l]=()=>{gapi.load?r():n(Kt(t,"network-request-failed"))},ig(`${bD()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Mc=null,e})}let Mc=null;function _O(t){return Mc=Mc||yO(t),Mc}/**
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
 */const vO=new Sl(5e3,15e3),wO="__/auth/iframe",EO="emulator/auth/iframe",TO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SO(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ng(e,EO):`https://${t.config.authDomain}/${wO}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=IO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wo(r).slice(1)}`}async function AO(t){const e=await _O(t),n=Ye().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:SO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),l=Ye().setTimeout(()=>{s(o)},vO.get());function c(){Ye().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const kO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xO=500,RO=600,PO="_blank",CO="http://localhost";class i0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bO(t,e,n,r=xO,i=RO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...kO,width:r.toString(),height:i.toString(),top:s,left:o},u=xt().toLowerCase();n&&(l=c1(u)?PO:n),a1(u)&&(e=e||CO,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[w,P])=>`${g}${w}=${P},`,"");if(ED(u)&&l!=="_self")return NO(e||"",l),new i0(null);const f=window.open(e||"",l,d);z(f,t,"popup-blocked");try{f.focus()}catch{}return new i0(f)}function NO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DO="__/auth/handler",OO="emulator/auth/handler",LO=encodeURIComponent("fac");async function s0(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof Eo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof To){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${LO}=${encodeURIComponent(c)}`:"";return`${VO(t)}?${wo(l).slice(1)}${u}`}function VO({config:t}){return t.emulator?ng(t,OO):`https://${t.authDomain}/${DO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="webStorageSupport";class MO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C1,this._completeRedirectFn=F1,this._overrideRedirectResult=nO}async _openPopup(e,n,r,i){var o;Tr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await s0(e,n,r,sl(),i);return bO(e,s,vh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await s0(e,n,r,sl(),i);return b2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AO(e),r=new cO(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Wd];s!==void 0&&n(!!s),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p1()||l1()||rg()}}const jO=MO;var o0="@firebase/auth",a0="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BO(t){Vn(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m1(t)},u=new xD(r,i,s,c);return $D(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new En("auth-internal",e=>{const n=ft(e.getProvider("auth").getImmediate());return(r=>new UO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(o0,a0,FO(t)),qt(o0,a0,"esm2020")}/**
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
 */const $O=5*60,zO=zI("authIdTokenMaxAge")||$O;let l0=null;const HO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zO)return;const i=n==null?void 0:n.token;l0!==i&&(l0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WO(t=ch()){const e=hs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BD(t,{popupRedirectResolver:jO,persistence:[F2,R1,C1]}),r=zI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=HO(s.toString());S2(n,o,()=>o(n.currentUser)),I2(n,l=>o(l))}}const i=FI("auth");return i&&zD(n,`http://${i}`),n}function qO(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}RD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BO("Browser");var KO="firebase",GO="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(KO,GO,"app");var c0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ci,$1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function S(){}S.prototype=_.prototype,I.F=_.prototype,I.prototype=new S,I.prototype.constructor=I,I.D=function(k,R,b){for(var A=Array(arguments.length-2),me=2;me<arguments.length;me++)A[me-2]=arguments[me];return _.prototype[R].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,S){S||(S=0);const k=Array(16);if(typeof _=="string")for(var R=0;R<16;++R)k[R]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(R=0;R<16;++R)k[R]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=I.g[0],S=I.g[1],R=I.g[2];let b=I.g[3],A;A=_+(b^S&(R^b))+k[0]+3614090360&4294967295,_=S+(A<<7&4294967295|A>>>25),A=b+(R^_&(S^R))+k[1]+3905402710&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(S^b&(_^S))+k[2]+606105819&4294967295,R=b+(A<<17&4294967295|A>>>15),A=S+(_^R&(b^_))+k[3]+3250441966&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(b^S&(R^b))+k[4]+4118548399&4294967295,_=S+(A<<7&4294967295|A>>>25),A=b+(R^_&(S^R))+k[5]+1200080426&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(S^b&(_^S))+k[6]+2821735955&4294967295,R=b+(A<<17&4294967295|A>>>15),A=S+(_^R&(b^_))+k[7]+4249261313&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(b^S&(R^b))+k[8]+1770035416&4294967295,_=S+(A<<7&4294967295|A>>>25),A=b+(R^_&(S^R))+k[9]+2336552879&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(S^b&(_^S))+k[10]+4294925233&4294967295,R=b+(A<<17&4294967295|A>>>15),A=S+(_^R&(b^_))+k[11]+2304563134&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(b^S&(R^b))+k[12]+1804603682&4294967295,_=S+(A<<7&4294967295|A>>>25),A=b+(R^_&(S^R))+k[13]+4254626195&4294967295,b=_+(A<<12&4294967295|A>>>20),A=R+(S^b&(_^S))+k[14]+2792965006&4294967295,R=b+(A<<17&4294967295|A>>>15),A=S+(_^R&(b^_))+k[15]+1236535329&4294967295,S=R+(A<<22&4294967295|A>>>10),A=_+(R^b&(S^R))+k[1]+4129170786&4294967295,_=S+(A<<5&4294967295|A>>>27),A=b+(S^R&(_^S))+k[6]+3225465664&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(b^_))+k[11]+643717713&4294967295,R=b+(A<<14&4294967295|A>>>18),A=S+(b^_&(R^b))+k[0]+3921069994&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(R^b&(S^R))+k[5]+3593408605&4294967295,_=S+(A<<5&4294967295|A>>>27),A=b+(S^R&(_^S))+k[10]+38016083&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(b^_))+k[15]+3634488961&4294967295,R=b+(A<<14&4294967295|A>>>18),A=S+(b^_&(R^b))+k[4]+3889429448&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(R^b&(S^R))+k[9]+568446438&4294967295,_=S+(A<<5&4294967295|A>>>27),A=b+(S^R&(_^S))+k[14]+3275163606&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(b^_))+k[3]+4107603335&4294967295,R=b+(A<<14&4294967295|A>>>18),A=S+(b^_&(R^b))+k[8]+1163531501&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(R^b&(S^R))+k[13]+2850285829&4294967295,_=S+(A<<5&4294967295|A>>>27),A=b+(S^R&(_^S))+k[2]+4243563512&4294967295,b=_+(A<<9&4294967295|A>>>23),A=R+(_^S&(b^_))+k[7]+1735328473&4294967295,R=b+(A<<14&4294967295|A>>>18),A=S+(b^_&(R^b))+k[12]+2368359562&4294967295,S=R+(A<<20&4294967295|A>>>12),A=_+(S^R^b)+k[5]+4294588738&4294967295,_=S+(A<<4&4294967295|A>>>28),A=b+(_^S^R)+k[8]+2272392833&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^S)+k[11]+1839030562&4294967295,R=b+(A<<16&4294967295|A>>>16),A=S+(R^b^_)+k[14]+4259657740&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(S^R^b)+k[1]+2763975236&4294967295,_=S+(A<<4&4294967295|A>>>28),A=b+(_^S^R)+k[4]+1272893353&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^S)+k[7]+4139469664&4294967295,R=b+(A<<16&4294967295|A>>>16),A=S+(R^b^_)+k[10]+3200236656&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(S^R^b)+k[13]+681279174&4294967295,_=S+(A<<4&4294967295|A>>>28),A=b+(_^S^R)+k[0]+3936430074&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^S)+k[3]+3572445317&4294967295,R=b+(A<<16&4294967295|A>>>16),A=S+(R^b^_)+k[6]+76029189&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(S^R^b)+k[9]+3654602809&4294967295,_=S+(A<<4&4294967295|A>>>28),A=b+(_^S^R)+k[12]+3873151461&4294967295,b=_+(A<<11&4294967295|A>>>21),A=R+(b^_^S)+k[15]+530742520&4294967295,R=b+(A<<16&4294967295|A>>>16),A=S+(R^b^_)+k[2]+3299628645&4294967295,S=R+(A<<23&4294967295|A>>>9),A=_+(R^(S|~b))+k[0]+4096336452&4294967295,_=S+(A<<6&4294967295|A>>>26),A=b+(S^(_|~R))+k[7]+1126891415&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~S))+k[14]+2878612391&4294967295,R=b+(A<<15&4294967295|A>>>17),A=S+(b^(R|~_))+k[5]+4237533241&4294967295,S=R+(A<<21&4294967295|A>>>11),A=_+(R^(S|~b))+k[12]+1700485571&4294967295,_=S+(A<<6&4294967295|A>>>26),A=b+(S^(_|~R))+k[3]+2399980690&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~S))+k[10]+4293915773&4294967295,R=b+(A<<15&4294967295|A>>>17),A=S+(b^(R|~_))+k[1]+2240044497&4294967295,S=R+(A<<21&4294967295|A>>>11),A=_+(R^(S|~b))+k[8]+1873313359&4294967295,_=S+(A<<6&4294967295|A>>>26),A=b+(S^(_|~R))+k[15]+4264355552&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~S))+k[6]+2734768916&4294967295,R=b+(A<<15&4294967295|A>>>17),A=S+(b^(R|~_))+k[13]+1309151649&4294967295,S=R+(A<<21&4294967295|A>>>11),A=_+(R^(S|~b))+k[4]+4149444226&4294967295,_=S+(A<<6&4294967295|A>>>26),A=b+(S^(_|~R))+k[11]+3174756917&4294967295,b=_+(A<<10&4294967295|A>>>22),A=R+(_^(b|~S))+k[2]+718787259&4294967295,R=b+(A<<15&4294967295|A>>>17),A=S+(b^(R|~_))+k[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.v=function(I,_){_===void 0&&(_=I.length);const S=_-this.blockSize,k=this.C;let R=this.h,b=0;for(;b<_;){if(R==0)for(;b<=S;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<_;)if(k[R++]=I.charCodeAt(b++),R==this.blockSize){i(this,k),R=0;break}}else for(;b<_;)if(k[R++]=I[b++],R==this.blockSize){i(this,k),R=0;break}}this.h=R,this.o+=_},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var S=I.length-8;S<I.length;++S)I[S]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,S=0;S<4;++S)for(let k=0;k<32;k+=8)I[_++]=this.g[S]>>>k&255;return I};function s(I,_){var S=l;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=_(I)}function o(I,_){this.h=_;const S=[];let k=!0;for(let R=I.length-1;R>=0;R--){const b=I[R]|0;k&&b==_||(S[R]=b,k=!1)}this.g=S}var l={};function c(I){return-128<=I&&I<128?s(I,function(_){return new o([_|0],_<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(I<0)return C(u(-I));const _=[];let S=1;for(let k=0;I>=S;k++)_[k]=I/S|0,S*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return C(d(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=u(Math.pow(_,8));let k=f;for(let b=0;b<I.length;b+=8){var R=Math.min(8,I.length-b);const A=parseInt(I.substring(b,b+R),_);R<8?(R=u(Math.pow(_,R)),k=k.j(R).add(u(A))):(k=k.j(S),k=k.add(u(A)))}return k}var f=c(0),g=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-C(this).m();let I=0,_=1;for(let S=0;S<this.g.length;S++){const k=this.i(S);I+=(k>=0?k:4294967296+k)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(x(this))return"-"+C(this).toString(I);const _=u(Math.pow(I,6));var S=this;let k="";for(;;){const R=O(S,_).g;S=T(S,R.j(_));let b=((S.g.length>0?S.g[0]:S.h)>>>0).toString(I);if(S=R,P(S))return b+k;for(;b.length<6;)b="0"+b;k=b+k}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=T(this,I),x(I)?-1:P(I)?0:1};function C(I){const _=I.g.length,S=[];for(let k=0;k<_;k++)S[k]=~I.g[k];return new o(S,~I.h).add(g)}t.abs=function(){return x(this)?C(this):this},t.add=function(I){const _=Math.max(this.g.length,I.g.length),S=[];let k=0;for(let R=0;R<=_;R++){let b=k+(this.i(R)&65535)+(I.i(R)&65535),A=(b>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);k=A>>>16,b&=65535,A&=65535,S[R]=A<<16|b}return new o(S,S[S.length-1]&-2147483648?-1:0)};function T(I,_){return I.add(C(_))}t.j=function(I){if(P(this)||P(I))return f;if(x(this))return x(I)?C(this).j(C(I)):C(C(this).j(I));if(x(I))return C(this.j(C(I)));if(this.l(w)<0&&I.l(w)<0)return u(this.m()*I.m());const _=this.g.length+I.g.length,S=[];for(var k=0;k<2*_;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(let R=0;R<I.g.length;R++){const b=this.i(k)>>>16,A=this.i(k)&65535,me=I.i(R)>>>16,q=I.i(R)&65535;S[2*k+2*R]+=A*q,v(S,2*k+2*R),S[2*k+2*R+1]+=b*q,v(S,2*k+2*R+1),S[2*k+2*R+1]+=A*me,v(S,2*k+2*R+1),S[2*k+2*R+2]+=b*me,v(S,2*k+2*R+2)}for(I=0;I<_;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=_;I<2*_;I++)S[I]=0;return new o(S,0)};function v(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function E(I,_){this.g=I,this.h=_}function O(I,_){if(P(_))throw Error("division by zero");if(P(I))return new E(f,f);if(x(I))return _=O(C(I),_),new E(C(_.g),C(_.h));if(x(_))return _=O(I,C(_)),new E(C(_.g),_.h);if(I.g.length>30){if(x(I)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var S=g,k=_;k.l(I)<=0;)S=j(S),k=j(k);var R=F(S,1),b=F(k,1);for(k=F(k,2),S=F(S,2);!P(k);){var A=b.add(k);A.l(I)<=0&&(R=R.add(S),b=A),k=F(k,1),S=F(S,1)}return _=T(I,R.j(_)),new E(R,_)}for(R=f;I.l(_)>=0;){for(S=Math.max(1,Math.floor(I.m()/_.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),b=u(S),A=b.j(_);x(A)||A.l(I)>0;)S-=k,b=u(S),A=b.j(_);P(b)&&(b=g),R=R.add(b),I=T(I,A)}return new E(R,I)}t.B=function(I){return O(this,I).h},t.and=function(I){const _=Math.max(this.g.length,I.g.length),S=[];for(let k=0;k<_;k++)S[k]=this.i(k)&I.i(k);return new o(S,this.h&I.h)},t.or=function(I){const _=Math.max(this.g.length,I.g.length),S=[];for(let k=0;k<_;k++)S[k]=this.i(k)|I.i(k);return new o(S,this.h|I.h)},t.xor=function(I){const _=Math.max(this.g.length,I.g.length),S=[];for(let k=0;k<_;k++)S[k]=this.i(k)^I.i(k);return new o(S,this.h^I.h)};function j(I){const _=I.g.length+1,S=[];for(let k=0;k<_;k++)S[k]=I.i(k)<<1|I.i(k-1)>>>31;return new o(S,I.h)}function F(I,_){const S=_>>5;_%=32;const k=I.g.length-S,R=[];for(let b=0;b<k;b++)R[b]=_>0?I.i(b+S)>>>_|I.i(b+S+1)<<32-_:I.i(b+S);return new o(R,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,$1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ci=o}).apply(typeof c0<"u"?c0:typeof self<"u"?self:typeof window<"u"?window:{});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z1,ga,H1,jc,wp,W1,q1,K1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in p))break e;p=p[N]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,N,L){for(var B=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)B[ae-2]=arguments[ae];return h.prototype[N].apply(y,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function P(a,h){for(let y=1;y<arguments.length;y++){const N=arguments[y];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=a.length||0;const L=N.length||0;a.length=p+L;for(let B=0;B<L;B++)a[p+B]=N[B]}else a.push(N)}}class x{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){o.setTimeout(()=>{throw a},0)}function T(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const y=E.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var E=new x(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,I=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(S)}};function S(){for(var a;a=T();){try{a.h.call(a.g)}catch(p){C(p)}var h=E;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function me(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(me,R),me.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var q="closure_listenable_"+(Math.random()*1e6|0),oe=0;function Ce(a,h,p,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++oe,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Z(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function re(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function we(a){const h={};for(const p in a)h[p]=a[p];return h}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function J(a,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)a[p]=y[p];for(let L=0;L<H.length;L++)p=H[L],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function le(a){this.src=a,this.g={},this.h=0}le.prototype.add=function(a,h,p,y,N){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const B=Se(a,h,y,N);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new Ce(h,this.src,L,!!y,N),h.fa=p,a.push(h)),h};function Ve(a,h){const p=h.type;if(p in a.g){var y=a.g[p],N=Array.prototype.indexOf.call(y,h,void 0),L;(L=N>=0)&&Array.prototype.splice.call(y,N,1),L&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Se(a,h,p,y){for(let N=0;N<a.length;++N){const L=a[N];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==y)return N}return-1}var at="closure_lm_"+(Math.random()*1e6|0),Me={};function Rt(a,h,p,y,N){if(y&&y.once)return Yt(a,h,p,y,N);if(Array.isArray(h)){for(let L=0;L<h.length;L++)Rt(a,h[L],p,y,N);return null}return p=bo(p),a&&a[q]?a.J(h,p,l(y)?!!y.capture:!!y,N):Qt(a,h,p,!1,y,N)}function Qt(a,h,p,y,N,L){if(!h)throw Error("Invalid event type");const B=l(N)?!!N.capture:!!N;let ae=Jt(a);if(ae||(a[at]=ae=new le(a)),p=ae.add(h,p,y,B,L),p.proxy)return p;if(y=Pt(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)b||(N=B),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(cn(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Pt(){function a(p){return h.call(a.src,a.listener,p)}const h=Sn;return a}function Yt(a,h,p,y,N){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Yt(a,h[L],p,y,N);return null}return p=bo(p),a&&a[q]?a.K(h,p,l(y)?!!y.capture:!!y,N):Qt(a,h,p,!0,y,N)}function We(a,h,p,y,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)We(a,h[L],p,y,N);else y=l(y)?!!y.capture:!!y,p=bo(p),a&&a[q]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=Se(h,p,y,N),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=Jt(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Se(h,p,y,N)),(p=a>-1?h[a]:null)&&lt(p))}function lt(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[q])Ve(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(cn(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Jt(h))?(Ve(p,a),p.h==0&&(p.src=null,h[at]=null)):$(a)}}}function cn(a){return a in Me?Me[a]:Me[a]="on"+a}function Sn(a,h){if(a.da)a=!0;else{h=new me(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&lt(a),a=p.call(y,h)}return a}function Jt(a){return a=a[at],a instanceof le?a:null}var Un="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(a){return typeof a=="function"?a:(a[Un]||(a[Un]=function(h){return a.handleEvent(h)}),a[Un])}function je(){k.call(this),this.i=new le(this),this.M=this,this.G=null}f(je,k),je.prototype[q]=!0,je.prototype.removeEventListener=function(a,h,p,y){We(this,a,h,p,y)};function Ct(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var N=h;h=new R(y,a),J(h,N)}N=!0;let L,B;if(p)for(B=p.length-1;B>=0;B--)L=h.g=p[B],N=Dl(L,y,!0,h)&&N;if(L=h.g=a,N=Dl(L,y,!0,h)&&N,N=Dl(L,y,!1,h)&&N,p)for(B=0;B<p.length;B++)L=h.g=p[B],N=Dl(L,y,!1,h)&&N}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)$(p[y]);delete a.g[h],a.h--}}this.G=null},je.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},je.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Dl(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let L=0;L<h.length;++L){const B=h[L];if(B&&!B.da&&B.capture==p){const ae=B.listener,tt=B.ha||B.src;B.fa&&Ve(a.i,B),N=ae.call(tt,y)!==!1&&N}}return N&&!y.defaultPrevented}function wk(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function ly(a){a.g=wk(()=>{a.g=null,a.i&&(a.i=!1,ly(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ek extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ly(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function No(a){k.call(this),this.h=a,this.g={}}f(No,k);var cy=[];function uy(a){Z(a.g,function(h,p){this.g.hasOwnProperty(p)&&lt(h)},a),a.g={}}No.prototype.N=function(){No.Z.N.call(this),uy(this)},No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qh=o.JSON.stringify,Tk=o.JSON.parse,Ik=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function hy(){}function dy(){}var Do={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Kh(){R.call(this,"d")}f(Kh,R);function Gh(){R.call(this,"c")}f(Gh,R);var Ri={},fy=null;function Ol(){return fy=fy||new je}Ri.Ia="serverreachability";function py(a){R.call(this,Ri.Ia,a)}f(py,R);function Oo(a){const h=Ol();Ct(h,new py(h))}Ri.STAT_EVENT="statevent";function my(a,h){R.call(this,Ri.STAT_EVENT,a),this.stat=h}f(my,R);function bt(a){const h=Ol();Ct(h,new my(h,a))}Ri.Ja="timingevent";function gy(a,h){R.call(this,Ri.Ja,a),this.size=h}f(gy,R);function Lo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Vo(){this.g=!0}Vo.prototype.ua=function(){this.g=!1};function Sk(a,h,p,y,N,L){a.info(function(){if(a.g)if(L){var B="",ae=L.split("&");for(let Ee=0;Ee<ae.length;Ee++){var tt=ae[Ee].split("=");if(tt.length>1){const ct=tt[0];tt=tt[1];const Bn=ct.split("_");B=Bn.length>=2&&Bn[1]=="type"?B+(ct+"="+tt+"&"):B+(ct+"=redacted&")}}}else B=null;else B=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+B})}function Ak(a,h,p,y,N,L,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+L+" "+B})}function gs(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xk(a,p)+(y?" "+y:"")})}function kk(a,h){a.info(function(){return"TIMEOUT: "+h})}Vo.prototype.info=function(){};function xk(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return qh(L)}catch{return h}}var Ll={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_y;function Qh(){}f(Qh,hy),Qh.prototype.g=function(){return new XMLHttpRequest},_y=new Qh;function Mo(a){return encodeURIComponent(String(a))}function Rk(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Cr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new No(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vy}function vy(){this.i=null,this.g="",this.h=!1}var wy={},Yh={};function Jh(a,h,p){a.M=1,a.A=Ml(Fn(h)),a.u=p,a.R=!0,Ey(a,null)}function Ey(a,h){a.F=Date.now(),Vl(a),a.B=Fn(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Oy(p.i,"t",y),a.C=0,p=a.j.L,a.h=new vy,a.g=Xy(a.j,p?h:null,!a.u),a.P>0&&(a.O=new Ek(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(cy[0]=N.toString()),N=cy);for(let L=0;L<N.length;L++){const B=Rt(p,N[L],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?we(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Oo(),Sk(a.i,a.v,a.B,a.l,a.S,a.u)}Cr.prototype.ba=function(a){a=a.target;const h=this.O;h&&Dr(a)==3?h.j():this.Y(a)},Cr.prototype.Y=function(a){try{if(a==this.g)e:{const ae=Dr(this.g),tt=this.g.ya(),Ee=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||By(this.g)))){this.K||ae!=4||tt==7||(tt==8||Ee<=0?Oo(3):Oo(2)),Xh(this);var h=this.g.ca();this.X=h;var p=Pk(this);if(this.o=h==200,Ak(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(y)){var L=y;break t}}L=null}if(a=L)gs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zh(this,a);else{this.o=!1,this.m=3,bt(12),Pi(this),jo(this);break e}}if(this.R){a=!0;let ct;for(;!this.K&&this.C<p.length;)if(ct=Ck(this,p),ct==Yh){ae==4&&(this.m=4,bt(14),a=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==wy){this.m=4,bt(15),gs(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else gs(this.i,this.l,ct,null),Zh(this,ct);if(Ty(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||p.length!=0||this.h.h||(this.m=1,bt(16),a=!1),this.o=this.o&&a,!a)gs(this.i,this.l,p,"[Invalid Chunked Response]"),Pi(this),jo(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ad(B),B.P=!0,bt(11))}}else gs(this.i,this.l,p,null),Zh(this,p);ae==4&&Pi(this),this.o&&!this.K&&(ae==4?Gy(this.j,this):(this.o=!1,Vl(this)))}else Hk(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),Pi(this),jo(this)}}}catch{}finally{}};function Pk(a){if(!Ty(a))return a.g.la();const h=By(a.g);if(h==="")return"";let p="";const y=h.length,N=Dr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Pi(a),jo(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<y;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(N&&L==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Ty(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ck(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Yh:(p=Number(h.substring(p,y)),isNaN(p)?wy:(y+=1,y+p>h.length?Yh:(h=h.slice(y,y+p),a.C=y+p,h)))}Cr.prototype.cancel=function(){this.K=!0,Pi(this)};function Vl(a){a.T=Date.now()+a.H,Iy(a,a.H)}function Iy(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Lo(u(a.aa,a),h)}function Xh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Cr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(kk(this.i,this.B),this.M!=2&&(Oo(),bt(17)),Pi(this),this.m=2,jo(this)):Iy(this,this.T-a)};function jo(a){a.j.I==0||a.K||Gy(a.j,a)}function Pi(a){Xh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,uy(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Zh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||ed(p.h,a))){if(!a.L&&ed(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)$l(p),Fl(p);else break e;od(p),bt(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Lo(u(p.Va,p),6e3));ky(p.h)<=1&&p.ta&&(p.ta=void 0)}else bi(p,11)}else if((a.L||p.g==a)&&$l(p),!A(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let Ee=N[h];const ct=Ee[0];if(!(ct<=p.K))if(p.K=ct,Ee=Ee[1],p.I==2)if(Ee[0]=="c"){p.M=Ee[1],p.ba=Ee[2];const Bn=Ee[3];Bn!=null&&(p.ka=Bn,p.j.info("VER="+p.ka));const Ni=Ee[4];Ni!=null&&(p.za=Ni,p.j.info("SVER="+p.za));const Or=Ee[5];Or!=null&&typeof Or=="number"&&Or>0&&(y=1.5*Or,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Lr=a.g;if(Lr){const Hl=Lr.g?Lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hl){var L=y.h;L.g||Hl.indexOf("spdy")==-1&&Hl.indexOf("quic")==-1&&Hl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(td(L,L.h),L.h=null))}if(y.G){const ld=Lr.g?Lr.g.getResponseHeader("X-HTTP-Session-Id"):null;ld&&(y.wa=ld,Ae(y.J,y.G,ld))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var B=a;if(y.na=Jy(y,y.L?y.ba:null,y.W),B.L){xy(y.h,B);var ae=B,tt=y.O;tt&&(ae.H=tt),ae.D&&(Xh(ae),Vl(ae)),y.g=B}else qy(y);p.i.length>0&&Bl(p)}else Ee[0]!="stop"&&Ee[0]!="close"||bi(p,7);else p.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?bi(p,7):sd(p):Ee[0]!="noop"&&p.l&&p.l.qa(Ee),p.A=0)}}Oo(4)}catch{}}var bk=class{constructor(a,h){this.g=a,this.map=h}};function Sy(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ay(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ky(a){return a.h?1:a.g?a.g.size:0}function ed(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function td(a,h){a.g?a.g.add(h):a.h=h}function xy(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Sy.prototype.cancel=function(){if(this.i=Ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ry(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return w(a.i)}var Py=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nk(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let N,L=null;y>=0?(N=a[p].substring(0,y),L=a[p].substring(y+1)):N=a[p],h(N,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function br(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof br?(this.l=a.l,Uo(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.u),this.h=a.h,nd(this,Ly(a.i)),this.m=a.m):a&&(h=String(a).match(Py))?(this.l=!1,Uo(this,h[1]||"",!0),this.o=Bo(h[2]||""),this.g=Bo(h[3]||"",!0),Fo(this,h[4]),this.h=Bo(h[5]||"",!0),nd(this,h[6]||"",!0),this.m=Bo(h[7]||"")):(this.l=!1,this.i=new zo(null,this.l))}br.prototype.toString=function(){const a=[];var h=this.j;h&&a.push($o(h,Cy,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push($o(h,Cy,!0),"@"),a.push(Mo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push($o(p,p.charAt(0)=="/"?Lk:Ok,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",$o(p,Mk)),a.join("")},br.prototype.resolve=function(a){const h=Fn(this);let p=!!a.j;p?Uo(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)Fo(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=h.h.lastIndexOf("/");N!=-1&&(y=h.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const L=[];for(let B=0;B<N.length;){const ae=N[B++];ae=="."?y&&B==N.length&&L.push(""):ae==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&B==N.length&&L.push("")):(L.push(ae),y=!0)}y=L.join("/")}else y=N}return p?h.h=y:p=a.i.toString()!=="",p?nd(h,Ly(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Fn(a){return new br(a)}function Uo(a,h,p){a.j=p?Bo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function nd(a,h,p){h instanceof zo?(a.i=h,jk(a.i,a.l)):(p||(h=$o(h,Vk)),a.i=new zo(h,a.l))}function Ae(a,h,p){a.i.set(h,p)}function Ml(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Bo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $o(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Dk),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Dk(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cy=/[#\/\?@]/g,Ok=/[#\?:]/g,Lk=/[#\?]/g,Vk=/[#\?@]/g,Mk=/#/g;function zo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ci(a){a.g||(a.g=new Map,a.h=0,a.i&&Nk(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=zo.prototype,t.add=function(a,h){Ci(this),this.i=null,a=ys(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function by(a,h){Ci(a),h=ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ny(a,h){return Ci(a),h=ys(a,h),a.g.has(h)}t.forEach=function(a,h){Ci(this),this.g.forEach(function(p,y){p.forEach(function(N){a.call(h,N,y,this)},this)},this)};function Dy(a,h){Ci(a);let p=[];if(typeof h=="string")Ny(a,h)&&(p=p.concat(a.g.get(ys(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ci(this),this.i=null,a=ys(this,a),Ny(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Dy(this,a),a.length>0?String(a[0]):h):h};function Oy(a,h,p){by(a,h),p.length>0&&(a.i=null,a.g.set(ys(a,h),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const N=Mo(p);p=Dy(this,p);for(let L=0;L<p.length;L++){let B=N;p[L]!==""&&(B+="="+Mo(p[L])),a.push(B)}}return this.i=a.join("&")};function Ly(a){const h=new zo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function jk(a,h){h&&!a.j&&(Ci(a),a.i=null,a.g.forEach(function(p,y){const N=y.toLowerCase();y!=N&&(by(this,y),Oy(this,N,p))},a)),a.j=h}function Uk(a,h){const p=new Vo;if(o.Image){const y=new Image;y.onload=d(Nr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Nr,p,"TestLoadImage: error",!1,h,y),y.onabort=d(Nr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Nr,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Fk(a,h){const p=new Vo,y=new AbortController,N=setTimeout(()=>{y.abort(),Nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?Nr(p,"TestPingServer: ok",!0,h):Nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Nr(p,"TestPingServer: error",!1,h)})}function Nr(a,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function Bk(){this.g=new Ik}function rd(a){this.i=a.Sb||null,this.h=a.ab||!1}f(rd,hy),rd.prototype.g=function(){return new jl(this.i,this.h)};function jl(a,h){je.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(jl,je),t=jl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Vy(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Vy(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ho(this):Wo(this),this.readyState==3&&Vy(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ho(this))},t.Na=function(a){this.g&&(this.response=a,Ho(this))},t.ga=function(){this.g&&Ho(this)};function Ho(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Wo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function My(a){let h="";return Z(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function id(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=My(p),typeof a=="string"?p!=null&&Mo(p):Ae(a,h,p))}function Ue(a){je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ue,je);var $k=/^https?$/i,zk=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_y.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){jy(this,L);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(zk,h,void 0)>=0)||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of p)this.g.setRequestHeader(L,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){jy(this,L)}};function jy(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Uy(a),Ul(a)}function Uy(a){a.A||(a.A=!0,Ct(a,"complete"),Ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ct(this,"complete"),Ct(this,"abort"),Ul(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ul(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Fy(this):this.Xa())},t.Xa=function(){Fy(this)};function Fy(a){if(a.h&&typeof s<"u"){if(a.v&&Dr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ct(a,"readystatechange"),Dr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=L===0){let B=String(a.D).match(Py)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!$k.test(B?B.toLowerCase():"")}p=y}if(p)Ct(a,"complete"),Ct(a,"success");else{a.o=6;try{var N=Dr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Uy(a)}}finally{Ul(a)}}}}function Ul(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||Ct(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Tk(h)}};function By(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Hk(a){const h={};a=(a.g&&Dr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(A(a[y]))continue;var p=Rk(a[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[N]||[];h[N]=L,L.push(p)}re(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function $y(a){this.za=0,this.i=[],this.j=new Vo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qo("baseRetryDelayMs",5e3,a),this.Za=qo("retryDelaySeedMs",1e4,a),this.Ta=qo("forwardChannelMaxRetries",2,a),this.va=qo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Sy(a&&a.concurrentRequestLimit),this.Ba=new Bk,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=$y.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,y){bt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Jy(this,null,this.W),Bl(this)};function sd(a){if(zy(a),a.I==3){var h=a.V++,p=Fn(a.J);if(Ae(p,"SID",a.M),Ae(p,"RID",h),Ae(p,"TYPE","terminate"),Ko(a,p),h=new Cr(a,a.j,h),h.M=2,h.A=Ml(Fn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Xy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Vl(h)}Yy(a)}function Fl(a){a.g&&(ad(a),a.g.cancel(),a.g=null)}function zy(a){Fl(a),a.v&&(o.clearTimeout(a.v),a.v=null),$l(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Bl(a){if(!Ay(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),F||(j(),F=!0),I.add(h,a),a.D=0}}function Wk(a,h){return ky(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Lo(u(a.Ea,a,h),Qy(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Cr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=we(L),J(L,this.U)):L=this.U),this.u!==null||this.R||(N.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Wy(this,N,h),p=Fn(this.J),Ae(p,"RID",a),Ae(p,"CVER",22),this.G&&Ae(p,"X-HTTP-Session-Id",this.G),Ko(this,p),L&&(this.R?h="headers="+Mo(My(L))+"&"+h:this.u&&id(p,this.u,L)),td(this.h,N),this.Ra&&Ae(p,"TYPE","init"),this.S?(Ae(p,"$req",h),Ae(p,"SID","null"),N.U=!0,Jh(N,p,null)):Jh(N,p,h),this.I=2}}else this.I==3&&(a?Hy(this,a):this.i.length==0||Ay(this.h)||Hy(this))};function Hy(a,h){var p;h?p=h.l:p=a.V++;const y=Fn(a.J);Ae(y,"SID",a.M),Ae(y,"RID",p),Ae(y,"AID",a.K),Ko(a,y),a.u&&a.o&&id(y,a.u,a.o),p=new Cr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Wy(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),td(a.h,p),Jh(p,y,h)}function Ko(a,h){a.H&&Z(a.H,function(p,y){Ae(h,y,p)}),a.l&&Z({},function(p,y){Ae(h,y,p)})}function Wy(a,h,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var N=a.i;let ae=-1;for(;;){const tt=["count="+p];ae==-1?p>0?(ae=N[0].g,tt.push("ofs="+ae)):ae=0:tt.push("ofs="+ae);let Ee=!0;for(let ct=0;ct<p;ct++){var L=N[ct].g;const Bn=N[ct].map;if(L-=ae,L<0)ae=Math.max(0,N[ct].g-100),Ee=!1;else try{L="req"+L+"_"||"";try{var B=Bn instanceof Map?Bn:Object.entries(Bn);for(const[Ni,Or]of B){let Lr=Or;l(Or)&&(Lr=qh(Or)),tt.push(L+Ni+"="+encodeURIComponent(Lr))}}catch(Ni){throw tt.push(L+"type="+encodeURIComponent("_badmap")),Ni}}catch{y&&y(Bn)}}if(Ee){B=tt.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function qy(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),F||(j(),F=!0),I.add(h,a),a.A=0}}function od(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Lo(u(a.Da,a),Qy(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ky(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Lo(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Fl(this),Ky(this))};function ad(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ky(a){a.g=new Cr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Fn(a.na);Ae(h,"RID","rpc"),Ae(h,"SID",a.M),Ae(h,"AID",a.K),Ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(h,"TO",a.ia),Ae(h,"TYPE","xmlhttp"),Ko(a,h),a.u&&a.o&&id(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ml(Fn(h)),p.u=null,p.R=!0,Ey(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Fl(this),od(this),bt(19))};function $l(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Gy(a,h){var p=null;if(a.g==h){$l(a),ad(a),a.g=null;var y=2}else if(ed(a.h,h))p=h.G,xy(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;y=Ol(),Ct(y,new gy(y,p)),Bl(a)}else qy(a);else if(N=h.m,N==3||N==0&&h.X>0||!(y==1&&Wk(a,h)||y==2&&od(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),N){case 1:bi(a,5);break;case 4:bi(a,10);break;case 3:bi(a,6);break;default:bi(a,2)}}}function Qy(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function bi(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),y=a.Ua;const N=!y;y=new br(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Uo(y,"https"),Ml(y),N?Uk(y.toString(),p):Fk(y.toString(),p)}else bt(2);a.I=0,a.l&&a.l.pa(h),Yy(a),zy(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Yy(a){if(a.I=0,a.ja=[],a.l){const h=Ry(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Jy(a,h,p){var y=p instanceof br?Fn(p):new br(p);if(y.g!="")h&&(y.g=h+"."+y.g),Fo(y,y.u);else{var N=o.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const L=new br(null);y&&Uo(L,y),h&&(L.g=h),N&&Fo(L,N),p&&(L.h=p),y=L}return p=a.G,h=a.wa,p&&h&&Ae(y,p,h),Ae(y,"VER",a.ka),Ko(a,y),y}function Xy(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ue(new rd({ab:p})):new Ue(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zy(){}t=Zy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function zl(){}zl.prototype.g=function(a,h){return new Xt(a,h)};function Xt(a,h){je.call(this),this.g=new $y(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}f(Xt,je),Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){sd(this.g)},Xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=qh(a),a=p);h.i.push(new bk(h.Ya++,a)),h.I==3&&Bl(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,sd(this.g),delete this.g,Xt.Z.N.call(this)};function e_(a){Kh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(e_,Kh);function t_(){Gh.call(this),this.status=1}f(t_,Gh);function _s(a){this.g=a}f(_s,Zy),_s.prototype.ra=function(){Ct(this.g,"a")},_s.prototype.qa=function(a){Ct(this.g,new e_(a))},_s.prototype.pa=function(a){Ct(this.g,new t_)},_s.prototype.oa=function(){Ct(this.g,"b")},zl.prototype.createWebChannel=zl.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,K1=function(){return new zl},q1=function(){return Ol()},W1=Ri,wp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ll.NO_ERROR=0,Ll.TIMEOUT=8,Ll.HTTP_ERROR=6,jc=Ll,yy.COMPLETE="complete",H1=yy,dy.EventType=Do,Do.OPEN="a",Do.CLOSE="b",Do.ERROR="c",Do.MESSAGE="d",je.prototype.listen=je.prototype.J,ga=dy,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,z1=Ue}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Io="12.11.0";function QO(t){Io=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zi=new Jm("@firebase/firestore");function Es(){return Zi.logLevel}function K(t,...e){if(Zi.logLevel<=ue.DEBUG){const n=e.map(lg);Zi.debug(`Firestore (${Io}): ${t}`,...n)}}function Sr(t,...e){if(Zi.logLevel<=ue.ERROR){const n=e.map(lg);Zi.error(`Firestore (${Io}): ${t}`,...n)}}function es(t,...e){if(Zi.logLevel<=ue.WARN){const n=e.map(lg);Zi.warn(`Firestore (${Io}): ${t}`,...n)}}function lg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,G1(t,r,n)}function G1(t,e,n){let r=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sr(r),new Error(r)}function _e(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||G1(e,i,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class JO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XO{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new Q1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new It(e)}}class ZO{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class eL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ZO(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tL{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new u0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new u0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Ep(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return qd(i)===qd(s)?he(i,s):qd(i)?1:-1}return he(t.length,e.length)}const rL=55296,iL=57343;function qd(t){const e=t.charCodeAt(0);return e>=rL&&e<=iL}function ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="__name__";class Wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&te(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return he(e.length,n.length)}static compareSegments(e,n){const r=Wn.isNumericId(e),i=Wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):Ep(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ci.fromString(e.substring(4,e.length-2))}}class Te extends Wn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const sL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Wn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return sL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===h0}static keyField(){return new gt([h0])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Y1(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oL(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function d0(t){if(!X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function f0(t){if(X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function J1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Eh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te(12329,{type:typeof t})}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eh(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function aL(t,e){if(e<=0)throw new W(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function et(t,e){const n={typeString:t};return e&&(n.value=e),n}function Rl(t,e){if(!J1(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=-62135596800,m0=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*m0);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<p0)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/m0}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rl(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-p0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:et("string",xe._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new xe(0,0))}static max(){return new ne(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ll=-1;function lL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new mi(i,X.empty(),e)}function cL(t){return new mi(t.readTime,t.key,ll)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(ne.min(),X.empty(),ll)}static max(){return new mi(ne.max(),X.empty(),ll)}}function uL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==hL)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function fL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Th{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Th.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=-1;function Ih(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function pL(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="";function mL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=g0(e)),e=gL(t.get(n),e);return g0(e)}function gL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case X1:n+="";break;default:n+=s}}return n}function g0(t){return t+X1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Z1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hc(this.root,e,this.comparator,!0)}}class hc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _0(this.data.getIterator())}getIteratorFrom(e){return new _0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class _0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new eS("Invalid base64 string: "+s):s}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const yL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=yL.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="server_timestamp",nS="__type__",rS="__previous_value__",iS="__local_write_time__";function hg(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[nS])==null?void 0:r.stringValue)===tS}function Sh(t){const e=t.mapValue.fields[rS];return hg(e)?Sh(e):e}function cl(t){const e=gi(t.mapValue.fields[iS].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,n,r,i,s,o,l,c,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=f}}const Cu="(default)";class ul{constructor(e,n){this.projectId=e,this.database=n||Cu}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database===Cu}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}function vL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="__type__",oS="__max__",dc={mapValue:{fields:{__type__:{stringValue:oS}}}},aS="__vector__",bu="value";function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hg(t)?4:EL(t)?9007199254740991:wL(t)?10:11:te(28295,{value:t})}function nr(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cl(t).isEqual(cl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),l=gi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yi(i.bytesValue).isEqual(yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),l=qe(s.doubleValue);return o===l?Pu(o)===Pu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(y0(o)!==y0(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!nr(o[c],l[c])))return!1;return!0}(t,e);default:return te(52216,{left:t})}}function hl(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=qe(s.integerValue||s.doubleValue),c=qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return v0(t.timestampValue,e.timestampValue);case 4:return v0(cl(t),cl(e));case 5:return Ep(t.stringValue,e.stringValue);case 6:return function(s,o){const l=yi(s),c=yi(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=he(l[u],c[u]);if(d!==0)return d}return he(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(qe(s.latitude),qe(o.latitude));return l!==0?l:he(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return w0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,w,P,x;const l=s.fields||{},c=o.fields||{},u=(g=l[bu])==null?void 0:g.arrayValue,d=(w=c[bu])==null?void 0:w.arrayValue,f=he(((P=u==null?void 0:u.values)==null?void 0:P.length)||0,((x=d==null?void 0:d.values)==null?void 0:x.length)||0);return f!==0?f:w0(u,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===dc.mapValue&&o===dc.mapValue)return 0;if(s===dc.mapValue)return 1;if(o===dc.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const g=Ep(c[f],d[f]);if(g!==0)return g;const w=lo(l[c[f]],u[d[f]]);if(w!==0)return w}return he(c.length,d.length)}(t.mapValue,e.mapValue);default:throw te(23264,{he:n})}}function v0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=gi(t),r=gi(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function w0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=lo(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function co(t){return Tp(t)}function Tp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Tp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Tp(n.fields[o])}`;return i+"}"}(t.mapValue):te(61005,{value:t})}function Uc(t){switch(_i(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sh(t);return e?16+Uc(e):16;case 5:return 2*t.stringValue.length;case 6:return yi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Uc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ki(r.fields,(s,o)=>{i+=s.length+Uc(o)}),i}(t.mapValue);default:throw te(13486,{value:t})}}function E0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ip(t){return!!t&&"integerValue"in t}function dg(t){return!!t&&"arrayValue"in t}function T0(t){return!!t&&"nullValue"in t}function I0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fc(t){return!!t&&"mapValue"in t}function wL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[sS])==null?void 0:r.stringValue)===aS}function Da(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Da(t.arrayValue.values[n]);return e}return{...t}}function EL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===oS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(n)}setAll(e){let n=gt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Da(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Bt(Da(this.value))}}function lS(t){const e=[];return ki(t.fields,(n,r)=>{const i=new gt([n]);if(Fc(r)){const s=lS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,ne.min(),ne.min(),ne.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,i){return new At(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new At(e,2,n,ne.min(),ne.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,ne.min(),ne.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nu{constructor(e,n){this.position=e,this.inclusive=n}}function S0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function A0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function TL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cS{}class Ze extends cS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SL(e,n,r):n==="array-contains"?new xL(e,r):n==="in"?new RL(e,r):n==="not-in"?new PL(e,r):n==="array-contains-any"?new CL(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AL(e,r):new kL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(lo(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends cS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Mn(e,n)}matches(e){return uS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uS(t){return t.op==="and"}function hS(t){return IL(t)&&uS(t)}function IL(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Sp(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+co(t.value);if(hS(t))return t.filters.map(e=>Sp(e)).join(",");{const e=t.filters.map(n=>Sp(n)).join(",");return`${t.op}(${e})`}}function dS(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof Mn?function(r,i){return i instanceof Mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&dS(o,i.filters[l]),!0):!1}(t,e):void te(19439)}function fS(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(fS).join(" ,")+"}"}(t):"Filter"}class SL extends Ze{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class AL extends Ze{constructor(e,n){super(e,"in",n),this.keys=pS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kL extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=pS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class xL extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dg(n)&&hl(n.arrayValue,this.value)}}class RL extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hl(this.value.arrayValue,n)}}class PL extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!hl(this.value.arrayValue,n)}}class CL extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function k0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bL(t,e,n,r,i,s,o)}function fg(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ih(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>co(r)).join(",")),e.Te=n}return e.Te}function pg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!A0(t.startAt,e.startAt)&&A0(t.endAt,e.endAt)}function Ap(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function NL(t,e,n,r,i,s,o,l){return new ko(t,e,n,r,i,s,o,l)}function Ah(t){return new ko(t)}function x0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DL(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function mS(t){return t.collectionGroup!==null}function Oa(t){const e=ie(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new dl(s,r))}),n.has(gt.keyField().canonicalString())||e.Ee.push(new dl(gt.keyField(),r))}return e.Ee}function Xn(t){const e=ie(t);return e.Ie||(e.Ie=OL(e,Oa(t))),e.Ie}function OL(t,e){if(t.limitType==="F")return k0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new dl(i.field,s)});const n=t.endAt?new Nu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nu(t.startAt.position,t.startAt.inclusive):null;return k0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kp(t,e){const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function LL(t,e){const n=t.explicitOrderBy.concat([e]);return new ko(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Du(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kh(t,e){return pg(Xn(t),Xn(e))&&t.limitType===e.limitType}function gS(t){return`${fg(Xn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>fS(i)).join(", ")}]`),Ih(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>co(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>co(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function xh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Oa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=S0(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Oa(r),i)||r.endAt&&!function(o,l,c){const u=S0(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Oa(r),i))}(t,e)}function VL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yS(t){return(e,n)=>{let r=!1;for(const i of Oa(t)){const s=ML(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ML(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?lo(c,u):te(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Z1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=new Le(X.comparator);function Ar(){return jL}const _S=new Le(X.comparator);function ya(...t){let e=_S;for(const n of t)e=e.insert(n.key,n);return e}function vS(t){let e=_S;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fi(){return La()}function wS(){return La()}function La(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const UL=new Le(X.comparator),FL=new it(X.comparator);function de(...t){let e=FL;for(const n of t)e=e.add(n);return e}const BL=new it(he);function $L(){return BL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function ES(t){return{integerValue:""+t}}function TS(t,e){return pL(e)?ES(e):mg(t,e)}/**
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
 */class Rh{constructor(){this._=void 0}}function zL(t,e,n){return t instanceof fl?function(i,s){const o={fields:{[nS]:{stringValue:tS},[iS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hg(s)&&(s=Sh(s)),s&&(o.fields[rS]=s),{mapValue:o}}(n,e):t instanceof uo?SS(t,e):t instanceof pl?AS(t,e):function(i,s){const o=IS(i,s),l=R0(o)+R0(i.Ae);return Ip(o)&&Ip(i.Ae)?ES(l):mg(i.serializer,l)}(t,e)}function HL(t,e,n){return t instanceof uo?SS(t,e):t instanceof pl?AS(t,e):n}function IS(t,e){return t instanceof ml?function(r){return Ip(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fl extends Rh{}class uo extends Rh{constructor(e){super(),this.elements=e}}function SS(t,e){const n=kS(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class pl extends Rh{constructor(e){super(),this.elements=e}}function AS(t,e){let n=kS(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class ml extends Rh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function R0(t){return qe(t.integerValue||t.doubleValue)}function kS(t){return dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.field=e,this.transform=n}}function WL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof uo&&i instanceof uo||r instanceof pl&&i instanceof pl?ao(r.elements,i.elements,nr):r instanceof ml&&i instanceof ml?nr(r.Ae,i.Ae):r instanceof fl&&i instanceof fl}(t.transform,e.transform)}class qL{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function xS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yg(t.key,_n.none()):new Pl(t.key,t.data,_n.none());{const n=t.data,r=Bt.empty();let i=new it(gt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new nn(i.toArray()),_n.none())}}function KL(t,e,n){t instanceof Pl?function(i,s,o){const l=i.value.clone(),c=C0(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=C0(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(RS(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Va(t,e,n,r){return t instanceof Pl?function(s,o,l,c){if(!Bc(s.precondition,o))return l;const u=s.value.clone(),d=b0(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,l,c){if(!Bc(s.precondition,o))return l;const u=b0(s.fieldTransforms,c,o),d=o.data;return d.setAll(RS(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function GL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=IS(r.transform,i||null);s!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,s))}return n||null}function P0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ao(r,i,(s,o)=>WL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pl extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends Ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function C0(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,HL(o,l,n[i]))}return r}function b0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,zL(s,o,e))}return r}class yg extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QL extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&KL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=xS(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>P0(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>P0(n,r))}}class _g{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return UL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _g(e,n,r,i)}}/**
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
 */class JL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,fe;function ZL(t){switch(t){case V.OK:return te(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return te(15467,{code:t})}}function PS(t){if(t===void 0)return Sr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Qe.OK:return V.OK;case Qe.CANCELLED:return V.CANCELLED;case Qe.UNKNOWN:return V.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return V.INTERNAL;case Qe.UNAVAILABLE:return V.UNAVAILABLE;case Qe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Qe.NOT_FOUND:return V.NOT_FOUND;case Qe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Qe.ABORTED:return V.ABORTED;case Qe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Qe.DATA_LOSS:return V.DATA_LOSS;default:return te(39323,{code:t})}}(fe=Qe||(Qe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eV(){return new TextEncoder}/**
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
 */const tV=new ci([4294967295,4294967295],0);function N0(t){const e=eV().encode(t),n=new $1;return n.update(e),new Uint8Array(n.digest())}function D0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ci([n,r],0),new ci([i,s],0)]}class vg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ci.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(ci.fromNumber(r)));return i.compare(tV)===1&&(i=new ci([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=N0(e),[r,i]=D0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=N0(e),[r,i]=D0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(ne.min(),i,new Le(he),Ar(),de())}}class Cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cl(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class CS{constructor(e,n){this.targetId=e,this.Ce=n}}class bS{constructor(e,n,r=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class O0{constructor(){this.ve=0,this.Fe=L0(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te(38017,{changeType:s})}}),new Cl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=L0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class nV{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ar(),this.Je=fc(),this.He=fc(),this.Ze=new Le(he)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ap(s))if(r===0){const o=new X(s.path);this.et(n,o,At.newNoDocument(o,ne.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=yi(r).toUint8Array()}catch(c){if(c instanceof eS)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new vg(o,i,s)}catch(c){return es(c instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ap(l.target)){const c=new X(l.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,At.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=de();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ch(e,n,this.Ze,this.je,r);return this.je=Ar(),this.Je=fc(),this.He=fc(),this.Ze=new Le(he),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new O0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new it(he),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new it(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new O0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function fc(){return new Le(X.comparator)}function L0(){return new Le(X.comparator)}const rV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),sV=(()=>({and:"AND",or:"OR"}))();class oV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xp(t,e){return t.useProto3Json||Ih(e)?e:{value:e}}function Ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aV(t,e){return Ou(t,e.toTimestamp())}function Zn(t){return _e(!!t,49232),ne.fromTimestamp(function(n){const r=gi(n);return new xe(r.seconds,r.nanos)}(t))}function wg(t,e){return Rp(t,e).canonicalString()}function Rp(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function DS(t){const e=Te.fromString(t);return _e(jS(e),10190,{key:e.toString()}),e}function Pp(t,e){return wg(t.databaseId,e.path)}function Kd(t,e){const n=DS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(LS(n))}function OS(t,e){return wg(t.databaseId,e)}function lV(t){const e=DS(t);return e.length===4?Te.emptyPath():LS(e)}function Cp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LS(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function V0(t,e,n){return{name:Pp(t,e),fields:n.value.mapValue.fields}}function cV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:te(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(_e(d===void 0||typeof d=="string",58123),vt.fromBase64String(d||"")):(_e(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),vt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?V.UNKNOWN:PS(u.code);return new W(d,u.message||"")}(o);n=new bS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kd(t,r.document.name),s=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):ne.min(),l=new Bt({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(i,s,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new $c(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kd(t,r.document),s=r.readTime?Zn(r.readTime):ne.min(),o=At.newNoDocument(i,s),l=r.removedTargetIds||[];n=new $c([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kd(t,r.document),s=r.removedTargetIds||[];n=new $c([],s,i,null)}else{if(!("filter"in e))return te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new XL(i,s),l=r.targetId;n=new CS(l,o)}}return n}function uV(t,e){let n;if(e instanceof Pl)n={update:V0(t,e.key,e.value)};else if(e instanceof yg)n={delete:Pp(t,e.key)};else if(e instanceof xi)n={update:V0(t,e.key,e.data),updateMask:vV(e.fieldMask)};else{if(!(e instanceof QL))return te(16599,{dt:e.type});n={verify:Pp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw te(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te(27497)}(t,e.precondition)),n}function hV(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Zn(i.updateTime):Zn(s);return o.isEqual(ne.min())&&(o=Zn(s)),new qL(o,i.transformResults||[])}(n,e))):[]}function dV(t,e){return{documents:[OS(t,e.path)]}}function fV(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=OS(t,i);const s=function(u){if(u.length!==0)return MS(Mn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Is(g.field),direction:gV(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function pV(t){let e=lV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const g=VS(f);return g instanceof Mn&&hS(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(P){return new dl(Ss(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(f){let g;return g=typeof f=="object"?f.value:f,Ih(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(f){const g=!!f.before,w=f.values||[];return new Nu(w,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,w=f.values||[];return new Nu(w,g)}(n.endAt)),NL(e,i,o,s,l,"F",c,u)}function mV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function VS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ss(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ss(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>VS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(n.compositeFilter.op))}(t):te(30097,{filter:t})}function gV(t){return rV[t]}function yV(t){return iV[t]}function _V(t){return sV[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Ss(t){return gt.fromServerFormat(t.fieldPath)}function MS(t){return t instanceof Ze?function(n){if(n.op==="=="){if(I0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(T0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(I0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(T0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:yV(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(i=>MS(i));return r.length===1?r[0]:{compositeFilter:{op:_V(n.op),filters:r}}}(t):te(54877,{filter:t})}function vV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function US(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r,i,s=ne.min(),o=ne.min(),l=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e){this.yt=e}}function EV(t){const e=pV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(){this.bn=new IV}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(mi.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class IV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(Te.comparator)).toArray()}}/**
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
 */const M0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},FS=41943040;class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(FS,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const j0="LruGarbageCollector",SV=1048576;function U0([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class AV{constructor(e){this.Pr=e,this.buffer=new it(U0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();U0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(j0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?K(j0,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Ar(3e5)})}}class xV{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Th.ce);const r=new AV(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(M0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),M0):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Es()<=ue.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function RV(t,e){return new xV(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Va(r.mutation,i,nn.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ya();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ar();const o=La(),l=function(){return La()}();return n.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof xi)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Va(d.mutation,u,d.mutation.getFieldMask(),xe.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>l.set(u,new CV(d,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=La();let i=new Le((o,l)=>o-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||nn.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(i.get(l.batchId)||de()).add(c);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=wS();d.forEach(g=>{if(!s.has(g)){const w=xS(n.get(g),r.get(g));w!==null&&f.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return DL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Fi());let l=ll,c=s;return o.next(u=>M.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,de())).next(d=>({batchId:l,changes:vS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,c=>{const u=function(f,g){return new ko(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let l=ya();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&Va(d.mutation,u,nn.empty(),xe.now()),xh(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:EV(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class DV{constructor(){this.overlays=new Le(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Fi(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Fi(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Fi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JL(n,r));let s=this.Lr.get(n);s===void 0&&(s=de(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class OV{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.kr=new it(ut.qr),this.Kr=new it(ut.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ut(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new Te([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new X(new Te([])),r=new ut(n,e),i=new ut(n,e+1);let s=de();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return X.comparator(e.key,n.key)||he(e.Jr,n.Jr)}static Ur(e,n){return he(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new it(ut.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YL(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new ut(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ug:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(he);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new ut(new X(s),0);let l=new it(he);return this.Hr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new ut(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e){this.ti=e,this.docs=function(){return new Le(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():At.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ar();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uL(cL(d),r)<=0||(i.has(d.key)||xh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MV(this)}getSize(e){return M.resolve(this.size)}}class MV extends PV{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e){this.persistence=e,this.ri=new ps(n=>fg(n),pg),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ii=0,this.si=new Eg,this.targetCount=0,this.oi=ho._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ho(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this._i={},this.overlays={},this.ai=new Th(0),this.ui=!1,this.ui=!0,this.ci=new OV,this.referenceDelegate=e(this),this.li=new jV(this),this.indexManager=new TV,this.remoteDocumentCache=function(i){return new VV(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new wV(n),this.Pi=new NV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new LV(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new UV(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class UV extends dL{constructor(e){super(),this.currentSequenceNumber=e}}class Tg{constructor(e){this.persistence=e,this.Ri=new Eg,this.Ai=null}static Vi(e){return new Tg(e)}get di(){if(this.Ai)return this.Ai;throw te(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=X.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Lu{constructor(e,n){this.persistence=e,this.fi=new ps(r=>mL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=RV(this,n)}static Vi(e,n){return new Lu(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uc(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ig(e,n.fromCache,r,i)}}/**
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
 */class FV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Fb()?8:fL(xt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new FV;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Es()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Es()<=ue.DEBUG&&K("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Es()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):M.resolve())}gs(e,n){if(x0(n))return M.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Du(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ss(n,l);return this.bs(n,u,o,c.readTime)?this.gs(e,Du(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,i){return x0(n)||i.isEqual(ne.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Es()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.Ds(e,o,n,lL(i,ll)).next(l=>l))})}Ss(e,n){let r=new it(yS(e));return n.forEach((i,s)=>{xh(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Es()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.fs.getDocumentsMatchingQuery(e,n,mi.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="LocalStore",$V=3e8;class zV{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Le(he),this.Fs=new ps(s=>fg(s),pg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bV(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function HV(t,e,n,r){return new zV(t,e,n,r)}async function $S(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=de();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function WV(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,g=f.keys();let w=M.resolve();return g.forEach(P=>{w=w.next(()=>d.getEntry(c,P)).next(x=>{const C=u.docVersions.get(P);_e(C!==null,48541),x.version.compareTo(C)<0&&(f.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=de();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zS(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function qV(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const g=i.get(f);if(!g)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(vt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(x,C,T){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=$V?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,w,d)&&l.push(n.li.updateTargetData(s,w))});let c=Ar(),u=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(KV(s,o,e.documentUpdates).next(d=>{c=d.Bs,u=d.Ls})),!r.isEqual(ne.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.vs=i,s))}function KV(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ar();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):K(Sg,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:i}})}function GV(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ug),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QV(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function bp(t,e,n){const r=ie(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ao(o))throw o;K(Sg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function F0(t,e,n){const r=ie(t);let i=ne.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=ie(c),g=f.Fs.get(d);return g!==void 0?M.resolve(f.vs.get(g)):f.li.getTargetData(u,d)}(r,o,Xn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:de())).next(l=>(YV(r,VL(e),l),{documents:l,ks:s})))}function YV(t,e,n){let r=t.Ms.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class B0{constructor(){this.activeTargetIds=$L()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JV{constructor(){this.vo=new B0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new B0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="ConnectivityMonitor";class z0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K($0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K($0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pc=null;function Np(){return pc===null?pc=function(){return 268435456+Math.round(2147483648*Math.random())}():pc++,"0x"+pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="RestConnection",ZV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class eM{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Cu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Np(),l=this.Qo(e,n.toUriEncodedString());K(Gd,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,i,s);const{host:u}=new URL(l),d=us(u);return this.zo(e,l,c,r,d).then(f=>(K(Gd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw es(Gd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=ZV[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection",ra=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Gs extends eM{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gs.c_){const e=q1();ra(e,W1.STAT_EVENT,n=>{n.stat===wp.PROXY?K(Tt,"STAT_EVENT: detected buffering proxy"):n.stat===wp.NOPROXY&&K(Tt,"STAT_EVENT: detected no buffering proxy")}),Gs.c_=!0}}zo(e,n,r,i,s){const o=Np();return new Promise((l,c)=>{const u=new z1;u.setWithCredentials(!0),u.listenOnce(H1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jc.NO_ERROR:const f=u.getResponseJson();K(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case jc.TIMEOUT:K(Tt,`RPC '${e}' ${o} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const g=u.getStatus();if(K(Tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const x=function(T){const v=T.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(P.status);c(new W(x,P.message))}else c(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{K(Tt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);K(Tt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Np(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");K(Tt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const d=o.createWebChannel(u,l);this.E_(d);let f=!1,g=!1;const w=new tM({Jo:P=>{g?K(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(f||(K(Tt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),K(Tt,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},Ho:()=>d.close()});return ra(d,ga.EventType.OPEN,()=>{g||(K(Tt,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),ra(d,ga.EventType.CLOSE,()=>{g||(g=!0,K(Tt,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.I_(d))}),ra(d,ga.EventType.ERROR,P=>{g||(g=!0,es(Tt,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),w.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),ra(d,ga.EventType.MESSAGE,P=>{var x;if(!g){const C=P.data[0];_e(!!C,16349);const T=C,v=(T==null?void 0:T.error)||((x=T[0])==null?void 0:x.error);if(v){K(Tt,`RPC '${e}' stream ${i} received error:`,v);const E=v.status;let O=function(I){const _=Qe[I];if(_!==void 0)return PS(_)}(E),j=v.message;E==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,j="Unknown error status: "+E+" with message "+v.message),g=!0,w.o_(new W(O,j)),d.close()}else K(Tt,`RPC '${e}' stream ${i} received:`,C),w.__(C)}}),Gs.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return K1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(t){return new Gs(t)}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){return new oV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs.c_=!1;class HS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="PersistentStream";class WS{constructor(e,n,r,i,s,o,l,c){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new HS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(H0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(H0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rM extends WS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cV(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Zn(o.readTime):ne.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Cp(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Ap(c)?{documents:dV(s,c)}:{query:fV(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=NS(s,o.resumeToken);const u=xp(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=Ou(s,o.snapshotVersion.toTimestamp());const u=xp(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=mV(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Cp(this.serializer),n.removeTarget=e,this.q_(n)}}class iM extends WS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hV(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Cp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uV(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{}class oM extends sM{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Rp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function aM(t,e,n,r){return new oM(t,e,n,r)}class lM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sr(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="RemoteStore";class cM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ms(this)&&(K(ts,"Restarting streams for network reachability change."),await async function(c){const u=ie(c);u.Ia.add(4),await bl(u),u.Va.set("Unknown"),u.Ia.delete(4),await Nh(u)}(this))})}),this.Va=new lM(r,i)}}async function Nh(t){if(ms(t))for(const e of t.Ra)await e(!0)}async function bl(t){for(const e of t.Ra)await e(!1)}function qS(t,e){const n=ie(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Rg(n)?xg(n):xo(n).O_()&&kg(n,e))}function Ag(t,e){const n=ie(t),r=xo(n);n.Ea.delete(e),r.O_()&&KS(n,e),n.Ea.size===0&&(r.O_()?r.L_():ms(n)&&n.Va.set("Unknown"))}function kg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(t).Z_(e)}function KS(t,e){t.da.$e(e),xo(t).X_(e)}function xg(t){t.da=new nV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),xo(t).start(),t.Va.ua()}function Rg(t){return ms(t)&&!xo(t).x_()&&t.Ea.size>0}function ms(t){return ie(t).Ia.size===0}function GS(t){t.da=void 0}async function uM(t){t.Va.set("Online")}async function hM(t){t.Ea.forEach((e,n)=>{kg(t,e)})}async function dM(t,e){GS(t),Rg(t)?(t.Va.ha(e),xg(t)):t.Va.set("Unknown")}async function fM(t,e,n){if(t.Va.set("Online"),e instanceof bS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){K(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vu(t,r)}else if(e instanceof $c?t.da.Xe(e):e instanceof CS?t.da.st(e):t.da.tt(e),!n.isEqual(ne.min()))try{const r=await zS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.Ea.get(u);d&&s.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=s.Ea.get(c);if(!d)return;s.Ea.set(c,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),KS(s,c);const f=new Jr(d.target,c,u,d.sequenceNumber);kg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K(ts,"Failed to raise snapshot:",r),await Vu(t,r)}}async function Vu(t,e,n){if(!Ao(e))throw e;t.Ia.add(1),await bl(t),t.Va.set("Offline"),n||(n=()=>zS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(ts,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Nh(t)})}function QS(t,e){return e().catch(n=>Vu(t,n,e))}async function Dh(t){const e=ie(t),n=vi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ug;for(;pM(e);)try{const i=await GV(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,mM(e,i)}catch(i){await Vu(e,i)}YS(e)&&JS(e)}function pM(t){return ms(t)&&t.Ta.length<10}function mM(t,e){t.Ta.push(e);const n=vi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function YS(t){return ms(t)&&!vi(t).x_()&&t.Ta.length>0}function JS(t){vi(t).start()}async function gM(t){vi(t).ra()}async function yM(t){const e=vi(t);for(const n of t.Ta)e.ea(n.mutations)}async function _M(t,e,n){const r=t.Ta.shift(),i=_g.from(r,e,n);await QS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dh(t)}async function vM(t,e){e&&vi(t).Y_&&await async function(r,i){if(function(o){return ZL(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();vi(r).B_(),await QS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dh(r)}}(t,e),YS(t)&&JS(t)}async function W0(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),K(ts,"RemoteStore received new credentials");const r=ms(n);n.Ia.add(3),await bl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Nh(n)}async function wM(t,e){const n=ie(t);e?(n.Ia.delete(2),await Nh(n)):e||(n.Ia.add(2),await bl(n),n.Va.set("Unknown"))}function xo(t){return t.ma||(t.ma=function(n,r,i){const s=ie(n);return s.sa(),new rM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:uM.bind(null,t),Yo:hM.bind(null,t),t_:dM.bind(null,t),H_:fM.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Rg(t)?xg(t):t.Va.set("Unknown")):(await t.ma.stop(),GS(t))})),t.ma}function vi(t){return t.fa||(t.fa=function(n,r,i){const s=ie(n);return s.sa(),new iM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gM.bind(null,t),t_:vM.bind(null,t),ta:yM.bind(null,t),na:_M.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Dh(t)):(await t.fa.stop(),t.Ta.length>0&&(K(ts,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Pg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cg(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Ao(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class q0{constructor(){this.ga=new Le(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):te(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class fo{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fo(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class TM{constructor(){this.queries=K0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ie(n),s=i.queries;i.queries=K0(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function K0(){return new ps(t=>gS(t),kh)}async function bg(t,e){const n=ie(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new EM,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Cg(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Dg(n)}async function Ng(t,e){const n=ie(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IM(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Dg(n)}function SM(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Dg(t){t.Ca.forEach(e=>{e.next()})}var Dp,G0;(G0=Dp||(Dp={})).Ma="default",G0.Cache="cache";class Og{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.key=e}}class ZS{constructor(e){this.key=e}}class AM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.eu=yS(e),this.tu=new Qs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new q0,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const g=i.get(d),w=xh(this.query,f)?f:null,P=!!g&&this.mutatedKeys.has(g.key),x=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;g&&w?g.data.isEqual(w.data)?P!==x&&(r.track({type:3,doc:w}),C=!0):this.su(g,w)||(r.track({type:2,doc:w}),C=!0,(c&&this.eu(w,c)>0||u&&this.eu(w,u)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),C=!0):g&&!w&&(r.track({type:1,doc:g}),C=!0,(c||u)&&(l=!0)),C&&(w?(o=o.add(w),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(w,P){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Vt:C})}};return x(w)-x(P)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Ya.size===0&&this.current&&!i?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new fo(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new q0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new ZS(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new XS(r))}),n}cu(e){this.Za=e.ks,this.Ya=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Lg="SyncEngine";class kM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xM{constructor(e){this.key=e,this.hu=!1}}class RM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ps(l=>gS(l),kh),this.Eu=new Map,this.Iu=new Set,this.Ru=new Le(X.comparator),this.Au=new Map,this.Vu=new Eg,this.du={},this.mu=new Map,this.fu=ho.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function PM(t,e,n=!0){const r=sA(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await eA(r,e,n,!0),i}async function CM(t,e){const n=sA(t);await eA(n,e,!0,!1)}async function eA(t,e,n,r){const i=await QV(t.localStore,Xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await bM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qS(t.remoteStore,i),l}async function bM(t,e,n,r,i){t.pu=(f,g,w)=>async function(x,C,T,v){let E=C.view.ru(T);E.bs&&(E=await F0(x.localStore,C.query,!1).then(({documents:I})=>C.view.ru(I,E)));const O=v&&v.targetChanges.get(C.targetId),j=v&&v.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(E,x.isPrimaryClient,O,j);return Y0(x,C.targetId,F.au),F.snapshot}(t,f,g,w);const s=await F0(t.localStore,e,!0),o=new AM(e,s.ks),l=o.ru(s.documents),c=Cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);Y0(t,n,u.au);const d=new kM(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function NM(t,e,n){const r=ie(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!kh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ag(r.remoteStore,i.targetId),Op(r,i.targetId)}).catch(So)):(Op(r,i.targetId),await bp(r.localStore,i.targetId,!0))}async function DM(t,e){const n=ie(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ag(n.remoteStore,r.targetId))}async function OM(t,e,n){const r=BM(t);try{const i=await function(o,l){const c=ie(o),u=xe.now(),d=l.reduce((w,P)=>w.add(P.key),de());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Ar(),x=de();return c.xs.getEntries(w,d).next(C=>{P=C,P.forEach((T,v)=>{v.isValidDocument()||(x=x.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(C=>{f=C;const T=[];for(const v of l){const E=GL(v,f.get(v.key).overlayedDocument);E!=null&&T.push(new xi(v.key,E,lS(E.value.mapValue),_n.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,T,l)}).next(C=>{g=C;const T=C.applyToLocalDocumentSet(f,x);return c.documentOverlayCache.saveOverlays(w,C.batchId,T)})}).then(()=>({batchId:g.batchId,changes:vS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Le(he)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,i.batchId,n),await Nl(r,i.changes),await Dh(r.remoteStore)}catch(i){const s=Cg(i,"Failed to persist write");n.reject(s)}}async function tA(t,e){const n=ie(t);try{const r=await qV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?_e(o.hu,14607):i.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await Nl(n,r,e)}catch(r){await So(r)}}function Q0(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=ie(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const g of f.Sa)g.va(l)&&(u=!0)}),u&&Dg(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LM(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Le(X.comparator);o=o.insert(s,At.newNoDocument(s,ne.min()));const l=de().add(s),c=new Ch(ne.min(),new Map,new Le(he),o,l);await tA(r,c),r.Ru=r.Ru.remove(s),r.Au.delete(e),Vg(r)}else await bp(r.localStore,e,!1).then(()=>Op(r,e,n)).catch(So)}async function VM(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await WV(n.localStore,e);rA(n,r,null),nA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await So(i)}}async function MM(t,e,n){const r=ie(t);try{const i=await function(o,l){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(_e(f!==null,37113),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);rA(r,e,n),nA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await So(i)}}function nA(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function rA(t,e,n){const r=ie(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Op(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||iA(t,r)})}function iA(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Ag(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Vg(t))}function Y0(t,e,n){for(const r of n)r instanceof XS?(t.Vu.addReference(r.key,e),jM(t,r)):r instanceof ZS?(K(Lg,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||iA(t,r.key)):te(19791,{wu:r})}function jM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(K(Lg,"New document in limbo: "+n),t.Iu.add(r),Vg(t))}function Vg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Te.fromString(e)),r=t.fu.next();t.Au.set(r,new xM(n)),t.Ru=t.Ru.insert(n,r),qS(t.remoteStore,new Jr(Xn(Ah(n.path)),r,"TargetPurposeLimboResolution",Th.ce))}}async function Nl(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Ig.Is(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const d=ie(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(u,g=>M.forEach(g.Ts,w=>d.persistence.referenceDelegate.addReference(f,g.targetId,w)).next(()=>M.forEach(g.Es,w=>d.persistence.referenceDelegate.removeReference(f,g.targetId,w)))))}catch(f){if(!Ao(f))throw f;K(Sg,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const w=d.vs.get(g),P=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(P);d.vs=d.vs.insert(g,x)}}}(r.localStore,s))}async function UM(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){K(Lg,"User change. New user:",e.toKey());const r=await $S(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new W(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.Ns)}}function FM(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let i=de();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function sA(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LM.bind(null,e),e.Pu.H_=IM.bind(null,e.eventManager),e.Pu.yu=SM.bind(null,e.eventManager),e}function BM(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MM.bind(null,e),e}class Mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return HV(this.persistence,new BV,e.initialUser,this.serializer)}Cu(e){return new BS(Tg.Vi,this.serializer)}Du(e){return new JV}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mu.provider={build:()=>new Mu};class $M extends Mu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof Lu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kV(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new BS(r=>Lu.Vi(r,n),this.serializer)}}class Lp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Q0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UM.bind(null,this.syncEngine),await wM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TM}()}createDatastore(e){const n=bh(e.databaseInfo.databaseId),r=nM(e.databaseInfo);return aM(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new cM(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Q0(this.syncEngine,n,0),function(){return z0.v()?new z0:new XV}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,d){const f=new RM(i,s,o,l,c,u);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ie(i);K(ts,"RemoteStore shutting down."),s.Ia.add(5),await bl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Lp.provider={build:()=>new Lp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="FirestoreClient";class zM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=cg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(wi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(wi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yd(t,e){t.asyncQueue.verifyOperationInProgress(),K(wi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $S(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HM(t);K(wi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>W0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>W0(e.remoteStore,i)),t._onlineComponents=e}async function HM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(wi,"Using user provided OfflineComponentProvider");try{await Yd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await Yd(t,new Mu)}}else K(wi,"Using default OfflineComponentProvider"),await Yd(t,new $M(void 0));return t._offlineComponents}async function oA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(wi,"Using user provided OnlineComponentProvider"),await J0(t,t._uninitializedComponentsProvider._online)):(K(wi,"Using default OnlineComponentProvider"),await J0(t,new Lp))),t._onlineComponents}function WM(t){return oA(t).then(e=>e.syncEngine)}async function ju(t){const e=await oA(t),n=e.eventManager;return n.onListen=PM.bind(null,e.syncEngine),n.onUnlisten=NM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DM.bind(null,e.syncEngine),n}function qM(t,e,n,r){const i=new Mg(r),s=new Og(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>bg(await ju(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Ng(await ju(t),s))}}function KM(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Mg({next:g=>{d.Nu(),o.enqueueAndForget(()=>Ng(s,f));const w=g.docs.has(l);!w&&g.fromCache?u.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&c&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Og(Ah(l.path),d,{includeMetadataChanges:!0,qa:!0});return bg(s,f)}(await ju(t),t.asyncQueue,e,n,r)),r.promise}function GM(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Mg({next:g=>{d.Nu(),o.enqueueAndForget(()=>Ng(s,f)),g.fromCache&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Og(l,d,{includeMetadataChanges:!0,qa:!0});return bg(s,f)}(await ju(t),t.asyncQueue,e,n,r)),r.promise}function QM(t,e){const n=new mr;return t.asyncQueue.enqueueAndForget(async()=>OM(await WM(t),e,n)),n.promise}/**
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
 */function aA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM="ComponentProvider",X0=new Map;function JM(t,e,n,r,i){return new _L(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,aA(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="firestore.googleapis.com",Z0=!0;class ew{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lA,this.ssl=Z0}else this.host=e.host,this.ssl=e.ssl??Z0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=FS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SV)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aA(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ew({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ew(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YO;switch(r.type){case"firstParty":return new eL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=X0.get(n);r&&(K(YM,"Removing Datastore"),X0.delete(n),r.terminate())}(this),Promise.resolve()}}function XM(t,e,n,r={}){var u;t=Gt(t,Oh);const i=us(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Ym(`https://${l}`),s.host!==lA&&s.host!==l&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!pi(c,o)&&(t._setSettings(c),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=It.MOCK_USER;else{d=HI(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(g)}t._authCredentials=new JO(new Q1(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Rl(n,$e._jsonSchema))return new $e(e,r||null,new X(Te.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:et("string",$e._jsonSchemaVersion),referencePath:et("string")};class ui extends Pr{constructor(e,n,r){super(e,n,Ah(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new X(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function As(t,e,...n){if(t=se(t),Y1("collection","path",e),t instanceof Oh){const r=Te.fromString(e,...n);return f0(r),new ui(t,null,r)}{if(!(t instanceof $e||t instanceof ui))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return f0(r),new ui(t.firestore,null,r)}}function hi(t,e,...n){if(t=se(t),arguments.length===1&&(e=cg.newId()),Y1("doc","path",e),t instanceof Oh){const r=Te.fromString(e,...n);return d0(r),new $e(t,null,new X(r))}{if(!(t instanceof $e||t instanceof ui))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return d0(r),new $e(t.firestore,t instanceof ui?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="AsyncQueue";class nw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new HS(this,"async_queue_retry"),this._c=()=>{const r=Qd();r&&K(tw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new mr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;K(tw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Sr("INTERNAL UNHANDLED ERROR: ",rw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Pg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&te(47125,{Pc:rw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function rw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class kr extends Oh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new nw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nw(e),this._firestoreClient=void 0,await e}}}function ZM(t,e){const n=typeof t=="object"?t:ch(),r=typeof t=="string"?t:e||Cu,i=hs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=BI("firestore");s&&XM(i,...s)}return i}function Lh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||e4(t),t._firestoreClient}function e4(t){var r,i,s,o;const e=t._freezeSettings(),n=JM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new zM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(vt.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pn(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rl(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:et("string",pn._jsonSchemaVersion),bytes:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Rl(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:et("string",er._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rl(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:et("string",On._jsonSchemaVersion),vectorValues:et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4=/^__.*__$/;class n4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class cA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{dataSource:t})}}class Vh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Vh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Uu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(uA(this.dataSource)&&t4.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class r4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bh(e)}A(e,n,r,i=!1){return new Vh({dataSource:e,methodName:n,targetDoc:r,path:gt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mh(t){const e=t._freezeSettings(),n=bh(t._databaseId);return new r4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hA(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);$g("Data must be an object, but it was:",o,r);const l=dA(r,o);let c,u;if(s.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const g=ns(e,f,n);if(!o.contains(g))throw new W(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);mA(d,g)||d.push(g)}c=new nn(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new n4(new Bt(l),c,u)}class jh extends Ro{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jh}}function i4(t,e,n){return new Vh({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ug extends Ro{_toFieldTransform(e){return new gg(e.path,new fl)}isEqual(e){return e instanceof Ug}}class Fg extends Ro{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=i4(this,e,!0),r=this.Sc.map(s=>Po(s,n)),i=new uo(r);return new gg(e.path,i)}isEqual(e){return e instanceof Fg&&pi(this.Sc,e.Sc)}}class Bg extends Ro{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new ml(e.serializer,TS(e.serializer,this.bc));return new gg(e.path,n)}isEqual(e){return e instanceof Bg&&this.bc===e.bc}}function s4(t,e,n,r){const i=t.A(1,e,n);$g("Data must be an object, but it was:",i,r);const s=[],o=Bt.empty();ki(r,(c,u)=>{const d=pA(e,c,n);u=se(u);const f=i.fc(d);if(u instanceof jh)s.push(d);else{const g=Po(u,f);g!=null&&(s.push(d),o.set(d,g))}});const l=new nn(s);return new cA(o,l,i.fieldTransforms)}function o4(t,e,n,r,i,s){const o=t.A(1,e,n),l=[ns(e,r,n)],c=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(ns(e,s[g])),c.push(s[g+1]);const u=[],d=Bt.empty();for(let g=l.length-1;g>=0;--g)if(!mA(u,l[g])){const w=l[g];let P=c[g];P=se(P);const x=o.fc(w);if(P instanceof jh)u.push(w);else{const C=Po(P,x);C!=null&&(u.push(w),d.set(w,C))}}const f=new nn(u);return new cA(d,f,o.fieldTransforms)}function a4(t,e,n,r=!1){return Po(n,t.A(r?4:3,e))}function Po(t,e){if(fA(t=se(t)))return $g("Unsupported field value:",e,t),dA(t,e);if(t instanceof Ro)return function(r,i){if(!uA(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=Po(l,i.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:Ou(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ou(i.serializer,s)}}if(r instanceof er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:NS(i.serializer,r._byteString)};if(r instanceof $e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof On)return function(o,l){const c=o instanceof On?o.toArray():o;return{mapValue:{fields:{[sS]:{stringValue:aS},[bu]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return mg(l.serializer,d)})}}}}}}(r,i);if(US(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Eh(r)}`)}(t,e)}function dA(t,e){const n={};return Z1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Po(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof er||t instanceof pn||t instanceof $e||t instanceof Ro||t instanceof On||US(t))}function $g(t,e,n){if(!fA(n)||!J1(n)){const r=Eh(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ns(t,e,n){if((e=se(e))instanceof jg)return e._internalPath;if(typeof e=="string")return pA(t,e);throw Uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const l4=new RegExp("[~\\*/\\[\\]]");function pA(t,e,n){if(e.search(l4)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jg(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new W(V.INVALID_ARGUMENT,l+t+c)}function mA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[bu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>qe(o.doubleValue));return new On(n)}convertGeoPoint(e){return new er(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);_e(jS(r),9688,{name:e});const i=new ul(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class zg extends c4{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function iw(){return new Ug("serverTimestamp")}function n9(...t){return new Fg("arrayUnion",t)}function r9(t){return new Bg("increment",t)}const sw="@firebase/firestore",ow="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class u4 extends gA{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hg{}class Wg extends Hg{}function ia(t,e,...n){let r=[];e instanceof Hg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof qg).length,l=s.filter(c=>c instanceof Uh).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Uh extends Wg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uh(e,n,r)}_apply(e){const n=this._parse(e);return _A(e._query,n),new Pr(e.firestore,e.converter,kp(e._query,n))}_parse(e){const n=Mh(e.firestore);return function(s,o,l,c,u,d,f){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){cw(f,d);const P=[];for(const x of f)P.push(lw(c,s,x));g={arrayValue:{values:P}}}else g=lw(c,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||cw(f,d),g=a4(l,o,f,d==="in"||d==="not-in");return Ze.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kn(t,e,n){const r=e,i=ns("where",t);return Uh._create(i,r,n)}class qg extends Hg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)_A(o,c),o=kp(o,c)}(e._query,n),new Pr(e.firestore,e.converter,kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kg extends Wg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Kg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dl(s,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,LL(e._query,n))}}function i9(t,e="asc"){const n=e,r=ns("orderBy",t);return Kg._create(r,n)}class Gg extends Wg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gg(e,n,r)}_apply(e){return new Pr(e.firestore,e.converter,Du(e._query,this._limit,this._limitType))}}function s9(t){return aL("limit",t),Gg._create("limit",t,"F")}function lw(t,e,n){if(typeof(n=se(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mS(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!X.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return E0(t,new X(r))}if(n instanceof $e)return E0(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eh(n)}.`)}function cw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _A(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hi extends gA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ns("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hi._jsonSchema={type:et("string",Hi._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class zc extends Hi{data(e={}){return super.data(e)}}class Wi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new va(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zc(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new zc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new zc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:h4(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function h4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:t})}}/**
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
 */function wA(t){t=Gt(t,$e);const e=Gt(t.firestore,kr),n=Lh(e);return KM(n,t._key).then(r=>EA(e,t,r))}function mc(t){t=Gt(t,Pr);const e=Gt(t.firestore,kr),n=Lh(e),r=new zg(e);return yA(t._query),GM(n,t._query).then(i=>new Wi(e,r,t,i))}function uw(t,e,n){t=Gt(t,$e);const r=Gt(t.firestore,kr),i=vA(t.converter,e,n),s=Mh(r);return Fh(r,[hA(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function Ys(t,e,n,...r){t=Gt(t,$e);const i=Gt(t.firestore,kr),s=Mh(i);let o;return o=typeof(e=se(e))=="string"||e instanceof jg?o4(s,"updateDoc",t._key,e,n,r):s4(s,"updateDoc",t._key,e),Fh(i,[o.toMutation(t._key,_n.exists(!0))])}function o9(t){return Fh(Gt(t.firestore,kr),[new yg(t._key,_n.none())])}function d4(t,e){const n=Gt(t.firestore,kr),r=hi(t),i=vA(t.converter,e),s=Mh(t.firestore);return Fh(n,[hA(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function f4(t,...e){var u,d,f;t=se(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||aw(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(aw(e[r])){const g=e[r];e[r]=(u=g.next)==null?void 0:u.bind(g),e[r+1]=(d=g.error)==null?void 0:d.bind(g),e[r+2]=(f=g.complete)==null?void 0:f.bind(g)}let s,o,l;if(t instanceof $e)o=Gt(t.firestore,kr),l=Ah(t._key.path),s={next:g=>{e[r]&&e[r](EA(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Gt(t,Pr);o=Gt(g.firestore,kr),l=g._query;const w=new zg(o);s={next:P=>{e[r]&&e[r](new Wi(o,w,g,P))},error:e[r+1],complete:e[r+2]},yA(t._query)}const c=Lh(o);return qM(c,l,i,s)}function Fh(t,e){const n=Lh(t);return QM(n,e)}function EA(t,e,n){const r=n.docs.get(e._key),i=new zg(t);return new Hi(t,i,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){QO(ds),Vn(new En("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new kr(new XO(r.getProvider("auth-internal")),new tL(o,r.getProvider("app-check-internal")),vL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),qt(sw,ow,e),qt(sw,ow,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="firebasestorage.googleapis.com",IA="storageBucket",p4=2*60*1e3,m4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends jn{constructor(e,n,r=0){super(Jd(e),`Firebase Storage: ${n} (${Jd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function Jd(t){return"storage/"+t}function Qg(){const t="An unknown error occurred, please check the error payload for server response.";return new He(ze.UNKNOWN,t)}function g4(t){return new He(ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function y4(t){return new He(ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(ze.UNAUTHENTICATED,t)}function v4(){return new He(ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w4(t){return new He(ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function E4(){return new He(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function T4(){return new He(ze.CANCELED,"User canceled the upload/download.")}function I4(t){return new He(ze.INVALID_URL,"Invalid URL '"+t+"'.")}function S4(t){return new He(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function A4(){return new He(ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+IA+"' property when initializing the app?")}function k4(){return new He(ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function x4(){return new He(ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function R4(t){return new He(ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vp(t){return new He(ze.INVALID_ARGUMENT,t)}function SA(){return new He(ze.APP_DELETED,"The Firebase app was deleted.")}function P4(t){return new He(ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ma(t,e){return new He(ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function sa(t){throw new He(ze.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw S4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${f}/${d}/b/${i}/o${g}`,"i"),P={bucket:1,path:3},x=n===TA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",T=new RegExp(`^https?://${x}/${i}/${C}`,"i"),E=[{regex:l,indices:c,postModify:s},{regex:w,indices:P,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<E.length;O++){const j=E[O],F=j.regex.exec(e);if(F){const I=F[j.indices.bucket];let _=F[j.indices.path];_||(_=""),r=new rn(I,_),j.postModify(r);break}}if(r==null)throw I4(e);return r}}class C4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(w,c())},C)}function g(){s&&clearTimeout(s)}function w(C,...T){if(u){g();return}if(C){g(),d.call(null,C,...T);return}if(c()||o){g(),d.call(null,C,...T);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,f(E)}let P=!1;function x(C){P||(P=!0,g(),!u&&(i!==null?(C||(l=2),clearTimeout(i),f(0)):C||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function N4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(t){return t!==void 0}function O4(t){return typeof t=="object"&&!Array.isArray(t)}function Yg(t){return typeof t=="string"||t instanceof String}function hw(t){return Jg()&&t instanceof Blob}function Jg(){return typeof Blob<"u"}function dw(t,e,n,r){if(r<e)throw Vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Vp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function AA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qi||(qi={}));/**
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
 */function L4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e,n,r,i,s,o,l,c,u,d,f,g=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=g,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,x)=>{this.resolve_=P,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===qi.NO_ERROR,c=s.getStatus();if(!l||L4(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===qi.ABORT;r(!1,new gc(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new gc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());D4(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=Qg();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?SA():T4();o(c)}else{const c=E4();o(c)}};this.canceled_?n(!1,new gc(!1,null,!0)):this.backoffId_=b4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&N4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function M4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function j4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function U4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function F4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function B4(t,e,n,r,i,s,o=!0,l=!1){const c=AA(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return U4(d,e),M4(d,n),j4(d,s),F4(d,r),new V4(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function z4(...t){const e=$4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jg())return new Blob(t);throw new He(ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function H4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function W4(t){if(typeof atob>"u")throw R4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xd{constructor(e,n){this.data=e,this.contentType=n||null}}function q4(t,e){switch(t){case Qn.RAW:return new Xd(kA(e));case Qn.BASE64:case Qn.BASE64URL:return new Xd(xA(t,e));case Qn.DATA_URL:return new Xd(G4(e),Q4(e))}throw Qg()}function kA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function K4(t){let e;try{e=decodeURIComponent(t)}catch{throw Ma(Qn.DATA_URL,"Malformed data URL.")}return kA(e)}function xA(t,e){switch(t){case Qn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ma(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ma(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=W4(e)}catch(i){throw i.message.includes("polyfill")?i:Ma(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class RA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ma(Qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Y4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function G4(t){const e=new RA(t);return e.base64?xA(Qn.BASE64,e.rest):K4(e.rest)}function Q4(t){return new RA(t).contentType}function Y4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){let r=0,i="";hw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(hw(this.data_)){const r=this.data_,i=H4(r,e,n);return i===null?null:new qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qr(r,!0)}}static getBlob(...e){if(Jg()){const n=e.map(r=>r instanceof qr?r.data_:r);return new qr(z4.apply(null,n))}else{const n=e.map(o=>Yg(o)?q4(Qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new qr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){let e;try{e=JSON.parse(t)}catch{return null}return O4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function X4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function CA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(t,e){return e}class Nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Z4}}let yc=null;function ej(t){return!Yg(t)||t.length<2?t:CA(t)}function bA(){if(yc)return yc;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(s,o){return ej(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Nt("size");return i.xform=r,t.push(i),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),yc=t,yc}function tj(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function nj(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return tj(r,t),r}function NA(t,e,n){const r=PA(e);return r===null?null:nj(t,r,n)}function rj(t,e,n,r){const i=PA(e);if(i===null||!Yg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,f=t.fullPath,g="/b/"+o(d)+"/o/"+o(f),w=Xg(g,n,r),P=AA({alt:"media",token:u});return w+P})[0]}function ij(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class DA{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){if(!t)throw Qg()}function sj(t,e){function n(r,i){const s=NA(t,i,e);return OA(s!==null),s}return n}function oj(t,e){function n(r,i){const s=NA(t,i,e);return OA(s!==null),rj(s,i,t.host,t._protocol)}return n}function LA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=v4():i=_4():n.getStatus()===402?i=y4(t.bucket):n.getStatus()===403?i=w4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function aj(t){const e=LA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=g4(t.path)),s.serverResponse=i.serverResponse,s}return n}function lj(t,e,n){const r=e.fullServerUrl(),i=Xg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new DA(i,s,oj(t,n),o);return l.errorHandler=aj(e),l}function cj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function uj(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=cj(null,e)),r}function hj(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let O=0;O<2;O++)E=E+Math.random().toString().slice(2);return E}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=uj(e,r,i),d=ij(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",w=qr.getBlob(f,r,g);if(w===null)throw k4();const P={name:u.fullPath},x=Xg(s,t.host,t._protocol),C="POST",T=t.maxUploadRetryTime,v=new DA(x,C,sj(t,n),T);return v.urlParams=P,v.headers=o,v.body=w.uploadData(),v.errorHandler=LA(e),v}class dj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw sa("cannot .send() more than once");if(us(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fj extends dj{initXhr(){this.xhr_.responseType="text"}}function VA(){return new fj}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CA(this._location.path)}get storage(){return this._service}get parent(){const e=J4(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw P4(e)}}function pj(t,e,n){t._throwIfRoot("uploadBytes");const r=hj(t.storage,t._location,bA(),new qr(e,!0),n);return t.storage.makeRequestWithTokens(r,VA).then(i=>({metadata:i,ref:t}))}function mj(t){t._throwIfRoot("getDownloadURL");const e=lj(t.storage,t._location,bA());return t.storage.makeRequestWithTokens(e,VA).then(n=>{if(n===null)throw x4();return n})}function gj(t,e){const n=X4(t._location.path,e),r=new rn(t._location.bucket,n);return new rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yj(t){return/^[A-Za-z]+:\/\//.test(t)}function _j(t,e){return new rs(t,e)}function MA(t,e){if(t instanceof Zg){const n=t;if(n._bucket==null)throw A4();const r=new rs(n,n._bucket);return e!=null?MA(r,e):r}else return e!==void 0?gj(t,e):t}function vj(t,e){if(e&&yj(e)){if(t instanceof Zg)return _j(t,e);throw Vp("To use ref(service, url), the first argument must be a Storage instance.")}else return MA(t,e)}function fw(t,e){const n=e==null?void 0:e[IA];return n==null?null:rn.makeFromBucketSpec(n,t)}function wj(t,e,n,r={}){t.host=`${e}:${n}`;const i=us(e);i&&Ym(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:HI(s,t.app.options.projectId))}class Zg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=TA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=p4,this._maxUploadRetryTime=m4,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=fw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=fw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new C4(SA());{const o=B4(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const pw="@firebase/storage",mw="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="storage";function a9(t,e,n){return t=se(t),pj(t,e,n)}function l9(t){return t=se(t),mj(t)}function c9(t,e){return t=se(t),vj(t,e)}function Ej(t=ch(),e){t=se(t);const r=hs(t,jA).getImmediate({identifier:e}),i=BI("storage");return i&&Tj(r,...i),r}function Tj(t,e,n,r={}){wj(t,e,n,r)}function Ij(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zg(n,r,i,e,ds)}function Sj(){Vn(new En(jA,Ij,"PUBLIC").setMultipleInstances(!0)),qt(pw,mw,""),qt(pw,mw,"esm2020")}Sj();const UA="@firebase/installations",ey="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=1e4,BA=`w:${ey}`,$A="FIS_v2",Aj="https://firebaseinstallations.googleapis.com/v1",kj=60*60*1e3,xj="installations",Rj="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},is=new cs(xj,Rj,Pj);function zA(t){return t instanceof jn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA({projectId:t}){return`${Aj}/projects/${t}/installations`}function WA(t){return{token:t.token,requestStatus:2,expiresIn:bj(t.expiresIn),creationTime:Date.now()}}async function qA(t,e){const r=(await e.json()).error;return is.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function KA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Cj(t,{refreshToken:e}){const n=KA(t);return n.append("Authorization",Nj(e)),n}async function GA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bj(t){return Number(t.replace("s","000"))}function Nj(t){return`${$A} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=HA(t),i=KA(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:$A,appId:t.appId,sdkVersion:BA},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await GA(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:WA(u.authToken)}}else throw await qA("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lj=/^[cdef][\w-]{21}$/,Mp="";function Vj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Mj(t);return Lj.test(n)?n:Mp}catch{return Mp}}function Mj(t){return Oj(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Map;function JA(t,e){const n=Bh(t);XA(n,e),jj(n,e)}function XA(t,e){const n=YA.get(t);if(n)for(const r of n)r(e)}function jj(t,e){const n=Uj();n&&n.postMessage({key:t,fid:e}),Fj()}let Bi=null;function Uj(){return!Bi&&"BroadcastChannel"in self&&(Bi=new BroadcastChannel("[Firebase] FID Change"),Bi.onmessage=t=>{XA(t.data.key,t.data.fid)}),Bi}function Fj(){YA.size===0&&Bi&&(Bi.close(),Bi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj="firebase-installations-database",$j=1,ss="firebase-installations-store";let Zd=null;function ty(){return Zd||(Zd=lh(Bj,$j,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}})),Zd}async function Fu(t,e){const n=Bh(t),i=(await ty()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&JA(t,e.fid),e}async function ZA(t){const e=Bh(t),r=(await ty()).transaction(ss,"readwrite");await r.objectStore(ss).delete(e),await r.done}async function $h(t,e){const n=Bh(t),i=(await ty()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&JA(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t){let e;const n=await $h(t.appConfig,r=>{const i=zj(r),s=Hj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Mp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function zj(t){const e=t||{fid:Vj(),registrationStatus:0};return ek(e)}function Hj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(is.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Wj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qj(t)}:{installationEntry:e}}async function Wj(t,e){try{const n=await Dj(t,e);return Fu(t.appConfig,n)}catch(n){throw zA(n)&&n.customData.serverCode===409?await ZA(t.appConfig):await Fu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qj(t){let e=await gw(t.appConfig);for(;e.registrationStatus===1;)await QA(100),e=await gw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ny(t);return r||n}return e}function gw(t){return $h(t,e=>{if(!e)throw is.create("installation-not-found");return ek(e)})}function ek(t){return Kj(t)?{fid:t.fid,registrationStatus:0}:t}function Kj(t){return t.registrationStatus===1&&t.registrationTime+FA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gj({appConfig:t,heartbeatServiceProvider:e},n){const r=Qj(t,n),i=Cj(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:BA,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await GA(()=>fetch(r,l));if(c.ok){const u=await c.json();return WA(u)}else throw await qA("Generate Auth Token",c)}function Qj(t,{fid:e}){return`${HA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(t,e=!1){let n;const r=await $h(t.appConfig,s=>{if(!tk(s))throw is.create("not-registered");const o=s.authToken;if(!e&&Xj(o))return s;if(o.requestStatus===1)return n=Yj(t,e),s;{if(!navigator.onLine)throw is.create("app-offline");const l=eU(s);return n=Jj(t,l),l}});return n?await n:r.authToken}async function Yj(t,e){let n=await yw(t.appConfig);for(;n.authToken.requestStatus===1;)await QA(100),n=await yw(t.appConfig);const r=n.authToken;return r.requestStatus===0?ry(t,e):r}function yw(t){return $h(t,e=>{if(!tk(e))throw is.create("not-registered");const n=e.authToken;return tU(n)?{...e,authToken:{requestStatus:0}}:e})}async function Jj(t,e){try{const n=await Gj(t,e),r={...e,authToken:n};return await Fu(t.appConfig,r),n}catch(n){if(zA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ZA(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Fu(t.appConfig,r)}throw n}}function tk(t){return t!==void 0&&t.registrationStatus===2}function Xj(t){return t.requestStatus===2&&!Zj(t)}function Zj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kj}function eU(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function tU(t){return t.requestStatus===1&&t.requestTime+FA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nU(t){const e=t,{installationEntry:n,registrationPromise:r}=await ny(e);return r?r.catch(console.error):ry(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rU(t,e=!1){const n=t;return await iU(n),(await ry(n,e)).token}async function iU(t){const{registrationPromise:e}=await ny(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sU(t){if(!t||!t.options)throw ef("App Configuration");if(!t.name)throw ef("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ef(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ef(t){return is.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="installations",oU="installations-internal",aU=t=>{const e=t.getProvider("app").getImmediate(),n=sU(e),r=hs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lU=t=>{const e=t.getProvider("app").getImmediate(),n=hs(e,nk).getImmediate();return{getId:()=>nU(n),getToken:i=>rU(n,i)}};function cU(){Vn(new En(nk,aU,"PUBLIC")),Vn(new En(oU,lU,"PRIVATE"))}cU();qt(UA,ey);qt(UA,ey,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uU="/firebase-messaging-sw.js",hU="/firebase-cloud-messaging-push-scope",rk="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",dU="https://fcmregistrations.googleapis.com/v1",ik="google.c.a.c_id",fU="google.c.a.c_l",pU="google.c.a.ts",mU="google.c.a.e",_w=1e4;var vw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(vw||(vw={}));/**
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
 */function ar(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function gU(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="fcm_token_details_db",yU=5,ww="fcm_token_object_Store";async function _U(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(tf))return null;let e=null;return(await lh(tf,yU,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(ww))return;const l=o.objectStore(ww),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:u.createTime??Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:ar(u.vapidKey)}}}else if(i===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ar(u.auth),p256dh:ar(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ar(u.vapidKey)}}}else if(i===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ar(u.auth),p256dh:ar(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ar(u.vapidKey)}}}}}})).close(),await Ud(tf),await Ud("fcm_vapid_details_db"),await Ud("undefined"),vU(e)?e:null}function vU(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU="firebase-messaging-database",EU=1,yl="firebase-messaging-store";let nf=null;function sk(){return nf||(nf=lh(wU,EU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yl)}}})),nf}async function TU(t){const e=ok(t),r=await(await sk()).transaction(yl).objectStore(yl).get(e);if(r)return r;{const i=await _U(t.appConfig.senderId);if(i)return await iy(t,i),i}}async function iy(t,e){const n=ok(t),i=(await sk()).transaction(yl,"readwrite");return await i.objectStore(yl).put(e,n),await i.done,e}function ok({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Vt=new cs("messaging","Messaging",IU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SU(t,e){const n=await oy(t),r=ak(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(sy(t.appConfig),i)).json()}catch(o){throw Vt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Vt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Vt.create("token-subscribe-no-token");return s.token}async function AU(t,e){const n=await oy(t),r=ak(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${sy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Vt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Vt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Vt.create("token-update-no-token");return s.token}async function kU(t,e){const r={method:"DELETE",headers:await oy(t)};try{const s=await(await fetch(`${sy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Vt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Vt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function sy({projectId:t}){return`${dU}/projects/${t}/registrations`}async function oy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ak({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==rk&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xU=7*24*60*60*1e3;async function RU(t){const e=await CU(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ar(e.getKey("auth")),p256dh:ar(e.getKey("p256dh"))},r=await TU(t.firebaseDependencies);if(r){if(bU(r.subscriptionOptions,n))return Date.now()>=r.createTime+xU?PU(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await kU(t.firebaseDependencies,r.token)}catch{}return Ew(t.firebaseDependencies,n)}else return Ew(t.firebaseDependencies,n)}async function PU(t,e){try{const n=await AU(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await iy(t.firebaseDependencies,r),n}catch(n){throw n}}async function Ew(t,e){const r={token:await SU(t,e),createTime:Date.now(),subscriptionOptions:e};return await iy(t,r),r.token}async function CU(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gU(e)})}function bU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return NU(e,t),DU(e,t),OU(e,t),e}function NU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function DU(t,e){e.data&&(t.data=e.data)}function OU(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(t){return typeof t=="object"&&!!t&&ik in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */VU("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function VU(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(t){if(!t||!t.options)throw rf("App Configuration Object");if(!t.name)throw rf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw rf(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function rf(t){return Vt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=MU(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UU(t){try{t.swRegistration=await navigator.serviceWorker.register(uU,{scope:hU}),t.swRegistration.update().catch(()=>{}),await FU(t.swRegistration)}catch(e){throw Vt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function FU(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${_w} ms`)),_w),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BU(t,e){if(!e&&!t.swRegistration&&await UU(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Vt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $U(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=rk)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e){if(!navigator)throw Vt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Vt.create("permission-blocked");return await $U(t,e==null?void 0:e.vapidKey),await BU(t,e==null?void 0:e.serviceWorkerRegistration),RU(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zU(t,e,n){const r=HU(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ik],message_name:n[fU],message_time:n[pU],message_device_time:Math.floor(Date.now()/1e3)})}function HU(t){switch(t){case gl.NOTIFICATION_CLICKED:return"notification_open";case gl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WU(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===gl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Tw(n)):t.onMessageHandler.next(Tw(n)));const r=n.data;LU(r)&&r[mU]==="1"&&await zU(t,n.messageType,r)}const Iw="@firebase/messaging",Sw="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qU=t=>{const e=new jU(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>WU(e,n)),e},KU=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>lk(e,r)}};function GU(){Vn(new En("messaging",qU,"PUBLIC")),Vn(new En("messaging-internal",KU,"PRIVATE")),qt(Iw,Sw),qt(Iw,Sw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(){try{await qI()}catch{return!1}return typeof window<"u"&&WI()&&Bb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(t=ch()){return ck().then(e=>{if(!e)throw Vt.create("unsupported-browser")},e=>{throw Vt.create("indexed-db-unsupported")}),hs(se(t),"messaging").getImmediate()}async function YU(t,e){return t=se(t),lk(t,e)}GU();const JU={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},zh=QI(JU),un=WO(zh);T2(un,R1);const en=ZM(zh),u9=Ej(zh),sf=new Kn;let jp=null;const XU="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";ck().then(t=>{t&&(jp=QU(zh))}).catch(t=>{});/*! Capacitor: https://capacitorjs.com/ - MIT License */var os;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(os||(os={}));class Hc extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const ZU=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},eF=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:ZU(t),s=()=>i()!=="web",o=f=>{const g=u.get(f);return!!(g!=null&&g.platforms.has(i())||l(f))},l=f=>{var g;return(g=n.PluginHeaders)===null||g===void 0?void 0:g.find(w=>w.name===f)},c=f=>t.console.error(f),u=new Map,d=(f,g={})=>{const w=u.get(f);if(w)return w.proxy;const P=i(),x=l(f);let C;const T=async()=>(!C&&P in g?C=typeof g[P]=="function"?C=await g[P]():C=g[P]:e!==null&&!C&&"web"in g&&(C=typeof g.web=="function"?C=await g.web():C=g.web),C),v=(_,S)=>{var k,R;if(x){const b=x==null?void 0:x.methods.find(A=>S===A.name);if(b)return b.rtype==="promise"?A=>n.nativePromise(f,S.toString(),A):(A,me)=>n.nativeCallback(f,S.toString(),A,me);if(_)return(k=_[S])===null||k===void 0?void 0:k.bind(_)}else{if(_)return(R=_[S])===null||R===void 0?void 0:R.bind(_);throw new Hc(`"${f}" plugin is not implemented on ${P}`,os.Unimplemented)}},E=_=>{let S;const k=(...R)=>{const b=T().then(A=>{const me=v(A,_);if(me){const q=me(...R);return S=q==null?void 0:q.remove,q}else throw new Hc(`"${f}.${_}()" is not implemented on ${P}`,os.Unimplemented)});return _==="addListener"&&(b.remove=async()=>S()),b};return k.toString=()=>`${_.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:_,writable:!1,configurable:!1}),k},O=E("addListener"),j=E("removeListener"),F=(_,S)=>{const k=O({eventName:_},S),R=async()=>{const A=await k;j({eventName:_,callbackId:A},S)},b=new Promise(A=>k.then(()=>A({remove:R})));return b.remove=async()=>{await R()},b},I=new Proxy({},{get(_,S){switch(S){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return x?F:O;case"removeListener":return j;default:return E(S)}}});return r[f]=I,u.set(f,{name:f,proxy:I,platforms:new Set([...Object.keys(g),...x?[P]:[]])}),I};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=c,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=Hc,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},tF=t=>t.Capacitor=eF(t),gn=tF(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),In=gn.registerPlugin;class Hh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new gn.Exception(e,os.Unimplemented)}unavailable(e="not available"){return new gn.Exception(e,os.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const nF=In("WebView"),Aw=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),kw=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class rF extends Hh{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=kw(i).trim(),s=kw(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=Aw(e.key),r=Aw(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const iF=In("CapacitorCookies",{web:()=>new rF}),sF=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),oF=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},aF=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=e?encodeURIComponent(u):u,c+=`${s}=${l}&`}),c.slice(0,-1)):(l=e?encodeURIComponent(o):o,c=`${s}=${l}`),`${r}&${c}`},"").substr(1):null,uk=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=oF(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,c)=>{s.append(c,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class lF extends Hh{async request(e){const n=uk(e,e.webFetchExtra),r=aF(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await s.blob(),c=await sF(u);break;case"json":c=await s.json();break;case"document":case"text":default:c=await s.text()}const d={};return s.headers.forEach((f,g)=>{d[g]=f}),{data:c,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const cF=In("CapacitorHttp",{web:()=>new lF});var Up;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Up||(Up={}));var Fp;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(Fp||(Fp={}));class uF extends Hh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const hF=In("SystemBars",{web:()=>new uF}),h9=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:gn,CapacitorCookies:iF,CapacitorException:Hc,CapacitorHttp:cF,get ExceptionCode(){return os},get SystemBarType(){return Fp},SystemBars:hF,get SystemBarsStyle(){return Up},WebPlugin:Hh,WebView:nF,buildRequestInit:uk,registerPlugin:In},Symbol.toStringTag,{value:"Module"}));var xw;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(xw||(xw={}));var Rw;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(Rw||(Rw={}));const dF=In("FirebaseAuthentication",{web:()=>ee(()=>import("./web-58c0e6bd.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),hk=D.createContext();function Co(){return D.useContext(hk)}function fF({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(!0),s=D.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async x=>{if(!x){n(null);return}if(!s.current){s.current=!0;try{const C=hi(en,"users",x.uid),T=await wA(C),v=x.email==="prince8694@gmail.com"||x.email==="prince86944@gmail.com";if(T.exists()){const E=T.data();v&&E.role!==o.SUPER_ADMIN?(await Ys(C,{role:o.SUPER_ADMIN}),n({...x,...E,role:o.SUPER_ADMIN})):n({...x,...E})}else{const E={uid:x.uid,name:x.displayName||"Scholar",email:x.email,phone:x.phoneNumber||"",createdAt:iw(),role:v?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await uw(C,E),n({...x,...E})}}catch{n({uid:x.uid,email:x.email,name:x.displayName||"Scholar",role:x.email==="prince8694@gmail.com"||x.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function c(x,C,T,v){const E=await f2(un,x,C),O={uid:E.user.uid,name:T,email:x,phone:v,createdAt:iw(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await uw(hi(en,"users",E.user.uid),O),E.user}async function u(x,C){return p2(un,x,C)}async function d(){var C;if(gn.isNativePlatform())try{const T=await dF.signInWithGoogle();if((C=T==null?void 0:T.credential)!=null&&C.idToken){const v=Kn.credential(T.credential.idToken),E=await gh(un,v);return await l(E.user),E.user}throw new Error("Native Google Login failed")}catch{const v=await t0(un,sf);return await l(v.user),v.user}else try{const T=await t0(un,sf);return await l(T.user),T.user}catch{return await rO(un,sf)}}function f(x){return window.recaptchaVerifier||(window.recaptchaVerifier=new q2(un,"recaptcha-container",{size:"invisible"})),G2(un,x,window.recaptchaVerifier)}async function g(x){e&&(await Ys(hi(en,"users",e.uid),x),n(C=>({...C,...x})))}function w(){return k2(un)}D.useEffect(()=>A2(un,async C=>{e||i(!0);try{C?await l(C):n(null)}catch{}finally{i(!1)}}),[]),D.useEffect(()=>{oO(un).then(async x=>{x!=null&&x.user&&await l(x.user)}).catch(x=>{})},[]);const P={user:e,ROLES:o,login:u,signup:c,logout:w,googleLogin:d,setupRecaptcha:f,updateProfileData:g,loading:r};return m.jsx(hk.Provider,{value:P,children:t})}var Pw;(function(t){t.General="General",t.ParentalGuidance="ParentalGuidance",t.Teen="Teen",t.MatureAudience="MatureAudience"})(Pw||(Pw={}));var Cw;(function(t){t.SizeChanged="bannerAdSizeChanged",t.Loaded="bannerAdLoaded",t.FailedToLoad="bannerAdFailedToLoad",t.Opened="bannerAdOpened",t.Closed="bannerAdClosed",t.AdImpression="bannerAdImpression"})(Cw||(Cw={}));var Bp;(function(t){t.TOP_CENTER="TOP_CENTER",t.CENTER="CENTER",t.BOTTOM_CENTER="BOTTOM_CENTER"})(Bp||(Bp={}));var $p;(function(t){t.BANNER="BANNER",t.FULL_BANNER="FULL_BANNER",t.LARGE_BANNER="LARGE_BANNER",t.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",t.LEADERBOARD="LEADERBOARD",t.ADAPTIVE_BANNER="ADAPTIVE_BANNER",t.SMART_BANNER="SMART_BANNER"})($p||($p={}));var bw;(function(t){t.Loaded="interstitialAdLoaded",t.FailedToLoad="interstitialAdFailedToLoad",t.Showed="interstitialAdShowed",t.FailedToShow="interstitialAdFailedToShow",t.Dismissed="interstitialAdDismissed"})(bw||(bw={}));var Nw;(function(t){t.Loaded="onRewardedInterstitialAdLoaded",t.FailedToLoad="onRewardedInterstitialAdFailedToLoad",t.Showed="onRewardedInterstitialAdShowed",t.FailedToShow="onRewardedInterstitialAdFailedToShow",t.Dismissed="onRewardedInterstitialAdDismissed",t.Rewarded="onRewardedInterstitialAdReward"})(Nw||(Nw={}));var Dw;(function(t){t.Loaded="onRewardedVideoAdLoaded",t.FailedToLoad="onRewardedVideoAdFailedToLoad",t.Showed="onRewardedVideoAdShowed",t.FailedToShow="onRewardedVideoAdFailedToShow",t.Dismissed="onRewardedVideoAdDismissed",t.Rewarded="onRewardedVideoAdReward"})(Dw||(Dw={}));var Ow;(function(t){t.NOT_REQUIRED="NOT_REQUIRED",t.OBTAINED="OBTAINED",t.REQUIRED="REQUIRED",t.UNKNOWN="UNKNOWN"})(Ow||(Ow={}));var Lw;(function(t){t[t.DISABLED=0]="DISABLED",t[t.EEA=1]="EEA",t[t.NOT_EEA=2]="NOT_EEA",t[t.US=3]="US",t[t.OTHER=4]="OTHER"})(Lw||(Lw={}));const Wc=In("AdMob",{web:()=>ee(()=>import("./web-58b8e766.js"),[]).then(t=>new t.AdMobWeb)}),zn=In("Preferences",{web:()=>ee(()=>import("./web-e602291f.js"),[]).then(t=>new t.PreferencesWeb)}),ye=In("AppBlocker"),dk=D.createContext(null);function Vw(){return D.useContext(dk)}function pF({children:t}){const{user:e}=Co(),n=(H,J)=>{try{const le=localStorage.getItem(H);return le!==null?JSON.parse(le):J}catch{return J}},[r,i]=D.useState(!1),[s,o]=D.useState(0),[l,c]=D.useState("OTHERS"),[u,d]=D.useState(0),[f,g]=D.useState(0),[w,P]=D.useState(0),[x,C]=D.useState("COUNTDOWN"),[T,v]=D.useState(!1),[E,O]=D.useState(!1),[j,F]=D.useState(()=>n("allowedPackages","")),[I,_]=D.useState(()=>n("lockMode","NORMAL")),[S,k]=D.useState([]),[R,b]=D.useState(""),A=D.useRef(null),me=()=>{var H,J,le,Ve,Se;return gn.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((J=(H=window.Capacitor).isNativePlatform)==null?void 0:J.call(H))||((Ve=(le=window.Capacitor).isPluginAvailable)==null?void 0:Ve.call(le,"AppBlocker")))||((Se=gn.isPluginAvailable)==null?void 0:Se.call(gn,"AppBlocker"))},q=async()=>{if(me())try{if(ye&&ye.getInstalledApps){const{apps:H}=await ye.getInstalledApps();k(H.sort((J,le)=>J.name.localeCompare(le.name)))}}catch{}};D.useEffect(()=>{(async()=>{if(me()){await q();try{const J=await zn.get({key:"countdownEndTime"}),le=Number(J.value||0);if(le>Date.now()){const Ve=Math.ceil((le-Date.now())/1e3);o(Ve),i(!0),C("COUNTDOWN");const Se=await zn.get({key:"allowedPackages"});Se.value&&F(Se.value)}else ye&&ye.stopBlocker&&await ye.stopBlocker(),await zn.set({key:"isBlockerActive",value:"false"}),await zn.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch{}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const oe=H=>{if(F(H),localStorage.setItem("allowedPackages",JSON.stringify(H)),me()){zn.set({key:"allowedPackages",value:H});try{const J=(H||"").split(",").filter(Boolean);J.includes("com.apnacollegebihar.online")||J.push("com.apnacollegebihar.online"),ye&&ye.setAllowedPackages&&ye.setAllowedPackages({packages:J})}catch{}}},Ce=H=>{_(H),localStorage.setItem("lockMode",JSON.stringify(H)),me()&&zn.set({key:"lockMode",value:H})},$=H=>{if(H||v(!1),i(H),localStorage.setItem("timerActive",JSON.stringify(H)),me())try{if(H){if(ye&&ye.setBlockerActive&&ye.setBlockerActive({active:!0}),x==="COUNTDOWN"){ye&&ye.startCountdown&&ye.startCountdown({minutes:Math.ceil(s/60)});const le=Date.now()+s*1e3;zn.set({key:"countdownEndTime",value:String(le)})}const J=(j||"").split(",").filter(Boolean);J.includes("com.apnacollegebihar.online")||J.push("com.apnacollegebihar.online"),ye&&ye.setAllowedPackages&&ye.setAllowedPackages({packages:J}),zn.set({key:"isBlockerActive",value:"true"})}else ye&&ye.stopBlocker&&ye.stopBlocker(),zn.set({key:"isBlockerActive",value:"false"}),zn.set({key:"countdownEndTime",value:"0"})}catch{}},Z=H=>{O(H),localStorage.setItem("focusBroken",JSON.stringify(H))};D.useEffect(()=>{const H=J=>{J.key==="timerActive"&&i(JSON.parse(J.newValue)),J.key==="focusBroken"&&O(JSON.parse(J.newValue)),J.key==="lockMode"&&_(JSON.parse(J.newValue))};return window.addEventListener("storage",H),()=>window.removeEventListener("storage",H)},[]),D.useEffect(()=>{r||o(x==="COUNTDOWN"?u*3600+f*60+w:0)},[x,u,f,w,r]);const re=async(H=null)=>{if(!e)return;const J=H||(T?u*3600+f*60+w+s:x==="STOPWATCH"?s:u*3600+f*60-s);if(J<5){v(!1),$(!1);return}try{const le=new Date().toLocaleDateString("en-CA");await d4(As(en,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:J,date:le,createdAt:new Date().toISOString()});const Ve=hi(en,"users",e.uid),Se=await wA(Ve);if(Se.exists()){const at=Se.data(),Rt=at.lastStudyDate!==le?J:(at.todayStudyTime||0)+J,Qt=new Date;Qt.setDate(Qt.getDate()-1);const Pt=Qt.toLocaleDateString("en-CA");let Yt=at.streak||0,We=at.streakDate||"";We!==le&&We!==Pt&&(Yt=0),Rt>=7200&&We!==le&&(We===Pt?Yt+=1:Yt=1,We=le),await Ys(Ve,{totalStudyTime:(at.totalStudyTime||0)+J,todayStudyTime:Rt,lastStudyDate:le,streak:Yt,streakDate:We,isStudying:!1})}R&&(await Ys(hi(en,"Tasks",R),{done:!0}),b("")),v(!1),$(!1)}catch{v(!1)}};D.useEffect(()=>{e&&Ys(hi(en,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),D.useEffect(()=>{const H=J=>{r&&(J.preventDefault(),J.returnValue="")};return window.addEventListener("beforeunload",H),()=>{window.removeEventListener("beforeunload",H)}},[r]),D.useEffect(()=>(r?A.current=setInterval(()=>{o(x==="COUNTDOWN"?H=>H<=1?(C("STOPWATCH"),v(!0),0):H-1:H=>H+1)},1e3):clearInterval(A.current),()=>clearInterval(A.current)),[r,x,e,u,f,w,R]);const we={timerActive:r,setTimerActive:$,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:c,customHours:u,setCustomHours:d,customMinutes:f,setCustomMinutes:g,customSeconds:w,setCustomSeconds:P,timerMode:x,setTimerMode:C,overtimeActive:T,setOvertimeActive:v,saveGlobalSession:re,focusBroken:E,setFocusBroken:Z,allowedPackages:j,setAllowedPackages:oe,lockMode:I,setLockMode:Ce,installedApps:S,fetchApps:q,selectedTaskId:R,setSelectedTaskId:b,launchApp:async H=>{if(me())try{ye&&ye.unlockApp&&await ye.unlockApp(),ye&&ye.launchApp&&await ye.launchApp({packageName:H})}catch{}},openUsageAccessSettings:async()=>{if(me())try{ye&&ye.requestUsageStatsPermission&&await ye.requestUsageStatsPermission()}catch{}}};return m.jsx(dk.Provider,{value:we,children:t})}const mF=In("App",{web:()=>ee(()=>import("./web-d911713b.js"),[]).then(t=>new t.AppWeb)});var Mw;(function(t){t[t.Sunday=1]="Sunday",t[t.Monday=2]="Monday",t[t.Tuesday=3]="Tuesday",t[t.Wednesday=4]="Wednesday",t[t.Thursday=5]="Thursday",t[t.Friday=6]="Friday",t[t.Saturday=7]="Saturday"})(Mw||(Mw={}));const oa=In("LocalNotifications",{web:()=>ee(()=>import("./web-d619f998.js"),[]).then(t=>new t.LocalNotificationsWeb)});var gF=typeof Element<"u",yF=typeof Map=="function",_F=typeof Set=="function",vF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function qc(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!qc(t[r],e[r]))return!1;return!0}var s;if(yF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!qc(r.value[1],e.get(r.value[0])))return!1;return!0}if(_F&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(vF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(gF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!qc(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var wF=function(e,n){try{return qc(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return!1;throw r}};const EF=Bu(wF);var TF=function(t,e,n,r,i,s,o,l){if(!t){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,l],d=0;c=new Error(e.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},IF=TF;const jw=Bu(IF);var SF=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!c(d))return!1;var f=e[d],g=n[d];if(s=r?r.call(i,f,g,d):void 0,s===!1||s===void 0&&f!==g)return!1}return!0};const AF=Bu(SF);var fk=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(fk||{}),of={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Uw=Object.values(fk),Wh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},pk=Object.entries(Wh).reduce((t,[e,n])=>(t[n]=e,t),{}),bn="data-rh",Js={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Xs=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},kF=t=>{let e=Xs(t,"title");const n=Xs(t,Js.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Xs(t,Js.DEFAULT_TITLE);return e||r||void 0},xF=t=>Xs(t,Js.ON_CHANGE_CLIENT_STATE)||(()=>{}),af=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),RF=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),PF=t=>console&&typeof console.warn=="function"&&void 0,aa=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&PF(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(c=>{let u;const d=Object.keys(c);for(let g=0;g<d.length;g+=1){const w=d[g],P=w.toLowerCase();e.indexOf(P)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(P==="rel"&&c[P].toLowerCase()==="stylesheet")&&(u=P),e.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(u=w)}if(!u||!c[u])return!1;const f=c[u].toLowerCase();return r[u]||(r[u]={}),o[u]||(o[u]={}),r[u][f]?!1:(o[u][f]=!0,!0)}).reverse().forEach(c=>i.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const u=l[c],d={...r[u],...o[u]};r[u]=d}return i},[]).reverse()},CF=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},bF=t=>({baseTag:RF(["href"],t),bodyAttributes:af("bodyAttributes",t),defer:Xs(t,Js.DEFER),encode:Xs(t,Js.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:af("htmlAttributes",t),linkTags:aa("link",["rel","href"],t),metaTags:aa("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:aa("noscript",["innerHTML"],t),onChangeClientState:xF(t),scriptTags:aa("script",["src","innerHTML"],t),styleTags:aa("style",["cssText"],t),title:kF(t),titleAttributes:af("titleAttributes",t),prioritizeSeoTags:CF(t,Js.PRIORITIZE_SEO_TAGS)}),mk=t=>Array.isArray(t)?t.join(""):t,NF=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},lf=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(NF(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},Fw=(t,e)=>({...t,[e]:void 0}),DF=["noscript","script","style"],zp=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),gk=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),OF=(t,e,n,r)=>{const i=gk(n),s=mk(e);return i?`<${t} ${bn}="true" ${i}>${zp(s,r)}</${t}>`:`<${t} ${bn}="true">${zp(s,r)}</${t}>`},LF=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const f=typeof s[d]>"u"?d:`${d}="${zp(s[d],n)}"`;return u?`${u} ${f}`:f},""),l=s.innerHTML||s.cssText||"",c=DF.indexOf(t)===-1;return`${r}<${t} ${bn}="true" ${o}${c?"/>":`>${l}</${t}>`}`},""),yk=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Wh[r];return n[i||r]=t[r],n},e),VF=(t,e,n)=>{const r={key:e,[bn]:!0},i=yk(n,r);return[G.createElement("title",i,e)]},Kc=(t,e)=>e.map((n,r)=>{const i={key:r,[bn]:!0};return Object.keys(n).forEach(s=>{const l=Wh[s]||s;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[l]=n[s]}),G.createElement(t,i)}),hn=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>VF(t,e.title,e.titleAttributes),toString:()=>OF(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>yk(e),toString:()=>gk(e)};default:return{toComponent:()=>Kc(t,e),toString:()=>LF(t,e,n)}}},MF=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=lf(t,of.meta),s=lf(e,of.link),o=lf(n,of.script);return{priorityMethods:{toComponent:()=>[...Kc("meta",i.priority),...Kc("link",s.priority),...Kc("script",o.priority)],toString:()=>`${hn("meta",i.priority,r)} ${hn("link",s.priority,r)} ${hn("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},jF=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:u}=t;let{linkTags:d,metaTags:f,scriptTags:g}=t,w={toComponent:()=>[],toString:()=>""};return u&&({priorityMethods:w,linkTags:d,metaTags:f,scriptTags:g}=MF(t)),{priority:w,base:hn("base",e,r),bodyAttributes:hn("bodyAttributes",n,r),htmlAttributes:hn("htmlAttributes",i,r),link:hn("link",d,r),meta:hn("meta",f,r),noscript:hn("noscript",s,r),script:hn("script",g,r),style:hn("style",o,r),title:hn("title",{title:l,titleAttributes:c},r)}},Hp=jF,_c=[],ay=!!(typeof window<"u"&&window.document&&window.document.createElement),Wp=class{constructor(t,e){ir(this,"instances",[]);ir(this,"canUseDOM",ay);ir(this,"context");ir(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?_c:this.instances,add:t=>{(this.canUseDOM?_c:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?_c:this.instances).indexOf(t);(this.canUseDOM?_c:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Hp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},UF=parseInt(G.version.split(".")[0],10),qp=UF>=19,FF={},_k=G.createContext(FF),Zs,vk=(Zs=class extends D.Component{constructor(n){super(n);ir(this,"helmetData");qp?this.helmetData=null:this.helmetData=new Wp(this.props.context||{},Zs.canUseDOM)}render(){return qp?G.createElement(G.Fragment,null,this.props.children):G.createElement(_k.Provider,{value:this.helmetData.value},this.props.children)}},ir(Zs,"canUseDOM",ay),Zs),ws=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${bn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText"){const d=l.cssText;c.appendChild(document.createTextNode(d))}else{const d=u,f=typeof l[d]>"u"?"":l[d];c.setAttribute(u,f)}c.setAttribute(bn,"true"),i.some((u,d)=>(o=d,c.isEqualNode(u)))?i.splice(o,1):s.push(c)}),i.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},Kp=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(bn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const c=e[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);const u=s.indexOf(l);u!==-1&&s.splice(u,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(bn):n.getAttribute(bn)!==o.join(",")&&n.setAttribute(bn,o.join(","))},BF=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=mk(t)),Kp("title",e)},Bw=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:d,title:f,titleAttributes:g}=t;Kp("body",r),Kp("html",i),BF(f,g);const w={baseTag:ws("base",n),linkTags:ws("link",s),metaTags:ws("meta",o),noscriptTags:ws("noscript",l),scriptTags:ws("script",u),styleTags:ws("style",d)},P={},x={};Object.keys(w).forEach(C=>{const{newTags:T,oldTags:v}=w[C];T.length&&(P[C]=T),v.length&&(x[C]=w[C].oldTags)}),e&&e(),c(t,P,x)},la=null,$F=t=>{la&&cancelAnimationFrame(la),t.defer?la=requestAnimationFrame(()=>{Bw(t,()=>{la=null})}):(Bw(t),la=null)},zF=$F,$w=class extends D.Component{constructor(){super(...arguments);ir(this,"rendered",!1)}shouldComponentUpdate(e){return!AF(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=bF(e.get().map(s=>{const{context:o,...l}=s.props;return l}));vk.canUseDOM?zF(i):Hp&&(r=Hp(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Gc=[],zw=t=>{const e={};for(const n of Object.keys(t))e[pk[n]||n]=t[n];return e},Di=t=>{const e={};for(const n of Object.keys(t)){const r=Wh[n];e[r||n]=t[n]}return e},Hw=(t,e)=>{if(!ay)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const c=e[l];c==null||c===!1?n.removeAttribute(l):c===!0?n.setAttribute(l,""):n.setAttribute(l,String(c))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},cf=()=>{const t={},e={};for(const n of Gc){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,zw(r)),i&&Object.assign(e,zw(i))}Hw("html",t),Hw("body",e)},HF=class extends D.Component{componentDidMount(){Gc.push(this),cf()}componentDidUpdate(){cf()}componentWillUnmount(){const t=Gc.indexOf(this);t!==-1&&Gc.splice(t,1),cf()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return G.createElement("title",Di(e),t)}renderBase(){const{base:t}=this.props;return t?G.createElement("base",Di(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("meta",{key:n,...Di(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("link",{key:n,...Di(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("noscript",{key:n,...s})})}render(){return G.createElement(G.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},ff,WF=(ff=class extends D.Component{shouldComponentUpdate(t){return!EF(Fw(this.props,"helmetData"),Fw(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return jw(Uw.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Uw.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),jw(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return G.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((c,u)=>(c[pk[u]||u]=s[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Wp)){const i=r;r=new Wp(i.context,!0),delete n.helmetData}return qp?G.createElement(HF,{...n}):r?G.createElement($w,{...n,context:r.value}):G.createElement(_k.Consumer,null,i=>G.createElement($w,{...n,context:i}))}},ir(ff,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ff);function qF({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return G.useEffect(()=>{document.title=o;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",e);const c=document.querySelector('meta[property="og:title"]');c&&c.setAttribute("content",o);const u=document.querySelector('meta[property="og:description"]');u&&u.setAttribute("content",e)},[o,e]),m.jsxs(WF,{children:[m.jsx("title",{children:o}),m.jsx("meta",{name:"description",content:e}),m.jsx("meta",{name:"keywords",content:n}),m.jsx("link",{rel:"canonical",href:r}),m.jsx("meta",{property:"og:type",content:"website"}),m.jsx("meta",{property:"og:url",content:r}),m.jsx("meta",{property:"og:title",content:o}),m.jsx("meta",{property:"og:description",content:e}),m.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),m.jsx("meta",{property:"og:image",content:i}),m.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),m.jsx("meta",{name:"twitter:title",content:o}),m.jsx("meta",{name:"twitter:description",content:e}),m.jsx("meta",{name:"twitter:image",content:i}),s&&m.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}function KF(){return gn.isNativePlatform()?m.jsxs("footer",{className:"shrink-0 bg-transparent text-slate-500 py-8 px-6 mt-4 w-full",children:[m.jsxs("div",{className:"flex flex-wrap justify-center gap-4 px-4 mb-6",children:[m.jsx(Fe,{to:"/contact",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Contact"}),m.jsx(Fe,{to:"/privacy-policy",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Privacy"}),m.jsx(Fe,{to:"/terms",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Terms"}),m.jsx(Fe,{to:"/dmca",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"DMCA"}),m.jsx(Fe,{to:"/disclaimer",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Disclaimer"})]}),m.jsxs("div",{className:"text-center flex flex-col items-center justify-center gap-2",children:[m.jsxs("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:["© ",new Date().getFullYear()," Apna College Bihar."]}),m.jsxs("p",{className:"text-[10px] font-bold text-slate-500 tracking-wider",children:["Made with ",m.jsx("span",{className:"text-red-500",children:"❤️"})," for BEU STUDENTS"]})]})]}):m.jsxs("footer",{className:"relative bg-white pt-20 pb-8 px-6 md:px-16 mt-auto",children:[m.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"}),m.jsxs("div",{className:"container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8",children:[m.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("img",{src:"/logo-acb.png?v=99",alt:"Apna College Bihar Logo",className:"w-12 h-12 rounded-xl shadow-sm"}),m.jsxs("div",{children:[m.jsx("span",{className:"text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none",children:"APNA COLLEGE BIHAR"}),m.jsx("span",{className:"text-[8px] text-blue-600 font-bold uppercase tracking-[0.4em] mt-1.5 block",children:"Official Study Engine"})]})]}),m.jsx("p",{className:"text-slate-500 font-medium text-sm leading-relaxed max-w-sm",children:"The largest academic platform dedicated to Bihar engineering students. Free notes, PYQs, syllabus, and counselling tools."}),m.jsxs("div",{className:"flex gap-3 pt-2",children:[m.jsx("a",{href:"https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:m.jsx(wb,{size:20,className:"group-hover:scale-110 transition-transform"})}),m.jsx("a",{href:"https://t.me/apnacollegebihar",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:m.jsx(dp,{size:20,className:"group-hover:scale-110 transition-transform"})}),m.jsx("a",{href:"https://youtube.com/@apnacollegebihar",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:m.jsx(Sb,{size:20,className:"group-hover:scale-110 transition-transform"})})]})]}),m.jsxs("div",{className:"space-y-6",children:[m.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Resources"}),m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(Fe,{to:"/notes",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"B.Tech Notes"}),m.jsx(Fe,{to:"/pyq",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"PYQ Papers"}),m.jsx(Fe,{to:"/syllabus",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"BEU Syllabus"}),m.jsx(Fe,{to:"/cgpa",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"CGPA Calculator"})]})]}),m.jsxs("div",{className:"space-y-6",children:[m.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Company"}),m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(Fe,{to:"/contact",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Contact Us"}),m.jsx(Fe,{to:"/directory",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Sitemap"})]})]}),m.jsxs("div",{className:"space-y-6",children:[m.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Legal"}),m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsx(Fe,{to:"/privacy-policy",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Privacy Policy"}),m.jsx(Fe,{to:"/terms",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Terms & Conditions"}),m.jsx(Fe,{to:"/dmca",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"DMCA Policy"}),m.jsx(Fe,{to:"/disclaimer",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Disclaimer"}),m.jsx(Fe,{to:"/delete-account",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Delete Account"})]})]})]}),m.jsxs("div",{className:"container mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",children:[m.jsxs("p",{className:"text-[11px] font-black text-slate-400 uppercase tracking-widest",children:["© ",new Date().getFullYear()," APNA COLLEGE BIHAR. ALL RIGHTS RESERVED."]}),m.jsxs("p",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1",children:["Made with ",m.jsx(gb,{size:12,className:"text-rose-500 fill-rose-500"})," in Bihar"]})]})]})}const uf=In("AppBlocker");function Ww(){var me;const t=gn.isNativePlatform(),e=vo(),n=Km(),{user:r,updateProfileData:i,logout:s,loading:o}=Co(),[l,c]=D.useState(""),[u,d]=D.useState(!1),[f,g]=D.useState(!1),[w,P]=D.useState(navigator.onLine),{timerActive:x,lockMode:C}=Vw(),[T,v]=D.useState(!1),[E,O]=D.useState(null),[j,F]=D.useState(!1);D.useEffect(()=>{if(t)return(async()=>{try{await Wc.initialize(),await Wc.showBanner({adId:"ca-app-pub-3940256099942544/6300978111",adSize:$p.BANNER,position:Bp.BOTTOM_CENTER,margin:0,isTesting:!0})}catch(oe){ee(()=>import("./index-364a9eb2.js"),[]).then(({Toast:Ce})=>{Ce.show({text:`Ad Error: ${oe.message||"Unknown"}`})})}})(),()=>{Wc.hideBanner().catch(console.error)}},[t]);const I=[{title:"BEU Tools",items:[{name:"BEU Result",path:"/beu-result",icon:m.jsx(pb,{size:16})},{name:"Attendance",path:"/attendance",icon:m.jsx(Eb,{size:16})},{name:"Timetable",path:"/timetable",icon:m.jsx(Av,{size:16})},{name:"Notes",path:"/notes",icon:m.jsx(Iv,{size:16})},{name:"PYQ Papers",path:"/pyq",icon:m.jsx(fb,{size:16})},{name:"SGPA / CGPA",path:"/cgpa",icon:m.jsx(mb,{size:16})},{name:"Syllabus",path:"/syllabus",icon:m.jsx(yb,{size:16})}]},{title:"Study Tools",items:[{name:"Study Timer",path:"/study",icon:m.jsx(Cv,{size:16})},{name:"Scientific Calc",path:"/calculator",icon:m.jsx(Sv,{size:16})},{name:"Study Resources",path:"/study-resources",icon:m.jsx(_b,{size:16})},{name:"Personal Manager",path:"/extras",icon:m.jsx(Tb,{size:16})},{name:"Achievements",path:"/achievements",icon:m.jsx(hb,{size:16})}]},{title:"Counselling",items:[{name:"College Predictor",path:"/ugeac-predictor?tab=finder",icon:m.jsx(dp,{size:16})},{name:"Rank Predictor",path:"/ugeac-predictor?tab=predictor",icon:m.jsx(Sv,{size:16})},{name:"Counselling Guide",path:"/ugeac-predictor?tab=guide",icon:m.jsx(Iv,{size:16})}]}];D.useEffect(()=>{const q=()=>P(!0),oe=()=>P(!1);return window.addEventListener("online",q),window.addEventListener("offline",oe),()=>{window.removeEventListener("online",q),window.removeEventListener("offline",oe)}},[]),D.useEffect(()=>{d(!1),(async()=>{if(!(!r||!w)&&!t&&jp)try{if(await Notification.requestPermission()==="granted"){const Ce=await YU(jp,{vapidKey:XU});Ce&&await Ys(hi(en,"users",r.uid),{fcmToken:Ce})}}catch{}})()},[r,w,t]),D.useEffect(()=>{if(!r||!r.uid||!w)return;const q=new Date,oe=ia(As(en,"nudges"),kn("toUserId","==",r.uid),kn("timestamp",">=",q)),Ce=f4(oe,H=>{H.docChanges().forEach(J=>{if(J.type==="added"){const Ve=`📚 ${J.doc.data().fromUserName||"Scholar"} says: padh lo padh lo kam dega!`;pe(Ve,{duration:6e3,icon:"💡",style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Study Nudge 📚",{body:Ve,icon:"/logo-acb.png"})}})});if(!t)return()=>Ce();(async()=>{var at;const H=new Date().toLocaleDateString("en-CA"),J=new Date().getHours();if(J>=5){const Me=`morning_greeting_${H}`;if(!localStorage.getItem(Me)){const Rt=ia(As(en,"StudySessions"),kn("userId","==",r.uid),kn("date","==",H)),Pt=!(await mc(Rt)).empty||x||J>=8,Yt=r.name||"Bihari Babu";let We="",lt="";Pt?(We="Good Morning Biru 🌞",lt=`Subah-subah yaad aa gaya ki duniya mein ek banda aur hai jo bade-bade sapne dekhta hai aur phir unhe pura karne ki koshish bhi karta hai. 😄

Aaj ka mission simple hai:

Bakchodi limited 😜
Mehnat unlimited 💪
Tension zero 😌

Aur haan, agar aaj motivation na mile to yaad rakhna — sapne free hain, lekin unki EMI roz ki mehnat se bharni padti hai. 😅

Din mast jaye bhai, kuch aisa karna ki raat ko lage ki aaj ka din waste nahi gaya. ❤️✨`):(We=`Good Morning Bhai ${Yt} ☀️`,lt=`Uth ja bidu 😄, kitna soyega?

Naya din hai, naya chance hai. Kal jo nahi hua uska tension chhod, aaj jo kar sakta hai uspar focus kar.

Chai ☕ pi, fresh ho, aur lag ja apne kaam par. Thoda-thoda karke hi bade sapne pure hote hain.

Aur haan, mobile scroll karne se pehle apna target yaad kar lena. 😏

Chal bhai, aaj ka din phod dete hain. 💪🔥
Good Morning, have a great day! 🌞✨`),pe.custom(cn=>m.jsxs("div",{className:`${cn.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter'] z-[9999]`,children:[m.jsxs("div",{className:"flex justify-between items-start",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-xl",children:"🌅"}),m.jsx("h4",{className:"text-xs font-black uppercase tracking-wider text-amber-400",children:We})]}),m.jsx("button",{onClick:()=>pe.dismiss(cn.id),className:"text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-lg",children:"Close"})]}),m.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider leading-relaxed whitespace-pre-line text-slate-300",children:lt})]}),{duration:15e3}),"Notification"in window&&Notification.permission==="granted"&&new Notification(We,{body:lt.replace(/\n\n/g," "),icon:"/logo-acb.png"}),localStorage.setItem(Me,"true")}}let le=!1;if(J>=8){const Me=`timetable_alert_${H}`;if(!localStorage.getItem(Me)){const Qt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],Yt=(((at=r.timetableV3)==null?void 0:at[Qt])||[]).filter(We=>We.subject&&We.subject.trim()!=="");if(Yt.length>0){const lt=`🗓️ Aaj ki Classes:
${Yt.map(cn=>`• ${cn.startTime||""}: ${cn.subject}`).join(`
`)}
Time par pahunch jana biru, padhai shuru karo! 😉`;pe(lt,{duration:8e3,icon:"🗓️",style:{background:"#f8fafc",color:"#0f172a",fontWeight:"800",fontSize:"11px",border:"1px solid #e2e8f0"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Timetable Classes Alert",{body:lt,icon:"/logo-acb.png"})}localStorage.setItem(Me,"true"),le=!0}}const Ve=()=>{var Me;if(J>=6){const Rt=`attendance_alert_${H}`;if(!localStorage.getItem(Rt)){const Pt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],We=(((Me=r.timetableV3)==null?void 0:Me[Pt])||[]).filter(lt=>lt.subject&&lt.subject.trim()!=="").map(lt=>lt.subject.trim().toLowerCase());if(We.length>0){const lt=r.attendance||[],cn=[];We.forEach(Sn=>{const Jt=lt.find(Un=>Un.name.trim().toLowerCase()===Sn);if(Jt){const Un=Jt.total>0?Number((Jt.present/Jt.total*100).toFixed(1)):0,bo=je=>je<75?0:je<=80?1:je<=85?2:je<=90?3:je<=95?4:5;Un<75?cn.push({type:"danger",text:`🚨 Critical Attendance Alert: ${Jt.name} me attendance sirf ${Un}% hai (75% se niche)! College me back lag jayega biru, fatfat class lagao! 😤🔥`}):cn.push({type:"success",text:`🔥 Gazab Bhai! ${Jt.name} me attendance ${Un}% hai. Sessional me +${bo(Un)} number pakke hain tere! aise hi lagatar class karte raho! 💪✨`})}}),cn.forEach((Sn,Jt)=>{setTimeout(()=>{t?oa.schedule({notifications:[{title:"Attendance Alert",body:Sn.text,id:new Date().getTime()%1e5+Jt}]}):(pe(Sn.text,{duration:8e3,icon:Sn.type==="danger"?"🚨":"🔥",style:{background:Sn.type==="danger"?"#fecaca":"#d1fae5",color:Sn.type==="danger"?"#991b1b":"#065f46",fontWeight:"800",fontSize:"11px",border:`1px solid ${Sn.type==="danger"?"#fca5a5":"#6ee7b7"}`}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Attendance Alert",{body:Sn.text,icon:"/logo-acb.png"}))},Jt*1e3)})}localStorage.setItem(Rt,"true")}}};le?setTimeout(Ve,2e3):Ve();const Se=async()=>{const Me=`target_check_${H}`;if(!localStorage.getItem(Me)){const Rt=ia(As(en,"Tasks"),kn("userId","==",r.uid),kn("date","==",H)),Qt=await mc(Rt);if(Qt.empty){const Pt="🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥";t?oa.schedule({notifications:[{title:"Target Alert",body:Pt,id:new Date().getTime()%1e5}]}):pe(Pt,{duration:8e3,icon:"🎯",style:{background:"#fffbeb",color:"#b45309",fontWeight:"800",fontSize:"11px",border:"1px solid #fde68a"}})}else{const Pt=`🎯 Targets Setup: Aaj ke ${Qt.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke dikha de aaj! 💪🔥`;t?oa.schedule({notifications:[{title:"Targets Setup",body:Pt,id:new Date().getTime()%1e5}]}):pe(Pt,{duration:8e3,icon:"✅",style:{background:"#f0fdf4",color:"#166534",fontWeight:"800",fontSize:"11px",border:"1px solid #bbf7d0"}})}localStorage.setItem(Me,"true")}};le?setTimeout(Se,4e3):setTimeout(Se,1500)})();const Z=async()=>{if(x)return;const H=new Date().toLocaleDateString("en-CA"),J=ia(As(en,"StudySessions"),kn("userId","==",r.uid),kn("date","==",H));if((await mc(J)).docs.reduce((Me,Rt)=>Me+(Number(Rt.data().duration)||0),0)>=10800)return;const Se=ia(As(en,"Tasks"),kn("userId","==",r.uid),kn("date","==",H),kn("done","==",!1));if(!(await mc(Se)).empty){const Me="📚 Bhai padh le, target complete karna hai, time waste mat kar! Sapne free hain biru, par unki EMI roz ki mehnat se bharni padti hai! 😉🔥";t?oa.schedule({notifications:[{title:"Padhai Remainder! 📚",body:Me,id:new Date().getTime()%1e5}]}):(pe(Me,{duration:9e3,icon:"✍️",style:{background:"#fff1f2",color:"#be123c",fontWeight:"900",fontSize:"11px",border:"1px solid #fecdd3"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Padhai Remainder! 📚",{body:Me,icon:"/logo-acb.png"}))}},re=setTimeout(Z,12e4),we=setInterval(Z,9e5);return()=>{Ce(),clearTimeout(re),clearInterval(we)}},[r,x,w,C]);const _=async q=>{if(q.preventDefault(),!(l.length<10)){g(!0);try{await i({phone:l}),d(!1)}catch{}finally{g(!1)}}};D.useEffect(()=>{if(t){x?uf.lockApp().catch(console.error):uf.unlockApp().catch(console.error);const q=mF.addListener("appStateChange",({isActive:oe})=>{oe&&x&&uf.lockApp().catch(console.error)});return()=>{q.then(oe=>oe.remove())}}},[x,C,t]),D.useEffect(()=>{t&&oa.requestPermissions().catch(console.error)},[t]);const S=(me=r==null?void 0:r.metadata)!=null&&me.creationTime?new Date(r.metadata.creationTime).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"Recently",k=()=>{const{timerActive:q,timerTime:oe}=Vw();if(!q||e.pathname==="/study")return null;const Ce=Math.floor(oe%3600/60),$=oe%60;return m.jsxs("div",{onClick:()=>n("/study"),className:"flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-800 transition-all shadow-lg active:scale-95 group animate-pulse",children:[m.jsx(Cv,{size:14,className:"text-blue-500 group-hover:text-white transition-colors"}),m.jsxs("span",{className:"text-[10px] md:text-xs font-black text-white tabular-nums tracking-tighter",children:[Ce.toString().padStart(2,"0"),":",$.toString().padStart(2,"0")]})]})},b=(q=>q==="/"?"Home":q.includes("/study-resources")?"Study Resources":q.includes("/study")?"Study Zone":q.includes("/notes")?"B.Tech Notes":q.includes("/pyq")?"PYQ Papers":q.includes("/syllabus")?"BEU Syllabus":q.includes("/cgpa")?"CGPA Calculator":q.includes("/ugeac-predictor")?"UGEAC Predictor":q.includes("/calculator")?"Calculator":q.includes("/achievements")?"Achievements":q.includes("/groups")?"Study Groups":q.includes("/timetable")?"BEU Timetable":q.includes("/attendance")?"BEU Attendance Tracker":q.includes("/extras")?"Personal Manager":q.includes("/calendar")?"Calendar":q.includes("/beu-result")?"BEU Result":q.includes("/admin")?"Admin Panel":"ACB Hub")(e.pathname),A=({to:q,icon:oe,label:Ce})=>{const $=e.pathname===q||q!=="/"&&e.pathname.startsWith(q);return m.jsxs(Fe,{to:q,onClick:()=>v(!1),className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${$?"bg-blue-600 text-white shadow-md shadow-blue-600/20":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[m.jsx("div",{className:`${$?"text-white":"text-slate-400"}`,children:typeof oe=="function"?m.jsx(oe,{size:18}):oe}),m.jsx("span",{className:"text-[12px] uppercase tracking-wider font-black",children:Ce})]})};return m.jsxs("div",{className:"flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative",children:[m.jsx(qF,{title:b}),t&&m.jsxs("header",{className:"bg-white border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0 px-4 py-3 flex items-center justify-between",children:[m.jsx("button",{onClick:()=>n(-1),className:"p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors active:scale-95 flex items-center justify-center",children:m.jsx(db,{size:20,strokeWidth:3})}),m.jsx("div",{className:"flex items-center justify-center",children:m.jsx("span",{className:"text-[12px] font-black tracking-widest uppercase text-slate-900 truncate px-2",children:b})}),m.jsx("div",{className:"flex items-center gap-2",children:m.jsx(k,{})})]}),!t&&m.jsx("header",{className:"bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0",children:m.jsxs("div",{className:"max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-2 md:gap-3 group cursor-pointer",onClick:()=>n("/"),children:[m.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"}),m.jsxs("div",{className:"block min-w-0",children:[m.jsx("span",{className:"text-[11px] sm:text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none truncate",children:"Apna College Bihar"}),m.jsx("span",{className:"text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block",children:"Official App"})]})]}),m.jsxs("nav",{className:"hidden lg:flex items-center gap-6",children:[m.jsx(Fe,{to:"/",className:"text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:"Home"}),I.map((q,oe)=>m.jsxs("div",{className:"relative",children:[m.jsxs("button",{onClick:()=>O(E===oe?null:oe),className:"flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:[q.title,m.jsx(kv,{size:12,className:`transition-transform duration-200 ${E===oe?"rotate-180":""}`})]}),E===oe&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>O(null)}),m.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top",children:q.items.map(Ce=>m.jsxs(Fe,{to:Ce.path,className:"flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold",onClick:()=>O(null),children:[m.jsx("span",{className:"w-4 h-4 text-slate-500",children:Ce.icon}),m.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest",children:Ce.name})]},Ce.name))})]})]},q.title))]}),m.jsxs("div",{className:"flex items-center gap-3",children:[o?m.jsx("div",{className:"w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}):r?m.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[m.jsx(k,{}),m.jsxs("div",{className:`relative ${t?"hidden":"hidden lg:block"}`,children:[m.jsxs("a",{href:"/ApnaCollegeBihar_v19.apk",download:"ApnaCollegeBihar_v19.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[m.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),m.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),m.jsxs("div",{className:"relative",children:[m.jsxs("button",{onClick:()=>F(!j),className:"flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-50 border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group",children:[m.jsx("div",{className:"w-5 h-5 rounded-lg overflow-hidden bg-slate-100",children:m.jsx("img",{src:"/logo-acb.png?v=99",alt:"Profile",className:"w-full h-full object-cover"})}),m.jsx("span",{className:"hidden md:inline",children:"My Profile"}),m.jsx(kv,{size:12,className:`transition-transform duration-300 ${j?"rotate-180":""}`})]}),j&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>F(!1)}),m.jsxs("div",{className:"absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right",children:[m.jsxs("div",{className:"px-5 py-5 border-b border-slate-100 mb-2 text-center",children:[m.jsx("div",{className:"w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg",children:m.jsx("img",{src:"/logo-acb.png?v=99",alt:"ACB",className:"w-full h-full object-cover"})}),m.jsx("p",{className:"text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1",children:"ACB Official Account"}),m.jsx("p",{className:"text-[10px] font-bold text-slate-900 truncate",children:r.email}),m.jsxs("div",{className:"flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold",children:[m.jsx(Av,{size:10,className:"text-blue-500"}),m.jsxs("span",{children:["Joined: ",m.jsx("strong",{className:"text-slate-900",children:S})]})]})]}),m.jsxs("div",{className:"space-y-1",children:[((r==null?void 0:r.email)==="prince8694@gmail.com"||(r==null?void 0:r.email)==="prince86944@gmail.com"||(r==null?void 0:r.role)==="SUPER_ADMIN")&&m.jsxs(Fe,{to:"/dashboard/admin",className:"flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-blue-600 rounded-2xl transition-all group",children:[m.jsx("div",{className:"p-2 bg-blue-50 group-hover:bg-blue-100 rounded-xl transition-colors",children:m.jsx(Pv,{size:14})}),m.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Admin Panel"})]}),m.jsxs("button",{onClick:async()=>{F(!1);const q={title:"Apna College Bihar App - No More Distractions!",text:`📱 Padhai ke waqt Instagram/Reels se distract hote ho? Apna College Bihar App try karo! Isme "Strict Study Blocker" hai!

Steps:
1. App Download karke Dashboard me jao.
2. Niche "Focus Mode" on karo.
3. Timer set karo aur padhai shuru! (Baki saare apps block ho jayenge)

Saare Notes aur PYQs bhi yahi milenge!
Download now: `,url:"https://apnacollegebihar.online/apna-college-bihar-v20.apk"};try{navigator.share?await navigator.share(q):(await navigator.clipboard.writeText(q.text+" "+q.url),ee(()=>Promise.resolve().then(()=>ab),void 0).then(oe=>oe.toast.success("App link copied to clipboard!")))}catch{}},className:"flex items-center gap-3 w-full p-3 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 rounded-2xl transition-all group",children:[m.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-emerald-600/10 rounded-xl transition-colors",children:m.jsx(dp,{size:14})}),m.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Share App Link"})]}),m.jsxs("button",{onClick:()=>s(),className:"flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group",children:[m.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors",children:m.jsx(xv,{size:14})}),m.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Logout Session"})]})]})]})]})]})]}):m.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[m.jsx(k,{}),m.jsxs("div",{className:`relative ${t?"hidden":"hidden lg:block"}`,children:[m.jsxs("a",{href:"/ApnaCollegeBihar_v19.apk",download:"ApnaCollegeBihar_v19.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[m.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),m.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),m.jsx(Fe,{to:"/login",className:"hidden md:block px-4 py-2.5 md:px-5 md:py-3 text-slate-600 hover:text-slate-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-colors",children:"Login"}),m.jsx(Fe,{to:"/signup",className:"px-3 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/30 active:scale-95 shrink-0",children:"Sign Up"})]}),m.jsx("button",{onClick:()=>v(!0),className:"flex lg:hidden items-center justify-center p-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors ml-1 shrink-0",children:m.jsx(vb,{size:24})})]})]})}),m.jsxs("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-[#f8fafc] flex flex-col",children:[m.jsx("div",{className:`w-full grow shrink-0 pb-24 lg:pb-8 min-h-[80vh] ${e.pathname==="/"?"":"p-4 md:p-6 lg:p-8 max-w-7xl mx-auto"}`,children:m.jsx(Gm,{})}),m.jsx(KF,{})]}),T&&m.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden",onClick:()=>v(!1)}),m.jsxs("aside",{className:`fixed inset-y-0 right-0 w-72 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${T?"translate-x-0":"translate-x-full"}`,children:[m.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50",children:[m.jsx("span",{className:"text-[10px] font-black tracking-widest uppercase text-slate-400 block leading-none",children:"Navigation Menu"}),m.jsx("button",{onClick:()=>v(!1),className:"text-slate-400 hover:text-slate-900 bg-white p-2 rounded-xl shadow-sm border border-slate-200",children:m.jsx(Ib,{size:16,strokeWidth:3})})]}),m.jsx("div",{className:"flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar",children:I.map(q=>m.jsxs("div",{children:[m.jsxs("p",{className:"px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"})," ",q.title]}),m.jsx("div",{className:"space-y-1",children:q.items.map(oe=>m.jsx(A,{to:oe.path,icon:()=>oe.icon,label:oe.name},oe.name))})]},q.title))}),m.jsx("div",{className:"p-4 border-t border-slate-100 bg-slate-50",children:m.jsxs("button",{onClick:()=>s(),className:"w-full flex items-center justify-center gap-2 px-4 py-4 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest shadow-sm border border-slate-200",children:[m.jsx(xv,{size:16,strokeWidth:2.5})," Logout Session"]})})]}),u&&w&&m.jsx("div",{className:"fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:m.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[m.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:m.jsx(Pv,{size:32})}),m.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),m.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),m.jsxs("form",{onSubmit:_,className:"space-y-6",children:[m.jsxs("div",{className:"flex gap-2",children:[m.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),m.jsx("input",{type:"tel",maxLength:10,value:l,onChange:q=>c(q.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),m.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})})]})}const GF=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=Co(),[i,s]=D.useState(""),[o,l]=D.useState(!1);if(e)return m.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:m.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),m.jsx(Eu,{to:"/login",replace:!0});const c=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",u=async f=>{if(f.preventDefault(),i.length<10)return Nc.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),Nc.success("Mobile number linked securely!")}catch{Nc.error("Failed to save. Try again.")}finally{l(!1)}};return c?m.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:m.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[m.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),m.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[m.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:m.jsx(VI,{className:"text-blue-500 w-10 h-10"})}),m.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),m.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),m.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[m.jsxs("div",{className:"relative group",children:[m.jsx(Rv,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),m.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),m.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),m.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[m.jsx(Rv,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),m.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):m.jsx(Gm,{})},QF=()=>{const{user:t,loading:e,ROLES:n}=Co();return e?m.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:m.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?m.jsx(Gm,{}):m.jsx(Eu,{to:"/",replace:!0})},YF=G.lazy(()=>ee(()=>import("./Home-a7b20066.js"),["assets/Home-a7b20066.js","assets/search-e10a9c3e.js","assets/loader-2-1e9f8fdd.js","assets/external-link-18f74a5c.js","assets/map-pin-b5c2686b.js","assets/briefcase-728fb4da.js","assets/check-circle-57d1074d.js","assets/download-af617fc7.js","assets/arrow-right-2805c14c.js","assets/chevron-right-0ca517dc.js","assets/arrow-up-right-79bb826e.js","assets/layers-13cd36f5.js","assets/database-f1d1f8c0.js","assets/target-a2abc5a0.js","assets/zap-305466b4.js","assets/plus-200ccf11.js","assets/minus-6b554f6e.js"]));G.lazy(()=>ee(()=>import("./HomeOverview-8320fc67.js"),["assets/HomeOverview-8320fc67.js","assets/sparkles-ff821eaa.js","assets/users-ca59dd7d.js","assets/flame-3dcbc03e.js","assets/check-circle-57d1074d.js","assets/zap-305466b4.js","assets/arrow-right-2805c14c.js"]));const JF=G.lazy(()=>ee(()=>import("./Author-3c7e9b6d.js"),["assets/Author-3c7e9b6d.js","assets/target-a2abc5a0.js","assets/check-circle-57d1074d.js","assets/mail-dfe3bbe3.js"])),qw=G.lazy(()=>ee(()=>import("./AppHub-7b174735.js"),["assets/AppHub-7b174735.js","assets/log-in-36f2e4ed.js","assets/arrow-right-2805c14c.js","assets/users-ca59dd7d.js","assets/briefcase-728fb4da.js","assets/external-link-18f74a5c.js"])),XF=G.lazy(()=>ee(()=>import("./Notifications-3ccc6588.js"),["assets/Notifications-3ccc6588.js","assets/search-e10a9c3e.js","assets/arrow-up-right-79bb826e.js"])),ZF=G.lazy(()=>ee(()=>import("./Login-74df72a6.js"),["assets/Login-74df72a6.js","assets/sparkles-ff821eaa.js","assets/chrome-9259ae1d.js","assets/arrow-right-2805c14c.js"])),e6=G.lazy(()=>ee(()=>import("./Signup-c2b49d7c.js"),["assets/Signup-c2b49d7c.js","assets/sparkles-ff821eaa.js","assets/chrome-9259ae1d.js","assets/arrow-right-2805c14c.js"])),t6=G.lazy(()=>ee(()=>import("./UgeacPredictor-c391a59f.js"),["assets/UgeacPredictor-c391a59f.js","assets/jspdf.es.min-55d35cf1.js","assets/UgeacData-1d64c472.js","assets/pdfHelper-a43ec9a4.js","assets/check-circle-2-da7f9b14.js","assets/zap-305466b4.js","assets/layers-13cd36f5.js","assets/download-af617fc7.js","assets/info-efaaba8d.js","assets/building-2-268f3bc5.js","assets/chevron-up-3fb4a973.js","assets/trash-2-52fdd746.js","assets/plus-200ccf11.js","assets/wifi-19dbf68e.js","assets/search-e10a9c3e.js","assets/map-pin-b5c2686b.js","assets/external-link-18f74a5c.js","assets/UgeacPredictor-60565ae2.css"])),hf=G.lazy(()=>ee(()=>import("./Notes-162da75e.js"),["assets/Notes-162da75e.js","assets/PremiumAds-6dae2503.js","assets/bell-ccf569d6.js","assets/external-link-18f74a5c.js","assets/info-efaaba8d.js","assets/chevron-right-0ca517dc.js","assets/search-e10a9c3e.js","assets/arrow-right-2805c14c.js","assets/arrow-left-c7813299.js","assets/eye-1beff7b6.js","assets/download-af617fc7.js"])),df=G.lazy(()=>ee(()=>import("./PYQ-33d22e9d.js"),["assets/PYQ-33d22e9d.js","assets/PremiumAds-6dae2503.js","assets/bell-ccf569d6.js","assets/external-link-18f74a5c.js","assets/info-efaaba8d.js","assets/chevron-right-0ca517dc.js","assets/search-e10a9c3e.js","assets/arrow-right-2805c14c.js","assets/arrow-left-c7813299.js","assets/eye-1beff7b6.js","assets/download-af617fc7.js"])),Kw=G.lazy(()=>ee(()=>import("./BeuSyllabus-f123d541.js"),["assets/BeuSyllabus-f123d541.js","assets/jspdf.es.min-55d35cf1.js","assets/loader-2-1e9f8fdd.js","assets/download-af617fc7.js","assets/search-e10a9c3e.js","assets/chevron-up-3fb4a973.js"])),n6=G.lazy(()=>ee(()=>import("./BeuCgpa-da64b991.js"),["assets/BeuCgpa-da64b991.js","assets/check-circle-57d1074d.js","assets/plus-200ccf11.js","assets/trash-2-52fdd746.js","assets/chevron-up-3fb4a973.js","assets/bar-chart-3-17eed8c3.js"])),r6=G.lazy(()=>ee(()=>import("./StudyDashboard-085c826f.js"),["assets/StudyDashboard-085c826f.js","assets/clock-db84533f.js","assets/users-ca59dd7d.js","assets/arrow-right-2805c14c.js","assets/flame-3dcbc03e.js","assets/chevron-right-0ca517dc.js","assets/plus-200ccf11.js","assets/trash-2-52fdd746.js","assets/check-circle-2-da7f9b14.js","assets/search-e10a9c3e.js"])),i6=G.lazy(()=>ee(()=>import("./StudyResources-69e2c447.js"),["assets/StudyResources-69e2c447.js","assets/loader-2-1e9f8fdd.js","assets/plus-200ccf11.js","assets/alert-circle-9222f524.js","assets/search-e10a9c3e.js","assets/external-link-18f74a5c.js"])),s6=G.lazy(()=>ee(()=>import("./ScientificCalc-7855b768.js"),["assets/ScientificCalc-7855b768.js","assets/clock-db84533f.js"])),o6=G.lazy(()=>ee(()=>import("./AdminPanel-46cebce0.js"),["assets/AdminPanel-46cebce0.js","assets/loader-2-1e9f8fdd.js","assets/alert-circle-9222f524.js","assets/users-ca59dd7d.js","assets/bar-chart-3-17eed8c3.js","assets/search-e10a9c3e.js","assets/trash-2-52fdd746.js","assets/eye-1beff7b6.js","assets/bell-ccf569d6.js"])),a6=G.lazy(()=>ee(()=>import("./Achievements-f54c45cd.js"),["assets/Achievements-f54c45cd.js","assets/trophy-cc773383.js","assets/flame-3dcbc03e.js","assets/clock-db84533f.js","assets/zap-305466b4.js"])),l6=G.lazy(()=>ee(()=>import("./Group-1605f56c.js"),["assets/Group-1605f56c.js","assets/users-ca59dd7d.js","assets/search-e10a9c3e.js","assets/plus-200ccf11.js","assets/check-circle-57d1074d.js","assets/alert-circle-9222f524.js","assets/log-in-36f2e4ed.js"])),c6=G.lazy(()=>ee(()=>import("./GroupDetail-14b364d5.js"),["assets/GroupDetail-14b364d5.js","assets/arrow-left-c7813299.js","assets/trash-2-52fdd746.js","assets/external-link-18f74a5c.js","assets/trophy-cc773383.js","assets/chevron-right-0ca517dc.js"])),u6=G.lazy(()=>ee(()=>import("./Timetable-2910acdf.js"),["assets/Timetable-2910acdf.js","assets/arrow-right-2805c14c.js","assets/save-438fe423.js","assets/info-efaaba8d.js","assets/plus-200ccf11.js"])),h6=G.lazy(()=>ee(()=>import("./Attendance-0692792e.js"),["assets/Attendance-0692792e.js","assets/bell-ccf569d6.js","assets/external-link-18f74a5c.js","assets/plus-200ccf11.js","assets/minus-6b554f6e.js","assets/trash-2-52fdd746.js","assets/check-circle-2-da7f9b14.js","assets/info-efaaba8d.js","assets/chevron-right-0ca517dc.js"])),d6=G.lazy(()=>ee(()=>import("./BeuResult-618150af.js"),["assets/BeuResult-618150af.js","assets/external-link-18f74a5c.js","assets/info-efaaba8d.js"])),f6=G.lazy(()=>ee(()=>import("./PersonalManager-e9e75ef7.js"),["assets/PersonalManager-e9e75ef7.js","assets/search-e10a9c3e.js","assets/trash-2-52fdd746.js","assets/chevron-right-0ca517dc.js","assets/arrow-left-c7813299.js","assets/save-438fe423.js","assets/clock-db84533f.js"])),p6=G.lazy(()=>ee(()=>import("./Calendar-1d02ed78.js"),["assets/Calendar-1d02ed78.js","assets/chevron-right-0ca517dc.js","assets/bell-ccf569d6.js"])),m6=G.lazy(()=>ee(()=>import("./PrivacyPolicy-85b40343.js"),["assets/PrivacyPolicy-85b40343.js","assets/database-f1d1f8c0.js","assets/eye-1beff7b6.js"])),g6=G.lazy(()=>ee(()=>import("./Terms-ab9f57af.js"),["assets/Terms-ab9f57af.js","assets/check-circle-2-da7f9b14.js"])),y6=G.lazy(()=>ee(()=>import("./DeleteAccount-b1a0c791.js"),["assets/DeleteAccount-b1a0c791.js","assets/check-circle-2-da7f9b14.js","assets/trash-2-52fdd746.js","assets/log-in-36f2e4ed.js"])),_6=G.lazy(()=>ee(()=>import("./About-d68f4bf5.js"),["assets/About-d68f4bf5.js","assets/sparkles-ff821eaa.js","assets/users-ca59dd7d.js"])),v6=G.lazy(()=>ee(()=>import("./Contact-546ae458.js"),["assets/Contact-546ae458.js","assets/check-circle-2-da7f9b14.js","assets/help-circle-0efbc78c.js"])),w6=G.lazy(()=>ee(()=>import("./SearchSEO-a1bd1966.js"),["assets/SearchSEO-a1bd1966.js","assets/search-e10a9c3e.js","assets/loader-2-1e9f8fdd.js","assets/arrow-right-2805c14c.js"])),E6=G.lazy(()=>ee(()=>import("./DMCAPolicy-3bcfcde5.js"),["assets/DMCAPolicy-3bcfcde5.js","assets/arrow-left-c7813299.js","assets/mail-dfe3bbe3.js"])),T6=G.lazy(()=>ee(()=>import("./Disclaimer-f0f141b7.js"),["assets/Disclaimer-f0f141b7.js","assets/arrow-left-c7813299.js","assets/alert-circle-9222f524.js"])),Gw=G.lazy(()=>ee(()=>import("./BeuToolSEO-aafed1d0.js"),["assets/BeuToolSEO-aafed1d0.js","assets/Attendance-0692792e.js","assets/bell-ccf569d6.js","assets/external-link-18f74a5c.js","assets/plus-200ccf11.js","assets/minus-6b554f6e.js","assets/trash-2-52fdd746.js","assets/check-circle-2-da7f9b14.js","assets/info-efaaba8d.js","assets/chevron-right-0ca517dc.js","assets/Timetable-2910acdf.js","assets/arrow-right-2805c14c.js","assets/save-438fe423.js","assets/BeuCgpa-da64b991.js","assets/check-circle-57d1074d.js","assets/chevron-up-3fb4a973.js","assets/bar-chart-3-17eed8c3.js","assets/BeuResult-618150af.js"])),Qw=G.lazy(()=>ee(()=>import("./FeatureSEO-c567d590.js"),["assets/FeatureSEO-c567d590.js","assets/StudyDashboard-085c826f.js","assets/clock-db84533f.js","assets/users-ca59dd7d.js","assets/arrow-right-2805c14c.js","assets/flame-3dcbc03e.js","assets/chevron-right-0ca517dc.js","assets/plus-200ccf11.js","assets/trash-2-52fdd746.js","assets/check-circle-2-da7f9b14.js","assets/search-e10a9c3e.js","assets/Group-1605f56c.js","assets/check-circle-57d1074d.js","assets/alert-circle-9222f524.js","assets/log-in-36f2e4ed.js","assets/StudyResources-69e2c447.js","assets/loader-2-1e9f8fdd.js","assets/external-link-18f74a5c.js","assets/ScientificCalc-7855b768.js","assets/PersonalManager-e9e75ef7.js","assets/arrow-left-c7813299.js","assets/save-438fe423.js"])),Yw=G.lazy(()=>ee(()=>import("./CollegeProfile-bd635b4a.js"),["assets/CollegeProfile-bd635b4a.js","assets/collegeData-22ad8773.js","assets/building-2-268f3bc5.js","assets/arrow-right-2805c14c.js","assets/chevron-right-0ca517dc.js","assets/check-circle-57d1074d.js","assets/map-pin-b5c2686b.js","assets/download-af617fc7.js","assets/layers-13cd36f5.js","assets/users-ca59dd7d.js","assets/target-a2abc5a0.js","assets/wifi-19dbf68e.js","assets/clock-db84533f.js"])),Jw=G.lazy(()=>ee(()=>import("./BranchHub-d6a1b9ff.js"),["assets/BranchHub-d6a1b9ff.js","assets/chevron-right-0ca517dc.js","assets/cpu-bfa8231f.js","assets/briefcase-728fb4da.js","assets/bar-chart-3-17eed8c3.js","assets/users-ca59dd7d.js","assets/help-circle-0efbc78c.js"])),I6=G.lazy(()=>ee(()=>import("./UgeacInfo-0dc5f54c.js"),["assets/UgeacInfo-0dc5f54c.js","assets/chevron-right-0ca517dc.js","assets/help-circle-0efbc78c.js","assets/check-circle-2-da7f9b14.js"])),Xw=G.lazy(()=>ee(()=>import("./SubjectPage-0d3c4683.js"),["assets/SubjectPage-0d3c4683.js","assets/chevron-right-0ca517dc.js","assets/loader-2-1e9f8fdd.js","assets/download-af617fc7.js"])),S6=G.lazy(()=>ee(()=>import("./HackathonHub-da7f33b3.js"),["assets/HackathonHub-da7f33b3.js","assets/chevron-right-0ca517dc.js","assets/plus-200ccf11.js","assets/search-e10a9c3e.js","assets/loader-2-1e9f8fdd.js","assets/external-link-18f74a5c.js","assets/building-2-268f3bc5.js","assets/check-circle-2-da7f9b14.js","assets/users-ca59dd7d.js"])),A6=G.lazy(()=>ee(()=>import("./SitemapDirectory-f4d001b4.js"),["assets/SitemapDirectory-f4d001b4.js","assets/UgeacData-1d64c472.js","assets/building-2-268f3bc5.js","assets/cpu-bfa8231f.js","assets/arrow-right-2805c14c.js"])),k6=G.lazy(()=>ee(()=>import("./CollegeDirectory-9891b74e.js"),["assets/CollegeDirectory-9891b74e.js","assets/collegeData-22ad8773.js","assets/building-2-268f3bc5.js","assets/search-e10a9c3e.js","assets/target-a2abc5a0.js","assets/map-pin-b5c2686b.js","assets/layers-13cd36f5.js","assets/check-circle-57d1074d.js","assets/chevron-right-0ca517dc.js"])),Zw=G.lazy(()=>ee(()=>import("./CompareColleges-35f9106d.js"),["assets/CompareColleges-35f9106d.js","assets/UgeacData-1d64c472.js","assets/layers-13cd36f5.js","assets/arrow-right-2805c14c.js"])),x6=G.lazy(()=>ee(()=>import("./PercentilePredictor-d6bd39d0.js"),[]));function R6(){return m.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[m.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),m.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function P6(){var x,C,T,v;const{user:t,updateProfileData:e,logout:n}=Co(),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,c]=D.useState(""),[u,d]=D.useState(""),[f,g]=D.useState(!1);if(D.useEffect(()=>{t&&(i(t.name&&t.name!=="Scholar"?t.name:""),o(t.collegeName||""),c(t.district||""),d(t.phone&&t.phone!=="NOT LINKED"?t.phone:""))},[t]),!(t&&(!(t!=null&&t.phone)||((x=t==null?void 0:t.phone)==null?void 0:x.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED"||!(t!=null&&t.name)||((C=t==null?void 0:t.name)==null?void 0:C.trim())===""||(t==null?void 0:t.name)==="Scholar"||!(t!=null&&t.collegeName)||((T=t==null?void 0:t.collegeName)==null?void 0:T.trim())===""||!(t!=null&&t.district)||((v=t==null?void 0:t.district)==null?void 0:v.trim())==="")))return null;const P=async E=>{if(E.preventDefault(),!r.trim())return pe.error("Please enter your name!");if(!s.trim())return pe.error("Please enter your college name!");if(!l.trim())return pe.error("Please enter your district name!");if(u.length<10)return pe.error("Enter a valid 10-digit mobile number!");g(!0);try{await e({name:r.trim(),collegeName:s.trim(),district:l.trim(),phone:u}),pe.success("Profile setup completed successfully!")}catch{pe.error("Failed to save. Try again.")}finally{g(!1)}};return m.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:m.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[m.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),m.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[m.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:m.jsx(VI,{className:"text-blue-500 w-10 h-10"})}),m.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Profile Setup"}),m.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-6",children:"Please complete your details to unlock and secure your college portal access."}),m.jsxs("form",{onSubmit:P,className:"w-full space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Full Name"}),m.jsx("input",{type:"text",value:r,onChange:E=>i(E.target.value),placeholder:"YOUR FULL NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"College Name"}),m.jsx("input",{type:"text",value:s,onChange:E=>o(E.target.value),placeholder:"YOUR COLLEGE NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"District"}),m.jsx("input",{type:"text",value:l,onChange:E=>c(E.target.value),placeholder:"YOUR DISTRICT NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Mobile Number"}),m.jsx("input",{type:"tel",value:u,onChange:E=>d(E.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),m.jsx("button",{type:"submit",disabled:f,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:f?"Saving details...":"Save & Continue"})]}),m.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function C6(){const{user:t,loading:e}=Co(),[n,r]=D.useState(!0),[i,s]=D.useState(window.innerWidth<768),o=gn.isNativePlatform();new URLSearchParams(window.location.search).get("standalone")==="true"&&sessionStorage.setItem("standalone","true");const c=o||sessionStorage.getItem("standalone")==="true";if(D.useEffect(()=>{const u=()=>s(window.innerWidth<768);return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),D.useEffect(()=>{o&&Wc.initialize().catch(console.error)},[o]),D.useEffect(()=>{const u=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(u)),()=>clearTimeout(u)},[e]),n)return m.jsxs("div",{className:"min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center",children:[m.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),m.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return m.jsxs(m.Fragment,{children:[m.jsx(LI,{position:"top-right"}),m.jsx(P6,{}),m.jsx(G.Suspense,{fallback:m.jsx(R6,{}),children:m.jsxs(gC,{children:[m.jsx(Y,{path:"/hub",element:m.jsx(qw,{})}),m.jsx(Y,{path:"/login",element:m.jsx(ZF,{})}),m.jsx(Y,{path:"/signup",element:m.jsx(e6,{})}),m.jsx(Y,{path:"/privacy-policy",element:m.jsx(m6,{})}),m.jsx(Y,{path:"/terms",element:m.jsx(g6,{})}),m.jsx(Y,{path:"/delete-account",element:m.jsx(y6,{})}),m.jsx(Y,{path:"/about",element:m.jsx(_6,{})}),m.jsx(Y,{path:"/author",element:m.jsx(JF,{})}),m.jsx(Y,{path:"/contact",element:m.jsx(v6,{})}),m.jsx(Y,{path:"/dmca",element:m.jsx(E6,{})}),m.jsx(Y,{path:"/disclaimer",element:m.jsx(T6,{})}),m.jsx(Y,{path:"/directory",element:c?m.jsx(Eu,{to:"/",replace:!0}):m.jsx(A6,{})}),o&&m.jsx(Y,{path:"/",element:m.jsx(qw,{})}),m.jsxs(Y,{element:m.jsx(Ww,{}),children:[!o&&m.jsx(Y,{path:"/",element:m.jsx(YF,{})}),m.jsx(Y,{path:"/notifications",element:m.jsx(XF,{})}),m.jsx(Y,{path:"/search/:keyword",element:m.jsx(w6,{})}),m.jsx(Y,{path:"/notes",element:m.jsx(hf,{})}),m.jsx(Y,{path:"/notes/:branchId/:semesterId",element:m.jsx(hf,{})}),m.jsx(Y,{path:"/notes/:branchId",element:m.jsx(hf,{})}),m.jsx(Y,{path:"/pyq",element:m.jsx(df,{})}),m.jsx(Y,{path:"/pyq/:branchId/:semesterId",element:m.jsx(df,{})}),m.jsx(Y,{path:"/pyq/:branchId",element:m.jsx(df,{})}),m.jsx(Y,{path:"/attendance",element:m.jsx(h6,{})}),m.jsx(Y,{path:"/timetable",element:m.jsx(u6,{})}),m.jsx(Y,{path:"/study",element:m.jsx(r6,{})}),m.jsx(Y,{path:"/study-resources",element:m.jsx(i6,{})}),m.jsx(Y,{path:"/calculator",element:m.jsx(s6,{})}),m.jsx(Y,{path:"/groups",element:m.jsx(l6,{})}),m.jsx(Y,{path:"/groups/:groupId",element:m.jsx(c6,{})}),m.jsx(Y,{path:"/achievements",element:m.jsx(a6,{})}),m.jsx(Y,{path:"/extras",element:m.jsx(f6,{})}),m.jsx(Y,{path:"/calendar",element:m.jsx(p6,{})}),m.jsx(Y,{path:"/cgpa",element:m.jsx(n6,{})}),m.jsx(Y,{path:"/ugeac-predictor",element:m.jsx(t6,{})}),m.jsx(Y,{path:"/beu-result",element:m.jsx(d6,{})}),m.jsx(Y,{path:"/syllabus",element:m.jsx(Kw,{})}),m.jsx(Y,{path:"/syllabus/:branchId",element:m.jsx(Kw,{})}),m.jsx(Y,{path:"/colleges",element:m.jsx(k6,{})}),m.jsx(Y,{path:"/college/:collegeSlug",element:m.jsx(Yw,{})}),m.jsx(Y,{path:"/college/:collegeSlug/:section",element:m.jsx(Yw,{})}),m.jsx(Y,{path:"/branch/:branchId",element:m.jsx(Jw,{})}),m.jsx(Y,{path:"/branch/:branchId/:section",element:m.jsx(Jw,{})}),m.jsx(Y,{path:"/ugeac/:page",element:m.jsx(I6,{})}),m.jsx(Y,{path:"/subject/:subjectSlug",element:m.jsx(Xw,{})}),m.jsx(Y,{path:"/subject/:subjectSlug/:section",element:m.jsx(Xw,{})}),m.jsx(Y,{path:"/hackathons",element:m.jsx(S6,{})}),m.jsx(Y,{path:"/compare",element:m.jsx(Zw,{})}),m.jsx(Y,{path:"/compare/:college1VsCollege2",element:m.jsx(Zw,{})}),m.jsx(Y,{path:"/percentile-predictor",element:m.jsx(x6,{})}),m.jsx(Y,{path:"/beu/:tool",element:m.jsx(Gw,{})}),m.jsx(Y,{path:"/beu/:tool/:keyword",element:m.jsx(Gw,{})}),m.jsx(Y,{path:"/feature/:feature",element:m.jsx(Qw,{})}),m.jsx(Y,{path:"/feature/:feature/:keyword",element:m.jsx(Qw,{})})]}),m.jsx(Y,{element:m.jsx(GF,{}),children:m.jsx(Y,{element:m.jsx(Ww,{}),children:m.jsx(Y,{element:m.jsx(QF,{}),children:m.jsx(Y,{path:"/dashboard/admin",element:m.jsx(o6,{})})})})}),m.jsx(Y,{path:"*",element:m.jsx(Eu,{to:"/",replace:!0})})]})})]})}catch{return m.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[m.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:m.jsx(ub,{size:32})}),m.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),m.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),m.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}const eE=document.getElementById("root");if(eE)try{pf.createRoot(eE).render(m.jsx(G.StrictMode,{children:m.jsx(vk,{children:m.jsx(fF,{children:m.jsx(pF,{children:m.jsx(IC,{children:m.jsx(C6,{})})})})})}))}catch{}export{wA as $,hb as A,Iv as B,Av as C,kv as D,kn as E,fb as F,mb as G,N6 as H,Bu as I,Ys as J,hi as K,Fe as L,wb as M,o9 as N,d4 as O,iw as P,c9 as Q,G as R,qF as S,Cv as T,Tb as U,u9 as V,a9 as W,Ib as X,Sb as Y,l9 as Z,ee as _,Co as a,Vw as a0,ub as a1,WO as a2,J6 as a3,gb as a4,gn as a5,In as a6,n9 as a7,r9 as a8,Nc as a9,p2 as aA,$6 as aB,G2 as aC,L6 as aD,K6 as aE,G6 as aF,q6 as aG,zD as aH,W6 as aI,rO as aJ,t0 as aK,e9 as aL,Z6 as aM,h2 as aN,Ir as aO,Q6 as aP,Wv as aQ,F2 as aR,C1 as aS,R1 as aT,ab as aU,h9 as aV,Hh as aa,Ow as ab,U6 as ac,f2 as ad,j6 as ae,z6 as af,oO as ag,Lc as ah,B6 as ai,Rw as aj,fs as ak,zr as al,Hr as am,Kn as an,q2 as ao,X6 as ap,Wr as aq,yD as ar,Y6 as as,H6 as at,M6 as au,F6 as av,xw as aw,T2 as ax,O6 as ay,V6 as az,i9 as b,As as c,en as d,yb as e,Sv as f,mc as g,dp as h,db as i,m as j,Pv as k,s9 as l,Pe as m,VI as n,f4 as o,xv as p,ia as q,D as r,KF as s,pb as t,Km as u,Eb as v,_b as w,pe as x,D6 as y,vo as z};
