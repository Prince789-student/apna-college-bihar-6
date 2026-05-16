function dS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var PM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u0={exports:{}},Yu={},c0={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),pS=Symbol.for("react.portal"),mS=Symbol.for("react.fragment"),gS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),_S=Symbol.for("react.provider"),vS=Symbol.for("react.context"),wS=Symbol.for("react.forward_ref"),ES=Symbol.for("react.suspense"),TS=Symbol.for("react.memo"),IS=Symbol.for("react.lazy"),zg=Symbol.iterator;function SS(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d0=Object.assign,f0={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=f0,this.updater=n||h0}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p0(){}p0.prototype=Ls.prototype;function Df(t,e,n){this.props=t,this.context=e,this.refs=f0,this.updater=n||h0}var Of=Df.prototype=new p0;Of.constructor=Df;d0(Of,Ls.prototype);Of.isPureReactComponent=!0;var $g=Array.isArray,m0=Object.prototype.hasOwnProperty,Lf={current:null},g0={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)m0.call(e,r)&&!g0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Na,type:t,key:s,ref:o,props:i,_owner:Lf.current}}function AS(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function RS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wg=/\/+/g;function gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RS(""+t.key):e.toString(36)}function Ol(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Na:case pS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gh(o,0):r,$g(i)?(n="",t!=null&&(n=t.replace(Wg,"$&/")+"/"),Ol(i,e,n,"",function(c){return c})):i!=null&&(Vf(i)&&(i=AS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$g(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+gh(s,l);o+=Ol(s,e,n,u,i)}else if(u=SS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+gh(s,l++),o+=Ol(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function al(t,e,n){if(t==null)return t;var r=[],i=0;return Ol(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Ll={transition:null},PS={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:Lf};function _0(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!Vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ls;ne.Fragment=mS;ne.Profiler=yS;ne.PureComponent=Df;ne.StrictMode=gS;ne.Suspense=ES;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PS;ne.act=_0;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=d0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)m0.call(e,u)&&!g0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Na,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:vS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_S,_context:t},t.Consumer=t};ne.createElement=y0;ne.createFactory=function(t){var e=y0.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:wS,render:t}};ne.isValidElement=Vf;ne.lazy=function(t){return{$$typeof:IS,_payload:{_status:-1,_result:t},_init:kS}};ne.memo=function(t,e){return{$$typeof:TS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};ne.unstable_act=_0;ne.useCallback=function(t,e){return St.current.useCallback(t,e)};ne.useContext=function(t){return St.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ne.useEffect=function(t,e){return St.current.useEffect(t,e)};ne.useId=function(){return St.current.useId()};ne.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return St.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ne.useRef=function(t){return St.current.useRef(t)};ne.useState=function(t){return St.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return St.current.useTransition()};ne.version="18.3.1";c0.exports=ne;var L=c0.exports;const Le=fS(L),CS=dS({__proto__:null,default:Le},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xS=L,NS=Symbol.for("react.element"),bS=Symbol.for("react.fragment"),DS=Object.prototype.hasOwnProperty,OS=xS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LS={key:!0,ref:!0,__self:!0,__source:!0};function v0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DS.call(e,r)&&!LS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NS,type:t,key:s,ref:o,props:i,_owner:OS.current}}Yu.Fragment=bS;Yu.jsx=v0;Yu.jsxs=v0;u0.exports=Yu;var C=u0.exports,cd={},w0={exports:{}},Wt={},E0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var J=W.length;W.push(Q);e:for(;0<J;){var he=J-1>>>1,fe=W[he];if(0<i(fe,Q))W[he]=Q,W[J]=fe,J=he;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],J=W.pop();if(J!==Q){W[0]=J;e:for(var he=0,fe=W.length,Rt=fe>>>1;he<Rt;){var qt=2*(he+1)-1,ri=W[qt],rn=qt+1,rr=W[rn];if(0>i(ri,J))rn<fe&&0>i(rr,ri)?(W[he]=rr,W[rn]=J,he=rn):(W[he]=ri,W[qt]=J,he=qt);else if(rn<fe&&0>i(rr,J))W[he]=rr,W[rn]=J,he=rn;else break e}}return Q}function i(W,Q){var J=W.sortIndex-Q.sortIndex;return J!==0?J:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,I=!1,x=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O(W){if(P=!1,S(W),!x)if(n(u)!==null)x=!0,$e(U);else{var Q=n(c);Q!==null&&Vt(O,Q.startTime-W)}}function U(W,Q){x=!1,P&&(P=!1,w(y),y=-1),I=!0;var J=m;try{for(S(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||W&&!R());){var he=f.callback;if(typeof he=="function"){f.callback=null,m=f.priorityLevel;var fe=he(f.expirationTime<=Q);Q=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(u)&&r(u),S(Q)}else r(u);f=n(u)}if(f!==null)var Rt=!0;else{var qt=n(c);qt!==null&&Vt(O,qt.startTime-Q),Rt=!1}return Rt}finally{f=null,m=J,I=!1}}var j=!1,T=null,y=-1,E=5,A=-1;function R(){return!(t.unstable_now()-A<E)}function k(){if(T!==null){var W=t.unstable_now();A=W;var Q=!0;try{Q=T(!0,W)}finally{Q?_():(j=!1,T=null)}}else j=!1}var _;if(typeof v=="function")_=function(){v(k)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,oe=G.port2;G.port1.onmessage=k,_=function(){oe.postMessage(null)}}else _=function(){N(k,0)};function $e(W){T=W,j||(j=!0,_())}function Vt(W,Q){y=N(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,$e(U))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return W()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var J=m;m=W;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(W,Q,J){var he=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,W={id:d++,callback:Q,priorityLevel:W,startTime:J,expirationTime:fe,sortIndex:-1},J>he?(W.sortIndex=J,e(c,W),n(u)===null&&W===n(c)&&(P?(w(y),y=-1):P=!0,Vt(O,J-he))):(W.sortIndex=fe,e(u,W),x||I||(x=!0,$e(U))),W},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(W){var Q=m;return function(){var J=m;m=Q;try{return W.apply(this,arguments)}finally{m=J}}}})(T0);E0.exports=T0;var VS=E0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MS=L,$t=VS;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I0=new Set,ea={};function Oi(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(ea[t]=e,t=0;t<e.length;t++)I0.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hd=Object.prototype.hasOwnProperty,US=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hg={},qg={};function FS(t){return hd.call(qg,t)?!0:hd.call(Hg,t)?!1:US.test(t)?qg[t]=!0:(Hg[t]=!0,!1)}function jS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BS(t,e,n,r){if(e===null||typeof e>"u"||jS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mf=/[\-:]([a-z])/g;function Uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mf,Uf);ot[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mf,Uf);ot[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mf,Uf);ot[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BS(e,n,i,r)&&(n=null),r||i===null?FS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=MS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),Gg=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=Gg&&t[Gg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,yh;function Ao(t){if(yh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yh=e&&e[1]||""}return`
`+yh+t}var _h=!1;function vh(t,e){if(!t||_h)return"";_h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{_h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function zS(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=vh(t.type,!1),t;case 11:return t=vh(t.type.render,!1),t;case 1:return t=vh(t.type,!0),t;default:return""}}function md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case dd:return"Profiler";case jf:return"StrictMode";case fd:return"Suspense";case pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A0:return(t.displayName||"Context")+".Consumer";case S0:return(t._context.displayName||"Context")+".Provider";case Bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:md(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return md(t(e))}catch{}}return null}function $S(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(e);case 8:return e===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WS(t){var e=k0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=WS(t))}function P0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=k0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C0(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function yd(t,e){C0(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ro(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function x0(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,b0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HS=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){HS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function D0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function O0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=D0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qS=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(qS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Id=null;function $f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sd=null,ls=null,us=null;function Jg(t){if(t=Oa(t)){if(typeof Sd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=tc(e),Sd(t.stateNode,t.type,e))}}function L0(t){ls?us?us.push(t):us=[t]:ls=t}function V0(){if(ls){var t=ls,e=us;if(us=ls=null,Jg(t),e)for(t=0;t<e.length;t++)Jg(e[t])}}function M0(t,e){return t(e)}function U0(){}var wh=!1;function F0(t,e,n){if(wh)return t(e,n);wh=!0;try{return M0(t,e,n)}finally{wh=!1,(ls!==null||us!==null)&&(U0(),V0())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var r=tc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ad=!1;if($n)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Ad=!1}function GS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Mo=!1,su=null,ou=!1,Rd=null,KS={onError:function(t){Mo=!0,su=t}};function QS(t,e,n,r,i,s,o,l,u){Mo=!1,su=null,GS.apply(KS,arguments)}function YS(t,e,n,r,i,s,o,l,u){if(QS.apply(this,arguments),Mo){if(Mo){var c=su;Mo=!1,su=null}else throw Error(F(198));ou||(ou=!0,Rd=c)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function j0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zg(t){if(Li(t)!==t)throw Error(F(188))}function XS(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zg(i),t;if(s===r)return Zg(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function B0(t){return t=XS(t),t!==null?z0(t):null}function z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z0(t);if(e!==null)return e;t=t.sibling}return null}var $0=$t.unstable_scheduleCallback,ey=$t.unstable_cancelCallback,JS=$t.unstable_shouldYield,ZS=$t.unstable_requestPaint,De=$t.unstable_now,eA=$t.unstable_getCurrentPriorityLevel,Wf=$t.unstable_ImmediatePriority,W0=$t.unstable_UserBlockingPriority,au=$t.unstable_NormalPriority,tA=$t.unstable_LowPriority,H0=$t.unstable_IdlePriority,Xu=null,Sn=null;function nA(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Xu,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:sA,rA=Math.log,iA=Math.LN2;function sA(t){return t>>>=0,t===0?32:31-(rA(t)/iA|0)|0}var hl=64,dl=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ko(l):(s&=o,s!==0&&(r=ko(s)))}else o=n&~i,o!==0?r=ko(o):s!==0&&(r=ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function oA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=oA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function Eh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function lA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function G0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K0,qf,Q0,Y0,X0,Pd=!1,fl=[],Rr=null,kr=null,Pr=null,ra=new Map,ia=new Map,pr=[],uA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ty(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oa(e),e!==null&&qf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cA(t,e,n,r,i){switch(e){case"focusin":return Rr=go(Rr,t,e,n,r,i),!0;case"dragenter":return kr=go(kr,t,e,n,r,i),!0;case"mouseover":return Pr=go(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ra.set(s,go(ra.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ia.set(s,go(ia.get(s)||null,t,e,n,r,i)),!0}return!1}function J0(t){var e=fi(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=j0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){Q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Id=r,n.target.dispatchEvent(r),Id=null}else return e=Oa(n),e!==null&&qf(e),t.blockedOn=n,!1;e.shift()}return!0}function ny(t,e,n){Vl(t)&&n.delete(e)}function hA(){Pd=!1,Rr!==null&&Vl(Rr)&&(Rr=null),kr!==null&&Vl(kr)&&(kr=null),Pr!==null&&Vl(Pr)&&(Pr=null),ra.forEach(ny),ia.forEach(ny)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,hA)))}function sa(t){function e(i){return yo(i,t)}if(0<fl.length){yo(fl[0],t);for(var n=1;n<fl.length;n++){var r=fl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&yo(Rr,t),kr!==null&&yo(kr,t),Pr!==null&&yo(Pr,t),ra.forEach(e),ia.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)J0(n),n.blockedOn===null&&pr.shift()}var cs=er.ReactCurrentBatchConfig,uu=!0;function dA(t,e,n,r){var i=ce,s=cs.transition;cs.transition=null;try{ce=1,Gf(t,e,n,r)}finally{ce=i,cs.transition=s}}function fA(t,e,n,r){var i=ce,s=cs.transition;cs.transition=null;try{ce=4,Gf(t,e,n,r)}finally{ce=i,cs.transition=s}}function Gf(t,e,n,r){if(uu){var i=Cd(t,e,n,r);if(i===null)Nh(t,e,r,cu,n),ty(t,r);else if(cA(i,t,e,n,r))r.stopPropagation();else if(ty(t,r),e&4&&-1<uA.indexOf(t)){for(;i!==null;){var s=Oa(i);if(s!==null&&K0(s),s=Cd(t,e,n,r),s===null&&Nh(t,e,r,cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nh(t,e,r,null,n)}}var cu=null;function Cd(t,e,n,r){if(cu=null,t=$f(r),t=fi(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=j0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function Z0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eA()){case Wf:return 1;case W0:return 4;case au:case tA:return 16;case H0:return 536870912;default:return 16}default:return 16}}var Er=null,Kf=null,Ml=null;function ew(){if(Ml)return Ml;var t,e=Kf,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ml=i.slice(t,1<r?1-r:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function ry(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:ry,this.isPropagationStopped=ry,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qf=Ht(Vs),Da=Se({},Vs,{view:0,detail:0}),pA=Ht(Da),Th,Ih,_o,Ju=Se({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(Th=t.screenX-_o.screenX,Ih=t.screenY-_o.screenY):Ih=Th=0,_o=t),Th)},movementY:function(t){return"movementY"in t?t.movementY:Ih}}),iy=Ht(Ju),mA=Se({},Ju,{dataTransfer:0}),gA=Ht(mA),yA=Se({},Da,{relatedTarget:0}),Sh=Ht(yA),_A=Se({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),vA=Ht(_A),wA=Se({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EA=Ht(wA),TA=Se({},Vs,{data:0}),sy=Ht(TA),IA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AA[t])?!!e[t]:!1}function Yf(){return RA}var kA=Se({},Da,{key:function(t){if(t.key){var e=IA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yf,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PA=Ht(kA),CA=Se({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oy=Ht(CA),xA=Se({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yf}),NA=Ht(xA),bA=Se({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),DA=Ht(bA),OA=Se({},Ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LA=Ht(OA),VA=[9,13,27,32],Xf=$n&&"CompositionEvent"in window,Uo=null;$n&&"documentMode"in document&&(Uo=document.documentMode);var MA=$n&&"TextEvent"in window&&!Uo,tw=$n&&(!Xf||Uo&&8<Uo&&11>=Uo),ay=String.fromCharCode(32),ly=!1;function nw(t,e){switch(t){case"keyup":return VA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function UA(t,e){switch(t){case"compositionend":return rw(e);case"keypress":return e.which!==32?null:(ly=!0,ay);case"textInput":return t=e.data,t===ay&&ly?null:t;default:return null}}function FA(t,e){if(Xi)return t==="compositionend"||!Xf&&nw(t,e)?(t=ew(),Ml=Kf=Er=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tw&&e.locale!=="ko"?null:e.data;default:return null}}var jA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jA[t.type]:e==="textarea"}function iw(t,e,n,r){L0(r),e=hu(e,"onChange"),0<e.length&&(n=new Qf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fo=null,oa=null;function BA(t){mw(t,0)}function Zu(t){var e=es(t);if(P0(e))return t}function zA(t,e){if(t==="change")return e}var sw=!1;if($n){var Ah;if($n){var Rh="oninput"in document;if(!Rh){var cy=document.createElement("div");cy.setAttribute("oninput","return;"),Rh=typeof cy.oninput=="function"}Ah=Rh}else Ah=!1;sw=Ah&&(!document.documentMode||9<document.documentMode)}function hy(){Fo&&(Fo.detachEvent("onpropertychange",ow),oa=Fo=null)}function ow(t){if(t.propertyName==="value"&&Zu(oa)){var e=[];iw(e,oa,t,$f(t)),F0(BA,e)}}function $A(t,e,n){t==="focusin"?(hy(),Fo=e,oa=n,Fo.attachEvent("onpropertychange",ow)):t==="focusout"&&hy()}function WA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zu(oa)}function HA(t,e){if(t==="click")return Zu(e)}function qA(t,e){if(t==="input"||t==="change")return Zu(e)}function GA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:GA;function aa(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hd.call(e,i)||!fn(t[i],e[i]))return!1}return!0}function dy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fy(t,e){var n=dy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dy(n)}}function aw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lw(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KA(t){var e=lw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&aw(n.ownerDocument.documentElement,n)){if(r!==null&&Jf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fy(n,s);var o=fy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QA=$n&&"documentMode"in document&&11>=document.documentMode,Ji=null,xd=null,jo=null,Nd=!1;function py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Ji==null||Ji!==iu(r)||(r=Ji,"selectionStart"in r&&Jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&aa(jo,r)||(jo=r,r=hu(xd,"onSelect"),0<r.length&&(e=new Qf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},kh={},uw={};$n&&(uw=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function ec(t){if(kh[t])return kh[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uw)return kh[t]=e[n];return t}var cw=ec("animationend"),hw=ec("animationiteration"),dw=ec("animationstart"),fw=ec("transitionend"),pw=new Map,my="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){pw.set(t,e),Oi(e,[t])}for(var Ph=0;Ph<my.length;Ph++){var Ch=my[Ph],YA=Ch.toLowerCase(),XA=Ch[0].toUpperCase()+Ch.slice(1);Yr(YA,"on"+XA)}Yr(cw,"onAnimationEnd");Yr(hw,"onAnimationIteration");Yr(dw,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(fw,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function gy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YS(r,e,void 0,t),t.currentTarget=null}function mw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;gy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;gy(i,l,c),s=u}}}if(ou)throw t=Rd,ou=!1,Rd=null,t}function ye(t,e){var n=e[Vd];n===void 0&&(n=e[Vd]=new Set);var r=t+"__bubble";n.has(r)||(gw(e,t,2,!1),n.add(r))}function xh(t,e,n){var r=0;e&&(r|=4),gw(n,t,r,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[gl]){t[gl]=!0,I0.forEach(function(n){n!=="selectionchange"&&(JA.has(n)||xh(n,!1,t),xh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,xh("selectionchange",!1,e))}}function gw(t,e,n,r){switch(Z0(e)){case 1:var i=dA;break;case 4:i=fA;break;default:i=Gf}n=i.bind(null,e,n,t),i=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=fi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}F0(function(){var c=s,d=$f(n),f=[];e:{var m=pw.get(t);if(m!==void 0){var I=Qf,x=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":I=PA;break;case"focusin":x="focus",I=Sh;break;case"focusout":x="blur",I=Sh;break;case"beforeblur":case"afterblur":I=Sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=gA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=NA;break;case cw:case hw:case dw:I=vA;break;case fw:I=DA;break;case"scroll":I=pA;break;case"wheel":I=LA;break;case"copy":case"cut":case"paste":I=EA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=oy}var P=(e&4)!==0,N=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,S;v!==null;){S=v;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,w!==null&&(O=na(v,w),O!=null&&P.push(ua(v,O,S)))),N)break;v=v.return}0<P.length&&(m=new I(m,x,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Id&&(x=n.relatedTarget||n.fromElement)&&(fi(x)||x[Wn]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=c,x=x?fi(x):null,x!==null&&(N=Li(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=c),I!==x)){if(P=iy,O="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=oy,O="onPointerLeave",w="onPointerEnter",v="pointer"),N=I==null?m:es(I),S=x==null?m:es(x),m=new P(O,v+"leave",I,n,d),m.target=N,m.relatedTarget=S,O=null,fi(d)===c&&(P=new P(w,v+"enter",x,n,d),P.target=S,P.relatedTarget=N,O=P),N=O,I&&x)t:{for(P=I,w=x,v=0,S=P;S;S=Wi(S))v++;for(S=0,O=w;O;O=Wi(O))S++;for(;0<v-S;)P=Wi(P),v--;for(;0<S-v;)w=Wi(w),S--;for(;v--;){if(P===w||w!==null&&P===w.alternate)break t;P=Wi(P),w=Wi(w)}P=null}else P=null;I!==null&&yy(f,m,I,P,!1),x!==null&&N!==null&&yy(f,N,x,P,!0)}}e:{if(m=c?es(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var U=zA;else if(uy(m))if(sw)U=qA;else{U=WA;var j=$A}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=HA);if(U&&(U=U(t,c))){iw(f,U,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&_d(m,"number",m.value)}switch(j=c?es(c):window,t){case"focusin":(uy(j)||j.contentEditable==="true")&&(Ji=j,xd=c,jo=null);break;case"focusout":jo=xd=Ji=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,py(f,n,d);break;case"selectionchange":if(QA)break;case"keydown":case"keyup":py(f,n,d)}var T;if(Xf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Xi?nw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(tw&&n.locale!=="ko"&&(Xi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Xi&&(T=ew()):(Er=d,Kf="value"in Er?Er.value:Er.textContent,Xi=!0)),j=hu(c,y),0<j.length&&(y=new sy(y,t,null,n,d),f.push({event:y,listeners:j}),T?y.data=T:(T=rw(n),T!==null&&(y.data=T)))),(T=MA?UA(t,n):FA(t,n))&&(c=hu(c,"onBeforeInput"),0<c.length&&(d=new sy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}mw(f,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=na(t,n),s!=null&&r.unshift(ua(t,s,i)),s=na(t,e),s!=null&&r.push(ua(t,s,i))),t=t.return}return r}function Wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=na(n,s),u!=null&&o.unshift(ua(n,u,l))):i||(u=na(n,s),u!=null&&o.push(ua(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZA=/\r\n?/g,eR=/\u0000|\uFFFD/g;function _y(t){return(typeof t=="string"?t:""+t).replace(ZA,`
`).replace(eR,"")}function yl(t,e,n){if(e=_y(e),_y(t)!==e&&n)throw Error(F(425))}function du(){}var bd=null,Dd=null;function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,tR=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,nR=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(t){return vy.resolve(null).then(t).catch(rR)}:Ld;function rR(t){setTimeout(function(){throw t})}function bh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sa(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),wn="__reactFiber$"+Ms,ca="__reactProps$"+Ms,Wn="__reactContainer$"+Ms,Vd="__reactEvents$"+Ms,iR="__reactListeners$"+Ms,sR="__reactHandles$"+Ms;function fi(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wy(t);t!==null;){if(n=t[wn])return n;t=wy(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[wn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function tc(t){return t[ca]||null}var Md=[],ts=-1;function Xr(t){return{current:t}}function ve(t){0>ts||(t.current=Md[ts],Md[ts]=null,ts--)}function me(t,e){ts++,Md[ts]=t.current,t.current=e}var Br={},mt=Xr(Br),Nt=Xr(!1),Ti=Br;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function fu(){ve(Nt),ve(mt)}function Ey(t,e,n){if(mt.current!==Br)throw Error(F(168));me(mt,e),me(Nt,n)}function yw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,$S(t)||"Unknown",i));return Se({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,Ti=mt.current,me(mt,t),me(Nt,Nt.current),!0}function Ty(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=yw(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,ve(Nt),ve(mt),me(mt,t)):ve(Nt),me(Nt,n)}var Vn=null,nc=!1,Dh=!1;function _w(t){Vn===null?Vn=[t]:Vn.push(t)}function oR(t){nc=!0,_w(t)}function Jr(){if(!Dh&&Vn!==null){Dh=!0;var t=0,e=ce;try{var n=Vn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,nc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),$0(Wf,Jr),i}finally{ce=e,Dh=!1}}return null}var ns=[],rs=0,mu=null,gu=0,Kt=[],Qt=0,Ii=null,Mn=1,Un="";function ci(t,e){ns[rs++]=gu,ns[rs++]=mu,mu=t,gu=e}function vw(t,e,n){Kt[Qt++]=Mn,Kt[Qt++]=Un,Kt[Qt++]=Ii,Ii=t;var r=Mn;t=Un;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-cn(e)+i|n<<i|r,Un=s+t}else Mn=1<<s|n<<i|r,Un=t}function Zf(t){t.return!==null&&(ci(t,1),vw(t,1,0))}function ep(t){for(;t===mu;)mu=ns[--rs],ns[rs]=null,gu=ns[--rs],ns[rs]=null;for(;t===Ii;)Ii=Kt[--Qt],Kt[Qt]=null,Un=Kt[--Qt],Kt[Qt]=null,Mn=Kt[--Qt],Kt[Qt]=null}var zt=null,Ft=null,we=!1,ln=null;function ww(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Ft=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ii!==null?{id:Mn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Ft=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fd(t){if(we){var e=Ft;if(e){var n=e;if(!Iy(t,e)){if(Ud(t))throw Error(F(418));e=Cr(n.nextSibling);var r=zt;e&&Iy(t,e)?ww(r,n):(t.flags=t.flags&-4097|2,we=!1,zt=t)}}else{if(Ud(t))throw Error(F(418));t.flags=t.flags&-4097|2,we=!1,zt=t}}}function Sy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function _l(t){if(t!==zt)return!1;if(!we)return Sy(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Od(t.type,t.memoizedProps)),e&&(e=Ft)){if(Ud(t))throw Ew(),Error(F(418));for(;e;)ww(t,e),e=Cr(e.nextSibling)}if(Sy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=zt?Cr(t.stateNode.nextSibling):null;return!0}function Ew(){for(var t=Ft;t;)t=Cr(t.nextSibling)}function Is(){Ft=zt=null,we=!1}function tp(t){ln===null?ln=[t]:ln.push(t)}var aR=er.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ay(t){var e=t._init;return e(t._payload)}function Tw(t){function e(w,v){if(t){var S=w.deletions;S===null?(w.deletions=[v],w.flags|=16):S.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Dr(w,v),w.index=0,w.sibling=null,w}function s(w,v,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<v?(w.flags|=2,v):S):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,S,O){return v===null||v.tag!==6?(v=jh(S,w.mode,O),v.return=w,v):(v=i(v,S),v.return=w,v)}function u(w,v,S,O){var U=S.type;return U===Yi?d(w,v,S.props.children,O,S.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===dr&&Ay(U)===v.type)?(O=i(v,S.props),O.ref=vo(w,v,S),O.return=w,O):(O=Hl(S.type,S.key,S.props,null,w.mode,O),O.ref=vo(w,v,S),O.return=w,O)}function c(w,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Bh(S,w.mode,O),v.return=w,v):(v=i(v,S.children||[]),v.return=w,v)}function d(w,v,S,O,U){return v===null||v.tag!==7?(v=_i(S,w.mode,O,U),v.return=w,v):(v=i(v,S),v.return=w,v)}function f(w,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=jh(""+v,w.mode,S),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ll:return S=Hl(v.type,v.key,v.props,null,w.mode,S),S.ref=vo(w,null,v),S.return=w,S;case Qi:return v=Bh(v,w.mode,S),v.return=w,v;case dr:var O=v._init;return f(w,O(v._payload),S)}if(Ro(v)||po(v))return v=_i(v,w.mode,S,null),v.return=w,v;vl(w,v)}return null}function m(w,v,S,O){var U=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(w,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ll:return S.key===U?u(w,v,S,O):null;case Qi:return S.key===U?c(w,v,S,O):null;case dr:return U=S._init,m(w,v,U(S._payload),O)}if(Ro(S)||po(S))return U!==null?null:d(w,v,S,O,null);vl(w,S)}return null}function I(w,v,S,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(S)||null,l(v,w,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ll:return w=w.get(O.key===null?S:O.key)||null,u(v,w,O,U);case Qi:return w=w.get(O.key===null?S:O.key)||null,c(v,w,O,U);case dr:var j=O._init;return I(w,v,S,j(O._payload),U)}if(Ro(O)||po(O))return w=w.get(S)||null,d(v,w,O,U,null);vl(v,O)}return null}function x(w,v,S,O){for(var U=null,j=null,T=v,y=v=0,E=null;T!==null&&y<S.length;y++){T.index>y?(E=T,T=null):E=T.sibling;var A=m(w,T,S[y],O);if(A===null){T===null&&(T=E);break}t&&T&&A.alternate===null&&e(w,T),v=s(A,v,y),j===null?U=A:j.sibling=A,j=A,T=E}if(y===S.length)return n(w,T),we&&ci(w,y),U;if(T===null){for(;y<S.length;y++)T=f(w,S[y],O),T!==null&&(v=s(T,v,y),j===null?U=T:j.sibling=T,j=T);return we&&ci(w,y),U}for(T=r(w,T);y<S.length;y++)E=I(T,w,y,S[y],O),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?y:E.key),v=s(E,v,y),j===null?U=E:j.sibling=E,j=E);return t&&T.forEach(function(R){return e(w,R)}),we&&ci(w,y),U}function P(w,v,S,O){var U=po(S);if(typeof U!="function")throw Error(F(150));if(S=U.call(S),S==null)throw Error(F(151));for(var j=U=null,T=v,y=v=0,E=null,A=S.next();T!==null&&!A.done;y++,A=S.next()){T.index>y?(E=T,T=null):E=T.sibling;var R=m(w,T,A.value,O);if(R===null){T===null&&(T=E);break}t&&T&&R.alternate===null&&e(w,T),v=s(R,v,y),j===null?U=R:j.sibling=R,j=R,T=E}if(A.done)return n(w,T),we&&ci(w,y),U;if(T===null){for(;!A.done;y++,A=S.next())A=f(w,A.value,O),A!==null&&(v=s(A,v,y),j===null?U=A:j.sibling=A,j=A);return we&&ci(w,y),U}for(T=r(w,T);!A.done;y++,A=S.next())A=I(T,w,y,A.value,O),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?y:A.key),v=s(A,v,y),j===null?U=A:j.sibling=A,j=A);return t&&T.forEach(function(k){return e(w,k)}),we&&ci(w,y),U}function N(w,v,S,O){if(typeof S=="object"&&S!==null&&S.type===Yi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ll:e:{for(var U=S.key,j=v;j!==null;){if(j.key===U){if(U=S.type,U===Yi){if(j.tag===7){n(w,j.sibling),v=i(j,S.props.children),v.return=w,w=v;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===dr&&Ay(U)===j.type){n(w,j.sibling),v=i(j,S.props),v.ref=vo(w,j,S),v.return=w,w=v;break e}n(w,j);break}else e(w,j);j=j.sibling}S.type===Yi?(v=_i(S.props.children,w.mode,O,S.key),v.return=w,w=v):(O=Hl(S.type,S.key,S.props,null,w.mode,O),O.ref=vo(w,v,S),O.return=w,w=O)}return o(w);case Qi:e:{for(j=S.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(w,v.sibling),v=i(v,S.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Bh(S,w.mode,O),v.return=w,w=v}return o(w);case dr:return j=S._init,N(w,v,j(S._payload),O)}if(Ro(S))return x(w,v,S,O);if(po(S))return P(w,v,S,O);vl(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,S),v.return=w,w=v):(n(w,v),v=jh(S,w.mode,O),v.return=w,w=v),o(w)):n(w,v)}return N}var Ss=Tw(!0),Iw=Tw(!1),yu=Xr(null),_u=null,is=null,np=null;function rp(){np=is=_u=null}function ip(t){var e=yu.current;ve(yu),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){_u=t,np=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(np!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(_u===null)throw Error(F(308));is=t,_u.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var pi=null;function sp(t){pi===null?pi=[t]:pi.push(t)}function Sw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Aw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Hn(t,n)}return i=r.interleaved,i===null?(e.next=e,sp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Hn(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hf(t,n)}}function Ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(m=e,I=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){f=x.call(I,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,m=typeof x=="function"?x.call(I,f,m):x,m==null)break e;f=Se({},f,m);break e;case 2:fr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=f):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=f}}function ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var La={},An=Xr(La),ha=Xr(La),da=Xr(La);function mi(t){if(t===La)throw Error(F(174));return t}function ap(t,e){switch(me(da,e),me(ha,t),me(An,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wd(e,t)}ve(An),me(An,e)}function As(){ve(An),ve(ha),ve(da)}function Rw(t){mi(da.current);var e=mi(An.current),n=wd(e,t.type);e!==n&&(me(ha,t),me(An,n))}function lp(t){ha.current===t&&(ve(An),ve(ha))}var Te=Xr(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oh=[];function up(){for(var t=0;t<Oh.length;t++)Oh[t]._workInProgressVersionPrimary=null;Oh.length=0}var jl=er.ReactCurrentDispatcher,Lh=er.ReactCurrentBatchConfig,Si=0,Ie=null,He=null,Ze=null,Eu=!1,Bo=!1,fa=0,lR=0;function ut(){throw Error(F(321))}function cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function hp(t,e,n,r,i,s){if(Si=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?dR:fR,t=n(r,i),Bo){s=0;do{if(Bo=!1,fa=0,25<=s)throw Error(F(301));s+=1,Ze=He=null,e.updateQueue=null,jl.current=pR,t=n(r,i)}while(Bo)}if(jl.current=Tu,e=He!==null&&He.next!==null,Si=0,Ze=He=Ie=null,Eu=!1,e)throw Error(F(300));return t}function dp(){var t=fa!==0;return fa=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ie.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function tn(){if(He===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ze===null?Ie.memoizedState:Ze.next;if(e!==null)Ze=e,He=t;else{if(t===null)throw Error(F(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ze===null?Ie.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function pa(t,e){return typeof e=="function"?e(t):e}function Vh(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Si&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Ie.lanes|=d,Ai|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,fn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mh(t){var e=tn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);fn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kw(){}function Pw(t,e){var n=Ie,r=tn(),i=e(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,fp(Nw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,ma(9,xw.bind(null,n,r,i,e),void 0,null),et===null)throw Error(F(349));Si&30||Cw(n,e,i)}return i}function Cw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xw(t,e,n,r){e.value=n,e.getSnapshot=r,bw(e)&&Dw(t)}function Nw(t,e,n){return n(function(){bw(e)&&Dw(t)})}function bw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function Dw(t){var e=Hn(t,1);e!==null&&hn(e,t,1,-1)}function Py(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=hR.bind(null,Ie,t),[e.memoizedState,t]}function ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ow(){return tn().memoizedState}function Bl(t,e,n,r){var i=_n();Ie.flags|=t,i.memoizedState=ma(1|e,n,void 0,r===void 0?null:r)}function rc(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&cp(r,o.deps)){i.memoizedState=ma(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=ma(1|e,n,s,r)}function Cy(t,e){return Bl(8390656,8,t,e)}function fp(t,e){return rc(2048,8,t,e)}function Lw(t,e){return rc(4,2,t,e)}function Vw(t,e){return rc(4,4,t,e)}function Mw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uw(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,Mw.bind(null,e,t),n)}function pp(){}function Fw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bw(t,e,n){return Si&21?(fn(n,e)||(n=q0(),Ie.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function uR(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Lh.transition;Lh.transition={};try{t(!1),e()}finally{ce=n,Lh.transition=r}}function zw(){return tn().memoizedState}function cR(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$w(t))Ww(e,n);else if(n=Sw(t,e,n,r),n!==null){var i=Tt();hn(n,t,r,i),Hw(n,e,r)}}function hR(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($w(t))Ww(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,o)){var u=e.interleaved;u===null?(i.next=i,sp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Sw(t,e,i,r),n!==null&&(i=Tt(),hn(n,t,r,i),Hw(n,e,r))}}function $w(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function Ww(t,e){Bo=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hf(t,n)}}var Tu={readContext:en,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},dR={readContext:en,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,Mw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cR.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:Py,useDebugValue:pp,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=Py(!1),e=t[0];return t=uR.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=_n();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),et===null)throw Error(F(349));Si&30||Cw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cy(Nw.bind(null,r,s,t),[t]),r.flags|=2048,ma(9,xw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=et.identifierPrefix;if(we){var n=Un,r=Mn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fR={readContext:en,useCallback:Fw,useContext:en,useEffect:fp,useImperativeHandle:Uw,useInsertionEffect:Lw,useLayoutEffect:Vw,useMemo:jw,useReducer:Vh,useRef:Ow,useState:function(){return Vh(pa)},useDebugValue:pp,useDeferredValue:function(t){var e=tn();return Bw(e,He.memoizedState,t)},useTransition:function(){var t=Vh(pa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:kw,useSyncExternalStore:Pw,useId:zw,unstable_isNewReconciler:!1},pR={readContext:en,useCallback:Fw,useContext:en,useEffect:fp,useImperativeHandle:Uw,useInsertionEffect:Lw,useLayoutEffect:Vw,useMemo:jw,useReducer:Mh,useRef:Ow,useState:function(){return Mh(pa)},useDebugValue:pp,useDeferredValue:function(t){var e=tn();return He===null?e.memoizedState=t:Bw(e,He.memoizedState,t)},useTransition:function(){var t=Mh(pa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:kw,useSyncExternalStore:Pw,useId:zw,unstable_isNewReconciler:!1};function on(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=br(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(hn(e,t,i,r),Fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=br(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(hn(e,t,i,r),Fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=br(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,r),e!==null&&(hn(e,t,r,n),Fl(e,t,r))}};function xy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,r)||!aa(i,s):!0}function qw(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=bt(e)?Ti:mt.current,r=e.contextTypes,s=(r=r!=null)?Ts(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function zd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},op(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=bt(e)?Ti:mt.current,i.context=Ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ic.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",r=e;do n+=zS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mR=typeof WeakMap=="function"?WeakMap:Map;function Gw(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,Zd=r),$d(t,e)},n}function Kw(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$d(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function by(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CR.bind(null,t,e,n),e.then(t,t))}function Dy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Oy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var gR=er.ReactCurrentOwner,xt=!1;function Et(t,e,n,r){e.child=t===null?Iw(e,null,n,r):Ss(e,t.child,n,r)}function Ly(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=hp(t,e,n,r,s,i),n=dp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(we&&n&&Zf(e),e.flags|=1,Et(t,e,r,i),e.child)}function Vy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qw(t,e,s,r,i)):(t=Hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Qw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(aa(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Wd(t,e,n,r,i)}function Yw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(os,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(os,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(os,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(os,Ut),Ut|=r;return Et(t,e,i,n),e.child}function Xw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wd(t,e,n,r,i){var s=bt(n)?Ti:mt.current;return s=Ts(e,s),hs(e,i),n=hp(t,e,n,r,s,i),r=dp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(we&&r&&Zf(e),e.flags|=1,Et(t,e,n,i),e.child)}function My(t,e,n,r,i){if(bt(n)){var s=!0;pu(e)}else s=!1;if(hs(e,i),e.stateNode===null)zl(t,e),qw(e,n,r),zd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=bt(n)?Ti:mt.current,c=Ts(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ny(e,o,r,c),fr=!1;var m=e.memoizedState;o.state=m,vu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Nt.current||fr?(typeof d=="function"&&(Bd(e,n,d,r),u=e.memoizedState),(l=fr||xy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Aw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:on(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=bt(n)?Ti:mt.current,u=Ts(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Ny(e,o,r,u),fr=!1,m=e.memoizedState,o.state=m,vu(e,r,o,i);var x=e.memoizedState;l!==f||m!==x||Nt.current||fr?(typeof I=="function"&&(Bd(e,n,I,r),x=e.memoizedState),(c=fr||xy(e,n,c,r,m,x,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Hd(t,e,n,r,s,i)}function Hd(t,e,n,r,i,s){Xw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ty(e,n,!1),qn(t,e,s);r=e.stateNode,gR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,l,s)):Et(t,e,l,s),e.memoizedState=r.state,i&&Ty(e,n,!0),e.child}function Jw(t){var e=t.stateNode;e.pendingContext?Ey(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ey(t,e.context,!1),ap(t,e.containerInfo)}function Uy(t,e,n,r,i){return Is(),tp(i),e.flags|=256,Et(t,e,n,r),e.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zw(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Te,i&1),t===null)return Fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ac(o,r,0,null),t=_i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=qd,t):mp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Dr(l,s):(s=_i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qd,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mp(t,e){return e=ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,r){return r!==null&&tp(r),Ss(e,t.child,null,n),t=mp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uh(Error(F(422))),wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ac({mode:"visible",children:r.children},i,0,null),s=_i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=qd,s);if(!(e.mode&1))return wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Uh(s,r,void 0),wl(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hn(t,i),hn(r,t,i,-1))}return Ep(),r=Uh(Error(F(421))),wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Cr(i.nextSibling),zt=e,we=!0,ln=null,t!==null&&(Kt[Qt++]=Mn,Kt[Qt++]=Un,Kt[Qt++]=Ii,Mn=t.id,Un=t.overflow,Ii=e),e=mp(e,r.children),e.flags|=4096,e)}function Fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jd(t.return,e,n)}function Fh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,n,e);else if(t.tag===19)Fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fh(e,!0,n,null,s);break;case"together":Fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _R(t,e,n){switch(e.tag){case 3:Jw(e),Is();break;case 5:Rw(e);break;case 1:bt(e.type)&&pu(e);break;case 4:ap(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?Zw(t,e,n):(me(Te,Te.current&1),t=qn(t,e,n),t!==null?t.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return eE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,Yw(t,e,n)}return qn(t,e,n)}var tE,Kd,nE,rE;tE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kd=function(){};nE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi(An.current);var s=null;switch(n){case"input":i=gd(t,i),r=gd(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=vd(t,i),r=vd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=du)}Ed(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ea.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rE=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vR(t,e,n){var r=e.pendingProps;switch(ep(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return bt(e.type)&&fu(),ct(e),null;case 3:return r=e.stateNode,As(),ve(Nt),ve(mt),up(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ln!==null&&(nf(ln),ln=null))),Kd(t,e),ct(e),null;case 5:lp(e);var i=mi(da.current);if(n=e.type,t!==null&&e.stateNode!=null)nE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ct(e),null}if(t=mi(An.current),_l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[ca]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)ye(Po[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Kg(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Yg(r,s),ye("invalid",r)}Ed(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,l,t),i=["children",""+l]):ea.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":ul(r),Qg(r,s,!0);break;case"textarea":ul(r),Xg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=du)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[ca]=r,tE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Td(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)ye(Po[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Kg(t,r),i=gd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Yg(t,r),i=vd(t,r),ye("invalid",t);break;default:i=r}Ed(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?O0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&b0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ta(t,u):typeof u=="number"&&ta(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&Ff(t,s,u,o))}switch(n){case"input":ul(t),Qg(t,r,!1);break;case"textarea":ul(t),Xg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?as(t,!!r.multiple,s,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)rE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=mi(da.current),mi(An.current),_l(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return ct(e),null;case 13:if(ve(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Ft!==null&&e.mode&1&&!(e.flags&128))Ew(),Is(),e.flags|=98560,s=!1;else if(s=_l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[wn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else ln!==null&&(nf(ln),ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Ge===0&&(Ge=3):Ep())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return As(),Kd(t,e),t===null&&la(e.stateNode.containerInfo),ct(e),null;case 10:return ip(e.type._context),ct(e),null;case 17:return bt(e.type)&&fu(),ct(e),null;case 19:if(ve(Te),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wo(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wu(t),o!==null){for(e.flags|=128,wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>ks&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return ct(e),null}else 2*De()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return wp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function wR(t,e){switch(ep(e),e.tag){case 1:return bt(e.type)&&fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),ve(Nt),ve(mt),up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lp(e),null;case 13:if(ve(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Te),null;case 4:return As(),null;case 10:return ip(e.type._context),null;case 22:case 23:return wp(),null;case 24:return null;default:return null}}var El=!1,ft=!1,ER=typeof WeakSet=="function"?WeakSet:Set,q=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Qd(t,e,n){try{n()}catch(r){ke(t,e,r)}}var jy=!1;function TR(t,e){if(bd=uu,t=lw(),Jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var I;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(I=f.firstChild)!==null;)m=f,f=I;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dd={focusedElem:t,selectionRange:n},uu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,N=x.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:on(e.type,P),N);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){ke(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return x=jy,jy=!1,x}function zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qd(e,n,s)}i=i.next}while(i!==r)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iE(t){var e=t.alternate;e!==null&&(t.alternate=null,iE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[ca],delete e[Vd],delete e[iR],delete e[sR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sE(t){return t.tag===5||t.tag===3||t.tag===4}function By(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=du));else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function Jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}var nt=null,an=!1;function cr(t,e,n){for(n=n.child;n!==null;)oE(t,e,n),n=n.sibling}function oE(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Xu,n)}catch{}switch(n.tag){case 5:ft||ss(n,e);case 6:var r=nt,i=an;nt=null,cr(t,e,n),nt=r,an=i,nt!==null&&(an?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(an?(t=nt,n=n.stateNode,t.nodeType===8?bh(t.parentNode,n):t.nodeType===1&&bh(t,n),sa(t)):bh(nt,n.stateNode));break;case 4:r=nt,i=an,nt=n.stateNode.containerInfo,an=!0,cr(t,e,n),nt=r,an=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qd(n,e,o),i=i.next}while(i!==r)}cr(t,e,n);break;case 1:if(!ft&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,cr(t,e,n),ft=r):cr(t,e,n);break;default:cr(t,e,n)}}function zy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ER),e.forEach(function(r){var i=NR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,an=!1;break e;case 3:nt=l.stateNode.containerInfo,an=!0;break e;case 4:nt=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(nt===null)throw Error(F(160));oE(s,o,i),nt=null,an=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aE(e,t),e=e.sibling}function aE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),yn(t),r&4){try{zo(3,t,t.return),sc(3,t)}catch(P){ke(t,t.return,P)}try{zo(5,t,t.return)}catch(P){ke(t,t.return,P)}}break;case 1:sn(e,t),yn(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(sn(e,t),yn(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{ta(i,"")}catch(P){ke(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&C0(i,s),Td(l,o);var c=Td(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?O0(i,f):d==="dangerouslySetInnerHTML"?b0(i,f):d==="children"?ta(i,f):Ff(i,d,f,c)}switch(l){case"input":yd(i,s);break;case"textarea":x0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?as(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?as(i,!!s.multiple,s.defaultValue,!0):as(i,!!s.multiple,s.multiple?[]:"",!1))}i[ca]=s}catch(P){ke(t,t.return,P)}}break;case 6:if(sn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){ke(t,t.return,P)}}break;case 3:if(sn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(P){ke(t,t.return,P)}break;case 4:sn(e,t),yn(t);break;case 13:sn(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_p=De())),r&4&&zy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||d,sn(e,t),ft=c):sn(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,I=m.child,m.tag){case 0:case 11:case 14:case 15:zo(4,m,m.return);break;case 1:ss(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){ke(r,n,P)}}break;case 5:ss(m,m.return);break;case 22:if(m.memoizedState!==null){Wy(f);continue}}I!==null?(I.return=m,q=I):Wy(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=D0("display",o))}catch(P){ke(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){ke(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:sn(e,t),yn(t),r&4&&zy(t);break;case 21:break;default:sn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var s=By(t);Jd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=By(t);Xd(t,l,o);break;default:throw Error(F(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IR(t,e,n){q=t,lE(t)}function lE(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||El;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=El;var c=ft;if(El=o,(ft=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Hy(i):u!==null?(u.return=o,q=u):Hy(i);for(;s!==null;)q=s,lE(s),s=s.sibling;q=i,El=l,ft=c}$y(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):$y(t)}}function $y(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||sc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ky(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ky(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ft||e.flags&512&&Yd(e)}catch(m){ke(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Wy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Hy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{Yd(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{Yd(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var SR=Math.ceil,Iu=er.ReactCurrentDispatcher,gp=er.ReactCurrentOwner,Jt=er.ReactCurrentBatchConfig,le=0,et=null,Ue=null,st=0,Ut=0,os=Xr(0),Ge=0,ga=null,Ai=0,oc=0,yp=0,$o=null,Pt=null,_p=0,ks=1/0,Ln=null,Su=!1,Zd=null,Nr=null,Tl=!1,Tr=null,Au=0,Wo=0,ef=null,$l=-1,Wl=0;function Tt(){return le&6?De():$l!==-1?$l:$l=De()}function br(t){return t.mode&1?le&2&&st!==0?st&-st:aR.transition!==null?(Wl===0&&(Wl=q0()),Wl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Z0(t.type)),t):1}function hn(t,e,n,r){if(50<Wo)throw Wo=0,ef=null,Error(F(185));ba(t,n,r),(!(le&2)||t!==et)&&(t===et&&(!(le&2)&&(oc|=n),Ge===4&&mr(t,st)),Dt(t,r),n===1&&le===0&&!(e.mode&1)&&(ks=De()+500,nc&&Jr()))}function Dt(t,e){var n=t.callbackNode;aA(t,e);var r=lu(t,t===et?st:0);if(r===0)n!==null&&ey(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ey(n),e===1)t.tag===0?oR(qy.bind(null,t)):_w(qy.bind(null,t)),nR(function(){!(le&6)&&Jr()}),n=null;else{switch(G0(r)){case 1:n=Wf;break;case 4:n=W0;break;case 16:n=au;break;case 536870912:n=H0;break;default:n=au}n=gE(n,uE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uE(t,e){if($l=-1,Wl=0,le&6)throw Error(F(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=lu(t,t===et?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ru(t,r);else{e=r;var i=le;le|=2;var s=hE();(et!==t||st!==e)&&(Ln=null,ks=De()+500,yi(t,e));do try{kR();break}catch(l){cE(t,l)}while(1);rp(),Iu.current=s,le=i,Ue!==null?e=0:(et=null,st=0,e=Ge)}if(e!==0){if(e===2&&(i=kd(t),i!==0&&(r=i,e=tf(t,i))),e===1)throw n=ga,yi(t,0),mr(t,r),Dt(t,De()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!AR(i)&&(e=Ru(t,r),e===2&&(s=kd(t),s!==0&&(r=s,e=tf(t,s))),e===1))throw n=ga,yi(t,0),mr(t,r),Dt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:hi(t,Pt,Ln);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=_p+500-De(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ld(hi.bind(null,t,Pt,Ln),e);break}hi(t,Pt,Ln);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SR(r/1960))-r,10<r){t.timeoutHandle=Ld(hi.bind(null,t,Pt,Ln),r);break}hi(t,Pt,Ln);break;case 5:hi(t,Pt,Ln);break;default:throw Error(F(329))}}}return Dt(t,De()),t.callbackNode===n?uE.bind(null,t):null}function tf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&nf(e)),t}function nf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function AR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~yp,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function qy(t){if(le&6)throw Error(F(327));ds();var e=lu(t,0);if(!(e&1))return Dt(t,De()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var r=kd(t);r!==0&&(e=r,n=tf(t,r))}if(n===1)throw n=ga,yi(t,0),mr(t,e),Dt(t,De()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Pt,Ln),Dt(t,De()),null}function vp(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ks=De()+500,nc&&Jr())}}function Ri(t){Tr!==null&&Tr.tag===0&&!(le&6)&&ds();var e=le;le|=1;var n=Jt.transition,r=ce;try{if(Jt.transition=null,ce=1,t)return t()}finally{ce=r,Jt.transition=n,le=e,!(le&6)&&Jr()}}function wp(){Ut=os.current,ve(os)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tR(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(ep(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fu();break;case 3:As(),ve(Nt),ve(mt),up();break;case 5:lp(r);break;case 4:As();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:ip(r.type._context);break;case 22:case 23:wp()}n=n.return}if(et=t,Ue=t=Dr(t.current,null),st=Ut=e,Ge=0,ga=null,yp=oc=Ai=0,Pt=$o=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function cE(t,e){do{var n=Ue;try{if(rp(),jl.current=Tu,Eu){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(Si=0,Ze=He=Ie=null,Bo=!1,fa=0,gp.current=null,n===null||n.return===null){Ge=1,ga=e,Ue=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=Dy(o);if(I!==null){I.flags&=-257,Oy(I,o,l,s,e),I.mode&1&&by(s,c,e),e=I,u=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){by(s,c,e),Ep();break e}u=Error(F(426))}}else if(we&&l.mode&1){var N=Dy(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Oy(N,o,l,s,e),tp(Rs(u,l));break e}}s=u=Rs(u,l),Ge!==4&&(Ge=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Gw(s,u,e);Ry(s,w);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Nr===null||!Nr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Kw(s,l,e);Ry(s,O);break e}}s=s.return}while(s!==null)}fE(n)}catch(U){e=U,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function hE(){var t=Iu.current;return Iu.current=Tu,t===null?Tu:t}function Ep(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(Ai&268435455)&&!(oc&268435455)||mr(et,st)}function Ru(t,e){var n=le;le|=2;var r=hE();(et!==t||st!==e)&&(Ln=null,yi(t,e));do try{RR();break}catch(i){cE(t,i)}while(1);if(rp(),le=n,Iu.current=r,Ue!==null)throw Error(F(261));return et=null,st=0,Ge}function RR(){for(;Ue!==null;)dE(Ue)}function kR(){for(;Ue!==null&&!JS();)dE(Ue)}function dE(t){var e=mE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?fE(t):Ue=e,gp.current=null}function fE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wR(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Ue=null;return}}else if(n=vR(n,e,Ut),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);Ge===0&&(Ge=5)}function hi(t,e,n){var r=ce,i=Jt.transition;try{Jt.transition=null,ce=1,PR(t,e,n,r)}finally{Jt.transition=i,ce=r}return null}function PR(t,e,n,r){do ds();while(Tr!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lA(t,s),t===et&&(Ue=et=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tl||(Tl=!0,gE(au,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=ce;ce=1;var l=le;le|=4,gp.current=null,TR(t,n),aE(n,t),KA(Dd),uu=!!bd,Dd=bd=null,t.current=n,IR(n),ZS(),le=l,ce=o,Jt.transition=s}else t.current=n;if(Tl&&(Tl=!1,Tr=t,Au=i),s=t.pendingLanes,s===0&&(Nr=null),nA(n.stateNode),Dt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Su)throw Su=!1,t=Zd,Zd=null,t;return Au&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===ef?Wo++:(Wo=0,ef=t):Wo=0,Jr(),null}function ds(){if(Tr!==null){var t=G0(Au),e=Jt.transition,n=ce;try{if(Jt.transition=null,ce=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,Au=0,le&6)throw Error(F(331));var i=le;for(le|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:zo(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,I=d.return;if(iE(d),d===c){q=null;break}if(m!==null){m.return=I,q=m;break}q=I}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:sc(9,l)}}catch(U){ke(l,l.return,U)}if(l===o){q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,q=O;break e}q=l.return}}if(le=i,Jr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Xu,t)}catch{}r=!0}return r}finally{ce=n,Jt.transition=e}}return!1}function Gy(t,e,n){e=Rs(n,e),e=Gw(t,e,1),t=xr(t,e,1),e=Tt(),t!==null&&(ba(t,1,e),Dt(t,e))}function ke(t,e,n){if(t.tag===3)Gy(t,t,n);else for(;e!==null;){if(e.tag===3){Gy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Rs(n,t),t=Kw(e,t,1),e=xr(e,t,1),t=Tt(),e!==null&&(ba(e,1,t),Dt(e,t));break}}e=e.return}}function CR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(st&n)===n&&(Ge===4||Ge===3&&(st&130023424)===st&&500>De()-_p?yi(t,0):yp|=n),Dt(t,e)}function pE(t,e){e===0&&(t.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var n=Tt();t=Hn(t,e),t!==null&&(ba(t,e,n),Dt(t,n))}function xR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pE(t,n)}function NR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),pE(t,n)}var mE;mE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,_R(t,e,n);xt=!!(t.flags&131072)}else xt=!1,we&&e.flags&1048576&&vw(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zl(t,e),t=e.pendingProps;var i=Ts(e,mt.current);hs(e,n),i=hp(null,e,r,t,i,n);var s=dp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,op(e),i.updater=ic,e.stateNode=i,i._reactInternals=e,zd(e,r,t,n),e=Hd(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Zf(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DR(r),t=on(r,t),i){case 0:e=Wd(null,e,r,t,n);break e;case 1:e=My(null,e,r,t,n);break e;case 11:e=Ly(null,e,r,t,n);break e;case 14:e=Vy(null,e,r,on(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Wd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),My(t,e,r,i,n);case 3:e:{if(Jw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Aw(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Rs(Error(F(423)),e),e=Uy(t,e,r,n,i);break e}else if(r!==i){i=Rs(Error(F(424)),e),e=Uy(t,e,r,n,i);break e}else for(Ft=Cr(e.stateNode.containerInfo.firstChild),zt=e,we=!0,ln=null,n=Iw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),r===i){e=qn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Rw(e),t===null&&Fd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Od(r,i)?o=null:s!==null&&Od(r,s)&&(e.flags|=32),Xw(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Fd(e),null;case 13:return Zw(t,e,n);case 4:return ap(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Ly(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(yu,r._currentValue),r._currentValue=o,s!==null)if(fn(s.value,o)){if(s.children===i.children&&!Nt.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),jd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),jd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=en(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=on(r,e.pendingProps),i=on(r.type,i),Vy(t,e,r,i,n);case 15:return Qw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),zl(t,e),e.tag=1,bt(r)?(t=!0,pu(e)):t=!1,hs(e,n),qw(e,r,i),zd(e,r,i,n),Hd(null,e,r,!0,t,n);case 19:return eE(t,e,n);case 22:return Yw(t,e,n)}throw Error(F(156,e.tag))};function gE(t,e){return $0(t,e)}function bR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new bR(t,e,n,r)}function Tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DR(t){if(typeof t=="function")return Tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bf)return 11;if(t===zf)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return _i(n.children,i,s,e);case jf:o=8,i|=8;break;case dd:return t=Xt(12,n,e,i|2),t.elementType=dd,t.lanes=s,t;case fd:return t=Xt(13,n,e,i),t.elementType=fd,t.lanes=s,t;case pd:return t=Xt(19,n,e,i),t.elementType=pd,t.lanes=s,t;case R0:return ac(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S0:o=10;break e;case A0:o=9;break e;case Bf:o=11;break e;case zf:o=14;break e;case dr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _i(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function ac(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=R0,t.lanes=n,t.stateNode={isHidden:!1},t}function jh(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function Bh(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eh(0),this.expirationTimes=Eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ip(t,e,n,r,i,s,o,l,u){return t=new OR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},op(s),t}function LR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yE(t){if(!t)return Br;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(bt(n))return yw(t,n,e)}return e}function _E(t,e,n,r,i,s,o,l,u){return t=Ip(n,r,!0,t,i,s,o,l,u),t.context=yE(null),n=t.current,r=Tt(),i=br(n),s=Bn(r,i),s.callback=e??null,xr(n,s,i),t.current.lanes=i,ba(t,i,r),Dt(t,r),t}function lc(t,e,n,r){var i=e.current,s=Tt(),o=br(i);return n=yE(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(i,e,o),t!==null&&(hn(t,i,o,s),Fl(t,i,o)),o}function ku(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ky(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sp(t,e){Ky(t,e),(t=t.alternate)&&Ky(t,e)}function VR(){return null}var vE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ap(t){this._internalRoot=t}uc.prototype.render=Ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));lc(t,e,null,null)};uc.prototype.unmount=Ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){lc(null,t,null,null)}),e[Wn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Y0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&J0(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qy(){}function MR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ku(o);s.call(c)}}var o=_E(e,r,t,0,null,!1,!1,"",Qy);return t._reactRootContainer=o,t[Wn]=o.current,la(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ku(u);l.call(c)}}var u=Ip(t,0,!1,null,null,!1,!1,"",Qy);return t._reactRootContainer=u,t[Wn]=u.current,la(t.nodeType===8?t.parentNode:t),Ri(function(){lc(e,u,n,r)}),u}function hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ku(o);l.call(u)}}lc(e,o,t,i)}else o=MR(n,e,t,i,r);return ku(o)}K0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(Hf(e,n|1),Dt(e,De()),!(le&6)&&(ks=De()+500,Jr()))}break;case 13:Ri(function(){var r=Hn(t,1);if(r!==null){var i=Tt();hn(r,t,1,i)}}),Sp(t,1)}};qf=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=Tt();hn(e,t,134217728,n)}Sp(t,134217728)}};Q0=function(t){if(t.tag===13){var e=br(t),n=Hn(t,e);if(n!==null){var r=Tt();hn(n,t,e,r)}Sp(t,e)}};Y0=function(){return ce};X0=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Sd=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tc(r);if(!i)throw Error(F(90));P0(r),yd(r,i)}}}break;case"textarea":x0(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};M0=vp;U0=Ri;var UR={usingClientEntryPoint:!1,Events:[Oa,es,tc,L0,V0,vp]},Eo={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FR={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B0(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||VR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Xu=Il.inject(FR),Sn=Il}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UR;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(F(200));return LR(t,e,null,n)};Wt.createRoot=function(t,e){if(!Rp(t))throw Error(F(299));var n=!1,r="",i=vE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ip(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,la(t.nodeType===8?t.parentNode:t),new Ap(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=B0(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Ri(t)};Wt.hydrate=function(t,e,n){if(!cc(e))throw Error(F(200));return hc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_E(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,la(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uc(e)};Wt.render=function(t,e,n){if(!cc(e))throw Error(F(200));return hc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!cc(t))throw Error(F(40));return t._reactRootContainer?(Ri(function(){hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Wt.unstable_batchedUpdates=vp;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return hc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function wE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wE)}catch(t){console.error(t)}}wE(),w0.exports=Wt;var jR=w0.exports,Yy=jR;cd.createRoot=Yy.createRoot,cd.hydrateRoot=Yy.hydrateRoot;const BR="modulepreload",zR=function(t){return"/"+t},Xy={},ze=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=zR(s),s in Xy)return;Xy[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":BR,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ya.apply(this,arguments)}var Ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ir||(Ir={}));const Jy="popstate";function $R(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return rf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Pu(i)}return HR(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function WR(){return Math.random().toString(36).substr(2,8)}function Zy(t,e){return{usr:t.state,key:t.key,idx:e}}function rf(t,e,n,r){return n===void 0&&(n=null),ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:n,key:e&&e.key||r||WR()})}function Pu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function HR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Ir.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ya({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Ir.Pop;let N=d(),w=N==null?null:N-c;c=N,u&&u({action:l,location:P.location,delta:w})}function m(N,w){l=Ir.Push;let v=rf(P.location,N,w);n&&n(v,N),c=d()+1;let S=Zy(v,c),O=P.createHref(v);try{o.pushState(S,"",O)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(O)}s&&u&&u({action:l,location:P.location,delta:1})}function I(N,w){l=Ir.Replace;let v=rf(P.location,N,w);n&&n(v,N),c=d();let S=Zy(v,c),O=P.createHref(v);o.replaceState(S,"",O),s&&u&&u({action:l,location:P.location,delta:0})}function x(N){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof N=="string"?N:Pu(N);return v=v.replace(/ $/,"%20"),Oe(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let P={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Jy,f),u=N,()=>{i.removeEventListener(Jy,f),u=null}},createHref(N){return e(i,N)},createURL:x,encodeLocation(N){let w=x(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:I,go(N){return o.go(N)}};return P}var e_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(e_||(e_={}));function qR(t,e,n){return n===void 0&&(n="/"),GR(t,e,n,!1)}function GR(t,e,n,r){let i=typeof e=="string"?Us(e):e,s=Pp(i.pathname||"/",n);if(s==null)return null;let o=EE(t);KR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=sk(s);l=rk(o[u],c,r)}return l}function EE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Oe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Or([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),EE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:tk(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of TE(s.path))i(s,o,u)}),e}function TE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function KR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const QR=/^:[\w-]+$/,YR=3,XR=2,JR=1,ZR=10,ek=-2,t_=t=>t==="*";function tk(t,e){let n=t.split("/"),r=n.length;return n.some(t_)&&(r+=ek),e&&(r+=XR),n.filter(i=>!t_(i)).reduce((i,s)=>i+(QR.test(s)?YR:s===""?JR:ZR),r)}function nk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rk(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=n_({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=n_({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Or([s,f.pathname]),pathnameBase:ck(Or([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Or([s,f.pathnameBase]))}return o}function n_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ik(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:I}=d;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const x=l[f];return I&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ik(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),kp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const ok=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ak=t=>ok.test(t);function lk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Us(t):t,s;if(n)if(ak(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),kp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=r_(n.substring(1),"/"):s=r_(n,e)}else s=e;return{pathname:s,search:hk(r),hash:dk(i)}}function r_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Cp(t,e){let n=uk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Us(t):(i=ya({},t),Oe(!i.pathname||!i.pathname.includes("?"),zh("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),zh("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),zh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=lk(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Or=t=>t.join("/").replace(/\/\/+/g,"/"),ck=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const IE=["post","put","patch","delete"];new Set(IE);const pk=["get",...IE];new Set(pk);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_a.apply(this,arguments)}const Np=L.createContext(null),mk=L.createContext(null),Zr=L.createContext(null),dc=L.createContext(null),bn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),SE=L.createContext(null);function gk(t,e){let{relative:n}=e===void 0?{}:e;Fs()||Oe(!1);let{basename:r,navigator:i}=L.useContext(Zr),{hash:s,pathname:o,search:l}=RE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Or([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Fs(){return L.useContext(dc)!=null}function js(){return Fs()||Oe(!1),L.useContext(dc).location}function AE(t){L.useContext(Zr).static||L.useLayoutEffect(t)}function bp(){let{isDataRoute:t}=L.useContext(bn);return t?Nk():yk()}function yk(){Fs()||Oe(!1);let t=L.useContext(Np),{basename:e,future:n,navigator:r}=L.useContext(Zr),{matches:i}=L.useContext(bn),{pathname:s}=js(),o=JSON.stringify(Cp(i,n.v7_relativeSplatPath)),l=L.useRef(!1);return AE(()=>{l.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=xp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Or([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const _k=L.createContext(null);function vk(t){let e=L.useContext(bn).outlet;return e&&L.createElement(_k.Provider,{value:t},e)}function CM(){let{matches:t}=L.useContext(bn),e=t[t.length-1];return e?e.params:{}}function RE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(Zr),{matches:i}=L.useContext(bn),{pathname:s}=js(),o=JSON.stringify(Cp(i,r.v7_relativeSplatPath));return L.useMemo(()=>xp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function wk(t,e){return Ek(t,e)}function Ek(t,e,n,r){Fs()||Oe(!1);let{navigator:i}=L.useContext(Zr),{matches:s}=L.useContext(bn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=js(),d;if(e){var f;let N=typeof e=="string"?Us(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||Oe(!1),d=N}else d=c;let m=d.pathname||"/",I=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let x=qR(t,{pathname:I}),P=Rk(x&&x.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Or([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Or([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&P?L.createElement(dc.Provider,{value:{location:_a({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ir.Pop}},P):P}function Tk(){let t=xk(),e=fk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,s)}const Ik=L.createElement(Tk,null);class Sk extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(bn.Provider,{value:this.props.routeContext},L.createElement(SE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ak(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(Np);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(bn.Provider,{value:e},r)}function Rk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:I}=n,x=f.route.loader&&m[f.route.id]===void 0&&(!I||I[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let I,x=!1,P=null,N=null;n&&(I=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||Ik,u&&(c<0&&m===0?(bk("route-fallback",!1),x=!0,N=null):c===m&&(x=!0,N=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let S;return I?S=P:x?S=N:f.route.Component?S=L.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,L.createElement(Ak,{match:f,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?L.createElement(Sk,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var kE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kE||{}),Cu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cu||{});function kk(t){let e=L.useContext(Np);return e||Oe(!1),e}function Pk(t){let e=L.useContext(mk);return e||Oe(!1),e}function Ck(t){let e=L.useContext(bn);return e||Oe(!1),e}function PE(t){let e=Ck(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function xk(){var t;let e=L.useContext(SE),n=Pk(Cu.UseRouteError),r=PE(Cu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Nk(){let{router:t}=kk(kE.UseNavigateStable),e=PE(Cu.UseNavigateStable),n=L.useRef(!1);return AE(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_a({fromRouteId:e},s)))},[t,e])}const i_={};function bk(t,e,n){!e&&!i_[t]&&(i_[t]=!0)}function Dk(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Dp(t){let{to:e,replace:n,state:r,relative:i}=t;Fs()||Oe(!1);let{future:s,static:o}=L.useContext(Zr),{matches:l}=L.useContext(bn),{pathname:u}=js(),c=bp(),d=xp(e,Cp(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return L.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Op(t){return vk(t.context)}function Ee(t){Oe(!1)}function Ok(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ir.Pop,navigator:s,static:o=!1,future:l}=t;Fs()&&Oe(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:_a({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Us(r));let{pathname:d="/",search:f="",hash:m="",state:I=null,key:x="default"}=r,P=L.useMemo(()=>{let N=Pp(d,u);return N==null?null:{location:{pathname:N,search:f,hash:m,state:I,key:x},navigationType:i}},[u,d,f,m,I,x,i]);return P==null?null:L.createElement(Zr.Provider,{value:c},L.createElement(dc.Provider,{children:n,value:P}))}function Lk(t){let{children:e,location:n}=t;return wk(sf(e),n)}new Promise(()=>{});function sf(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,sf(r.props.children,s));return}r.type!==Ee&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function of(){return of=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},of.apply(this,arguments)}function Vk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Mk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Uk(t,e){return t.button===0&&(!e||e==="_self")&&!Mk(t)}const Fk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jk="6";try{window.__reactRouterVersion=jk}catch{}const Bk="startTransition",s_=CS[Bk];function zk(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=$R({window:i,v5Compat:!0}));let o=s.current,[l,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(f=>{c&&s_?s_(()=>u(f)):u(f)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.useEffect(()=>Dk(r),[r]),L.createElement(Ok,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const $k=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sl=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=Vk(e,Fk),{basename:I}=L.useContext(Zr),x,P=!1;if(typeof c=="string"&&Wk.test(c)&&(x=c,$k))try{let S=new URL(window.location.href),O=c.startsWith("//")?new URL(S.protocol+c):new URL(c),U=Pp(O.pathname,I);O.origin===S.origin&&U!=null?c=U+O.search+O.hash:P=!0}catch{}let N=gk(c,{relative:i}),w=Hk(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||w(S)}return L.createElement("a",of({},m,{href:x||N,onClick:P||s?r:v,ref:n,target:u}))});var o_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(o_||(o_={}));var a_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(a_||(a_={}));function Hk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=bp(),c=js(),d=RE(t,{relative:o});return L.useCallback(f=>{if(Uk(f,n)){f.preventDefault();let m=r!==void 0?r:Pu(c)===Pu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}let qk={data:""},Gk=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||qk},Kk=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Qk=/\/\*[^]*?\*\/|  +/g,l_=/\n+/g,gr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?gr(o,s):s+"{"+gr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=gr(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=gr.p?gr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},On={},CE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+CE(t[n]);return e}return t},Yk=(t,e,n,r,i)=>{let s=CE(t),o=On[s]||(On[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!On[o]){let u=s!==t?t:(c=>{let d,f,m=[{}];for(;d=Kk.exec(c.replace(Qk,""));)d[4]?m.shift():d[3]?(f=d[3].replace(l_," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(l_," ").trim();return m[0]})(t);On[o]=gr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&On.g?On.g:null;return n&&(On.g=On[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(On[o],e,r,l),o},Xk=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":gr(l,""):l===!1?"":l}return r+i+(o??"")},"");function fc(t){let e=this||{},n=t.call?t(e.p):t;return Yk(n.unshift?n.raw?Xk(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Gk(e.target),e.g,e.o,e.k)}let xE,af,lf;fc.bind({g:1});let Gn=fc.bind({k:1});function Jk(t,e,n,r){gr.p=e,xE=t,af=n,lf=r}function ei(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:af&&af()},l),n.o=/ *go\d+/.test(u),l.className=fc.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),lf&&c[0]&&lf(l),xE(c,l)}return e?e(i):i}}var Zk=t=>typeof t=="function",xu=(t,e)=>Zk(t)?t(e):t,eP=(()=>{let t=0;return()=>(++t).toString()})(),NE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),tP=20,Lp="default",bE=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return bE(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ql=[],DE={toasts:[],pausedAt:void 0,settings:{toastLimit:tP}},Tn={},OE=(t,e=Lp)=>{Tn[e]=bE(Tn[e]||DE,t),ql.forEach(([n,r])=>{n===e&&r(Tn[e])})},LE=t=>Object.keys(Tn).forEach(e=>OE(t,e)),nP=t=>Object.keys(Tn).find(e=>Tn[e].toasts.some(n=>n.id===t)),pc=(t=Lp)=>e=>{OE(e,t)},rP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},iP=(t={},e=Lp)=>{let[n,r]=L.useState(Tn[e]||DE),i=L.useRef(Tn[e]);L.useEffect(()=>(i.current!==Tn[e]&&r(Tn[e]),ql.push([e,r]),()=>{let o=ql.findIndex(([l])=>l===e);o>-1&&ql.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||rP[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},sP=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||eP()}),Va=t=>(e,n)=>{let r=sP(e,t,n);return pc(r.toasterId||nP(r.id))({type:2,toast:r}),r.id},qe=(t,e)=>Va("blank")(t,e);qe.error=Va("error");qe.success=Va("success");qe.loading=Va("loading");qe.custom=Va("custom");qe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?pc(e)(n):LE(n)};qe.dismissAll=t=>qe.dismiss(void 0,t);qe.remove=(t,e)=>{let n={type:4,toastId:t};e?pc(e)(n):LE(n)};qe.removeAll=t=>qe.remove(void 0,t);qe.promise=(t,e,n)=>{let r=qe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?xu(e.success,i):void 0;return s?qe.success(s,{id:r,...n,...n==null?void 0:n.success}):qe.dismiss(r),i}).catch(i=>{let s=e.error?xu(e.error,i):void 0;s?qe.error(s,{id:r,...n,...n==null?void 0:n.error}):qe.dismiss(r)}),t};var oP=1e3,aP=(t,e="default")=>{let{toasts:n,pausedAt:r}=iP(t,e),i=L.useRef(new Map).current,s=L.useCallback((f,m=oP)=>{if(i.has(f))return;let I=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,I)},[]);L.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(I=>{if(I.duration===1/0)return;let x=(I.duration||0)+I.pauseDuration-(f-I.createdAt);if(x<0){I.visible&&qe.dismiss(I.id);return}return setTimeout(()=>qe.dismiss(I.id,e),x)});return()=>{m.forEach(I=>I&&clearTimeout(I))}},[n,r,e]);let o=L.useCallback(pc(e),[e]),l=L.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=L.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=L.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=L.useCallback((f,m)=>{let{reverseOrder:I=!1,gutter:x=8,defaultPosition:P}=m||{},N=n.filter(S=>(S.position||P)===(f.position||P)&&S.height),w=N.findIndex(S=>S.id===f.id),v=N.filter((S,O)=>O<w&&S.visible).length;return N.filter(S=>S.visible).slice(...I?[v+1]:[0,v]).reduce((S,O)=>S+(O.height||0)+x,0)},[n]);return L.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},lP=Gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,uP=Gn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,cP=Gn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,hP=ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${uP} 0.15s ease-out forwards;
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
    animation: ${cP} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,dP=Gn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,fP=ei("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${dP} 1s linear infinite;
`,pP=Gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,mP=Gn`
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
}`,gP=ei("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${mP} 0.2s ease-out forwards;
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
`,yP=ei("div")`
  position: absolute;
`,_P=ei("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,vP=Gn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wP=ei("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${vP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,EP=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?L.createElement(wP,null,e):e:n==="blank"?null:L.createElement(_P,null,L.createElement(fP,{...r}),n!=="loading"&&L.createElement(yP,null,n==="error"?L.createElement(hP,{...r}):L.createElement(gP,{...r})))},TP=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,IP=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,SP="0%{opacity:0;} 100%{opacity:1;}",AP="0%{opacity:1;} 100%{opacity:0;}",RP=ei("div")`
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
`,kP=ei("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,PP=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=NE()?[SP,AP]:[TP(n),IP(n)];return{animation:e?`${Gn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Gn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},CP=L.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?PP(t.position||e||"top-center",t.visible):{opacity:0},s=L.createElement(EP,{toast:t}),o=L.createElement(kP,{...t.ariaProps},xu(t.message,t));return L.createElement(RP,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):L.createElement(L.Fragment,null,s,o))});Jk(L.createElement);var xP=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=L.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return L.createElement("div",{ref:s,className:e,style:n},i)},NP=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:NE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},bP=fc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Al=16,DP=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=aP(n,s);return L.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Al,left:Al,right:Al,bottom:Al,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let f=d.position||e,m=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),I=NP(f,m);return L.createElement(xP,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?bP:"",style:I},d.type==="custom"?xu(d.message,d):i?i(d):L.createElement(CP,{toast:d,position:f}))}))},$h=qe,OP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const LP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yt=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>L.createElement("svg",{ref:c,...OP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${LP(t)}`,...u},[...e.map(([d,f])=>L.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},VP=yt("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),u_=yt("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]),MP=yt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),Wh=yt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),UP=yt("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),FP=yt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),jP=yt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),c_=yt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),h_=yt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),BP=yt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),zP=yt("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),d_=yt("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Hh=yt("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),$P=yt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),f_=yt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),p_=yt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),WP=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ME={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[f],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new qP;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),f!==64){const x=c<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GP=function(t){const e=VE(t);return ME.encodeByteArray(e,!0)},Nu=function(t){return GP(t).replace(/\./g,"")},UE=function(t){try{return ME.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QP=()=>KP().__FIREBASE_DEFAULTS__,YP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&UE(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return WP()||QP()||YP()||XP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},FE=t=>{var e,n;return(n=(e=mc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},jE=t=>{const e=FE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},BE=()=>{var t;return(t=mc())==null?void 0:t.config},zE=t=>{var e;return(e=mc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[Nu(JSON.stringify(n)),Nu(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function eC(){var e;const t=(e=mc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iC(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sC(){return!eC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oC(){try{return typeof indexedDB=="object"}catch{return!1}}function aC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lC,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function uC(t,e){return t.replace(cC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cC=/\{\$([^}]+)}/g;function hC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(m_(s)&&m_(o)){if(!zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function m_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dC(t,e){const n=new fC(t,e);return n.subscribe.bind(n)}class fC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qh),i.error===void 0&&(i.error=qh),i.complete===void 0&&(i.complete=qh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qh(){}/**
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
 */function Vi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vp(t){return(await fetch(t,{credentials:"include"})).ok}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yC(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gC(t){return t===di?void 0:t}function yC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const vC={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},wC=re.INFO,EC={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},TC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mp{constructor(e){this.name=e,this._logLevel=wC,this._logHandler=TC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const IC=(t,e)=>e.some(n=>t instanceof n);let g_,y_;function SC(){return g_||(g_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AC(){return y_||(y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WE=new WeakMap,uf=new WeakMap,HE=new WeakMap,Gh=new WeakMap,Up=new WeakMap;function RC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WE.set(n,t)}).catch(()=>{}),Up.set(e,t),e}function kC(t){if(uf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});uf.set(t,e)}let cf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||HE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PC(t){cf=t(cf)}function CC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kh(this),e,...n);return HE.set(r,e.sort?e.sort():[e]),Lr(r)}:AC().includes(t)?function(...e){return t.apply(Kh(this),e),Lr(WE.get(this))}:function(...e){return Lr(t.apply(Kh(this),e))}}function xC(t){return typeof t=="function"?CC(t):(t instanceof IDBTransaction&&kC(t),IC(t,SC())?new Proxy(t,cf):t)}function Lr(t){if(t instanceof IDBRequest)return RC(t);if(Gh.has(t))return Gh.get(t);const e=xC(t);return e!==t&&(Gh.set(t,e),Up.set(e,t)),e}const Kh=t=>Up.get(t);function NC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Lr(o.result),u.oldVersion,u.newVersion,Lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const bC=["get","getKey","getAll","getAllKeys","count"],DC=["put","add","delete","clear"],Qh=new Map;function __(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Qh.set(e,s),s}PC(t=>({...t,get:(e,n,r)=>__(e,n)||t.get(e,n,r),has:(e,n)=>!!__(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hf="@firebase/app",v_="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Mp("@firebase/app"),VC="@firebase/app-compat",MC="@firebase/analytics-compat",UC="@firebase/analytics",FC="@firebase/app-check-compat",jC="@firebase/app-check",BC="@firebase/auth",zC="@firebase/auth-compat",$C="@firebase/database",WC="@firebase/data-connect",HC="@firebase/database-compat",qC="@firebase/functions",GC="@firebase/functions-compat",KC="@firebase/installations",QC="@firebase/installations-compat",YC="@firebase/messaging",XC="@firebase/messaging-compat",JC="@firebase/performance",ZC="@firebase/performance-compat",ex="@firebase/remote-config",tx="@firebase/remote-config-compat",nx="@firebase/storage",rx="@firebase/storage-compat",ix="@firebase/firestore",sx="@firebase/ai",ox="@firebase/firestore-compat",ax="firebase",lx="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="[DEFAULT]",ux={[hf]:"fire-core",[VC]:"fire-core-compat",[UC]:"fire-analytics",[MC]:"fire-analytics-compat",[jC]:"fire-app-check",[FC]:"fire-app-check-compat",[BC]:"fire-auth",[zC]:"fire-auth-compat",[$C]:"fire-rtdb",[WC]:"fire-data-connect",[HC]:"fire-rtdb-compat",[qC]:"fire-fn",[GC]:"fire-fn-compat",[KC]:"fire-iid",[QC]:"fire-iid-compat",[YC]:"fire-fcm",[XC]:"fire-fcm-compat",[JC]:"fire-perf",[ZC]:"fire-perf-compat",[ex]:"fire-rc",[tx]:"fire-rc-compat",[nx]:"fire-gcs",[rx]:"fire-gcs-compat",[ix]:"fire-fst",[ox]:"fire-fst-compat",[sx]:"fire-vertex","fire-js":"fire-js",[ax]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map,cx=new Map,ff=new Map;function w_(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(ff.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;ff.set(e,t);for(const n of bu.values())w_(n,t);for(const n of cx.values())w_(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new Ma("app","Firebase",hx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=lx;function qE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:df,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=BE()),!n)throw Vr.create("no-options");const s=bu.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new _C(i);for(const u of ff.values())o.addComponent(u);const l=new dx(n,r,o);return bu.set(i,l),l}function Fp(t=df){const e=bu.get(t);if(!e&&t===df&&BE())return qE();if(!e)throw Vr.create("no-app",{appName:t});return e}function Rn(t,e,n){let r=ux[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(o.join(" "));return}ki(new $r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const fx="firebase-heartbeat-database",px=1,va="firebase-heartbeat-store";let Yh=null;function GE(){return Yh||(Yh=NC(fx,px,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(va)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),Yh}async function mx(t){try{const n=(await GE()).transaction(va),r=await n.objectStore(va).get(KE(t));return await n.done,r}catch(e){if(e instanceof Dn)Kn.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function E_(t,e){try{const r=(await GE()).transaction(va,"readwrite");await r.objectStore(va).put(e,KE(t)),await r.done}catch(n){if(n instanceof Dn)Kn.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function KE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gx=1024,yx=30;class _x{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=T_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>yx){const o=Ex(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=T_(),{heartbeatsToSend:r,unsentEntries:i}=vx(this._heartbeatsCache.heartbeats),s=Nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function T_(){return new Date().toISOString().substring(0,10)}function vx(t,e=gx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),I_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),I_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oC()?aC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return E_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return E_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function I_(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}function Ex(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){ki(new $r("platform-logger",e=>new OC(e),"PRIVATE")),ki(new $r("heartbeat",e=>new _x(e),"PRIVATE")),Rn(hf,v_,t),Rn(hf,v_,"esm2020"),Rn("fire-js","")}Tx("");function QE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ix=QE,YE=new Ma("auth","Firebase",QE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Mp("@firebase/auth");function Sx(t,...e){Du.logLevel<=re.WARN&&Du.warn(`Auth (${Mi}): ${t}`,...e)}function Gl(t,...e){Du.logLevel<=re.ERROR&&Du.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Bp(t,...e)}function Ot(t,...e){return Bp(t,...e)}function jp(t,e,n){const r={...Ix(),[e]:n};return new Ma("auth","Firebase",r).create(e,{appName:t.name})}function It(t){return jp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yc(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),jp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return YE.create(t,...e)}function z(t,e,...n){if(!t)throw Bp(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gl(e),new Error(e)}function Qn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function zp(){return S_()==="http:"||S_()==="https:"}function S_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zp()||nC()||"connection"in navigator)?navigator.onLine:!0}function Rx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZP()||rC()}get(){return Ax()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cx=new Ua(3e4,6e4);function Qe(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ye(t,e,n,r,i={}){return JE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Bs({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return tC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Vi(t.emulatorConfig.host)&&(c.credentials="include"),XE.fetch()(await ZE(t,t.config.apiHost,n,l),c)})}async function JE(t,e,n){t._canInitEmulator=!1;const r={...kx,...e};try{const i=new Nx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw No(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw No(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw No(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw No(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jp(t,d,c);nn(t,d)}}catch(i){if(i instanceof Dn)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function tr(t,e,n,r,i={}){const s=await Ye(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ZE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?$p(t.config,i):`${t.config.apiScheme}://${i}`;return Px.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function xx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),Cx.get())})}}function No(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){return t!==void 0&&t.getResponse!==void 0}function R_(t){return t!==void 0&&t.enterprise!==void 0}class eT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t){return(await Ye(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function tT(t,e){return Ye(t,"GET","/v2/recaptchaConfig",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(t,e){return Ye(t,"POST","/v1/accounts:delete",e)}async function Ox(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function Ou(t,e){return Ye(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lx(t,e=!1){const n=ee(t),r=await n.getIdToken(e),i=_c(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ho(Xh(i.auth_time)),issuedAtTime:Ho(Xh(i.iat)),expirationTime:Ho(Xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function _c(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gl("JWT malformed, contained fewer than 3 sections"),null;try{const i=UE(n);return i?JSON.parse(i):(Gl("Failed to decode base64 JWT payload"),null)}catch(i){return Gl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function k_(t){const e=_c(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&Vx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Vx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ho(this.lastLoginAt),this.creationTime=Ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Pi(t,Ou(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?nT(i.providerUserInfo):[],o=Fx(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new pf(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Ux(t){const e=ee(t);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(t,e){const n=await JE(t,{},async()=>{const r=Bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await ZE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Vi(t.emulatorConfig.host)&&(u.credentials="include"),XE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bx(t,e){return Ye(t,"POST","/v2/accounts:revokeToken",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):k_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=k_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fs;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Mx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lx(this,e)}reload(){return Ux(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Pi(this,Dx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:I,providerData:x,stsTokenManager:P}=n;z(f&&P,e,"internal-error");const N=fs.fromJSON(this.name,P);z(typeof f=="string",e,"internal-error"),hr(r,e.name),hr(i,e.name),z(typeof m=="boolean",e,"internal-error"),z(typeof I=="boolean",e,"internal-error"),hr(s,e.name),hr(o,e.name),hr(l,e.name),hr(u,e.name),hr(c,e.name),hr(d,e.name);const w=new un({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:N,createdAt:c,lastLoginAt:d});return x&&Array.isArray(x)&&(w.providerData=x.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new fs;i.updateFromServerResponse(n);const s=new un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ea(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new fs;l.updateFromIdToken(r);const u=new un({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Map;function jn(t){Qn(t instanceof Function,"Expected a class definition");let e=P_.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,P_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rT.type="NONE";const C_=rT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Kl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ou(this.auth,{idToken:e}).catch(()=>{});return n?un._fromGetAccountInfoResponse(this.auth,n,e):null}return un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(jn(C_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||jn(C_);const o=Kl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await Ou(e,{idToken:d}).catch(()=>{});if(!m)break;f=await un._fromGetAccountInfoResponse(e,m,d)}else f=un._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ps(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ps(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uT(e))return"Blackberry";if(cT(e))return"Webos";if(sT(e))return"Safari";if((e.includes("chrome/")||oT(e))&&!e.includes("edge/"))return"Chrome";if(lT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iT(t=gt()){return/firefox\//i.test(t)}function sT(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oT(t=gt()){return/crios\//i.test(t)}function aT(t=gt()){return/iemobile/i.test(t)}function lT(t=gt()){return/android/i.test(t)}function uT(t=gt()){return/blackberry/i.test(t)}function cT(t=gt()){return/webos/i.test(t)}function Wp(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zx(t=gt()){var e;return Wp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function $x(){return iC()&&document.documentMode===10}function hT(t=gt()){return Wp(t)||lT(t)||cT(t)||uT(t)||/windows phone/i.test(t)||aT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t,e=[]){let n;switch(t){case"Browser":n=x_(gt());break;case"Worker":n=`${x_(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
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
 */class Wx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Hx(t,e={}){return Ye(t,"GET","/v2/passwordPolicy",Qe(t,e))}/**
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
 */const qx=6;class Gx{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N_(this),this.idTokenSubscription=new N_(this),this.beforeStateQueue=new Wx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ou(this,{idToken:e}),r=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(It(this));const n=e?ee(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hx(this),n=new Gx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ma("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Sx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tt(t){return ee(t)}class N_{constructor(e){this.auth=e,this.observer=null,this.addObserver=dC(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qx(t){Fa=t}function Hp(t){return Fa.loadJS(t)}function Yx(){return Fa.recaptchaV2Script}function Xx(){return Fa.recaptchaEnterpriseScript}function Jx(){return Fa.gapiScript}function fT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=500,eN=6e4,Rl=1e12;class tN{constructor(e){this.auth=e,this.counter=Rl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new iN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Rl;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Rl;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Rl;return(r=this._widgets.get(n))==null||r.execute(),""}}class nN{constructor(){this.enterprise=new rN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},eN)},Zx))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sN(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const oN="recaptcha-enterprise",qo="NO_RECAPTCHA";class pT{constructor(e){this.type=oN,this.auth=tt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{tT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new eT(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;R_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qo)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&R_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Xx();u.length!==0&&(u+=l),Hp(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function To(t,e,n,r=!1,i=!1){const s=new pT(t);let o;if(i)o=qo;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await To(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await To(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await To(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await To(t,e,n,!1,!0);return r(t,d)}return Promise.reject(u)})}else{const l=await To(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function aN(t){const e=tt(t),n=await tT(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new eT(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new pT(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t,e){const n=gc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zr(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function uN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cN(t,e,n){const r=tt(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mT(e),{host:o,port:l}=hN(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(zr(c,r.config.emulator)&&zr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Vi(o)?Vp(`${s}//${o}${u}`):i||dN()}function mT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hN(t){const e=mT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:b_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:b_(o)}}}function b_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function fN(t,e){return Ye(t,"POST","/v1/accounts:resetPassword",Qe(t,e))}async function pN(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function mN(t,e){return Ye(t,"POST","/v1/accounts:signUp",e)}async function gN(t,e){return Ye(t,"POST","/v1/accounts:update",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){return tr(t,"POST","/v1/accounts:signInWithPassword",Qe(t,e))}async function wc(t,e){return Ye(t,"POST","/v1/accounts:sendOobCode",Qe(t,e))}async function _N(t,e){return wc(t,e)}async function vN(t,e){return wc(t,e)}async function wN(t,e){return wc(t,e)}async function EN(t,e){return wc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}async function IN(t,e){return tr(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends vc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ta(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ta(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mr(e,n,"signInWithPassword",yN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return TN(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mr(e,r,"signUpPassword",mN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return IN(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return tr(t,"POST","/v1/accounts:signInWithIdp",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="http://localhost";class Yn extends vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:SN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t,e){return Ye(t,"POST","/v1/accounts:sendVerificationCode",Qe(t,e))}async function AN(t,e){return tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e))}async function RN(t,e){const n=await tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e));if(n.temporaryProof)throw No(t,"account-exists-with-different-credential",n);return n}const kN={USER_NOT_FOUND:"user-not-found"};async function PN(t,e){const n={...e,operation:"REAUTH"};return tr(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,n),kN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends vc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Go({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Go({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return AN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return RN(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return PN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Go({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xN(t){const e=Co(xo(t)).link,n=e?Co(xo(e)).deep_link_id:null,r=Co(xo(t)).deep_link_id;return(r?Co(xo(r)).link:null)||r||n||e||t}class Ec{constructor(e){const n=Co(xo(e)),r=n.apiKey??null,i=n.oobCode??null,s=CN(n.mode??null);z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=xN(e);try{return new Ec(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(e,n){return Ta._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ec.parseLink(n);return z(r,"argument-error"),Ta._fromEmailAndCode(e,r.code,r.tenantId)}}Ui.PROVIDER_ID="password";Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends zs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ql extends $s{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),Yn._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Yn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ql.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ql.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Ql(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends $s{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends $s{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends $s{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(t,e){return tr(t,"POST","/v1/accounts:signUp",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await un._fromIdTokenResponse(e,r,i),o=O_(r);return new xn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=O_(r);return new xn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function O_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xM(t){var i;if(Fe(t.app))return Promise.reject(It(t));const e=tt(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new xn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await gT(e,{returnSecureToken:!0}),r=await xn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends Dn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lu(e,n,r,i)}}function yT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NM(t,e){const n=ee(t);await Tc(!0,n,e);const{providerUserInfo:r}=await Ox(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=_T(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function vT(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xn._forOperation(t,"link",r)}async function Tc(t,e,n){await Ea(e);const r=_T(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e,n=!1){const{auth:r}=t;if(Fe(r.app))return Promise.reject(It(r));const i="reauthenticate";try{const s=await Pi(t,yT(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=_c(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),xn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(t,e,n=!1){if(Fe(t.app))return Promise.reject(It(t));const r="signIn",i=await yT(t,r,e),s=await xn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ic(t,e){return wT(tt(t),e)}async function bN(t,e){const n=ee(t);return await Tc(!1,n,e.providerId),vT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){return tr(t,"POST","/v1/accounts:signInWithCustomToken",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bM(t,e){if(Fe(t.app))return Promise.reject(It(t));const n=tt(t),r=await DN(n,{token:e,returnSecureToken:!0}),i=await xn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function qp(t){const e=tt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DM(t,e,n){const r=tt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Sc(r,i,n),await Mr(r,i,"getOobCode",vN,"EMAIL_PASSWORD_PROVIDER")}async function OM(t,e,n){await fN(ee(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qp(t),r})}async function LM(t,e){await gN(ee(t),{oobCode:e})}async function ON(t,e,n){if(Fe(t.app))return Promise.reject(It(t));const r=tt(t),o=await Mr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gT,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qp(t),u}),l=await xn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function LN(t,e,n){return Fe(t.app)?Promise.reject(It(t)):Ic(ee(t),Ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VM(t,e,n){const r=tt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){z(l.handleCodeInApp,r,"argument-error"),l&&Sc(r,o,l)}s(i,n),await Mr(r,i,"getOobCode",wN,"EMAIL_PASSWORD_PROVIDER")}function MM(t,e){const n=Ec.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function UM(t,e,n){if(Fe(t.app))return Promise.reject(It(t));const r=ee(t),i=Ui.credentialWithLink(e,n||wa());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ic(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e){return Ye(t,"POST","/v1/accounts:createAuthUri",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(t,e){const n=zp()?wa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await VN(ee(t),r);return i||[]}async function jM(t,e){const n=ee(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Sc(n.auth,i,e);const{email:s}=await _N(n.auth,i);s!==t.email&&await t.reload()}async function BM(t,e,n){const r=ee(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Sc(r.auth,s,n);const{email:o}=await EN(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e){return Ye(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ee(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Pi(r,MN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $M(t,e){const n=ee(t);return Fe(n.auth.app)?Promise.reject(It(n.auth)):ET(n,e,null)}function WM(t,e){return ET(ee(t),null,e)}async function ET(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Pi(t,pN(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=_c(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new gs(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new FN(r,n);case"github.com":return new jN(r,n);case"google.com":return new BN(r,n);case"twitter.com":return new zN(r,n,t.screenName||null);case"custom":case"anonymous":return new gs(r,null);default:return new gs(r,e,n)}}class gs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class TT extends gs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class FN extends gs{constructor(e,n){super(e,"facebook.com",n)}}class jN extends TT{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class BN extends gs{constructor(e,n){super(e,"google.com",n)}}class zN extends TT{constructor(e,n,r){super(e,"twitter.com",n,r)}}function HM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:UN(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t,e){return ee(t).setPersistence(e)}function WN(t,e,n,r){return ee(t).onIdTokenChanged(e,n,r)}function HN(t,e,n){return ee(t).beforeAuthStateChanged(e,n)}function qN(t,e,n,r){return ee(t).onAuthStateChanged(e,n,r)}function GN(t){return ee(t).signOut()}function qM(t,e){return tt(t).revokeAccessToken(e)}async function GM(t){return ee(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:start",Qe(t,e))}const Vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vu,"1"),this.storage.removeItem(Vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=1e3,QN=10;class ST extends IT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$x()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ST.type="LOCAL";const AT=ST;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT extends IT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}RT.type="SESSION";const kT=RT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await YN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Rc("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function JN(t){Me().location.href=t}/**
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
 */function Gp(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function ZN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function tb(){return Gp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="firebaseLocalStorageDb",nb=1,Mu="firebaseLocalStorage",CT="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function rb(){const t=indexedDB.deleteDatabase(PT);return new ja(t).toPromise()}function mf(){const t=indexedDB.open(PT,nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mu,{keyPath:CT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mu)?e(r):(r.close(),await rb(),e(await mf()))})})}async function V_(t,e,n){const r=kc(t,!0).put({[CT]:e,value:n});return new ja(r).toPromise()}async function ib(t,e){const n=kc(t,!1).get(e),r=await new ja(n).toPromise();return r===void 0?null:r.value}function M_(t,e){const n=kc(t,!0).delete(e);return new ja(n).toPromise()}const sb=800,ob=3;class xT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ZN(),!this.activeServiceWorker)return;this.sender=new XN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mf();return await V_(e,Vu,"1"),await M_(e,Vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>V_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ib(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>M_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kc(i,!1).getAll();return new ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xT.type="LOCAL";const ab=xT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:start",Qe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=fT("rcb"),lb=new Ua(3e4,6e4);class ub{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Me().grecaptcha)!=null&&e.render)}load(e,n=""){return z(cb(n),e,"argument-error"),this.shouldResolveImmediately(n)&&A_(Me().grecaptcha)?Promise.resolve(Me().grecaptcha):new Promise((r,i)=>{const s=Me().setTimeout(()=>{i(Ot(e,"network-request-failed"))},lb.get());Me()[Jh]=()=>{Me().clearTimeout(s),delete Me()[Jh];const l=Me().grecaptcha;if(!l||!A_(l)){i(Ot(e,"internal-error"));return}const u=l.render;l.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${Yx()}?${Bs({onload:Jh,render:"explicit",hl:n})}`;Hp(o).catch(()=>{clearTimeout(s),i(Ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Me().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function cb(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class hb{async load(e){return new tN(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="recaptcha",db={theme:"light",type:"image"};class fb{constructor(e,n,r={...db}){this.parameters=r,this.type=Ko,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=tt(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hb:new ub,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Me()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(zp()&&!Gp(),this.auth,"internal-error"),await pb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bx(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function pb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Go._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function mb(t,e,n){if(Fe(t.app))return Promise.reject(It(t));const r=tt(t),i=await bT(r,e,ee(n));return new NT(i,s=>Ic(r,s))}async function KM(t,e,n){const r=ee(t);await Tc(!1,r,"phone");const i=await bT(r.auth,e,ee(n));return new NT(i,s=>bN(r,s))}async function bT(t,e,n){var r;if(!t._getRecaptchaConfig())try{await aN(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){z(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Mr(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===qo){z((n==null?void 0:n.type)===Ko,d,"argument-error");const m=await Zh(d,f,n);return L_(d,m)}return L_(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{z(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;z(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Mr(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===qo){z((n==null?void 0:n.type)===Ko,f,"argument-error");const I=await Zh(f,m,n);return U_(f,I)}return U_(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Mr(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===qo){z((n==null?void 0:n.type)===Ko,c,"argument-error");const f=await Zh(c,d,n);return D_(c,f)}return D_(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function Zh(t,e,n){z(n.type===Ko,t,"argument-error");const r=await n.verify();z(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Ba(t,e){return e?jn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp extends vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gb(t){return wT(t.auth,new Kp(t),t.bypassAuthState)}function yb(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),NN(n,new Kp(t),t.bypassAuthState)}async function _b(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),vT(n,new Kp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gb;case"linkViaPopup":case"linkViaRedirect":return _b;case"reauthViaPopup":case"reauthViaRedirect":return yb;default:nn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new Ua(2e3,1e4);async function F_(t,e,n){if(Fe(t.app))return Promise.reject(Ot(t,"operation-not-supported-in-this-environment"));const r=tt(t);yc(t,e,zs);const i=Ba(r,n);return new Sr(r,"signInViaPopup",e,i).executeNotNull()}async function QM(t,e,n){const r=ee(t);yc(r.auth,e,zs);const i=Ba(r.auth,n);return new Sr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Sr extends DT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vb.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="pendingRedirect",Yl=new Map;class Eb extends DT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const r=await Tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tb(t,e){const n=VT(e),r=LT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function OT(t,e){return LT(t)._set(VT(e),"true")}function Ib(t,e){Yl.set(t._key(),e)}function LT(t){return jn(t._redirectPersistence)}function VT(t){return Kl(wb,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t,e,n){return Ab(t,e,n)}async function Ab(t,e,n){if(Fe(t.app))return Promise.reject(It(t));const r=tt(t);yc(t,e,zs),await r._initializationPromise;const i=Ba(r,n);return await OT(i,r),i._openRedirect(r,e,"signInViaRedirect")}function YM(t,e,n){return Rb(t,e,n)}async function Rb(t,e,n){const r=ee(t);yc(r.auth,e,zs),await r.auth._initializationPromise;const i=Ba(r.auth,n);await Tc(!1,r,e.providerId),await OT(i,r.auth);const s=await Pb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function kb(t,e){return await tt(t)._initializationPromise,MT(t,e,!1)}async function MT(t,e,n=!1){if(Fe(t.app))return Promise.reject(It(t));const r=tt(t),i=Ba(r,e),o=await new Eb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Pb(t){const e=Rc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=10*60*1e3;class xb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!UT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(j_(e))}saveEventToCache(e){this.cachedEventUids.add(j_(e)),this.lastProcessedEventTime=Date.now()}}function j_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function UT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e={}){return Ye(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ob=/^https?/;async function Lb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(Vb(n))return}catch{}nn(t,"unauthorized-domain")}function Vb(t){const e=wa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ob.test(n))return!1;if(Db.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Mb=new Ua(3e4,6e4);function B_(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ub(t){return new Promise((e,n)=>{var i,s,o;function r(){B_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{B_(),n(Ot(t,"network-request-failed"))},timeout:Mb.get()})}if((s=(i=Me().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Me().gapi)!=null&&o.load)r();else{const l=fT("iframefcb");return Me()[l]=()=>{gapi.load?r():n(Ot(t,"network-request-failed"))},Hp(`${Jx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Xl=null,e})}let Xl=null;function Fb(t){return Xl=Xl||Ub(t),Xl}/**
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
 */const jb=new Ua(5e3,15e3),Bb="__/auth/iframe",zb="emulator/auth/iframe",$b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hb(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$p(e,zb):`https://${t.config.authDomain}/${Bb}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=Wb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bs(r).slice(1)}`}async function qb(t){const e=await Fb(t),n=Me().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:Hb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$b,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),l=Me().setTimeout(()=>{s(o)},jb.get());function u(){Me().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kb=500,Qb=600,Yb="_blank",Xb="http://localhost";class z_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jb(t,e,n,r=Kb,i=Qb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Gb,width:r.toString(),height:i.toString(),top:s,left:o},c=gt().toLowerCase();n&&(l=oT(c)?Yb:n),iT(c)&&(e=e||Xb,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,x])=>`${m}${I}=${x},`,"");if(zx(c)&&l!=="_self")return Zb(e||"",l),new z_(null);const f=window.open(e||"",l,d);z(f,t,"popup-blocked");try{f.focus()}catch{}return new z_(f)}function Zb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const e2="__/auth/handler",t2="emulator/auth/handler",n2=encodeURIComponent("fac");async function $_(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof zs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof $s){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${n2}=${encodeURIComponent(u)}`:"";return`${r2(t)}?${Bs(l).slice(1)}${c}`}function r2({config:t}){return t.emulator?$p(t,t2):`https://${t.authDomain}/${e2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="webStorageSupport";class i2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=MT,this._overrideRedirectResult=Ib}async _openPopup(e,n,r,i){var o;Qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await $_(e,n,r,wa(),i);return Jb(e,s,Rc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $_(e,n,r,wa(),i);return JN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qb(e),r=new xb(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ed,{type:ed},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ed];s!==void 0&&n(!!s),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hT()||sT()||Wp()}}const s2=i2;var W_="@firebase/auth",H_="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l2(t){ki(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dT(t)},c=new Kx(r,i,s,u);return uN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ki(new $r("auth-internal",e=>{const n=tt(e.getProvider("auth").getImmediate());return(r=>new o2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(W_,H_,a2(t)),Rn(W_,H_,"esm2020")}/**
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
 */const u2=5*60,c2=zE("authIdTokenMaxAge")||u2;let q_=null;const h2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>c2)return;const i=n==null?void 0:n.token;q_!==i&&(q_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function d2(t=Fp()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lN(t,{popupRedirectResolver:s2,persistence:[ab,AT,kT]}),r=zE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=h2(s.toString());HN(n,o,()=>o(n.currentUser)),WN(n,l=>o(l))}}const i=FE("auth");return i&&cN(n,`http://${i}`),n}function f2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Qx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",f2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l2("Browser");var p2="firebase",m2="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(p2,m2,"app");var G_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,FT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.F=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(A,R,k){for(var _=Array(arguments.length-2),G=2;G<arguments.length;G++)_[G-2]=arguments[G];return y.prototype[R].apply(A,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,E){E||(E=0);const A=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)A[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;R<16;++R)A[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],R=T.g[2];let k=T.g[3],_;_=y+(k^E&(R^k))+A[0]+3614090360&4294967295,y=E+(_<<7&4294967295|_>>>25),_=k+(R^y&(E^R))+A[1]+3905402710&4294967295,k=y+(_<<12&4294967295|_>>>20),_=R+(E^k&(y^E))+A[2]+606105819&4294967295,R=k+(_<<17&4294967295|_>>>15),_=E+(y^R&(k^y))+A[3]+3250441966&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(k^E&(R^k))+A[4]+4118548399&4294967295,y=E+(_<<7&4294967295|_>>>25),_=k+(R^y&(E^R))+A[5]+1200080426&4294967295,k=y+(_<<12&4294967295|_>>>20),_=R+(E^k&(y^E))+A[6]+2821735955&4294967295,R=k+(_<<17&4294967295|_>>>15),_=E+(y^R&(k^y))+A[7]+4249261313&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(k^E&(R^k))+A[8]+1770035416&4294967295,y=E+(_<<7&4294967295|_>>>25),_=k+(R^y&(E^R))+A[9]+2336552879&4294967295,k=y+(_<<12&4294967295|_>>>20),_=R+(E^k&(y^E))+A[10]+4294925233&4294967295,R=k+(_<<17&4294967295|_>>>15),_=E+(y^R&(k^y))+A[11]+2304563134&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(k^E&(R^k))+A[12]+1804603682&4294967295,y=E+(_<<7&4294967295|_>>>25),_=k+(R^y&(E^R))+A[13]+4254626195&4294967295,k=y+(_<<12&4294967295|_>>>20),_=R+(E^k&(y^E))+A[14]+2792965006&4294967295,R=k+(_<<17&4294967295|_>>>15),_=E+(y^R&(k^y))+A[15]+1236535329&4294967295,E=R+(_<<22&4294967295|_>>>10),_=y+(R^k&(E^R))+A[1]+4129170786&4294967295,y=E+(_<<5&4294967295|_>>>27),_=k+(E^R&(y^E))+A[6]+3225465664&4294967295,k=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(k^y))+A[11]+643717713&4294967295,R=k+(_<<14&4294967295|_>>>18),_=E+(k^y&(R^k))+A[0]+3921069994&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(R^k&(E^R))+A[5]+3593408605&4294967295,y=E+(_<<5&4294967295|_>>>27),_=k+(E^R&(y^E))+A[10]+38016083&4294967295,k=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(k^y))+A[15]+3634488961&4294967295,R=k+(_<<14&4294967295|_>>>18),_=E+(k^y&(R^k))+A[4]+3889429448&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(R^k&(E^R))+A[9]+568446438&4294967295,y=E+(_<<5&4294967295|_>>>27),_=k+(E^R&(y^E))+A[14]+3275163606&4294967295,k=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(k^y))+A[3]+4107603335&4294967295,R=k+(_<<14&4294967295|_>>>18),_=E+(k^y&(R^k))+A[8]+1163531501&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(R^k&(E^R))+A[13]+2850285829&4294967295,y=E+(_<<5&4294967295|_>>>27),_=k+(E^R&(y^E))+A[2]+4243563512&4294967295,k=y+(_<<9&4294967295|_>>>23),_=R+(y^E&(k^y))+A[7]+1735328473&4294967295,R=k+(_<<14&4294967295|_>>>18),_=E+(k^y&(R^k))+A[12]+2368359562&4294967295,E=R+(_<<20&4294967295|_>>>12),_=y+(E^R^k)+A[5]+4294588738&4294967295,y=E+(_<<4&4294967295|_>>>28),_=k+(y^E^R)+A[8]+2272392833&4294967295,k=y+(_<<11&4294967295|_>>>21),_=R+(k^y^E)+A[11]+1839030562&4294967295,R=k+(_<<16&4294967295|_>>>16),_=E+(R^k^y)+A[14]+4259657740&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(E^R^k)+A[1]+2763975236&4294967295,y=E+(_<<4&4294967295|_>>>28),_=k+(y^E^R)+A[4]+1272893353&4294967295,k=y+(_<<11&4294967295|_>>>21),_=R+(k^y^E)+A[7]+4139469664&4294967295,R=k+(_<<16&4294967295|_>>>16),_=E+(R^k^y)+A[10]+3200236656&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(E^R^k)+A[13]+681279174&4294967295,y=E+(_<<4&4294967295|_>>>28),_=k+(y^E^R)+A[0]+3936430074&4294967295,k=y+(_<<11&4294967295|_>>>21),_=R+(k^y^E)+A[3]+3572445317&4294967295,R=k+(_<<16&4294967295|_>>>16),_=E+(R^k^y)+A[6]+76029189&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(E^R^k)+A[9]+3654602809&4294967295,y=E+(_<<4&4294967295|_>>>28),_=k+(y^E^R)+A[12]+3873151461&4294967295,k=y+(_<<11&4294967295|_>>>21),_=R+(k^y^E)+A[15]+530742520&4294967295,R=k+(_<<16&4294967295|_>>>16),_=E+(R^k^y)+A[2]+3299628645&4294967295,E=R+(_<<23&4294967295|_>>>9),_=y+(R^(E|~k))+A[0]+4096336452&4294967295,y=E+(_<<6&4294967295|_>>>26),_=k+(E^(y|~R))+A[7]+1126891415&4294967295,k=y+(_<<10&4294967295|_>>>22),_=R+(y^(k|~E))+A[14]+2878612391&4294967295,R=k+(_<<15&4294967295|_>>>17),_=E+(k^(R|~y))+A[5]+4237533241&4294967295,E=R+(_<<21&4294967295|_>>>11),_=y+(R^(E|~k))+A[12]+1700485571&4294967295,y=E+(_<<6&4294967295|_>>>26),_=k+(E^(y|~R))+A[3]+2399980690&4294967295,k=y+(_<<10&4294967295|_>>>22),_=R+(y^(k|~E))+A[10]+4293915773&4294967295,R=k+(_<<15&4294967295|_>>>17),_=E+(k^(R|~y))+A[1]+2240044497&4294967295,E=R+(_<<21&4294967295|_>>>11),_=y+(R^(E|~k))+A[8]+1873313359&4294967295,y=E+(_<<6&4294967295|_>>>26),_=k+(E^(y|~R))+A[15]+4264355552&4294967295,k=y+(_<<10&4294967295|_>>>22),_=R+(y^(k|~E))+A[6]+2734768916&4294967295,R=k+(_<<15&4294967295|_>>>17),_=E+(k^(R|~y))+A[13]+1309151649&4294967295,E=R+(_<<21&4294967295|_>>>11),_=y+(R^(E|~k))+A[4]+4149444226&4294967295,y=E+(_<<6&4294967295|_>>>26),_=k+(E^(y|~R))+A[11]+3174756917&4294967295,k=y+(_<<10&4294967295|_>>>22),_=R+(y^(k|~E))+A[2]+718787259&4294967295,R=k+(_<<15&4294967295|_>>>17),_=E+(k^(R|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(R+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+k&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const E=y-this.blockSize,A=this.C;let R=this.h,k=0;for(;k<y;){if(R==0)for(;k<=E;)i(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<y;)if(A[R++]=T.charCodeAt(k++),R==this.blockSize){i(this,A),R=0;break}}else for(;k<y;)if(A[R++]=T[k++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)T[y++]=this.g[E]>>>A&255;return T};function s(T,y){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function o(T,y){this.h=y;const E=[];let A=!0;for(let R=T.length-1;R>=0;R--){const k=T[R]|0;A&&k==y||(E[R]=k,A=!1)}this.g=E}var l={};function u(T){return-128<=T&&T<128?s(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return N(c(-T));const y=[];let E=1;for(let A=0;T>=E;A++)y[A]=T/E|0,E*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return N(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let A=f;for(let k=0;k<T.length;k+=8){var R=Math.min(8,T.length-k);const _=parseInt(T.substring(k,k+R),y);R<8?(R=c(Math.pow(y,R)),A=A.j(R).add(c(_))):(A=A.j(E),A=A.add(c(_)))}return A}var f=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();let T=0,y=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);T+=(A>=0?A:4294967296+A)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(P(this))return"-"+N(this).toString(T);const y=c(Math.pow(T,6));var E=this;let A="";for(;;){const R=O(E,y).g;E=w(E,R.j(y));let k=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=R,x(E))return k+A;for(;k.length<6;)k="0"+k;A=k+A}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=w(this,T),P(T)?-1:x(T)?0:1};function N(T){const y=T.g.length,E=[];for(let A=0;A<y;A++)E[A]=~T.g[A];return new o(E,~T.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(T){const y=Math.max(this.g.length,T.g.length),E=[];let A=0;for(let R=0;R<=y;R++){let k=A+(this.i(R)&65535)+(T.i(R)&65535),_=(k>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);A=_>>>16,k&=65535,_&=65535,E[R]=_<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(T,y){return T.add(N(y))}t.j=function(T){if(x(this)||x(T))return f;if(P(this))return P(T)?N(this).j(N(T)):N(N(this).j(T));if(P(T))return N(this.j(N(T)));if(this.l(I)<0&&T.l(I)<0)return c(this.m()*T.m());const y=this.g.length+T.g.length,E=[];for(var A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<T.g.length;R++){const k=this.i(A)>>>16,_=this.i(A)&65535,G=T.i(R)>>>16,oe=T.i(R)&65535;E[2*A+2*R]+=_*oe,v(E,2*A+2*R),E[2*A+2*R+1]+=k*oe,v(E,2*A+2*R+1),E[2*A+2*R+1]+=_*G,v(E,2*A+2*R+1),E[2*A+2*R+2]+=k*G,v(E,2*A+2*R+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new o(E,0)};function v(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function S(T,y){this.g=T,this.h=y}function O(T,y){if(x(y))throw Error("division by zero");if(x(T))return new S(f,f);if(P(T))return y=O(N(T),y),new S(N(y.g),N(y.h));if(P(y))return y=O(T,N(y)),new S(N(y.g),y.h);if(T.g.length>30){if(P(T)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;A.l(T)<=0;)E=U(E),A=U(A);var R=j(E,1),k=j(A,1);for(A=j(A,2),E=j(E,2);!x(A);){var _=k.add(A);_.l(T)<=0&&(R=R.add(E),k=_),A=j(A,1),E=j(E,1)}return y=w(T,R.j(y)),new S(R,y)}for(R=f;T.l(y)>=0;){for(E=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),k=c(E),_=k.j(y);P(_)||_.l(T)>0;)E-=A,k=c(E),_=k.j(y);x(k)&&(k=m),R=R.add(k),T=w(T,_)}return new S(R,T)}t.B=function(T){return O(this,T).h},t.and=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)&T.i(A);return new o(E,this.h&T.h)},t.or=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)|T.i(A);return new o(E,this.h|T.h)},t.xor=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)^T.i(A);return new o(E,this.h^T.h)};function U(T){const y=T.g.length+1,E=[];for(let A=0;A<y;A++)E[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(E,T.h)}function j(T,y){const E=y>>5;y%=32;const A=T.g.length-E,R=[];for(let k=0;k<A;k++)R[k]=y>0?T.i(k+E)>>>y|T.i(k+E+1)<<32-y:T.i(k+E);return new o(R,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,FT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ur=o}).apply(typeof G_<"u"?G_:typeof self<"u"?self:typeof window<"u"?window:{});var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jT,bo,BT,Jl,gf,zT,$T,WT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof kl=="object"&&kl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in p))break e;p=p[b]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,b,D){for(var B=Array(arguments.length-2),te=2;te<arguments.length;te++)B[te-2]=arguments[te];return h.prototype[b].apply(g,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function x(a,h){for(let g=1;g<arguments.length;g++){const b=arguments[g];var p=typeof b;if(p=p!="object"?p:b?Array.isArray(b)?"array":p:"null",p=="array"||p=="object"&&typeof b.length=="number"){p=a.length||0;const D=b.length||0;a.length=p+D;for(let B=0;B<D;B++)a[p+B]=b[B]}else a.push(b)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function w(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const g=S.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new P(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let U,j=!1,T=new v,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(p){N(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function G(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(G,R),G.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&G.Z.h.call(this)},G.prototype.h=function(){G.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var oe="closure_listenable_"+(Math.random()*1e6|0),$e=0;function Vt(a,h,p,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=b,this.key=++$e,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function J(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function he(a){const h={};for(const p in a)h[p]=a[p];return h}const fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rt(a,h){let p,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(p in g)a[p]=g[p];for(let D=0;D<fe.length;D++)p=fe[D],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function qt(a){this.src=a,this.g={},this.h=0}qt.prototype.add=function(a,h,p,g,b){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const B=rn(a,h,g,b);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new Vt(h,this.src,D,!!g,b),h.fa=p,a.push(h)),h};function ri(a,h){const p=h.type;if(p in a.g){var g=a.g[p],b=Array.prototype.indexOf.call(g,h,void 0),D;(D=b>=0)&&Array.prototype.splice.call(g,b,1),D&&(W(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function rn(a,h,p,g){for(let b=0;b<a.length;++b){const D=a[b];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==g)return b}return-1}var rr="closure_lm_"+(Math.random()*1e6|0),Kc={};function $m(a,h,p,g,b){if(g&&g.once)return Hm(a,h,p,g,b);if(Array.isArray(h)){for(let D=0;D<h.length;D++)$m(a,h[D],p,g,b);return null}return p=Jc(p),a&&a[oe]?a.J(h,p,l(g)?!!g.capture:!!g,b):Wm(a,h,p,!1,g,b)}function Wm(a,h,p,g,b,D){if(!h)throw Error("Invalid event type");const B=l(b)?!!b.capture:!!b;let te=Yc(a);if(te||(a[rr]=te=new qt(a)),p=te.add(h,p,g,B,D),p.proxy)return p;if(g=U1(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)k||(b=B),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(Gm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function U1(){function a(p){return h.call(a.src,a.listener,p)}const h=F1;return a}function Hm(a,h,p,g,b){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Hm(a,h[D],p,g,b);return null}return p=Jc(p),a&&a[oe]?a.K(h,p,l(g)?!!g.capture:!!g,b):Wm(a,h,p,!0,g,b)}function qm(a,h,p,g,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)qm(a,h[D],p,g,b);else g=l(g)?!!g.capture:!!g,p=Jc(p),a&&a[oe]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],p=rn(h,p,g,b),p>-1&&(W(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Yc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=rn(h,p,g,b)),(p=a>-1?h[a]:null)&&Qc(p))}function Qc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[oe])ri(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(Gm(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Yc(h))?(ri(p,a),p.h==0&&(p.src=null,h[rr]=null)):W(a)}}}function Gm(a){return a in Kc?Kc[a]:Kc[a]="on"+a}function F1(a,h){if(a.da)a=!0;else{h=new G(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&Qc(a),a=p.call(g,h)}return a}function Yc(a){return a=a[rr],a instanceof qt?a:null}var Xc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Jc(a){return typeof a=="function"?a:(a[Xc]||(a[Xc]=function(h){return a.handleEvent(h)}),a[Xc])}function lt(){A.call(this),this.i=new qt(this),this.M=this,this.G=null}f(lt,A),lt.prototype[oe]=!0,lt.prototype.removeEventListener=function(a,h,p,g){qm(this,a,h,p,g)};function _t(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var b=h;h=new R(g,a),Rt(h,b)}b=!0;let D,B;if(p)for(B=p.length-1;B>=0;B--)D=h.g=p[B],b=Qa(D,g,!0,h)&&b;if(D=h.g=a,b=Qa(D,g,!0,h)&&b,b=Qa(D,g,!1,h)&&b,p)for(B=0;B<p.length;B++)D=h.g=p[B],b=Qa(D,g,!1,h)&&b}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)W(p[g]);delete a.g[h],a.h--}}this.G=null},lt.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},lt.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Qa(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let D=0;D<h.length;++D){const B=h[D];if(B&&!B.da&&B.capture==p){const te=B.listener,We=B.ha||B.src;B.fa&&ri(a.i,B),b=te.call(We,g)!==!1&&b}}return b&&!g.defaultPrevented}function j1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Km(a){a.g=j1(()=>{a.g=null,a.i&&(a.i=!1,Km(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class B1 extends A{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Km(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xs(a){A.call(this),this.h=a,this.g={}}f(Xs,A);var Qm=[];function Ym(a){Q(a.g,function(h,p){this.g.hasOwnProperty(p)&&Qc(h)},a),a.g={}}Xs.prototype.N=function(){Xs.Z.N.call(this),Ym(this)},Xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zc=o.JSON.stringify,z1=o.JSON.parse,$1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Xm(){}function Jm(){}var Js={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function eh(){R.call(this,"d")}f(eh,R);function th(){R.call(this,"c")}f(th,R);var ii={},Zm=null;function Ya(){return Zm=Zm||new lt}ii.Ia="serverreachability";function eg(a){R.call(this,ii.Ia,a)}f(eg,R);function Zs(a){const h=Ya();_t(h,new eg(h))}ii.STAT_EVENT="statevent";function tg(a,h){R.call(this,ii.STAT_EVENT,a),this.stat=h}f(tg,R);function vt(a){const h=Ya();_t(h,new tg(h,a))}ii.Ja="timingevent";function ng(a,h){R.call(this,ii.Ja,a),this.size=h}f(ng,R);function eo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function to(){this.g=!0}to.prototype.ua=function(){this.g=!1};function W1(a,h,p,g,b,D){a.info(function(){if(a.g)if(D){var B="",te=D.split("&");for(let de=0;de<te.length;de++){var We=te[de].split("=");if(We.length>1){const Xe=We[0];We=We[1];const gn=Xe.split("_");B=gn.length>=2&&gn[1]=="type"?B+(Xe+"="+We+"&"):B+(Xe+"=redacted&")}}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+p+`
`+B})}function H1(a,h,p,g,b,D,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+p+`
`+D+" "+B})}function Bi(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+G1(a,p)+(g?" "+g:"")})}function q1(a,h){a.info(function(){return"TIMEOUT: "+h})}to.prototype.info=function(){};function G1(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var p=D[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return Zc(D)}catch{return h}}var Xa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},rg={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ig;function nh(){}f(nh,Xm),nh.prototype.g=function(){return new XMLHttpRequest},ig=new nh;function no(a){return encodeURIComponent(String(a))}function K1(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function ir(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new Xs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sg}function sg(){this.i=null,this.g="",this.h=!1}var og={},rh={};function ih(a,h,p){a.M=1,a.A=Za(mn(h)),a.u=p,a.R=!0,ag(a,null)}function ag(a,h){a.F=Date.now(),Ja(a),a.B=mn(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),wg(p.i,"t",g),a.C=0,p=a.j.L,a.h=new sg,a.g=Ug(a.j,p?h:null,!a.u),a.P>0&&(a.O=new B1(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Qm[0]=b.toString()),b=Qm);for(let D=0;D<b.length;D++){const B=$m(p,b[D],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?he(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Zs(),W1(a.i,a.v,a.B,a.l,a.S,a.u)}ir.prototype.ba=function(a){a=a.target;const h=this.O;h&&ar(a)==3?h.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const te=ar(this.g),We=this.g.ya(),de=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||kg(this.g)))){this.K||te!=4||We==7||(We==8||de<=0?Zs(3):Zs(2)),sh(this);var h=this.g.ca();this.X=h;var p=Q1(this);if(this.o=h==200,H1(this.i,this.v,this.B,this.l,this.S,te,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var D=g;break t}}D=null}if(a=D)Bi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,oh(this,a);else{this.o=!1,this.m=3,vt(12),si(this),ro(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<p.length;)if(Xe=Y1(this,p),Xe==rh){te==4&&(this.m=4,vt(14),a=!1),Bi(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==og){this.m=4,vt(15),Bi(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Bi(this.i,this.l,Xe,null),oh(this,Xe);if(lg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||p.length!=0||this.h.h||(this.m=1,vt(16),a=!1),this.o=this.o&&a,!a)Bi(this.i,this.l,p,"[Invalid Chunked Response]"),si(this),ro(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ph(B),B.P=!0,vt(11))}}else Bi(this.i,this.l,p,null),oh(this,p);te==4&&si(this),this.o&&!this.K&&(te==4?Og(this.j,this):(this.o=!1,Ja(this)))}else cS(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),si(this),ro(this)}}}catch{}finally{}};function Q1(a){if(!lg(a))return a.g.la();const h=kg(a.g);if(h==="")return"";let p="";const g=h.length,b=ar(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return si(a),ro(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,p+=a.h.i.decode(h[D],{stream:!(b&&D==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function lg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Y1(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?rh:(p=Number(h.substring(p,g)),isNaN(p)?og:(g+=1,g+p>h.length?rh:(h=h.slice(g,g+p),a.C=g+p,h)))}ir.prototype.cancel=function(){this.K=!0,si(this)};function Ja(a){a.T=Date.now()+a.H,ug(a,a.H)}function ug(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=eo(c(a.aa,a),h)}function sh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ir.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(q1(this.i,this.B),this.M!=2&&(Zs(),vt(17)),si(this),this.m=2,ro(this)):ug(this,this.T-a)};function ro(a){a.j.I==0||a.K||Og(a.j,a)}function si(a){sh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ym(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function oh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||ah(p.h,a))){if(!a.L&&ah(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)il(p),nl(p);else break e;fh(p),vt(18)}}else p.xa=b[1],0<p.xa-p.K&&b[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=eo(c(p.Va,p),6e3));dg(p.h)<=1&&p.ta&&(p.ta=void 0)}else ai(p,11)}else if((a.L||p.g==a)&&il(p),!_(h))for(b=p.Ba.g.parse(h),h=0;h<b.length;h++){let de=b[h];const Xe=de[0];if(!(Xe<=p.K))if(p.K=Xe,de=de[1],p.I==2)if(de[0]=="c"){p.M=de[1],p.ba=de[2];const gn=de[3];gn!=null&&(p.ka=gn,p.j.info("VER="+p.ka));const li=de[4];li!=null&&(p.za=li,p.j.info("SVER="+p.za));const lr=de[5];lr!=null&&typeof lr=="number"&&lr>0&&(g=1.5*lr,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const ur=a.g;if(ur){const ol=ur.g?ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ol){var D=g.h;D.g||ol.indexOf("spdy")==-1&&ol.indexOf("quic")==-1&&ol.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(lh(D,D.h),D.h=null))}if(g.G){const mh=ur.g?ur.g.getResponseHeader("X-HTTP-Session-Id"):null;mh&&(g.wa=mh,ge(g.J,g.G,mh))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var B=a;if(g.na=Mg(g,g.L?g.ba:null,g.W),B.L){fg(g.h,B);var te=B,We=g.O;We&&(te.H=We),te.D&&(sh(te),Ja(te)),g.g=B}else bg(g);p.i.length>0&&rl(p)}else de[0]!="stop"&&de[0]!="close"||ai(p,7);else p.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?ai(p,7):dh(p):de[0]!="noop"&&p.l&&p.l.qa(de),p.A=0)}}Zs(4)}catch{}}var X1=class{constructor(a,h){this.g=a,this.map=h}};function cg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dg(a){return a.h?1:a.g?a.g.size:0}function ah(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lh(a,h){a.g?a.g.add(h):a.h=h}function fg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}cg.prototype.cancel=function(){if(this.i=pg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return I(a.i)}var mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J1(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let b,D=null;g>=0?(b=a[p].substring(0,g),D=a[p].substring(g+1)):b=a[p],h(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function sr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof sr?(this.l=a.l,io(this,a.j),this.o=a.o,this.g=a.g,so(this,a.u),this.h=a.h,uh(this,Eg(a.i)),this.m=a.m):a&&(h=String(a).match(mg))?(this.l=!1,io(this,h[1]||"",!0),this.o=oo(h[2]||""),this.g=oo(h[3]||"",!0),so(this,h[4]),this.h=oo(h[5]||"",!0),uh(this,h[6]||"",!0),this.m=oo(h[7]||"")):(this.l=!1,this.i=new lo(null,this.l))}sr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ao(h,gg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ao(h,gg,!0),"@"),a.push(no(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ao(p,p.charAt(0)=="/"?tS:eS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ao(p,rS)),a.join("")},sr.prototype.resolve=function(a){const h=mn(this);let p=!!a.j;p?io(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)so(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=h.h.lastIndexOf("/");b!=-1&&(g=h.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const D=[];for(let B=0;B<b.length;){const te=b[B++];te=="."?g&&B==b.length&&D.push(""):te==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&B==b.length&&D.push("")):(D.push(te),g=!0)}g=D.join("/")}else g=b}return p?h.h=g:p=a.i.toString()!=="",p?uh(h,Eg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function mn(a){return new sr(a)}function io(a,h,p){a.j=p?oo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function so(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function uh(a,h,p){h instanceof lo?(a.i=h,iS(a.i,a.l)):(p||(h=ao(h,nS)),a.i=new lo(h,a.l))}function ge(a,h,p){a.i.set(h,p)}function Za(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function oo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ao(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Z1),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Z1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gg=/[#\/\?@]/g,eS=/[#\?:]/g,tS=/[#\?]/g,nS=/[#\?@]/g,rS=/#/g;function lo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function oi(a){a.g||(a.g=new Map,a.h=0,a.i&&J1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=lo.prototype,t.add=function(a,h){oi(this),this.i=null,a=zi(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function yg(a,h){oi(a),h=zi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _g(a,h){return oi(a),h=zi(a,h),a.g.has(h)}t.forEach=function(a,h){oi(this),this.g.forEach(function(p,g){p.forEach(function(b){a.call(h,b,g,this)},this)},this)};function vg(a,h){oi(a);let p=[];if(typeof h=="string")_g(a,h)&&(p=p.concat(a.g.get(zi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return oi(this),this.i=null,a=zi(this,a),_g(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=vg(this,a),a.length>0?String(a[0]):h):h};function wg(a,h,p){yg(a,h),p.length>0&&(a.i=null,a.g.set(zi(a,h),I(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const b=no(p);p=vg(this,p);for(let D=0;D<p.length;D++){let B=b;p[D]!==""&&(B+="="+no(p[D])),a.push(B)}}return this.i=a.join("&")};function Eg(a){const h=new lo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function zi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function iS(a,h){h&&!a.j&&(oi(a),a.i=null,a.g.forEach(function(p,g){const b=g.toLowerCase();g!=b&&(yg(this,g),wg(this,b,p))},a)),a.j=h}function sS(a,h){const p=new to;if(o.Image){const g=new Image;g.onload=d(or,p,"TestLoadImage: loaded",!0,h,g),g.onerror=d(or,p,"TestLoadImage: error",!1,h,g),g.onabort=d(or,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(or,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function oS(a,h){const p=new to,g=new AbortController,b=setTimeout(()=>{g.abort(),or(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?or(p,"TestPingServer: ok",!0,h):or(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),or(p,"TestPingServer: error",!1,h)})}function or(a,h,p,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(p)}catch{}}function aS(){this.g=new $1}function ch(a){this.i=a.Sb||null,this.h=a.ab||!1}f(ch,Xm),ch.prototype.g=function(){return new el(this.i,this.h)};function el(a,h){lt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(el,lt),t=el.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,co(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?uo(this):co(this),this.readyState==3&&Tg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,uo(this))},t.Na=function(a){this.g&&(this.response=a,uo(this))},t.ga=function(){this.g&&uo(this)};function uo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,co(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function co(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(el.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ig(a){let h="";return Q(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function hh(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Ig(p),typeof a=="string"?p!=null&&no(p):ge(a,h,p))}function Re(a){lt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Re,lt);var lS=/^https?$/i,uS=["POST","PUT"];t=Re.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ig.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Sg(this,D);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)p.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(uS,h,void 0)>=0)||g||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of p)this.g.setRequestHeader(D,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Sg(this,D)}};function Sg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ag(a),tl(a)}function Ag(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,_t(this,"complete"),_t(this,"abort"),tl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tl(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Rg(this):this.Xa())},t.Xa=function(){Rg(this)};function Rg(a){if(a.h&&typeof s<"u"){if(a.v&&ar(a)==4)setTimeout(a.Ca.bind(a),0);else if(_t(a,"readystatechange"),ar(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=D===0){let B=String(a.D).match(mg)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!lS.test(B?B.toLowerCase():"")}p=g}if(p)_t(a,"complete"),_t(a,"success");else{a.o=6;try{var b=ar(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Ag(a)}}finally{tl(a)}}}}function tl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||_t(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ar(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ar(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),z1(h)}};function kg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cS(a){const h={};a=(a.g&&ar(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var p=K1(a[g]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[b]||[];h[b]=D,D.push(p)}J(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ho(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Pg(a){this.za=0,this.i=[],this.j=new to,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ho("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ho("baseRetryDelayMs",5e3,a),this.Za=ho("retryDelaySeedMs",1e4,a),this.Ta=ho("forwardChannelMaxRetries",2,a),this.va=ho("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new cg(a&&a.concurrentRequestLimit),this.Ba=new aS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Pg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){vt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Mg(this,null,this.W),rl(this)};function dh(a){if(Cg(a),a.I==3){var h=a.V++,p=mn(a.J);if(ge(p,"SID",a.M),ge(p,"RID",h),ge(p,"TYPE","terminate"),fo(a,p),h=new ir(a,a.j,h),h.M=2,h.A=Za(mn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Ug(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ja(h)}Vg(a)}function nl(a){a.g&&(ph(a),a.g.cancel(),a.g=null)}function Cg(a){nl(a),a.v&&(o.clearTimeout(a.v),a.v=null),il(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function rl(a){if(!hg(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),j||(U(),j=!0),T.add(h,a),a.D=0}}function hS(a,h){return dg(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=eo(c(a.Ea,a,h),Lg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new ir(this,this.j,a);let D=this.o;if(this.U&&(D?(D=he(D),Rt(D,this.U)):D=this.U),this.u!==null||this.R||(b.J=D,D=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Ng(this,b,h),p=mn(this.J),ge(p,"RID",a),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),fo(this,p),D&&(this.R?h="headers="+no(Ig(D))+"&"+h:this.u&&hh(p,this.u,D)),lh(this.h,b),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",h),ge(p,"SID","null"),b.U=!0,ih(b,p,null)):ih(b,p,h),this.I=2}}else this.I==3&&(a?xg(this,a):this.i.length==0||hg(this.h)||xg(this))};function xg(a,h){var p;h?p=h.l:p=a.V++;const g=mn(a.J);ge(g,"SID",a.M),ge(g,"RID",p),ge(g,"AID",a.K),fo(a,g),a.u&&a.o&&hh(g,a.u,a.o),p=new ir(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ng(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),lh(a.h,p),ih(p,g,h)}function fo(a,h){a.H&&Q(a.H,function(p,g){ge(h,g,p)}),a.l&&Q({},function(p,g){ge(h,g,p)})}function Ng(a,h,p){p=Math.min(a.i.length,p);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let te=-1;for(;;){const We=["count="+p];te==-1?p>0?(te=b[0].g,We.push("ofs="+te)):te=0:We.push("ofs="+te);let de=!0;for(let Xe=0;Xe<p;Xe++){var D=b[Xe].g;const gn=b[Xe].map;if(D-=te,D<0)te=Math.max(0,b[Xe].g-100),de=!1;else try{D="req"+D+"_"||"";try{var B=gn instanceof Map?gn:Object.entries(gn);for(const[li,lr]of B){let ur=lr;l(lr)&&(ur=Zc(lr)),We.push(D+li+"="+encodeURIComponent(ur))}}catch(li){throw We.push(D+"type="+encodeURIComponent("_badmap")),li}}catch{g&&g(gn)}}if(de){B=We.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function bg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),j||(U(),j=!0),T.add(h,a),a.A=0}}function fh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=eo(c(a.Da,a),Lg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Dg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=eo(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),nl(this),Dg(this))};function ph(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Dg(a){a.g=new ir(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=mn(a.na);ge(h,"RID","rpc"),ge(h,"SID",a.M),ge(h,"AID",a.K),ge(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(h,"TO",a.ia),ge(h,"TYPE","xmlhttp"),fo(a,h),a.u&&a.o&&hh(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Za(mn(h)),p.u=null,p.R=!0,ag(p,a)}t.Va=function(){this.C!=null&&(this.C=null,nl(this),fh(this),vt(19))};function il(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Og(a,h){var p=null;if(a.g==h){il(a),ph(a),a.g=null;var g=2}else if(ah(a.h,h))p=h.G,fg(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;g=Ya(),_t(g,new ng(g,p)),rl(a)}else bg(a);else if(b=h.m,b==3||b==0&&h.X>0||!(g==1&&hS(a,h)||g==2&&fh(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),b){case 1:ai(a,5);break;case 4:ai(a,10);break;case 3:ai(a,6);break;default:ai(a,2)}}}function Lg(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function ai(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),g=a.Ua;const b=!g;g=new sr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||io(g,"https"),Za(g),b?sS(g.toString(),p):oS(g.toString(),p)}else vt(2);a.I=0,a.l&&a.l.pa(h),Vg(a),Cg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Vg(a){if(a.I=0,a.ja=[],a.l){const h=pg(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ja,h),x(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Mg(a,h,p){var g=p instanceof sr?mn(p):new sr(p);if(g.g!="")h&&(g.g=h+"."+g.g),so(g,g.u);else{var b=o.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const D=new sr(null);g&&io(D,g),h&&(D.g=h),b&&so(D,b),p&&(D.h=p),g=D}return p=a.G,h=a.wa,p&&h&&ge(g,p,h),ge(g,"VER",a.ka),fo(a,g),g}function Ug(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Re(new ch({ab:p})):new Re(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fg(){}t=Fg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function sl(){}sl.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){lt.call(this),this.g=new Pg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!_(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new $i(this)}f(Mt,lt),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){dh(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Zc(a),a=p);h.i.push(new X1(h.Ya++,a)),h.I==3&&rl(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,dh(this.g),delete this.g,Mt.Z.N.call(this)};function jg(a){eh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(jg,eh);function Bg(){th.call(this),this.status=1}f(Bg,th);function $i(a){this.g=a}f($i,Fg),$i.prototype.ra=function(){_t(this.g,"a")},$i.prototype.qa=function(a){_t(this.g,new jg(a))},$i.prototype.pa=function(a){_t(this.g,new Bg)},$i.prototype.oa=function(){_t(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,WT=function(){return new sl},$T=function(){return Ya()},zT=ii,gf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xa.NO_ERROR=0,Xa.TIMEOUT=8,Xa.HTTP_ERROR=6,Jl=Xa,rg.COMPLETE="complete",BT=rg,Jm.EventType=Js,Js.OPEN="a",Js.CLOSE="b",Js.ERROR="c",Js.MESSAGE="d",lt.prototype.listen=lt.prototype.J,bo=Jm,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,jT=Re}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ws="12.11.0";function g2(t){Ws=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ci=new Mp("@firebase/firestore");function Hi(){return Ci.logLevel}function H(t,...e){if(Ci.logLevel<=re.DEBUG){const n=e.map(Qp);Ci.debug(`Firestore (${Ws}): ${t}`,...n)}}function Xn(t,...e){if(Ci.logLevel<=re.ERROR){const n=e.map(Qp);Ci.error(`Firestore (${Ws}): ${t}`,...n)}}function xi(t,...e){if(Ci.logLevel<=re.WARN){const n=e.map(Qp);Ci.warn(`Firestore (${Ws}): ${t}`,...n)}}function Qp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,HT(t,r,n)}function HT(t,e,n){let r=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Xn(r),new Error(r)}function ue(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||HT(e,i,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class _2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class v2{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new qT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class w2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class E2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new w2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new K_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new K_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=I2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function yf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return td(i)===td(s)?ie(i,s):td(i)?1:-1}return ie(t.length,e.length)}const S2=55296,A2=57343;function td(t){const e=t.charCodeAt(0);return e>=S2&&e<=A2}function Ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=vn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),i=vn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?vn.extractNumericId(e).compare(vn.extractNumericId(n)):yf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ur.fromString(e.substring(4,e.length-2))}}class pe extends vn{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const R2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends vn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return R2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Q_}static keyField(){return new it([Q_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(pe.fromString(e))}static fromName(e){return new K(pe.fromString(e).popFirst(5))}static empty(){return new K(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function k2(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Y_(t){if(!K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function X_(t){if(K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function KT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Pc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pc(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function P2(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function za(t,e){if(!KT(t))throw new $(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=-62135596800,Z_=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Z_);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<J_)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Z_}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(za(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-J_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Be("string",_e._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new _e(0,0))}static max(){return new X(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ia=-1;function C2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new Wr(i,K.empty(),e)}function x2(t){return new Wr(t.readTime,t.key,Ia)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(X.min(),K.empty(),Ia)}static max(){return new Wr(X.max(),K.empty(),Ia)}}function N2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class D2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==b2)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function O2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Xp=-1;function xc(t){return t==null}function Uu(t){return t===0&&1/t==-1/0}function L2(t){return typeof t=="number"&&Number.isInteger(t)&&!Uu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="";function V2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ev(e)),e=M2(t.get(n),e);return ev(e)}function M2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case QT:n+="";break;default:n+=s}}return n}function ev(t){return t+QT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nv(this.data.getIterator())}getIteratorFrom(e){return new nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ke(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class XT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new XT("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const U2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=U2.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="server_timestamp",ZT="__type__",eI="__previous_value__",tI="__local_write_time__";function Jp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ZT])==null?void 0:r.stringValue)===JT}function Nc(t){const e=t.mapValue.fields[eI];return Jp(e)?Nc(e):e}function Sa(t){const e=Hr(t.mapValue.fields[tI].timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n,r,i,s,o,l,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const Fu="(default)";class Aa{constructor(e,n){this.projectId=e,this.database=n||Fu}static empty(){return new Aa("","")}get isDefaultDatabase(){return this.database===Fu}isEqual(e){return e instanceof Aa&&e.projectId===this.projectId&&e.database===this.database}}function j2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="__type__",rI="__max__",Cl={mapValue:{fields:{__type__:{stringValue:rI}}}},iI="__vector__",ju="value";function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jp(t)?4:z2(t)?9007199254740991:B2(t)?10:11:Y(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sa(t).isEqual(Sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),l=Hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return qr(i.bytesValue).isEqual(qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?Uu(o)===Uu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(tv(o)!==tv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Nn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function Ra(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return rv(t.timestampValue,e.timestampValue);case 4:return rv(Sa(t),Sa(e));case 5:return yf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=qr(s),u=qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ie(l[c],u[c]);if(d!==0)return d}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(be(s.latitude),be(o.latitude));return l!==0?l:ie(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return iv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,I,x,P;const l=s.fields||{},u=o.fields||{},c=(m=l[ju])==null?void 0:m.arrayValue,d=(I=u[ju])==null?void 0:I.arrayValue,f=ie(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return f!==0?f:iv(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cl.mapValue&&o===Cl.mapValue)return 0;if(s===Cl.mapValue)return 1;if(o===Cl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=yf(u[f],d[f]);if(m!==0)return m;const I=Cs(l[u[f]],c[d[f]]);if(I!==0)return I}return ie(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function rv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Hr(t),r=Hr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function iv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Cs(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function xs(t){return _f(t)}function _f(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=_f(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_f(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Zl(t){switch(Gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nc(t);return e?16+Zl(e):16;case 5:return 2*t.stringValue.length;case 6:return qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Zl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ti(r.fields,(s,o)=>{i+=s.length+Zl(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function sv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vf(t){return!!t&&"integerValue"in t}function Zp(t){return!!t&&"arrayValue"in t}function ov(t){return!!t&&"nullValue"in t}function av(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function eu(t){return!!t&&"mapValue"in t}function B2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[nI])==null?void 0:r.stringValue)===iI}function Qo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qo(t.arrayValue.values[n]);return e}return{...t}}function z2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qo(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Qo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ti(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(Qo(this.value))}}function sI(t){const e=[];return ti(t.fields,(n,r)=>{const i=new it([n]);if(eu(r)){const s=sI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,X.min(),X.min(),X.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,X.min(),X.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,X.min(),X.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,n){this.position=e,this.inclusive=n}}function lv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function uv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function $2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class oI{}class je extends oI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H2(e,n,r):n==="array-contains"?new K2(e,r):n==="in"?new Q2(e,r):n==="not-in"?new Y2(e,r):n==="array-contains-any"?new X2(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new q2(e,r):new G2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cs(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends oI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return aI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function aI(t){return t.op==="and"}function lI(t){return W2(t)&&aI(t)}function W2(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function wf(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(lI(t))return t.filters.map(e=>wf(e)).join(",");{const e=t.filters.map(n=>wf(n)).join(",");return`${t.op}(${e})`}}function uI(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&uI(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function cI(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(cI).join(" ,")+"}"}(t):"Filter"}class H2 extends je{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class q2 extends je{constructor(e,n){super(e,"in",n),this.keys=hI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G2 extends je{constructor(e,n){super(e,"not-in",n),this.keys=hI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class K2 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zp(n)&&Ra(n.arrayValue,this.value)}}class Q2 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ra(this.value.arrayValue,n)}}class Y2 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ra(this.value.arrayValue,n)}}class X2 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ra(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function cv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new J2(t,e,n,r,i,s,o)}function em(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.Te=n}return e.Te}function tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uv(t.startAt,e.startAt)&&uv(t.endAt,e.endAt)}function Ef(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Z2(t,e,n,r,i,s,o,l){return new Gs(t,e,n,r,i,s,o,l)}function bc(t){return new Gs(t)}function hv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function eD(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function dI(t){return t.collectionGroup!==null}function Yo(t){const e=Z(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new ka(s,r))}),n.has(it.keyField().canonicalString())||e.Ee.push(new ka(it.keyField(),r))}return e.Ee}function kn(t){const e=Z(t);return e.Ie||(e.Ie=tD(e,Yo(t))),e.Ie}function tD(t,e){if(t.limitType==="F")return cv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ka(i.field,s)});const n=t.endAt?new Bu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bu(t.startAt.position,t.startAt.inclusive):null;return cv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Tf(t,e){const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nD(t,e){const n=t.explicitOrderBy.concat([e]);return new Gs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function zu(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return tm(kn(t),kn(e))&&t.limitType===e.limitType}function fI(t){return`${em(kn(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cI(i)).join(", ")}]`),xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>xs(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=lv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Yo(r),i)||r.endAt&&!function(o,l,u){const c=lv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Yo(r),i))}(t,e)}function rD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pI(t){return(e,n)=>{let r=!1;for(const i of Yo(t)){const s=iD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iD(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Cs(u,c):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new Ae(K.comparator);function Jn(){return sD}const mI=new Ae(K.comparator);function Do(...t){let e=mI;for(const n of t)e=e.insert(n.key,n);return e}function gI(t){let e=mI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gi(){return Xo()}function yI(){return Xo()}function Xo(){return new Fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const oD=new Ae(K.comparator),aD=new Ke(K.comparator);function se(...t){let e=aD;for(const n of t)e=e.add(n);return e}const lD=new Ke(ie);function uD(){return lD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function _I(t){return{integerValue:""+t}}function vI(t,e){return L2(e)?_I(e):nm(t,e)}/**
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
 */class Lc{constructor(){this._=void 0}}function cD(t,e,n){return t instanceof Pa?function(i,s){const o={fields:{[ZT]:{stringValue:JT},[tI]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jp(s)&&(s=Nc(s)),s&&(o.fields[eI]=s),{mapValue:o}}(n,e):t instanceof Ns?EI(t,e):t instanceof Ca?TI(t,e):function(i,s){const o=wI(i,s),l=dv(o)+dv(i.Ae);return vf(o)&&vf(i.Ae)?_I(l):nm(i.serializer,l)}(t,e)}function hD(t,e,n){return t instanceof Ns?EI(t,e):t instanceof Ca?TI(t,e):n}function wI(t,e){return t instanceof xa?function(r){return vf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pa extends Lc{}class Ns extends Lc{constructor(e){super(),this.elements=e}}function EI(t,e){const n=II(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ca extends Lc{constructor(e){super(),this.elements=e}}function TI(t,e){let n=II(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class xa extends Lc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function dv(t){return be(t.integerValue||t.doubleValue)}function II(t){return Zp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n){this.field=e,this.transform=n}}function dD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ns&&i instanceof Ns||r instanceof Ca&&i instanceof Ca?Ps(r.elements,i.elements,Nn):r instanceof xa&&i instanceof xa?Nn(r.Ae,i.Ae):r instanceof Pa&&i instanceof Pa}(t.transform,e.transform)}class fD{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vc{}function SI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new im(t.key,Zt.none()):new $a(t.key,t.data,Zt.none());{const n=t.data,r=Ct.empty();let i=new Ke(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ni(t.key,r,new jt(i.toArray()),Zt.none())}}function pD(t,e,n){t instanceof $a?function(i,s,o){const l=i.value.clone(),u=pv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ni?function(i,s,o){if(!tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=pv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(AI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Jo(t,e,n,r){return t instanceof $a?function(s,o,l,u){if(!tu(s.precondition,o))return l;const c=s.value.clone(),d=mv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ni?function(s,o,l,u){if(!tu(s.precondition,o))return l;const c=mv(s.fieldTransforms,u,o),d=o.data;return d.setAll(AI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wI(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function fv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ps(r,i,(s,o)=>dD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends Vc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ni extends Vc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pv(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hD(o,l,n[i]))}return r}function mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cD(s,o,e))}return r}class im extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gD extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=SI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>fv(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>fv(n,r))}}class sm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return oD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sm(e,n,r,i)}}/**
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
 */class _D{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ae;function wD(t){switch(t){case V.OK:return Y(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function RI(t){if(t===void 0)return Xn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ve.OK:return V.OK;case Ve.CANCELLED:return V.CANCELLED;case Ve.UNKNOWN:return V.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return V.INTERNAL;case Ve.UNAVAILABLE:return V.UNAVAILABLE;case Ve.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ve.NOT_FOUND:return V.NOT_FOUND;case Ve.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ve.ABORTED:return V.ABORTED;case Ve.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ve.DATA_LOSS:return V.DATA_LOSS;default:return Y(39323,{code:t})}}(ae=Ve||(Ve={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ED(){return new TextEncoder}/**
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
 */const TD=new Ur([4294967295,4294967295],0);function gv(t){const e=ED().encode(t),n=new FT;return n.update(e),new Uint8Array(n.digest())}function yv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([i,s],0)]}class om{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oo(`Invalid padding: ${n}`);if(r<0)throw new Oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ur.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ur.fromNumber(r)));return i.compare(TD)===1&&(i=new Ur([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=gv(e),[r,i]=yv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new om(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=gv(e),[r,i]=yv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mc(X.min(),i,new Ae(ie),Jn(),se())}}class Wa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wa(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class kI{constructor(e,n){this.targetId=e,this.Ce=n}}class PI{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class _v{constructor(){this.ve=0,this.Fe=vv(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new Wa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=vv()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ID{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jn(),this.Je=xl(),this.He=xl(),this.Ze=new Ae(ie)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ef(s))if(r===0){const o=new K(s.path);this.et(n,o,pt.newNoDocument(o,X.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=qr(r).toUint8Array()}catch(u){if(u instanceof XT)return xi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new om(o,i,s)}catch(u){return xi(u instanceof Oo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ef(l.target)){const u=new K(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,pt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=se();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Mc(e,n,this.Ze,this.je,r);return this.je=Jn(),this.Je=xl(),this.He=xl(),this.Ze=new Ae(ie),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new _v,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ke(ie),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ke(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _v),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xl(){return new Ae(K.comparator)}function vv(){return new Ae(K.comparator)}const SD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RD=(()=>({and:"AND",or:"OR"}))();class kD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function If(t,e){return t.useProto3Json||xc(e)?e:{value:e}}function $u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PD(t,e){return $u(t,e.toTimestamp())}function Pn(t){return ue(!!t,49232),X.fromTimestamp(function(n){const r=Hr(n);return new _e(r.seconds,r.nanos)}(t))}function am(t,e){return Sf(t,e).canonicalString()}function Sf(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xI(t){const e=pe.fromString(t);return ue(LI(e),10190,{key:e.toString()}),e}function Af(t,e){return am(t.databaseId,e.path)}function nd(t,e){const n=xI(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(bI(n))}function NI(t,e){return am(t.databaseId,e)}function CD(t){const e=xI(t);return e.length===4?pe.emptyPath():bI(e)}function Rf(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bI(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wv(t,e,n){return{name:Af(t,e),fields:n.value.mapValue.fields}}function xD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ue(d===void 0||typeof d=="string",58123),at.fromBase64String(d||"")):(ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:RI(c.code);return new $(d,c.message||"")}(o);n=new PI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nd(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):X.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new nu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nd(t,r.document),s=r.readTime?Pn(r.readTime):X.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new nu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nd(t,r.document),s=r.removedTargetIds||[];n=new nu([],s,i,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vD(i,s),l=r.targetId;n=new kI(l,o)}}return n}function ND(t,e){let n;if(e instanceof $a)n={update:wv(t,e.key,e.value)};else if(e instanceof im)n={delete:Af(t,e.key)};else if(e instanceof ni)n={update:wv(t,e.key,e.data),updateMask:jD(e.fieldMask)};else{if(!(e instanceof gD))return Y(16599,{dt:e.type});n={verify:Af(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function bD(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(X.min())&&(o=Pn(s)),new fD(o,i.transformResults||[])}(n,e))):[]}function DD(t,e){return{documents:[NI(t,e.path)]}}function OD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NI(t,i);const s=function(c){if(c.length!==0)return OI(pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Gi(m.field),direction:MD(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=If(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function LD(t){let e=CD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=DI(f);return m instanceof pn&&lI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(x){return new ka(Ki(x.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,xc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,I=f.values||[];return new Bu(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,I=f.values||[];return new Bu(I,m)}(n.endAt)),Z2(e,i,o,s,l,"F",u,c)}function VD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function DI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ki(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ki(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ki(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(Ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>DI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function MD(t){return SD[t]}function UD(t){return AD[t]}function FD(t){return RD[t]}function Gi(t){return{fieldPath:t.canonicalString()}}function Ki(t){return it.fromServerFormat(t.fieldPath)}function OI(t){return t instanceof je?function(n){if(n.op==="=="){if(av(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NAN"}};if(ov(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(av(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NAN"}};if(ov(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(n.field),op:UD(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>OI(i));return r.length===1?r[0]:{compositeFilter:{op:FD(n.op),filters:r}}}(t):Y(54877,{filter:t})}function jD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function LI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function VI(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BD{constructor(e){this.yt=e}}function zD(t){const e=LD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.bn=new WD}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Wr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class WD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(pe.comparator)).toArray()}}/**
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
 */const Ev={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},MI=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(MI,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new bs(0)}static ar(){return new bs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="LruGarbageCollector",HD=1048576;function Iv([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class qD{constructor(e){this.Pr=e,this.buffer=new Ke(Iv),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Iv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Tv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qs(n)?H(Tv,"Ignoring IndexedDB error during garbage collection: ",n):await Hs(n)}await this.Ar(3e5)})}}class KD{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Cc.ce);const r=new qD(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ev)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ev):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Hi()<=re.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function QD(t,e){return new KD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.changes=new Fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Jo(r.mutation,i,jt.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Do();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Jn();const o=Xo(),l=function(){return Xo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ni)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Jo(d.mutation,c,d.mutation.getFieldMask(),_e.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new XD(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Xo();let i=new Ae((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||jt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=yI();d.forEach(m=>{if(!s.has(m)){const I=SI(n.get(m),r.get(m));I!==null&&f.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return eD(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(gi());let l=Ia,u=s;return o.next(c=>M.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:l,changes:gI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Do();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Do();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(f,m){return new Gs(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,pt.newInvalidDocument(d)))});let l=Do();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Jo(d.mutation,c,jt.empty(),_e.now()),Oc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:zD(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class eO{constructor(){this.overlays=new Ae(K.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=gi(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=gi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=gi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _D(n,r));let s=this.Lr.get(n);s===void 0&&(s=se(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class tO{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.kr=new Ke(Je.qr),this.Kr=new Ke(Je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Je(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new pe([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new K(new pe([])),r=new Je(n,e),i=new Je(n,e+1);let s=se();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return K.comparator(e.key,n.key)||ie(e.Jr,n.Jr)}static Ur(e,n){return ie(e.Jr,n.Jr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ke(Je.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Xp:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ie);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Je(new K(s),0);let l=new Ke(ie);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Je(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.ti=e,this.docs=function(){return new Ae(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||N2(x2(d),r)<=0||(i.has(d.key)||Oc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iO(this)}getSize(e){return M.resolve(this.size)}}class iO extends YD{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.persistence=e,this.ri=new Fi(n=>em(n),tm),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new lm,this.targetCount=0,this.oi=bs._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this._i={},this.overlays={},this.ai=new Cc(0),this.ui=!1,this.ui=!0,this.ci=new tO,this.referenceDelegate=e(this),this.li=new sO(this),this.indexManager=new $D,this.remoteDocumentCache=function(i){return new rO(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new BD(n),this.Pi=new ZD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new nO(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new oO(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class oO extends D2{constructor(e){super(),this.currentSequenceNumber=e}}class um{constructor(e){this.persistence=e,this.Ri=new lm,this.Ai=null}static Vi(e){return new um(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Wu{constructor(e,n){this.persistence=e,this.fi=new Fi(r=>V2(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=QD(this,n)}static Vi(e,n){return new Wu(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cm(e,n.fromCache,r,i)}}/**
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
 */class aO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return sC()?8:O2(gt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aO;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Hi()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Hi()<=re.DEBUG&&H("QueryEngine","Query:",qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Hi()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):M.resolve())}gs(e,n){if(hv(n))return M.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zu(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,zu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return hv(n)||i.isEqual(X.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Hi()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qi(n)),this.Ds(e,o,n,C2(i,Ia)).next(l=>l))})}Ss(e,n){let r=new Ke(pI(e));return n.forEach((i,s)=>{Oc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Hi()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",qi(n)),this.fs.getDocumentsMatchingQuery(e,n,Wr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="LocalStore",uO=3e8;class cO{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ae(ie),this.Fs=new Fi(s=>em(s),tm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JD(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function hO(t,e,n,r){return new cO(t,e,n,r)}async function FI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function dO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let I=M.resolve();return m.forEach(x=>{I=I.next(()=>d.getEntry(u,x)).next(P=>{const N=c.docVersions.get(x);ue(N!==null,48541),P.version.compareTo(N)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function fO(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?I=I.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(f,I),function(P,N,w){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=uO?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,I,d)&&l.push(n.li.updateTargetData(s,I))});let u=Jn(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(pO(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(X.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function pO(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(hm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function mO(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function kf(t,e,n){const r=Z(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qs(o))throw o;H(hm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Sv(t,e,n){const r=Z(t);let i=X.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=Z(u),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,kn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:se())).next(l=>(yO(r,rD(e),l),{documents:l,ks:s})))}function yO(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Av{constructor(){this.activeTargetIds=uD()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _O{constructor(){this.vo=new Av,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Av,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="ConnectivityMonitor";class kv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Rv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(Rv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nl=null;function Pf(){return Nl===null?Nl=function(){return 268435456+Math.round(2147483648*Math.random())}():Nl++,"0x"+Nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="RestConnection",wO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class EO{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Fu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Pf(),l=this.Qo(e,n.toUriEncodedString());H(rd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=Vi(c);return this.zo(e,l,u,r,d).then(f=>(H(rd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw xi(rd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=wO[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection",Io=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ys extends EO{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ys.c_){const e=$T();Io(e,zT.STAT_EVENT,n=>{n.stat===gf.PROXY?H(ht,"STAT_EVENT: detected buffering proxy"):n.stat===gf.NOPROXY&&H(ht,"STAT_EVENT: detected no buffering proxy")}),ys.c_=!0}}zo(e,n,r,i,s){const o=Pf();return new Promise((l,u)=>{const c=new jT;c.setWithCredentials(!0),c.listenOnce(BT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Jl.NO_ERROR:const f=c.getResponseJson();H(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Jl.TIMEOUT:H(ht,`RPC '${e}' ${o} timed out`),u(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const m=c.getStatus();if(H(ht,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const P=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(x.status);u(new $(P,x.message))}else u(new $(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(V.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(ht,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(ht,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Pf(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");H(ht,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let f=!1,m=!1;const I=new TO({Jo:x=>{m?H(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(f||(H(ht,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),H(ht,`RPC '${e}' stream ${i} sending:`,x),d.send(x))},Ho:()=>d.close()});return Io(d,bo.EventType.OPEN,()=>{m||(H(ht,`RPC '${e}' stream ${i} transport opened.`),I.i_())}),Io(d,bo.EventType.CLOSE,()=>{m||(m=!0,H(ht,`RPC '${e}' stream ${i} transport closed`),I.o_(),this.I_(d))}),Io(d,bo.EventType.ERROR,x=>{m||(m=!0,xi(ht,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),I.o_(new $(V.UNAVAILABLE,"The operation could not be completed")))}),Io(d,bo.EventType.MESSAGE,x=>{var P;if(!m){const N=x.data[0];ue(!!N,16349);const w=N,v=(w==null?void 0:w.error)||((P=w[0])==null?void 0:P.error);if(v){H(ht,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let O=function(T){const y=Ve[T];if(y!==void 0)return RI(y)}(S),U=v.message;S==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&xi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,U="Unknown error status: "+S+" with message "+v.message),m=!0,I.o_(new $(O,U)),d.close()}else H(ht,`RPC '${e}' stream ${i} received:`,N),I.__(N)}}),ys.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return WT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){return new ys(t)}function id(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return new kD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ys.c_=!1;class BI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="PersistentStream";class zI{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new BI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Pv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(Pv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SO extends zI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=xD(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Pn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Rf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ef(u)?{documents:DD(s,u)}:{query:OD(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=CI(s,o.resumeToken);const c=If(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=$u(s,o.snapshotVersion.toTimestamp());const c=If(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=VD(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Rf(this.serializer),n.removeTarget=e,this.q_(n)}}class AO extends zI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=bD(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Rf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ND(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{}class kO extends RO{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Sf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Sf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function PO(t,e,n,r){return new kO(t,e,n,r)}class CO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ni="RemoteStore";class xO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ji(this)&&(H(Ni,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.Ia.add(4),await Ha(c),c.Va.set("Unknown"),c.Ia.delete(4),await Fc(c)}(this))})}),this.Va=new CO(r,i)}}async function Fc(t){if(ji(t))for(const e of t.Ra)await e(!0)}async function Ha(t){for(const e of t.Ra)await e(!1)}function $I(t,e){const n=Z(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),mm(n)?pm(n):Ks(n).O_()&&fm(n,e))}function dm(t,e){const n=Z(t),r=Ks(n);n.Ea.delete(e),r.O_()&&WI(n,e),n.Ea.size===0&&(r.O_()?r.L_():ji(n)&&n.Va.set("Unknown"))}function fm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ks(t).Z_(e)}function WI(t,e){t.da.$e(e),Ks(t).X_(e)}function pm(t){t.da=new ID({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ks(t).start(),t.Va.ua()}function mm(t){return ji(t)&&!Ks(t).x_()&&t.Ea.size>0}function ji(t){return Z(t).Ia.size===0}function HI(t){t.da=void 0}async function NO(t){t.Va.set("Online")}async function bO(t){t.Ea.forEach((e,n)=>{fm(t,e)})}async function DO(t,e){HI(t),mm(t)?(t.Va.ha(e),pm(t)):t.Va.set("Unknown")}async function OO(t,e,n){if(t.Va.set("Online"),e instanceof PI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){H(Ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hu(t,r)}else if(e instanceof nu?t.da.Xe(e):e instanceof kI?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await jI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),WI(s,u);const f=new Ar(d.target,u,c,d.sequenceNumber);fm(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(Ni,"Failed to raise snapshot:",r),await Hu(t,r)}}async function Hu(t,e,n){if(!qs(e))throw e;t.Ia.add(1),await Ha(t),t.Va.set("Offline"),n||(n=()=>jI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Ni,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Fc(t)})}function qI(t,e){return e().catch(n=>Hu(t,n,e))}async function jc(t){const e=Z(t),n=Kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xp;for(;LO(e);)try{const i=await mO(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,VO(e,i)}catch(i){await Hu(e,i)}GI(e)&&KI(e)}function LO(t){return ji(t)&&t.Ta.length<10}function VO(t,e){t.Ta.push(e);const n=Kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function GI(t){return ji(t)&&!Kr(t).x_()&&t.Ta.length>0}function KI(t){Kr(t).start()}async function MO(t){Kr(t).ra()}async function UO(t){const e=Kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function FO(t,e,n){const r=t.Ta.shift(),i=sm.from(r,e,n);await qI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jc(t)}async function jO(t,e){e&&Kr(t).Y_&&await async function(r,i){if(function(o){return wD(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Kr(r).B_(),await qI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jc(r)}}(t,e),GI(t)&&KI(t)}async function Cv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H(Ni,"RemoteStore received new credentials");const r=ji(n);n.Ia.add(3),await Ha(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Fc(n)}async function BO(t,e){const n=Z(t);e?(n.Ia.delete(2),await Fc(n)):e||(n.Ia.add(2),await Ha(n),n.Va.set("Unknown"))}function Ks(t){return t.ma||(t.ma=function(n,r,i){const s=Z(n);return s.sa(),new SO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:NO.bind(null,t),Yo:bO.bind(null,t),t_:DO.bind(null,t),H_:OO.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),mm(t)?pm(t):t.Va.set("Unknown")):(await t.ma.stop(),HI(t))})),t.ma}function Kr(t){return t.fa||(t.fa=function(n,r,i){const s=Z(n);return s.sa(),new AO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:MO.bind(null,t),t_:jO.bind(null,t),ta:UO.bind(null,t),na:FO.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await jc(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Ni,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new gm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ym(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),qs(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static emptySet(e){return new _s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Do(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.ga=new Ae(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ds{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ds(e,n,_s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class $O{constructor(){this.queries=Nv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Nv(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function Nv(){return new Fi(t=>fI(t),Dc)}async function _m(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new zO,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ym(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&wm(n)}async function vm(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function WO(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&wm(n)}function HO(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function wm(t){t.Ca.forEach(e=>{e.next()})}var Cf,bv;(bv=Cf||(Cf={})).Ma="default",bv.Cache="cache";class Em{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.key=e}}class YI{constructor(e){this.key=e}}class qO{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=pI(e),this.tu=new _s(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new xv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),I=Oc(this.query,f)?f:null,x=!!m&&this.mutatedKeys.has(m.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;m&&I?m.data.isEqual(I.data)?x!==P&&(r.track({type:3,doc:I}),N=!0):this.su(m,I)||(r.track({type:2,doc:I}),N=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),N=!0):m&&!I&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(I?(o=o.add(I),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(I,x){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:N})}};return P(I)-P(x)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Ds(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new YI(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new QI(r))}),n}cu(e){this.Za=e.ks,this.Ya=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ds.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Tm="SyncEngine";class GO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KO{constructor(e){this.key=e,this.hu=!1}}class QO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Fi(l=>fI(l),Dc),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ae(K.comparator),this.Au=new Map,this.Vu=new lm,this.du={},this.mu=new Map,this.fu=bs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YO(t,e,n=!0){const r=n1(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await XI(r,e,n,!0),i}async function XO(t,e){const n=n1(t);await XI(n,e,!0,!1)}async function XI(t,e,n,r){const i=await gO(t.localStore,kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await JO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&$I(t.remoteStore,i),l}async function JO(t,e,n,r,i){t.pu=(f,m,I)=>async function(P,N,w,v){let S=N.view.ru(w);S.bs&&(S=await Sv(P.localStore,N.query,!1).then(({documents:T})=>N.view.ru(T,S)));const O=v&&v.targetChanges.get(N.targetId),U=v&&v.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(S,P.isPrimaryClient,O,U);return Ov(P,N.targetId,j.au),j.snapshot}(t,f,m,I);const s=await Sv(t.localStore,e,!0),o=new qO(e,s.ks),l=o.ru(s.documents),u=Wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Ov(t,n,c.au);const d=new GO(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function ZO(t,e,n){const r=Z(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Dc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&dm(r.remoteStore,i.targetId),xf(r,i.targetId)}).catch(Hs)):(xf(r,i.targetId),await kf(r.localStore,i.targetId,!0))}async function eL(t,e){const n=Z(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dm(n.remoteStore,r.targetId))}async function tL(t,e,n){const r=lL(t);try{const i=await function(o,l){const u=Z(o),c=_e.now(),d=l.reduce((I,x)=>I.add(x.key),se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=Jn(),P=se();return u.xs.getEntries(I,d).next(N=>{x=N,x.forEach((w,v)=>{v.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(N=>{f=N;const w=[];for(const v of l){const S=mD(v,f.get(v.key).overlayedDocument);S!=null&&w.push(new ni(v.key,S,sI(S.value.mapValue),Zt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(N=>{m=N;const w=N.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(I,N.batchId,w)})}).then(()=>({batchId:m.batchId,changes:gI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ae(ie)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await qa(r,i.changes),await jc(r.remoteStore)}catch(i){const s=ym(i,"Failed to persist write");n.reject(s)}}async function JI(t,e){const n=Z(t);try{const r=await fO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ue(o.hu,14607):i.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await qa(n,r,e)}catch(r){await Hs(r)}}function Dv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&wm(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nL(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ae(K.comparator);o=o.insert(s,pt.newNoDocument(s,X.min()));const l=se().add(s),u=new Mc(X.min(),new Map,new Ae(ie),o,l);await JI(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Im(r)}else await kf(r.localStore,e,!1).then(()=>xf(r,e,n)).catch(Hs)}async function rL(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await dO(n.localStore,e);e1(n,r,null),ZI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qa(n,i)}catch(i){await Hs(i)}}async function iL(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(ue(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);e1(r,e,n),ZI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qa(r,i)}catch(i){await Hs(i)}}function ZI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function e1(t,e,n){const r=Z(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function xf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||t1(t,r)})}function t1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(dm(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Im(t))}function Ov(t,e,n){for(const r of n)r instanceof QI?(t.Vu.addReference(r.key,e),sL(t,r)):r instanceof YI?(H(Tm,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||t1(t,r.key)):Y(19791,{wu:r})}function sL(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(H(Tm,"New document in limbo: "+n),t.Iu.add(r),Im(t))}function Im(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(pe.fromString(e)),r=t.fu.next();t.Au.set(r,new KO(n)),t.Ru=t.Ru.insert(n,r),$I(t.remoteStore,new Ar(kn(bc(n.path)),r,"TargetPurposeLimboResolution",Cc.ce))}}async function qa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=cm.Is(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,m=>M.forEach(m.Ts,I=>d.persistence.referenceDelegate.addReference(f,m.targetId,I)).next(()=>M.forEach(m.Es,I=>d.persistence.referenceDelegate.removeReference(f,m.targetId,I)))))}catch(f){if(!qs(f))throw f;H(hm,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const I=d.vs.get(m),x=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(x);d.vs=d.vs.insert(m,P)}}}(r.localStore,s))}async function oL(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H(Tm,"User change. New user:",e.toKey());const r=await FI(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qa(n,r.Ns)}}function aL(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let i=se();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function n1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nL.bind(null,e),e.Pu.H_=WO.bind(null,e.eventManager),e.Pu.yu=HO.bind(null,e.eventManager),e}function lL(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iL.bind(null,e),e}class qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return hO(this.persistence,new lO,e.initialUser,this.serializer)}Cu(e){return new UI(um.Vi,this.serializer)}Du(e){return new _O}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qu.provider={build:()=>new qu};class uL extends qu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof Wu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new GD(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new UI(r=>Wu.Vi(r,n),this.serializer)}}class Nf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oL.bind(null,this.syncEngine),await BO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $O}()}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=IO(e.databaseInfo);return PO(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new xO(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dv(this.syncEngine,n,0),function(){return kv.v()?new kv:new vO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new QO(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H(Ni,"RemoteStore shutting down."),s.Ia.add(5),await Ha(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Nf.provider={build:()=>new Nf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="FirestoreClient";class cL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Qr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Qr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ym(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sd(t,e){t.asyncQueue.verifyOperationInProgress(),H(Qr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await FI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hL(t);H(Qr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Cv(e.remoteStore,i)),t._onlineComponents=e}async function hL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Qr,"Using user provided OfflineComponentProvider");try{await sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;xi("Error using user provided cache. Falling back to memory cache: "+n),await sd(t,new qu)}}else H(Qr,"Using default OfflineComponentProvider"),await sd(t,new uL(void 0));return t._offlineComponents}async function r1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Qr,"Using user provided OnlineComponentProvider"),await Lv(t,t._uninitializedComponentsProvider._online)):(H(Qr,"Using default OnlineComponentProvider"),await Lv(t,new Nf))),t._onlineComponents}function dL(t){return r1(t).then(e=>e.syncEngine)}async function Gu(t){const e=await r1(t),n=e.eventManager;return n.onListen=YO.bind(null,e.syncEngine),n.onUnlisten=ZO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eL.bind(null,e.syncEngine),n}function fL(t,e,n,r){const i=new Sm(r),s=new Em(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>_m(await Gu(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>vm(await Gu(t),s))}}function pL(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Sm({next:m=>{d.Nu(),o.enqueueAndForget(()=>vm(s,f));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Em(bc(l.path),d,{includeMetadataChanges:!0,qa:!0});return _m(s,f)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}function mL(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Sm({next:m=>{d.Nu(),o.enqueueAndForget(()=>vm(s,f)),m.fromCache&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Em(l,d,{includeMetadataChanges:!0,qa:!0});return _m(s,f)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}function gL(t,e){const n=new zn;return t.asyncQueue.enqueueAndForget(async()=>tL(await dL(t),e,n)),n.promise}/**
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
 */function i1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL="ComponentProvider",Vv=new Map;function _L(t,e,n,r,i){return new F2(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i1(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="firestore.googleapis.com",Mv=!0;class Uv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=s1,this.ssl=Mv}else this.host=e.host,this.ssl=e.ssl??Mv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=MI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HD)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}k2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new y2;switch(r.type){case"firstParty":return new E2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vv.get(n);r&&(H(yL,"Removing Datastore"),Vv.delete(n),r.terminate())}(this),Promise.resolve()}}function vL(t,e,n,r={}){var c;t=Lt(t,Bc);const i=Vi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Vp(`https://${l}`),s.host!==s1&&s.host!==l&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!zr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=dt.MOCK_USER;else{d=$E(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(m)}t._authCredentials=new _2(new qT(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class Pe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(za(n,Pe._jsonSchema))return new Pe(e,r||null,new K(pe.fromString(n.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Be("string",Pe._jsonSchemaVersion),referencePath:Be("string")};class Fr extends nr{constructor(e,n,r){super(e,n,bc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new K(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function wL(t,e,...n){if(t=ee(t),GT("collection","path",e),t instanceof Bc){const r=pe.fromString(e,...n);return X_(r),new Fr(t,null,r)}{if(!(t instanceof Pe||t instanceof Fr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return X_(r),new Fr(t.firestore,null,r)}}function vs(t,e,...n){if(t=ee(t),arguments.length===1&&(e=Yp.newId()),GT("doc","path",e),t instanceof Bc){const r=pe.fromString(e,...n);return Y_(r),new Pe(t,null,new K(r))}{if(!(t instanceof Pe||t instanceof Fr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Y_(r),new Pe(t.firestore,t instanceof Fr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="AsyncQueue";class jv{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new BI(this,"async_queue_retry"),this._c=()=>{const r=id();r&&H(Fv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=id();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=id();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!qs(e))throw e;H(Fv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Xn("INTERNAL UNHANDLED ERROR: ",Bv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=gm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Y(47125,{Pc:Bv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Bv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Zn extends Bc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new jv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jv(e),this._firestoreClient=void 0,await e}}}function EL(t,e){const n=typeof t=="object"?t:Fp(),r=typeof t=="string"?t:e||Fu,i=gc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jE("firestore");s&&vL(i,...s)}return i}function zc(t){if(t._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||TL(t),t._firestoreClient}function TL(t){var r,i,s,o;const e=t._freezeSettings(),n=_L(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new cL(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(at.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(za(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:Be("string",Yt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cn._jsonSchemaVersion}}static fromJSON(e){if(za(e,Cn._jsonSchema))return new Cn(e.latitude,e.longitude)}}Cn._jsonSchemaVersion="firestore/geoPoint/1.0",Cn._jsonSchema={type:Be("string",Cn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
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
 */class dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(za(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new dn(e.vectorValues);throw new $(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Be("string",dn._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=/^__.*__$/;class SL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new $a(e,this.data,n,this.fieldTransforms)}}class o1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ni(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function a1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class $c{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new $c({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Ku(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(a1(this.dataSource)&&IL.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class AL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uc(e)}A(e,n,r,i=!1){return new $c({dataSource:e,methodName:n,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wc(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new AL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l1(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);Cm("Data must be an object, but it was:",o,r);const l=u1(r,o);let u,c;if(s.merge)u=new jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=bi(e,f,n);if(!o.contains(m))throw new $(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);d1(d,m)||d.push(m)}u=new jt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new SL(new Ct(l),u,c)}class Hc extends Qs{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hc}}function RL(t,e,n){return new $c({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Rm extends Qs{_toFieldTransform(e){return new rm(e.path,new Pa)}isEqual(e){return e instanceof Rm}}class km extends Qs{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=RL(this,e,!0),r=this.Sc.map(s=>Ys(s,n)),i=new Ns(r);return new rm(e.path,i)}isEqual(e){return e instanceof km&&zr(this.Sc,e.Sc)}}class Pm extends Qs{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new xa(e.serializer,vI(e.serializer,this.bc));return new rm(e.path,n)}isEqual(e){return e instanceof Pm&&this.bc===e.bc}}function kL(t,e,n,r){const i=t.A(1,e,n);Cm("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();ti(r,(u,c)=>{const d=h1(e,u,n);c=ee(c);const f=i.fc(d);if(c instanceof Hc)s.push(d);else{const m=Ys(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new jt(s);return new o1(o,l,i.fieldTransforms)}function PL(t,e,n,r,i,s){const o=t.A(1,e,n),l=[bi(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(bi(e,s[m])),u.push(s[m+1]);const c=[],d=Ct.empty();for(let m=l.length-1;m>=0;--m)if(!d1(c,l[m])){const I=l[m];let x=u[m];x=ee(x);const P=o.fc(I);if(x instanceof Hc)c.push(I);else{const N=Ys(x,P);N!=null&&(c.push(I),d.set(I,N))}}const f=new jt(c);return new o1(d,f,o.fieldTransforms)}function CL(t,e,n,r=!1){return Ys(n,t.A(r?4:3,e))}function Ys(t,e){if(c1(t=ee(t)))return Cm("Unsupported field value:",e,t),u1(t,e);if(t instanceof Qs)return function(r,i){if(!a1(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ys(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_e.fromDate(r);return{timestampValue:$u(i.serializer,s)}}if(r instanceof _e){const s=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$u(i.serializer,s)}}if(r instanceof Cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yt)return{bytesValue:CI(i.serializer,r._byteString)};if(r instanceof Pe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:am(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dn)return function(o,l){const u=o instanceof dn?o.toArray():o;return{mapValue:{fields:{[nI]:{stringValue:iI},[ju]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return nm(l.serializer,d)})}}}}}}(r,i);if(VI(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Pc(r)}`)}(t,e)}function u1(t,e){const n={};return YT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ti(t,(r,i)=>{const s=Ys(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function c1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Cn||t instanceof Yt||t instanceof Pe||t instanceof Qs||t instanceof dn||VI(t))}function Cm(t,e,n){if(!c1(n)||!KT(n)){const r=Pc(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function bi(t,e,n){if((e=ee(e))instanceof Am)return e._internalPath;if(typeof e=="string")return h1(t,e);throw Ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const xL=new RegExp("[~\\*/\\[\\]]");function h1(t,e,n){if(e.search(xL)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Am(...e.split("."))._internalPath}catch{throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ku(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,l+t+u)}function d1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ti(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ju].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>be(o.doubleValue));return new dn(n)}convertGeoPoint(e){return new Cn(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sa(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);ue(LI(r),9688,{name:e});const i=new Aa(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class xm extends NL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function zv(){return new Rm("serverTimestamp")}function JM(...t){return new km("arrayUnion",t)}function ZM(t){return new Pm("increment",t)}const $v="@firebase/firestore",Wv="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(bi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bL extends f1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nm{}class bm extends Nm{}function eU(t,e,...n){let r=[];e instanceof Nm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Dm).length,l=s.filter(u=>u instanceof qc).length;if(o>1||o>0&&l>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qc extends bm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return m1(e._query,n),new nr(e.firestore,e.converter,Tf(e._query,n))}_parse(e){const n=Wc(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gv(f,d);const x=[];for(const P of f)x.push(qv(u,s,P));m={arrayValue:{values:x}}}else m=qv(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gv(f,d),m=CL(l,o,f,d==="in"||d==="not-in");return je.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tU(t,e,n){const r=e,i=bi("where",t);return qc._create(i,r,n)}class Dm extends Nm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Dm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)m1(o,u),o=Tf(o,u)}(e._query,n),new nr(e.firestore,e.converter,Tf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Om extends bm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Om(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ka(s,o)}(e._query,this._field,this._direction);return new nr(e.firestore,e.converter,nD(e._query,n))}}function nU(t,e="asc"){const n=e,r=bi("orderBy",t);return Om._create(r,n)}class Lm extends bm{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Lm(e,n,r)}_apply(e){return new nr(e.firestore,e.converter,zu(e._query,this._limit,this._limitType))}}function rU(t){return P2("limit",t),Lm._create("limit",t,"F")}function qv(t,e,n){if(typeof(n=ee(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dI(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!K.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sv(t,new K(r))}if(n instanceof Pe)return sv(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pc(n)}.`)}function Gv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function m1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function g1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vi extends f1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vi._jsonSchemaVersion="firestore/documentSnapshot/1.0",vi._jsonSchema={type:Be("string",vi._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class ru extends vi{data(e={}){return super.data(e)}}class wi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ru(this._firestore,this._userDataWriter,r.key,r,new Lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ru(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ru(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:DL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */wi._jsonSchemaVersion="firestore/querySnapshot/1.0",wi._jsonSchema={type:Be("string",wi._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){t=Lt(t,Pe);const e=Lt(t.firestore,Zn),n=zc(e);return pL(n,t._key).then(r=>_1(e,t,r))}function iU(t){t=Lt(t,nr);const e=Lt(t.firestore,Zn),n=zc(e),r=new xm(e);return p1(t._query),mL(n,t._query).then(i=>new wi(e,r,t,i))}function Kv(t,e,n){t=Lt(t,Pe);const r=Lt(t.firestore,Zn),i=g1(t.converter,e,n),s=Wc(r);return Gc(r,[l1(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function Qu(t,e,n,...r){t=Lt(t,Pe);const i=Lt(t.firestore,Zn),s=Wc(i);let o;return o=typeof(e=ee(e))=="string"||e instanceof Am?PL(s,"updateDoc",t._key,e,n,r):kL(s,"updateDoc",t._key,e),Gc(i,[o.toMutation(t._key,Zt.exists(!0))])}function sU(t){return Gc(Lt(t.firestore,Zn),[new im(t._key,Zt.none())])}function OL(t,e){const n=Lt(t.firestore,Zn),r=vs(t),i=g1(t.converter,e),s=Wc(t.firestore);return Gc(n,[l1(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function oU(t,...e){var c,d,f;t=ee(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Hv(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Hv(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof Pe)o=Lt(t.firestore,Zn),l=bc(t._key.path),s={next:m=>{e[r]&&e[r](_1(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Lt(t,nr);o=Lt(m.firestore,Zn),l=m._query;const I=new xm(o);s={next:x=>{e[r]&&e[r](new wi(o,I,m,x))},error:e[r+1],complete:e[r+2]},p1(t._query)}const u=zc(o);return fL(u,l,i,s)}function Gc(t,e){const n=zc(t);return gL(n,e)}function _1(t,e,n){const r=n.docs.get(e._key),i=new xm(t);return new vi(t,i,e._key,r,new Lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){g2(Mi),ki(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Zn(new v2(r.getProvider("auth-internal")),new T2(o,r.getProvider("app-check-internal")),j2(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Rn($v,Wv,e),Rn($v,Wv,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="firebasestorage.googleapis.com",w1="storageBucket",LL=2*60*1e3,VL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Dn{constructor(e,n,r=0){super(od(e),`Firebase Storage: ${n} (${od(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return od(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function od(t){return"storage/"+t}function Vm(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Ce.UNKNOWN,t)}function ML(t){return new xe(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UL(t){return new xe(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Ce.UNAUTHENTICATED,t)}function jL(){return new xe(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BL(t){return new xe(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zL(){return new xe(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $L(){return new xe(Ce.CANCELED,"User canceled the upload/download.")}function WL(t){return new xe(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function HL(t){return new xe(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qL(){return new xe(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+w1+"' property when initializing the app?")}function GL(){return new xe(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function KL(){return new xe(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QL(t){return new xe(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bf(t){return new xe(Ce.INVALID_ARGUMENT,t)}function E1(){return new xe(Ce.APP_DELETED,"The Firebase app was deleted.")}function YL(t){return new xe(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zo(t,e){return new xe(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function So(t){throw new xe(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw HL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),x={bucket:1,path:3},P=n===v1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${P}/${i}/${N}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:I,indices:x,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<S.length;O++){const U=S[O],j=U.regex.exec(e);if(j){const T=j[U.indices.bucket];let y=j[U.indices.path];y||(y=""),r=new Bt(T,y),U.postModify(r);break}}if(r==null)throw WL(e);return r}}class XL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function f(N){i=setTimeout(()=>{i=null,t(I,u())},N)}function m(){s&&clearTimeout(s)}function I(N,...w){if(c){m();return}if(N){m(),d.call(null,N,...w);return}if(u()||o){m(),d.call(null,N,...w);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let x=!1;function P(N){x||(x=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),f(0)):N||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function ZL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t){return t!==void 0}function tV(t){return typeof t=="object"&&!Array.isArray(t)}function Mm(t){return typeof t=="string"||t instanceof String}function Qv(t){return Um()&&t instanceof Blob}function Um(){return typeof Blob<"u"}function Yv(t,e,n,r){if(r<e)throw bf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function T1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ei;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ei||(Ei={}));/**
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
 */function nV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,P)=>{this.resolve_=x,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new bl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ei.NO_ERROR,u=s.getStatus();if(!l||nV(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ei.ABORT;r(!1,new bl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new bl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());eV(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Vm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?E1():$L();o(u)}else{const u=zL();o(u)}};this.canceled_?n(!1,new bl(!1,null,!0)):this.backoffId_=JL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lV(t,e,n,r,i,s,o=!0,l=!1){const u=T1(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return oV(d,e),iV(d,n),sV(d,s),aV(d,r),new rV(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cV(...t){const e=uV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Um())return new Blob(t);throw new xe(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function dV(t){if(typeof atob>"u")throw QL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ad{constructor(e,n){this.data=e,this.contentType=n||null}}function fV(t,e){switch(t){case In.RAW:return new ad(I1(e));case In.BASE64:case In.BASE64URL:return new ad(S1(t,e));case In.DATA_URL:return new ad(mV(e),gV(e))}throw Vm()}function I1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pV(t){let e;try{e=decodeURIComponent(t)}catch{throw Zo(In.DATA_URL,"Malformed data URL.")}return I1(e)}function S1(t,e){switch(t){case In.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Zo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Zo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dV(e)}catch(i){throw i.message.includes("polyfill")?i:Zo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class A1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zo(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mV(t){const e=new A1(t);return e.base64?S1(In.BASE64,e.rest):pV(e.rest)}function gV(t){return new A1(t).contentType}function yV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){let r=0,i="";Qv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qv(this.data_)){const r=this.data_,i=hV(r,e,n);return i===null?null:new wr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wr(r,!0)}}static getBlob(...e){if(Um()){const n=e.map(r=>r instanceof wr?r.data_:r);return new wr(cV.apply(null,n))}else{const n=e.map(o=>Mm(o)?fV(In.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new wr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){let e;try{e=JSON.parse(t)}catch{return null}return tV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function k1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t,e){return e}class wt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||wV}}let Dl=null;function EV(t){return!Mm(t)||t.length<2?t:k1(t)}function P1(){if(Dl)return Dl;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(s,o){return EV(o)}const n=new wt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new wt("size");return i.xform=r,t.push(i),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Dl=t,Dl}function TV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function IV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return TV(r,t),r}function C1(t,e,n){const r=R1(e);return r===null?null:IV(t,r,n)}function SV(t,e,n,r){const i=R1(e);if(i===null||!Mm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),I=Fm(m,n,r),x=T1({alt:"media",token:c});return I+x})[0]}function AV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class x1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){if(!t)throw Vm()}function RV(t,e){function n(r,i){const s=C1(t,i,e);return N1(s!==null),s}return n}function kV(t,e){function n(r,i){const s=C1(t,i,e);return N1(s!==null),SV(s,i,t.host,t._protocol)}return n}function b1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=jL():i=FL():n.getStatus()===402?i=UL(t.bucket):n.getStatus()===403?i=BL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function PV(t){const e=b1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=ML(t.path)),s.serverResponse=i.serverResponse,s}return n}function CV(t,e,n){const r=e.fullServerUrl(),i=Fm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new x1(i,s,kV(t,n),o);return l.errorHandler=PV(e),l}function xV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function NV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=xV(null,e)),r}function bV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=NV(e,r,i),d=AV(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",I=wr.getBlob(f,r,m);if(I===null)throw GL();const x={name:c.fullPath},P=Fm(s,t.host,t._protocol),N="POST",w=t.maxUploadRetryTime,v=new x1(P,N,RV(t,n),w);return v.urlParams=x,v.headers=o,v.body=I.uploadData(),v.errorHandler=b1(e),v}class DV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ei.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ei.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ei.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw So("cannot .send() more than once");if(Vi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw So("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw So("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw So("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw So("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OV extends DV{initXhr(){this.xhr_.responseType="text"}}function D1(){return new OV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Di(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return k1(this._location.path)}get storage(){return this._service}get parent(){const e=_V(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Di(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YL(e)}}function LV(t,e,n){t._throwIfRoot("uploadBytes");const r=bV(t.storage,t._location,P1(),new wr(e,!0),n);return t.storage.makeRequestWithTokens(r,D1).then(i=>({metadata:i,ref:t}))}function VV(t){t._throwIfRoot("getDownloadURL");const e=CV(t.storage,t._location,P1());return t.storage.makeRequestWithTokens(e,D1).then(n=>{if(n===null)throw KL();return n})}function MV(t,e){const n=vV(t._location.path,e),r=new Bt(t._location.bucket,n);return new Di(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(t){return/^[A-Za-z]+:\/\//.test(t)}function FV(t,e){return new Di(t,e)}function O1(t,e){if(t instanceof jm){const n=t;if(n._bucket==null)throw qL();const r=new Di(n,n._bucket);return e!=null?O1(r,e):r}else return e!==void 0?MV(t,e):t}function jV(t,e){if(e&&UV(e)){if(t instanceof jm)return FV(t,e);throw bf("To use ref(service, url), the first argument must be a Storage instance.")}else return O1(t,e)}function Xv(t,e){const n=e==null?void 0:e[w1];return n==null?null:Bt.makeFromBucketSpec(n,t)}function BV(t,e,n,r={}){t.host=`${e}:${n}`;const i=Vi(e);i&&Vp(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:$E(s,t.app.options.projectId))}class jm{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=v1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LL,this._maxUploadRetryTime=VL,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=Xv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=Xv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Di(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new XL(E1());{const o=lV(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Jv="@firebase/storage",Zv="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="storage";function aU(t,e,n){return t=ee(t),LV(t,e,n)}function lU(t){return t=ee(t),VV(t)}function uU(t,e){return t=ee(t),jV(t,e)}function zV(t=Fp(),e){t=ee(t);const r=gc(t,L1).getImmediate({identifier:e}),i=jE("storage");return i&&$V(r,...i),r}function $V(t,e,n,r={}){BV(t,e,n,r)}function WV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new jm(n,r,i,e,Mi)}function HV(){ki(new $r(L1,WV,"PUBLIC").setMultipleInstances(!0)),Rn(Jv,Zv,""),Rn(Jv,Zv,"esm2020")}HV();const qV={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},Bm=qE(qV),Gt=d2(Bm);$N(Gt,AT);const ws=EL(Bm),cU=zV(Bm),ld=new En;/*! Capacitor: https://capacitorjs.com/ - MIT License */var Os;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Os||(Os={}));class ud extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const GV=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},KV=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:GV(t),s=()=>i()!=="web",o=f=>{const m=c.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(I=>I.name===f)},u=f=>t.console.error(f),c=new Map,d=(f,m={})=>{const I=c.get(f);if(I)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),I.proxy;const x=i(),P=l(f);let N;const w=async()=>(!N&&x in m?N=typeof m[x]=="function"?N=await m[x]():N=m[x]:e!==null&&!N&&"web"in m&&(N=typeof m.web=="function"?N=await m.web():N=m.web),N),v=(y,E)=>{var A,R;if(P){const k=P==null?void 0:P.methods.find(_=>E===_.name);if(k)return k.rtype==="promise"?_=>n.nativePromise(f,E.toString(),_):(_,G)=>n.nativeCallback(f,E.toString(),_,G);if(y)return(A=y[E])===null||A===void 0?void 0:A.bind(y)}else{if(y)return(R=y[E])===null||R===void 0?void 0:R.bind(y);throw new ud(`"${f}" plugin is not implemented on ${x}`,Os.Unimplemented)}},S=y=>{let E;const A=(...R)=>{const k=w().then(_=>{const G=v(_,y);if(G){const oe=G(...R);return E=oe==null?void 0:oe.remove,oe}else throw new ud(`"${f}.${y}()" is not implemented on ${x}`,Os.Unimplemented)});return y==="addListener"&&(k.remove=async()=>E()),k};return A.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(A,"name",{value:y,writable:!1,configurable:!1}),A},O=S("addListener"),U=S("removeListener"),j=(y,E)=>{const A=O({eventName:y},E),R=async()=>{const _=await A;U({eventName:y,callbackId:_},E)},k=new Promise(_=>A.then(()=>_({remove:R})));return k.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await R()},k},T=new Proxy({},{get(y,E){switch(E){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return P?j:O;case"removeListener":return U;default:return S(E)}}});return r[f]=T,c.set(f,{name:f,proxy:T,platforms:new Set([...Object.keys(m),...P?[x]:[]])}),T};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=u,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=ud,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},QV=t=>t.Capacitor=KV(t),Ne=QV(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ga=Ne.registerPlugin;class zm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new Ne.Exception(e,Os.Unimplemented)}unavailable(e="not available"){return new Ne.Exception(e,Os.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const e0=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),t0=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class YV extends zm{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=t0(i).trim(),s=t0(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=e0(e.key),r=e0(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Ga("CapacitorCookies",{web:()=>new YV});const XV=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),JV=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},ZV=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,u;return Array.isArray(o)?(u="",o.forEach(c=>{l=e?encodeURIComponent(c):c,u+=`${s}=${l}&`}),u.slice(0,-1)):(l=e?encodeURIComponent(o):o,u=`${s}=${l}`),`${r}&${u}`},"").substr(1):null,eM=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=JV(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,u)=>{s.append(u,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class tM extends zm{async request(e){const n=eM(e,e.webFetchExtra),r=ZV(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let u,c;switch(l){case"arraybuffer":case"blob":c=await s.blob(),u=await XV(c);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:u,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Ga("CapacitorHttp",{web:()=>new tM});var n0;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(n0||(n0={}));var r0;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(r0||(r0={}));class nM extends zm{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Ga("SystemBars",{web:()=>new nM});var i0;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(i0||(i0={}));var s0;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(s0||(s0={}));const rM=Ga("FirebaseAuthentication",{web:()=>ze(()=>import("./web-0e96bee6.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),V1=L.createContext();function Ka(){return L.useContext(V1)}function iM({children:t}){const[e,n]=L.useState(null),[r,i]=L.useState(!0),s=L.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async P=>{if(!P){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",P.email);try{const N=vs(ws,"users",P.uid),w=await y1(N),v=P.email==="prince86944@gmail.com";if(w.exists()){const S=w.data();console.log("[AUTH] Existing user data found:",S.role),v&&S.role!==o.SUPER_ADMIN?(await Qu(N,{role:o.SUPER_ADMIN}),n({...P,...S,role:o.SUPER_ADMIN})):n({...P,...S})}else{console.log("[AUTH] No existing profile. Creating new entry...");const S={uid:P.uid,name:P.displayName||"Scholar",email:P.email,phone:P.phoneNumber||"",createdAt:zv(),role:v?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await Kv(N,S),n({...P,...S})}}catch(N){console.error("[AUTH] Profile sync critical failure:",N),n({uid:P.uid,email:P.email,name:P.displayName||"Scholar",role:P.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function u(P,N,w,v){const S=await ON(Gt,P,N),O={uid:S.user.uid,name:w,email:P,phone:v,createdAt:zv(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await Kv(vs(ws,"users",S.user.uid),O),S.user}async function c(P,N){return LN(Gt,P,N)}async function d(){var N;if(Ne.isNativePlatform())try{const w=await rM.signInWithGoogle();if((N=w==null?void 0:w.credential)!=null&&N.idToken){const v=En.credential(w.credential.idToken),S=await Ic(Gt,v);return await l(S.user),S.user}throw new Error("Native Google Login failed")}catch(w){console.error("Native Google Login Error:",w);const v=await F_(Gt,ld);return await l(v.user),v.user}else try{const w=await F_(Gt,ld);return await l(w.user),w.user}catch(w){return console.warn("Popup failed or blocked, falling back to Redirect...",w),await Sb(Gt,ld)}}function f(P){return window.recaptchaVerifier||(window.recaptchaVerifier=new fb(Gt,"recaptcha-container",{size:"invisible"})),mb(Gt,P,window.recaptchaVerifier)}async function m(P){e&&(await Qu(vs(ws,"users",e.uid),P),n(N=>({...N,...P})))}function I(){return GN(Gt)}L.useEffect(()=>qN(Gt,async N=>{e||i(!0);try{N?await l(N):n(null)}catch(w){console.error("Auth sync error:",w)}finally{i(!1)}}),[]),L.useEffect(()=>{kb(Gt).then(async P=>{P!=null&&P.user&&(console.log("[AUTH] Redirect result success:",P.user.email),await l(P.user))}).catch(P=>{console.error("[AUTH] Redirect result error:",P)})},[]);const x={user:e,ROLES:o,login:c,signup:u,logout:I,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return C.jsx(V1.Provider,{value:x,children:t})}const ui=Ga("Preferences",{web:()=>ze(()=>import("./web-87624741.js"),[]).then(t=>new t.PreferencesWeb)}),M1=L.createContext(null);function o0(){return L.useContext(M1)}function sM({children:t}){const{user:e}=Ka(),n=(k,_)=>{try{const G=localStorage.getItem(k);return G!==null?JSON.parse(G):_}catch{return _}},[r,i]=L.useState(!1),[s,o]=L.useState(1500),[l,u]=L.useState("OTHERS"),[c,d]=L.useState(25),[f,m]=L.useState(0),[I,x]=L.useState("COUNTDOWN"),[P,N]=L.useState(!1),[w,v]=L.useState(()=>n("allowedPackages","")),[S,O]=L.useState([]),U=L.useRef(null),j=async()=>{if(Ne.isNativePlatform())try{const k=Ne.Plugins.AppBlocker;if(k){const{apps:_}=await k.getInstalledApps();O(_.sort((G,oe)=>G.name.localeCompare(oe.name)))}}catch(k){console.error("Fetch Apps Error:",k)}};L.useEffect(()=>{if(Ne.isNativePlatform()){j();try{Ne.Plugins.AppBlocker.stopBlocker(),ui.set({key:"isBlockerActive",value:"false"}),ui.set({key:"countdownEndTime",value:"0"})}catch{}}localStorage.setItem("timerActive","false"),localStorage.setItem("focusBroken","false")},[]);const T=k=>{if(v(k),localStorage.setItem("allowedPackages",JSON.stringify(k)),Ne.isNativePlatform()){ui.set({key:"allowedPackages",value:k});try{const _=(k||"").split(",").filter(Boolean);_.includes("com.apnacollegebihar.online")||_.push("com.apnacollegebihar.online"),Ne.Plugins.AppBlocker.setAllowedPackages({packages:_})}catch{}}},y=k=>{if(i(k),localStorage.setItem("timerActive",JSON.stringify(k)),Ne.isNativePlatform())try{if(k){if(Ne.Plugins.AppBlocker.setBlockerActive({active:!0}),I==="COUNTDOWN"){Ne.Plugins.AppBlocker.startCountdown({minutes:Math.ceil(s/60)});const G=Date.now()+s*1e3;ui.set({key:"countdownEndTime",value:String(G)})}const _=(w||"").split(",").filter(Boolean);_.includes("com.apnacollegebihar.online")||_.push("com.apnacollegebihar.online"),Ne.Plugins.AppBlocker.setAllowedPackages({packages:_}),ui.set({key:"isBlockerActive",value:"true"})}else Ne.Plugins.AppBlocker.stopBlocker(),ui.set({key:"isBlockerActive",value:"false"}),ui.set({key:"countdownEndTime",value:"0"})}catch(_){console.error("Native Blocker Error:",_)}},E=k=>{N(k),localStorage.setItem("focusBroken",JSON.stringify(k))};L.useEffect(()=>{const k=_=>{_.key==="timerActive"&&i(JSON.parse(_.newValue)),_.key==="focusBroken"&&N(JSON.parse(_.newValue))};return window.addEventListener("storage",k),()=>window.removeEventListener("storage",k)},[]),L.useEffect(()=>{r||o(I==="COUNTDOWN"?c*60+f:0)},[I,c,f,r]);const A=async(k=null)=>{if(!e)return;const _=k||(I==="STOPWATCH"?s:c*60+f-s);if(_<5){y(!1);return}try{const G=new Date().toLocaleDateString("en-CA");await OL(wL(ws,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:_,date:G,createdAt:new Date().toISOString()});const oe=vs(ws,"users",e.uid),$e=await y1(oe);if($e.exists()){const Vt=$e.data(),Q=Vt.lastStudyDate!==G?_:(Vt.todayStudyTime||0)+_,J=new Date;J.setDate(J.getDate()-1);const he=J.toLocaleDateString("en-CA");let fe=Vt.streak||0,Rt=Vt.streakDate||"";Rt!==G&&Rt!==he&&(fe=0),Q>=7200&&Rt!==G&&(Rt===he?fe+=1:fe=1,Rt=G),await Qu(oe,{totalStudyTime:(Vt.totalStudyTime||0)+_,todayStudyTime:Q,lastStudyDate:G,streak:fe,streakDate:Rt,isStudying:!1})}y(!1)}catch(G){console.error("Global Save Error:",G)}};L.useEffect(()=>{e&&Qu(vs(ws,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),L.useEffect(()=>{const k=()=>{r&&I==="STOPWATCH"&&(y(!1),E(!0))},_=()=>{document.visibilityState==="hidden"&&k()},G=()=>{setTimeout(()=>{!document.hasFocus()&&r&&k()},100)},oe=$e=>{r&&($e.preventDefault(),$e.returnValue="")};return document.addEventListener("visibilitychange",_),window.addEventListener("blur",G),window.addEventListener("beforeunload",oe),()=>{document.removeEventListener("visibilitychange",_),window.removeEventListener("blur",G),window.removeEventListener("beforeunload",oe)}},[r,I]),L.useEffect(()=>(r?U.current=setInterval(()=>{o(k=>I==="COUNTDOWN"?k<=1?(clearInterval(U.current),A(c*60+f),0):k-1:k+1)},1e3):clearInterval(U.current),()=>clearInterval(U.current)),[r,I,e,c,f]);const R={timerActive:r,setTimerActive:y,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:u,customMinutes:c,setCustomMinutes:d,customSeconds:f,setCustomSeconds:m,timerMode:I,setTimerMode:x,saveGlobalSession:A,focusBroken:P,setFocusBroken:E,allowedPackages:w,setAllowedPackages:T,installedApps:S,fetchApps:j,launchApp:async k=>{if(Ne.isNativePlatform())try{await Ne.Plugins.AppBlocker.launchApp({packageName:k})}catch(_){console.error(_)}},openAccessibilitySettings:async()=>{if(Ne.isNativePlatform())try{await Ne.Plugins.AppBlocker.openAccessibilitySettings()}catch(k){console.error(k)}}};return C.jsx(M1.Provider,{value:R,children:t})}function oM(){var _;const t=Ne.isNativePlatform(),e=js(),n=bp(),{user:r,logout:i,ROLES:s,updateProfileData:o}=Ka(),[l,u]=L.useState(!0),[c,d]=L.useState(!1),[f,m]=L.useState(""),[I,x]=L.useState(!1),[P,N]=L.useState(!1),{timerActive:w,focusBroken:v,setFocusBroken:S}=o0();L.useEffect(()=>{d(!1)},[e.pathname]);const U=new URLSearchParams(e.search).get("standalone")==="true",j=localStorage.getItem("isAppMode")==="true"||U;L.useEffect(()=>{r&&!r.phone?x(!0):x(!1)},[r]);const T=async G=>{if(G.preventDefault(),!(f.length<10)){N(!0);try{await o({phone:f}),x(!1)}catch(oe){console.error(oe)}finally{N(!1)}}},y=(r==null?void 0:r.email)==="prince86944@gmail.com"||(r==null?void 0:r.role)===s.SUPER_ADMIN,E=[{name:"Study Protocol",path:"/dashboard/study",icon:C.jsx(Hh,{size:22,className:"text-blue-500"})},{name:"Study Network",path:"/dashboard/groups",icon:C.jsx(f_,{size:20,className:"text-orange-500"})},{name:"Notes & PYQ",path:"/dashboard/notes",icon:C.jsx(u_,{size:20})},{name:"Scientific Calc",path:"/dashboard/calculator",icon:C.jsx(MP,{size:20})},{name:"BEU CGPA",path:"/dashboard/cgpa",icon:C.jsx(UP,{size:20})},{name:"UGEAC COUNSELLING",path:"/dashboard/ugeac-predictor",icon:C.jsx(BP,{size:20,className:"text-emerald-500"})},...y?[{name:"Admin Operations",path:"/dashboard/admin",icon:C.jsx(d_,{size:20,className:"text-red-500"})}]:[]],A=async()=>{try{await i(),n("/login")}catch(G){console.error("Logout failed",G)}},R=()=>{const{timerActive:G,timerTime:oe}=o0(),[$e,Vt]=L.useState(!1);if(!G||e.pathname==="/dashboard/study")return null;const W=Math.floor(oe%3600/60),Q=oe%60;return C.jsx("div",{className:`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${$e?"translate-x-[70%]":""}`,children:C.jsxs("div",{className:"bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group",children:[C.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse",children:C.jsx(Hh,{size:20,className:"text-white"})}),C.jsxs("div",{className:`flex items-center gap-4 pr-6 ${$e?"opacity-0 w-0 overflow-hidden":"opacity-100"}`,children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1",children:"Live Focus"}),C.jsxs("p",{className:"text-xl font-black text-white tabular-nums tracking-tighter",children:[W.toString().padStart(2,"0"),":",Q.toString().padStart(2,"0")]})]}),C.jsx("button",{onClick:()=>n("/dashboard/study"),className:"px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest",children:"Resume"})]}),C.jsx("button",{onClick:()=>Vt(!$e),className:"p-2 text-slate-500 hover:text-white",children:$e?C.jsx(Wh,{size:16}):C.jsx(p_,{size:16})})]})})},k=({isMobile:G=!1})=>C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:`p-3 md:p-4 flex items-center justify-between ${!l&&!G?"justify-center":""}`,children:[C.jsxs("div",{className:`flex items-center gap-2 transition-all duration-300 ${l||G?"opacity-100":"opacity-0 w-0 overflow-hidden"}`,children:[C.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg"}),C.jsxs("div",{className:"min-w-[100px]",children:[C.jsx("span",{className:"text-sm font-[1000] tracking-tighter uppercase text-slate-900 block leading-none",children:"ACB"}),C.jsx("span",{className:"text-[6px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1 block",children:"Bihar Official"})]})]}),!G&&C.jsx("button",{onClick:()=>u(!l),className:"p-2.5 bg-slate-100/50 rounded-xl transition-all ml-2",children:C.jsx(c_,{size:18})}),G&&C.jsx("button",{onClick:()=>d(!1),className:"p-2 text-slate-500",children:C.jsx(p_,{size:24})})]}),C.jsx("nav",{className:"flex-1 px-4 md:px-6 space-y-2 mt-6 overflow-y-auto custom-scrollbar",children:E.map(oe=>{const $e=e.pathname===oe.path;return C.jsxs(Sl,{to:oe.path,className:`flex items-center gap-3 p-3 md:p-2.5 rounded-2xl transition-all group relative ${$e?"bg-blue-600 text-white shadow-xl shadow-blue-500/30":"text-slate-500 hover:bg-slate-100/50 hover:text-slate-900"}`,children:[C.jsx("div",{className:"shrink-0",children:oe.icon}),C.jsx("span",{className:`font-black text-[10px] md:text-[9px] uppercase tracking-widest transition-all ${l||G?"opacity-100":"opacity-0 w-0 overflow-hidden"}`,children:oe.name}),$e&&(l||G)&&!w&&C.jsx("div",{className:"absolute right-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"})]},oe.name)})}),C.jsx("div",{className:"p-6 md:p-8 border-t border-slate-200/50 mt-auto",children:r?C.jsxs("button",{onClick:A,className:"w-full flex items-center justify-center gap-2 p-4 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl font-black text-[9px] uppercase tracking-widest transition-all",children:[C.jsx(jP,{size:14})," ",(l||G)&&C.jsx("span",{children:"Terminate Hub"})]}):C.jsxs(Sl,{to:"/login",className:"w-full flex items-center justify-center gap-3 p-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest",children:[C.jsx($P,{size:16})," Student Login"]})})]});return C.jsxs("div",{className:"flex h-full bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30",children:[!j&&C.jsx("aside",{className:`hidden md:flex flex-col bg-white border-r border-slate-200/80 transition-all duration-500 shadow-2xl relative z-40 ${l?"w-64":"w-20"}`,children:C.jsx(k,{})}),c&&!U&&C.jsxs("div",{className:"fixed inset-0 z-[100] md:hidden",children:[C.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>d(!1)}),C.jsx("aside",{className:"absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col",children:C.jsx(k,{isMobile:!0})})]}),C.jsxs("main",{className:"flex-1 flex flex-col min-h-0 h-full bg-white relative overflow-hidden",children:[U&&C.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-[100]",children:[C.jsxs("button",{onClick:()=>{var G;((G=e.state)==null?void 0:G.from)==="study-network"?n("/dashboard/study?standalone=true",{state:{tab:"network"}}):n("/")},className:"flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group",children:[C.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-all",children:C.jsx(Wh,{size:20})}),C.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:((_=e.state)==null?void 0:_.from)==="study-network"?"Back to Network":"Back to Home"})]}),C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg"}),C.jsx("span",{className:"text-[10px] font-[1000] tracking-tighter uppercase text-slate-900",children:"ACB Hub"})]})]}),t&&C.jsxs("div",{className:"md:hidden flex items-center px-5 py-4 bg-white border-b border-slate-100 sticky top-0 z-[100]",children:[C.jsx("button",{onClick:()=>n(-1),className:"p-2 -ml-3 text-slate-900 active:scale-95 transition-all",children:C.jsx(Wh,{size:28})}),C.jsxs("div",{className:"ml-2",children:[C.jsx("p",{className:"text-[10px] font-black text-slate-900 uppercase tracking-tighter leading-none",children:"Back to"}),C.jsx("p",{className:"text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5",children:"App Hub Grid"})]})]}),!t&&!j&&C.jsxs("div",{className:"md:hidden flex items-center justify-between px-5 py-3 bg-white border-b border-slate-200/80 sticky top-0 z-30",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg"}),C.jsx("span",{className:"text-[10px] font-black tracking-tighter uppercase text-slate-900 leading-none",children:"APNA COLLEGE BIHAR"})]}),C.jsx("button",{onClick:()=>d(!0),className:"p-2.5 bg-slate-100 border border-slate-200 rounded-xl relative",children:C.jsx(c_,{size:20})})]}),C.jsxs("div",{className:`flex-1 overflow-y-auto min-h-0 custom-scrollbar relative z-10 pb-32 ${j||t?"p-3":"p-4 md:p-6 lg:p-8"}`,children:[C.jsx("div",{className:"min-h-[80vh]",children:C.jsx(Op,{})}),!j&&!t&&C.jsxs("footer",{className:"mt-10 py-12 border-t border-slate-200/30 flex flex-col items-center justify-center gap-8 opacity-70",children:[C.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[C.jsx("p",{className:"text-[11px] font-[1000] uppercase tracking-[0.4em] text-slate-900",children:"Apna College Bihar"}),C.jsx("p",{className:"text-[9px] font-bold text-slate-500 uppercase tracking-widest",children:"© 2026 Official Study Engine"})]}),C.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-8 px-6",children:[C.jsx(Sl,{to:"/about",className:"text-[10px] font-black uppercase text-slate-500",children:"About Us"}),C.jsx(Sl,{to:"/contact",className:"text-[10px] font-black uppercase text-slate-500",children:"Contact Us"})]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"}),C.jsx("span",{className:"text-[9px] font-black uppercase tracking-[0.2em] text-slate-600",children:"Secure & Operational"})]})]})]}),I&&C.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:C.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[C.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:C.jsx(d_,{size:32})}),C.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),C.jsxs("form",{onSubmit:T,className:"space-y-6",children:[C.jsxs("div",{className:"flex gap-2",children:[C.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),C.jsx("input",{type:"tel",maxLength:10,value:f,onChange:G=>m(G.target.value.replace(/\D/g,"")),placeholder:"9XXXXXXXXX",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),C.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Secure Access"})]})]})}),C.jsx(R,{}),!t&&!U&&C.jsx("div",{className:"md:hidden fixed bottom-0 left-0 right-0 z-[150] bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.1)]",children:C.jsxs("div",{className:"flex gap-1",children:[C.jsxs("button",{onClick:()=>n("/dashboard/study"),className:`flex-1 flex flex-col items-center justify-center py-2 rounded-2xl transition-all ${e.pathname==="/dashboard/study"?"bg-slate-900 text-white":"text-slate-500"}`,children:[C.jsx(Hh,{size:18}),C.jsx("span",{className:"text-[7px] font-black uppercase mt-1",children:"Focus"})]}),C.jsxs("button",{onClick:()=>n("/dashboard"),className:`flex-1 flex flex-col items-center justify-center py-2 rounded-2xl transition-all ${e.pathname==="/dashboard"?"bg-slate-900 text-white":"text-slate-500"}`,children:[C.jsx(FP,{size:18}),C.jsx("span",{className:"text-[7px] font-black uppercase mt-1",children:"Dash"})]}),C.jsxs("button",{onClick:()=>n("/dashboard/notes"),className:`flex-1 flex flex-col items-center justify-center py-2 rounded-2xl transition-all ${e.pathname==="/dashboard/notes"?"bg-slate-900 text-white":"text-slate-500"}`,children:[C.jsx(u_,{size:18}),C.jsx("span",{className:"text-[7px] font-black uppercase mt-1",children:"Notes"})]}),C.jsxs("button",{onClick:()=>n("/dashboard/groups"),className:`flex-1 flex flex-col items-center justify-center py-2 rounded-2xl transition-all ${e.pathname==="/dashboard/groups"?"bg-slate-900 text-white":"text-slate-500"}`,children:[C.jsx(f_,{size:18}),C.jsx("span",{className:"text-[7px] font-black uppercase mt-1",children:"Network"})]})]})})]})]})}const aM=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=Ka(),[i,s]=L.useState(""),[o,l]=L.useState(!1);if(e)return C.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:C.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),C.jsx(Dp,{to:"/login",replace:!0});const u=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())==="",c=async f=>{if(f.preventDefault(),i.length<10)return $h.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),$h.success("Mobile number linked securely!")}catch{$h.error("Failed to save. Try again.")}finally{l(!1)}};return u?C.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:C.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[C.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),C.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[C.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:C.jsx(zP,{className:"text-blue-500 w-10 h-10"})}),C.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),C.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),C.jsxs("form",{onSubmit:c,className:"w-full space-y-4",children:[C.jsxs("div",{className:"relative group",children:[C.jsx(h_,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),C.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),C.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),C.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[C.jsx(h_,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),C.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):C.jsx(Op,{})},lM=()=>{const{user:t,loading:e,ROLES:n}=Ka();return e?C.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:C.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?C.jsx(Op,{}):C.jsx(Dp,{to:"/dashboard",replace:!0})},uM=Le.lazy(()=>ze(()=>import("./Home-bf38a0d5.js"),["assets/Home-bf38a0d5.js","assets/chevron-down-15cb3053.js","assets/zap-78ba1519.js","assets/check-circle-8eb19d72.js","assets/book-open-81a448a7.js","assets/globe-bb18bead.js","assets/bell-0f4963c9.js","assets/youtube-2f6ad49b.js"])),a0=Le.lazy(()=>ze(()=>import("./AppHub-67b6b74b.js"),["assets/AppHub-67b6b74b.js","assets/file-text-70adc31a.js","assets/book-open-81a448a7.js","assets/bar-chart-3-2099b0d3.js","assets/user-check-668734cd.js","assets/layers-459d1339.js","assets/calendar-range-077bc268.js"])),cM=Le.lazy(()=>ze(()=>import("./Login-7362fe8a.js"),["assets/Login-7362fe8a.js","assets/sparkles-2a144dba.js","assets/arrow-right-1cc7f5f8.js","assets/book-open-81a448a7.js"])),hM=Le.lazy(()=>ze(()=>import("./Signup-53a10bf9.js"),["assets/Signup-53a10bf9.js","assets/sparkles-2a144dba.js","assets/arrow-right-1cc7f5f8.js","assets/book-open-81a448a7.js"])),dM=Le.lazy(()=>ze(()=>import("./Dashboard-d5fdef43.js"),["assets/Dashboard-d5fdef43.js","assets/PremiumAds-7936caf4.js","assets/bell-0f4963c9.js","assets/external-link-d52e3ebf.js","assets/info-42b30404.js","assets/book-open-81a448a7.js","assets/youtube-2f6ad49b.js","assets/check-circle-2-70dc0011.js","assets/clock-d4aa8810.js","assets/globe-bb18bead.js","assets/arrow-right-1cc7f5f8.js","assets/chevron-right-91b50e98.js","assets/calendar-days-e46060a9.js","assets/search-745fa0eb.js"])),fM=Le.lazy(()=>ze(()=>import("./UgeacPredictor-22da27e5.js").then(t=>t.U),["assets/UgeacPredictor-22da27e5.js","assets/search-745fa0eb.js","assets/zap-78ba1519.js","assets/book-open-81a448a7.js","assets/check-circle-2-70dc0011.js","assets/layers-459d1339.js","assets/chevron-up-9e79b0e3.js","assets/chevron-down-15cb3053.js","assets/trash-2-929e6815.js","assets/plus-37dd4eed.js","assets/download-430de8c9.js","assets/info-42b30404.js","assets/external-link-d52e3ebf.js","assets/UgeacPredictor-60565ae2.css"])),pM=Le.lazy(()=>ze(()=>import("./Notes-e43ee1e1.js"),["assets/Notes-e43ee1e1.js","assets/PremiumAds-7936caf4.js","assets/bell-0f4963c9.js","assets/external-link-d52e3ebf.js","assets/info-42b30404.js","assets/book-open-81a448a7.js","assets/youtube-2f6ad49b.js","assets/arrow-right-1cc7f5f8.js","assets/search-745fa0eb.js","assets/eye-83f0c814.js","assets/download-430de8c9.js","assets/folder-plus-f24eba74.js"])),mM=Le.lazy(()=>ze(()=>import("./BeuCgpa-bacbe94c.js"),["assets/BeuCgpa-bacbe94c.js","assets/book-open-81a448a7.js","assets/check-circle-8eb19d72.js","assets/award-30f58f82.js","assets/plus-37dd4eed.js","assets/trash-2-929e6815.js","assets/chevron-up-9e79b0e3.js","assets/chevron-down-15cb3053.js","assets/bar-chart-3-2099b0d3.js"])),gM=Le.lazy(()=>ze(()=>import("./StudyDashboard-08b31eed.js"),["assets/StudyDashboard-08b31eed.js","assets/clock-d4aa8810.js","assets/book-open-81a448a7.js","assets/flame-b12f0449.js","assets/plus-37dd4eed.js","assets/check-circle-2-70dc0011.js","assets/trash-2-929e6815.js","assets/arrow-right-1cc7f5f8.js","assets/search-745fa0eb.js"])),yM=Le.lazy(()=>ze(()=>import("./ScientificCalc-b9776467.js"),["assets/ScientificCalc-b9776467.js","assets/clock-d4aa8810.js"])),_M=Le.lazy(()=>ze(()=>import("./AdminPanel-26dc848c.js"),["assets/AdminPanel-26dc848c.js","assets/alert-circle-430ac366.js","assets/book-open-81a448a7.js","assets/file-text-70adc31a.js","assets/bar-chart-3-2099b0d3.js","assets/search-745fa0eb.js","assets/user-check-668734cd.js","assets/trash-2-929e6815.js","assets/eye-83f0c814.js","assets/bell-0f4963c9.js"])),vM=Le.lazy(()=>ze(()=>import("./Achievements-7c7fe738.js"),["assets/Achievements-7c7fe738.js","assets/trophy-5bb04f5e.js","assets/flame-b12f0449.js","assets/clock-d4aa8810.js","assets/zap-78ba1519.js","assets/award-30f58f82.js"])),wM=Le.lazy(()=>ze(()=>import("./Group-4f426bd3.js"),["assets/Group-4f426bd3.js","assets/search-745fa0eb.js","assets/plus-37dd4eed.js","assets/check-circle-8eb19d72.js","assets/alert-circle-430ac366.js"])),EM=Le.lazy(()=>ze(()=>import("./GroupDetail-952d4e2f.js"),["assets/GroupDetail-952d4e2f.js","assets/arrow-left-9fb2a6d0.js","assets/trash-2-929e6815.js","assets/external-link-d52e3ebf.js","assets/trophy-5bb04f5e.js","assets/clock-d4aa8810.js"])),TM=Le.lazy(()=>ze(()=>import("./Timetable-f6cdaf94.js"),["assets/Timetable-f6cdaf94.js","assets/calendar-days-e46060a9.js","assets/save-e4decb78.js"])),IM=Le.lazy(()=>ze(()=>import("./Attendance-8dd0f758.js"),["assets/Attendance-8dd0f758.js","assets/user-check-668734cd.js","assets/plus-37dd4eed.js"])),SM=Le.lazy(()=>ze(()=>import("./PersonalManager-64862aa0.js"),["assets/PersonalManager-64862aa0.js","assets/search-745fa0eb.js","assets/folder-plus-f24eba74.js","assets/trash-2-929e6815.js","assets/chevron-right-91b50e98.js","assets/arrow-left-9fb2a6d0.js","assets/save-e4decb78.js","assets/clock-d4aa8810.js","assets/file-text-70adc31a.js"])),AM=Le.lazy(()=>ze(()=>import("./Calendar-00eabf0e.js"),["assets/Calendar-00eabf0e.js","assets/calendar-range-077bc268.js","assets/chevron-right-91b50e98.js","assets/bell-0f4963c9.js"]));function RM(){return C.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[C.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),C.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function kM(){const{user:t,loading:e}=Ka(),[n,r]=L.useState(!0),i=Ne.isNativePlatform();if(L.useEffect(()=>{const s=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(s)),()=>clearTimeout(s)},[e]),n)return C.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[C.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),C.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return C.jsxs(C.Fragment,{children:[C.jsx(DP,{position:"top-right"}),C.jsx(Le.Suspense,{fallback:C.jsx(RM,{}),children:C.jsxs(Lk,{children:[C.jsx(Ee,{path:"/",element:i||new URLSearchParams(window.location.search).get("standalone")==="true"?C.jsx(a0,{}):C.jsx(uM,{})}),C.jsx(Ee,{path:"/hub",element:C.jsx(a0,{})}),C.jsx(Ee,{path:"/login",element:C.jsx(cM,{})}),C.jsx(Ee,{path:"/signup",element:C.jsx(hM,{})}),C.jsx(Ee,{element:C.jsx(aM,{}),children:C.jsxs(Ee,{element:C.jsx(oM,{}),children:[C.jsx(Ee,{path:"/dashboard",element:C.jsx(dM,{})}),C.jsx(Ee,{path:"/dashboard/ugeac-predictor",element:C.jsx(fM,{})}),C.jsx(Ee,{path:"/dashboard/notes",element:C.jsx(pM,{})}),C.jsx(Ee,{path:"/dashboard/cgpa",element:C.jsx(mM,{})}),C.jsx(Ee,{path:"/dashboard/study",element:C.jsx(gM,{})}),C.jsx(Ee,{path:"/dashboard/calculator",element:C.jsx(yM,{})}),C.jsx(Ee,{path:"/dashboard/achievements",element:C.jsx(vM,{})}),C.jsx(Ee,{path:"/dashboard/groups",element:C.jsx(wM,{})}),C.jsx(Ee,{path:"/dashboard/groups/:groupId",element:C.jsx(EM,{})}),C.jsx(Ee,{path:"/dashboard/timetable",element:C.jsx(TM,{})}),C.jsx(Ee,{path:"/dashboard/attendance",element:C.jsx(IM,{})}),C.jsx(Ee,{path:"/dashboard/extras",element:C.jsx(SM,{})}),C.jsx(Ee,{path:"/dashboard/calendar",element:C.jsx(AM,{})}),C.jsx(Ee,{element:C.jsx(lM,{}),children:C.jsx(Ee,{path:"/dashboard/admin",element:C.jsx(_M,{})})})]})}),C.jsx(Ee,{path:"*",element:C.jsx(Dp,{to:"/",replace:!0})})]})})]})}catch(s){return console.error("App Crash:",s),C.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[C.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:C.jsx(VP,{size:32})}),C.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),C.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),C.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const l0=document.getElementById("root");if(!l0)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=cd.createRoot(l0);console.log("[DEBUG] Rendering app to root..."),t.render(C.jsx(Le.StrictMode,{children:C.jsx(iM,{children:C.jsx(sM,{children:C.jsx(zk,{children:C.jsx(kM,{})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{FM as $,VP as A,vs as B,MP as C,sU as D,FP as E,Ga as F,UP as G,y1 as H,zv as I,JM as J,ZM as K,Sl as L,CM as M,$h as N,Wh as O,d2 as P,LM as Q,Le as R,d_ as S,Hh as T,f_ as U,ON as V,zm as W,p_ as X,OM as Y,GM as Z,ze as _,jP as a,kb as a0,Ql as a1,MM as a2,s0 as a3,Ui as a4,yr as a5,_r as a6,En as a7,fb as a8,KM as a9,C_ as aA,ab as aB,kT as aC,AT as aD,PM as aE,fS as aF,vr as aa,Ux as ab,qM as ac,jM as ad,DM as ae,VM as af,i0 as ag,$N as ah,xM as ai,bM as aj,LN as ak,UM as al,mb as am,NM as an,$M as ao,WM as ap,zM as aq,cN as ar,BM as as,Sb as at,F_ as au,YM as av,QM as aw,bN as ax,Yn as ay,HM as az,BP as b,wL as c,ws as d,yt as e,bp as f,zP as g,js as h,o0 as i,C as j,Ne as k,rU as l,nU as m,qe as n,oU as o,uU as p,eU as q,L as r,cU as s,aU as t,Ka as u,lU as v,tU as w,OL as x,iU as y,Qu as z};
