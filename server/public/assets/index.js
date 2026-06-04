var dR=Object.defineProperty;var fR=(t,e,n)=>e in t?dR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Un=(t,e,n)=>(fR(t,typeof e!="symbol"?e+"":e,n),n);function pR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Fj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ec(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kE={exports:{}},Tc={},PE={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),mR=Symbol.for("react.portal"),gR=Symbol.for("react.fragment"),yR=Symbol.for("react.strict_mode"),_R=Symbol.for("react.profiler"),vR=Symbol.for("react.provider"),wR=Symbol.for("react.context"),ER=Symbol.for("react.forward_ref"),TR=Symbol.for("react.suspense"),IR=Symbol.for("react.memo"),SR=Symbol.for("react.lazy"),Hy=Symbol.iterator;function AR(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var CE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bE=Object.assign,xE={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=xE,this.updater=n||CE}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function NE(){}NE.prototype=Xs.prototype;function xp(t,e,n){this.props=t,this.context=e,this.refs=xE,this.updater=n||CE}var Np=xp.prototype=new NE;Np.constructor=xp;bE(Np,Xs.prototype);Np.isPureReactComponent=!0;var Wy=Array.isArray,OE=Object.prototype.hasOwnProperty,Op={current:null},DE={key:!0,ref:!0,__self:!0,__source:!0};function LE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)OE.call(e,r)&&!DE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:el,type:t,key:s,ref:o,props:i,_owner:Op.current}}function RR(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function kR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qy=/\/+/g;function Gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kR(""+t.key):e.toString(36)}function eu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case mR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gh(o,0):r,Wy(i)?(n="",t!=null&&(n=t.replace(qy,"$&/")+"/"),eu(i,e,n,"",function(c){return c})):i!=null&&(Dp(i)&&(i=RR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Gh(s,l);o+=eu(s,e,n,u,i)}else if(u=AR(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Gh(s,l++),o+=eu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function kl(t,e,n){if(t==null)return t;var r=[],i=0;return eu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function PR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},tu={transition:null},CR={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:tu,ReactCurrentOwner:Op};function VE(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:kl,forEach:function(t,e,n){kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kl(t,function(){e++}),e},toArray:function(t){return kl(t,function(e){return e})||[]},only:function(t){if(!Dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Xs;se.Fragment=gR;se.Profiler=_R;se.PureComponent=xp;se.StrictMode=yR;se.Suspense=TR;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CR;se.act=VE;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)OE.call(e,u)&&!DE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:el,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:wR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vR,_context:t},t.Consumer=t};se.createElement=LE;se.createFactory=function(t){var e=LE.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:ER,render:t}};se.isValidElement=Dp;se.lazy=function(t){return{$$typeof:SR,_payload:{_status:-1,_result:t},_init:PR}};se.memo=function(t,e){return{$$typeof:IR,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=tu.transition;tu.transition={};try{t()}finally{tu.transition=e}};se.unstable_act=VE;se.useCallback=function(t,e){return St.current.useCallback(t,e)};se.useContext=function(t){return St.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return St.current.useDeferredValue(t)};se.useEffect=function(t,e){return St.current.useEffect(t,e)};se.useId=function(){return St.current.useId()};se.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return St.current.useMemo(t,e)};se.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};se.useRef=function(t){return St.current.useRef(t)};se.useState=function(t){return St.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return St.current.useTransition()};se.version="18.3.1";PE.exports=se;var O=PE.exports;const G=Ec(O),bR=pR({__proto__:null,default:G},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xR=O,NR=Symbol.for("react.element"),OR=Symbol.for("react.fragment"),DR=Object.prototype.hasOwnProperty,LR=xR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VR={key:!0,ref:!0,__self:!0,__source:!0};function ME(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DR.call(e,r)&&!VR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NR,type:t,key:s,ref:o,props:i,_owner:LR.current}}Tc.Fragment=OR;Tc.jsx=ME;Tc.jsxs=ME;kE.exports=Tc;var R=kE.exports,Xd={},UE={exports:{}},Ht={},FE={exports:{}},jE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var te=z.length;z.push(X);e:for(;0<te;){var pe=te-1>>>1,Ie=z[pe];if(0<i(Ie,X))z[pe]=X,z[te]=Ie,te=pe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],te=z.pop();if(te!==X){z[0]=te;e:for(var pe=0,Ie=z.length,qt=Ie>>>1;pe<qt;){var He=2*(pe+1)-1,hi=z[He],an=He+1,dr=z[an];if(0>i(hi,te))an<Ie&&0>i(dr,hi)?(z[pe]=dr,z[an]=te,pe=an):(z[pe]=hi,z[He]=te,pe=He);else if(an<Ie&&0>i(dr,te))z[pe]=dr,z[an]=te,pe=an;else break e}}return X}function i(z,X){var te=z.sortIndex-X.sortIndex;return te!==0?te:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,E=!1,b=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=z)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function L(z){if(P=!1,S(z),!b)if(n(u)!==null)b=!0,Rt(U);else{var X=n(c);X!==null&&on(L,X.startTime-z)}}function U(z,X){b=!1,P&&(P=!1,w(y),y=-1),E=!0;var te=m;try{for(S(X),f=n(u);f!==null&&(!(f.expirationTime>X)||z&&!C());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,m=f.priorityLevel;var Ie=pe(f.expirationTime<=X);X=t.unstable_now(),typeof Ie=="function"?f.callback=Ie:f===n(u)&&r(u),S(X)}else r(u);f=n(u)}if(f!==null)var qt=!0;else{var He=n(c);He!==null&&on(L,He.startTime-X),qt=!1}return qt}finally{f=null,m=te,E=!1}}var j=!1,I=null,y=-1,T=5,A=-1;function C(){return!(t.unstable_now()-A<T)}function x(){if(I!==null){var z=t.unstable_now();A=z;var X=!0;try{X=I(!0,z)}finally{X?v():(j=!1,I=null)}}else j=!1}var v;if(typeof _=="function")v=function(){_(x)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ie=K.port2;K.port1.onmessage=x,v=function(){ie.postMessage(null)}}else v=function(){k(x,0)};function Rt(z){I=z,j||(j=!0,v())}function on(z,X){y=k(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){b||E||(b=!0,Rt(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var te=m;m=X;try{return z()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=m;m=z;try{return X()}finally{m=te}},t.unstable_scheduleCallback=function(z,X,te){var pe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?pe+te:pe):te=pe,z){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=te+Ie,z={id:d++,callback:X,priorityLevel:z,startTime:te,expirationTime:Ie,sortIndex:-1},te>pe?(z.sortIndex=te,e(c,z),n(u)===null&&z===n(c)&&(P?(w(y),y=-1):P=!0,on(L,te-pe))):(z.sortIndex=Ie,e(u,z),b||E||(b=!0,Rt(U))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var X=m;return function(){var te=m;m=X;try{return z.apply(this,arguments)}finally{m=te}}}})(jE);FE.exports=jE;var MR=FE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UR=O,zt=MR;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $E=new Set,wa={};function Ki(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(wa[t]=e,t=0;t<e.length;t++)$E.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,FR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ky={},Gy={};function jR(t){return Zd.call(Gy,t)?!0:Zd.call(Ky,t)?!1:FR.test(t)?Gy[t]=!0:(Ky[t]=!0,!1)}function $R(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BR(t,e,n,r){if(e===null||typeof e>"u"||$R(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lp=/[\-:]([a-z])/g;function Vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lp,Vp);ot[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lp,Vp);ot[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lp,Vp);ot[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mp(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BR(e,n,i,r)&&(n=null),r||i===null?jR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=UR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pl=Symbol.for("react.element"),ds=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),BE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),Fp=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.suspense_list"),jp=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),HE=Symbol.for("react.offscreen"),Qy=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=Qy&&t[Qy]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Qh;function Wo(t){if(Qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qh=e&&e[1]||""}return`
`+Qh+t}var Yh=!1;function Jh(t,e){if(!t||Yh)return"";Yh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Yh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function zR(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Jh(t.type,!1),t;case 11:return t=Jh(t.type.render,!1),t;case 1:return t=Jh(t.type,!0),t;default:return""}}function rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case ds:return"Portal";case ef:return"Profiler";case Up:return"StrictMode";case tf:return"Suspense";case nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zE:return(t.displayName||"Context")+".Consumer";case BE:return(t._context.displayName||"Context")+".Provider";case Fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jp:return e=t.displayName||null,e!==null?e:rf(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return rf(t(e))}catch{}}return null}function HR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rf(e);case 8:return e===Up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function WE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WR(t){var e=WE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cl(t){t._valueTracker||(t._valueTracker=WR(t))}function qE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=WE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sf(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function KE(t,e){e=e.checked,e!=null&&Mp(t,"checked",e,!1)}function of(t,e){KE(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?af(t,e.type,n):e.hasOwnProperty("defaultValue")&&af(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function af(t,e,n){(e!=="number"||Pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qo=Array.isArray;function Ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(qo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function GE(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function QE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?QE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bl,YE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bl=bl||document.createElement("div"),bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qR=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){qR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function JE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function XE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=JE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KR=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(t,e){if(e){if(KR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var df=null;function $p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,As=null,Rs=null;function e_(t){if(t=rl(t)){if(typeof ff!="function")throw Error(F(280));var e=t.stateNode;e&&(e=kc(e),ff(t.stateNode,t.type,e))}}function ZE(t){As?Rs?Rs.push(t):Rs=[t]:As=t}function e0(){if(As){var t=As,e=Rs;if(Rs=As=null,e_(t),e)for(t=0;t<e.length;t++)e_(e[t])}}function t0(t,e){return t(e)}function n0(){}var Xh=!1;function r0(t,e,n){if(Xh)return t(e,n);Xh=!0;try{return t0(t,e,n)}finally{Xh=!1,(As!==null||Rs!==null)&&(n0(),e0())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var r=kc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var pf=!1;if(Jn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){pf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{pf=!1}function GR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ra=!1,Cu=null,bu=!1,mf=null,QR={onError:function(t){ra=!0,Cu=t}};function YR(t,e,n,r,i,s,o,l,u){ra=!1,Cu=null,GR.apply(QR,arguments)}function JR(t,e,n,r,i,s,o,l,u){if(YR.apply(this,arguments),ra){if(ra){var c=Cu;ra=!1,Cu=null}else throw Error(F(198));bu||(bu=!0,mf=c)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function t_(t){if(Gi(t)!==t)throw Error(F(188))}function XR(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return t_(i),t;if(s===r)return t_(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function s0(t){return t=XR(t),t!==null?o0(t):null}function o0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o0(t);if(e!==null)return e;t=t.sibling}return null}var a0=zt.unstable_scheduleCallback,n_=zt.unstable_cancelCallback,ZR=zt.unstable_shouldYield,ek=zt.unstable_requestPaint,Ve=zt.unstable_now,tk=zt.unstable_getCurrentPriorityLevel,Bp=zt.unstable_ImmediatePriority,l0=zt.unstable_UserBlockingPriority,xu=zt.unstable_NormalPriority,nk=zt.unstable_LowPriority,u0=zt.unstable_IdlePriority,Ic=null,bn=null;function rk(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Ic,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:ok,ik=Math.log,sk=Math.LN2;function ok(t){return t>>>=0,t===0?32:31-(ik(t)/sk|0)|0}var xl=64,Nl=4194304;function Ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ko(l):(s&=o,s!==0&&(r=Ko(s)))}else o=n&~i,o!==0?r=Ko(o):s!==0&&(r=Ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function ak(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=ak(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c0(){var t=xl;return xl<<=1,!(xl&4194240)&&(xl=64),t}function Zh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function uk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function h0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d0,Hp,f0,p0,m0,yf=!1,Ol=[],Lr=null,Vr=null,Mr=null,Ia=new Map,Sa=new Map,Ir=[],ck="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r_(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Do(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hk(t,e,n,r,i){switch(e){case"focusin":return Lr=Do(Lr,t,e,n,r,i),!0;case"dragenter":return Vr=Do(Vr,t,e,n,r,i),!0;case"mouseover":return Mr=Do(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ia.set(s,Do(Ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sa.set(s,Do(Sa.get(s)||null,t,e,n,r,i)),!0}return!1}function g0(t){var e=Ei(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=i0(n),e!==null){t.blockedOn=e,m0(t.priority,function(){f0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);df=r,n.target.dispatchEvent(r),df=null}else return e=rl(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function i_(t,e,n){nu(t)&&n.delete(e)}function dk(){yf=!1,Lr!==null&&nu(Lr)&&(Lr=null),Vr!==null&&nu(Vr)&&(Vr=null),Mr!==null&&nu(Mr)&&(Mr=null),Ia.forEach(i_),Sa.forEach(i_)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,dk)))}function Aa(t){function e(i){return Lo(i,t)}if(0<Ol.length){Lo(Ol[0],t);for(var n=1;n<Ol.length;n++){var r=Ol[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&Lo(Lr,t),Vr!==null&&Lo(Vr,t),Mr!==null&&Lo(Mr,t),Ia.forEach(e),Sa.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)g0(n),n.blockedOn===null&&Ir.shift()}var ks=ur.ReactCurrentBatchConfig,Ou=!0;function fk(t,e,n,r){var i=fe,s=ks.transition;ks.transition=null;try{fe=1,Wp(t,e,n,r)}finally{fe=i,ks.transition=s}}function pk(t,e,n,r){var i=fe,s=ks.transition;ks.transition=null;try{fe=4,Wp(t,e,n,r)}finally{fe=i,ks.transition=s}}function Wp(t,e,n,r){if(Ou){var i=_f(t,e,n,r);if(i===null)ud(t,e,r,Du,n),r_(t,r);else if(hk(i,t,e,n,r))r.stopPropagation();else if(r_(t,r),e&4&&-1<ck.indexOf(t)){for(;i!==null;){var s=rl(i);if(s!==null&&d0(s),s=_f(t,e,n,r),s===null&&ud(t,e,r,Du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ud(t,e,r,null,n)}}var Du=null;function _f(t,e,n,r){if(Du=null,t=$p(r),t=Ei(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Du=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tk()){case Bp:return 1;case l0:return 4;case xu:case nk:return 16;case u0:return 536870912;default:return 16}default:return 16}}var br=null,qp=null,ru=null;function _0(){if(ru)return ru;var t,e=qp,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ru=i.slice(t,1<r?1-r:void 0)}function iu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function s_(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dl:s_,this.isPropagationStopped=s_,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=Wt(Zs),nl=ke({},Zs,{view:0,detail:0}),mk=Wt(nl),ed,td,Vo,Sc=ke({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(ed=t.screenX-Vo.screenX,td=t.screenY-Vo.screenY):td=ed=0,Vo=t),ed)},movementY:function(t){return"movementY"in t?t.movementY:td}}),o_=Wt(Sc),gk=ke({},Sc,{dataTransfer:0}),yk=Wt(gk),_k=ke({},nl,{relatedTarget:0}),nd=Wt(_k),vk=ke({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),wk=Wt(vk),Ek=ke({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tk=Wt(Ek),Ik=ke({},Zs,{data:0}),a_=Wt(Ik),Sk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ak={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rk[t])?!!e[t]:!1}function Gp(){return kk}var Pk=ke({},nl,{key:function(t){if(t.key){var e=Sk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=iu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ak[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gp,charCode:function(t){return t.type==="keypress"?iu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?iu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ck=Wt(Pk),bk=ke({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l_=Wt(bk),xk=ke({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gp}),Nk=Wt(xk),Ok=ke({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dk=Wt(Ok),Lk=ke({},Sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vk=Wt(Lk),Mk=[9,13,27,32],Qp=Jn&&"CompositionEvent"in window,ia=null;Jn&&"documentMode"in document&&(ia=document.documentMode);var Uk=Jn&&"TextEvent"in window&&!ia,v0=Jn&&(!Qp||ia&&8<ia&&11>=ia),u_=String.fromCharCode(32),c_=!1;function w0(t,e){switch(t){case"keyup":return Mk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Fk(t,e){switch(t){case"compositionend":return E0(e);case"keypress":return e.which!==32?null:(c_=!0,u_);case"textInput":return t=e.data,t===u_&&c_?null:t;default:return null}}function jk(t,e){if(ps)return t==="compositionend"||!Qp&&w0(t,e)?(t=_0(),ru=qp=br=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v0&&e.locale!=="ko"?null:e.data;default:return null}}var $k={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$k[t.type]:e==="textarea"}function T0(t,e,n,r){ZE(r),e=Lu(e,"onChange"),0<e.length&&(n=new Kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sa=null,Ra=null;function Bk(t){O0(t,0)}function Ac(t){var e=ys(t);if(qE(e))return t}function zk(t,e){if(t==="change")return e}var I0=!1;if(Jn){var rd;if(Jn){var id="oninput"in document;if(!id){var d_=document.createElement("div");d_.setAttribute("oninput","return;"),id=typeof d_.oninput=="function"}rd=id}else rd=!1;I0=rd&&(!document.documentMode||9<document.documentMode)}function f_(){sa&&(sa.detachEvent("onpropertychange",S0),Ra=sa=null)}function S0(t){if(t.propertyName==="value"&&Ac(Ra)){var e=[];T0(e,Ra,t,$p(t)),r0(Bk,e)}}function Hk(t,e,n){t==="focusin"?(f_(),sa=e,Ra=n,sa.attachEvent("onpropertychange",S0)):t==="focusout"&&f_()}function Wk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(Ra)}function qk(t,e){if(t==="click")return Ac(e)}function Kk(t,e){if(t==="input"||t==="change")return Ac(e)}function Gk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:Gk;function ka(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zd.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function p_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function m_(t,e){var n=p_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=p_(n)}}function A0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=Pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pu(t.document)}return e}function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qk(t){var e=R0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(r!==null&&Yp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=m_(n,s);var o=m_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yk=Jn&&"documentMode"in document&&11>=document.documentMode,ms=null,vf=null,oa=null,wf=!1;function g_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||ms==null||ms!==Pu(r)||(r=ms,"selectionStart"in r&&Yp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oa&&ka(oa,r)||(oa=r,r=Lu(vf,"onSelect"),0<r.length&&(e=new Kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ms)))}function Ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},sd={},k0={};Jn&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Rc(t){if(sd[t])return sd[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return sd[t]=e[n];return t}var P0=Rc("animationend"),C0=Rc("animationiteration"),b0=Rc("animationstart"),x0=Rc("transitionend"),N0=new Map,y_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(t,e){N0.set(t,e),Ki(e,[t])}for(var od=0;od<y_.length;od++){var ad=y_[od],Jk=ad.toLowerCase(),Xk=ad[0].toUpperCase()+ad.slice(1);ri(Jk,"on"+Xk)}ri(P0,"onAnimationEnd");ri(C0,"onAnimationIteration");ri(b0,"onAnimationStart");ri("dblclick","onDoubleClick");ri("focusin","onFocus");ri("focusout","onBlur");ri(x0,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function __(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,JR(r,e,void 0,t),t.currentTarget=null}function O0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;__(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;__(i,l,c),s=u}}}if(bu)throw t=mf,bu=!1,mf=null,t}function we(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var r=t+"__bubble";n.has(r)||(D0(e,t,2,!1),n.add(r))}function ld(t,e,n){var r=0;e&&(r|=4),D0(n,t,r,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[Vl]){t[Vl]=!0,$E.forEach(function(n){n!=="selectionchange"&&(Zk.has(n)||ld(n,!1,t),ld(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,ld("selectionchange",!1,e))}}function D0(t,e,n,r){switch(y0(e)){case 1:var i=fk;break;case 4:i=pk;break;default:i=Wp}n=i.bind(null,e,n,t),i=void 0,!pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ud(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ei(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}r0(function(){var c=s,d=$p(n),f=[];e:{var m=N0.get(t);if(m!==void 0){var E=Kp,b=t;switch(t){case"keypress":if(iu(n)===0)break e;case"keydown":case"keyup":E=Ck;break;case"focusin":b="focus",E=nd;break;case"focusout":b="blur",E=nd;break;case"beforeblur":case"afterblur":E=nd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=o_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=yk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Nk;break;case P0:case C0:case b0:E=wk;break;case x0:E=Dk;break;case"scroll":E=mk;break;case"wheel":E=Vk;break;case"copy":case"cut":case"paste":E=Tk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=l_}var P=(e&4)!==0,k=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,S;_!==null;){S=_;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,w!==null&&(L=Ta(_,w),L!=null&&P.push(Ca(_,L,S)))),k)break;_=_.return}0<P.length&&(m=new E(m,b,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==df&&(b=n.relatedTarget||n.fromElement)&&(Ei(b)||b[Xn]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(b=n.relatedTarget||n.toElement,E=c,b=b?Ei(b):null,b!==null&&(k=Gi(b),b!==k||b.tag!==5&&b.tag!==6)&&(b=null)):(E=null,b=c),E!==b)){if(P=o_,L="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=l_,L="onPointerLeave",w="onPointerEnter",_="pointer"),k=E==null?m:ys(E),S=b==null?m:ys(b),m=new P(L,_+"leave",E,n,d),m.target=k,m.relatedTarget=S,L=null,Ei(d)===c&&(P=new P(w,_+"enter",b,n,d),P.target=S,P.relatedTarget=k,L=P),k=L,E&&b)t:{for(P=E,w=b,_=0,S=P;S;S=os(S))_++;for(S=0,L=w;L;L=os(L))S++;for(;0<_-S;)P=os(P),_--;for(;0<S-_;)w=os(w),S--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=os(P),w=os(w)}P=null}else P=null;E!==null&&v_(f,m,E,P,!1),b!==null&&k!==null&&v_(f,k,b,P,!0)}}e:{if(m=c?ys(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var U=zk;else if(h_(m))if(I0)U=Kk;else{U=Wk;var j=Hk}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=qk);if(U&&(U=U(t,c))){T0(f,U,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&af(m,"number",m.value)}switch(j=c?ys(c):window,t){case"focusin":(h_(j)||j.contentEditable==="true")&&(ms=j,vf=c,oa=null);break;case"focusout":oa=vf=ms=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,g_(f,n,d);break;case"selectionchange":if(Yk)break;case"keydown":case"keyup":g_(f,n,d)}var I;if(Qp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ps?w0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(v0&&n.locale!=="ko"&&(ps||y!=="onCompositionStart"?y==="onCompositionEnd"&&ps&&(I=_0()):(br=d,qp="value"in br?br.value:br.textContent,ps=!0)),j=Lu(c,y),0<j.length&&(y=new a_(y,t,null,n,d),f.push({event:y,listeners:j}),I?y.data=I:(I=E0(n),I!==null&&(y.data=I)))),(I=Uk?Fk(t,n):jk(t,n))&&(c=Lu(c,"onBeforeInput"),0<c.length&&(d=new a_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}O0(f,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ta(t,n),s!=null&&r.unshift(Ca(t,s,i)),s=Ta(t,e),s!=null&&r.push(Ca(t,s,i))),t=t.return}return r}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function v_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ta(n,s),u!=null&&o.unshift(Ca(n,u,l))):i||(u=Ta(n,s),u!=null&&o.push(Ca(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eP=/\r\n?/g,tP=/\u0000|\uFFFD/g;function w_(t){return(typeof t=="string"?t:""+t).replace(eP,`
`).replace(tP,"")}function Ml(t,e,n){if(e=w_(e),w_(t)!==e&&n)throw Error(F(425))}function Vu(){}var Ef=null,Tf=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,nP=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,rP=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(t){return E_.resolve(null).then(t).catch(iP)}:Sf;function iP(t){setTimeout(function(){throw t})}function cd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function T_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+eo,ba="__reactProps$"+eo,Xn="__reactContainer$"+eo,Af="__reactEvents$"+eo,sP="__reactListeners$"+eo,oP="__reactHandles$"+eo;function Ei(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=T_(t);t!==null;){if(n=t[Rn])return n;t=T_(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[Rn]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function kc(t){return t[ba]||null}var Rf=[],_s=-1;function ii(t){return{current:t}}function Te(t){0>_s||(t.current=Rf[_s],Rf[_s]=null,_s--)}function _e(t,e){_s++,Rf[_s]=t.current,t.current=e}var Qr={},mt=ii(Qr),xt=ii(!1),Oi=Qr;function js(t,e){var n=t.type.contextTypes;if(!n)return Qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function Mu(){Te(xt),Te(mt)}function I_(t,e,n){if(mt.current!==Qr)throw Error(F(168));_e(mt,e),_e(xt,n)}function L0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,HR(t)||"Unknown",i));return ke({},n,r)}function Uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,Oi=mt.current,_e(mt,t),_e(xt,xt.current),!0}function S_(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=L0(t,e,Oi),r.__reactInternalMemoizedMergedChildContext=t,Te(xt),Te(mt),_e(mt,t)):Te(xt),_e(xt,n)}var zn=null,Pc=!1,hd=!1;function V0(t){zn===null?zn=[t]:zn.push(t)}function aP(t){Pc=!0,V0(t)}function si(){if(!hd&&zn!==null){hd=!0;var t=0,e=fe;try{var n=zn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,Pc=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),a0(Bp,si),i}finally{fe=e,hd=!1}}return null}var vs=[],ws=0,Fu=null,ju=0,Qt=[],Yt=0,Di=null,Hn=1,Wn="";function _i(t,e){vs[ws++]=ju,vs[ws++]=Fu,Fu=t,ju=e}function M0(t,e,n){Qt[Yt++]=Hn,Qt[Yt++]=Wn,Qt[Yt++]=Di,Di=t;var r=Hn;t=Wn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-pn(e)+i|n<<i|r,Wn=s+t}else Hn=1<<s|n<<i|r,Wn=t}function Jp(t){t.return!==null&&(_i(t,1),M0(t,1,0))}function Xp(t){for(;t===Fu;)Fu=vs[--ws],vs[ws]=null,ju=vs[--ws],vs[ws]=null;for(;t===Di;)Di=Qt[--Yt],Qt[Yt]=null,Wn=Qt[--Yt],Qt[Yt]=null,Hn=Qt[--Yt],Qt[Yt]=null}var Bt=null,Ft=null,Se=!1,hn=null;function U0(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function A_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ft=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:Hn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ft=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pf(t){if(Se){var e=Ft;if(e){var n=e;if(!A_(t,e)){if(kf(t))throw Error(F(418));e=Ur(n.nextSibling);var r=Bt;e&&A_(t,e)?U0(r,n):(t.flags=t.flags&-4097|2,Se=!1,Bt=t)}}else{if(kf(t))throw Error(F(418));t.flags=t.flags&-4097|2,Se=!1,Bt=t}}}function R_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Ul(t){if(t!==Bt)return!1;if(!Se)return R_(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=Ft)){if(kf(t))throw F0(),Error(F(418));for(;e;)U0(t,e),e=Ur(e.nextSibling)}if(R_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Bt?Ur(t.stateNode.nextSibling):null;return!0}function F0(){for(var t=Ft;t;)t=Ur(t.nextSibling)}function $s(){Ft=Bt=null,Se=!1}function Zp(t){hn===null?hn=[t]:hn.push(t)}var lP=ur.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Fl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function k_(t){var e=t._init;return e(t._payload)}function j0(t){function e(w,_){if(t){var S=w.deletions;S===null?(w.deletions=[_],w.flags|=16):S.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=Br(w,_),w.index=0,w.sibling=null,w}function s(w,_,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<_?(w.flags|=2,_):S):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,S,L){return _===null||_.tag!==6?(_=_d(S,w.mode,L),_.return=w,_):(_=i(_,S),_.return=w,_)}function u(w,_,S,L){var U=S.type;return U===fs?d(w,_,S.props.children,L,S.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Er&&k_(U)===_.type)?(L=i(_,S.props),L.ref=Mo(w,_,S),L.return=w,L):(L=hu(S.type,S.key,S.props,null,w.mode,L),L.ref=Mo(w,_,S),L.return=w,L)}function c(w,_,S,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=vd(S,w.mode,L),_.return=w,_):(_=i(_,S.children||[]),_.return=w,_)}function d(w,_,S,L,U){return _===null||_.tag!==7?(_=ki(S,w.mode,L,U),_.return=w,_):(_=i(_,S),_.return=w,_)}function f(w,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=_d(""+_,w.mode,S),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pl:return S=hu(_.type,_.key,_.props,null,w.mode,S),S.ref=Mo(w,null,_),S.return=w,S;case ds:return _=vd(_,w.mode,S),_.return=w,_;case Er:var L=_._init;return f(w,L(_._payload),S)}if(qo(_)||No(_))return _=ki(_,w.mode,S,null),_.return=w,_;Fl(w,_)}return null}function m(w,_,S,L){var U=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(w,_,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pl:return S.key===U?u(w,_,S,L):null;case ds:return S.key===U?c(w,_,S,L):null;case Er:return U=S._init,m(w,_,U(S._payload),L)}if(qo(S)||No(S))return U!==null?null:d(w,_,S,L,null);Fl(w,S)}return null}function E(w,_,S,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return w=w.get(S)||null,l(_,w,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Pl:return w=w.get(L.key===null?S:L.key)||null,u(_,w,L,U);case ds:return w=w.get(L.key===null?S:L.key)||null,c(_,w,L,U);case Er:var j=L._init;return E(w,_,S,j(L._payload),U)}if(qo(L)||No(L))return w=w.get(S)||null,d(_,w,L,U,null);Fl(_,L)}return null}function b(w,_,S,L){for(var U=null,j=null,I=_,y=_=0,T=null;I!==null&&y<S.length;y++){I.index>y?(T=I,I=null):T=I.sibling;var A=m(w,I,S[y],L);if(A===null){I===null&&(I=T);break}t&&I&&A.alternate===null&&e(w,I),_=s(A,_,y),j===null?U=A:j.sibling=A,j=A,I=T}if(y===S.length)return n(w,I),Se&&_i(w,y),U;if(I===null){for(;y<S.length;y++)I=f(w,S[y],L),I!==null&&(_=s(I,_,y),j===null?U=I:j.sibling=I,j=I);return Se&&_i(w,y),U}for(I=r(w,I);y<S.length;y++)T=E(I,w,y,S[y],L),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?y:T.key),_=s(T,_,y),j===null?U=T:j.sibling=T,j=T);return t&&I.forEach(function(C){return e(w,C)}),Se&&_i(w,y),U}function P(w,_,S,L){var U=No(S);if(typeof U!="function")throw Error(F(150));if(S=U.call(S),S==null)throw Error(F(151));for(var j=U=null,I=_,y=_=0,T=null,A=S.next();I!==null&&!A.done;y++,A=S.next()){I.index>y?(T=I,I=null):T=I.sibling;var C=m(w,I,A.value,L);if(C===null){I===null&&(I=T);break}t&&I&&C.alternate===null&&e(w,I),_=s(C,_,y),j===null?U=C:j.sibling=C,j=C,I=T}if(A.done)return n(w,I),Se&&_i(w,y),U;if(I===null){for(;!A.done;y++,A=S.next())A=f(w,A.value,L),A!==null&&(_=s(A,_,y),j===null?U=A:j.sibling=A,j=A);return Se&&_i(w,y),U}for(I=r(w,I);!A.done;y++,A=S.next())A=E(I,w,y,A.value,L),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?y:A.key),_=s(A,_,y),j===null?U=A:j.sibling=A,j=A);return t&&I.forEach(function(x){return e(w,x)}),Se&&_i(w,y),U}function k(w,_,S,L){if(typeof S=="object"&&S!==null&&S.type===fs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Pl:e:{for(var U=S.key,j=_;j!==null;){if(j.key===U){if(U=S.type,U===fs){if(j.tag===7){n(w,j.sibling),_=i(j,S.props.children),_.return=w,w=_;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Er&&k_(U)===j.type){n(w,j.sibling),_=i(j,S.props),_.ref=Mo(w,j,S),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}S.type===fs?(_=ki(S.props.children,w.mode,L,S.key),_.return=w,w=_):(L=hu(S.type,S.key,S.props,null,w.mode,L),L.ref=Mo(w,_,S),L.return=w,w=L)}return o(w);case ds:e:{for(j=S.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(w,_.sibling),_=i(_,S.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=vd(S,w.mode,L),_.return=w,w=_}return o(w);case Er:return j=S._init,k(w,_,j(S._payload),L)}if(qo(S))return b(w,_,S,L);if(No(S))return P(w,_,S,L);Fl(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,S),_.return=w,w=_):(n(w,_),_=_d(S,w.mode,L),_.return=w,w=_),o(w)):n(w,_)}return k}var Bs=j0(!0),$0=j0(!1),$u=ii(null),Bu=null,Es=null,em=null;function tm(){em=Es=Bu=null}function nm(t){var e=$u.current;Te($u),t._currentValue=e}function Cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Bu=t,em=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(em!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Bu===null)throw Error(F(308));Es=t,Bu.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Ti=null;function rm(t){Ti===null?Ti=[t]:Ti.push(t)}function B0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}function P_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zu(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,P=l;switch(m=e,E=n,P.tag){case 1:if(b=P.payload,typeof b=="function"){f=b.call(E,f,m);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=P.payload,m=typeof b=="function"?b.call(E,f,m):b,m==null)break e;f=ke({},f,m);break e;case 2:Tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=f}}function C_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var il={},xn=ii(il),xa=ii(il),Na=ii(il);function Ii(t){if(t===il)throw Error(F(174));return t}function sm(t,e){switch(_e(Na,e),_e(xa,t),_e(xn,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}Te(xn),_e(xn,e)}function zs(){Te(xn),Te(xa),Te(Na)}function H0(t){Ii(Na.current);var e=Ii(xn.current),n=uf(e,t.type);e!==n&&(_e(xa,t),_e(xn,n))}function om(t){xa.current===t&&(Te(xn),Te(xa))}var Ae=ii(0);function Hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dd=[];function am(){for(var t=0;t<dd.length;t++)dd[t]._workInProgressVersionPrimary=null;dd.length=0}var ou=ur.ReactCurrentDispatcher,fd=ur.ReactCurrentBatchConfig,Li=0,Re=null,qe=null,Ze=null,Wu=!1,aa=!1,Oa=0,uP=0;function ut(){throw Error(F(321))}function lm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function um(t,e,n,r,i,s){if(Li=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ou.current=t===null||t.memoizedState===null?fP:pP,t=n(r,i),aa){s=0;do{if(aa=!1,Oa=0,25<=s)throw Error(F(301));s+=1,Ze=qe=null,e.updateQueue=null,ou.current=mP,t=n(r,i)}while(aa)}if(ou.current=qu,e=qe!==null&&qe.next!==null,Li=0,Ze=qe=Re=null,Wu=!1,e)throw Error(F(300));return t}function cm(){var t=Oa!==0;return Oa=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Re.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function nn(){if(qe===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Ze===null?Re.memoizedState:Ze.next;if(e!==null)Ze=e,qe=t;else{if(t===null)throw Error(F(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ze===null?Re.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Da(t,e){return typeof e=="function"?e(t):e}function pd(t){var e=nn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Li&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Re.lanes|=d,Vi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,yn(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function md(t){var e=nn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function W0(){}function q0(t,e){var n=Re,r=nn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,hm(Q0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,La(9,G0.bind(null,n,r,i,e),void 0,null),et===null)throw Error(F(349));Li&30||K0(n,e,i)}return i}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,r){e.value=n,e.getSnapshot=r,Y0(e)&&J0(t)}function Q0(t,e,n){return n(function(){Y0(e)&&J0(t)})}function Y0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function J0(t){var e=Zn(t,1);e!==null&&mn(e,t,1,-1)}function b_(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=dP.bind(null,Re,t),[e.memoizedState,t]}function La(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function X0(){return nn().memoizedState}function au(t,e,n,r){var i=Sn();Re.flags|=t,i.memoizedState=La(1|e,n,void 0,r===void 0?null:r)}function Cc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&lm(r,o.deps)){i.memoizedState=La(e,n,s,r);return}}Re.flags|=t,i.memoizedState=La(1|e,n,s,r)}function x_(t,e){return au(8390656,8,t,e)}function hm(t,e){return Cc(2048,8,t,e)}function Z0(t,e){return Cc(4,2,t,e)}function eT(t,e){return Cc(4,4,t,e)}function tT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nT(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4,4,tT.bind(null,e,t),n)}function dm(){}function rT(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iT(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sT(t,e,n){return Li&21?(yn(n,e)||(n=c0(),Re.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function cP(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=fd.transition;fd.transition={};try{t(!1),e()}finally{fe=n,fd.transition=r}}function oT(){return nn().memoizedState}function hP(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aT(t))lT(e,n);else if(n=B0(t,e,n,r),n!==null){var i=Et();mn(n,t,r,i),uT(n,e,r)}}function dP(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aT(t))lT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,yn(l,o)){var u=e.interleaved;u===null?(i.next=i,rm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=B0(t,e,i,r),n!==null&&(i=Et(),mn(n,t,r,i),uT(n,e,r))}}function aT(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function lT(t,e){aa=Wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zp(t,n)}}var qu={readContext:tn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},fP={readContext:tn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:x_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,au(4194308,4,tT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return au(4194308,4,t,e)},useInsertionEffect:function(t,e){return au(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hP.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:b_,useDebugValue:dm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=b_(!1),e=t[0];return t=cP.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=Sn();if(Se){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),et===null)throw Error(F(349));Li&30||K0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,x_(Q0.bind(null,r,s,t),[t]),r.flags|=2048,La(9,G0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=et.identifierPrefix;if(Se){var n=Wn,r=Hn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pP={readContext:tn,useCallback:rT,useContext:tn,useEffect:hm,useImperativeHandle:nT,useInsertionEffect:Z0,useLayoutEffect:eT,useMemo:iT,useReducer:pd,useRef:X0,useState:function(){return pd(Da)},useDebugValue:dm,useDeferredValue:function(t){var e=nn();return sT(e,qe.memoizedState,t)},useTransition:function(){var t=pd(Da)[0],e=nn().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:q0,useId:oT,unstable_isNewReconciler:!1},mP={readContext:tn,useCallback:rT,useContext:tn,useEffect:hm,useImperativeHandle:nT,useInsertionEffect:Z0,useLayoutEffect:eT,useMemo:iT,useReducer:md,useRef:X0,useState:function(){return md(Da)},useDebugValue:dm,useDeferredValue:function(t){var e=nn();return qe===null?e.memoizedState=t:sT(e,qe.memoizedState,t)},useTransition:function(){var t=md(Da)[0],e=nn().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:q0,useId:oT,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=$r(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(mn(e,t,i,r),su(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=$r(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(mn(e,t,i,r),su(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=$r(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(mn(e,t,r,n),su(e,t,r))}};function N_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ka(n,r)||!ka(i,s):!0}function cT(t,e,n){var r=!1,i=Qr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Nt(e)?Oi:mt.current,r=e.contextTypes,s=(r=r!=null)?js(t,i):Qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function O_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function xf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},im(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Nt(e)?Oi:mt.current,i.context=js(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bc.enqueueReplaceState(i,i.state,null),zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",r=e;do n+=zR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gP=typeof WeakMap=="function"?WeakMap:Map;function hT(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gu||(Gu=!0,Bf=r),Nf(t,e)},n}function dT(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nf(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function D_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bP.bind(null,t,e,n),e.then(t,t))}function L_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function V_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var yP=ur.ReactCurrentOwner,bt=!1;function wt(t,e,n,r){e.child=t===null?$0(e,null,n,r):Bs(e,t.child,n,r)}function M_(t,e,n,r,i){n=n.render;var s=e.ref;return Ps(e,i),r=um(t,e,n,r,s,i),n=cm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Se&&n&&Jp(e),e.flags|=1,wt(t,e,r,i),e.child)}function U_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fT(t,e,s,r,i)):(t=hu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function fT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ka(s,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,er(t,e,i)}return Of(t,e,n,r,i)}function pT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Is,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Is,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Is,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Is,Ut),Ut|=r;return wt(t,e,i,n),e.child}function mT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,r,i){var s=Nt(n)?Oi:mt.current;return s=js(e,s),Ps(e,i),n=um(t,e,n,r,s,i),r=cm(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Se&&r&&Jp(e),e.flags|=1,wt(t,e,n,i),e.child)}function F_(t,e,n,r,i){if(Nt(n)){var s=!0;Uu(e)}else s=!1;if(Ps(e,i),e.stateNode===null)lu(t,e),cT(e,n,r),xf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=Nt(n)?Oi:mt.current,c=js(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&O_(e,o,r,c),Tr=!1;var m=e.memoizedState;o.state=m,zu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||xt.current||Tr?(typeof d=="function"&&(bf(e,n,d,r),u=e.memoizedState),(l=Tr||N_(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:un(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=Nt(n)?Oi:mt.current,u=js(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&O_(e,o,r,u),Tr=!1,m=e.memoizedState,o.state=m,zu(e,r,o,i);var b=e.memoizedState;l!==f||m!==b||xt.current||Tr?(typeof E=="function"&&(bf(e,n,E,r),b=e.memoizedState),(c=Tr||N_(e,n,c,r,m,b,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,s,i)}function Df(t,e,n,r,i,s){mT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&S_(e,n,!1),er(t,e,s);r=e.stateNode,yP.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&S_(e,n,!0),e.child}function gT(t){var e=t.stateNode;e.pendingContext?I_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&I_(t,e.context,!1),sm(t,e.containerInfo)}function j_(t,e,n,r,i){return $s(),Zp(i),e.flags|=256,wt(t,e,n,r),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function yT(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ae,i&1),t===null)return Pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Lf,t):fm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _P(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Br(l,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fm(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,r){return r!==null&&Zp(r),Bs(e,t.child,null,n),t=fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _P(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gd(Error(F(422))),jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oc({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Lf,s);if(!(e.mode&1))return jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=gd(s,r,void 0),jl(t,e,o,r)}if(l=(o&t.childLanes)!==0,bt||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),mn(r,t,i,-1))}return vm(),r=gd(Error(F(421))),jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Ur(i.nextSibling),Bt=e,Se=!0,hn=null,t!==null&&(Qt[Yt++]=Hn,Qt[Yt++]=Wn,Qt[Yt++]=Di,Hn=t.id,Wn=t.overflow,Di=e),e=fm(e,r.children),e.flags|=4096,e)}function $_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cf(t.return,e,n)}function yd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _T(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$_(t,n,e);else if(t.tag===19)$_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yd(e,!0,n,null,s);break;case"together":yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vP(t,e,n){switch(e.tag){case 3:gT(e),$s();break;case 5:H0(e);break;case 1:Nt(e.type)&&Uu(e);break;case 4:sm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e($u,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?yT(t,e,n):(_e(Ae,Ae.current&1),t=er(t,e,n),t!==null?t.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _T(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,pT(t,e,n)}return er(t,e,n)}var vT,Mf,wT,ET;vT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};wT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(xn.current);var s=null;switch(n){case"input":i=sf(t,i),r=sf(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=lf(t,i),r=lf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vu)}cf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ET=function(t,e,n,r){n!==r&&(e.flags|=4)};function Uo(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wP(t,e,n){var r=e.pendingProps;switch(Xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Nt(e.type)&&Mu(),ct(e),null;case 3:return r=e.stateNode,zs(),Te(xt),Te(mt),am(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Wf(hn),hn=null))),Mf(t,e),ct(e),null;case 5:om(e);var i=Ii(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)wT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ct(e),null}if(t=Ii(xn.current),Ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[ba]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Go.length;i++)we(Go[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Yy(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Xy(r,s),we("invalid",r)}cf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ml(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ml(r.textContent,l,t),i=["children",""+l]):wa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Cl(r),Jy(r,s,!0);break;case"textarea":Cl(r),Zy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=QE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[ba]=r,vT(t,e,!1,!1),e.stateNode=t;e:{switch(o=hf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Go.length;i++)we(Go[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Yy(t,r),i=sf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),we("invalid",t);break;case"textarea":Xy(t,r),i=lf(t,r),we("invalid",t);break;default:i=r}cf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?XE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&YE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ea(t,u):typeof u=="number"&&Ea(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&Mp(t,s,u,o))}switch(n){case"input":Cl(t),Jy(t,r,!1);break;case"textarea":Cl(t),Zy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)ET(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ii(Na.current),Ii(xn.current),Ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Ml(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ml(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return ct(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Ft!==null&&e.mode&1&&!(e.flags&128))F0(),$s(),e.flags|=98560,s=!1;else if(s=Ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Rn]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else hn!==null&&(Wf(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ke===0&&(Ke=3):vm())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return zs(),Mf(t,e),t===null&&Pa(e.stateNode.containerInfo),ct(e),null;case 10:return nm(e.type._context),ct(e),null;case 17:return Nt(e.type)&&Mu(),ct(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Uo(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hu(t),o!==null){for(e.flags|=128,Uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>Ws&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return ct(e),null}else 2*Ve()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return _m(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function EP(t,e){switch(Xp(e),e.tag){case 1:return Nt(e.type)&&Mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),Te(xt),Te(mt),am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return om(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return zs(),null;case 10:return nm(e.type._context),null;case 22:case 23:return _m(),null;case 24:return null;default:return null}}var $l=!1,ft=!1,TP=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Uf(t,e,n){try{n()}catch(r){be(t,e,r)}}var B_=!1;function IP(t,e){if(Ef=Ou,t=R0(),Yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},Ou=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var P=b.memoizedProps,k=b.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:un(e.type,P),k);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(L){be(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return b=B_,B_=!1,b}function la(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uf(e,n,s)}i=i.next}while(i!==r)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TT(t){var e=t.alternate;e!==null&&(t.alternate=null,TT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[ba],delete e[Af],delete e[sP],delete e[oP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function IT(t){return t.tag===5||t.tag===3||t.tag===4}function z_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||IT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function $f(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var nt=null,cn=!1;function vr(t,e,n){for(n=n.child;n!==null;)ST(t,e,n),n=n.sibling}function ST(t,e,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Ic,n)}catch{}switch(n.tag){case 5:ft||Ts(n,e);case 6:var r=nt,i=cn;nt=null,vr(t,e,n),nt=r,cn=i,nt!==null&&(cn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(cn?(t=nt,n=n.stateNode,t.nodeType===8?cd(t.parentNode,n):t.nodeType===1&&cd(t,n),Aa(t)):cd(nt,n.stateNode));break;case 4:r=nt,i=cn,nt=n.stateNode.containerInfo,cn=!0,vr(t,e,n),nt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uf(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!ft&&(Ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,vr(t,e,n),ft=r):vr(t,e,n);break;default:vr(t,e,n)}}function H_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TP),e.forEach(function(r){var i=NP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,cn=!1;break e;case 3:nt=l.stateNode.containerInfo,cn=!0;break e;case 4:nt=l.stateNode.containerInfo,cn=!0;break e}l=l.return}if(nt===null)throw Error(F(160));ST(s,o,i),nt=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)AT(e,t),e=e.sibling}function AT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),In(t),r&4){try{la(3,t,t.return),xc(3,t)}catch(P){be(t,t.return,P)}try{la(5,t,t.return)}catch(P){be(t,t.return,P)}}break;case 1:ln(e,t),In(t),r&512&&n!==null&&Ts(n,n.return);break;case 5:if(ln(e,t),In(t),r&512&&n!==null&&Ts(n,n.return),t.flags&32){var i=t.stateNode;try{Ea(i,"")}catch(P){be(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&KE(i,s),hf(l,o);var c=hf(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?XE(i,f):d==="dangerouslySetInnerHTML"?YE(i,f):d==="children"?Ea(i,f):Mp(i,d,f,c)}switch(l){case"input":of(i,s);break;case"textarea":GE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Ss(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ss(i,!!s.multiple,s.defaultValue,!0):Ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[ba]=s}catch(P){be(t,t.return,P)}}break;case 6:if(ln(e,t),In(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){be(t,t.return,P)}}break;case 3:if(ln(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(P){be(t,t.return,P)}break;case 4:ln(e,t),In(t);break;case 13:ln(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gm=Ve())),r&4&&H_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||d,ln(e,t),ft=c):ln(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,E=m.child,m.tag){case 0:case 11:case 14:case 15:la(4,m,m.return);break;case 1:Ts(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(P){be(r,n,P)}}break;case 5:Ts(m,m.return);break;case 22:if(m.memoizedState!==null){q_(f);continue}}E!==null?(E.return=m,q=E):q_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=JE("display",o))}catch(P){be(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){be(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ln(e,t),In(t),r&4&&H_(t);break;case 21:break;default:ln(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(IT(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ea(i,""),r.flags&=-33);var s=z_(t);$f(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=z_(t);jf(t,l,o);break;default:throw Error(F(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SP(t,e,n){q=t,RT(t)}function RT(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$l;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=$l;var c=ft;if($l=o,(ft=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?K_(i):u!==null?(u.return=o,q=u):K_(i);for(;s!==null;)q=s,RT(s),s=s.sibling;q=i,$l=l,ft=c}W_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):W_(t)}}function W_(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&C_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}C_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ft||e.flags&512&&Ff(e)}catch(m){be(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function q_(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function K_(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{Ff(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{Ff(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var AP=Math.ceil,Ku=ur.ReactCurrentDispatcher,pm=ur.ReactCurrentOwner,Zt=ur.ReactCurrentBatchConfig,he=0,et=null,je=null,st=0,Ut=0,Is=ii(0),Ke=0,Va=null,Vi=0,Nc=0,mm=0,ua=null,Pt=null,gm=0,Ws=1/0,$n=null,Gu=!1,Bf=null,jr=null,Bl=!1,xr=null,Qu=0,ca=0,zf=null,uu=-1,cu=0;function Et(){return he&6?Ve():uu!==-1?uu:uu=Ve()}function $r(t){return t.mode&1?he&2&&st!==0?st&-st:lP.transition!==null?(cu===0&&(cu=c0()),cu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t):1}function mn(t,e,n,r){if(50<ca)throw ca=0,zf=null,Error(F(185));tl(t,n,r),(!(he&2)||t!==et)&&(t===et&&(!(he&2)&&(Nc|=n),Ke===4&&Sr(t,st)),Ot(t,r),n===1&&he===0&&!(e.mode&1)&&(Ws=Ve()+500,Pc&&si()))}function Ot(t,e){var n=t.callbackNode;lk(t,e);var r=Nu(t,t===et?st:0);if(r===0)n!==null&&n_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&n_(n),e===1)t.tag===0?aP(G_.bind(null,t)):V0(G_.bind(null,t)),rP(function(){!(he&6)&&si()}),n=null;else{switch(h0(r)){case 1:n=Bp;break;case 4:n=l0;break;case 16:n=xu;break;case 536870912:n=u0;break;default:n=xu}n=DT(n,kT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kT(t,e){if(uu=-1,cu=0,he&6)throw Error(F(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Nu(t,t===et?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yu(t,r);else{e=r;var i=he;he|=2;var s=CT();(et!==t||st!==e)&&($n=null,Ws=Ve()+500,Ri(t,e));do try{PP();break}catch(l){PT(t,l)}while(1);tm(),Ku.current=s,he=i,je!==null?e=0:(et=null,st=0,e=Ke)}if(e!==0){if(e===2&&(i=gf(t),i!==0&&(r=i,e=Hf(t,i))),e===1)throw n=Va,Ri(t,0),Sr(t,r),Ot(t,Ve()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!RP(i)&&(e=Yu(t,r),e===2&&(s=gf(t),s!==0&&(r=s,e=Hf(t,s))),e===1))throw n=Va,Ri(t,0),Sr(t,r),Ot(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:vi(t,Pt,$n);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=gm+500-Ve(),10<e)){if(Nu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sf(vi.bind(null,t,Pt,$n),e);break}vi(t,Pt,$n);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AP(r/1960))-r,10<r){t.timeoutHandle=Sf(vi.bind(null,t,Pt,$n),r);break}vi(t,Pt,$n);break;case 5:vi(t,Pt,$n);break;default:throw Error(F(329))}}}return Ot(t,Ve()),t.callbackNode===n?kT.bind(null,t):null}function Hf(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Ri(t,e).flags|=256),t=Yu(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&Wf(e)),t}function Wf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function RP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~mm,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function G_(t){if(he&6)throw Error(F(327));Cs();var e=Nu(t,0);if(!(e&1))return Ot(t,Ve()),null;var n=Yu(t,e);if(t.tag!==0&&n===2){var r=gf(t);r!==0&&(e=r,n=Hf(t,r))}if(n===1)throw n=Va,Ri(t,0),Sr(t,e),Ot(t,Ve()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,Pt,$n),Ot(t,Ve()),null}function ym(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Ws=Ve()+500,Pc&&si())}}function Mi(t){xr!==null&&xr.tag===0&&!(he&6)&&Cs();var e=he;he|=1;var n=Zt.transition,r=fe;try{if(Zt.transition=null,fe=1,t)return t()}finally{fe=r,Zt.transition=n,he=e,!(he&6)&&si()}}function _m(){Ut=Is.current,Te(Is)}function Ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nP(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Xp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mu();break;case 3:zs(),Te(xt),Te(mt),am();break;case 5:om(r);break;case 4:zs();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:nm(r.type._context);break;case 22:case 23:_m()}n=n.return}if(et=t,je=t=Br(t.current,null),st=Ut=e,Ke=0,Va=null,mm=Nc=Vi=0,Pt=ua=null,Ti!==null){for(e=0;e<Ti.length;e++)if(n=Ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ti=null}return t}function PT(t,e){do{var n=je;try{if(tm(),ou.current=qu,Wu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Li=0,Ze=qe=Re=null,aa=!1,Oa=0,pm.current=null,n===null||n.return===null){Ke=1,Va=e,je=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=L_(o);if(E!==null){E.flags&=-257,V_(E,o,l,s,e),E.mode&1&&D_(s,c,e),e=E,u=c;var b=e.updateQueue;if(b===null){var P=new Set;P.add(u),e.updateQueue=P}else b.add(u);break e}else{if(!(e&1)){D_(s,c,e),vm();break e}u=Error(F(426))}}else if(Se&&l.mode&1){var k=L_(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),V_(k,o,l,s,e),Zp(Hs(u,l));break e}}s=u=Hs(u,l),Ke!==4&&(Ke=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=hT(s,u,e);P_(s,w);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jr===null||!jr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=dT(s,l,e);P_(s,L);break e}}s=s.return}while(s!==null)}xT(n)}catch(U){e=U,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function CT(){var t=Ku.current;return Ku.current=qu,t===null?qu:t}function vm(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),et===null||!(Vi&268435455)&&!(Nc&268435455)||Sr(et,st)}function Yu(t,e){var n=he;he|=2;var r=CT();(et!==t||st!==e)&&($n=null,Ri(t,e));do try{kP();break}catch(i){PT(t,i)}while(1);if(tm(),he=n,Ku.current=r,je!==null)throw Error(F(261));return et=null,st=0,Ke}function kP(){for(;je!==null;)bT(je)}function PP(){for(;je!==null&&!ZR();)bT(je)}function bT(t){var e=OT(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?xT(t):je=e,pm.current=null}function xT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=EP(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,je=null;return}}else if(n=wP(n,e,Ut),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Ke===0&&(Ke=5)}function vi(t,e,n){var r=fe,i=Zt.transition;try{Zt.transition=null,fe=1,CP(t,e,n,r)}finally{Zt.transition=i,fe=r}return null}function CP(t,e,n,r){do Cs();while(xr!==null);if(he&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uk(t,s),t===et&&(je=et=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bl||(Bl=!0,DT(xu,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=fe;fe=1;var l=he;he|=4,pm.current=null,IP(t,n),AT(n,t),Qk(Tf),Ou=!!Ef,Tf=Ef=null,t.current=n,SP(n),ek(),he=l,fe=o,Zt.transition=s}else t.current=n;if(Bl&&(Bl=!1,xr=t,Qu=i),s=t.pendingLanes,s===0&&(jr=null),rk(n.stateNode),Ot(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gu)throw Gu=!1,t=Bf,Bf=null,t;return Qu&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===zf?ca++:(ca=0,zf=t):ca=0,si(),null}function Cs(){if(xr!==null){var t=h0(Qu),e=Zt.transition,n=fe;try{if(Zt.transition=null,fe=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Qu=0,he&6)throw Error(F(331));var i=he;for(he|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:la(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,E=d.return;if(TT(d),d===c){q=null;break}if(m!==null){m.return=E,q=m;break}q=E}}}var b=s.alternate;if(b!==null){var P=b.child;if(P!==null){b.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xc(9,l)}}catch(U){be(l,l.return,U)}if(l===o){q=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,q=L;break e}q=l.return}}if(he=i,si(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Ic,t)}catch{}r=!0}return r}finally{fe=n,Zt.transition=e}}return!1}function Q_(t,e,n){e=Hs(n,e),e=hT(t,e,1),t=Fr(t,e,1),e=Et(),t!==null&&(tl(t,1,e),Ot(t,e))}function be(t,e,n){if(t.tag===3)Q_(t,t,n);else for(;e!==null;){if(e.tag===3){Q_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Hs(n,t),t=dT(e,t,1),e=Fr(e,t,1),t=Et(),e!==null&&(tl(e,1,t),Ot(e,t));break}}e=e.return}}function bP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(st&n)===n&&(Ke===4||Ke===3&&(st&130023424)===st&&500>Ve()-gm?Ri(t,0):mm|=n),Ot(t,e)}function NT(t,e){e===0&&(t.mode&1?(e=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):e=1);var n=Et();t=Zn(t,e),t!==null&&(tl(t,e,n),Ot(t,n))}function xP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),NT(t,n)}function NP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),NT(t,n)}var OT;OT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,vP(t,e,n);bt=!!(t.flags&131072)}else bt=!1,Se&&e.flags&1048576&&M0(e,ju,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;lu(t,e),t=e.pendingProps;var i=js(e,mt.current);Ps(e,n),i=um(null,e,r,t,i,n);var s=cm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,Uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,im(e),i.updater=bc,e.stateNode=i,i._reactInternals=e,xf(e,r,t,n),e=Df(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Jp(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(lu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DP(r),t=un(r,t),i){case 0:e=Of(null,e,r,t,n);break e;case 1:e=F_(null,e,r,t,n);break e;case 11:e=M_(null,e,r,t,n);break e;case 14:e=U_(null,e,r,un(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Of(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),F_(t,e,r,i,n);case 3:e:{if(gT(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z0(t,e),zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hs(Error(F(423)),e),e=j_(t,e,r,n,i);break e}else if(r!==i){i=Hs(Error(F(424)),e),e=j_(t,e,r,n,i);break e}else for(Ft=Ur(e.stateNode.containerInfo.firstChild),Bt=e,Se=!0,hn=null,n=$0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===i){e=er(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return H0(e),t===null&&Pf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,If(r,i)?o=null:s!==null&&If(r,s)&&(e.flags|=32),mT(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Pf(e),null;case 13:return yT(t,e,n);case 4:return sm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),M_(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e($u,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!xt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Gn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Cf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ps(e,n),i=tn(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),U_(t,e,r,i,n);case 15:return fT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),lu(t,e),e.tag=1,Nt(r)?(t=!0,Uu(e)):t=!1,Ps(e,n),cT(e,r,i),xf(e,r,i,n),Df(null,e,r,!0,t,n);case 19:return _T(t,e,n);case 22:return pT(t,e,n)}throw Error(F(156,e.tag))};function DT(t,e){return a0(t,e)}function OP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new OP(t,e,n,r)}function wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DP(t){if(typeof t=="function")return wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fp)return 11;if(t===jp)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return ki(n.children,i,s,e);case Up:o=8,i|=8;break;case ef:return t=Xt(12,n,e,i|2),t.elementType=ef,t.lanes=s,t;case tf:return t=Xt(13,n,e,i),t.elementType=tf,t.lanes=s,t;case nf:return t=Xt(19,n,e,i),t.elementType=nf,t.lanes=s,t;case HE:return Oc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case BE:o=10;break e;case zE:o=9;break e;case Fp:o=11;break e;case jp:o=14;break e;case Er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Oc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=HE,t.lanes=n,t.stateNode={isHidden:!1},t}function _d(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function vd(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zh(0),this.expirationTimes=Zh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Em(t,e,n,r,i,s,o,l,u){return t=new LP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},im(s),t}function VP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function LT(t){if(!t)return Qr;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Nt(n))return L0(t,n,e)}return e}function VT(t,e,n,r,i,s,o,l,u){return t=Em(n,r,!0,t,i,s,o,l,u),t.context=LT(null),n=t.current,r=Et(),i=$r(n),s=Gn(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,tl(t,i,r),Ot(t,r),t}function Dc(t,e,n,r){var i=e.current,s=Et(),o=$r(i);return n=LT(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(mn(t,i,o,s),su(t,i,o)),o}function Ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Y_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tm(t,e){Y_(t,e),(t=t.alternate)&&Y_(t,e)}function MP(){return null}var MT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Im(t){this._internalRoot=t}Lc.prototype.render=Im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Dc(t,e,null,null)};Lc.prototype.unmount=Im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mi(function(){Dc(null,t,null,null)}),e[Xn]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=p0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&g0(t)}};function Sm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function J_(){}function UP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ju(o);s.call(c)}}var o=VT(e,r,t,0,null,!1,!1,"",J_);return t._reactRootContainer=o,t[Xn]=o.current,Pa(t.nodeType===8?t.parentNode:t),Mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ju(u);l.call(c)}}var u=Em(t,0,!1,null,null,!1,!1,"",J_);return t._reactRootContainer=u,t[Xn]=u.current,Pa(t.nodeType===8?t.parentNode:t),Mi(function(){Dc(e,u,n,r)}),u}function Mc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ju(o);l.call(u)}}Dc(e,o,t,i)}else o=UP(n,e,t,i,r);return Ju(o)}d0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ko(e.pendingLanes);n!==0&&(zp(e,n|1),Ot(e,Ve()),!(he&6)&&(Ws=Ve()+500,si()))}break;case 13:Mi(function(){var r=Zn(t,1);if(r!==null){var i=Et();mn(r,t,1,i)}}),Tm(t,1)}};Hp=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=Et();mn(e,t,134217728,n)}Tm(t,134217728)}};f0=function(t){if(t.tag===13){var e=$r(t),n=Zn(t,e);if(n!==null){var r=Et();mn(n,t,e,r)}Tm(t,e)}};p0=function(){return fe};m0=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};ff=function(t,e,n){switch(e){case"input":if(of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kc(r);if(!i)throw Error(F(90));qE(r),of(r,i)}}}break;case"textarea":GE(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};t0=ym;n0=Mi;var FP={usingClientEntryPoint:!1,Events:[rl,ys,kc,ZE,e0,ym]},Fo={findFiberByHostInstance:Ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jP={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s0(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||MP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{Ic=zl.inject(jP),bn=zl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FP;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sm(e))throw Error(F(200));return VP(t,e,null,n)};Ht.createRoot=function(t,e){if(!Sm(t))throw Error(F(299));var n=!1,r="",i=MT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Em(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Im(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=s0(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Mi(t)};Ht.hydrate=function(t,e,n){if(!Vc(e))throw Error(F(200));return Mc(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Sm(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=MT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VT(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,Pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lc(e)};Ht.render=function(t,e,n){if(!Vc(e))throw Error(F(200));return Mc(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Vc(t))throw Error(F(40));return t._reactRootContainer?(Mi(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Ht.unstable_batchedUpdates=ym;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Mc(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function UT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UT)}catch(t){console.error(t)}}UT(),UE.exports=Ht;var $P=UE.exports,X_=$P;Xd.createRoot=X_.createRoot,Xd.hydrateRoot=X_.hydrateRoot;const BP="modulepreload",zP=function(t){return"/"+t},Z_={},ue=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=zP(s),s in Z_)return;Z_[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":BP,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ma.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const ev="popstate";function HP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return qf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xu(i)}return qP(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Am(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function WP(){return Math.random().toString(36).substr(2,8)}function tv(t,e){return{usr:t.state,key:t.key,idx:e}}function qf(t,e,n,r){return n===void 0&&(n=null),Ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?to(e):e,{state:n,key:e&&e.key||r||WP()})}function Xu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function to(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function qP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Nr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ma({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Nr.Pop;let k=d(),w=k==null?null:k-c;c=k,u&&u({action:l,location:P.location,delta:w})}function m(k,w){l=Nr.Push;let _=qf(P.location,k,w);n&&n(_,k),c=d()+1;let S=tv(_,c),L=P.createHref(_);try{o.pushState(S,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function E(k,w){l=Nr.Replace;let _=qf(P.location,k,w);n&&n(_,k),c=d();let S=tv(_,c),L=P.createHref(_);o.replaceState(S,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function b(k){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof k=="string"?k:Xu(k);return _=_.replace(/ $/,"%20"),Me(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let P={get action(){return l},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ev,f),u=k,()=>{i.removeEventListener(ev,f),u=null}},createHref(k){return e(i,k)},createURL:b,encodeLocation(k){let w=b(k);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:E,go(k){return o.go(k)}};return P}var nv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nv||(nv={}));function KP(t,e,n){return n===void 0&&(n="/"),GP(t,e,n,!1)}function GP(t,e,n,r){let i=typeof e=="string"?to(e):e,s=Rm(i.pathname||"/",n);if(s==null)return null;let o=FT(t);QP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=oC(s);l=iC(o[u],c,r)}return l}function FT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Me(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=zr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),FT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:nC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of jT(s.path))i(s,o,u)}),e}function jT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jT(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function QP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YP=/^:[\w-]+$/,JP=3,XP=2,ZP=1,eC=10,tC=-2,rv=t=>t==="*";function nC(t,e){let n=t.split("/"),r=n.length;return n.some(rv)&&(r+=tC),e&&(r+=XP),n.filter(i=>!rv(i)).reduce((i,s)=>i+(YP.test(s)?JP:s===""?ZP:eC),r)}function rC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function iC(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=iv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=iv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:zr([s,f.pathname]),pathnameBase:hC(zr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=zr([s,f.pathnameBase]))}return o}function iv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const b=l[f];return E&&!b?c[m]=void 0:c[m]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function sC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Am(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function oC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Am(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Rm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const aC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lC=t=>aC.test(t);function uC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?to(t):t,s;if(n)if(lC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Am(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=sv(n.substring(1),"/"):s=sv(n,e)}else s=e;return{pathname:s,search:dC(r),hash:fC(i)}}function sv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function km(t,e){let n=cC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=to(t):(i=Ma({},t),Me(!i.pathname||!i.pathname.includes("?"),wd("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),wd("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),wd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=uC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),hC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function pC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $T=["post","put","patch","delete"];new Set($T);const mC=["get",...$T];new Set(mC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ua.apply(this,arguments)}const Cm=O.createContext(null),gC=O.createContext(null),oi=O.createContext(null),Uc=O.createContext(null),Mn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),BT=O.createContext(null);function yC(t,e){let{relative:n}=e===void 0?{}:e;no()||Me(!1);let{basename:r,navigator:i}=O.useContext(oi),{hash:s,pathname:o,search:l}=HT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:zr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function no(){return O.useContext(Uc)!=null}function ro(){return no()||Me(!1),O.useContext(Uc).location}function zT(t){O.useContext(oi).static||O.useLayoutEffect(t)}function bm(){let{isDataRoute:t}=O.useContext(Mn);return t?NC():_C()}function _C(){no()||Me(!1);let t=O.useContext(Cm),{basename:e,future:n,navigator:r}=O.useContext(oi),{matches:i}=O.useContext(Mn),{pathname:s}=ro(),o=JSON.stringify(km(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return zT(()=>{l.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Pm(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:zr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const vC=O.createContext(null);function wC(t){let e=O.useContext(Mn).outlet;return e&&O.createElement(vC.Provider,{value:t},e)}function jj(){let{matches:t}=O.useContext(Mn),e=t[t.length-1];return e?e.params:{}}function HT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(oi),{matches:i}=O.useContext(Mn),{pathname:s}=ro(),o=JSON.stringify(km(i,r.v7_relativeSplatPath));return O.useMemo(()=>Pm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function EC(t,e){return TC(t,e)}function TC(t,e,n,r){no()||Me(!1);let{navigator:i}=O.useContext(oi),{matches:s}=O.useContext(Mn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ro(),d;if(e){var f;let k=typeof e=="string"?to(e):e;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||Me(!1),d=k}else d=c;let m=d.pathname||"/",E=m;if(u!=="/"){let k=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let b=KP(t,{pathname:E}),P=kC(b&&b.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:zr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:zr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&P?O.createElement(Uc.Provider,{value:{location:Ua({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Nr.Pop}},P):P}function IC(){let t=xC(),e=pC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,s)}const SC=O.createElement(IC,null);class AC extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Mn.Provider,{value:this.props.routeContext},O.createElement(BT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RC(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Cm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Mn.Provider,{value:e},r)}function kC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Me(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,b=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||b){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,b=!1,P=null,k=null;n&&(E=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||SC,u&&(c<0&&m===0?(OC("route-fallback",!1),b=!0,k=null):c===m&&(b=!0,k=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let S;return E?S=P:b?S=k:f.route.Component?S=O.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,O.createElement(RC,{match:f,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(AC,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var WT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(WT||{}),Zu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zu||{});function PC(t){let e=O.useContext(Cm);return e||Me(!1),e}function CC(t){let e=O.useContext(gC);return e||Me(!1),e}function bC(t){let e=O.useContext(Mn);return e||Me(!1),e}function qT(t){let e=bC(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function xC(){var t;let e=O.useContext(BT),n=CC(Zu.UseRouteError),r=qT(Zu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function NC(){let{router:t}=PC(WT.UseNavigateStable),e=qT(Zu.UseNavigateStable),n=O.useRef(!1);return zT(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ua({fromRouteId:e},s)))},[t,e])}const ov={};function OC(t,e,n){!e&&!ov[t]&&(ov[t]=!0)}function DC(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function ec(t){let{to:e,replace:n,state:r,relative:i}=t;no()||Me(!1);let{future:s,static:o}=O.useContext(oi),{matches:l}=O.useContext(Mn),{pathname:u}=ro(),c=bm(),d=Pm(e,km(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function xm(t){return wC(t.context)}function Y(t){Me(!1)}function LC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nr.Pop,navigator:s,static:o=!1,future:l}=t;no()&&Me(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Ua({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=to(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:b="default"}=r,P=O.useMemo(()=>{let k=Rm(d,u);return k==null?null:{location:{pathname:k,search:f,hash:m,state:E,key:b},navigationType:i}},[u,d,f,m,E,b,i]);return P==null?null:O.createElement(oi.Provider,{value:c},O.createElement(Uc.Provider,{children:n,value:P}))}function VC(t){let{children:e,location:n}=t;return EC(Kf(e),n)}new Promise(()=>{});function Kf(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Kf(r.props.children,s));return}r.type!==Y&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Kf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gf(){return Gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gf.apply(this,arguments)}function MC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FC(t,e){return t.button===0&&(!e||e==="_self")&&!UC(t)}const jC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$C="6";try{window.__reactRouterVersion=$C}catch{}const BC="startTransition",av=bR[BC];function zC(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=HP({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(f=>{c&&av?av(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>DC(r),[r]),O.createElement(LC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const HC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$j=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=MC(e,jC),{basename:E}=O.useContext(oi),b,P=!1;if(typeof c=="string"&&WC.test(c)&&(b=c,HC))try{let S=new URL(window.location.href),L=c.startsWith("//")?new URL(S.protocol+c):new URL(c),U=Rm(L.pathname,E);L.origin===S.origin&&U!=null?c=U+L.search+L.hash:P=!0}catch{}let k=yC(c,{relative:i}),w=qC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function _(S){r&&r(S),S.defaultPrevented||w(S)}return O.createElement("a",Gf({},m,{href:b||k,onClick:P||s?r:_,ref:n,target:u}))});var lv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(lv||(lv={}));var uv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(uv||(uv={}));function qC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=bm(),c=ro(),d=HT(t,{relative:o});return O.useCallback(f=>{if(FC(f,n)){f.preventDefault();let m=r!==void 0?r:Xu(c)===Xu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}let KC={data:""},GC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||KC},QC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,YC=/\/\*[^]*?\*\/|  +/g,cv=/\n+/g,Ar=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Ar(o,s):s+"{"+Ar(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Ar(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Ar.p?Ar.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Fn={},KT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+KT(t[n]);return e}return t},JC=(t,e,n,r,i)=>{let s=KT(t),o=Fn[s]||(Fn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!Fn[o]){let u=s!==t?t:(c=>{let d,f,m=[{}];for(;d=QC.exec(c.replace(YC,""));)d[4]?m.shift():d[3]?(f=d[3].replace(cv," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(cv," ").trim();return m[0]})(t);Fn[o]=Ar(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Fn.g?Fn.g:null;return n&&(Fn.g=Fn[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(Fn[o],e,r,l),o},XC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Ar(l,""):l===!1?"":l}return r+i+(o??"")},"");function Fc(t){let e=this||{},n=t.call?t(e.p):t;return JC(n.unshift?n.raw?XC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,GC(e.target),e.g,e.o,e.k)}let GT,Qf,Yf;Fc.bind({g:1});let tr=Fc.bind({k:1});function ZC(t,e,n,r){Ar.p=e,GT=t,Qf=n,Yf=r}function ai(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:Qf&&Qf()},l),n.o=/ *go\d+/.test(u),l.className=Fc.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),Yf&&c[0]&&Yf(l),GT(c,l)}return e?e(i):i}}var eb=t=>typeof t=="function",tc=(t,e)=>eb(t)?t(e):t,tb=(()=>{let t=0;return()=>(++t).toString()})(),QT=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),nb=20,Nm="default",YT=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return YT(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},du=[],JT={toasts:[],pausedAt:void 0,settings:{toastLimit:nb}},Pn={},XT=(t,e=Nm)=>{Pn[e]=YT(Pn[e]||JT,t),du.forEach(([n,r])=>{n===e&&r(Pn[e])})},ZT=t=>Object.keys(Pn).forEach(e=>XT(t,e)),rb=t=>Object.keys(Pn).find(e=>Pn[e].toasts.some(n=>n.id===t)),jc=(t=Nm)=>e=>{XT(e,t)},ib={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},sb=(t={},e=Nm)=>{let[n,r]=O.useState(Pn[e]||JT),i=O.useRef(Pn[e]);O.useEffect(()=>(i.current!==Pn[e]&&r(Pn[e]),du.push([e,r]),()=>{let o=du.findIndex(([l])=>l===e);o>-1&&du.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||ib[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},ob=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||tb()}),sl=t=>(e,n)=>{let r=ob(e,t,n);return jc(r.toasterId||rb(r.id))({type:2,toast:r}),r.id},xe=(t,e)=>sl("blank")(t,e);xe.error=sl("error");xe.success=sl("success");xe.loading=sl("loading");xe.custom=sl("custom");xe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?jc(e)(n):ZT(n)};xe.dismissAll=t=>xe.dismiss(void 0,t);xe.remove=(t,e)=>{let n={type:4,toastId:t};e?jc(e)(n):ZT(n)};xe.removeAll=t=>xe.remove(void 0,t);xe.promise=(t,e,n)=>{let r=xe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?tc(e.success,i):void 0;return s?xe.success(s,{id:r,...n,...n==null?void 0:n.success}):xe.dismiss(r),i}).catch(i=>{let s=e.error?tc(e.error,i):void 0;s?xe.error(s,{id:r,...n,...n==null?void 0:n.error}):xe.dismiss(r)}),t};var ab=1e3,lb=(t,e="default")=>{let{toasts:n,pausedAt:r}=sb(t,e),i=O.useRef(new Map).current,s=O.useCallback((f,m=ab)=>{if(i.has(f))return;let E=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,E)},[]);O.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(E=>{if(E.duration===1/0)return;let b=(E.duration||0)+E.pauseDuration-(f-E.createdAt);if(b<0){E.visible&&xe.dismiss(E.id);return}return setTimeout(()=>xe.dismiss(E.id,e),b)});return()=>{m.forEach(E=>E&&clearTimeout(E))}},[n,r,e]);let o=O.useCallback(jc(e),[e]),l=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=O.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=O.useCallback((f,m)=>{let{reverseOrder:E=!1,gutter:b=8,defaultPosition:P}=m||{},k=n.filter(S=>(S.position||P)===(f.position||P)&&S.height),w=k.findIndex(S=>S.id===f.id),_=k.filter((S,L)=>L<w&&S.visible).length;return k.filter(S=>S.visible).slice(...E?[_+1]:[0,_]).reduce((S,L)=>S+(L.height||0)+b,0)},[n]);return O.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},ub=tr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,cb=tr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,hb=tr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,db=ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ub} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${cb} 0.15s ease-out forwards;
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
    animation: ${hb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,fb=tr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pb=ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${fb} 1s linear infinite;
`,mb=tr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,gb=tr`
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
}`,yb=ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${gb} 0.2s ease-out forwards;
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
`,_b=ai("div")`
  position: absolute;
`,vb=ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,wb=tr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Eb=ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${wb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Tb=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(Eb,null,e):e:n==="blank"?null:O.createElement(vb,null,O.createElement(pb,{...r}),n!=="loading"&&O.createElement(_b,null,n==="error"?O.createElement(db,{...r}):O.createElement(yb,{...r})))},Ib=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Sb=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ab="0%{opacity:0;} 100%{opacity:1;}",Rb="0%{opacity:1;} 100%{opacity:0;}",kb=ai("div")`
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
`,Pb=ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Cb=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=QT()?[Ab,Rb]:[Ib(n),Sb(n)];return{animation:e?`${tr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${tr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},bb=O.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?Cb(t.position||e||"top-center",t.visible):{opacity:0},s=O.createElement(Tb,{toast:t}),o=O.createElement(Pb,{...t.ariaProps},tc(t.message,t));return O.createElement(kb,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):O.createElement(O.Fragment,null,s,o))});ZC(O.createElement);var xb=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=O.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:s,className:e,style:n},i)},Nb=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:QT()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},Ob=Fc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Hl=16,Db=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=lb(n,s);return O.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Hl,left:Hl,right:Hl,bottom:Hl,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let f=d.position||e,m=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),E=Nb(f,m);return O.createElement(xb,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Ob:"",style:E},d.type==="custom"?tc(d.message,d):i?i(d):O.createElement(bb,{toast:d,position:f}))}))},Ed=xe,Lb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Vb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qi=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>O.createElement("svg",{ref:c,...Lb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${Vb(t)}`,...u},[...e.map(([d,f])=>O.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},Mb=Qi("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),hv=Qi("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Jf=Qi("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),eI=Qi("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Ub=Qi("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Fb=Qi("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),jb=Qi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$b=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new zb;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const b=c<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hb=function(t){const e=tI(t);return nI.encodeByteArray(e,!0)},nc=function(t){return Hb(t).replace(/\./g,"")},rI=function(t){try{return nI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qb=()=>Wb().__FIREBASE_DEFAULTS__,Kb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rI(t[1]);return e&&JSON.parse(e)},$c=()=>{try{return $b()||qb()||Kb()||Gb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iI=t=>{var e,n;return(n=(e=$c())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},sI=t=>{const e=iI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oI=()=>{var t;return(t=$c())==null?void 0:t.config},aI=t=>{var e;return(e=$c())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function lI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Jb(){var e;const t=(e=$c())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ex(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tx(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nx(){return!Jb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uI(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function rx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ix,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wn(i,l,r)}}function sx(t,e){return t.replace(ox,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ox=/\{\$([^}]+)}/g;function ax(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dv(s)&&dv(o)){if(!Yr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lx(t,e){const n=new ux(t,e);return n.subscribe.bind(n)}class ux{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Td),i.error===void 0&&(i.error=Td),i.complete===void 0&&(i.complete=Td);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Td(){}/**
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
 */function Ji(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Om(t){return(await fetch(t,{credentials:"include"})).ok}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fx(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dx(t){return t===wi?void 0:t}function fx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const mx={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},gx=oe.INFO,yx={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},_x=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dm{constructor(e){this.name=e,this._logLevel=gx,this._logHandler=_x,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const vx=(t,e)=>e.some(n=>t instanceof n);let fv,pv;function wx(){return fv||(fv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ex(){return pv||(pv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hI=new WeakMap,Xf=new WeakMap,dI=new WeakMap,Id=new WeakMap,Lm=new WeakMap;function Tx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hI.set(n,t)}).catch(()=>{}),Lm.set(e,t),e}function Ix(t){if(Xf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xf.set(t,e)}let Zf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sx(t){Zf=t(Zf)}function Ax(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sd(this),e,...n);return dI.set(r,e.sort?e.sort():[e]),Qn(r)}:Ex().includes(t)?function(...e){return t.apply(Sd(this),e),Qn(hI.get(this))}:function(...e){return Qn(t.apply(Sd(this),e))}}function Rx(t){return typeof t=="function"?Ax(t):(t instanceof IDBTransaction&&Ix(t),vx(t,wx())?new Proxy(t,Zf):t)}function Qn(t){if(t instanceof IDBRequest)return Tx(t);if(Id.has(t))return Id.get(t);const e=Rx(t);return e!==t&&(Id.set(t,e),Lm.set(e,t)),e}const Sd=t=>Lm.get(t);function Bc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Qn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qn(o.result),u.oldVersion,u.newVersion,Qn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function Ad(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Qn(n).then(()=>{})}const kx=["get","getKey","getAll","getAllKeys","count"],Px=["put","add","delete","clear"],Rd=new Map;function mv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Px.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Rd.set(e,s),s}Sx(t=>({...t,get:(e,n,r)=>mv(e,n)||t.get(e,n,r),has:(e,n)=>!!mv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ep="@firebase/app",gv="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Dm("@firebase/app"),xx="@firebase/app-compat",Nx="@firebase/analytics-compat",Ox="@firebase/analytics",Dx="@firebase/app-check-compat",Lx="@firebase/app-check",Vx="@firebase/auth",Mx="@firebase/auth-compat",Ux="@firebase/database",Fx="@firebase/data-connect",jx="@firebase/database-compat",$x="@firebase/functions",Bx="@firebase/functions-compat",zx="@firebase/installations",Hx="@firebase/installations-compat",Wx="@firebase/messaging",qx="@firebase/messaging-compat",Kx="@firebase/performance",Gx="@firebase/performance-compat",Qx="@firebase/remote-config",Yx="@firebase/remote-config-compat",Jx="@firebase/storage",Xx="@firebase/storage-compat",Zx="@firebase/firestore",eN="@firebase/ai",tN="@firebase/firestore-compat",nN="firebase",rN="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="[DEFAULT]",iN={[ep]:"fire-core",[xx]:"fire-core-compat",[Ox]:"fire-analytics",[Nx]:"fire-analytics-compat",[Lx]:"fire-app-check",[Dx]:"fire-app-check-compat",[Vx]:"fire-auth",[Mx]:"fire-auth-compat",[Ux]:"fire-rtdb",[Fx]:"fire-data-connect",[jx]:"fire-rtdb-compat",[$x]:"fire-fn",[Bx]:"fire-fn-compat",[zx]:"fire-iid",[Hx]:"fire-iid-compat",[Wx]:"fire-fcm",[qx]:"fire-fcm-compat",[Kx]:"fire-perf",[Gx]:"fire-perf-compat",[Qx]:"fire-rc",[Yx]:"fire-rc-compat",[Jx]:"fire-gcs",[Xx]:"fire-gcs-compat",[Zx]:"fire-fst",[tN]:"fire-fst-compat",[eN]:"fire-vertex","fire-js":"fire-js",[nN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,sN=new Map,np=new Map;function yv(t,e){try{t.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(np.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;np.set(e,t);for(const n of rc.values())yv(n,t);for(const n of sN.values())yv(n,t);return!0}function Xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $e(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hr=new Yi("app","Firebase",oN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=rN;function fI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:tp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Hr.create("bad-app-name",{appName:String(i)});if(n||(n=oI()),!n)throw Hr.create("no-options");const s=rc.get(i);if(s){if(Yr(n,s.options)&&Yr(r,s.config))return s;throw Hr.create("duplicate-app",{appName:i})}const o=new px(i);for(const u of np.values())o.addComponent(u);const l=new aN(n,r,o);return rc.set(i,l),l}function zc(t=tp){const e=rc.get(t);if(!e&&t===tp&&oI())return fI();if(!e)throw Hr.create("no-app",{appName:t});return e}function Dt(t,e,n){let r=iN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(o.join(" "));return}_n(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lN="firebase-heartbeat-database",uN=1,Fa="firebase-heartbeat-store";let kd=null;function pI(){return kd||(kd=Bc(lN,uN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hr.create("idb-open",{originalErrorMessage:t.message})})),kd}async function cN(t){try{const n=(await pI()).transaction(Fa),r=await n.objectStore(Fa).get(mI(t));return await n.done,r}catch(e){if(e instanceof wn)nr.warn(e.message);else{const n=Hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(n.message)}}}async function _v(t,e){try{const r=(await pI()).transaction(Fa,"readwrite");await r.objectStore(Fa).put(e,mI(t)),await r.done}catch(n){if(n instanceof wn)nr.warn(n.message);else{const r=Hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nr.warn(r.message)}}}function mI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hN=1024,dN=30;class fN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>dN){const o=gN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vv(),{heartbeatsToSend:r,unsentEntries:i}=pN(this._heartbeatsCache.heartbeats),s=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return nr.warn(n),""}}}function vv(){return new Date().toISOString().substring(0,10)}function pN(t,e=hN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _v(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _v(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wv(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}function gN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){_n(new rn("platform-logger",e=>new Cx(e),"PRIVATE")),_n(new rn("heartbeat",e=>new fN(e),"PRIVATE")),Dt(ep,gv,t),Dt(ep,gv,"esm2020"),Dt("fire-js","")}yN("");function gI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _N=gI,yI=new Yi("auth","Firebase",gI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Dm("@firebase/auth");function vN(t,...e){ic.logLevel<=oe.WARN&&ic.warn(`Auth (${Zi}): ${t}`,...e)}function fu(t,...e){ic.logLevel<=oe.ERROR&&ic.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw Mm(t,...e)}function Lt(t,...e){return Mm(t,...e)}function Vm(t,e,n){const r={..._N(),[e]:n};return new Yi("auth","Firebase",r).create(e,{appName:t.name})}function Tt(t){return Vm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hc(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),Vm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yI.create(t,...e)}function B(t,e,...n){if(!t)throw Mm(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fu(e),new Error(e)}function rr(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Um(){return Ev()==="http:"||Ev()==="https:"}function Ev(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Um()||Zb()||"connection"in navigator)?navigator.onLine:!0}function EN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=Yb()||ex()}get(){return wN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SN=new ol(3e4,6e4);function Qe(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ye(t,e,n,r,i={}){return vI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=io({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return Xb()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ji(t.emulatorConfig.host)&&(c.credentials="include"),_I.fetch()(await wI(t,t.config.apiHost,n,l),c)})}async function vI(t,e,n){t._canInitEmulator=!1;const r={...TN,...e};try{const i=new RN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Jo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Jo(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vm(t,d,c);sn(t,d)}}catch(i){if(i instanceof wn)throw i;sn(t,"network-request-failed",{message:String(i)})}}async function cr(t,e,n,r,i={}){const s=await Ye(t,e,n,r,i);return"mfaPendingCredential"in s&&sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function wI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`;return IN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function AN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),SN.get())})}}function Jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t){return t!==void 0&&t.getResponse!==void 0}function Iv(t){return t!==void 0&&t.enterprise!==void 0}class EI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t){return(await Ye(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function TI(t,e){return Ye(t,"GET","/v2/recaptchaConfig",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return Ye(t,"POST","/v1/accounts:delete",e)}async function CN(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function sc(t,e){return Ye(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bN(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=Wc(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ha(Pd(i.auth_time)),issuedAtTime:ha(Pd(i.iat)),expirationTime:ha(Pd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pd(t){return Number(t)*1e3}function Wc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const i=rI(n);return i?JSON.parse(i):(fu("Failed to decode base64 JWT payload"),null)}catch(i){return fu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sv(t){const e=Wc(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&xN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Ui(t,sc(e,{idToken:n}));B(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?II(i.providerUserInfo):[],o=DN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new rp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function ON(t){const e=ne(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function II(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){const n=await vI(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await wI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ji(t.emulatorConfig.host)&&(u.credentials="include"),_I.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VN(t,e){return Ye(t,"POST","/v2/accounts:revokeToken",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bs;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new NN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bN(this,e)}reload(){return ON(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(Tt(this.auth));const e=await this.getIdToken();return await Ui(this,PN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:b,stsTokenManager:P}=n;B(f&&P,e,"internal-error");const k=bs.fromJSON(this.name,P);B(typeof f=="string",e,"internal-error"),wr(r,e.name),wr(i,e.name),B(typeof m=="boolean",e,"internal-error"),B(typeof E=="boolean",e,"internal-error"),wr(s,e.name),wr(o,e.name),wr(l,e.name),wr(u,e.name),wr(c,e.name),wr(d,e.name);const w=new dn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:k,createdAt:c,lastLoginAt:d});return b&&Array.isArray(b)&&(w.providerData=b.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new bs;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?II(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new bs;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new Map;function Kn(t){rr(t instanceof Function,"Expected a class definition");let e=Av.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Av.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}SI.type="NONE";const Rv=SI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sc(this.auth,{idToken:e}).catch(()=>{});return n?dn._fromGetAccountInfoResponse(this.auth,n,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Kn(Rv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kn(Rv);const o=pu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await sc(e,{idToken:d}).catch(()=>{});if(!m)break;f=await dn._fromGetAccountInfoResponse(e,m,d)}else f=dn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bI(e))return"Blackberry";if(xI(e))return"Webos";if(RI(e))return"Safari";if((e.includes("chrome/")||kI(e))&&!e.includes("edge/"))return"Chrome";if(CI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AI(t=gt()){return/firefox\//i.test(t)}function RI(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kI(t=gt()){return/crios\//i.test(t)}function PI(t=gt()){return/iemobile/i.test(t)}function CI(t=gt()){return/android/i.test(t)}function bI(t=gt()){return/blackberry/i.test(t)}function xI(t=gt()){return/webos/i.test(t)}function jm(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MN(t=gt()){var e;return jm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function UN(){return tx()&&document.documentMode===10}function NI(t=gt()){return jm(t)||CI(t)||xI(t)||bI(t)||/windows phone/i.test(t)||PI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e=[]){let n;switch(t){case"Browser":n=kv(gt());break;case"Worker":n=`${kv(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
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
 */class FN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jN(t,e={}){return Ye(t,"GET","/v2/passwordPolicy",Qe(t,e))}/**
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
 */const $N=6;class BN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??$N,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pv(this),this.idTokenSubscription=new Pv(this),this.beforeStateQueue=new FN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sc(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(Tt(this));const n=e?ne(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jN(this),n=new BN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&vN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tt(t){return ne(t)}class Pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=lx(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HN(t){al=t}function $m(t){return al.loadJS(t)}function WN(){return al.recaptchaV2Script}function qN(){return al.recaptchaEnterpriseScript}function KN(){return al.gapiScript}function DI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=500,QN=6e4,Wl=1e12;class YN{constructor(e){this.auth=e,this.counter=Wl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ZN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Wl;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Wl;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Wl;return(r=this._widgets.get(n))==null||r.execute(),""}}class JN{constructor(){this.enterprise=new XN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;B(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=eO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},QN)},GN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function eO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const tO="recaptcha-enterprise",da="NO_RECAPTCHA";class LI{constructor(e){this.type=tO,this.auth=tt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{TI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new EI(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Iv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(da)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Iv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qN();u.length!==0&&(u+=l),$m(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function jo(t,e,n,r=!1,i=!1){const s=new LI(t);let o;if(i)o=da;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Wr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await jo(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await jo(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await jo(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await jo(t,e,n,!1,!0);return r(t,d)}return Promise.reject(u)})}else{const l=await jo(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function nO(t){const e=tt(t),n=await TI(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new EI(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new LI(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t,e){const n=Xi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yr(s,e??{}))return i;sn(i,"already-initialized")}return n.initialize({options:e})}function iO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sO(t,e,n){const r=tt(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=VI(e),{host:o,port:l}=oO(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(Yr(c,r.config.emulator)&&Yr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Ji(o)?Om(`${s}//${o}${u}`):i||aO()}function VI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oO(t){const e=VI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cv(o)}}}function Cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(t,e){return Ye(t,"POST","/v1/accounts:resetPassword",Qe(t,e))}async function uO(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function cO(t,e){return Ye(t,"POST","/v1/accounts:signUp",e)}async function hO(t,e){return Ye(t,"POST","/v1/accounts:update",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(t,e){return cr(t,"POST","/v1/accounts:signInWithPassword",Qe(t,e))}async function Kc(t,e){return Ye(t,"POST","/v1/accounts:sendOobCode",Qe(t,e))}async function fO(t,e){return Kc(t,e)}async function pO(t,e){return Kc(t,e)}async function mO(t,e){return Kc(t,e)}async function gO(t,e){return Kc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}async function _O(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends qc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ba(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ba(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wr(e,n,"signInWithPassword",dO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return yO(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wr(e,r,"signUpPassword",cO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _O(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return cr(t,"POST","/v1/accounts:signInWithIdp",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="http://localhost";class ir extends qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:vO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e){return Ye(t,"POST","/v1/accounts:sendVerificationCode",Qe(t,e))}async function wO(t,e){return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e))}async function EO(t,e){const n=await cr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e));if(n.temporaryProof)throw Jo(t,"account-exists-with-different-credential",n);return n}const TO={USER_NOT_FOUND:"user-not-found"};async function IO(t,e){const n={...e,operation:"REAUTH"};return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,n),TO)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends qc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new fa({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new fa({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return wO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return EO(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return IO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new fa({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AO(t){const e=Qo(Yo(t)).link,n=e?Qo(Yo(e)).deep_link_id:null,r=Qo(Yo(t)).deep_link_id;return(r?Qo(Yo(r)).link:null)||r||n||e||t}class Gc{constructor(e){const n=Qo(Yo(e)),r=n.apiKey??null,i=n.oobCode??null,s=SO(n.mode??null);B(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=AO(e);try{return new Gc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return Ba._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gc.parseLink(n);return B(r,"argument-error"),Ba._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends so{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class mu extends oo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return B("providerId"in n&&"signInMethod"in n,"argument-error"),ir._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),ir._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return mu.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return mu.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new mu(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends oo{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ir._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends oo{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends oo{constructor(){super("twitter.com")}static credential(e,n){return ir._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){return cr(t,"POST","/v1/accounts:signUp",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),o=xv(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xv(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bj(t){var i;if($e(t.app))return Promise.reject(Tt(t));const e=tt(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Ln({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await MI(e,{returnSecureToken:!0}),r=await Ln._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends wn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oc(e,n,r,i)}}function UI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zj(t,e){const n=ne(t);await Qc(!0,n,e);const{providerUserInfo:r}=await CN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=FI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function jI(t,e,n=!1){const r=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}async function Qc(t,e,n){await $a(e);const r=FI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";B(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(t,e,n=!1){const{auth:r}=t;if($e(r.app))return Promise.reject(Tt(r));const i="reauthenticate";try{const s=await Ui(t,UI(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=Wc(s.idToken);B(o,r,"internal-error");const{sub:l}=o;return B(t.uid===l,r,"user-mismatch"),Ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e,n=!1){if($e(t.app))return Promise.reject(Tt(t));const r="signIn",i=await UI(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Yc(t,e){return $I(tt(t),e)}async function kO(t,e){const n=ne(t);return await Qc(!1,n,e.providerId),jI(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t,e){return cr(t,"POST","/v1/accounts:signInWithCustomToken",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hj(t,e){if($e(t.app))return Promise.reject(Tt(t));const n=tt(t),r=await PO(n,{token:e,returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e,n){var r;B(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),B(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),B(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(B(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(B(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(t){const e=tt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Wj(t,e,n){const r=tt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Jc(r,i,n),await Wr(r,i,"getOobCode",pO,"EMAIL_PASSWORD_PROVIDER")}async function qj(t,e,n){await lO(ne(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bm(t),r})}async function Kj(t,e){await hO(ne(t),{oobCode:e})}async function CO(t,e,n){if($e(t.app))return Promise.reject(Tt(t));const r=tt(t),o=await Wr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MI,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Bm(t),u}),l=await Ln._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function bO(t,e,n){return $e(t.app)?Promise.reject(Tt(t)):Yc(ne(t),es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bm(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gj(t,e,n){const r=tt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){B(l.handleCodeInApp,r,"argument-error"),l&&Jc(r,o,l)}s(i,n),await Wr(r,i,"getOobCode",mO,"EMAIL_PASSWORD_PROVIDER")}function Qj(t,e){const n=Gc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Yj(t,e,n){if($e(t.app))return Promise.reject(Tt(t));const r=ne(t),i=es.credentialWithLink(e,n||ja());return B(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Yc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e){return Ye(t,"POST","/v1/accounts:createAuthUri",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jj(t,e){const n=Um()?ja():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await xO(ne(t),r);return i||[]}async function Xj(t,e){const n=ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Jc(n.auth,i,e);const{email:s}=await fO(n.auth,i);s!==t.email&&await t.reload()}async function Zj(t,e,n){const r=ne(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Jc(r.auth,s,n);const{email:o}=await gO(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e){return Ye(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ui(r,NO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function t6(t,e){const n=ne(t);return $e(n.auth.app)?Promise.reject(Tt(n.auth)):BI(n,e,null)}function n6(t,e){return BI(ne(t),null,e)}async function BI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ui(t,uO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=Wc(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Os(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new DO(r,n);case"github.com":return new LO(r,n);case"google.com":return new VO(r,n);case"twitter.com":return new MO(r,n,t.screenName||null);case"custom":case"anonymous":return new Os(r,null);default:return new Os(r,e,n)}}class Os{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class zI extends Os{constructor(e,n,r,i){super(e,n,r),this.username=i}}class DO extends Os{constructor(e,n){super(e,"facebook.com",n)}}class LO extends zI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class VO extends Os{constructor(e,n){super(e,"google.com",n)}}class MO extends zI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function r6(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:OO(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t,e){return ne(t).setPersistence(e)}function FO(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function jO(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function $O(t,e,n,r){return ne(t).onAuthStateChanged(e,n,r)}function BO(t){return ne(t).signOut()}function i6(t,e){return tt(t).revokeAccessToken(e)}async function s6(t){return ne(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:start",Qe(t,e))}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=1e3,HO=10;class WI extends HI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WI.type="LOCAL";const qI=WI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends HI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KI.type="SESSION";const GI=KI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await WO(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Zc("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function KO(t){Fe().location.href=t}/**
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
 */function zm(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function GO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function YO(){return zm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="firebaseLocalStorageDb",JO=1,lc="firebaseLocalStorage",YI="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eh(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function XO(){const t=indexedDB.deleteDatabase(QI);return new ll(t).toPromise()}function ip(){const t=indexedDB.open(QI,JO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lc,{keyPath:YI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lc)?e(r):(r.close(),await XO(),e(await ip()))})})}async function Ov(t,e,n){const r=eh(t,!0).put({[YI]:e,value:n});return new ll(r).toPromise()}async function ZO(t,e){const n=eh(t,!1).get(e),r=await new ll(n).toPromise();return r===void 0?null:r.value}function Dv(t,e){const n=eh(t,!0).delete(e);return new ll(n).toPromise()}const eD=800,tD=3;class JI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ip(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(YO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await GO(),!this.activeServiceWorker)return;this.sender=new qO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ip();return await Ov(e,ac,"1"),await Dv(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ov(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=eh(i,!1).getAll();return new ll(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JI.type="LOCAL";const nD=JI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:start",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=DI("rcb"),rD=new ol(3e4,6e4);class iD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Fe().grecaptcha)!=null&&e.render)}load(e,n=""){return B(sD(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Tv(Fe().grecaptcha)?Promise.resolve(Fe().grecaptcha):new Promise((r,i)=>{const s=Fe().setTimeout(()=>{i(Lt(e,"network-request-failed"))},rD.get());Fe()[Cd]=()=>{Fe().clearTimeout(s),delete Fe()[Cd];const l=Fe().grecaptcha;if(!l||!Tv(l)){i(Lt(e,"internal-error"));return}const u=l.render;l.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${WN()}?${io({onload:Cd,render:"explicit",hl:n})}`;$m(o).catch(()=>{clearTimeout(s),i(Lt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Fe().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function sD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class oD{async load(e){return new YN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="recaptcha",aD={theme:"light",type:"image"};class lD{constructor(e,n,r={...aD}){this.parameters=r,this.type=pa,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=tt(e),this.isInvisible=this.parameters.size==="invisible",B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;B(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new oD:new iD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){B(!this.parameters.sitekey,this.auth,"argument-error"),B(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Fe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){B(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){B(Um()&&!zm(),this.auth,"internal-error"),await uD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kN(this.auth);B(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return B(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function uD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=fa._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function cD(t,e,n){if($e(t.app))return Promise.reject(Tt(t));const r=tt(t),i=await ZI(r,e,ne(n));return new XI(i,s=>Yc(r,s))}async function o6(t,e,n){const r=ne(t);await Qc(!1,r,"phone");const i=await ZI(r.auth,e,ne(n));return new XI(i,s=>kO(r,s))}async function ZI(t,e,n){var r;if(!t._getRecaptchaConfig())try{await nO(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){B(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Wr(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===da){B((n==null?void 0:n.type)===pa,d,"argument-error");const m=await bd(d,f,n);return Nv(d,m)}return Nv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{B(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;B(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Wr(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===da){B((n==null?void 0:n.type)===pa,f,"argument-error");const E=await bd(f,m,n);return Lv(f,E)}return Lv(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Wr(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===da){B((n==null?void 0:n.type)===pa,c,"argument-error");const f=await bd(c,d,n);return bv(c,f)}return bv(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function bd(t,e,n){B(n.type===pa,t,"argument-error");const r=await n.verify();B(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function ul(t,e){return e?Kn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm extends qc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hD(t){return $I(t.auth,new Hm(t),t.bypassAuthState)}function dD(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),RO(n,new Hm(t),t.bypassAuthState)}async function fD(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),jI(n,new Hm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hD;case"linkViaPopup":case"linkViaRedirect":return fD;case"reauthViaPopup":case"reauthViaRedirect":return dD;default:sn(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=new ol(2e3,1e4);async function Vv(t,e,n){if($e(t.app))return Promise.reject(Lt(t,"operation-not-supported-in-this-environment"));const r=tt(t);Hc(t,e,so);const i=ul(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}async function a6(t,e,n){const r=ne(t);Hc(r.auth,e,so);const i=ul(r.auth,n);return new Or(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Or extends eS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pD.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="pendingRedirect",gu=new Map;class gD extends eS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gu.get(this.auth._key());if(!e){try{const r=await yD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gu.set(this.auth._key(),e)}return this.bypassAuthState||gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yD(t,e){const n=rS(e),r=nS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function tS(t,e){return nS(t)._set(rS(e),"true")}function _D(t,e){gu.set(t._key(),e)}function nS(t){return Kn(t._redirectPersistence)}function rS(t){return pu(mD,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t,e,n){return wD(t,e,n)}async function wD(t,e,n){if($e(t.app))return Promise.reject(Tt(t));const r=tt(t);Hc(t,e,so),await r._initializationPromise;const i=ul(r,n);return await tS(i,r),i._openRedirect(r,e,"signInViaRedirect")}function l6(t,e,n){return ED(t,e,n)}async function ED(t,e,n){const r=ne(t);Hc(r.auth,e,so),await r.auth._initializationPromise;const i=ul(r.auth,n);await Qc(!1,r,e.providerId),await tS(i,r.auth);const s=await ID(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function TD(t,e){return await tt(t)._initializationPromise,iS(t,e,!1)}async function iS(t,e,n=!1){if($e(t.app))return Promise.reject(Tt(t));const r=tt(t),i=ul(r,e),o=await new gD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function ID(t){const e=Zc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=10*60*1e3;class AD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sS(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mv(e))}saveEventToCache(e){this.cachedEventUids.add(Mv(e)),this.lastProcessedEventTime=Date.now()}}function Mv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e={}){return Ye(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CD=/^https?/;async function bD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kD(t);for(const n of e)try{if(xD(n))return}catch{}sn(t,"unauthorized-domain")}function xD(t){const e=ja(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CD.test(n))return!1;if(PD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ND=new ol(3e4,6e4);function Uv(){const t=Fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OD(t){return new Promise((e,n)=>{var i,s,o;function r(){Uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uv(),n(Lt(t,"network-request-failed"))},timeout:ND.get()})}if((s=(i=Fe().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Fe().gapi)!=null&&o.load)r();else{const l=DI("iframefcb");return Fe()[l]=()=>{gapi.load?r():n(Lt(t,"network-request-failed"))},$m(`${KN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw yu=null,e})}let yu=null;function DD(t){return yu=yu||OD(t),yu}/**
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
 */const LD=new ol(5e3,15e3),VD="__/auth/iframe",MD="emulator/auth/iframe",UD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jD(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,MD):`https://${t.config.authDomain}/${VD}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=FD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${io(r).slice(1)}`}async function $D(t){const e=await DD(t),n=Fe().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:jD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),l=Fe().setTimeout(()=>{s(o)},LD.get());function u(){Fe().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const BD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zD=500,HD=600,WD="_blank",qD="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KD(t,e,n,r=zD,i=HD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...BD,width:r.toString(),height:i.toString(),top:s,left:o},c=gt().toLowerCase();n&&(l=kI(c)?WD:n),AI(c)&&(e=e||qD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,b])=>`${m}${E}=${b},`,"");if(MN(c)&&l!=="_self")return GD(e||"",l),new Fv(null);const f=window.open(e||"",l,d);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Fv(f)}function GD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QD="__/auth/handler",YD="emulator/auth/handler",JD=encodeURIComponent("fac");async function jv(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof so){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ax(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof oo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${JD}=${encodeURIComponent(u)}`:"";return`${XD(t)}?${io(l).slice(1)}${c}`}function XD({config:t}){return t.emulator?Fm(t,YD):`https://${t.authDomain}/${QD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class ZD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GI,this._completeRedirectFn=iS,this._overrideRedirectResult=_D}async _openPopup(e,n,r,i){var o;rr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await jv(e,n,r,ja(),i);return KD(e,s,Zc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jv(e,n,r,ja(),i);return KO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $D(e),r=new AD(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xd,{type:xd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[xd];s!==void 0&&n(!!s),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return NI()||RI()||jm()}}const eL=ZD;var $v="@firebase/auth",Bv="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rL(t){_n(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OI(t)},c=new zN(r,i,s,u);return iO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new rn("auth-internal",e=>{const n=tt(e.getProvider("auth").getImmediate());return(r=>new tL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt($v,Bv,nL(t)),Dt($v,Bv,"esm2020")}/**
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
 */const iL=5*60,sL=aI("authIdTokenMaxAge")||iL;let zv=null;const oL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sL)return;const i=n==null?void 0:n.token;zv!==i&&(zv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aL(t=zc()){const e=Xi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rO(t,{popupRedirectResolver:eL,persistence:[nD,qI,GI]}),r=aI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oL(s.toString());jO(n,o,()=>o(n.currentUser)),FO(n,l=>o(l))}}const i=iI("auth");return i&&sO(n,`http://${i}`),n}function lL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}HN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rL("Browser");var uL="firebase",cL="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(uL,cL,"app");var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,oS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.F=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.D=function(A,C,x){for(var v=Array(arguments.length-2),K=2;K<arguments.length;K++)v[K-2]=arguments[K];return y.prototype[C].apply(A,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,T){T||(T=0);const A=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)A[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;C<16;++C)A[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],C=I.g[2];let x=I.g[3],v;v=y+(x^T&(C^x))+A[0]+3614090360&4294967295,y=T+(v<<7&4294967295|v>>>25),v=x+(C^y&(T^C))+A[1]+3905402710&4294967295,x=y+(v<<12&4294967295|v>>>20),v=C+(T^x&(y^T))+A[2]+606105819&4294967295,C=x+(v<<17&4294967295|v>>>15),v=T+(y^C&(x^y))+A[3]+3250441966&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(x^T&(C^x))+A[4]+4118548399&4294967295,y=T+(v<<7&4294967295|v>>>25),v=x+(C^y&(T^C))+A[5]+1200080426&4294967295,x=y+(v<<12&4294967295|v>>>20),v=C+(T^x&(y^T))+A[6]+2821735955&4294967295,C=x+(v<<17&4294967295|v>>>15),v=T+(y^C&(x^y))+A[7]+4249261313&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(x^T&(C^x))+A[8]+1770035416&4294967295,y=T+(v<<7&4294967295|v>>>25),v=x+(C^y&(T^C))+A[9]+2336552879&4294967295,x=y+(v<<12&4294967295|v>>>20),v=C+(T^x&(y^T))+A[10]+4294925233&4294967295,C=x+(v<<17&4294967295|v>>>15),v=T+(y^C&(x^y))+A[11]+2304563134&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(x^T&(C^x))+A[12]+1804603682&4294967295,y=T+(v<<7&4294967295|v>>>25),v=x+(C^y&(T^C))+A[13]+4254626195&4294967295,x=y+(v<<12&4294967295|v>>>20),v=C+(T^x&(y^T))+A[14]+2792965006&4294967295,C=x+(v<<17&4294967295|v>>>15),v=T+(y^C&(x^y))+A[15]+1236535329&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(C^x&(T^C))+A[1]+4129170786&4294967295,y=T+(v<<5&4294967295|v>>>27),v=x+(T^C&(y^T))+A[6]+3225465664&4294967295,x=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(x^y))+A[11]+643717713&4294967295,C=x+(v<<14&4294967295|v>>>18),v=T+(x^y&(C^x))+A[0]+3921069994&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(C^x&(T^C))+A[5]+3593408605&4294967295,y=T+(v<<5&4294967295|v>>>27),v=x+(T^C&(y^T))+A[10]+38016083&4294967295,x=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(x^y))+A[15]+3634488961&4294967295,C=x+(v<<14&4294967295|v>>>18),v=T+(x^y&(C^x))+A[4]+3889429448&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(C^x&(T^C))+A[9]+568446438&4294967295,y=T+(v<<5&4294967295|v>>>27),v=x+(T^C&(y^T))+A[14]+3275163606&4294967295,x=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(x^y))+A[3]+4107603335&4294967295,C=x+(v<<14&4294967295|v>>>18),v=T+(x^y&(C^x))+A[8]+1163531501&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(C^x&(T^C))+A[13]+2850285829&4294967295,y=T+(v<<5&4294967295|v>>>27),v=x+(T^C&(y^T))+A[2]+4243563512&4294967295,x=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(x^y))+A[7]+1735328473&4294967295,C=x+(v<<14&4294967295|v>>>18),v=T+(x^y&(C^x))+A[12]+2368359562&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(T^C^x)+A[5]+4294588738&4294967295,y=T+(v<<4&4294967295|v>>>28),v=x+(y^T^C)+A[8]+2272392833&4294967295,x=y+(v<<11&4294967295|v>>>21),v=C+(x^y^T)+A[11]+1839030562&4294967295,C=x+(v<<16&4294967295|v>>>16),v=T+(C^x^y)+A[14]+4259657740&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(T^C^x)+A[1]+2763975236&4294967295,y=T+(v<<4&4294967295|v>>>28),v=x+(y^T^C)+A[4]+1272893353&4294967295,x=y+(v<<11&4294967295|v>>>21),v=C+(x^y^T)+A[7]+4139469664&4294967295,C=x+(v<<16&4294967295|v>>>16),v=T+(C^x^y)+A[10]+3200236656&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(T^C^x)+A[13]+681279174&4294967295,y=T+(v<<4&4294967295|v>>>28),v=x+(y^T^C)+A[0]+3936430074&4294967295,x=y+(v<<11&4294967295|v>>>21),v=C+(x^y^T)+A[3]+3572445317&4294967295,C=x+(v<<16&4294967295|v>>>16),v=T+(C^x^y)+A[6]+76029189&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(T^C^x)+A[9]+3654602809&4294967295,y=T+(v<<4&4294967295|v>>>28),v=x+(y^T^C)+A[12]+3873151461&4294967295,x=y+(v<<11&4294967295|v>>>21),v=C+(x^y^T)+A[15]+530742520&4294967295,C=x+(v<<16&4294967295|v>>>16),v=T+(C^x^y)+A[2]+3299628645&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(C^(T|~x))+A[0]+4096336452&4294967295,y=T+(v<<6&4294967295|v>>>26),v=x+(T^(y|~C))+A[7]+1126891415&4294967295,x=y+(v<<10&4294967295|v>>>22),v=C+(y^(x|~T))+A[14]+2878612391&4294967295,C=x+(v<<15&4294967295|v>>>17),v=T+(x^(C|~y))+A[5]+4237533241&4294967295,T=C+(v<<21&4294967295|v>>>11),v=y+(C^(T|~x))+A[12]+1700485571&4294967295,y=T+(v<<6&4294967295|v>>>26),v=x+(T^(y|~C))+A[3]+2399980690&4294967295,x=y+(v<<10&4294967295|v>>>22),v=C+(y^(x|~T))+A[10]+4293915773&4294967295,C=x+(v<<15&4294967295|v>>>17),v=T+(x^(C|~y))+A[1]+2240044497&4294967295,T=C+(v<<21&4294967295|v>>>11),v=y+(C^(T|~x))+A[8]+1873313359&4294967295,y=T+(v<<6&4294967295|v>>>26),v=x+(T^(y|~C))+A[15]+4264355552&4294967295,x=y+(v<<10&4294967295|v>>>22),v=C+(y^(x|~T))+A[6]+2734768916&4294967295,C=x+(v<<15&4294967295|v>>>17),v=T+(x^(C|~y))+A[13]+1309151649&4294967295,T=C+(v<<21&4294967295|v>>>11),v=y+(C^(T|~x))+A[4]+4149444226&4294967295,y=T+(v<<6&4294967295|v>>>26),v=x+(T^(y|~C))+A[11]+3174756917&4294967295,x=y+(v<<10&4294967295|v>>>22),v=C+(y^(x|~T))+A[2]+718787259&4294967295,C=x+(v<<15&4294967295|v>>>17),v=T+(x^(C|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(C+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const T=y-this.blockSize,A=this.C;let C=this.h,x=0;for(;x<y;){if(C==0)for(;x<=T;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(A[C++]=I.charCodeAt(x++),C==this.blockSize){i(this,A),C=0;break}}else for(;x<y;)if(A[C++]=I[x++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var T=I.length-8;T<I.length;++T)I[T]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)I[y++]=this.g[T]>>>A&255;return I};function s(I,y){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;const T=[];let A=!0;for(let C=I.length-1;C>=0;C--){const x=I[C]|0;A&&x==y||(T[C]=x,A=!1)}this.g=T}var l={};function u(I){return-128<=I&&I<128?s(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(I<0)return k(c(-I));const y=[];let T=1;for(let A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return k(d(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(y,8));let A=f;for(let x=0;x<I.length;x+=8){var C=Math.min(8,I.length-x);const v=parseInt(I.substring(x,x+C),y);C<8?(C=c(Math.pow(y,C)),A=A.j(C).add(c(v))):(A=A.j(T),A=A.add(c(v)))}return A}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();let I=0,y=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);I+=(A>=0?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(P(this))return"-"+k(this).toString(I);const y=c(Math.pow(I,6));var T=this;let A="";for(;;){const C=L(T,y).g;T=w(T,C.j(y));let x=((T.g.length>0?T.g[0]:T.h)>>>0).toString(I);if(T=C,b(T))return x+A;for(;x.length<6;)x="0"+x;A=x+A}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=w(this,I),P(I)?-1:b(I)?0:1};function k(I){const y=I.g.length,T=[];for(let A=0;A<y;A++)T[A]=~I.g[A];return new o(T,~I.h).add(m)}t.abs=function(){return P(this)?k(this):this},t.add=function(I){const y=Math.max(this.g.length,I.g.length),T=[];let A=0;for(let C=0;C<=y;C++){let x=A+(this.i(C)&65535)+(I.i(C)&65535),v=(x>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);A=v>>>16,x&=65535,v&=65535,T[C]=v<<16|x}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(I,y){return I.add(k(y))}t.j=function(I){if(b(this)||b(I))return f;if(P(this))return P(I)?k(this).j(k(I)):k(k(this).j(I));if(P(I))return k(this.j(k(I)));if(this.l(E)<0&&I.l(E)<0)return c(this.m()*I.m());const y=this.g.length+I.g.length,T=[];for(var A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<I.g.length;C++){const x=this.i(A)>>>16,v=this.i(A)&65535,K=I.i(C)>>>16,ie=I.i(C)&65535;T[2*A+2*C]+=v*ie,_(T,2*A+2*C),T[2*A+2*C+1]+=x*ie,_(T,2*A+2*C+1),T[2*A+2*C+1]+=v*K,_(T,2*A+2*C+1),T[2*A+2*C+2]+=x*K,_(T,2*A+2*C+2)}for(I=0;I<y;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=y;I<2*y;I++)T[I]=0;return new o(T,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function S(I,y){this.g=I,this.h=y}function L(I,y){if(b(y))throw Error("division by zero");if(b(I))return new S(f,f);if(P(I))return y=L(k(I),y),new S(k(y.g),k(y.h));if(P(y))return y=L(I,k(y)),new S(k(y.g),y.h);if(I.g.length>30){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;A.l(I)<=0;)T=U(T),A=U(A);var C=j(T,1),x=j(A,1);for(A=j(A,2),T=j(T,2);!b(A);){var v=x.add(A);v.l(I)<=0&&(C=C.add(T),x=v),A=j(A,1),T=j(T,1)}return y=w(I,C.j(y)),new S(C,y)}for(C=f;I.l(y)>=0;){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),x=c(T),v=x.j(y);P(v)||v.l(I)>0;)T-=A,x=c(T),v=x.j(y);b(x)&&(x=m),C=C.add(x),I=w(I,v)}return new S(C,I)}t.B=function(I){return L(this,I).h},t.and=function(I){const y=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){const y=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){const y=Math.max(this.g.length,I.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function U(I){const y=I.g.length+1,T=[];for(let A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function j(I,y){const T=y>>5;y%=32;const A=I.g.length-T,C=[];for(let x=0;x<A;x++)C[x]=y>0?I.i(x+T)>>>y|I.i(x+T+1)<<32-y:I.i(x+T);return new o(C,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,oS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,qr=o}).apply(typeof Hv<"u"?Hv:typeof self<"u"?self:typeof window<"u"?window:{});var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aS,Xo,lS,_u,sp,uS,cS,hS;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ql=="object"&&ql];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in p))break e;p=p[N]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,N,D){for(var $=Array(arguments.length-2),re=2;re<arguments.length;re++)$[re-2]=arguments[re];return h.prototype[N].apply(g,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function b(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=a.length||0;const D=N.length||0;a.length=p+D;for(let $=0;$<D;$++)a[p+$]=N[$]}else a.push(N)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function w(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,p){const g=S.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new P(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let U,j=!1,I=new _,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(T)}};function T(){for(var a;a=w();){try{a.h.call(a.g)}catch(p){k(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function v(a){return/^[\s\xa0]*$/.test(a)}function K(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(K,C),K.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&K.Z.h.call(this)},K.prototype.h=function(){K.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ie="closure_listenable_"+(Math.random()*1e6|0),Rt=0;function on(a,h,p,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=N,this.key=++Rt,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function te(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function pe(a){const h={};for(const p in a)h[p]=a[p];return h}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qt(a,h){let p,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(p in g)a[p]=g[p];for(let D=0;D<Ie.length;D++)p=Ie[D],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function He(a){this.src=a,this.g={},this.h=0}He.prototype.add=function(a,h,p,g,N){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const $=an(a,h,g,N);return $>-1?(h=a[$],p||(h.fa=!1)):(h=new on(h,this.src,D,!!g,N),h.fa=p,a.push(h)),h};function hi(a,h){const p=h.type;if(p in a.g){var g=a.g[p],N=Array.prototype.indexOf.call(g,h,void 0),D;(D=N>=0)&&Array.prototype.splice.call(g,N,1),D&&(z(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function an(a,h,p,g){for(let N=0;N<a.length;++N){const D=a[N];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==g)return N}return-1}var dr="closure_lm_"+(Math.random()*1e6|0),Rh={};function Wg(a,h,p,g,N){if(g&&g.once)return Kg(a,h,p,g,N);if(Array.isArray(h)){for(let D=0;D<h.length;D++)Wg(a,h[D],p,g,N);return null}return p=bh(p),a&&a[ie]?a.J(h,p,l(g)?!!g.capture:!!g,N):qg(a,h,p,!1,g,N)}function qg(a,h,p,g,N,D){if(!h)throw Error("Invalid event type");const $=l(N)?!!N.capture:!!N;let re=Ph(a);if(re||(a[dr]=re=new He(a)),p=re.add(h,p,g,$,D),p.proxy)return p;if(g=U1(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)x||(N=$),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(Qg(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function U1(){function a(p){return h.call(a.src,a.listener,p)}const h=F1;return a}function Kg(a,h,p,g,N){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Kg(a,h[D],p,g,N);return null}return p=bh(p),a&&a[ie]?a.K(h,p,l(g)?!!g.capture:!!g,N):qg(a,h,p,!0,g,N)}function Gg(a,h,p,g,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)Gg(a,h[D],p,g,N);else g=l(g)?!!g.capture:!!g,p=bh(p),a&&a[ie]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],p=an(h,p,g,N),p>-1&&(z(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Ph(a))&&(h=a.g[h.toString()],a=-1,h&&(a=an(h,p,g,N)),(p=a>-1?h[a]:null)&&kh(p))}function kh(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ie])hi(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(Qg(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Ph(h))?(hi(p,a),p.h==0&&(p.src=null,h[dr]=null)):z(a)}}}function Qg(a){return a in Rh?Rh[a]:Rh[a]="on"+a}function F1(a,h){if(a.da)a=!0;else{h=new K(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&kh(a),a=p.call(g,h)}return a}function Ph(a){return a=a[dr],a instanceof He?a:null}var Ch="__closure_events_fn_"+(Math.random()*1e9>>>0);function bh(a){return typeof a=="function"?a:(a[Ch]||(a[Ch]=function(h){return a.handleEvent(h)}),a[Ch])}function lt(){A.call(this),this.i=new He(this),this.M=this,this.G=null}f(lt,A),lt.prototype[ie]=!0,lt.prototype.removeEventListener=function(a,h,p,g){Gg(this,a,h,p,g)};function yt(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var N=h;h=new C(g,a),qt(h,N)}N=!0;let D,$;if(p)for($=p.length-1;$>=0;$--)D=h.g=p[$],N=ml(D,g,!0,h)&&N;if(D=h.g=a,N=ml(D,g,!0,h)&&N,N=ml(D,g,!1,h)&&N,p)for($=0;$<p.length;$++)D=h.g=p[$],N=ml(D,g,!1,h)&&N}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)z(p[g]);delete a.g[h],a.h--}}this.G=null},lt.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},lt.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function ml(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let D=0;D<h.length;++D){const $=h[D];if($&&!$.da&&$.capture==p){const re=$.listener,We=$.ha||$.src;$.fa&&hi(a.i,$),N=re.call(We,g)!==!1&&N}}return N&&!g.defaultPrevented}function j1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Yg(a){a.g=j1(()=>{a.g=null,a.i&&(a.i=!1,Yg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $1 extends A{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Yg(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(a){A.call(this),this.h=a,this.g={}}f(go,A);var Jg=[];function Xg(a){X(a.g,function(h,p){this.g.hasOwnProperty(p)&&kh(h)},a),a.g={}}go.prototype.N=function(){go.Z.N.call(this),Xg(this)},go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xh=o.JSON.stringify,B1=o.JSON.parse,z1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Zg(){}function ey(){}var yo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Nh(){C.call(this,"d")}f(Nh,C);function Oh(){C.call(this,"c")}f(Oh,C);var di={},ty=null;function gl(){return ty=ty||new lt}di.Ia="serverreachability";function ny(a){C.call(this,di.Ia,a)}f(ny,C);function _o(a){const h=gl();yt(h,new ny(h))}di.STAT_EVENT="statevent";function ry(a,h){C.call(this,di.STAT_EVENT,a),this.stat=h}f(ry,C);function _t(a){const h=gl();yt(h,new ry(h,a))}di.Ja="timingevent";function iy(a,h){C.call(this,di.Ja,a),this.size=h}f(iy,C);function vo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function wo(){this.g=!0}wo.prototype.ua=function(){this.g=!1};function H1(a,h,p,g,N,D){a.info(function(){if(a.g)if(D){var $="",re=D.split("&");for(let me=0;me<re.length;me++){var We=re[me].split("=");if(We.length>1){const Je=We[0];We=We[1];const Tn=Je.split("_");$=Tn.length>=2&&Tn[1]=="type"?$+(Je+"="+We+"&"):$+(Je+"=redacted&")}}}else $=null;else $=D;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+p+`
`+$})}function W1(a,h,p,g,N,D,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+p+`
`+D+" "+$})}function rs(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+K1(a,p)+(g?" "+g:"")})}function q1(a,h){a.info(function(){return"TIMEOUT: "+h})}wo.prototype.info=function(){};function K1(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var p=D[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let $=1;$<g.length;$++)g[$]=""}}}}return xh(D)}catch{return h}}var yl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},oy;function Dh(){}f(Dh,Zg),Dh.prototype.g=function(){return new XMLHttpRequest},oy=new Dh;function Eo(a){return encodeURIComponent(String(a))}function G1(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function fr(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new go(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ay}function ay(){this.i=null,this.g="",this.h=!1}var ly={},Lh={};function Vh(a,h,p){a.M=1,a.A=vl(En(h)),a.u=p,a.R=!0,uy(a,null)}function uy(a,h){a.F=Date.now(),_l(a),a.B=En(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ty(p.i,"t",g),a.C=0,p=a.j.L,a.h=new ay,a.g=jy(a.j,p?h:null,!a.u),a.P>0&&(a.O=new $1(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Jg[0]=N.toString()),N=Jg);for(let D=0;D<N.length;D++){const $=Wg(p,N[D],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?pe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),_o(),H1(a.i,a.v,a.B,a.l,a.S,a.u)}fr.prototype.ba=function(a){a=a.target;const h=this.O;h&&gr(a)==3?h.j():this.Y(a)},fr.prototype.Y=function(a){try{if(a==this.g)e:{const re=gr(this.g),We=this.g.ya(),me=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Cy(this.g)))){this.K||re!=4||We==7||(We==8||me<=0?_o(3):_o(2)),Mh(this);var h=this.g.ca();this.X=h;var p=Q1(this);if(this.o=h==200,W1(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var D=g;break t}}D=null}if(a=D)rs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Uh(this,a);else{this.o=!1,this.m=3,_t(12),fi(this),To(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<p.length;)if(Je=Y1(this,p),Je==Lh){re==4&&(this.m=4,_t(14),a=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==ly){this.m=4,_t(15),rs(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else rs(this.i,this.l,Je,null),Uh(this,Je);if(cy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||p.length!=0||this.h.h||(this.m=1,_t(16),a=!1),this.o=this.o&&a,!a)rs(this.i,this.l,p,"[Invalid Chunked Response]"),fi(this),To(this);else if(p.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),qh($),$.P=!0,_t(11))}}else rs(this.i,this.l,p,null),Uh(this,p);re==4&&fi(this),this.o&&!this.K&&(re==4?Vy(this.j,this):(this.o=!1,_l(this)))}else cR(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),fi(this),To(this)}}}catch{}finally{}};function Q1(a){if(!cy(a))return a.g.la();const h=Cy(a.g);if(h==="")return"";let p="";const g=h.length,N=gr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return fi(a),To(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,p+=a.h.i.decode(h[D],{stream:!(N&&D==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function cy(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Y1(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?Lh:(p=Number(h.substring(p,g)),isNaN(p)?ly:(g+=1,g+p>h.length?Lh:(h=h.slice(g,g+p),a.C=g+p,h)))}fr.prototype.cancel=function(){this.K=!0,fi(this)};function _l(a){a.T=Date.now()+a.H,hy(a,a.H)}function hy(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=vo(c(a.aa,a),h)}function Mh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}fr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(q1(this.i,this.B),this.M!=2&&(_o(),_t(17)),fi(this),this.m=2,To(this)):hy(this,this.T-a)};function To(a){a.j.I==0||a.K||Vy(a.j,a)}function fi(a){Mh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Xg(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Uh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Fh(p.h,a))){if(!a.L&&Fh(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Sl(p),Tl(p);else break e;Wh(p),_t(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=vo(c(p.Va,p),6e3));py(p.h)<=1&&p.ta&&(p.ta=void 0)}else mi(p,11)}else if((a.L||p.g==a)&&Sl(p),!v(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let me=N[h];const Je=me[0];if(!(Je<=p.K))if(p.K=Je,me=me[1],p.I==2)if(me[0]=="c"){p.M=me[1],p.ba=me[2];const Tn=me[3];Tn!=null&&(p.ka=Tn,p.j.info("VER="+p.ka));const gi=me[4];gi!=null&&(p.za=gi,p.j.info("SVER="+p.za));const yr=me[5];yr!=null&&typeof yr=="number"&&yr>0&&(g=1.5*yr,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const _r=a.g;if(_r){const Rl=_r.g?_r.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rl){var D=g.h;D.g||Rl.indexOf("spdy")==-1&&Rl.indexOf("quic")==-1&&Rl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(jh(D,D.h),D.h=null))}if(g.G){const Kh=_r.g?_r.g.getResponseHeader("X-HTTP-Session-Id"):null;Kh&&(g.wa=Kh,ve(g.J,g.G,Kh))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var $=a;if(g.na=Fy(g,g.L?g.ba:null,g.W),$.L){my(g.h,$);var re=$,We=g.O;We&&(re.H=We),re.D&&(Mh(re),_l(re)),g.g=$}else Dy(g);p.i.length>0&&Il(p)}else me[0]!="stop"&&me[0]!="close"||mi(p,7);else p.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?mi(p,7):Hh(p):me[0]!="noop"&&p.l&&p.l.qa(me),p.A=0)}}_o(4)}catch{}}var J1=class{constructor(a,h){this.g=a,this.map=h}};function dy(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fy(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function py(a){return a.h?1:a.g?a.g.size:0}function Fh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function jh(a,h){a.g?a.g.add(h):a.h=h}function my(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}dy.prototype.cancel=function(){if(this.i=gy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gy(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return E(a.i)}var yy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X1(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let N,D=null;g>=0?(N=a[p].substring(0,g),D=a[p].substring(g+1)):N=a[p],h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function pr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof pr?(this.l=a.l,Io(this,a.j),this.o=a.o,this.g=a.g,So(this,a.u),this.h=a.h,$h(this,Iy(a.i)),this.m=a.m):a&&(h=String(a).match(yy))?(this.l=!1,Io(this,h[1]||"",!0),this.o=Ao(h[2]||""),this.g=Ao(h[3]||"",!0),So(this,h[4]),this.h=Ao(h[5]||"",!0),$h(this,h[6]||"",!0),this.m=Ao(h[7]||"")):(this.l=!1,this.i=new ko(null,this.l))}pr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ro(h,_y,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ro(h,_y,!0),"@"),a.push(Eo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ro(p,p.charAt(0)=="/"?tR:eR,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ro(p,rR)),a.join("")},pr.prototype.resolve=function(a){const h=En(this);let p=!!a.j;p?Io(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)So(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const D=[];for(let $=0;$<N.length;){const re=N[$++];re=="."?g&&$==N.length&&D.push(""):re==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&$==N.length&&D.push("")):(D.push(re),g=!0)}g=D.join("/")}else g=N}return p?h.h=g:p=a.i.toString()!=="",p?$h(h,Iy(a.i)):p=!!a.m,p&&(h.m=a.m),h};function En(a){return new pr(a)}function Io(a,h,p){a.j=p?Ao(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function So(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function $h(a,h,p){h instanceof ko?(a.i=h,iR(a.i,a.l)):(p||(h=Ro(h,nR)),a.i=new ko(h,a.l))}function ve(a,h,p){a.i.set(h,p)}function vl(a){return ve(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ao(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ro(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Z1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Z1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _y=/[#\/\?@]/g,eR=/[#\?:]/g,tR=/[#\?]/g,nR=/[#\?@]/g,rR=/#/g;function ko(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function pi(a){a.g||(a.g=new Map,a.h=0,a.i&&X1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ko.prototype,t.add=function(a,h){pi(this),this.i=null,a=is(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function vy(a,h){pi(a),h=is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function wy(a,h){return pi(a),h=is(a,h),a.g.has(h)}t.forEach=function(a,h){pi(this),this.g.forEach(function(p,g){p.forEach(function(N){a.call(h,N,g,this)},this)},this)};function Ey(a,h){pi(a);let p=[];if(typeof h=="string")wy(a,h)&&(p=p.concat(a.g.get(is(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return pi(this),this.i=null,a=is(this,a),wy(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ey(this,a),a.length>0?String(a[0]):h):h};function Ty(a,h,p){vy(a,h),p.length>0&&(a.i=null,a.g.set(is(a,h),E(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const N=Eo(p);p=Ey(this,p);for(let D=0;D<p.length;D++){let $=N;p[D]!==""&&($+="="+Eo(p[D])),a.push($)}}return this.i=a.join("&")};function Iy(a){const h=new ko;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function iR(a,h){h&&!a.j&&(pi(a),a.i=null,a.g.forEach(function(p,g){const N=g.toLowerCase();g!=N&&(vy(this,g),Ty(this,N,p))},a)),a.j=h}function sR(a,h){const p=new wo;if(o.Image){const g=new Image;g.onload=d(mr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=d(mr,p,"TestLoadImage: error",!1,h,g),g.onabort=d(mr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(mr,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function oR(a,h){const p=new wo,g=new AbortController,N=setTimeout(()=>{g.abort(),mr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(N),D.ok?mr(p,"TestPingServer: ok",!0,h):mr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),mr(p,"TestPingServer: error",!1,h)})}function mr(a,h,p,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(p)}catch{}}function aR(){this.g=new z1}function Bh(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Bh,Zg),Bh.prototype.g=function(){return new wl(this.i,this.h)};function wl(a,h){lt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(wl,lt),t=wl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Co(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sy(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sy(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Po(this):Co(this),this.readyState==3&&Sy(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Po(this))},t.Na=function(a){this.g&&(this.response=a,Po(this))},t.ga=function(){this.g&&Po(this)};function Po(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Co(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Co(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ay(a){let h="";return X(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function zh(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Ay(p),typeof a=="string"?p!=null&&Eo(p):ve(a,h,p))}function Ce(a){lt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ce,lt);var lR=/^https?$/i,uR=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():oy.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Ry(this,D);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)p.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(uR,h,void 0)>=0)||g||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of p)this.g.setRequestHeader(D,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Ry(this,D)}};function Ry(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ky(a),El(a)}function ky(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,yt(this,"complete"),yt(this,"abort"),El(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),El(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Py(this):this.Xa())},t.Xa=function(){Py(this)};function Py(a){if(a.h&&typeof s<"u"){if(a.v&&gr(a)==4)setTimeout(a.Ca.bind(a),0);else if(yt(a,"readystatechange"),gr(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=D===0){let $=String(a.D).match(yy)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),g=!lR.test($?$.toLowerCase():"")}p=g}if(p)yt(a,"complete"),yt(a,"success");else{a.o=6;try{var N=gr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",ky(a)}}finally{El(a)}}}}function El(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||yt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function gr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return gr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),B1(h)}};function Cy(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cR(a){const h={};a=(a.g&&gr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var p=G1(a[g]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[N]||[];h[N]=D,D.push(p)}te(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function by(a){this.za=0,this.i=[],this.j=new wo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bo("baseRetryDelayMs",5e3,a),this.Za=bo("retryDelaySeedMs",1e4,a),this.Ta=bo("forwardChannelMaxRetries",2,a),this.va=bo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new dy(a&&a.concurrentRequestLimit),this.Ba=new aR,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=by.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){_t(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Fy(this,null,this.W),Il(this)};function Hh(a){if(xy(a),a.I==3){var h=a.V++,p=En(a.J);if(ve(p,"SID",a.M),ve(p,"RID",h),ve(p,"TYPE","terminate"),xo(a,p),h=new fr(a,a.j,h),h.M=2,h.A=vl(En(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=jy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),_l(h)}Uy(a)}function Tl(a){a.g&&(qh(a),a.g.cancel(),a.g=null)}function xy(a){Tl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Sl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Il(a){if(!fy(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),j||(U(),j=!0),I.add(h,a),a.D=0}}function hR(a,h){return py(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=vo(c(a.Ea,a,h),My(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new fr(this,this.j,a);let D=this.o;if(this.U&&(D?(D=pe(D),qt(D,this.U)):D=this.U),this.u!==null||this.R||(N.J=D,D=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Oy(this,N,h),p=En(this.J),ve(p,"RID",a),ve(p,"CVER",22),this.G&&ve(p,"X-HTTP-Session-Id",this.G),xo(this,p),D&&(this.R?h="headers="+Eo(Ay(D))+"&"+h:this.u&&zh(p,this.u,D)),jh(this.h,N),this.Ra&&ve(p,"TYPE","init"),this.S?(ve(p,"$req",h),ve(p,"SID","null"),N.U=!0,Vh(N,p,null)):Vh(N,p,h),this.I=2}}else this.I==3&&(a?Ny(this,a):this.i.length==0||fy(this.h)||Ny(this))};function Ny(a,h){var p;h?p=h.l:p=a.V++;const g=En(a.J);ve(g,"SID",a.M),ve(g,"RID",p),ve(g,"AID",a.K),xo(a,g),a.u&&a.o&&zh(g,a.u,a.o),p=new fr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Oy(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),jh(a.h,p),Vh(p,g,h)}function xo(a,h){a.H&&X(a.H,function(p,g){ve(h,g,p)}),a.l&&X({},function(p,g){ve(h,g,p)})}function Oy(a,h,p){p=Math.min(a.i.length,p);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let re=-1;for(;;){const We=["count="+p];re==-1?p>0?(re=N[0].g,We.push("ofs="+re)):re=0:We.push("ofs="+re);let me=!0;for(let Je=0;Je<p;Je++){var D=N[Je].g;const Tn=N[Je].map;if(D-=re,D<0)re=Math.max(0,N[Je].g-100),me=!1;else try{D="req"+D+"_"||"";try{var $=Tn instanceof Map?Tn:Object.entries(Tn);for(const[gi,yr]of $){let _r=yr;l(yr)&&(_r=xh(yr)),We.push(D+gi+"="+encodeURIComponent(_r))}}catch(gi){throw We.push(D+"type="+encodeURIComponent("_badmap")),gi}}catch{g&&g(Tn)}}if(me){$=We.join("&");break e}}$=void 0}return a=a.i.splice(0,p),h.G=a,$}function Dy(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),j||(U(),j=!0),I.add(h,a),a.A=0}}function Wh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=vo(c(a.Da,a),My(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ly(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=vo(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),Tl(this),Ly(this))};function qh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ly(a){a.g=new fr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=En(a.na);ve(h,"RID","rpc"),ve(h,"SID",a.M),ve(h,"AID",a.K),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ve(h,"TO",a.ia),ve(h,"TYPE","xmlhttp"),xo(a,h),a.u&&a.o&&zh(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=vl(En(h)),p.u=null,p.R=!0,uy(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Tl(this),Wh(this),_t(19))};function Sl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vy(a,h){var p=null;if(a.g==h){Sl(a),qh(a),a.g=null;var g=2}else if(Fh(a.h,h))p=h.G,my(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=gl(),yt(g,new iy(g,p)),Il(a)}else Dy(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&hR(a,h)||g==2&&Wh(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),N){case 1:mi(a,5);break;case 4:mi(a,10);break;case 3:mi(a,6);break;default:mi(a,2)}}}function My(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function mi(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),g=a.Ua;const N=!g;g=new pr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Io(g,"https"),vl(g),N?sR(g.toString(),p):oR(g.toString(),p)}else _t(2);a.I=0,a.l&&a.l.pa(h),Uy(a),xy(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Uy(a){if(a.I=0,a.ja=[],a.l){const h=gy(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ja,h),b(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Fy(a,h,p){var g=p instanceof pr?En(p):new pr(p);if(g.g!="")h&&(g.g=h+"."+g.g),So(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const D=new pr(null);g&&Io(D,g),h&&(D.g=h),N&&So(D,N),p&&(D.h=p),g=D}return p=a.G,h=a.wa,p&&h&&ve(g,p,h),ve(g,"VER",a.ka),xo(a,g),g}function jy(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new Bh({ab:p})):new Ce(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $y(){}t=$y.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Al(){}Al.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){lt.call(this),this.g=new by(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!v(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ss(this)}f(Mt,lt),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Hh(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=xh(a),a=p);h.i.push(new J1(h.Ya++,a)),h.I==3&&Il(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Hh(this.g),delete this.g,Mt.Z.N.call(this)};function By(a){Nh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(By,Nh);function zy(){Oh.call(this),this.status=1}f(zy,Oh);function ss(a){this.g=a}f(ss,$y),ss.prototype.ra=function(){yt(this.g,"a")},ss.prototype.qa=function(a){yt(this.g,new By(a))},ss.prototype.pa=function(a){yt(this.g,new zy)},ss.prototype.oa=function(){yt(this.g,"b")},Al.prototype.createWebChannel=Al.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,hS=function(){return new Al},cS=function(){return gl()},uS=di,sp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yl.NO_ERROR=0,yl.TIMEOUT=8,yl.HTTP_ERROR=6,_u=yl,sy.COMPLETE="complete",lS=sy,ey.EventType=yo,yo.OPEN="a",yo.CLOSE="b",yo.ERROR="c",yo.MESSAGE="d",lt.prototype.listen=lt.prototype.J,Xo=ey,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,aS=Ce}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="12.11.0";function hL(t){ao=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Fi=new Dm("@firebase/firestore");function ls(){return Fi.logLevel}function W(t,...e){if(Fi.logLevel<=oe.DEBUG){const n=e.map(Wm);Fi.debug(`Firestore (${ao}): ${t}`,...n)}}function sr(t,...e){if(Fi.logLevel<=oe.ERROR){const n=e.map(Wm);Fi.error(`Firestore (${ao}): ${t}`,...n)}}function ji(t,...e){if(Fi.logLevel<=oe.WARN){const n=e.map(Wm);Fi.warn(`Firestore (${ao}): ${t}`,...n)}}function Wm(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,dS(t,r,n)}function dS(t,e,n){let r=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw sr(r),new Error(r)}function de(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||dS(e,i,r)}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class fL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pL{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new fS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class mL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yL{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_L(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function op(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Nd(i)===Nd(s)?ae(i,s):Nd(i)?1:-1}return ae(t.length,e.length)}const vL=55296,wL=57343;function Nd(t){const e=t.charCodeAt(0);return e>=vL&&e<=wL}function qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=An.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ae(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),i=An.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?An.extractNumericId(e).compare(An.extractNumericId(n)):op(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class ye extends An{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const EL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends An{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return EL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qv}static keyField(){return new it([qv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ye.fromString(e))}static fromName(e){return new Q(ye.fromString(e).popFirst(5))}static empty(){return new Q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TL(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kv(t){if(!Q.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gv(t){if(Q.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function th(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=th(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function IL(t,e){if(e<=0)throw new H(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function cl(t,e){if(!mS(t))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=-62135596800,Yv=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yv);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qv)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yv}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cl(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:ze("string",Ee._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ee(0,0))}static max(){return new Z(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const za=-1;function SL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new Jr(i,Q.empty(),e)}function AL(t){return new Jr(t.readTime,t.key,za)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(Z.min(),Q.empty(),za)}static max(){return new Jr(Z.max(),Q.empty(),za)}}function RL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==kL)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function CL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class nh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=-1;function rh(t){return t==null}function uc(t){return t===0&&1/t==-1/0}function bL(t){return typeof t=="number"&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="";function xL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jv(e)),e=NL(t.get(n),e);return Jv(e)}function NL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case gS:n+="";break;default:n+=s}}return n}function Jv(t){return t+gS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kl(this.root,e,this.comparator,!0)}}class Kl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zv(this.data.getIterator())}getIteratorFrom(e){return new Zv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Zv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ge(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _S extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _S("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const OL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=OL.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="server_timestamp",wS="__type__",ES="__previous_value__",TS="__local_write_time__";function Gm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[wS])==null?void 0:r.stringValue)===vS}function ih(t){const e=t.mapValue.fields[ES];return Gm(e)?ih(e):e}function Ha(t){const e=Xr(t.mapValue.fields[TS].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n,r,i,s,o,l,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const cc="(default)";class Wa{constructor(e,n){this.projectId=e,this.database=n||cc}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database===cc}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}function LL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS="__type__",SS="__max__",Gl={mapValue:{fields:{__type__:{stringValue:SS}}}},AS="__vector__",hc="value";function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gm(t)?4:ML(t)?9007199254740991:VL(t)?10:11:J(28295,{value:t})}function Vn(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ha(t).isEqual(Ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xr(i.timestampValue),l=Xr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zr(i.bytesValue).isEqual(Zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),l=Le(s.doubleValue);return o===l?uc(o)===uc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Xv(o)!==Xv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function qa(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ew(t.timestampValue,e.timestampValue);case 4:return ew(Ha(t),Ha(e));case 5:return op(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Zr(s),u=Zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ae(l[c],u[c]);if(d!==0)return d}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Le(s.latitude),Le(o.latitude));return l!==0?l:ae(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,b,P;const l=s.fields||{},u=o.fields||{},c=(m=l[hc])==null?void 0:m.arrayValue,d=(E=u[hc])==null?void 0:E.arrayValue,f=ae(((b=c==null?void 0:c.values)==null?void 0:b.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return f!==0?f:tw(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Gl.mapValue&&o===Gl.mapValue)return 0;if(s===Gl.mapValue)return 1;if(o===Gl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=op(u[f],d[f]);if(m!==0)return m;const E=Ks(l[u[f]],c[d[f]]);if(E!==0)return E}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function ew(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Xr(t),r=Xr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function tw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ks(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Gs(t){return ap(t)}function ap(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ap(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ap(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function vu(t){switch(ei(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ih(t);return e?16+vu(e):16;case 5:return 2*t.stringValue.length;case 6:return Zr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+vu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return li(r.fields,(s,o)=>{i+=s.length+vu(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function nw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lp(t){return!!t&&"integerValue"in t}function Qm(t){return!!t&&"arrayValue"in t}function rw(t){return!!t&&"nullValue"in t}function iw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wu(t){return!!t&&"mapValue"in t}function VL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[IS])==null?void 0:r.stringValue)===AS}function ma(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return{...t}}function ML(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ma(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(ma(this.value))}}function RS(t){const e=[];return li(t.fields,(n,r)=>{const i=new it([n]);if(wu(r)){const s=RS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,Z.min(),Z.min(),Z.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,Z.min(),Z.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,Z.min(),Z.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dc{constructor(e,n){this.position=e,this.inclusive=n}}function sw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ks(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ow(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function UL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kS{}class Be extends kS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jL(e,n,r):n==="array-contains"?new zL(e,r):n==="in"?new HL(e,r):n==="not-in"?new WL(e,r):n==="array-contains-any"?new qL(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $L(e,r):new BL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ks(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends kS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vn(e,n)}matches(e){return PS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function PS(t){return t.op==="and"}function CS(t){return FL(t)&&PS(t)}function FL(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function up(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(CS(t))return t.filters.map(e=>up(e)).join(",");{const e=t.filters.map(n=>up(n)).join(",");return`${t.op}(${e})`}}function bS(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof vn?function(r,i){return i instanceof vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&bS(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function xS(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(xS).join(" ,")+"}"}(t):"Filter"}class jL extends Be{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class $L extends Be{constructor(e,n){super(e,"in",n),this.keys=NS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BL extends Be{constructor(e,n){super(e,"not-in",n),this.keys=NS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class zL extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qm(n)&&qa(n.arrayValue,this.value)}}class HL extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qa(this.value.arrayValue,n)}}class WL extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!qa(this.value.arrayValue,n)}}class qL extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function aw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KL(t,e,n,r,i,s,o)}function Ym(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.Te=n}return e.Te}function Jm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ow(t.startAt,e.startAt)&&ow(t.endAt,e.endAt)}function cp(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function GL(t,e,n,r,i,s,o,l){return new co(t,e,n,r,i,s,o,l)}function sh(t){return new co(t)}function lw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QL(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function OS(t){return t.collectionGroup!==null}function ga(t){const e=ee(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Ka(s,r))}),n.has(it.keyField().canonicalString())||e.Ee.push(new Ka(it.keyField(),r))}return e.Ee}function Nn(t){const e=ee(t);return e.Ie||(e.Ie=YL(e,ga(t))),e.Ie}function YL(t,e){if(t.limitType==="F")return aw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ka(i.field,s)});const n=t.endAt?new dc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dc(t.startAt.position,t.startAt.inclusive):null;return aw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hp(t,e){const n=t.filters.concat([e]);return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function JL(t,e){const n=t.explicitOrderBy.concat([e]);return new co(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function fc(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oh(t,e){return Jm(Nn(t),Nn(e))&&t.limitType===e.limitType}function DS(t){return`${Ym(Nn(t))}|lt:${t.limitType}`}function us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xS(i)).join(", ")}]`),rh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gs(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function ah(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ga(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=sw(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ga(r),i)||r.endAt&&!function(o,l,u){const c=sw(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ga(r),i))}(t,e)}function XL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function LS(t){return(e,n)=>{let r=!1;for(const i of ga(t)){const s=ZL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZL(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ks(u,c):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=new Pe(Q.comparator);function or(){return e2}const VS=new Pe(Q.comparator);function Zo(...t){let e=VS;for(const n of t)e=e.insert(n.key,n);return e}function MS(t){let e=VS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return ya()}function US(){return ya()}function ya(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const t2=new Pe(Q.comparator),n2=new Ge(Q.comparator);function le(...t){let e=n2;for(const n of t)e=e.add(n);return e}const r2=new Ge(ae);function i2(){return r2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function FS(t){return{integerValue:""+t}}function jS(t,e){return bL(e)?FS(e):Xm(t,e)}/**
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
 */class lh{constructor(){this._=void 0}}function s2(t,e,n){return t instanceof Ga?function(i,s){const o={fields:{[wS]:{stringValue:vS},[TS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gm(s)&&(s=ih(s)),s&&(o.fields[ES]=s),{mapValue:o}}(n,e):t instanceof Qs?BS(t,e):t instanceof Qa?zS(t,e):function(i,s){const o=$S(i,s),l=uw(o)+uw(i.Ae);return lp(o)&&lp(i.Ae)?FS(l):Xm(i.serializer,l)}(t,e)}function o2(t,e,n){return t instanceof Qs?BS(t,e):t instanceof Qa?zS(t,e):n}function $S(t,e){return t instanceof Ya?function(r){return lp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ga extends lh{}class Qs extends lh{constructor(e){super(),this.elements=e}}function BS(t,e){const n=HS(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qa extends lh{constructor(e){super(),this.elements=e}}function zS(t,e){let n=HS(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class Ya extends lh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function uw(t){return Le(t.integerValue||t.doubleValue)}function HS(t){return Qm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.field=e,this.transform=n}}function a2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qs&&i instanceof Qs||r instanceof Qa&&i instanceof Qa?qs(r.elements,i.elements,Vn):r instanceof Ya&&i instanceof Ya?Vn(r.Ae,i.Ae):r instanceof Ga&&i instanceof Ga}(t.transform,e.transform)}class l2{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uh{}function WS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eg(t.key,en.none()):new hl(t.key,t.data,en.none());{const n=t.data,r=Ct.empty();let i=new Ge(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new jt(i.toArray()),en.none())}}function u2(t,e,n){t instanceof hl?function(i,s,o){const l=i.value.clone(),u=hw(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!Eu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=hw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qS(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n,r){return t instanceof hl?function(s,o,l,u){if(!Eu(s.precondition,o))return l;const c=s.value.clone(),d=dw(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,l,u){if(!Eu(s.precondition,o))return l;const c=dw(s.fieldTransforms,u,o),d=o.data;return d.setAll(qS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Eu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function c2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=$S(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function cw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qs(r,i,(s,o)=>a2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hl extends uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hw(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,o2(o,l,n[i]))}return r}function dw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,s2(s,o,e))}return r}class eg extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h2 extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&u2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=US();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=WS(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>cw(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>cw(n,r))}}class tg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return t2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tg(e,n,r,i)}}/**
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
 */class f2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class p2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ce;function m2(t){switch(t){case V.OK:return J(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function KS(t){if(t===void 0)return sr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ue.OK:return V.OK;case Ue.CANCELLED:return V.CANCELLED;case Ue.UNKNOWN:return V.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return V.INTERNAL;case Ue.UNAVAILABLE:return V.UNAVAILABLE;case Ue.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ue.NOT_FOUND:return V.NOT_FOUND;case Ue.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ue.ABORTED:return V.ABORTED;case Ue.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ue.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:t})}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function g2(){return new TextEncoder}/**
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
 */const y2=new qr([4294967295,4294967295],0);function fw(t){const e=g2().encode(t),n=new oS;return n.update(e),new Uint8Array(n.digest())}function pw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qr([n,r],0),new qr([i,s],0)]}class ng{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ea(`Invalid padding: ${n}`);if(r<0)throw new ea(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ea(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ea(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=qr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(qr.fromNumber(r)));return i.compare(y2)===1&&(i=new qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fw(e),[r,i]=pw(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ng(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=fw(e),[r,i]=pw(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ch(Z.min(),i,new Pe(ae),or(),le())}}class dl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dl(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class GS{constructor(e,n){this.targetId=e,this.Ce=n}}class QS{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class mw{constructor(){this.ve=0,this.Fe=gw(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new dl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=gw()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class _2{constructor(e){this.Ge=e,this.ze=new Map,this.je=or(),this.Je=Ql(),this.He=Ql(),this.Ze=new Pe(ae)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(cp(s))if(r===0){const o=new Q(s.path);this.et(n,o,pt.newNoDocument(o,Z.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Zr(r).toUint8Array()}catch(u){if(u instanceof _S)return ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ng(o,i,s)}catch(u){return ji(u instanceof ea?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&cp(l.target)){const u=new Q(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,pt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=le();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new ch(e,n,this.Ze,this.je,r);return this.je=or(),this.Je=Ql(),this.He=Ql(),this.Ze=new Pe(ae),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new mw,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ge(ae),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ge(ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ql(){return new Pe(Q.comparator)}function gw(){return new Pe(Q.comparator)}const v2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),w2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),E2=(()=>({and:"AND",or:"OR"}))();class T2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dp(t,e){return t.useProto3Json||rh(e)?e:{value:e}}function pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function YS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function I2(t,e){return pc(t,e.toTimestamp())}function On(t){return de(!!t,49232),Z.fromTimestamp(function(n){const r=Xr(n);return new Ee(r.seconds,r.nanos)}(t))}function rg(t,e){return fp(t,e).canonicalString()}function fp(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function JS(t){const e=ye.fromString(t);return de(nA(e),10190,{key:e.toString()}),e}function pp(t,e){return rg(t.databaseId,e.path)}function Od(t,e){const n=JS(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(ZS(n))}function XS(t,e){return rg(t.databaseId,e)}function S2(t){const e=JS(t);return e.length===4?ye.emptyPath():ZS(e)}function mp(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ZS(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function yw(t,e,n){return{name:pp(t,e),fields:n.value.mapValue.fields}}function A2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(de(d===void 0||typeof d=="string",58123),at.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:KS(c.code);return new H(d,c.message||"")}(o);n=new QS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Od(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):Z.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Tu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Od(t,r.document),s=r.readTime?On(r.readTime):Z.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Tu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Od(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new p2(i,s),l=r.targetId;n=new GS(l,o)}}return n}function R2(t,e){let n;if(e instanceof hl)n={update:yw(t,e.key,e.value)};else if(e instanceof eg)n={delete:pp(t,e.key)};else if(e instanceof ui)n={update:yw(t,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof h2))return J(16599,{dt:e.type});n={verify:pp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ya)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:I2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function k2(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(Z.min())&&(o=On(s)),new l2(o,i.transformResults||[])}(n,e))):[]}function P2(t,e){return{documents:[XS(t,e.path)]}}function C2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=XS(t,i);const s=function(c){if(c.length!==0)return tA(vn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:cs(m.field),direction:N2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=dp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function b2(t){let e=S2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=eA(f);return m instanceof vn&&CS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(b){return new Ka(hs(b.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,rh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new dc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new dc(E,m)}(n.endAt)),GL(e,i,o,s,l,"F",u,c)}function x2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hs(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hs(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create(hs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>eA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function N2(t){return v2[t]}function O2(t){return w2[t]}function D2(t){return E2[t]}function cs(t){return{fieldPath:t.canonicalString()}}function hs(t){return it.fromServerFormat(t.fieldPath)}function tA(t){return t instanceof Be?function(n){if(n.op==="=="){if(iw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(rw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(iw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(rw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:O2(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(i=>tA(i));return r.length===1?r[0]:{compositeFilter:{op:D2(n.op),filters:r}}}(t):J(54877,{filter:t})}function L2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function rA(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.yt=e}}function M2(t){const e=b2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.bn=new F2}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Jr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class F2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(ye.comparator)).toArray()}}/**
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
 */const _w={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iA=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(iA,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ys(0)}static ar(){return new Ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="LruGarbageCollector",j2=1048576;function ww([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class $2{constructor(e){this.Pr=e,this.buffer=new Ge(ww),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ww(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class B2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(vw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){uo(n)?W(vw,"Ignoring IndexedDB error during garbage collection: ",n):await lo(n)}await this.Ar(3e5)})}}class z2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(nh.ce);const r=new $2(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(_w)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_w):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ls()<=oe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function H2(t,e){return new z2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class q2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_a(r.mutation,i,jt.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=or();const o=ya(),l=function(){return ya()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ui)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),_a(d.mutation,c,d.mutation.getFieldMask(),Ee.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new q2(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ya();let i=new Pe((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||jt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=US();d.forEach(m=>{if(!s.has(m)){const E=WS(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return QL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Si());let l=za,u=s;return o.next(c=>M.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(d=>({batchId:l,changes:MS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Zo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(f,m){return new co(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,pt.newInvalidDocument(d)))});let l=Zo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&_a(d.mutation,c,jt.empty(),Ee.now()),ah(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:M2(i.bundledQuery),readTime:On(i.readTime)}}(n)),M.resolve()}}/**
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
 */class Q2{constructor(){this.overlays=new Pe(Q.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Si(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f2(n,r));let s=this.Lr.get(n);s===void 0&&(s=le(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class Y2{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.kr=new Ge(Xe.qr),this.Kr=new Ge(Xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Xe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new ye([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new Q(new ye([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=le();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return Q.comparator(e.key,n.key)||ae(e.Jr,n.Jr)}static Ur(e,n){return ae(e.Jr,n.Jr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ge(Xe.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Km:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ae);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new Q(s),0);let l=new Ge(ae);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Xe(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.ti=e,this.docs=function(){return new Pe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RL(AL(d),r)<=0||(i.has(d.key)||ah(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Z2(this)}getSize(e){return M.resolve(this.size)}}class Z2 extends W2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e){this.persistence=e,this.ri=new ts(n=>Ym(n),Jm),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.ii=0,this.si=new ig,this.targetCount=0,this.oi=Ys._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this._i={},this.overlays={},this.ai=new nh(0),this.ui=!1,this.ui=!0,this.ci=new Y2,this.referenceDelegate=e(this),this.li=new eV(this),this.indexManager=new U2,this.remoteDocumentCache=function(i){return new X2(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new V2(n),this.Pi=new G2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Q2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new J2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new tV(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class tV extends PL{constructor(e){super(),this.currentSequenceNumber=e}}class sg{constructor(e){this.persistence=e,this.Ri=new ig,this.Ai=null}static Vi(e){return new sg(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=Q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class mc{constructor(e,n){this.persistence=e,this.fi=new ts(r=>xL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=H2(this,n)}static Vi(e,n){return new mc(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=vu(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new og(e,n.fromCache,r,i)}}/**
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
 */class nV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return nx()?8:CL(gt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nV;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ls()<=oe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(ls()<=oe.DEBUG&&W("QueryEngine","Query:",us(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ls()<=oe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):M.resolve())}gs(e,n){if(lw(n))return M.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fc(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,fc(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return lw(n)||i.isEqual(Z.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(ls()<=oe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),us(n)),this.Ds(e,o,n,SL(i,za)).next(l=>l))})}Ss(e,n){let r=new Ge(LS(e));return n.forEach((i,s)=>{ah(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ls()<=oe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",us(n)),this.fs.getDocumentsMatchingQuery(e,n,Jr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="LocalStore",iV=3e8;class sV{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Pe(ae),this.Fs=new ts(s=>Ym(s),Jm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function oV(t,e,n,r){return new sV(t,e,n,r)}async function oA(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function aV(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let E=M.resolve();return m.forEach(b=>{E=E.next(()=>d.getEntry(u,b)).next(P=>{const k=c.docVersions.get(b);de(k!==null,48541),P.version.compareTo(k)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aA(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function lV(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(at.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(P,k,w){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=iV?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,E,d)&&l.push(n.li.updateTargetData(s,E))});let u=or(),c=le();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(uV(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(Z.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function uV(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(ag,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function cV(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Km),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hV(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function gp(t,e,n){const r=ee(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!uo(o))throw o;W(ag,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Ew(t,e,n){const r=ee(t);let i=Z.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ee(u),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:le())).next(l=>(dV(r,XL(e),l),{documents:l,ks:s})))}function dV(t,e,n){let r=t.Ms.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Tw{constructor(){this.activeTargetIds=i2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fV{constructor(){this.vo=new Tw,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Tw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="ConnectivityMonitor";class Sw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Iw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Iw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yl=null;function yp(){return Yl===null?Yl=function(){return 268435456+Math.round(2147483648*Math.random())}():Yl++,"0x"+Yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="RestConnection",mV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class gV{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===cc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=yp(),l=this.Qo(e,n.toUriEncodedString());W(Dd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=Ji(c);return this.zo(e,l,u,r,d).then(f=>(W(Dd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw ji(Dd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=mV[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection",$o=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ds extends gV{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ds.c_){const e=cS();$o(e,uS.STAT_EVENT,n=>{n.stat===sp.PROXY?W(ht,"STAT_EVENT: detected buffering proxy"):n.stat===sp.NOPROXY&&W(ht,"STAT_EVENT: detected no buffering proxy")}),Ds.c_=!0}}zo(e,n,r,i,s){const o=yp();return new Promise((l,u)=>{const c=new aS;c.setWithCredentials(!0),c.listenOnce(lS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _u.NO_ERROR:const f=c.getResponseJson();W(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case _u.TIMEOUT:W(ht,`RPC '${e}' ${o} timed out`),u(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case _u.HTTP_ERROR:const m=c.getStatus();if(W(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const b=E==null?void 0:E.error;if(b&&b.status&&b.message){const P=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(b.status);u(new H(P,b.message))}else u(new H(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(ht,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);W(ht,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=yp(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");W(ht,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let f=!1,m=!1;const E=new yV({Jo:b=>{m?W(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(f||(W(ht,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),W(ht,`RPC '${e}' stream ${i} sending:`,b),d.send(b))},Ho:()=>d.close()});return $o(d,Xo.EventType.OPEN,()=>{m||(W(ht,`RPC '${e}' stream ${i} transport opened.`),E.i_())}),$o(d,Xo.EventType.CLOSE,()=>{m||(m=!0,W(ht,`RPC '${e}' stream ${i} transport closed`),E.o_(),this.I_(d))}),$o(d,Xo.EventType.ERROR,b=>{m||(m=!0,ji(ht,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),E.o_(new H(V.UNAVAILABLE,"The operation could not be completed")))}),$o(d,Xo.EventType.MESSAGE,b=>{var P;if(!m){const k=b.data[0];de(!!k,16349);const w=k,_=(w==null?void 0:w.error)||((P=w[0])==null?void 0:P.error);if(_){W(ht,`RPC '${e}' stream ${i} received error:`,_);const S=_.status;let L=function(I){const y=Ue[I];if(y!==void 0)return KS(y)}(S),U=_.message;S==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&ji(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=V.INTERNAL,U="Unknown error status: "+S+" with message "+_.message),m=!0,E.o_(new H(L,U)),d.close()}else W(ht,`RPC '${e}' stream ${i} received:`,k),E.__(k)}}),Ds.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return hS()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(t){return new Ds(t)}function Ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){return new T2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ds.c_=!1;class lA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="PersistentStream";class uA{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lA(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Aw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(Aw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vV extends uA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=A2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?On(o.readTime):Z.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=mp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=cp(u)?{documents:P2(s,u)}:{query:C2(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=YS(s,o.resumeToken);const c=dp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=pc(s,o.snapshotVersion.toTimestamp());const c=dp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=x2(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=mp(this.serializer),n.removeTarget=e,this.q_(n)}}class wV extends uA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=k2(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=mp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>R2(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{}class TV extends EV{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,fp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,fp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function IV(t,e,n,r){return new TV(t,e,n,r)}class SV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sr(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="RemoteStore";class AV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ns(this)&&(W($i,"Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.Ia.add(4),await fl(c),c.Va.set("Unknown"),c.Ia.delete(4),await dh(c)}(this))})}),this.Va=new SV(r,i)}}async function dh(t){if(ns(t))for(const e of t.Ra)await e(!0)}async function fl(t){for(const e of t.Ra)await e(!1)}function cA(t,e){const n=ee(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),hg(n)?cg(n):ho(n).O_()&&ug(n,e))}function lg(t,e){const n=ee(t),r=ho(n);n.Ea.delete(e),r.O_()&&hA(n,e),n.Ea.size===0&&(r.O_()?r.L_():ns(n)&&n.Va.set("Unknown"))}function ug(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ho(t).Z_(e)}function hA(t,e){t.da.$e(e),ho(t).X_(e)}function cg(t){t.da=new _2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ho(t).start(),t.Va.ua()}function hg(t){return ns(t)&&!ho(t).x_()&&t.Ea.size>0}function ns(t){return ee(t).Ia.size===0}function dA(t){t.da=void 0}async function RV(t){t.Va.set("Online")}async function kV(t){t.Ea.forEach((e,n)=>{ug(t,e)})}async function PV(t,e){dA(t),hg(t)?(t.Va.ha(e),cg(t)):t.Va.set("Unknown")}async function CV(t,e,n){if(t.Va.set("Online"),e instanceof QS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){W($i,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gc(t,r)}else if(e instanceof Tu?t.da.Xe(e):e instanceof GS?t.da.st(e):t.da.tt(e),!n.isEqual(Z.min()))try{const r=await aA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),hA(s,u);const f=new Dr(d.target,u,c,d.sequenceNumber);ug(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W($i,"Failed to raise snapshot:",r),await gc(t,r)}}async function gc(t,e,n){if(!uo(e))throw e;t.Ia.add(1),await fl(t),t.Va.set("Offline"),n||(n=()=>aA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W($i,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await dh(t)})}function fA(t,e){return e().catch(n=>gc(t,n,e))}async function fh(t){const e=ee(t),n=ti(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Km;for(;bV(e);)try{const i=await cV(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,xV(e,i)}catch(i){await gc(e,i)}pA(e)&&mA(e)}function bV(t){return ns(t)&&t.Ta.length<10}function xV(t,e){t.Ta.push(e);const n=ti(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function pA(t){return ns(t)&&!ti(t).x_()&&t.Ta.length>0}function mA(t){ti(t).start()}async function NV(t){ti(t).ra()}async function OV(t){const e=ti(t);for(const n of t.Ta)e.ea(n.mutations)}async function DV(t,e,n){const r=t.Ta.shift(),i=tg.from(r,e,n);await fA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await fh(t)}async function LV(t,e){e&&ti(t).Y_&&await async function(r,i){if(function(o){return m2(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();ti(r).B_(),await fA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await fh(r)}}(t,e),pA(t)&&mA(t)}async function Rw(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),W($i,"RemoteStore received new credentials");const r=ns(n);n.Ia.add(3),await fl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await dh(n)}async function VV(t,e){const n=ee(t);e?(n.Ia.delete(2),await dh(n)):e||(n.Ia.add(2),await fl(n),n.Va.set("Unknown"))}function ho(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.sa(),new vV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:RV.bind(null,t),Yo:kV.bind(null,t),t_:PV.bind(null,t),H_:CV.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),hg(t)?cg(t):t.Va.set("Unknown")):(await t.ma.stop(),dA(t))})),t.ma}function ti(t){return t.fa||(t.fa=function(n,r,i){const s=ee(n);return s.sa(),new wV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:NV.bind(null,t),t_:LV.bind(null,t),ta:OV.bind(null,t),na:DV.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await fh(t)):(await t.fa.stop(),t.Ta.length>0&&(W($i,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new dg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fg(t,e){if(sr("AsyncQueue",`${e}: ${t}`),uo(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{static emptySet(e){return new Ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Zo(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.ga=new Pe(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Js(e,n,Ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class UV{constructor(){this.queries=Pw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=Pw(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Pw(){return new ts(t=>DS(t),oh)}async function pg(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new MV,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=fg(o,`Initialization of query '${us(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&gg(n)}async function mg(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FV(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&gg(n)}function jV(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function gg(t){t.Ca.forEach(e=>{e.next()})}var _p,Cw;(Cw=_p||(_p={})).Ma="default",Cw.Cache="cache";class yg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==_p.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.key=e}}class yA{constructor(e){this.key=e}}class $V{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=le(),this.mutatedKeys=le(),this.eu=LS(e),this.tu=new Ls(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new kw,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=ah(this.query,f)?f:null,b=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;m&&E?m.data.isEqual(E.data)?b!==P&&(r.track({type:3,doc:E}),k=!0):this.su(m,E)||(r.track({type:2,doc:E}),k=!0,(u&&this.eu(E,u)>0||c&&this.eu(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),k=!0):m&&!E&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(l=!0)),k&&(E?(o=o.add(E),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(E,b){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:k})}};return P(E)-P(b)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Js(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kw,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new yA(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new gA(r))}),n}cu(e){this.Za=e.ks,this.Ya=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Js.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _g="SyncEngine";class BV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zV{constructor(e){this.key=e,this.hu=!1}}class HV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ts(l=>DS(l),oh),this.Eu=new Map,this.Iu=new Set,this.Ru=new Pe(Q.comparator),this.Au=new Map,this.Vu=new ig,this.du={},this.mu=new Map,this.fu=Ys.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function WV(t,e,n=!0){const r=IA(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await _A(r,e,n,!0),i}async function qV(t,e){const n=IA(t);await _A(n,e,!0,!1)}async function _A(t,e,n,r){const i=await hV(t.localStore,Nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&cA(t.remoteStore,i),l}async function KV(t,e,n,r,i){t.pu=(f,m,E)=>async function(P,k,w,_){let S=k.view.ru(w);S.bs&&(S=await Ew(P.localStore,k.query,!1).then(({documents:I})=>k.view.ru(I,S)));const L=_&&_.targetChanges.get(k.targetId),U=_&&_.targetMismatches.get(k.targetId)!=null,j=k.view.applyChanges(S,P.isPrimaryClient,L,U);return xw(P,k.targetId,j.au),j.snapshot}(t,f,m,E);const s=await Ew(t.localStore,e,!0),o=new $V(e,s.ks),l=o.ru(s.documents),u=dl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);xw(t,n,c.au);const d=new BV(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function GV(t,e,n){const r=ee(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!oh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&lg(r.remoteStore,i.targetId),vp(r,i.targetId)}).catch(lo)):(vp(r,i.targetId),await gp(r.localStore,i.targetId,!0))}async function QV(t,e){const n=ee(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lg(n.remoteStore,r.targetId))}async function YV(t,e,n){const r=rM(t);try{const i=await function(o,l){const u=ee(o),c=Ee.now(),d=l.reduce((E,b)=>E.add(b.key),le());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let b=or(),P=le();return u.xs.getEntries(E,d).next(k=>{b=k,b.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,b)).next(k=>{f=k;const w=[];for(const _ of l){const S=c2(_,f.get(_.key).overlayedDocument);S!=null&&w.push(new ui(_.key,S,RS(S.value.mapValue),en.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,w,l)}).next(k=>{m=k;const w=k.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(E,k.batchId,w)})}).then(()=>({batchId:m.batchId,changes:MS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Pe(ae)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await pl(r,i.changes),await fh(r.remoteStore)}catch(i){const s=fg(i,"Failed to persist write");n.reject(s)}}async function vA(t,e){const n=ee(t);try{const r=await lV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?de(o.hu,14607):i.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))}),await pl(n,r,e)}catch(r){await lo(r)}}function bw(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&gg(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JV(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Pe(Q.comparator);o=o.insert(s,pt.newNoDocument(s,Z.min()));const l=le().add(s),u=new ch(Z.min(),new Map,new Pe(ae),o,l);await vA(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),vg(r)}else await gp(r.localStore,e,!1).then(()=>vp(r,e,n)).catch(lo)}async function XV(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await aV(n.localStore,e);EA(n,r,null),wA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pl(n,i)}catch(i){await lo(i)}}async function ZV(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(de(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);EA(r,e,n),wA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pl(r,i)}catch(i){await lo(i)}}function wA(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function EA(t,e,n){const r=ee(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function vp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||TA(t,r)})}function TA(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(lg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),vg(t))}function xw(t,e,n){for(const r of n)r instanceof gA?(t.Vu.addReference(r.key,e),eM(t,r)):r instanceof yA?(W(_g,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||TA(t,r.key)):J(19791,{wu:r})}function eM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(W(_g,"New document in limbo: "+n),t.Iu.add(r),vg(t))}function vg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Q(ye.fromString(e)),r=t.fu.next();t.Au.set(r,new zV(n)),t.Ru=t.Ru.insert(n,r),cA(t.remoteStore,new Dr(Nn(sh(n.path)),r,"TargetPurposeLimboResolution",nh.ce))}}async function pl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=og.Is(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,m=>M.forEach(m.Ts,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>M.forEach(m.Es,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!uo(f))throw f;W(ag,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.vs.get(m),b=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(b);d.vs=d.vs.insert(m,P)}}}(r.localStore,s))}async function tM(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){W(_g,"User change. New user:",e.toKey());const r=await oA(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pl(n,r.Ns)}}function nM(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let i=le();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function IA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JV.bind(null,e),e.Pu.H_=FV.bind(null,e.eventManager),e.Pu.yu=jV.bind(null,e.eventManager),e}function rM(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZV.bind(null,e),e}class yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return oV(this.persistence,new rV,e.initialUser,this.serializer)}Cu(e){return new sA(sg.Vi,this.serializer)}Du(e){return new fV}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yc.provider={build:()=>new yc};class iM extends yc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof mc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new B2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new sA(r=>mc.Vi(r,n),this.serializer)}}class wp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tM.bind(null,this.syncEngine),await VV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UV}()}createDatastore(e){const n=hh(e.databaseInfo.databaseId),r=_V(e.databaseInfo);return IV(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new AV(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>bw(this.syncEngine,n,0),function(){return Sw.v()?new Sw:new pV}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new HV(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);W($i,"RemoteStore shutting down."),s.Ia.add(5),await fl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}wp.provider={build:()=>new wp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="FirestoreClient";class sM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=qm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(ni,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(ni,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress(),W(ni,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oM(t);W(ni,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Rw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Rw(e.remoteStore,i)),t._onlineComponents=e}async function oM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(ni,"Using user provided OfflineComponentProvider");try{await Vd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ji("Error using user provided cache. Falling back to memory cache: "+n),await Vd(t,new yc)}}else W(ni,"Using default OfflineComponentProvider"),await Vd(t,new iM(void 0));return t._offlineComponents}async function SA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(ni,"Using user provided OnlineComponentProvider"),await Nw(t,t._uninitializedComponentsProvider._online)):(W(ni,"Using default OnlineComponentProvider"),await Nw(t,new wp))),t._onlineComponents}function aM(t){return SA(t).then(e=>e.syncEngine)}async function _c(t){const e=await SA(t),n=e.eventManager;return n.onListen=WV.bind(null,e.syncEngine),n.onUnlisten=GV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QV.bind(null,e.syncEngine),n}function lM(t,e,n,r){const i=new wg(r),s=new yg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>pg(await _c(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>mg(await _c(t),s))}}function uM(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new wg({next:m=>{d.Nu(),o.enqueueAndForget(()=>mg(s,f));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new yg(sh(l.path),d,{includeMetadataChanges:!0,qa:!0});return pg(s,f)}(await _c(t),t.asyncQueue,e,n,r)),r.promise}function cM(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new wg({next:m=>{d.Nu(),o.enqueueAndForget(()=>mg(s,f)),m.fromCache&&u.source==="server"?c.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new yg(l,d,{includeMetadataChanges:!0,qa:!0});return pg(s,f)}(await _c(t),t.asyncQueue,e,n,r)),r.promise}function hM(t,e){const n=new Yn;return t.asyncQueue.enqueueAndForget(async()=>YV(await aM(t),e,n)),n.promise}/**
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
 */function AA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM="ComponentProvider",Ow=new Map;function fM(t,e,n,r,i){return new DL(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,AA(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="firestore.googleapis.com",Dw=!0;class Lw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=RA,this.ssl=Dw}else this.host=e.host,this.ssl=e.ssl??Dw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<j2)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AA(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ph{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dL;switch(r.type){case"firstParty":return new gL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ow.get(n);r&&(W(dM,"Removing Datastore"),Ow.delete(n),r.terminate())}(this),Promise.resolve()}}function pM(t,e,n,r={}){var c;t=Vt(t,ph);const i=Ji(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Om(`https://${l}`),s.host!==RA&&s.host!==l&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Yr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=dt.MOCK_USER;else{d=lI(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(m)}t._authCredentials=new fL(new fS(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(cl(n,Ne._jsonSchema))return new Ne(e,r||null,new Q(ye.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:ze("string",Ne._jsonSchemaVersion),referencePath:ze("string")};class Kr extends hr{constructor(e,n,r){super(e,n,sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new Q(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function mM(t,e,...n){if(t=ne(t),pS("collection","path",e),t instanceof ph){const r=ye.fromString(e,...n);return Gv(r),new Kr(t,null,r)}{if(!(t instanceof Ne||t instanceof Kr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Gv(r),new Kr(t.firestore,null,r)}}function Pi(t,e,...n){if(t=ne(t),arguments.length===1&&(e=qm.newId()),pS("doc","path",e),t instanceof ph){const r=ye.fromString(e,...n);return Kv(r),new Ne(t,null,new Q(r))}{if(!(t instanceof Ne||t instanceof Kr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Kv(r),new Ne(t.firestore,t instanceof Kr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="AsyncQueue";class Mw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lA(this,"async_queue_retry"),this._c=()=>{const r=Ld();r&&W(Vw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ld();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ld();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Yn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!uo(e))throw e;W(Vw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,sr("INTERNAL UNHANDLED ERROR: ",Uw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=dg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&J(47125,{Pc:Uw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Uw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ar extends ph{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Mw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mw(e),this._firestoreClient=void 0,await e}}}function gM(t,e){const n=typeof t=="object"?t:zc(),r=typeof t=="string"?t:e||cc,i=Xi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sI("firestore");s&&pM(i,...s)}return i}function mh(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yM(t),t._firestoreClient}function yM(t){var r,i,s,o;const e=t._freezeSettings(),n=fM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new sM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(at.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cl(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:ze("string",Jt._jsonSchemaVersion),bytes:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(cl(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:ze("string",Dn._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
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
 */class gn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cl(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new gn(e.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:ze("string",gn._jsonSchemaVersion),vectorValues:ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=/^__.*__$/;class vM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new hl(e,this.data,n,this.fieldTransforms)}}class kA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class gh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new gh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return vc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(PA(this.dataSource)&&_M.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class wM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hh(e)}A(e,n,r,i=!1){return new gh({dataSource:e,methodName:n,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yh(t){const e=t._freezeSettings(),n=hh(t._databaseId);return new wM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CA(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);Ag("Data must be an object, but it was:",o,r);const l=bA(r,o);let u,c;if(s.merge)u=new jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Bi(e,f,n);if(!o.contains(m))throw new H(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);OA(d,m)||d.push(m)}u=new jt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new vM(new Ct(l),u,c)}class _h extends fo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _h}}function EM(t,e,n){return new gh({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Tg extends fo{_toFieldTransform(e){return new Zm(e.path,new Ga)}isEqual(e){return e instanceof Tg}}class Ig extends fo{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=EM(this,e,!0),r=this.Sc.map(s=>po(s,n)),i=new Qs(r);return new Zm(e.path,i)}isEqual(e){return e instanceof Ig&&Yr(this.Sc,e.Sc)}}class Sg extends fo{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new Ya(e.serializer,jS(e.serializer,this.bc));return new Zm(e.path,n)}isEqual(e){return e instanceof Sg&&this.bc===e.bc}}function TM(t,e,n,r){const i=t.A(1,e,n);Ag("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();li(r,(u,c)=>{const d=NA(e,u,n);c=ne(c);const f=i.fc(d);if(c instanceof _h)s.push(d);else{const m=po(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new jt(s);return new kA(o,l,i.fieldTransforms)}function IM(t,e,n,r,i,s){const o=t.A(1,e,n),l=[Bi(e,r,n)],u=[i];if(s.length%2!=0)throw new H(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Bi(e,s[m])),u.push(s[m+1]);const c=[],d=Ct.empty();for(let m=l.length-1;m>=0;--m)if(!OA(c,l[m])){const E=l[m];let b=u[m];b=ne(b);const P=o.fc(E);if(b instanceof _h)c.push(E);else{const k=po(b,P);k!=null&&(c.push(E),d.set(E,k))}}const f=new jt(c);return new kA(d,f,o.fieldTransforms)}function SM(t,e,n,r=!1){return po(n,t.A(r?4:3,e))}function po(t,e){if(xA(t=ne(t)))return Ag("Unsupported field value:",e,t),bA(t,e);if(t instanceof fo)return function(r,i){if(!PA(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=po(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:pc(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pc(i.serializer,s)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jt)return{bytesValue:YS(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gn)return function(o,l){const u=o instanceof gn?o.toArray():o;return{mapValue:{fields:{[IS]:{stringValue:AS},[hc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return Xm(l.serializer,d)})}}}}}}(r,i);if(rA(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${th(r)}`)}(t,e)}function bA(t,e){const n={};return yS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,i)=>{const s=po(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof Dn||t instanceof Jt||t instanceof Ne||t instanceof fo||t instanceof gn||rA(t))}function Ag(t,e,n){if(!xA(n)||!mS(n)){const r=th(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Bi(t,e,n){if((e=ne(e))instanceof Eg)return e._internalPath;if(typeof e=="string")return NA(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const AM=new RegExp("[~\\*/\\[\\]]");function NA(t,e,n){if(e.search(AM)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Eg(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function OA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[hc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Le(o.doubleValue));return new gn(n)}convertGeoPoint(e){return new Dn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ih(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);de(nA(r),9688,{name:e});const i=new Wa(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Rg extends RM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function Fw(){return new Tg("serverTimestamp")}function c6(...t){return new Ig("arrayUnion",t)}function h6(t){return new Sg("increment",t)}const jw="@firebase/firestore",$w="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Bi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kM extends DA{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kg{}class Pg extends kg{}function d6(t,e,...n){let r=[];e instanceof kg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cg).length,l=s.filter(u=>u instanceof vh).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vh extends Pg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vh(e,n,r)}_apply(e){const n=this._parse(e);return VA(e._query,n),new hr(e.firestore,e.converter,hp(e._query,n))}_parse(e){const n=yh(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Hw(f,d);const b=[];for(const P of f)b.push(zw(u,s,P));m={arrayValue:{values:b}}}else m=zw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Hw(f,d),m=SM(l,o,f,d==="in"||d==="not-in");return Be.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function f6(t,e,n){const r=e,i=Bi("where",t);return vh._create(i,r,n)}class Cg extends kg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)VA(o,u),o=hp(o,u)}(e._query,n),new hr(e.firestore,e.converter,hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bg extends Pg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ka(s,o)}(e._query,this._field,this._direction);return new hr(e.firestore,e.converter,JL(e._query,n))}}function p6(t,e="asc"){const n=e,r=Bi("orderBy",t);return bg._create(r,n)}class xg extends Pg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new xg(e,n,r)}_apply(e){return new hr(e.firestore,e.converter,fc(e._query,this._limit,this._limitType))}}function m6(t){return IL("limit",t),xg._create("limit",t,"F")}function zw(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!OS(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!Q.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nw(t,new Q(r))}if(n instanceof Ne)return nw(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${th(n)}.`)}function Hw(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VA(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function MA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ta{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ci extends DA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ci._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ci._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ci._jsonSchema={type:ze("string",Ci._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Iu extends Ci{data(e={}){return super.data(e)}}class bi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ta(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Iu(this._firestore,this._userDataWriter,r.key,r,new ta(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Iu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ta(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Iu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ta(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:PM(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
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
 */bi._jsonSchemaVersion="firestore/querySnapshot/1.0",bi._jsonSchema={type:ze("string",bi._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){t=Vt(t,Ne);const e=Vt(t.firestore,ar),n=mh(e);return uM(n,t._key).then(r=>FA(e,t,r))}function g6(t){t=Vt(t,hr);const e=Vt(t.firestore,ar),n=mh(e),r=new Rg(e);return LA(t._query),cM(n,t._query).then(i=>new bi(e,r,t,i))}function Ww(t,e,n){t=Vt(t,Ne);const r=Vt(t.firestore,ar),i=MA(t.converter,e,n),s=yh(r);return wh(r,[CA(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,en.none())])}function Ja(t,e,n,...r){t=Vt(t,Ne);const i=Vt(t.firestore,ar),s=yh(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Eg?IM(s,"updateDoc",t._key,e,n,r):TM(s,"updateDoc",t._key,e),wh(i,[o.toMutation(t._key,en.exists(!0))])}function y6(t){return wh(Vt(t.firestore,ar),[new eg(t._key,en.none())])}function CM(t,e){const n=Vt(t.firestore,ar),r=Pi(t),i=MA(t.converter,e),s=yh(t.firestore);return wh(n,[CA(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function _6(t,...e){var c,d,f;t=ne(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Bw(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Bw(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof Ne)o=Vt(t.firestore,ar),l=sh(t._key.path),s={next:m=>{e[r]&&e[r](FA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Vt(t,hr);o=Vt(m.firestore,ar),l=m._query;const E=new Rg(o);s={next:b=>{e[r]&&e[r](new bi(o,E,m,b))},error:e[r+1],complete:e[r+2]},LA(t._query)}const u=mh(o);return lM(u,l,i,s)}function wh(t,e){const n=mh(t);return hM(n,e)}function FA(t,e,n){const r=n.docs.get(e._key),i=new Rg(t);return new Ci(t,i,e._key,r,new ta(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){hL(Zi),_n(new rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ar(new pL(r.getProvider("auth-internal")),new yL(o,r.getProvider("app-check-internal")),LL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dt(jw,$w,e),Dt(jw,$w,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="firebasestorage.googleapis.com",$A="storageBucket",bM=2*60*1e3,xM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends wn{constructor(e,n,r=0){super(Md(e),`Firebase Storage: ${n} (${Md(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Md(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Md(t){return"storage/"+t}function Ng(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Oe.UNKNOWN,t)}function NM(t){return new De(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function OM(t){return new De(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Oe.UNAUTHENTICATED,t)}function LM(){return new De(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function VM(t){return new De(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function MM(){return new De(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UM(){return new De(Oe.CANCELED,"User canceled the upload/download.")}function FM(t){return new De(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function jM(t){return new De(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $M(){return new De(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$A+"' property when initializing the app?")}function BM(){return new De(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zM(){return new De(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HM(t){return new De(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ep(t){return new De(Oe.INVALID_ARGUMENT,t)}function BA(){return new De(Oe.APP_DELETED,"The Firebase app was deleted.")}function WM(t){return new De(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function va(t,e){return new De(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Bo(t){throw new De(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw jM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),b={bucket:1,path:3},P=n===jA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",w=new RegExp(`^https?://${P}/${i}/${k}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:E,indices:b,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<S.length;L++){const U=S[L],j=U.regex.exec(e);if(j){const I=j[U.indices.bucket];let y=j[U.indices.path];y||(y=""),r=new $t(I,y),U.postModify(r);break}}if(r==null)throw FM(e);return r}}class qM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function f(k){i=setTimeout(()=>{i=null,t(E,u())},k)}function m(){s&&clearTimeout(s)}function E(k,...w){if(c){m();return}if(k){m(),d.call(null,k,...w);return}if(u()||o){m(),d.call(null,k,...w);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let b=!1;function P(k){b||(b=!0,m(),!c&&(i!==null?(k||(l=2),clearTimeout(i),f(0)):k||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function GM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t){return t!==void 0}function YM(t){return typeof t=="object"&&!Array.isArray(t)}function Og(t){return typeof t=="string"||t instanceof String}function qw(t){return Dg()&&t instanceof Blob}function Dg(){return typeof Blob<"u"}function Kw(t,e,n,r){if(r<e)throw Ep(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ep(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function zA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var xi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xi||(xi={}));/**
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
 */function JM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,P)=>{this.resolve_=b,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Jl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===xi.NO_ERROR,u=s.getStatus();if(!l||JM(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===xi.ABORT;r(!1,new Jl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Jl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());QM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Ng();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?BA():UM();o(u)}else{const u=MM();o(u)}};this.canceled_?n(!1,new Jl(!1,null,!0)):this.backoffId_=KM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rU(t,e,n,r,i,s,o=!0,l=!1){const u=zA(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return tU(d,e),ZM(d,n),eU(d,s),nU(d,r),new XM(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sU(...t){const e=iU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Dg())return new Blob(t);throw new De(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aU(t){if(typeof atob>"u")throw HM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ud{constructor(e,n){this.data=e,this.contentType=n||null}}function lU(t,e){switch(t){case Cn.RAW:return new Ud(HA(e));case Cn.BASE64:case Cn.BASE64URL:return new Ud(WA(t,e));case Cn.DATA_URL:return new Ud(cU(e),hU(e))}throw Ng()}function HA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uU(t){let e;try{e=decodeURIComponent(t)}catch{throw va(Cn.DATA_URL,"Malformed data URL.")}return HA(e)}function WA(t,e){switch(t){case Cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw va(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw va(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aU(e)}catch(i){throw i.message.includes("polyfill")?i:va(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class qA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw va(Cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=dU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cU(t){const e=new qA(t);return e.base64?WA(Cn.BASE64,e.rest):uU(e.rest)}function hU(t){return new qA(t).contentType}function dU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){let r=0,i="";qw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(qw(this.data_)){const r=this.data_,i=oU(r,e,n);return i===null?null:new Cr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cr(r,!0)}}static getBlob(...e){if(Dg()){const n=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(sU.apply(null,n))}else{const n=e.map(o=>Og(o)?lU(Cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Cr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){let e;try{e=JSON.parse(t)}catch{return null}return YM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function GA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mU(t,e){return e}class vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||mU}}let Xl=null;function gU(t){return!Og(t)||t.length<2?t:GA(t)}function QA(){if(Xl)return Xl;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(s,o){return gU(o)}const n=new vt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new vt("size");return i.xform=r,t.push(i),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),Xl=t,Xl}function yU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new $t(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _U(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return yU(r,t),r}function YA(t,e,n){const r=KA(e);return r===null?null:_U(t,r,n)}function vU(t,e,n,r){const i=KA(e);if(i===null||!Og(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),E=Lg(m,n,r),b=zA({alt:"media",token:c});return E+b})[0]}function wU(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class JA{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){if(!t)throw Ng()}function EU(t,e){function n(r,i){const s=YA(t,i,e);return XA(s!==null),s}return n}function TU(t,e){function n(r,i){const s=YA(t,i,e);return XA(s!==null),vU(s,i,t.host,t._protocol)}return n}function ZA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=LM():i=DM():n.getStatus()===402?i=OM(t.bucket):n.getStatus()===403?i=VM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function IU(t){const e=ZA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=NM(t.path)),s.serverResponse=i.serverResponse,s}return n}function SU(t,e,n){const r=e.fullServerUrl(),i=Lg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new JA(i,s,TU(t,n),o);return l.errorHandler=IU(e),l}function AU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function RU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=AU(null,e)),r}function kU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let L=0;L<2;L++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=RU(e,r,i),d=wU(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=Cr.getBlob(f,r,m);if(E===null)throw BM();const b={name:c.fullPath},P=Lg(s,t.host,t._protocol),k="POST",w=t.maxUploadRetryTime,_=new JA(P,k,EU(t,n),w);return _.urlParams=b,_.headers=o,_.body=E.uploadData(),_.errorHandler=ZA(e),_}class PU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Bo("cannot .send() more than once");if(Ji(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class CU extends PU{initXhr(){this.xhr_.responseType="text"}}function e1(){return new CU}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zi(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GA(this._location.path)}get storage(){return this._service}get parent(){const e=fU(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new zi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WM(e)}}function bU(t,e,n){t._throwIfRoot("uploadBytes");const r=kU(t.storage,t._location,QA(),new Cr(e,!0),n);return t.storage.makeRequestWithTokens(r,e1).then(i=>({metadata:i,ref:t}))}function xU(t){t._throwIfRoot("getDownloadURL");const e=SU(t.storage,t._location,QA());return t.storage.makeRequestWithTokens(e,e1).then(n=>{if(n===null)throw zM();return n})}function NU(t,e){const n=pU(t._location.path,e),r=new $t(t._location.bucket,n);return new zi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(t){return/^[A-Za-z]+:\/\//.test(t)}function DU(t,e){return new zi(t,e)}function t1(t,e){if(t instanceof Vg){const n=t;if(n._bucket==null)throw $M();const r=new zi(n,n._bucket);return e!=null?t1(r,e):r}else return e!==void 0?NU(t,e):t}function LU(t,e){if(e&&OU(e)){if(t instanceof Vg)return DU(t,e);throw Ep("To use ref(service, url), the first argument must be a Storage instance.")}else return t1(t,e)}function Gw(t,e){const n=e==null?void 0:e[$A];return n==null?null:$t.makeFromBucketSpec(n,t)}function VU(t,e,n,r={}){t.host=`${e}:${n}`;const i=Ji(e);i&&Om(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:lI(s,t.app.options.projectId))}class Vg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=jA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bM,this._maxUploadRetryTime=xM,this._requests=new Set,i!=null?this._bucket=$t.makeFromBucketSpec(i,this._host):this._bucket=Gw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=Gw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new qM(BA());{const o=rU(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Qw="@firebase/storage",Yw="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="storage";function v6(t,e,n){return t=ne(t),bU(t,e,n)}function w6(t){return t=ne(t),xU(t)}function E6(t,e){return t=ne(t),LU(t,e)}function MU(t=zc(),e){t=ne(t);const r=Xi(t,n1).getImmediate({identifier:e}),i=sI("storage");return i&&UU(r,...i),r}function UU(t,e,n,r={}){VU(t,e,n,r)}function FU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vg(n,r,i,e,Zi)}function jU(){_n(new rn(n1,FU,"PUBLIC").setMultipleInstances(!0)),Dt(Qw,Yw,""),Dt(Qw,Yw,"esm2020")}jU();const r1="@firebase/installations",Mg="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=1e4,s1=`w:${Mg}`,o1="FIS_v2",$U="https://firebaseinstallations.googleapis.com/v1",BU=60*60*1e3,zU="installations",HU="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hi=new Yi(zU,HU,WU);function a1(t){return t instanceof wn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1({projectId:t}){return`${$U}/projects/${t}/installations`}function u1(t){return{token:t.token,requestStatus:2,expiresIn:KU(t.expiresIn),creationTime:Date.now()}}async function c1(t,e){const r=(await e.json()).error;return Hi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function h1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qU(t,{refreshToken:e}){const n=h1(t);return n.append("Authorization",GU(e)),n}async function d1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function KU(t){return Number(t.replace("s","000"))}function GU(t){return`${o1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=l1(t),i=h1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:o1,appId:t.appId,sdkVersion:s1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await d1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:u1(c.authToken)}}else throw await c1("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU=/^[cdef][\w-]{21}$/,Tp="";function XU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ZU(t);return JU.test(n)?n:Tp}catch{return Tp}}function ZU(t){return YU(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=new Map;function m1(t,e){const n=Eh(t);g1(n,e),e4(n,e)}function g1(t,e){const n=p1.get(t);if(n)for(const r of n)r(e)}function e4(t,e){const n=t4();n&&n.postMessage({key:t,fid:e}),n4()}let Ai=null;function t4(){return!Ai&&"BroadcastChannel"in self&&(Ai=new BroadcastChannel("[Firebase] FID Change"),Ai.onmessage=t=>{g1(t.data.key,t.data.fid)}),Ai}function n4(){p1.size===0&&Ai&&(Ai.close(),Ai=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4="firebase-installations-database",i4=1,Wi="firebase-installations-store";let Fd=null;function Ug(){return Fd||(Fd=Bc(r4,i4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wi)}}})),Fd}async function wc(t,e){const n=Eh(t),i=(await Ug()).transaction(Wi,"readwrite"),s=i.objectStore(Wi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&m1(t,e.fid),e}async function y1(t){const e=Eh(t),r=(await Ug()).transaction(Wi,"readwrite");await r.objectStore(Wi).delete(e),await r.done}async function Th(t,e){const n=Eh(t),i=(await Ug()).transaction(Wi,"readwrite"),s=i.objectStore(Wi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&m1(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(t){let e;const n=await Th(t.appConfig,r=>{const i=s4(r),s=o4(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Tp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function s4(t){const e=t||{fid:XU(),registrationStatus:0};return _1(e)}function o4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Hi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=a4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:l4(t)}:{installationEntry:e}}async function a4(t,e){try{const n=await QU(t,e);return wc(t.appConfig,n)}catch(n){throw a1(n)&&n.customData.serverCode===409?await y1(t.appConfig):await wc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function l4(t){let e=await Jw(t.appConfig);for(;e.registrationStatus===1;)await f1(100),e=await Jw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Fg(t);return r||n}return e}function Jw(t){return Th(t,e=>{if(!e)throw Hi.create("installation-not-found");return _1(e)})}function _1(t){return u4(t)?{fid:t.fid,registrationStatus:0}:t}function u4(t){return t.registrationStatus===1&&t.registrationTime+i1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c4({appConfig:t,heartbeatServiceProvider:e},n){const r=h4(t,n),i=qU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:s1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await d1(()=>fetch(r,l));if(u.ok){const c=await u.json();return u1(c)}else throw await c1("Generate Auth Token",u)}function h4(t,{fid:e}){return`${l1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e=!1){let n;const r=await Th(t.appConfig,s=>{if(!v1(s))throw Hi.create("not-registered");const o=s.authToken;if(!e&&p4(o))return s;if(o.requestStatus===1)return n=d4(t,e),s;{if(!navigator.onLine)throw Hi.create("app-offline");const l=g4(s);return n=f4(t,l),l}});return n?await n:r.authToken}async function d4(t,e){let n=await Xw(t.appConfig);for(;n.authToken.requestStatus===1;)await f1(100),n=await Xw(t.appConfig);const r=n.authToken;return r.requestStatus===0?jg(t,e):r}function Xw(t){return Th(t,e=>{if(!v1(e))throw Hi.create("not-registered");const n=e.authToken;return y4(n)?{...e,authToken:{requestStatus:0}}:e})}async function f4(t,e){try{const n=await c4(t,e),r={...e,authToken:n};return await wc(t.appConfig,r),n}catch(n){if(a1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await y1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await wc(t.appConfig,r)}throw n}}function v1(t){return t!==void 0&&t.registrationStatus===2}function p4(t){return t.requestStatus===2&&!m4(t)}function m4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BU}function g4(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function y4(t){return t.requestStatus===1&&t.requestTime+i1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _4(t){const e=t,{installationEntry:n,registrationPromise:r}=await Fg(e);return r?r.catch(console.error):jg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v4(t,e=!1){const n=t;return await w4(n),(await jg(n,e)).token}async function w4(t){const{registrationPromise:e}=await Fg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t){if(!t||!t.options)throw jd("App Configuration");if(!t.name)throw jd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jd(t){return Hi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="installations",T4="installations-internal",I4=t=>{const e=t.getProvider("app").getImmediate(),n=E4(e),r=Xi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},S4=t=>{const e=t.getProvider("app").getImmediate(),n=Xi(e,w1).getImmediate();return{getId:()=>_4(n),getToken:i=>v4(n,i)}};function A4(){_n(new rn(w1,I4,"PUBLIC")),_n(new rn(T4,S4,"PRIVATE"))}A4();Dt(r1,Mg);Dt(r1,Mg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4="/firebase-messaging-sw.js",k4="/firebase-cloud-messaging-push-scope",E1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",P4="https://fcmregistrations.googleapis.com/v1",T1="google.c.a.c_id",C4="google.c.a.c_l",b4="google.c.a.ts",x4="google.c.a.e",Zw=1e4;var eE;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(eE||(eE={}));/**
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
 */var Xa;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Xa||(Xa={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function N4(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="fcm_token_details_db",O4=5,tE="fcm_token_object_Store";async function D4(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes($d))return null;let e=null;return(await Bc($d,O4,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(tE))return;const l=o.objectStore(tE),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Bn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Bn(c.auth),p256dh:Bn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Bn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Bn(c.auth),p256dh:Bn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Bn(c.vapidKey)}}}}}})).close(),await Ad($d),await Ad("fcm_vapid_details_db"),await Ad("undefined"),L4(e)?e:null}function L4(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4="firebase-messaging-database",M4=1,Za="firebase-messaging-store";let Bd=null;function I1(){return Bd||(Bd=Bc(V4,M4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Za)}}})),Bd}async function U4(t){const e=S1(t),r=await(await I1()).transaction(Za).objectStore(Za).get(e);if(r)return r;{const i=await D4(t.appConfig.senderId);if(i)return await $g(t,i),i}}async function $g(t,e){const n=S1(t),i=(await I1()).transaction(Za,"readwrite");return await i.objectStore(Za).put(e,n),await i.done,e}function S1({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},It=new Yi("messaging","Messaging",F4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j4(t,e){const n=await zg(t),r=A1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Bg(t.appConfig),i)).json()}catch(o){throw It.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw It.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw It.create("token-subscribe-no-token");return s.token}async function $4(t,e){const n=await zg(t),r=A1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Bg(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw It.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw It.create("token-update-failed",{errorInfo:o})}if(!s.token)throw It.create("token-update-no-token");return s.token}async function B4(t,e){const r={method:"DELETE",headers:await zg(t)};try{const s=await(await fetch(`${Bg(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw It.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw It.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Bg({projectId:t}){return`${P4}/projects/${t}/registrations`}async function zg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function A1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==E1&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4=7*24*60*60*1e3;async function H4(t){const e=await q4(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Bn(e.getKey("auth")),p256dh:Bn(e.getKey("p256dh"))},r=await U4(t.firebaseDependencies);if(r){if(K4(r.subscriptionOptions,n))return Date.now()>=r.createTime+z4?W4(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await B4(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return nE(t.firebaseDependencies,n)}else return nE(t.firebaseDependencies,n)}async function W4(t,e){try{const n=await $4(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await $g(t.firebaseDependencies,r),n}catch(n){throw n}}async function nE(t,e){const r={token:await j4(t,e),createTime:Date.now(),subscriptionOptions:e};return await $g(t,r),r.token}async function q4(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:N4(e)})}function K4(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return G4(e,t),Q4(e,t),Y4(e,t),e}function G4(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function Q4(t,e){e.data&&(t.data=e.data)}function Y4(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J4(t){return typeof t=="object"&&!!t&&T1 in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X4("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function X4(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(t){if(!t||!t.options)throw zd("App Configuration Object");if(!t.name)throw zd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw zd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function zd(t){return It.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Z4(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tF(t){try{t.swRegistration=await navigator.serviceWorker.register(R4,{scope:k4}),t.swRegistration.update().catch(()=>{}),await nF(t.swRegistration)}catch(e){throw It.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function nF(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Zw} ms`)),Zw),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rF(t,e){if(!e&&!t.swRegistration&&await tF(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw It.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iF(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=E1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(t,e){if(!navigator)throw It.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw It.create("permission-blocked");return await iF(t,e==null?void 0:e.vapidKey),await rF(t,e==null?void 0:e.serviceWorkerRegistration),H4(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sF(t,e,n){const r=oF(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[T1],message_name:n[C4],message_time:n[b4],message_device_time:Math.floor(Date.now()/1e3)})}function oF(t){switch(t){case Xa.NOTIFICATION_CLICKED:return"notification_open";case Xa.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aF(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Xa.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(rE(n)):t.onMessageHandler.next(rE(n)));const r=n.data;J4(r)&&r[x4]==="1"&&await sF(t,n.messageType,r)}const iE="@firebase/messaging",sE="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF=t=>{const e=new eF(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>aF(e,n)),e},uF=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>R1(e,r)}};function cF(){_n(new rn("messaging",lF,"PUBLIC")),_n(new rn("messaging-internal",uF,"PRIVATE")),Dt(iE,sE),Dt(iE,sE,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(){try{await cI()}catch{return!1}return typeof window<"u"&&uI()&&rx()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(t=zc()){return k1().then(e=>{if(!e)throw It.create("unsupported-browser")},e=>{throw It.create("indexed-db-unsupported")}),Xi(ne(t),"messaging").getImmediate()}async function dF(t,e){return t=ne(t),R1(t,e)}cF();const fF={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},Ih=fI(fF),Kt=aL(Ih);UO(Kt,qI);const Ni=gM(Ih),T6=MU(Ih),Hd=new kn;let Ip=null;const pF="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";k1().then(t=>{t&&(Ip=hF(Ih))}).catch(t=>console.log("Firebase messaging not supported:",t));/*! Capacitor: https://capacitorjs.com/ - MIT License */var qi;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(qi||(qi={}));class Su extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const mF=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},gF=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:mF(t),s=()=>i()!=="web",o=f=>{const m=c.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(E=>E.name===f)},u=f=>t.console.error(f),c=new Map,d=(f,m={})=>{const E=c.get(f);if(E)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),E.proxy;const b=i(),P=l(f);let k;const w=async()=>(!k&&b in m?k=typeof m[b]=="function"?k=await m[b]():k=m[b]:e!==null&&!k&&"web"in m&&(k=typeof m.web=="function"?k=await m.web():k=m.web),k),_=(y,T)=>{var A,C;if(P){const x=P==null?void 0:P.methods.find(v=>T===v.name);if(x)return x.rtype==="promise"?v=>n.nativePromise(f,T.toString(),v):(v,K)=>n.nativeCallback(f,T.toString(),v,K);if(y)return(A=y[T])===null||A===void 0?void 0:A.bind(y)}else{if(y)return(C=y[T])===null||C===void 0?void 0:C.bind(y);throw new Su(`"${f}" plugin is not implemented on ${b}`,qi.Unimplemented)}},S=y=>{let T;const A=(...C)=>{const x=w().then(v=>{const K=_(v,y);if(K){const ie=K(...C);return T=ie==null?void 0:ie.remove,ie}else throw new Su(`"${f}.${y}()" is not implemented on ${b}`,qi.Unimplemented)});return y==="addListener"&&(x.remove=async()=>T()),x};return A.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(A,"name",{value:y,writable:!1,configurable:!1}),A},L=S("addListener"),U=S("removeListener"),j=(y,T)=>{const A=L({eventName:y},T),C=async()=>{const v=await A;U({eventName:y,callbackId:v},T)},x=new Promise(v=>A.then(()=>v({remove:C})));return x.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await C()},x},I=new Proxy({},{get(y,T){switch(T){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return P?j:L;case"removeListener":return U;default:return S(T)}}});return r[f]=I,c.set(f,{name:f,proxy:I,platforms:new Set([...Object.keys(m),...P?[b]:[]])}),I};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=u,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=Su,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},yF=t=>t.Capacitor=gF(t),lr=yF(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ci=lr.registerPlugin;class Sh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new lr.Exception(e,qi.Unimplemented)}unavailable(e="not available"){return new lr.Exception(e,qi.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const _F=ci("WebView"),oE=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),aE=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class vF extends Sh{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=aE(i).trim(),s=aE(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=oE(e.key),r=oE(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const wF=ci("CapacitorCookies",{web:()=>new vF}),EF=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),TF=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},IF=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,u;return Array.isArray(o)?(u="",o.forEach(c=>{l=e?encodeURIComponent(c):c,u+=`${s}=${l}&`}),u.slice(0,-1)):(l=e?encodeURIComponent(o):o,u=`${s}=${l}`),`${r}&${u}`},"").substr(1):null,P1=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=TF(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,u)=>{s.append(u,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class SF extends Sh{async request(e){const n=P1(e,e.webFetchExtra),r=IF(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let u,c;switch(l){case"arraybuffer":case"blob":c=await s.blob(),u=await EF(c);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:u,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const AF=ci("CapacitorHttp",{web:()=>new SF});var Sp;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Sp||(Sp={}));var Ap;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(Ap||(Ap={}));class RF extends Sh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const kF=ci("SystemBars",{web:()=>new RF}),I6=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:lr,CapacitorCookies:wF,CapacitorException:Su,CapacitorHttp:AF,get ExceptionCode(){return qi},get SystemBarType(){return Ap},SystemBars:kF,get SystemBarsStyle(){return Sp},WebPlugin:Sh,WebView:_F,buildRequestInit:P1,registerPlugin:ci},Symbol.toStringTag,{value:"Module"}));var lE;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(lE||(lE={}));var uE;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(uE||(uE={}));const PF=ci("FirebaseAuthentication",{web:()=>ue(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),C1=O.createContext();function mo(){return O.useContext(C1)}function CF({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(!0),s=O.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async P=>{if(!P){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",P.email);try{const k=Pi(Ni,"users",P.uid),w=await UA(k),_=P.email==="prince86944@gmail.com";if(w.exists()){const S=w.data();console.log("[AUTH] Existing user data found:",S.role),_&&S.role!==o.SUPER_ADMIN?(await Ja(k,{role:o.SUPER_ADMIN}),n({...P,...S,role:o.SUPER_ADMIN})):n({...P,...S})}else{console.log("[AUTH] No existing profile. Creating new entry...");const S={uid:P.uid,name:P.displayName||"Scholar",email:P.email,phone:P.phoneNumber||"",createdAt:Fw(),role:_?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await Ww(k,S),n({...P,...S})}}catch(k){console.error("[AUTH] Profile sync critical failure:",k),n({uid:P.uid,email:P.email,name:P.displayName||"Scholar",role:P.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function u(P,k,w,_){const S=await CO(Kt,P,k),L={uid:S.user.uid,name:w,email:P,phone:_,createdAt:Fw(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await Ww(Pi(Ni,"users",S.user.uid),L),S.user}async function c(P,k){return bO(Kt,P,k)}async function d(){var k;if(lr.isNativePlatform())try{const w=await PF.signInWithGoogle();if((k=w==null?void 0:w.credential)!=null&&k.idToken){const _=kn.credential(w.credential.idToken),S=await Yc(Kt,_);return await l(S.user),S.user}throw new Error("Native Google Login failed")}catch(w){console.error("Native Google Login Error:",w);const _=await Vv(Kt,Hd);return await l(_.user),_.user}else try{const w=await Vv(Kt,Hd);return await l(w.user),w.user}catch(w){return console.warn("Popup failed or blocked, falling back to Redirect...",w),await vD(Kt,Hd)}}function f(P){return window.recaptchaVerifier||(window.recaptchaVerifier=new lD(Kt,"recaptcha-container",{size:"invisible"})),cD(Kt,P,window.recaptchaVerifier)}async function m(P){e&&(await Ja(Pi(Ni,"users",e.uid),P),n(k=>({...k,...P})))}function E(){return BO(Kt)}O.useEffect(()=>$O(Kt,async k=>{e||i(!0);try{k?await l(k):n(null)}catch(w){console.error("Auth sync error:",w)}finally{i(!1)}}),[]),O.useEffect(()=>{TD(Kt).then(async P=>{P!=null&&P.user&&(console.log("[AUTH] Redirect result success:",P.user.email),await l(P.user))}).catch(P=>{console.error("[AUTH] Redirect result error:",P)})},[]);const b={user:e,ROLES:o,login:c,signup:u,logout:E,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return R.jsx(C1.Provider,{value:b,children:t})}const jn=ci("Preferences",{web:()=>ue(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),ge=ci("AppBlocker"),b1=O.createContext(null);function cE(){return O.useContext(b1)}function bF({children:t}){const{user:e}=mo(),n=(v,K)=>{try{const ie=localStorage.getItem(v);return ie!==null?JSON.parse(ie):K}catch{return K}},[r,i]=O.useState(!1),[s,o]=O.useState(1500),[l,u]=O.useState("OTHERS"),[c,d]=O.useState(25),[f,m]=O.useState(0),[E,b]=O.useState("COUNTDOWN"),[P,k]=O.useState(!1),[w,_]=O.useState(()=>n("allowedPackages","")),[S,L]=O.useState([]),U=O.useRef(null),j=()=>{var v,K,ie,Rt;return lr.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((K=(v=window.Capacitor).isNativePlatform)==null?void 0:K.call(v))||((Rt=(ie=window.Capacitor).isPluginAvailable)==null?void 0:Rt.call(ie,"AppBlocker")))||lr.isPluginAvailable("AppBlocker")},I=async()=>{if(j())try{if(ge&&ge.getInstalledApps){const{apps:v}=await ge.getInstalledApps();L(v.sort((K,ie)=>K.name.localeCompare(ie.name)))}}catch(v){console.error("Fetch Apps Error:",v)}};O.useEffect(()=>{(async()=>{if(j()){await I();try{const K=await jn.get({key:"countdownEndTime"}),ie=Number(K.value||0);if(ie>Date.now()){const Rt=Math.ceil((ie-Date.now())/1e3);o(Rt),i(!0),b("COUNTDOWN");const on=await jn.get({key:"allowedPackages"});on.value&&_(on.value),console.log("Restored active focus session on initialization:",Rt,"seconds remaining")}else ge&&ge.stopBlocker&&await ge.stopBlocker(),await jn.set({key:"isBlockerActive",value:"false"}),await jn.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(K){console.error("Error restoring blocker state:",K)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const y=v=>{if(_(v),localStorage.setItem("allowedPackages",JSON.stringify(v)),j()){jn.set({key:"allowedPackages",value:v});try{const K=(v||"").split(",").filter(Boolean);K.includes("com.apnacollegebihar.online")||K.push("com.apnacollegebihar.online"),ge&&ge.setAllowedPackages&&ge.setAllowedPackages({packages:K})}catch{}}},T=v=>{if(i(v),localStorage.setItem("timerActive",JSON.stringify(v)),j())try{if(v){if(ge&&ge.setBlockerActive&&ge.setBlockerActive({active:!0}),E==="COUNTDOWN"){ge&&ge.startCountdown&&ge.startCountdown({minutes:Math.ceil(s/60)});const ie=Date.now()+s*1e3;jn.set({key:"countdownEndTime",value:String(ie)})}const K=(w||"").split(",").filter(Boolean);K.includes("com.apnacollegebihar.online")||K.push("com.apnacollegebihar.online"),ge&&ge.setAllowedPackages&&ge.setAllowedPackages({packages:K}),jn.set({key:"isBlockerActive",value:"true"})}else ge&&ge.stopBlocker&&ge.stopBlocker(),jn.set({key:"isBlockerActive",value:"false"}),jn.set({key:"countdownEndTime",value:"0"})}catch(K){console.error("Native Blocker Error:",K)}},A=v=>{k(v),localStorage.setItem("focusBroken",JSON.stringify(v))};O.useEffect(()=>{const v=K=>{K.key==="timerActive"&&i(JSON.parse(K.newValue)),K.key==="focusBroken"&&k(JSON.parse(K.newValue))};return window.addEventListener("storage",v),()=>window.removeEventListener("storage",v)},[]),O.useEffect(()=>{r||o(E==="COUNTDOWN"?c*60+f:0)},[E,c,f,r]);const C=async(v=null)=>{if(!e)return;const K=v||(E==="STOPWATCH"?s:c*60+f-s);if(K<5){T(!1);return}try{const ie=new Date().toLocaleDateString("en-CA");await CM(mM(Ni,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:K,date:ie,createdAt:new Date().toISOString()});const Rt=Pi(Ni,"users",e.uid),on=await UA(Rt);if(on.exists()){const z=on.data(),te=z.lastStudyDate!==ie?K:(z.todayStudyTime||0)+K,pe=new Date;pe.setDate(pe.getDate()-1);const Ie=pe.toLocaleDateString("en-CA");let qt=z.streak||0,He=z.streakDate||"";He!==ie&&He!==Ie&&(qt=0),te>=7200&&He!==ie&&(He===Ie?qt+=1:qt=1,He=ie),await Ja(Rt,{totalStudyTime:(z.totalStudyTime||0)+K,todayStudyTime:te,lastStudyDate:ie,streak:qt,streakDate:He,isStudying:!1})}T(!1)}catch(ie){console.error("Global Save Error:",ie)}};O.useEffect(()=>{e&&Ja(Pi(Ni,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),O.useEffect(()=>{const v=K=>{r&&(K.preventDefault(),K.returnValue="")};return window.addEventListener("beforeunload",v),()=>{window.removeEventListener("beforeunload",v)}},[r]),O.useEffect(()=>(r?U.current=setInterval(()=>{o(v=>E==="COUNTDOWN"?v<=1?(clearInterval(U.current),C(c*60+f),0):v-1:v+1)},1e3):clearInterval(U.current),()=>clearInterval(U.current)),[r,E,e,c,f]);const x={timerActive:r,setTimerActive:T,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:u,customMinutes:c,setCustomMinutes:d,customSeconds:f,setCustomSeconds:m,timerMode:E,setTimerMode:b,saveGlobalSession:C,focusBroken:P,setFocusBroken:A,allowedPackages:w,setAllowedPackages:y,installedApps:S,fetchApps:I,launchApp:async v=>{if(j())try{ge&&ge.launchApp&&await ge.launchApp({packageName:v})}catch(K){console.error(K)}},openAccessibilitySettings:async()=>{if(j())try{ge&&ge.openAccessibilitySettings&&await ge.openAccessibilitySettings()}catch(v){console.error(v)}}};return R.jsx(b1.Provider,{value:x,children:t})}var xF=typeof Element<"u",NF=typeof Map=="function",OF=typeof Set=="function",DF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Au(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Au(t[r],e[r]))return!1;return!0}var s;if(NF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Au(r.value[1],e.get(r.value[0])))return!1;return!0}if(OF&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(DF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(xF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Au(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var LF=function(e,n){try{return Au(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const VF=Ec(LF);var MF=function(t,e,n,r,i,s,o,l){if(!t){var u;if(e===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,s,o,l],d=0;u=new Error(e.replace(/%s/g,function(){return c[d++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},UF=MF;const hE=Ec(UF);var FF=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var d=o[c];if(!u(d))return!1;var f=e[d],m=n[d];if(s=r?r.call(i,f,m,d):void 0,s===!1||s===void 0&&f!==m)return!1}return!0};const jF=Ec(FF);var x1=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(x1||{}),Wd={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},dE=Object.values(x1),Ah={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N1=Object.entries(Ah).reduce((t,[e,n])=>(t[n]=e,t),{}),fn="data-rh",Vs={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ms=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},$F=t=>{let e=Ms(t,"title");const n=Ms(t,Vs.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Ms(t,Vs.DEFAULT_TITLE);return e||r||void 0},BF=t=>Ms(t,Vs.ON_CHANGE_CLIENT_STATE)||(()=>{}),qd=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),zF=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),HF=t=>console&&typeof console.warn=="function"&&console.warn(t),zo=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&HF(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(u=>{let c;const d=Object.keys(u);for(let m=0;m<d.length;m+=1){const E=d[m],b=E.toLowerCase();e.indexOf(b)!==-1&&!(c==="rel"&&u[c].toLowerCase()==="canonical")&&!(b==="rel"&&u[b].toLowerCase()==="stylesheet")&&(c=b),e.indexOf(E)!==-1&&(E==="innerHTML"||E==="cssText"||E==="itemprop")&&(c=E)}if(!c||!u[c])return!1;const f=u[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][f]?!1:(o[c][f]=!0,!0)}).reverse().forEach(u=>i.push(u));const l=Object.keys(o);for(let u=0;u<l.length;u+=1){const c=l[u],d={...r[c],...o[c]};r[c]=d}return i},[]).reverse()},WF=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},qF=t=>({baseTag:zF(["href"],t),bodyAttributes:qd("bodyAttributes",t),defer:Ms(t,Vs.DEFER),encode:Ms(t,Vs.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:qd("htmlAttributes",t),linkTags:zo("link",["rel","href"],t),metaTags:zo("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:zo("noscript",["innerHTML"],t),onChangeClientState:BF(t),scriptTags:zo("script",["src","innerHTML"],t),styleTags:zo("style",["cssText"],t),title:$F(t),titleAttributes:qd("titleAttributes",t),prioritizeSeoTags:WF(t,Vs.PRIORITIZE_SEO_TAGS)}),O1=t=>Array.isArray(t)?t.join(""):t,KF=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},Kd=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(KF(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},fE=(t,e)=>({...t,[e]:void 0}),GF=["noscript","script","style"],Rp=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),D1=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),QF=(t,e,n,r)=>{const i=D1(n),s=O1(e);return i?`<${t} ${fn}="true" ${i}>${Rp(s,r)}</${t}>`:`<${t} ${fn}="true">${Rp(s,r)}</${t}>`},YF=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const f=typeof s[d]>"u"?d:`${d}="${Rp(s[d],n)}"`;return c?`${c} ${f}`:f},""),l=s.innerHTML||s.cssText||"",u=GF.indexOf(t)===-1;return`${r}<${t} ${fn}="true" ${o}${u?"/>":`>${l}</${t}>`}`},""),L1=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Ah[r];return n[i||r]=t[r],n},e),JF=(t,e,n)=>{const r={key:e,[fn]:!0},i=L1(n,r);return[G.createElement("title",i,e)]},Ru=(t,e)=>e.map((n,r)=>{const i={key:r,[fn]:!0};return Object.keys(n).forEach(s=>{const l=Ah[s]||s;if(l==="innerHTML"||l==="cssText"){const u=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:u}}else i[l]=n[s]}),G.createElement(t,i)}),Gt=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>JF(t,e.title,e.titleAttributes),toString:()=>QF(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>L1(e),toString:()=>D1(e)};default:return{toComponent:()=>Ru(t,e),toString:()=>YF(t,e,n)}}},XF=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=Kd(t,Wd.meta),s=Kd(e,Wd.link),o=Kd(n,Wd.script);return{priorityMethods:{toComponent:()=>[...Ru("meta",i.priority),...Ru("link",s.priority),...Ru("script",o.priority)],toString:()=>`${Gt("meta",i.priority,r)} ${Gt("link",s.priority,r)} ${Gt("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},ZF=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:u,prioritizeSeoTags:c}=t;let{linkTags:d,metaTags:f,scriptTags:m}=t,E={toComponent:()=>[],toString:()=>""};return c&&({priorityMethods:E,linkTags:d,metaTags:f,scriptTags:m}=XF(t)),{priority:E,base:Gt("base",e,r),bodyAttributes:Gt("bodyAttributes",n,r),htmlAttributes:Gt("htmlAttributes",i,r),link:Gt("link",d,r),meta:Gt("meta",f,r),noscript:Gt("noscript",s,r),script:Gt("script",m,r),style:Gt("style",o,r),title:Gt("title",{title:l,titleAttributes:u},r)}},kp=ZF,Zl=[],Hg=!!(typeof window<"u"&&window.document&&window.document.createElement),Pp=class{constructor(t,e){Un(this,"instances",[]);Un(this,"canUseDOM",Hg);Un(this,"context");Un(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Zl:this.instances,add:t=>{(this.canUseDOM?Zl:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Zl:this.instances).indexOf(t);(this.canUseDOM?Zl:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=kp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ej=parseInt(G.version.split(".")[0],10),Cp=ej>=19,tj={},V1=G.createContext(tj),Us,M1=(Us=class extends O.Component{constructor(n){super(n);Un(this,"helmetData");Cp?this.helmetData=null:this.helmetData=new Pp(this.props.context||{},Us.canUseDOM)}render(){return Cp?G.createElement(G.Fragment,null,this.props.children):G.createElement(V1.Provider,{value:this.helmetData.value},this.props.children)}},Un(Us,"canUseDOM",Hg),Us),as=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${fn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const u=document.createElement(t);for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c))if(c==="innerHTML")u.innerHTML=l.innerHTML;else if(c==="cssText"){const d=l.cssText;u.appendChild(document.createTextNode(d))}else{const d=c,f=typeof l[d]>"u"?"":l[d];u.setAttribute(c,f)}u.setAttribute(fn,"true"),i.some((c,d)=>(o=d,u.isEqualNode(c)))?i.splice(o,1):s.push(u)}),i.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},bp=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(fn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),i.indexOf(l)===-1&&i.push(l);const c=s.indexOf(l);c!==-1&&s.splice(c,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(fn):n.getAttribute(fn)!==o.join(",")&&n.setAttribute(fn,o.join(","))},nj=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=O1(t)),bp("title",e)},pE=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:u,scriptTags:c,styleTags:d,title:f,titleAttributes:m}=t;bp("body",r),bp("html",i),nj(f,m);const E={baseTag:as("base",n),linkTags:as("link",s),metaTags:as("meta",o),noscriptTags:as("noscript",l),scriptTags:as("script",c),styleTags:as("style",d)},b={},P={};Object.keys(E).forEach(k=>{const{newTags:w,oldTags:_}=E[k];w.length&&(b[k]=w),_.length&&(P[k]=E[k].oldTags)}),e&&e(),u(t,b,P)},Ho=null,rj=t=>{Ho&&cancelAnimationFrame(Ho),t.defer?Ho=requestAnimationFrame(()=>{pE(t,()=>{Ho=null})}):(pE(t),Ho=null)},ij=rj,mE=class extends O.Component{constructor(){super(...arguments);Un(this,"rendered",!1)}shouldComponentUpdate(e){return!jF(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=qF(e.get().map(s=>{const{context:o,...l}=s.props;return l}));M1.canUseDOM?ij(i):kp&&(r=kp(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},ku=[],gE=t=>{const e={};for(const n of Object.keys(t))e[N1[n]||n]=t[n];return e},yi=t=>{const e={};for(const n of Object.keys(t)){const r=Ah[n];e[r||n]=t[n]}return e},yE=(t,e)=>{if(!Hg)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const u=e[l];u==null||u===!1?n.removeAttribute(l):u===!0?n.setAttribute(l,""):n.setAttribute(l,String(u))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},Gd=()=>{const t={},e={};for(const n of ku){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,gE(r)),i&&Object.assign(e,gE(i))}yE("html",t),yE("body",e)},sj=class extends O.Component{componentDidMount(){ku.push(this),Gd()}componentDidUpdate(){Gd()}componentWillUnmount(){const t=ku.indexOf(this);t!==-1&&ku.splice(t,1),Gd()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return G.createElement("title",yi(e),t)}renderBase(){const{base:t}=this.props;return t?G.createElement("base",yi(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("meta",{key:n,...yi(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("link",{key:n,...yi(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=yi(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=yi(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=yi(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("noscript",{key:n,...s})})}render(){return G.createElement(G.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Jd,oj=(Jd=class extends O.Component{shouldComponentUpdate(t){return!VF(fE(this.props,"helmetData"),fE(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return hE(dE.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${dE.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),hE(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return G.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((u,c)=>(u[N1[c]||c]=s[c],u),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Pp)){const i=r;r=new Pp(i.context,!0),delete n.helmetData}return Cp?G.createElement(sj,{...n}):r?G.createElement(mE,{...n,context:r.value}):G.createElement(V1.Consumer,null,i=>G.createElement(mE,{...n,context:i}))}},Un(Jd,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Jd);function aj({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return G.useEffect(()=>{document.title=o;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",e);const u=document.querySelector('meta[property="og:title"]');u&&u.setAttribute("content",o);const c=document.querySelector('meta[property="og:description"]');c&&c.setAttribute("content",e)},[o,e]),R.jsxs(oj,{children:[R.jsx("title",{children:o}),R.jsx("meta",{name:"description",content:e}),R.jsx("meta",{name:"keywords",content:n}),R.jsx("link",{rel:"canonical",href:r}),R.jsx("meta",{property:"og:type",content:"website"}),R.jsx("meta",{property:"og:url",content:r}),R.jsx("meta",{property:"og:title",content:o}),R.jsx("meta",{property:"og:description",content:e}),R.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),R.jsx("meta",{property:"og:image",content:i}),R.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),R.jsx("meta",{name:"twitter:title",content:o}),R.jsx("meta",{name:"twitter:description",content:e}),R.jsx("meta",{name:"twitter:image",content:i}),s&&R.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}function _E(){lr.isNativePlatform();const t=ro(),e=bm(),{user:n,updateProfileData:r}=mo(),[i,s]=O.useState(""),[o,l]=O.useState(!1),[u,c]=O.useState(!1),[d,f]=O.useState(navigator.onLine);cE(),O.useEffect(()=>{const k=()=>f(!0),w=()=>f(!1);return window.addEventListener("online",k),window.addEventListener("offline",w),()=>{window.removeEventListener("online",k),window.removeEventListener("offline",w)}},[]),O.useEffect(()=>{d&&n&&n.uid&&!n.phone?l(!0):l(!1),(async()=>{if(!(!n||!Ip||!d))try{if(await Notification.requestPermission()==="granted"){const _=await dF(Ip,{vapidKey:pF});_&&await Ja(Pi(Ni,"users",n.uid),{fcmToken:_})}}catch(w){console.error("Push notification setup failed:",w)}})()},[n,d]);const m=async k=>{if(k.preventDefault(),!(i.length<10)){c(!0);try{await r({phone:i}),l(!1)}catch(w){console.error(w)}finally{c(!1)}}},E=()=>{const{timerActive:k,timerTime:w}=cE(),[_,S]=O.useState(!1);if(!k||t.pathname==="/dashboard/study")return null;const L=Math.floor(w%3600/60),U=w%60;return R.jsx("div",{className:`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${_?"translate-x-[70%]":""}`,children:R.jsxs("div",{className:"bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group",children:[R.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse",children:R.jsx(Fb,{size:20,className:"text-white"})}),R.jsxs("div",{className:`flex items-center gap-4 pr-6 ${_?"opacity-0 w-0 overflow-hidden":"opacity-100"}`,children:[R.jsxs("div",{children:[R.jsx("p",{className:"text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1",children:"Live Focus"}),R.jsxs("p",{className:"text-xl font-black text-white tabular-nums tracking-tighter",children:[L.toString().padStart(2,"0"),":",U.toString().padStart(2,"0")]})]}),R.jsx("button",{onClick:()=>e("/dashboard/study"),className:"px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest",children:"Resume"})]}),R.jsx("button",{onClick:()=>S(!_),className:"p-2 text-slate-500 hover:text-white",children:_?R.jsx(hv,{size:16}):R.jsx(jb,{size:16})})]})})},P=(k=>k.includes("/study-resources")?"Study Resources":k.includes("/study")?"Study Zone":k.includes("/notes")?"B.Tech Notes":k.includes("/pyq")?"PYQ Papers":k.includes("/syllabus")?"BEU Syllabus":k.includes("/cgpa")?"CGPA Calculator":k.includes("/ugeac-predictor")?"UGEAC Predictor":k.includes("/calculator")?"Calculator":k.includes("/achievements")?"Achievements":k.includes("/groups")?"Study Groups":k.includes("/timetable")?"BEU Timetable":k.includes("/attendance")?"BEU Attendance Tracker":k.includes("/extras")?"Personal Manager":k.includes("/calendar")?"Calendar":k.includes("/beu-result")?"BEU Result":k.includes("/admin")?"Admin Panel":"ACB Hub")(t.pathname);return R.jsxs("div",{className:"flex flex-col h-screen bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30",children:[R.jsx(aj,{title:P}),R.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-[100]",children:[R.jsxs("button",{onClick:()=>{var k;((k=t.state)==null?void 0:k.from)==="study-network"?e("/dashboard/study?standalone=true",{state:{tab:"network"}}):e(-1)},className:"flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group",children:[R.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-all",children:R.jsx(hv,{size:20})}),R.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Back"})]}),R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg object-cover shadow-sm"}),R.jsx("span",{className:"text-[10px] font-[1000] tracking-tighter uppercase text-slate-900",children:P})]})]}),R.jsx("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 p-4 md:p-6 lg:p-8 pb-32",children:R.jsx("div",{className:"max-w-7xl mx-auto min-h-[80vh]",children:R.jsx(xm,{})})}),o&&d&&R.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:R.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[R.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:R.jsx(Ub,{size:32})}),R.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),R.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),R.jsxs("form",{onSubmit:m,className:"space-y-6",children:[R.jsxs("div",{className:"flex gap-2",children:[R.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),R.jsx("input",{type:"tel",maxLength:10,value:i,onChange:k=>s(k.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),R.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})}),R.jsx(E,{})]})}const lj=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=mo(),[i,s]=O.useState(""),[o,l]=O.useState(!1);if(e)return R.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:R.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),R.jsx(ec,{to:"/login",replace:!0});const u=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",c=async f=>{if(f.preventDefault(),i.length<10)return Ed.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),Ed.success("Mobile number linked securely!")}catch{Ed.error("Failed to save. Try again.")}finally{l(!1)}};return u?R.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:R.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[R.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),R.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[R.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:R.jsx(eI,{className:"text-blue-500 w-10 h-10"})}),R.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),R.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),R.jsxs("form",{onSubmit:c,className:"w-full space-y-4",children:[R.jsxs("div",{className:"relative group",children:[R.jsx(Jf,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),R.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),R.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),R.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[R.jsx(Jf,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),R.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):R.jsx(xm,{})},uj=()=>{const{user:t,loading:e,ROLES:n}=mo();return e?R.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:R.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?R.jsx(xm,{}):R.jsx(ec,{to:"/dashboard",replace:!0})},cj=G.lazy(()=>ue(()=>import("./Home.js"),["assets/Home.js","assets/chevron-down.js","assets/calendar2.js","assets/log-out.js","assets/zap.js","assets/graduation-cap.js","assets/check-circle.js","assets/sparkles.js","assets/download.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/library.js","assets/users.js","assets/calculator.js","assets/link-2.js","assets/send.js","assets/briefcase.js","assets/award.js","assets/external-link.js","assets/message-circle.js","assets/youtube.js"])),vE=G.lazy(()=>ue(()=>import("./AppHub.js"),["assets/AppHub.js","assets/log-in.js","assets/user.js","assets/calendar2.js","assets/trash-2.js","assets/log-out.js","assets/message-circle.js","assets/youtube.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/graduation-cap.js","assets/library.js","assets/users.js","assets/calculator.js","assets/link-2.js","assets/send.js","assets/award.js","assets/briefcase.js","assets/external-link.js"])),hj=G.lazy(()=>ue(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),dj=G.lazy(()=>ue(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),fj=G.lazy(()=>ue(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/UgeacData.js","assets/search.js","assets/book-open.js","assets/graduation-cap.js","assets/check-circle-2.js","assets/zap.js","assets/send.js","assets/calculator.js","assets/building-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/trash-2.js","assets/plus.js","assets/download.js","assets/info.js","assets/external-link.js","assets/UgeacPredictor.css"])),Qd=G.lazy(()=>ue(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),Yd=G.lazy(()=>ue(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),wE=G.lazy(()=>ue(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/book-open.js","assets/chevron-down.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-up.js"])),pj=G.lazy(()=>ue(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/book-open.js","assets/check-circle.js","assets/award.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js"])),mj=G.lazy(()=>ue(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/book-open.js","assets/arrow-right.js","assets/flame.js","assets/plus.js","assets/check-circle-2.js","assets/trash-2.js","assets/search.js"])),gj=G.lazy(()=>ue(()=>import("./StudyResources.js"),["assets/StudyResources.js","assets/loader-2.js","assets/link-2.js","assets/plus.js","assets/alert-circle.js","assets/search.js","assets/book-open.js","assets/globe.js","assets/external-link.js"])),yj=G.lazy(()=>ue(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),_j=G.lazy(()=>ue(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/book-open.js","assets/file-text.js","assets/bar-chart-3.js","assets/search.js","assets/user-check.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),vj=G.lazy(()=>ue(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js","assets/award.js"])),wj=G.lazy(()=>ue(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),Ej=G.lazy(()=>ue(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/calendar2.js","assets/trash-2.js","assets/link-2.js","assets/external-link.js","assets/trophy.js","assets/clock.js"])),Tj=G.lazy(()=>ue(()=>import("./Timetable.js"),["assets/Timetable.js","assets/user-check.js","assets/arrow-right.js","assets/save.js","assets/info.js","assets/plus.js"])),Ij=G.lazy(()=>ue(()=>import("./Attendance.js"),["assets/Attendance.js","assets/user-check.js","assets/calendar2.js","assets/award.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),Sj=G.lazy(()=>ue(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/globe.js","assets/external-link.js","assets/info.js"])),Aj=G.lazy(()=>ue(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js","assets/file-text.js"])),Rj=G.lazy(()=>ue(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),kj=G.lazy(()=>ue(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/eye.js","assets/file-text.js"])),Pj=G.lazy(()=>ue(()=>import("./Terms.js"),["assets/Terms.js","assets/file-text.js","assets/check-circle-2.js"])),Cj=G.lazy(()=>ue(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/user.js","assets/trash-2.js","assets/log-in.js"])),bj=G.lazy(()=>ue(()=>import("./About.js"),["assets/About.js","assets/graduation-cap.js","assets/sparkles.js","assets/award.js","assets/send.js","assets/book-open.js","assets/users.js","assets/calculator.js"])),xj=G.lazy(()=>ue(()=>import("./Contact.js"),["assets/Contact.js","assets/message-circle.js","assets/youtube.js","assets/send.js","assets/help-circle.js","assets/chevron-down.js"])),Nj=G.lazy(()=>ue(()=>import("./SearchSEO.js"),["assets/SearchSEO.js","assets/search.js","assets/loader-2.js","assets/file-text.js","assets/book-open.js","assets/arrow-right.js"])),EE=G.lazy(()=>ue(()=>import("./BeuToolSEO.js"),["assets/BeuToolSEO.js","assets/Attendance.js","assets/user-check.js","assets/calendar2.js","assets/award.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js","assets/Timetable.js","assets/arrow-right.js","assets/save.js","assets/BeuCgpa.js","assets/book-open.js","assets/check-circle.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js","assets/BeuResult.js","assets/globe.js"])),TE=G.lazy(()=>ue(()=>import("./FeatureSEO.js"),["assets/FeatureSEO.js","assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/book-open.js","assets/arrow-right.js","assets/flame.js","assets/plus.js","assets/check-circle-2.js","assets/trash-2.js","assets/search.js","assets/Group.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js","assets/StudyResources.js","assets/loader-2.js","assets/link-2.js","assets/globe.js","assets/external-link.js","assets/ScientificCalc.js","assets/PersonalManager.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/file-text.js"])),IE=G.lazy(()=>ue(()=>import("./CollegePage.js"),["assets/CollegePage.js","assets/UgeacData.js","assets/building-2.js","assets/chevron-right.js","assets/globe.js","assets/arrow-right.js","assets/award.js","assets/library.js","assets/book-open.js","assets/graduation-cap.js","assets/bar-chart-3.js","assets/help-circle.js"])),SE=G.lazy(()=>ue(()=>import("./BranchHub.js"),["assets/BranchHub.js","assets/chevron-right.js","assets/graduation-cap.js","assets/book-open.js","assets/briefcase.js","assets/bar-chart-3.js","assets/users.js","assets/help-circle.js"])),Oj=G.lazy(()=>ue(()=>import("./UgeacInfo.js"),["assets/UgeacInfo.js","assets/chevron-right.js","assets/help-circle.js","assets/award.js","assets/check-circle-2.js"])),AE=G.lazy(()=>ue(()=>import("./SubjectPage.js"),["assets/SubjectPage.js","assets/chevron-right.js","assets/loader-2.js","assets/download.js"])),Dj=G.lazy(()=>ue(()=>import("./HackathonHub.js"),["assets/HackathonHub.js","assets/chevron-right.js","assets/plus.js","assets/search.js","assets/calendar2.js","assets/loader-2.js","assets/external-link.js","assets/building-2.js","assets/award.js","assets/check-circle-2.js","assets/users.js"]));function Lj(){return R.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[R.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),R.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function Vj(){var c;const{user:t,updateProfileData:e,logout:n}=mo(),[r,i]=O.useState(""),[s,o]=O.useState(!1);if(!(t&&(!(t!=null&&t.phone)||((c=t==null?void 0:t.phone)==null?void 0:c.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED")))return null;const u=async d=>{if(d.preventDefault(),r.length<10)return xe.error("Enter a valid 10-digit number!");o(!0);try{await e({phone:r}),xe.success("Mobile number linked securely!")}catch{xe.error("Failed to save. Try again.")}finally{o(!1)}};return R.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:R.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[R.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),R.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[R.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:R.jsx(eI,{className:"text-blue-500 w-10 h-10"})}),R.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),R.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),R.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[R.jsxs("div",{className:"relative group",children:[R.jsx(Jf,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),R.jsx("input",{type:"tel",value:r,onChange:d=>i(d.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),R.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:s?"Updating...":"Save & Continue"})]}),R.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function Mj(){const{user:t,loading:e}=mo(),[n,r]=O.useState(!0),[i,s]=O.useState(window.innerWidth<768),o=lr.isNativePlatform();if(O.useEffect(()=>{const l=()=>s(window.innerWidth<768);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),O.useEffect(()=>{const l=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(l)),()=>clearTimeout(l)},[e]),n)return R.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[R.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),R.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return R.jsxs(R.Fragment,{children:[R.jsx(Db,{position:"top-right"}),R.jsx(Vj,{}),R.jsx(G.Suspense,{fallback:R.jsx(Lj,{}),children:R.jsxs(VC,{children:[R.jsx(Y,{path:"/",element:o||new URLSearchParams(window.location.search).get("standalone")==="true"?R.jsx(vE,{}):R.jsx(cj,{})}),R.jsx(Y,{path:"/hub",element:R.jsx(vE,{})}),R.jsx(Y,{path:"/login",element:R.jsx(hj,{})}),R.jsx(Y,{path:"/signup",element:R.jsx(dj,{})}),R.jsx(Y,{path:"/privacy-policy",element:R.jsx(kj,{})}),R.jsx(Y,{path:"/terms",element:R.jsx(Pj,{})}),R.jsx(Y,{path:"/delete-account",element:R.jsx(Cj,{})}),R.jsx(Y,{path:"/about",element:R.jsx(bj,{})}),R.jsx(Y,{path:"/contact",element:R.jsx(xj,{})}),R.jsxs(Y,{element:R.jsx(_E,{}),children:[R.jsx(Y,{path:"/search/:keyword",element:R.jsx(Nj,{})}),R.jsx(Y,{path:"/notes",element:R.jsx(Qd,{})}),R.jsx(Y,{path:"/notes/:branchId/:semesterId",element:R.jsx(Qd,{})}),R.jsx(Y,{path:"/notes/:branchId",element:R.jsx(Qd,{})}),R.jsx(Y,{path:"/pyq",element:R.jsx(Yd,{})}),R.jsx(Y,{path:"/pyq/:branchId/:semesterId",element:R.jsx(Yd,{})}),R.jsx(Y,{path:"/pyq/:branchId",element:R.jsx(Yd,{})}),R.jsx(Y,{path:"/attendance",element:R.jsx(Ij,{})}),R.jsx(Y,{path:"/timetable",element:R.jsx(Tj,{})}),R.jsx(Y,{path:"/study",element:R.jsx(mj,{})}),R.jsx(Y,{path:"/study-resources",element:R.jsx(gj,{})}),R.jsx(Y,{path:"/calculator",element:R.jsx(yj,{})}),R.jsx(Y,{path:"/groups",element:R.jsx(wj,{})}),R.jsx(Y,{path:"/groups/:groupId",element:R.jsx(Ej,{})}),R.jsx(Y,{path:"/achievements",element:R.jsx(vj,{})}),R.jsx(Y,{path:"/extras",element:R.jsx(Aj,{})}),R.jsx(Y,{path:"/calendar",element:R.jsx(Rj,{})}),R.jsx(Y,{path:"/cgpa",element:R.jsx(pj,{})}),R.jsx(Y,{path:"/ugeac-predictor",element:R.jsx(fj,{})}),R.jsx(Y,{path:"/beu-result",element:R.jsx(Sj,{})}),R.jsx(Y,{path:"/syllabus",element:R.jsx(wE,{})}),R.jsx(Y,{path:"/syllabus/:branchId",element:R.jsx(wE,{})}),R.jsx(Y,{path:"/college/:collegeSlug",element:R.jsx(IE,{})}),R.jsx(Y,{path:"/college/:collegeSlug/:section",element:R.jsx(IE,{})}),R.jsx(Y,{path:"/branch/:branchId",element:R.jsx(SE,{})}),R.jsx(Y,{path:"/branch/:branchId/:section",element:R.jsx(SE,{})}),R.jsx(Y,{path:"/ugeac/:page",element:R.jsx(Oj,{})}),R.jsx(Y,{path:"/subject/:subjectSlug",element:R.jsx(AE,{})}),R.jsx(Y,{path:"/subject/:subjectSlug/:section",element:R.jsx(AE,{})}),R.jsx(Y,{path:"/hackathons",element:R.jsx(Dj,{})}),R.jsx(Y,{path:"/beu/:tool",element:R.jsx(EE,{})}),R.jsx(Y,{path:"/beu/:tool/:keyword",element:R.jsx(EE,{})}),R.jsx(Y,{path:"/feature/:feature",element:R.jsx(TE,{})}),R.jsx(Y,{path:"/feature/:feature/:keyword",element:R.jsx(TE,{})})]}),R.jsx(Y,{element:R.jsx(lj,{}),children:R.jsxs(Y,{element:R.jsx(_E,{}),children:[R.jsx(Y,{path:"/dashboard",element:R.jsx(ec,{to:"/",replace:!0})}),R.jsx(Y,{element:R.jsx(uj,{}),children:R.jsx(Y,{path:"/dashboard/admin",element:R.jsx(_j,{})})})]})}),R.jsx(Y,{path:"*",element:R.jsx(ec,{to:"/",replace:!0})})]})})]})}catch(l){return console.error("App Crash:",l),R.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[R.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:R.jsx(Mb,{size:32})}),R.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),R.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),R.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const RE=document.getElementById("root");if(!RE)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=Xd.createRoot(RE);console.log("[DEBUG] Rendering app to root..."),t.render(R.jsx(G.StrictMode,{children:R.jsx(M1,{children:R.jsx(CF,{children:R.jsx(bF,{children:R.jsx(zC,{children:R.jsx(Mj,{})})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{Qj as $,w6 as A,UA as B,g6 as C,cE as D,hv as E,Mb as F,aL as G,s6 as H,Ed as I,ro as J,lr as K,$j as L,ci as M,c6 as N,h6 as O,Kj as P,CO as Q,G as R,aj as S,Fb as T,qj as U,Jj as V,Sh as W,jb as X,TD as Y,mu as Z,ue as _,eI as a,uE as a0,es as a1,Rr as a2,kr as a3,kn as a4,lD as a5,o6 as a6,Pr as a7,ON as a8,i6 as a9,qI as aA,I6 as aB,Xj as aa,Wj as ab,Gj as ac,lE as ad,UO as ae,Bj as af,Hj as ag,bO as ah,Yj as ai,cD as aj,zj as ak,t6 as al,n6 as am,e6 as an,sO as ao,Zj as ap,vD as aq,Vv as ar,l6 as as,a6 as at,kO as au,ir as av,r6 as aw,Rv as ax,nD as ay,GI as az,Ub as b,mM as c,Ni as d,bm as e,Qi as f,jj as g,Fj as h,Ec as i,R as j,p6 as k,m6 as l,Ja as m,xe as n,_6 as o,Pi as p,d6 as q,O as r,y6 as s,CM as t,mo as u,Fw as v,f6 as w,E6 as x,T6 as y,v6 as z};
