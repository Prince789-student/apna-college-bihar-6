function EC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fT={exports:{}},_h={},pT={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $l=Symbol.for("react.element"),TC=Symbol.for("react.portal"),IC=Symbol.for("react.fragment"),kC=Symbol.for("react.strict_mode"),SC=Symbol.for("react.profiler"),AC=Symbol.for("react.provider"),xC=Symbol.for("react.context"),CC=Symbol.for("react.forward_ref"),PC=Symbol.for("react.suspense"),RC=Symbol.for("react.memo"),bC=Symbol.for("react.lazy"),ev=Symbol.iterator;function NC(t){return t===null||typeof t!="object"?null:(t=ev&&t[ev]||t["@@iterator"],typeof t=="function"?t:null)}var mT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gT=Object.assign,yT={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=yT,this.updater=n||mT}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _T(){}_T.prototype=Oo.prototype;function Mm(t,e,n){this.props=t,this.context=e,this.refs=yT,this.updater=n||mT}var Fm=Mm.prototype=new _T;Fm.constructor=Mm;gT(Fm,Oo.prototype);Fm.isPureReactComponent=!0;var tv=Array.isArray,vT=Object.prototype.hasOwnProperty,Um={current:null},wT={key:!0,ref:!0,__self:!0,__source:!0};function ET(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vT.call(e,r)&&!wT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$l,type:t,key:s,ref:o,props:i,_owner:Um.current}}function DC(t,e){return{$$typeof:$l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jm(t){return typeof t=="object"&&t!==null&&t.$$typeof===$l}function OC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nv=/\/+/g;function zd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OC(""+t.key):e.toString(36)}function Yu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $l:case TC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zd(o,0):r,tv(i)?(n="",t!=null&&(n=t.replace(nv,"$&/")+"/"),Yu(i,e,n,"",function(c){return c})):i!=null&&(jm(i)&&(i=DC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zd(s,a);o+=Yu(s,e,n,l,i)}else if(l=NC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zd(s,a++),o+=Yu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Eu(t,e,n){if(t==null)return t;var r=[],i=0;return Yu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Ju={transition:null},VC={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ju,ReactCurrentOwner:Um};function TT(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Eu,forEach:function(t,e,n){Eu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Eu(t,function(){e++}),e},toArray:function(t){return Eu(t,function(e){return e})||[]},only:function(t){if(!jm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Oo;de.Fragment=IC;de.Profiler=SC;de.PureComponent=Mm;de.StrictMode=kC;de.Suspense=PC;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VC;de.act=TT;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Um.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vT.call(e,l)&&!wT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:$l,type:t.type,key:i,ref:s,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:xC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AC,_context:t},t.Consumer=t};de.createElement=ET;de.createFactory=function(t){var e=ET.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:CC,render:t}};de.isValidElement=jm;de.lazy=function(t){return{$$typeof:bC,_payload:{_status:-1,_result:t},_init:LC}};de.memo=function(t,e){return{$$typeof:RC,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Ju.transition;Ju.transition={};try{t()}finally{Ju.transition=e}};de.unstable_act=TT;de.useCallback=function(t,e){return $t.current.useCallback(t,e)};de.useContext=function(t){return $t.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};de.useEffect=function(t,e){return $t.current.useEffect(t,e)};de.useId=function(){return $t.current.useId()};de.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return $t.current.useMemo(t,e)};de.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};de.useRef=function(t){return $t.current.useRef(t)};de.useState=function(t){return $t.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return $t.current.useTransition()};de.version="18.3.1";pT.exports=de;var M=pT.exports;const Ce=Vm(M),MC=EC({__proto__:null,default:Ce},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FC=M,UC=Symbol.for("react.element"),jC=Symbol.for("react.fragment"),zC=Object.prototype.hasOwnProperty,BC=FC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$C={key:!0,ref:!0,__self:!0,__source:!0};function IT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zC.call(e,r)&&!$C.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:UC,type:t,key:s,ref:o,props:i,_owner:BC.current}}_h.Fragment=jC;_h.jsx=IT;_h.jsxs=IT;fT.exports=_h;var N=fT.exports,Jf={},kT={exports:{}},yn={},ST={exports:{}},AT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ee){var R=W.length;W.push(ee);e:for(;0<R;){var ue=R-1>>>1,ge=W[ue];if(0<i(ge,ee))W[ue]=ee,W[R]=ge,R=ue;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ee=W[0],R=W.pop();if(R!==ee){W[0]=R;e:for(var ue=0,ge=W.length,D=ge>>>1;ue<D;){var we=2*(ue+1)-1,Vt=W[we],Se=we+1,Wt=W[Se];if(0>i(Vt,R))Se<ge&&0>i(Wt,Vt)?(W[ue]=Wt,W[Se]=R,ue=Se):(W[ue]=Vt,W[we]=R,ue=we);else if(Se<ge&&0>i(Wt,R))W[ue]=Wt,W[Se]=R,ue=Se;else break e}}return ee}function i(W,ee){var R=W.sortIndex-ee.sortIndex;return R!==0?R:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,p=3,m=!1,I=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=W)r(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function L(W){if(_=!1,T(W),!I)if(n(l)!==null)I=!0,ve(U);else{var ee=n(c);ee!==null&&ke(L,ee.startTime-W)}}function U(W,ee){I=!1,_&&(_=!1,y(v),v=-1),m=!0;var R=p;try{for(T(ee),d=n(l);d!==null&&(!(d.expirationTime>ee)||W&&!C());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,p=d.priorityLevel;var ge=ue(d.expirationTime<=ee);ee=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&r(l),T(ee)}else r(l);d=n(l)}if(d!==null)var D=!0;else{var we=n(c);we!==null&&ke(L,we.startTime-ee),D=!1}return D}finally{d=null,p=R,m=!1}}var O=!1,x=null,v=-1,A=5,P=-1;function C(){return!(t.unstable_now()-P<A)}function b(){if(x!==null){var W=t.unstable_now();P=W;var ee=!0;try{ee=x(!0,W)}finally{ee?k():(O=!1,x=null)}}else O=!1}var k;if(typeof E=="function")k=function(){E(b)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=b,k=function(){J.postMessage(null)}}else k=function(){S(b,0)};function ve(W){x=W,O||(O=!0,k())}function ke(W,ee){v=S(function(){W(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){I||m||(I=!0,ve(U))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var R=p;p=ee;try{return W()}finally{p=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var R=p;p=W;try{return ee()}finally{p=R}},t.unstable_scheduleCallback=function(W,ee,R){var ue=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ue+R:ue):R=ue,W){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=R+ge,W={id:h++,callback:ee,priorityLevel:W,startTime:R,expirationTime:ge,sortIndex:-1},R>ue?(W.sortIndex=R,e(c,W),n(l)===null&&W===n(c)&&(_?(y(v),v=-1):_=!0,ke(L,R-ue))):(W.sortIndex=ge,e(l,W),I||m||(I=!0,ve(U))),W},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(W){var ee=p;return function(){var R=p;p=ee;try{return W.apply(this,arguments)}finally{p=R}}}})(AT);ST.exports=AT;var HC=ST.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WC=M,gn=HC;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xT=new Set,ll={};function Ss(t,e){Eo(t,e),Eo(t+"Capture",e)}function Eo(t,e){for(ll[t]=e,t=0;t<e.length;t++)xT.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xf=Object.prototype.hasOwnProperty,qC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rv={},iv={};function GC(t){return Xf.call(iv,t)?!0:Xf.call(rv,t)?!1:qC.test(t)?iv[t]=!0:(rv[t]=!0,!1)}function KC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QC(t,e,n,r){if(e===null||typeof e>"u"||KC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var zm=/[\-:]([a-z])/g;function Bm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zm,Bm);St[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zm,Bm);St[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zm,Bm);St[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function $m(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QC(e,n,i,r)&&(n=null),r||i===null?GC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Br=WC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tu=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),Hm=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),CT=Symbol.for("react.provider"),PT=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),ep=Symbol.for("react.suspense"),tp=Symbol.for("react.suspense_list"),qm=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),RT=Symbol.for("react.offscreen"),sv=Symbol.iterator;function ga(t){return t===null||typeof t!="object"?null:(t=sv&&t[sv]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,Bd;function Ra(t){if(Bd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bd=e&&e[1]||""}return`
`+Bd+t}var $d=!1;function Hd(t,e){if(!t||$d)return"";$d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$d=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function YC(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=Hd(t.type,!1),t;case 11:return t=Hd(t.type.render,!1),t;case 1:return t=Hd(t.type,!0),t;default:return""}}function np(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Ks:return"Portal";case Zf:return"Profiler";case Hm:return"StrictMode";case ep:return"Suspense";case tp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case PT:return(t.displayName||"Context")+".Consumer";case CT:return(t._context.displayName||"Context")+".Provider";case Wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qm:return e=t.displayName||null,e!==null?e:np(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return np(t(e))}catch{}}return null}function JC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return np(e);case 8:return e===Hm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XC(t){var e=bT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Iu(t){t._valueTracker||(t._valueTracker=XC(t))}function NT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rp(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ov(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function DT(t,e){e=e.checked,e!=null&&$m(t,"checked",e,!1)}function ip(t,e){DT(t,e);var n=xi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sp(t,e.type,n):e.hasOwnProperty("defaultValue")&&sp(t,e.type,xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function av(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sp(t,e,n){(e!=="number"||kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ba=Array.isArray;function oo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function op(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(ba(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xi(n)}}function OT(t,e){var n=xi(e.value),r=xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function LT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ap(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?LT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ku,VT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ku=ku||document.createElement("div"),ku.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ku.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZC=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){ZC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function MT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function FT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=MT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eP=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lp(t,e){if(e){if(eP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function up(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cp=null;function Gm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hp=null,ao=null,lo=null;function cv(t){if(t=ql(t)){if(typeof hp!="function")throw Error($(280));var e=t.stateNode;e&&(e=Ih(e),hp(t.stateNode,t.type,e))}}function UT(t){ao?lo?lo.push(t):lo=[t]:ao=t}function jT(){if(ao){var t=ao,e=lo;if(lo=ao=null,cv(t),e)for(t=0;t<e.length;t++)cv(e[t])}}function zT(t,e){return t(e)}function BT(){}var Wd=!1;function $T(t,e,n){if(Wd)return t(e,n);Wd=!0;try{return zT(t,e,n)}finally{Wd=!1,(ao!==null||lo!==null)&&(BT(),jT())}}function cl(t,e){var n=t.stateNode;if(n===null)return null;var r=Ih(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var dp=!1;if(Rr)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){dp=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{dp=!1}function tP(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ba=!1,Sc=null,Ac=!1,fp=null,nP={onError:function(t){Ba=!0,Sc=t}};function rP(t,e,n,r,i,s,o,a,l){Ba=!1,Sc=null,tP.apply(nP,arguments)}function iP(t,e,n,r,i,s,o,a,l){if(rP.apply(this,arguments),Ba){if(Ba){var c=Sc;Ba=!1,Sc=null}else throw Error($(198));Ac||(Ac=!0,fp=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function HT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hv(t){if(As(t)!==t)throw Error($(188))}function sP(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hv(i),t;if(s===r)return hv(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function WT(t){return t=sP(t),t!==null?qT(t):null}function qT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qT(t);if(e!==null)return e;t=t.sibling}return null}var GT=gn.unstable_scheduleCallback,dv=gn.unstable_cancelCallback,oP=gn.unstable_shouldYield,aP=gn.unstable_requestPaint,Xe=gn.unstable_now,lP=gn.unstable_getCurrentPriorityLevel,Km=gn.unstable_ImmediatePriority,KT=gn.unstable_UserBlockingPriority,xc=gn.unstable_NormalPriority,uP=gn.unstable_LowPriority,QT=gn.unstable_IdlePriority,vh=null,or=null;function cP(t){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(vh,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:fP,hP=Math.log,dP=Math.LN2;function fP(t){return t>>>=0,t===0?32:31-(hP(t)/dP|0)|0}var Su=64,Au=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Na(a):(s&=o,s!==0&&(r=Na(s)))}else o=n&~i,o!==0?r=Na(o):s!==0&&(r=Na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zn(e),i=1<<n,r|=t[n],e&=~i;return r}function pP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=pP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function YT(){var t=Su;return Su<<=1,!(Su&4194240)&&(Su=64),t}function qd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function gP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function JT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var XT,Ym,ZT,eI,tI,mp=!1,xu=[],pi=null,mi=null,gi=null,hl=new Map,dl=new Map,ni=[],yP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fv(t,e){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(e.pointerId)}}function _a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ql(e),e!==null&&Ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _P(t,e,n,r,i){switch(e){case"focusin":return pi=_a(pi,t,e,n,r,i),!0;case"dragenter":return mi=_a(mi,t,e,n,r,i),!0;case"mouseover":return gi=_a(gi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return hl.set(s,_a(hl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,dl.set(s,_a(dl.get(s)||null,t,e,n,r,i)),!0}return!1}function nI(t){var e=Zi(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=HT(n),e!==null){t.blockedOn=e,tI(t.priority,function(){ZT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cp=r,n.target.dispatchEvent(r),cp=null}else return e=ql(n),e!==null&&Ym(e),t.blockedOn=n,!1;e.shift()}return!0}function pv(t,e,n){Xu(t)&&n.delete(e)}function vP(){mp=!1,pi!==null&&Xu(pi)&&(pi=null),mi!==null&&Xu(mi)&&(mi=null),gi!==null&&Xu(gi)&&(gi=null),hl.forEach(pv),dl.forEach(pv)}function va(t,e){t.blockedOn===e&&(t.blockedOn=null,mp||(mp=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,vP)))}function fl(t){function e(i){return va(i,t)}if(0<xu.length){va(xu[0],t);for(var n=1;n<xu.length;n++){var r=xu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pi!==null&&va(pi,t),mi!==null&&va(mi,t),gi!==null&&va(gi,t),hl.forEach(e),dl.forEach(e),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)nI(n),n.blockedOn===null&&ni.shift()}var uo=Br.ReactCurrentBatchConfig,Pc=!0;function wP(t,e,n,r){var i=xe,s=uo.transition;uo.transition=null;try{xe=1,Jm(t,e,n,r)}finally{xe=i,uo.transition=s}}function EP(t,e,n,r){var i=xe,s=uo.transition;uo.transition=null;try{xe=4,Jm(t,e,n,r)}finally{xe=i,uo.transition=s}}function Jm(t,e,n,r){if(Pc){var i=gp(t,e,n,r);if(i===null)nf(t,e,r,Rc,n),fv(t,r);else if(_P(i,t,e,n,r))r.stopPropagation();else if(fv(t,r),e&4&&-1<yP.indexOf(t)){for(;i!==null;){var s=ql(i);if(s!==null&&XT(s),s=gp(t,e,n,r),s===null&&nf(t,e,r,Rc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nf(t,e,r,null,n)}}var Rc=null;function gp(t,e,n,r){if(Rc=null,t=Gm(r),t=Zi(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=HT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rc=t,null}function rI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lP()){case Km:return 1;case KT:return 4;case xc:case uP:return 16;case QT:return 536870912;default:return 16}default:return 16}}var ui=null,Xm=null,Zu=null;function iI(){if(Zu)return Zu;var t,e=Xm,n=e.length,r,i="value"in ui?ui.value:ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zu=i.slice(t,1<r?1-r:void 0)}function ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cu(){return!0}function mv(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cu:mv,this.isPropagationStopped=mv,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zm=_n(Lo),Wl=$e({},Lo,{view:0,detail:0}),TP=_n(Wl),Gd,Kd,wa,wh=$e({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(Gd=t.screenX-wa.screenX,Kd=t.screenY-wa.screenY):Kd=Gd=0,wa=t),Gd)},movementY:function(t){return"movementY"in t?t.movementY:Kd}}),gv=_n(wh),IP=$e({},wh,{dataTransfer:0}),kP=_n(IP),SP=$e({},Wl,{relatedTarget:0}),Qd=_n(SP),AP=$e({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),xP=_n(AP),CP=$e({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PP=_n(CP),RP=$e({},Lo,{data:0}),yv=_n(RP),bP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DP[t])?!!e[t]:!1}function eg(){return OP}var LP=$e({},Wl,{key:function(t){if(t.key){var e=bP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eg,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VP=_n(LP),MP=$e({},wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_v=_n(MP),FP=$e({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eg}),UP=_n(FP),jP=$e({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),zP=_n(jP),BP=$e({},wh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$P=_n(BP),HP=[9,13,27,32],tg=Rr&&"CompositionEvent"in window,$a=null;Rr&&"documentMode"in document&&($a=document.documentMode);var WP=Rr&&"TextEvent"in window&&!$a,sI=Rr&&(!tg||$a&&8<$a&&11>=$a),vv=String.fromCharCode(32),wv=!1;function oI(t,e){switch(t){case"keyup":return HP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function qP(t,e){switch(t){case"compositionend":return aI(e);case"keypress":return e.which!==32?null:(wv=!0,vv);case"textInput":return t=e.data,t===vv&&wv?null:t;default:return null}}function GP(t,e){if(Ys)return t==="compositionend"||!tg&&oI(t,e)?(t=iI(),Zu=Xm=ui=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sI&&e.locale!=="ko"?null:e.data;default:return null}}var KP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KP[t.type]:e==="textarea"}function lI(t,e,n,r){UT(r),e=bc(e,"onChange"),0<e.length&&(n=new Zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,pl=null;function QP(t){vI(t,0)}function Eh(t){var e=Zs(t);if(NT(e))return t}function YP(t,e){if(t==="change")return e}var uI=!1;if(Rr){var Yd;if(Rr){var Jd="oninput"in document;if(!Jd){var Tv=document.createElement("div");Tv.setAttribute("oninput","return;"),Jd=typeof Tv.oninput=="function"}Yd=Jd}else Yd=!1;uI=Yd&&(!document.documentMode||9<document.documentMode)}function Iv(){Ha&&(Ha.detachEvent("onpropertychange",cI),pl=Ha=null)}function cI(t){if(t.propertyName==="value"&&Eh(pl)){var e=[];lI(e,pl,t,Gm(t)),$T(QP,e)}}function JP(t,e,n){t==="focusin"?(Iv(),Ha=e,pl=n,Ha.attachEvent("onpropertychange",cI)):t==="focusout"&&Iv()}function XP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eh(pl)}function ZP(t,e){if(t==="click")return Eh(e)}function eR(t,e){if(t==="input"||t==="change")return Eh(e)}function tR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:tR;function ml(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xf.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function kv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sv(t,e){var n=kv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kv(n)}}function hI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dI(){for(var t=window,e=kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kc(t.document)}return e}function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nR(t){var e=dI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hI(n.ownerDocument.documentElement,n)){if(r!==null&&ng(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sv(n,s);var o=Sv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rR=Rr&&"documentMode"in document&&11>=document.documentMode,Js=null,yp=null,Wa=null,_p=!1;function Av(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_p||Js==null||Js!==kc(r)||(r=Js,"selectionStart"in r&&ng(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&ml(Wa,r)||(Wa=r,r=bc(yp,"onSelect"),0<r.length&&(e=new Zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Js)))}function Pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:Pu("Animation","AnimationEnd"),animationiteration:Pu("Animation","AnimationIteration"),animationstart:Pu("Animation","AnimationStart"),transitionend:Pu("Transition","TransitionEnd")},Xd={},fI={};Rr&&(fI=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Th(t){if(Xd[t])return Xd[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fI)return Xd[t]=e[n];return t}var pI=Th("animationend"),mI=Th("animationiteration"),gI=Th("animationstart"),yI=Th("transitionend"),_I=new Map,xv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){_I.set(t,e),Ss(e,[t])}for(var Zd=0;Zd<xv.length;Zd++){var ef=xv[Zd],iR=ef.toLowerCase(),sR=ef[0].toUpperCase()+ef.slice(1);Vi(iR,"on"+sR)}Vi(pI,"onAnimationEnd");Vi(mI,"onAnimationIteration");Vi(gI,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(yI,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Cv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iP(r,e,void 0,t),t.currentTarget=null}function vI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Cv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Cv(i,a,c),s=l}}}if(Ac)throw t=fp,Ac=!1,fp=null,t}function Me(t,e){var n=e[Ip];n===void 0&&(n=e[Ip]=new Set);var r=t+"__bubble";n.has(r)||(wI(e,t,2,!1),n.add(r))}function tf(t,e,n){var r=0;e&&(r|=4),wI(n,t,r,e)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function gl(t){if(!t[Ru]){t[Ru]=!0,xT.forEach(function(n){n!=="selectionchange"&&(oR.has(n)||tf(n,!1,t),tf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ru]||(e[Ru]=!0,tf("selectionchange",!1,e))}}function wI(t,e,n,r){switch(rI(e)){case 1:var i=wP;break;case 4:i=EP;break;default:i=Jm}n=i.bind(null,e,n,t),i=void 0,!dp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$T(function(){var c=s,h=Gm(n),d=[];e:{var p=_I.get(t);if(p!==void 0){var m=Zm,I=t;switch(t){case"keypress":if(ec(n)===0)break e;case"keydown":case"keyup":m=VP;break;case"focusin":I="focus",m=Qd;break;case"focusout":I="blur",m=Qd;break;case"beforeblur":case"afterblur":m=Qd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=UP;break;case pI:case mI:case gI:m=xP;break;case yI:m=zP;break;case"scroll":m=TP;break;case"wheel":m=$P;break;case"copy":case"cut":case"paste":m=PP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_v}var _=(e&4)!==0,S=!_&&t==="scroll",y=_?p!==null?p+"Capture":null:p;_=[];for(var E=c,T;E!==null;){T=E;var L=T.stateNode;if(T.tag===5&&L!==null&&(T=L,y!==null&&(L=cl(E,y),L!=null&&_.push(yl(E,L,T)))),S)break;E=E.return}0<_.length&&(p=new m(p,I,null,n,h),d.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==cp&&(I=n.relatedTarget||n.fromElement)&&(Zi(I)||I[br]))break e;if((m||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,m?(I=n.relatedTarget||n.toElement,m=c,I=I?Zi(I):null,I!==null&&(S=As(I),I!==S||I.tag!==5&&I.tag!==6)&&(I=null)):(m=null,I=c),m!==I)){if(_=gv,L="onMouseLeave",y="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(_=_v,L="onPointerLeave",y="onPointerEnter",E="pointer"),S=m==null?p:Zs(m),T=I==null?p:Zs(I),p=new _(L,E+"leave",m,n,h),p.target=S,p.relatedTarget=T,L=null,Zi(h)===c&&(_=new _(y,E+"enter",I,n,h),_.target=T,_.relatedTarget=S,L=_),S=L,m&&I)t:{for(_=m,y=I,E=0,T=_;T;T=Bs(T))E++;for(T=0,L=y;L;L=Bs(L))T++;for(;0<E-T;)_=Bs(_),E--;for(;0<T-E;)y=Bs(y),T--;for(;E--;){if(_===y||y!==null&&_===y.alternate)break t;_=Bs(_),y=Bs(y)}_=null}else _=null;m!==null&&Pv(d,p,m,_,!1),I!==null&&S!==null&&Pv(d,S,I,_,!0)}}e:{if(p=c?Zs(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var U=YP;else if(Ev(p))if(uI)U=eR;else{U=XP;var O=JP}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=ZP);if(U&&(U=U(t,c))){lI(d,U,n,h);break e}O&&O(t,p,c),t==="focusout"&&(O=p._wrapperState)&&O.controlled&&p.type==="number"&&sp(p,"number",p.value)}switch(O=c?Zs(c):window,t){case"focusin":(Ev(O)||O.contentEditable==="true")&&(Js=O,yp=c,Wa=null);break;case"focusout":Wa=yp=Js=null;break;case"mousedown":_p=!0;break;case"contextmenu":case"mouseup":case"dragend":_p=!1,Av(d,n,h);break;case"selectionchange":if(rR)break;case"keydown":case"keyup":Av(d,n,h)}var x;if(tg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ys?oI(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(sI&&n.locale!=="ko"&&(Ys||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ys&&(x=iI()):(ui=h,Xm="value"in ui?ui.value:ui.textContent,Ys=!0)),O=bc(c,v),0<O.length&&(v=new yv(v,t,null,n,h),d.push({event:v,listeners:O}),x?v.data=x:(x=aI(n),x!==null&&(v.data=x)))),(x=WP?qP(t,n):GP(t,n))&&(c=bc(c,"onBeforeInput"),0<c.length&&(h=new yv("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=x))}vI(d,e)})}function yl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=cl(t,n),s!=null&&r.unshift(yl(t,s,i)),s=cl(t,e),s!=null&&r.push(yl(t,s,i))),t=t.return}return r}function Bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=cl(n,s),l!=null&&o.unshift(yl(n,l,a))):i||(l=cl(n,s),l!=null&&o.push(yl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function Rv(t){return(typeof t=="string"?t:""+t).replace(aR,`
`).replace(lR,"")}function bu(t,e,n){if(e=Rv(e),Rv(t)!==e&&n)throw Error($(425))}function Nc(){}var vp=null,wp=null;function Ep(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tp=typeof setTimeout=="function"?setTimeout:void 0,uR=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,cR=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(t){return bv.resolve(null).then(t).catch(hR)}:Tp;function hR(t){setTimeout(function(){throw t})}function rf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fl(e)}function yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),tr="__reactFiber$"+Vo,_l="__reactProps$"+Vo,br="__reactContainer$"+Vo,Ip="__reactEvents$"+Vo,dR="__reactListeners$"+Vo,fR="__reactHandles$"+Vo;function Zi(t){var e=t[tr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[tr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[tr])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function ql(t){return t=t[tr]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Ih(t){return t[_l]||null}var kp=[],eo=-1;function Mi(t){return{current:t}}function Ue(t){0>eo||(t.current=kp[eo],kp[eo]=null,eo--)}function Oe(t,e){eo++,kp[eo]=t.current,t.current=e}var Ci={},Dt=Mi(Ci),Xt=Mi(!1),hs=Ci;function To(t,e){var n=t.type.contextTypes;if(!n)return Ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Zt(t){return t=t.childContextTypes,t!=null}function Dc(){Ue(Xt),Ue(Dt)}function Dv(t,e,n){if(Dt.current!==Ci)throw Error($(168));Oe(Dt,e),Oe(Xt,n)}function EI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,JC(t)||"Unknown",i));return $e({},n,r)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ci,hs=Dt.current,Oe(Dt,t),Oe(Xt,Xt.current),!0}function Ov(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=EI(t,e,hs),r.__reactInternalMemoizedMergedChildContext=t,Ue(Xt),Ue(Dt),Oe(Dt,t)):Ue(Xt),Oe(Xt,n)}var Tr=null,kh=!1,sf=!1;function TI(t){Tr===null?Tr=[t]:Tr.push(t)}function pR(t){kh=!0,TI(t)}function Fi(){if(!sf&&Tr!==null){sf=!0;var t=0,e=xe;try{var n=Tr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tr=null,kh=!1}catch(i){throw Tr!==null&&(Tr=Tr.slice(t+1)),GT(Km,Fi),i}finally{xe=e,sf=!1}}return null}var to=[],no=0,Lc=null,Vc=0,kn=[],Sn=0,ds=null,Ir=1,kr="";function Qi(t,e){to[no++]=Vc,to[no++]=Lc,Lc=t,Vc=e}function II(t,e,n){kn[Sn++]=Ir,kn[Sn++]=kr,kn[Sn++]=ds,ds=t;var r=Ir;t=kr;var i=32-zn(r)-1;r&=~(1<<i),n+=1;var s=32-zn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ir=1<<32-zn(e)+i|n<<i|r,kr=s+t}else Ir=1<<s|n<<i|r,kr=t}function rg(t){t.return!==null&&(Qi(t,1),II(t,1,0))}function ig(t){for(;t===Lc;)Lc=to[--no],to[no]=null,Vc=to[--no],to[no]=null;for(;t===ds;)ds=kn[--Sn],kn[Sn]=null,kr=kn[--Sn],kn[Sn]=null,Ir=kn[--Sn],kn[Sn]=null}var mn=null,hn=null,je=!1,Un=null;function kI(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,hn=yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Ir,overflow:kr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,hn=null,!0):!1;default:return!1}}function Sp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ap(t){if(je){var e=hn;if(e){var n=e;if(!Lv(t,e)){if(Sp(t))throw Error($(418));e=yi(n.nextSibling);var r=mn;e&&Lv(t,e)?kI(r,n):(t.flags=t.flags&-4097|2,je=!1,mn=t)}}else{if(Sp(t))throw Error($(418));t.flags=t.flags&-4097|2,je=!1,mn=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Nu(t){if(t!==mn)return!1;if(!je)return Vv(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ep(t.type,t.memoizedProps)),e&&(e=hn)){if(Sp(t))throw SI(),Error($(418));for(;e;)kI(t,e),e=yi(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=mn?yi(t.stateNode.nextSibling):null;return!0}function SI(){for(var t=hn;t;)t=yi(t.nextSibling)}function Io(){hn=mn=null,je=!1}function sg(t){Un===null?Un=[t]:Un.push(t)}var mR=Br.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Du(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mv(t){var e=t._init;return e(t._payload)}function AI(t){function e(y,E){if(t){var T=y.deletions;T===null?(y.deletions=[E],y.flags|=16):T.push(E)}}function n(y,E){if(!t)return null;for(;E!==null;)e(y,E),E=E.sibling;return null}function r(y,E){for(y=new Map;E!==null;)E.key!==null?y.set(E.key,E):y.set(E.index,E),E=E.sibling;return y}function i(y,E){return y=Ei(y,E),y.index=0,y.sibling=null,y}function s(y,E,T){return y.index=T,t?(T=y.alternate,T!==null?(T=T.index,T<E?(y.flags|=2,E):T):(y.flags|=2,E)):(y.flags|=1048576,E)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,E,T,L){return E===null||E.tag!==6?(E=df(T,y.mode,L),E.return=y,E):(E=i(E,T),E.return=y,E)}function l(y,E,T,L){var U=T.type;return U===Qs?h(y,E,T.props.children,L,T.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ei&&Mv(U)===E.type)?(L=i(E,T.props),L.ref=Ea(y,E,T),L.return=y,L):(L=ac(T.type,T.key,T.props,null,y.mode,L),L.ref=Ea(y,E,T),L.return=y,L)}function c(y,E,T,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=ff(T,y.mode,L),E.return=y,E):(E=i(E,T.children||[]),E.return=y,E)}function h(y,E,T,L,U){return E===null||E.tag!==7?(E=ss(T,y.mode,L,U),E.return=y,E):(E=i(E,T),E.return=y,E)}function d(y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=df(""+E,y.mode,T),E.return=y,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Tu:return T=ac(E.type,E.key,E.props,null,y.mode,T),T.ref=Ea(y,null,E),T.return=y,T;case Ks:return E=ff(E,y.mode,T),E.return=y,E;case ei:var L=E._init;return d(y,L(E._payload),T)}if(ba(E)||ga(E))return E=ss(E,y.mode,T,null),E.return=y,E;Du(y,E)}return null}function p(y,E,T,L){var U=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:a(y,E,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Tu:return T.key===U?l(y,E,T,L):null;case Ks:return T.key===U?c(y,E,T,L):null;case ei:return U=T._init,p(y,E,U(T._payload),L)}if(ba(T)||ga(T))return U!==null?null:h(y,E,T,L,null);Du(y,T)}return null}function m(y,E,T,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return y=y.get(T)||null,a(E,y,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Tu:return y=y.get(L.key===null?T:L.key)||null,l(E,y,L,U);case Ks:return y=y.get(L.key===null?T:L.key)||null,c(E,y,L,U);case ei:var O=L._init;return m(y,E,T,O(L._payload),U)}if(ba(L)||ga(L))return y=y.get(T)||null,h(E,y,L,U,null);Du(E,L)}return null}function I(y,E,T,L){for(var U=null,O=null,x=E,v=E=0,A=null;x!==null&&v<T.length;v++){x.index>v?(A=x,x=null):A=x.sibling;var P=p(y,x,T[v],L);if(P===null){x===null&&(x=A);break}t&&x&&P.alternate===null&&e(y,x),E=s(P,E,v),O===null?U=P:O.sibling=P,O=P,x=A}if(v===T.length)return n(y,x),je&&Qi(y,v),U;if(x===null){for(;v<T.length;v++)x=d(y,T[v],L),x!==null&&(E=s(x,E,v),O===null?U=x:O.sibling=x,O=x);return je&&Qi(y,v),U}for(x=r(y,x);v<T.length;v++)A=m(x,y,v,T[v],L),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?v:A.key),E=s(A,E,v),O===null?U=A:O.sibling=A,O=A);return t&&x.forEach(function(C){return e(y,C)}),je&&Qi(y,v),U}function _(y,E,T,L){var U=ga(T);if(typeof U!="function")throw Error($(150));if(T=U.call(T),T==null)throw Error($(151));for(var O=U=null,x=E,v=E=0,A=null,P=T.next();x!==null&&!P.done;v++,P=T.next()){x.index>v?(A=x,x=null):A=x.sibling;var C=p(y,x,P.value,L);if(C===null){x===null&&(x=A);break}t&&x&&C.alternate===null&&e(y,x),E=s(C,E,v),O===null?U=C:O.sibling=C,O=C,x=A}if(P.done)return n(y,x),je&&Qi(y,v),U;if(x===null){for(;!P.done;v++,P=T.next())P=d(y,P.value,L),P!==null&&(E=s(P,E,v),O===null?U=P:O.sibling=P,O=P);return je&&Qi(y,v),U}for(x=r(y,x);!P.done;v++,P=T.next())P=m(x,y,v,P.value,L),P!==null&&(t&&P.alternate!==null&&x.delete(P.key===null?v:P.key),E=s(P,E,v),O===null?U=P:O.sibling=P,O=P);return t&&x.forEach(function(b){return e(y,b)}),je&&Qi(y,v),U}function S(y,E,T,L){if(typeof T=="object"&&T!==null&&T.type===Qs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Tu:e:{for(var U=T.key,O=E;O!==null;){if(O.key===U){if(U=T.type,U===Qs){if(O.tag===7){n(y,O.sibling),E=i(O,T.props.children),E.return=y,y=E;break e}}else if(O.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ei&&Mv(U)===O.type){n(y,O.sibling),E=i(O,T.props),E.ref=Ea(y,O,T),E.return=y,y=E;break e}n(y,O);break}else e(y,O);O=O.sibling}T.type===Qs?(E=ss(T.props.children,y.mode,L,T.key),E.return=y,y=E):(L=ac(T.type,T.key,T.props,null,y.mode,L),L.ref=Ea(y,E,T),L.return=y,y=L)}return o(y);case Ks:e:{for(O=T.key;E!==null;){if(E.key===O)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){n(y,E.sibling),E=i(E,T.children||[]),E.return=y,y=E;break e}else{n(y,E);break}else e(y,E);E=E.sibling}E=ff(T,y.mode,L),E.return=y,y=E}return o(y);case ei:return O=T._init,S(y,E,O(T._payload),L)}if(ba(T))return I(y,E,T,L);if(ga(T))return _(y,E,T,L);Du(y,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(n(y,E.sibling),E=i(E,T),E.return=y,y=E):(n(y,E),E=df(T,y.mode,L),E.return=y,y=E),o(y)):n(y,E)}return S}var ko=AI(!0),xI=AI(!1),Mc=Mi(null),Fc=null,ro=null,og=null;function ag(){og=ro=Fc=null}function lg(t){var e=Mc.current;Ue(Mc),t._currentValue=e}function xp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function co(t,e){Fc=t,og=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(og!==t)if(t={context:t,memoizedValue:e,next:null},ro===null){if(Fc===null)throw Error($(308));ro=t,Fc.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return e}var es=null;function ug(t){es===null?es=[t]:es.push(t)}function CI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ug(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nr(t,r)}function Nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ti=!1;function cg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function PI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nr(t,n)}return i=r.interleaved,i===null?(e.next=e,ug(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nr(t,n)}function tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qm(t,n)}}function Fv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uc(t,e,n,r){var i=t.updateQueue;ti=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,m=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,_=a;switch(p=e,m=n,_.tag){case 1:if(I=_.payload,typeof I=="function"){d=I.call(m,d,p);break e}d=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=_.payload,p=typeof I=="function"?I.call(m,d,p):I,p==null)break e;d=$e({},d,p);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=m,l=d):h=h.next=m,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=d}}function Uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Gl={},ar=Mi(Gl),vl=Mi(Gl),wl=Mi(Gl);function ts(t){if(t===Gl)throw Error($(174));return t}function hg(t,e){switch(Oe(wl,e),Oe(vl,t),Oe(ar,Gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ap(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ap(e,t)}Ue(ar),Oe(ar,e)}function So(){Ue(ar),Ue(vl),Ue(wl)}function RI(t){ts(wl.current);var e=ts(ar.current),n=ap(e,t.type);e!==n&&(Oe(vl,t),Oe(ar,n))}function dg(t){vl.current===t&&(Ue(ar),Ue(vl))}var ze=Mi(0);function jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var of=[];function fg(){for(var t=0;t<of.length;t++)of[t]._workInProgressVersionPrimary=null;of.length=0}var nc=Br.ReactCurrentDispatcher,af=Br.ReactCurrentBatchConfig,fs=0,Be=null,ut=null,gt=null,zc=!1,qa=!1,El=0,gR=0;function xt(){throw Error($(321))}function pg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function mg(t,e,n,r,i,s){if(fs=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nc.current=t===null||t.memoizedState===null?wR:ER,t=n(r,i),qa){s=0;do{if(qa=!1,El=0,25<=s)throw Error($(301));s+=1,gt=ut=null,e.updateQueue=null,nc.current=TR,t=n(r,i)}while(qa)}if(nc.current=Bc,e=ut!==null&&ut.next!==null,fs=0,gt=ut=Be=null,zc=!1,e)throw Error($(300));return t}function gg(){var t=El!==0;return El=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Be.memoizedState=gt=t:gt=gt.next=t,gt}function Nn(){if(ut===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=gt===null?Be.memoizedState:gt.next;if(e!==null)gt=e,ut=t;else{if(t===null)throw Error($(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},gt===null?Be.memoizedState=gt=t:gt=gt.next=t}return gt}function Tl(t,e){return typeof e=="function"?e(t):e}function lf(t){var e=Nn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((fs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Be.lanes|=h,ps|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Hn(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Be.lanes|=s,ps|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uf(t){var e=Nn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bI(){}function NI(t,e){var n=Be,r=Nn(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,yg(LI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,Il(9,OI.bind(null,n,r,i,e),void 0,null),yt===null)throw Error($(349));fs&30||DI(n,e,i)}return i}function DI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OI(t,e,n,r){e.value=n,e.getSnapshot=r,VI(e)&&MI(t)}function LI(t,e,n){return n(function(){VI(e)&&MI(t)})}function VI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function MI(t){var e=Nr(t,1);e!==null&&Bn(e,t,1,-1)}function jv(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:t},e.queue=t,t=t.dispatch=vR.bind(null,Be,t),[e.memoizedState,t]}function Il(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function FI(){return Nn().memoizedState}function rc(t,e,n,r){var i=Xn();Be.flags|=t,i.memoizedState=Il(1|e,n,void 0,r===void 0?null:r)}function Sh(t,e,n,r){var i=Nn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&pg(r,o.deps)){i.memoizedState=Il(e,n,s,r);return}}Be.flags|=t,i.memoizedState=Il(1|e,n,s,r)}function zv(t,e){return rc(8390656,8,t,e)}function yg(t,e){return Sh(2048,8,t,e)}function UI(t,e){return Sh(4,2,t,e)}function jI(t,e){return Sh(4,4,t,e)}function zI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BI(t,e,n){return n=n!=null?n.concat([t]):null,Sh(4,4,zI.bind(null,e,t),n)}function _g(){}function $I(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function HI(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function WI(t,e,n){return fs&21?(Hn(n,e)||(n=YT(),Be.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function yR(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=af.transition;af.transition={};try{t(!1),e()}finally{xe=n,af.transition=r}}function qI(){return Nn().memoizedState}function _R(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GI(t))KI(e,n);else if(n=CI(t,e,n,r),n!==null){var i=jt();Bn(n,t,r,i),QI(n,e,r)}}function vR(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GI(t))KI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(i.next=i,ug(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=CI(t,e,i,r),n!==null&&(i=jt(),Bn(n,t,r,i),QI(n,e,r))}}function GI(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function KI(t,e){qa=zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function QI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qm(t,n)}}var Bc={readContext:bn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},wR={readContext:bn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:zv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,zI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_R.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:jv,useDebugValue:_g,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=jv(!1),e=t[0];return t=yR.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=Xn();if(je){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),yt===null)throw Error($(349));fs&30||DI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zv(LI.bind(null,r,s,t),[t]),r.flags|=2048,Il(9,OI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=yt.identifierPrefix;if(je){var n=kr,r=Ir;n=(r&~(1<<32-zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=El++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ER={readContext:bn,useCallback:$I,useContext:bn,useEffect:yg,useImperativeHandle:BI,useInsertionEffect:UI,useLayoutEffect:jI,useMemo:HI,useReducer:lf,useRef:FI,useState:function(){return lf(Tl)},useDebugValue:_g,useDeferredValue:function(t){var e=Nn();return WI(e,ut.memoizedState,t)},useTransition:function(){var t=lf(Tl)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:bI,useSyncExternalStore:NI,useId:qI,unstable_isNewReconciler:!1},TR={readContext:bn,useCallback:$I,useContext:bn,useEffect:yg,useImperativeHandle:BI,useInsertionEffect:UI,useLayoutEffect:jI,useMemo:HI,useReducer:uf,useRef:FI,useState:function(){return uf(Tl)},useDebugValue:_g,useDeferredValue:function(t){var e=Nn();return ut===null?e.memoizedState=t:WI(e,ut.memoizedState,t)},useTransition:function(){var t=uf(Tl)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:bI,useSyncExternalStore:NI,useId:qI,unstable_isNewReconciler:!1};function Mn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ah={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=wi(t),s=xr(r,i);s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(Bn(e,t,i,r),tc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=wi(t),s=xr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(Bn(e,t,i,r),tc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=wi(t),i=xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=_i(t,i,r),e!==null&&(Bn(e,t,r,n),tc(e,t,r))}};function Bv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ml(n,r)||!ml(i,s):!0}function YI(t,e,n){var r=!1,i=Ci,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(i=Zt(e)?hs:Dt.current,r=e.contextTypes,s=(r=r!=null)?To(t,i):Ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ah,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $v(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ah.enqueueReplaceState(e,e.state,null)}function Pp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},cg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bn(s):(s=Zt(e)?hs:Dt.current,i.context=To(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ah.enqueueReplaceState(i,i.state,null),Uc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=YC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IR=typeof WeakMap=="function"?WeakMap:Map;function JI(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hc||(Hc=!0,jp=r),Rp(t,e)},n}function XI(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rp(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MR.bind(null,t,e,n),e.then(t,t))}function Wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,_i(n,e,1))),n.lanes|=1),t)}var kR=Br.ReactCurrentOwner,Jt=!1;function Ut(t,e,n,r){e.child=t===null?xI(e,null,n,r):ko(e,t.child,n,r)}function Gv(t,e,n,r,i){n=n.render;var s=e.ref;return co(e,i),r=mg(t,e,n,r,s,i),n=gg(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(je&&n&&rg(e),e.flags|=1,Ut(t,e,r,i),e.child)}function Kv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ag(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZI(t,e,s,r,i)):(t=ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ml,n(o,r)&&t.ref===e.ref)return Dr(t,e,i)}return e.flags|=1,t=Ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ml(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Dr(t,e,i)}return bp(t,e,n,r,i)}function e1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(so,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Oe(so,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(so,cn),cn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Oe(so,cn),cn|=r;return Ut(t,e,i,n),e.child}function t1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bp(t,e,n,r,i){var s=Zt(n)?hs:Dt.current;return s=To(e,s),co(e,i),n=mg(t,e,n,r,s,i),r=gg(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(je&&r&&rg(e),e.flags|=1,Ut(t,e,n,i),e.child)}function Qv(t,e,n,r,i){if(Zt(n)){var s=!0;Oc(e)}else s=!1;if(co(e,i),e.stateNode===null)ic(t,e),YI(e,n,r),Pp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=Zt(n)?hs:Dt.current,c=To(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&$v(e,o,r,c),ti=!1;var p=e.memoizedState;o.state=p,Uc(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Xt.current||ti?(typeof h=="function"&&(Cp(e,n,h,r),l=e.memoizedState),(a=ti||Bv(e,n,a,r,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,PI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mn(e.type,a),o.props=c,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=Zt(n)?hs:Dt.current,l=To(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&$v(e,o,r,l),ti=!1,p=e.memoizedState,o.state=p,Uc(e,r,o,i);var I=e.memoizedState;a!==d||p!==I||Xt.current||ti?(typeof m=="function"&&(Cp(e,n,m,r),I=e.memoizedState),(c=ti||Bv(e,n,c,r,p,I,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Np(t,e,n,r,s,i)}function Np(t,e,n,r,i,s){t1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ov(e,n,!1),Dr(t,e,s);r=e.stateNode,kR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ko(e,t.child,null,s),e.child=ko(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&Ov(e,n,!0),e.child}function n1(t){var e=t.stateNode;e.pendingContext?Dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dv(t,e.context,!1),hg(t,e.containerInfo)}function Yv(t,e,n,r,i){return Io(),sg(i),e.flags|=256,Ut(t,e,n,r),e.child}var Dp={dehydrated:null,treeContext:null,retryLane:0};function Op(t){return{baseLanes:t,cachePool:null,transitions:null}}function r1(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Oe(ze,i&1),t===null)return Ap(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ph(o,r,0,null),t=ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Op(n),e.memoizedState=Dp,t):vg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return SR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=ss(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Op(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dp,r}return s=t.child,t=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vg(t,e){return e=Ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ou(t,e,n,r){return r!==null&&sg(r),ko(e,t.child,null,n),t=vg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cf(Error($(422))),Ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ph({mode:"visible",children:r.children},i,0,null),s=ss(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ko(e,t.child,null,o),e.child.memoizedState=Op(o),e.memoizedState=Dp,s);if(!(e.mode&1))return Ou(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=cf(s,r,void 0),Ou(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nr(t,i),Bn(r,t,i,-1))}return Sg(),r=cf(Error($(421))),Ou(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,hn=yi(i.nextSibling),mn=e,je=!0,Un=null,t!==null&&(kn[Sn++]=Ir,kn[Sn++]=kr,kn[Sn++]=ds,Ir=t.id,kr=t.overflow,ds=e),e=vg(e,r.children),e.flags|=4096,e)}function Jv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xp(t.return,e,n)}function hf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jv(t,n,e);else if(t.tag===19)Jv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Oe(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hf(e,!0,n,null,s);break;case"together":hf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AR(t,e,n){switch(e.tag){case 3:n1(e),Io();break;case 5:RI(e);break;case 1:Zt(e.type)&&Oc(e);break;case 4:hg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Oe(Mc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Oe(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?r1(t,e,n):(Oe(ze,ze.current&1),t=Dr(t,e,n),t!==null?t.sibling:null);Oe(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,e1(t,e,n)}return Dr(t,e,n)}var s1,Lp,o1,a1;s1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lp=function(){};o1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ts(ar.current);var s=null;switch(n){case"input":i=rp(t,i),r=rp(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=op(t,i),r=op(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nc)}lp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ll.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ll.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ta(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xR(t,e,n){var r=e.pendingProps;switch(ig(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Zt(e.type)&&Dc(),Ct(e),null;case 3:return r=e.stateNode,So(),Ue(Xt),Ue(Dt),fg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&($p(Un),Un=null))),Lp(t,e),Ct(e),null;case 5:dg(e);var i=ts(wl.current);if(n=e.type,t!==null&&e.stateNode!=null)o1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Ct(e),null}if(t=ts(ar.current),Nu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tr]=e,r[_l]=s,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<Da.length;i++)Me(Da[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":ov(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":lv(r,s),Me("invalid",r)}lp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bu(r.textContent,a,t),i=["children",""+a]):ll.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Me("scroll",r)}switch(n){case"input":Iu(r),av(r,s,!0);break;case"textarea":Iu(r),uv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Nc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=LT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tr]=e,t[_l]=r,s1(t,e,!1,!1),e.stateNode=t;e:{switch(o=up(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Da.length;i++)Me(Da[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":ov(t,r),i=rp(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Me("invalid",t);break;case"textarea":lv(t,r),i=op(t,r),Me("invalid",t);break;default:i=r}lp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?FT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&VT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ul(t,l):typeof l=="number"&&ul(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ll.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Me("scroll",t):l!=null&&$m(t,s,l,o))}switch(n){case"input":Iu(t),av(t,r,!1);break;case"textarea":Iu(t),uv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?oo(t,!!r.multiple,s,!1):r.defaultValue!=null&&oo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)a1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=ts(wl.current),ts(ar.current),Nu(e)){if(r=e.stateNode,n=e.memoizedProps,r[tr]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:bu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tr]=e,e.stateNode=r}return Ct(e),null;case 13:if(Ue(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&hn!==null&&e.mode&1&&!(e.flags&128))SI(),Io(),e.flags|=98560,s=!1;else if(s=Nu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[tr]=e}else Io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else Un!==null&&($p(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?ct===0&&(ct=3):Sg())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return So(),Lp(t,e),t===null&&gl(e.stateNode.containerInfo),Ct(e),null;case 10:return lg(e.type._context),Ct(e),null;case 17:return Zt(e.type)&&Dc(),Ct(e),null;case 19:if(Ue(ze),s=e.memoizedState,s===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ta(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jc(t),o!==null){for(e.flags|=128,Ta(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Oe(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Xe()>xo&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304)}else{if(!r)if(t=jc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return Ct(e),null}else 2*Xe()-s.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,r=!0,Ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xe(),e.sibling=null,n=ze.current,Oe(ze,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return kg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?cn&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function CR(t,e){switch(ig(e),e.tag){case 1:return Zt(e.type)&&Dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),Ue(Xt),Ue(Dt),fg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dg(e),null;case 13:if(Ue(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(ze),null;case 4:return So(),null;case 10:return lg(e.type._context),null;case 22:case 23:return kg(),null;case 24:return null;default:return null}}var Lu=!1,bt=!1,PR=typeof WeakSet=="function"?WeakSet:Set,Z=null;function io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Vp(t,e,n){try{n()}catch(r){qe(t,e,r)}}var Xv=!1;function RR(t,e){if(vp=Pc,t=dI(),ng(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)p=d,d=m;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(m=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wp={focusedElem:t,selectionRange:n},Pc=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var _=I.memoizedProps,S=I.memoizedState,y=e.stateNode,E=y.getSnapshotBeforeUpdate(e.elementType===e.type?_:Mn(e.type,_),S);y.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(L){qe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return I=Xv,Xv=!1,I}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vp(e,n,s)}i=i.next}while(i!==r)}}function xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l1(t){var e=t.alternate;e!==null&&(t.alternate=null,l1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tr],delete e[_l],delete e[Ip],delete e[dR],delete e[fR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u1(t){return t.tag===5||t.tag===3||t.tag===4}function Zv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nc));else if(r!==4&&(t=t.child,t!==null))for(Fp(t,e,n),t=t.sibling;t!==null;)Fp(t,e,n),t=t.sibling}function Up(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Up(t,e,n),t=t.sibling;t!==null;)Up(t,e,n),t=t.sibling}var Et=null,Fn=!1;function Jr(t,e,n){for(n=n.child;n!==null;)c1(t,e,n),n=n.sibling}function c1(t,e,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(vh,n)}catch{}switch(n.tag){case 5:bt||io(n,e);case 6:var r=Et,i=Fn;Et=null,Jr(t,e,n),Et=r,Fn=i,Et!==null&&(Fn?(t=Et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Et.removeChild(n.stateNode));break;case 18:Et!==null&&(Fn?(t=Et,n=n.stateNode,t.nodeType===8?rf(t.parentNode,n):t.nodeType===1&&rf(t,n),fl(t)):rf(Et,n.stateNode));break;case 4:r=Et,i=Fn,Et=n.stateNode.containerInfo,Fn=!0,Jr(t,e,n),Et=r,Fn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vp(n,e,o),i=i.next}while(i!==r)}Jr(t,e,n);break;case 1:if(!bt&&(io(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Jr(t,e,n);break;case 21:Jr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Jr(t,e,n),bt=r):Jr(t,e,n);break;default:Jr(t,e,n)}}function ew(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PR),e.forEach(function(r){var i=UR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Et=a.stateNode,Fn=!1;break e;case 3:Et=a.stateNode.containerInfo,Fn=!0;break e;case 4:Et=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Et===null)throw Error($(160));c1(s,o,i),Et=null,Fn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h1(e,t),e=e.sibling}function h1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),Jn(t),r&4){try{Ga(3,t,t.return),xh(3,t)}catch(_){qe(t,t.return,_)}try{Ga(5,t,t.return)}catch(_){qe(t,t.return,_)}}break;case 1:Vn(e,t),Jn(t),r&512&&n!==null&&io(n,n.return);break;case 5:if(Vn(e,t),Jn(t),r&512&&n!==null&&io(n,n.return),t.flags&32){var i=t.stateNode;try{ul(i,"")}catch(_){qe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&DT(i,s),up(a,o);var c=up(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?FT(i,d):h==="dangerouslySetInnerHTML"?VT(i,d):h==="children"?ul(i,d):$m(i,h,d,c)}switch(a){case"input":ip(i,s);break;case"textarea":OT(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?oo(i,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?oo(i,!!s.multiple,s.defaultValue,!0):oo(i,!!s.multiple,s.multiple?[]:"",!1))}i[_l]=s}catch(_){qe(t,t.return,_)}}break;case 6:if(Vn(e,t),Jn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){qe(t,t.return,_)}}break;case 3:if(Vn(e,t),Jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(_){qe(t,t.return,_)}break;case 4:Vn(e,t),Jn(t);break;case 13:Vn(e,t),Jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tg=Xe())),r&4&&ew(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(c=bt)||h,Vn(e,t),bt=c):Vn(e,t),Jn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Z=t,h=t.child;h!==null;){for(d=Z=h;Z!==null;){switch(p=Z,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ga(4,p,p.return);break;case 1:io(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(_){qe(r,n,_)}}break;case 5:io(p,p.return);break;case 22:if(p.memoizedState!==null){nw(d);continue}}m!==null?(m.return=p,Z=m):nw(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=MT("display",o))}catch(_){qe(t,t.return,_)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){qe(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vn(e,t),Jn(t),r&4&&ew(t);break;case 21:break;default:Vn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u1(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ul(i,""),r.flags&=-33);var s=Zv(t);Up(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zv(t);Fp(t,a,o);break;default:throw Error($(161))}}catch(l){qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bR(t,e,n){Z=t,d1(t)}function d1(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Lu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||bt;a=Lu;var c=bt;if(Lu=o,(bt=l)&&!c)for(Z=i;Z!==null;)o=Z,l=o.child,o.tag===22&&o.memoizedState!==null?rw(i):l!==null?(l.return=o,Z=l):rw(i);for(;s!==null;)Z=s,d1(s),s=s.sibling;Z=i,Lu=a,bt=c}tw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Z=s):tw(t)}}function tw(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&fl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}bt||e.flags&512&&Mp(e)}catch(p){qe(e,e.return,p)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function nw(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function rw(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xh(4,e)}catch(l){qe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){qe(e,i,l)}}var s=e.return;try{Mp(e)}catch(l){qe(e,s,l)}break;case 5:var o=e.return;try{Mp(e)}catch(l){qe(e,o,l)}}}catch(l){qe(e,e.return,l)}if(e===t){Z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Z=a;break}Z=e.return}}var NR=Math.ceil,$c=Br.ReactCurrentDispatcher,wg=Br.ReactCurrentOwner,Pn=Br.ReactCurrentBatchConfig,_e=0,yt=null,rt=null,kt=0,cn=0,so=Mi(0),ct=0,kl=null,ps=0,Ch=0,Eg=0,Ka=null,Qt=null,Tg=0,xo=1/0,wr=null,Hc=!1,jp=null,vi=null,Vu=!1,ci=null,Wc=0,Qa=0,zp=null,sc=-1,oc=0;function jt(){return _e&6?Xe():sc!==-1?sc:sc=Xe()}function wi(t){return t.mode&1?_e&2&&kt!==0?kt&-kt:mR.transition!==null?(oc===0&&(oc=YT()),oc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:rI(t.type)),t):1}function Bn(t,e,n,r){if(50<Qa)throw Qa=0,zp=null,Error($(185));Hl(t,n,r),(!(_e&2)||t!==yt)&&(t===yt&&(!(_e&2)&&(Ch|=n),ct===4&&ri(t,kt)),en(t,r),n===1&&_e===0&&!(e.mode&1)&&(xo=Xe()+500,kh&&Fi()))}function en(t,e){var n=t.callbackNode;mP(t,e);var r=Cc(t,t===yt?kt:0);if(r===0)n!==null&&dv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dv(n),e===1)t.tag===0?pR(iw.bind(null,t)):TI(iw.bind(null,t)),cR(function(){!(_e&6)&&Fi()}),n=null;else{switch(JT(r)){case 1:n=Km;break;case 4:n=KT;break;case 16:n=xc;break;case 536870912:n=QT;break;default:n=xc}n=w1(n,f1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f1(t,e){if(sc=-1,oc=0,_e&6)throw Error($(327));var n=t.callbackNode;if(ho()&&t.callbackNode!==n)return null;var r=Cc(t,t===yt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qc(t,r);else{e=r;var i=_e;_e|=2;var s=m1();(yt!==t||kt!==e)&&(wr=null,xo=Xe()+500,is(t,e));do try{LR();break}catch(a){p1(t,a)}while(1);ag(),$c.current=s,_e=i,rt!==null?e=0:(yt=null,kt=0,e=ct)}if(e!==0){if(e===2&&(i=pp(t),i!==0&&(r=i,e=Bp(t,i))),e===1)throw n=kl,is(t,0),ri(t,r),en(t,Xe()),n;if(e===6)ri(t,r);else{if(i=t.current.alternate,!(r&30)&&!DR(i)&&(e=qc(t,r),e===2&&(s=pp(t),s!==0&&(r=s,e=Bp(t,s))),e===1))throw n=kl,is(t,0),ri(t,r),en(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Yi(t,Qt,wr);break;case 3:if(ri(t,r),(r&130023424)===r&&(e=Tg+500-Xe(),10<e)){if(Cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tp(Yi.bind(null,t,Qt,wr),e);break}Yi(t,Qt,wr);break;case 4:if(ri(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NR(r/1960))-r,10<r){t.timeoutHandle=Tp(Yi.bind(null,t,Qt,wr),r);break}Yi(t,Qt,wr);break;case 5:Yi(t,Qt,wr);break;default:throw Error($(329))}}}return en(t,Xe()),t.callbackNode===n?f1.bind(null,t):null}function Bp(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=qc(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&$p(e)),t}function $p(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function DR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(t,e){for(e&=~Eg,e&=~Ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),r=1<<n;t[n]=-1,e&=~r}}function iw(t){if(_e&6)throw Error($(327));ho();var e=Cc(t,0);if(!(e&1))return en(t,Xe()),null;var n=qc(t,e);if(t.tag!==0&&n===2){var r=pp(t);r!==0&&(e=r,n=Bp(t,r))}if(n===1)throw n=kl,is(t,0),ri(t,e),en(t,Xe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,Qt,wr),en(t,Xe()),null}function Ig(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(xo=Xe()+500,kh&&Fi())}}function ms(t){ci!==null&&ci.tag===0&&!(_e&6)&&ho();var e=_e;_e|=1;var n=Pn.transition,r=xe;try{if(Pn.transition=null,xe=1,t)return t()}finally{xe=r,Pn.transition=n,_e=e,!(_e&6)&&Fi()}}function kg(){cn=so.current,Ue(so)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uR(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(ig(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dc();break;case 3:So(),Ue(Xt),Ue(Dt),fg();break;case 5:dg(r);break;case 4:So();break;case 13:Ue(ze);break;case 19:Ue(ze);break;case 10:lg(r.type._context);break;case 22:case 23:kg()}n=n.return}if(yt=t,rt=t=Ei(t.current,null),kt=cn=e,ct=0,kl=null,Eg=Ch=ps=0,Qt=Ka=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}es=null}return t}function p1(t,e){do{var n=rt;try{if(ag(),nc.current=Bc,zc){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zc=!1}if(fs=0,gt=ut=Be=null,qa=!1,El=0,wg.current=null,n===null||n.return===null){ct=1,kl=e,rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Wv(o);if(m!==null){m.flags&=-257,qv(m,o,a,s,e),m.mode&1&&Hv(s,c,e),e=m,l=c;var I=e.updateQueue;if(I===null){var _=new Set;_.add(l),e.updateQueue=_}else I.add(l);break e}else{if(!(e&1)){Hv(s,c,e),Sg();break e}l=Error($(426))}}else if(je&&a.mode&1){var S=Wv(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),qv(S,o,a,s,e),sg(Ao(l,a));break e}}s=l=Ao(l,a),ct!==4&&(ct=2),Ka===null?Ka=[s]:Ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=JI(s,l,e);Fv(s,y);break e;case 1:a=l;var E=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(vi===null||!vi.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=XI(s,a,e);Fv(s,L);break e}}s=s.return}while(s!==null)}y1(n)}catch(U){e=U,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function m1(){var t=$c.current;return $c.current=Bc,t===null?Bc:t}function Sg(){(ct===0||ct===3||ct===2)&&(ct=4),yt===null||!(ps&268435455)&&!(Ch&268435455)||ri(yt,kt)}function qc(t,e){var n=_e;_e|=2;var r=m1();(yt!==t||kt!==e)&&(wr=null,is(t,e));do try{OR();break}catch(i){p1(t,i)}while(1);if(ag(),_e=n,$c.current=r,rt!==null)throw Error($(261));return yt=null,kt=0,ct}function OR(){for(;rt!==null;)g1(rt)}function LR(){for(;rt!==null&&!oP();)g1(rt)}function g1(t){var e=v1(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?y1(t):rt=e,wg.current=null}function y1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CR(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,rt=null;return}}else if(n=xR(n,e,cn),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);ct===0&&(ct=5)}function Yi(t,e,n){var r=xe,i=Pn.transition;try{Pn.transition=null,xe=1,VR(t,e,n,r)}finally{Pn.transition=i,xe=r}return null}function VR(t,e,n,r){do ho();while(ci!==null);if(_e&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gP(t,s),t===yt&&(rt=yt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vu||(Vu=!0,w1(xc,function(){return ho(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=xe;xe=1;var a=_e;_e|=4,wg.current=null,RR(t,n),h1(n,t),nR(wp),Pc=!!vp,wp=vp=null,t.current=n,bR(n),aP(),_e=a,xe=o,Pn.transition=s}else t.current=n;if(Vu&&(Vu=!1,ci=t,Wc=i),s=t.pendingLanes,s===0&&(vi=null),cP(n.stateNode),en(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hc)throw Hc=!1,t=jp,jp=null,t;return Wc&1&&t.tag!==0&&ho(),s=t.pendingLanes,s&1?t===zp?Qa++:(Qa=0,zp=t):Qa=0,Fi(),null}function ho(){if(ci!==null){var t=JT(Wc),e=Pn.transition,n=xe;try{if(Pn.transition=null,xe=16>t?16:t,ci===null)var r=!1;else{if(t=ci,ci=null,Wc=0,_e&6)throw Error($(331));var i=_e;for(_e|=4,Z=t.current;Z!==null;){var s=Z,o=s.child;if(Z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Z=c;Z!==null;){var h=Z;switch(h.tag){case 0:case 11:case 15:Ga(8,h,s)}var d=h.child;if(d!==null)d.return=h,Z=d;else for(;Z!==null;){h=Z;var p=h.sibling,m=h.return;if(l1(h),h===c){Z=null;break}if(p!==null){p.return=m,Z=p;break}Z=m}}}var I=s.alternate;if(I!==null){var _=I.child;if(_!==null){I.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}Z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Z=o;else e:for(;Z!==null;){if(s=Z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ga(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,Z=y;break e}Z=s.return}}var E=t.current;for(Z=E;Z!==null;){o=Z;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,Z=T;else e:for(o=E;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xh(9,a)}}catch(U){qe(a,a.return,U)}if(a===o){Z=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,Z=L;break e}Z=a.return}}if(_e=i,Fi(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(vh,t)}catch{}r=!0}return r}finally{xe=n,Pn.transition=e}}return!1}function sw(t,e,n){e=Ao(n,e),e=JI(t,e,1),t=_i(t,e,1),e=jt(),t!==null&&(Hl(t,1,e),en(t,e))}function qe(t,e,n){if(t.tag===3)sw(t,t,n);else for(;e!==null;){if(e.tag===3){sw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=Ao(n,t),t=XI(e,t,1),e=_i(e,t,1),t=jt(),e!==null&&(Hl(e,1,t),en(e,t));break}}e=e.return}}function MR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(kt&n)===n&&(ct===4||ct===3&&(kt&130023424)===kt&&500>Xe()-Tg?is(t,0):Eg|=n),en(t,e)}function _1(t,e){e===0&&(t.mode&1?(e=Au,Au<<=1,!(Au&130023424)&&(Au=4194304)):e=1);var n=jt();t=Nr(t,e),t!==null&&(Hl(t,e,n),en(t,n))}function FR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_1(t,n)}function UR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),_1(t,n)}var v1;v1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,AR(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,je&&e.flags&1048576&&II(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ic(t,e),t=e.pendingProps;var i=To(e,Dt.current);co(e,n),i=mg(null,e,r,t,i,n);var s=gg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(r)?(s=!0,Oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cg(e),i.updater=Ah,e.stateNode=i,i._reactInternals=e,Pp(e,r,t,n),e=Np(null,e,r,!0,s,n)):(e.tag=0,je&&s&&rg(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ic(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zR(r),t=Mn(r,t),i){case 0:e=bp(null,e,r,t,n);break e;case 1:e=Qv(null,e,r,t,n);break e;case 11:e=Gv(null,e,r,t,n);break e;case 14:e=Kv(null,e,r,Mn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),bp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Qv(t,e,r,i,n);case 3:e:{if(n1(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,PI(t,e),Uc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error($(423)),e),e=Yv(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error($(424)),e),e=Yv(t,e,r,n,i);break e}else for(hn=yi(e.stateNode.containerInfo.firstChild),mn=e,je=!0,Un=null,n=xI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Io(),r===i){e=Dr(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return RI(e),t===null&&Ap(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ep(r,i)?o=null:s!==null&&Ep(r,s)&&(e.flags|=32),t1(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&Ap(e),null;case 13:return r1(t,e,n);case 4:return hg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ko(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),Gv(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Oe(Mc,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!Xt.current){e=Dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,co(e,n),i=bn(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=Mn(r,e.pendingProps),i=Mn(r.type,i),Kv(t,e,r,i,n);case 15:return ZI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mn(r,i),ic(t,e),e.tag=1,Zt(r)?(t=!0,Oc(e)):t=!1,co(e,n),YI(e,r,i),Pp(e,r,i,n),Np(null,e,r,!0,t,n);case 19:return i1(t,e,n);case 22:return e1(t,e,n)}throw Error($(156,e.tag))};function w1(t,e){return GT(t,e)}function jR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,r){return new jR(t,e,n,r)}function Ag(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zR(t){if(typeof t=="function")return Ag(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wm)return 11;if(t===qm)return 14}return 2}function Ei(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ag(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return ss(n.children,i,s,e);case Hm:o=8,i|=8;break;case Zf:return t=Cn(12,n,e,i|2),t.elementType=Zf,t.lanes=s,t;case ep:return t=Cn(13,n,e,i),t.elementType=ep,t.lanes=s,t;case tp:return t=Cn(19,n,e,i),t.elementType=tp,t.lanes=s,t;case RT:return Ph(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case CT:o=10;break e;case PT:o=9;break e;case Wm:o=11;break e;case qm:o=14;break e;case ei:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ss(t,e,n,r){return t=Cn(7,t,r,e),t.lanes=n,t}function Ph(t,e,n,r){return t=Cn(22,t,r,e),t.elementType=RT,t.lanes=n,t.stateNode={isHidden:!1},t}function df(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function ff(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qd(0),this.expirationTimes=qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xg(t,e,n,r,i,s,o,a,l){return t=new BR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cg(s),t}function $R(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E1(t){if(!t)return Ci;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Zt(n))return EI(t,n,e)}return e}function T1(t,e,n,r,i,s,o,a,l){return t=xg(n,r,!0,t,i,s,o,a,l),t.context=E1(null),n=t.current,r=jt(),i=wi(n),s=xr(r,i),s.callback=e??null,_i(n,s,i),t.current.lanes=i,Hl(t,i,r),en(t,r),t}function Rh(t,e,n,r){var i=e.current,s=jt(),o=wi(i);return n=E1(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_i(i,e,o),t!==null&&(Bn(t,i,o,s),tc(t,i,o)),o}function Gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ow(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cg(t,e){ow(t,e),(t=t.alternate)&&ow(t,e)}function HR(){return null}var I1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pg(t){this._internalRoot=t}bh.prototype.render=Pg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Rh(t,e,null,null)};bh.prototype.unmount=Pg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){Rh(null,t,null,null)}),e[br]=null}};function bh(t){this._internalRoot=t}bh.prototype.unstable_scheduleHydration=function(t){if(t){var e=eI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ni.length&&e!==0&&e<ni[n].priority;n++);ni.splice(n,0,t),n===0&&nI(t)}};function Rg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function aw(){}function WR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gc(o);s.call(c)}}var o=T1(e,r,t,0,null,!1,!1,"",aw);return t._reactRootContainer=o,t[br]=o.current,gl(t.nodeType===8?t.parentNode:t),ms(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Gc(l);a.call(c)}}var l=xg(t,0,!1,null,null,!1,!1,"",aw);return t._reactRootContainer=l,t[br]=l.current,gl(t.nodeType===8?t.parentNode:t),ms(function(){Rh(e,l,n,r)}),l}function Dh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gc(o);a.call(l)}}Rh(e,o,t,i)}else o=WR(n,e,t,i,r);return Gc(o)}XT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(Qm(e,n|1),en(e,Xe()),!(_e&6)&&(xo=Xe()+500,Fi()))}break;case 13:ms(function(){var r=Nr(t,1);if(r!==null){var i=jt();Bn(r,t,1,i)}}),Cg(t,1)}};Ym=function(t){if(t.tag===13){var e=Nr(t,134217728);if(e!==null){var n=jt();Bn(e,t,134217728,n)}Cg(t,134217728)}};ZT=function(t){if(t.tag===13){var e=wi(t),n=Nr(t,e);if(n!==null){var r=jt();Bn(n,t,e,r)}Cg(t,e)}};eI=function(){return xe};tI=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};hp=function(t,e,n){switch(e){case"input":if(ip(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ih(r);if(!i)throw Error($(90));NT(r),ip(r,i)}}}break;case"textarea":OT(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};zT=Ig;BT=ms;var qR={usingClientEntryPoint:!1,Events:[ql,Zs,Ih,UT,jT,Ig]},Ia={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GR={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=WT(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||HR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{vh=Mu.inject(GR),or=Mu}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qR;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rg(e))throw Error($(200));return $R(t,e,null,n)};yn.createRoot=function(t,e){if(!Rg(t))throw Error($(299));var n=!1,r="",i=I1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xg(t,1,!1,null,null,n,!1,r,i),t[br]=e.current,gl(t.nodeType===8?t.parentNode:t),new Pg(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=WT(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return ms(t)};yn.hydrate=function(t,e,n){if(!Nh(e))throw Error($(200));return Dh(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Rg(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=I1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=T1(e,null,t,1,n??null,i,!1,s,o),t[br]=e.current,gl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bh(e)};yn.render=function(t,e,n){if(!Nh(e))throw Error($(200));return Dh(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Nh(t))throw Error($(40));return t._reactRootContainer?(ms(function(){Dh(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};yn.unstable_batchedUpdates=Ig;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nh(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Dh(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function k1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k1)}catch(t){console.error(t)}}k1(),kT.exports=yn;var KR=kT.exports,lw=KR;Jf.createRoot=lw.createRoot,Jf.hydrateRoot=lw.hydrateRoot;const QR="modulepreload",YR=function(t){return"/"+t},uw={},Pe=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=YR(s),s in uw)return;uw[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":QR,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((h,d)=>{c.addEventListener("load",h),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sl.apply(this,arguments)}var hi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hi||(hi={}));const cw="popstate";function JR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Hp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kc(i)}return ZR(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XR(){return Math.random().toString(36).substr(2,8)}function hw(t,e){return{usr:t.state,key:t.key,idx:e}}function Hp(t,e,n,r){return n===void 0&&(n=null),Sl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mo(e):e,{state:n,key:e&&e.key||r||XR()})}function Kc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=hi.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Sl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=hi.Pop;let S=h(),y=S==null?null:S-c;c=S,l&&l({action:a,location:_.location,delta:y})}function p(S,y){a=hi.Push;let E=Hp(_.location,S,y);n&&n(E,S),c=h()+1;let T=hw(E,c),L=_.createHref(E);try{o.pushState(T,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&l&&l({action:a,location:_.location,delta:1})}function m(S,y){a=hi.Replace;let E=Hp(_.location,S,y);n&&n(E,S),c=h();let T=hw(E,c),L=_.createHref(E);o.replaceState(T,"",L),s&&l&&l({action:a,location:_.location,delta:0})}function I(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof S=="string"?S:Kc(S);return E=E.replace(/ $/,"%20"),Ze(y,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,y)}let _={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cw,d),l=S,()=>{i.removeEventListener(cw,d),l=null}},createHref(S){return e(i,S)},createURL:I,encodeLocation(S){let y=I(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:m,go(S){return o.go(S)}};return _}var dw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dw||(dw={}));function eb(t,e,n){return n===void 0&&(n="/"),tb(t,e,n,!1)}function tb(t,e,n,r){let i=typeof e=="string"?Mo(e):e,s=Ng(i.pathname||"/",n);if(s==null)return null;let o=S1(t);nb(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=fb(s);a=hb(o[l],c,r)}return a}function S1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ti([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),S1(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ub(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of A1(s.path))i(s,o,l)}),e}function A1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=A1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function nb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rb=/^:[\w-]+$/,ib=3,sb=2,ob=1,ab=10,lb=-2,fw=t=>t==="*";function ub(t,e){let n=t.split("/"),r=n.length;return n.some(fw)&&(r+=lb),e&&(r+=sb),n.filter(i=>!fw(i)).reduce((i,s)=>i+(rb.test(s)?ib:s===""?ob:ab),r)}function cb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function hb(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=pw({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=pw({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Ti([s,d.pathname]),pathnameBase:_b(Ti([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=Ti([s,d.pathnameBase]))}return o}function pw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=db(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:p,isOptional:m}=h;if(p==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const I=a[d];return m&&!I?c[p]=void 0:c[p]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function db(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ng(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const pb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mb=t=>pb.test(t);function gb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Mo(t):t,s;if(n)if(mb(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),bg(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=mw(n.substring(1),"/"):s=mw(n,e)}else s=e;return{pathname:s,search:vb(r),hash:wb(i)}}function mw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dg(t,e){let n=yb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Og(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Mo(t):(i=Sl({},t),Ze(!i.pathname||!i.pathname.includes("?"),pf("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),pf("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),pf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=gb(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Ti=t=>t.join("/").replace(/\/\/+/g,"/"),_b=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Eb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const x1=["post","put","patch","delete"];new Set(x1);const Tb=["get",...x1];new Set(Tb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al.apply(this,arguments)}const Lg=M.createContext(null),Ib=M.createContext(null),Ui=M.createContext(null),Oh=M.createContext(null),pr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),C1=M.createContext(null);function kb(t,e){let{relative:n}=e===void 0?{}:e;Fo()||Ze(!1);let{basename:r,navigator:i}=M.useContext(Ui),{hash:s,pathname:o,search:a}=R1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ti([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Fo(){return M.useContext(Oh)!=null}function Uo(){return Fo()||Ze(!1),M.useContext(Oh).location}function P1(t){M.useContext(Ui).static||M.useLayoutEffect(t)}function Vg(){let{isDataRoute:t}=M.useContext(pr);return t?Ub():Sb()}function Sb(){Fo()||Ze(!1);let t=M.useContext(Lg),{basename:e,future:n,navigator:r}=M.useContext(Ui),{matches:i}=M.useContext(pr),{pathname:s}=Uo(),o=JSON.stringify(Dg(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return P1(()=>{a.current=!0}),M.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Og(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ti([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}const Ab=M.createContext(null);function xb(t){let e=M.useContext(pr).outlet;return e&&M.createElement(Ab.Provider,{value:t},e)}function l$(){let{matches:t}=M.useContext(pr),e=t[t.length-1];return e?e.params:{}}function R1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Ui),{matches:i}=M.useContext(pr),{pathname:s}=Uo(),o=JSON.stringify(Dg(i,r.v7_relativeSplatPath));return M.useMemo(()=>Og(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Cb(t,e){return Pb(t,e)}function Pb(t,e,n,r){Fo()||Ze(!1);let{navigator:i}=M.useContext(Ui),{matches:s}=M.useContext(pr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Uo(),h;if(e){var d;let S=typeof e=="string"?Mo(e):e;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||Ze(!1),h=S}else h=c;let p=h.pathname||"/",m=p;if(l!=="/"){let S=l.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let I=eb(t,{pathname:m}),_=Ob(I&&I.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Ti([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Ti([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&_?M.createElement(Oh.Provider,{value:{location:Al({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:hi.Pop}},_):_}function Rb(){let t=Fb(),e=Eb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,s)}const bb=M.createElement(Rb,null);class Nb extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(pr.Provider,{value:this.props.routeContext},M.createElement(C1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Db(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Lg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(pr.Provider,{value:e},r)}function Ob(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||Ze(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:p,errors:m}=n,I=d.route.loader&&p[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||I){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,d,p)=>{let m,I=!1,_=null,S=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||bb,l&&(c<0&&p===0?(jb("route-fallback",!1),I=!0,S=null):c===p&&(I=!0,S=d.route.hydrateFallbackElement||null)));let y=e.concat(o.slice(0,p+1)),E=()=>{let T;return m?T=_:I?T=S:d.route.Component?T=M.createElement(d.route.Component,null):d.route.element?T=d.route.element:T=h,M.createElement(Db,{match:d,routeContext:{outlet:h,matches:y,isDataRoute:n!=null},children:T})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?M.createElement(Nb,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:E(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):E()},null)}var b1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(b1||{}),Qc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qc||{});function Lb(t){let e=M.useContext(Lg);return e||Ze(!1),e}function Vb(t){let e=M.useContext(Ib);return e||Ze(!1),e}function Mb(t){let e=M.useContext(pr);return e||Ze(!1),e}function N1(t){let e=Mb(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function Fb(){var t;let e=M.useContext(C1),n=Vb(Qc.UseRouteError),r=N1(Qc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ub(){let{router:t}=Lb(b1.UseNavigateStable),e=N1(Qc.UseNavigateStable),n=M.useRef(!1);return P1(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Al({fromRouteId:e},s)))},[t,e])}const gw={};function jb(t,e,n){!e&&!gw[t]&&(gw[t]=!0)}function zb(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Mg(t){let{to:e,replace:n,state:r,relative:i}=t;Fo()||Ze(!1);let{future:s,static:o}=M.useContext(Ui),{matches:a}=M.useContext(pr),{pathname:l}=Uo(),c=Vg(),h=Og(e,Dg(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(h);return M.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function Fg(t){return xb(t.context)}function Ee(t){Ze(!1)}function Bb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hi.Pop,navigator:s,static:o=!1,future:a}=t;Fo()&&Ze(!1);let l=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:l,navigator:s,static:o,future:Al({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Mo(r));let{pathname:h="/",search:d="",hash:p="",state:m=null,key:I="default"}=r,_=M.useMemo(()=>{let S=Ng(h,l);return S==null?null:{location:{pathname:S,search:d,hash:p,state:m,key:I},navigationType:i}},[l,h,d,p,m,I,i]);return _==null?null:M.createElement(Ui.Provider,{value:c},M.createElement(Oh.Provider,{children:n,value:_}))}function $b(t){let{children:e,location:n}=t;return Cb(Wp(e),n)}new Promise(()=>{});function Wp(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Wp(r.props.children,s));return}r.type!==Ee&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qp(){return qp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qp.apply(this,arguments)}function Hb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Wb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qb(t,e){return t.button===0&&(!e||e==="_self")&&!Wb(t)}const Gb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Kb="6";try{window.__reactRouterVersion=Kb}catch{}const Qb="startTransition",yw=MC[Qb];function Yb(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=JR({window:i,v5Compat:!0}));let o=s.current,[a,l]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=M.useCallback(d=>{c&&yw?yw(()=>l(d)):l(d)},[l,c]);return M.useLayoutEffect(()=>o.listen(h),[o,h]),M.useEffect(()=>zb(r),[r]),M.createElement(Bb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Jb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,u$=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:d}=e,p=Hb(e,Gb),{basename:m}=M.useContext(Ui),I,_=!1;if(typeof c=="string"&&Xb.test(c)&&(I=c,Jb))try{let T=new URL(window.location.href),L=c.startsWith("//")?new URL(T.protocol+c):new URL(c),U=Ng(L.pathname,m);L.origin===T.origin&&U!=null?c=U+L.search+L.hash:_=!0}catch{}let S=kb(c,{relative:i}),y=Zb(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function E(T){r&&r(T),T.defaultPrevented||y(T)}return M.createElement("a",qp({},p,{href:I||S,onClick:_||s?r:E,ref:n,target:l}))});var _w;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_w||(_w={}));var vw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vw||(vw={}));function Zb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Vg(),c=Uo(),h=R1(t,{relative:o});return M.useCallback(d=>{if(qb(d,n)){d.preventDefault();let p=r!==void 0?r:Kc(c)===Kc(h);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}let eN={data:""},tN=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||eN},nN=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rN=/\/\*[^]*?\*\/|  +/g,ww=/\n+/g,ii=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?ii(o,s):s+"{"+ii(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=ii(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ii.p?ii.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},_r={},D1=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+D1(t[n]);return e}return t},iN=(t,e,n,r,i)=>{let s=D1(t),o=_r[s]||(_r[s]=(l=>{let c=0,h=11;for(;c<l.length;)h=101*h+l.charCodeAt(c++)>>>0;return"go"+h})(s));if(!_r[o]){let l=s!==t?t:(c=>{let h,d,p=[{}];for(;h=nN.exec(c.replace(rN,""));)h[4]?p.shift():h[3]?(d=h[3].replace(ww," ").trim(),p.unshift(p[0][d]=p[0][d]||{})):p[0][h[1]]=h[2].replace(ww," ").trim();return p[0]})(t);_r[o]=ii(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&_r.g?_r.g:null;return n&&(_r.g=_r[o]),((l,c,h,d)=>{d?c.data=c.data.replace(d,l):c.data.indexOf(l)===-1&&(c.data=h?l+c.data:c.data+l)})(_r[o],e,r,a),o},sN=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":ii(a,""):a===!1?"":a}return r+i+(o??"")},"");function Lh(t){let e=this||{},n=t.call?t(e.p):t;return iN(n.unshift?n.raw?sN(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,tN(e.target),e.g,e.o,e.k)}let O1,Gp,Kp;Lh.bind({g:1});let Or=Lh.bind({k:1});function oN(t,e,n,r){ii.p=e,O1=t,Gp=n,Kp=r}function ji(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:Gp&&Gp()},a),n.o=/ *go\d+/.test(l),a.className=Lh.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let c=t;return t[0]&&(c=a.as||t,delete a.as),Kp&&c[0]&&Kp(a),O1(c,a)}return e?e(i):i}}var aN=t=>typeof t=="function",Yc=(t,e)=>aN(t)?t(e):t,lN=(()=>{let t=0;return()=>(++t).toString()})(),L1=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),uN=20,Ug="default",V1=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return V1(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},lc=[],M1={toasts:[],pausedAt:void 0,settings:{toastLimit:uN}},ir={},F1=(t,e=Ug)=>{ir[e]=V1(ir[e]||M1,t),lc.forEach(([n,r])=>{n===e&&r(ir[e])})},U1=t=>Object.keys(ir).forEach(e=>F1(t,e)),cN=t=>Object.keys(ir).find(e=>ir[e].toasts.some(n=>n.id===t)),Vh=(t=Ug)=>e=>{F1(e,t)},hN={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},dN=(t={},e=Ug)=>{let[n,r]=M.useState(ir[e]||M1),i=M.useRef(ir[e]);M.useEffect(()=>(i.current!==ir[e]&&r(ir[e]),lc.push([e,r]),()=>{let o=lc.findIndex(([a])=>a===e);o>-1&&lc.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||hN[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},fN=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||lN()}),Kl=t=>(e,n)=>{let r=fN(e,t,n);return Vh(r.toasterId||cN(r.id))({type:2,toast:r}),r.id},Ge=(t,e)=>Kl("blank")(t,e);Ge.error=Kl("error");Ge.success=Kl("success");Ge.loading=Kl("loading");Ge.custom=Kl("custom");Ge.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Vh(e)(n):U1(n)};Ge.dismissAll=t=>Ge.dismiss(void 0,t);Ge.remove=(t,e)=>{let n={type:4,toastId:t};e?Vh(e)(n):U1(n)};Ge.removeAll=t=>Ge.remove(void 0,t);Ge.promise=(t,e,n)=>{let r=Ge.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Yc(e.success,i):void 0;return s?Ge.success(s,{id:r,...n,...n==null?void 0:n.success}):Ge.dismiss(r),i}).catch(i=>{let s=e.error?Yc(e.error,i):void 0;s?Ge.error(s,{id:r,...n,...n==null?void 0:n.error}):Ge.dismiss(r)}),t};var pN=1e3,mN=(t,e="default")=>{let{toasts:n,pausedAt:r}=dN(t,e),i=M.useRef(new Map).current,s=M.useCallback((d,p=pN)=>{if(i.has(d))return;let m=setTimeout(()=>{i.delete(d),o({type:4,toastId:d})},p);i.set(d,m)},[]);M.useEffect(()=>{if(r)return;let d=Date.now(),p=n.map(m=>{if(m.duration===1/0)return;let I=(m.duration||0)+m.pauseDuration-(d-m.createdAt);if(I<0){m.visible&&Ge.dismiss(m.id);return}return setTimeout(()=>Ge.dismiss(m.id,e),I)});return()=>{p.forEach(m=>m&&clearTimeout(m))}},[n,r,e]);let o=M.useCallback(Vh(e),[e]),a=M.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=M.useCallback((d,p)=>{o({type:1,toast:{id:d,height:p}})},[o]),c=M.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=M.useCallback((d,p)=>{let{reverseOrder:m=!1,gutter:I=8,defaultPosition:_}=p||{},S=n.filter(T=>(T.position||_)===(d.position||_)&&T.height),y=S.findIndex(T=>T.id===d.id),E=S.filter((T,L)=>L<y&&T.visible).length;return S.filter(T=>T.visible).slice(...m?[E+1]:[0,E]).reduce((T,L)=>T+(L.height||0)+I,0)},[n]);return M.useEffect(()=>{n.forEach(d=>{if(d.dismissed)s(d.id,d.removeDelay);else{let p=i.get(d.id);p&&(clearTimeout(p),i.delete(d.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:h}}},gN=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,yN=Or`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_N=Or`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,vN=ji("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${yN} 0.15s ease-out forwards;
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
    animation: ${_N} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,wN=Or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,EN=ji("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${wN} 1s linear infinite;
`,TN=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,IN=Or`
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
}`,kN=ji("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${TN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${IN} 0.2s ease-out forwards;
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
`,SN=ji("div")`
  position: absolute;
`,AN=ji("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xN=Or`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,CN=ji("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xN} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,PN=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?M.createElement(CN,null,e):e:n==="blank"?null:M.createElement(AN,null,M.createElement(EN,{...r}),n!=="loading"&&M.createElement(SN,null,n==="error"?M.createElement(vN,{...r}):M.createElement(kN,{...r})))},RN=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,bN=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,NN="0%{opacity:0;} 100%{opacity:1;}",DN="0%{opacity:1;} 100%{opacity:0;}",ON=ji("div")`
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
`,LN=ji("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,VN=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=L1()?[NN,DN]:[RN(n),bN(n)];return{animation:e?`${Or(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Or(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},MN=M.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?VN(t.position||e||"top-center",t.visible):{opacity:0},s=M.createElement(PN,{toast:t}),o=M.createElement(LN,{...t.ariaProps},Yc(t.message,t));return M.createElement(ON,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):M.createElement(M.Fragment,null,s,o))});oN(M.createElement);var FN=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=M.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return M.createElement("div",{ref:s,className:e,style:n},i)},UN=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:L1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},jN=Lh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Fu=16,zN=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=mN(n,s);return M.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Fu,left:Fu,right:Fu,bottom:Fu,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(h=>{let d=h.position||e,p=c.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),m=UN(d,p);return M.createElement(FN,{id:h.id,key:h.id,onHeightUpdate:c.updateHeight,className:h.visible?jN:"",style:m},h.type==="custom"?Yc(h.message,h):i?i(h):M.createElement(MN,{toast:h,position:d}))}))},mf=Ge,BN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $N=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vn=(t,e)=>{const n=M.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},c)=>M.createElement("svg",{ref:c,...BN,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${$N(t)}`,...l},[...e.map(([h,d])=>M.createElement(h,d)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n},HN=vn("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),gf=vn("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),Ew=vn("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),WN=vn("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),qN=vn("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),Qp=vn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),GN=vn("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),j1=vn("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),KN=vn("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),QN=vn("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),YN=vn("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),JN=vn("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Yp=vn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),XN=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},B1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(n[h],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new eD;const p=s<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const I=c<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tD=function(t){const e=z1(t);return B1.encodeByteArray(e,!0)},Jc=function(t){return tD(t).replace(/\./g,"")},$1=function(t){try{return B1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rD=()=>nD().__FIREBASE_DEFAULTS__,iD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$1(t[1]);return e&&JSON.parse(e)},Mh=()=>{try{return XN()||rD()||iD()||sD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H1=t=>{var e,n;return(n=(e=Mh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},W1=t=>{const e=H1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},q1=()=>{var t;return(t=Mh())==null?void 0:t.config},G1=t=>{var e;return(e=Mh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function K1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Jc(JSON.stringify(n)),Jc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function lD(){var e;const t=(e=Mh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dD(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fD(){return!lD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Q1(){try{return typeof indexedDB=="object"}catch{return!1}}function Y1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function pD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mD,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function gD(t,e){return t.replace(yD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yD=/\{\$([^}]+)}/g;function _D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tw(s)&&Tw(o)){if(!Pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vD(t,e){const n=new wD(t,e);return n.subscribe.bind(n)}class wD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ED(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yf),i.error===void 0&&(i.error=yf),i.complete===void 0&&(i.complete=yf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ED(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yf(){}/**
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
 */function Cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jg(t){return(await fetch(t,{credentials:"include"})).ok}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kD(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ID(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ID(t){return t===Ji?void 0:t}function kD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const AD={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},xD=fe.INFO,CD={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},PD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zg{constructor(e){this.name=e,this._logLevel=xD,this._logHandler=PD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const RD=(t,e)=>e.some(n=>t instanceof n);let Iw,kw;function bD(){return Iw||(Iw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ND(){return kw||(kw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J1=new WeakMap,Jp=new WeakMap,X1=new WeakMap,_f=new WeakMap,Bg=new WeakMap;function DD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&J1.set(n,t)}).catch(()=>{}),Bg.set(e,t),e}function OD(t){if(Jp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jp.set(t,e)}let Xp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LD(t){Xp=t(Xp)}function VD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vf(this),e,...n);return X1.set(r,e.sort?e.sort():[e]),Cr(r)}:ND().includes(t)?function(...e){return t.apply(vf(this),e),Cr(J1.get(this))}:function(...e){return Cr(t.apply(vf(this),e))}}function MD(t){return typeof t=="function"?VD(t):(t instanceof IDBTransaction&&OD(t),RD(t,bD())?new Proxy(t,Xp):t)}function Cr(t){if(t instanceof IDBRequest)return DD(t);if(_f.has(t))return _f.get(t);const e=MD(t);return e!==t&&(_f.set(t,e),Bg.set(e,t)),e}const vf=t=>Bg.get(t);function Fh(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cr(o.result),l.oldVersion,l.newVersion,Cr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function wf(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Cr(n).then(()=>{})}const FD=["get","getKey","getAll","getAllKeys","count"],UD=["put","add","delete","clear"],Ef=new Map;function Sw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ef.get(e))return Ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=UD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ef.set(e,s),s}LD(t=>({...t,get:(e,n,r)=>Sw(e,n)||t.get(e,n,r),has:(e,n)=>!!Sw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zp="@firebase/app",Aw="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new zg("@firebase/app"),BD="@firebase/app-compat",$D="@firebase/analytics-compat",HD="@firebase/analytics",WD="@firebase/app-check-compat",qD="@firebase/app-check",GD="@firebase/auth",KD="@firebase/auth-compat",QD="@firebase/database",YD="@firebase/data-connect",JD="@firebase/database-compat",XD="@firebase/functions",ZD="@firebase/functions-compat",eO="@firebase/installations",tO="@firebase/installations-compat",nO="@firebase/messaging",rO="@firebase/messaging-compat",iO="@firebase/performance",sO="@firebase/performance-compat",oO="@firebase/remote-config",aO="@firebase/remote-config-compat",lO="@firebase/storage",uO="@firebase/storage-compat",cO="@firebase/firestore",hO="@firebase/ai",dO="@firebase/firestore-compat",fO="firebase",pO="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="[DEFAULT]",mO={[Zp]:"fire-core",[BD]:"fire-core-compat",[HD]:"fire-analytics",[$D]:"fire-analytics-compat",[qD]:"fire-app-check",[WD]:"fire-app-check-compat",[GD]:"fire-auth",[KD]:"fire-auth-compat",[QD]:"fire-rtdb",[YD]:"fire-data-connect",[JD]:"fire-rtdb-compat",[XD]:"fire-fn",[ZD]:"fire-fn-compat",[eO]:"fire-iid",[tO]:"fire-iid-compat",[nO]:"fire-fcm",[rO]:"fire-fcm-compat",[iO]:"fire-perf",[sO]:"fire-perf-compat",[oO]:"fire-rc",[aO]:"fire-rc-compat",[lO]:"fire-gcs",[uO]:"fire-gcs-compat",[cO]:"fire-fst",[dO]:"fire-fst-compat",[hO]:"fire-vertex","fire-js":"fire-js",[fO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Map,gO=new Map,tm=new Map;function xw(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(tm.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;tm.set(e,t);for(const n of Xc.values())xw(n,t);for(const n of gO.values())xw(n,t);return!0}function Ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function it(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new xs("app","Firebase",yO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=pO;function Z1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:em,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ii.create("bad-app-name",{appName:String(i)});if(n||(n=q1()),!n)throw Ii.create("no-options");const s=Xc.get(i);if(s){if(Pi(n,s.options)&&Pi(r,s.config))return s;throw Ii.create("duplicate-app",{appName:i})}const o=new SD(i);for(const l of tm.values())o.addComponent(l);const a=new _O(n,r,o);return Xc.set(i,a),a}function Uh(t=em){const e=Xc.get(t);if(!e&&t===em&&q1())return Z1();if(!e)throw Ii.create("no-app",{appName:t});return e}function tn(t,e,n){let r=mO[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(o.join(" "));return}Wn(new Dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const vO="firebase-heartbeat-database",wO=1,xl="firebase-heartbeat-store";let Tf=null;function ek(){return Tf||(Tf=Fh(vO,wO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ii.create("idb-open",{originalErrorMessage:t.message})})),Tf}async function EO(t){try{const n=(await ek()).transaction(xl),r=await n.objectStore(xl).get(tk(t));return await n.done,r}catch(e){if(e instanceof Gn)Lr.warn(e.message);else{const n=Ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(n.message)}}}async function Cw(t,e){try{const r=(await ek()).transaction(xl,"readwrite");await r.objectStore(xl).put(e,tk(t)),await r.done}catch(n){if(n instanceof Gn)Lr.warn(n.message);else{const r=Ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(r.message)}}}function tk(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TO=1024,IO=30;class kO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>IO){const o=xO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pw(),{heartbeatsToSend:r,unsentEntries:i}=SO(this._heartbeatsCache.heartbeats),s=Jc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Lr.warn(n),""}}}function Pw(){return new Date().toISOString().substring(0,10)}function SO(t,e=TO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q1()?Y1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rw(t){return Jc(JSON.stringify({version:2,heartbeats:t})).length}function xO(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(t){Wn(new Dn("platform-logger",e=>new jD(e),"PRIVATE")),Wn(new Dn("heartbeat",e=>new kO(e),"PRIVATE")),tn(Zp,Aw,t),tn(Zp,Aw,"esm2020"),tn("fire-js","")}CO("");function nk(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PO=nk,rk=new xs("auth","Firebase",nk());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new zg("@firebase/auth");function RO(t,...e){Zc.logLevel<=fe.WARN&&Zc.warn(`Auth (${Rs}): ${t}`,...e)}function uc(t,...e){Zc.logLevel<=fe.ERROR&&Zc.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw Hg(t,...e)}function nn(t,...e){return Hg(t,...e)}function $g(t,e,n){const r={...PO(),[e]:n};return new xs("auth","Firebase",r).create(e,{appName:t.name})}function zt(t){return $g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&On(t,"argument-error"),$g(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rk.create(t,...e)}function Q(t,e,...n){if(!t)throw Hg(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uc(e),new Error(e)}function Vr(t,e){t||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Wg(){return bw()==="http:"||bw()==="https:"}function bw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wg()||cD()||"connection"in navigator)?navigator.onLine:!0}function NO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vr(n>e,"Short delay should be less than long delay!"),this.isMobile=aD()||hD()}get(){return bO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){Vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LO=new Ql(3e4,6e4);function dt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ft(t,e,n,r,i={}){return sk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=jo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return uD()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(c.credentials="include"),ik.fetch()(await ok(t,t.config.apiHost,n,a),c)})}async function sk(t,e,n){t._canInitEmulator=!1;const r={...DO,...e};try{const i=new MO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Va(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $g(t,h,c);On(t,h)}}catch(i){if(i instanceof Gn)throw i;On(t,"network-request-failed",{message:String(i)})}}async function $r(t,e,n,r,i={}){const s=await ft(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ok(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?qg(t.config,i):`${t.config.apiScheme}://${i}`;return OO.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function VO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),LO.get())})}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){return t!==void 0&&t.getResponse!==void 0}function Dw(t){return t!==void 0&&t.enterprise!==void 0}class ak{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t){return(await ft(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function lk(t,e){return ft(t,"GET","/v2/recaptchaConfig",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UO(t,e){return ft(t,"POST","/v1/accounts:delete",e)}async function jO(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function eh(t,e){return ft(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zO(t,e=!1){const n=ae(t),r=await n.getIdToken(e),i=zh(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ya(If(i.auth_time)),issuedAtTime:Ya(If(i.iat)),expirationTime:Ya(If(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function If(t){return Number(t)*1e3}function zh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uc("JWT malformed, contained fewer than 3 sections"),null;try{const i=$1(n);return i?JSON.parse(i):(uc("Failed to decode base64 JWT payload"),null)}catch(i){return uc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ow(t){const e=zh(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&BO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await gs(t,eh(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?uk(i.providerUserInfo):[],o=WO(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new nm(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function HO(t){const e=ae(t);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uk(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qO(t,e){const n=await sk(t,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await ok(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(l.credentials="include"),ik.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GO(t,e){return ft(t,"POST","/v2/accounts:revokeToken",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ow(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Ow(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fo;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new $O(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zO(this,e)}reload(){return HO(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await gs(this,UO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:m,providerData:I,stsTokenManager:_}=n;Q(d&&_,e,"internal-error");const S=fo.fromJSON(this.name,_);Q(typeof d=="string",e,"internal-error"),Xr(r,e.name),Xr(i,e.name),Q(typeof p=="boolean",e,"internal-error"),Q(typeof m=="boolean",e,"internal-error"),Xr(s,e.name),Xr(o,e.name),Xr(a,e.name),Xr(l,e.name),Xr(c,e.name),Xr(h,e.name);const y=new jn({uid:d,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:S,createdAt:c,lastLoginAt:h});return I&&Array.isArray(I)&&(y.providerData=I.map(E=>({...E}))),l&&(y._redirectEventId=l),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new fo;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uk(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new fo;a.updateFromIdToken(r);const l=new jn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Map;function Ar(t){Vr(t instanceof Function,"Expected a class definition");let e=Lw.get(t);return e?(Vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ck.type="NONE";const Vw=ck;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t,e,n){return`firebase:${t}:${e}:${n}`}class po{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cc(this.userKey,i.apiKey,s),this.fullPersistenceKey=cc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await eh(this.auth,{idToken:e}).catch(()=>{});return n?jn._fromGetAccountInfoResponse(this.auth,n,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new po(Ar(Vw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ar(Vw);const o=cc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){let d;if(typeof h=="string"){const p=await eh(e,{idToken:h}).catch(()=>{});if(!p)break;d=await jn._fromGetAccountInfoResponse(e,p,h)}else d=jn._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new po(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new po(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gk(e))return"Blackberry";if(yk(e))return"Webos";if(dk(e))return"Safari";if((e.includes("chrome/")||fk(e))&&!e.includes("edge/"))return"Chrome";if(mk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hk(t=Ot()){return/firefox\//i.test(t)}function dk(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fk(t=Ot()){return/crios\//i.test(t)}function pk(t=Ot()){return/iemobile/i.test(t)}function mk(t=Ot()){return/android/i.test(t)}function gk(t=Ot()){return/blackberry/i.test(t)}function yk(t=Ot()){return/webos/i.test(t)}function Gg(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KO(t=Ot()){var e;return Gg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function QO(){return dD()&&document.documentMode===10}function _k(t=Ot()){return Gg(t)||mk(t)||yk(t)||gk(t)||/windows phone/i.test(t)||pk(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t,e=[]){let n;switch(t){case"Browser":n=Mw(Ot());break;case"Worker":n=`${Mw(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class YO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JO(t,e={}){return ft(t,"GET","/v2/passwordPolicy",dt(t,e))}/**
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
 */const XO=6;class ZO{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??XO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fw(this),this.idTokenSubscription=new Fw(this),this.beforeStateQueue=new YO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eh(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(it(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(zt(this));const n=e?ae(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JO(this),n=new ZO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(it(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&RO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _t(t){return ae(t)}class Fw{constructor(e){this.auth=e,this.observer=null,this.addObserver=vD(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t2(t){Yl=t}function Kg(t){return Yl.loadJS(t)}function n2(){return Yl.recaptchaV2Script}function r2(){return Yl.recaptchaEnterpriseScript}function i2(){return Yl.gapiScript}function wk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=500,o2=6e4,Uu=1e12;class a2{constructor(e){this.auth=e,this.counter=Uu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new c2(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Uu;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Uu;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Uu;return(r=this._widgets.get(n))==null||r.execute(),""}}class l2{constructor(){this.enterprise=new u2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class u2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class c2{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;Q(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=h2(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},o2)},s2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function h2(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const d2="recaptcha-enterprise",Ja="NO_RECAPTCHA";class Ek{constructor(e){this.type=d2,this.auth=_t(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ak(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Dw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ja)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new l2().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Dw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=r2();l.length!==0&&(l+=a),Kg(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ka(t,e,n,r=!1,i=!1){const s=new Ek(t);let o;if(i)o=Ja;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ki(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ka(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ka(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await ka(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const h=await ka(t,e,n,!1,!0);return r(t,h)}return Promise.reject(l)})}else{const a=await ka(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function f2(t){const e=_t(t),n=await lk(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new ak(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Ek(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t,e){const n=Ps(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pi(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function m2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g2(t,e,n){const r=_t(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Tk(e),{host:o,port:a}=y2(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Pi(c,r.config.emulator)&&Pi(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Cs(o)?jg(`${s}//${o}${l}`):i||_2()}function Tk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function y2(t){const e=Tk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Uw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Uw(o)}}}function Uw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e){return ft(t,"POST","/v1/accounts:resetPassword",dt(t,e))}async function w2(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function E2(t,e){return ft(t,"POST","/v1/accounts:signUp",e)}async function T2(t,e){return ft(t,"POST","/v1/accounts:update",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e){return $r(t,"POST","/v1/accounts:signInWithPassword",dt(t,e))}async function $h(t,e){return ft(t,"POST","/v1/accounts:sendOobCode",dt(t,e))}async function k2(t,e){return $h(t,e)}async function S2(t,e){return $h(t,e)}async function A2(t,e){return $h(t,e)}async function x2(t,e){return $h(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}async function P2(t,e){return $r(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Bh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Rl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Rl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ki(e,n,"signInWithPassword",I2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return C2(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ki(e,r,"signUpPassword",E2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return P2(e,{idToken:n,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e){return $r(t,"POST","/v1/accounts:signInWithIdp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="http://localhost";class Mr extends Bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mo(e,n)}buildRequest(){const e={requestUri:R2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(t,e){return ft(t,"POST","/v1/accounts:sendVerificationCode",dt(t,e))}async function b2(t,e){return $r(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e))}async function N2(t,e){const n=await $r(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e));if(n.temporaryProof)throw Va(t,"account-exists-with-different-credential",n);return n}const D2={USER_NOT_FOUND:"user-not-found"};async function O2(t,e){const n={...e,operation:"REAUTH"};return $r(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,n),D2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Bh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Xa({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Xa({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return b2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return N2(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return O2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Xa({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V2(t){const e=Oa(La(t)).link,n=e?Oa(La(e)).deep_link_id:null,r=Oa(La(t)).deep_link_id;return(r?Oa(La(r)).link:null)||r||n||e||t}class Hh{constructor(e){const n=Oa(La(e)),r=n.apiKey??null,i=n.oobCode??null,s=L2(n.mode??null);Q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=V2(e);try{return new Hh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return Rl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hh.parseLink(n);return Q(r,"argument-error"),Rl._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends zo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class hc extends Bo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return Q("providerId"in n&&"signInMethod"in n,"argument-error"),Mr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return Q(e.idToken||e.accessToken,"argument-error"),Mr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return hc.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return hc.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new hc(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Bo{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Bo{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Bo{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ai.credential(n,r)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(t,e){return $r(t,"POST","/v1/accounts:signUp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=zw(r);return new hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zw(r);return new hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c$(t){var i;if(it(t.app))return Promise.reject(zt(t));const e=_t(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new hr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Ik(e,{returnSecureToken:!0}),r=await hr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Gn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,th.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new th(e,n,r,i)}}function kk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?th._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h$(t,e){const n=ae(t);await Wh(!0,n,e);const{providerUserInfo:r}=await jO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Sk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ak(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",r)}async function Wh(t,e,n){await Pl(e);const r=Sk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";Q(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(t,e,n=!1){const{auth:r}=t;if(it(r.app))return Promise.reject(zt(r));const i="reauthenticate";try{const s=await gs(t,kk(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=zh(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e,n=!1){if(it(t.app))return Promise.reject(zt(t));const r="signIn",i=await kk(t,r,e),s=await hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qh(t,e){return xk(_t(t),e)}async function F2(t,e){const n=ae(t);return await Wh(!1,n,e.providerId),Ak(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,e){return $r(t,"POST","/v1/accounts:signInWithCustomToken",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d$(t,e){if(it(t.app))return Promise.reject(zt(t));const n=_t(t),r=await U2(n,{token:e,returnSecureToken:!0}),i=await hr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e,n){var r;Q(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),Q(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(t){const e=_t(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function f$(t,e,n){const r=_t(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Gh(r,i,n),await ki(r,i,"getOobCode",S2,"EMAIL_PASSWORD_PROVIDER")}async function p$(t,e,n){await v2(ae(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qg(t),r})}async function m$(t,e){await T2(ae(t),{oobCode:e})}async function j2(t,e,n){if(it(t.app))return Promise.reject(zt(t));const r=_t(t),o=await ki(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ik,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qg(t),l}),a=await hr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function z2(t,e,n){return it(t.app)?Promise.reject(zt(t)):qh(ae(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g$(t,e,n){const r=_t(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){Q(a.handleCodeInApp,r,"argument-error"),a&&Gh(r,o,a)}s(i,n),await ki(r,i,"getOobCode",A2,"EMAIL_PASSWORD_PROVIDER")}function y$(t,e){const n=Hh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function _$(t,e,n){if(it(t.app))return Promise.reject(zt(t));const r=ae(t),i=bs.credentialWithLink(e,n||Cl());return Q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),qh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){return ft(t,"POST","/v1/accounts:createAuthUri",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v$(t,e){const n=Wg()?Cl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await B2(ae(t),r);return i||[]}async function w$(t,e){const n=ae(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Gh(n.auth,i,e);const{email:s}=await k2(n.auth,i);s!==t.email&&await t.reload()}async function E$(t,e,n){const r=ae(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Gh(r.auth,s,n);const{email:o}=await x2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(t,e){return ft(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T$(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gs(r,$2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function I$(t,e){const n=ae(t);return it(n.auth.app)?Promise.reject(zt(n.auth)):Ck(n,e,null)}function k$(t,e){return Ck(ae(t),null,e)}async function Ck(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await gs(t,w2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=zh(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new go(r,a)}}if(!e)return null;switch(e){case"facebook.com":return new W2(r,n);case"github.com":return new q2(r,n);case"google.com":return new G2(r,n);case"twitter.com":return new K2(r,n,t.screenName||null);case"custom":case"anonymous":return new go(r,null);default:return new go(r,e,n)}}class go{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Pk extends go{constructor(e,n,r,i){super(e,n,r),this.username=i}}class W2 extends go{constructor(e,n){super(e,"facebook.com",n)}}class q2 extends Pk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class G2 extends go{constructor(e,n){super(e,"google.com",n)}}class K2 extends Pk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function S$(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:H2(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t,e){return ae(t).setPersistence(e)}function Y2(t,e,n,r){return ae(t).onIdTokenChanged(e,n,r)}function J2(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}function X2(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}function Z2(t){return ae(t).signOut()}function A$(t,e){return _t(t).revokeAccessToken(e)}async function x$(t){return ae(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:start",dt(t,e))}const nh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nh,"1"),this.storage.removeItem(nh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=1e3,tL=10;class bk extends Rk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_k(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bk.type="LOCAL";const Nk=bk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk extends Rk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dk.type="SESSION";const Ok=Dk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await nL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Qh("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function iL(t){nt().location.href=t}/**
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
 */function Yg(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function sL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function aL(){return Yg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="firebaseLocalStorageDb",lL=1,rh="firebaseLocalStorage",Vk="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yh(t,e){return t.transaction([rh],e?"readwrite":"readonly").objectStore(rh)}function uL(){const t=indexedDB.deleteDatabase(Lk);return new Jl(t).toPromise()}function rm(){const t=indexedDB.open(Lk,lL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rh,{keyPath:Vk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rh)?e(r):(r.close(),await uL(),e(await rm()))})})}async function $w(t,e,n){const r=Yh(t,!0).put({[Vk]:e,value:n});return new Jl(r).toPromise()}async function cL(t,e){const n=Yh(t,!1).get(e),r=await new Jl(n).toPromise();return r===void 0?null:r.value}function Hw(t,e){const n=Yh(t,!0).delete(e);return new Jl(n).toPromise()}const hL=800,dL=3;class Mk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kh._getInstance(aL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await sL(),!this.activeServiceWorker)return;this.sender=new rL(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rm();return await $w(e,nh,"1"),await Hw(e,nh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$w(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yh(i,!1).getAll();return new Jl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mk.type="LOCAL";const fL=Mk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:start",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=wk("rcb"),pL=new Ql(3e4,6e4);class mL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=nt().grecaptcha)!=null&&e.render)}load(e,n=""){return Q(gL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Nw(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((r,i)=>{const s=nt().setTimeout(()=>{i(nn(e,"network-request-failed"))},pL.get());nt()[kf]=()=>{nt().clearTimeout(s),delete nt()[kf];const a=nt().grecaptcha;if(!a||!Nw(a)){i(nn(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const d=l(c,h);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${n2()}?${jo({onload:kf,render:"explicit",hl:n})}`;Kg(o).catch(()=>{clearTimeout(s),i(nn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=nt().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class yL{async load(e){return new a2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="recaptcha",_L={theme:"light",type:"image"};class vL{constructor(e,n,r={..._L}){this.parameters=r,this.type=Za,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_t(e),this.isInvisible=this.parameters.size==="invisible",Q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;Q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new yL:new mL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){Q(!this.parameters.sitekey,this.auth,"argument-error"),Q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=nt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){Q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Q(Wg()&&!Yg(),this.auth,"internal-error"),await wL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await FO(this.auth);Q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function wL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Xa._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function EL(t,e,n){if(it(t.app))return Promise.reject(zt(t));const r=_t(t),i=await Uk(r,e,ae(n));return new Fk(i,s=>qh(r,s))}async function C$(t,e,n){const r=ae(t);await Wh(!1,r,"phone");const i=await Uk(r.auth,e,ae(n));return new Fk(i,s=>F2(r,s))}async function Uk(t,e,n){var r;if(!t._getRecaptchaConfig())try{await f2(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){Q(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ki(t,o,"mfaSmsEnrollment",async(h,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Ja){Q((n==null?void 0:n.type)===Za,h,"argument-error");const p=await Sf(h,d,n);return Bw(h,p)}return Bw(h,d)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneSessionInfo.sessionInfo}else{Q(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;Q(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ki(t,a,"mfaSmsSignIn",async(d,p)=>{if(p.phoneSignInInfo.captchaResponse===Ja){Q((n==null?void 0:n.type)===Za,d,"argument-error");const m=await Sf(d,p,n);return Ww(d,m)}return Ww(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ki(t,s,"sendVerificationCode",async(c,h)=>{if(h.captchaResponse===Ja){Q((n==null?void 0:n.type)===Za,c,"argument-error");const d=await Sf(c,h,n);return jw(c,d)}return jw(c,h)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function Sf(t,e,n){Q(n.type===Za,t,"argument-error");const r=await n.verify();Q(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Xl(t,e){return e?Ar(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TL(t){return xk(t.auth,new Jg(t),t.bypassAuthState)}function IL(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),M2(n,new Jg(t),t.bypassAuthState)}async function kL(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Ak(n,new Jg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TL;case"linkViaPopup":case"linkViaRedirect":return kL;case"reauthViaPopup":case"reauthViaRedirect":return IL;default:On(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL=new Ql(2e3,1e4);async function qw(t,e,n){if(it(t.app))return Promise.reject(nn(t,"operation-not-supported-in-this-environment"));const r=_t(t);jh(t,e,zo);const i=Xl(r,n);return new di(r,"signInViaPopup",e,i).executeNotNull()}async function P$(t,e,n){const r=ae(t);jh(r.auth,e,zo);const i=Xl(r.auth,n);return new di(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class di extends jk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SL.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL="pendingRedirect",dc=new Map;class xL extends jk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dc.get(this.auth._key());if(!e){try{const r=await CL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dc.set(this.auth._key(),e)}return this.bypassAuthState||dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CL(t,e){const n=$k(e),r=Bk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function zk(t,e){return Bk(t)._set($k(e),"true")}function PL(t,e){dc.set(t._key(),e)}function Bk(t){return Ar(t._redirectPersistence)}function $k(t){return cc(AL,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t,e,n){return bL(t,e,n)}async function bL(t,e,n){if(it(t.app))return Promise.reject(zt(t));const r=_t(t);jh(t,e,zo),await r._initializationPromise;const i=Xl(r,n);return await zk(i,r),i._openRedirect(r,e,"signInViaRedirect")}function R$(t,e,n){return NL(t,e,n)}async function NL(t,e,n){const r=ae(t);jh(r.auth,e,zo),await r.auth._initializationPromise;const i=Xl(r.auth,n);await Wh(!1,r,e.providerId),await zk(i,r.auth);const s=await OL(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function DL(t,e){return await _t(t)._initializationPromise,Hk(t,e,!1)}async function Hk(t,e,n=!1){if(it(t.app))return Promise.reject(zt(t));const r=_t(t),i=Xl(r,e),o=await new xL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function OL(t){const e=Qh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=10*60*1e3;class VL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ML(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wk(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gw(e))}saveEventToCache(e){this.cachedEventUids.add(Gw(e)),this.lastProcessedEventTime=Date.now()}}function Gw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ML(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FL(t,e={}){return ft(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jL=/^https?/;async function zL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FL(t);for(const n of e)try{if(BL(n))return}catch{}On(t,"unauthorized-domain")}function BL(t){const e=Cl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jL.test(n))return!1;if(UL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $L=new Ql(3e4,6e4);function Kw(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HL(t){return new Promise((e,n)=>{var i,s,o;function r(){Kw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kw(),n(nn(t,"network-request-failed"))},timeout:$L.get()})}if((s=(i=nt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=nt().gapi)!=null&&o.load)r();else{const a=wk("iframefcb");return nt()[a]=()=>{gapi.load?r():n(nn(t,"network-request-failed"))},Kg(`${i2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fc=null,e})}let fc=null;function WL(t){return fc=fc||HL(t),fc}/**
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
 */const qL=new Ql(5e3,15e3),GL="__/auth/iframe",KL="emulator/auth/iframe",QL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JL(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qg(e,KL):`https://${t.config.authDomain}/${GL}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=YL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jo(r).slice(1)}`}async function XL(t){const e=await WL(t),n=nt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:JL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=nt().setTimeout(()=>{s(o)},qL.get());function l(){nt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const ZL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eV=500,tV=600,nV="_blank",rV="http://localhost";class Qw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iV(t,e,n,r=eV,i=tV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...ZL,width:r.toString(),height:i.toString(),top:s,left:o},c=Ot().toLowerCase();n&&(a=fk(c)?nV:n),hk(c)&&(e=e||rV,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(KO(c)&&a!=="_self")return sV(e||"",a),new Qw(null);const d=window.open(e||"",a,h);Q(d,t,"popup-blocked");try{d.focus()}catch{}return new Qw(d)}function sV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oV="__/auth/handler",aV="emulator/auth/handler",lV=encodeURIComponent("fac");async function Yw(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof zo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_D(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof Bo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${lV}=${encodeURIComponent(l)}`:"";return`${uV(t)}?${jo(a).slice(1)}${c}`}function uV({config:t}){return t.emulator?qg(t,aV):`https://${t.authDomain}/${oV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="webStorageSupport";class cV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ok,this._completeRedirectFn=Hk,this._overrideRedirectResult=PL}async _openPopup(e,n,r,i){var o;Vr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Yw(e,n,r,Cl(),i);return iV(e,s,Qh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yw(e,n,r,Cl(),i);return iL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XL(e),r=new VL(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Af,{type:Af},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Af];s!==void 0&&n(!!s),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _k()||dk()||Gg()}}const hV=cV;var Jw="@firebase/auth",Xw="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pV(t){Wn(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vk(t)},c=new e2(r,i,s,l);return m2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new Dn("auth-internal",e=>{const n=_t(e.getProvider("auth").getImmediate());return(r=>new dV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Jw,Xw,fV(t)),tn(Jw,Xw,"esm2020")}/**
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
 */const mV=5*60,gV=G1("authIdTokenMaxAge")||mV;let Zw=null;const yV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gV)return;const i=n==null?void 0:n.token;Zw!==i&&(Zw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _V(t=Uh()){const e=Ps(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p2(t,{popupRedirectResolver:hV,persistence:[fL,Nk,Ok]}),r=G1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yV(s.toString());J2(n,o,()=>o(n.currentUser)),Y2(n,a=>o(a))}}const i=H1("auth");return i&&g2(n,`http://${i}`),n}function vV(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}t2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pV("Browser");var wV="firebase",EV="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(wV,EV,"app");var e0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,qk;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,v){function A(){}A.prototype=v.prototype,x.F=v.prototype,x.prototype=new A,x.prototype.constructor=x,x.D=function(P,C,b){for(var k=Array(arguments.length-2),q=2;q<arguments.length;q++)k[q-2]=arguments[q];return v.prototype[C].apply(P,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,v,A){A||(A=0);const P=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)P[C]=v.charCodeAt(A++)|v.charCodeAt(A++)<<8|v.charCodeAt(A++)<<16|v.charCodeAt(A++)<<24;else for(C=0;C<16;++C)P[C]=v[A++]|v[A++]<<8|v[A++]<<16|v[A++]<<24;v=x.g[0],A=x.g[1],C=x.g[2];let b=x.g[3],k;k=v+(b^A&(C^b))+P[0]+3614090360&4294967295,v=A+(k<<7&4294967295|k>>>25),k=b+(C^v&(A^C))+P[1]+3905402710&4294967295,b=v+(k<<12&4294967295|k>>>20),k=C+(A^b&(v^A))+P[2]+606105819&4294967295,C=b+(k<<17&4294967295|k>>>15),k=A+(v^C&(b^v))+P[3]+3250441966&4294967295,A=C+(k<<22&4294967295|k>>>10),k=v+(b^A&(C^b))+P[4]+4118548399&4294967295,v=A+(k<<7&4294967295|k>>>25),k=b+(C^v&(A^C))+P[5]+1200080426&4294967295,b=v+(k<<12&4294967295|k>>>20),k=C+(A^b&(v^A))+P[6]+2821735955&4294967295,C=b+(k<<17&4294967295|k>>>15),k=A+(v^C&(b^v))+P[7]+4249261313&4294967295,A=C+(k<<22&4294967295|k>>>10),k=v+(b^A&(C^b))+P[8]+1770035416&4294967295,v=A+(k<<7&4294967295|k>>>25),k=b+(C^v&(A^C))+P[9]+2336552879&4294967295,b=v+(k<<12&4294967295|k>>>20),k=C+(A^b&(v^A))+P[10]+4294925233&4294967295,C=b+(k<<17&4294967295|k>>>15),k=A+(v^C&(b^v))+P[11]+2304563134&4294967295,A=C+(k<<22&4294967295|k>>>10),k=v+(b^A&(C^b))+P[12]+1804603682&4294967295,v=A+(k<<7&4294967295|k>>>25),k=b+(C^v&(A^C))+P[13]+4254626195&4294967295,b=v+(k<<12&4294967295|k>>>20),k=C+(A^b&(v^A))+P[14]+2792965006&4294967295,C=b+(k<<17&4294967295|k>>>15),k=A+(v^C&(b^v))+P[15]+1236535329&4294967295,A=C+(k<<22&4294967295|k>>>10),k=v+(C^b&(A^C))+P[1]+4129170786&4294967295,v=A+(k<<5&4294967295|k>>>27),k=b+(A^C&(v^A))+P[6]+3225465664&4294967295,b=v+(k<<9&4294967295|k>>>23),k=C+(v^A&(b^v))+P[11]+643717713&4294967295,C=b+(k<<14&4294967295|k>>>18),k=A+(b^v&(C^b))+P[0]+3921069994&4294967295,A=C+(k<<20&4294967295|k>>>12),k=v+(C^b&(A^C))+P[5]+3593408605&4294967295,v=A+(k<<5&4294967295|k>>>27),k=b+(A^C&(v^A))+P[10]+38016083&4294967295,b=v+(k<<9&4294967295|k>>>23),k=C+(v^A&(b^v))+P[15]+3634488961&4294967295,C=b+(k<<14&4294967295|k>>>18),k=A+(b^v&(C^b))+P[4]+3889429448&4294967295,A=C+(k<<20&4294967295|k>>>12),k=v+(C^b&(A^C))+P[9]+568446438&4294967295,v=A+(k<<5&4294967295|k>>>27),k=b+(A^C&(v^A))+P[14]+3275163606&4294967295,b=v+(k<<9&4294967295|k>>>23),k=C+(v^A&(b^v))+P[3]+4107603335&4294967295,C=b+(k<<14&4294967295|k>>>18),k=A+(b^v&(C^b))+P[8]+1163531501&4294967295,A=C+(k<<20&4294967295|k>>>12),k=v+(C^b&(A^C))+P[13]+2850285829&4294967295,v=A+(k<<5&4294967295|k>>>27),k=b+(A^C&(v^A))+P[2]+4243563512&4294967295,b=v+(k<<9&4294967295|k>>>23),k=C+(v^A&(b^v))+P[7]+1735328473&4294967295,C=b+(k<<14&4294967295|k>>>18),k=A+(b^v&(C^b))+P[12]+2368359562&4294967295,A=C+(k<<20&4294967295|k>>>12),k=v+(A^C^b)+P[5]+4294588738&4294967295,v=A+(k<<4&4294967295|k>>>28),k=b+(v^A^C)+P[8]+2272392833&4294967295,b=v+(k<<11&4294967295|k>>>21),k=C+(b^v^A)+P[11]+1839030562&4294967295,C=b+(k<<16&4294967295|k>>>16),k=A+(C^b^v)+P[14]+4259657740&4294967295,A=C+(k<<23&4294967295|k>>>9),k=v+(A^C^b)+P[1]+2763975236&4294967295,v=A+(k<<4&4294967295|k>>>28),k=b+(v^A^C)+P[4]+1272893353&4294967295,b=v+(k<<11&4294967295|k>>>21),k=C+(b^v^A)+P[7]+4139469664&4294967295,C=b+(k<<16&4294967295|k>>>16),k=A+(C^b^v)+P[10]+3200236656&4294967295,A=C+(k<<23&4294967295|k>>>9),k=v+(A^C^b)+P[13]+681279174&4294967295,v=A+(k<<4&4294967295|k>>>28),k=b+(v^A^C)+P[0]+3936430074&4294967295,b=v+(k<<11&4294967295|k>>>21),k=C+(b^v^A)+P[3]+3572445317&4294967295,C=b+(k<<16&4294967295|k>>>16),k=A+(C^b^v)+P[6]+76029189&4294967295,A=C+(k<<23&4294967295|k>>>9),k=v+(A^C^b)+P[9]+3654602809&4294967295,v=A+(k<<4&4294967295|k>>>28),k=b+(v^A^C)+P[12]+3873151461&4294967295,b=v+(k<<11&4294967295|k>>>21),k=C+(b^v^A)+P[15]+530742520&4294967295,C=b+(k<<16&4294967295|k>>>16),k=A+(C^b^v)+P[2]+3299628645&4294967295,A=C+(k<<23&4294967295|k>>>9),k=v+(C^(A|~b))+P[0]+4096336452&4294967295,v=A+(k<<6&4294967295|k>>>26),k=b+(A^(v|~C))+P[7]+1126891415&4294967295,b=v+(k<<10&4294967295|k>>>22),k=C+(v^(b|~A))+P[14]+2878612391&4294967295,C=b+(k<<15&4294967295|k>>>17),k=A+(b^(C|~v))+P[5]+4237533241&4294967295,A=C+(k<<21&4294967295|k>>>11),k=v+(C^(A|~b))+P[12]+1700485571&4294967295,v=A+(k<<6&4294967295|k>>>26),k=b+(A^(v|~C))+P[3]+2399980690&4294967295,b=v+(k<<10&4294967295|k>>>22),k=C+(v^(b|~A))+P[10]+4293915773&4294967295,C=b+(k<<15&4294967295|k>>>17),k=A+(b^(C|~v))+P[1]+2240044497&4294967295,A=C+(k<<21&4294967295|k>>>11),k=v+(C^(A|~b))+P[8]+1873313359&4294967295,v=A+(k<<6&4294967295|k>>>26),k=b+(A^(v|~C))+P[15]+4264355552&4294967295,b=v+(k<<10&4294967295|k>>>22),k=C+(v^(b|~A))+P[6]+2734768916&4294967295,C=b+(k<<15&4294967295|k>>>17),k=A+(b^(C|~v))+P[13]+1309151649&4294967295,A=C+(k<<21&4294967295|k>>>11),k=v+(C^(A|~b))+P[4]+4149444226&4294967295,v=A+(k<<6&4294967295|k>>>26),k=b+(A^(v|~C))+P[11]+3174756917&4294967295,b=v+(k<<10&4294967295|k>>>22),k=C+(v^(b|~A))+P[2]+718787259&4294967295,C=b+(k<<15&4294967295|k>>>17),k=A+(b^(C|~v))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+v&4294967295,x.g[1]=x.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+C&4294967295,x.g[3]=x.g[3]+b&4294967295}r.prototype.v=function(x,v){v===void 0&&(v=x.length);const A=v-this.blockSize,P=this.C;let C=this.h,b=0;for(;b<v;){if(C==0)for(;b<=A;)i(this,x,b),b+=this.blockSize;if(typeof x=="string"){for(;b<v;)if(P[C++]=x.charCodeAt(b++),C==this.blockSize){i(this,P),C=0;break}}else for(;b<v;)if(P[C++]=x[b++],C==this.blockSize){i(this,P),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var v=1;v<x.length-8;++v)x[v]=0;v=this.o*8;for(var A=x.length-8;A<x.length;++A)x[A]=v&255,v/=256;for(this.v(x),x=Array(16),v=0,A=0;A<4;++A)for(let P=0;P<32;P+=8)x[v++]=this.g[A]>>>P&255;return x};function s(x,v){var A=a;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=v(x)}function o(x,v){this.h=v;const A=[];let P=!0;for(let C=x.length-1;C>=0;C--){const b=x[C]|0;P&&b==v||(A[C]=b,P=!1)}this.g=A}var a={};function l(x){return-128<=x&&x<128?s(x,function(v){return new o([v|0],v<0?-1:0)}):new o([x|0],x<0?-1:0)}function c(x){if(isNaN(x)||!isFinite(x))return d;if(x<0)return S(c(-x));const v=[];let A=1;for(let P=0;x>=A;P++)v[P]=x/A|0,A*=4294967296;return new o(v,0)}function h(x,v){if(x.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x.charAt(0)=="-")return S(h(x.substring(1),v));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=c(Math.pow(v,8));let P=d;for(let b=0;b<x.length;b+=8){var C=Math.min(8,x.length-b);const k=parseInt(x.substring(b,b+C),v);C<8?(C=c(Math.pow(v,C)),P=P.j(C).add(c(k))):(P=P.j(A),P=P.add(c(k)))}return P}var d=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(_(this))return-S(this).m();let x=0,v=1;for(let A=0;A<this.g.length;A++){const P=this.i(A);x+=(P>=0?P:4294967296+P)*v,v*=4294967296}return x},t.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(I(this))return"0";if(_(this))return"-"+S(this).toString(x);const v=c(Math.pow(x,6));var A=this;let P="";for(;;){const C=L(A,v).g;A=y(A,C.j(v));let b=((A.g.length>0?A.g[0]:A.h)>>>0).toString(x);if(A=C,I(A))return b+P;for(;b.length<6;)b="0"+b;P=b+P}},t.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function I(x){if(x.h!=0)return!1;for(let v=0;v<x.g.length;v++)if(x.g[v]!=0)return!1;return!0}function _(x){return x.h==-1}t.l=function(x){return x=y(this,x),_(x)?-1:I(x)?0:1};function S(x){const v=x.g.length,A=[];for(let P=0;P<v;P++)A[P]=~x.g[P];return new o(A,~x.h).add(p)}t.abs=function(){return _(this)?S(this):this},t.add=function(x){const v=Math.max(this.g.length,x.g.length),A=[];let P=0;for(let C=0;C<=v;C++){let b=P+(this.i(C)&65535)+(x.i(C)&65535),k=(b>>>16)+(this.i(C)>>>16)+(x.i(C)>>>16);P=k>>>16,b&=65535,k&=65535,A[C]=k<<16|b}return new o(A,A[A.length-1]&-2147483648?-1:0)};function y(x,v){return x.add(S(v))}t.j=function(x){if(I(this)||I(x))return d;if(_(this))return _(x)?S(this).j(S(x)):S(S(this).j(x));if(_(x))return S(this.j(S(x)));if(this.l(m)<0&&x.l(m)<0)return c(this.m()*x.m());const v=this.g.length+x.g.length,A=[];for(var P=0;P<2*v;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(let C=0;C<x.g.length;C++){const b=this.i(P)>>>16,k=this.i(P)&65535,q=x.i(C)>>>16,J=x.i(C)&65535;A[2*P+2*C]+=k*J,E(A,2*P+2*C),A[2*P+2*C+1]+=b*J,E(A,2*P+2*C+1),A[2*P+2*C+1]+=k*q,E(A,2*P+2*C+1),A[2*P+2*C+2]+=b*q,E(A,2*P+2*C+2)}for(x=0;x<v;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=v;x<2*v;x++)A[x]=0;return new o(A,0)};function E(x,v){for(;(x[v]&65535)!=x[v];)x[v+1]+=x[v]>>>16,x[v]&=65535,v++}function T(x,v){this.g=x,this.h=v}function L(x,v){if(I(v))throw Error("division by zero");if(I(x))return new T(d,d);if(_(x))return v=L(S(x),v),new T(S(v.g),S(v.h));if(_(v))return v=L(x,S(v)),new T(S(v.g),v.h);if(x.g.length>30){if(_(x)||_(v))throw Error("slowDivide_ only works with positive integers.");for(var A=p,P=v;P.l(x)<=0;)A=U(A),P=U(P);var C=O(A,1),b=O(P,1);for(P=O(P,2),A=O(A,2);!I(P);){var k=b.add(P);k.l(x)<=0&&(C=C.add(A),b=k),P=O(P,1),A=O(A,1)}return v=y(x,C.j(v)),new T(C,v)}for(C=d;x.l(v)>=0;){for(A=Math.max(1,Math.floor(x.m()/v.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),b=c(A),k=b.j(v);_(k)||k.l(x)>0;)A-=P,b=c(A),k=b.j(v);I(b)&&(b=p),C=C.add(b),x=y(x,k)}return new T(C,x)}t.B=function(x){return L(this,x).h},t.and=function(x){const v=Math.max(this.g.length,x.g.length),A=[];for(let P=0;P<v;P++)A[P]=this.i(P)&x.i(P);return new o(A,this.h&x.h)},t.or=function(x){const v=Math.max(this.g.length,x.g.length),A=[];for(let P=0;P<v;P++)A[P]=this.i(P)|x.i(P);return new o(A,this.h|x.h)},t.xor=function(x){const v=Math.max(this.g.length,x.g.length),A=[];for(let P=0;P<v;P++)A[P]=this.i(P)^x.i(P);return new o(A,this.h^x.h)};function U(x){const v=x.g.length+1,A=[];for(let P=0;P<v;P++)A[P]=x.i(P)<<1|x.i(P-1)>>>31;return new o(A,x.h)}function O(x,v){const A=v>>5;v%=32;const P=x.g.length-A,C=[];for(let b=0;b<P;b++)C[b]=v>0?x.i(b+A)>>>v|x.i(b+A+1)<<32-v:x.i(b+A);return new o(C,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qk=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Si=o}).apply(typeof e0<"u"?e0:typeof self<"u"?self:typeof window<"u"?window:{});var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gk,Ma,Kk,pc,im,Qk,Yk,Jk;(function(){var t,e=Object.defineProperty;function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ju=="object"&&ju];for(var f=0;f<u.length;++f){var g=u[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var g=r;u=u.split(".");for(var w=0;w<u.length-1;w++){var V=u[w];if(!(V in g))break e;g=g[V]}u=u[u.length-1],w=g[u],f=f(w),f!=w&&f!=null&&e(g,u,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(u){return u||function(f){var g=[],w;for(w in f)Object.prototype.hasOwnProperty.call(f,w)&&g.push([w,f[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function l(u,f,g){return u.call.apply(u.bind,arguments)}function c(u,f,g){return c=l,c.apply(null,arguments)}function h(u,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function d(u,f){function g(){}g.prototype=f.prototype,u.Z=f.prototype,u.prototype=new g,u.prototype.constructor=u,u.Ob=function(w,V,F){for(var K=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)K[ce-2]=arguments[ce];return f.prototype[V].apply(w,K)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function m(u){const f=u.length;if(f>0){const g=Array(f);for(let w=0;w<f;w++)g[w]=u[w];return g}return[]}function I(u,f){for(let w=1;w<arguments.length;w++){const V=arguments[w];var g=typeof V;if(g=g!="object"?g:V?Array.isArray(V)?"array":g:"null",g=="array"||g=="object"&&typeof V.length=="number"){g=u.length||0;const F=V.length||0;u.length=g+F;for(let K=0;K<F;K++)u[g+K]=V[K]}else u.push(V)}}class _{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(u){o.setTimeout(()=>{throw u},0)}function y(){var u=x;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class E{constructor(){this.h=this.g=null}add(f,g){const w=T.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var T=new _(()=>new L,u=>u.reset());class L{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let U,O=!1,x=new E,v=()=>{const u=Promise.resolve(void 0);U=()=>{u.then(A)}};function A(){for(var u;u=y();){try{u.h.call(u.g)}catch(g){S(g)}var f=T;f.j(u),f.h<100&&(f.h++,u.next=f.g,f.g=u)}O=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return u}();function k(u){return/^[\s\xa0]*$/.test(u)}function q(u,f){C.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,f)}d(q,C),q.prototype.init=function(u,f){const g=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget,f||(g=="mouseover"?f=u.fromElement:g=="mouseout"&&(f=u.toElement)),this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var J="closure_listenable_"+(Math.random()*1e6|0),ve=0;function ke(u,f,g,w,V){this.listener=u,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=V,this.key=++ve,this.da=this.fa=!1}function W(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ee(u,f,g){for(const w in u)f.call(g,u[w],w,u)}function R(u,f){for(const g in u)f.call(void 0,u[g],g,u)}function ue(u){const f={};for(const g in u)f[g]=u[g];return f}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,f){let g,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(g in w)u[g]=w[g];for(let F=0;F<ge.length;F++)g=ge[F],Object.prototype.hasOwnProperty.call(w,g)&&(u[g]=w[g])}}function we(u){this.src=u,this.g={},this.h=0}we.prototype.add=function(u,f,g,w,V){const F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);const K=Se(u,f,w,V);return K>-1?(f=u[K],g||(f.fa=!1)):(f=new ke(f,this.src,F,!!w,V),f.fa=g,u.push(f)),f};function Vt(u,f){const g=f.type;if(g in u.g){var w=u.g[g],V=Array.prototype.indexOf.call(w,f,void 0),F;(F=V>=0)&&Array.prototype.splice.call(w,V,1),F&&(W(f),u.g[g].length==0&&(delete u.g[g],u.h--))}}function Se(u,f,g,w){for(let V=0;V<u.length;++V){const F=u[V];if(!F.da&&F.listener==f&&F.capture==!!g&&F.ha==w)return V}return-1}var Wt="closure_lm_"+(Math.random()*1e6|0),wn={};function mr(u,f,g,w,V){if(w&&w.once)return ou(u,f,g,w,V);if(Array.isArray(f)){for(let F=0;F<f.length;F++)mr(u,f[F],g,w,V);return null}return g=Ms(g),u&&u[J]?u.J(f,g,a(w)?!!w.capture:!!w,V):gr(u,f,g,!1,w,V)}function gr(u,f,g,w,V,F){if(!f)throw Error("Invalid event type");const K=a(V)?!!V.capture:!!V;let ce=Vs(u);if(ce||(u[Wt]=ce=new we(u)),g=ce.add(f,g,w,K,F),g.proxy)return g;if(w=Ls(),g.proxy=w,w.src=u,w.listener=g,u.addEventListener)b||(V=K),V===void 0&&(V=!1),u.addEventListener(f.toString(),w,V);else if(u.attachEvent)u.attachEvent(ea(f.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ls(){function u(g){return f.call(u.src,u.listener,g)}const f=lu;return u}function ou(u,f,g,w,V){if(Array.isArray(f)){for(let F=0;F<f.length;F++)ou(u,f[F],g,w,V);return null}return g=Ms(g),u&&u[J]?u.K(f,g,a(w)?!!w.capture:!!w,V):gr(u,f,g,!0,w,V)}function au(u,f,g,w,V){if(Array.isArray(f))for(var F=0;F<f.length;F++)au(u,f[F],g,w,V);else w=a(w)?!!w.capture:!!w,g=Ms(g),u&&u[J]?(u=u.i,F=String(f).toString(),F in u.g&&(f=u.g[F],g=Se(f,g,w,V),g>-1&&(W(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete u.g[F],u.h--)))):u&&(u=Vs(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Se(f,g,w,V)),(g=u>-1?f[u]:null)&&Zo(g))}function Zo(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[J])Vt(f.i,u);else{var g=u.type,w=u.proxy;f.removeEventListener?f.removeEventListener(g,w,u.capture):f.detachEvent?f.detachEvent(ea(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=Vs(f))?(Vt(g,u),g.h==0&&(g.src=null,f[Wt]=null)):W(u)}}}function ea(u){return u in wn?wn[u]:wn[u]="on"+u}function lu(u,f){if(u.da)u=!0;else{f=new q(f,this);const g=u.listener,w=u.ha||u.src;u.fa&&Zo(u),u=g.call(w,f)}return u}function Vs(u){return u=u[Wt],u instanceof we?u:null}var ta="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ms(u){return typeof u=="function"?u:(u[ta]||(u[ta]=function(f){return u.handleEvent(f)}),u[ta])}function at(){P.call(this),this.i=new we(this),this.M=this,this.G=null}d(at,P),at.prototype[J]=!0,at.prototype.removeEventListener=function(u,f,g,w){au(this,u,f,g,w)};function vt(u,f){var g,w=u.G;if(w)for(g=[];w;w=w.G)g.push(w);if(u=u.M,w=f.type||f,typeof f=="string")f=new C(f,u);else if(f instanceof C)f.target=f.target||u;else{var V=f;f=new C(w,u),D(f,V)}V=!0;let F,K;if(g)for(K=g.length-1;K>=0;K--)F=f.g=g[K],V=Fs(F,w,!0,f)&&V;if(F=f.g=u,V=Fs(F,w,!0,f)&&V,V=Fs(F,w,!1,f)&&V,g)for(K=0;K<g.length;K++)F=f.g=g[K],V=Fs(F,w,!1,f)&&V}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var u=this.i;for(const f in u.g){const g=u.g[f];for(let w=0;w<g.length;w++)W(g[w]);delete u.g[f],u.h--}}this.G=null},at.prototype.J=function(u,f,g,w){return this.i.add(String(u),f,!1,g,w)},at.prototype.K=function(u,f,g,w){return this.i.add(String(u),f,!0,g,w)};function Fs(u,f,g,w){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();let V=!0;for(let F=0;F<f.length;++F){const K=f[F];if(K&&!K.da&&K.capture==g){const ce=K.listener,lt=K.ha||K.src;K.fa&&Vt(u.i,K),V=ce.call(lt,w)!==!1&&V}}return V&&!w.defaultPrevented}function Sd(u,f){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=c(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(u,f||0)}function uu(u){u.g=Sd(()=>{u.g=null,u.i&&(u.i=!1,uu(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Ad extends P{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:uu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function j(u){P.call(this),this.h=u,this.g={}}d(j,P);var G=[];function ie(u){ee(u.g,function(f,g){this.g.hasOwnProperty(g)&&Zo(f)},u),u.g={}}j.prototype.N=function(){j.Z.N.call(this),ie(this)},j.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var he=o.JSON.stringify,Ae=o.JSON.parse,an=class{stringify(u){return o.JSON.stringify(u,void 0)}parse(u){return o.JSON.parse(u,void 0)}};function Kn(){}function En(){}var Ln={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yr(){C.call(this,"d")}d(yr,C);function wt(){C.call(this,"c")}d(wt,C);var qt={},Tn=null;function cu(){return Tn=Tn||new at}qt.Ia="serverreachability";function d_(u){C.call(this,qt.Ia,u)}d(d_,C);function na(u){const f=cu();vt(f,new d_(f))}qt.STAT_EVENT="statevent";function f_(u,f){C.call(this,qt.STAT_EVENT,u),this.stat=f}d(f_,C);function Mt(u){const f=cu();vt(f,new f_(f,u))}qt.Ja="timingevent";function p_(u,f){C.call(this,qt.Ja,u),this.size=f}d(p_,C);function ra(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){u()},f)}function ia(){this.g=!0}ia.prototype.ua=function(){this.g=!1};function Zx(u,f,g,w,V,F){u.info(function(){if(u.g)if(F){var K="",ce=F.split("&");for(let Re=0;Re<ce.length;Re++){var lt=ce[Re].split("=");if(lt.length>1){const pt=lt[0];lt=lt[1];const Yn=pt.split("_");K=Yn.length>=2&&Yn[1]=="type"?K+(pt+"="+lt+"&"):K+(pt+"=redacted&")}}}else K=null;else K=F;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+f+`
`+g+`
`+K})}function eC(u,f,g,w,V,F,K){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+f+`
`+g+`
`+F+" "+K})}function Us(u,f,g,w){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+nC(u,g)+(w?" "+w:"")})}function tC(u,f){u.info(function(){return"TIMEOUT: "+f})}ia.prototype.info=function(){};function nC(u,f){if(!u.g)return f;if(!f)return null;try{const F=JSON.parse(f);if(F){for(u=0;u<F.length;u++)if(Array.isArray(F[u])){var g=F[u];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var V=w[0];if(V!="noop"&&V!="stop"&&V!="close")for(let K=1;K<w.length;K++)w[K]=""}}}}return he(F)}catch{return f}}var hu={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},m_={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},g_;function xd(){}d(xd,Kn),xd.prototype.g=function(){return new XMLHttpRequest},g_=new xd;function sa(u){return encodeURIComponent(String(u))}function rC(u){var f=1;u=u.split(":");const g=[];for(;f>0&&u.length;)g.push(u.shift()),f--;return u.length&&g.push(u.join(":")),g}function Wr(u,f,g,w){this.j=u,this.i=f,this.l=g,this.S=w||1,this.V=new j(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new y_}function y_(){this.i=null,this.g="",this.h=!1}var __={},Cd={};function Pd(u,f,g){u.M=1,u.A=fu(Qn(f)),u.u=g,u.R=!0,v_(u,null)}function v_(u,f){u.F=Date.now(),du(u),u.B=Qn(u.A);var g=u.B,w=u.S;Array.isArray(w)||(w=[String(w)]),N_(g.i,"t",w),u.C=0,g=u.j.L,u.h=new y_,u.g=Y_(u.j,g?f:null,!u.u),u.P>0&&(u.O=new Ad(c(u.Y,u,u.g),u.P)),f=u.V,g=u.g,w=u.ba;var V="readystatechange";Array.isArray(V)||(V&&(G[0]=V.toString()),V=G);for(let F=0;F<V.length;F++){const K=mr(g,V[F],w||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=u.J?ue(u.J):{},u.u?(u.v||(u.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,f)):(u.v="GET",u.g.ea(u.B,u.v,null,f)),na(),Zx(u.i,u.v,u.B,u.l,u.S,u.u)}Wr.prototype.ba=function(u){u=u.target;const f=this.O;f&&Kr(u)==3?f.j():this.Y(u)},Wr.prototype.Y=function(u){try{if(u==this.g)e:{const ce=Kr(this.g),lt=this.g.ya(),Re=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||U_(this.g)))){this.K||ce!=4||lt==7||(lt==8||Re<=0?na(3):na(2)),Rd(this);var f=this.g.ca();this.X=f;var g=iC(this);if(this.o=f==200,eC(this.i,this.v,this.B,this.l,this.S,ce,f),this.o){if(this.U&&!this.L){t:{if(this.g){var w,V=this.g;if((w=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(w)){var F=w;break t}}F=null}if(u=F)Us(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bd(this,u);else{this.o=!1,this.m=3,Mt(12),Wi(this),oa(this);break e}}if(this.R){u=!0;let pt;for(;!this.K&&this.C<g.length;)if(pt=sC(this,g),pt==Cd){ce==4&&(this.m=4,Mt(14),u=!1),Us(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==__){this.m=4,Mt(15),Us(this.i,this.l,g,"[Invalid Chunk]"),u=!1;break}else Us(this.i,this.l,pt,null),bd(this,pt);if(w_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||g.length!=0||this.h.h||(this.m=1,Mt(16),u=!1),this.o=this.o&&u,!u)Us(this.i,this.l,g,"[Invalid Chunked Response]"),Wi(this),oa(this);else if(g.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ud(K),K.P=!0,Mt(11))}}else Us(this.i,this.l,g,null),bd(this,g);ce==4&&Wi(this),this.o&&!this.K&&(ce==4?q_(this.j,this):(this.o=!1,du(this)))}else vC(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),Wi(this),oa(this)}}}catch{}finally{}};function iC(u){if(!w_(u))return u.g.la();const f=U_(u.g);if(f==="")return"";let g="";const w=f.length,V=Kr(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Wi(u),oa(u),"";u.h.i=new o.TextDecoder}for(let F=0;F<w;F++)u.h.h=!0,g+=u.h.i.decode(f[F],{stream:!(V&&F==w-1)});return f.length=0,u.h.g+=g,u.C=0,u.h.g}function w_(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function sC(u,f){var g=u.C,w=f.indexOf(`
`,g);return w==-1?Cd:(g=Number(f.substring(g,w)),isNaN(g)?__:(w+=1,w+g>f.length?Cd:(f=f.slice(w,w+g),u.C=w+g,f)))}Wr.prototype.cancel=function(){this.K=!0,Wi(this)};function du(u){u.T=Date.now()+u.H,E_(u,u.H)}function E_(u,f){if(u.D!=null)throw Error("WatchDog timer not null");u.D=ra(c(u.aa,u),f)}function Rd(u){u.D&&(o.clearTimeout(u.D),u.D=null)}Wr.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(tC(this.i,this.B),this.M!=2&&(na(),Mt(17)),Wi(this),this.m=2,oa(this)):E_(this,this.T-u)};function oa(u){u.j.I==0||u.K||q_(u.j,u)}function Wi(u){Rd(u);var f=u.O;f&&typeof f.dispose=="function"&&f.dispose(),u.O=null,ie(u.V),u.g&&(f=u.g,u.g=null,f.abort(),f.dispose())}function bd(u,f){try{var g=u.j;if(g.I!=0&&(g.g==u||Nd(g.h,u))){if(!u.L&&Nd(g.h,u)&&g.I==3){try{var w=g.Ba.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<u.F)_u(g),gu(g);else break e;Fd(g),Mt(18)}}else g.xa=V[1],0<g.xa-g.K&&V[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=ra(c(g.Va,g),6e3));k_(g.h)<=1&&g.ta&&(g.ta=void 0)}else Gi(g,11)}else if((u.L||g.g==u)&&_u(g),!k(f))for(V=g.Ba.g.parse(f),f=0;f<V.length;f++){let Re=V[f];const pt=Re[0];if(!(pt<=g.K))if(g.K=pt,Re=Re[1],g.I==2)if(Re[0]=="c"){g.M=Re[1],g.ba=Re[2];const Yn=Re[3];Yn!=null&&(g.ka=Yn,g.j.info("VER="+g.ka));const Ki=Re[4];Ki!=null&&(g.za=Ki,g.j.info("SVER="+g.za));const Qr=Re[5];Qr!=null&&typeof Qr=="number"&&Qr>0&&(w=1.5*Qr,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Yr=u.g;if(Yr){const wu=Yr.g?Yr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wu){var F=w.h;F.g||wu.indexOf("spdy")==-1&&wu.indexOf("quic")==-1&&wu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Dd(F,F.h),F.h=null))}if(w.G){const jd=Yr.g?Yr.g.getResponseHeader("X-HTTP-Session-Id"):null;jd&&(w.wa=jd,Ve(w.J,w.G,jd))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-u.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var K=u;if(w.na=Q_(w,w.L?w.ba:null,w.W),K.L){S_(w.h,K);var ce=K,lt=w.O;lt&&(ce.H=lt),ce.D&&(Rd(ce),du(ce)),w.g=K}else H_(w);g.i.length>0&&yu(g)}else Re[0]!="stop"&&Re[0]!="close"||Gi(g,7);else g.I==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Gi(g,7):Md(g):Re[0]!="noop"&&g.l&&g.l.qa(Re),g.A=0)}}na(4)}catch{}}var oC=class{constructor(u,f){this.g=u,this.map=f}};function T_(u){this.l=u||10,o.PerformanceNavigationTiming?(u=o.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function I_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function k_(u){return u.h?1:u.g?u.g.size:0}function Nd(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Dd(u,f){u.g?u.g.add(f):u.h=f}function S_(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}T_.prototype.cancel=function(){if(this.i=A_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function A_(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const g of u.g.values())f=f.concat(g.G);return f}return m(u.i)}var x_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aC(u,f){if(u){u=u.split("&");for(let g=0;g<u.length;g++){const w=u[g].indexOf("=");let V,F=null;w>=0?(V=u[g].substring(0,w),F=u[g].substring(w+1)):V=u[g],f(V,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function qr(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;u instanceof qr?(this.l=u.l,aa(this,u.j),this.o=u.o,this.g=u.g,la(this,u.u),this.h=u.h,Od(this,D_(u.i)),this.m=u.m):u&&(f=String(u).match(x_))?(this.l=!1,aa(this,f[1]||"",!0),this.o=ua(f[2]||""),this.g=ua(f[3]||"",!0),la(this,f[4]),this.h=ua(f[5]||"",!0),Od(this,f[6]||"",!0),this.m=ua(f[7]||"")):(this.l=!1,this.i=new ha(null,this.l))}qr.prototype.toString=function(){const u=[];var f=this.j;f&&u.push(ca(f,C_,!0),":");var g=this.g;return(g||f=="file")&&(u.push("//"),(f=this.o)&&u.push(ca(f,C_,!0),"@"),u.push(sa(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&u.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(ca(g,g.charAt(0)=="/"?cC:uC,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",ca(g,dC)),u.join("")},qr.prototype.resolve=function(u){const f=Qn(this);let g=!!u.j;g?aa(f,u.j):g=!!u.o,g?f.o=u.o:g=!!u.g,g?f.g=u.g:g=u.u!=null;var w=u.h;if(g)la(f,u.u);else if(g=!!u.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var V=f.h.lastIndexOf("/");V!=-1&&(w=f.h.slice(0,V+1)+w)}if(V=w,V==".."||V==".")w="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){w=V.lastIndexOf("/",0)==0,V=V.split("/");const F=[];for(let K=0;K<V.length;){const ce=V[K++];ce=="."?w&&K==V.length&&F.push(""):ce==".."?((F.length>1||F.length==1&&F[0]!="")&&F.pop(),w&&K==V.length&&F.push("")):(F.push(ce),w=!0)}w=F.join("/")}else w=V}return g?f.h=w:g=u.i.toString()!=="",g?Od(f,D_(u.i)):g=!!u.m,g&&(f.m=u.m),f};function Qn(u){return new qr(u)}function aa(u,f,g){u.j=g?ua(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function la(u,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);u.u=f}else u.u=null}function Od(u,f,g){f instanceof ha?(u.i=f,fC(u.i,u.l)):(g||(f=ca(f,hC)),u.i=new ha(f,u.l))}function Ve(u,f,g){u.i.set(f,g)}function fu(u){return Ve(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ua(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ca(u,f,g){return typeof u=="string"?(u=encodeURI(u).replace(f,lC),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function lC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var C_=/[#\/\?@]/g,uC=/[#\?:]/g,cC=/[#\?]/g,hC=/[#\?@]/g,dC=/#/g;function ha(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function qi(u){u.g||(u.g=new Map,u.h=0,u.i&&aC(u.i,function(f,g){u.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=ha.prototype,t.add=function(u,f){qi(this),this.i=null,u=js(this,u);let g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(f),this.h+=1,this};function P_(u,f){qi(u),f=js(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function R_(u,f){return qi(u),f=js(u,f),u.g.has(f)}t.forEach=function(u,f){qi(this),this.g.forEach(function(g,w){g.forEach(function(V){u.call(f,V,w,this)},this)},this)};function b_(u,f){qi(u);let g=[];if(typeof f=="string")R_(u,f)&&(g=g.concat(u.g.get(js(u,f))));else for(u=Array.from(u.g.values()),f=0;f<u.length;f++)g=g.concat(u[f]);return g}t.set=function(u,f){return qi(this),this.i=null,u=js(this,u),R_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=b_(this,u),u.length>0?String(u[0]):f):f};function N_(u,f,g){P_(u,f),g.length>0&&(u.i=null,u.g.set(js(u,f),m(g)),u.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(let w=0;w<f.length;w++){var g=f[w];const V=sa(g);g=b_(this,g);for(let F=0;F<g.length;F++){let K=V;g[F]!==""&&(K+="="+sa(g[F])),u.push(K)}}return this.i=u.join("&")};function D_(u){const f=new ha;return f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),f}function js(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function fC(u,f){f&&!u.j&&(qi(u),u.i=null,u.g.forEach(function(g,w){const V=w.toLowerCase();w!=V&&(P_(this,w),N_(this,V,g))},u)),u.j=f}function pC(u,f){const g=new ia;if(o.Image){const w=new Image;w.onload=h(Gr,g,"TestLoadImage: loaded",!0,f,w),w.onerror=h(Gr,g,"TestLoadImage: error",!1,f,w),w.onabort=h(Gr,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=h(Gr,g,"TestLoadImage: timeout",!1,f,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else f(!1)}function mC(u,f){const g=new ia,w=new AbortController,V=setTimeout(()=>{w.abort(),Gr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:w.signal}).then(F=>{clearTimeout(V),F.ok?Gr(g,"TestPingServer: ok",!0,f):Gr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),Gr(g,"TestPingServer: error",!1,f)})}function Gr(u,f,g,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(g)}catch{}}function gC(){this.g=new an}function Ld(u){this.i=u.Sb||null,this.h=u.ab||!1}d(Ld,Kn),Ld.prototype.g=function(){return new pu(this.i,this.h)};function pu(u,f){at.call(this),this.H=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(pu,at),t=pu.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=f,this.readyState=1,fa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(f.body=u),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,da(this)),this.readyState=0},t.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,fa(this)),this.g&&(this.readyState=3,fa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;O_(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function O_(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}t.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?da(this):fa(this),this.readyState==3&&O_(this)}},t.Oa=function(u){this.g&&(this.response=this.responseText=u,da(this))},t.Na=function(u){this.g&&(this.response=u,da(this))},t.ga=function(){this.g&&da(this)};function da(u){u.readyState=4,u.l=null,u.j=null,u.B=null,fa(u)}t.setRequestHeader=function(u,f){this.A.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=f.next();return u.join(`\r
`)};function fa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(pu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function L_(u){let f="";return ee(u,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function Vd(u,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=L_(g),typeof u=="string"?g!=null&&sa(g):Ve(u,f,g))}function We(u){at.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(We,at);var yC=/^https?$/i,_C=["POST","PUT"];t=We.prototype,t.Fa=function(u){this.H=u},t.ea=function(u,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():g_.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(F){V_(this,F);return}if(u=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)g.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())g.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),V=o.FormData&&u instanceof o.FormData,!(Array.prototype.indexOf.call(_C,f,void 0)>=0)||w||V||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of g)this.g.setRequestHeader(F,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(F){V_(this,F)}};function V_(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.o=5,M_(u),mu(u)}function M_(u){u.A||(u.A=!0,vt(u,"complete"),vt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,vt(this,"complete"),vt(this,"abort"),mu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mu(this,!0)),We.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?F_(this):this.Xa())},t.Xa=function(){F_(this)};function F_(u){if(u.h&&typeof s<"u"){if(u.v&&Kr(u)==4)setTimeout(u.Ca.bind(u),0);else if(vt(u,"readystatechange"),Kr(u)==4){u.h=!1;try{const F=u.ca();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=F===0){let K=String(u.D).match(x_)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),w=!yC.test(K?K.toLowerCase():"")}g=w}if(g)vt(u,"complete"),vt(u,"success");else{u.o=6;try{var V=Kr(u)>2?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.ca()+"]",M_(u)}}finally{mu(u)}}}}function mu(u,f){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const g=u.g;u.g=null,f||vt(u,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Kr(u){return u.g?u.g.readyState:0}t.ca=function(){try{return Kr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Ae(f)}};function U_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function vC(u){const f={};u=(u.g&&Kr(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(k(u[w]))continue;var g=rC(u[w]);const V=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=f[V]||[];f[V]=F,F.push(g)}R(f,function(w){return w.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function pa(u,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||f}function j_(u){this.za=0,this.i=[],this.j=new ia,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=pa("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=pa("baseRetryDelayMs",5e3,u),this.Za=pa("retryDelaySeedMs",1e4,u),this.Ta=pa("forwardChannelMaxRetries",2,u),this.va=pa("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new T_(u&&u.concurrentRequestLimit),this.Ba=new gC,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=j_.prototype,t.ka=8,t.I=1,t.connect=function(u,f,g,w){Mt(0),this.W=u,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=Q_(this,null,this.W),yu(this)};function Md(u){if(z_(u),u.I==3){var f=u.V++,g=Qn(u.J);if(Ve(g,"SID",u.M),Ve(g,"RID",f),Ve(g,"TYPE","terminate"),ma(u,g),f=new Wr(u,u.j,f),f.M=2,f.A=fu(Qn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=Y_(f.j,null),f.g.ea(f.A)),f.F=Date.now(),du(f)}K_(u)}function gu(u){u.g&&(Ud(u),u.g.cancel(),u.g=null)}function z_(u){gu(u),u.v&&(o.clearTimeout(u.v),u.v=null),_u(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&o.clearTimeout(u.m),u.m=null)}function yu(u){if(!I_(u.h)&&!u.m){u.m=!0;var f=u.Ea;U||v(),O||(U(),O=!0),x.add(f,u),u.D=0}}function wC(u,f){return k_(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=f.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=ra(c(u.Ea,u,f),G_(u,u.D)),u.D++,!0)}t.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const V=new Wr(this,this.j,u);let F=this.o;if(this.U&&(F?(F=ue(F),D(F,this.U)):F=this.U),this.u!==null||this.R||(V.J=F,F=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=$_(this,V,f),g=Qn(this.J),Ve(g,"RID",u),Ve(g,"CVER",22),this.G&&Ve(g,"X-HTTP-Session-Id",this.G),ma(this,g),F&&(this.R?f="headers="+sa(L_(F))+"&"+f:this.u&&Vd(g,this.u,F)),Dd(this.h,V),this.Ra&&Ve(g,"TYPE","init"),this.S?(Ve(g,"$req",f),Ve(g,"SID","null"),V.U=!0,Pd(V,g,null)):Pd(V,g,f),this.I=2}}else this.I==3&&(u?B_(this,u):this.i.length==0||I_(this.h)||B_(this))};function B_(u,f){var g;f?g=f.l:g=u.V++;const w=Qn(u.J);Ve(w,"SID",u.M),Ve(w,"RID",g),Ve(w,"AID",u.K),ma(u,w),u.u&&u.o&&Vd(w,u.u,u.o),g=new Wr(u,u.j,g,u.D+1),u.u===null&&(g.J=u.o),f&&(u.i=f.G.concat(u.i)),f=$_(u,g,1e3),g.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Dd(u.h,g),Pd(g,w,f)}function ma(u,f){u.H&&ee(u.H,function(g,w){Ve(f,w,g)}),u.l&&ee({},function(g,w){Ve(f,w,g)})}function $_(u,f,g){g=Math.min(u.i.length,g);const w=u.l?c(u.l.Ka,u.l,u):null;e:{var V=u.i;let ce=-1;for(;;){const lt=["count="+g];ce==-1?g>0?(ce=V[0].g,lt.push("ofs="+ce)):ce=0:lt.push("ofs="+ce);let Re=!0;for(let pt=0;pt<g;pt++){var F=V[pt].g;const Yn=V[pt].map;if(F-=ce,F<0)ce=Math.max(0,V[pt].g-100),Re=!1;else try{F="req"+F+"_"||"";try{var K=Yn instanceof Map?Yn:Object.entries(Yn);for(const[Ki,Qr]of K){let Yr=Qr;a(Qr)&&(Yr=he(Qr)),lt.push(F+Ki+"="+encodeURIComponent(Yr))}}catch(Ki){throw lt.push(F+"type="+encodeURIComponent("_badmap")),Ki}}catch{w&&w(Yn)}}if(Re){K=lt.join("&");break e}}K=void 0}return u=u.i.splice(0,g),f.G=u,K}function H_(u){if(!u.g&&!u.v){u.Y=1;var f=u.Da;U||v(),O||(U(),O=!0),x.add(f,u),u.A=0}}function Fd(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=ra(c(u.Da,u),G_(u,u.A)),u.A++,!0)}t.Da=function(){if(this.v=null,W_(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=ra(c(this.Wa,this),u)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),gu(this),W_(this))};function Ud(u){u.B!=null&&(o.clearTimeout(u.B),u.B=null)}function W_(u){u.g=new Wr(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var f=Qn(u.na);Ve(f,"RID","rpc"),Ve(f,"SID",u.M),Ve(f,"AID",u.K),Ve(f,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ve(f,"TO",u.ia),Ve(f,"TYPE","xmlhttp"),ma(u,f),u.u&&u.o&&Vd(f,u.u,u.o),u.O&&(u.g.H=u.O);var g=u.g;u=u.ba,g.M=1,g.A=fu(Qn(f)),g.u=null,g.R=!0,v_(g,u)}t.Va=function(){this.C!=null&&(this.C=null,gu(this),Fd(this),Mt(19))};function _u(u){u.C!=null&&(o.clearTimeout(u.C),u.C=null)}function q_(u,f){var g=null;if(u.g==f){_u(u),Ud(u),u.g=null;var w=2}else if(Nd(u.h,f))g=f.G,S_(u.h,f),w=1;else return;if(u.I!=0){if(f.o)if(w==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var V=u.D;w=cu(),vt(w,new p_(w,g)),yu(u)}else H_(u);else if(V=f.m,V==3||V==0&&f.X>0||!(w==1&&wC(u,f)||w==2&&Fd(u)))switch(g&&g.length>0&&(f=u.h,f.i=f.i.concat(g)),V){case 1:Gi(u,5);break;case 4:Gi(u,10);break;case 3:Gi(u,6);break;default:Gi(u,2)}}}function G_(u,f){let g=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(g*=2),g*f}function Gi(u,f){if(u.j.info("Error code "+f),f==2){var g=c(u.bb,u),w=u.Ua;const V=!w;w=new qr(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||aa(w,"https"),fu(w),V?pC(w.toString(),g):mC(w.toString(),g)}else Mt(2);u.I=0,u.l&&u.l.pa(f),K_(u),z_(u)}t.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function K_(u){if(u.I=0,u.ja=[],u.l){const f=A_(u.h);(f.length!=0||u.i.length!=0)&&(I(u.ja,f),I(u.ja,u.i),u.h.i.length=0,m(u.i),u.i.length=0),u.l.oa()}}function Q_(u,f,g){var w=g instanceof qr?Qn(g):new qr(g);if(w.g!="")f&&(w.g=f+"."+w.g),la(w,w.u);else{var V=o.location;w=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;const F=new qr(null);w&&aa(F,w),f&&(F.g=f),V&&la(F,V),g&&(F.h=g),w=F}return g=u.G,f=u.wa,g&&f&&Ve(w,g,f),Ve(w,"VER",u.ka),ma(u,w),w}function Y_(u,f,g){if(f&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Aa&&!u.ma?new We(new Ld({ab:g})):new We(u.ma),f.Fa(u.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function J_(){}t=J_.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function vu(){}vu.prototype.g=function(u,f){return new ln(u,f)};function ln(u,f){at.call(this),this.g=new j_(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(u?u["X-WebChannel-Client-Profile"]=f.sa:u={"X-WebChannel-Client-Profile":f.sa}),this.g.U=u,(u=f&&f.Qb)&&!k(u)&&(this.g.u=u),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!k(f)&&(this.g.G=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new zs(this)}d(ln,at),ln.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){Md(this.g)},ln.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.v&&(g={},g.__data__=he(u),u=g);f.i.push(new oC(f.Ya++,u)),f.I==3&&yu(f)},ln.prototype.N=function(){this.g.l=null,delete this.j,Md(this.g),delete this.g,ln.Z.N.call(this)};function X_(u){yr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const g in f){u=g;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}d(X_,yr);function Z_(){wt.call(this),this.status=1}d(Z_,wt);function zs(u){this.g=u}d(zs,J_),zs.prototype.ra=function(){vt(this.g,"a")},zs.prototype.qa=function(u){vt(this.g,new X_(u))},zs.prototype.pa=function(u){vt(this.g,new Z_)},zs.prototype.oa=function(){vt(this.g,"b")},vu.prototype.createWebChannel=vu.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,Jk=function(){return new vu},Yk=function(){return cu()},Qk=qt,im={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hu.NO_ERROR=0,hu.TIMEOUT=8,hu.HTTP_ERROR=6,pc=hu,m_.COMPLETE="complete",Kk=m_,En.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",at.prototype.listen=at.prototype.J,Ma=En,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,Gk=We}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o="12.11.0";function TV(t){$o=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ys=new zg("@firebase/firestore");function Hs(){return ys.logLevel}function X(t,...e){if(ys.logLevel<=fe.DEBUG){const n=e.map(Xg);ys.debug(`Firestore (${$o}): ${t}`,...n)}}function Fr(t,...e){if(ys.logLevel<=fe.ERROR){const n=e.map(Xg);ys.error(`Firestore (${$o}): ${t}`,...n)}}function _s(t,...e){if(ys.logLevel<=fe.WARN){const n=e.map(Xg);ys.warn(`Firestore (${$o}): ${t}`,...n)}}function Xg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Xk(t,r,n)}function Xk(t,e,n){let r=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Fr(r),new Error(r)}function Ie(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Xk(e,i,r)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class kV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SV{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new Zk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new Rt(e)}}class AV{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class xV{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new AV(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CV{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,it(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ie(this.o===void 0,3512);const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new t0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new t0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=PV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function sm(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return xf(i)===xf(s)?pe(i,s):xf(i)?1:-1}return pe(t.length,e.length)}const RV=55296,bV=57343;function xf(t){const e=t.charCodeAt(0);return e>=RV&&e<=bV}function Co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="__name__";class er{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=er.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return pe(e.length,n.length)}static compareSegments(e,n){const r=er.isNumericId(e),i=er.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?er.extractNumericId(e).compare(er.extractNumericId(n)):sm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class De extends er{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const NV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends er{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return NV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===n0}static keyField(){return new It([n0])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t,e,n){if(!n)throw new Y(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DV(t,e,n,r){if(e===!0&&r===!0)throw new Y(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r0(t){if(!te.isDocumentKey(t))throw new Y(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i0(t){if(te.isDocumentKey(t))throw new Y(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new Y(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function OV(t,e){if(e<=0)throw new Y(z.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function ot(t,e){const n={typeString:t};return e&&(n.value=e),n}function Zl(t,e){if(!tS(t))throw new Y(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Y(z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=-62135596800,o0=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*o0);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<s0)throw new Y(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/o0}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zl(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-s0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:ot("string",Fe._jsonSchemaVersion),seconds:ot("number"),nanoseconds:ot("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Fe(0,0))}static max(){return new se(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bl=-1;function LV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Ri(i,te.empty(),e)}function VV(t){return new Ri(t.readTime,t.key,bl)}class Ri{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ri(se.min(),te.empty(),bl)}static max(){return new Ri(se.max(),te.empty(),bl)}}function MV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==FV)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function jV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=-1;function Zh(t){return t==null}function ih(t){return t===0&&1/t==-1/0}function zV(t){return typeof t=="number"&&Number.isInteger(t)&&!ih(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="";function BV(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=a0(e)),e=$V(t.get(n),e);return a0(e)}function $V(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case nS:n+="";break;default:n+=s}}return n}function a0(t){return t+nS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zu(this.root,e,this.comparator,!0)}}class zu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u0(this.data.getIterator())}getIteratorFrom(e){return new u0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class u0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new dn([])}unionWith(e){let n=new ht(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class iS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iS("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const HV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(t){if(Ie(!!t,39018),typeof t=="string"){let e=0;const n=HV.exec(t);if(Ie(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ni(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="server_timestamp",oS="__type__",aS="__previous_value__",lS="__local_write_time__";function ty(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[oS])==null?void 0:r.stringValue)===sS}function ed(t){const e=t.mapValue.fields[aS];return ty(e)?ed(e):e}function Nl(t){const e=bi(t.mapValue.fields[lS].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e,n,r,i,s,o,a,l,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=d}}const sh="(default)";class Dl{constructor(e,n){this.projectId=e,this.database=n||sh}static empty(){return new Dl("","")}get isDefaultDatabase(){return this.database===sh}isEqual(e){return e instanceof Dl&&e.projectId===this.projectId&&e.database===this.database}}function qV(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Y(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="__type__",cS="__max__",Bu={mapValue:{fields:{__type__:{stringValue:cS}}}},hS="__vector__",oh="value";function Di(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ty(t)?4:KV(t)?9007199254740991:GV(t)?10:11:ne(28295,{value:t})}function dr(t,e){if(t===e)return!0;const n=Di(t);if(n!==Di(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nl(t).isEqual(Nl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bi(i.timestampValue),a=bi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ni(i.bytesValue).isEqual(Ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),a=Je(s.doubleValue);return o===a?ih(o)===ih(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Co(t.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(l0(o)!==l0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!dr(o[l],a[l])))return!1;return!0}(t,e);default:return ne(52216,{left:t})}}function Ol(t,e){return(t.values||[]).find(n=>dr(n,e))!==void 0}function Po(t,e){if(t===e)return 0;const n=Di(t),r=Di(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Je(s.integerValue||s.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return c0(t.timestampValue,e.timestampValue);case 4:return c0(Nl(t),Nl(e));case 5:return sm(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ni(s),l=Ni(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=pe(a[c],l[c]);if(h!==0)return h}return pe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=pe(Je(s.latitude),Je(o.latitude));return a!==0?a:pe(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return h0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var p,m,I,_;const a=s.fields||{},l=o.fields||{},c=(p=a[oh])==null?void 0:p.arrayValue,h=(m=l[oh])==null?void 0:m.arrayValue,d=pe(((I=c==null?void 0:c.values)==null?void 0:I.length)||0,((_=h==null?void 0:h.values)==null?void 0:_.length)||0);return d!==0?d:h0(c,h)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Bu.mapValue&&o===Bu.mapValue)return 0;if(s===Bu.mapValue)return 1;if(o===Bu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=sm(l[d],h[d]);if(p!==0)return p;const m=Po(a[l[d]],c[h[d]]);if(m!==0)return m}return pe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ne(23264,{he:n})}}function c0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=bi(t),r=bi(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function h0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Po(n[i],r[i]);if(s)return s}return pe(n.length,r.length)}function Ro(t){return om(t)}function om(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=om(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${om(n.fields[o])}`;return i+"}"}(t.mapValue):ne(61005,{value:t})}function mc(t){switch(Di(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ed(t);return e?16+mc(e):16;case 5:return 2*t.stringValue.length;case 6:return Ni(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+mc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return zi(r.fields,(s,o)=>{i+=s.length+mc(o)}),i}(t.mapValue);default:throw ne(13486,{value:t})}}function d0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function am(t){return!!t&&"integerValue"in t}function ny(t){return!!t&&"arrayValue"in t}function f0(t){return!!t&&"nullValue"in t}function p0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gc(t){return!!t&&"mapValue"in t}function GV(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[uS])==null?void 0:r.stringValue)===hS}function el(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return zi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=el(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=el(t.arrayValue.values[n]);return e}return{...t}}function KV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===cS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(n)}setAll(e){let n=It.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=el(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Yt(el(this.value))}}function dS(t){const e=[];return zi(t.fields,(n,r)=>{const i=new It([n]);if(gc(r)){const s=dS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,se.min(),se.min(),se.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,se.min(),se.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,se.min(),se.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ah{constructor(e,n){this.position=e,this.inclusive=n}}function m0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function g0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ll{constructor(e,n="asc"){this.field=e,this.dir=n}}function QV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fS{}class st extends fS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JV(e,n,r):n==="array-contains"?new eM(e,r):n==="in"?new tM(e,r):n==="not-in"?new nM(e,r):n==="array-contains-any"?new rM(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XV(e,r):new ZV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Po(n,this.value)):n!==null&&Di(this.value)===Di(n)&&this.matchesComparison(Po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends fS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new qn(e,n)}matches(e){return pS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pS(t){return t.op==="and"}function mS(t){return YV(t)&&pS(t)}function YV(t){for(const e of t.filters)if(e instanceof qn)return!1;return!0}function lm(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+Ro(t.value);if(mS(t))return t.filters.map(e=>lm(e)).join(",");{const e=t.filters.map(n=>lm(n)).join(",");return`${t.op}(${e})`}}function gS(t,e){return t instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&dr(r.value,i.value)}(t,e):t instanceof qn?function(r,i){return i instanceof qn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gS(o,i.filters[a]),!0):!1}(t,e):void ne(19439)}function yS(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${Ro(n.value)}`}(t):t instanceof qn?function(n){return n.op.toString()+" {"+n.getFilters().map(yS).join(" ,")+"}"}(t):"Filter"}class JV extends st{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class XV extends st{constructor(e,n){super(e,"in",n),this.keys=_S("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZV extends st{constructor(e,n){super(e,"not-in",n),this.keys=_S("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _S(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class eM extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ny(n)&&Ol(n.arrayValue,this.value)}}class tM extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ol(this.value.arrayValue,n)}}class nM extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ol(this.value.arrayValue,n)}}class rM extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ny(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ol(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function y0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iM(t,e,n,r,i,s,o)}function ry(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ro(r)).join(",")),e.Te=n}return e.Te}function iy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!g0(t.startAt,e.startAt)&&g0(t.endAt,e.endAt)}function um(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function sM(t,e,n,r,i,s,o,a){return new qo(t,e,n,r,i,s,o,a)}function td(t){return new qo(t)}function _0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oM(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function vS(t){return t.collectionGroup!==null}function tl(t){const e=oe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(It.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Ll(s,r))}),n.has(It.keyField().canonicalString())||e.Ee.push(new Ll(It.keyField(),r))}return e.Ee}function lr(t){const e=oe(t);return e.Ie||(e.Ie=aM(e,tl(t))),e.Ie}function aM(t,e){if(t.limitType==="F")return y0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ll(i.field,s)});const n=t.endAt?new ah(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ah(t.startAt.position,t.startAt.inclusive):null;return y0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cm(t,e){const n=t.filters.concat([e]);return new qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function lM(t,e){const n=t.explicitOrderBy.concat([e]);return new qo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function lh(t,e,n){return new qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nd(t,e){return iy(lr(t),lr(e))&&t.limitType===e.limitType}function wS(t){return`${ry(lr(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yS(i)).join(", ")}]`),Zh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ro(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ro(i)).join(",")),`Target(${r})`}(lr(t))}; limitType=${t.limitType})`}function rd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of tl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=m0(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,tl(r),i)||r.endAt&&!function(o,a,l){const c=m0(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,tl(r),i))}(t,e)}function uM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ES(t){return(e,n)=>{let r=!1;for(const i of tl(t)){const s=cM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cM(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Po(l,c):ne(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=new He(te.comparator);function Ur(){return hM}const TS=new He(te.comparator);function Fa(...t){let e=TS;for(const n of t)e=e.insert(n.key,n);return e}function IS(t){let e=TS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return nl()}function kS(){return nl()}function nl(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const dM=new He(te.comparator),fM=new ht(te.comparator);function me(...t){let e=fM;for(const n of t)e=e.add(n);return e}const pM=new ht(pe);function mM(){return pM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ih(e)?"-0":e}}function SS(t){return{integerValue:""+t}}function AS(t,e){return zV(e)?SS(e):sy(t,e)}/**
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
 */class id{constructor(){this._=void 0}}function gM(t,e,n){return t instanceof Vl?function(i,s){const o={fields:{[oS]:{stringValue:sS},[lS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ty(s)&&(s=ed(s)),s&&(o.fields[aS]=s),{mapValue:o}}(n,e):t instanceof bo?CS(t,e):t instanceof Ml?PS(t,e):function(i,s){const o=xS(i,s),a=v0(o)+v0(i.Ae);return am(o)&&am(i.Ae)?SS(a):sy(i.serializer,a)}(t,e)}function yM(t,e,n){return t instanceof bo?CS(t,e):t instanceof Ml?PS(t,e):n}function xS(t,e){return t instanceof Fl?function(r){return am(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vl extends id{}class bo extends id{constructor(e){super(),this.elements=e}}function CS(t,e){const n=RS(e);for(const r of t.elements)n.some(i=>dr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ml extends id{constructor(e){super(),this.elements=e}}function PS(t,e){let n=RS(e);for(const r of t.elements)n=n.filter(i=>!dr(i,r));return{arrayValue:{values:n}}}class Fl extends id{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function v0(t){return Je(t.integerValue||t.doubleValue)}function RS(t){return ny(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n){this.field=e,this.transform=n}}function _M(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof bo&&i instanceof bo||r instanceof Ml&&i instanceof Ml?Co(r.elements,i.elements,dr):r instanceof Fl&&i instanceof Fl?dr(r.Ae,i.Ae):r instanceof Vl&&i instanceof Vl}(t.transform,e.transform)}class vM{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sd{}function bS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ay(t.key,Rn.none()):new eu(t.key,t.data,Rn.none());{const n=t.data,r=Yt.empty();let i=new ht(It.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bi(t.key,r,new dn(i.toArray()),Rn.none())}}function wM(t,e,n){t instanceof eu?function(i,s,o){const a=i.value.clone(),l=E0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Bi?function(i,s,o){if(!yc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=E0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(NS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function rl(t,e,n,r){return t instanceof eu?function(s,o,a,l){if(!yc(s.precondition,o))return a;const c=s.value.clone(),h=T0(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Bi?function(s,o,a,l){if(!yc(s.precondition,o))return a;const c=T0(s.fieldTransforms,l,o),h=o.data;return h.setAll(NS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return yc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function EM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xS(r.transform,i||null);s!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,s))}return n||null}function w0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Co(r,i,(s,o)=>_M(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class eu extends sd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bi extends sd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function NS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function E0(t,e,n){const r=new Map;Ie(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yM(o,a,n[i]))}return r}function T0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gM(s,o,e))}return r}class ay extends sd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TM extends sd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=bS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(n,r)=>w0(n,r))&&Co(this.baseMutations,e.baseMutations,(n,r)=>w0(n,r))}}class ly{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return dM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ly(e,n,r,i)}}/**
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
 */class kM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,ye;function AM(t){switch(t){case z.OK:return ne(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function DS(t){if(t===void 0)return Fr("GRPC error has no .code"),z.UNKNOWN;switch(t){case et.OK:return z.OK;case et.CANCELLED:return z.CANCELLED;case et.UNKNOWN:return z.UNKNOWN;case et.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case et.INTERNAL:return z.INTERNAL;case et.UNAVAILABLE:return z.UNAVAILABLE;case et.UNAUTHENTICATED:return z.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case et.NOT_FOUND:return z.NOT_FOUND;case et.ALREADY_EXISTS:return z.ALREADY_EXISTS;case et.PERMISSION_DENIED:return z.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case et.ABORTED:return z.ABORTED;case et.OUT_OF_RANGE:return z.OUT_OF_RANGE;case et.UNIMPLEMENTED:return z.UNIMPLEMENTED;case et.DATA_LOSS:return z.DATA_LOSS;default:return ne(39323,{code:t})}}(ye=et||(et={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xM(){return new TextEncoder}/**
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
 */const CM=new Si([4294967295,4294967295],0);function I0(t){const e=xM().encode(t),n=new qk;return n.update(e),new Uint8Array(n.digest())}function k0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Si([n,r],0),new Si([i,s],0)]}class uy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ua(`Invalid padding: ${n}`);if(r<0)throw new Ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Si.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Si.fromNumber(r)));return i.compare(CM)===1&&(i=new Si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=I0(e),[r,i]=k0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=I0(e),[r,i]=k0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new od(se.min(),i,new He(pe),Ur(),me())}}class tu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tu(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class OS{constructor(e,n){this.targetId=e,this.Ce=n}}class LS{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class S0{constructor(){this.ve=0,this.Fe=A0(),this.Me=At.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),r=me();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne(38017,{changeType:s})}}),new tu(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=A0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class PM{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ur(),this.Je=$u(),this.He=$u(),this.Ze=new He(pe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(um(s))if(r===0){const o=new te(s.path);this.et(n,o,Nt.newNoDocument(o,se.min()))}else Ie(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ni(r).toUint8Array()}catch(l){if(l instanceof iS)return _s("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new uy(o,i,s)}catch(l){return _s(l instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&um(a.target)){const l=new te(a.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,Nt.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=me();this.He.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.ot(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new od(e,n,this.Ze,this.je,r);return this.je=Ur(),this.Je=$u(),this.He=$u(),this.Ze=new He(pe),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new S0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new ht(pe),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ht(pe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new S0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function $u(){return new He(te.comparator)}function A0(){return new He(te.comparator)}const RM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),NM=(()=>({and:"AND",or:"OR"}))();class DM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hm(t,e){return t.useProto3Json||Zh(e)?e:{value:e}}function uh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OM(t,e){return uh(t,e.toTimestamp())}function ur(t){return Ie(!!t,49232),se.fromTimestamp(function(n){const r=bi(n);return new Fe(r.seconds,r.nanos)}(t))}function cy(t,e){return dm(t,e).canonicalString()}function dm(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function MS(t){const e=De.fromString(t);return Ie(BS(e),10190,{key:e.toString()}),e}function fm(t,e){return cy(t.databaseId,e.path)}function Cf(t,e){const n=MS(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(US(n))}function FS(t,e){return cy(t.databaseId,e)}function LM(t){const e=MS(t);return e.length===4?De.emptyPath():US(e)}function pm(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function US(t){return Ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function x0(t,e,n){return{name:fm(t,e),fields:n.value.mapValue.fields}}function VM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ie(h===void 0||typeof h=="string",58123),At.fromBase64String(h||"")):(Ie(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),At.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?z.UNKNOWN:DS(c.code);return new Y(h,c.message||"")}(o);n=new LS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cf(t,r.document.name),s=ur(r.document.updateTime),o=r.document.createTime?ur(r.document.createTime):se.min(),a=new Yt({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new _c(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cf(t,r.document),s=r.readTime?ur(r.readTime):se.min(),o=Nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cf(t,r.document),s=r.removedTargetIds||[];n=new _c([],s,i,null)}else{if(!("filter"in e))return ne(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SM(i,s),a=r.targetId;n=new OS(a,o)}}return n}function MM(t,e){let n;if(e instanceof eu)n={update:x0(t,e.key,e.value)};else if(e instanceof ay)n={delete:fm(t,e.key)};else if(e instanceof Bi)n={update:x0(t,e.key,e.data),updateMask:qM(e.fieldMask)};else{if(!(e instanceof TM))return ne(16599,{dt:e.type});n={verify:fm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fl)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne(27497)}(t,e.precondition)),n}function FM(t,e){return t&&t.length>0?(Ie(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?ur(i.updateTime):ur(s);return o.isEqual(se.min())&&(o=ur(s)),new vM(o,i.transformResults||[])}(n,e))):[]}function UM(t,e){return{documents:[FS(t,e.path)]}}function jM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=FS(t,i);const s=function(c){if(c.length!==0)return zS(qn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:qs(p.field),direction:$M(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function zM(t){let e=LM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=jS(d);return p instanceof qn&&mS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(I){return new Ll(Gs(I.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Zh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new ah(m,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,m=d.values||[];return new ah(m,p)}(n.endAt)),sM(e,i,o,s,a,"F",l,c)}function BM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gs(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gs(n.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gs(n.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gs(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(t):t.fieldFilter!==void 0?function(n){return st.create(Gs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qn.create(n.compositeFilter.filters.map(r=>jS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(n.compositeFilter.op))}(t):ne(30097,{filter:t})}function $M(t){return RM[t]}function HM(t){return bM[t]}function WM(t){return NM[t]}function qs(t){return{fieldPath:t.canonicalString()}}function Gs(t){return It.fromServerFormat(t.fieldPath)}function zS(t){return t instanceof st?function(n){if(n.op==="=="){if(p0(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NAN"}};if(f0(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(p0(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NAN"}};if(f0(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(n.field),op:HM(n.op),value:n.value}}}(t):t instanceof qn?function(n){const r=n.getFilters().map(i=>zS(i));return r.length===1?r[0]:{compositeFilter:{op:WM(n.op),filters:r}}}(t):ne(54877,{filter:t})}function qM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function BS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function $S(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r,i,s=se.min(),o=se.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.yt=e}}function KM(t){const e=zM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(){this.bn=new YM}addToCollectionParentIndex(e,n){return this.bn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ri.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class YM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(De.comparator)).toArray()}}/**
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
 */const C0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},HS=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(HS,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new No(0)}static ar(){return new No(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="LruGarbageCollector",JM=1048576;function R0([t,e],[n,r]){const i=pe(t,n);return i===0?pe(e,r):i}class XM{constructor(e){this.Pr=e,this.buffer=new ht(R0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();R0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){X(P0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Wo(n)?X(P0,"Ignoring IndexedDB error during garbage collection: ",n):await Ho(n)}await this.Ar(3e5)})}}class e4{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Xh.ce);const r=new XM(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(C0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),C0):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),Hs()<=fe.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function t4(t,e){return new e4(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class r4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&rl(r.mutation,i,dn.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ur();const o=nl(),a=function(){return nl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Bi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),rl(h.mutation,c,h.mutation.getFieldMask(),Fe.now())):o.set(c.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>a.set(c,new r4(h,o.get(c)??null))),a))}recalculateAndSaveOverlays(e,n){const r=nl();let i=new He((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||dn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const d=(i.get(a.batchId)||me()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=kS();h.forEach(p=>{if(!s.has(p)){const m=bS(n.get(p),r.get(p));m!==null&&d.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return oM(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(ns());let a=bl,l=s;return o.next(c=>B.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,me())).next(h=>({batchId:a,changes:IS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=Fa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fa();return this.indexManager.getCollectionParents(e,s).next(a=>B.forEach(a,l=>{const c=function(d,p){return new qo(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let a=Fa();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&rl(h.mutation,c,dn.empty(),Fe.now()),rd(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return B.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ur(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:KM(i.bundledQuery),readTime:ur(i.readTime)}}(n)),B.resolve()}}/**
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
 */class o4{constructor(){this.overlays=new He(te.comparator),this.Lr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=ns(),s=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ns(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ns(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return B.resolve(a)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kM(n,r));let s=this.Lr.get(n);s===void 0&&(s=me(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class a4{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.kr=new ht(mt.qr),this.Kr=new ht(mt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new mt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new te(new De([])),r=new mt(n,e),i=new mt(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new te(new De([])),r=new mt(n,e),i=new mt(n,e+1);let s=me();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new mt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return te.comparator(e.key,n.key)||pe(e.Jr,n.Jr)}static Ur(e,n){return pe(e.Jr,n.Jr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ht(mt.qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Hr=this.Hr.add(new mt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?ey:this.Yn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const a=this.Zr(o.Jr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(pe);return n.forEach(i=>{const s=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],a=>{r=r.add(a.Jr)})}),B.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new mt(new te(s),0);let a=new ht(pe);return this.Hr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Jr)),!0)},o),B.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return B.forEach(n.mutations,i=>{const s=new mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new mt(n,0),i=this.Hr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.ti=e,this.docs=function(){return new He(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ur();const o=n.path,a=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||MV(VV(h),r)<=0||(i.has(h.key)||rd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne(9500)}ni(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new c4(this)}getSize(e){return B.resolve(this.size)}}class c4 extends n4{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e){this.persistence=e,this.ri=new Ns(n=>ry(n),iy),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.ii=0,this.si=new hy,this.targetCount=0,this.oi=No._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),B.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new No(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.lr(n),B.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this._i={},this.overlays={},this.ai=new Xh(0),this.ui=!1,this.ui=!0,this.ci=new a4,this.referenceDelegate=e(this),this.li=new h4(this),this.indexManager=new QM,this.remoteDocumentCache=function(i){return new u4(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new GM(n),this.Pi=new s4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new l4(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new d4(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return B.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class d4 extends UV{constructor(e){super(),this.currentSequenceNumber=e}}class dy{constructor(e){this.persistence=e,this.Ri=new hy,this.Ai=null}static Vi(e){return new dy(e)}get di(){if(this.Ai)return this.Ai;throw ne(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,r=>{const i=te.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ch{constructor(e,n){this.persistence=e,this.fi=new Ns(r=>BV(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=t4(this,n)}static Vi(e,n){return new ch(e,n)}Ti(){}Ei(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return B.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,se.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),B.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mc(e.data.value)),n}wr(e,n,r){return B.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fy(e,n.fromCache,r,i)}}/**
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
 */class f4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return fD()?8:jV(Ot())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new f4;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Hs()<=fe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Hs()<=fe.DEBUG&&X("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Hs()<=fe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(n))):B.resolve())}gs(e,n){if(_0(n))return B.resolve(null);let r=lr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=lh(n,null,"F"),r=lr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Ss(n,a);return this.bs(n,c,o,l.readTime)?this.gs(e,lh(n,null,"F")):this.Ds(e,c,n,l)}))})))}ps(e,n,r,i){return _0(n)||i.isEqual(se.min())?B.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?B.resolve(null):(Hs()<=fe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ws(n)),this.Ds(e,o,n,LV(i,bl)).next(a=>a))})}Ss(e,n){let r=new ht(ES(e));return n.forEach((i,s)=>{rd(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Hs()<=fe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.fs.getDocumentsMatchingQuery(e,n,Ri.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="LocalStore",m4=3e8;class g4{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new He(pe),this.Fs=new Ns(s=>ry(s),iy),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i4(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function y4(t,e,n,r){return new g4(t,e,n,r)}async function qS(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=me();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:a}))})})}function _4(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,p=d.keys();let m=B.resolve();return p.forEach(I=>{m=m.next(()=>h.getEntry(l,I)).next(_=>{const S=c.docVersions.get(I);Ie(S!==null,48541),_.version.compareTo(S)<0&&(d.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),h.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=me();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GS(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function v4(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.li.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.li.addMatchingKeys(s,h.addedDocuments,d)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(At.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),i=i.insert(d,m),function(_,S,y){return _.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=m4?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(p,m,h)&&a.push(n.li.updateTargetData(s,m))});let l=Ur(),c=me();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(w4(s,o,e.documentUpdates).next(h=>{l=h.Bs,c=h.Ls})),!r.isEqual(se.min())){const h=n.li.getLastRemoteSnapshotVersion(s).next(d=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.vs=i,s))}function w4(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ur();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):X(py,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Bs:o,Ls:i}})}function E4(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ey),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function T4(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new fi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function mm(t,e,n){const r=oe(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wo(o))throw o;X(py,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function b0(t,e,n){const r=oe(t);let i=se.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const d=oe(l),p=d.Fs.get(h);return p!==void 0?B.resolve(d.vs.get(p)):d.li.getTargetData(c,h)}(r,o,lr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:me())).next(a=>(I4(r,uM(e),a),{documents:a,ks:s})))}function I4(t,e,n){let r=t.Ms.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class N0{constructor(){this.activeTargetIds=mM()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k4{constructor(){this.vo=new N0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new N0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="ConnectivityMonitor";class O0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){X(D0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){X(D0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hu=null;function gm(){return Hu===null?Hu=function(){return 268435456+Math.round(2147483648*Math.random())}():Hu++,"0x"+Hu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="RestConnection",A4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class x4{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===sh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=gm(),a=this.Qo(e,n.toUriEncodedString());X(Pf,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:c}=new URL(a),h=Cs(c);return this.zo(e,a,l,r,h).then(d=>(X(Pf,`Received RPC '${e}' ${o}: `,d),d),d=>{throw _s(Pf,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$o}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=A4[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection",Sa=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class yo extends x4{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!yo.c_){const e=Yk();Sa(e,Qk.STAT_EVENT,n=>{n.stat===im.PROXY?X(Pt,"STAT_EVENT: detected buffering proxy"):n.stat===im.NOPROXY&&X(Pt,"STAT_EVENT: detected no buffering proxy")}),yo.c_=!0}}zo(e,n,r,i,s){const o=gm();return new Promise((a,l)=>{const c=new Gk;c.setWithCredentials(!0),c.listenOnce(Kk.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pc.NO_ERROR:const d=c.getResponseJson();X(Pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case pc.TIMEOUT:X(Pt,`RPC '${e}' ${o} timed out`),l(new Y(z.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const p=c.getStatus();if(X(Pt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const _=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(E)>=0?E:z.UNKNOWN}(I.status);l(new Y(_,I.message))}else l(new Y(z.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(z.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{X(Pt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);X(Pt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",h,r,15)})}T_(e,n,r){const i=gm(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");X(Pt,`Creating RPC '${e}' stream ${i}: ${c}`,a);const h=o.createWebChannel(c,a);this.E_(h);let d=!1,p=!1;const m=new C4({Jo:I=>{p?X(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(X(Pt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),X(Pt,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},Ho:()=>h.close()});return Sa(h,Ma.EventType.OPEN,()=>{p||(X(Pt,`RPC '${e}' stream ${i} transport opened.`),m.i_())}),Sa(h,Ma.EventType.CLOSE,()=>{p||(p=!0,X(Pt,`RPC '${e}' stream ${i} transport closed`),m.o_(),this.I_(h))}),Sa(h,Ma.EventType.ERROR,I=>{p||(p=!0,_s(Pt,`RPC '${e}' stream ${i} transport errored. Name:`,I.name,"Message:",I.message),m.o_(new Y(z.UNAVAILABLE,"The operation could not be completed")))}),Sa(h,Ma.EventType.MESSAGE,I=>{var _;if(!p){const S=I.data[0];Ie(!!S,16349);const y=S,E=(y==null?void 0:y.error)||((_=y[0])==null?void 0:_.error);if(E){X(Pt,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let L=function(x){const v=et[x];if(v!==void 0)return DS(v)}(T),U=E.message;T==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&_s(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=z.INTERNAL,U="Unknown error status: "+T+" with message "+E.message),p=!0,m.o_(new Y(L,U)),h.close()}else X(Pt,`RPC '${e}' stream ${i} received:`,S),m.__(S)}}),yo.u_(),setTimeout(()=>{m.s_()},0),m}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Jk()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t){return new yo(t)}function Rf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){return new DM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yo.c_=!1;class KS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="PersistentStream";class QS{constructor(e,n,r,i,s,o,a,l){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new KS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Fr(n.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Y(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(L0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(X(L0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R4 extends QS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=VM(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?ur(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=pm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=um(l)?{documents:UM(s,l)}:{query:jM(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=VS(s,o.resumeToken);const c=hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){a.readTime=uh(s,o.snapshotVersion.toTimestamp());const c=hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=BM(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=pm(this.serializer),n.removeTarget=e,this.q_(n)}}class b4 extends QS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=FM(e.writeResults,e.commitTime),r=ur(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=pm(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MM(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{}class D4 extends N4{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Y(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,dm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(z.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,dm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(z.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function O4(t,e,n,r){return new D4(t,e,n,r)}class L4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fr(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="RemoteStore";class V4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ds(this)&&(X(vs,"Restarting streams for network reachability change."),await async function(l){const c=oe(l);c.Ia.add(4),await nu(c),c.Va.set("Unknown"),c.Ia.delete(4),await ld(c)}(this))})}),this.Va=new L4(r,i)}}async function ld(t){if(Ds(t))for(const e of t.Ra)await e(!0)}async function nu(t){for(const e of t.Ra)await e(!1)}function YS(t,e){const n=oe(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),_y(n)?yy(n):Go(n).O_()&&gy(n,e))}function my(t,e){const n=oe(t),r=Go(n);n.Ea.delete(e),r.O_()&&JS(n,e),n.Ea.size===0&&(r.O_()?r.L_():Ds(n)&&n.Va.set("Unknown"))}function gy(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Go(t).Z_(e)}function JS(t,e){t.da.$e(e),Go(t).X_(e)}function yy(t){t.da=new PM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Go(t).start(),t.Va.ua()}function _y(t){return Ds(t)&&!Go(t).x_()&&t.Ea.size>0}function Ds(t){return oe(t).Ia.size===0}function XS(t){t.da=void 0}async function M4(t){t.Va.set("Online")}async function F4(t){t.Ea.forEach((e,n)=>{gy(t,e)})}async function U4(t,e){XS(t),_y(t)?(t.Va.ha(e),yy(t)):t.Va.set("Unknown")}async function j4(t,e,n){if(t.Va.set("Online"),e instanceof LS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ea.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ea.delete(a),i.da.removeTarget(a))}(t,e)}catch(r){X(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hh(t,r)}else if(e instanceof _c?t.da.Xe(e):e instanceof OS?t.da.st(e):t.da.tt(e),!n.isEqual(se.min()))try{const r=await GS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ea.get(c);h&&s.Ea.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.Ea.get(l);if(!h)return;s.Ea.set(l,h.withResumeToken(At.EMPTY_BYTE_STRING,h.snapshotVersion)),JS(s,l);const d=new fi(h.target,l,c,h.sequenceNumber);gy(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X(vs,"Failed to raise snapshot:",r),await hh(t,r)}}async function hh(t,e,n){if(!Wo(e))throw e;t.Ia.add(1),await nu(t),t.Va.set("Offline"),n||(n=()=>GS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(vs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ld(t)})}function ZS(t,e){return e().catch(n=>hh(t,n,e))}async function ud(t){const e=oe(t),n=Oi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ey;for(;z4(e);)try{const i=await E4(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,B4(e,i)}catch(i){await hh(e,i)}eA(e)&&tA(e)}function z4(t){return Ds(t)&&t.Ta.length<10}function B4(t,e){t.Ta.push(e);const n=Oi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function eA(t){return Ds(t)&&!Oi(t).x_()&&t.Ta.length>0}function tA(t){Oi(t).start()}async function $4(t){Oi(t).ra()}async function H4(t){const e=Oi(t);for(const n of t.Ta)e.ea(n.mutations)}async function W4(t,e,n){const r=t.Ta.shift(),i=ly.from(r,e,n);await ZS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ud(t)}async function q4(t,e){e&&Oi(t).Y_&&await async function(r,i){if(function(o){return AM(o)&&o!==z.ABORTED}(i.code)){const s=r.Ta.shift();Oi(r).B_(),await ZS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ud(r)}}(t,e),eA(t)&&tA(t)}async function V0(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),X(vs,"RemoteStore received new credentials");const r=Ds(n);n.Ia.add(3),await nu(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ld(n)}async function G4(t,e){const n=oe(t);e?(n.Ia.delete(2),await ld(n)):e||(n.Ia.add(2),await nu(n),n.Va.set("Unknown"))}function Go(t){return t.ma||(t.ma=function(n,r,i){const s=oe(n);return s.sa(),new R4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:M4.bind(null,t),Yo:F4.bind(null,t),t_:U4.bind(null,t),H_:j4.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),_y(t)?yy(t):t.Va.set("Unknown")):(await t.ma.stop(),XS(t))})),t.ma}function Oi(t){return t.fa||(t.fa=function(n,r,i){const s=oe(n);return s.sa(),new b4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:$4.bind(null,t),t_:q4.bind(null,t),ta:H4.bind(null,t),na:W4.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await ud(t)):(await t.fa.stop(),t.Ta.length>0&&(X(vs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new vy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wy(t,e){if(Fr("AsyncQueue",`${e}: ${t}`),Wo(t))return new Y(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Fa(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _o;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.ga=new He(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ne(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Do{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Do(e,n,_o.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Q4{constructor(){this.queries=F0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=F0(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(r)})})(this,new Y(z.ABORTED,"Firestore shutting down"))}}function F0(){return new Ns(t=>wS(t),nd)}async function Ey(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new K4,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=wy(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Iy(n)}async function Ty(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Y4(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Sa)a.Fa(i)&&(r=!0);o.wa=i}}r&&Iy(n)}function J4(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Iy(t){t.Ca.forEach(e=>{e.next()})}var ym,U0;(U0=ym||(ym={})).Ma="default",U0.Cache="cache";class ky{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Do(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ym.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.key=e}}class rA{constructor(e){this.key=e}}class X4{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=me(),this.mutatedKeys=me(),this.eu=ES(e),this.tu=new _o(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new M0,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),m=rd(this.query,d)?d:null,I=!!p&&this.mutatedKeys.has(p.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;p&&m?p.data.isEqual(m.data)?I!==_&&(r.track({type:3,doc:m}),S=!0):this.su(p,m)||(r.track({type:2,doc:m}),S=!0,(l&&this.eu(m,l)>0||c&&this.eu(m,c)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),S=!0):p&&!m&&(r.track({type:1,doc:p}),S=!0,(l||c)&&(a=!0)),S&&(m?(o=o.add(m),s=_?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,bs:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,d)=>function(m,I){const _=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Vt:S})}};return _(m)-_(I)}(h.type,d.type)||this.eu(h.doc,d.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,c=l!==this.Xa;return this.Xa=l,o.length!==0||c?{snapshot:new Do(this.query,e.tu,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new M0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=me(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new rA(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new nA(r))}),n}cu(e){this.Za=e.ks,this.Ya=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Do.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Sy="SyncEngine";class Z4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eF{constructor(e){this.key=e,this.hu=!1}}class tF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ns(a=>wS(a),nd),this.Eu=new Map,this.Iu=new Set,this.Ru=new He(te.comparator),this.Au=new Map,this.Vu=new hy,this.du={},this.mu=new Map,this.fu=No.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nF(t,e,n=!0){const r=uA(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await iA(r,e,n,!0),i}async function rF(t,e){const n=uA(t);await iA(n,e,!0,!1)}async function iA(t,e,n,r){const i=await T4(t.localStore,lr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await iF(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&YS(t.remoteStore,i),a}async function iF(t,e,n,r,i){t.pu=(d,p,m)=>async function(_,S,y,E){let T=S.view.ru(y);T.bs&&(T=await b0(_.localStore,S.query,!1).then(({documents:x})=>S.view.ru(x,T)));const L=E&&E.targetChanges.get(S.targetId),U=E&&E.targetMismatches.get(S.targetId)!=null,O=S.view.applyChanges(T,_.isPrimaryClient,L,U);return z0(_,S.targetId,O.au),O.snapshot}(t,d,p,m);const s=await b0(t.localStore,e,!0),o=new X4(e,s.ks),a=o.ru(s.documents),l=tu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);z0(t,n,c.au);const h=new Z4(e,n,o);return t.Tu.set(e,h),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function sF(t,e,n){const r=oe(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!nd(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&my(r.remoteStore,i.targetId),_m(r,i.targetId)}).catch(Ho)):(_m(r,i.targetId),await mm(r.localStore,i.targetId,!0))}async function oF(t,e){const n=oe(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),my(n.remoteStore,r.targetId))}async function aF(t,e,n){const r=pF(t);try{const i=await function(o,a){const l=oe(o),c=Fe.now(),h=a.reduce((m,I)=>m.add(I.key),me());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=Ur(),_=me();return l.xs.getEntries(m,h).next(S=>{I=S,I.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,I)).next(S=>{d=S;const y=[];for(const E of a){const T=EM(E,d.get(E.key).overlayedDocument);T!=null&&y.push(new Bi(E.key,T,dS(T.value.mapValue),Rn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,c,y,a)}).next(S=>{p=S;const y=S.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(m,S.batchId,y)})}).then(()=>({batchId:p.batchId,changes:IS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.du[o.currentUser.toKey()];c||(c=new He(pe)),c=c.insert(a,l),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await ru(r,i.changes),await ud(r.remoteStore)}catch(i){const s=wy(i,"Failed to persist write");n.reject(s)}}async function sA(t,e){const n=oe(t);try{const r=await v4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Ie(o.hu,14607):i.removedDocuments.size>0&&(Ie(o.hu,42227),o.hu=!1))}),await ru(n,r,e)}catch(r){await Ho(r)}}function j0(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=oe(o);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const p of d.Sa)p.va(a)&&(c=!0)}),c&&Iy(l)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lF(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new He(te.comparator);o=o.insert(s,Nt.newNoDocument(s,se.min()));const a=me().add(s),l=new od(se.min(),new Map,new He(pe),o,a);await sA(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),Ay(r)}else await mm(r.localStore,e,!1).then(()=>_m(r,e,n)).catch(Ho)}async function uF(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await _4(n.localStore,e);aA(n,r,null),oA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ru(n,i)}catch(i){await Ho(i)}}async function cF(t,e,n){const r=oe(t);try{const i=await function(o,a){const l=oe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(Ie(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);aA(r,e,n),oA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ru(r,i)}catch(i){await Ho(i)}}function oA(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function aA(t,e,n){const r=oe(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function _m(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||lA(t,r)})}function lA(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(my(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Ay(t))}function z0(t,e,n){for(const r of n)r instanceof nA?(t.Vu.addReference(r.key,e),hF(t,r)):r instanceof rA?(X(Sy,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||lA(t,r.key)):ne(19791,{wu:r})}function hF(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(X(Sy,"New document in limbo: "+n),t.Iu.add(r),Ay(t))}function Ay(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new te(De.fromString(e)),r=t.fu.next();t.Au.set(r,new eF(n)),t.Ru=t.Ru.insert(n,r),YS(t.remoteStore,new fi(lr(td(n.path)),r,"TargetPurposeLimboResolution",Xh.ce))}}async function ru(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=fy.Is(l.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(l,c){const h=oe(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(c,p=>B.forEach(p.Ts,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>B.forEach(p.Es,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!Wo(d))throw d;X(py,"Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const m=h.vs.get(p),I=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(I);h.vs=h.vs.insert(p,_)}}}(r.localStore,s))}async function dF(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){X(Sy,"User change. New user:",e.toKey());const r=await qS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new Y(z.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ru(n,r.Ns)}}function fF(t,e){const n=oe(t),r=n.Au.get(e);if(r&&r.hu)return me().add(r.key);{let i=me();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function uA(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lF.bind(null,e),e.Pu.H_=Y4.bind(null,e.eventManager),e.Pu.yu=J4.bind(null,e.eventManager),e}function pF(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cF.bind(null,e),e}class dh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ad(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return y4(this.persistence,new p4,e.initialUser,this.serializer)}Cu(e){return new WS(dy.Vi,this.serializer)}Du(e){return new k4}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dh.provider={build:()=>new dh};class mF extends dh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ie(this.persistence.referenceDelegate instanceof ch,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZM(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new WS(r=>ch.Vi(r,n),this.serializer)}}class vm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dF.bind(null,this.syncEngine),await G4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Q4}()}createDatastore(e){const n=ad(e.databaseInfo.databaseId),r=P4(e.databaseInfo);return O4(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new V4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>j0(this.syncEngine,n,0),function(){return O0.v()?new O0:new S4}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const d=new tF(i,s,o,a,l,c);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);X(vs,"RemoteStore shutting down."),s.Ia.add(5),await nu(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}vm.provider={build:()=>new vm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="FirestoreClient";class gF{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=Zg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{X(Li,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Li,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bf(t,e){t.asyncQueue.verifyOperationInProgress(),X(Li,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yF(t);X(Li,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>V0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>V0(e.remoteStore,i)),t._onlineComponents=e}async function yF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Li,"Using user provided OfflineComponentProvider");try{await bf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===z.FAILED_PRECONDITION||i.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await bf(t,new dh)}}else X(Li,"Using default OfflineComponentProvider"),await bf(t,new mF(void 0));return t._offlineComponents}async function cA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Li,"Using user provided OnlineComponentProvider"),await B0(t,t._uninitializedComponentsProvider._online)):(X(Li,"Using default OnlineComponentProvider"),await B0(t,new vm))),t._onlineComponents}function _F(t){return cA(t).then(e=>e.syncEngine)}async function fh(t){const e=await cA(t),n=e.eventManager;return n.onListen=nF.bind(null,e.syncEngine),n.onUnlisten=sF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oF.bind(null,e.syncEngine),n}function vF(t,e,n,r){const i=new xy(r),s=new ky(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Ey(await fh(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Ty(await fh(t),s))}}function wF(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new xy({next:p=>{h.Nu(),o.enqueueAndForget(()=>Ty(s,d));const m=p.docs.has(a);!m&&p.fromCache?c.reject(new Y(z.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?c.reject(new Y(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new ky(td(a.path),h,{includeMetadataChanges:!0,qa:!0});return Ey(s,d)}(await fh(t),t.asyncQueue,e,n,r)),r.promise}function EF(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new xy({next:p=>{h.Nu(),o.enqueueAndForget(()=>Ty(s,d)),p.fromCache&&l.source==="server"?c.reject(new Y(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new ky(a,h,{includeMetadataChanges:!0,qa:!0});return Ey(s,d)}(await fh(t),t.asyncQueue,e,n,r)),r.promise}function TF(t,e){const n=new Pr;return t.asyncQueue.enqueueAndForget(async()=>aF(await _F(t),e,n)),n.promise}/**
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
 */function hA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF="ComponentProvider",$0=new Map;function kF(t,e,n,r,i){return new WV(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,hA(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="firestore.googleapis.com",H0=!0;class W0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dA,this.ssl=H0}else this.host=e.host,this.ssl=e.ssl??H0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=HS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JM)throw new Y(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hA(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IV;switch(r.type){case"firstParty":return new xV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$0.get(n);r&&(X(IF,"Removing Datastore"),$0.delete(n),r.terminate())}(this),Promise.resolve()}}function SF(t,e,n,r={}){var c;t=rn(t,cd);const i=Cs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&jg(`https://${a}`),s.host!==dA&&s.host!==a&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!Pi(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=Rt.MOCK_USER;else{h=K1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Y(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Rt(p)}t._authCredentials=new kV(new Zk(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Zl(n,Ke._jsonSchema))return new Ke(e,r||null,new te(De.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:ot("string",Ke._jsonSchemaVersion),referencePath:ot("string")};class Ai extends Hr{constructor(e,n,r){super(e,n,td(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new te(e))}withConverter(e){return new Ai(this.firestore,e,this._path)}}function AF(t,e,...n){if(t=ae(t),eS("collection","path",e),t instanceof cd){const r=De.fromString(e,...n);return i0(r),new Ai(t,null,r)}{if(!(t instanceof Ke||t instanceof Ai))throw new Y(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return i0(r),new Ai(t.firestore,null,r)}}function os(t,e,...n){if(t=ae(t),arguments.length===1&&(e=Zg.newId()),eS("doc","path",e),t instanceof cd){const r=De.fromString(e,...n);return r0(r),new Ke(t,null,new te(r))}{if(!(t instanceof Ke||t instanceof Ai))throw new Y(z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return r0(r),new Ke(t.firestore,t instanceof Ai?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="AsyncQueue";class G0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new KS(this,"async_queue_retry"),this._c=()=>{const r=Rf();r&&X(q0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Rf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Rf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Pr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Wo(e))throw e;X(q0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Fr("INTERNAL UNHANDLED ERROR: ",K0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=vy.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ne(47125,{Pc:K0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function K0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class jr extends cd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new G0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new G0(e),this._firestoreClient=void 0,await e}}}function xF(t,e){const n=typeof t=="object"?t:Uh(),r=typeof t=="string"?t:e||sh,i=Ps(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=W1("firestore");s&&SF(i,...s)}return i}function hd(t){if(t._terminated)throw new Y(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CF(t),t._firestoreClient}function CF(t){var r,i,s,o;const e=t._freezeSettings(),n=kF(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new gF(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(At.fromBase64String(e))}catch(n){throw new Y(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xn(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zl(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:ot("string",xn._jsonSchemaVersion),bytes:ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cr._jsonSchemaVersion}}static fromJSON(e){if(Zl(e,cr._jsonSchema))return new cr(e.latitude,e.longitude)}}cr._jsonSchemaVersion="firestore/geoPoint/1.0",cr._jsonSchema={type:ot("string",cr._jsonSchemaVersion),latitude:ot("number"),longitude:ot("number")};/**
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
 */class $n{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zl(e,$n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new $n(e.vectorValues);throw new Y(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$n._jsonSchemaVersion="firestore/vectorValue/1.0",$n._jsonSchema={type:ot("string",$n._jsonSchemaVersion),vectorValues:ot("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF=/^__.*__$/;class RF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new eu(e,this.data,n,this.fieldTransforms)}}class fA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{dataSource:t})}}class dd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new dd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ph(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(pA(this.dataSource)&&PF.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class bF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ad(e)}A(e,n,r,i=!1){return new dd({dataSource:e,methodName:n,targetDoc:r,path:It.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fd(t){const e=t._freezeSettings(),n=ad(t._databaseId);return new bF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mA(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);Ny("Data must be an object, but it was:",o,r);const a=gA(r,o);let l,c;if(s.merge)l=new dn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=ws(e,d,n);if(!o.contains(p))throw new Y(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);vA(h,p)||h.push(p)}l=new dn(h),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new RF(new Yt(a),l,c)}class pd extends Ko{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pd}}function NF(t,e,n){return new dd({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Py extends Ko{_toFieldTransform(e){return new oy(e.path,new Vl)}isEqual(e){return e instanceof Py}}class Ry extends Ko{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=NF(this,e,!0),r=this.Sc.map(s=>Qo(s,n)),i=new bo(r);return new oy(e.path,i)}isEqual(e){return e instanceof Ry&&Pi(this.Sc,e.Sc)}}class by extends Ko{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new Fl(e.serializer,AS(e.serializer,this.bc));return new oy(e.path,n)}isEqual(e){return e instanceof by&&this.bc===e.bc}}function DF(t,e,n,r){const i=t.A(1,e,n);Ny("Data must be an object, but it was:",i,r);const s=[],o=Yt.empty();zi(r,(l,c)=>{const h=_A(e,l,n);c=ae(c);const d=i.fc(h);if(c instanceof pd)s.push(h);else{const p=Qo(c,d);p!=null&&(s.push(h),o.set(h,p))}});const a=new dn(s);return new fA(o,a,i.fieldTransforms)}function OF(t,e,n,r,i,s){const o=t.A(1,e,n),a=[ws(e,r,n)],l=[i];if(s.length%2!=0)throw new Y(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(ws(e,s[p])),l.push(s[p+1]);const c=[],h=Yt.empty();for(let p=a.length-1;p>=0;--p)if(!vA(c,a[p])){const m=a[p];let I=l[p];I=ae(I);const _=o.fc(m);if(I instanceof pd)c.push(m);else{const S=Qo(I,_);S!=null&&(c.push(m),h.set(m,S))}}const d=new dn(c);return new fA(h,d,o.fieldTransforms)}function LF(t,e,n,r=!1){return Qo(n,t.A(r?4:3,e))}function Qo(t,e){if(yA(t=ae(t)))return Ny("Unsupported field value:",e,t),gA(t,e);if(t instanceof Ko)return function(r,i){if(!pA(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Qo(a,i.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:uh(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uh(i.serializer,s)}}if(r instanceof cr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xn)return{bytesValue:VS(i.serializer,r._byteString)};if(r instanceof Ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $n)return function(o,a){const l=o instanceof $n?o.toArray():o;return{mapValue:{fields:{[uS]:{stringValue:hS},[oh]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.yc("VectorValues must only contain numeric values.");return sy(a.serializer,h)})}}}}}}(r,i);if($S(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Jh(r)}`)}(t,e)}function gA(t,e){const n={};return rS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zi(t,(r,i)=>{const s=Qo(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof cr||t instanceof xn||t instanceof Ke||t instanceof Ko||t instanceof $n||$S(t))}function Ny(t,e,n){if(!yA(n)||!tS(n)){const r=Jh(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ws(t,e,n){if((e=ae(e))instanceof Cy)return e._internalPath;if(typeof e=="string")return _A(t,e);throw ph("Field path arguments must be of type string or ",t,!1,void 0,n)}const VF=new RegExp("[~\\*/\\[\\]]");function _A(t,e,n){if(e.search(VF)>=0)throw ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cy(...e.split("."))._internalPath}catch{throw ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ph(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Y(z.INVALID_ARGUMENT,a+t+l)}function vA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{convertValue(e,n="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[oh].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Je(o.doubleValue));return new $n(n)}convertGeoPoint(e){return new cr(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ed(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Nl(e));default:return null}}convertTimestamp(e){const n=bi(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ie(BS(r),9688,{name:e});const i=new Dl(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||Fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Dy extends MF{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function Q0(){return new Py("serverTimestamp")}function N$(...t){return new Ry("arrayUnion",t)}function D$(t){return new by("increment",t)}const Y0="@firebase/firestore",J0="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ws("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FF extends wA{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oy{}class Ly extends Oy{}function O$(t,e,...n){let r=[];e instanceof Oy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Vy).length,a=s.filter(l=>l instanceof md).length;if(o>1||o>0&&a>0)throw new Y(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class md extends Ly{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new md(e,n,r)}_apply(e){const n=this._parse(e);return TA(e._query,n),new Hr(e.firestore,e.converter,cm(e._query,n))}_parse(e){const n=fd(e.firestore);return function(s,o,a,l,c,h,d){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){eE(d,h);const I=[];for(const _ of d)I.push(Z0(l,s,_));p={arrayValue:{values:I}}}else p=Z0(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||eE(d,h),p=LF(a,o,d,h==="in"||h==="not-in");return st.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function L$(t,e,n){const r=e,i=ws("where",t);return md._create(i,r,n)}class Vy extends Oy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)TA(o,l),o=cm(o,l)}(e._query,n),new Hr(e.firestore,e.converter,cm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class My extends Ly{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new My(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Y(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ll(s,o)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,lM(e._query,n))}}function V$(t,e="asc"){const n=e,r=ws("orderBy",t);return My._create(r,n)}class Fy extends Ly{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Fy(e,n,r)}_apply(e){return new Hr(e.firestore,e.converter,lh(e._query,this._limit,this._limitType))}}function M$(t){return OV("limit",t),Fy._create("limit",t,"F")}function Z0(t,e,n){if(typeof(n=ae(n))=="string"){if(n==="")throw new Y(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vS(e)&&n.indexOf("/")!==-1)throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return d0(t,new te(r))}if(n instanceof Ke)return d0(t,n._key);throw new Y(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function eE(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function IA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ja{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends wA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ws("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=as._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}as._jsonSchemaVersion="firestore/documentSnapshot/1.0",as._jsonSchema={type:ot("string",as._jsonSchemaVersion),bundleSource:ot("string","DocumentSnapshot"),bundleName:ot("string"),bundle:ot("string")};class vc extends as{data(e={}){return super.data(e)}}class ls{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ja(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vc(this._firestore,this._userDataWriter,r.key,r,new ja(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new vc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ja(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new vc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ja(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:UF(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}/**
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
 */ls._jsonSchemaVersion="firestore/querySnapshot/1.0",ls._jsonSchema={type:ot("string",ls._jsonSchemaVersion),bundleSource:ot("string","QuerySnapshot"),bundleName:ot("string"),bundle:ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){t=rn(t,Ke);const e=rn(t.firestore,jr),n=hd(e);return wF(n,t._key).then(r=>SA(e,t,r))}function F$(t){t=rn(t,Hr);const e=rn(t.firestore,jr),n=hd(e),r=new Dy(e);return EA(t._query),EF(n,t._query).then(i=>new ls(e,r,t,i))}function tE(t,e,n){t=rn(t,Ke);const r=rn(t.firestore,jr),i=IA(t.converter,e,n),s=fd(r);return gd(r,[mA(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rn.none())])}function Ul(t,e,n,...r){t=rn(t,Ke);const i=rn(t.firestore,jr),s=fd(i);let o;return o=typeof(e=ae(e))=="string"||e instanceof Cy?OF(s,"updateDoc",t._key,e,n,r):DF(s,"updateDoc",t._key,e),gd(i,[o.toMutation(t._key,Rn.exists(!0))])}function U$(t){return gd(rn(t.firestore,jr),[new ay(t._key,Rn.none())])}function jF(t,e){const n=rn(t.firestore,jr),r=os(t),i=IA(t.converter,e),s=fd(t.firestore);return gd(n,[mA(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Rn.exists(!1))]).then(()=>r)}function j$(t,...e){var c,h,d;t=ae(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||X0(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(X0(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let s,o,a;if(t instanceof Ke)o=rn(t.firestore,jr),a=td(t._key.path),s={next:p=>{e[r]&&e[r](SA(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=rn(t,Hr);o=rn(p.firestore,jr),a=p._query;const m=new Dy(o);s={next:I=>{e[r]&&e[r](new ls(o,m,p,I))},error:e[r+1],complete:e[r+2]},EA(t._query)}const l=hd(o);return vF(l,a,i,s)}function gd(t,e){const n=hd(t);return TF(n,e)}function SA(t,e,n){const r=n.docs.get(e._key),i=new Dy(t);return new as(t,i,e._key,r,new ja(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){TV(Rs),Wn(new Dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new jr(new SV(r.getProvider("auth-internal")),new CV(o,r.getProvider("app-check-internal")),qV(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(Y0,J0,e),tn(Y0,J0,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="firebasestorage.googleapis.com",xA="storageBucket",zF=2*60*1e3,BF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Gn{constructor(e,n,r=0){super(Nf(e),`Firebase Storage: ${n} (${Nf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qe||(Qe={}));function Nf(t){return"storage/"+t}function Uy(){const t="An unknown error occurred, please check the error payload for server response.";return new Ye(Qe.UNKNOWN,t)}function $F(t){return new Ye(Qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function HF(t){return new Ye(Qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ye(Qe.UNAUTHENTICATED,t)}function qF(){return new Ye(Qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GF(t){return new Ye(Qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function KF(){return new Ye(Qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QF(){return new Ye(Qe.CANCELED,"User canceled the upload/download.")}function YF(t){return new Ye(Qe.INVALID_URL,"Invalid URL '"+t+"'.")}function JF(t){return new Ye(Qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function XF(){return new Ye(Qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+xA+"' property when initializing the app?")}function ZF(){return new Ye(Qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eU(){return new Ye(Qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tU(t){return new Ye(Qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function wm(t){return new Ye(Qe.INVALID_ARGUMENT,t)}function CA(){return new Ye(Qe.APP_DELETED,"The Firebase app was deleted.")}function nU(t){return new Ye(Qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function il(t,e){return new Ye(Qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Aa(t){throw new Ye(Qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=fn.makeFromUrl(e,n)}catch{return new fn(e,"")}if(r.path==="")return r;throw JF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),I={bucket:1,path:3},_=n===AA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",y=new RegExp(`^https?://${_}/${i}/${S}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:m,indices:I,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<T.length;L++){const U=T[L],O=U.regex.exec(e);if(O){const x=O[U.indices.bucket];let v=O[U.indices.path];v||(v=""),r=new fn(x,v),U.postModify(r);break}}if(r==null)throw YF(e);return r}}class rU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...S){c||(c=!0,e.apply(null,S))}function d(S){i=setTimeout(()=>{i=null,t(m,l())},S)}function p(){s&&clearTimeout(s)}function m(S,...y){if(c){p();return}if(S){p(),h.call(null,S,...y);return}if(l()||o){p(),h.call(null,S,...y);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,d(T)}let I=!1;function _(S){I||(I=!0,p(),!c&&(i!==null?(S||(a=2),clearTimeout(i),d(0)):S||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function sU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(t){return t!==void 0}function aU(t){return typeof t=="object"&&!Array.isArray(t)}function jy(t){return typeof t=="string"||t instanceof String}function nE(t){return zy()&&t instanceof Blob}function zy(){return typeof Blob<"u"}function rE(t,e,n,r){if(r<e)throw wm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function PA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var us;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function lU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(e,n,r,i,s,o,a,l,c,h,d,p=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,_)=>{this.resolve_=I,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===us.NO_ERROR,l=s.getStatus();if(!a||lU(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===us.ABORT;r(!1,new Wu(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Wu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Uy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?CA():QF();o(l)}else{const l=KF();o(l)}};this.canceled_?n(!1,new Wu(!1,null,!0)):this.backoffId_=iU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pU(t,e,n,r,i,s,o=!0,a=!1){const l=PA(t.urlParams),c=t.url+l,h=Object.assign({},t.headers);return dU(h,e),cU(h,n),hU(h,s),fU(h,r),new uU(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gU(...t){const e=mU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(zy())return new Blob(t);throw new Ye(Qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _U(t){if(typeof atob>"u")throw tU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Df{constructor(e,n){this.data=e,this.contentType=n||null}}function vU(t,e){switch(t){case sr.RAW:return new Df(RA(e));case sr.BASE64:case sr.BASE64URL:return new Df(bA(t,e));case sr.DATA_URL:return new Df(EU(e),TU(e))}throw Uy()}function RA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wU(t){let e;try{e=decodeURIComponent(t)}catch{throw il(sr.DATA_URL,"Malformed data URL.")}return RA(e)}function bA(t,e){switch(t){case sr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw il(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw il(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_U(e)}catch(i){throw i.message.includes("polyfill")?i:il(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class NA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw il(sr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=IU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function EU(t){const e=new NA(t);return e.base64?bA(sr.BASE64,e.rest):wU(e.rest)}function TU(t){return new NA(t).contentType}function IU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){let r=0,i="";nE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(nE(this.data_)){const r=this.data_,i=yU(r,e,n);return i===null?null:new li(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new li(r,!0)}}static getBlob(...e){if(zy()){const n=e.map(r=>r instanceof li?r.data_:r);return new li(gU.apply(null,n))}else{const n=e.map(o=>jy(o)?vU(sr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new li(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){let e;try{e=JSON.parse(t)}catch{return null}return aU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function OA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(t,e){return e}class Ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||AU}}let qu=null;function xU(t){return!jy(t)||t.length<2?t:OA(t)}function LA(){if(qu)return qu;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(s,o){return xU(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ft("size");return i.xform=r,t.push(i),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),qu=t,qu}function CU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new fn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function PU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return CU(r,t),r}function VA(t,e,n){const r=DA(e);return r===null?null:PU(t,r,n)}function RU(t,e,n,r){const i=DA(e);if(i===null||!jy(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),m=By(p,n,r),I=PA({alt:"media",token:c});return m+I})[0]}function bU(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class MA{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){if(!t)throw Uy()}function NU(t,e){function n(r,i){const s=VA(t,i,e);return FA(s!==null),s}return n}function DU(t,e){function n(r,i){const s=VA(t,i,e);return FA(s!==null),RU(s,i,t.host,t._protocol)}return n}function UA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qF():i=WF():n.getStatus()===402?i=HF(t.bucket):n.getStatus()===403?i=GF(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function OU(t){const e=UA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$F(t.path)),s.serverResponse=i.serverResponse,s}return n}function LU(t,e,n){const r=e.fullServerUrl(),i=By(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new MA(i,s,DU(t,n),o);return a.errorHandler=OU(e),a}function VU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function MU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=VU(null,e)),r}function FU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let L=0;L<2;L++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=MU(e,r,i),h=bU(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",m=li.getBlob(d,r,p);if(m===null)throw ZF();const I={name:c.fullPath},_=By(s,t.host,t._protocol),S="POST",y=t.maxUploadRetryTime,E=new MA(_,S,NU(t,n),y);return E.urlParams=I,E.headers=o,E.body=m.uploadData(),E.errorHandler=UA(e),E}class UU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Aa("cannot .send() more than once");if(Cs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jU extends UU{initXhr(){this.xhr_.responseType="text"}}function jA(){return new jU}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this._service=e,n instanceof fn?this._location=n:this._location=fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Es(e,n)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OA(this._location.path)}get storage(){return this._service}get parent(){const e=kU(this._location.path);if(e===null)return null;const n=new fn(this._location.bucket,e);return new Es(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nU(e)}}function zU(t,e,n){t._throwIfRoot("uploadBytes");const r=FU(t.storage,t._location,LA(),new li(e,!0),n);return t.storage.makeRequestWithTokens(r,jA).then(i=>({metadata:i,ref:t}))}function BU(t){t._throwIfRoot("getDownloadURL");const e=LU(t.storage,t._location,LA());return t.storage.makeRequestWithTokens(e,jA).then(n=>{if(n===null)throw eU();return n})}function $U(t,e){const n=SU(t._location.path,e),r=new fn(t._location.bucket,n);return new Es(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t){return/^[A-Za-z]+:\/\//.test(t)}function WU(t,e){return new Es(t,e)}function zA(t,e){if(t instanceof $y){const n=t;if(n._bucket==null)throw XF();const r=new Es(n,n._bucket);return e!=null?zA(r,e):r}else return e!==void 0?$U(t,e):t}function qU(t,e){if(e&&HU(e)){if(t instanceof $y)return WU(t,e);throw wm("To use ref(service, url), the first argument must be a Storage instance.")}else return zA(t,e)}function iE(t,e){const n=e==null?void 0:e[xA];return n==null?null:fn.makeFromBucketSpec(n,t)}function GU(t,e,n,r={}){t.host=`${e}:${n}`;const i=Cs(e);i&&jg(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:K1(s,t.app.options.projectId))}class $y{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=AA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zF,this._maxUploadRetryTime=BF,this._requests=new Set,i!=null?this._bucket=fn.makeFromBucketSpec(i,this._host):this._bucket=iE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=iE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(it(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Es(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rU(CA());{const o=pU(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const sE="@firebase/storage",oE="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="storage";function z$(t,e,n){return t=ae(t),zU(t,e,n)}function B$(t){return t=ae(t),BU(t)}function $$(t,e){return t=ae(t),qU(t,e)}function KU(t=Uh(),e){t=ae(t);const r=Ps(t,BA).getImmediate({identifier:e}),i=W1("storage");return i&&QU(r,...i),r}function QU(t,e,n,r={}){GU(t,e,n,r)}function YU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $y(n,r,i,e,Rs)}function JU(){Wn(new Dn(BA,YU,"PUBLIC").setMultipleInstances(!0)),tn(sE,oE,""),tn(sE,oE,"esm2020")}JU();const $A="@firebase/installations",Hy="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=1e4,WA=`w:${Hy}`,qA="FIS_v2",XU="https://firebaseinstallations.googleapis.com/v1",ZU=60*60*1e3,ej="installations",tj="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ts=new xs(ej,tj,nj);function GA(t){return t instanceof Gn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA({projectId:t}){return`${XU}/projects/${t}/installations`}function QA(t){return{token:t.token,requestStatus:2,expiresIn:ij(t.expiresIn),creationTime:Date.now()}}async function YA(t,e){const r=(await e.json()).error;return Ts.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function JA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rj(t,{refreshToken:e}){const n=JA(t);return n.append("Authorization",sj(e)),n}async function XA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ij(t){return Number(t.replace("s","000"))}function sj(t){return`${qA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=KA(t),i=JA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:qA,appId:t.appId,sdkVersion:WA},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await XA(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:QA(c.authToken)}}else throw await YA("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lj=/^[cdef][\w-]{21}$/,Em="";function uj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cj(t);return lj.test(n)?n:Em}catch{return Em}}function cj(t){return aj(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new Map;function tx(t,e){const n=yd(t);nx(n,e),hj(n,e)}function nx(t,e){const n=ex.get(t);if(n)for(const r of n)r(e)}function hj(t,e){const n=dj();n&&n.postMessage({key:t,fid:e}),fj()}let rs=null;function dj(){return!rs&&"BroadcastChannel"in self&&(rs=new BroadcastChannel("[Firebase] FID Change"),rs.onmessage=t=>{nx(t.data.key,t.data.fid)}),rs}function fj(){ex.size===0&&rs&&(rs.close(),rs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pj="firebase-installations-database",mj=1,Is="firebase-installations-store";let Of=null;function Wy(){return Of||(Of=Fh(pj,mj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Is)}}})),Of}async function mh(t,e){const n=yd(t),i=(await Wy()).transaction(Is,"readwrite"),s=i.objectStore(Is),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&tx(t,e.fid),e}async function rx(t){const e=yd(t),r=(await Wy()).transaction(Is,"readwrite");await r.objectStore(Is).delete(e),await r.done}async function _d(t,e){const n=yd(t),i=(await Wy()).transaction(Is,"readwrite"),s=i.objectStore(Is),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&tx(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(t){let e;const n=await _d(t.appConfig,r=>{const i=gj(r),s=yj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Em?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gj(t){const e=t||{fid:uj(),registrationStatus:0};return ix(e)}function yj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ts.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_j(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vj(t)}:{installationEntry:e}}async function _j(t,e){try{const n=await oj(t,e);return mh(t.appConfig,n)}catch(n){throw GA(n)&&n.customData.serverCode===409?await rx(t.appConfig):await mh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vj(t){let e=await aE(t.appConfig);for(;e.registrationStatus===1;)await ZA(100),e=await aE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qy(t);return r||n}return e}function aE(t){return _d(t,e=>{if(!e)throw Ts.create("installation-not-found");return ix(e)})}function ix(t){return wj(t)?{fid:t.fid,registrationStatus:0}:t}function wj(t){return t.registrationStatus===1&&t.registrationTime+HA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ej({appConfig:t,heartbeatServiceProvider:e},n){const r=Tj(t,n),i=rj(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:WA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await XA(()=>fetch(r,a));if(l.ok){const c=await l.json();return QA(c)}else throw await YA("Generate Auth Token",l)}function Tj(t,{fid:e}){return`${KA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(t,e=!1){let n;const r=await _d(t.appConfig,s=>{if(!sx(s))throw Ts.create("not-registered");const o=s.authToken;if(!e&&Sj(o))return s;if(o.requestStatus===1)return n=Ij(t,e),s;{if(!navigator.onLine)throw Ts.create("app-offline");const a=xj(s);return n=kj(t,a),a}});return n?await n:r.authToken}async function Ij(t,e){let n=await lE(t.appConfig);for(;n.authToken.requestStatus===1;)await ZA(100),n=await lE(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gy(t,e):r}function lE(t){return _d(t,e=>{if(!sx(e))throw Ts.create("not-registered");const n=e.authToken;return Cj(n)?{...e,authToken:{requestStatus:0}}:e})}async function kj(t,e){try{const n=await Ej(t,e),r={...e,authToken:n};return await mh(t.appConfig,r),n}catch(n){if(GA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rx(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await mh(t.appConfig,r)}throw n}}function sx(t){return t!==void 0&&t.registrationStatus===2}function Sj(t){return t.requestStatus===2&&!Aj(t)}function Aj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ZU}function xj(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Cj(t){return t.requestStatus===1&&t.requestTime+HA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pj(t){const e=t,{installationEntry:n,registrationPromise:r}=await qy(e);return r?r.catch(console.error):Gy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rj(t,e=!1){const n=t;return await bj(n),(await Gy(n,e)).token}async function bj(t){const{registrationPromise:e}=await qy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nj(t){if(!t||!t.options)throw Lf("App Configuration");if(!t.name)throw Lf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Lf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Lf(t){return Ts.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox="installations",Dj="installations-internal",Oj=t=>{const e=t.getProvider("app").getImmediate(),n=Nj(e),r=Ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lj=t=>{const e=t.getProvider("app").getImmediate(),n=Ps(e,ox).getImmediate();return{getId:()=>Pj(n),getToken:i=>Rj(n,i)}};function Vj(){Wn(new Dn(ox,Oj,"PUBLIC")),Wn(new Dn(Dj,Lj,"PRIVATE"))}Vj();tn($A,Hy);tn($A,Hy,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mj="/firebase-messaging-sw.js",Fj="/firebase-cloud-messaging-push-scope",ax="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Uj="https://fcmregistrations.googleapis.com/v1",lx="google.c.a.c_id",jj="google.c.a.c_l",zj="google.c.a.ts",Bj="google.c.a.e",uE=1e4;var cE;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(cE||(cE={}));/**
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
 */var jl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(jl||(jl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function $j(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="fcm_token_details_db",Hj=5,hE="fcm_token_object_Store";async function Wj(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Vf))return null;let e=null;return(await Fh(Vf,Hj,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(hE))return;const a=o.objectStore(hE),l=await a.index("fcmSenderId").get(t);if(await a.clear(),!!l){if(i===2){const c=l;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Er(c.vapidKey)}}}else if(i===3){const c=l;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Er(c.auth),p256dh:Er(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Er(c.vapidKey)}}}else if(i===4){const c=l;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Er(c.auth),p256dh:Er(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Er(c.vapidKey)}}}}}})).close(),await wf(Vf),await wf("fcm_vapid_details_db"),await wf("undefined"),qj(e)?e:null}function qj(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gj="firebase-messaging-database",Kj=1,zl="firebase-messaging-store";let Mf=null;function ux(){return Mf||(Mf=Fh(Gj,Kj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zl)}}})),Mf}async function Qj(t){const e=cx(t),r=await(await ux()).transaction(zl).objectStore(zl).get(e);if(r)return r;{const i=await Wj(t.appConfig.senderId);if(i)return await Ky(t,i),i}}async function Ky(t,e){const n=cx(t),i=(await ux()).transaction(zl,"readwrite");return await i.objectStore(zl).put(e,n),await i.done,e}function cx({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Bt=new xs("messaging","Messaging",Yj);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jj(t,e){const n=await Yy(t),r=hx(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Qy(t.appConfig),i)).json()}catch(o){throw Bt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Bt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Bt.create("token-subscribe-no-token");return s.token}async function Xj(t,e){const n=await Yy(t),r=hx(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Qy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Bt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Bt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Bt.create("token-update-no-token");return s.token}async function Zj(t,e){const r={method:"DELETE",headers:await Yy(t)};try{const s=await(await fetch(`${Qy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Bt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Bt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Qy({projectId:t}){return`${Uj}/projects/${t}/registrations`}async function Yy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function hx({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==ax&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6=7*24*60*60*1e3;async function t6(t){const e=await r6(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Er(e.getKey("auth")),p256dh:Er(e.getKey("p256dh"))},r=await Qj(t.firebaseDependencies);if(r){if(i6(r.subscriptionOptions,n))return Date.now()>=r.createTime+e6?n6(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Zj(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return dE(t.firebaseDependencies,n)}else return dE(t.firebaseDependencies,n)}async function n6(t,e){try{const n=await Xj(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Ky(t.firebaseDependencies,r),n}catch(n){throw n}}async function dE(t,e){const r={token:await Jj(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ky(t,r),r.token}async function r6(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$j(e)})}function i6(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return s6(e,t),o6(e,t),a6(e,t),e}function s6(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function o6(t,e){e.data&&(t.data=e.data)}function a6(t,e){var i,s,o,a;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(a=e.fcmOptions)==null?void 0:a.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l6(t){return typeof t=="object"&&!!t&&lx in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */u6("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function u6(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c6(t){if(!t||!t.options)throw Ff("App Configuration Object");if(!t.name)throw Ff("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ff(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ff(t){return Bt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=c6(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d6(t){try{t.swRegistration=await navigator.serviceWorker.register(Mj,{scope:Fj}),t.swRegistration.update().catch(()=>{}),await f6(t.swRegistration)}catch(e){throw Bt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function f6(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${uE} ms`)),uE),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p6(t,e){if(!e&&!t.swRegistration&&await d6(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Bt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m6(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=ax)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e){if(!navigator)throw Bt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Bt.create("permission-blocked");return await m6(t,e==null?void 0:e.vapidKey),await p6(t,e==null?void 0:e.serviceWorkerRegistration),t6(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g6(t,e,n){const r=y6(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[lx],message_name:n[jj],message_time:n[zj],message_device_time:Math.floor(Date.now()/1e3)})}function y6(t){switch(t){case jl.NOTIFICATION_CLICKED:return"notification_open";case jl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _6(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===jl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(fE(n)):t.onMessageHandler.next(fE(n)));const r=n.data;l6(r)&&r[Bj]==="1"&&await g6(t,n.messageType,r)}const pE="@firebase/messaging",mE="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v6=t=>{const e=new h6(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>_6(e,n)),e},w6=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>dx(e,r)}};function E6(){Wn(new Dn("messaging",v6,"PUBLIC")),Wn(new Dn("messaging-internal",w6,"PRIVATE")),tn(pE,mE),tn(pE,mE,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(){try{await Y1()}catch{return!1}return typeof window<"u"&&Q1()&&pD()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T6(t=Uh()){return fx().then(e=>{if(!e)throw Bt.create("unsupported-browser")},e=>{throw Bt.create("indexed-db-unsupported")}),Ps(ae(t),"messaging").getImmediate()}async function I6(t,e){return t=ae(t),dx(t,e)}E6();const k6={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},vd=Z1(k6),In=_V(vd);Q2(In,Nk);const cs=xF(vd),H$=KU(vd),Uf=new nr;let Tm=null;const S6="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";fx().then(t=>{t&&(Tm=T6(vd))}).catch(t=>console.log("Firebase messaging not supported:",t));/*! Capacitor: https://capacitorjs.com/ - MIT License */var ks;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(ks||(ks={}));class wc extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const A6=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},x6=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:A6(t),s=()=>i()!=="web",o=d=>{const p=c.get(d);return!!(p!=null&&p.platforms.has(i())||a(d))},a=d=>{var p;return(p=n.PluginHeaders)===null||p===void 0?void 0:p.find(m=>m.name===d)},l=d=>t.console.error(d),c=new Map,h=(d,p={})=>{const m=c.get(d);if(m)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),m.proxy;const I=i(),_=a(d);let S;const y=async()=>(!S&&I in p?S=typeof p[I]=="function"?S=await p[I]():S=p[I]:e!==null&&!S&&"web"in p&&(S=typeof p.web=="function"?S=await p.web():S=p.web),S),E=(v,A)=>{var P,C;if(_){const b=_==null?void 0:_.methods.find(k=>A===k.name);if(b)return b.rtype==="promise"?k=>n.nativePromise(d,A.toString(),k):(k,q)=>n.nativeCallback(d,A.toString(),k,q);if(v)return(P=v[A])===null||P===void 0?void 0:P.bind(v)}else{if(v)return(C=v[A])===null||C===void 0?void 0:C.bind(v);throw new wc(`"${d}" plugin is not implemented on ${I}`,ks.Unimplemented)}},T=v=>{let A;const P=(...C)=>{const b=y().then(k=>{const q=E(k,v);if(q){const J=q(...C);return A=J==null?void 0:J.remove,J}else throw new wc(`"${d}.${v}()" is not implemented on ${I}`,ks.Unimplemented)});return v==="addListener"&&(b.remove=async()=>A()),b};return P.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(P,"name",{value:v,writable:!1,configurable:!1}),P},L=T("addListener"),U=T("removeListener"),O=(v,A)=>{const P=L({eventName:v},A),C=async()=>{const k=await P;U({eventName:v,callbackId:k},A)},b=new Promise(k=>P.then(()=>k({remove:C})));return b.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await C()},b},x=new Proxy({},{get(v,A){switch(A){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return _?O:L;case"removeListener":return U;default:return T(A)}}});return r[d]=x,c.set(d,{name:d,proxy:x,platforms:new Set([...Object.keys(p),..._?[I]:[]])}),x};return n.convertFileSrc||(n.convertFileSrc=d=>d),n.getPlatform=i,n.handleError=l,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=h,n.Exception=wc,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},C6=t=>t.Capacitor=x6(t),zr=C6(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),$i=zr.registerPlugin;class wd{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new zr.Exception(e,ks.Unimplemented)}unavailable(e="not available"){return new zr.Exception(e,ks.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const P6=$i("WebView"),gE=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),yE=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class R6 extends wd{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=yE(i).trim(),s=yE(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=gE(e.key),r=gE(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const b6=$i("CapacitorCookies",{web:()=>new R6}),N6=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),D6=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},O6=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let a,l;return Array.isArray(o)?(l="",o.forEach(c=>{a=e?encodeURIComponent(c):c,l+=`${s}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${s}=${a}`),`${r}&${l}`},"").substr(1):null,px=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=D6(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,a]of Object.entries(t.data||{}))s.set(o,a);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((a,l)=>{s.append(l,a)});else for(const a of Object.keys(t.data))s.append(a,t.data[a]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class L6 extends wd{async request(e){const n=px(e,e.webFetchExtra),r=O6(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:a="text"}=s.ok?e:{};o.includes("application/json")&&(a="json");let l,c;switch(a){case"arraybuffer":case"blob":c=await s.blob(),l=await N6(c);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const h={};return s.headers.forEach((d,p)=>{h[p]=d}),{data:l,headers:h,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const V6=$i("CapacitorHttp",{web:()=>new L6});var Im;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Im||(Im={}));var km;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(km||(km={}));class M6 extends wd{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const F6=$i("SystemBars",{web:()=>new M6}),W$=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:zr,CapacitorCookies:b6,CapacitorException:wc,CapacitorHttp:V6,get ExceptionCode(){return ks},get SystemBarType(){return km},SystemBars:F6,get SystemBarsStyle(){return Im},WebPlugin:wd,WebView:P6,buildRequestInit:px,registerPlugin:$i},Symbol.toStringTag,{value:"Module"}));var _E;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(_E||(_E={}));var vE;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(vE||(vE={}));const U6=$i("FirebaseAuthentication",{web:()=>Pe(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),mx=M.createContext();function Yo(){return M.useContext(mx)}function j6({children:t}){const[e,n]=M.useState(null),[r,i]=M.useState(!0),s=M.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},a=async _=>{if(!_){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",_.email);try{const S=os(cs,"users",_.uid),y=await kA(S),E=_.email==="prince86944@gmail.com";if(y.exists()){const T=y.data();console.log("[AUTH] Existing user data found:",T.role),E&&T.role!==o.SUPER_ADMIN?(await Ul(S,{role:o.SUPER_ADMIN}),n({..._,...T,role:o.SUPER_ADMIN})):n({..._,...T})}else{console.log("[AUTH] No existing profile. Creating new entry...");const T={uid:_.uid,name:_.displayName||"Scholar",email:_.email,phone:_.phoneNumber||"",createdAt:Q0(),role:E?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await tE(S,T),n({..._,...T})}}catch(S){console.error("[AUTH] Profile sync critical failure:",S),n({uid:_.uid,email:_.email,name:_.displayName||"Scholar",role:_.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function l(_,S,y,E){const T=await j2(In,_,S),L={uid:T.user.uid,name:y,email:_,phone:E,createdAt:Q0(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await tE(os(cs,"users",T.user.uid),L),T.user}async function c(_,S){return z2(In,_,S)}async function h(){var S;if(zr.isNativePlatform())try{const y=await U6.signInWithGoogle();if((S=y==null?void 0:y.credential)!=null&&S.idToken){const E=nr.credential(y.credential.idToken),T=await qh(In,E);return await a(T.user),T.user}throw new Error("Native Google Login failed")}catch(y){console.error("Native Google Login Error:",y);const E=await qw(In,Uf);return await a(E.user),E.user}else try{const y=await qw(In,Uf);return await a(y.user),y.user}catch(y){return console.warn("Popup failed or blocked, falling back to Redirect...",y),await RL(In,Uf)}}function d(_){return window.recaptchaVerifier||(window.recaptchaVerifier=new vL(In,"recaptcha-container",{size:"invisible"})),EL(In,_,window.recaptchaVerifier)}async function p(_){e&&(await Ul(os(cs,"users",e.uid),_),n(S=>({...S,..._})))}function m(){return Z2(In)}M.useEffect(()=>X2(In,async S=>{e||i(!0);try{S?await a(S):n(null)}catch(y){console.error("Auth sync error:",y)}finally{i(!1)}}),[]),M.useEffect(()=>{DL(In).then(async _=>{_!=null&&_.user&&(console.log("[AUTH] Redirect result success:",_.user.email),await a(_.user))}).catch(_=>{console.error("[AUTH] Redirect result error:",_)})},[]);const I={user:e,ROLES:o,login:c,signup:l,logout:m,googleLogin:h,setupRecaptcha:d,updateProfileData:p,loading:r};return N.jsx(mx.Provider,{value:I,children:t})}const vr=$i("Preferences",{web:()=>Pe(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),be=$i("AppBlocker"),gx=M.createContext(null);function wE(){return M.useContext(gx)}function z6({children:t}){const{user:e}=Yo(),n=(k,q)=>{try{const J=localStorage.getItem(k);return J!==null?JSON.parse(J):q}catch{return q}},[r,i]=M.useState(!1),[s,o]=M.useState(1500),[a,l]=M.useState("OTHERS"),[c,h]=M.useState(25),[d,p]=M.useState(0),[m,I]=M.useState("COUNTDOWN"),[_,S]=M.useState(!1),[y,E]=M.useState(()=>n("allowedPackages","")),[T,L]=M.useState([]),U=M.useRef(null),O=()=>{var k,q,J,ve;return zr.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((q=(k=window.Capacitor).isNativePlatform)==null?void 0:q.call(k))||((ve=(J=window.Capacitor).isPluginAvailable)==null?void 0:ve.call(J,"AppBlocker")))||zr.isPluginAvailable("AppBlocker")},x=async()=>{if(O())try{if(be&&be.getInstalledApps){const{apps:k}=await be.getInstalledApps();L(k.sort((q,J)=>q.name.localeCompare(J.name)))}}catch(k){console.error("Fetch Apps Error:",k)}};M.useEffect(()=>{(async()=>{if(O()){await x();try{const q=await vr.get({key:"countdownEndTime"}),J=Number(q.value||0);if(J>Date.now()){const ve=Math.ceil((J-Date.now())/1e3);o(ve),i(!0),I("COUNTDOWN");const ke=await vr.get({key:"allowedPackages"});ke.value&&E(ke.value),console.log("Restored active focus session on initialization:",ve,"seconds remaining")}else be&&be.stopBlocker&&await be.stopBlocker(),await vr.set({key:"isBlockerActive",value:"false"}),await vr.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(q){console.error("Error restoring blocker state:",q)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const v=k=>{if(E(k),localStorage.setItem("allowedPackages",JSON.stringify(k)),O()){vr.set({key:"allowedPackages",value:k});try{const q=(k||"").split(",").filter(Boolean);q.includes("com.apnacollegebihar.online")||q.push("com.apnacollegebihar.online"),be&&be.setAllowedPackages&&be.setAllowedPackages({packages:q})}catch{}}},A=k=>{if(i(k),localStorage.setItem("timerActive",JSON.stringify(k)),O())try{if(k){if(be&&be.setBlockerActive&&be.setBlockerActive({active:!0}),m==="COUNTDOWN"){be&&be.startCountdown&&be.startCountdown({minutes:Math.ceil(s/60)});const J=Date.now()+s*1e3;vr.set({key:"countdownEndTime",value:String(J)})}const q=(y||"").split(",").filter(Boolean);q.includes("com.apnacollegebihar.online")||q.push("com.apnacollegebihar.online"),be&&be.setAllowedPackages&&be.setAllowedPackages({packages:q}),vr.set({key:"isBlockerActive",value:"true"})}else be&&be.stopBlocker&&be.stopBlocker(),vr.set({key:"isBlockerActive",value:"false"}),vr.set({key:"countdownEndTime",value:"0"})}catch(q){console.error("Native Blocker Error:",q)}},P=k=>{S(k),localStorage.setItem("focusBroken",JSON.stringify(k))};M.useEffect(()=>{const k=q=>{q.key==="timerActive"&&i(JSON.parse(q.newValue)),q.key==="focusBroken"&&S(JSON.parse(q.newValue))};return window.addEventListener("storage",k),()=>window.removeEventListener("storage",k)},[]),M.useEffect(()=>{r||o(m==="COUNTDOWN"?c*60+d:0)},[m,c,d,r]);const C=async(k=null)=>{if(!e)return;const q=k||(m==="STOPWATCH"?s:c*60+d-s);if(q<5){A(!1);return}try{const J=new Date().toLocaleDateString("en-CA");await jF(AF(cs,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:a,duration:q,date:J,createdAt:new Date().toISOString()});const ve=os(cs,"users",e.uid),ke=await kA(ve);if(ke.exists()){const W=ke.data(),R=W.lastStudyDate!==J?q:(W.todayStudyTime||0)+q,ue=new Date;ue.setDate(ue.getDate()-1);const ge=ue.toLocaleDateString("en-CA");let D=W.streak||0,we=W.streakDate||"";we!==J&&we!==ge&&(D=0),R>=7200&&we!==J&&(we===ge?D+=1:D=1,we=J),await Ul(ve,{totalStudyTime:(W.totalStudyTime||0)+q,todayStudyTime:R,lastStudyDate:J,streak:D,streakDate:we,isStudying:!1})}A(!1)}catch(J){console.error("Global Save Error:",J)}};M.useEffect(()=>{e&&Ul(os(cs,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),M.useEffect(()=>{const k=q=>{r&&(q.preventDefault(),q.returnValue="")};return window.addEventListener("beforeunload",k),()=>{window.removeEventListener("beforeunload",k)}},[r]),M.useEffect(()=>(r?U.current=setInterval(()=>{o(k=>m==="COUNTDOWN"?k<=1?(clearInterval(U.current),C(c*60+d),0):k-1:k+1)},1e3):clearInterval(U.current),()=>clearInterval(U.current)),[r,m,e,c,d]);const b={timerActive:r,setTimerActive:A,timerTime:s,setTimerTime:o,timerSubject:a,setTimerSubject:l,customMinutes:c,setCustomMinutes:h,customSeconds:d,setCustomSeconds:p,timerMode:m,setTimerMode:I,saveGlobalSession:C,focusBroken:_,setFocusBroken:P,allowedPackages:y,setAllowedPackages:v,installedApps:T,fetchApps:x,launchApp:async k=>{if(O())try{be&&be.launchApp&&await be.launchApp({packageName:k})}catch(q){console.error(q)}},openAccessibilitySettings:async()=>{if(O())try{be&&be.openAccessibilitySettings&&await be.openAccessibilitySettings()}catch(k){console.error(k)}}};return N.jsx(gx.Provider,{value:b,children:t})}function B6(t,e){const n=e||{};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const $6=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,H6=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,W6={};function EE(t,e){return((e||W6).jsx?H6:$6).test(t)}const q6=/[ \t\n\f\r]/g;function G6(t){return typeof t=="object"?t.type==="text"?TE(t.value):!1:TE(t)}function TE(t){return t.replace(q6,"")===""}class iu{constructor(e,n,r){this.normal=n,this.property=e,r&&(this.space=r)}}iu.prototype.normal={};iu.prototype.property={};iu.prototype.space=void 0;function yx(t,e){const n={},r={};for(const i of t)Object.assign(n,i.property),Object.assign(r,i.normal);return new iu(n,r,e)}function Sm(t){return t.toLowerCase()}class on{constructor(e,n){this.attribute=n,this.property=e}}on.prototype.attribute="";on.prototype.booleanish=!1;on.prototype.boolean=!1;on.prototype.commaOrSpaceSeparated=!1;on.prototype.commaSeparated=!1;on.prototype.defined=!1;on.prototype.mustUseProperty=!1;on.prototype.number=!1;on.prototype.overloadedBoolean=!1;on.prototype.property="";on.prototype.spaceSeparated=!1;on.prototype.space=void 0;let K6=0;const le=Os(),tt=Os(),Am=Os(),H=Os(),Ne=Os(),vo=Os(),un=Os();function Os(){return 2**++K6}const xm=Object.freeze(Object.defineProperty({__proto__:null,boolean:le,booleanish:tt,commaOrSpaceSeparated:un,commaSeparated:vo,number:H,overloadedBoolean:Am,spaceSeparated:Ne},Symbol.toStringTag,{value:"Module"})),jf=Object.keys(xm);class Jy extends on{constructor(e,n,r,i){let s=-1;if(super(e,n),IE(this,"space",i),typeof r=="number")for(;++s<jf.length;){const o=jf[s];IE(this,jf[s],(r&xm[o])===xm[o])}}}Jy.prototype.defined=!0;function IE(t,e,n){n&&(t[e]=n)}function Jo(t){const e={},n={};for(const[r,i]of Object.entries(t.properties)){const s=new Jy(r,t.transform(t.attributes||{},r),i,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),e[r]=s,n[Sm(r)]=r,n[Sm(s.attribute)]=r}return new iu(e,n,t.space)}const _x=Jo({properties:{ariaActiveDescendant:null,ariaAtomic:tt,ariaAutoComplete:null,ariaBusy:tt,ariaChecked:tt,ariaColCount:H,ariaColIndex:H,ariaColSpan:H,ariaControls:Ne,ariaCurrent:null,ariaDescribedBy:Ne,ariaDetails:null,ariaDisabled:tt,ariaDropEffect:Ne,ariaErrorMessage:null,ariaExpanded:tt,ariaFlowTo:Ne,ariaGrabbed:tt,ariaHasPopup:null,ariaHidden:tt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ne,ariaLevel:H,ariaLive:null,ariaModal:tt,ariaMultiLine:tt,ariaMultiSelectable:tt,ariaOrientation:null,ariaOwns:Ne,ariaPlaceholder:null,ariaPosInSet:H,ariaPressed:tt,ariaReadOnly:tt,ariaRelevant:null,ariaRequired:tt,ariaRoleDescription:Ne,ariaRowCount:H,ariaRowIndex:H,ariaRowSpan:H,ariaSelected:tt,ariaSetSize:H,ariaSort:null,ariaValueMax:H,ariaValueMin:H,ariaValueNow:H,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function vx(t,e){return e in t?t[e]:e}function wx(t,e){return vx(t,e.toLowerCase())}const Q6=Jo({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:vo,acceptCharset:Ne,accessKey:Ne,action:null,allow:null,allowFullScreen:le,allowPaymentRequest:le,allowUserMedia:le,alt:null,as:null,async:le,autoCapitalize:null,autoComplete:Ne,autoFocus:le,autoPlay:le,blocking:Ne,capture:null,charSet:null,checked:le,cite:null,className:Ne,cols:H,colSpan:null,content:null,contentEditable:tt,controls:le,controlsList:Ne,coords:H|vo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:le,defer:le,dir:null,dirName:null,disabled:le,download:Am,draggable:tt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:le,formTarget:null,headers:Ne,height:H,hidden:Am,high:H,href:null,hrefLang:null,htmlFor:Ne,httpEquiv:Ne,id:null,imageSizes:null,imageSrcSet:null,inert:le,inputMode:null,integrity:null,is:null,isMap:le,itemId:null,itemProp:Ne,itemRef:Ne,itemScope:le,itemType:Ne,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:le,low:H,manifest:null,max:null,maxLength:H,media:null,method:null,min:null,minLength:H,multiple:le,muted:le,name:null,nonce:null,noModule:le,noValidate:le,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:le,optimum:H,pattern:null,ping:Ne,placeholder:null,playsInline:le,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:le,referrerPolicy:null,rel:Ne,required:le,reversed:le,rows:H,rowSpan:H,sandbox:Ne,scope:null,scoped:le,seamless:le,selected:le,shadowRootClonable:le,shadowRootDelegatesFocus:le,shadowRootMode:null,shape:null,size:H,sizes:null,slot:null,span:H,spellCheck:tt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:H,step:null,style:null,tabIndex:H,target:null,title:null,translate:null,type:null,typeMustMatch:le,useMap:null,value:tt,width:H,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ne,axis:null,background:null,bgColor:null,border:H,borderColor:null,bottomMargin:H,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:le,declare:le,event:null,face:null,frame:null,frameBorder:null,hSpace:H,leftMargin:H,link:null,longDesc:null,lowSrc:null,marginHeight:H,marginWidth:H,noResize:le,noHref:le,noShade:le,noWrap:le,object:null,profile:null,prompt:null,rev:null,rightMargin:H,rules:null,scheme:null,scrolling:tt,standby:null,summary:null,text:null,topMargin:H,valueType:null,version:null,vAlign:null,vLink:null,vSpace:H,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:le,disableRemotePlayback:le,prefix:null,property:null,results:H,security:null,unselectable:null},space:"html",transform:wx}),Y6=Jo({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:un,accentHeight:H,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:H,amplitude:H,arabicForm:null,ascent:H,attributeName:null,attributeType:null,azimuth:H,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:H,by:null,calcMode:null,capHeight:H,className:Ne,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:H,diffuseConstant:H,direction:null,display:null,dur:null,divisor:H,dominantBaseline:null,download:le,dx:null,dy:null,edgeMode:null,editable:null,elevation:H,enableBackground:null,end:null,event:null,exponent:H,externalResourcesRequired:null,fill:null,fillOpacity:H,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:vo,g2:vo,glyphName:vo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:H,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:H,horizOriginX:H,horizOriginY:H,id:null,ideographic:H,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:H,k:H,k1:H,k2:H,k3:H,k4:H,kernelMatrix:un,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:H,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:H,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:H,overlineThickness:H,paintOrder:null,panose1:null,path:null,pathLength:H,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ne,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:H,pointsAtY:H,pointsAtZ:H,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:un,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:un,rev:un,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:un,requiredFeatures:un,requiredFonts:un,requiredFormats:un,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:H,specularExponent:H,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:H,strikethroughThickness:H,string:null,stroke:null,strokeDashArray:un,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:H,strokeOpacity:H,strokeWidth:null,style:null,surfaceScale:H,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:un,tabIndex:H,tableValues:null,target:null,targetX:H,targetY:H,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:un,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:H,underlineThickness:H,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:H,values:null,vAlphabetic:H,vMathematical:H,vectorEffect:null,vHanging:H,vIdeographic:H,version:null,vertAdvY:H,vertOriginX:H,vertOriginY:H,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:H,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:vx}),Ex=Jo({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),Tx=Jo({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:wx}),Ix=Jo({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),J6={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},X6=/[A-Z]/g,kE=/-[a-z]/g,Z6=/^data[-\w.:]+$/i;function ez(t,e){const n=Sm(e);let r=e,i=on;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Z6.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(kE,nz);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!kE.test(s)){let o=s.replace(X6,tz);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=Jy}return new i(r,e)}function tz(t){return"-"+t.toLowerCase()}function nz(t){return t.charAt(1).toUpperCase()}const rz=yx([_x,Q6,Ex,Tx,Ix],"html"),Xy=yx([_x,Y6,Ex,Tx,Ix],"svg");function iz(t){return t.join(" ").trim()}var Zy={},SE=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,sz=/\n/g,oz=/^\s*/,az=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,lz=/^:\s*/,uz=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,cz=/^[;\s]*/,hz=/^\s+|\s+$/g,dz=`
`,AE="/",xE="*",Xi="",fz="comment",pz="declaration";function mz(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,r=1;function i(I){var _=I.match(sz);_&&(n+=_.length);var S=I.lastIndexOf(dz);r=~S?I.length-S:r+I.length}function s(){var I={line:n,column:r};return function(_){return _.position=new o(I),c(),_}}function o(I){this.start=I,this.end={line:n,column:r},this.source=e.source}o.prototype.content=t;function a(I){var _=new Error(e.source+":"+n+":"+r+": "+I);if(_.reason=I,_.filename=e.source,_.line=n,_.column=r,_.source=t,!e.silent)throw _}function l(I){var _=I.exec(t);if(_){var S=_[0];return i(S),t=t.slice(S.length),_}}function c(){l(oz)}function h(I){var _;for(I=I||[];_=d();)_!==!1&&I.push(_);return I}function d(){var I=s();if(!(AE!=t.charAt(0)||xE!=t.charAt(1))){for(var _=2;Xi!=t.charAt(_)&&(xE!=t.charAt(_)||AE!=t.charAt(_+1));)++_;if(_+=2,Xi===t.charAt(_-1))return a("End of comment missing");var S=t.slice(2,_-2);return r+=2,i(S),t=t.slice(_),r+=2,I({type:fz,comment:S})}}function p(){var I=s(),_=l(az);if(_){if(d(),!l(lz))return a("property missing ':'");var S=l(uz),y=I({type:pz,property:CE(_[0].replace(SE,Xi)),value:S?CE(S[0].replace(SE,Xi)):Xi});return l(cz),y}}function m(){var I=[];h(I);for(var _;_=p();)_!==!1&&(I.push(_),h(I));return I}return c(),m()}function CE(t){return t?t.replace(hz,Xi):Xi}var gz=mz,yz=Ic&&Ic.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Zy,"__esModule",{value:!0});Zy.default=vz;const _z=yz(gz);function vz(t,e){let n=null;if(!t||typeof t!="string")return n;const r=(0,_z.default)(t),i=typeof e=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:o,value:a}=s;i?e(o,a,s):a&&(n=n||{},n[o]=a)}),n}var Ed={};Object.defineProperty(Ed,"__esModule",{value:!0});Ed.camelCase=void 0;var wz=/^--[a-zA-Z0-9_-]+$/,Ez=/-([a-z])/g,Tz=/^[^-]+$/,Iz=/^-(webkit|moz|ms|o|khtml)-/,kz=/^-(ms)-/,Sz=function(t){return!t||Tz.test(t)||wz.test(t)},Az=function(t,e){return e.toUpperCase()},PE=function(t,e){return"".concat(e,"-")},xz=function(t,e){return e===void 0&&(e={}),Sz(t)?t:(t=t.toLowerCase(),e.reactCompat?t=t.replace(kz,PE):t=t.replace(Iz,PE),t.replace(Ez,Az))};Ed.camelCase=xz;var Cz=Ic&&Ic.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},Pz=Cz(Zy),Rz=Ed;function Cm(t,e){var n={};return!t||typeof t!="string"||(0,Pz.default)(t,function(r,i){r&&i&&(n[(0,Rz.camelCase)(r,e)]=i)}),n}Cm.default=Cm;var bz=Cm;const Nz=Vm(bz),kx=Sx("end"),e_=Sx("start");function Sx(t){return e;function e(n){const r=n&&n.position&&n.position[t]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Dz(t){const e=e_(t),n=kx(t);if(e&&n)return{start:e,end:n}}function sl(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?RE(t.position):"start"in t||"end"in t?RE(t):"line"in t||"column"in t?Pm(t):""}function Pm(t){return bE(t&&t.line)+":"+bE(t&&t.column)}function RE(t){return Pm(t&&t.start)+"-"+Pm(t&&t.end)}function bE(t){return t&&typeof t=="number"?t:1}class Lt extends Error{constructor(e,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},o=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof e=="string"?i=e:!s.cause&&e&&(o=!0,i=e.message,s.cause=e),!s.ruleId&&!s.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?s.ruleId=r:(s.source=r.slice(0,l),s.ruleId=r.slice(l+1))}if(!s.place&&s.ancestors&&s.ancestors){const l=s.ancestors[s.ancestors.length-1];l&&(s.place=l.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=sl(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Lt.prototype.file="";Lt.prototype.name="";Lt.prototype.reason="";Lt.prototype.message="";Lt.prototype.stack="";Lt.prototype.column=void 0;Lt.prototype.line=void 0;Lt.prototype.ancestors=void 0;Lt.prototype.cause=void 0;Lt.prototype.fatal=void 0;Lt.prototype.place=void 0;Lt.prototype.ruleId=void 0;Lt.prototype.source=void 0;const t_={}.hasOwnProperty,Oz=new Map,Lz=/[A-Z]/g,Vz=new Set(["table","tbody","thead","tfoot","tr"]),Mz=new Set(["td","th"]),Ax="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Fz(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let r;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=qz(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Wz(n,e.jsx,e.jsxs)}const i={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:r,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Xy:rz,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=xx(i,t,void 0);return s&&typeof s!="string"?s:i.create(t,i.Fragment,{children:s||void 0},void 0)}function xx(t,e,n){if(e.type==="element")return Uz(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return jz(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return Bz(t,e,n);if(e.type==="mdxjsEsm")return zz(t,e);if(e.type==="root")return $z(t,e,n);if(e.type==="text")return Hz(t,e)}function Uz(t,e,n){const r=t.schema;let i=r;e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Xy,t.schema=i),t.ancestors.push(e);const s=Px(t,e.tagName,!1),o=Gz(t,e);let a=r_(t,e);return Vz.has(e.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!G6(l):!0})),Cx(t,o,s,e),n_(o,a),t.ancestors.pop(),t.schema=r,t.create(e,s,o,n)}function jz(t,e){if(e.data&&e.data.estree&&t.evaluater){const r=e.data.estree.body[0];return r.type,t.evaluater.evaluateExpression(r.expression)}Bl(t,e.position)}function zz(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);Bl(t,e.position)}function Bz(t,e,n){const r=t.schema;let i=r;e.name==="svg"&&r.space==="html"&&(i=Xy,t.schema=i),t.ancestors.push(e);const s=e.name===null?t.Fragment:Px(t,e.name,!0),o=Kz(t,e),a=r_(t,e);return Cx(t,o,s,e),n_(o,a),t.ancestors.pop(),t.schema=r,t.create(e,s,o,n)}function $z(t,e,n){const r={};return n_(r,r_(t,e)),t.create(e,t.Fragment,r,n)}function Hz(t,e){return e.value}function Cx(t,e,n,r){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=r)}function n_(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function Wz(t,e,n){return r;function r(i,s,o,a){const c=Array.isArray(o.children)?n:e;return a?c(s,o,a):c(s,o)}}function qz(t,e){return n;function n(r,i,s,o){const a=Array.isArray(s.children),l=e_(r);return e(i,s,o,a,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function Gz(t,e){const n={};let r,i;for(i in e.properties)if(i!=="children"&&t_.call(e.properties,i)){const s=Qz(t,i,e.properties[i]);if(s){const[o,a]=s;t.tableCellAlignToStyle&&o==="align"&&typeof a=="string"&&Mz.has(e.tagName)?r=a:n[o]=a}}if(r){const s=n.style||(n.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Kz(t,e){const n={};for(const r of e.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&t.evaluater){const s=r.data.estree.body[0];s.type;const o=s.expression;o.type;const a=o.properties[0];a.type,Object.assign(n,t.evaluater.evaluateExpression(a.argument))}else Bl(t,e.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&t.evaluater){const a=r.value.data.estree.body[0];a.type,s=t.evaluater.evaluateExpression(a.expression)}else Bl(t,e.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function r_(t,e){const n=[];let r=-1;const i=t.passKeys?new Map:Oz;for(;++r<e.children.length;){const s=e.children[r];let o;if(t.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const c=i.get(l)||0;o=l+"-"+c,i.set(l,c+1)}}const a=xx(t,s,o);a!==void 0&&n.push(a)}return n}function Qz(t,e,n){const r=ez(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?B6(n):iz(n)),r.property==="style"){let i=typeof n=="object"?n:Yz(t,String(n));return t.stylePropertyNameCase==="css"&&(i=Jz(i)),["style",i]}return[t.elementAttributeNameCase==="react"&&r.space?J6[r.property]||r.property:r.attribute,n]}}function Yz(t,e){try{return Nz(e,{reactCompat:!0})}catch(n){if(t.ignoreInvalidStyle)return{};const r=n,i=new Lt("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=t.filePath||void 0,i.url=Ax+"#cannot-parse-style-attribute",i}}function Px(t,e,n){let r;if(!n)r={type:"Literal",value:e};else if(e.includes(".")){const i=e.split(".");let s=-1,o;for(;++s<i.length;){const a=EE(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}r=o}else r=EE(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(r.type==="Literal"){const i=r.value;return t_.call(t.components,i)?t.components[i]:i}if(t.evaluater)return t.evaluater.evaluateExpression(r);Bl(t)}function Bl(t,e){const n=new Lt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=Ax+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Jz(t){const e={};let n;for(n in t)t_.call(t,n)&&(e[Xz(n)]=t[n]);return e}function Xz(t){let e=t.replace(Lz,Zz);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function Zz(t){return"-"+t.toLowerCase()}const zf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},e3={};function t3(t,e){const n=e||e3,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Rx(t,r,i)}function Rx(t,e,n){if(n3(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return NE(t.children,e,n)}return Array.isArray(t)?NE(t,e,n):""}function NE(t,e,n){const r=[];let i=-1;for(;++i<t.length;)r[i]=Rx(t[i],e,n);return r.join("")}function n3(t){return!!(t&&typeof t=="object")}const DE=document.createElement("i");function i_(t){const e="&"+t+";";DE.innerHTML=e;const n=DE.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function fr(t,e,n,r){const i=t.length;let s=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(e,n),t.splice(...o);else for(n&&t.splice(e,n);s<r.length;)o=r.slice(s,s+1e4),o.unshift(e,0),t.splice(...o),s+=1e4,e+=1e4}function An(t,e){return t.length>0?(fr(t,t.length,0,e),t):e}const OE={}.hasOwnProperty;function r3(t){const e={};let n=-1;for(;++n<t.length;)i3(e,t[n]);return e}function i3(t,e){let n;for(n in e){const i=(OE.call(t,n)?t[n]:void 0)||(t[n]={}),s=e[n];let o;if(s)for(o in s){OE.call(i,o)||(i[o]=[]);const a=s[o];s3(i[o],Array.isArray(a)?a:a?[a]:[])}}}function s3(t,e){let n=-1;const r=[];for(;++n<e.length;)(e[n].add==="after"?t:r).push(e[n]);fr(t,0,0,r)}function bx(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function wo(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const rr=Hi(/[A-Za-z]/),pn=Hi(/[\dA-Za-z]/),o3=Hi(/[#-'*+\--9=?A-Z^-~]/);function Rm(t){return t!==null&&(t<32||t===127)}const bm=Hi(/\d/),a3=Hi(/[\dA-Fa-f]/),l3=Hi(/[!-/:-@[-`{-~]/);function re(t){return t!==null&&t<-2}function sn(t){return t!==null&&(t<0||t===32)}function Te(t){return t===-2||t===-1||t===32}const u3=Hi(/\p{P}|\p{S}/u),c3=Hi(/\s/);function Hi(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function Xo(t){const e=[];let n=-1,r=0,i=0;for(;++n<t.length;){const s=t.charCodeAt(n);let o="";if(s===37&&pn(t.charCodeAt(n+1))&&pn(t.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const a=t.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(o=String.fromCharCode(s,a),i=1):o="�"}else o=String.fromCharCode(s);o&&(e.push(t.slice(r,n),encodeURIComponent(o)),r=n+i+1,o=""),i&&(n+=i,i=0)}return e.join("")+t.slice(r)}function Le(t,e,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return o;function o(l){return Te(l)?(t.enter(n),a(l)):e(l)}function a(l){return Te(l)&&s++<i?(t.consume(l),a):(t.exit(n),e(l))}}const h3={tokenize:d3};function d3(t){const e=t.attempt(this.parser.constructs.contentInitial,r,i);let n;return e;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),Le(t,e,"linePrefix")}function i(a){return t.enter("paragraph"),s(a)}function s(a){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,o(a)}function o(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return re(a)?(t.consume(a),t.exit("chunkText"),s):(t.consume(a),o)}}const f3={tokenize:p3},LE={tokenize:m3};function p3(t){const e=this,n=[];let r=0,i,s,o;return a;function a(T){if(r<n.length){const L=n[r];return e.containerState=L[1],t.attempt(L[0].continuation,l,c)(T)}return c(T)}function l(T){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&E();const L=e.events.length;let U=L,O;for(;U--;)if(e.events[U][0]==="exit"&&e.events[U][1].type==="chunkFlow"){O=e.events[U][1].end;break}y(r);let x=L;for(;x<e.events.length;)e.events[x][1].end={...O},x++;return fr(e.events,U+1,0,e.events.slice(L)),e.events.length=x,c(T)}return a(T)}function c(T){if(r===n.length){if(!i)return p(T);if(i.currentConstruct&&i.currentConstruct.concrete)return I(T);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(LE,h,d)(T)}function h(T){return i&&E(),y(r),p(T)}function d(T){return e.parser.lazy[e.now().line]=r!==n.length,o=e.now().offset,I(T)}function p(T){return e.containerState={},t.attempt(LE,m,I)(T)}function m(T){return r++,n.push([e.currentConstruct,e.containerState]),p(T)}function I(T){if(T===null){i&&E(),y(0),t.consume(T);return}return i=i||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),_(T)}function _(T){if(T===null){S(t.exit("chunkFlow"),!0),y(0),t.consume(T);return}return re(T)?(t.consume(T),S(t.exit("chunkFlow")),r=0,e.interrupt=void 0,a):(t.consume(T),_)}function S(T,L){const U=e.sliceStream(T);if(L&&U.push(null),T.previous=s,s&&(s.next=T),s=T,i.defineSkip(T.start),i.write(U),e.parser.lazy[T.start.line]){let O=i.events.length;for(;O--;)if(i.events[O][1].start.offset<o&&(!i.events[O][1].end||i.events[O][1].end.offset>o))return;const x=e.events.length;let v=x,A,P;for(;v--;)if(e.events[v][0]==="exit"&&e.events[v][1].type==="chunkFlow"){if(A){P=e.events[v][1].end;break}A=!0}for(y(r),O=x;O<e.events.length;)e.events[O][1].end={...P},O++;fr(e.events,v+1,0,e.events.slice(x)),e.events.length=O}}function y(T){let L=n.length;for(;L-- >T;){const U=n[L];e.containerState=U[1],U[0].exit.call(e,t)}n.length=T}function E(){i.write([null]),s=void 0,i=void 0,e.containerState._closeFlow=void 0}}function m3(t,e,n){return Le(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function VE(t){if(t===null||sn(t)||c3(t))return 1;if(u3(t))return 2}function s_(t,e,n){const r=[];let i=-1;for(;++i<t.length;){const s=t[i].resolveAll;s&&!r.includes(s)&&(e=s(e,n),r.push(s))}return e}const Nm={name:"attention",resolveAll:g3,tokenize:y3};function g3(t,e){let n=-1,r,i,s,o,a,l,c,h;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(r=n;r--;)if(t[r][0]==="exit"&&t[r][1].type==="attentionSequence"&&t[r][1]._open&&e.sliceSerialize(t[r][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[r][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[r][1].end.offset-t[r][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[r][1].end.offset-t[r][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const d={...t[r][1].end},p={...t[n][1].start};ME(d,-l),ME(p,l),o={type:l>1?"strongSequence":"emphasisSequence",start:d,end:{...t[r][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:p},s={type:l>1?"strongText":"emphasisText",start:{...t[r][1].end},end:{...t[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...o.start},end:{...a.end}},t[r][1].end={...o.start},t[n][1].start={...a.end},c=[],t[r][1].end.offset-t[r][1].start.offset&&(c=An(c,[["enter",t[r][1],e],["exit",t[r][1],e]])),c=An(c,[["enter",i,e],["enter",o,e],["exit",o,e],["enter",s,e]]),c=An(c,s_(e.parser.constructs.insideSpan.null,t.slice(r+1,n),e)),c=An(c,[["exit",s,e],["enter",a,e],["exit",a,e],["exit",i,e]]),t[n][1].end.offset-t[n][1].start.offset?(h=2,c=An(c,[["enter",t[n][1],e],["exit",t[n][1],e]])):h=0,fr(t,r-1,n-r+3,c),n=r+c.length-h-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function y3(t,e){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=VE(r);let s;return o;function o(l){return s=l,t.enter("attentionSequence"),a(l)}function a(l){if(l===s)return t.consume(l),a;const c=t.exit("attentionSequence"),h=VE(l),d=!h||h===2&&i||n.includes(l),p=!i||i===2&&h||n.includes(r);return c._open=!!(s===42?d:d&&(i||!p)),c._close=!!(s===42?p:p&&(h||!d)),e(l)}}function ME(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const _3={name:"autolink",tokenize:v3};function v3(t,e,n){let r=0;return i;function i(m){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(m),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(m){return rr(m)?(t.consume(m),o):m===64?n(m):c(m)}function o(m){return m===43||m===45||m===46||pn(m)?(r=1,a(m)):c(m)}function a(m){return m===58?(t.consume(m),r=0,l):(m===43||m===45||m===46||pn(m))&&r++<32?(t.consume(m),a):(r=0,c(m))}function l(m){return m===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(m),t.exit("autolinkMarker"),t.exit("autolink"),e):m===null||m===32||m===60||Rm(m)?n(m):(t.consume(m),l)}function c(m){return m===64?(t.consume(m),h):o3(m)?(t.consume(m),c):n(m)}function h(m){return pn(m)?d(m):n(m)}function d(m){return m===46?(t.consume(m),r=0,h):m===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(m),t.exit("autolinkMarker"),t.exit("autolink"),e):p(m)}function p(m){if((m===45||pn(m))&&r++<63){const I=m===45?p:d;return t.consume(m),I}return n(m)}}const Td={partial:!0,tokenize:w3};function w3(t,e,n){return r;function r(s){return Te(s)?Le(t,i,"linePrefix")(s):i(s)}function i(s){return s===null||re(s)?e(s):n(s)}}const Nx={continuation:{tokenize:T3},exit:I3,name:"blockQuote",tokenize:E3};function E3(t,e,n){const r=this;return i;function i(o){if(o===62){const a=r.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),s}return n(o)}function s(o){return Te(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function T3(t,e,n){const r=this;return i;function i(o){return Te(o)?Le(t,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return t.attempt(Nx,e,n)(o)}}function I3(t){t.exit("blockQuote")}const Dx={name:"characterEscape",tokenize:k3};function k3(t,e,n){return r;function r(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),i}function i(s){return l3(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(s)}}const Ox={name:"characterReference",tokenize:S3};function S3(t,e,n){const r=this;let i=0,s,o;return a;function a(d){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(d),t.exit("characterReferenceMarker"),l}function l(d){return d===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(d),t.exit("characterReferenceMarkerNumeric"),c):(t.enter("characterReferenceValue"),s=31,o=pn,h(d))}function c(d){return d===88||d===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(d),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,o=a3,h):(t.enter("characterReferenceValue"),s=7,o=bm,h(d))}function h(d){if(d===59&&i){const p=t.exit("characterReferenceValue");return o===pn&&!i_(r.sliceSerialize(p))?n(d):(t.enter("characterReferenceMarker"),t.consume(d),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return o(d)&&i++<s?(t.consume(d),h):n(d)}}const FE={partial:!0,tokenize:x3},UE={concrete:!0,name:"codeFenced",tokenize:A3};function A3(t,e,n){const r=this,i={partial:!0,tokenize:U};let s=0,o=0,a;return l;function l(O){return c(O)}function c(O){const x=r.events[r.events.length-1];return s=x&&x[1].type==="linePrefix"?x[2].sliceSerialize(x[1],!0).length:0,a=O,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),h(O)}function h(O){return O===a?(o++,t.consume(O),h):o<3?n(O):(t.exit("codeFencedFenceSequence"),Te(O)?Le(t,d,"whitespace")(O):d(O))}function d(O){return O===null||re(O)?(t.exit("codeFencedFence"),r.interrupt?e(O):t.check(FE,_,L)(O)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),p(O))}function p(O){return O===null||re(O)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),d(O)):Te(O)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Le(t,m,"whitespace")(O)):O===96&&O===a?n(O):(t.consume(O),p)}function m(O){return O===null||re(O)?d(O):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),I(O))}function I(O){return O===null||re(O)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),d(O)):O===96&&O===a?n(O):(t.consume(O),I)}function _(O){return t.attempt(i,L,S)(O)}function S(O){return t.enter("lineEnding"),t.consume(O),t.exit("lineEnding"),y}function y(O){return s>0&&Te(O)?Le(t,E,"linePrefix",s+1)(O):E(O)}function E(O){return O===null||re(O)?t.check(FE,_,L)(O):(t.enter("codeFlowValue"),T(O))}function T(O){return O===null||re(O)?(t.exit("codeFlowValue"),E(O)):(t.consume(O),T)}function L(O){return t.exit("codeFenced"),e(O)}function U(O,x,v){let A=0;return P;function P(J){return O.enter("lineEnding"),O.consume(J),O.exit("lineEnding"),C}function C(J){return O.enter("codeFencedFence"),Te(J)?Le(O,b,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(J):b(J)}function b(J){return J===a?(O.enter("codeFencedFenceSequence"),k(J)):v(J)}function k(J){return J===a?(A++,O.consume(J),k):A>=o?(O.exit("codeFencedFenceSequence"),Te(J)?Le(O,q,"whitespace")(J):q(J)):v(J)}function q(J){return J===null||re(J)?(O.exit("codeFencedFence"),x(J)):v(J)}}}function x3(t,e,n){const r=this;return i;function i(o){return o===null?n(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),s)}function s(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}const Bf={name:"codeIndented",tokenize:P3},C3={partial:!0,tokenize:R3};function P3(t,e,n){const r=this;return i;function i(c){return t.enter("codeIndented"),Le(t,s,"linePrefix",4+1)(c)}function s(c){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?o(c):n(c)}function o(c){return c===null?l(c):re(c)?t.attempt(C3,o,l)(c):(t.enter("codeFlowValue"),a(c))}function a(c){return c===null||re(c)?(t.exit("codeFlowValue"),o(c)):(t.consume(c),a)}function l(c){return t.exit("codeIndented"),e(c)}}function R3(t,e,n){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):re(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i):Le(t,s,"linePrefix",4+1)(o)}function s(o){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):re(o)?i(o):n(o)}}const b3={name:"codeText",previous:D3,resolve:N3,tokenize:O3};function N3(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function D3(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function O3(t,e,n){let r=0,i,s;return o;function o(d){return t.enter("codeText"),t.enter("codeTextSequence"),a(d)}function a(d){return d===96?(t.consume(d),r++,a):(t.exit("codeTextSequence"),l(d))}function l(d){return d===null?n(d):d===32?(t.enter("space"),t.consume(d),t.exit("space"),l):d===96?(s=t.enter("codeTextSequence"),i=0,h(d)):re(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),l):(t.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||re(d)?(t.exit("codeTextData"),l(d)):(t.consume(d),c)}function h(d){return d===96?(t.consume(d),i++,h):i===r?(t.exit("codeTextSequence"),t.exit("codeText"),e(d)):(s.type="codeTextData",c(d))}}class L3{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,n,r){const i=n||0;this.setCursor(Math.trunc(e));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&xa(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),xa(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),xa(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);xa(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);xa(this.left,n.reverse())}}}function xa(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function Lx(t){const e={};let n=-1,r,i,s,o,a,l,c;const h=new L3(t);for(;++n<h.length;){for(;n in e;)n=e[n];if(r=h.get(n),n&&r[1].type==="chunkFlow"&&h.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,s=0,s<l.length&&l[s][1].type==="lineEndingBlank"&&(s+=2),s<l.length&&l[s][1].type==="content"))for(;++s<l.length&&l[s][1].type!=="content";)l[s][1].type==="chunkText"&&(l[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,V3(h,n)),n=e[n],c=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(o=h.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(h.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...h.get(i)[1].start},a=h.slice(i,n),a.unshift(r),h.splice(i,n-i+1,a))}}return fr(t,0,Number.POSITIVE_INFINITY,h.slice(0)),!c}function V3(t,e){const n=t.get(e)[1],r=t.get(e)[2];let i=e-1;const s=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const a=o.events,l=[],c={};let h,d,p=-1,m=n,I=0,_=0;const S=[_];for(;m;){for(;t.get(++i)[1]!==m;);s.push(i),m._tokenizer||(h=r.sliceStream(m),m.next||h.push(null),d&&o.defineSkip(m.start),m._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(h),m._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=m,m=m.next}for(m=n;++p<a.length;)a[p][0]==="exit"&&a[p-1][0]==="enter"&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(_=p+1,S.push(_),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(o.events=[],m?(m._tokenizer=void 0,m.previous=void 0):S.pop(),p=S.length;p--;){const y=a.slice(S[p],S[p+1]),E=s.pop();l.push([E,E+y.length-1]),t.splice(E,2,y)}for(l.reverse(),p=-1;++p<l.length;)c[I+l[p][0]]=I+l[p][1],I+=l[p][1]-l[p][0]-1;return c}const M3={resolve:U3,tokenize:j3},F3={partial:!0,tokenize:z3};function U3(t){return Lx(t),t}function j3(t,e){let n;return r;function r(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?s(a):re(a)?t.check(F3,o,s)(a):(t.consume(a),i)}function s(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function o(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function z3(t,e,n){const r=this;return i;function i(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Le(t,s,"linePrefix")}function s(o){if(o===null||re(o))return n(o);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(o):t.interrupt(r.parser.constructs.flow,n,e)(o)}}function Vx(t,e,n,r,i,s,o,a,l){const c=l||Number.POSITIVE_INFINITY;let h=0;return d;function d(y){return y===60?(t.enter(r),t.enter(i),t.enter(s),t.consume(y),t.exit(s),p):y===null||y===32||y===41||Rm(y)?n(y):(t.enter(r),t.enter(o),t.enter(a),t.enter("chunkString",{contentType:"string"}),_(y))}function p(y){return y===62?(t.enter(s),t.consume(y),t.exit(s),t.exit(i),t.exit(r),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),m(y))}function m(y){return y===62?(t.exit("chunkString"),t.exit(a),p(y)):y===null||y===60||re(y)?n(y):(t.consume(y),y===92?I:m)}function I(y){return y===60||y===62||y===92?(t.consume(y),m):m(y)}function _(y){return!h&&(y===null||y===41||sn(y))?(t.exit("chunkString"),t.exit(a),t.exit(o),t.exit(r),e(y)):h<c&&y===40?(t.consume(y),h++,_):y===41?(t.consume(y),h--,_):y===null||y===32||y===40||Rm(y)?n(y):(t.consume(y),y===92?S:_)}function S(y){return y===40||y===41||y===92?(t.consume(y),_):_(y)}}function Mx(t,e,n,r,i,s){const o=this;let a=0,l;return c;function c(m){return t.enter(r),t.enter(i),t.consume(m),t.exit(i),t.enter(s),h}function h(m){return a>999||m===null||m===91||m===93&&!l||m===94&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(m):m===93?(t.exit(s),t.enter(i),t.consume(m),t.exit(i),t.exit(r),e):re(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),h):(t.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===null||m===91||m===93||re(m)||a++>999?(t.exit("chunkString"),h(m)):(t.consume(m),l||(l=!Te(m)),m===92?p:d)}function p(m){return m===91||m===92||m===93?(t.consume(m),a++,d):d(m)}}function Fx(t,e,n,r,i,s){let o;return a;function a(p){return p===34||p===39||p===40?(t.enter(r),t.enter(i),t.consume(p),t.exit(i),o=p===40?41:p,l):n(p)}function l(p){return p===o?(t.enter(i),t.consume(p),t.exit(i),t.exit(r),e):(t.enter(s),c(p))}function c(p){return p===o?(t.exit(s),l(o)):p===null?n(p):re(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),Le(t,c,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===o||p===null||re(p)?(t.exit("chunkString"),c(p)):(t.consume(p),p===92?d:h)}function d(p){return p===o||p===92?(t.consume(p),h):h(p)}}function ol(t,e){let n;return r;function r(i){return re(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),n=!0,r):Te(i)?Le(t,r,n?"linePrefix":"lineSuffix")(i):e(i)}}const B3={name:"definition",tokenize:H3},$3={partial:!0,tokenize:W3};function H3(t,e,n){const r=this;let i;return s;function s(m){return t.enter("definition"),o(m)}function o(m){return Mx.call(r,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function a(m){return i=wo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(t.enter("definitionMarker"),t.consume(m),t.exit("definitionMarker"),l):n(m)}function l(m){return sn(m)?ol(t,c)(m):c(m)}function c(m){return Vx(t,h,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function h(m){return t.attempt($3,d,d)(m)}function d(m){return Te(m)?Le(t,p,"whitespace")(m):p(m)}function p(m){return m===null||re(m)?(t.exit("definition"),r.parser.defined.push(i),e(m)):n(m)}}function W3(t,e,n){return r;function r(a){return sn(a)?ol(t,i)(a):n(a)}function i(a){return Fx(t,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return Te(a)?Le(t,o,"whitespace")(a):o(a)}function o(a){return a===null||re(a)?e(a):n(a)}}const q3={name:"hardBreakEscape",tokenize:G3};function G3(t,e,n){return r;function r(s){return t.enter("hardBreakEscape"),t.consume(s),i}function i(s){return re(s)?(t.exit("hardBreakEscape"),e(s)):n(s)}}const K3={name:"headingAtx",resolve:Q3,tokenize:Y3};function Q3(t,e){let n=t.length-2,r=3,i,s;return t[r][1].type==="whitespace"&&(r+=2),n-2>r&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&t[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:t[r][1].start,end:t[n][1].end},s={type:"chunkText",start:t[r][1].start,end:t[n][1].end,contentType:"text"},fr(t,r,n-r+1,[["enter",i,e],["enter",s,e],["exit",s,e],["exit",i,e]])),t}function Y3(t,e,n){let r=0;return i;function i(h){return t.enter("atxHeading"),s(h)}function s(h){return t.enter("atxHeadingSequence"),o(h)}function o(h){return h===35&&r++<6?(t.consume(h),o):h===null||sn(h)?(t.exit("atxHeadingSequence"),a(h)):n(h)}function a(h){return h===35?(t.enter("atxHeadingSequence"),l(h)):h===null||re(h)?(t.exit("atxHeading"),e(h)):Te(h)?Le(t,a,"whitespace")(h):(t.enter("atxHeadingText"),c(h))}function l(h){return h===35?(t.consume(h),l):(t.exit("atxHeadingSequence"),a(h))}function c(h){return h===null||h===35||sn(h)?(t.exit("atxHeadingText"),a(h)):(t.consume(h),c)}}const J3=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],jE=["pre","script","style","textarea"],X3={concrete:!0,name:"htmlFlow",resolveTo:t9,tokenize:n9},Z3={partial:!0,tokenize:i9},e9={partial:!0,tokenize:r9};function t9(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function n9(t,e,n){const r=this;let i,s,o,a,l;return c;function c(D){return h(D)}function h(D){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(D),d}function d(D){return D===33?(t.consume(D),p):D===47?(t.consume(D),s=!0,_):D===63?(t.consume(D),i=3,r.interrupt?e:R):rr(D)?(t.consume(D),o=String.fromCharCode(D),S):n(D)}function p(D){return D===45?(t.consume(D),i=2,m):D===91?(t.consume(D),i=5,a=0,I):rr(D)?(t.consume(D),i=4,r.interrupt?e:R):n(D)}function m(D){return D===45?(t.consume(D),r.interrupt?e:R):n(D)}function I(D){const we="CDATA[";return D===we.charCodeAt(a++)?(t.consume(D),a===we.length?r.interrupt?e:b:I):n(D)}function _(D){return rr(D)?(t.consume(D),o=String.fromCharCode(D),S):n(D)}function S(D){if(D===null||D===47||D===62||sn(D)){const we=D===47,Vt=o.toLowerCase();return!we&&!s&&jE.includes(Vt)?(i=1,r.interrupt?e(D):b(D)):J3.includes(o.toLowerCase())?(i=6,we?(t.consume(D),y):r.interrupt?e(D):b(D)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(D):s?E(D):T(D))}return D===45||pn(D)?(t.consume(D),o+=String.fromCharCode(D),S):n(D)}function y(D){return D===62?(t.consume(D),r.interrupt?e:b):n(D)}function E(D){return Te(D)?(t.consume(D),E):P(D)}function T(D){return D===47?(t.consume(D),P):D===58||D===95||rr(D)?(t.consume(D),L):Te(D)?(t.consume(D),T):P(D)}function L(D){return D===45||D===46||D===58||D===95||pn(D)?(t.consume(D),L):U(D)}function U(D){return D===61?(t.consume(D),O):Te(D)?(t.consume(D),U):T(D)}function O(D){return D===null||D===60||D===61||D===62||D===96?n(D):D===34||D===39?(t.consume(D),l=D,x):Te(D)?(t.consume(D),O):v(D)}function x(D){return D===l?(t.consume(D),l=null,A):D===null||re(D)?n(D):(t.consume(D),x)}function v(D){return D===null||D===34||D===39||D===47||D===60||D===61||D===62||D===96||sn(D)?U(D):(t.consume(D),v)}function A(D){return D===47||D===62||Te(D)?T(D):n(D)}function P(D){return D===62?(t.consume(D),C):n(D)}function C(D){return D===null||re(D)?b(D):Te(D)?(t.consume(D),C):n(D)}function b(D){return D===45&&i===2?(t.consume(D),ve):D===60&&i===1?(t.consume(D),ke):D===62&&i===4?(t.consume(D),ue):D===63&&i===3?(t.consume(D),R):D===93&&i===5?(t.consume(D),ee):re(D)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(Z3,ge,k)(D)):D===null||re(D)?(t.exit("htmlFlowData"),k(D)):(t.consume(D),b)}function k(D){return t.check(e9,q,ge)(D)}function q(D){return t.enter("lineEnding"),t.consume(D),t.exit("lineEnding"),J}function J(D){return D===null||re(D)?k(D):(t.enter("htmlFlowData"),b(D))}function ve(D){return D===45?(t.consume(D),R):b(D)}function ke(D){return D===47?(t.consume(D),o="",W):b(D)}function W(D){if(D===62){const we=o.toLowerCase();return jE.includes(we)?(t.consume(D),ue):b(D)}return rr(D)&&o.length<8?(t.consume(D),o+=String.fromCharCode(D),W):b(D)}function ee(D){return D===93?(t.consume(D),R):b(D)}function R(D){return D===62?(t.consume(D),ue):D===45&&i===2?(t.consume(D),R):b(D)}function ue(D){return D===null||re(D)?(t.exit("htmlFlowData"),ge(D)):(t.consume(D),ue)}function ge(D){return t.exit("htmlFlow"),e(D)}}function r9(t,e,n){const r=this;return i;function i(o){return re(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),s):n(o)}function s(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}function i9(t,e,n){return r;function r(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(Td,e,n)}}const s9={name:"htmlText",tokenize:o9};function o9(t,e,n){const r=this;let i,s,o;return a;function a(R){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(R),l}function l(R){return R===33?(t.consume(R),c):R===47?(t.consume(R),U):R===63?(t.consume(R),T):rr(R)?(t.consume(R),v):n(R)}function c(R){return R===45?(t.consume(R),h):R===91?(t.consume(R),s=0,I):rr(R)?(t.consume(R),E):n(R)}function h(R){return R===45?(t.consume(R),m):n(R)}function d(R){return R===null?n(R):R===45?(t.consume(R),p):re(R)?(o=d,ke(R)):(t.consume(R),d)}function p(R){return R===45?(t.consume(R),m):d(R)}function m(R){return R===62?ve(R):R===45?p(R):d(R)}function I(R){const ue="CDATA[";return R===ue.charCodeAt(s++)?(t.consume(R),s===ue.length?_:I):n(R)}function _(R){return R===null?n(R):R===93?(t.consume(R),S):re(R)?(o=_,ke(R)):(t.consume(R),_)}function S(R){return R===93?(t.consume(R),y):_(R)}function y(R){return R===62?ve(R):R===93?(t.consume(R),y):_(R)}function E(R){return R===null||R===62?ve(R):re(R)?(o=E,ke(R)):(t.consume(R),E)}function T(R){return R===null?n(R):R===63?(t.consume(R),L):re(R)?(o=T,ke(R)):(t.consume(R),T)}function L(R){return R===62?ve(R):T(R)}function U(R){return rr(R)?(t.consume(R),O):n(R)}function O(R){return R===45||pn(R)?(t.consume(R),O):x(R)}function x(R){return re(R)?(o=x,ke(R)):Te(R)?(t.consume(R),x):ve(R)}function v(R){return R===45||pn(R)?(t.consume(R),v):R===47||R===62||sn(R)?A(R):n(R)}function A(R){return R===47?(t.consume(R),ve):R===58||R===95||rr(R)?(t.consume(R),P):re(R)?(o=A,ke(R)):Te(R)?(t.consume(R),A):ve(R)}function P(R){return R===45||R===46||R===58||R===95||pn(R)?(t.consume(R),P):C(R)}function C(R){return R===61?(t.consume(R),b):re(R)?(o=C,ke(R)):Te(R)?(t.consume(R),C):A(R)}function b(R){return R===null||R===60||R===61||R===62||R===96?n(R):R===34||R===39?(t.consume(R),i=R,k):re(R)?(o=b,ke(R)):Te(R)?(t.consume(R),b):(t.consume(R),q)}function k(R){return R===i?(t.consume(R),i=void 0,J):R===null?n(R):re(R)?(o=k,ke(R)):(t.consume(R),k)}function q(R){return R===null||R===34||R===39||R===60||R===61||R===96?n(R):R===47||R===62||sn(R)?A(R):(t.consume(R),q)}function J(R){return R===47||R===62||sn(R)?A(R):n(R)}function ve(R){return R===62?(t.consume(R),t.exit("htmlTextData"),t.exit("htmlText"),e):n(R)}function ke(R){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),W}function W(R){return Te(R)?Le(t,ee,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):ee(R)}function ee(R){return t.enter("htmlTextData"),o(R)}}const o_={name:"labelEnd",resolveAll:c9,resolveTo:h9,tokenize:d9},a9={tokenize:f9},l9={tokenize:p9},u9={tokenize:m9};function c9(t){let e=-1;const n=[];for(;++e<t.length;){const r=t[e][1];if(n.push(t[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return t.length!==n.length&&fr(t,0,t.length,n),t}function h9(t,e){let n=t.length,r=0,i,s,o,a;for(;n--;)if(i=t[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;t[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(t[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=n);const l={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},c={type:"label",start:{...t[s][1].start},end:{...t[o][1].end}},h={type:"labelText",start:{...t[s+r+2][1].end},end:{...t[o-2][1].start}};return a=[["enter",l,e],["enter",c,e]],a=An(a,t.slice(s+1,s+r+3)),a=An(a,[["enter",h,e]]),a=An(a,s_(e.parser.constructs.insideSpan.null,t.slice(s+r+4,o-3),e)),a=An(a,[["exit",h,e],t[o-2],t[o-1],["exit",c,e]]),a=An(a,t.slice(o+1)),a=An(a,[["exit",l,e]]),fr(t,s,t.length,a),t}function d9(t,e,n){const r=this;let i=r.events.length,s,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return a;function a(p){return s?s._inactive?d(p):(o=r.parser.defined.includes(wo(r.sliceSerialize({start:s.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(p),t.exit("labelMarker"),t.exit("labelEnd"),l):n(p)}function l(p){return p===40?t.attempt(a9,h,o?h:d)(p):p===91?t.attempt(l9,h,o?c:d)(p):o?h(p):d(p)}function c(p){return t.attempt(u9,h,d)(p)}function h(p){return e(p)}function d(p){return s._balanced=!0,n(p)}}function f9(t,e,n){return r;function r(d){return t.enter("resource"),t.enter("resourceMarker"),t.consume(d),t.exit("resourceMarker"),i}function i(d){return sn(d)?ol(t,s)(d):s(d)}function s(d){return d===41?h(d):Vx(t,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return sn(d)?ol(t,l)(d):h(d)}function a(d){return n(d)}function l(d){return d===34||d===39||d===40?Fx(t,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):h(d)}function c(d){return sn(d)?ol(t,h)(d):h(d)}function h(d){return d===41?(t.enter("resourceMarker"),t.consume(d),t.exit("resourceMarker"),t.exit("resource"),e):n(d)}}function p9(t,e,n){const r=this;return i;function i(a){return Mx.call(r,t,s,o,"reference","referenceMarker","referenceString")(a)}function s(a){return r.parser.defined.includes(wo(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function o(a){return n(a)}}function m9(t,e,n){return r;function r(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),i}function i(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),e):n(s)}}const g9={name:"labelStartImage",resolveAll:o_.resolveAll,tokenize:y9};function y9(t,e,n){const r=this;return i;function i(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),s}function s(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),o):n(a)}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):e(a)}}const _9={name:"labelStartLink",resolveAll:o_.resolveAll,tokenize:v9};function v9(t,e,n){const r=this;return i;function i(o){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(o),t.exit("labelMarker"),t.exit("labelLink"),s}function s(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):e(o)}}const $f={name:"lineEnding",tokenize:w9};function w9(t,e){return n;function n(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),Le(t,e,"linePrefix")}}const Ec={name:"thematicBreak",tokenize:E9};function E9(t,e,n){let r=0,i;return s;function s(c){return t.enter("thematicBreak"),o(c)}function o(c){return i=c,a(c)}function a(c){return c===i?(t.enter("thematicBreakSequence"),l(c)):r>=3&&(c===null||re(c))?(t.exit("thematicBreak"),e(c)):n(c)}function l(c){return c===i?(t.consume(c),r++,l):(t.exit("thematicBreakSequence"),Te(c)?Le(t,a,"whitespace")(c):a(c))}}const Gt={continuation:{tokenize:S9},exit:x9,name:"list",tokenize:k9},T9={partial:!0,tokenize:C9},I9={partial:!0,tokenize:A9};function k9(t,e,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return a;function a(m){const I=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(I==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:bm(m)){if(r.containerState.type||(r.containerState.type=I,t.enter(I,{_container:!0})),I==="listUnordered")return t.enter("listItemPrefix"),m===42||m===45?t.check(Ec,n,c)(m):c(m);if(!r.interrupt||m===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(m)}return n(m)}function l(m){return bm(m)&&++o<10?(t.consume(m),l):(!r.interrupt||o<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(t.exit("listItemValue"),c(m)):n(m)}function c(m){return t.enter("listItemMarker"),t.consume(m),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,t.check(Td,r.interrupt?n:h,t.attempt(T9,p,d))}function h(m){return r.containerState.initialBlankLine=!0,s++,p(m)}function d(m){return Te(m)?(t.enter("listItemPrefixWhitespace"),t.consume(m),t.exit("listItemPrefixWhitespace"),p):n(m)}function p(m){return r.containerState.size=s+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(m)}}function S9(t,e,n){const r=this;return r.containerState._closeFlow=void 0,t.check(Td,i,s);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Le(t,e,"listItemIndent",r.containerState.size+1)(a)}function s(a){return r.containerState.furtherBlankLines||!Te(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(I9,e,o)(a))}function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Le(t,t.attempt(Gt,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function A9(t,e,n){const r=this;return Le(t,i,"listItemIndent",r.containerState.size+1);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(s):n(s)}}function x9(t){t.exit(this.containerState.type)}function C9(t,e,n){const r=this;return Le(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(s){const o=r.events[r.events.length-1];return!Te(s)&&o&&o[1].type==="listItemPrefixWhitespace"?e(s):n(s)}}const zE={name:"setextUnderline",resolveTo:P9,tokenize:R9};function P9(t,e){let n=t.length,r,i,s;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){r=n;break}t[n][1].type==="paragraph"&&(i=n)}else t[n][1].type==="content"&&t.splice(n,1),!s&&t[n][1].type==="definition"&&(s=n);const o={type:"setextHeading",start:{...t[r][1].start},end:{...t[t.length-1][1].end}};return t[i][1].type="setextHeadingText",s?(t.splice(i,0,["enter",o,e]),t.splice(s+1,0,["exit",t[r][1],e]),t[r][1].end={...t[s][1].end}):t[r][1]=o,t.push(["exit",o,e]),t}function R9(t,e,n){const r=this;let i;return s;function s(c){let h=r.events.length,d;for(;h--;)if(r.events[h][1].type!=="lineEnding"&&r.events[h][1].type!=="linePrefix"&&r.events[h][1].type!=="content"){d=r.events[h][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(t.enter("setextHeadingLine"),i=c,o(c)):n(c)}function o(c){return t.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(t.consume(c),a):(t.exit("setextHeadingLineSequence"),Te(c)?Le(t,l,"lineSuffix")(c):l(c))}function l(c){return c===null||re(c)?(t.exit("setextHeadingLine"),e(c)):n(c)}}const b9={tokenize:N9};function N9(t){const e=this,n=t.attempt(Td,r,t.attempt(this.parser.constructs.flowInitial,i,Le(t,t.attempt(this.parser.constructs.flow,i,t.attempt(M3,i)),"linePrefix")));return n;function r(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function i(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const D9={resolveAll:jx()},O9=Ux("string"),L9=Ux("text");function Ux(t){return{resolveAll:jx(t==="text"?V9:void 0),tokenize:e};function e(n){const r=this,i=this.parser.constructs[t],s=n.attempt(i,o,a);return o;function o(h){return c(h)?s(h):a(h)}function a(h){if(h===null){n.consume(h);return}return n.enter("data"),n.consume(h),l}function l(h){return c(h)?(n.exit("data"),s(h)):(n.consume(h),l)}function c(h){if(h===null)return!0;const d=i[h];let p=-1;if(d)for(;++p<d.length;){const m=d[p];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function jx(t){return e;function e(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return t?t(n,r):n}}function V9(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const r=t[n-1][1],i=e.sliceStream(r);let s=i.length,o=-1,a=0,l;for(;s--;){const c=i[s];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)a++,o--;if(o)break;o=-1}else if(c===-2)l=!0,a++;else if(c!==-1){s++;break}}if(e._contentTypeTextTrailing&&n===t.length&&(a=0),a){const c={type:n===t.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?o:r.start._bufferIndex+o,_index:r.start._index+s,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(t.splice(n,0,["enter",c,e],["exit",c,e]),n+=2)}n++}return t}const M9={42:Gt,43:Gt,45:Gt,48:Gt,49:Gt,50:Gt,51:Gt,52:Gt,53:Gt,54:Gt,55:Gt,56:Gt,57:Gt,62:Nx},F9={91:B3},U9={[-2]:Bf,[-1]:Bf,32:Bf},j9={35:K3,42:Ec,45:[zE,Ec],60:X3,61:zE,95:Ec,96:UE,126:UE},z9={38:Ox,92:Dx},B9={[-5]:$f,[-4]:$f,[-3]:$f,33:g9,38:Ox,42:Nm,60:[_3,s9],91:_9,92:[q3,Dx],93:o_,95:Nm,96:b3},$9={null:[Nm,D9]},H9={null:[42,95]},W9={null:[]},q9=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:H9,contentInitial:F9,disable:W9,document:M9,flow:j9,flowInitial:U9,insideSpan:$9,string:z9,text:B9},Symbol.toStringTag,{value:"Module"}));function G9(t,e,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let o=[],a=[];const l={attempt:x(U),check:x(O),consume:E,enter:T,exit:L,interrupt:x(O,{interrupt:!0})},c={code:null,containerState:{},defineSkip:_,events:[],now:I,parser:t,previous:null,sliceSerialize:p,sliceStream:m,write:d};let h=e.tokenize.call(c,l);return e.resolveAll&&s.push(e),c;function d(C){return o=An(o,C),S(),o[o.length-1]!==null?[]:(v(e,0),c.events=s_(s,c.events,c),c.events)}function p(C,b){return Q9(m(C),b)}function m(C){return K9(o,C)}function I(){const{_bufferIndex:C,_index:b,line:k,column:q,offset:J}=r;return{_bufferIndex:C,_index:b,line:k,column:q,offset:J}}function _(C){i[C.line]=C.column,P()}function S(){let C;for(;r._index<o.length;){const b=o[r._index];if(typeof b=="string")for(C=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===C&&r._bufferIndex<b.length;)y(b.charCodeAt(r._bufferIndex));else y(b)}}function y(C){h=h(C)}function E(C){re(C)?(r.line++,r.column=1,r.offset+=C===-3?2:1,P()):C!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=C}function T(C,b){const k=b||{};return k.type=C,k.start=I(),c.events.push(["enter",k,c]),a.push(k),k}function L(C){const b=a.pop();return b.end=I(),c.events.push(["exit",b,c]),b}function U(C,b){v(C,b.from)}function O(C,b){b.restore()}function x(C,b){return k;function k(q,J,ve){let ke,W,ee,R;return Array.isArray(q)?ge(q):"tokenize"in q?ge([q]):ue(q);function ue(Se){return Wt;function Wt(wn){const mr=wn!==null&&Se[wn],gr=wn!==null&&Se.null,Ls=[...Array.isArray(mr)?mr:mr?[mr]:[],...Array.isArray(gr)?gr:gr?[gr]:[]];return ge(Ls)(wn)}}function ge(Se){return ke=Se,W=0,Se.length===0?ve:D(Se[W])}function D(Se){return Wt;function Wt(wn){return R=A(),ee=Se,Se.partial||(c.currentConstruct=Se),Se.name&&c.parser.constructs.disable.null.includes(Se.name)?Vt():Se.tokenize.call(b?Object.assign(Object.create(c),b):c,l,we,Vt)(wn)}}function we(Se){return C(ee,R),J}function Vt(Se){return R.restore(),++W<ke.length?D(ke[W]):ve}}}function v(C,b){C.resolveAll&&!s.includes(C)&&s.push(C),C.resolve&&fr(c.events,b,c.events.length-b,C.resolve(c.events.slice(b),c)),C.resolveTo&&(c.events=C.resolveTo(c.events,c))}function A(){const C=I(),b=c.previous,k=c.currentConstruct,q=c.events.length,J=Array.from(a);return{from:q,restore:ve};function ve(){r=C,c.previous=b,c.currentConstruct=k,c.events.length=q,a=J,P()}}function P(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function K9(t,e){const n=e.start._index,r=e.start._bufferIndex,i=e.end._index,s=e.end._bufferIndex;let o;if(n===i)o=[t[n].slice(r,s)];else{if(o=t.slice(n,i),r>-1){const a=o[0];typeof a=="string"?o[0]=a.slice(r):o.shift()}s>0&&o.push(t[i].slice(0,s))}return o}function Q9(t,e){let n=-1;const r=[];let i;for(;++n<t.length;){const s=t[n];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,r.push(o)}return r.join("")}function Y9(t){const r={constructs:r3([q9,...(t||{}).extensions||[]]),content:i(h3),defined:[],document:i(f3),flow:i(b9),lazy:{},string:i(O9),text:i(L9)};return r;function i(s){return o;function o(a){return G9(r,s,a)}}}function J9(t){for(;!Lx(t););return t}const BE=/[\0\t\n\r]/g;function X9(){let t=1,e="",n=!0,r;return i;function i(s,o,a){const l=[];let c,h,d,p,m;for(s=e+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s)),d=0,e="",n&&(s.charCodeAt(0)===65279&&d++,n=void 0);d<s.length;){if(BE.lastIndex=d,c=BE.exec(s),p=c&&c.index!==void 0?c.index:s.length,m=s.charCodeAt(p),!c){e=s.slice(d);break}if(m===10&&d===p&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),d<p&&(l.push(s.slice(d,p)),t+=p-d),m){case 0:{l.push(65533),t++;break}case 9:{for(h=Math.ceil(t/4)*4,l.push(-2);t++<h;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:r=!0,t=1}d=p+1}return a&&(r&&l.push(-5),e&&l.push(e),l.push(null)),l}}const Z9=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function eB(t){return t.replace(Z9,tB)}function tB(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return bx(n.slice(s?2:1),s?16:10)}return i_(n)||t}const zx={}.hasOwnProperty;function nB(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),rB(n)(J9(Y9(n).document().write(X9()(t,e,!0))))}function rB(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Ms),autolinkProtocol:A,autolinkEmail:A,atxHeading:s(ea),blockQuote:s(gr),characterEscape:A,characterReference:A,codeFenced:s(Ls),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:s(Ls,o),codeText:s(ou,o),codeTextData:A,data:A,codeFlowValue:A,definition:s(au),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:s(Zo),hardBreakEscape:s(lu),hardBreakTrailing:s(lu),htmlFlow:s(Vs,o),htmlFlowData:A,htmlText:s(Vs,o),htmlTextData:A,image:s(ta),label:o,link:s(Ms),listItem:s(vt),listItemValue:p,listOrdered:s(at,d),listUnordered:s(at),paragraph:s(Fs),reference:D,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:s(ea),strong:s(Sd),thematicBreak:s(Ad)},exit:{atxHeading:l(),atxHeadingSequence:U,autolink:l(),autolinkEmail:mr,autolinkProtocol:wn,blockQuote:l(),characterEscapeValue:P,characterReferenceMarkerHexadecimal:Vt,characterReferenceMarkerNumeric:Vt,characterReferenceValue:Se,characterReference:Wt,codeFenced:l(S),codeFencedFence:_,codeFencedFenceInfo:m,codeFencedFenceMeta:I,codeFlowValue:P,codeIndented:l(y),codeText:l(J),codeTextData:P,data:P,definition:l(),definitionDestinationString:L,definitionLabelString:E,definitionTitleString:T,emphasis:l(),hardBreakEscape:l(b),hardBreakTrailing:l(b),htmlFlow:l(k),htmlFlowData:P,htmlText:l(q),htmlTextData:P,image:l(ke),label:ee,labelText:W,lineEnding:C,link:l(ve),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:we,resourceDestinationString:R,resourceTitleString:ue,resource:ge,setextHeading:l(v),setextHeadingLineSequence:x,setextHeadingText:O,strong:l(),thematicBreak:l()}};Bx(e,(t||{}).mdastExtensions||[]);const n={};return r;function r(j){let G={type:"root",children:[]};const ie={stack:[G],tokenStack:[],config:e,enter:a,exit:c,buffer:o,resume:h,data:n},he=[];let Ae=-1;for(;++Ae<j.length;)if(j[Ae][1].type==="listOrdered"||j[Ae][1].type==="listUnordered")if(j[Ae][0]==="enter")he.push(Ae);else{const an=he.pop();Ae=i(j,an,Ae)}for(Ae=-1;++Ae<j.length;){const an=e[j[Ae][0]];zx.call(an,j[Ae][1].type)&&an[j[Ae][1].type].call(Object.assign({sliceSerialize:j[Ae][2].sliceSerialize},ie),j[Ae][1])}if(ie.tokenStack.length>0){const an=ie.tokenStack[ie.tokenStack.length-1];(an[1]||$E).call(ie,void 0,an[0])}for(G.position={start:Zr(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:Zr(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},Ae=-1;++Ae<e.transforms.length;)G=e.transforms[Ae](G)||G;return G}function i(j,G,ie){let he=G-1,Ae=-1,an=!1,Kn,En,Ln,yr;for(;++he<=ie;){const wt=j[he];switch(wt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{wt[0]==="enter"?Ae++:Ae--,yr=void 0;break}case"lineEndingBlank":{wt[0]==="enter"&&(Kn&&!yr&&!Ae&&!Ln&&(Ln=he),yr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:yr=void 0}if(!Ae&&wt[0]==="enter"&&wt[1].type==="listItemPrefix"||Ae===-1&&wt[0]==="exit"&&(wt[1].type==="listUnordered"||wt[1].type==="listOrdered")){if(Kn){let qt=he;for(En=void 0;qt--;){const Tn=j[qt];if(Tn[1].type==="lineEnding"||Tn[1].type==="lineEndingBlank"){if(Tn[0]==="exit")continue;En&&(j[En][1].type="lineEndingBlank",an=!0),Tn[1].type="lineEnding",En=qt}else if(!(Tn[1].type==="linePrefix"||Tn[1].type==="blockQuotePrefix"||Tn[1].type==="blockQuotePrefixWhitespace"||Tn[1].type==="blockQuoteMarker"||Tn[1].type==="listItemIndent"))break}Ln&&(!En||Ln<En)&&(Kn._spread=!0),Kn.end=Object.assign({},En?j[En][1].start:wt[1].end),j.splice(En||he,0,["exit",Kn,wt[2]]),he++,ie++}if(wt[1].type==="listItemPrefix"){const qt={type:"listItem",_spread:!1,start:Object.assign({},wt[1].start),end:void 0};Kn=qt,j.splice(he,0,["enter",qt,wt[2]]),he++,ie++,Ln=void 0,yr=!0}}}return j[G][1]._spread=an,ie}function s(j,G){return ie;function ie(he){a.call(this,j(he),he),G&&G.call(this,he)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(j,G,ie){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([G,ie||void 0]),j.position={start:Zr(G.start),end:void 0}}function l(j){return G;function G(ie){j&&j.call(this,ie),c.call(this,ie)}}function c(j,G){const ie=this.stack.pop(),he=this.tokenStack.pop();if(he)he[0].type!==j.type&&(G?G.call(this,j,he[0]):(he[1]||$E).call(this,j,he[0]));else throw new Error("Cannot close `"+j.type+"` ("+sl({start:j.start,end:j.end})+"): it’s not open");ie.position.end=Zr(j.end)}function h(){return t3(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(j){if(this.data.expectingFirstListItemValue){const G=this.stack[this.stack.length-2];G.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function m(){const j=this.resume(),G=this.stack[this.stack.length-1];G.lang=j}function I(){const j=this.resume(),G=this.stack[this.stack.length-1];G.meta=j}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const j=this.resume(),G=this.stack[this.stack.length-1];G.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const j=this.resume(),G=this.stack[this.stack.length-1];G.value=j.replace(/(\r?\n|\r)$/g,"")}function E(j){const G=this.resume(),ie=this.stack[this.stack.length-1];ie.label=G,ie.identifier=wo(this.sliceSerialize(j)).toLowerCase()}function T(){const j=this.resume(),G=this.stack[this.stack.length-1];G.title=j}function L(){const j=this.resume(),G=this.stack[this.stack.length-1];G.url=j}function U(j){const G=this.stack[this.stack.length-1];if(!G.depth){const ie=this.sliceSerialize(j).length;G.depth=ie}}function O(){this.data.setextHeadingSlurpLineEnding=!0}function x(j){const G=this.stack[this.stack.length-1];G.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function v(){this.data.setextHeadingSlurpLineEnding=void 0}function A(j){const ie=this.stack[this.stack.length-1].children;let he=ie[ie.length-1];(!he||he.type!=="text")&&(he=uu(),he.position={start:Zr(j.start),end:void 0},ie.push(he)),this.stack.push(he)}function P(j){const G=this.stack.pop();G.value+=this.sliceSerialize(j),G.position.end=Zr(j.end)}function C(j){const G=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ie=G.children[G.children.length-1];ie.position.end=Zr(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(G.type)&&(A.call(this,j),P.call(this,j))}function b(){this.data.atHardBreak=!0}function k(){const j=this.resume(),G=this.stack[this.stack.length-1];G.value=j}function q(){const j=this.resume(),G=this.stack[this.stack.length-1];G.value=j}function J(){const j=this.resume(),G=this.stack[this.stack.length-1];G.value=j}function ve(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=G,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function ke(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const G=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=G,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function W(j){const G=this.sliceSerialize(j),ie=this.stack[this.stack.length-2];ie.label=eB(G),ie.identifier=wo(G).toLowerCase()}function ee(){const j=this.stack[this.stack.length-1],G=this.resume(),ie=this.stack[this.stack.length-1];if(this.data.inReference=!0,ie.type==="link"){const he=j.children;ie.children=he}else ie.alt=G}function R(){const j=this.resume(),G=this.stack[this.stack.length-1];G.url=j}function ue(){const j=this.resume(),G=this.stack[this.stack.length-1];G.title=j}function ge(){this.data.inReference=void 0}function D(){this.data.referenceType="collapsed"}function we(j){const G=this.resume(),ie=this.stack[this.stack.length-1];ie.label=G,ie.identifier=wo(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function Vt(j){this.data.characterReferenceType=j.type}function Se(j){const G=this.sliceSerialize(j),ie=this.data.characterReferenceType;let he;ie?(he=bx(G,ie==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):he=i_(G);const Ae=this.stack[this.stack.length-1];Ae.value+=he}function Wt(j){const G=this.stack.pop();G.position.end=Zr(j.end)}function wn(j){P.call(this,j);const G=this.stack[this.stack.length-1];G.url=this.sliceSerialize(j)}function mr(j){P.call(this,j);const G=this.stack[this.stack.length-1];G.url="mailto:"+this.sliceSerialize(j)}function gr(){return{type:"blockquote",children:[]}}function Ls(){return{type:"code",lang:null,meta:null,value:""}}function ou(){return{type:"inlineCode",value:""}}function au(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Zo(){return{type:"emphasis",children:[]}}function ea(){return{type:"heading",depth:0,children:[]}}function lu(){return{type:"break"}}function Vs(){return{type:"html",value:""}}function ta(){return{type:"image",title:null,url:"",alt:null}}function Ms(){return{type:"link",title:null,url:"",children:[]}}function at(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function vt(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function Fs(){return{type:"paragraph",children:[]}}function Sd(){return{type:"strong",children:[]}}function uu(){return{type:"text",value:""}}function Ad(){return{type:"thematicBreak"}}}function Zr(t){return{line:t.line,column:t.column,offset:t.offset}}function Bx(t,e){let n=-1;for(;++n<e.length;){const r=e[n];Array.isArray(r)?Bx(t,r):iB(t,r)}}function iB(t,e){let n;for(n in e)if(zx.call(e,n))switch(n){case"canContainEols":{const r=e[n];r&&t[n].push(...r);break}case"transforms":{const r=e[n];r&&t[n].push(...r);break}case"enter":case"exit":{const r=e[n];r&&Object.assign(t[n],r);break}}}function $E(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+sl({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+sl({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+sl({start:e.start,end:e.end})+") is still open")}function sB(t){const e=this;e.parser=n;function n(r){return nB(r,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function oB(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function aB(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function lB(t,e){const n=e.value?e.value+`
`:"",r={},i=e.lang?e.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return e.meta&&(s.data={meta:e.meta}),t.patch(e,s),s=t.applyData(e,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(e,s),s}function uB(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function cB(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function hB(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=Xo(r.toLowerCase()),s=t.footnoteOrder.indexOf(r);let o,a=t.footnoteCounts.get(r);a===void 0?(a=0,t.footnoteOrder.push(r),o=t.footnoteOrder.length):o=s+1,a+=1,t.footnoteCounts.set(r,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};t.patch(e,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,c),t.applyData(e,c)}function dB(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function fB(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function $x(t,e){const n=e.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=t.all(e),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function pB(t,e){const n=String(e.identifier).toUpperCase(),r=t.definitionById.get(n);if(!r)return $x(t,e);const i={src:Xo(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return t.patch(e,s),t.applyData(e,s)}function mB(t,e){const n={src:Xo(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,r),t.applyData(e,r)}function gB(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,r),t.applyData(e,r)}function yB(t,e){const n=String(e.identifier).toUpperCase(),r=t.definitionById.get(n);if(!r)return $x(t,e);const i={href:Xo(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:t.all(e)};return t.patch(e,s),t.applyData(e,s)}function _B(t,e){const n={href:Xo(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function vB(t,e,n){const r=t.all(e),i=n?wB(n):Hx(e),s={},o=[];if(typeof e.checked=="boolean"){const h=r[0];let d;h&&h.type==="element"&&h.tagName==="p"?d=h:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const h=r[a];(i||a!==0||h.type!=="element"||h.tagName!=="p")&&o.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!i?o.push(...h.children):o.push(h)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:s,children:o};return t.patch(e,c),t.applyData(e,c)}function wB(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let r=-1;for(;!e&&++r<n.length;)e=Hx(n[r])}return e}function Hx(t){const e=t.spread;return e??t.children.length>1}function EB(t,e){const n={},r=t.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(r,!0)};return t.patch(e,s),t.applyData(e,s)}function TB(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function IB(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function kB(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function SB(t,e){const n=t.all(e),r=n.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:t.wrap([r],!0)};t.patch(e.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},a=e_(e.children[1]),l=kx(e.children[e.children.length-1]);a&&l&&(o.position={start:a,end:l}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(i,!0)};return t.patch(e,s),t.applyData(e,s)}function AB(t,e,n){const r=n?n.children:void 0,s=(r?r.indexOf(e):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,a=o?o.length:e.children.length;let l=-1;const c=[];for(;++l<a;){const d=e.children[l],p={},m=o?o[l]:void 0;m&&(p.align=m);let I={type:"element",tagName:s,properties:p,children:[]};d&&(I.children=t.all(d),t.patch(d,I),I=t.applyData(d,I)),c.push(I)}const h={type:"element",tagName:"tr",properties:{},children:t.wrap(c,!0)};return t.patch(e,h),t.applyData(e,h)}function xB(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const HE=9,WE=32;function CB(t){const e=String(t),n=/\r?\n|\r/g;let r=n.exec(e),i=0;const s=[];for(;r;)s.push(qE(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(e);return s.push(qE(e.slice(i),i>0,!1)),s.join("")}function qE(t,e,n){let r=0,i=t.length;if(e){let s=t.codePointAt(r);for(;s===HE||s===WE;)r++,s=t.codePointAt(r)}if(n){let s=t.codePointAt(i-1);for(;s===HE||s===WE;)i--,s=t.codePointAt(i-1)}return i>r?t.slice(r,i):""}function PB(t,e){const n={type:"text",value:CB(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function RB(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const bB={blockquote:oB,break:aB,code:lB,delete:uB,emphasis:cB,footnoteReference:hB,heading:dB,html:fB,imageReference:pB,image:mB,inlineCode:gB,linkReference:yB,link:_B,listItem:vB,list:EB,paragraph:TB,root:IB,strong:kB,table:SB,tableCell:xB,tableRow:AB,text:PB,thematicBreak:RB,toml:Gu,yaml:Gu,definition:Gu,footnoteDefinition:Gu};function Gu(){}const Wx=-1,Id=0,al=1,gh=2,a_=3,l_=4,u_=5,c_=6,qx=7,Gx=8,NB=typeof self=="object"?self:globalThis,GE=(t,e)=>{switch(t){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+t)}return new NB[t](e)},DB=(t,e)=>{const n=(i,s)=>(t.set(s,i),i),r=i=>{if(t.has(i))return t.get(i);const[s,o]=e[i];switch(s){case Id:case Wx:return n(o,i);case al:{const a=n([],i);for(const l of o)a.push(r(l));return a}case gh:{const a=n({},i);for(const[l,c]of o)a[r(l)]=r(c);return a}case a_:return n(new Date(o),i);case l_:{const{source:a,flags:l}=o;return n(new RegExp(a,l),i)}case u_:{const a=n(new Map,i);for(const[l,c]of o)a.set(r(l),r(c));return a}case c_:{const a=n(new Set,i);for(const l of o)a.add(r(l));return a}case qx:{const{name:a,message:l}=o;return n(GE(a,l),i)}case Gx:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:a}=new Uint8Array(o);return n(new DataView(a),o)}}return n(GE(s,o),i)};return r},KE=t=>DB(new Map,t)(0),$s="",{toString:OB}={},{keys:LB}=Object,Ca=t=>{const e=typeof t;if(e!=="object"||!t)return[Id,e];const n=OB.call(t).slice(8,-1);switch(n){case"Array":return[al,$s];case"Object":return[gh,$s];case"Date":return[a_,$s];case"RegExp":return[l_,$s];case"Map":return[u_,$s];case"Set":return[c_,$s];case"DataView":return[al,n]}return n.includes("Array")?[al,n]:n.includes("Error")?[qx,n]:[gh,n]},Ku=([t,e])=>t===Id&&(e==="function"||e==="symbol"),VB=(t,e,n,r)=>{const i=(o,a)=>{const l=r.push(o)-1;return n.set(a,l),l},s=o=>{if(n.has(o))return n.get(o);let[a,l]=Ca(o);switch(a){case Id:{let h=o;switch(l){case"bigint":a=Gx,h=o.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);h=null;break;case"undefined":return i([Wx],o)}return i([a,h],o)}case al:{if(l){let p=o;return l==="DataView"?p=new Uint8Array(o.buffer):l==="ArrayBuffer"&&(p=new Uint8Array(o)),i([l,[...p]],o)}const h=[],d=i([a,h],o);for(const p of o)h.push(s(p));return d}case gh:{if(l)switch(l){case"BigInt":return i([l,o.toString()],o);case"Boolean":case"Number":case"String":return i([l,o.valueOf()],o)}if(e&&"toJSON"in o)return s(o.toJSON());const h=[],d=i([a,h],o);for(const p of LB(o))(t||!Ku(Ca(o[p])))&&h.push([s(p),s(o[p])]);return d}case a_:return i([a,o.toISOString()],o);case l_:{const{source:h,flags:d}=o;return i([a,{source:h,flags:d}],o)}case u_:{const h=[],d=i([a,h],o);for(const[p,m]of o)(t||!(Ku(Ca(p))||Ku(Ca(m))))&&h.push([s(p),s(m)]);return d}case c_:{const h=[],d=i([a,h],o);for(const p of o)(t||!Ku(Ca(p)))&&h.push(s(p));return d}}const{message:c}=o;return i([a,{name:l,message:c}],o)};return s},QE=(t,{json:e,lossy:n}={})=>{const r=[];return VB(!(e||n),!!e,new Map,r)(t),r},yh=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?KE(QE(t,e)):structuredClone(t):(t,e)=>KE(QE(t,e));function MB(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function FB(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function UB(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||MB,r=t.options.footnoteBackLabel||FB,i=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",o=t.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<t.footnoteOrder.length;){const c=t.footnoteById.get(t.footnoteOrder[l]);if(!c)continue;const h=t.all(c),d=String(c.identifier).toUpperCase(),p=Xo(d.toLowerCase());let m=0;const I=[],_=t.footnoteCounts.get(d);for(;_!==void 0&&++m<=_;){I.length>0&&I.push({type:"text",value:" "});let E=typeof n=="string"?n:n(l,m);typeof E=="string"&&(E={type:"text",value:E}),I.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+p+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,m),className:["data-footnote-backref"]},children:Array.isArray(E)?E:[E]})}const S=h[h.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const E=S.children[S.children.length-1];E&&E.type==="text"?E.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...I)}else h.push(...I);const y={type:"element",tagName:"li",properties:{id:e+"fn-"+p},children:t.wrap(h,!0)};t.patch(c,y),a.push(y)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...yh(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(a,!0)},{type:"text",value:`
`}]}}const Kx=function(t){if(t==null)return $B;if(typeof t=="function")return kd(t);if(typeof t=="object")return Array.isArray(t)?jB(t):zB(t);if(typeof t=="string")return BB(t);throw new Error("Expected function, string, or object as test")};function jB(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=Kx(t[n]);return kd(r);function r(...i){let s=-1;for(;++s<e.length;)if(e[s].apply(this,i))return!0;return!1}}function zB(t){const e=t;return kd(n);function n(r){const i=r;let s;for(s in t)if(i[s]!==e[s])return!1;return!0}}function BB(t){return kd(e);function e(n){return n&&n.type===t}}function kd(t){return e;function e(n,r,i){return!!(HB(n)&&t.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function $B(){return!0}function HB(t){return t!==null&&typeof t=="object"&&"type"in t}const Qx=[],WB=!0,YE=!1,qB="skip";function GB(t,e,n,r){let i;typeof e=="function"&&typeof n!="function"?(r=n,n=e):i=e;const s=Kx(i),o=r?-1:1;a(t,void 0,[])();function a(l,c,h){const d=l&&typeof l=="object"?l:{};if(typeof d.type=="string"){const m=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(m?"<"+m+">":""))+")"})}return p;function p(){let m=Qx,I,_,S;if((!e||s(l,c,h[h.length-1]||void 0))&&(m=KB(n(l,h)),m[0]===YE))return m;if("children"in l&&l.children){const y=l;if(y.children&&m[0]!==qB)for(_=(r?y.children.length:-1)+o,S=h.concat(y);_>-1&&_<y.children.length;){const E=y.children[_];if(I=a(E,_,S)(),I[0]===YE)return I;_=typeof I[1]=="number"?I[1]:_+o}}return m}}}function KB(t){return Array.isArray(t)?t:typeof t=="number"?[WB,t]:t==null?Qx:[t]}function Yx(t,e,n,r){let i,s,o;typeof e=="function"&&typeof n!="function"?(s=void 0,o=e,i=n):(s=e,o=n,i=r),GB(t,s,a,i);function a(l,c){const h=c[c.length-1],d=h?h.children.indexOf(l):void 0;return o(l,d,h)}}const Dm={}.hasOwnProperty,QB={};function YB(t,e){const n=e||QB,r=new Map,i=new Map,s=new Map,o={...bB,...n.handlers},a={all:c,applyData:XB,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:l,options:n,patch:JB,wrap:e5};return Yx(t,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const d=h.type==="definition"?r:i,p=String(h.identifier).toUpperCase();d.has(p)||d.set(p,h)}}),a;function l(h,d){const p=h.type,m=a.handlers[p];if(Dm.call(a.handlers,p)&&m)return m(a,h,d);if(a.options.passThrough&&a.options.passThrough.includes(p)){if("children"in h){const{children:_,...S}=h,y=yh(S);return y.children=a.all(h),y}return yh(h)}return(a.options.unknownHandler||ZB)(a,h,d)}function c(h){const d=[];if("children"in h){const p=h.children;let m=-1;for(;++m<p.length;){const I=a.one(p[m],h);if(I){if(m&&p[m-1].type==="break"&&(!Array.isArray(I)&&I.type==="text"&&(I.value=JE(I.value)),!Array.isArray(I)&&I.type==="element")){const _=I.children[0];_&&_.type==="text"&&(_.value=JE(_.value))}Array.isArray(I)?d.push(...I):d.push(I)}}}return d}}function JB(t,e){t.position&&(e.position=Dz(t))}function XB(t,e){let n=e;if(t&&t.data){const r=t.data.hName,i=t.data.hChildren,s=t.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&s&&Object.assign(n.properties,yh(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function ZB(t,e){const n=e.data||{},r="value"in e&&!(Dm.call(n,"hProperties")||Dm.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)}function e5(t,e){const n=[];let r=-1;for(e&&n.push({type:"text",value:`
`});++r<t.length;)r&&n.push({type:"text",value:`
`}),n.push(t[r]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function JE(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function XE(t,e){const n=YB(t,e),r=n.one(t,void 0),i=UB(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function t5(t,e){return t&&"run"in t?async function(n,r){const i=XE(n,{file:r,...e});await t.run(i,r)}:function(n,r){return XE(n,{file:r,...t||e})}}function ZE(t){if(t)throw t}var Tc=Object.prototype.hasOwnProperty,Jx=Object.prototype.toString,eT=Object.defineProperty,tT=Object.getOwnPropertyDescriptor,nT=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Jx.call(e)==="[object Array]"},rT=function(e){if(!e||Jx.call(e)!=="[object Object]")return!1;var n=Tc.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&Tc.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!r)return!1;var i;for(i in e);return typeof i>"u"||Tc.call(e,i)},iT=function(e,n){eT&&n.name==="__proto__"?eT(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},sT=function(e,n){if(n==="__proto__")if(Tc.call(e,n)){if(tT)return tT(e,n).value}else return;return e[n]},n5=function t(){var e,n,r,i,s,o,a=arguments[0],l=1,c=arguments.length,h=!1;for(typeof a=="boolean"&&(h=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<c;++l)if(e=arguments[l],e!=null)for(n in e)r=sT(a,n),i=sT(e,n),a!==i&&(h&&i&&(rT(i)||(s=nT(i)))?(s?(s=!1,o=r&&nT(r)?r:[]):o=r&&rT(r)?r:{},iT(a,{name:n,newValue:t(h,o,i)})):typeof i<"u"&&iT(a,{name:n,newValue:i}));return a};const Hf=Vm(n5);function Om(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function r5(){const t=[],e={run:n,use:r};return e;function n(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);a(null,...i);function a(l,...c){const h=t[++s];let d=-1;if(l){o(l);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,h?i5(h,a)(...c):o(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return t.push(i),e}}function i5(t,e){let n;return r;function r(...o){const a=t.length>o.length;let l;a&&o.push(i);try{l=t.apply(this,o)}catch(c){const h=c;if(a&&n)throw h;return i(h)}a||(l&&l.then&&typeof l.then=="function"?l.then(s,i):l instanceof Error?i(l):s(l))}function i(o,...a){n||(n=!0,e(o,...a))}function s(o){i(null,o)}}const Zn={basename:s5,dirname:o5,extname:a5,join:l5,sep:"/"};function s5(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');su(t);let n=0,r=-1,i=t.length,s;if(e===void 0||e.length===0||e.length>t.length){for(;i--;)if(t.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":t.slice(n,r)}if(e===t)return"";let o=-1,a=e.length-1;for(;i--;)if(t.codePointAt(i)===47){if(s){n=i+1;break}}else o<0&&(s=!0,o=i+1),a>-1&&(t.codePointAt(i)===e.codePointAt(a--)?a<0&&(r=i):(a=-1,r=o));return n===r?r=o:r<0&&(r=t.length),t.slice(n,r)}function o5(t){if(su(t),t.length===0)return".";let e=-1,n=t.length,r;for(;--n;)if(t.codePointAt(n)===47){if(r){e=n;break}}else r||(r=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function a5(t){su(t);let e=t.length,n=-1,r=0,i=-1,s=0,o;for(;e--;){const a=t.codePointAt(e);if(a===47){if(o){r=e+1;break}continue}n<0&&(o=!0,n=e+1),a===46?i<0?i=e:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":t.slice(i,n)}function l5(...t){let e=-1,n;for(;++e<t.length;)su(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":u5(n)}function u5(t){su(t);const e=t.codePointAt(0)===47;let n=c5(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function c5(t,e){let n="",r=0,i=-1,s=0,o=-1,a,l;for(;++o<=t.length;){if(o<t.length)a=t.codePointAt(o);else{if(a===47)break;a=47}if(a===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=o,s=0;continue}}else if(n.length>0){n="",r=0,i=o,s=0;continue}}e&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+t.slice(i+1,o):n=t.slice(i+1,o),r=o-i-1;i=o,s=0}else a===46&&s>-1?s++:s=-1}return n}function su(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const h5={cwd:d5};function d5(){return"/"}function Lm(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function f5(t){if(typeof t=="string")t=new URL(t);else if(!Lm(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return p5(t)}function p5(t){if(t.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const r=e.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const Wf=["history","path","basename","stem","extname","dirname"];class Xx{constructor(e){let n;e?Lm(e)?n={path:e}:typeof e=="string"||m5(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":h5.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Wf.length;){const s=Wf[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)Wf.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Zn.basename(this.path):void 0}set basename(e){Gf(e,"basename"),qf(e,"basename"),this.path=Zn.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Zn.dirname(this.path):void 0}set dirname(e){oT(this.basename,"dirname"),this.path=Zn.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Zn.extname(this.path):void 0}set extname(e){if(qf(e,"extname"),oT(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Zn.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Lm(e)&&(e=f5(e)),Gf(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Zn.basename(this.path,this.extname):void 0}set stem(e){Gf(e,"stem"),qf(e,"stem"),this.path=Zn.join(this.dirname||"",e+(this.extname||""))}fail(e,n,r){const i=this.message(e,n,r);throw i.fatal=!0,i}info(e,n,r){const i=this.message(e,n,r);return i.fatal=void 0,i}message(e,n,r){const i=new Lt(e,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function qf(t,e){if(t&&t.includes(Zn.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Zn.sep+"`")}function Gf(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function oT(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function m5(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const g5=function(t){const r=this.constructor.prototype,i=r[t],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},y5={}.hasOwnProperty;class h_ extends g5{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=r5()}copy(){const e=new h_;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];e.use(...r)}return e.data(Hf(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Yf("data",this.frozen),this.namespace[e]=n,this):y5.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Yf("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=Qu(e),r=this.parser||this.Parser;return Kf("parse",r),r(String(n),n)}process(e,n){const r=this;return this.freeze(),Kf("process",this.parser||this.Parser),Qf("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,o){const a=Qu(e),l=r.parse(a);r.run(l,a,function(h,d,p){if(h||!d||!p)return c(h);const m=d,I=r.stringify(m,p);w5(I)?p.value=I:p.result=I,c(h,p)});function c(h,d){h||!d?o(h):s?s(d):n(void 0,d)}}}processSync(e){let n=!1,r;return this.freeze(),Kf("processSync",this.parser||this.Parser),Qf("processSync",this.compiler||this.Compiler),this.process(e,i),lT("processSync","process",n),r;function i(s,o){n=!0,ZE(s),r=o}}run(e,n,r){aT(e),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(o,a){const l=Qu(n);i.run(e,l,c);function c(h,d,p){const m=d||e;h?a(h):o?o(m):r(void 0,m,p)}}}runSync(e,n){let r=!1,i;return this.run(e,n,s),lT("runSync","run",r),i;function s(o,a){ZE(o),i=a,r=!0}}stringify(e,n){this.freeze();const r=Qu(n),i=this.compiler||this.Compiler;return Qf("stringify",i),aT(e),i(e,r)}use(e,...n){const r=this.attachers,i=this.namespace;if(Yf("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?a(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function s(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[h,...d]=c;l(h,d)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Hf(!0,i.settings,c.settings))}function a(c){let h=-1;if(c!=null)if(Array.isArray(c))for(;++h<c.length;){const d=c[h];s(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,h){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===c){p=d;break}if(p===-1)r.push([c,...h]);else if(h.length>0){let[m,...I]=h;const _=r[p][1];Om(_)&&Om(m)&&(m=Hf(!0,_,m)),r[p]=[c,m,...I]}}}}const _5=new h_().freeze();function Kf(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Qf(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Yf(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function aT(t){if(!Om(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function lT(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function Qu(t){return v5(t)?t:new Xx(t)}function v5(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function w5(t){return typeof t=="string"||E5(t)}function E5(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const T5="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",uT=[],cT={allowDangerousHtml:!0},I5=/^(https?|ircs?|mailto|xmpp)$/i,k5=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function S5(t){const e=A5(t),n=x5(t);return C5(e.runSync(e.parse(n),n),t)}function A5(t){const e=t.rehypePlugins||uT,n=t.remarkPlugins||uT,r=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...cT}:cT;return _5().use(sB).use(n).use(t5,r).use(e)}function x5(t){const e=t.children||"",n=new Xx;return typeof e=="string"&&(n.value=e),n}function C5(t,e){const n=e.allowedElements,r=e.allowElement,i=e.components,s=e.disallowedElements,o=e.skipHtml,a=e.unwrapDisallowed,l=e.urlTransform||P5;for(const h of k5)Object.hasOwn(e,h.from)&&(""+h.from+(h.to?"use `"+h.to+"` instead":"remove it")+T5+h.id,void 0);return Yx(t,c),Fz(t,{Fragment:N.Fragment,components:i,ignoreInvalidStyle:!0,jsx:N.jsx,jsxs:N.jsxs,passKeys:!0,passNode:!0});function c(h,d,p){if(h.type==="raw"&&p&&typeof d=="number")return o?p.children.splice(d,1):p.children[d]={type:"text",value:h.value},d;if(h.type==="element"){let m;for(m in zf)if(Object.hasOwn(zf,m)&&Object.hasOwn(h.properties,m)){const I=h.properties[m],_=zf[m];(_===null||_.includes(h.tagName))&&(h.properties[m]=l(String(I||""),m,h))}}if(h.type==="element"){let m=n?!n.includes(h.tagName):s?s.includes(h.tagName):!1;if(!m&&r&&typeof d=="number"&&(m=!r(h,d,p)),m&&p&&typeof d=="number")return a&&h.children?p.children.splice(d,1,...h.children):p.children.splice(d,1),d}}}function P5(t){const e=t.indexOf(":"),n=t.indexOf("?"),r=t.indexOf("#"),i=t.indexOf("/");return e===-1||i!==-1&&e>i||n!==-1&&e>n||r!==-1&&e>r||I5.test(t.slice(0,e))?t:""}const Pa={cgpa:`**Bihar Engineering University (BEU) CGPA & SGPA Guidelines:**

* **SGPA to Percentage Formula:**
  $$\\text{Percentage (\\%)} = (\\text{CGPA} - 0.75) \\times 10$$
  
* **Example:** Agar aapka CGPA **8.5** hai, to aapki overall percentage hogi: 
  $(8.5 - 0.75) \\times 10 = 77.5\\%$.

* **SGPA calculation:** SGPA = $\\sum(\\text{Subject Credits} \\times \\text{Grade Points}) / \\sum(\\text{Total Credits})$.

Aap hamare **SGPA CalC** section me jaakar Semester wise SGPA details aasaani se count kar sakte hain!`,cutoff:`**Bihar Engineering UGEAC Cutoff & Admission:**

* **Admission Process:** Bihar ke engineering colleges me B.Tech admission JEE Mains ke CRL rank aur category ke basis par **UGEAC counselling** ke through hota hai.
* **Top Colleges:** MIT Muzaffarpur, BCE Bhagalpur, GCE Gaya, MCE Motihari, DCE Darbhanga.
* **Predictor:** Apna College Bihar par Category-wise cutoffs par based **UGEAC Predictor** active hai.

Aap side menu me **UGEAC Predictor** par click karke college check kar sakte hain!`,notes:`**Notes, Syllabus & PYQs:**

* **Notes & PYQs Hub:** Page par sabhi semesters aur branches (CSE, Civil, Mechanical, ECE, EEE, EE) ke handwritten notes aur BEU के original PYQ papers PDFs available hain.
* **Syllabus:** New syllabus copy direct **BEU Syllabus** section me dekhein.

Aap unhe local mobile storage me download kar sakte hain!`,counselling:`**UGEAC counselling updates:**

* **Schedule:** UGEAC registration generally JEE Main ke results ke baad (June/July) me start hoti hai.
* **Docs:** JEE Score Card, 10th & 12th Marks Sheet, Category Certificate, Resident Certificate, UGEAC Part A & B.

Updates ke liye WhatsApp channel join karein!`,default:`Pranam! Main hoon **Apna College Bihar AI Assistant** (ACB AI).

Aap mujhse BEU syllabus, CGPA calculations, Notes aur PYQs ya UGEAC counselling ke baare me pooch sakte hain. Niche suggestion chips tap karein ya details type karein.`};function R5(){const[t,e]=M.useState(!1),[n,r]=M.useState([{id:"welcome",sender:"bot",text:`Pranam! Main aapka Apna College Bihar AI Assistant hoon. 

Aap mujhse Bihar Engineering University (BEU) syllabus, CGPA rules, college cutoff ya notes ke baare me koi bhi doubt pooch sakte hain. 

Aapki kya madad karu papa?`,timestamp:new Date}]),[i,s]=M.useState(""),[o,a]=M.useState(!1),[l,c]=M.useState(!1),h=M.useRef(null),d=[{label:"BEU CGPA to Percentage?",query:"cgpa"},{label:"UGEAC College Predictor",query:"cutoff"},{label:"Notes & Syllabus PDF",query:"notes"},{label:"Counselling Docs Required",query:"counselling"}],p=()=>{var _;(_=h.current)==null||_.scrollIntoView({behavior:"smooth"})};M.useEffect(()=>{t&&p()},[n,o,t]),M.useEffect(()=>{(async()=>{try{const S=await fetch("/api/ai/status");S.ok&&(await S.json()).configured||c(!0)}catch{c(!0)}})()},[]);const m=_=>{const S=_.toLowerCase();return S.includes("cgpa")||S.includes("sgpa")||S.includes("percentage")||S.includes("marks")||S.includes("grade")?Pa.cgpa:S.includes("cutoff")||S.includes("cut off")||S.includes("rank")||S.includes("predict")||S.includes("college")||S.includes("mit")||S.includes("bce")?Pa.cutoff:S.includes("notes")||S.includes("pyq")||S.includes("book")||S.includes("question paper")||S.includes("pdf")||S.includes("syllabus")?Pa.notes:S.includes("counselling")||S.includes("counseling")||S.includes("ugeac")||S.includes("registration")||S.includes("bceceb")?Pa.counselling:S.includes("hello")||S.includes("hi")||S.includes("hey")||S.includes("namaste")||S.includes("pranam")||S.includes("kaise ho")?Pa.default:`Aapne pucha: "${_}"

Mujhe local library me iski jankari nahi mili. System administrator ne backend me **GEMINI_API_KEY** set nahi kiya hai.

Tab tak aap ye sawal pooch sakte hain:
* **BEU CGPA calculation**
* **UGEAC counselling updates**
* **Notes & Syllabus access**`},I=async _=>{const S=_||i;if(!S.trim())return;const y={id:Date.now().toString(),sender:"user",text:S,timestamp:new Date};if(r(E=>[...E,y]),s(""),a(!0),l){setTimeout(()=>{const E=m(S);r(T=>[...T,{id:(Date.now()+1).toString(),sender:"bot",text:E,timestamp:new Date}]),a(!1)},600);return}try{const E=n.slice(-10).map(U=>({sender:U.sender,text:U.text})),T=await fetch("/api/ai/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[...E,{sender:"user",text:S}]})});if(!T.ok)throw new Error("API connection failure");const L=await T.json();if(L.isFallback){c(!0);const U=m(S);r(O=>[...O,{id:(Date.now()+1).toString(),sender:"bot",text:U,timestamp:new Date}])}else r(U=>[...U,{id:(Date.now()+1).toString(),sender:"bot",text:L.reply||"Aapke query ka response process nahi ho paya.",timestamp:new Date}])}catch(E){console.error("Chat error:",E);const T=m(S);r(L=>[...L,{id:(Date.now()+1).toString(),sender:"bot",text:`⚠️ **Server down! Smart Offline Answer:**

${T}`,timestamp:new Date}])}finally{a(!1)}};return N.jsxs(N.Fragment,{children:[N.jsx("button",{onClick:()=>e(!t),className:"fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[140] w-14 h-14 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 hover:scale-110 active:scale-95 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(79,70,229,0.4)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.6)] transition-all duration-300 group","aria-label":"Chat with AI",children:t?N.jsx(Yp,{className:"w-6 h-6 animate-in spin-in-90 duration-200"}):N.jsxs("div",{className:"relative",children:[N.jsx(qN,{className:"w-6 h-6 animate-in zoom-in duration-200 group-hover:rotate-6 transition-transform"}),N.jsxs("span",{className:"absolute -top-1.5 -right-1.5 flex h-3 w-3",children:[N.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),N.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-emerald-500"})]})]})}),t&&N.jsxs("div",{className:"fixed inset-0 md:inset-auto md:bottom-28 md:right-10 w-full h-full md:w-[380px] md:h-[550px] bg-[#0a0f1d] md:bg-[#0a0f1d]/95 md:backdrop-blur-xl border border-white/10 md:rounded-[2rem] shadow-2xl flex flex-col z-[150] overflow-hidden animate-in slide-in-from-bottom duration-300",children:[N.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"}),N.jsxs("div",{className:"bg-[#10192d]/90 backdrop-blur-xl border-b border-white/10 p-4 flex items-center justify-between shrink-0 relative z-10",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsxs("div",{className:"w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/15 relative",children:[N.jsx(gf,{size:18,className:"text-white"}),N.jsx("div",{className:"absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#10192d] rounded-full"})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5",children:"ACB Doubts Solver"}),N.jsxs("p",{className:"text-[8px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1 mt-0.5",children:[N.jsx(QN,{size:8,className:"text-blue-400"}),l?"Local Assistant":"Gemini AI Engine"]})]})]}),N.jsx("button",{onClick:()=>e(!1),className:"p-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-xl transition-all",children:N.jsx(Yp,{size:16})})]}),N.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar relative z-10",children:[n.map(_=>N.jsxs("div",{className:`flex items-start gap-2.5 max-w-[85%] ${_.sender==="user"?"ml-auto flex-row-reverse":""}`,children:[N.jsx("div",{className:`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow ${_.sender==="user"?"bg-blue-600 text-white":"bg-[#152036] border border-white/10 text-blue-400"}`,children:_.sender==="user"?N.jsx(JN,{size:12}):N.jsx(gf,{size:12})}),N.jsxs("div",{className:`p-3 rounded-2xl text-[11px] leading-relaxed font-medium shadow-sm transition-all ${_.sender==="user"?"bg-blue-600 text-white rounded-tr-none":"bg-[#121b2d] border border-white/5 text-slate-200 rounded-tl-none prose prose-invert prose-xs max-w-none"}`,children:[_.sender==="user"?N.jsx("p",{className:"whitespace-pre-wrap",children:_.text}):N.jsx(S5,{children:_.text}),N.jsx("span",{className:`block text-[6px] mt-1.5 text-right ${_.sender==="user"?"text-blue-200":"text-slate-500"}`,children:new Date(_.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},_.id)),o&&N.jsxs("div",{className:"flex items-start gap-2.5 max-w-[80%]",children:[N.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#152036] border border-white/10 text-blue-400 flex items-center justify-center shrink-0",children:N.jsx(gf,{size:12})}),N.jsx("div",{className:"bg-[#121b2d] border border-white/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5",children:N.jsxs("div",{className:"flex space-x-1",children:[N.jsx("div",{className:"w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),N.jsx("div",{className:"w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),N.jsx("div",{className:"w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})]}),N.jsx("div",{ref:h})]}),n.length===1&&N.jsxs("div",{className:"p-3 pt-0 space-y-1.5 relative z-10 shrink-0 border-t border-white/5 bg-[#0a0f1d]/50",children:[N.jsxs("p",{className:"text-[8px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1 px-1",children:[N.jsx(WN,{size:8})," Suggested questions:"]}),N.jsx("div",{className:"flex gap-1.5 overflow-x-auto pb-1 no-scrollbar scroll-smooth",children:d.map((_,S)=>N.jsx("button",{onClick:()=>I(_.label),className:"flex-shrink-0 px-2.5 py-1.5 bg-[#152036]/60 hover:bg-[#1a2948] border border-white/5 text-slate-300 hover:text-white rounded-lg text-[9px] font-bold transition-all active:scale-95",children:_.label},S))})]}),N.jsxs("div",{className:"p-3 bg-[#0f182c]/85 border-t border-white/10 relative z-10 flex items-center gap-2 shrink-0",children:[N.jsx("input",{value:i,onChange:_=>s(_.target.value),onKeyDown:_=>_.key==="Enter"&&I(),placeholder:"Ask me anything...",disabled:o,className:"flex-1 bg-[#152036] border border-white/5 focus:border-blue-500/50 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none placeholder:text-slate-500 transition-all disabled:opacity-50"}),N.jsx("button",{onClick:()=>I(),disabled:o||!i.trim(),className:"p-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0",children:N.jsx(GN,{size:12})})]})]})]})}function b5(){zr.isNativePlatform();const t=Uo(),e=Vg(),{user:n,updateProfileData:r}=Yo(),[i,s]=M.useState(""),[o,a]=M.useState(!1),[l,c]=M.useState(!1),[h,d]=M.useState(navigator.onLine);wE(),M.useEffect(()=>{const I=()=>d(!0),_=()=>d(!1);return window.addEventListener("online",I),window.addEventListener("offline",_),()=>{window.removeEventListener("online",I),window.removeEventListener("offline",_)}},[]),M.useEffect(()=>{h&&n&&n.uid&&!n.phone?a(!0):a(!1),(async()=>{if(!(!n||!Tm||!h))try{if(await Notification.requestPermission()==="granted"){const S=await I6(Tm,{vapidKey:S6});S&&await Ul(os(cs,"users",n.uid),{fcmToken:S})}}catch(_){console.error("Push notification setup failed:",_)}})()},[n,h]);const p=async I=>{if(I.preventDefault(),!(i.length<10)){c(!0);try{await r({phone:i}),a(!1)}catch(_){console.error(_)}finally{c(!1)}}},m=()=>{const{timerActive:I,timerTime:_}=wE(),[S,y]=M.useState(!1);if(!I||t.pathname==="/dashboard/study")return null;const E=Math.floor(_%3600/60),T=_%60;return N.jsx("div",{className:`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${S?"translate-x-[70%]":""}`,children:N.jsxs("div",{className:"bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group",children:[N.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse",children:N.jsx(YN,{size:20,className:"text-white"})}),N.jsxs("div",{className:`flex items-center gap-4 pr-6 ${S?"opacity-0 w-0 overflow-hidden":"opacity-100"}`,children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1",children:"Live Focus"}),N.jsxs("p",{className:"text-xl font-black text-white tabular-nums tracking-tighter",children:[E.toString().padStart(2,"0"),":",T.toString().padStart(2,"0")]})]}),N.jsx("button",{onClick:()=>e("/dashboard/study"),className:"px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest",children:"Resume"})]}),N.jsx("button",{onClick:()=>y(!S),className:"p-2 text-slate-500 hover:text-white",children:S?N.jsx(Ew,{size:16}):N.jsx(Yp,{size:16})})]})})};return N.jsxs("div",{className:"flex flex-col h-screen bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30",children:[N.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-[100]",children:[N.jsxs("button",{onClick:()=>{var I;((I=t.state)==null?void 0:I.from)==="study-network"?e("/dashboard/study?standalone=true",{state:{tab:"network"}}):e(-1)},className:"flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group",children:[N.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-all",children:N.jsx(Ew,{size:20})}),N.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Back"})]}),N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg object-cover shadow-sm"}),N.jsx("span",{className:"text-[10px] font-[1000] tracking-tighter uppercase text-slate-900",children:"ACB Hub"})]})]}),N.jsx("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 p-4 md:p-6 lg:p-8 pb-32",children:N.jsx("div",{className:"max-w-7xl mx-auto min-h-[80vh]",children:N.jsx(Fg,{})})}),o&&h&&N.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:N.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[N.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:N.jsx(KN,{size:32})}),N.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),N.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),N.jsxs("form",{onSubmit:p,className:"space-y-6",children:[N.jsxs("div",{className:"flex gap-2",children:[N.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),N.jsx("input",{type:"tel",maxLength:10,value:i,onChange:I=>s(I.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),N.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})}),N.jsx(m,{}),N.jsx(R5,{})]})}const N5=()=>{var h;const{user:t,loading:e,updateProfileData:n,logout:r}=Yo(),[i,s]=M.useState(""),[o,a]=M.useState(!1);if(e)return N.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:N.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),N.jsx(Mg,{to:"/login",replace:!0});const l=!(t!=null&&t.phone)||((h=t==null?void 0:t.phone)==null?void 0:h.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",c=async d=>{if(d.preventDefault(),i.length<10)return mf.error("Enter a valid 10-digit number!");a(!0);try{await n({phone:i}),mf.success("Mobile number linked securely!")}catch{mf.error("Failed to save. Try again.")}finally{a(!1)}};return l?N.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:N.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[N.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),N.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[N.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:N.jsx(j1,{className:"text-blue-500 w-10 h-10"})}),N.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),N.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),N.jsxs("form",{onSubmit:c,className:"w-full space-y-4",children:[N.jsxs("div",{className:"relative group",children:[N.jsx(Qp,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),N.jsx("input",{type:"tel",value:i,onChange:d=>s(d.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),N.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),N.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[N.jsx(Qp,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),N.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):N.jsx(Fg,{})},D5=()=>{const{user:t,loading:e,ROLES:n}=Yo();return e?N.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:N.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?N.jsx(Fg,{}):N.jsx(Mg,{to:"/dashboard",replace:!0})},O5=Ce.lazy(()=>Pe(()=>import("./Home.js"),["assets/Home.js","assets/chevron-down.js","assets/calendar2.js","assets/log-out.js","assets/zap.js","assets/download.js","assets/graduation-cap.js","assets/check-circle.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/users.js","assets/calculator.js","assets/award.js","assets/external-link.js","assets/message-circle.js","assets/youtube.js"])),hT=Ce.lazy(()=>Pe(()=>import("./AppHub.js"),["assets/AppHub.js","assets/log-in.js","assets/calendar2.js","assets/trash-2.js","assets/log-out.js","assets/message-circle.js","assets/youtube.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/graduation-cap.js","assets/users.js","assets/calculator.js","assets/award.js","assets/external-link.js"])),L5=Ce.lazy(()=>Pe(()=>import("./Login.js"),["assets/Login.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),V5=Ce.lazy(()=>Pe(()=>import("./Signup.js"),["assets/Signup.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),M5=Ce.lazy(()=>Pe(()=>import("./Dashboard.js"),["assets/Dashboard.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/check-circle-2.js","assets/calculator.js","assets/user-check.js","assets/clock.js","assets/globe.js","assets/users.js","assets/arrow-right.js","assets/lock.js","assets/chevron-right.js","assets/calendar-days.js","assets/search.js"])),F5=Ce.lazy(()=>Pe(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/search.js","assets/book-open.js","assets/graduation-cap.js","assets/check-circle-2.js","assets/zap.js","assets/calculator.js","assets/chevron-up.js","assets/chevron-down.js","assets/trash-2.js","assets/plus.js","assets/download.js","assets/info.js","assets/external-link.js","assets/UgeacPredictor.css"])),U5=Ce.lazy(()=>Pe(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/arrow-right.js","assets/search.js","assets/folder-open.js","assets/eye.js","assets/download.js","assets/folder-plus.js"])),j5=Ce.lazy(()=>Pe(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/folder-open.js","assets/arrow-right.js","assets/search.js","assets/eye.js","assets/download.js","assets/folder-plus.js"])),z5=Ce.lazy(()=>Pe(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/book-open.js","assets/chevron-down.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-right.js","assets/chevron-up.js"])),B5=Ce.lazy(()=>Pe(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/book-open.js","assets/check-circle.js","assets/award.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js"])),$5=Ce.lazy(()=>Pe(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/book-open.js","assets/arrow-right.js","assets/flame.js","assets/plus.js","assets/check-circle-2.js","assets/trash-2.js","assets/search.js"])),H5=Ce.lazy(()=>Pe(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),W5=Ce.lazy(()=>Pe(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/book-open.js","assets/file-text.js","assets/bar-chart-3.js","assets/search.js","assets/user-check.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),q5=Ce.lazy(()=>Pe(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js","assets/award.js"])),G5=Ce.lazy(()=>Pe(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),K5=Ce.lazy(()=>Pe(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/calendar2.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/clock.js"])),Q5=Ce.lazy(()=>Pe(()=>import("./Timetable.js"),["assets/Timetable.js","assets/calendar-days.js","assets/user-check.js","assets/arrow-right.js","assets/save.js","assets/info.js","assets/plus.js"])),Y5=Ce.lazy(()=>Pe(()=>import("./Attendance.js"),["assets/Attendance.js","assets/user-check.js","assets/calendar2.js","assets/award.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),J5=Ce.lazy(()=>Pe(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/globe.js","assets/external-link.js","assets/info.js"])),X5=Ce.lazy(()=>Pe(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/folder-plus.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js","assets/file-text.js"])),Z5=Ce.lazy(()=>Pe(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),e$=Ce.lazy(()=>Pe(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/lock.js","assets/eye.js","assets/file-text.js"])),t$=Ce.lazy(()=>Pe(()=>import("./Terms.js"),["assets/Terms.js","assets/file-text.js","assets/check-circle-2.js"])),n$=Ce.lazy(()=>Pe(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/trash-2.js","assets/log-in.js"])),r$=Ce.lazy(()=>Pe(()=>import("./About.js"),["assets/About.js","assets/graduation-cap.js","assets/award.js","assets/book-open.js","assets/users.js","assets/calculator.js"])),i$=Ce.lazy(()=>Pe(()=>import("./Contact.js"),["assets/Contact.js","assets/message-circle.js","assets/youtube.js","assets/chevron-down.js"]));function s$(){return N.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[N.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),N.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function o$(){var c;const{user:t,updateProfileData:e,logout:n}=Yo(),[r,i]=M.useState(""),[s,o]=M.useState(!1);if(!(t&&(!(t!=null&&t.phone)||((c=t==null?void 0:t.phone)==null?void 0:c.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED")))return null;const l=async h=>{if(h.preventDefault(),r.length<10)return Ge.error("Enter a valid 10-digit number!");o(!0);try{await e({phone:r}),Ge.success("Mobile number linked securely!")}catch{Ge.error("Failed to save. Try again.")}finally{o(!1)}};return N.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:N.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[N.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),N.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[N.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:N.jsx(j1,{className:"text-blue-500 w-10 h-10"})}),N.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),N.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),N.jsxs("form",{onSubmit:l,className:"w-full space-y-4",children:[N.jsxs("div",{className:"relative group",children:[N.jsx(Qp,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),N.jsx("input",{type:"tel",value:r,onChange:h=>i(h.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),N.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:s?"Updating...":"Save & Continue"})]}),N.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function a$(){const{user:t,loading:e}=Yo(),[n,r]=M.useState(!0),[i,s]=M.useState(window.innerWidth<768),o=zr.isNativePlatform();if(M.useEffect(()=>{const a=()=>s(window.innerWidth<768);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),M.useEffect(()=>{const a=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(a)),()=>clearTimeout(a)},[e]),n)return N.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[N.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),N.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return N.jsxs(N.Fragment,{children:[N.jsx(zN,{position:"top-right"}),N.jsx(o$,{}),N.jsx(Ce.Suspense,{fallback:N.jsx(s$,{}),children:N.jsxs($b,{children:[N.jsx(Ee,{path:"/",element:o||new URLSearchParams(window.location.search).get("standalone")==="true"?N.jsx(hT,{}):N.jsx(O5,{})}),N.jsx(Ee,{path:"/hub",element:N.jsx(hT,{})}),N.jsx(Ee,{path:"/login",element:N.jsx(L5,{})}),N.jsx(Ee,{path:"/signup",element:N.jsx(V5,{})}),N.jsx(Ee,{path:"/privacy-policy",element:N.jsx(e$,{})}),N.jsx(Ee,{path:"/terms",element:N.jsx(t$,{})}),N.jsx(Ee,{path:"/delete-account",element:N.jsx(n$,{})}),N.jsx(Ee,{path:"/about",element:N.jsx(r$,{})}),N.jsx(Ee,{path:"/contact",element:N.jsx(i$,{})}),N.jsx(Ee,{element:N.jsx(N5,{}),children:N.jsxs(Ee,{element:N.jsx(b5,{}),children:[N.jsx(Ee,{path:"/dashboard",element:N.jsx(M5,{})}),N.jsx(Ee,{path:"/dashboard/ugeac-predictor",element:N.jsx(F5,{})}),N.jsx(Ee,{path:"/dashboard/notes",element:N.jsx(U5,{})}),N.jsx(Ee,{path:"/dashboard/pyq",element:N.jsx(j5,{})}),N.jsx(Ee,{path:"/dashboard/cgpa",element:N.jsx(B5,{})}),N.jsx(Ee,{path:"/dashboard/study",element:N.jsx($5,{})}),N.jsx(Ee,{path:"/dashboard/calculator",element:N.jsx(H5,{})}),N.jsx(Ee,{path:"/dashboard/achievements",element:N.jsx(q5,{})}),N.jsx(Ee,{path:"/dashboard/groups",element:N.jsx(G5,{})}),N.jsx(Ee,{path:"/dashboard/groups/:groupId",element:N.jsx(K5,{})}),N.jsx(Ee,{path:"/dashboard/timetable",element:N.jsx(Q5,{})}),N.jsx(Ee,{path:"/dashboard/attendance",element:N.jsx(Y5,{})}),N.jsx(Ee,{path:"/dashboard/extras",element:N.jsx(X5,{})}),N.jsx(Ee,{path:"/dashboard/calendar",element:N.jsx(Z5,{})}),N.jsx(Ee,{path:"/dashboard/syllabus",element:N.jsx(z5,{})}),N.jsx(Ee,{path:"/dashboard/beu-result",element:N.jsx(J5,{})}),N.jsx(Ee,{element:N.jsx(D5,{}),children:N.jsx(Ee,{path:"/dashboard/admin",element:N.jsx(W5,{})})})]})}),N.jsx(Ee,{path:"*",element:N.jsx(Mg,{to:"/",replace:!0})})]})})]})}catch(a){return console.error("App Crash:",a),N.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[N.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:N.jsx(HN,{size:32})}),N.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),N.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),N.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const dT=document.getElementById("root");if(!dT)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=Jf.createRoot(dT);console.log("[DEBUG] Rendering app to root..."),t.render(N.jsx(Ce.StrictMode,{children:N.jsx(j6,{children:N.jsx(z6,{children:N.jsx(Yb,{children:N.jsx(a$,{})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{DL as $,HN as A,U$ as B,zr as C,$i as D,kA as E,Q0 as F,N$ as G,D$ as H,l$ as I,mf as J,Ew as K,u$ as L,S5 as M,_V as N,x$ as O,WN as P,m$ as Q,Ce as R,j1 as S,YN as T,JN as U,j2 as V,wd as W,Yp as X,p$ as Y,v$ as Z,Pe as _,KN as a,hc as a0,y$ as a1,vE as a2,bs as a3,si as a4,oi as a5,nr as a6,vL as a7,C$ as a8,ai as a9,fL as aA,Ok as aB,Nk as aC,Ic as aD,Vm as aE,W$ as aF,HO as aa,A$ as ab,w$ as ac,f$ as ad,g$ as ae,_E as af,Q2 as ag,c$ as ah,d$ as ai,z2 as aj,_$ as ak,EL as al,h$ as am,I$ as an,k$ as ao,T$ as ap,g2 as aq,E$ as ar,RL as as,qw as at,R$ as au,P$ as av,F2 as aw,Mr as ax,S$ as ay,Vw as az,GN as b,AF as c,cs as d,Vg as e,vn as f,QN as g,Uo as h,wE as i,N as j,V$ as k,M$ as l,$$ as m,Ge as n,j$ as o,z$ as p,O$ as q,M as r,H$ as s,B$ as t,Yo as u,jF as v,L$ as w,F$ as x,Ul as y,os as z};
