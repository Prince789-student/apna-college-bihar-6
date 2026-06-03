function aS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var PM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r0={exports:{}},Yu={},i0={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),uS=Symbol.for("react.portal"),cS=Symbol.for("react.fragment"),hS=Symbol.for("react.strict_mode"),dS=Symbol.for("react.profiler"),fS=Symbol.for("react.provider"),pS=Symbol.for("react.context"),mS=Symbol.for("react.forward_ref"),gS=Symbol.for("react.suspense"),yS=Symbol.for("react.memo"),_S=Symbol.for("react.lazy"),Bg=Symbol.iterator;function vS(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var s0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,a0={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=Vs.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}var Df=bf.prototype=new l0;Df.constructor=bf;o0(Df,Vs.prototype);Df.isPureReactComponent=!0;var zg=Array.isArray,u0=Object.prototype.hasOwnProperty,Of={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u0.call(e,r)&&!c0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oa,type:t,key:s,ref:o,props:i,_owner:Of.current}}function wS(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function ES(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $g=/\/+/g;function gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ES(""+t.key):e.toString(36)}function Ol(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case uS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gh(o,0):r,zg(i)?(n="",t!=null&&(n=t.replace($g,"$&/")+"/"),Ol(i,e,n,"",function(c){return c})):i!=null&&(Lf(i)&&(i=wS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($g,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+gh(s,l);o+=Ol(s,e,n,u,i)}else if(u=vS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+gh(s,l++),o+=Ol(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Ol(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Ll={transition:null},IS={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:Of};function d0(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Vs;re.Fragment=cS;re.Profiler=dS;re.PureComponent=bf;re.StrictMode=hS;re.Suspense=gS;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS;re.act=d0;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=o0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Of.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)u0.call(e,u)&&!c0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Oa,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:pS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fS,_context:t},t.Consumer=t};re.createElement=h0;re.createFactory=function(t){var e=h0.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:mS,render:t}};re.isValidElement=Lf;re.lazy=function(t){return{$$typeof:_S,_payload:{_status:-1,_result:t},_init:TS}};re.memo=function(t,e){return{$$typeof:yS,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};re.unstable_act=d0;re.useCallback=function(t,e){return It.current.useCallback(t,e)};re.useContext=function(t){return It.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return It.current.useDeferredValue(t)};re.useEffect=function(t,e){return It.current.useEffect(t,e)};re.useId=function(){return It.current.useId()};re.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return It.current.useMemo(t,e)};re.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};re.useRef=function(t){return It.current.useRef(t)};re.useState=function(t){return It.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return It.current.useTransition()};re.version="18.3.1";i0.exports=re;var L=i0.exports;const fe=lS(L),SS=aS({__proto__:null,default:fe},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AS=L,RS=Symbol.for("react.element"),PS=Symbol.for("react.fragment"),kS=Object.prototype.hasOwnProperty,CS=AS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NS={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kS.call(e,r)&&!NS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:RS,type:t,key:s,ref:o,props:i,_owner:CS.current}}Yu.Fragment=PS;Yu.jsx=f0;Yu.jsxs=f0;r0.exports=Yu;var b=r0.exports,ld={},p0={exports:{}},zt={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var Z=$.length;$.push(Y);e:for(;0<Z;){var de=Z-1>>>1,Ie=$[de];if(0<i(Ie,Y))$[de]=Y,$[Z]=Ie,Z=de;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],Z=$.pop();if(Z!==Y){$[0]=Z;e:for(var de=0,Ie=$.length,Wt=Ie>>>1;de<Wt;){var We=2*(de+1)-1,ii=$[We],nn=We+1,rr=$[nn];if(0>i(ii,Z))nn<Ie&&0>i(rr,ii)?($[de]=rr,$[nn]=Z,de=nn):($[de]=ii,$[We]=Z,de=We);else if(nn<Ie&&0>i(rr,Z))$[de]=rr,$[nn]=Z,de=nn;else break e}}return Y}function i($,Y){var Z=$.sortIndex-Y.sortIndex;return Z!==0?Z:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,T=!1,k=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function O($){if(P=!1,S($),!k)if(n(u)!==null)k=!0,At(U);else{var Y=n(c);Y!==null&&tn(O,Y.startTime-$)}}function U($,Y){k=!1,P&&(P=!1,w(y),y=-1),T=!0;var Z=m;try{for(S(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||$&&!R());){var de=f.callback;if(typeof de=="function"){f.callback=null,m=f.priorityLevel;var Ie=de(f.expirationTime<=Y);Y=t.unstable_now(),typeof Ie=="function"?f.callback=Ie:f===n(u)&&r(u),S(Y)}else r(u);f=n(u)}if(f!==null)var Wt=!0;else{var We=n(c);We!==null&&tn(O,We.startTime-Y),Wt=!1}return Wt}finally{f=null,m=Z,T=!1}}var j=!1,I=null,y=-1,E=5,A=-1;function R(){return!(t.unstable_now()-A<E)}function N(){if(I!==null){var $=t.unstable_now();A=$;var Y=!0;try{Y=I(!0,$)}finally{Y?_():(j=!1,I=null)}}else j=!1}var _;if(typeof v=="function")_=function(){v(N)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ne=G.port2;G.port1.onmessage=N,_=function(){ne.postMessage(null)}}else _=function(){C(N,0)};function At($){I=$,j||(j=!0,_())}function tn($,Y){y=C(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){k||T||(k=!0,At(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function($,Y,Z){var de=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?de+Z:de):Z=de,$){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=Z+Ie,$={id:d++,callback:Y,priorityLevel:$,startTime:Z,expirationTime:Ie,sortIndex:-1},Z>de?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(w(y),y=-1):P=!0,tn(O,Z-de))):($.sortIndex=Ie,e(u,$),k||T||(k=!0,At(U))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Y=m;return function(){var Z=m;m=Y;try{return $.apply(this,arguments)}finally{m=Z}}}})(g0);m0.exports=g0;var xS=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=L,Bt=xS;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,ra={};function Oi(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(ra[t]=e,t=0;t<e.length;t++)y0.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,DS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wg={},Hg={};function OS(t){return ud.call(Hg,t)?!0:ud.call(Wg,t)?!1:DS.test(t)?Hg[t]=!0:(Wg[t]=!0,!1)}function LS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function VS(t,e,n,r){if(e===null||typeof e>"u"||LS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vf,Mf);ot[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vf,Mf);ot[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vf,Mf);ot[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uf(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(VS(e,n,i,r)&&(n=null),r||i===null?OS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=bS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),Bf=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),qg=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=qg&&t[qg]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,yh;function ko(t){if(yh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yh=e&&e[1]||""}return`
`+yh+t}var _h=!1;function vh(t,e){if(!t||_h)return"";_h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{_h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function MS(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=vh(t.type,!1),t;case 11:return t=vh(t.type.render,!1),t;case 1:return t=vh(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Yi:return"Portal";case cd:return"Profiler";case Ff:return"StrictMode";case hd:return"Suspense";case dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bf:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function US(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FS(t){var e=E0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=FS(t))}function T0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pd(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I0(t,e){e=e.checked,e!=null&&Uf(t,"checked",e,!1)}function md(t,e){I0(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&gd(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gd(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Co(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function S0(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,R0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jS=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(t){jS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fo[e]=Fo[t]})});function P0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fo.hasOwnProperty(t)&&Fo[t]?(""+e).trim():e+"px"}function k0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=P0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BS=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(BS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,us=null,cs=null;function Xg(t){if(t=Ma(t)){if(typeof Td!="function")throw Error(F(280));var e=t.stateNode;e&&(e=tc(e),Td(t.stateNode,t.type,e))}}function C0(t){us?cs?cs.push(t):cs=[t]:us=t}function N0(){if(us){var t=us,e=cs;if(cs=us=null,Xg(t),e)for(t=0;t<e.length;t++)Xg(e[t])}}function x0(t,e){return t(e)}function b0(){}var wh=!1;function D0(t,e,n){if(wh)return t(e,n);wh=!0;try{return x0(t,e,n)}finally{wh=!1,(us!==null||cs!==null)&&(b0(),N0())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var r=tc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Id=!1;if($n)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Id=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Id=!1}function zS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var jo=!1,su=null,ou=!1,Sd=null,$S={onError:function(t){jo=!0,su=t}};function WS(t,e,n,r,i,s,o,l,u){jo=!1,su=null,zS.apply($S,arguments)}function HS(t,e,n,r,i,s,o,l,u){if(WS.apply(this,arguments),jo){if(jo){var c=su;jo=!1,su=null}else throw Error(F(198));ou||(ou=!0,Sd=c)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jg(t){if(Li(t)!==t)throw Error(F(188))}function qS(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jg(i),t;if(s===r)return Jg(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function L0(t){return t=qS(t),t!==null?V0(t):null}function V0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V0(t);if(e!==null)return e;t=t.sibling}return null}var M0=Bt.unstable_scheduleCallback,Zg=Bt.unstable_cancelCallback,GS=Bt.unstable_shouldYield,KS=Bt.unstable_requestPaint,Ve=Bt.unstable_now,QS=Bt.unstable_getCurrentPriorityLevel,$f=Bt.unstable_ImmediatePriority,U0=Bt.unstable_UserBlockingPriority,au=Bt.unstable_NormalPriority,YS=Bt.unstable_LowPriority,F0=Bt.unstable_IdlePriority,Xu=null,In=null;function XS(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Xu,t,void 0,(t.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:eA,JS=Math.log,ZS=Math.LN2;function eA(t){return t>>>=0,t===0?32:31-(JS(t)/ZS|0)|0}var dl=64,fl=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=No(l):(s&=o,s!==0&&(r=No(s)))}else o=n&~i,o!==0?r=No(o):s!==0&&(r=No(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-un(e),i=1<<n,r|=t[n],e&=~i;return r}function tA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-un(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=tA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function Eh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-un(e),t[e]=n}function rA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,Hf,$0,W0,H0,Rd=!1,pl=[],Rr=null,Pr=null,kr=null,oa=new Map,aa=new Map,pr=[],iA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ey(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function vo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ma(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sA(t,e,n,r,i){switch(e){case"focusin":return Rr=vo(Rr,t,e,n,r,i),!0;case"dragenter":return Pr=vo(Pr,t,e,n,r,i),!0;case"mouseover":return kr=vo(kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oa.set(s,vo(oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,aa.set(s,vo(aa.get(s)||null,t,e,n,r,i)),!0}return!1}function q0(t){var e=fi(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=O0(n),e!==null){t.blockedOn=e,H0(t.priority,function(){$0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ed=r,n.target.dispatchEvent(r),Ed=null}else return e=Ma(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function ty(t,e,n){Vl(t)&&n.delete(e)}function oA(){Rd=!1,Rr!==null&&Vl(Rr)&&(Rr=null),Pr!==null&&Vl(Pr)&&(Pr=null),kr!==null&&Vl(kr)&&(kr=null),oa.forEach(ty),aa.forEach(ty)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Rd||(Rd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,oA)))}function la(t){function e(i){return wo(i,t)}if(0<pl.length){wo(pl[0],t);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&wo(Rr,t),Pr!==null&&wo(Pr,t),kr!==null&&wo(kr,t),oa.forEach(e),aa.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)q0(n),n.blockedOn===null&&pr.shift()}var hs=er.ReactCurrentBatchConfig,uu=!0;function aA(t,e,n,r){var i=he,s=hs.transition;hs.transition=null;try{he=1,qf(t,e,n,r)}finally{he=i,hs.transition=s}}function lA(t,e,n,r){var i=he,s=hs.transition;hs.transition=null;try{he=4,qf(t,e,n,r)}finally{he=i,hs.transition=s}}function qf(t,e,n,r){if(uu){var i=Pd(t,e,n,r);if(i===null)xh(t,e,r,cu,n),ey(t,r);else if(sA(i,t,e,n,r))r.stopPropagation();else if(ey(t,r),e&4&&-1<iA.indexOf(t)){for(;i!==null;){var s=Ma(i);if(s!==null&&z0(s),s=Pd(t,e,n,r),s===null&&xh(t,e,r,cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xh(t,e,r,null,n)}}var cu=null;function Pd(t,e,n,r){if(cu=null,t=zf(r),t=fi(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function G0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QS()){case $f:return 1;case U0:return 4;case au:case YS:return 16;case F0:return 536870912;default:return 16}default:return 16}}var Er=null,Gf=null,Ml=null;function K0(){if(Ml)return Ml;var t,e=Gf,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ml=i.slice(t,1<r?1-r:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function ny(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:ny,this.isPropagationStopped=ny,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kf=$t(Ms),Va=Pe({},Ms,{view:0,detail:0}),uA=$t(Va),Th,Ih,Eo,Ju=Pe({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Th=t.screenX-Eo.screenX,Ih=t.screenY-Eo.screenY):Ih=Th=0,Eo=t),Th)},movementY:function(t){return"movementY"in t?t.movementY:Ih}}),ry=$t(Ju),cA=Pe({},Ju,{dataTransfer:0}),hA=$t(cA),dA=Pe({},Va,{relatedTarget:0}),Sh=$t(dA),fA=Pe({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),pA=$t(fA),mA=Pe({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gA=$t(mA),yA=Pe({},Ms,{data:0}),iy=$t(yA),_A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wA[t])?!!e[t]:!1}function Qf(){return EA}var TA=Pe({},Va,{key:function(t){if(t.key){var e=_A[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),IA=$t(TA),SA=Pe({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sy=$t(SA),AA=Pe({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),RA=$t(AA),PA=Pe({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),kA=$t(PA),CA=Pe({},Ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NA=$t(CA),xA=[9,13,27,32],Yf=$n&&"CompositionEvent"in window,Bo=null;$n&&"documentMode"in document&&(Bo=document.documentMode);var bA=$n&&"TextEvent"in window&&!Bo,Q0=$n&&(!Yf||Bo&&8<Bo&&11>=Bo),oy=String.fromCharCode(32),ay=!1;function Y0(t,e){switch(t){case"keyup":return xA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function DA(t,e){switch(t){case"compositionend":return X0(e);case"keypress":return e.which!==32?null:(ay=!0,oy);case"textInput":return t=e.data,t===oy&&ay?null:t;default:return null}}function OA(t,e){if(Ji)return t==="compositionend"||!Yf&&Y0(t,e)?(t=K0(),Ml=Gf=Er=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var LA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ly(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LA[t.type]:e==="textarea"}function J0(t,e,n,r){C0(r),e=hu(e,"onChange"),0<e.length&&(n=new Kf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zo=null,ua=null;function VA(t){uw(t,0)}function Zu(t){var e=ts(t);if(T0(e))return t}function MA(t,e){if(t==="change")return e}var Z0=!1;if($n){var Ah;if($n){var Rh="oninput"in document;if(!Rh){var uy=document.createElement("div");uy.setAttribute("oninput","return;"),Rh=typeof uy.oninput=="function"}Ah=Rh}else Ah=!1;Z0=Ah&&(!document.documentMode||9<document.documentMode)}function cy(){zo&&(zo.detachEvent("onpropertychange",ew),ua=zo=null)}function ew(t){if(t.propertyName==="value"&&Zu(ua)){var e=[];J0(e,ua,t,zf(t)),D0(VA,e)}}function UA(t,e,n){t==="focusin"?(cy(),zo=e,ua=n,zo.attachEvent("onpropertychange",ew)):t==="focusout"&&cy()}function FA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zu(ua)}function jA(t,e){if(t==="click")return Zu(e)}function BA(t,e){if(t==="input"||t==="change")return Zu(e)}function zA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:zA;function ca(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ud.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function hy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dy(t,e){var n=hy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hy(n)}}function tw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nw(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $A(t){var e=nw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tw(n.ownerDocument.documentElement,n)){if(r!==null&&Xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dy(n,s);var o=dy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WA=$n&&"documentMode"in document&&11>=document.documentMode,Zi=null,kd=null,$o=null,Cd=!1;function fy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||Zi==null||Zi!==iu(r)||(r=Zi,"selectionStart"in r&&Xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&ca($o,r)||($o=r,r=hu(kd,"onSelect"),0<r.length&&(e=new Kf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Ph={},rw={};$n&&(rw=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function ec(t){if(Ph[t])return Ph[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rw)return Ph[t]=e[n];return t}var iw=ec("animationend"),sw=ec("animationiteration"),ow=ec("animationstart"),aw=ec("transitionend"),lw=new Map,py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){lw.set(t,e),Oi(e,[t])}for(var kh=0;kh<py.length;kh++){var Ch=py[kh],HA=Ch.toLowerCase(),qA=Ch[0].toUpperCase()+Ch.slice(1);Xr(HA,"on"+qA)}Xr(iw,"onAnimationEnd");Xr(sw,"onAnimationIteration");Xr(ow,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(aw,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GA=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function my(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HS(r,e,void 0,t),t.currentTarget=null}function uw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;my(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;my(i,l,c),s=u}}}if(ou)throw t=Sd,ou=!1,Sd=null,t}function we(t,e){var n=e[Od];n===void 0&&(n=e[Od]=new Set);var r=t+"__bubble";n.has(r)||(cw(e,t,2,!1),n.add(r))}function Nh(t,e,n){var r=0;e&&(r|=4),cw(n,t,r,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[yl]){t[yl]=!0,y0.forEach(function(n){n!=="selectionchange"&&(GA.has(n)||Nh(n,!1,t),Nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,Nh("selectionchange",!1,e))}}function cw(t,e,n,r){switch(G0(e)){case 1:var i=aA;break;case 4:i=lA;break;default:i=qf}n=i.bind(null,e,n,t),i=void 0,!Id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=fi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}D0(function(){var c=s,d=zf(n),f=[];e:{var m=lw.get(t);if(m!==void 0){var T=Kf,k=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":T=IA;break;case"focusin":k="focus",T=Sh;break;case"focusout":k="blur",T=Sh;break;case"beforeblur":case"afterblur":T=Sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ry;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=hA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=RA;break;case iw:case sw:case ow:T=pA;break;case aw:T=kA;break;case"scroll":T=uA;break;case"wheel":T=NA;break;case"copy":case"cut":case"paste":T=gA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=sy}var P=(e&4)!==0,C=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,S;v!==null;){S=v;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,w!==null&&(O=sa(v,w),O!=null&&P.push(da(v,O,S)))),C)break;v=v.return}0<P.length&&(m=new T(m,k,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Ed&&(k=n.relatedTarget||n.fromElement)&&(fi(k)||k[Wn]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(k=n.relatedTarget||n.toElement,T=c,k=k?fi(k):null,k!==null&&(C=Li(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(T=null,k=c),T!==k)){if(P=ry,O="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=sy,O="onPointerLeave",w="onPointerEnter",v="pointer"),C=T==null?m:ts(T),S=k==null?m:ts(k),m=new P(O,v+"leave",T,n,d),m.target=C,m.relatedTarget=S,O=null,fi(d)===c&&(P=new P(w,v+"enter",k,n,d),P.target=S,P.relatedTarget=C,O=P),C=O,T&&k)t:{for(P=T,w=k,v=0,S=P;S;S=Hi(S))v++;for(S=0,O=w;O;O=Hi(O))S++;for(;0<v-S;)P=Hi(P),v--;for(;0<S-v;)w=Hi(w),S--;for(;v--;){if(P===w||w!==null&&P===w.alternate)break t;P=Hi(P),w=Hi(w)}P=null}else P=null;T!==null&&gy(f,m,T,P,!1),k!==null&&C!==null&&gy(f,C,k,P,!0)}}e:{if(m=c?ts(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var U=MA;else if(ly(m))if(Z0)U=BA;else{U=FA;var j=UA}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=jA);if(U&&(U=U(t,c))){J0(f,U,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&gd(m,"number",m.value)}switch(j=c?ts(c):window,t){case"focusin":(ly(j)||j.contentEditable==="true")&&(Zi=j,kd=c,$o=null);break;case"focusout":$o=kd=Zi=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,fy(f,n,d);break;case"selectionchange":if(WA)break;case"keydown":case"keyup":fy(f,n,d)}var I;if(Yf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ji?Y0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Q0&&n.locale!=="ko"&&(Ji||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ji&&(I=K0()):(Er=d,Gf="value"in Er?Er.value:Er.textContent,Ji=!0)),j=hu(c,y),0<j.length&&(y=new iy(y,t,null,n,d),f.push({event:y,listeners:j}),I?y.data=I:(I=X0(n),I!==null&&(y.data=I)))),(I=bA?DA(t,n):OA(t,n))&&(c=hu(c,"onBeforeInput"),0<c.length&&(d=new iy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}uw(f,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sa(t,n),s!=null&&r.unshift(da(t,s,i)),s=sa(t,e),s!=null&&r.push(da(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=sa(n,s),u!=null&&o.unshift(da(n,u,l))):i||(u=sa(n,s),u!=null&&o.push(da(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KA=/\r\n?/g,QA=/\u0000|\uFFFD/g;function yy(t){return(typeof t=="string"?t:""+t).replace(KA,`
`).replace(QA,"")}function _l(t,e,n){if(e=yy(e),yy(t)!==e&&n)throw Error(F(425))}function du(){}var Nd=null,xd=null;function bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,YA=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,XA=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(t){return _y.resolve(null).then(t).catch(JA)}:Dd;function JA(t){setTimeout(function(){throw t})}function bh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),la(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);la(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),vn="__reactFiber$"+Us,fa="__reactProps$"+Us,Wn="__reactContainer$"+Us,Od="__reactEvents$"+Us,ZA="__reactListeners$"+Us,eR="__reactHandles$"+Us;function fi(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vy(t);t!==null;){if(n=t[vn])return n;t=vy(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[vn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function tc(t){return t[fa]||null}var Ld=[],ns=-1;function Jr(t){return{current:t}}function Te(t){0>ns||(t.current=Ld[ns],Ld[ns]=null,ns--)}function _e(t,e){ns++,Ld[ns]=t.current,t.current=e}var Br={},mt=Jr(Br),Nt=Jr(!1),Ti=Br;function Is(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function fu(){Te(Nt),Te(mt)}function wy(t,e,n){if(mt.current!==Br)throw Error(F(168));_e(mt,e),_e(Nt,n)}function hw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,US(t)||"Unknown",i));return Pe({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,Ti=mt.current,_e(mt,t),_e(Nt,Nt.current),!0}function Ey(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=hw(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,Te(Nt),Te(mt),_e(mt,t)):Te(Nt),_e(Nt,n)}var Vn=null,nc=!1,Dh=!1;function dw(t){Vn===null?Vn=[t]:Vn.push(t)}function tR(t){nc=!0,dw(t)}function Zr(){if(!Dh&&Vn!==null){Dh=!0;var t=0,e=he;try{var n=Vn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,nc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),M0($f,Zr),i}finally{he=e,Dh=!1}}return null}var rs=[],is=0,mu=null,gu=0,qt=[],Gt=0,Ii=null,Mn=1,Un="";function ci(t,e){rs[is++]=gu,rs[is++]=mu,mu=t,gu=e}function fw(t,e,n){qt[Gt++]=Mn,qt[Gt++]=Un,qt[Gt++]=Ii,Ii=t;var r=Mn;t=Un;var i=32-un(r)-1;r&=~(1<<i),n+=1;var s=32-un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-un(e)+i|n<<i|r,Un=s+t}else Mn=1<<s|n<<i|r,Un=t}function Jf(t){t.return!==null&&(ci(t,1),fw(t,1,0))}function Zf(t){for(;t===mu;)mu=rs[--is],rs[is]=null,gu=rs[--is],rs[is]=null;for(;t===Ii;)Ii=qt[--Gt],qt[Gt]=null,Un=qt[--Gt],qt[Gt]=null,Mn=qt[--Gt],qt[Gt]=null}var jt=null,Mt=null,Se=!1,an=null;function pw(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ty(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Mt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ii!==null?{id:Mn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Mt=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Md(t){if(Se){var e=Mt;if(e){var n=e;if(!Ty(t,e)){if(Vd(t))throw Error(F(418));e=Cr(n.nextSibling);var r=jt;e&&Ty(t,e)?pw(r,n):(t.flags=t.flags&-4097|2,Se=!1,jt=t)}}else{if(Vd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Se=!1,jt=t}}}function Iy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function vl(t){if(t!==jt)return!1;if(!Se)return Iy(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bd(t.type,t.memoizedProps)),e&&(e=Mt)){if(Vd(t))throw mw(),Error(F(418));for(;e;)pw(t,e),e=Cr(e.nextSibling)}if(Iy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=jt?Cr(t.stateNode.nextSibling):null;return!0}function mw(){for(var t=Mt;t;)t=Cr(t.nextSibling)}function Ss(){Mt=jt=null,Se=!1}function ep(t){an===null?an=[t]:an.push(t)}var nR=er.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sy(t){var e=t._init;return e(t._payload)}function gw(t){function e(w,v){if(t){var S=w.deletions;S===null?(w.deletions=[v],w.flags|=16):S.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Dr(w,v),w.index=0,w.sibling=null,w}function s(w,v,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<v?(w.flags|=2,v):S):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,S,O){return v===null||v.tag!==6?(v=jh(S,w.mode,O),v.return=w,v):(v=i(v,S),v.return=w,v)}function u(w,v,S,O){var U=S.type;return U===Xi?d(w,v,S.props.children,O,S.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===dr&&Sy(U)===v.type)?(O=i(v,S.props),O.ref=To(w,v,S),O.return=w,O):(O=Hl(S.type,S.key,S.props,null,w.mode,O),O.ref=To(w,v,S),O.return=w,O)}function c(w,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Bh(S,w.mode,O),v.return=w,v):(v=i(v,S.children||[]),v.return=w,v)}function d(w,v,S,O,U){return v===null||v.tag!==7?(v=_i(S,w.mode,O,U),v.return=w,v):(v=i(v,S),v.return=w,v)}function f(w,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=jh(""+v,w.mode,S),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:return S=Hl(v.type,v.key,v.props,null,w.mode,S),S.ref=To(w,null,v),S.return=w,S;case Yi:return v=Bh(v,w.mode,S),v.return=w,v;case dr:var O=v._init;return f(w,O(v._payload),S)}if(Co(v)||yo(v))return v=_i(v,w.mode,S,null),v.return=w,v;wl(w,v)}return null}function m(w,v,S,O){var U=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(w,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ul:return S.key===U?u(w,v,S,O):null;case Yi:return S.key===U?c(w,v,S,O):null;case dr:return U=S._init,m(w,v,U(S._payload),O)}if(Co(S)||yo(S))return U!==null?null:d(w,v,S,O,null);wl(w,S)}return null}function T(w,v,S,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(S)||null,l(v,w,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ul:return w=w.get(O.key===null?S:O.key)||null,u(v,w,O,U);case Yi:return w=w.get(O.key===null?S:O.key)||null,c(v,w,O,U);case dr:var j=O._init;return T(w,v,S,j(O._payload),U)}if(Co(O)||yo(O))return w=w.get(S)||null,d(v,w,O,U,null);wl(v,O)}return null}function k(w,v,S,O){for(var U=null,j=null,I=v,y=v=0,E=null;I!==null&&y<S.length;y++){I.index>y?(E=I,I=null):E=I.sibling;var A=m(w,I,S[y],O);if(A===null){I===null&&(I=E);break}t&&I&&A.alternate===null&&e(w,I),v=s(A,v,y),j===null?U=A:j.sibling=A,j=A,I=E}if(y===S.length)return n(w,I),Se&&ci(w,y),U;if(I===null){for(;y<S.length;y++)I=f(w,S[y],O),I!==null&&(v=s(I,v,y),j===null?U=I:j.sibling=I,j=I);return Se&&ci(w,y),U}for(I=r(w,I);y<S.length;y++)E=T(I,w,y,S[y],O),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?y:E.key),v=s(E,v,y),j===null?U=E:j.sibling=E,j=E);return t&&I.forEach(function(R){return e(w,R)}),Se&&ci(w,y),U}function P(w,v,S,O){var U=yo(S);if(typeof U!="function")throw Error(F(150));if(S=U.call(S),S==null)throw Error(F(151));for(var j=U=null,I=v,y=v=0,E=null,A=S.next();I!==null&&!A.done;y++,A=S.next()){I.index>y?(E=I,I=null):E=I.sibling;var R=m(w,I,A.value,O);if(R===null){I===null&&(I=E);break}t&&I&&R.alternate===null&&e(w,I),v=s(R,v,y),j===null?U=R:j.sibling=R,j=R,I=E}if(A.done)return n(w,I),Se&&ci(w,y),U;if(I===null){for(;!A.done;y++,A=S.next())A=f(w,A.value,O),A!==null&&(v=s(A,v,y),j===null?U=A:j.sibling=A,j=A);return Se&&ci(w,y),U}for(I=r(w,I);!A.done;y++,A=S.next())A=T(I,w,y,A.value,O),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?y:A.key),v=s(A,v,y),j===null?U=A:j.sibling=A,j=A);return t&&I.forEach(function(N){return e(w,N)}),Se&&ci(w,y),U}function C(w,v,S,O){if(typeof S=="object"&&S!==null&&S.type===Xi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ul:e:{for(var U=S.key,j=v;j!==null;){if(j.key===U){if(U=S.type,U===Xi){if(j.tag===7){n(w,j.sibling),v=i(j,S.props.children),v.return=w,w=v;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===dr&&Sy(U)===j.type){n(w,j.sibling),v=i(j,S.props),v.ref=To(w,j,S),v.return=w,w=v;break e}n(w,j);break}else e(w,j);j=j.sibling}S.type===Xi?(v=_i(S.props.children,w.mode,O,S.key),v.return=w,w=v):(O=Hl(S.type,S.key,S.props,null,w.mode,O),O.ref=To(w,v,S),O.return=w,w=O)}return o(w);case Yi:e:{for(j=S.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(w,v.sibling),v=i(v,S.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Bh(S,w.mode,O),v.return=w,w=v}return o(w);case dr:return j=S._init,C(w,v,j(S._payload),O)}if(Co(S))return k(w,v,S,O);if(yo(S))return P(w,v,S,O);wl(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,S),v.return=w,w=v):(n(w,v),v=jh(S,w.mode,O),v.return=w,w=v),o(w)):n(w,v)}return C}var As=gw(!0),yw=gw(!1),yu=Jr(null),_u=null,ss=null,tp=null;function np(){tp=ss=_u=null}function rp(t){var e=yu.current;Te(yu),t._currentValue=e}function Ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){_u=t,tp=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(_u===null)throw Error(F(308));ss=t,_u.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var pi=null;function ip(t){pi===null?pi=[t]:pi.push(t)}function _w(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Hn(t,n)}return i=r.interleaved,i===null?(e.next=e,ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,Hn(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wf(t,n)}}function Ay(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,P=l;switch(m=e,T=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){f=k.call(T,f,m);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,m=typeof k=="function"?k.call(T,f,m):k,m==null)break e;f=Pe({},f,m);break e;case 2:fr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=f):d=d.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=f}}function Ry(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ua={},Sn=Jr(Ua),pa=Jr(Ua),ma=Jr(Ua);function mi(t){if(t===Ua)throw Error(F(174));return t}function op(t,e){switch(_e(ma,e),_e(pa,t),_e(Sn,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_d(e,t)}Te(Sn),_e(Sn,e)}function Rs(){Te(Sn),Te(pa),Te(ma)}function ww(t){mi(ma.current);var e=mi(Sn.current),n=_d(e,t.type);e!==n&&(_e(pa,t),_e(Sn,n))}function ap(t){pa.current===t&&(Te(Sn),Te(pa))}var Ae=Jr(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oh=[];function lp(){for(var t=0;t<Oh.length;t++)Oh[t]._workInProgressVersionPrimary=null;Oh.length=0}var jl=er.ReactCurrentDispatcher,Lh=er.ReactCurrentBatchConfig,Si=0,Re=null,qe=null,Ze=null,Eu=!1,Wo=!1,ga=0,rR=0;function ut(){throw Error(F(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function cp(t,e,n,r,i,s){if(Si=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?aR:lR,t=n(r,i),Wo){s=0;do{if(Wo=!1,ga=0,25<=s)throw Error(F(301));s+=1,Ze=qe=null,e.updateQueue=null,jl.current=uR,t=n(r,i)}while(Wo)}if(jl.current=Tu,e=qe!==null&&qe.next!==null,Si=0,Ze=qe=Re=null,Eu=!1,e)throw Error(F(300));return t}function hp(){var t=ga!==0;return ga=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Re.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Zt(){if(qe===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Ze===null?Re.memoizedState:Ze.next;if(e!==null)Ze=e,qe=t;else{if(t===null)throw Error(F(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ze===null?Re.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function ya(t,e){return typeof e=="function"?e(t):e}function Vh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Si&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Re.lanes|=d,Ai|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,dn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ew(){}function Tw(t,e){var n=Re,r=Zt(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,dp(Aw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,_a(9,Sw.bind(null,n,r,i,e),void 0,null),et===null)throw Error(F(349));Si&30||Iw(n,e,i)}return i}function Iw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sw(t,e,n,r){e.value=n,e.getSnapshot=r,Rw(e)&&Pw(t)}function Aw(t,e,n){return n(function(){Rw(e)&&Pw(t)})}function Rw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function Pw(t){var e=Hn(t,1);e!==null&&cn(e,t,1,-1)}function Py(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=oR.bind(null,Re,t),[e.memoizedState,t]}function _a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kw(){return Zt().memoizedState}function Bl(t,e,n,r){var i=yn();Re.flags|=t,i.memoizedState=_a(1|e,n,void 0,r===void 0?null:r)}function rc(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&up(r,o.deps)){i.memoizedState=_a(e,n,s,r);return}}Re.flags|=t,i.memoizedState=_a(1|e,n,s,r)}function ky(t,e){return Bl(8390656,8,t,e)}function dp(t,e){return rc(2048,8,t,e)}function Cw(t,e){return rc(4,2,t,e)}function Nw(t,e){return rc(4,4,t,e)}function xw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bw(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,xw.bind(null,e,t),n)}function fp(){}function Dw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ow(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lw(t,e,n){return Si&21?(dn(n,e)||(n=j0(),Re.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function iR(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Lh.transition;Lh.transition={};try{t(!1),e()}finally{he=n,Lh.transition=r}}function Vw(){return Zt().memoizedState}function sR(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mw(t))Uw(e,n);else if(n=_w(t,e,n,r),n!==null){var i=Et();cn(n,t,r,i),Fw(n,e,r)}}function oR(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mw(t))Uw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,o)){var u=e.interleaved;u===null?(i.next=i,ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=_w(t,e,i,r),n!==null&&(i=Et(),cn(n,t,r,i),Fw(n,e,r))}}function Mw(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function Uw(t,e){Wo=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wf(t,n)}}var Tu={readContext:Jt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},aR={readContext:Jt,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:ky,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,xw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sR.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:Py,useDebugValue:fp,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=Py(!1),e=t[0];return t=iR.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=yn();if(Se){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),et===null)throw Error(F(349));Si&30||Iw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ky(Aw.bind(null,r,s,t),[t]),r.flags|=2048,_a(9,Sw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=et.identifierPrefix;if(Se){var n=Un,r=Mn;n=(r&~(1<<32-un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lR={readContext:Jt,useCallback:Dw,useContext:Jt,useEffect:dp,useImperativeHandle:bw,useInsertionEffect:Cw,useLayoutEffect:Nw,useMemo:Ow,useReducer:Vh,useRef:kw,useState:function(){return Vh(ya)},useDebugValue:fp,useDeferredValue:function(t){var e=Zt();return Lw(e,qe.memoizedState,t)},useTransition:function(){var t=Vh(ya)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:Tw,useId:Vw,unstable_isNewReconciler:!1},uR={readContext:Jt,useCallback:Dw,useContext:Jt,useEffect:dp,useImperativeHandle:bw,useInsertionEffect:Cw,useLayoutEffect:Nw,useMemo:Ow,useReducer:Mh,useRef:kw,useState:function(){return Mh(ya)},useDebugValue:fp,useDeferredValue:function(t){var e=Zt();return qe===null?e.memoizedState=t:Lw(e,qe.memoizedState,t)},useTransition:function(){var t=Mh(ya)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:Tw,useId:Vw,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=br(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(cn(e,t,i,r),Fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=br(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(cn(e,t,i,r),Fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=br(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(cn(e,t,r,n),Fl(e,t,r))}};function Cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ca(n,r)||!ca(i,s):!0}function jw(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=xt(e)?Ti:mt.current,r=e.contextTypes,s=(r=r!=null)?Is(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=xt(e)?Ti:mt.current,i.context=Is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ic.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",r=e;do n+=MS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cR=typeof WeakMap=="function"?WeakMap:Map;function Bw(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,Xd=r),Bd(t,e)},n}function zw(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SR.bind(null,t,e,n),e.then(t,t))}function by(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var hR=er.ReactCurrentOwner,Ct=!1;function wt(t,e,n,r){e.child=t===null?yw(e,null,n,r):As(e,t.child,n,r)}function Oy(t,e,n,r,i){n=n.render;var s=e.ref;return ds(e,i),r=cp(t,e,n,r,s,i),n=hp(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Se&&n&&Jf(e),e.flags|=1,wt(t,e,r,i),e.child)}function Ly(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$w(t,e,s,r,i)):(t=Hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function $w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ca(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,qn(t,e,i)}return zd(t,e,n,r,i)}function Ww(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(as,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(as,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(as,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(as,Vt),Vt|=r;return wt(t,e,i,n),e.child}function Hw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,r,i){var s=xt(n)?Ti:mt.current;return s=Is(e,s),ds(e,i),n=cp(t,e,n,r,s,i),r=hp(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Se&&r&&Jf(e),e.flags|=1,wt(t,e,n,i),e.child)}function Vy(t,e,n,r,i){if(xt(n)){var s=!0;pu(e)}else s=!1;if(ds(e,i),e.stateNode===null)zl(t,e),jw(e,n,r),jd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=xt(n)?Ti:mt.current,c=Is(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ny(e,o,r,c),fr=!1;var m=e.memoizedState;o.state=m,vu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Nt.current||fr?(typeof d=="function"&&(Fd(e,n,d,r),u=e.memoizedState),(l=fr||Cy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:sn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=xt(n)?Ti:mt.current,u=Is(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Ny(e,o,r,u),fr=!1,m=e.memoizedState,o.state=m,vu(e,r,o,i);var k=e.memoizedState;l!==f||m!==k||Nt.current||fr?(typeof T=="function"&&(Fd(e,n,T,r),k=e.memoizedState),(c=fr||Cy(e,n,c,r,m,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return $d(t,e,n,r,s,i)}function $d(t,e,n,r,i,s){Hw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ey(e,n,!1),qn(t,e,s);r=e.stateNode,hR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&Ey(e,n,!0),e.child}function qw(t){var e=t.stateNode;e.pendingContext?wy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wy(t,e.context,!1),op(t,e.containerInfo)}function My(t,e,n,r,i){return Ss(),ep(i),e.flags|=256,wt(t,e,n,r),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gw(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ae,i&1),t===null)return Md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ac(o,r,0,null),t=_i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hd(n),e.memoizedState=Wd,t):pp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Dr(l,s):(s=_i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wd,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pp(t,e){return e=ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&ep(r),As(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uh(Error(F(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ac({mode:"visible",children:r.children},i,0,null),s=_i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Hd(o),e.memoizedState=Wd,s);if(!(e.mode&1))return El(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Uh(s,r,void 0),El(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hn(t,i),cn(r,t,i,-1))}return wp(),r=Uh(Error(F(421))),El(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Cr(i.nextSibling),jt=e,Se=!0,an=null,t!==null&&(qt[Gt++]=Mn,qt[Gt++]=Un,qt[Gt++]=Ii,Mn=t.id,Un=t.overflow,Ii=e),e=pp(e,r.children),e.flags|=4096,e)}function Uy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ud(t.return,e,n)}function Fh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Kw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uy(t,n,e);else if(t.tag===19)Uy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fh(e,!0,n,null,s);break;case"together":Fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fR(t,e,n){switch(e.tag){case 3:qw(e),Ss();break;case 5:ww(e);break;case 1:xt(e.type)&&pu(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?Gw(t,e,n):(_e(Ae,Ae.current&1),t=qn(t,e,n),t!==null?t.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,Ww(t,e,n)}return qn(t,e,n)}var Qw,qd,Yw,Xw;Qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};Yw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi(Sn.current);var s=null;switch(n){case"input":i=pd(t,i),r=pd(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=yd(t,i),r=yd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=du)}vd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Xw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Io(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pR(t,e,n){var r=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return xt(e.type)&&fu(),ct(e),null;case 3:return r=e.stateNode,Rs(),Te(Nt),Te(mt),lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(ef(an),an=null))),qd(t,e),ct(e),null;case 5:ap(e);var i=mi(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)Yw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ct(e),null}if(t=mi(Sn.current),vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[fa]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<xo.length;i++)we(xo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Gg(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Qg(r,s),we("invalid",r)}vd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&_l(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&_l(r.textContent,l,t),i=["children",""+l]):ra.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":cl(r),Kg(r,s,!0);break;case"textarea":cl(r),Yg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=du)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vn]=e,t[fa]=r,Qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=wd(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<xo.length;i++)we(xo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Gg(t,r),i=pd(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),we("invalid",t);break;case"textarea":Qg(t,r),i=yd(t,r),we("invalid",t);break;default:i=r}vd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?k0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&R0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ia(t,u):typeof u=="number"&&ia(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&Uf(t,s,u,o))}switch(n){case"input":cl(t),Kg(t,r,!1);break;case"textarea":cl(t),Yg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)Xw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=mi(ma.current),mi(Sn.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[vn]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:_l(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_l(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return ct(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Mt!==null&&e.mode&1&&!(e.flags&128))mw(),Ss(),e.flags|=98560,s=!1;else if(s=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[vn]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else an!==null&&(ef(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ge===0&&(Ge=3):wp())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Rs(),qd(t,e),t===null&&ha(e.stateNode.containerInfo),ct(e),null;case 10:return rp(e.type._context),ct(e),null;case 17:return xt(e.type)&&fu(),ct(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Io(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wu(t),o!==null){for(e.flags|=128,Io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>ks&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304)}else{if(!r)if(t=wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return ct(e),null}else 2*Ve()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function mR(t,e){switch(Zf(e),e.tag){case 1:return xt(e.type)&&fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),Te(Nt),Te(mt),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return Rs(),null;case 10:return rp(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var Tl=!1,ft=!1,gR=typeof WeakSet=="function"?WeakSet:Set,q=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Gd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Fy=!1;function yR(t,e){if(Nd=uu,t=nw(),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)m=f,f=T;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(T=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xd={focusedElem:t,selectionRange:n},uu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,C=k.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:sn(e.type,P),C);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Ne(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return k=Fy,Fy=!1,k}function Ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gd(e,n,s)}i=i.next}while(i!==r)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jw(t){var e=t.alternate;e!==null&&(t.alternate=null,Jw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vn],delete e[fa],delete e[Od],delete e[ZA],delete e[eR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zw(t){return t.tag===5||t.tag===3||t.tag===4}function jy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=du));else if(r!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}function Yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}var nt=null,on=!1;function cr(t,e,n){for(n=n.child;n!==null;)eE(t,e,n),n=n.sibling}function eE(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Xu,n)}catch{}switch(n.tag){case 5:ft||os(n,e);case 6:var r=nt,i=on;nt=null,cr(t,e,n),nt=r,on=i,nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(on?(t=nt,n=n.stateNode,t.nodeType===8?bh(t.parentNode,n):t.nodeType===1&&bh(t,n),la(t)):bh(nt,n.stateNode));break;case 4:r=nt,i=on,nt=n.stateNode.containerInfo,on=!0,cr(t,e,n),nt=r,on=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gd(n,e,o),i=i.next}while(i!==r)}cr(t,e,n);break;case 1:if(!ft&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,cr(t,e,n),ft=r):cr(t,e,n);break;default:cr(t,e,n)}}function By(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gR),e.forEach(function(r){var i=RR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,on=!1;break e;case 3:nt=l.stateNode.containerInfo,on=!0;break e;case 4:nt=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(nt===null)throw Error(F(160));eE(s,o,i),nt=null,on=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ne(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tE(e,t),e=e.sibling}function tE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),gn(t),r&4){try{Ho(3,t,t.return),sc(3,t)}catch(P){Ne(t,t.return,P)}try{Ho(5,t,t.return)}catch(P){Ne(t,t.return,P)}}break;case 1:rn(e,t),gn(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(rn(e,t),gn(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{ia(i,"")}catch(P){Ne(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&I0(i,s),wd(l,o);var c=wd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?k0(i,f):d==="dangerouslySetInnerHTML"?R0(i,f):d==="children"?ia(i,f):Uf(i,d,f,c)}switch(l){case"input":md(i,s);break;case"textarea":S0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?ls(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?ls(i,!!s.multiple,s.defaultValue,!0):ls(i,!!s.multiple,s.multiple?[]:"",!1))}i[fa]=s}catch(P){Ne(t,t.return,P)}}break;case 6:if(rn(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ne(t,t.return,P)}}break;case 3:if(rn(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(P){Ne(t,t.return,P)}break;case 4:rn(e,t),gn(t);break;case 13:rn(e,t),gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yp=Ve())),r&4&&By(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||d,rn(e,t),ft=c):rn(e,t),gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,T=m.child,m.tag){case 0:case 11:case 14:case 15:Ho(4,m,m.return);break;case 1:os(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){Ne(r,n,P)}}break;case 5:os(m,m.return);break;case 22:if(m.memoizedState!==null){$y(f);continue}}T!==null?(T.return=m,q=T):$y(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=P0("display",o))}catch(P){Ne(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Ne(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rn(e,t),gn(t),r&4&&By(t);break;case 21:break;default:rn(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ia(i,""),r.flags&=-33);var s=jy(t);Yd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=jy(t);Qd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _R(t,e,n){q=t,nE(t)}function nE(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=Tl;var c=ft;if(Tl=o,(ft=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Wy(i):u!==null?(u.return=o,q=u):Wy(i);for(;s!==null;)q=s,nE(s),s=s.sibling;q=i,Tl=l,ft=c}zy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):zy(t)}}function zy(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||sc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ry(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ry(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&la(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ft||e.flags&512&&Kd(e)}catch(m){Ne(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function $y(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Wy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{Kd(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{Kd(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var vR=Math.ceil,Iu=er.ReactCurrentDispatcher,mp=er.ReactCurrentOwner,Yt=er.ReactCurrentBatchConfig,le=0,et=null,je=null,st=0,Vt=0,as=Jr(0),Ge=0,va=null,Ai=0,oc=0,gp=0,qo=null,Pt=null,yp=0,ks=1/0,Ln=null,Su=!1,Xd=null,xr=null,Il=!1,Tr=null,Au=0,Go=0,Jd=null,$l=-1,Wl=0;function Et(){return le&6?Ve():$l!==-1?$l:$l=Ve()}function br(t){return t.mode&1?le&2&&st!==0?st&-st:nR.transition!==null?(Wl===0&&(Wl=j0()),Wl):(t=he,t!==0||(t=window.event,t=t===void 0?16:G0(t.type)),t):1}function cn(t,e,n,r){if(50<Go)throw Go=0,Jd=null,Error(F(185));La(t,n,r),(!(le&2)||t!==et)&&(t===et&&(!(le&2)&&(oc|=n),Ge===4&&mr(t,st)),bt(t,r),n===1&&le===0&&!(e.mode&1)&&(ks=Ve()+500,nc&&Zr()))}function bt(t,e){var n=t.callbackNode;nA(t,e);var r=lu(t,t===et?st:0);if(r===0)n!==null&&Zg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zg(n),e===1)t.tag===0?tR(Hy.bind(null,t)):dw(Hy.bind(null,t)),XA(function(){!(le&6)&&Zr()}),n=null;else{switch(B0(r)){case 1:n=$f;break;case 4:n=U0;break;case 16:n=au;break;case 536870912:n=F0;break;default:n=au}n=cE(n,rE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rE(t,e){if($l=-1,Wl=0,le&6)throw Error(F(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var r=lu(t,t===et?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ru(t,r);else{e=r;var i=le;le|=2;var s=sE();(et!==t||st!==e)&&(Ln=null,ks=Ve()+500,yi(t,e));do try{TR();break}catch(l){iE(t,l)}while(1);np(),Iu.current=s,le=i,je!==null?e=0:(et=null,st=0,e=Ge)}if(e!==0){if(e===2&&(i=Ad(t),i!==0&&(r=i,e=Zd(t,i))),e===1)throw n=va,yi(t,0),mr(t,r),bt(t,Ve()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!wR(i)&&(e=Ru(t,r),e===2&&(s=Ad(t),s!==0&&(r=s,e=Zd(t,s))),e===1))throw n=va,yi(t,0),mr(t,r),bt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:hi(t,Pt,Ln);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=yp+500-Ve(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dd(hi.bind(null,t,Pt,Ln),e);break}hi(t,Pt,Ln);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vR(r/1960))-r,10<r){t.timeoutHandle=Dd(hi.bind(null,t,Pt,Ln),r);break}hi(t,Pt,Ln);break;case 5:hi(t,Pt,Ln);break;default:throw Error(F(329))}}}return bt(t,Ve()),t.callbackNode===n?rE.bind(null,t):null}function Zd(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&ef(e)),t}function ef(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function wR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~gp,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-un(e),r=1<<n;t[n]=-1,e&=~r}}function Hy(t){if(le&6)throw Error(F(327));fs();var e=lu(t,0);if(!(e&1))return bt(t,Ve()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var r=Ad(t);r!==0&&(e=r,n=Zd(t,r))}if(n===1)throw n=va,yi(t,0),mr(t,e),bt(t,Ve()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Pt,Ln),bt(t,Ve()),null}function _p(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ks=Ve()+500,nc&&Zr())}}function Ri(t){Tr!==null&&Tr.tag===0&&!(le&6)&&fs();var e=le;le|=1;var n=Yt.transition,r=he;try{if(Yt.transition=null,he=1,t)return t()}finally{he=r,Yt.transition=n,le=e,!(le&6)&&Zr()}}function vp(){Vt=as.current,Te(as)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YA(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fu();break;case 3:Rs(),Te(Nt),Te(mt),lp();break;case 5:ap(r);break;case 4:Rs();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:rp(r.type._context);break;case 22:case 23:vp()}n=n.return}if(et=t,je=t=Dr(t.current,null),st=Vt=e,Ge=0,va=null,gp=oc=Ai=0,Pt=qo=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function iE(t,e){do{var n=je;try{if(np(),jl.current=Tu,Eu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(Si=0,Ze=qe=Re=null,Wo=!1,ga=0,mp.current=null,n===null||n.return===null){Ge=1,va=e,je=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=by(o);if(T!==null){T.flags&=-257,Dy(T,o,l,s,e),T.mode&1&&xy(s,c,e),e=T,u=c;var k=e.updateQueue;if(k===null){var P=new Set;P.add(u),e.updateQueue=P}else k.add(u);break e}else{if(!(e&1)){xy(s,c,e),wp();break e}u=Error(F(426))}}else if(Se&&l.mode&1){var C=by(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Dy(C,o,l,s,e),ep(Ps(u,l));break e}}s=u=Ps(u,l),Ge!==4&&(Ge=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Bw(s,u,e);Ay(s,w);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(xr===null||!xr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=zw(s,l,e);Ay(s,O);break e}}s=s.return}while(s!==null)}aE(n)}catch(U){e=U,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function sE(){var t=Iu.current;return Iu.current=Tu,t===null?Tu:t}function wp(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(Ai&268435455)&&!(oc&268435455)||mr(et,st)}function Ru(t,e){var n=le;le|=2;var r=sE();(et!==t||st!==e)&&(Ln=null,yi(t,e));do try{ER();break}catch(i){iE(t,i)}while(1);if(np(),le=n,Iu.current=r,je!==null)throw Error(F(261));return et=null,st=0,Ge}function ER(){for(;je!==null;)oE(je)}function TR(){for(;je!==null&&!GS();)oE(je)}function oE(t){var e=uE(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?aE(t):je=e,mp.current=null}function aE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mR(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,je=null;return}}else if(n=pR(n,e,Vt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Ge===0&&(Ge=5)}function hi(t,e,n){var r=he,i=Yt.transition;try{Yt.transition=null,he=1,IR(t,e,n,r)}finally{Yt.transition=i,he=r}return null}function IR(t,e,n,r){do fs();while(Tr!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rA(t,s),t===et&&(je=et=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Il||(Il=!0,cE(au,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=he;he=1;var l=le;le|=4,mp.current=null,yR(t,n),tE(n,t),$A(xd),uu=!!Nd,xd=Nd=null,t.current=n,_R(n),KS(),le=l,he=o,Yt.transition=s}else t.current=n;if(Il&&(Il=!1,Tr=t,Au=i),s=t.pendingLanes,s===0&&(xr=null),XS(n.stateNode),bt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Su)throw Su=!1,t=Xd,Xd=null,t;return Au&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Jd?Go++:(Go=0,Jd=t):Go=0,Zr(),null}function fs(){if(Tr!==null){var t=B0(Au),e=Yt.transition,n=he;try{if(Yt.transition=null,he=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,Au=0,le&6)throw Error(F(331));var i=le;for(le|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:Ho(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,T=d.return;if(Jw(d),d===c){q=null;break}if(m!==null){m.return=T,q=m;break}q=T}}}var k=s.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:sc(9,l)}}catch(U){Ne(l,l.return,U)}if(l===o){q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,q=O;break e}q=l.return}}if(le=i,Zr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Xu,t)}catch{}r=!0}return r}finally{he=n,Yt.transition=e}}return!1}function qy(t,e,n){e=Ps(n,e),e=Bw(t,e,1),t=Nr(t,e,1),e=Et(),t!==null&&(La(t,1,e),bt(t,e))}function Ne(t,e,n){if(t.tag===3)qy(t,t,n);else for(;e!==null;){if(e.tag===3){qy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=Ps(n,t),t=zw(e,t,1),e=Nr(e,t,1),t=Et(),e!==null&&(La(e,1,t),bt(e,t));break}}e=e.return}}function SR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(st&n)===n&&(Ge===4||Ge===3&&(st&130023424)===st&&500>Ve()-yp?yi(t,0):gp|=n),bt(t,e)}function lE(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=Et();t=Hn(t,e),t!==null&&(La(t,e,n),bt(t,n))}function AR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lE(t,n)}function RR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),lE(t,n)}var uE;uE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,fR(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Se&&e.flags&1048576&&fw(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zl(t,e),t=e.pendingProps;var i=Is(e,mt.current);ds(e,n),i=cp(null,e,r,t,i,n);var s=hp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sp(e),i.updater=ic,e.stateNode=i,i._reactInternals=e,jd(e,r,t,n),e=$d(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Jf(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kR(r),t=sn(r,t),i){case 0:e=zd(null,e,r,t,n);break e;case 1:e=Vy(null,e,r,t,n);break e;case 11:e=Oy(null,e,r,t,n);break e;case 14:e=Ly(null,e,r,sn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),zd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Vy(t,e,r,i,n);case 3:e:{if(qw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vw(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(F(423)),e),e=My(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(F(424)),e),e=My(t,e,r,n,i);break e}else for(Mt=Cr(e.stateNode.containerInfo.firstChild),jt=e,Se=!0,an=null,n=yw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),r===i){e=qn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return ww(e),t===null&&Md(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bd(r,i)?o=null:s!==null&&bd(r,s)&&(e.flags|=32),Hw(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Md(e),null;case 13:return Gw(t,e,n);case 4:return op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=As(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Oy(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(yu,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Nt.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ud(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ud(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ds(e,n),i=Jt(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),Ly(t,e,r,i,n);case 15:return $w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),zl(t,e),e.tag=1,xt(r)?(t=!0,pu(e)):t=!1,ds(e,n),jw(e,r,i),jd(e,r,i,n),$d(null,e,r,!0,t,n);case 19:return Kw(t,e,n);case 22:return Ww(t,e,n)}throw Error(F(156,e.tag))};function cE(t,e){return M0(t,e)}function PR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new PR(t,e,n,r)}function Ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kR(t){if(typeof t=="function")return Ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jf)return 11;if(t===Bf)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return _i(n.children,i,s,e);case Ff:o=8,i|=8;break;case cd:return t=Qt(12,n,e,i|2),t.elementType=cd,t.lanes=s,t;case hd:return t=Qt(13,n,e,i),t.elementType=hd,t.lanes=s,t;case dd:return t=Qt(19,n,e,i),t.elementType=dd,t.lanes=s,t;case w0:return ac(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:o=10;break e;case v0:o=9;break e;case jf:o=11;break e;case Bf:o=14;break e;case dr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _i(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function ac(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function jh(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Bh(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eh(0),this.expirationTimes=Eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tp(t,e,n,r,i,s,o,l,u){return t=new CR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function NR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hE(t){if(!t)return Br;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(xt(n))return hw(t,n,e)}return e}function dE(t,e,n,r,i,s,o,l,u){return t=Tp(n,r,!0,t,i,s,o,l,u),t.context=hE(null),n=t.current,r=Et(),i=br(n),s=Bn(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,La(t,i,r),bt(t,r),t}function lc(t,e,n,r){var i=e.current,s=Et(),o=br(i);return n=hE(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(cn(t,i,o,s),Fl(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){Gy(t,e),(t=t.alternate)&&Gy(t,e)}function xR(){return null}var fE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}uc.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));lc(t,e,null,null)};uc.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){lc(null,t,null,null)}),e[Wn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&q0(t)}};function Ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ky(){}function bR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Pu(o);s.call(c)}}var o=dE(e,r,t,0,null,!1,!1,"",Ky);return t._reactRootContainer=o,t[Wn]=o.current,ha(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Pu(u);l.call(c)}}var u=Tp(t,0,!1,null,null,!1,!1,"",Ky);return t._reactRootContainer=u,t[Wn]=u.current,ha(t.nodeType===8?t.parentNode:t),Ri(function(){lc(e,u,n,r)}),u}function hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Pu(o);l.call(u)}}lc(e,o,t,i)}else o=bR(n,e,t,i,r);return Pu(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(Wf(e,n|1),bt(e,Ve()),!(le&6)&&(ks=Ve()+500,Zr()))}break;case 13:Ri(function(){var r=Hn(t,1);if(r!==null){var i=Et();cn(r,t,1,i)}}),Ip(t,1)}};Hf=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=Et();cn(e,t,134217728,n)}Ip(t,134217728)}};$0=function(t){if(t.tag===13){var e=br(t),n=Hn(t,e);if(n!==null){var r=Et();cn(n,t,e,r)}Ip(t,e)}};W0=function(){return he};H0=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Td=function(t,e,n){switch(e){case"input":if(md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tc(r);if(!i)throw Error(F(90));T0(r),md(r,i)}}}break;case"textarea":S0(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};x0=_p;b0=Ri;var DR={usingClientEntryPoint:!1,Events:[Ma,ts,tc,C0,N0,_p]},So={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OR={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L0(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||xR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{Xu=Sl.inject(OR),In=Sl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DR;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ap(e))throw Error(F(200));return NR(t,e,null,n)};zt.createRoot=function(t,e){if(!Ap(t))throw Error(F(299));var n=!1,r="",i=fE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tp(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,ha(t.nodeType===8?t.parentNode:t),new Sp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=L0(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Ri(t)};zt.hydrate=function(t,e,n){if(!cc(e))throw Error(F(200));return hc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Ap(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dE(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,ha(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uc(e)};zt.render=function(t,e,n){if(!cc(e))throw Error(F(200));return hc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!cc(t))throw Error(F(40));return t._reactRootContainer?(Ri(function(){hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};zt.unstable_batchedUpdates=_p;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return hc(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function pE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pE)}catch(t){console.error(t)}}pE(),p0.exports=zt;var LR=p0.exports,Qy=LR;ld.createRoot=Qy.createRoot,ld.hydrateRoot=Qy.hydrateRoot;const VR="modulepreload",MR=function(t){return"/"+t},Yy={},ge=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=MR(s),s in Yy)return;Yy[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":VR,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wa.apply(this,arguments)}var Ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ir||(Ir={}));const Xy="popstate";function UR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return tf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ku(i)}return jR(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FR(){return Math.random().toString(36).substr(2,8)}function Jy(t,e){return{usr:t.state,key:t.key,idx:e}}function tf(t,e,n,r){return n===void 0&&(n=null),wa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fs(e):e,{state:n,key:e&&e.key||r||FR()})}function ku(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Ir.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(wa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Ir.Pop;let C=d(),w=C==null?null:C-c;c=C,u&&u({action:l,location:P.location,delta:w})}function m(C,w){l=Ir.Push;let v=tf(P.location,C,w);n&&n(v,C),c=d()+1;let S=Jy(v,c),O=P.createHref(v);try{o.pushState(S,"",O)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(O)}s&&u&&u({action:l,location:P.location,delta:1})}function T(C,w){l=Ir.Replace;let v=tf(P.location,C,w);n&&n(v,C),c=d();let S=Jy(v,c),O=P.createHref(v);o.replaceState(S,"",O),s&&u&&u({action:l,location:P.location,delta:0})}function k(C){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:ku(C);return v=v.replace(/ $/,"%20"),Me(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let P={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Xy,f),u=C,()=>{i.removeEventListener(Xy,f),u=null}},createHref(C){return e(i,C)},createURL:k,encodeLocation(C){let w=k(C);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:T,go(C){return o.go(C)}};return P}var Zy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zy||(Zy={}));function BR(t,e,n){return n===void 0&&(n="/"),zR(t,e,n,!1)}function zR(t,e,n,r){let i=typeof e=="string"?Fs(e):e,s=Pp(i.pathname||"/",n);if(s==null)return null;let o=mE(t);$R(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=eP(s);l=JR(o[u],c,r)}return l}function mE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Me(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Or([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),mE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:YR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of gE(s.path))i(s,o,u)}),e}function gE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=gE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function $R(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:XR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WR=/^:[\w-]+$/,HR=3,qR=2,GR=1,KR=10,QR=-2,e_=t=>t==="*";function YR(t,e){let n=t.split("/"),r=n.length;return n.some(e_)&&(r+=QR),e&&(r+=qR),n.filter(i=>!e_(i)).reduce((i,s)=>i+(WR.test(s)?HR:s===""?GR:KR),r)}function XR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=t_({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=t_({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Or([s,f.pathname]),pathnameBase:sP(Or([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Or([s,f.pathnameBase]))}return o}function t_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:T}=d;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const k=l[f];return T&&!k?c[m]=void 0:c[m]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ZR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const tP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nP=t=>tP.test(t);function rP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fs(t):t,s;if(n)if(nP(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Rp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=n_(n.substring(1),"/"):s=n_(n,e)}else s=e;return{pathname:s,search:oP(r),hash:aP(i)}}function n_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kp(t,e){let n=iP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fs(t):(i=wa({},t),Me(!i.pathname||!i.pathname.includes("?"),zh("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),zh("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),zh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=rP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Or=t=>t.join("/").replace(/\/\/+/g,"/"),sP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yE=["post","put","patch","delete"];new Set(yE);const uP=["get",...yE];new Set(uP);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ea.apply(this,arguments)}const Np=L.createContext(null),cP=L.createContext(null),ei=L.createContext(null),dc=L.createContext(null),xn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),_E=L.createContext(null);function hP(t,e){let{relative:n}=e===void 0?{}:e;js()||Me(!1);let{basename:r,navigator:i}=L.useContext(ei),{hash:s,pathname:o,search:l}=wE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Or([r,o])),i.createHref({pathname:u,search:l,hash:s})}function js(){return L.useContext(dc)!=null}function Bs(){return js()||Me(!1),L.useContext(dc).location}function vE(t){L.useContext(ei).static||L.useLayoutEffect(t)}function xp(){let{isDataRoute:t}=L.useContext(xn);return t?RP():dP()}function dP(){js()||Me(!1);let t=L.useContext(Np),{basename:e,future:n,navigator:r}=L.useContext(ei),{matches:i}=L.useContext(xn),{pathname:s}=Bs(),o=JSON.stringify(kp(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return vE(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Cp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Or([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const fP=L.createContext(null);function pP(t){let e=L.useContext(xn).outlet;return e&&L.createElement(fP.Provider,{value:t},e)}function kM(){let{matches:t}=L.useContext(xn),e=t[t.length-1];return e?e.params:{}}function wE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(ei),{matches:i}=L.useContext(xn),{pathname:s}=Bs(),o=JSON.stringify(kp(i,r.v7_relativeSplatPath));return L.useMemo(()=>Cp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function mP(t,e){return gP(t,e)}function gP(t,e,n,r){js()||Me(!1);let{navigator:i}=L.useContext(ei),{matches:s}=L.useContext(xn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Bs(),d;if(e){var f;let C=typeof e=="string"?Fs(e):e;u==="/"||(f=C.pathname)!=null&&f.startsWith(u)||Me(!1),d=C}else d=c;let m=d.pathname||"/",T=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");T="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=BR(t,{pathname:T}),P=EP(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:Or([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Or([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&P?L.createElement(dc.Provider,{value:{location:Ea({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ir.Pop}},P):P}function yP(){let t=AP(),e=lP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,s)}const _P=L.createElement(yP,null);class vP extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(xn.Provider,{value:this.props.routeContext},L.createElement(_E.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wP(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(Np);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(xn.Provider,{value:e},r)}function EP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Me(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:T}=n,k=f.route.loader&&m[f.route.id]===void 0&&(!T||T[f.route.id]===void 0);if(f.route.lazy||k){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let T,k=!1,P=null,C=null;n&&(T=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||_P,u&&(c<0&&m===0?(PP("route-fallback",!1),k=!0,C=null):c===m&&(k=!0,C=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let S;return T?S=P:k?S=C:f.route.Component?S=L.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,L.createElement(wP,{match:f,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?L.createElement(vP,{location:n.location,revalidation:n.revalidation,component:P,error:T,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var EE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(EE||{}),Cu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cu||{});function TP(t){let e=L.useContext(Np);return e||Me(!1),e}function IP(t){let e=L.useContext(cP);return e||Me(!1),e}function SP(t){let e=L.useContext(xn);return e||Me(!1),e}function TE(t){let e=SP(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function AP(){var t;let e=L.useContext(_E),n=IP(Cu.UseRouteError),r=TE(Cu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function RP(){let{router:t}=TP(EE.UseNavigateStable),e=TE(Cu.UseNavigateStable),n=L.useRef(!1);return vE(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ea({fromRouteId:e},s)))},[t,e])}const r_={};function PP(t,e,n){!e&&!r_[t]&&(r_[t]=!0)}function kP(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function bp(t){let{to:e,replace:n,state:r,relative:i}=t;js()||Me(!1);let{future:s,static:o}=L.useContext(ei),{matches:l}=L.useContext(xn),{pathname:u}=Bs(),c=xp(),d=Cp(e,kp(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return L.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Dp(t){return pP(t.context)}function ue(t){Me(!1)}function CP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ir.Pop,navigator:s,static:o=!1,future:l}=t;js()&&Me(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:Ea({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Fs(r));let{pathname:d="/",search:f="",hash:m="",state:T=null,key:k="default"}=r,P=L.useMemo(()=>{let C=Pp(d,u);return C==null?null:{location:{pathname:C,search:f,hash:m,state:T,key:k},navigationType:i}},[u,d,f,m,T,k,i]);return P==null?null:L.createElement(ei.Provider,{value:c},L.createElement(dc.Provider,{children:n,value:P}))}function NP(t){let{children:e,location:n}=t;return mP(nf(e),n)}new Promise(()=>{});function nf(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,nf(r.props.children,s));return}r.type!==ue&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rf(){return rf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rf.apply(this,arguments)}function xP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function DP(t,e){return t.button===0&&(!e||e==="_self")&&!bP(t)}const OP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],LP="6";try{window.__reactRouterVersion=LP}catch{}const VP="startTransition",i_=SS[VP];function MP(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=UR({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(f=>{c&&i_?i_(()=>u(f)):u(f)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.useEffect(()=>kP(r),[r]),L.createElement(CP,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const UP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CM=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=xP(e,OP),{basename:T}=L.useContext(ei),k,P=!1;if(typeof c=="string"&&FP.test(c)&&(k=c,UP))try{let S=new URL(window.location.href),O=c.startsWith("//")?new URL(S.protocol+c):new URL(c),U=Pp(O.pathname,T);O.origin===S.origin&&U!=null?c=U+O.search+O.hash:P=!0}catch{}let C=hP(c,{relative:i}),w=jP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||w(S)}return L.createElement("a",rf({},m,{href:k||C,onClick:P||s?r:v,ref:n,target:u}))});var s_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(s_||(s_={}));var o_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(o_||(o_={}));function jP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=xp(),c=Bs(),d=wE(t,{relative:o});return L.useCallback(f=>{if(DP(f,n)){f.preventDefault();let m=r!==void 0?r:ku(c)===ku(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}let BP={data:""},zP=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||BP},$P=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,WP=/\/\*[^]*?\*\/|  +/g,a_=/\n+/g,gr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?gr(o,s):s+"{"+gr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=gr(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=gr.p?gr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Dn={},IE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+IE(t[n]);return e}return t},HP=(t,e,n,r,i)=>{let s=IE(t),o=Dn[s]||(Dn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!Dn[o]){let u=s!==t?t:(c=>{let d,f,m=[{}];for(;d=$P.exec(c.replace(WP,""));)d[4]?m.shift():d[3]?(f=d[3].replace(a_," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(a_," ").trim();return m[0]})(t);Dn[o]=gr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Dn.g?Dn.g:null;return n&&(Dn.g=Dn[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(Dn[o],e,r,l),o},qP=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":gr(l,""):l===!1?"":l}return r+i+(o??"")},"");function fc(t){let e=this||{},n=t.call?t(e.p):t;return HP(n.unshift?n.raw?qP(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,zP(e.target),e.g,e.o,e.k)}let SE,sf,of;fc.bind({g:1});let Gn=fc.bind({k:1});function GP(t,e,n,r){gr.p=e,SE=t,sf=n,of=r}function ti(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:sf&&sf()},l),n.o=/ *go\d+/.test(u),l.className=fc.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),of&&c[0]&&of(l),SE(c,l)}return e?e(i):i}}var KP=t=>typeof t=="function",Nu=(t,e)=>KP(t)?t(e):t,QP=(()=>{let t=0;return()=>(++t).toString()})(),AE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),YP=20,Op="default",RE=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return RE(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ql=[],PE={toasts:[],pausedAt:void 0,settings:{toastLimit:YP}},En={},kE=(t,e=Op)=>{En[e]=RE(En[e]||PE,t),ql.forEach(([n,r])=>{n===e&&r(En[e])})},CE=t=>Object.keys(En).forEach(e=>kE(t,e)),XP=t=>Object.keys(En).find(e=>En[e].toasts.some(n=>n.id===t)),pc=(t=Op)=>e=>{kE(e,t)},JP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ZP=(t={},e=Op)=>{let[n,r]=L.useState(En[e]||PE),i=L.useRef(En[e]);L.useEffect(()=>(i.current!==En[e]&&r(En[e]),ql.push([e,r]),()=>{let o=ql.findIndex(([l])=>l===e);o>-1&&ql.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||JP[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},ek=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||QP()}),Fa=t=>(e,n)=>{let r=ek(e,t,n);return pc(r.toasterId||XP(r.id))({type:2,toast:r}),r.id},xe=(t,e)=>Fa("blank")(t,e);xe.error=Fa("error");xe.success=Fa("success");xe.loading=Fa("loading");xe.custom=Fa("custom");xe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?pc(e)(n):CE(n)};xe.dismissAll=t=>xe.dismiss(void 0,t);xe.remove=(t,e)=>{let n={type:4,toastId:t};e?pc(e)(n):CE(n)};xe.removeAll=t=>xe.remove(void 0,t);xe.promise=(t,e,n)=>{let r=xe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Nu(e.success,i):void 0;return s?xe.success(s,{id:r,...n,...n==null?void 0:n.success}):xe.dismiss(r),i}).catch(i=>{let s=e.error?Nu(e.error,i):void 0;s?xe.error(s,{id:r,...n,...n==null?void 0:n.error}):xe.dismiss(r)}),t};var tk=1e3,nk=(t,e="default")=>{let{toasts:n,pausedAt:r}=ZP(t,e),i=L.useRef(new Map).current,s=L.useCallback((f,m=tk)=>{if(i.has(f))return;let T=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,T)},[]);L.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(T=>{if(T.duration===1/0)return;let k=(T.duration||0)+T.pauseDuration-(f-T.createdAt);if(k<0){T.visible&&xe.dismiss(T.id);return}return setTimeout(()=>xe.dismiss(T.id,e),k)});return()=>{m.forEach(T=>T&&clearTimeout(T))}},[n,r,e]);let o=L.useCallback(pc(e),[e]),l=L.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=L.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=L.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=L.useCallback((f,m)=>{let{reverseOrder:T=!1,gutter:k=8,defaultPosition:P}=m||{},C=n.filter(S=>(S.position||P)===(f.position||P)&&S.height),w=C.findIndex(S=>S.id===f.id),v=C.filter((S,O)=>O<w&&S.visible).length;return C.filter(S=>S.visible).slice(...T?[v+1]:[0,v]).reduce((S,O)=>S+(O.height||0)+k,0)},[n]);return L.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},rk=Gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ik=Gn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,sk=Gn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ok=ti("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ik} 0.15s ease-out forwards;
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
    animation: ${sk} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ak=Gn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,lk=ti("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ak} 1s linear infinite;
`,uk=Gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ck=Gn`
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
}`,hk=ti("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${uk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ck} 0.2s ease-out forwards;
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
`,dk=ti("div")`
  position: absolute;
`,fk=ti("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,pk=Gn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mk=ti("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${pk} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,gk=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?L.createElement(mk,null,e):e:n==="blank"?null:L.createElement(fk,null,L.createElement(lk,{...r}),n!=="loading"&&L.createElement(dk,null,n==="error"?L.createElement(ok,{...r}):L.createElement(hk,{...r})))},yk=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,_k=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,vk="0%{opacity:0;} 100%{opacity:1;}",wk="0%{opacity:1;} 100%{opacity:0;}",Ek=ti("div")`
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
`,Tk=ti("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ik=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=AE()?[vk,wk]:[yk(n),_k(n)];return{animation:e?`${Gn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Gn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Sk=L.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?Ik(t.position||e||"top-center",t.visible):{opacity:0},s=L.createElement(gk,{toast:t}),o=L.createElement(Tk,{...t.ariaProps},Nu(t.message,t));return L.createElement(Ek,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):L.createElement(L.Fragment,null,s,o))});GP(L.createElement);var Ak=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=L.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return L.createElement("div",{ref:s,className:e,style:n},i)},Rk=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:AE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},Pk=fc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Al=16,kk=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=nk(n,s);return L.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Al,left:Al,right:Al,bottom:Al,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let f=d.position||e,m=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),T=Rk(f,m);return L.createElement(Ak,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Pk:"",style:T},d.type==="custom"?Nu(d.message,d):i?i(d):L.createElement(Sk,{toast:d,position:f}))}))},$h=xe,Ck={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Nk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vi=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>L.createElement("svg",{ref:c,...Ck,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${Nk(t)}`,...u},[...e.map(([d,f])=>L.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},xk=Vi("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),l_=Vi("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),af=Vi("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),NE=Vi("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),bk=Vi("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Dk=Vi("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),Ok=Vi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Lk=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[d],n[f],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new Mk;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),f!==64){const k=c<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uk=function(t){const e=xE(t);return bE.encodeByteArray(e,!0)},xu=function(t){return Uk(t).replace(/\./g,"")},DE=function(t){try{return bE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jk=()=>Fk().__FIREBASE_DEFAULTS__,Bk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&DE(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return Lk()||jk()||Bk()||zk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OE=t=>{var e,n;return(n=(e=mc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},LE=t=>{const e=OE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},VE=()=>{var t;return(t=mc())==null?void 0:t.config},ME=t=>{var e;return(e=mc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function UE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[xu(JSON.stringify(n)),xu(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Hk(){var e;const t=(e=mc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qk(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yk(){return!Hk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xk(){try{return typeof indexedDB=="object"}catch{return!1}}function Jk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zk,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function eC(t,e){return t.replace(tC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tC=/\{\$([^}]+)}/g;function nC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(u_(s)&&u_(o)){if(!zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function u_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Do(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rC(t,e){const n=new iC(t,e);return n.subscribe.bind(n)}class iC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wh),i.error===void 0&&(i.error=Wh),i.complete===void 0&&(i.complete=Wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wh(){}/**
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
 */function ee(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Mi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lp(t){return(await fetch(t,{credentials:"include"})).ok}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $k;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lC(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aC(t){return t===di?void 0:t}function lC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const cC={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},hC=ie.INFO,dC={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},fC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vp{constructor(e){this.name=e,this._logLevel=hC,this._logHandler=fC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const pC=(t,e)=>e.some(n=>t instanceof n);let c_,h_;function mC(){return c_||(c_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gC(){return h_||(h_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FE=new WeakMap,lf=new WeakMap,jE=new WeakMap,Hh=new WeakMap,Mp=new WeakMap;function yC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FE.set(n,t)}).catch(()=>{}),Mp.set(e,t),e}function _C(t){if(lf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lf.set(t,e)}let uf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vC(t){uf=t(uf)}function wC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qh(this),e,...n);return jE.set(r,e.sort?e.sort():[e]),Lr(r)}:gC().includes(t)?function(...e){return t.apply(qh(this),e),Lr(FE.get(this))}:function(...e){return Lr(t.apply(qh(this),e))}}function EC(t){return typeof t=="function"?wC(t):(t instanceof IDBTransaction&&_C(t),pC(t,mC())?new Proxy(t,uf):t)}function Lr(t){if(t instanceof IDBRequest)return yC(t);if(Hh.has(t))return Hh.get(t);const e=EC(t);return e!==t&&(Hh.set(t,e),Mp.set(e,t)),e}const qh=t=>Mp.get(t);function TC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Lr(o.result),u.oldVersion,u.newVersion,Lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const IC=["get","getKey","getAll","getAllKeys","count"],SC=["put","add","delete","clear"],Gh=new Map;function d_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=SC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||IC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Gh.set(e,s),s}vC(t=>({...t,get:(e,n,r)=>d_(e,n)||t.get(e,n,r),has:(e,n)=>!!d_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cf="@firebase/app",f_="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Vp("@firebase/app"),PC="@firebase/app-compat",kC="@firebase/analytics-compat",CC="@firebase/analytics",NC="@firebase/app-check-compat",xC="@firebase/app-check",bC="@firebase/auth",DC="@firebase/auth-compat",OC="@firebase/database",LC="@firebase/data-connect",VC="@firebase/database-compat",MC="@firebase/functions",UC="@firebase/functions-compat",FC="@firebase/installations",jC="@firebase/installations-compat",BC="@firebase/messaging",zC="@firebase/messaging-compat",$C="@firebase/performance",WC="@firebase/performance-compat",HC="@firebase/remote-config",qC="@firebase/remote-config-compat",GC="@firebase/storage",KC="@firebase/storage-compat",QC="@firebase/firestore",YC="@firebase/ai",XC="@firebase/firestore-compat",JC="firebase",ZC="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="[DEFAULT]",eN={[cf]:"fire-core",[PC]:"fire-core-compat",[CC]:"fire-analytics",[kC]:"fire-analytics-compat",[xC]:"fire-app-check",[NC]:"fire-app-check-compat",[bC]:"fire-auth",[DC]:"fire-auth-compat",[OC]:"fire-rtdb",[LC]:"fire-data-connect",[VC]:"fire-rtdb-compat",[MC]:"fire-fn",[UC]:"fire-fn-compat",[FC]:"fire-iid",[jC]:"fire-iid-compat",[BC]:"fire-fcm",[zC]:"fire-fcm-compat",[$C]:"fire-perf",[WC]:"fire-perf-compat",[HC]:"fire-rc",[qC]:"fire-rc-compat",[GC]:"fire-gcs",[KC]:"fire-gcs-compat",[QC]:"fire-fst",[XC]:"fire-fst-compat",[YC]:"fire-vertex","fire-js":"fire-js",[JC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map,tN=new Map,df=new Map;function p_(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pi(t){const e=t.name;if(df.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;df.set(e,t);for(const n of bu.values())p_(n,t);for(const n of tN.values())p_(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Be(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new ja("app","Firebase",nN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=ZC;function BE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=VE()),!n)throw Vr.create("no-options");const s=bu.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new uC(i);for(const u of df.values())o.addComponent(u);const l=new rN(n,r,o);return bu.set(i,l),l}function Up(t=hf){const e=bu.get(t);if(!e&&t===hf&&VE())return BE();if(!e)throw Vr.create("no-app",{appName:t});return e}function An(t,e,n){let r=eN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(o.join(" "));return}Pi(new $r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const iN="firebase-heartbeat-database",sN=1,Ta="firebase-heartbeat-store";let Kh=null;function zE(){return Kh||(Kh=TC(iN,sN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),Kh}async function oN(t){try{const n=(await zE()).transaction(Ta),r=await n.objectStore(Ta).get($E(t));return await n.done,r}catch(e){if(e instanceof bn)Kn.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function m_(t,e){try{const r=(await zE()).transaction(Ta,"readwrite");await r.objectStore(Ta).put(e,$E(t)),await r.done}catch(n){if(n instanceof bn)Kn.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function $E(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aN=1024,lN=30;class uN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=g_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>lN){const o=dN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=g_(),{heartbeatsToSend:r,unsentEntries:i}=cN(this._heartbeatsCache.heartbeats),s=xu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function g_(){return new Date().toISOString().substring(0,10)}function cN(t,e=aN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),y_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),y_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xk()?Jk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return m_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return m_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function y_(t){return xu(JSON.stringify({version:2,heartbeats:t})).length}function dN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){Pi(new $r("platform-logger",e=>new AC(e),"PRIVATE")),Pi(new $r("heartbeat",e=>new uN(e),"PRIVATE")),An(cf,f_,t),An(cf,f_,"esm2020"),An("fire-js","")}fN("");function WE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pN=WE,HE=new ja("auth","Firebase",WE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Vp("@firebase/auth");function mN(t,...e){Du.logLevel<=ie.WARN&&Du.warn(`Auth (${Ui}): ${t}`,...e)}function Gl(t,...e){Du.logLevel<=ie.ERROR&&Du.error(`Auth (${Ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw jp(t,...e)}function Dt(t,...e){return jp(t,...e)}function Fp(t,e,n){const r={...pN(),[e]:n};return new ja("auth","Firebase",r).create(e,{appName:t.name})}function Tt(t){return Fp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yc(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(t,"argument-error"),Fp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return HE.create(t,...e)}function z(t,e,...n){if(!t)throw jp(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gl(e),new Error(e)}function Qn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Bp(){return __()==="http:"||__()==="https:"}function __(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bp()||Gk()||"connection"in navigator)?navigator.onLine:!0}function yN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wk()||Kk()}get(){return gN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wN=new Ba(3e4,6e4);function Qe(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ye(t,e,n,r,i={}){return GE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=zs({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return qk()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Mi(t.emulatorConfig.host)&&(c.credentials="include"),qE.fetch()(await KE(t,t.config.apiHost,n,l),c)})}async function GE(t,e,n){t._canInitEmulator=!1;const r={..._N,...e};try{const i=new TN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oo(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fp(t,d,c);en(t,d)}}catch(i){if(i instanceof bn)throw i;en(t,"network-request-failed",{message:String(i)})}}async function tr(t,e,n,r,i={}){const s=await Ye(t,e,n,r,i);return"mfaPendingCredential"in s&&en(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function KE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?zp(t.config,i):`${t.config.apiScheme}://${i}`;return vN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function EN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),wN.get())})}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){return t!==void 0&&t.getResponse!==void 0}function w_(t){return t!==void 0&&t.enterprise!==void 0}class QE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t){return(await Ye(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function YE(t,e){return Ye(t,"GET","/v2/recaptchaConfig",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e){return Ye(t,"POST","/v1/accounts:delete",e)}async function AN(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function Ou(t,e){return Ye(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RN(t,e=!1){const n=ee(t),r=await n.getIdToken(e),i=_c(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ko(Qh(i.auth_time)),issuedAtTime:Ko(Qh(i.iat)),expirationTime:Ko(Qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qh(t){return Number(t)*1e3}function _c(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gl("JWT malformed, contained fewer than 3 sections"),null;try{const i=DE(n);return i?JSON.parse(i):(Gl("Failed to decode base64 JWT payload"),null)}catch(i){return Gl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function E_(t){const e=_c(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&PN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t){var f;const e=t.auth,n=await t.getIdToken(),r=await ki(t,Ou(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?XE(i.providerUserInfo):[],o=NN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ff(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function CN(t){const e=ee(t);await Sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,e){const n=await GE(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await KE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Mi(t.emulatorConfig.host)&&(u.credentials="include"),qE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bN(t,e){return Ye(t,"POST","/v2/accounts:revokeToken",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=E_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ps;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new kN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ff(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RN(this,e)}reload(){return CN(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(Tt(this.auth));const e=await this.getIdToken();return await ki(this,SN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:T,providerData:k,stsTokenManager:P}=n;z(f&&P,e,"internal-error");const C=ps.fromJSON(this.name,P);z(typeof f=="string",e,"internal-error"),hr(r,e.name),hr(i,e.name),z(typeof m=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),hr(s,e.name),hr(o,e.name),hr(l,e.name),hr(u,e.name),hr(c,e.name),hr(d,e.name);const w=new ln({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:C,createdAt:c,lastLoginAt:d});return k&&Array.isArray(k)&&(w.providerData=k.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ps;i.updateFromServerResponse(n);const s=new ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?XE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ps;l.updateFromIdToken(r);const u=new ln({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ff(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new Map;function jn(t){Qn(t instanceof Function,"Expected a class definition");let e=T_.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,T_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JE.type="NONE";const I_=JE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Kl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ou(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(jn(I_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||jn(I_);const o=Kl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await Ou(e,{idToken:d}).catch(()=>{});if(!m)break;f=await ln._fromGetAccountInfoResponse(e,m,d)}else f=ln._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ms(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ms(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iT(e))return"Blackberry";if(sT(e))return"Webos";if(eT(e))return"Safari";if((e.includes("chrome/")||tT(e))&&!e.includes("edge/"))return"Chrome";if(rT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ZE(t=gt()){return/firefox\//i.test(t)}function eT(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tT(t=gt()){return/crios\//i.test(t)}function nT(t=gt()){return/iemobile/i.test(t)}function rT(t=gt()){return/android/i.test(t)}function iT(t=gt()){return/blackberry/i.test(t)}function sT(t=gt()){return/webos/i.test(t)}function $p(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DN(t=gt()){var e;return $p(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ON(){return Qk()&&document.documentMode===10}function oT(t=gt()){return $p(t)||rT(t)||sT(t)||iT(t)||/windows phone/i.test(t)||nT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e=[]){let n;switch(t){case"Browser":n=S_(gt());break;case"Worker":n=`${S_(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}/**
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
 */class LN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VN(t,e={}){return Ye(t,"GET","/v2/passwordPolicy",Qe(t,e))}/**
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
 */const MN=6;class UN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??MN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A_(this),this.idTokenSubscription=new A_(this),this.beforeStateQueue=new LN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ou(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Be(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(Tt(this));const n=e?ee(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VN(this),n=new UN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&mN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tt(t){return ee(t)}class A_{constructor(e){this.auth=e,this.observer=null,this.addObserver=rC(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jN(t){za=t}function Wp(t){return za.loadJS(t)}function BN(){return za.recaptchaV2Script}function zN(){return za.recaptchaEnterpriseScript}function $N(){return za.gapiScript}function lT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=500,HN=6e4,Rl=1e12;class qN{constructor(e){this.auth=e,this.counter=Rl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new QN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Rl;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Rl;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Rl;return(r=this._widgets.get(n))==null||r.execute(),""}}class GN{constructor(){this.enterprise=new KN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class QN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=YN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},HN)},WN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function YN(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const XN="recaptcha-enterprise",Qo="NO_RECAPTCHA";class uT{constructor(e){this.type=XN,this.auth=tt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{YE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new QE(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;w_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qo)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&w_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zN();u.length!==0&&(u+=l),Wp(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ao(t,e,n,r=!1,i=!1){const s=new uT(t);let o;if(i)o=Qo;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Ao(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Ao(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await Ao(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await Ao(t,e,n,!1,!0);return r(t,d)}return Promise.reject(u)})}else{const l=await Ao(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function JN(t){const e=tt(t),n=await YE(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new QE(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new uT(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t,e){const n=gc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zr(s,e??{}))return i;en(i,"already-initialized")}return n.initialize({options:e})}function ex(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tx(t,e,n){const r=tt(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cT(e),{host:o,port:l}=nx(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(zr(c,r.config.emulator)&&zr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Mi(o)?Lp(`${s}//${o}${u}`):i||rx()}function cT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nx(t){const e=cT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:R_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:R_(o)}}}function R_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(t,e){return Ye(t,"POST","/v1/accounts:resetPassword",Qe(t,e))}async function sx(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function ox(t,e){return Ye(t,"POST","/v1/accounts:signUp",e)}async function ax(t,e){return Ye(t,"POST","/v1/accounts:update",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e){return tr(t,"POST","/v1/accounts:signInWithPassword",Qe(t,e))}async function wc(t,e){return Ye(t,"POST","/v1/accounts:sendOobCode",Qe(t,e))}async function ux(t,e){return wc(t,e)}async function cx(t,e){return wc(t,e)}async function hx(t,e){return wc(t,e)}async function dx(t,e){return wc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}async function px(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends vc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Aa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Aa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mr(e,n,"signInWithPassword",lx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return fx(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mr(e,r,"signUpPassword",ox,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return px(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return tr(t,"POST","/v1/accounts:signInWithIdp",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="http://localhost";class Yn extends vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:mx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t,e){return Ye(t,"POST","/v1/accounts:sendVerificationCode",Qe(t,e))}async function gx(t,e){return tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e))}async function yx(t,e){const n=await tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e));if(n.temporaryProof)throw Oo(t,"account-exists-with-different-credential",n);return n}const _x={USER_NOT_FOUND:"user-not-found"};async function vx(t,e){const n={...e,operation:"REAUTH"};return tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,n),_x)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends vc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Yo({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Yo({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return gx(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return yx(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return vx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Yo({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ex(t){const e=bo(Do(t)).link,n=e?bo(Do(e)).deep_link_id:null,r=bo(Do(t)).deep_link_id;return(r?bo(Do(r)).link:null)||r||n||e||t}class Ec{constructor(e){const n=bo(Do(e)),r=n.apiKey??null,i=n.oobCode??null,s=wx(n.mode??null);z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ex(e);try{return new Ec(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.providerId=Fi.PROVIDER_ID}static credential(e,n){return Aa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ec.parseLink(n);return z(r,"argument-error"),Aa._fromEmailAndCode(e,r.code,r.tenantId)}}Fi.PROVIDER_ID="password";Fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends $s{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ql extends Ws{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),Yn._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Yn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ql.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ql.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Ql(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ws{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ws{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ws{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(t,e){return tr(t,"POST","/v1/accounts:signUp",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ln._fromIdTokenResponse(e,r,i),o=k_(r);return new Cn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=k_(r);return new Cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function k_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NM(t){var i;if(Be(t.app))return Promise.reject(Tt(t));const e=tt(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Cn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await hT(e,{returnSecureToken:!0}),r=await Cn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends bn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lu(e,n,r,i)}}function dT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xM(t,e){const n=ee(t);await Tc(!0,n,e);const{providerUserInfo:r}=await AN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=fT(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function pT(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cn._forOperation(t,"link",r)}async function Tc(t,e,n){await Sa(e);const r=fT(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e,n=!1){const{auth:r}=t;if(Be(r.app))return Promise.reject(Tt(r));const i="reauthenticate";try{const s=await ki(t,dT(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=_c(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),Cn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&en(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(t,e,n=!1){if(Be(t.app))return Promise.reject(Tt(t));const r="signIn",i=await dT(t,r,e),s=await Cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ic(t,e){return mT(tt(t),e)}async function Ix(t,e){const n=ee(t);return await Tc(!1,n,e.providerId),pT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e){return tr(t,"POST","/v1/accounts:signInWithCustomToken",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bM(t,e){if(Be(t.app))return Promise.reject(Tt(t));const n=tt(t),r=await Sx(n,{token:e,returnSecureToken:!0}),i=await Cn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e,n){var r;z(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),z(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t){const e=tt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DM(t,e,n){const r=tt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Sc(r,i,n),await Mr(r,i,"getOobCode",cx,"EMAIL_PASSWORD_PROVIDER")}async function OM(t,e,n){await ix(ee(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hp(t),r})}async function LM(t,e){await ax(ee(t),{oobCode:e})}async function Ax(t,e,n){if(Be(t.app))return Promise.reject(Tt(t));const r=tt(t),o=await Mr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hT,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Hp(t),u}),l=await Cn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Rx(t,e,n){return Be(t.app)?Promise.reject(Tt(t)):Ic(ee(t),Fi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VM(t,e,n){const r=tt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){z(l.handleCodeInApp,r,"argument-error"),l&&Sc(r,o,l)}s(i,n),await Mr(r,i,"getOobCode",hx,"EMAIL_PASSWORD_PROVIDER")}function MM(t,e){const n=Ec.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function UM(t,e,n){if(Be(t.app))return Promise.reject(Tt(t));const r=ee(t),i=Fi.credentialWithLink(e,n||Ia());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ic(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,e){return Ye(t,"POST","/v1/accounts:createAuthUri",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(t,e){const n=Bp()?Ia():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Px(ee(t),r);return i||[]}async function jM(t,e){const n=ee(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Sc(n.auth,i,e);const{email:s}=await ux(n.auth,i);s!==t.email&&await t.reload()}async function BM(t,e,n){const r=ee(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Sc(r.auth,s,n);const{email:o}=await dx(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(t,e){return Ye(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ee(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ki(r,kx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $M(t,e){const n=ee(t);return Be(n.auth.app)?Promise.reject(Tt(n.auth)):gT(n,e,null)}function WM(t,e){return gT(ee(t),null,e)}async function gT(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ki(t,sx(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=_c(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new ys(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new Nx(r,n);case"github.com":return new xx(r,n);case"google.com":return new bx(r,n);case"twitter.com":return new Dx(r,n,t.screenName||null);case"custom":case"anonymous":return new ys(r,null);default:return new ys(r,e,n)}}class ys{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class yT extends ys{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Nx extends ys{constructor(e,n){super(e,"facebook.com",n)}}class xx extends yT{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class bx extends ys{constructor(e,n){super(e,"google.com",n)}}class Dx extends yT{constructor(e,n,r){super(e,"twitter.com",n,r)}}function HM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Cx(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t,e){return ee(t).setPersistence(e)}function Lx(t,e,n,r){return ee(t).onIdTokenChanged(e,n,r)}function Vx(t,e,n){return ee(t).beforeAuthStateChanged(e,n)}function Mx(t,e,n,r){return ee(t).onAuthStateChanged(e,n,r)}function Ux(t){return ee(t).signOut()}function qM(t,e){return tt(t).revokeAccessToken(e)}async function GM(t){return ee(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:start",Qe(t,e))}const Vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vu,"1"),this.storage.removeItem(Vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=1e3,jx=10;class vT extends _T{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ON()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vT.type="LOCAL";const wT=vT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET extends _T{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ET.type="SESSION";const TT=ET;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Bx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Rc("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function $x(t){Fe().location.href=t}/**
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
 */function qp(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function Wx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qx(){return qp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="firebaseLocalStorageDb",Gx=1,Mu="firebaseLocalStorage",ST="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function Kx(){const t=indexedDB.deleteDatabase(IT);return new $a(t).toPromise()}function pf(){const t=indexedDB.open(IT,Gx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mu,{keyPath:ST})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mu)?e(r):(r.close(),await Kx(),e(await pf()))})})}async function N_(t,e,n){const r=Pc(t,!0).put({[ST]:e,value:n});return new $a(r).toPromise()}async function Qx(t,e){const n=Pc(t,!1).get(e),r=await new $a(n).toPromise();return r===void 0?null:r.value}function x_(t,e){const n=Pc(t,!0).delete(e);return new $a(n).toPromise()}const Yx=800,Xx=3;class AT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(qx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Wx(),!this.activeServiceWorker)return;this.sender=new zx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pf();return await N_(e,Vu,"1"),await x_(e,Vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>N_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>x_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pc(i,!1).getAll();return new $a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AT.type="LOCAL";const Jx=AT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:start",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=lT("rcb"),Zx=new Ba(3e4,6e4);class eb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Fe().grecaptcha)!=null&&e.render)}load(e,n=""){return z(tb(n),e,"argument-error"),this.shouldResolveImmediately(n)&&v_(Fe().grecaptcha)?Promise.resolve(Fe().grecaptcha):new Promise((r,i)=>{const s=Fe().setTimeout(()=>{i(Dt(e,"network-request-failed"))},Zx.get());Fe()[Yh]=()=>{Fe().clearTimeout(s),delete Fe()[Yh];const l=Fe().grecaptcha;if(!l||!v_(l)){i(Dt(e,"internal-error"));return}const u=l.render;l.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${BN()}?${zs({onload:Yh,render:"explicit",hl:n})}`;Wp(o).catch(()=>{clearTimeout(s),i(Dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Fe().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function tb(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class nb{async load(e){return new qN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="recaptcha",rb={theme:"light",type:"image"};class ib{constructor(e,n,r={...rb}){this.parameters=r,this.type=Xo,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=tt(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new nb:new eb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Fe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Bp()&&!qp(),this.auth,"internal-error"),await sb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await IN(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function sb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Yo._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ob(t,e,n){if(Be(t.app))return Promise.reject(Tt(t));const r=tt(t),i=await PT(r,e,ee(n));return new RT(i,s=>Ic(r,s))}async function KM(t,e,n){const r=ee(t);await Tc(!1,r,"phone");const i=await PT(r.auth,e,ee(n));return new RT(i,s=>Ix(r,s))}async function PT(t,e,n){var r;if(!t._getRecaptchaConfig())try{await JN(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){z(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Mr(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Qo){z((n==null?void 0:n.type)===Xo,d,"argument-error");const m=await Xh(d,f,n);return C_(d,m)}return C_(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{z(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;z(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Mr(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===Qo){z((n==null?void 0:n.type)===Xo,f,"argument-error");const T=await Xh(f,m,n);return b_(f,T)}return b_(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Mr(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===Qo){z((n==null?void 0:n.type)===Xo,c,"argument-error");const f=await Xh(c,d,n);return P_(c,f)}return P_(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function Xh(t,e,n){z(n.type===Xo,t,"argument-error");const r=await n.verify();z(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Wa(t,e){return e?jn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ab(t){return mT(t.auth,new Gp(t),t.bypassAuthState)}function lb(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Tx(n,new Gp(t),t.bypassAuthState)}async function ub(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),pT(n,new Gp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ab;case"linkViaPopup":case"linkViaRedirect":return ub;case"reauthViaPopup":case"reauthViaRedirect":return lb;default:en(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new Ba(2e3,1e4);async function D_(t,e,n){if(Be(t.app))return Promise.reject(Dt(t,"operation-not-supported-in-this-environment"));const r=tt(t);yc(t,e,$s);const i=Wa(r,n);return new Sr(r,"signInViaPopup",e,i).executeNotNull()}async function QM(t,e,n){const r=ee(t);yc(r.auth,e,$s);const i=Wa(r.auth,n);return new Sr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Sr extends kT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cb.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="pendingRedirect",Yl=new Map;class db extends kT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const r=await fb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fb(t,e){const n=xT(e),r=NT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function CT(t,e){return NT(t)._set(xT(e),"true")}function pb(t,e){Yl.set(t._key(),e)}function NT(t){return jn(t._redirectPersistence)}function xT(t){return Kl(hb,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t,e,n){return gb(t,e,n)}async function gb(t,e,n){if(Be(t.app))return Promise.reject(Tt(t));const r=tt(t);yc(t,e,$s),await r._initializationPromise;const i=Wa(r,n);return await CT(i,r),i._openRedirect(r,e,"signInViaRedirect")}function YM(t,e,n){return yb(t,e,n)}async function yb(t,e,n){const r=ee(t);yc(r.auth,e,$s),await r.auth._initializationPromise;const i=Wa(r.auth,n);await Tc(!1,r,e.providerId),await CT(i,r.auth);const s=await vb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function _b(t,e){return await tt(t)._initializationPromise,bT(t,e,!1)}async function bT(t,e,n=!1){if(Be(t.app))return Promise.reject(Tt(t));const r=tt(t),i=Wa(r,e),o=await new db(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function vb(t){const e=Rc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=10*60*1e3;class Eb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wb&&this.cachedEventUids.clear(),this.cachedEventUids.has(O_(e))}saveEventToCache(e){this.cachedEventUids.add(O_(e)),this.lastProcessedEventTime=Date.now()}}function O_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e={}){return Ye(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ab=/^https?/;async function Rb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ib(t);for(const n of e)try{if(Pb(n))return}catch{}en(t,"unauthorized-domain")}function Pb(t){const e=Ia(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ab.test(n))return!1;if(Sb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kb=new Ba(3e4,6e4);function L_(){const t=Fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Cb(t){return new Promise((e,n)=>{var i,s,o;function r(){L_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L_(),n(Dt(t,"network-request-failed"))},timeout:kb.get()})}if((s=(i=Fe().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Fe().gapi)!=null&&o.load)r();else{const l=lT("iframefcb");return Fe()[l]=()=>{gapi.load?r():n(Dt(t,"network-request-failed"))},Wp(`${$N()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Xl=null,e})}let Xl=null;function Nb(t){return Xl=Xl||Cb(t),Xl}/**
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
 */const xb=new Ba(5e3,15e3),bb="__/auth/iframe",Db="emulator/auth/iframe",Ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vb(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zp(e,Db):`https://${t.config.authDomain}/${bb}`,r={apiKey:e.apiKey,appName:t.name,v:Ui},i=Lb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zs(r).slice(1)}`}async function Mb(t){const e=await Nb(t),n=Fe().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:Vb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ob,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),l=Fe().setTimeout(()=>{s(o)},xb.get());function u(){Fe().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fb=500,jb=600,Bb="_blank",zb="http://localhost";class V_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $b(t,e,n,r=Fb,i=jb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Ub,width:r.toString(),height:i.toString(),top:s,left:o},c=gt().toLowerCase();n&&(l=tT(c)?Bb:n),ZE(c)&&(e=e||zb,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[T,k])=>`${m}${T}=${k},`,"");if(DN(c)&&l!=="_self")return Wb(e||"",l),new V_(null);const f=window.open(e||"",l,d);z(f,t,"popup-blocked");try{f.focus()}catch{}return new V_(f)}function Wb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Hb="__/auth/handler",qb="emulator/auth/handler",Gb=encodeURIComponent("fac");async function M_(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(e instanceof $s){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof Ws){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Gb}=${encodeURIComponent(u)}`:"";return`${Kb(t)}?${zs(l).slice(1)}${c}`}function Kb({config:t}){return t.emulator?zp(t,qb):`https://${t.authDomain}/${Hb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="webStorageSupport";class Qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TT,this._completeRedirectFn=bT,this._overrideRedirectResult=pb}async _openPopup(e,n,r,i){var o;Qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await M_(e,n,r,Ia(),i);return $b(e,s,Rc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await M_(e,n,r,Ia(),i);return $x(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Mb(e),r=new Eb(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jh,{type:Jh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Jh];s!==void 0&&n(!!s),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oT()||eT()||$p()}}const Yb=Qb;var U_="@firebase/auth",F_="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zb(t){Pi(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(t)},c=new FN(r,i,s,u);return ex(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new $r("auth-internal",e=>{const n=tt(e.getProvider("auth").getImmediate());return(r=>new Xb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(U_,F_,Jb(t)),An(U_,F_,"esm2020")}/**
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
 */const eD=5*60,tD=ME("authIdTokenMaxAge")||eD;let j_=null;const nD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tD)return;const i=n==null?void 0:n.token;j_!==i&&(j_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rD(t=Up()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZN(t,{popupRedirectResolver:Yb,persistence:[Jx,wT,TT]}),r=ME("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nD(s.toString());Vx(n,o,()=>o(n.currentUser)),Lx(n,l=>o(l))}}const i=OE("auth");return i&&tx(n,`http://${i}`),n}function iD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}jN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zb("Browser");var sD="firebase",oD="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(sD,oD,"app");var B_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,OT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.F=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(A,R,N){for(var _=Array(arguments.length-2),G=2;G<arguments.length;G++)_[G-2]=arguments[G];return y.prototype[R].apply(A,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,E){E||(E=0);const A=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)A[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;R<16;++R)A[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],R=I.g[2];let N=I.g[3],_;_=y+(N^E&(R^N))+A[0]+3614090360&4294967295,y=E+(_<<7&4294967295|_>>>25),_=N+(R^y&(E^R))+A[1]+3905402710&4294967295,N=y+(_<<12&4294967295|_>>>20),_=R+(E^N&(y^E))+A[2]+606105819&4294967295,R=N+(_<<17&4294967295|_>>>15),_=E+(y^R&(N^y))+A[3]+3250441966&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(N^E&(R^N))+A[4]+4118548399&4294967295,y=E+(_<<7&4294967295|_>>>25),_=N+(R^y&(E^R))+A[5]+1200080426&4294967295,N=y+(_<<12&4294967295|_>>>20),_=R+(E^N&(y^E))+A[6]+2821735955&4294967295,R=N+(_<<17&4294967295|_>>>15),_=E+(y^R&(N^y))+A[7]+4249261313&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(N^E&(R^N))+A[8]+1770035416&4294967295,y=E+(_<<7&4294967295|_>>>25),_=N+(R^y&(E^R))+A[9]+2336552879&4294967295,N=y+(_<<12&4294967295|_>>>20),_=R+(E^N&(y^E))+A[10]+4294925233&4294967295,R=N+(_<<17&4294967295|_>>>15),_=E+(y^R&(N^y))+A[11]+2304563134&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(N^E&(R^N))+A[12]+1804603682&4294967295,y=E+(_<<7&4294967295|_>>>25),_=N+(R^y&(E^R))+A[13]+4254626195&4294967295,N=y+(_<<12&4294967295|_>>>20),_=R+(E^N&(y^E))+A[14]+2792965006&4294967295,R=N+(_<<17&4294967295|_>>>15),_=E+(y^R&(N^y))+A[15]+1236535329&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(R^N&(E^R))+A[1]+4129170786&4294967295,y=E+(_<<5&4294967295|_>>>27),_=N+(E^R&(y^E))+A[6]+3225465664&4294967295,N=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(N^y))+A[11]+643717713&4294967295,R=N+(_<<14&4294967295|_>>>18),_=E+(N^y&(R^N))+A[0]+3921069994&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(R^N&(E^R))+A[5]+3593408605&4294967295,y=E+(_<<5&4294967295|_>>>27),_=N+(E^R&(y^E))+A[10]+38016083&4294967295,N=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(N^y))+A[15]+3634488961&4294967295,R=N+(_<<14&4294967295|_>>>18),_=E+(N^y&(R^N))+A[4]+3889429448&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(R^N&(E^R))+A[9]+568446438&4294967295,y=E+(_<<5&4294967295|_>>>27),_=N+(E^R&(y^E))+A[14]+3275163606&4294967295,N=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(N^y))+A[3]+4107603335&4294967295,R=N+(_<<14&4294967295|_>>>18),_=E+(N^y&(R^N))+A[8]+1163531501&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(R^N&(E^R))+A[13]+2850285829&4294967295,y=E+(_<<5&4294967295|_>>>27),_=N+(E^R&(y^E))+A[2]+4243563512&4294967295,N=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(N^y))+A[7]+1735328473&4294967295,R=N+(_<<14&4294967295|_>>>18),_=E+(N^y&(R^N))+A[12]+2368359562&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(E^R^N)+A[5]+4294588738&4294967295,y=E+(_<<4&4294967295|_>>>28),_=N+(y^E^R)+A[8]+2272392833&4294967295,N=y+(_<<11&4294967295|_>>>21),_=R+(N^y^E)+A[11]+1839030562&4294967295,R=N+(_<<16&4294967295|_>>>16),_=E+(R^N^y)+A[14]+4259657740&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(E^R^N)+A[1]+2763975236&4294967295,y=E+(_<<4&4294967295|_>>>28),_=N+(y^E^R)+A[4]+1272893353&4294967295,N=y+(_<<11&4294967295|_>>>21),_=R+(N^y^E)+A[7]+4139469664&4294967295,R=N+(_<<16&4294967295|_>>>16),_=E+(R^N^y)+A[10]+3200236656&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(E^R^N)+A[13]+681279174&4294967295,y=E+(_<<4&4294967295|_>>>28),_=N+(y^E^R)+A[0]+3936430074&4294967295,N=y+(_<<11&4294967295|_>>>21),_=R+(N^y^E)+A[3]+3572445317&4294967295,R=N+(_<<16&4294967295|_>>>16),_=E+(R^N^y)+A[6]+76029189&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(E^R^N)+A[9]+3654602809&4294967295,y=E+(_<<4&4294967295|_>>>28),_=N+(y^E^R)+A[12]+3873151461&4294967295,N=y+(_<<11&4294967295|_>>>21),_=R+(N^y^E)+A[15]+530742520&4294967295,R=N+(_<<16&4294967295|_>>>16),_=E+(R^N^y)+A[2]+3299628645&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(R^(E|~N))+A[0]+4096336452&4294967295,y=E+(_<<6&4294967295|_>>>26),_=N+(E^(y|~R))+A[7]+1126891415&4294967295,N=y+(_<<10&4294967295|_>>>22),_=R+(y^(N|~E))+A[14]+2878612391&4294967295,R=N+(_<<15&4294967295|_>>>17),_=E+(N^(R|~y))+A[5]+4237533241&4294967295,E=R+(_<<21&4294967295|_>>>11),_=y+(R^(E|~N))+A[12]+1700485571&4294967295,y=E+(_<<6&4294967295|_>>>26),_=N+(E^(y|~R))+A[3]+2399980690&4294967295,N=y+(_<<10&4294967295|_>>>22),_=R+(y^(N|~E))+A[10]+4293915773&4294967295,R=N+(_<<15&4294967295|_>>>17),_=E+(N^(R|~y))+A[1]+2240044497&4294967295,E=R+(_<<21&4294967295|_>>>11),_=y+(R^(E|~N))+A[8]+1873313359&4294967295,y=E+(_<<6&4294967295|_>>>26),_=N+(E^(y|~R))+A[15]+4264355552&4294967295,N=y+(_<<10&4294967295|_>>>22),_=R+(y^(N|~E))+A[6]+2734768916&4294967295,R=N+(_<<15&4294967295|_>>>17),_=E+(N^(R|~y))+A[13]+1309151649&4294967295,E=R+(_<<21&4294967295|_>>>11),_=y+(R^(E|~N))+A[4]+4149444226&4294967295,y=E+(_<<6&4294967295|_>>>26),_=N+(E^(y|~R))+A[11]+3174756917&4294967295,N=y+(_<<10&4294967295|_>>>22),_=R+(y^(N|~E))+A[2]+718787259&4294967295,R=N+(_<<15&4294967295|_>>>17),_=E+(N^(R|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const E=y-this.blockSize,A=this.C;let R=this.h,N=0;for(;N<y;){if(R==0)for(;N<=E;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<y;)if(A[R++]=I.charCodeAt(N++),R==this.blockSize){i(this,A),R=0;break}}else for(;N<y;)if(A[R++]=I[N++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)I[y++]=this.g[E]>>>A&255;return I};function s(I,y){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function o(I,y){this.h=y;const E=[];let A=!0;for(let R=I.length-1;R>=0;R--){const N=I[R]|0;A&&N==y||(E[R]=N,A=!1)}this.g=E}var l={};function u(I){return-128<=I&&I<128?s(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(I<0)return C(c(-I));const y=[];let E=1;for(let A=0;I>=E;A++)y[A]=I/E|0,E*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return C(d(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let A=f;for(let N=0;N<I.length;N+=8){var R=Math.min(8,I.length-N);const _=parseInt(I.substring(N,N+R),y);R<8?(R=c(Math.pow(y,R)),A=A.j(R).add(c(_))):(A=A.j(E),A=A.add(c(_)))}return A}var f=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();let I=0,y=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);I+=(A>=0?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(P(this))return"-"+C(this).toString(I);const y=c(Math.pow(I,6));var E=this;let A="";for(;;){const R=O(E,y).g;E=w(E,R.j(y));let N=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=R,k(E))return N+A;for(;N.length<6;)N="0"+N;A=N+A}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=w(this,I),P(I)?-1:k(I)?0:1};function C(I){const y=I.g.length,E=[];for(let A=0;A<y;A++)E[A]=~I.g[A];return new o(E,~I.h).add(m)}t.abs=function(){return P(this)?C(this):this},t.add=function(I){const y=Math.max(this.g.length,I.g.length),E=[];let A=0;for(let R=0;R<=y;R++){let N=A+(this.i(R)&65535)+(I.i(R)&65535),_=(N>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=_>>>16,N&=65535,_&=65535,E[R]=_<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(I,y){return I.add(C(y))}t.j=function(I){if(k(this)||k(I))return f;if(P(this))return P(I)?C(this).j(C(I)):C(C(this).j(I));if(P(I))return C(this.j(C(I)));if(this.l(T)<0&&I.l(T)<0)return c(this.m()*I.m());const y=this.g.length+I.g.length,E=[];for(var A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<I.g.length;R++){const N=this.i(A)>>>16,_=this.i(A)&65535,G=I.i(R)>>>16,ne=I.i(R)&65535;E[2*A+2*R]+=_*ne,v(E,2*A+2*R),E[2*A+2*R+1]+=N*ne,v(E,2*A+2*R+1),E[2*A+2*R+1]+=_*G,v(E,2*A+2*R+1),E[2*A+2*R+2]+=N*G,v(E,2*A+2*R+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function v(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function S(I,y){this.g=I,this.h=y}function O(I,y){if(k(y))throw Error("division by zero");if(k(I))return new S(f,f);if(P(I))return y=O(C(I),y),new S(C(y.g),C(y.h));if(P(y))return y=O(I,C(y)),new S(C(y.g),y.h);if(I.g.length>30){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;A.l(I)<=0;)E=U(E),A=U(A);var R=j(E,1),N=j(A,1);for(A=j(A,2),E=j(E,2);!k(A);){var _=N.add(A);_.l(I)<=0&&(R=R.add(E),N=_),A=j(A,1),E=j(E,1)}return y=w(I,R.j(y)),new S(R,y)}for(R=f;I.l(y)>=0;){for(E=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),N=c(E),_=N.j(y);P(_)||_.l(I)>0;)E-=A,N=c(E),_=N.j(y);k(N)&&(N=m),R=R.add(N),I=w(I,_)}return new S(R,I)}t.B=function(I){return O(this,I).h},t.and=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)&I.i(A);return new o(E,this.h&I.h)},t.or=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)|I.i(A);return new o(E,this.h|I.h)},t.xor=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)^I.i(A);return new o(E,this.h^I.h)};function U(I){const y=I.g.length+1,E=[];for(let A=0;A<y;A++)E[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(E,I.h)}function j(I,y){const E=y>>5;y%=32;const A=I.g.length-E,R=[];for(let N=0;N<A;N++)R[N]=y>0?I.i(N+E)>>>y|I.i(N+E+1)<<32-y:I.i(N+E);return new o(R,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,OT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ur=o}).apply(typeof B_<"u"?B_:typeof self<"u"?self:typeof window<"u"?window:{});var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var LT,Lo,VT,Jl,mf,MT,UT,FT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pl=="object"&&Pl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in p))break e;p=p[x]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,x,D){for(var B=Array(arguments.length-2),te=2;te<arguments.length;te++)B[te-2]=arguments[te];return h.prototype[x].apply(g,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function k(a,h){for(let g=1;g<arguments.length;g++){const x=arguments[g];var p=typeof x;if(p=p!="object"?p:x?Array.isArray(x)?"array":p:"null",p=="array"||p=="object"&&typeof x.length=="number"){p=a.length||0;const D=x.length||0;a.length=p+D;for(let B=0;B<D;B++)a[p+B]=x[B]}else a.push(x)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){o.setTimeout(()=>{throw a},0)}function w(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const g=S.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new P(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let U,j=!1,I=new v,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(p){C(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function G(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(G,R),G.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&G.Z.h.call(this)},G.prototype.h=function(){G.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),At=0;function tn(a,h,p,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=x,this.key=++At,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function Z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function de(a){const h={};for(const p in a)h[p]=a[p];return h}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wt(a,h){let p,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(p in g)a[p]=g[p];for(let D=0;D<Ie.length;D++)p=Ie[D],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function We(a){this.src=a,this.g={},this.h=0}We.prototype.add=function(a,h,p,g,x){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const B=nn(a,h,g,x);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new tn(h,this.src,D,!!g,x),h.fa=p,a.push(h)),h};function ii(a,h){const p=h.type;if(p in a.g){var g=a.g[p],x=Array.prototype.indexOf.call(g,h,void 0),D;(D=x>=0)&&Array.prototype.splice.call(g,x,1),D&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function nn(a,h,p,g){for(let x=0;x<a.length;++x){const D=a[x];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==g)return x}return-1}var rr="closure_lm_"+(Math.random()*1e6|0),Kc={};function zm(a,h,p,g,x){if(g&&g.once)return Wm(a,h,p,g,x);if(Array.isArray(h)){for(let D=0;D<h.length;D++)zm(a,h[D],p,g,x);return null}return p=Jc(p),a&&a[ne]?a.J(h,p,l(g)?!!g.capture:!!g,x):$m(a,h,p,!1,g,x)}function $m(a,h,p,g,x,D){if(!h)throw Error("Invalid event type");const B=l(x)?!!x.capture:!!x;let te=Yc(a);if(te||(a[rr]=te=new We(a)),p=te.add(h,p,g,B,D),p.proxy)return p;if(g=D1(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)N||(x=B),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(qm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function D1(){function a(p){return h.call(a.src,a.listener,p)}const h=O1;return a}function Wm(a,h,p,g,x){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Wm(a,h[D],p,g,x);return null}return p=Jc(p),a&&a[ne]?a.K(h,p,l(g)?!!g.capture:!!g,x):$m(a,h,p,!0,g,x)}function Hm(a,h,p,g,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)Hm(a,h[D],p,g,x);else g=l(g)?!!g.capture:!!g,p=Jc(p),a&&a[ne]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],p=nn(h,p,g,x),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Yc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=nn(h,p,g,x)),(p=a>-1?h[a]:null)&&Qc(p))}function Qc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ne])ii(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(qm(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Yc(h))?(ii(p,a),p.h==0&&(p.src=null,h[rr]=null)):$(a)}}}function qm(a){return a in Kc?Kc[a]:Kc[a]="on"+a}function O1(a,h){if(a.da)a=!0;else{h=new G(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&Qc(a),a=p.call(g,h)}return a}function Yc(a){return a=a[rr],a instanceof We?a:null}var Xc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Jc(a){return typeof a=="function"?a:(a[Xc]||(a[Xc]=function(h){return a.handleEvent(h)}),a[Xc])}function lt(){A.call(this),this.i=new We(this),this.M=this,this.G=null}f(lt,A),lt.prototype[ne]=!0,lt.prototype.removeEventListener=function(a,h,p,g){Hm(this,a,h,p,g)};function yt(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var x=h;h=new R(g,a),Wt(h,x)}x=!0;let D,B;if(p)for(B=p.length-1;B>=0;B--)D=h.g=p[B],x=Ya(D,g,!0,h)&&x;if(D=h.g=a,x=Ya(D,g,!0,h)&&x,x=Ya(D,g,!1,h)&&x,p)for(B=0;B<p.length;B++)D=h.g=p[B],x=Ya(D,g,!1,h)&&x}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)$(p[g]);delete a.g[h],a.h--}}this.G=null},lt.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},lt.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Ya(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let D=0;D<h.length;++D){const B=h[D];if(B&&!B.da&&B.capture==p){const te=B.listener,He=B.ha||B.src;B.fa&&ii(a.i,B),x=te.call(He,g)!==!1&&x}}return x&&!g.defaultPrevented}function L1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Gm(a){a.g=L1(()=>{a.g=null,a.i&&(a.i=!1,Gm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class V1 extends A{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Gm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(a){A.call(this),this.h=a,this.g={}}f(eo,A);var Km=[];function Qm(a){Y(a.g,function(h,p){this.g.hasOwnProperty(p)&&Qc(h)},a),a.g={}}eo.prototype.N=function(){eo.Z.N.call(this),Qm(this)},eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zc=o.JSON.stringify,M1=o.JSON.parse,U1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ym(){}function Xm(){}var to={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function eh(){R.call(this,"d")}f(eh,R);function th(){R.call(this,"c")}f(th,R);var si={},Jm=null;function Xa(){return Jm=Jm||new lt}si.Ia="serverreachability";function Zm(a){R.call(this,si.Ia,a)}f(Zm,R);function no(a){const h=Xa();yt(h,new Zm(h))}si.STAT_EVENT="statevent";function eg(a,h){R.call(this,si.STAT_EVENT,a),this.stat=h}f(eg,R);function _t(a){const h=Xa();yt(h,new eg(h,a))}si.Ja="timingevent";function tg(a,h){R.call(this,si.Ja,a),this.size=h}f(tg,R);function ro(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function io(){this.g=!0}io.prototype.ua=function(){this.g=!1};function F1(a,h,p,g,x,D){a.info(function(){if(a.g)if(D){var B="",te=D.split("&");for(let pe=0;pe<te.length;pe++){var He=te[pe].split("=");if(He.length>1){const Xe=He[0];He=He[1];const mn=Xe.split("_");B=mn.length>=2&&mn[1]=="type"?B+(Xe+"="+He+"&"):B+(Xe+"=redacted&")}}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+p+`
`+B})}function j1(a,h,p,g,x,D,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+p+`
`+D+" "+B})}function zi(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+z1(a,p)+(g?" "+g:"")})}function B1(a,h){a.info(function(){return"TIMEOUT: "+h})}io.prototype.info=function(){};function z1(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var p=D[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return Zc(D)}catch{return h}}var Ja={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ng={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rg;function nh(){}f(nh,Ym),nh.prototype.g=function(){return new XMLHttpRequest},rg=new nh;function so(a){return encodeURIComponent(String(a))}function $1(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function ir(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new eo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ig}function ig(){this.i=null,this.g="",this.h=!1}var sg={},rh={};function ih(a,h,p){a.M=1,a.A=el(pn(h)),a.u=p,a.R=!0,og(a,null)}function og(a,h){a.F=Date.now(),Za(a),a.B=pn(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),vg(p.i,"t",g),a.C=0,p=a.j.L,a.h=new ig,a.g=Mg(a.j,p?h:null,!a.u),a.P>0&&(a.O=new V1(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(Km[0]=x.toString()),x=Km);for(let D=0;D<x.length;D++){const B=zm(p,x[D],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?de(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),no(),F1(a.i,a.v,a.B,a.l,a.S,a.u)}ir.prototype.ba=function(a){a=a.target;const h=this.O;h&&ar(a)==3?h.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const te=ar(this.g),He=this.g.ya(),pe=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Rg(this.g)))){this.K||te!=4||He==7||(He==8||pe<=0?no(3):no(2)),sh(this);var h=this.g.ca();this.X=h;var p=W1(this);if(this.o=h==200,j1(this.i,this.v,this.B,this.l,this.S,te,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var D=g;break t}}D=null}if(a=D)zi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,oh(this,a);else{this.o=!1,this.m=3,_t(12),oi(this),oo(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<p.length;)if(Xe=H1(this,p),Xe==rh){te==4&&(this.m=4,_t(14),a=!1),zi(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==sg){this.m=4,_t(15),zi(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else zi(this.i,this.l,Xe,null),oh(this,Xe);if(ag(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||p.length!=0||this.h.h||(this.m=1,_t(16),a=!1),this.o=this.o&&a,!a)zi(this.i,this.l,p,"[Invalid Chunked Response]"),oi(this),oo(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ph(B),B.P=!0,_t(11))}}else zi(this.i,this.l,p,null),oh(this,p);te==4&&oi(this),this.o&&!this.K&&(te==4?Dg(this.j,this):(this.o=!1,Za(this)))}else sS(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),oi(this),oo(this)}}}catch{}finally{}};function W1(a){if(!ag(a))return a.g.la();const h=Rg(a.g);if(h==="")return"";let p="";const g=h.length,x=ar(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return oi(a),oo(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,p+=a.h.i.decode(h[D],{stream:!(x&&D==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function ag(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function H1(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?rh:(p=Number(h.substring(p,g)),isNaN(p)?sg:(g+=1,g+p>h.length?rh:(h=h.slice(g,g+p),a.C=g+p,h)))}ir.prototype.cancel=function(){this.K=!0,oi(this)};function Za(a){a.T=Date.now()+a.H,lg(a,a.H)}function lg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ro(c(a.aa,a),h)}function sh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ir.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(B1(this.i,this.B),this.M!=2&&(no(),_t(17)),oi(this),this.m=2,oo(this)):lg(this,this.T-a)};function oo(a){a.j.I==0||a.K||Dg(a.j,a)}function oi(a){sh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Qm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function oh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||ah(p.h,a))){if(!a.L&&ah(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)sl(p),rl(p);else break e;fh(p),_t(18)}}else p.xa=x[1],0<p.xa-p.K&&x[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ro(c(p.Va,p),6e3));hg(p.h)<=1&&p.ta&&(p.ta=void 0)}else li(p,11)}else if((a.L||p.g==a)&&sl(p),!_(h))for(x=p.Ba.g.parse(h),h=0;h<x.length;h++){let pe=x[h];const Xe=pe[0];if(!(Xe<=p.K))if(p.K=Xe,pe=pe[1],p.I==2)if(pe[0]=="c"){p.M=pe[1],p.ba=pe[2];const mn=pe[3];mn!=null&&(p.ka=mn,p.j.info("VER="+p.ka));const ui=pe[4];ui!=null&&(p.za=ui,p.j.info("SVER="+p.za));const lr=pe[5];lr!=null&&typeof lr=="number"&&lr>0&&(g=1.5*lr,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const ur=a.g;if(ur){const al=ur.g?ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var D=g.h;D.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(lh(D,D.h),D.h=null))}if(g.G){const mh=ur.g?ur.g.getResponseHeader("X-HTTP-Session-Id"):null;mh&&(g.wa=mh,ve(g.J,g.G,mh))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var B=a;if(g.na=Vg(g,g.L?g.ba:null,g.W),B.L){dg(g.h,B);var te=B,He=g.O;He&&(te.H=He),te.D&&(sh(te),Za(te)),g.g=B}else xg(g);p.i.length>0&&il(p)}else pe[0]!="stop"&&pe[0]!="close"||li(p,7);else p.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?li(p,7):dh(p):pe[0]!="noop"&&p.l&&p.l.qa(pe),p.A=0)}}no(4)}catch{}}var q1=class{constructor(a,h){this.g=a,this.map=h}};function ug(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hg(a){return a.h?1:a.g?a.g.size:0}function ah(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lh(a,h){a.g?a.g.add(h):a.h=h}function dg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ug.prototype.cancel=function(){if(this.i=fg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return T(a.i)}var pg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G1(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let x,D=null;g>=0?(x=a[p].substring(0,g),D=a[p].substring(g+1)):x=a[p],h(x,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function sr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof sr?(this.l=a.l,ao(this,a.j),this.o=a.o,this.g=a.g,lo(this,a.u),this.h=a.h,uh(this,wg(a.i)),this.m=a.m):a&&(h=String(a).match(pg))?(this.l=!1,ao(this,h[1]||"",!0),this.o=uo(h[2]||""),this.g=uo(h[3]||"",!0),lo(this,h[4]),this.h=uo(h[5]||"",!0),uh(this,h[6]||"",!0),this.m=uo(h[7]||"")):(this.l=!1,this.i=new ho(null,this.l))}sr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(co(h,mg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(co(h,mg,!0),"@"),a.push(so(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(co(p,p.charAt(0)=="/"?Y1:Q1,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",co(p,J1)),a.join("")},sr.prototype.resolve=function(a){const h=pn(this);let p=!!a.j;p?ao(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)lo(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=h.h.lastIndexOf("/");x!=-1&&(g=h.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const D=[];for(let B=0;B<x.length;){const te=x[B++];te=="."?g&&B==x.length&&D.push(""):te==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&B==x.length&&D.push("")):(D.push(te),g=!0)}g=D.join("/")}else g=x}return p?h.h=g:p=a.i.toString()!=="",p?uh(h,wg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function pn(a){return new sr(a)}function ao(a,h,p){a.j=p?uo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function lo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function uh(a,h,p){h instanceof ho?(a.i=h,Z1(a.i,a.l)):(p||(h=co(h,X1)),a.i=new ho(h,a.l))}function ve(a,h,p){a.i.set(h,p)}function el(a){return ve(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function uo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function co(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,K1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function K1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mg=/[#\/\?@]/g,Q1=/[#\?:]/g,Y1=/[#\?]/g,X1=/[#\?@]/g,J1=/#/g;function ho(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ai(a){a.g||(a.g=new Map,a.h=0,a.i&&G1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ho.prototype,t.add=function(a,h){ai(this),this.i=null,a=$i(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function gg(a,h){ai(a),h=$i(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function yg(a,h){return ai(a),h=$i(a,h),a.g.has(h)}t.forEach=function(a,h){ai(this),this.g.forEach(function(p,g){p.forEach(function(x){a.call(h,x,g,this)},this)},this)};function _g(a,h){ai(a);let p=[];if(typeof h=="string")yg(a,h)&&(p=p.concat(a.g.get($i(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return ai(this),this.i=null,a=$i(this,a),yg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=_g(this,a),a.length>0?String(a[0]):h):h};function vg(a,h,p){gg(a,h),p.length>0&&(a.i=null,a.g.set($i(a,h),T(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const x=so(p);p=_g(this,p);for(let D=0;D<p.length;D++){let B=x;p[D]!==""&&(B+="="+so(p[D])),a.push(B)}}return this.i=a.join("&")};function wg(a){const h=new ho;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function $i(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Z1(a,h){h&&!a.j&&(ai(a),a.i=null,a.g.forEach(function(p,g){const x=g.toLowerCase();g!=x&&(gg(this,g),vg(this,x,p))},a)),a.j=h}function eS(a,h){const p=new io;if(o.Image){const g=new Image;g.onload=d(or,p,"TestLoadImage: loaded",!0,h,g),g.onerror=d(or,p,"TestLoadImage: error",!1,h,g),g.onabort=d(or,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(or,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function tS(a,h){const p=new io,g=new AbortController,x=setTimeout(()=>{g.abort(),or(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(x),D.ok?or(p,"TestPingServer: ok",!0,h):or(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),or(p,"TestPingServer: error",!1,h)})}function or(a,h,p,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(p)}catch{}}function nS(){this.g=new U1}function ch(a){this.i=a.Sb||null,this.h=a.ab||!1}f(ch,Ym),ch.prototype.g=function(){return new tl(this.i,this.h)};function tl(a,h){lt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(tl,lt),t=tl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,po(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?fo(this):po(this),this.readyState==3&&Eg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,fo(this))},t.Na=function(a){this.g&&(this.response=a,fo(this))},t.ga=function(){this.g&&fo(this)};function fo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,po(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function po(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tg(a){let h="";return Y(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function hh(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Tg(p),typeof a=="string"?p!=null&&so(p):ve(a,h,p))}function Ce(a){lt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ce,lt);var rS=/^https?$/i,iS=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rg.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Ig(this,D);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)p.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(iS,h,void 0)>=0)||g||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of p)this.g.setRequestHeader(D,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Ig(this,D)}};function Ig(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Sg(a),nl(a)}function Sg(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,yt(this,"complete"),yt(this,"abort"),nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nl(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ag(this):this.Xa())},t.Xa=function(){Ag(this)};function Ag(a){if(a.h&&typeof s<"u"){if(a.v&&ar(a)==4)setTimeout(a.Ca.bind(a),0);else if(yt(a,"readystatechange"),ar(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=D===0){let B=String(a.D).match(pg)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!rS.test(B?B.toLowerCase():"")}p=g}if(p)yt(a,"complete"),yt(a,"success");else{a.o=6;try{var x=ar(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",Sg(a)}}finally{nl(a)}}}}function nl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||yt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ar(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ar(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),M1(h)}};function Rg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sS(a){const h={};a=(a.g&&ar(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var p=$1(a[g]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[x]||[];h[x]=D,D.push(p)}Z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Pg(a){this.za=0,this.i=[],this.j=new io,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mo("baseRetryDelayMs",5e3,a),this.Za=mo("retryDelaySeedMs",1e4,a),this.Ta=mo("forwardChannelMaxRetries",2,a),this.va=mo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ug(a&&a.concurrentRequestLimit),this.Ba=new nS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Pg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){_t(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Vg(this,null,this.W),il(this)};function dh(a){if(kg(a),a.I==3){var h=a.V++,p=pn(a.J);if(ve(p,"SID",a.M),ve(p,"RID",h),ve(p,"TYPE","terminate"),go(a,p),h=new ir(a,a.j,h),h.M=2,h.A=el(pn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Mg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Za(h)}Lg(a)}function rl(a){a.g&&(ph(a),a.g.cancel(),a.g=null)}function kg(a){rl(a),a.v&&(o.clearTimeout(a.v),a.v=null),sl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function il(a){if(!cg(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),j||(U(),j=!0),I.add(h,a),a.D=0}}function oS(a,h){return hg(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ro(c(a.Ea,a,h),Og(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new ir(this,this.j,a);let D=this.o;if(this.U&&(D?(D=de(D),Wt(D,this.U)):D=this.U),this.u!==null||this.R||(x.J=D,D=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ng(this,x,h),p=pn(this.J),ve(p,"RID",a),ve(p,"CVER",22),this.G&&ve(p,"X-HTTP-Session-Id",this.G),go(this,p),D&&(this.R?h="headers="+so(Tg(D))+"&"+h:this.u&&hh(p,this.u,D)),lh(this.h,x),this.Ra&&ve(p,"TYPE","init"),this.S?(ve(p,"$req",h),ve(p,"SID","null"),x.U=!0,ih(x,p,null)):ih(x,p,h),this.I=2}}else this.I==3&&(a?Cg(this,a):this.i.length==0||cg(this.h)||Cg(this))};function Cg(a,h){var p;h?p=h.l:p=a.V++;const g=pn(a.J);ve(g,"SID",a.M),ve(g,"RID",p),ve(g,"AID",a.K),go(a,g),a.u&&a.o&&hh(g,a.u,a.o),p=new ir(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ng(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),lh(a.h,p),ih(p,g,h)}function go(a,h){a.H&&Y(a.H,function(p,g){ve(h,g,p)}),a.l&&Y({},function(p,g){ve(h,g,p)})}function Ng(a,h,p){p=Math.min(a.i.length,p);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var x=a.i;let te=-1;for(;;){const He=["count="+p];te==-1?p>0?(te=x[0].g,He.push("ofs="+te)):te=0:He.push("ofs="+te);let pe=!0;for(let Xe=0;Xe<p;Xe++){var D=x[Xe].g;const mn=x[Xe].map;if(D-=te,D<0)te=Math.max(0,x[Xe].g-100),pe=!1;else try{D="req"+D+"_"||"";try{var B=mn instanceof Map?mn:Object.entries(mn);for(const[ui,lr]of B){let ur=lr;l(lr)&&(ur=Zc(lr)),He.push(D+ui+"="+encodeURIComponent(ur))}}catch(ui){throw He.push(D+"type="+encodeURIComponent("_badmap")),ui}}catch{g&&g(mn)}}if(pe){B=He.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function xg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),j||(U(),j=!0),I.add(h,a),a.A=0}}function fh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ro(c(a.Da,a),Og(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,bg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ro(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),rl(this),bg(this))};function ph(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function bg(a){a.g=new ir(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=pn(a.na);ve(h,"RID","rpc"),ve(h,"SID",a.M),ve(h,"AID",a.K),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ve(h,"TO",a.ia),ve(h,"TYPE","xmlhttp"),go(a,h),a.u&&a.o&&hh(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=el(pn(h)),p.u=null,p.R=!0,og(p,a)}t.Va=function(){this.C!=null&&(this.C=null,rl(this),fh(this),_t(19))};function sl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Dg(a,h){var p=null;if(a.g==h){sl(a),ph(a),a.g=null;var g=2}else if(ah(a.h,h))p=h.G,dg(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;g=Xa(),yt(g,new tg(g,p)),il(a)}else xg(a);else if(x=h.m,x==3||x==0&&h.X>0||!(g==1&&oS(a,h)||g==2&&fh(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),x){case 1:li(a,5);break;case 4:li(a,10);break;case 3:li(a,6);break;default:li(a,2)}}}function Og(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function li(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),g=a.Ua;const x=!g;g=new sr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ao(g,"https"),el(g),x?eS(g.toString(),p):tS(g.toString(),p)}else _t(2);a.I=0,a.l&&a.l.pa(h),Lg(a),kg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Lg(a){if(a.I=0,a.ja=[],a.l){const h=fg(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function Vg(a,h,p){var g=p instanceof sr?pn(p):new sr(p);if(g.g!="")h&&(g.g=h+"."+g.g),lo(g,g.u);else{var x=o.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const D=new sr(null);g&&ao(D,g),h&&(D.g=h),x&&lo(D,x),p&&(D.h=p),g=D}return p=a.G,h=a.wa,p&&h&&ve(g,p,h),ve(g,"VER",a.ka),go(a,g),g}function Mg(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new ch({ab:p})):new Ce(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ug(){}t=Ug.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ol(){}ol.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){lt.call(this),this.g=new Pg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!_(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Wi(this)}f(Lt,lt),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){dh(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Zc(a),a=p);h.i.push(new q1(h.Ya++,a)),h.I==3&&il(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,dh(this.g),delete this.g,Lt.Z.N.call(this)};function Fg(a){eh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Fg,eh);function jg(){th.call(this),this.status=1}f(jg,th);function Wi(a){this.g=a}f(Wi,Ug),Wi.prototype.ra=function(){yt(this.g,"a")},Wi.prototype.qa=function(a){yt(this.g,new Fg(a))},Wi.prototype.pa=function(a){yt(this.g,new jg)},Wi.prototype.oa=function(){yt(this.g,"b")},ol.prototype.createWebChannel=ol.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,FT=function(){return new ol},UT=function(){return Xa()},MT=si,mf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ja.NO_ERROR=0,Ja.TIMEOUT=8,Ja.HTTP_ERROR=6,Jl=Ja,ng.COMPLETE="complete",VT=ng,Xm.EventType=to,to.OPEN="a",to.CLOSE="b",to.ERROR="c",to.MESSAGE="d",lt.prototype.listen=lt.prototype.J,Lo=Xm,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,LT=Ce}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Hs="12.11.0";function aD(t){Hs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ci=new Vp("@firebase/firestore");function qi(){return Ci.logLevel}function H(t,...e){if(Ci.logLevel<=ie.DEBUG){const n=e.map(Kp);Ci.debug(`Firestore (${Hs}): ${t}`,...n)}}function Xn(t,...e){if(Ci.logLevel<=ie.ERROR){const n=e.map(Kp);Ci.error(`Firestore (${Hs}): ${t}`,...n)}}function Ni(t,...e){if(Ci.logLevel<=ie.WARN){const n=e.map(Kp);Ci.warn(`Firestore (${Hs}): ${t}`,...n)}}function Kp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jT(t,r,n)}function jT(t,e,n){let r=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Xn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||jT(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class uD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cD{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new BT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class hD{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new z_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new z_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=pD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function gf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Zh(i)===Zh(s)?se(i,s):Zh(i)?1:-1}return se(t.length,e.length)}const mD=55296,gD=57343;function Zh(t){const e=t.charCodeAt(0);return e>=mD&&e<=gD}function Cs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=_n.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return se(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),i=_n.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?_n.extractNumericId(e).compare(_n.extractNumericId(n)):gf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ur.fromString(e.substring(4,e.length-2))}}class ye extends _n{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const yD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends _n{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return yD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$_}static keyField(){return new it([$_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ye.fromString(e))}static fromName(e){return new K(ye.fromString(e).popFirst(5))}static empty(){return new K(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _D(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W_(t){if(!K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H_(t){if(K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $T(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kc(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function vD(t,e){if(e<=0)throw new W(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ha(t,e){if(!$T(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=-62135596800,G_=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*G_);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<q_)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/G_}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ha(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-q_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:$e("string",Ee._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new Ee(0,0))}static max(){return new X(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ra=-1;function wD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new Wr(i,K.empty(),e)}function ED(t){return new Wr(t.readTime,t.key,Ra)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(X.min(),K.empty(),Ra)}static max(){return new Wr(X.max(),K.empty(),Ra)}}function TD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==ID)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function AD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Gs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Cc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Cc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=-1;function Nc(t){return t==null}function Uu(t){return t===0&&1/t==-1/0}function RD(t){return typeof t=="number"&&Number.isInteger(t)&&!Uu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="";function PD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=K_(e)),e=kD(t.get(n),e);return K_(e)}function kD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case WT:n+="";break;default:n+=s}}return n}function K_(t){return t+WT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kl(this.root,e,this.comparator,!0)}}class kl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Y_(this.data.getIterator())}getIteratorFrom(e){return new Y_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Y_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Ke(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qT("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const CD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=CD.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="server_timestamp",KT="__type__",QT="__previous_value__",YT="__local_write_time__";function Xp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[KT])==null?void 0:r.stringValue)===GT}function xc(t){const e=t.mapValue.fields[QT];return Xp(e)?xc(e):e}function Pa(t){const e=Hr(t.mapValue.fields[YT].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,i,s,o,l,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const Fu="(default)";class ka{constructor(e,n){this.projectId=e,this.database=n||Fu}static empty(){return new ka("","")}get isDefaultDatabase(){return this.database===Fu}isEqual(e){return e instanceof ka&&e.projectId===this.projectId&&e.database===this.database}}function xD(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ka(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="__type__",JT="__max__",Cl={mapValue:{fields:{__type__:{stringValue:JT}}}},ZT="__vector__",ju="value";function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xp(t)?4:DD(t)?9007199254740991:bD(t)?10:11:Q(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pa(t).isEqual(Pa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),l=Hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return qr(i.bytesValue).isEqual(qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),l=Le(s.doubleValue);return o===l?Uu(o)===Uu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Q_(o)!==Q_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Nn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Ca(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return X_(t.timestampValue,e.timestampValue);case 4:return X_(Pa(t),Pa(e));case 5:return gf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=qr(s),u=qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=se(l[c],u[c]);if(d!==0)return d}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Le(s.latitude),Le(o.latitude));return l!==0?l:se(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return J_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,T,k,P;const l=s.fields||{},u=o.fields||{},c=(m=l[ju])==null?void 0:m.arrayValue,d=(T=u[ju])==null?void 0:T.arrayValue,f=se(((k=c==null?void 0:c.values)==null?void 0:k.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return f!==0?f:J_(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cl.mapValue&&o===Cl.mapValue)return 0;if(s===Cl.mapValue)return 1;if(o===Cl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=gf(u[f],d[f]);if(m!==0)return m;const T=Ns(l[u[f]],c[d[f]]);if(T!==0)return T}return se(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function X_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Hr(t),r=Hr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function J_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ns(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function xs(t){return yf(t)}function yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yf(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Zl(t){switch(Gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xc(t);return e?16+Zl(e):16;case 5:return 2*t.stringValue.length;case 6:return qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Zl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ni(r.fields,(s,o)=>{i+=s.length+Zl(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function Z_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _f(t){return!!t&&"integerValue"in t}function Jp(t){return!!t&&"arrayValue"in t}function ev(t){return!!t&&"nullValue"in t}function tv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function eu(t){return!!t&&"mapValue"in t}function bD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[XT])==null?void 0:r.stringValue)===ZT}function Jo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jo(t.arrayValue.values[n]);return e}return{...t}}function DD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===JT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jo(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Jo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(Jo(this.value))}}function eI(t){const e=[];return ni(t.fields,(n,r)=>{const i=new it([n]);if(eu(r)){const s=eI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,X.min(),X.min(),X.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,X.min(),X.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,X.min(),X.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,n){this.position=e,this.inclusive=n}}function nv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function rv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Na{constructor(e,n="asc"){this.field=e,this.dir=n}}function OD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tI{}class ze extends tI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VD(e,n,r):n==="array-contains"?new FD(e,r):n==="in"?new jD(e,r):n==="not-in"?new BD(e,r):n==="array-contains-any"?new zD(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MD(e,r):new UD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ns(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends tI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new fn(e,n)}matches(e){return nI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nI(t){return t.op==="and"}function rI(t){return LD(t)&&nI(t)}function LD(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function vf(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(rI(t))return t.filters.map(e=>vf(e)).join(",");{const e=t.filters.map(n=>vf(n)).join(",");return`${t.op}(${e})`}}function iI(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&iI(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function sI(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(sI).join(" ,")+"}"}(t):"Filter"}class VD extends ze{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class MD extends ze{constructor(e,n){super(e,"in",n),this.keys=oI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UD extends ze{constructor(e,n){super(e,"not-in",n),this.keys=oI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class FD extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jp(n)&&Ca(n.arrayValue,this.value)}}class jD extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ca(this.value.arrayValue,n)}}class BD extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ca(this.value.arrayValue,n)}}class zD extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ca(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function iv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $D(t,e,n,r,i,s,o)}function Zp(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.Te=n}return e.Te}function em(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rv(t.startAt,e.startAt)&&rv(t.endAt,e.endAt)}function wf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function WD(t,e,n,r,i,s,o,l){return new Ks(t,e,n,r,i,s,o,l)}function bc(t){return new Ks(t)}function sv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HD(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function aI(t){return t.collectionGroup!==null}function Zo(t){const e=J(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Na(s,r))}),n.has(it.keyField().canonicalString())||e.Ee.push(new Na(it.keyField(),r))}return e.Ee}function Rn(t){const e=J(t);return e.Ie||(e.Ie=qD(e,Zo(t))),e.Ie}function qD(t,e){if(t.limitType==="F")return iv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Na(i.field,s)});const n=t.endAt?new Bu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bu(t.startAt.position,t.startAt.inclusive):null;return iv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ef(t,e){const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function GD(t,e){const n=t.explicitOrderBy.concat([e]);return new Ks(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function zu(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return em(Rn(t),Rn(e))&&t.limitType===e.limitType}function lI(t){return`${Zp(Rn(t))}|lt:${t.limitType}`}function Gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>sI(i)).join(", ")}]`),Nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xs(i)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Zo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=nv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Zo(r),i)||r.endAt&&!function(o,l,u){const c=nv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Zo(r),i))}(t,e)}function KD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uI(t){return(e,n)=>{let r=!1;for(const i of Zo(t)){const s=QD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QD(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ns(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return HT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=new ke(K.comparator);function Jn(){return YD}const cI=new ke(K.comparator);function Vo(...t){let e=cI;for(const n of t)e=e.insert(n.key,n);return e}function hI(t){let e=cI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gi(){return ea()}function dI(){return ea()}function ea(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const XD=new ke(K.comparator),JD=new Ke(K.comparator);function oe(...t){let e=JD;for(const n of t)e=e.add(n);return e}const ZD=new Ke(se);function eO(){return ZD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function fI(t){return{integerValue:""+t}}function pI(t,e){return RD(e)?fI(e):tm(t,e)}/**
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
 */class Lc{constructor(){this._=void 0}}function tO(t,e,n){return t instanceof xa?function(i,s){const o={fields:{[KT]:{stringValue:GT},[YT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xp(s)&&(s=xc(s)),s&&(o.fields[QT]=s),{mapValue:o}}(n,e):t instanceof bs?gI(t,e):t instanceof ba?yI(t,e):function(i,s){const o=mI(i,s),l=ov(o)+ov(i.Ae);return _f(o)&&_f(i.Ae)?fI(l):tm(i.serializer,l)}(t,e)}function nO(t,e,n){return t instanceof bs?gI(t,e):t instanceof ba?yI(t,e):n}function mI(t,e){return t instanceof Da?function(r){return _f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xa extends Lc{}class bs extends Lc{constructor(e){super(),this.elements=e}}function gI(t,e){const n=_I(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ba extends Lc{constructor(e){super(),this.elements=e}}function yI(t,e){let n=_I(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class Da extends Lc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ov(t){return Le(t.integerValue||t.doubleValue)}function _I(t){return Jp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.field=e,this.transform=n}}function rO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof bs&&i instanceof bs||r instanceof ba&&i instanceof ba?Cs(r.elements,i.elements,Nn):r instanceof Da&&i instanceof Da?Nn(r.Ae,i.Ae):r instanceof xa&&i instanceof xa}(t.transform,e.transform)}class iO{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vc{}function vI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rm(t.key,Xt.none()):new qa(t.key,t.data,Xt.none());{const n=t.data,r=kt.empty();let i=new Ke(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ri(t.key,r,new Ut(i.toArray()),Xt.none())}}function sO(t,e,n){t instanceof qa?function(i,s,o){const l=i.value.clone(),u=lv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(i,s,o){if(!tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=lv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(wI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,r){return t instanceof qa?function(s,o,l,u){if(!tu(s.precondition,o))return l;const c=s.value.clone(),d=uv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ri?function(s,o,l,u){if(!tu(s.precondition,o))return l;const c=uv(s.fieldTransforms,u,o),d=o.data;return d.setAll(wI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function oO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mI(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function av(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Cs(r,i,(s,o)=>rO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qa extends Vc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends Vc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lv(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nO(o,l,n[i]))}return r}function uv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tO(s,o,e))}return r}class rm extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aO extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=vI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,r)=>av(n,r))&&Cs(this.baseMutations,e.baseMutations,(n,r)=>av(n,r))}}class im{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return XD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new im(e,n,r,i)}}/**
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
 */class uO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ae;function hO(t){switch(t){case V.OK:return Q(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function EI(t){if(t===void 0)return Xn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ue.OK:return V.OK;case Ue.CANCELLED:return V.CANCELLED;case Ue.UNKNOWN:return V.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return V.INTERNAL;case Ue.UNAVAILABLE:return V.UNAVAILABLE;case Ue.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ue.NOT_FOUND:return V.NOT_FOUND;case Ue.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ue.ABORTED:return V.ABORTED;case Ue.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ue.DATA_LOSS:return V.DATA_LOSS;default:return Q(39323,{code:t})}}(ae=Ue||(Ue={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dO(){return new TextEncoder}/**
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
 */const fO=new Ur([4294967295,4294967295],0);function cv(t){const e=dO().encode(t),n=new OT;return n.update(e),new Uint8Array(n.digest())}function hv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([i,s],0)]}class sm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mo(`Invalid padding: ${n}`);if(r<0)throw new Mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ur.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ur.fromNumber(r)));return i.compare(fO)===1&&(i=new Ur([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=cv(e),[r,i]=hv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=cv(e),[r,i]=hv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mc(X.min(),i,new ke(se),Jn(),oe())}}class Ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ga(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class TI{constructor(e,n){this.targetId=e,this.Ce=n}}class II{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class dv{constructor(){this.ve=0,this.Fe=fv(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),n=oe(),r=oe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Ga(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=fv()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class pO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.Je=Nl(),this.He=Nl(),this.Ze=new ke(se)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(wf(s))if(r===0){const o=new K(s.path);this.et(n,o,pt.newNoDocument(o,X.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=qr(r).toUint8Array()}catch(u){if(u instanceof qT)return Ni("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sm(o,i,s)}catch(u){return Ni(u instanceof Mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&wf(l.target)){const u=new K(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,pt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=oe();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Mc(e,n,this.Ze,this.je,r);return this.je=Jn(),this.Je=Nl(),this.He=Nl(),this.Ze=new ke(se),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new dv,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ke(se),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ke(se),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new dv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Nl(){return new ke(K.comparator)}function fv(){return new ke(K.comparator)}const mO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yO=(()=>({and:"AND",or:"OR"}))();class _O{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tf(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function $u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vO(t,e){return $u(t,e.toTimestamp())}function Pn(t){return ce(!!t,49232),X.fromTimestamp(function(n){const r=Hr(n);return new Ee(r.seconds,r.nanos)}(t))}function om(t,e){return If(t,e).canonicalString()}function If(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function AI(t){const e=ye.fromString(t);return ce(NI(e),10190,{key:e.toString()}),e}function Sf(t,e){return om(t.databaseId,e.path)}function ed(t,e){const n=AI(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(PI(n))}function RI(t,e){return om(t.databaseId,e)}function wO(t){const e=AI(t);return e.length===4?ye.emptyPath():PI(e)}function Af(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function PI(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function pv(t,e,n){return{name:Sf(t,e),fields:n.value.mapValue.fields}}function EO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ce(d===void 0||typeof d=="string",58123),at.fromBase64String(d||"")):(ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:EI(c.code);return new W(d,c.message||"")}(o);n=new II(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ed(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):X.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new nu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ed(t,r.document),s=r.readTime?Pn(r.readTime):X.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new nu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ed(t,r.document),s=r.removedTargetIds||[];n=new nu([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cO(i,s),l=r.targetId;n=new TI(l,o)}}return n}function TO(t,e){let n;if(e instanceof qa)n={update:pv(t,e.key,e.value)};else if(e instanceof rm)n={delete:Sf(t,e.key)};else if(e instanceof ri)n={update:pv(t,e.key,e.data),updateMask:xO(e.fieldMask)};else{if(!(e instanceof aO))return Q(16599,{dt:e.type});n={verify:Sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ba)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Da)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function IO(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(X.min())&&(o=Pn(s)),new iO(o,i.transformResults||[])}(n,e))):[]}function SO(t,e){return{documents:[RI(t,e.path)]}}function AO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=RI(t,i);const s=function(c){if(c.length!==0)return CI(fn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ki(m.field),direction:kO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Tf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function RO(t){let e=wO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=kI(f);return m instanceof fn&&rI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(k){return new Na(Qi(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Nc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,T=f.values||[];return new Bu(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,T=f.values||[];return new Bu(T,m)}(n.endAt)),WD(e,i,o,s,l,"F",u,c)}function PO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qi(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qi(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qi(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qi(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>kI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function kO(t){return mO[t]}function CO(t){return gO[t]}function NO(t){return yO[t]}function Ki(t){return{fieldPath:t.canonicalString()}}function Qi(t){return it.fromServerFormat(t.fieldPath)}function CI(t){return t instanceof ze?function(n){if(n.op==="=="){if(tv(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NAN"}};if(ev(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tv(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NAN"}};if(ev(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(n.field),op:CO(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>CI(i));return r.length===1?r[0]:{compositeFilter:{op:NO(n.op),filters:r}}}(t):Q(54877,{filter:t})}function xO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function xI(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r,i,s=X.min(),o=X.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.yt=e}}function DO(t){const e=RO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.bn=new LO}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Wr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class LO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ye.comparator)).toArray()}}/**
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
 */const mv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bI=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(bI,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ds(0)}static ar(){return new Ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="LruGarbageCollector",VO=1048576;function yv([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class MO{constructor(e){this.Pr=e,this.buffer=new Ke(yv),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();yv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(gv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gs(n)?H(gv,"Ignoring IndexedDB error during garbage collection: ",n):await qs(n)}await this.Ar(3e5)})}}class FO{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Cc.ce);const r=new MO(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(mv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),qi()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function jO(t,e){return new FO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ta(r.mutation,i,Ut.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Jn();const o=ea(),l=function(){return ea()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ri)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ta(d.mutation,c,d.mutation.getFieldMask(),Ee.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new zO(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ea();let i=new ke((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ut.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=dI();d.forEach(m=>{if(!s.has(m)){const T=vI(n.get(m),r.get(m));T!==null&&f.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return HD(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(gi());let l=Ra,u=s;return o.next(c=>M.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:l,changes:hI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Vo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Vo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(f,m){return new Ks(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,pt.newInvalidDocument(d)))});let l=Vo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ta(d.mutation,c,Ut.empty(),Ee.now()),Oc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:DO(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class HO{constructor(){this.overlays=new ke(K.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=gi(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=gi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=gi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uO(n,r));let s=this.Lr.get(n);s===void 0&&(s=oe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class qO{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.kr=new Ke(Je.qr),this.Kr=new Ke(Je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Je(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new ye([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new K(new ye([])),r=new Je(n,e),i=new Je(n,e+1);let s=oe();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return K.comparator(e.key,n.key)||se(e.Jr,n.Jr)}static Ur(e,n){return se(e.Jr,n.Jr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ke(Je.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lO(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Yp:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(se);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Je(new K(s),0);let l=new Ke(se);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Je(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e){this.ti=e,this.docs=function(){return new ke(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TD(ED(d),r)<=0||(i.has(d.key)||Oc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QO(this)}getSize(e){return M.resolve(this.size)}}class QO extends BO{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.persistence=e,this.ri=new ji(n=>Zp(n),em),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new am,this.targetCount=0,this.oi=Ds._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n){this._i={},this.overlays={},this.ai=new Cc(0),this.ui=!1,this.ui=!0,this.ci=new qO,this.referenceDelegate=e(this),this.li=new YO(this),this.indexManager=new OO,this.remoteDocumentCache=function(i){return new KO(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new bO(n),this.Pi=new WO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new GO(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new XO(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class XO extends SD{constructor(e){super(),this.currentSequenceNumber=e}}class lm{constructor(e){this.persistence=e,this.Ri=new am,this.Ai=null}static Vi(e){return new lm(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Wu{constructor(e,n){this.persistence=e,this.fi=new ji(r=>PD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=jO(this,n)}static Vi(e,n){return new Wu(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new um(e,n.fromCache,r,i)}}/**
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
 */class JO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Yk()?8:AD(gt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JO;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(qi()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(qi()<=ie.DEBUG&&H("QueryEngine","Query:",Gi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(qi()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):M.resolve())}gs(e,n){if(sv(n))return M.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zu(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,zu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return sv(n)||i.isEqual(X.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(qi()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gi(n)),this.Ds(e,o,n,wD(i,Ra)).next(l=>l))})}Ss(e,n){let r=new Ke(uI(e));return n.forEach((i,s)=>{Oc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return qi()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Gi(n)),this.fs.getDocumentsMatchingQuery(e,n,Wr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="LocalStore",e2=3e8;class t2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new ke(se),this.Fs=new ji(s=>Zp(s),em),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $O(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function n2(t,e,n,r){return new t2(t,e,n,r)}async function OI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function r2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let T=M.resolve();return m.forEach(k=>{T=T.next(()=>d.getEntry(u,k)).next(P=>{const C=c.docVersions.get(k);ce(C!==null,48541),P.version.compareTo(C)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function LI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function i2(t,e){const n=J(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(f,T),function(P,C,w){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=e2?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,T,d)&&l.push(n.li.updateTargetData(s,T))});let u=Jn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(s2(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(X.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function s2(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(cm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function o2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Yp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function a2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Rf(t,e,n){const r=J(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gs(o))throw o;H(cm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function _v(t,e,n){const r=J(t);let i=X.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=J(u),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,Rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:oe())).next(l=>(l2(r,KD(e),l),{documents:l,ks:s})))}function l2(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class vv{constructor(){this.activeTargetIds=eO()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u2{constructor(){this.vo=new vv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new vv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="ConnectivityMonitor";class Ev{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(wv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(wv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xl=null;function Pf(){return xl===null?xl=function(){return 268435456+Math.round(2147483648*Math.random())}():xl++,"0x"+xl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="RestConnection",h2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class d2{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Fu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Pf(),l=this.Qo(e,n.toUriEncodedString());H(td,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=Mi(c);return this.zo(e,l,u,r,d).then(f=>(H(td,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ni(td,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=h2[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection",Ro=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class _s extends d2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!_s.c_){const e=UT();Ro(e,MT.STAT_EVENT,n=>{n.stat===mf.PROXY?H(ht,"STAT_EVENT: detected buffering proxy"):n.stat===mf.NOPROXY&&H(ht,"STAT_EVENT: detected no buffering proxy")}),_s.c_=!0}}zo(e,n,r,i,s){const o=Pf();return new Promise((l,u)=>{const c=new LT;c.setWithCredentials(!0),c.listenOnce(VT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Jl.NO_ERROR:const f=c.getResponseJson();H(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Jl.TIMEOUT:H(ht,`RPC '${e}' ${o} timed out`),u(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const m=c.getStatus();if(H(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const k=T==null?void 0:T.error;if(k&&k.status&&k.message){const P=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(k.status);u(new W(P,k.message))}else u(new W(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(V.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(ht,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(ht,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Pf(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");H(ht,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let f=!1,m=!1;const T=new f2({Jo:k=>{m?H(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(f||(H(ht,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),H(ht,`RPC '${e}' stream ${i} sending:`,k),d.send(k))},Ho:()=>d.close()});return Ro(d,Lo.EventType.OPEN,()=>{m||(H(ht,`RPC '${e}' stream ${i} transport opened.`),T.i_())}),Ro(d,Lo.EventType.CLOSE,()=>{m||(m=!0,H(ht,`RPC '${e}' stream ${i} transport closed`),T.o_(),this.I_(d))}),Ro(d,Lo.EventType.ERROR,k=>{m||(m=!0,Ni(ht,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),T.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),Ro(d,Lo.EventType.MESSAGE,k=>{var P;if(!m){const C=k.data[0];ce(!!C,16349);const w=C,v=(w==null?void 0:w.error)||((P=w[0])==null?void 0:P.error);if(v){H(ht,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let O=function(I){const y=Ue[I];if(y!==void 0)return EI(y)}(S),U=v.message;S==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&Ni(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,U="Unknown error status: "+S+" with message "+v.message),m=!0,T.o_(new W(O,U)),d.close()}else H(ht,`RPC '${e}' stream ${i} received:`,C),T.__(C)}}),_s.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return FT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){return new _s(t)}function nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return new _O(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_s.c_=!1;class VI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="PersistentStream";class MI{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new VI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Tv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(Tv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class m2 extends MI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=EO(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Pn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Af(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=wf(u)?{documents:SO(s,u)}:{query:AO(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=SI(s,o.resumeToken);const c=Tf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=$u(s,o.snapshotVersion.toTimestamp());const c=Tf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=PO(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Af(this.serializer),n.removeTarget=e,this.q_(n)}}class g2 extends MI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=IO(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Af(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TO(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{}class _2 extends y2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,If(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,If(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function v2(t,e,n,r){return new _2(t,e,n,r)}class w2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="RemoteStore";class E2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(H(xi,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ia.add(4),await Ka(c),c.Va.set("Unknown"),c.Ia.delete(4),await Fc(c)}(this))})}),this.Va=new w2(r,i)}}async function Fc(t){if(Bi(t))for(const e of t.Ra)await e(!0)}async function Ka(t){for(const e of t.Ra)await e(!1)}function UI(t,e){const n=J(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),pm(n)?fm(n):Qs(n).O_()&&dm(n,e))}function hm(t,e){const n=J(t),r=Qs(n);n.Ea.delete(e),r.O_()&&FI(n,e),n.Ea.size===0&&(r.O_()?r.L_():Bi(n)&&n.Va.set("Unknown"))}function dm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).Z_(e)}function FI(t,e){t.da.$e(e),Qs(t).X_(e)}function fm(t){t.da=new pO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.Va.ua()}function pm(t){return Bi(t)&&!Qs(t).x_()&&t.Ea.size>0}function Bi(t){return J(t).Ia.size===0}function jI(t){t.da=void 0}async function T2(t){t.Va.set("Online")}async function I2(t){t.Ea.forEach((e,n)=>{dm(t,e)})}async function S2(t,e){jI(t),pm(t)?(t.Va.ha(e),fm(t)):t.Va.set("Unknown")}async function A2(t,e,n){if(t.Va.set("Online"),e instanceof II&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){H(xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hu(t,r)}else if(e instanceof nu?t.da.Xe(e):e instanceof TI?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await LI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),FI(s,u);const f=new Ar(d.target,u,c,d.sequenceNumber);dm(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(xi,"Failed to raise snapshot:",r),await Hu(t,r)}}async function Hu(t,e,n){if(!Gs(e))throw e;t.Ia.add(1),await Ka(t),t.Va.set("Offline"),n||(n=()=>LI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(xi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Fc(t)})}function BI(t,e){return e().catch(n=>Hu(t,n,e))}async function jc(t){const e=J(t),n=Kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yp;for(;R2(e);)try{const i=await o2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,P2(e,i)}catch(i){await Hu(e,i)}zI(e)&&$I(e)}function R2(t){return Bi(t)&&t.Ta.length<10}function P2(t,e){t.Ta.push(e);const n=Kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function zI(t){return Bi(t)&&!Kr(t).x_()&&t.Ta.length>0}function $I(t){Kr(t).start()}async function k2(t){Kr(t).ra()}async function C2(t){const e=Kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function N2(t,e,n){const r=t.Ta.shift(),i=im.from(r,e,n);await BI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jc(t)}async function x2(t,e){e&&Kr(t).Y_&&await async function(r,i){if(function(o){return hO(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Kr(r).B_(),await BI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jc(r)}}(t,e),zI(t)&&$I(t)}async function Iv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H(xi,"RemoteStore received new credentials");const r=Bi(n);n.Ia.add(3),await Ka(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Fc(n)}async function b2(t,e){const n=J(t);e?(n.Ia.delete(2),await Fc(n)):e||(n.Ia.add(2),await Ka(n),n.Va.set("Unknown"))}function Qs(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new m2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:T2.bind(null,t),Yo:I2.bind(null,t),t_:S2.bind(null,t),H_:A2.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),pm(t)?fm(t):t.Va.set("Unknown")):(await t.ma.stop(),jI(t))})),t.ma}function Kr(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new g2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:k2.bind(null,t),t_:x2.bind(null,t),ta:C2.bind(null,t),na:N2.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await jc(t)):(await t.fa.stop(),t.Ta.length>0&&(H(xi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new mm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gm(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),Gs(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{static emptySet(e){return new vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Vo(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.ga=new ke(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Os{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Os(e,n,vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class O2{constructor(){this.queries=Av(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Av(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function Av(){return new ji(t=>lI(t),Dc)}async function ym(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new D2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=gm(o,`Initialization of query '${Gi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&vm(n)}async function _m(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function L2(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&vm(n)}function V2(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function vm(t){t.Ca.forEach(e=>{e.next()})}var kf,Rv;(Rv=kf||(kf={})).Ma="default",Rv.Cache="cache";class wm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.key=e}}class HI{constructor(e){this.key=e}}class M2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=oe(),this.mutatedKeys=oe(),this.eu=uI(e),this.tu=new vs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Sv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),T=Oc(this.query,f)?f:null,k=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;m&&T?m.data.isEqual(T.data)?k!==P&&(r.track({type:3,doc:T}),C=!0):this.su(m,T)||(r.track({type:2,doc:T}),C=!0,(u&&this.eu(T,u)>0||c&&this.eu(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),C=!0):m&&!T&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(T?(o=o.add(T),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(T,k){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:C})}};return P(T)-P(k)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Os(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new HI(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new WI(r))}),n}cu(e){this.Za=e.ks,this.Ya=oe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Em="SyncEngine";class U2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class F2{constructor(e){this.key=e,this.hu=!1}}class j2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ji(l=>lI(l),Dc),this.Eu=new Map,this.Iu=new Set,this.Ru=new ke(K.comparator),this.Au=new Map,this.Vu=new am,this.du={},this.mu=new Map,this.fu=Ds.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function B2(t,e,n=!0){const r=XI(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await qI(r,e,n,!0),i}async function z2(t,e){const n=XI(t);await qI(n,e,!0,!1)}async function qI(t,e,n,r){const i=await a2(t.localStore,Rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await $2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&UI(t.remoteStore,i),l}async function $2(t,e,n,r,i){t.pu=(f,m,T)=>async function(P,C,w,v){let S=C.view.ru(w);S.bs&&(S=await _v(P.localStore,C.query,!1).then(({documents:I})=>C.view.ru(I,S)));const O=v&&v.targetChanges.get(C.targetId),U=v&&v.targetMismatches.get(C.targetId)!=null,j=C.view.applyChanges(S,P.isPrimaryClient,O,U);return kv(P,C.targetId,j.au),j.snapshot}(t,f,m,T);const s=await _v(t.localStore,e,!0),o=new M2(e,s.ks),l=o.ru(s.documents),u=Ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);kv(t,n,c.au);const d=new U2(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function W2(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Dc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hm(r.remoteStore,i.targetId),Cf(r,i.targetId)}).catch(qs)):(Cf(r,i.targetId),await Rf(r.localStore,i.targetId,!0))}async function H2(t,e){const n=J(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hm(n.remoteStore,r.targetId))}async function q2(t,e,n){const r=Z2(t);try{const i=await function(o,l){const u=J(o),c=Ee.now(),d=l.reduce((T,k)=>T.add(k.key),oe());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let k=Jn(),P=oe();return u.xs.getEntries(T,d).next(C=>{k=C,k.forEach((w,v)=>{v.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,k)).next(C=>{f=C;const w=[];for(const v of l){const S=oO(v,f.get(v.key).overlayedDocument);S!=null&&w.push(new ri(v.key,S,eI(S.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,w,l)}).next(C=>{m=C;const w=C.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(T,C.batchId,w)})}).then(()=>({batchId:m.batchId,changes:hI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new ke(se)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await Qa(r,i.changes),await jc(r.remoteStore)}catch(i){const s=gm(i,"Failed to persist write");n.reject(s)}}async function GI(t,e){const n=J(t);try{const r=await i2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ce(o.hu,14607):i.removedDocuments.size>0&&(ce(o.hu,42227),o.hu=!1))}),await Qa(n,r,e)}catch(r){await qs(r)}}function Pv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&vm(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function G2(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ke(K.comparator);o=o.insert(s,pt.newNoDocument(s,X.min()));const l=oe().add(s),u=new Mc(X.min(),new Map,new ke(se),o,l);await GI(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Tm(r)}else await Rf(r.localStore,e,!1).then(()=>Cf(r,e,n)).catch(qs)}async function K2(t,e){const n=J(t),r=e.batch.batchId;try{const i=await r2(n.localStore,e);QI(n,r,null),KI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qa(n,i)}catch(i){await qs(i)}}async function Q2(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(ce(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);QI(r,e,n),KI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qa(r,i)}catch(i){await qs(i)}}function KI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function QI(t,e,n){const r=J(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Cf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||YI(t,r)})}function YI(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(hm(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Tm(t))}function kv(t,e,n){for(const r of n)r instanceof WI?(t.Vu.addReference(r.key,e),Y2(t,r)):r instanceof HI?(H(Em,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||YI(t,r.key)):Q(19791,{wu:r})}function Y2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(H(Em,"New document in limbo: "+n),t.Iu.add(r),Tm(t))}function Tm(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(ye.fromString(e)),r=t.fu.next();t.Au.set(r,new F2(n)),t.Ru=t.Ru.insert(n,r),UI(t.remoteStore,new Ar(Rn(bc(n.path)),r,"TargetPurposeLimboResolution",Cc.ce))}}async function Qa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=um.Is(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,m=>M.forEach(m.Ts,T=>d.persistence.referenceDelegate.addReference(f,m.targetId,T)).next(()=>M.forEach(m.Es,T=>d.persistence.referenceDelegate.removeReference(f,m.targetId,T)))))}catch(f){if(!Gs(f))throw f;H(cm,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const T=d.vs.get(m),k=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(k);d.vs=d.vs.insert(m,P)}}}(r.localStore,s))}async function X2(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H(Em,"User change. New user:",e.toKey());const r=await OI(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qa(n,r.Ns)}}function J2(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let i=oe();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function XI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=G2.bind(null,e),e.Pu.H_=L2.bind(null,e.eventManager),e.Pu.yu=V2.bind(null,e.eventManager),e}function Z2(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=K2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q2.bind(null,e),e}class qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return n2(this.persistence,new ZO,e.initialUser,this.serializer)}Cu(e){return new DI(lm.Vi,this.serializer)}Du(e){return new u2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qu.provider={build:()=>new qu};class eL extends qu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ce(this.persistence.referenceDelegate instanceof Wu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UO(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new DI(r=>Wu.Vi(r,n),this.serializer)}}class Nf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X2.bind(null,this.syncEngine),await b2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new O2}()}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=p2(e.databaseInfo);return v2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new E2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Pv(this.syncEngine,n,0),function(){return Ev.v()?new Ev:new c2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new j2(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H(xi,"RemoteStore shutting down."),s.Ia.add(5),await Ka(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Nf.provider={build:()=>new Nf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Im{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="FirestoreClient";class tL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Qp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Qr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Qr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rd(t,e){t.asyncQueue.verifyOperationInProgress(),H(Qr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nL(t);H(Qr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Iv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Iv(e.remoteStore,i)),t._onlineComponents=e}async function nL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Qr,"Using user provided OfflineComponentProvider");try{await rd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ni("Error using user provided cache. Falling back to memory cache: "+n),await rd(t,new qu)}}else H(Qr,"Using default OfflineComponentProvider"),await rd(t,new eL(void 0));return t._offlineComponents}async function JI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Qr,"Using user provided OnlineComponentProvider"),await Cv(t,t._uninitializedComponentsProvider._online)):(H(Qr,"Using default OnlineComponentProvider"),await Cv(t,new Nf))),t._onlineComponents}function rL(t){return JI(t).then(e=>e.syncEngine)}async function Gu(t){const e=await JI(t),n=e.eventManager;return n.onListen=B2.bind(null,e.syncEngine),n.onUnlisten=W2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=z2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=H2.bind(null,e.syncEngine),n}function iL(t,e,n,r){const i=new Im(r),s=new wm(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>ym(await Gu(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>_m(await Gu(t),s))}}function sL(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Im({next:m=>{d.Nu(),o.enqueueAndForget(()=>_m(s,f));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new wm(bc(l.path),d,{includeMetadataChanges:!0,qa:!0});return ym(s,f)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}function oL(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Im({next:m=>{d.Nu(),o.enqueueAndForget(()=>_m(s,f)),m.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new wm(l,d,{includeMetadataChanges:!0,qa:!0});return ym(s,f)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}function aL(t,e){const n=new zn;return t.asyncQueue.enqueueAndForget(async()=>q2(await rL(t),e,n)),n.promise}/**
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
 */function ZI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL="ComponentProvider",Nv=new Map;function uL(t,e,n,r,i){return new ND(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,ZI(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="firestore.googleapis.com",xv=!0;class bv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=e1,this.ssl=xv}else this.host=e.host,this.ssl=e.ssl??xv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VO)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_D("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lD;switch(r.type){case"firstParty":return new dD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nv.get(n);r&&(H(lL,"Removing Datastore"),Nv.delete(n),r.terminate())}(this),Promise.resolve()}}function cL(t,e,n,r={}){var c;t=Ot(t,Bc);const i=Mi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Lp(`https://${l}`),s.host!==e1&&s.host!==l&&Ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!zr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=dt.MOCK_USER;else{d=UE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(m)}t._authCredentials=new uD(new BT(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ha(n,be._jsonSchema))return new be(e,r||null,new K(ye.fromString(n.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:$e("string",be._jsonSchemaVersion),referencePath:$e("string")};class Fr extends nr{constructor(e,n,r){super(e,n,bc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new K(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function hL(t,e,...n){if(t=ee(t),zT("collection","path",e),t instanceof Bc){const r=ye.fromString(e,...n);return H_(r),new Fr(t,null,r)}{if(!(t instanceof be||t instanceof Fr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return H_(r),new Fr(t.firestore,null,r)}}function ws(t,e,...n){if(t=ee(t),arguments.length===1&&(e=Qp.newId()),zT("doc","path",e),t instanceof Bc){const r=ye.fromString(e,...n);return W_(r),new be(t,null,new K(r))}{if(!(t instanceof be||t instanceof Fr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return W_(r),new be(t.firestore,t instanceof Fr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="AsyncQueue";class Ov{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new VI(this,"async_queue_retry"),this._c=()=>{const r=nd();r&&H(Dv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=nd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Gs(e))throw e;H(Dv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Xn("INTERNAL UNHANDLED ERROR: ",Lv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=mm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:Lv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Lv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Zn extends Bc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ov,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ov(e),this._firestoreClient=void 0,await e}}}function dL(t,e){const n=typeof t=="object"?t:Up(),r=typeof t=="string"?t:e||Fu,i=gc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LE("firestore");s&&cL(i,...s)}return i}function zc(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fL(t),t._firestoreClient}function fL(t){var r,i,s,o;const e=t._freezeSettings(),n=uL(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tL(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(at.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ha(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:$e("string",Kt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(Ha(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:$e("string",kn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
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
 */class hn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ha(e,hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new hn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}hn._jsonSchemaVersion="firestore/vectorValue/1.0",hn._jsonSchema={type:$e("string",hn._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=/^__.*__$/;class mL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new qa(e,this.data,n,this.fieldTransforms)}}class t1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function n1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class $c{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new $c({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ku(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(n1(this.dataSource)&&pL.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class gL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uc(e)}A(e,n,r,i=!1){return new $c({dataSource:e,methodName:n,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wc(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new gL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function r1(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);km("Data must be an object, but it was:",o,r);const l=i1(r,o);let u,c;if(s.merge)u=new Ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=bi(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);a1(d,m)||d.push(m)}u=new Ut(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new mL(new kt(l),u,c)}class Hc extends Ys{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hc}}function yL(t,e,n){return new $c({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Am extends Ys{_toFieldTransform(e){return new nm(e.path,new xa)}isEqual(e){return e instanceof Am}}class Rm extends Ys{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=yL(this,e,!0),r=this.Sc.map(s=>Xs(s,n)),i=new bs(r);return new nm(e.path,i)}isEqual(e){return e instanceof Rm&&zr(this.Sc,e.Sc)}}class Pm extends Ys{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new Da(e.serializer,pI(e.serializer,this.bc));return new nm(e.path,n)}isEqual(e){return e instanceof Pm&&this.bc===e.bc}}function _L(t,e,n,r){const i=t.A(1,e,n);km("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();ni(r,(u,c)=>{const d=o1(e,u,n);c=ee(c);const f=i.fc(d);if(c instanceof Hc)s.push(d);else{const m=Xs(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new Ut(s);return new t1(o,l,i.fieldTransforms)}function vL(t,e,n,r,i,s){const o=t.A(1,e,n),l=[bi(e,r,n)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(bi(e,s[m])),u.push(s[m+1]);const c=[],d=kt.empty();for(let m=l.length-1;m>=0;--m)if(!a1(c,l[m])){const T=l[m];let k=u[m];k=ee(k);const P=o.fc(T);if(k instanceof Hc)c.push(T);else{const C=Xs(k,P);C!=null&&(c.push(T),d.set(T,C))}}const f=new Ut(c);return new t1(d,f,o.fieldTransforms)}function wL(t,e,n,r=!1){return Xs(n,t.A(r?4:3,e))}function Xs(t,e){if(s1(t=ee(t)))return km("Unsupported field value:",e,t),i1(t,e);if(t instanceof Ys)return function(r,i){if(!n1(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xs(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:$u(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$u(i.serializer,s)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:SI(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:om(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof hn)return function(o,l){const u=o instanceof hn?o.toArray():o;return{mapValue:{fields:{[XT]:{stringValue:ZT},[ju]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return tm(l.serializer,d)})}}}}}}(r,i);if(xI(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${kc(r)}`)}(t,e)}function i1(t,e){const n={};return HT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,i)=>{const s=Xs(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function s1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof kn||t instanceof Kt||t instanceof be||t instanceof Ys||t instanceof hn||xI(t))}function km(t,e,n){if(!s1(n)||!$T(n)){const r=kc(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function bi(t,e,n){if((e=ee(e))instanceof Sm)return e._internalPath;if(typeof e=="string")return o1(t,e);throw Ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const EL=new RegExp("[~\\*/\\[\\]]");function o1(t,e,n){if(e.search(EL)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sm(...e.split("."))._internalPath}catch{throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ku(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function a1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ju].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Le(o.doubleValue));return new hn(n)}convertGeoPoint(e){return new kn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pa(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ce(NI(r),9688,{name:e});const i=new ka(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Cm extends TL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,n)}}function Vv(){return new Am("serverTimestamp")}function JM(...t){return new Rm("arrayUnion",t)}function ZM(t){return new Pm("increment",t)}const Mv="@firebase/firestore",Uv="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(bi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IL extends l1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nm{}class xm extends Nm{}function eU(t,e,...n){let r=[];e instanceof Nm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof bm).length,l=s.filter(u=>u instanceof qc).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qc extends xm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return c1(e._query,n),new nr(e.firestore,e.converter,Ef(e._query,n))}_parse(e){const n=Wc(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Bv(f,d);const k=[];for(const P of f)k.push(jv(u,s,P));m={arrayValue:{values:k}}}else m=jv(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Bv(f,d),m=wL(l,o,f,d==="in"||d==="not-in");return ze.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tU(t,e,n){const r=e,i=bi("where",t);return qc._create(i,r,n)}class bm extends Nm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)c1(o,u),o=Ef(o,u)}(e._query,n),new nr(e.firestore,e.converter,Ef(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dm extends xm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Na(s,o)}(e._query,this._field,this._direction);return new nr(e.firestore,e.converter,GD(e._query,n))}}function nU(t,e="asc"){const n=e,r=bi("orderBy",t);return Dm._create(r,n)}class Om extends xm{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Om(e,n,r)}_apply(e){return new nr(e.firestore,e.converter,zu(e._query,this._limit,this._limitType))}}function rU(t){return vD("limit",t),Om._create("limit",t,"F")}function jv(t,e,n){if(typeof(n=ee(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aI(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!K.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Z_(t,new K(r))}if(n instanceof be)return Z_(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kc(n)}.`)}function Bv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function c1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function h1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vi extends l1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vi._jsonSchemaVersion="firestore/documentSnapshot/1.0",vi._jsonSchema={type:$e("string",vi._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class ru extends vi{data(e={}){return super.data(e)}}class wi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ru(this._firestore,this._userDataWriter,r.key,r,new Uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ru(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Uo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ru(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Uo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:SL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */wi._jsonSchemaVersion="firestore/querySnapshot/1.0",wi._jsonSchema={type:$e("string",wi._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){t=Ot(t,be);const e=Ot(t.firestore,Zn),n=zc(e);return sL(n,t._key).then(r=>f1(e,t,r))}function iU(t){t=Ot(t,nr);const e=Ot(t.firestore,Zn),n=zc(e),r=new Cm(e);return u1(t._query),oL(n,t._query).then(i=>new wi(e,r,t,i))}function zv(t,e,n){t=Ot(t,be);const r=Ot(t.firestore,Zn),i=h1(t.converter,e,n),s=Wc(r);return Gc(r,[r1(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Xt.none())])}function Qu(t,e,n,...r){t=Ot(t,be);const i=Ot(t.firestore,Zn),s=Wc(i);let o;return o=typeof(e=ee(e))=="string"||e instanceof Sm?vL(s,"updateDoc",t._key,e,n,r):_L(s,"updateDoc",t._key,e),Gc(i,[o.toMutation(t._key,Xt.exists(!0))])}function sU(t){return Gc(Ot(t.firestore,Zn),[new rm(t._key,Xt.none())])}function AL(t,e){const n=Ot(t.firestore,Zn),r=ws(t),i=h1(t.converter,e),s=Wc(t.firestore);return Gc(n,[r1(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function oU(t,...e){var c,d,f;t=ee(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Fv(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Fv(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof be)o=Ot(t.firestore,Zn),l=bc(t._key.path),s={next:m=>{e[r]&&e[r](f1(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Ot(t,nr);o=Ot(m.firestore,Zn),l=m._query;const T=new Cm(o);s={next:k=>{e[r]&&e[r](new wi(o,T,m,k))},error:e[r+1],complete:e[r+2]},u1(t._query)}const u=zc(o);return iL(u,l,i,s)}function Gc(t,e){const n=zc(t);return aL(n,e)}function f1(t,e,n){const r=n.docs.get(e._key),i=new Cm(t);return new vi(t,i,e._key,r,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){aD(Ui),Pi(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Zn(new cD(r.getProvider("auth-internal")),new fD(o,r.getProvider("app-check-internal")),xD(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),An(Mv,Uv,e),An(Mv,Uv,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="firebasestorage.googleapis.com",m1="storageBucket",RL=2*60*1e3,PL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends bn{constructor(e,n,r=0){super(id(e),`Firebase Storage: ${n} (${id(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return id(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var De;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(De||(De={}));function id(t){return"storage/"+t}function Lm(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(De.UNKNOWN,t)}function kL(t){return new Oe(De.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function CL(t){return new Oe(De.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(De.UNAUTHENTICATED,t)}function xL(){return new Oe(De.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bL(t){return new Oe(De.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function DL(){return new Oe(De.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OL(){return new Oe(De.CANCELED,"User canceled the upload/download.")}function LL(t){return new Oe(De.INVALID_URL,"Invalid URL '"+t+"'.")}function VL(t){return new Oe(De.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ML(){return new Oe(De.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+m1+"' property when initializing the app?")}function UL(){return new Oe(De.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function FL(){return new Oe(De.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jL(t){return new Oe(De.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xf(t){return new Oe(De.INVALID_ARGUMENT,t)}function g1(){return new Oe(De.APP_DELETED,"The Firebase app was deleted.")}function BL(t){return new Oe(De.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function na(t,e){return new Oe(De.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Po(t){throw new Oe(De.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw VL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),k={bucket:1,path:3},P=n===p1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",w=new RegExp(`^https?://${P}/${i}/${C}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:T,indices:k,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<S.length;O++){const U=S[O],j=U.regex.exec(e);if(j){const I=j[U.indices.bucket];let y=j[U.indices.path];y||(y=""),r=new Ft(I,y),U.postModify(r);break}}if(r==null)throw LL(e);return r}}class zL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(T,u())},C)}function m(){s&&clearTimeout(s)}function T(C,...w){if(c){m();return}if(C){m(),d.call(null,C,...w);return}if(u()||o){m(),d.call(null,C,...w);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let k=!1;function P(C){k||(k=!0,m(),!c&&(i!==null?(C||(l=2),clearTimeout(i),f(0)):C||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function WL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(t){return t!==void 0}function qL(t){return typeof t=="object"&&!Array.isArray(t)}function Vm(t){return typeof t=="string"||t instanceof String}function $v(t){return Mm()&&t instanceof Blob}function Mm(){return typeof Blob<"u"}function Wv(t,e,n,r){if(r<e)throw xf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw xf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function y1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ei;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ei||(Ei={}));/**
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
 */function GL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,T=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,P)=>{this.resolve_=k,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new bl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ei.NO_ERROR,u=s.getStatus();if(!l||GL(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ei.ABORT;r(!1,new bl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new bl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());HL(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Lm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?g1():OL();o(u)}else{const u=DL();o(u)}};this.canceled_?n(!1,new bl(!1,null,!0)):this.backoffId_=$L(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZL(t,e,n,r,i,s,o=!0,l=!1){const u=y1(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return XL(d,e),QL(d,n),YL(d,s),JL(d,r),new KL(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tV(...t){const e=eV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mm())return new Blob(t);throw new Oe(De.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function nV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function rV(t){if(typeof atob>"u")throw jL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sd{constructor(e,n){this.data=e,this.contentType=n||null}}function iV(t,e){switch(t){case Tn.RAW:return new sd(_1(e));case Tn.BASE64:case Tn.BASE64URL:return new sd(v1(t,e));case Tn.DATA_URL:return new sd(oV(e),aV(e))}throw Lm()}function _1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function sV(t){let e;try{e=decodeURIComponent(t)}catch{throw na(Tn.DATA_URL,"Malformed data URL.")}return _1(e)}function v1(t,e){switch(t){case Tn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw na(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Tn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw na(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rV(e)}catch(i){throw i.message.includes("polyfill")?i:na(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class w1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw na(Tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=lV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function oV(t){const e=new w1(t);return e.base64?v1(Tn.BASE64,e.rest):sV(e.rest)}function aV(t){return new w1(t).contentType}function lV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){let r=0,i="";$v(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if($v(this.data_)){const r=this.data_,i=nV(r,e,n);return i===null?null:new wr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wr(r,!0)}}static getBlob(...e){if(Mm()){const n=e.map(r=>r instanceof wr?r.data_:r);return new wr(tV.apply(null,n))}else{const n=e.map(o=>Vm(o)?iV(Tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new wr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){let e;try{e=JSON.parse(t)}catch{return null}return qL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function T1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t,e){return e}class vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||hV}}let Dl=null;function dV(t){return!Vm(t)||t.length<2?t:T1(t)}function I1(){if(Dl)return Dl;const t=[];t.push(new vt("bucket")),t.push(new vt("generation")),t.push(new vt("metageneration")),t.push(new vt("name","fullPath",!0));function e(s,o){return dV(o)}const n=new vt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new vt("size");return i.xform=r,t.push(i),t.push(new vt("timeCreated")),t.push(new vt("updated")),t.push(new vt("md5Hash",null,!0)),t.push(new vt("cacheControl",null,!0)),t.push(new vt("contentDisposition",null,!0)),t.push(new vt("contentEncoding",null,!0)),t.push(new vt("contentLanguage",null,!0)),t.push(new vt("contentType",null,!0)),t.push(new vt("metadata","customMetadata",!0)),Dl=t,Dl}function fV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ft(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function pV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return fV(r,t),r}function S1(t,e,n){const r=E1(e);return r===null?null:pV(t,r,n)}function mV(t,e,n,r){const i=E1(e);if(i===null||!Vm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),T=Um(m,n,r),k=y1({alt:"media",token:c});return T+k})[0]}function gV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class A1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){if(!t)throw Lm()}function yV(t,e){function n(r,i){const s=S1(t,i,e);return R1(s!==null),s}return n}function _V(t,e){function n(r,i){const s=S1(t,i,e);return R1(s!==null),mV(s,i,t.host,t._protocol)}return n}function P1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xL():i=NL():n.getStatus()===402?i=CL(t.bucket):n.getStatus()===403?i=bL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vV(t){const e=P1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kL(t.path)),s.serverResponse=i.serverResponse,s}return n}function wV(t,e,n){const r=e.fullServerUrl(),i=Um(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new A1(i,s,_V(t,n),o);return l.errorHandler=vV(e),l}function EV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function TV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=EV(null,e)),r}function IV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=TV(e,r,i),d=gV(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",T=wr.getBlob(f,r,m);if(T===null)throw UL();const k={name:c.fullPath},P=Um(s,t.host,t._protocol),C="POST",w=t.maxUploadRetryTime,v=new A1(P,C,yV(t,n),w);return v.urlParams=k,v.headers=o,v.body=T.uploadData(),v.errorHandler=P1(e),v}class SV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ei.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ei.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ei.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Po("cannot .send() more than once");if(Mi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Po("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Po("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Po("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Po("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AV extends SV{initXhr(){this.xhr_.responseType="text"}}function k1(){return new AV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Di(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return T1(this._location.path)}get storage(){return this._service}get parent(){const e=uV(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Di(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BL(e)}}function RV(t,e,n){t._throwIfRoot("uploadBytes");const r=IV(t.storage,t._location,I1(),new wr(e,!0),n);return t.storage.makeRequestWithTokens(r,k1).then(i=>({metadata:i,ref:t}))}function PV(t){t._throwIfRoot("getDownloadURL");const e=wV(t.storage,t._location,I1());return t.storage.makeRequestWithTokens(e,k1).then(n=>{if(n===null)throw FL();return n})}function kV(t,e){const n=cV(t._location.path,e),r=new Ft(t._location.bucket,n);return new Di(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){return/^[A-Za-z]+:\/\//.test(t)}function NV(t,e){return new Di(t,e)}function C1(t,e){if(t instanceof Fm){const n=t;if(n._bucket==null)throw ML();const r=new Di(n,n._bucket);return e!=null?C1(r,e):r}else return e!==void 0?kV(t,e):t}function xV(t,e){if(e&&CV(e)){if(t instanceof Fm)return NV(t,e);throw xf("To use ref(service, url), the first argument must be a Storage instance.")}else return C1(t,e)}function Hv(t,e){const n=e==null?void 0:e[m1];return n==null?null:Ft.makeFromBucketSpec(n,t)}function bV(t,e,n,r={}){t.host=`${e}:${n}`;const i=Mi(e);i&&Lp(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:UE(s,t.app.options.projectId))}class Fm{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=p1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RL,this._maxUploadRetryTime=PL,this._requests=new Set,i!=null?this._bucket=Ft.makeFromBucketSpec(i,this._host):this._bucket=Hv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Hv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Di(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new zL(g1());{const o=ZL(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const qv="@firebase/storage",Gv="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="storage";function aU(t,e,n){return t=ee(t),RV(t,e,n)}function lU(t){return t=ee(t),PV(t)}function uU(t,e){return t=ee(t),xV(t,e)}function DV(t=Up(),e){t=ee(t);const r=gc(t,N1).getImmediate({identifier:e}),i=LE("storage");return i&&OV(r,...i),r}function OV(t,e,n,r={}){bV(t,e,n,r)}function LV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fm(n,r,i,e,Ui)}function VV(){Pi(new $r(N1,LV,"PUBLIC").setMultipleInstances(!0)),An(qv,Gv,""),An(qv,Gv,"esm2020")}VV();const MV={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},jm=BE(MV),Ht=rD(jm);Ox(Ht,wT);const Es=dL(jm),cU=DV(jm),od=new wn;/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ls;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Ls||(Ls={}));class ad extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const UV=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},FV=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:UV(t),s=()=>i()!=="web",o=f=>{const m=c.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(T=>T.name===f)},u=f=>t.console.error(f),c=new Map,d=(f,m={})=>{const T=c.get(f);if(T)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),T.proxy;const k=i(),P=l(f);let C;const w=async()=>(!C&&k in m?C=typeof m[k]=="function"?C=await m[k]():C=m[k]:e!==null&&!C&&"web"in m&&(C=typeof m.web=="function"?C=await m.web():C=m.web),C),v=(y,E)=>{var A,R;if(P){const N=P==null?void 0:P.methods.find(_=>E===_.name);if(N)return N.rtype==="promise"?_=>n.nativePromise(f,E.toString(),_):(_,G)=>n.nativeCallback(f,E.toString(),_,G);if(y)return(A=y[E])===null||A===void 0?void 0:A.bind(y)}else{if(y)return(R=y[E])===null||R===void 0?void 0:R.bind(y);throw new ad(`"${f}" plugin is not implemented on ${k}`,Ls.Unimplemented)}},S=y=>{let E;const A=(...R)=>{const N=w().then(_=>{const G=v(_,y);if(G){const ne=G(...R);return E=ne==null?void 0:ne.remove,ne}else throw new ad(`"${f}.${y}()" is not implemented on ${k}`,Ls.Unimplemented)});return y==="addListener"&&(N.remove=async()=>E()),N};return A.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(A,"name",{value:y,writable:!1,configurable:!1}),A},O=S("addListener"),U=S("removeListener"),j=(y,E)=>{const A=O({eventName:y},E),R=async()=>{const _=await A;U({eventName:y,callbackId:_},E)},N=new Promise(_=>A.then(()=>_({remove:R})));return N.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await R()},N},I=new Proxy({},{get(y,E){switch(E){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return P?j:O;case"removeListener":return U;default:return S(E)}}});return r[f]=I,c.set(f,{name:f,proxy:I,platforms:new Set([...Object.keys(m),...P?[k]:[]])}),I};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=u,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=ad,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},jV=t=>t.Capacitor=FV(t),Yr=jV(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Js=Yr.registerPlugin;class Bm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new Yr.Exception(e,Ls.Unimplemented)}unavailable(e="not available"){return new Yr.Exception(e,Ls.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const Kv=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Qv=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class BV extends Bm{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Qv(i).trim(),s=Qv(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=Kv(e.key),r=Kv(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Js("CapacitorCookies",{web:()=>new BV});const zV=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),$V=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},WV=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,u;return Array.isArray(o)?(u="",o.forEach(c=>{l=e?encodeURIComponent(c):c,u+=`${s}=${l}&`}),u.slice(0,-1)):(l=e?encodeURIComponent(o):o,u=`${s}=${l}`),`${r}&${u}`},"").substr(1):null,HV=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=$V(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,u)=>{s.append(u,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class qV extends Bm{async request(e){const n=HV(e,e.webFetchExtra),r=WV(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let u,c;switch(l){case"arraybuffer":case"blob":c=await s.blob(),u=await zV(c);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:u,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Js("CapacitorHttp",{web:()=>new qV});var Yv;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Yv||(Yv={}));var Xv;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(Xv||(Xv={}));class GV extends Bm{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Js("SystemBars",{web:()=>new GV});var Jv;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(Jv||(Jv={}));var Zv;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(Zv||(Zv={}));const KV=Js("FirebaseAuthentication",{web:()=>ge(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),x1=L.createContext();function Zs(){return L.useContext(x1)}function QV({children:t}){const[e,n]=L.useState(null),[r,i]=L.useState(!0),s=L.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async P=>{if(!P){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",P.email);try{const C=ws(Es,"users",P.uid),w=await d1(C),v=P.email==="prince86944@gmail.com";if(w.exists()){const S=w.data();console.log("[AUTH] Existing user data found:",S.role),v&&S.role!==o.SUPER_ADMIN?(await Qu(C,{role:o.SUPER_ADMIN}),n({...P,...S,role:o.SUPER_ADMIN})):n({...P,...S})}else{console.log("[AUTH] No existing profile. Creating new entry...");const S={uid:P.uid,name:P.displayName||"Scholar",email:P.email,phone:P.phoneNumber||"",createdAt:Vv(),role:v?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await zv(C,S),n({...P,...S})}}catch(C){console.error("[AUTH] Profile sync critical failure:",C),n({uid:P.uid,email:P.email,name:P.displayName||"Scholar",role:P.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function u(P,C,w,v){const S=await Ax(Ht,P,C),O={uid:S.user.uid,name:w,email:P,phone:v,createdAt:Vv(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await zv(ws(Es,"users",S.user.uid),O),S.user}async function c(P,C){return Rx(Ht,P,C)}async function d(){var C;if(Yr.isNativePlatform())try{const w=await KV.signInWithGoogle();if((C=w==null?void 0:w.credential)!=null&&C.idToken){const v=wn.credential(w.credential.idToken),S=await Ic(Ht,v);return await l(S.user),S.user}throw new Error("Native Google Login failed")}catch(w){console.error("Native Google Login Error:",w);const v=await D_(Ht,od);return await l(v.user),v.user}else try{const w=await D_(Ht,od);return await l(w.user),w.user}catch(w){return console.warn("Popup failed or blocked, falling back to Redirect...",w),await mb(Ht,od)}}function f(P){return window.recaptchaVerifier||(window.recaptchaVerifier=new ib(Ht,"recaptcha-container",{size:"invisible"})),ob(Ht,P,window.recaptchaVerifier)}async function m(P){e&&(await Qu(ws(Es,"users",e.uid),P),n(C=>({...C,...P})))}function T(){return Ux(Ht)}L.useEffect(()=>Mx(Ht,async C=>{e||i(!0);try{C?await l(C):n(null)}catch(w){console.error("Auth sync error:",w)}finally{i(!1)}}),[]),L.useEffect(()=>{_b(Ht).then(async P=>{P!=null&&P.user&&(console.log("[AUTH] Redirect result success:",P.user.email),await l(P.user))}).catch(P=>{console.error("[AUTH] Redirect result error:",P)})},[]);const k={user:e,ROLES:o,login:c,signup:u,logout:T,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return b.jsx(x1.Provider,{value:k,children:t})}const On=Js("Preferences",{web:()=>ge(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),me=Js("AppBlocker"),b1=L.createContext(null);function e0(){return L.useContext(b1)}function YV({children:t}){const{user:e}=Zs(),n=(_,G)=>{try{const ne=localStorage.getItem(_);return ne!==null?JSON.parse(ne):G}catch{return G}},[r,i]=L.useState(!1),[s,o]=L.useState(1500),[l,u]=L.useState("OTHERS"),[c,d]=L.useState(25),[f,m]=L.useState(0),[T,k]=L.useState("COUNTDOWN"),[P,C]=L.useState(!1),[w,v]=L.useState(()=>n("allowedPackages","")),[S,O]=L.useState([]),U=L.useRef(null),j=()=>{var _,G,ne,At;return Yr.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((G=(_=window.Capacitor).isNativePlatform)==null?void 0:G.call(_))||((At=(ne=window.Capacitor).isPluginAvailable)==null?void 0:At.call(ne,"AppBlocker")))||Yr.isPluginAvailable("AppBlocker")},I=async()=>{if(j())try{if(me&&me.getInstalledApps){const{apps:_}=await me.getInstalledApps();O(_.sort((G,ne)=>G.name.localeCompare(ne.name)))}}catch(_){console.error("Fetch Apps Error:",_)}};L.useEffect(()=>{(async()=>{if(j()){await I();try{const G=await On.get({key:"countdownEndTime"}),ne=Number(G.value||0);if(ne>Date.now()){const At=Math.ceil((ne-Date.now())/1e3);o(At),i(!0),k("COUNTDOWN");const tn=await On.get({key:"allowedPackages"});tn.value&&v(tn.value),console.log("Restored active focus session on initialization:",At,"seconds remaining")}else me&&me.stopBlocker&&await me.stopBlocker(),await On.set({key:"isBlockerActive",value:"false"}),await On.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(G){console.error("Error restoring blocker state:",G)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const y=_=>{if(v(_),localStorage.setItem("allowedPackages",JSON.stringify(_)),j()){On.set({key:"allowedPackages",value:_});try{const G=(_||"").split(",").filter(Boolean);G.includes("com.apnacollegebihar.online")||G.push("com.apnacollegebihar.online"),me&&me.setAllowedPackages&&me.setAllowedPackages({packages:G})}catch{}}},E=_=>{if(i(_),localStorage.setItem("timerActive",JSON.stringify(_)),j())try{if(_){if(me&&me.setBlockerActive&&me.setBlockerActive({active:!0}),T==="COUNTDOWN"){me&&me.startCountdown&&me.startCountdown({minutes:Math.ceil(s/60)});const ne=Date.now()+s*1e3;On.set({key:"countdownEndTime",value:String(ne)})}const G=(w||"").split(",").filter(Boolean);G.includes("com.apnacollegebihar.online")||G.push("com.apnacollegebihar.online"),me&&me.setAllowedPackages&&me.setAllowedPackages({packages:G}),On.set({key:"isBlockerActive",value:"true"})}else me&&me.stopBlocker&&me.stopBlocker(),On.set({key:"isBlockerActive",value:"false"}),On.set({key:"countdownEndTime",value:"0"})}catch(G){console.error("Native Blocker Error:",G)}},A=_=>{C(_),localStorage.setItem("focusBroken",JSON.stringify(_))};L.useEffect(()=>{const _=G=>{G.key==="timerActive"&&i(JSON.parse(G.newValue)),G.key==="focusBroken"&&C(JSON.parse(G.newValue))};return window.addEventListener("storage",_),()=>window.removeEventListener("storage",_)},[]),L.useEffect(()=>{r||o(T==="COUNTDOWN"?c*60+f:0)},[T,c,f,r]);const R=async(_=null)=>{if(!e)return;const G=_||(T==="STOPWATCH"?s:c*60+f-s);if(G<5){E(!1);return}try{const ne=new Date().toLocaleDateString("en-CA");await AL(hL(Es,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:G,date:ne,createdAt:new Date().toISOString()});const At=ws(Es,"users",e.uid),tn=await d1(At);if(tn.exists()){const $=tn.data(),Z=$.lastStudyDate!==ne?G:($.todayStudyTime||0)+G,de=new Date;de.setDate(de.getDate()-1);const Ie=de.toLocaleDateString("en-CA");let Wt=$.streak||0,We=$.streakDate||"";We!==ne&&We!==Ie&&(Wt=0),Z>=7200&&We!==ne&&(We===Ie?Wt+=1:Wt=1,We=ne),await Qu(At,{totalStudyTime:($.totalStudyTime||0)+G,todayStudyTime:Z,lastStudyDate:ne,streak:Wt,streakDate:We,isStudying:!1})}E(!1)}catch(ne){console.error("Global Save Error:",ne)}};L.useEffect(()=>{e&&Qu(ws(Es,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),L.useEffect(()=>{const _=G=>{r&&(G.preventDefault(),G.returnValue="")};return window.addEventListener("beforeunload",_),()=>{window.removeEventListener("beforeunload",_)}},[r]),L.useEffect(()=>(r?U.current=setInterval(()=>{o(_=>T==="COUNTDOWN"?_<=1?(clearInterval(U.current),R(c*60+f),0):_-1:_+1)},1e3):clearInterval(U.current),()=>clearInterval(U.current)),[r,T,e,c,f]);const N={timerActive:r,setTimerActive:E,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:u,customMinutes:c,setCustomMinutes:d,customSeconds:f,setCustomSeconds:m,timerMode:T,setTimerMode:k,saveGlobalSession:R,focusBroken:P,setFocusBroken:A,allowedPackages:w,setAllowedPackages:y,installedApps:S,fetchApps:I,launchApp:async _=>{if(j())try{me&&me.launchApp&&await me.launchApp({packageName:_})}catch(G){console.error(G)}},openAccessibilitySettings:async()=>{if(j())try{me&&me.openAccessibilitySettings&&await me.openAccessibilitySettings()}catch(_){console.error(_)}}};return b.jsx(b1.Provider,{value:N,children:t})}function XV(){Yr.isNativePlatform();const t=Bs(),e=xp(),{user:n,updateProfileData:r}=Zs(),[i,s]=L.useState(""),[o,l]=L.useState(!1),[u,c]=L.useState(!1);e0(),L.useEffect(()=>{n&&!n.phone?l(!0):l(!1)},[n]);const d=async m=>{if(m.preventDefault(),!(i.length<10)){c(!0);try{await r({phone:i}),l(!1)}catch(T){console.error(T)}finally{c(!1)}}},f=()=>{const{timerActive:m,timerTime:T}=e0(),[k,P]=L.useState(!1);if(!m||t.pathname==="/dashboard/study")return null;const C=Math.floor(T%3600/60),w=T%60;return b.jsx("div",{className:`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${k?"translate-x-[70%]":""}`,children:b.jsxs("div",{className:"bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group",children:[b.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse",children:b.jsx(Dk,{size:20,className:"text-white"})}),b.jsxs("div",{className:`flex items-center gap-4 pr-6 ${k?"opacity-0 w-0 overflow-hidden":"opacity-100"}`,children:[b.jsxs("div",{children:[b.jsx("p",{className:"text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1",children:"Live Focus"}),b.jsxs("p",{className:"text-xl font-black text-white tabular-nums tracking-tighter",children:[C.toString().padStart(2,"0"),":",w.toString().padStart(2,"0")]})]}),b.jsx("button",{onClick:()=>e("/dashboard/study"),className:"px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest",children:"Resume"})]}),b.jsx("button",{onClick:()=>P(!k),className:"p-2 text-slate-500 hover:text-white",children:k?b.jsx(l_,{size:16}):b.jsx(Ok,{size:16})})]})})};return b.jsxs("div",{className:"flex flex-col h-screen bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30",children:[b.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-[100]",children:[b.jsxs("button",{onClick:()=>{var m;((m=t.state)==null?void 0:m.from)==="study-network"?e("/dashboard/study?standalone=true",{state:{tab:"network"}}):e(-1)},className:"flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group",children:[b.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-all",children:b.jsx(l_,{size:20})}),b.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Back"})]}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg object-cover shadow-sm"}),b.jsx("span",{className:"text-[10px] font-[1000] tracking-tighter uppercase text-slate-900",children:"ACB Hub"})]})]}),b.jsx("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 p-4 md:p-6 lg:p-8 pb-32",children:b.jsx("div",{className:"max-w-7xl mx-auto min-h-[80vh]",children:b.jsx(Dp,{})})}),o&&b.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:b.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[b.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:b.jsx(bk,{size:32})}),b.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),b.jsxs("form",{onSubmit:d,className:"space-y-6",children:[b.jsxs("div",{className:"flex gap-2",children:[b.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),b.jsx("input",{type:"tel",maxLength:10,value:i,onChange:m=>s(m.target.value.replace(/\D/g,"")),placeholder:"9XXXXXXXXX",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),b.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Secure Access"})]})]})}),b.jsx(f,{})]})}const JV=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=Zs(),[i,s]=L.useState(""),[o,l]=L.useState(!1);if(e)return b.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:b.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),b.jsx(bp,{to:"/login",replace:!0});const u=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",c=async f=>{if(f.preventDefault(),i.length<10)return $h.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),$h.success("Mobile number linked securely!")}catch{$h.error("Failed to save. Try again.")}finally{l(!1)}};return u?b.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:b.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[b.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),b.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[b.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:b.jsx(NE,{className:"text-blue-500 w-10 h-10"})}),b.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),b.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),b.jsxs("form",{onSubmit:c,className:"w-full space-y-4",children:[b.jsxs("div",{className:"relative group",children:[b.jsx(af,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),b.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),b.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),b.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[b.jsx(af,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),b.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):b.jsx(Dp,{})},ZV=()=>{const{user:t,loading:e,ROLES:n}=Zs();return e?b.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:b.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?b.jsx(Dp,{}):b.jsx(bp,{to:"/dashboard",replace:!0})},eM=fe.lazy(()=>ge(()=>import("./Home.js"),["assets/Home.js","assets/chevron-down.js","assets/calendar2.js","assets/log-out.js","assets/zap.js","assets/download.js","assets/arrow-right.js","assets/graduation-cap.js","assets/check-circle.js","assets/send.js","assets/book-open.js","assets/calculator.js","assets/users.js","assets/sparkles.js","assets/globe.js","assets/message-circle.js","assets/youtube.js"])),t0=fe.lazy(()=>ge(()=>import("./AppHub.js"),["assets/AppHub.js","assets/log-in.js","assets/user.js","assets/calendar2.js","assets/trash-2.js","assets/log-out.js","assets/message-circle.js","assets/youtube.js","assets/send.js","assets/book-open.js","assets/graduation-cap.js","assets/user-check.js","assets/users.js","assets/calculator.js","assets/sparkles.js","assets/globe.js"])),tM=fe.lazy(()=>ge(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),nM=fe.lazy(()=>ge(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),rM=fe.lazy(()=>ge(()=>import("./Dashboard.js"),["assets/Dashboard.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/check-circle-2.js","assets/calculator.js","assets/send.js","assets/clock.js","assets/globe.js","assets/users.js","assets/arrow-right.js","assets/lock.js","assets/chevron-right.js","assets/calendar-days.js","assets/search.js"])),iM=fe.lazy(()=>ge(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/search.js","assets/book-open.js","assets/graduation-cap.js","assets/check-circle-2.js","assets/zap.js","assets/send.js","assets/calculator.js","assets/chevron-up.js","assets/chevron-down.js","assets/trash-2.js","assets/plus.js","assets/download.js","assets/info.js","assets/external-link.js","assets/UgeacPredictor.css"])),sM=fe.lazy(()=>ge(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/arrow-right.js","assets/search.js","assets/eye.js","assets/download.js","assets/folder-plus.js"])),oM=fe.lazy(()=>ge(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/book-open.js","assets/chevron-down.js","assets/loader-2.js","assets/download.js","assets/index2.js","assets/search.js"])),aM=fe.lazy(()=>ge(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/globe.js","assets/calculator.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/check-circle.js","assets/award.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js"])),lM=fe.lazy(()=>ge(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/book-open.js","assets/arrow-right.js","assets/flame.js","assets/plus.js","assets/check-circle-2.js","assets/trash-2.js","assets/search.js"])),uM=fe.lazy(()=>ge(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),cM=fe.lazy(()=>ge(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/book-open.js","assets/file-text.js","assets/bar-chart-3.js","assets/search.js","assets/user-check.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),hM=fe.lazy(()=>ge(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js","assets/award.js"])),dM=fe.lazy(()=>ge(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),fM=fe.lazy(()=>ge(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/calendar2.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/clock.js"])),pM=fe.lazy(()=>ge(()=>import("./Timetable.js"),["assets/Timetable.js","assets/calendar-days.js","assets/save.js"])),mM=fe.lazy(()=>ge(()=>import("./Attendance.js"),["assets/Attendance.js","assets/user-check.js","assets/plus.js","assets/award.js","assets/calendar2.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),gM=fe.lazy(()=>ge(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/folder-plus.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js","assets/file-text.js"])),yM=fe.lazy(()=>ge(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),_M=fe.lazy(()=>ge(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/lock.js","assets/eye.js","assets/file-text.js"])),vM=fe.lazy(()=>ge(()=>import("./Terms.js"),["assets/Terms.js","assets/file-text.js","assets/check-circle-2.js"])),wM=fe.lazy(()=>ge(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/user.js","assets/trash-2.js","assets/log-in.js"])),EM=fe.lazy(()=>ge(()=>import("./About.js"),["assets/About.js","assets/graduation-cap.js","assets/sparkles.js","assets/award.js","assets/send.js","assets/book-open.js","assets/users.js","assets/calculator.js"])),TM=fe.lazy(()=>ge(()=>import("./Contact.js"),["assets/Contact.js","assets/message-circle.js","assets/youtube.js","assets/send.js","assets/help-circle.js","assets/chevron-down.js"])),IM=fe.lazy(()=>ge(()=>import("./AiChatbot.js"),["assets/AiChatbot.js","assets/info.js","assets/sparkles.js","assets/alert-circle.js","assets/user.js","assets/index2.js","assets/help-circle.js","assets/send.js"]));function SM(){return b.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[b.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),b.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function AM(){var c;const{user:t,updateProfileData:e,logout:n}=Zs(),[r,i]=L.useState(""),[s,o]=L.useState(!1);if(!(t&&(!(t!=null&&t.phone)||((c=t==null?void 0:t.phone)==null?void 0:c.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED")))return null;const u=async d=>{if(d.preventDefault(),r.length<10)return xe.error("Enter a valid 10-digit number!");o(!0);try{await e({phone:r}),xe.success("Mobile number linked securely!")}catch{xe.error("Failed to save. Try again.")}finally{o(!1)}};return b.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:b.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[b.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),b.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[b.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:b.jsx(NE,{className:"text-blue-500 w-10 h-10"})}),b.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),b.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),b.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[b.jsxs("div",{className:"relative group",children:[b.jsx(af,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),b.jsx("input",{type:"tel",value:r,onChange:d=>i(d.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),b.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:s?"Updating...":"Save & Continue"})]}),b.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function RM(){const{user:t,loading:e}=Zs(),[n,r]=L.useState(!0),[i,s]=L.useState(window.innerWidth<768),o=Yr.isNativePlatform();if(L.useEffect(()=>{const l=()=>s(window.innerWidth<768);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),L.useEffect(()=>{const l=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(l)),()=>clearTimeout(l)},[e]),n)return b.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[b.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),b.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return b.jsxs(b.Fragment,{children:[b.jsx(kk,{position:"top-right"}),b.jsx(AM,{}),b.jsx(fe.Suspense,{fallback:b.jsx(SM,{}),children:b.jsxs(NP,{children:[b.jsx(ue,{path:"/",element:o||new URLSearchParams(window.location.search).get("standalone")==="true"?b.jsx(t0,{}):b.jsx(eM,{})}),b.jsx(ue,{path:"/hub",element:b.jsx(t0,{})}),b.jsx(ue,{path:"/login",element:b.jsx(tM,{})}),b.jsx(ue,{path:"/signup",element:b.jsx(nM,{})}),b.jsx(ue,{path:"/privacy-policy",element:b.jsx(_M,{})}),b.jsx(ue,{path:"/terms",element:b.jsx(vM,{})}),b.jsx(ue,{path:"/delete-account",element:b.jsx(wM,{})}),b.jsx(ue,{path:"/about",element:b.jsx(EM,{})}),b.jsx(ue,{path:"/contact",element:b.jsx(TM,{})}),b.jsx(ue,{element:b.jsx(JV,{}),children:b.jsxs(ue,{element:b.jsx(XV,{}),children:[b.jsx(ue,{path:"/dashboard",element:b.jsx(rM,{})}),b.jsx(ue,{path:"/dashboard/ugeac-predictor",element:b.jsx(iM,{})}),b.jsx(ue,{path:"/dashboard/notes",element:b.jsx(sM,{})}),b.jsx(ue,{path:"/dashboard/cgpa",element:b.jsx(aM,{})}),b.jsx(ue,{path:"/dashboard/study",element:b.jsx(lM,{})}),b.jsx(ue,{path:"/dashboard/calculator",element:b.jsx(uM,{})}),b.jsx(ue,{path:"/dashboard/achievements",element:b.jsx(hM,{})}),b.jsx(ue,{path:"/dashboard/groups",element:b.jsx(dM,{})}),b.jsx(ue,{path:"/dashboard/groups/:groupId",element:b.jsx(fM,{})}),b.jsx(ue,{path:"/dashboard/timetable",element:b.jsx(pM,{})}),b.jsx(ue,{path:"/dashboard/attendance",element:b.jsx(mM,{})}),b.jsx(ue,{path:"/dashboard/extras",element:b.jsx(gM,{})}),b.jsx(ue,{path:"/dashboard/calendar",element:b.jsx(yM,{})}),b.jsx(ue,{path:"/dashboard/syllabus",element:b.jsx(oM,{})}),b.jsx(ue,{path:"/dashboard/chatbot",element:b.jsx(IM,{})}),b.jsx(ue,{element:b.jsx(ZV,{}),children:b.jsx(ue,{path:"/dashboard/admin",element:b.jsx(cM,{})})})]})}),b.jsx(ue,{path:"*",element:b.jsx(bp,{to:"/",replace:!0})})]})})]})}catch(l){return console.error("App Crash:",l),b.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[b.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:b.jsx(xk,{size:32})}),b.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),b.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),b.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const n0=document.getElementById("root");if(!n0)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=ld.createRoot(n0);console.log("[DEBUG] Rendering app to root..."),t.render(b.jsx(fe.StrictMode,{children:b.jsx(QV,{children:b.jsx(YV,{children:b.jsx(MP,{children:b.jsx(RM,{})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{Zv as $,xk as A,d1 as B,Yr as C,Vv as D,JM as E,ZM as F,kM as G,l_ as H,$h as I,rD as J,GM as K,CM as L,PM as M,lS as N,LM as O,Ax as P,OM as Q,fe as R,NE as S,Dk as T,FM as U,_b as V,Bm as W,Ok as X,Ql as Y,MM as Z,ge as _,bk as a,Fi as a0,yr as a1,_r as a2,wn as a3,ib as a4,KM as a5,vr as a6,CN as a7,qM as a8,jM as a9,DM as aa,VM as ab,Jv as ac,Ox as ad,NM as ae,bM as af,Rx as ag,UM as ah,ob as ai,xM as aj,$M as ak,WM as al,zM as am,tx as an,BM as ao,mb as ap,D_ as aq,YM as ar,QM as as,Ix as at,Yn as au,HM as av,I_ as aw,Jx as ax,TT as ay,wT as az,xp as b,hL as c,Es as d,Vi as e,Bs as f,e0 as g,nU as h,uU as i,b as j,aU as k,rU as l,lU as m,xe as n,oU as o,AL as p,eU as q,L as r,cU as s,iU as t,Zs as u,Qu as v,tU as w,ws as x,sU as y,Js as z};
