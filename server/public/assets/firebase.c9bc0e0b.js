var CI=Object.defineProperty,kI=Object.defineProperties;var NI=Object.getOwnPropertyDescriptors;var Xs=Object.getOwnPropertySymbols,DI=Object.getPrototypeOf,sd=Object.prototype.hasOwnProperty,od=Object.prototype.propertyIsEnumerable,VI=Reflect.get;var id=(n,e,t)=>e in n?CI(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,J=(n,e)=>{for(var t in e||(e={}))sd.call(e,t)&&id(n,t,e[t]);if(Xs)for(var t of Xs(e))od.call(e,t)&&id(n,t,e[t]);return n},xe=(n,e)=>kI(n,NI(e));var Zs=(n,e)=>{var t={};for(var r in n)sd.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&Xs)for(var r of Xs(n))e.indexOf(r)<0&&od.call(n,r)&&(t[r]=n[r]);return t};var Vt=(n,e,t)=>VI(DI(n),t,e);var p=(n,e,t)=>new Promise((r,i)=>{var s=u=>{try{c(t.next(u))}catch(h){i(h)}},o=u=>{try{c(t.throw(u))}catch(h){i(h)}},c=u=>u.done?r(u.value):Promise.resolve(u.value).then(s,o);c((t=t.apply(n,e)).next())});import{o as ra,d as Ic,r as OI,_ as xI,W as MI}from"./dependencies.32c7b368.js";const LI=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},FI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let y=(c&15)<<2|h>>6,S=h&63;u||(S=64,o||(y=64)),r.push(t[f],t[m],t[y],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ap(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):FI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new UI;const y=s<<2|c>>4;if(r.push(y),h!==64){const S=c<<4&240|h>>2;if(r.push(S),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class UI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BI=function(n){const e=Ap(n);return bu.encodeByteArray(e,!0)},ko=function(n){return BI(n).replace(/\./g,"")},Rp=function(n){try{return bu.decodeString(n,!0)}catch(e){}return null};/**
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
 */function Pu(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $I=()=>Pu().__FIREBASE_DEFAULTS__,qI=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jI=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&Rp(n[1]);return e&&JSON.parse(e)},ia=()=>{try{return LI()||$I()||qI()||jI()}catch(n){return}},Sp=n=>{var e,t;return(t=(e=ia())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},bp=n=>{const e=Sp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Pp=()=>{var n;return(n=ia())==null?void 0:n.config},Cp=n=>{var e;return(e=ia())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function kp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=J({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[ko(JSON.stringify(t)),ko(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zI(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Np(){var e;const n=(e=ia())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function KI(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function GI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function HI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dp(){return!Np()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vp(){return!Np()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function vs(){try{return typeof indexedDB=="object"}catch(n){return!1}}function Op(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}function QI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=JI,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wn.prototype.create)}}class wn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YI(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new It(i,c,r)}}function YI(n,e){return n.replace(XI,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XI=/\{\$([^}]+)}/g;function ZI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ft(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ad(s)&&ad(o)){if(!Ft(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ad(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function eE(n,e){const t=new tE(n,e);return t.subscribe.bind(t)}class tE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");nE(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=1e3,iE=2,sE=4*60*60*1e3,oE=.5;function aE(n,e=rE,t=iE){const r=e*Math.pow(t,n),i=Math.round(oE*r*(Math.random()-.5)*2);return Math.min(sE,r+i)}/**
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
 */function G(n){return n&&n._delegate?n._delegate:n}/**
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
 */function vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function sa(n){return p(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}class nt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ns;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var i;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lE(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return p(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var o;const r=this.normalizeInstanceIdentifier(t),i=(o=this.onInitCallbacks.get(r))!=null?o:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uE(n){return n===On?void 0:n}function lE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const dE={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},fE=ee.INFO,pE={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},mE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=pE[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=fE,this._logHandler=mE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_E(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _E(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zc="@firebase/app",cd="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new oa("@firebase/app"),yE="@firebase/app-compat",IE="@firebase/analytics-compat",EE="@firebase/analytics",TE="@firebase/app-check-compat",wE="@firebase/app-check",vE="@firebase/auth",AE="@firebase/auth-compat",RE="@firebase/database",SE="@firebase/data-connect",bE="@firebase/database-compat",PE="@firebase/functions",CE="@firebase/functions-compat",kE="@firebase/installations",NE="@firebase/installations-compat",DE="@firebase/messaging",VE="@firebase/messaging-compat",OE="@firebase/performance",xE="@firebase/performance-compat",ME="@firebase/remote-config",LE="@firebase/remote-config-compat",FE="@firebase/storage",UE="@firebase/storage-compat",BE="@firebase/firestore",$E="@firebase/ai",qE="@firebase/firestore-compat",jE="firebase",zE="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="[DEFAULT]",KE={[zc]:"fire-core",[yE]:"fire-core-compat",[EE]:"fire-analytics",[IE]:"fire-analytics-compat",[wE]:"fire-app-check",[TE]:"fire-app-check-compat",[vE]:"fire-auth",[AE]:"fire-auth-compat",[RE]:"fire-rtdb",[SE]:"fire-data-connect",[bE]:"fire-rtdb-compat",[PE]:"fire-fn",[CE]:"fire-fn-compat",[kE]:"fire-iid",[NE]:"fire-iid-compat",[DE]:"fire-fcm",[VE]:"fire-fcm-compat",[OE]:"fire-perf",[xE]:"fire-perf-compat",[ME]:"fire-rc",[LE]:"fire-rc-compat",[FE]:"fire-gcs",[UE]:"fire-gcs-compat",[BE]:"fire-fst",[qE]:"fire-fst-compat",[$E]:"fire-vertex","fire-js":"fire-js",[jE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,GE=new Map,Gc=new Map;function ud(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ct(n){const e=n.name;if(Gc.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,n);for(const t of No.values())ud(t,n);for(const t of GE.values())ud(t,n);return!0}function Dt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ve(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new wn("app","Firebase",HE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t,r){this._isDeleted=!1,this._options=J({},e),this._config=J({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=zE;function QE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=J({name:Kc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(t||(t=Pp()),!t)throw fn.create("no-options");const s=No.get(i);if(s){if(Ft(t,s.options)&&Ft(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new hE(i);for(const u of Gc.values())o.addComponent(u);const c=new WE(t,r,o);return No.set(i,c),c}function As(n=Kc){const e=No.get(n);if(!e&&n===Kc&&Pp())return QE();if(!e)throw fn.create("no-app",{appName:n});return e}function Ge(n,e,t){var o;let r=(o=KE[n])!=null?o:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}ct(new nt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const JE="firebase-heartbeat-database",YE=1,rs="firebase-heartbeat-store";let Tc=null;function xp(){return Tc||(Tc=ra(JE,YE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rs)}catch(t){}}}}).catch(n=>{throw fn.create("idb-open",{originalErrorMessage:n.message})})),Tc}function XE(n){return p(this,null,function*(){try{const t=(yield xp()).transaction(rs),r=yield t.objectStore(rs).get(Mp(n));return yield t.done,r}catch(e){if(e instanceof It)Ut.warn(e.message);else{const t=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}})}function ld(n,e){return p(this,null,function*(){try{const r=(yield xp()).transaction(rs,"readwrite");yield r.objectStore(rs).put(e,Mp(n)),yield r.done}catch(t){if(t instanceof It)Ut.warn(t.message);else{const r=fn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(r.message)}}})}function Mp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ZE=1024,eT=30;class tT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return p(this,null,function*(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>eT){const o=iT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}})}getHeartbeatsHeader(){return p(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hd(),{heartbeatsToSend:r,unsentEntries:i}=nT(this._heartbeatsCache.heartbeats),s=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ut.warn(t),""}})}}function hd(){return new Date().toISOString().substring(0,10)}function nT(n,e=ZE){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return p(this,null,function*(){return vs()?Op().then(()=>!0).catch(()=>!1):!1})}read(){return p(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield XE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return ld(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return ld(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function dd(n){return ko(JSON.stringify({version:2,heartbeats:n})).length}function iT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(n){ct(new nt("platform-logger",e=>new gE(e),"PRIVATE")),ct(new nt("heartbeat",e=>new tT(e),"PRIVATE")),Ge(zc,cd,n),Ge(zc,cd,"esm2020"),Ge("fire-js","")}sT("");function Lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oT=Lp,Fp=new wn("auth","Firebase",Lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new oa("@firebase/auth");function aT(n,...e){Do.logLevel<=ee.WARN&&Do.warn(`Auth (${ur}): ${n}`,...e)}function po(n,...e){Do.logLevel<=ee.ERROR&&Do.error(`Auth (${ur}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,...e){throw ku(n,...e)}function et(n,...e){return ku(n,...e)}function Cu(n,e,t){const r=xe(J({},oT()),{[e]:t});return new wn("auth","Firebase",r).create(e,{appName:n.name})}function He(n){return Cu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aa(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&mt(n,"argument-error"),Cu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ku(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Fp.create(n,...e)}function M(n,e,...t){if(!n)throw ku(e,...t)}function xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw po(e),new Error(e)}function Bt(n,e){n||xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function Nu(){return fd()==="http:"||fd()==="https:"}function fd(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nu()||GI()||"connection"in navigator)?navigator.onLine:!0}function uT(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bt(t>e,"Short delay should be less than long delay!"),this.isMobile=zI()||HI()}get(){return cT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n,e){Bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dT=new Rs(3e4,6e4);function Pe(n,e){return n.tenantId&&!e.tenantId?xe(J({},e),{tenantId:n.tenantId}):e}function Ce(s,o,c,u){return p(this,arguments,function*(n,e,t,r,i={}){return Bp(n,i,()=>p(this,null,function*(){let h={},f={};r&&(e==="GET"?f=r:h={body:JSON.stringify(r)});const m=Xr(J({key:n.config.apiKey},f)).slice(1),y=yield n._getAdditionalHeaders();y["Content-Type"]="application/json",n.languageCode&&(y["X-Firebase-Locale"]=n.languageCode);const S=J({method:e,headers:y},h);return KI()||(S.referrerPolicy="no-referrer"),n.emulatorConfig&&vn(n.emulatorConfig.host)&&(S.credentials="include"),Up.fetch()(yield $p(n,n.config.apiHost,t,m),S)}))})}function Bp(n,e,t){return p(this,null,function*(){n._canInitEmulator=!1;const r=J(J({},lT),e);try{const i=new pT(n),s=yield Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=yield s.json();if("needConfirmation"in o)throw xi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw xi(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw xi(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cu(n,f,h);mt(n,f)}}catch(i){if(i instanceof It)throw i;mt(n,"network-request-failed",{message:String(i)})}})}function Kt(s,o,c,u){return p(this,arguments,function*(n,e,t,r,i={}){const h=yield Ce(n,e,t,r,i);return"mfaPendingCredential"in h&&mt(n,"multi-factor-auth-required",{_serverResponse:h}),h})}function $p(n,e,t,r){return p(this,null,function*(){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Du(n.config,i):`${n.config.apiScheme}://${i}`;return hT.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o})}function fT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),dT.get())})}}function xi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){return n!==void 0&&n.getResponse!==void 0}function md(n){return n!==void 0&&n.enterprise!==void 0}class qp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(n){return p(this,null,function*(){return(yield Ce(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""})}function jp(n,e){return p(this,null,function*(){return Ce(n,"GET","/v2/recaptchaConfig",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:delete",e)})}function _T(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:update",e)})}function Vo(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function yT(n,e=!1){return p(this,null,function*(){const t=G(n),r=yield t.getIdToken(e),i=ca(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$i(wc(i.auth_time)),issuedAtTime:$i(wc(i.iat)),expirationTime:$i(wc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function wc(n){return Number(n)*1e3}function ca(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rp(t);return i?JSON.parse(i):(po("Failed to decode base64 JWT payload"),null)}catch(i){return po("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gd(n){const e=ca(n);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n,e,t=!1){return p(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof It&&IT(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function IT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>p(this,null,function*(){yield this.iteration()}),t)}iteration(){return p(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n){return p(this,null,function*(){var m;const e=n.auth,t=yield n.getIdToken(),r=yield Qn(n,Vo(e,{idToken:t}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Kp(i.providerUserInfo):[],o=TT(n.providerData,s),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Hc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)})}function zp(n){return p(this,null,function*(){const e=G(n);yield ss(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function TT(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kp(n){return n.map(r=>{var i=r,{providerId:e}=i,t=Zs(i,["providerId"]);return{providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(n,e){return p(this,null,function*(){const t=yield Bp(n,{},()=>p(this,null,function*(){const r=Xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yield $p(n,i,"/v1/token",`key=${s}`),c=yield n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&vn(n.emulatorConfig.host)&&(u.credentials="include"),Up.fetch()(o,u)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function vT(n,e){return p(this,null,function*(){return Ce(n,"POST","/v2/accounts:revokeToken",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):gd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=gd(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return p(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return p(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield wT(e,t);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new br;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,e){M(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class _t{constructor(s){var o=s,{uid:e,auth:t,stsTokenManager:r}=o,i=Zs(o,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ET(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hc(i.createdAt||void 0,i.lastLoginAt||void 0)}getIdToken(e){return p(this,null,function*(){const t=yield Qn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return yT(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>J({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _t(xe(J({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return p(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield ss(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return p(this,null,function*(){if(ve(this.auth.app))return Promise.reject(He(this.auth));const e=yield this.getIdToken();return yield Qn(this,gT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return xe(J({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>J({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var j,B,H,W,Y,T,_,E;const r=(j=t.displayName)!=null?j:void 0,i=(B=t.email)!=null?B:void 0,s=(H=t.phoneNumber)!=null?H:void 0,o=(W=t.photoURL)!=null?W:void 0,c=(Y=t.tenantId)!=null?Y:void 0,u=(T=t._redirectEventId)!=null?T:void 0,h=(_=t.createdAt)!=null?_:void 0,f=(E=t.lastLoginAt)!=null?E:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:N,stsTokenManager:O}=t;M(m&&O,e,"internal-error");const D=br.fromJSON(this.name,O);M(typeof m=="string",e,"internal-error"),nn(r,e.name),nn(i,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof S=="boolean",e,"internal-error"),nn(s,e.name),nn(o,e.name),nn(c,e.name),nn(u,e.name),nn(h,e.name),nn(f,e.name);const K=new _t({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(K.providerData=N.map(v=>J({},v))),u&&(K._redirectEventId=u),K}static _fromIdTokenResponse(e,t,r=!1){return p(this,null,function*(){const i=new br;i.updateFromServerResponse(t);const s=new _t({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield ss(s),s})}static _fromGetAccountInfoResponse(e,t,r){return p(this,null,function*(){const i=t.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new br;c.updateFromIdToken(r);const u=new _t({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Map;function Mt(n){Bt(n instanceof Function,"Expected a class definition");let e=_d.get(n);return e?(Bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_d.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return p(this,null,function*(){return!0})}_set(e,t){return p(this,null,function*(){this.storage[e]=t})}_get(e){return p(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return p(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}Gp.type="NONE";const Wc=Gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n,e,t){return`firebase:${n}:${e}:${t}`}class Pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mo(this.userKey,i.apiKey,s),this.fullPersistenceKey=mo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return p(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield Vo(this.auth,{idToken:e}).catch(()=>{});return t?_t._fromGetAccountInfoResponse(this.auth,t,e):null}return _t._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return p(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return p(this,null,function*(){if(!t.length)return new Pr(Mt(Wc),e,r);const i=(yield Promise.all(t.map(h=>p(this,null,function*(){if(yield h._isAvailable())return h})))).filter(h=>h);let s=i[0]||Mt(Wc);const o=mo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=yield h._get(o);if(f){let m;if(typeof f=="string"){const y=yield Vo(e,{idToken:f}).catch(()=>{});if(!y)break;m=yield _t._fromGetAccountInfoResponse(e,y,f)}else m=_t._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch(f){}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Pr(s,e,r):(s=u[0],c&&(yield s._set(o,c.toJSON())),yield Promise.all(t.map(h=>p(this,null,function*(){if(h!==s)try{yield h._remove(o)}catch(f){}}))),new Pr(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xp(e))return"Blackberry";if(Zp(e))return"Webos";if(Wp(e))return"Safari";if((e.includes("chrome/")||Qp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hp(n=be()){return/firefox\//i.test(n)}function Wp(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qp(n=be()){return/crios\//i.test(n)}function Jp(n=be()){return/iemobile/i.test(n)}function Yp(n=be()){return/android/i.test(n)}function Xp(n=be()){return/blackberry/i.test(n)}function Zp(n=be()){return/webos/i.test(n)}function Vu(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function AT(n=be()){var e;return Vu(n)&&!!((e=window.navigator)!=null&&e.standalone)}function RT(){return WI()&&document.documentMode===10}function em(n=be()){return Vu(n)||Yp(n)||Zp(n)||Xp(n)||/windows phone/i.test(n)||Jp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,e=[]){let t;switch(n){case"Browser":t=yd(be());break;case"Worker":t=`${yd(be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ur}/${r}`}/**
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
 */class ST{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return p(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
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
 */function bT(t){return p(this,arguments,function*(n,e={}){return Ce(n,"GET","/v2/passwordPolicy",Pe(n,e))})}/**
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
 */const PT=6;class CT{constructor(e){var r,i,s,o;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=t.minPasswordLength)!=null?r:PT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))!=null?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,i,s,o,c,u;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(r=t.meetsMinPasswordLength)!=null?r:!0),t.isValid&&(t.isValid=(i=t.meetsMaxPasswordLength)!=null?i:!0),t.isValid&&(t.isValid=(s=t.containsLowercaseLetter)!=null?s:!0),t.isValid&&(t.isValid=(o=t.containsUppercaseLetter)!=null?o:!0),t.isValid&&(t.isValid=(c=t.containsNumericCharacter)!=null?c:!0),t.isValid&&(t.isValid=(u=t.containsNonAlphanumericCharacter)!=null?u:!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new ST(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mt(t)),this._initializationPromise=this.queue(()=>p(this,null,function*(){var r,i,s;if(!this._deleted&&(this.persistenceManager=yield Pr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return p(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return p(this,null,function*(){try{const t=yield Vo(this,{idToken:e}),r=yield _t._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return p(this,null,function*(){var s;if(ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=yield this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=r==null?void 0:r._redirectEventId,u=yield this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{yield this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)})}tryRedirectSignIn(e){return p(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return p(this,null,function*(){try{yield ss(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=uT()}_delete(){return p(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return p(this,null,function*(){if(ve(this.app))return Promise.reject(He(this));const t=e?G(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return p(this,null,function*(){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>p(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return p(this,null,function*(){return ve(this.app)?Promise.reject(He(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return ve(this.app)?Promise.reject(He(this)):this.queue(()=>p(this,null,function*(){yield this.assertedPersistence.setPersistence(Mt(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return p(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return p(this,null,function*(){const e=yield bT(this),t=new CT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return p(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield vT(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}_setRedirectUser(e,t){return p(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return p(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&Mt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=yield Pr.create(this,[Mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return p(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>p(this,null,function*(){}))),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return p(this,null,function*(){if(e===this.currentUser)return this.queue(()=>p(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(t=this.currentUser)==null?void 0:t.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}directlySetCurrentUser(e){return p(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return p(this,null,function*(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=yield(i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=yield this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e})}_getAppCheckToken(){return p(this,null,function*(){var t;if(ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=yield(t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken();return e!=null&&e.error&&aT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token})}}function Oe(n){return G(n)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss={loadJS(){return p(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NT(n){Ss=n}function Ou(n){return Ss.loadJS(n)}function DT(){return Ss.recaptchaV2Script}function VT(){return Ss.recaptchaEnterpriseScript}function OT(){return Ss.gapiScript}function nm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=500,MT=6e4,eo=1e12;class LT{constructor(e){this.auth=e,this.counter=eo,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new BT(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||eo;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||eo;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}execute(e){return p(this,null,function*(){var r;const t=e||eo;return(r=this._widgets.get(t))==null||r.execute(),""})}}class FT{constructor(){this.enterprise=new UT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class UT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class BT{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;M(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$T(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(r){}this.isVisible&&this.execute()},MT)},xT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $T(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const qT="recaptcha-enterprise",qi="NO_RECAPTCHA";class rm{constructor(e){this.type=qT,this.auth=Oe(e)}verify(e="verify",t=!1){return p(this,null,function*(){function r(s){return p(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((o,c)=>p(this,null,function*(){jp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new qp(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})}))})}function i(s,o,c){const u=window.grecaptcha;md(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(qi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new FT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&md(window.grecaptcha))i(c,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=VT();u.length!==0&&(u+=c),Ou(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})})}}function Ri(n,e,t,r=!1,i=!1){return p(this,null,function*(){const s=new rm(n);let o;if(i)o=qi;else try{o=yield s.verify(t)}catch(u){o=yield s.verify(t,!0)}const c=J({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c})}function pn(n,e,t,r,i){return p(this,null,function*(){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=yield Ri(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(c=>p(this,null,function*(){if(c.code==="auth/missing-recaptcha-token"){const u=yield Ri(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)}));else if(i==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=yield Ri(n,e,t);return r(n,c).catch(u=>p(this,null,function*(){var h;if(((h=n._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){const f=yield Ri(n,e,t,!1,!0);return r(n,f)}return Promise.reject(u)}))}else{const c=yield Ri(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")})}function jT(n){return p(this,null,function*(){const e=Oe(n),t=yield jp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new qp(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new rm(e).verify()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(n,e){const t=Dt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ft(s,e!=null?e:{}))return i;mt(i,"already-initialized")}return t.initialize({options:e})}function KT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qc(n,e,t){const r=Oe(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=im(e),{host:o,port:c}=GT(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(Ft(h,r.config.emulator)&&Ft(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,vn(o)?sa(`${s}//${o}${u}`):i||HT()}function im(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function GT(n){const e=im(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ed(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ed(o)}}}function Ed(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function HT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:resetPassword",Pe(n,e))})}function QT(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:update",e)})}function JT(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:signUp",e)})}function YT(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:update",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n,e){return p(this,null,function*(){return Kt(n,"POST","/v1/accounts:signInWithPassword",Pe(n,e))})}function la(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:sendOobCode",Pe(n,e))})}function ZT(n,e){return p(this,null,function*(){return la(n,e)})}function ew(n,e){return p(this,null,function*(){return la(n,e)})}function tw(n,e){return p(this,null,function*(){return la(n,e)})}function nw(n,e){return p(this,null,function*(){return la(n,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n,e){return p(this,null,function*(){return Kt(n,"POST","/v1/accounts:signInWithEmailLink",Pe(n,e))})}function iw(n,e){return p(this,null,function*(){return Kt(n,"POST","/v1/accounts:signInWithEmailLink",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends ua{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new os(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new os(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return p(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pn(e,t,"signInWithPassword",XT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return rw(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}})}_linkToIdToken(e,t){return p(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pn(e,r,"signUpPassword",JT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return iw(e,{idToken:t,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){return p(this,null,function*(){return Kt(n,"POST","/v1/accounts:signInWithIdp",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="http://localhost";class Ct extends ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=c,s=Zs(c,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ct(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Cr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Cr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cr(e,t)}buildRequest(){const e={requestUri:sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:sendVerificationCode",Pe(n,e))})}function ow(n,e){return p(this,null,function*(){return Kt(n,"POST","/v1/accounts:signInWithPhoneNumber",Pe(n,e))})}function aw(n,e){return p(this,null,function*(){const t=yield Kt(n,"POST","/v1/accounts:signInWithPhoneNumber",Pe(n,e));if(t.temporaryProof)throw xi(n,"account-exists-with-different-credential",t);return t})}const cw={USER_NOT_FOUND:"user-not-found"};function uw(n,e){return p(this,null,function*(){const t=xe(J({},e),{operation:"REAUTH"});return Kt(n,"POST","/v1/accounts:signInWithPhoneNumber",Pe(n,t),cw)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends ua{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ji({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ji({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ow(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return aw(e,J({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return uw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new ji({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hw(n){const e=Vi(Oi(n)).link,t=e?Vi(Oi(e)).deep_link_id:null,r=Vi(Oi(n)).deep_link_id;return(r?Vi(Oi(r)).link:null)||r||t||e||n}class ha{constructor(e){var o,c,u,h,f,m;const t=Vi(Oi(e)),r=(o=t.apiKey)!=null?o:null,i=(c=t.oobCode)!=null?c:null,s=lw((u=t.mode)!=null?u:null);M(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=(h=t.continueUrl)!=null?h:null,this.languageCode=(f=t.lang)!=null?f:null,this.tenantId=(m=t.tenantId)!=null?m:null}static parseLink(e){const t=hw(e);try{return new ha(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.providerId=$t.PROVIDER_ID}static credential(e,t){return os._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ha.parseLink(t);return M(r,"argument-error"),os._fromEmailAndCode(e,r.code,r.tenantId)}}$t.PROVIDER_ID="password";$t.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ye extends ei{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return M("providerId"in t&&"signInMethod"in t,"argument-error"),Ct._fromParams(t)}credential(e){return this._credential(xe(J({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),Ct._fromParams(xe(J({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ye.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ye.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!t&&!s||!c)return null;try{return new ye(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch(u){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends ei{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch(t){return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ct._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ht.credential(t,r)}catch(i){return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends ei{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(t){return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ei{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ft.credential(t,r)}catch(i){return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n,e){return p(this,null,function*(){return Kt(n,"POST","/v1/accounts:signUp",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,i=!1){return p(this,null,function*(){const s=yield _t._fromIdTokenResponse(e,r,i),o=wd(r);return new kt({user:s,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return p(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=wd(r);return new kt({user:e,providerId:i,_tokenResponse:r,operationType:t})})}}function wd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n){return p(this,null,function*(){var i;if(ve(n.app))return Promise.reject(He(n));const e=Oe(n);if(yield e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new kt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=yield sm(e,{returnSecureToken:!0}),r=yield kt._fromIdTokenResponse(e,"signIn",t,!0);return yield e._updateCurrentUser(r.user),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends It{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!=null?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Oo(e,t,r,i)}}function om(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n,e){return p(this,null,function*(){const t=G(n);yield da(!0,t,e);const{providerUserInfo:r}=yield _T(t.auth,{idToken:yield t.getIdToken(),deleteProvider:[e]}),i=am(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),yield t.auth._persistUserIfCurrent(t),t})}function cm(n,e,t=!1){return p(this,null,function*(){const r=yield Qn(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return kt._forOperation(n,"link",r)})}function da(n,e,t){return p(this,null,function*(){yield ss(e);const r=am(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";M(r.has(t)===n,e.auth,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(n,e,t=!1){return p(this,null,function*(){const{auth:r}=n;if(ve(r.app))return Promise.reject(He(r));const i="reauthenticate";try{const s=yield Qn(n,om(r,i,e,n),t);M(s.idToken,r,"internal-error");const o=ca(s.idToken);M(o,r,"internal-error");const{sub:c}=o;return M(n.uid===c,r,"user-mismatch"),kt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n,e,t=!1){return p(this,null,function*(){if(ve(n.app))return Promise.reject(He(n));const r="signIn",i=yield om(n,r,e),s=yield kt._fromIdTokenResponse(n,r,i);return t||(yield n._updateCurrentUser(s.user)),s})}function xu(n,e){return p(this,null,function*(){return um(Oe(n),e)})}function lm(n,e){return p(this,null,function*(){const t=G(n);return yield da(!1,t,e.providerId),cm(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n,e){return p(this,null,function*(){return Kt(n,"POST","/v1/accounts:signInWithCustomToken",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(n,e){return p(this,null,function*(){if(ve(n.app))return Promise.reject(He(n));const t=Oe(n),r=yield mw(t,{token:e,returnSecureToken:!0}),i=yield kt._fromIdTokenResponse(t,"signIn",r);return yield t._updateCurrentUser(i.user),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n,e,t){var r;M(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),M(typeof t.linkDomain=="undefined"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){return p(this,null,function*(){const e=Oe(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function _w(n,e,t){return p(this,null,function*(){const r=Oe(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&fa(r,i,t),yield pn(r,i,"getOobCode",ew,"EMAIL_PASSWORD_PROVIDER")})}function yw(n,e,t){return p(this,null,function*(){yield WT(G(n),{oobCode:e,newPassword:t}).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Mu(n),r}))})}function Iw(n,e){return p(this,null,function*(){yield YT(G(n),{oobCode:e})})}function Ew(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(He(n));const r=Oe(n),o=yield pn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sm,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Mu(n),u}),c=yield kt._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(c.user),c})}function Tw(n,e,t){return ve(n.app)?Promise.reject(He(n)):xu(G(n),$t.credential(e,t)).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Mu(n),r}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n,e,t){return p(this,null,function*(){const r=Oe(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){M(c.handleCodeInApp,r,"argument-error"),c&&fa(r,o,c)}s(i,t),yield pn(r,i,"getOobCode",tw,"EMAIL_PASSWORD_PROVIDER")})}function vw(n,e){const t=ha.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}function Aw(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(He(n));const r=G(n),i=$t.credentialWithLink(e,t||is());return M(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xu(r,i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:createAuthUri",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e){return p(this,null,function*(){const t=Nu()?is():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=yield Rw(G(n),r);return i||[]})}function bw(n,e){return p(this,null,function*(){const t=G(n),i={requestType:"VERIFY_EMAIL",idToken:yield n.getIdToken()};e&&fa(t.auth,i,e);const{email:s}=yield ZT(t.auth,i);s!==n.email&&(yield n.reload())})}function Pw(n,e,t){return p(this,null,function*(){const r=G(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:yield n.getIdToken(),newEmail:e};t&&fa(r.auth,s,t);const{email:o}=yield nw(r.auth,s);o!==n.email&&(yield n.reload())})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n,e){return p(this,null,function*(){return Ce(n,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(r,i){return p(this,arguments,function*(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=G(n),c={idToken:yield s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=yield Qn(s,Cw(s.auth,c));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const h=s.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=s.displayName,h.photoURL=s.photoURL),yield s._updateTokensIfNecessary(u)})}function Nw(n,e){const t=G(n);return ve(t.auth.app)?Promise.reject(He(t.auth)):hm(t,e,null)}function Dw(n,e){return hm(G(n),null,e)}function hm(n,e,t){return p(this,null,function*(){const{auth:r}=n,s={idToken:yield n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=yield Qn(n,QT(r,s));yield n._updateTokensIfNecessary(o,!0)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n){var i,s;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(s=(i=ca(n.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new kr(r,c)}}if(!e)return null;switch(e){case"facebook.com":return new Ow(r,t);case"github.com":return new xw(r,t);case"google.com":return new Mw(r,t);case"twitter.com":return new Lw(r,t,n.screenName||null);case"custom":case"anonymous":return new kr(r,null);default:return new kr(r,e,t)}}class kr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class dm extends kr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class Ow extends kr{constructor(e,t){super(e,"facebook.com",t)}}class xw extends dm{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Mw extends kr{constructor(e,t){super(e,"google.com",t)}}class Lw extends dm{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Fw(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Vw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e){return G(n).setPersistence(e)}function Uw(n,e,t,r){return G(n).onIdTokenChanged(e,t,r)}function Bw(n,e,t){return G(n).beforeAuthStateChanged(e,t)}function mk(n,e,t,r){return G(n).onAuthStateChanged(e,t,r)}function gk(n){return G(n).signOut()}function $w(n,e){return Oe(n).revokeAccessToken(e)}function qw(n){return p(this,null,function*(){return G(n).delete()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e){return Ce(n,"POST","/v2/accounts/mfaEnrollment:start",Pe(n,e))}const xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=1e3,zw=10;class Nr extends fm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);RT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return p(this,null,function*(){yield Vt(Nr.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return p(this,null,function*(){const t=yield Vt(Nr.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return p(this,null,function*(){yield Vt(Nr.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}Nr.type="LOCAL";const pm=Nr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends fm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mm.type="SESSION";const Lu=mm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(n){return Promise.all(n.map(e=>p(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return p(this,null,function*(){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(h=>p(this,null,function*(){return h(t.origin,s)})),u=yield Kw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return p(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=ma("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return window}function Hw(n){we().location.href=n}/**
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
 */function Fu(){return typeof we().WorkerGlobalScope!="undefined"&&typeof we().importScripts=="function"}function Ww(){return p(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function Qw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Jw(){return Fu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="firebaseLocalStorageDb",Yw=1,Mo="firebaseLocalStorage",_m="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ga(n,e){return n.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function Xw(){const n=indexedDB.deleteDatabase(gm);return new bs(n).toPromise()}function Jc(){const n=indexedDB.open(gm,Yw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Mo,{keyPath:_m})}catch(i){t(i)}}),n.addEventListener("success",()=>p(this,null,function*(){const r=n.result;r.objectStoreNames.contains(Mo)?e(r):(r.close(),yield Xw(),e(yield Jc()))}))})}function Ad(n,e,t){return p(this,null,function*(){const r=ga(n,!0).put({[_m]:e,value:t});return new bs(r).toPromise()})}function Zw(n,e){return p(this,null,function*(){const t=ga(n,!1).get(e),r=yield new bs(t).toPromise();return r===void 0?null:r.value})}function Rd(n,e){const t=ga(n,!0).delete(e);return new bs(t).toPromise()}const ev=800,tv=3;class ym{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return p(this,null,function*(){return this.db?this.db:(this.db=yield Jc(),this.db)})}_withRetries(e){return p(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>tv)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return p(this,null,function*(){return Fu()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return p(this,null,function*(){this.receiver=pa._getInstance(Jw()),this.receiver._subscribe("keyChanged",(e,t)=>p(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>p(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return p(this,null,function*(){var t,r;if(this.activeServiceWorker=yield Ww(),!this.activeServiceWorker)return;this.sender=new Gw(this.activeServiceWorker);const e=yield this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return p(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||Qw()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return p(this,null,function*(){try{if(!indexedDB)return!1;const e=yield Jc();return yield Ad(e,xo,"1"),yield Rd(e,xo),!0}catch(e){}return!1})}_withPendingWrite(e){return p(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(r=>Ad(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return p(this,null,function*(){const t=yield this._withRetries(r=>Zw(r,e));return this.localCache[e]=t,t})}_remove(e){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(t=>Rd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return p(this,null,function*(){const e=yield this._withRetries(i=>{const s=ga(i,!1).getAll();return new bs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>p(this,null,function*(){return this._poll()}),ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ym.type="LOCAL";const Im=ym;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n,e){return Ce(n,"POST","/v2/accounts/mfaSignIn:start",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=nm("rcb"),nv=new Rs(3e4,6e4);class rv{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=we().grecaptcha)!=null&&e.render)}load(e,t=""){return M(iv(t),e,"argument-error"),this.shouldResolveImmediately(t)&&pd(we().grecaptcha)?Promise.resolve(we().grecaptcha):new Promise((r,i)=>{const s=we().setTimeout(()=>{i(et(e,"network-request-failed"))},nv.get());we()[vc]=()=>{we().clearTimeout(s),delete we()[vc];const c=we().grecaptcha;if(!c||!pd(c)){i(et(e,"internal-error"));return}const u=c.render;c.render=(h,f)=>{const m=u(h,f);return this.counter++,m},this.hostLanguage=t,r(c)};const o=`${DT()}?${Xr({onload:vc,render:"explicit",hl:t})}`;Ou(o).catch(()=>{clearTimeout(s),i(et(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=we().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iv(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class sv{load(e){return p(this,null,function*(){return new LT(e)})}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="recaptcha",ov={theme:"light",type:"image"};class bd{constructor(e,t,r=J({},ov)){this.parameters=r,this.type=zi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Oe(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;M(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sv:new rv,this.validateStartingState()}verify(){return p(this,null,function*(){this.assertNotDestroyed();const e=yield this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=we()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}makeRenderPromise(){return p(this,null,function*(){if(yield this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId})}init(){return p(this,null,function*(){M(Nu()&&!Fu(),this.auth,"internal-error"),yield av(),this.recaptcha=yield this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=yield mT(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e})}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function av(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ji._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}function cv(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(He(n));const r=Oe(n),i=yield Tm(r,e,G(t));return new Em(i,s=>xu(r,s))})}function uv(n,e,t){return p(this,null,function*(){const r=G(n);yield da(!1,r,"phone");const i=yield Tm(r.auth,e,G(t));return new Em(i,s=>lm(r,s))})}function Tm(n,e,t){return p(this,null,function*(){var r;if(!n._getRecaptchaConfig())try{yield jT(n)}catch(i){}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){M(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(yield pn(n,o,"mfaSmsEnrollment",(f,m)=>p(this,null,function*(){if(m.phoneEnrollmentInfo.captchaResponse===qi){M((t==null?void 0:t.type)===zi,f,"argument-error");const y=yield Ac(f,m,t);return vd(f,y)}return vd(f,m)}),"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{M(s.type==="signin",n,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;M(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(yield pn(n,c,"mfaSmsSignIn",(m,y)=>p(this,null,function*(){if(y.phoneSignInInfo.captchaResponse===qi){M((t==null?void 0:t.type)===zi,m,"argument-error");const S=yield Ac(m,y,t);return Sd(m,S)}return Sd(m,y)}),"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(yield pn(n,s,"sendVerificationCode",(h,f)=>p(this,null,function*(){if(f.captchaResponse===qi){M((t==null?void 0:t.type)===zi,h,"argument-error");const m=yield Ac(h,f,t);return Td(h,m)}return Td(h,f)}),"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}})}function Ac(n,e,t){return p(this,null,function*(){M(t.type===zi,n,"argument-error");const r=yield t.verify();M(typeof r=="string",n,"argument-error");const i=J({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i})}/**
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
 */function Ps(n,e){return e?Mt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lv(n){return um(n.auth,new Uu(n),n.bypassAuthState)}function hv(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),pw(t,new Uu(n),n.bypassAuthState)}function dv(n){return p(this,null,function*(){const{auth:e,user:t}=n;return M(t,e,"internal-error"),cm(t,new Uu(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>p(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return p(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(c)(u))}catch(h){this.reject(h)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lv;case"linkViaPopup":case"linkViaRedirect":return dv;case"reauthViaPopup":case"reauthViaRedirect":return hv;default:mt(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=new Rs(2e3,1e4);function pv(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(et(n,"operation-not-supported-in-this-environment"));const r=Oe(n);aa(n,e,Zr);const i=Ps(r,t);return new ln(r,"signInViaPopup",e,i).executeNotNull()})}function mv(n,e,t){return p(this,null,function*(){const r=G(n);aa(r.auth,e,Zr);const i=Ps(r.auth,t);return new ln(r.auth,"linkViaPopup",e,i,r).executeNotNull()})}class ln extends wm{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}executeNotNull(){return p(this,null,function*(){const e=yield this.execute();return M(e,this.auth,"internal-error"),e})}onExecution(){return p(this,null,function*(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=ma();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fv.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="pendingRedirect",go=new Map;class Ki extends wm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return p(this,null,function*(){let e=go.get(this.auth._key());if(!e){try{const r=(yield _v(this.resolver,this.auth))?yield Vt(Ki.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return p(this,null,function*(){if(e.type==="signInViaRedirect")return Vt(Ki.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,Vt(Ki.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return p(this,null,function*(){})}cleanUp(){}}function _v(n,e){return p(this,null,function*(){const t=Rm(e),r=Am(n);if(!(yield r._isAvailable()))return!1;const i=(yield r._get(t))==="true";return yield r._remove(t),i})}function vm(n,e){return p(this,null,function*(){return Am(n)._set(Rm(e),"true")})}function yv(n,e){go.set(n._key(),e)}function Am(n){return Mt(n._redirectPersistence)}function Rm(n){return mo(gv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n,e,t){return Ev(n,e,t)}function Ev(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(He(n));const r=Oe(n);aa(n,e,Zr),yield r._initializationPromise;const i=Ps(r,t);return yield vm(i,r),i._openRedirect(r,e,"signInViaRedirect")})}function Tv(n,e,t){return wv(n,e,t)}function wv(n,e,t){return p(this,null,function*(){const r=G(n);aa(r.auth,e,Zr),yield r.auth._initializationPromise;const i=Ps(r.auth,t);yield da(!1,r,e.providerId),yield vm(i,r.auth);const s=yield Av(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)})}function vv(n,e){return p(this,null,function*(){return yield Oe(n)._initializationPromise,Sm(n,e,!1)})}function Sm(n,e,t=!1){return p(this,null,function*(){if(ve(n.app))return Promise.reject(He(n));const r=Oe(n),i=Ps(r,e),o=yield new Ki(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}function Av(n){return p(this,null,function*(){const e=ma(`${n.uid}:::`);return n._redirectEventId=e,yield n.auth._setRedirectUser(n),yield n.auth._persistUserIfCurrent(n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=10*60*1e3;class Sv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bm(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pd(e))}saveEventToCache(e){this.cachedEventUids.add(Pd(e)),this.lastProcessedEventTime=Date.now()}}function Pd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){return p(this,arguments,function*(n,e={}){return Ce(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kv=/^https?/;function Nv(n){return p(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield Pv(n);for(const t of e)try{if(Dv(t))return}catch(r){}mt(n,"unauthorized-domain")})}function Dv(n){const e=is(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kv.test(t))return!1;if(Cv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vv=new Rs(3e4,6e4);function Cd(){const n=we().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ov(n){return new Promise((e,t)=>{var i,s,o;function r(){Cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cd(),t(et(n,"network-request-failed"))},timeout:Vv.get()})}if((s=(i=we().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=we().gapi)!=null&&o.load)r();else{const c=nm("iframefcb");return we()[c]=()=>{gapi.load?r():t(et(n,"network-request-failed"))},Ou(`${OT()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw _o=null,e})}let _o=null;function xv(n){return _o=_o||Ov(n),_o}/**
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
 */const Mv=new Rs(5e3,15e3),Lv="__/auth/iframe",Fv="emulator/auth/iframe",Uv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $v(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Du(e,Fv):`https://${n.config.authDomain}/${Lv}`,r={apiKey:e.apiKey,appName:n.name,v:ur},i=Bv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Xr(r).slice(1)}`}function qv(n){return p(this,null,function*(){const e=yield xv(n),t=we().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:$v(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uv,dontclear:!0},r=>new Promise((i,s)=>p(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=et(n,"network-request-failed"),c=we().setTimeout(()=>{s(o)},Mv.get());function u(){we().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})})))})}/**
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
 */const jv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zv=500,Kv=600,Gv="_blank",Hv="http://localhost";class kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Wv(n,e,t,r=zv,i=Kv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=xe(J({},jv),{width:r.toString(),height:i.toString(),top:s,left:o}),h=be().toLowerCase();t&&(c=Qp(h)?Gv:t),Hp(h)&&(e=e||Hv,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[S,N])=>`${y}${S}=${N},`,"");if(AT(h)&&c!=="_self")return Qv(e||"",c),new kd(null);const m=window.open(e||"",c,f);M(m,n,"popup-blocked");try{m.focus()}catch(y){}return new kd(m)}function Qv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Jv="__/auth/handler",Yv="emulator/auth/handler",Xv=encodeURIComponent("fac");function Nd(n,e,t,r,i,s){return p(this,null,function*(){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ur,eventId:i};if(e instanceof Zr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ZI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof ei){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=yield n._getAppCheckToken(),h=u?`#${Xv}=${encodeURIComponent(u)}`:"";return`${Zv(n)}?${Xr(c).slice(1)}${h}`})}function Zv({config:n}){return n.emulator?Du(n,Yv):`https://${n.authDomain}/${Jv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="webStorageSupport";class eA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=Sm,this._overrideRedirectResult=yv}_openPopup(e,t,r,i){return p(this,null,function*(){var o;Bt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=yield Nd(e,t,r,is(),i);return Wv(e,s,ma())})}_openRedirect(e,t,r,i){return p(this,null,function*(){yield this._originValidation(e);const s=yield Nd(e,t,r,is(),i);return Hw(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return p(this,null,function*(){const t=yield qv(e),r=new Sv(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rc,{type:Rc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Rc];s!==void 0&&t(!!s),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Nv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return em()||Wp()||Vu()}}const tA=eA;var Dd="@firebase/auth",Vd="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}getToken(e){return p(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iA(n){ct(new nt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tm(n)},h=new kT(r,i,s,u);return KT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ct(new nt("auth-internal",e=>{const t=Oe(e.getProvider("auth").getImmediate());return(r=>new nA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Dd,Vd,rA(n)),Ge(Dd,Vd,"esm2020")}/**
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
 */const sA=5*60,oA=Cp("authIdTokenMaxAge")||sA;let Od=null;const aA=n=>e=>p(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>oA)return;const i=t==null?void 0:t.token;Od!==i&&(Od=i,yield fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function Z(n=As()){const e=Dt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zT(n,{popupRedirectResolver:tA,persistence:[Im,pm,Lu]}),r=Cp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=aA(s.toString());Bw(t,o,()=>o(t.currentUser)),Uw(t,c=>o(c))}}const i=Sp("auth");return i&&Qc(t,`http://${i}`),t}function cA(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}NT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",cA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iA("Browser");var uA="firebase",lA="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(uA,lA,"app");var xd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mn,Pm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.F=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,b){for(var I=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)I[Je-2]=arguments[Je];return _.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,E){E||(E=0);const v=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)v[w]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],w=T.g[2];let b=T.g[3],I;I=_+(b^E&(w^b))+v[0]+3614090360&4294967295,_=E+(I<<7&4294967295|I>>>25),I=b+(w^_&(E^w))+v[1]+3905402710&4294967295,b=_+(I<<12&4294967295|I>>>20),I=w+(E^b&(_^E))+v[2]+606105819&4294967295,w=b+(I<<17&4294967295|I>>>15),I=E+(_^w&(b^_))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(b^E&(w^b))+v[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=b+(w^_&(E^w))+v[5]+1200080426&4294967295,b=_+(I<<12&4294967295|I>>>20),I=w+(E^b&(_^E))+v[6]+2821735955&4294967295,w=b+(I<<17&4294967295|I>>>15),I=E+(_^w&(b^_))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(b^E&(w^b))+v[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=b+(w^_&(E^w))+v[9]+2336552879&4294967295,b=_+(I<<12&4294967295|I>>>20),I=w+(E^b&(_^E))+v[10]+4294925233&4294967295,w=b+(I<<17&4294967295|I>>>15),I=E+(_^w&(b^_))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(b^E&(w^b))+v[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=b+(w^_&(E^w))+v[13]+4254626195&4294967295,b=_+(I<<12&4294967295|I>>>20),I=w+(E^b&(_^E))+v[14]+2792965006&4294967295,w=b+(I<<17&4294967295|I>>>15),I=E+(_^w&(b^_))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(w^b&(E^w))+v[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=b+(E^w&(_^E))+v[6]+3225465664&4294967295,b=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(b^_))+v[11]+643717713&4294967295,w=b+(I<<14&4294967295|I>>>18),I=E+(b^_&(w^b))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^b&(E^w))+v[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=b+(E^w&(_^E))+v[10]+38016083&4294967295,b=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(b^_))+v[15]+3634488961&4294967295,w=b+(I<<14&4294967295|I>>>18),I=E+(b^_&(w^b))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^b&(E^w))+v[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=b+(E^w&(_^E))+v[14]+3275163606&4294967295,b=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(b^_))+v[3]+4107603335&4294967295,w=b+(I<<14&4294967295|I>>>18),I=E+(b^_&(w^b))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^b&(E^w))+v[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=b+(E^w&(_^E))+v[2]+4243563512&4294967295,b=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(b^_))+v[7]+1735328473&4294967295,w=b+(I<<14&4294967295|I>>>18),I=E+(b^_&(w^b))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(E^w^b)+v[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=b+(_^E^w)+v[8]+2272392833&4294967295,b=_+(I<<11&4294967295|I>>>21),I=w+(b^_^E)+v[11]+1839030562&4294967295,w=b+(I<<16&4294967295|I>>>16),I=E+(w^b^_)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^b)+v[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=b+(_^E^w)+v[4]+1272893353&4294967295,b=_+(I<<11&4294967295|I>>>21),I=w+(b^_^E)+v[7]+4139469664&4294967295,w=b+(I<<16&4294967295|I>>>16),I=E+(w^b^_)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^b)+v[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=b+(_^E^w)+v[0]+3936430074&4294967295,b=_+(I<<11&4294967295|I>>>21),I=w+(b^_^E)+v[3]+3572445317&4294967295,w=b+(I<<16&4294967295|I>>>16),I=E+(w^b^_)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^b)+v[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=b+(_^E^w)+v[12]+3873151461&4294967295,b=_+(I<<11&4294967295|I>>>21),I=w+(b^_^E)+v[15]+530742520&4294967295,w=b+(I<<16&4294967295|I>>>16),I=E+(w^b^_)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(w^(E|~b))+v[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=b+(E^(_|~w))+v[7]+1126891415&4294967295,b=_+(I<<10&4294967295|I>>>22),I=w+(_^(b|~E))+v[14]+2878612391&4294967295,w=b+(I<<15&4294967295|I>>>17),I=E+(b^(w|~_))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~b))+v[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=b+(E^(_|~w))+v[3]+2399980690&4294967295,b=_+(I<<10&4294967295|I>>>22),I=w+(_^(b|~E))+v[10]+4293915773&4294967295,w=b+(I<<15&4294967295|I>>>17),I=E+(b^(w|~_))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~b))+v[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=b+(E^(_|~w))+v[15]+4264355552&4294967295,b=_+(I<<10&4294967295|I>>>22),I=w+(_^(b|~E))+v[6]+2734768916&4294967295,w=b+(I<<15&4294967295|I>>>17),I=E+(b^(w|~_))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~b))+v[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=b+(E^(_|~w))+v[11]+3174756917&4294967295,b=_+(I<<10&4294967295|I>>>22),I=w+(_^(b|~E))+v[2]+718787259&4294967295,w=b+(I<<15&4294967295|I>>>17),I=E+(b^(w|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const E=_-this.blockSize,v=this.C;let w=this.h,b=0;for(;b<_;){if(w==0)for(;b<=E;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(v[w++]=T.charCodeAt(b++),w==this.blockSize){i(this,v),w=0;break}}else for(;b<_;)if(v[w++]=T[b++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[_++]=this.g[E]>>>v&255;return T};function s(T,_){var E=c;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function o(T,_){this.h=_;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const b=T[w]|0;v&&b==_||(E[w]=b,v=!1)}this.g=E}var c={};function u(T){return-128<=T&&T<128?s(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return D(h(-T));const _=[];let E=1;for(let v=0;T>=E;v++)_[v]=T/E|0,E*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let v=m;for(let b=0;b<T.length;b+=8){var w=Math.min(8,T.length-b);const I=parseInt(T.substring(b,b+w),_);w<8?(w=h(Math.pow(_,w)),v=v.j(w).add(h(I))):(v=v.j(E),v=v.add(h(I)))}return v}var m=u(0),y=u(1),S=u(16777216);n=o.prototype,n.m=function(){if(O(this))return-D(this).m();let T=0,_=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(O(this))return"-"+D(this).toString(T);const _=h(Math.pow(T,6));var E=this;let v="";for(;;){const w=H(E,_).g;E=K(E,w.j(_));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,N(E))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=K(this,T),O(T)?-1:N(T)?0:1};function D(T){const _=T.g.length,E=[];for(let v=0;v<_;v++)E[v]=~T.g[v];return new o(E,~T.h).add(y)}n.abs=function(){return O(this)?D(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=_;w++){let b=v+(this.i(w)&65535)+(T.i(w)&65535),I=(b>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,b&=65535,I&=65535,E[w]=I<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function K(T,_){return T.add(D(_))}n.j=function(T){if(N(this)||N(T))return m;if(O(this))return O(T)?D(this).j(D(T)):D(D(this).j(T));if(O(T))return D(this.j(D(T)));if(this.l(S)<0&&T.l(S)<0)return h(this.m()*T.m());const _=this.g.length+T.g.length,E=[];for(var v=0;v<2*_;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const b=this.i(v)>>>16,I=this.i(v)&65535,Je=T.i(w)>>>16,Qt=T.i(w)&65535;E[2*v+2*w]+=I*Qt,j(E,2*v+2*w),E[2*v+2*w+1]+=b*Qt,j(E,2*v+2*w+1),E[2*v+2*w+1]+=I*Je,j(E,2*v+2*w+1),E[2*v+2*w+2]+=b*Je,j(E,2*v+2*w+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function j(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function B(T,_){this.g=T,this.h=_}function H(T,_){if(N(_))throw Error("division by zero");if(N(T))return new B(m,m);if(O(T))return _=H(D(T),_),new B(D(_.g),D(_.h));if(O(_))return _=H(T,D(_)),new B(D(_.g),_.h);if(T.g.length>30){if(O(T)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var E=y,v=_;v.l(T)<=0;)E=W(E),v=W(v);var w=Y(E,1),b=Y(v,1);for(v=Y(v,2),E=Y(E,2);!N(v);){var I=b.add(v);I.l(T)<=0&&(w=w.add(E),b=I),v=Y(v,1),E=Y(E,1)}return _=K(T,w.j(_)),new B(w,_)}for(w=m;T.l(_)>=0;){for(E=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=h(E),I=b.j(_);O(I)||I.l(T)>0;)E-=v,b=h(E),I=b.j(_);N(b)&&(b=y),w=w.add(b),T=K(T,I)}return new B(w,T)}n.B=function(T){return H(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function W(T){const _=T.g.length+1,E=[];for(let v=0;v<_;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function Y(T,_){const E=_>>5;_%=32;const v=T.g.length-E,w=[];for(let b=0;b<v;b++)w[b]=_>0?T.i(b+E)>>>_|T.i(b+E+1)<<32-_:T.i(b+E);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Pm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,mn=o}).apply(typeof xd!="undefined"?xd:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var no=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cm,Mi,km,yo,Yc,Nm,Dm,Vm;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,l){if(l)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in d))break e;d=d[R]}a=a[a.length-1],g=d[a],l=l(g),l!=g&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=u,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,R,P){for(var x=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)x[Q-2]=arguments[Q];return l.prototype[R].apply(g,x)}}var y=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const l=a.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=a[g];return d}return[]}function N(a,l){for(let g=1;g<arguments.length;g++){const R=arguments[g];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const P=R.length||0;a.length=d+P;for(let x=0;x<P;x++)a[d+x]=R[x]}else a.push(R)}}class O{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function D(a){o.setTimeout(()=>{throw a},0)}function K(){var a=T;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,d){const g=B.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var B=new O(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let W,Y=!1,T=new j,_=()=>{const a=Promise.resolve(void 0);W=()=>{a.then(E)}};function E(){for(var a;a=K();){try{a.h.call(a.g)}catch(d){D(d)}var l=B;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Y=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch(d){}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Je(a,l){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Je,w),Je.prototype.init=function(a,l){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Je.Z.h.call(this)},Je.prototype.h=function(){Je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Qt="closure_listenable_"+(Math.random()*1e6|0),Xy=0;function Zy(a,l,d,g,R){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=R,this.key=++Xy,this.da=this.fa=!1}function Ls(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fs(a,l,d){for(const g in a)l.call(d,a[g],g,a)}function eI(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function nh(a){const l={};for(const d in a)l[d]=a[d];return l}const rh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ih(a,l){let d,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(d in g)a[d]=g[d];for(let P=0;P<rh.length;P++)d=rh[P],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Us(a){this.src=a,this.g={},this.h=0}Us.prototype.add=function(a,l,d,g,R){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const x=Qa(a,l,g,R);return x>-1?(l=a[x],d||(l.fa=!1)):(l=new Zy(l,this.src,P,!!g,R),l.fa=d,a.push(l)),l};function Wa(a,l){const d=l.type;if(d in a.g){var g=a.g[d],R=Array.prototype.indexOf.call(g,l,void 0),P;(P=R>=0)&&Array.prototype.splice.call(g,R,1),P&&(Ls(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Qa(a,l,d,g){for(let R=0;R<a.length;++R){const P=a[R];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return R}return-1}var Ja="closure_lm_"+(Math.random()*1e6|0),Ya={};function sh(a,l,d,g,R){if(g&&g.once)return ah(a,l,d,g,R);if(Array.isArray(l)){for(let P=0;P<l.length;P++)sh(a,l[P],d,g,R);return null}return d=tc(d),a&&a[Qt]?a.J(l,d,c(g)?!!g.capture:!!g,R):oh(a,l,d,!1,g,R)}function oh(a,l,d,g,R,P){if(!l)throw Error("Invalid event type");const x=c(R)?!!R.capture:!!R;let Q=Za(a);if(Q||(a[Ja]=Q=new Us(a)),d=Q.add(l,d,g,x,P),d.proxy)return d;if(g=tI(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)b||(R=x),R===void 0&&(R=!1),a.addEventListener(l.toString(),g,R);else if(a.attachEvent)a.attachEvent(uh(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function tI(){function a(d){return l.call(a.src,a.listener,d)}const l=nI;return a}function ah(a,l,d,g,R){if(Array.isArray(l)){for(let P=0;P<l.length;P++)ah(a,l[P],d,g,R);return null}return d=tc(d),a&&a[Qt]?a.K(l,d,c(g)?!!g.capture:!!g,R):oh(a,l,d,!0,g,R)}function ch(a,l,d,g,R){if(Array.isArray(l))for(var P=0;P<l.length;P++)ch(a,l[P],d,g,R);else g=c(g)?!!g.capture:!!g,d=tc(d),a&&a[Qt]?(a=a.i,P=String(l).toString(),P in a.g&&(l=a.g[P],d=Qa(l,d,g,R),d>-1&&(Ls(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[P],a.h--)))):a&&(a=Za(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Qa(l,d,g,R)),(d=a>-1?l[a]:null)&&Xa(d))}function Xa(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Qt])Wa(l.i,a);else{var d=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(d,g,a.capture):l.detachEvent?l.detachEvent(uh(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=Za(l))?(Wa(d,a),d.h==0&&(d.src=null,l[Ja]=null)):Ls(a)}}}function uh(a){return a in Ya?Ya[a]:Ya[a]="on"+a}function nI(a,l){if(a.da)a=!0;else{l=new Je(l,this);const d=a.listener,g=a.ha||a.src;a.fa&&Xa(a),a=d.call(g,l)}return a}function Za(a){return a=a[Ja],a instanceof Us?a:null}var ec="__closure_events_fn_"+(Math.random()*1e9>>>0);function tc(a){return typeof a=="function"?a:(a[ec]||(a[ec]=function(l){return a.handleEvent(l)}),a[ec])}function Le(){v.call(this),this.i=new Us(this),this.M=this,this.G=null}m(Le,v),Le.prototype[Qt]=!0,Le.prototype.removeEventListener=function(a,l,d,g){ch(this,a,l,d,g)};function je(a,l){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new w(l,a);else if(l instanceof w)l.target=l.target||a;else{var R=l;l=new w(g,a),ih(l,R)}R=!0;let P,x;if(d)for(x=d.length-1;x>=0;x--)P=l.g=d[x],R=Bs(P,g,!0,l)&&R;if(P=l.g=a,R=Bs(P,g,!0,l)&&R,R=Bs(P,g,!1,l)&&R,d)for(x=0;x<d.length;x++)P=l.g=d[x],R=Bs(P,g,!1,l)&&R}Le.prototype.N=function(){if(Le.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let g=0;g<d.length;g++)Ls(d[g]);delete a.g[l],a.h--}}this.G=null},Le.prototype.J=function(a,l,d,g){return this.i.add(String(a),l,!1,d,g)},Le.prototype.K=function(a,l,d,g){return this.i.add(String(a),l,!0,d,g)};function Bs(a,l,d,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let R=!0;for(let P=0;P<l.length;++P){const x=l[P];if(x&&!x.da&&x.capture==d){const Q=x.listener,Re=x.ha||x.src;x.fa&&Wa(a.i,x),R=Q.call(Re,g)!==!1&&R}}return R&&!g.defaultPrevented}function rI(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function lh(a){a.g=rI(()=>{a.g=null,a.i&&(a.i=!1,lh(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class iI extends v{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:lh(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(a){v.call(this),this.h=a,this.g={}}m(ui,v);var hh=[];function dh(a){Fs(a.g,function(l,d){this.g.hasOwnProperty(d)&&Xa(l)},a),a.g={}}ui.prototype.N=function(){ui.Z.N.call(this),dh(this)},ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nc=o.JSON.stringify,sI=o.JSON.parse,oI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function fh(){}function ph(){}var li={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rc(){w.call(this,"d")}m(rc,w);function ic(){w.call(this,"c")}m(ic,w);var Pn={},mh=null;function $s(){return mh=mh||new Le}Pn.Ia="serverreachability";function gh(a){w.call(this,Pn.Ia,a)}m(gh,w);function hi(a){const l=$s();je(l,new gh(l))}Pn.STAT_EVENT="statevent";function _h(a,l){w.call(this,Pn.STAT_EVENT,a),this.stat=l}m(_h,w);function ze(a){const l=$s();je(l,new _h(l,a))}Pn.Ja="timingevent";function yh(a,l){w.call(this,Pn.Ja,a),this.size=l}m(yh,w);function di(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function fi(){this.g=!0}fi.prototype.ua=function(){this.g=!1};function aI(a,l,d,g,R,P){a.info(function(){if(a.g)if(P){var x="",Q=P.split("&");for(let ce=0;ce<Q.length;ce++){var Re=Q[ce].split("=");if(Re.length>1){const Ne=Re[0];Re=Re[1];const Tt=Ne.split("_");x=Tt.length>=2&&Tt[1]=="type"?x+(Ne+"="+Re+"&"):x+(Ne+"=redacted&")}}}else x=null;else x=P;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+l+`
`+d+`
`+x})}function cI(a,l,d,g,R,P,x){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+l+`
`+d+`
`+P+" "+x})}function hr(a,l,d,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+lI(a,d)+(g?" "+g:"")})}function uI(a,l){a.info(function(){return"TIMEOUT: "+l})}fi.prototype.info=function(){};function lI(a,l){if(!a.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var R=g[0];if(R!="noop"&&R!="stop"&&R!="close")for(let x=1;x<g.length;x++)g[x]=""}}}}return nc(P)}catch(P){return l}}var qs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ih={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Eh;function sc(){}m(sc,fh),sc.prototype.g=function(){return new XMLHttpRequest},Eh=new sc;function pi(a){return encodeURIComponent(String(a))}function hI(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function Jt(a,l,d,g){this.j=a,this.i=l,this.l=d,this.S=g||1,this.V=new ui(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Th}function Th(){this.i=null,this.g="",this.h=!1}var wh={},oc={};function ac(a,l,d){a.M=1,a.A=zs(Et(l)),a.u=d,a.R=!0,vh(a,null)}function vh(a,l){a.F=Date.now(),js(a),a.B=Et(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Mh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Th,a.g=ed(a.j,d?l:null,!a.u),a.P>0&&(a.O=new iI(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,g=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(hh[0]=R.toString()),R=hh);for(let P=0;P<R.length;P++){const x=sh(d,R[P],g||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.J?nh(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),hi(),aI(a.i,a.v,a.B,a.l,a.S,a.u)}Jt.prototype.ba=function(a){a=a.target;const l=this.O;l&&Zt(a)==3?l.j():this.Y(a)},Jt.prototype.Y=function(a){try{if(a==this.g)e:{const Q=Zt(this.g),Re=this.g.ya(),ce=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||jh(this.g)))){this.K||Q!=4||Re==7||(Re==8||ce<=0?hi(3):hi(2)),cc(this);var l=this.g.ca();this.X=l;var d=dI(this);if(this.o=l==200,cI(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,R=this.g;if((g=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var P=g;break t}}P=null}if(a=P)hr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,uc(this,a);else{this.o=!1,this.m=3,ze(12),Cn(this),mi(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<d.length;)if(Ne=fI(this,d),Ne==oc){Q==4&&(this.m=4,ze(14),a=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==wh){this.m=4,ze(15),hr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else hr(this.i,this.l,Ne,null),uc(this,Ne);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,ze(16),a=!1),this.o=this.o&&a,!a)hr(this.i,this.l,d,"[Invalid Chunked Response]"),Cn(this),mi(this);else if(d.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),_c(x),x.P=!0,ze(11))}}else hr(this.i,this.l,d,null),uc(this,d);Q==4&&Cn(this),this.o&&!this.K&&(Q==4?Jh(this.j,this):(this.o=!1,js(this)))}else bI(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,ze(12)):(this.m=0,ze(13)),Cn(this),mi(this)}}}catch(Q){}finally{}};function dI(a){if(!Ah(a))return a.g.la();const l=jh(a.g);if(l==="")return"";let d="";const g=l.length,R=Zt(a.g)==4;if(!a.h.i){if(typeof TextDecoder=="undefined")return Cn(a),mi(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<g;P++)a.h.h=!0,d+=a.h.i.decode(l[P],{stream:!(R&&P==g-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function Ah(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function fI(a,l){var d=a.C,g=l.indexOf(`
`,d);return g==-1?oc:(d=Number(l.substring(d,g)),isNaN(d)?wh:(g+=1,g+d>l.length?oc:(l=l.slice(g,g+d),a.C=g+d,l)))}Jt.prototype.cancel=function(){this.K=!0,Cn(this)};function js(a){a.T=Date.now()+a.H,Rh(a,a.H)}function Rh(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=di(h(a.aa,a),l)}function cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Jt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(uI(this.i,this.B),this.M!=2&&(hi(),ze(17)),Cn(this),this.m=2,mi(this)):Rh(this,this.T-a)};function mi(a){a.j.I==0||a.K||Jh(a.j,a)}function Cn(a){cc(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,dh(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function uc(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||lc(d.h,a))){if(!a.L&&lc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch(ce){g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Qs(d),Hs(d);else break e;gc(d),ze(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=di(h(d.Va,d),6e3));Ph(d.h)<=1&&d.ta&&(d.ta=void 0)}else Nn(d,11)}else if((a.L||d.g==a)&&Qs(d),!I(l))for(R=d.Ba.g.parse(l),l=0;l<R.length;l++){let ce=R[l];const Ne=ce[0];if(!(Ne<=d.K))if(d.K=Ne,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const Tt=ce[3];Tt!=null&&(d.ka=Tt,d.j.info("VER="+d.ka));const Dn=ce[4];Dn!=null&&(d.za=Dn,d.j.info("SVER="+d.za));const en=ce[5];en!=null&&typeof en=="number"&&en>0&&(g=1.5*en,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const tn=a.g;if(tn){const Ys=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var P=g.h;P.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(hc(P,P.h),P.h=null))}if(g.G){const yc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(g.wa=yc,le(g.J,g.G,yc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var x=a;if(g.na=Zh(g,g.L?g.ba:null,g.W),x.L){Ch(g.h,x);var Q=x,Re=g.O;Re&&(Q.H=Re),Q.D&&(cc(Q),js(Q)),g.g=x}else Wh(g);d.i.length>0&&Ws(d)}else ce[0]!="stop"&&ce[0]!="close"||Nn(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Nn(d,7):mc(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}hi(4)}catch(ce){}}var pI=class{constructor(a,l){this.g=a,this.map=l}};function Sh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ph(a){return a.h?1:a.g?a.g.size:0}function lc(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function hc(a,l){a.g?a.g.add(l):a.h=l}function Ch(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Sh.prototype.cancel=function(){if(this.i=kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return S(a.i)}var Nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mI(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let R,P=null;g>=0?(R=a[d].substring(0,g),P=a[d].substring(g+1)):R=a[d],l(R,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Yt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Yt?(this.l=a.l,gi(this,a.j),this.o=a.o,this.g=a.g,_i(this,a.u),this.h=a.h,dc(this,Lh(a.i)),this.m=a.m):a&&(l=String(a).match(Nh))?(this.l=!1,gi(this,l[1]||"",!0),this.o=yi(l[2]||""),this.g=yi(l[3]||"",!0),_i(this,l[4]),this.h=yi(l[5]||"",!0),dc(this,l[6]||"",!0),this.m=yi(l[7]||"")):(this.l=!1,this.i=new Ei(null,this.l))}Yt.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Ii(l,Dh,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Ii(l,Dh,!0),"@"),a.push(pi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ii(d,d.charAt(0)=="/"?yI:_I,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ii(d,EI)),a.join("")},Yt.prototype.resolve=function(a){const l=Et(this);let d=!!a.j;d?gi(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var g=a.h;if(d)_i(l,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var R=l.h.lastIndexOf("/");R!=-1&&(g=l.h.slice(0,R+1)+g)}if(R=g,R==".."||R==".")g="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){g=R.lastIndexOf("/",0)==0,R=R.split("/");const P=[];for(let x=0;x<R.length;){const Q=R[x++];Q=="."?g&&x==R.length&&P.push(""):Q==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&x==R.length&&P.push("")):(P.push(Q),g=!0)}g=P.join("/")}else g=R}return d?l.h=g:d=a.i.toString()!=="",d?dc(l,Lh(a.i)):d=!!a.m,d&&(l.m=a.m),l};function Et(a){return new Yt(a)}function gi(a,l,d){a.j=d?yi(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function _i(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function dc(a,l,d){l instanceof Ei?(a.i=l,TI(a.i,a.l)):(d||(l=Ii(l,II)),a.i=new Ei(l,a.l))}function le(a,l,d){a.i.set(l,d)}function zs(a){return le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function yi(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ii(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,gI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Dh=/[#\/\?@]/g,_I=/[#\?:]/g,yI=/[#\?]/g,II=/[#\?@]/g,EI=/#/g;function Ei(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&mI(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Ei.prototype,n.add=function(a,l){kn(this),this.i=null,a=dr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Vh(a,l){kn(a),l=dr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Oh(a,l){return kn(a),l=dr(a,l),a.g.has(l)}n.forEach=function(a,l){kn(this),this.g.forEach(function(d,g){d.forEach(function(R){a.call(l,R,g,this)},this)},this)};function xh(a,l){kn(a);let d=[];if(typeof l=="string")Oh(a,l)&&(d=d.concat(a.g.get(dr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}n.set=function(a,l){return kn(this),this.i=null,a=dr(this,a),Oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=xh(this,a),a.length>0?String(a[0]):l):l};function Mh(a,l,d){Vh(a,l),d.length>0&&(a.i=null,a.g.set(dr(a,l),S(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const R=pi(d);d=xh(this,d);for(let P=0;P<d.length;P++){let x=R;d[P]!==""&&(x+="="+pi(d[P])),a.push(x)}}return this.i=a.join("&")};function Lh(a){const l=new Ei;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function dr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function TI(a,l){l&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(d,g){const R=g.toLowerCase();g!=R&&(Vh(this,g),Mh(this,R,d))},a)),a.j=l}function wI(a,l){const d=new fi;if(o.Image){const g=new Image;g.onload=f(Xt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(Xt,d,"TestLoadImage: error",!1,l,g),g.onabort=f(Xt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(Xt,d,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function vI(a,l){const d=new fi,g=new AbortController,R=setTimeout(()=>{g.abort(),Xt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(R),P.ok?Xt(d,"TestPingServer: ok",!0,l):Xt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Xt(d,"TestPingServer: error",!1,l)})}function Xt(a,l,d,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(d)}catch(P){}}function AI(){this.g=new oI}function fc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(fc,fh),fc.prototype.g=function(){return new Ks(this.i,this.h)};function Ks(a,l){Le.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ks,Le),n=Ks.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,wi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Ti(this):wi(this),this.readyState==3&&Fh(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ti(this))},n.Na=function(a){this.g&&(this.response=a,Ti(this))},n.ga=function(){this.g&&Ti(this)};function Ti(a){a.readyState=4,a.l=null,a.j=null,a.B=null,wi(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uh(a){let l="";return Fs(a,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function pc(a,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Uh(d),typeof a=="string"?d!=null&&pi(d):le(a,l,d))}function fe(a){Le.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(fe,Le);var RI=/^https?$/i,SI=["POST","PUT"];n=fe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Eh.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){Bh(this,P);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)d.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(SI,l,void 0)>=0)||g||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of d)this.g.setRequestHeader(P,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){Bh(this,P)}};function Bh(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,$h(a),Gs(a)}function $h(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,je(this,"complete"),je(this,"abort"),Gs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gs(this,!0)),fe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?qh(this):this.Xa())},n.Xa=function(){qh(this)};function qh(a){if(a.h&&typeof s!="undefined"){if(a.v&&Zt(a)==4)setTimeout(a.Ca.bind(a),0);else if(je(a,"readystatechange"),Zt(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=P===0){let x=String(a.D).match(Nh)[1]||null;!x&&o.self&&o.self.location&&(x=o.self.location.protocol.slice(0,-1)),g=!RI.test(x?x.toLowerCase():"")}d=g}if(d)je(a,"complete"),je(a,"success");else{a.o=6;try{var R=Zt(a)>2?a.g.statusText:""}catch(x){R=""}a.l=R+" ["+a.ca()+"]",$h(a)}}finally{Gs(a)}}}}function Gs(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||je(a,"ready");try{d.onreadystatechange=null}catch(g){}}}n.isActive=function(){return!!this.g};function Zt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Zt(this)>2?this.g.status:-1}catch(a){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),sI(l)}};function jh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(l){return null}}function bI(a){const l={};a=(a.g&&Zt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var d=hI(a[g]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[R]||[];l[R]=P,P.push(d)}eI(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function zh(a){this.za=0,this.i=[],this.j=new fi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vi("baseRetryDelayMs",5e3,a),this.Za=vi("retryDelaySeedMs",1e4,a),this.Ta=vi("forwardChannelMaxRetries",2,a),this.va=vi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Sh(a&&a.concurrentRequestLimit),this.Ba=new AI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=zh.prototype,n.ka=8,n.I=1,n.connect=function(a,l,d,g){ze(0),this.W=a,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Zh(this,null,this.W),Ws(this)};function mc(a){if(Kh(a),a.I==3){var l=a.V++,d=Et(a.J);if(le(d,"SID",a.M),le(d,"RID",l),le(d,"TYPE","terminate"),Ai(a,d),l=new Jt(a,a.j,l),l.M=2,l.A=zs(Et(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch(g){}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=ed(l.j,null),l.g.ea(l.A)),l.F=Date.now(),js(l)}Xh(a)}function Hs(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function Kh(a){Hs(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ws(a){if(!bh(a.h)&&!a.m){a.m=!0;var l=a.Ea;W||_(),Y||(W(),Y=!0),T.add(l,a),a.D=0}}function PI(a,l){return Ph(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=di(h(a.Ea,a,l),Yh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Jt(this,this.j,a);let P=this.o;if(this.U&&(P?(P=nh(P),ih(P,this.U)):P=this.U),this.u!==null||this.R||(R.J=P,P=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Hh(this,R,l),d=Et(this.J),le(d,"RID",a),le(d,"CVER",22),this.G&&le(d,"X-HTTP-Session-Id",this.G),Ai(this,d),P&&(this.R?l="headers="+pi(Uh(P))+"&"+l:this.u&&pc(d,this.u,P)),hc(this.h,R),this.Ra&&le(d,"TYPE","init"),this.S?(le(d,"$req",l),le(d,"SID","null"),R.U=!0,ac(R,d,null)):ac(R,d,l),this.I=2}}else this.I==3&&(a?Gh(this,a):this.i.length==0||bh(this.h)||Gh(this))};function Gh(a,l){var d;l?d=l.l:d=a.V++;const g=Et(a.J);le(g,"SID",a.M),le(g,"RID",d),le(g,"AID",a.K),Ai(a,g),a.u&&a.o&&pc(g,a.u,a.o),d=new Jt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Hh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),hc(a.h,d),ac(d,g,l)}function Ai(a,l){a.H&&Fs(a.H,function(d,g){le(l,g,d)}),a.l&&Fs({},function(d,g){le(l,g,d)})}function Hh(a,l,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let Q=-1;for(;;){const Re=["count="+d];Q==-1?d>0?(Q=R[0].g,Re.push("ofs="+Q)):Q=0:Re.push("ofs="+Q);let ce=!0;for(let Ne=0;Ne<d;Ne++){var P=R[Ne].g;const Tt=R[Ne].map;if(P-=Q,P<0)Q=Math.max(0,R[Ne].g-100),ce=!1;else try{P="req"+P+"_"||"";try{var x=Tt instanceof Map?Tt:Object.entries(Tt);for(const[Dn,en]of x){let tn=en;c(en)&&(tn=nc(en)),Re.push(P+Dn+"="+encodeURIComponent(tn))}}catch(Dn){throw Re.push(P+"type="+encodeURIComponent("_badmap")),Dn}}catch(Dn){g&&g(Tt)}}if(ce){x=Re.join("&");break e}}x=void 0}return a=a.i.splice(0,d),l.G=a,x}function Wh(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;W||_(),Y||(W(),Y=!0),T.add(l,a),a.A=0}}function gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=di(h(a.Da,a),Yh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Qh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=di(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ze(10),Hs(this),Qh(this))};function _c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Qh(a){a.g=new Jt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=Et(a.na);le(l,"RID","rpc"),le(l,"SID",a.M),le(l,"AID",a.K),le(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&le(l,"TO",a.ia),le(l,"TYPE","xmlhttp"),Ai(a,l),a.u&&a.o&&pc(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=zs(Et(l)),d.u=null,d.R=!0,vh(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Hs(this),gc(this),ze(19))};function Qs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Jh(a,l){var d=null;if(a.g==l){Qs(a),_c(a),a.g=null;var g=2}else if(lc(a.h,l))d=l.G,Ch(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var R=a.D;g=$s(),je(g,new yh(g,d)),Ws(a)}else Wh(a);else if(R=l.m,R==3||R==0&&l.X>0||!(g==1&&PI(a,l)||g==2&&gc(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),R){case 1:Nn(a,5);break;case 4:Nn(a,10);break;case 3:Nn(a,6);break;default:Nn(a,2)}}}function Yh(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function Nn(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),g=a.Ua;const R=!g;g=new Yt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||gi(g,"https"),zs(g),R?wI(g.toString(),d):vI(g.toString(),d)}else ze(2);a.I=0,a.l&&a.l.pa(l),Xh(a),Kh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Xh(a){if(a.I=0,a.ja=[],a.l){const l=kh(a.h);(l.length!=0||a.i.length!=0)&&(N(a.ja,l),N(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function Zh(a,l,d){var g=d instanceof Yt?Et(d):new Yt(d);if(g.g!="")l&&(g.g=l+"."+g.g),_i(g,g.u);else{var R=o.location;g=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;const P=new Yt(null);g&&gi(P,g),l&&(P.g=l),R&&_i(P,R),d&&(P.h=d),g=P}return d=a.G,l=a.wa,d&&l&&le(g,d,l),le(g,"VER",a.ka),Ai(a,g),g}function ed(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new fe(new fc({ab:d})):new fe(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function td(){}n=td.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Js(){}Js.prototype.g=function(a,l){return new rt(a,l)};function rt(a,l){Le.call(this),this.g=new zh(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!I(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!I(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new fr(this)}m(rt,Le),rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){mc(this.g)},rt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=nc(a),a=d);l.i.push(new pI(l.Ya++,a)),l.I==3&&Ws(l)},rt.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,rt.Z.N.call(this)};function nd(a){rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(nd,rc);function rd(){ic.call(this),this.status=1}m(rd,ic);function fr(a){this.g=a}m(fr,td),fr.prototype.ra=function(){je(this.g,"a")},fr.prototype.qa=function(a){je(this.g,new nd(a))},fr.prototype.pa=function(a){je(this.g,new rd)},fr.prototype.oa=function(){je(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,Vm=function(){return new Js},Dm=function(){return $s()},Nm=Pn,Yc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,yo=qs,Ih.COMPLETE="complete",km=Ih,ph.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",Le.prototype.listen=Le.prototype.J,Mi=ph,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,Cm=fe}).apply(typeof no!="undefined"?no:typeof self!="undefined"?self:typeof window!="undefined"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti="12.11.0";function hA(n){ti=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Jn=new oa("@firebase/firestore");function Er(){return Jn.logLevel}function k(n,...e){if(Jn.logLevel<=ee.DEBUG){const t=e.map(Bu);Jn.debug(`Firestore (${ti}): ${n}`,...t)}}function Ie(n,...e){if(Jn.logLevel<=ee.ERROR){const t=e.map(Bu);Jn.error(`Firestore (${ti}): ${n}`,...t)}}function Yn(n,...e){if(Jn.logLevel<=ee.WARN){const t=e.map(Bu);Jn.warn(`Firestore (${ti}): ${n}`,...t)}}function Bu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Om(n,r,t)}function Om(n,e,t){let r=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(i){r+=" CONTEXT: "+t}throw Ie(r),new Error(r)}function $(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Om(e,i,r)}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class fA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pA{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(()=>p(this,null,function*(){yield u.promise,yield i(this.currentUser)}))},c=u=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string",31837,{l:r}),new xm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class mA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new mA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Md{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _A{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$(this.o===void 0,3512);const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Md(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Md(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=yA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function Xc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Sc(i)===Sc(s)?z(i,s):Sc(i)?1:-1}return z(n.length,e.length)}const IA=55296,EA=57343;function Sc(n){const e=n.charCodeAt(0);return e>=IA&&e<=EA}function Or(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Mm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="__name__";class wt{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=wt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return z(e.length,t.length)}static compareSegments(e,t){const r=wt.isNumericId(e),i=wt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?wt.extractNumericId(e).compare(wt.extractNumericId(t)):Xc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mn.fromString(e.substring(4,e.length-2))}}class ie extends wt{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const TA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends wt{construct(e,t,r){return new de(e,t,r)}static isValidIdentifier(e){return TA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ld}static keyField(){return new de([Ld])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ie.fromString(e))}static fromName(e){return new L(ie.fromString(e).popFirst(5))}static empty(){return new L(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n,e,t){if(!t)throw new V(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wA(n,e,t,r){if(e===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fd(n){if(!L.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ud(n){if(L.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fm(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function _a(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_a(n);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function vA(n,e){if(e<=0)throw new V(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function Cs(n,e){if(!Fm(n))throw new V(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new V(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=-62135596800,$d=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*$d);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bd)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$d}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Cs(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:Ae("string",se._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new se(0,0))}static max(){return new q(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xr=-1;class Lo{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Zc(n){return n.fields.find(e=>e.kind===2)}function xn(n){return n.fields.filter(e=>e.kind!==2)}Lo.UNKNOWN_ID=-1;class Io{constructor(e,t){this.fieldPath=e,this.kind=t}}class as{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new as(0,ut.min())}}function Um(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new ut(i,L.empty(),e)}function Bm(n){return new ut(n.readTime,n.key,xr)}class ut{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ut(q.min(),L.empty(),xr)}static max(){return new ut(q.max(),L.empty(),xr)}}function qu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n){return p(this,null,function*(){if(n.code!==C.FAILED_PRECONDITION||n.message!==$m)throw n;k("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,r)=>{t(e)})}static reject(e){return new A((t,r)=>{r(e)})}static waitFor(e){return new A((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=A.resolve(!1);for(const r of e)t=t.next(i=>i?A.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new A((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new A((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="SimpleDb";class ya{static open(e,t,r,i){try{return new ya(t,e.transaction(i,r))}catch(s){throw new Gi(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new bt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Gi(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=ju(r.target.error);this.S.reject(new Gi(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(k(it,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new RA(t)}}class gn{static delete(e){return k(it,"Removing database:",e),Ln(Pu().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!vs())return!1;if(gn.F())return!0;const e=be(),t=gn.M(e),r=0<t&&t<10,i=jm(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,gn.M(be())===12.2&&Ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}L(e){return p(this,null,function*(){return this.db||(k(it,"Opening database:",this.name),this.db=yield new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Gi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new V(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Gi(e,o))},i.onupgradeneeded=s=>{k(it,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{k(it,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db})}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}runTransaction(e,t,r,i){return p(this,null,function*(){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=yield this.L(e);const c=ya.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.C(),h)).catch(h=>(c.abort(h),A.reject(h))).toPromise();return u.catch(()=>{}),yield c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(k(it,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}})}close(){this.db&&this.db.close(),this.db=void 0}}function jm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class AA{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return Ln(this.U.delete())}}class Gi extends V{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Rn(n){return n.name==="IndexedDbTransactionError"}class RA{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(k(it,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(k(it,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ln(r)}add(e){return k(it,"ADD",this.store.name,e,e),Ln(this.store.add(e))}get(e){return Ln(this.store.get(e)).next(t=>(t===void 0&&(t=null),k(it,"GET",this.store.name,e,t),t))}delete(e){return k(it,"DELETE",this.store.name,e),Ln(this.store.delete(e))}count(){return k(it,"COUNT",this.store.name),Ln(this.store.count())}J(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new A((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.H(s,(c,u)=>{o.push(u)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new A((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}X(e,t){k(it,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.H(i,(s,o,c)=>c.delete())}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}te(e){const t=this.cursor({});return new A((r,i)=>{t.onerror=s=>{const o=ju(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}H(e,t){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new AA(c),h=t(c.primaryKey,c.value,u);if(h instanceof A){const f=h.catch(m=>(u.done(),A.reject(m)));r.push(f)}u.isDone?i():u.G===null?c.continue():c.continue(u.G)}}).next(()=>A.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ln(n){return new A((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=ju(r.target.error);t(i)}})}let qd=!1;function ju(n){const e=gn.M(be());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qd||(qd=!0,setTimeout(()=>{throw r},0)),r}}return n}const Hi="IndexBackfiller";class SA{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){k(Hi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,()=>p(this,null,function*(){this.task=null;try{const t=yield this.ne.ie();k(Hi,`Documents written: ${t}`)}catch(t){Rn(t)?k(Hi,"Ignoring IndexedDB error during index backfill: ",t):yield An(t)}yield this.re(6e4)}))}}class bA{constructor(e,t){this.localStore=e,this.persistence=t}ie(e=50){return p(this,null,function*(){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))})}se(e,t){const r=new Set;let i=t,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return k(Hi,`Processing collection: ${o}`),this.oe(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(c=>(k(Hi,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}_e(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Bm(s);qu(o,r)>0&&(r=o)}),new ut(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ye{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ye.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=-1;function Ia(n){return n==null}function cs(n){return n===0&&1/n==-1/0}function zm(n){return typeof n=="number"&&Number.isInteger(n)&&!cs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="";function qe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=jd(e)),e=PA(n.get(t),e);return jd(e)}function PA(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Fo:t+="";break;default:t+=s}}return t}function jd(n){return n+Fo+""}function At(n){const e=n.length;if($(e>=2,64408,{path:n}),e===2)return $(n.charAt(0)===Fo&&n.charAt(1)==="",56145,{path:n}),ie.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(Fo,s);switch((o<0||o>t)&&F(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:F(61167,{path:n})}s=o+2}return new ie(r)}/**
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
 */const Mn="remoteDocuments",ks="owner",pr="owner",us="mutationQueues",CA="userId",gt="mutations",zd="batchId",$n="userMutationsIndex",Kd=["userId","batchId"];/**
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
 */function Eo(n,e){return[n,qe(e)]}function Km(n,e,t){return[n,qe(e),t]}const kA={},Mr="documentMutations",Uo="remoteDocumentsV14",NA=["prefixPath","collectionGroup","readTime","documentId"],To="documentKeyIndex",DA=["prefixPath","collectionGroup","documentId"],Gm="collectionGroupIndex",VA=["collectionGroup","readTime","prefixPath","documentId"],ls="remoteDocumentGlobal",eu="remoteDocumentGlobalKey",Lr="targets",Hm="queryTargetsIndex",OA=["canonicalId","targetId"],Fr="targetDocuments",xA=["targetId","path"],zu="documentTargetsIndex",MA=["path","targetId"],Bo="targetGlobalKey",zn="targetGlobal",hs="collectionParents",LA=["collectionId","parent"],Ur="clientMetadata",FA="clientId",Ea="bundles",UA="bundleId",Ta="namedQueries",BA="name",Ku="indexConfiguration",$A="indexId",tu="collectionGroupIndex",qA="collectionGroup",Wi="indexState",jA=["indexId","uid"],Wm="sequenceNumberIndex",zA=["uid","sequenceNumber"],Qi="indexEntries",KA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Qm="documentKeyIndex",GA=["indexId","uid","orderedDocumentKey"],wa="documentOverlays",HA=["userId","collectionPath","documentId"],nu="collectionPathOverlayIndex",WA=["userId","collectionPath","largestBatchId"],Jm="collectionGroupOverlayIndex",QA=["userId","collectionGroup","largestBatchId"],Gu="globals",JA="name",Ym=[us,gt,Mr,Mn,Lr,ks,zn,Fr,Ur,ls,hs,Ea,Ta],YA=[...Ym,wa],Xm=[us,gt,Mr,Uo,Lr,ks,zn,Fr,Ur,ls,hs,Ea,Ta,wa],Zm=Xm,Hu=[...Zm,Ku,Wi,Qi],XA=Hu,eg=[...Hu,Gu],ZA=eg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends qm{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function ke(n,e){const t=U(n);return gn.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:Me.RED,this.left=i!=null?i:Me.EMPTY,this.right=s!=null?s:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Me(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hd(this.data.getIterator())}getIteratorFrom(e){return new Hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class Hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function mr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new ae(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Or(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ng extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new ng("Invalid base64 string: "+s):s}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const eR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if($(!!n,39018),typeof n=="string"){let e=0;const t=eR.exec(n);if($(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function jt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="server_timestamp",ig="__type__",sg="__previous_value__",og="__local_write_time__";function Wu(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ig])==null?void 0:r.stringValue)===rg}function va(n){const e=n.mapValue.fields[sg];return Wu(e)?va(e):e}function ds(n){const e=qt(n.mapValue.fields[og].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t,r,i,s,o,c,u,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const fs="(default)";class Xn{constructor(e,t){this.projectId=e,this.database=t||fs}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===fs}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}function nR(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="__type__",ag="__max__",hn={mapValue:{fields:{__type__:{stringValue:ag}}}},Ju="__vector__",Br="value",wo={nullValue:"NULL_VALUE"};function yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wu(n)?4:cg(n)?9007199254740991:Aa(n)?10:11:F(28295,{value:n})}function Nt(n,e){if(n===e)return!0;const t=yn(n);if(t!==yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ds(n).isEqual(ds(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qt(i.timestampValue),c=qt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return jt(i.bytesValue).isEqual(jt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return he(i.geoPointValue.latitude)===he(s.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return he(i.integerValue)===he(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=he(i.doubleValue),c=he(s.doubleValue);return o===c?cs(o)===cs(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Or(n.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Gd(o)!==Gd(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Nt(o[u],c[u])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function ps(n,e){return(n.values||[]).find(t=>Nt(t,e))!==void 0}function In(n,e){if(n===e)return 0;const t=yn(n),r=yn(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=he(s.integerValue||s.doubleValue),u=he(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Wd(n.timestampValue,e.timestampValue);case 4:return Wd(ds(n),ds(e));case 5:return Xc(n.stringValue,e.stringValue);case 6:return function(s,o){const c=jt(s),u=jt(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=z(c[h],u[h]);if(f!==0)return f}return z(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=z(he(s.latitude),he(o.latitude));return c!==0?c:z(he(s.longitude),he(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Qd(n.arrayValue,e.arrayValue);case 10:return function(s,o){var y,S,N,O;const c=s.fields||{},u=o.fields||{},h=(y=c[Br])==null?void 0:y.arrayValue,f=(S=u[Br])==null?void 0:S.arrayValue,m=z(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((O=f==null?void 0:f.values)==null?void 0:O.length)||0);return m!==0?m:Qd(h,f)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===hn.mapValue&&o===hn.mapValue)return 0;if(s===hn.mapValue)return 1;if(o===hn.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=Xc(u[m],f[m]);if(y!==0)return y;const S=In(c[u[m]],h[f[m]]);if(S!==0)return S}return z(u.length,f.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function Wd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=qt(n),r=qt(e),i=z(t.seconds,r.seconds);return i!==0?i:z(t.nanos,r.nanos)}function Qd(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=In(t[i],r[i]);if(s)return s}return z(t.length,r.length)}function $r(n){return iu(n)}function iu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=iu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${iu(t.fields[o])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function vo(n){switch(yn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=va(n);return e?16+vo(e):16;case 5:return 2*n.stringValue.length;case 6:return jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+vo(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Sn(r.fields,(s,o)=>{i+=s.length+vo(o)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function ms(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function su(n){return!!n&&"integerValue"in n}function gs(n){return!!n&&"arrayValue"in n}function Jd(n){return!!n&&"nullValue"in n}function Yd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ao(n){return!!n&&"mapValue"in n}function Aa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Qu])==null?void 0:r.stringValue)===Ju}function Ji(n){if(n.geoPointValue)return{geoPointValue:J({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:J({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ji(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ji(n.arrayValue.values[t]);return e}return J({},n)}function cg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ag}const ug={mapValue:{fields:{[Qu]:{stringValue:Ju},[Br]:{arrayValue:{}}}}};function rR(n){return"nullValue"in n?wo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ms(Xn.empty(),L.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Aa(n)?ug:{mapValue:{}}:F(35942,{value:n})}function iR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ms(Xn.empty(),L.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?ug:"mapValue"in n?Aa(n)?{mapValue:{}}:hn:F(61959,{value:n})}function Xd(n,e){const t=In(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Zd(n,e){const t=In(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ao(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Ji(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ao(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ao(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Sn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Be(Ji(this.value))}}function lg(n){const e=[];return Sn(n.fields,(t,r)=>{const i=new de([t]);if(Ao(r)){const s=lg(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new pe(e,0,q.min(),q.min(),q.min(),Be.empty(),0)}static newFoundDocument(e,t,r,i){return new pe(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new pe(e,2,t,q.min(),q.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new pe(e,3,t,q.min(),q.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qr{constructor(e,t){this.position=e,this.inclusive=t}}function ef(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=In(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _s{constructor(e,t="asc"){this.field=e,this.dir=t}}function sR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hg{}class te extends hg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new oR(e,t,r):t==="array-contains"?new uR(e,r):t==="in"?new _g(e,r):t==="not-in"?new lR(e,r):t==="array-contains-any"?new hR(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new aR(e,r):new cR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(In(t,this.value)):t!==null&&yn(this.value)===yn(t)&&this.matchesComparison(In(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends hg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new oe(e,t)}matches(e){return jr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function jr(n){return n.op==="and"}function ou(n){return n.op==="or"}function Yu(n){return dg(n)&&jr(n)}function dg(n){for(const e of n.filters)if(e instanceof oe)return!1;return!0}function au(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+$r(n.value);if(Yu(n))return n.filters.map(e=>au(e)).join(",");{const e=n.filters.map(t=>au(t)).join(",");return`${n.op}(${e})`}}function fg(n,e){return n instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)}(n,e):n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&fg(o,i.filters[c]),!0):!1}(n,e):void F(19439)}function pg(n,e){const t=n.filters.concat(e);return oe.create(t,n.op)}function mg(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${$r(t.value)}`}(n):n instanceof oe?function(t){return t.op.toString()+" {"+t.getFilters().map(mg).join(" ,")+"}"}(n):"Filter"}class oR extends te{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class aR extends te{constructor(e,t){super(e,"in",t),this.keys=gg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cR extends te{constructor(e,t){super(e,"not-in",t),this.keys=gg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function gg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class uR extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gs(t)&&ps(t.arrayValue,this.value)}}class _g extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class lR extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ps(this.value.arrayValue,t)}}class hR extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ps(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function cu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new dR(n,e,t,r,i,s,o)}function Zn(n){const e=U(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>au(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ia(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$r(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$r(r)).join(",")),e.Te=t}return e.Te}function Ns(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tf(n.startAt,e.startAt)&&tf(n.endAt,e.endAt)}function $o(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function qo(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function nf(n,e,t){let r=wo,i=!0;for(const s of qo(n,e)){let o=wo,c=!0;switch(s.op){case"<":case"<=":o=rR(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=wo}Xd({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Xd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function rf(n,e,t){let r=hn,i=!0;for(const s of qo(n,e)){let o=hn,c=!0;switch(s.op){case">=":case">":o=iR(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=hn}Zd({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Zd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function yg(n,e,t,r,i,s,o,c){return new ni(n,e,t,r,i,s,o,c)}function Ds(n){return new ni(n)}function sf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fR(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ig(n){return n.collectionGroup!==null}function Yi(n){const e=U(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ae(de.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new _s(s,r))}),t.has(de.keyField().canonicalString())||e.Ee.push(new _s(de.keyField(),r))}return e.Ee}function at(n){const e=U(n);return e.Ie||(e.Ie=pR(e,Yi(n))),e.Ie}function pR(n,e){if(n.limitType==="F")return cu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _s(i.field,s)});const t=n.endAt?new qr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qr(n.startAt.position,n.startAt.inclusive):null;return cu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uu(n,e){const t=n.filters.concat([e]);return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function mR(n,e){const t=n.explicitOrderBy.concat([e]);return new ni(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function jo(n,e,t){return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ra(n,e){return Ns(at(n),at(e))&&n.limitType===e.limitType}function Eg(n){return`${Zn(at(n))}|lt:${n.limitType}`}function Tr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>mg(i)).join(", ")}]`),Ia(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>$r(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>$r(i)).join(",")),`Target(${r})`}(at(n))}; limitType=${n.limitType})`}function Vs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Yi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const h=ef(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,Yi(r),i)||r.endAt&&!function(o,c,u){const h=ef(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,Yi(r),i))}(n,e)}function Tg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wg(n){return(e,t)=>{let r=!1;for(const i of Yi(n)){const s=gR(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gR(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?In(u,h):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Sn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return tg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new ue(L.comparator);function st(){return _R}const vg=new ue(L.comparator);function Li(...n){let e=vg;for(const t of n)e=e.insert(t.key,t);return e}function Ag(n){let e=vg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rt(){return Xi()}function Rg(){return Xi()}function Xi(){return new Gt(n=>n.toString(),(n,e)=>n.isEqual(e))}const yR=new ue(L.comparator),IR=new ae(L.comparator);function X(...n){let e=IR;for(const t of n)e=e.add(t);return e}const ER=new ae(z);function Xu(){return ER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cs(e)?"-0":e}}function Sg(n){return{integerValue:""+n}}function bg(n,e){return zm(e)?Sg(e):Zu(n,e)}/**
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
 */class Sa{constructor(){this._=void 0}}function TR(n,e,t){return n instanceof zr?function(i,s){const o={fields:{[ig]:{stringValue:rg},[og]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wu(s)&&(s=va(s)),s&&(o.fields[sg]=s),{mapValue:o}}(t,e):n instanceof er?Cg(n,e):n instanceof Kr?kg(n,e):function(i,s){const o=Pg(i,s),c=of(o)+of(i.Ae);return su(o)&&su(i.Ae)?Sg(c):Zu(i.serializer,c)}(n,e)}function wR(n,e,t){return n instanceof er?Cg(n,e):n instanceof Kr?kg(n,e):t}function Pg(n,e){return n instanceof Gr?function(r){return su(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zr extends Sa{}class er extends Sa{constructor(e){super(),this.elements=e}}function Cg(n,e){const t=Ng(e);for(const r of n.elements)t.some(i=>Nt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Kr extends Sa{constructor(e){super(),this.elements=e}}function kg(n,e){let t=Ng(e);for(const r of n.elements)t=t.filter(i=>!Nt(i,r));return{arrayValue:{values:t}}}class Gr extends Sa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function of(n){return he(n.integerValue||n.doubleValue)}function Ng(n){return gs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.field=e,this.transform=t}}function vR(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof er&&i instanceof er||r instanceof Kr&&i instanceof Kr?Or(r.elements,i.elements,Nt):r instanceof Gr&&i instanceof Gr?Nt(r.Ae,i.Ae):r instanceof zr&&i instanceof zr}(n.transform,e.transform)}class AR{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pa{}function Dg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ca(n.key,$e.none()):new ri(n.key,n.data,$e.none());{const t=n.data,r=Be.empty();let i=new ae(de.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ht(n.key,r,new Xe(i.toArray()),$e.none())}}function RR(n,e,t){n instanceof ri?function(i,s,o){const c=i.value.clone(),u=cf(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Ht?function(i,s,o){if(!Ro(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=cf(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Vg(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zi(n,e,t,r){return n instanceof ri?function(s,o,c,u){if(!Ro(s.precondition,o))return c;const h=s.value.clone(),f=uf(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ht?function(s,o,c,u){if(!Ro(s.precondition,o))return c;const h=uf(s.fieldTransforms,u,o),f=o.data;return f.setAll(Vg(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return Ro(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function SR(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Pg(r.transform,i||null);s!=null&&(t===null&&(t=Be.empty()),t.set(r.field,s))}return t||null}function af(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Or(r,i,(s,o)=>vR(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ri extends Pa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends Pa{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function cf(n,e,t){const r=new Map;$(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,wR(o,c,t[i]))}return r}function uf(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,TR(s,o,e))}return r}class Ca extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Og extends Pa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RR(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Rg();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=Dg(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Or(this.mutations,e.mutations,(t,r)=>af(t,r))&&Or(this.baseMutations,e.baseMutations,(t,r)=>af(t,r))}}class tl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){$(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return yR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tl(e,t,r,i)}}/**
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
 */class nl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ne;function PR(n){switch(n){case C.OK:return F(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function xg(n){if(n===void 0)return Ie("GRPC error has no .code"),C.UNKNOWN;switch(n){case Te.OK:return C.OK;case Te.CANCELLED:return C.CANCELLED;case Te.UNKNOWN:return C.UNKNOWN;case Te.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Te.INTERNAL:return C.INTERNAL;case Te.UNAVAILABLE:return C.UNAVAILABLE;case Te.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Te.NOT_FOUND:return C.NOT_FOUND;case Te.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Te.ABORTED:return C.ABORTED;case Te.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Te.DATA_LOSS:return C.DATA_LOSS;default:return F(39323,{code:n})}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CR(){return new TextEncoder}/**
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
 */const kR=new mn([4294967295,4294967295],0);function lf(n){const e=CR().encode(n),t=new Pm;return t.update(e),new Uint8Array(t.digest())}function hf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mn([t,r],0),new mn([i,s],0)]}class rl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fi(`Invalid padding: ${t}`);if(r<0)throw new Fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=mn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(mn.fromNumber(r)));return i.compare(kR)===1&&(i=new mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=lf(e),[r,i]=hf(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rl(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=lf(e),[r,i]=hf(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Os(q.min(),i,new ue(z),st(),X())}}class xs{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xs(r,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Mg{constructor(e,t){this.targetId=e,this.Ce=t}}class Lg{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class df{constructor(){this.ve=0,this.Fe=ff(),this.Me=Ee.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),r=X();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:F(38017,{changeType:s})}}),new xs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ff()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,$(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class NR{constructor(e){this.Ge=e,this.ze=new Map,this.je=st(),this.Je=io(),this.He=io(),this.Ze=new ue(z)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if($o(s))if(r===0){const o=new L(s.path);this.et(t,o,pe.newNoDocument(o,q.min()))}else $(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=jt(r).toUint8Array()}catch(u){if(u instanceof ng)return Yn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new rl(o,i,s)}catch(u){return Yn(u instanceof Fi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const c=this.ot(o);if(c){if(s.current&&$o(c.target)){const u=new L(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,pe.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=X();this.He.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Os(e,t,this.Ze,this.je,r);return this.je=st(),this.Je=io(),this.He=io(),this.Ze=new ue(z),i}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,t)?i.Ke(t,1):i.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new df,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ae(z),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ae(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new df),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function io(){return new ue(L.comparator)}function ff(){return new ue(L.comparator)}const DR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),OR=(()=>({and:"AND",or:"OR"}))();class xR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lu(n,e){return n.useProto3Json||Ia(e)?e:{value:e}}function Hr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function MR(n,e){return Hr(n,e.toTimestamp())}function We(n){return $(!!n,49232),q.fromTimestamp(function(t){const r=qt(t);return new se(r.seconds,r.nanos)}(n))}function il(n,e){return hu(n,e).canonicalString()}function hu(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ug(n){const e=ie.fromString(n);return $(Wg(e),10190,{key:e.toString()}),e}function zo(n,e){return il(n.databaseId,e.path)}function Kn(n,e){const t=Ug(e);if(t.get(1)!==n.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(qg(t))}function Bg(n,e){return il(n.databaseId,e)}function $g(n){const e=Ug(n);return e.length===4?ie.emptyPath():qg(e)}function du(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qg(n){return $(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pf(n,e,t){return{name:zo(n,e),fields:t.value.mapValue.fields}}function LR(n,e,t){const r=Kn(n,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):q.min(),o=new Be({mapValue:{fields:e.fields}}),c=pe.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function FR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?($(f===void 0||typeof f=="string",58123),Ee.fromBase64String(f||"")):($(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ee.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:xg(h.code);return new V(f,h.message||"")}(o);t=new Lg(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kn(n,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):q.min(),c=new Be({mapValue:{fields:r.document.fields}}),u=pe.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new So(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kn(n,r.document),s=r.readTime?We(r.readTime):q.min(),o=pe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new So([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kn(n,r.document),s=r.removedTargetIds||[];t=new So([],s,i,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bR(i,s),c=r.targetId;t=new Mg(c,o)}}return t}function Ko(n,e){let t;if(e instanceof ri)t={update:pf(n,e.key,e.value)};else if(e instanceof Ca)t={delete:zo(n,e.key)};else if(e instanceof Ht)t={update:pf(n,e.key,e.data),updateMask:zR(e.fieldMask)};else{if(!(e instanceof Og))return F(16599,{dt:e.type});t={verify:zo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof zr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof er)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Kr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Gr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw F(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F(27497)}(n,e.precondition)),t}function fu(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?$e.updateTime(We(s.updateTime)):s.exists!==void 0?$e.exists(s.exists):$e.none()}(e.currentDocument):$e.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)$(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new zr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new er(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new Kr(f)}else"increment"in c?u=new Gr(o,c.increment):F(16584,{proto:c});const h=de.fromServerFormat(c.fieldPath);return new ba(h,u)}(n,i)):[];if(e.update){e.update.name;const i=Kn(n,e.update.name),s=new Be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new Xe(h.map(f=>de.fromServerFormat(f)))}(e.updateMask);return new Ht(i,s,o,t,r)}return new ri(i,s,t,r)}if(e.delete){const i=Kn(n,e.delete);return new Ca(i,t)}if(e.verify){const i=Kn(n,e.verify);return new Og(i,t)}return F(1463,{proto:e})}function UR(n,e){return n&&n.length>0?($(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?We(i.updateTime):We(s);return o.isEqual(q.min())&&(o=We(s)),new AR(o,i.transformResults||[])}(t,e))):[]}function jg(n,e){return{documents:[Bg(n,e.path)]}}function zg(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Bg(n,i);const s=function(h){if(h.length!==0)return Hg(oe.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:wr(y.field),direction:$R(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=lu(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:i}}function Kg(n){let e=$g(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){$(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const y=Gg(m);return y instanceof oe&&Yu(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(y=>function(N){return new _s(vr(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(m){let y;return y=typeof m=="object"?m.value:m,Ia(y)?null:y}(t.limit));let u=null;t.startAt&&(u=function(m){const y=!!m.before,S=m.values||[];return new qr(S,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,S=m.values||[];return new qr(S,y)}(t.endAt)),yg(e,i,o,s,c,"F",u,h)}function BR(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=vr(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vr(t.unaryFilter.field);return te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vr(t.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return te.create(vr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return oe.create(t.compositeFilter.filters.map(r=>Gg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function $R(n){return DR[n]}function qR(n){return VR[n]}function jR(n){return OR[n]}function wr(n){return{fieldPath:n.canonicalString()}}function vr(n){return de.fromServerFormat(n.fieldPath)}function Hg(n){return n instanceof te?function(t){if(t.op==="=="){if(Yd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NAN"}};if(Jd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NAN"}};if(Jd(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(t.field),op:qR(t.op),value:t.value}}}(n):n instanceof oe?function(t){const r=t.getFilters().map(i=>Hg(i));return r.length===1?r[0]:{compositeFilter:{op:jR(t.op),filters:r}}}(n):F(54877,{filter:n})}function zR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Qg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,r,i,s=q.min(),o=q.min(),c=Ee.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.yt=e}}function KR(n,e){let t;if(e.document)t=LR(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=nr(e.noDocument.readTime);t=pe.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const r=L.fromSegments(e.unknownDocument.path),i=nr(e.unknownDocument.version);t=pe.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new se(i[0],i[1]);return q.fromTimestamp(s)}(e.readTime)),t}function mf(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Go(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:zo(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Hr(s,o.version.toTimestamp()),createTime:Hr(s,o.createTime.toTimestamp())}}(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:tr(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:tr(e.version)}}return r}function Go(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function tr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function nr(n){const e=new se(n.seconds,n.nanoseconds);return q.fromTimestamp(e)}function Fn(n,e){const t=(e.baseMutations||[]).map(s=>fu(n.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>fu(n.yt,s)),i=se.fromMillis(e.localWriteTimeMs);return new el(e.batchId,i,t,r)}function Ui(n){const e=nr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?nr(n.lastLimboFreeSnapshotVersion):q.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){const o=s.documents.length;return $(o===1,1966,{count:o}),at(Ds($g(s.documents[0])))}(n.query):function(s){return at(Kg(s))}(n.query),new Lt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ee.fromBase64String(n.resumeToken))}function Yg(n,e){const t=tr(e.snapshotVersion),r=tr(e.lastLimboFreeSnapshotVersion);let i;i=$o(e.target)?jg(n.yt,e.target):zg(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Xg(n){const e=Kg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jo(e,e.limit,"L"):e}function bc(n,e){return new nl(e.largestBatchId,fu(n.yt,e.overlayMutation))}function gf(n,e){const t=e.path.lastSegment();return[n,qe(e.path.popLast()),t]}function _f(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:tr(r.readTime),documentKey:qe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{getBundleMetadata(e,t){return yf(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:nr(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return yf(e).put(function(i){return{bundleId:i.id,createTime:tr(We(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return If(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Xg(s.bundledQuery),readTime:nr(s.readTime)}}(r)})}saveNamedQuery(e,t){return If(e).put(function(i){return{name:i.name,readTime:tr(We(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function yf(n){return ke(n,Ea)}function If(n){return ke(n,Ta)}/**
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
 */class ka{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new ka(e,r)}getOverlay(e,t){return Si(e).get(gf(this.userId,t)).next(r=>r?bc(this.serializer,r):null)}getOverlays(e,t){const r=Rt();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const c=new nl(t,o);i.push(this.St(e,c))}),A.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(qe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Si(e).X(nu,c))}),A.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Rt(),s=qe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Si(e).J(nu,o).next(c=>{for(const u of c){const h=bc(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Rt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Si(e).ee({index:Jm,range:c},(u,h,f)=>{const m=bc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}St(e,t){return Si(e).put(function(i,s,o){const[c,u,h]=gf(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ko(i.yt,o.mutation)}}(this.serializer,this.userId,t))}}function Si(n){return ke(n,wa)}/**
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
 */class HR{bt(e){return ke(e,Gu)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ee.fromUint8Array(r):Ee.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Un{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(he(e.integerValue));else if("doubleValue"in e){const r=he(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),cs(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=qt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(jt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?cg(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Aa(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):F(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const i=Br,s=((c=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(he(s)),this.Ot(i,t),this.Ct(r[i],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),L.fromName(e).path.forEach(r=>{this.Ft(t,60),this.$t(r,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Un.Wt=new Un;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=255;function WR(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Ef(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=WR(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class QR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Yt(e){const t=this.en(e),r=Ef(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=Ef(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(gr),this.sn(255)}_n(){this.an(gr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===gr?(this.sn(gr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===gr?(this.an(gr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class JR{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class YR{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class bi{constructor(){this.cn=new QR,this.ascending=new JR(this.cn),this.descending=new YR(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Bn{constructor(e,t,r,i){this.hn=e,this.Pn=t,this.Tn=r,this.En=i}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new Bn(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:bo(this.Tn),directionalValue:bo(this.En),orderedDocumentKey:bo(t),documentKey:r.path.toArray()}}An(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function rn(n,e){let t=n.hn-e.hn;return t!==0?t:(t=Tf(n.Tn,e.Tn),t!==0?t:(t=Tf(n.En,e.En),t!==0?t:L.comparator(n.Pn,e.Pn)))}function Tf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function bo(n){return Vp()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function wf(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}class vf{constructor(e){this.Vn=new ae((t,r)=>de.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if($(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=Zc(e);if(t!==void 0&&!this.pn(t))return!1;const r=xn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=r[s];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ae(de.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Io(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Io(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Io(r.field,r.dir==="asc"?0:1)));return new Lo(Lo.UNKNOWN_ID,this.collectionId,t,as.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Zg(n){var t,r;if($(n instanceof te||n instanceof oe,20012),n instanceof te){if(n instanceof _g){const i=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map(s=>te.create(n.field,"==",s)))||[];return oe.create(i,"or")}return n}const e=n.filters.map(i=>Zg(i));return oe.create(e,n.op)}function XR(n){if(n.getFilters().length===0)return[];const e=gu(Zg(n));return $(e_(e),7391),pu(e)||mu(e)?[e]:e.getFilters()}function pu(n){return n instanceof te}function mu(n){return n instanceof oe&&Yu(n)}function e_(n){return pu(n)||mu(n)||function(t){if(t instanceof oe&&ou(t)){for(const r of t.getFilters())if(!pu(r)&&!mu(r))return!1;return!0}return!1}(n)}function gu(n){if($(n instanceof te||n instanceof oe,34018),n instanceof te)return n;if(n.filters.length===1)return gu(n.filters[0]);const e=n.filters.map(r=>gu(r));let t=oe.create(e,n.op);return t=Ho(t),e_(t)?t:($(t instanceof oe,64498),$(jr(t),40251),$(t.filters.length>1,57927),t.filters.reduce((r,i)=>sl(r,i)))}function sl(n,e){let t;return $(n instanceof te||n instanceof oe,38388),$(e instanceof te||e instanceof oe,25473),t=n instanceof te?e instanceof te?function(i,s){return oe.create([i,s],"and")}(n,e):Af(n,e):e instanceof te?Af(e,n):function(i,s){if($(i.filters.length>0&&s.filters.length>0,48005),jr(i)&&jr(s))return pg(i,s.getFilters());const o=ou(i)?i:s,c=ou(i)?s:i,u=o.filters.map(h=>sl(h,c));return oe.create(u,"or")}(n,e),Ho(t)}function Af(n,e){if(jr(e))return pg(e,n.getFilters());{const t=e.filters.map(r=>sl(n,r));return oe.create(t,"or")}}function Ho(n){if($(n instanceof te||n instanceof oe,11850),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return Ho(e[0]);if(dg(n))return n;const t=e.map(i=>Ho(i)),r=[];return t.forEach(i=>{i instanceof te?r.push(i):i instanceof oe&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:oe.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.bn=new ol}addToCollectionParentIndex(e,t){return this.bn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(ut.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(ut.min())}updateCollectionGroup(e,t,r){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class ol{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ae(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ae(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="IndexedDbIndexManager",so=new Uint8Array(0);class eS{constructor(e,t){this.databaseId=t,this.Dn=new ol,this.Cn=new Gt(r=>Zn(r),(r,i)=>Ns(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Dn.add(t)});const s={collectionId:r,parent:qe(i)};return Sf(e).put(s)}return A.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Mm(t),""],!1,!0);return Sf(e).J(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(At(o.parent))}return r})}addFieldIndex(e,t){const r=Pi(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=yr(e);return s.next(c=>{o.put(_f(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Pi(e),i=yr(e),s=_r(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Pi(e),r=_r(e),i=yr(e);return t.X().next(()=>r.X()).next(()=>i.X())}createTargetIndexes(e,t){return A.forEach(this.vn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new vf(r).Sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=_r(e);let i=!0;const s=new Map;return A.forEach(this.vn(t),o=>this.Fn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=X();const c=[];return A.forEach(s,(u,h)=>{k(Rf,`Using index ${function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(u)} to execute ${Zn(t)}`);const f=function(B,H){const W=Zc(H);if(W===void 0)return null;for(const Y of qo(B,W.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(h,u),m=function(B,H){const W=new Map;for(const Y of xn(H))for(const T of qo(B,Y.fieldPath))switch(T.op){case"==":case"in":W.set(Y.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return W.set(Y.fieldPath.canonicalString(),T.value),Array.from(W.values())}return null}(h,u),y=function(B,H){const W=[];let Y=!0;for(const T of xn(H)){const _=T.kind===0?nf(B,T.fieldPath,B.startAt):rf(B,T.fieldPath,B.startAt);W.push(_.value),Y&&(Y=_.inclusive)}return new qr(W,Y)}(h,u),S=function(B,H){const W=[];let Y=!0;for(const T of xn(H)){const _=T.kind===0?rf(B,T.fieldPath,B.endAt):nf(B,T.fieldPath,B.endAt);W.push(_.value),Y&&(Y=_.inclusive)}return new qr(W,Y)}(h,u),N=this.Mn(u,h,y),O=this.Mn(u,h,S),D=this.xn(u,h,m),K=this.On(u.indexId,f,N,y.inclusive,O,S.inclusive,D);return A.forEach(K,j=>r.Z(j,t.limit).next(B=>{B.forEach(H=>{const W=L.fromSegments(H.documentKey);o.has(W)||(o=o.add(W),c.push(W))})}))}).next(()=>c)}return A.resolve(null)})}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=XR(oe.create(e.filters,"and")).map(r=>cu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}On(e,t,r,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const y=t?this.Nn(t[m/h]):so,S=this.Bn(e,y,r[m%h],i),N=this.Ln(e,y,s[m%h],o),O=c.map(D=>this.Bn(e,y,D,!0));f.push(...this.createRange(S,N,O))}return f}Bn(e,t,r,i){const s=new Bn(e,L.empty(),t,r);return i?s:s.In()}Ln(e,t,r,i){const s=new Bn(e,L.empty(),t,r);return i?s.In():s}Fn(e,t){const r=new vf(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const i=this.vn(t);return A.forEach(i,s=>this.Fn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new ae(de.comparator),f=!1;for(const m of u.filters)for(const y of m.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:h=h.add(y.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}kn(e,t){const r=new bi;for(const i of xn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);Un.Wt.Dt(s,o)}return r.un()}Nn(e){const t=new bi;return Un.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new bi;return Un.Wt.Dt(ms(this.databaseId,t),r.ln(function(s){const o=xn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,t,r){if(r===null)return[];let i=[];i.push(new bi);let s=0;for(const o of xn(e)){const c=r[s++];for(const u of i)if(this.Kn(t,o.fieldPath)&&gs(c))i=this.Un(i,o,c);else{const h=u.ln(o.kind);Un.Wt.Dt(c,h)}}return this.$n(i)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const u=new bi;u.seed(c.un()),Un.Wt.Dt(o,u.ln(t.kind)),s.push(u)}return s}Kn(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Pi(e),i=yr(e);return(t?r.J(tu,IDBKeyRange.bound(t,t)):r.J()).next(s=>{const o=[];return A.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){const y=m?new as(m.sequenceNumber,new ut(nr(m.readTime),new L(At(m.documentKey)),m.largestBatchId)):as.empty(),S=f.fields.map(([N,O])=>new Io(de.fromServerFormat(N),O));return new Lo(f.indexId,f.collectionGroup,S,y)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Pi(e),s=yr(e);return this.Wn(e).next(o=>i.J(tu,IDBKeyRange.bound(t,t)).next(c=>A.forEach(c,u=>s.put(_f(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return A.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),A.forEach(c,u=>this.Qn(e,i,u).next(h=>{const f=this.Gn(s,u);return h.isEqual(f)?A.resolve():this.zn(e,s,u,h,f)}))))})}jn(e,t,r,i){return _r(e).put(i.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,i){return _r(e).delete(i.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const i=_r(e);let s=new ae(rn);return i.ee({index:Qm,range:IDBKeyRange.only([r.indexId,this.uid,bo(this.qn(r,t))])},(o,c)=>{s=s.add(new Bn(r.indexId,t,wf(c.arrayValue),wf(c.directionalValue)))}).next(()=>s)}Gn(e,t){let r=new ae(rn);const i=this.kn(t,e);if(i==null)return r;const s=Zc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(gs(o))for(const c of o.arrayValue.values||[])r=r.add(new Bn(t.indexId,e.key,this.Nn(c),i))}else r=r.add(new Bn(t.indexId,e.key,so,i));return r}zn(e,t,r,i,s){k(Rf,"Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,m,y){const S=u.getIterator(),N=h.getIterator();let O=mr(S),D=mr(N);for(;O||D;){let K=!1,j=!1;if(O&&D){const B=f(O,D);B<0?j=!0:B>0&&(K=!0)}else O!=null?j=!0:K=!0;K?(m(D),D=mr(N)):j?(y(O),O=mr(S)):(O=mr(S),D=mr(N))}}(i,s,rn,c=>{o.push(this.jn(e,t,r,c))},c=>{o.push(this.Jn(e,t,r,c))}),A.waitFor(o)}Wn(e){let t=1;return yr(e).ee({index:Wm,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>rn(o,c)).filter((o,c,u)=>!c||rn(o,u[c-1])!==0);const i=[];i.push(e);for(const o of r){const c=rn(o,e),u=rn(o,t);if(c===0)i[0]=e.In();else if(c>0&&u<0)i.push(o),i.push(o.In());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Hn(i[o],i[o+1]))return[];const c=i[o].An(this.uid,so,L.empty()),u=i[o+1].An(this.uid,so,L.empty());s.push(IDBKeyRange.bound(c,u))}return s}Hn(e,t){return rn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(bf)}getMinOffset(e,t){return A.mapArray(this.vn(t),r=>this.Fn(e,r).next(i=>i||F(44426))).next(bf)}}function Sf(n){return ke(n,hs)}function _r(n){return ke(n,Qi)}function Pi(n){return ke(n,Ku)}function yr(n){return ke(n,Wi)}function bf(n){$(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;qu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ut(e.readTime,e.documentKey,t)}/**
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
 */const Pf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},t_=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n,e,t){const r=n.store(gt),i=n.store(Mr),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},(f,m,y)=>(c++,y.delete()));s.push(u.next(()=>{$(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const m=Km(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return A.waitFor(s).next(()=>h)}function Wo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw F(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(t_,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);class Na{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,t,r,i){$(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Na(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).ee({index:$n,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Ar(e),o=sn(e);return o.add({}).next(c=>{$(typeof c=="number",49019);const u=new el(c,t,r,i),h=function(S,N,O){const D=O.baseMutations.map(j=>Ko(S.yt,j)),K=O.mutations.map(j=>Ko(S.yt,j));return{userId:N,batchId:O.batchId,localWriteTimeMs:O.localWriteTime.toMillis(),baseMutations:D,mutations:K}}(this.serializer,this.userId,u),f=[];let m=new ae((y,S)=>z(y.canonicalString(),S.canonicalString()));for(const y of i){const S=Km(this.userId,y.key.path,c);m=m.add(y.key.path.popLast()),f.push(o.put(h)),f.push(s.put(S,kA))}return m.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),A.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return sn(e).get(t).next(r=>r?($(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Fn(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?A.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return sn(e).ee({index:$n,range:i},(o,c,u)=>{c.userId===this.userId&&($(c.batchId>=r,47524,{Yn:r}),s=Fn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=jn;return sn(e).ee({index:$n,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,jn],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).J($n,t).next(r=>r.map(i=>Fn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Eo(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Ar(e).ee({range:i},(o,c,u)=>{const[h,f,m]=o,y=At(f);if(h===this.userId&&t.path.isEqual(y))return sn(e).get(m).next(S=>{if(!S)throw F(61480,{er:o,batchId:m});$(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:m}),s.push(Fn(this.serializer,S))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(z);const i=[];return t.forEach(s=>{const o=Eo(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=Ar(e).ee({range:c},(h,f,m)=>{const[y,S,N]=h,O=At(S);y===this.userId&&s.path.isEqual(O)?r=r.add(N):m.done()});i.push(u)}),A.waitFor(i).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Eo(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new ae(z);return Ar(e).ee({range:o},(u,h,f)=>{const[m,y,S]=u,N=At(y);m===this.userId&&r.isPrefixOf(N)?N.length===i&&(c=c.add(S)):f.done()}).next(()=>this.tr(e,c))}tr(e,t){const r=[],i=[];return t.forEach(s=>{i.push(sn(e).get(s).next(o=>{if(o===null)throw F(35274,{batchId:s});$(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(Fn(this.serializer,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return n_(e.le,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.nr(t.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Ar(e).ee({range:r},(s,o,c)=>{if(s[0]===this.userId){const u=At(s[1]);i.push(u)}else c.done()}).next(()=>{$(i.length===0,56720,{rr:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return r_(e,this.userId,t)}ir(e){return i_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:jn,lastStreamToken:""})}}function r_(n,e,t){const r=Eo(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ar(n).ee({range:s,Y:!0},(c,u,h)=>{const[f,m,y]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function sn(n){return ke(n,gt)}function Ar(n){return ke(n,Mr)}function i_(n){return ke(n,us)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new rr(0)}static ar(){return new rr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next(t=>{const r=new rr(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(t=>q.fromTimestamp(new se(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.ur(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.cr(e,i)))}addTargetData(e,t){return this.lr(e,t).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ir(e).delete(t.targetId)).next(()=>this.ur(e)).next(r=>($(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Ir(e).ee((o,c)=>{const u=Ui(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Ir(e).ee((r,i)=>{const s=Ui(i);t(s)})}ur(e){return Cf(e).get(Bo).next(t=>($(t!==null,2888),t))}cr(e,t){return Cf(e).put(Bo,t)}lr(e,t){return Ir(e).put(Yg(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Zn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ir(e).ee({range:i,index:Hm},(o,c,u)=>{const h=Ui(c);Ns(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=cn(e);return t.forEach(o=>{const c=qe(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,t,r){const i=cn(e);return A.forEach(t,s=>{const o=qe(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=cn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=cn(e);let s=X();return i.ee({range:r,Y:!0},(o,c,u)=>{const h=At(o[1]),f=new L(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=qe(t.path),i=IDBKeyRange.bound([r],[Mm(r)],!1,!0);let s=0;return cn(e).ee({index:zu,Y:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}At(e,t){return Ir(e).get(t).next(r=>r?Ui(r):null)}}function Ir(n){return ke(n,Lr)}function Cf(n){return ke(n,zn)}function cn(n){return ke(n,Fr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="LruGarbageCollector",s_=1048576;function Nf([n,e],[t,r]){const i=z(n,t);return i===0?z(e,r):i}class nS{constructor(e){this.Pr=e,this.buffer=new ae(Nf),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class o_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){k(kf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>p(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rn(t)?k(kf,"Ignoring IndexedDB error during garbage collection: ",t):yield An(t)}yield this.Ar(3e5)}))}}class rS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return A.resolve(Ye.ce);const r=new nS(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Pf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pf):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Er()<=ee.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function a_(n,e){return new rS(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t){this.db=e,this.garbageCollector=a_(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,(r,i)=>t(i))}addReference(e,t,r){return oo(e,r)}removeReference(e,t,r){return oo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return oo(e,t)}wr(e,t){return function(i,s){let o=!1;return i_(i).te(c=>r_(i,c,s).next(u=>(u&&(o=!0),A.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,(o,c)=>{if(c<=t){const u=this.wr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),cn(e).delete(function(m){return[0,qe(m.path)]}(o))))});i.push(u)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return oo(e,t)}yr(e,t){const r=cn(e);let i,s=Ye.ce;return r.ee({index:zu},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Ye.ce&&t(new L(At(i)),s),s=h,i=u):s=Ye.ce}).next(()=>{s!==Ye.ce&&t(new L(At(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function oo(n,e){return cn(n).put(function(r,i){return{targetId:0,path:qe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.changes=new Gt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?A.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Vn(e).put(r)}removeEntry(e,t,r){return Vn(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Go(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Sr(e,r)))}getEntry(e,t){let r=pe.newInvalidDocument(t);return Vn(e).ee({index:To,range:IDBKeyRange.only(Ci(t))},(i,s)=>{r=this.br(t,s)}).next(()=>r)}Dr(e,t){let r={size:0,document:pe.newInvalidDocument(t)};return Vn(e).ee({index:To,range:IDBKeyRange.only(Ci(t))},(i,s)=>{r={document:this.br(t,s),size:Wo(s)}}).next(()=>r)}getEntries(e,t){let r=st();return this.Cr(e,t,(i,s)=>{const o=this.br(i,s);r=r.insert(i,o)}).next(()=>r)}vr(e,t){let r=st(),i=new ue(L.comparator);return this.Cr(e,t,(s,o)=>{const c=this.br(s,o);r=r.insert(s,c),i=i.insert(s,Wo(o))}).next(()=>({documents:r,Fr:i}))}Cr(e,t,r){if(t.isEmpty())return A.resolve();let i=new ae(Of);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Ci(i.first()),Ci(i.last())),o=i.getIterator();let c=o.getNext();return Vn(e).ee({index:To,range:s},(u,h,f)=>{const m=L.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Of(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.j(Ci(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Go(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vn(e).J(IDBKeyRange.bound(c,u,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=st();for(const m of h){const y=this.br(L.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);y.isFoundDocument()&&(Vs(t,y)||i.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=st();const o=Vf(t,r),c=Vf(t,ut.max());return Vn(e).ee({index:Gm,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const m=this.br(L.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new oS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Df(e).get(eu).next(t=>($(!!t,20021),t))}Sr(e,t){return Df(e).put(eu,t)}br(e,t){if(t){const r=KR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return pe.newInvalidDocument(e)}}function u_(n){return new sS(n)}class oS extends c_{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new Gt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new ae((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.Or.get(s);if(t.push(this.Mr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=mf(this.Mr.serializer,o);i=i.add(s.path.popLast());const h=Wo(u);r+=h-c.size,t.push(this.Mr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){const u=mf(this.Mr.serializer,o.convertToNoDocument(q.min()));t.push(this.Mr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Mr.updateMetadata(e,r)),A.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next(r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Mr.vr(e,t).next(({documents:r,Fr:i})=>(i.forEach((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Df(n){return ke(n,ls)}function Vn(n){return ke(n,Uo)}function Ci(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Vf(n,e){const t=e.documentKey.path.toArray();return[n,Go(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Of(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=z(t[s],r[s]),i)return i;return i=z(t.length,r.length),i||(i=z(t[t.length-2],r[r.length-2]),i||z(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zi(r.mutation,i,Xe.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const i=Rt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Li();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Rt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=st();const o=Xi(),c=function(){return Xi()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ht)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Zi(f.mutation,h,f.mutation.getFieldMask(),se.now())):o.set(h.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new aS(f,(m=o.get(h))!=null?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Xi();let i=new ue((o,c)=>o-c),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Xe.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(i.get(c.batchId)||X()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Rg();f.forEach(y=>{if(!s.has(y)){const S=Dg(t.get(y),r.get(y));S!==null&&m.set(y,S),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return fR(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ig(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):A.resolve(Rt());let c=xr,u=s;return o.next(h=>A.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,X())).next(f=>({batchId:c,changes:Ag(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=Li();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Li();return this.indexManager.getCollectionParents(e,s).next(c=>A.forEach(c,u=>{const h=function(m,y){return new ni(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,pe.newInvalidDocument(f)))});let c=Li();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Zi(f.mutation,h,Xe.empty(),se.now()),Vs(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return A.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:Xg(i.bundledQuery),readTime:We(i.readTime)}}(t)),A.resolve()}}/**
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
 */class uS{constructor(){this.overlays=new ue(L.comparator),this.Lr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rt();return A.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),A.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),A.resolve()}getOverlaysForCollection(e,t,r){const i=Rt(),s=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ue((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Rt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Rt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return A.resolve(c)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nl(t,r));let s=this.Lr.get(t);s===void 0&&(s=X(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}/**
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
 */class lS{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.kr=new ae(De.qr),this.Kr=new ae(De.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new De(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new De(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new L(new ie([])),r=new De(t,e),i=new De(t,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new L(new ie([])),r=new De(t,e),i=new De(t,e+1);let s=X();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new De(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return L.comparator(e.key,t.key)||z(e.Jr,t.Jr)}static Ur(e,t){return z(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ae(De.qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new el(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Hr=this.Hr.add(new De(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?jn:this.Yn-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new De(t,0),i=new De(t,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const c=this.Zr(o.Jr);s.push(c)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(z);return t.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],c=>{r=r.add(c.Jr)})}),A.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new De(new L(s),0);let c=new ae(z);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Jr)),!0)},o),A.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){$(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return A.forEach(t.mutations,i=>{const s=new De(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new De(t,0),i=this.Hr.firstAfterOrEqual(r);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.ti=e,this.docs=function(){return new ue(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return A.resolve(r?r.document.mutableCopy():pe.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pe.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=st();const o=t.path,c=new L(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||qu(Bm(f),r)<=0||(i.has(f.key)||Vs(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,t,r,i){F(9500)}ni(e,t){return A.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new fS(this)}getSize(e){return A.resolve(this.size)}}class fS extends c_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),A.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.persistence=e,this.ri=new Gt(t=>Zn(t),Ns),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new al,this.targetCount=0,this.oi=rr._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),A.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.lr(t),A.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return A.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),A.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return A.resolve(r)}containsKey(e,t){return A.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this._i={},this.overlays={},this.ai=new Ye(0),this.ui=!1,this.ui=!0,this.ci=new lS,this.referenceDelegate=e(this),this.li=new pS(this),this.indexManager=new ZR,this.remoteDocumentCache=function(i){return new dS(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Jg(t),this.Pi=new cS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new hS(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);const i=new mS(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,t){return A.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class mS extends qm{constructor(e){super(),this.currentSequenceNumber=e}}class Da{constructor(e){this.persistence=e,this.Ri=new al,this.Ai=null}static Vi(e){return new Da(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),A.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.di,r=>{const i=L.fromPath(r);return this.mi(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Qo{constructor(e,t){this.persistence=e,this.fi=new Gt(r=>qe(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=a_(this,t)}static Vi(e,t){return new Qo(e,t)}Ti(){}Ei(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return A.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?A.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,t).next(c=>{c||(r++,s.removeEntry(o,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vo(e.data.value)),t}wr(e,t,r){return A.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return A.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.serializer=e}k(e,t,r,i){const s=new ya("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore(ks)}(e),function(u){u.createObjectStore(us,{keyPath:CA}),u.createObjectStore(gt,{keyPath:zd,autoIncrement:!0}).createIndex($n,Kd,{unique:!0}),u.createObjectStore(Mr)}(e),xf(e),function(u){u.createObjectStore(Mn)}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(Fr),u.deleteObjectStore(Lr),u.deleteObjectStore(zn)}(e),xf(e)),o=o.next(()=>function(u){const h=u.store(zn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put(Bo,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store(gt).J().next(m=>{u.deleteObjectStore(gt),u.createObjectStore(gt,{keyPath:zd,autoIncrement:!0}).createIndex($n,Kd,{unique:!0});const y=h.store(gt),S=m.map(N=>y.put(N));return A.waitFor(S)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Ur,{keyPath:FA})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.gi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(ls)}(e),this.pi(s)))),r<7&&i>=7&&(o=o.next(()=>this.yi(s))),r<8&&i>=8&&(o=o.next(()=>this.wi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Si(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Ea,{keyPath:UA})})(e),function(u){u.createObjectStore(Ta,{keyPath:BA})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore(wa,{keyPath:HA});h.createIndex(nu,WA,{unique:!1}),h.createIndex(Jm,QA,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore(Uo,{keyPath:NA});h.createIndex(To,DA),h.createIndex(Gm,VA)}(e)).next(()=>this.bi(e,s)).next(()=>e.deleteObjectStore(Mn))),r<14&&i>=14&&(o=o.next(()=>this.Di(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(Ku,{keyPath:$A,autoIncrement:!0}).createIndex(tu,qA,{unique:!1}),u.createObjectStore(Wi,{keyPath:jA}).createIndex(Wm,zA,{unique:!1}),u.createObjectStore(Qi,{keyPath:KA}).createIndex(Qm,GA,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(Wi).clear()}).next(()=>{t.objectStore(Qi).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(Gu,{keyPath:JA})})(e)})),r<18&&i>=18&&Vp()&&(o=o.next(()=>{t.objectStore(Wi).clear()}).next(()=>{t.objectStore(Qi).clear()})),o}pi(e){let t=0;return e.store(Mn).ee((r,i)=>{t+=Wo(i)}).next(()=>{const r={byteSize:t};return e.store(ls).put(eu,r)})}gi(e){const t=e.store(us),r=e.store(gt);return t.J().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,jn],[s.userId,s.lastAcknowledgedBatchId]);return r.J($n,o).next(c=>A.forEach(c,u=>{$(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=Fn(this.serializer,u);return n_(e,s.userId,h).next(()=>{})}))}))}yi(e){const t=e.store(Fr),r=e.store(Mn);return e.store(zn).get(Bo).next(i=>{const s=[];return r.ee((o,c)=>{const u=new ie(o),h=function(m){return[0,qe(m)]}(u);s.push(t.get(h).next(f=>f?A.resolve():(m=>t.put({targetId:0,path:qe(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>A.waitFor(s))})}wi(e,t){e.createObjectStore(hs,{keyPath:LA});const r=t.store(hs),i=new ol,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:qe(u)})}};return t.store(Mn).ee({Y:!0},(o,c)=>{const u=new ie(o);return s(u.popLast())}).next(()=>t.store(Mr).ee({Y:!0},([o,c,u],h)=>{const f=At(c);return s(f.popLast())}))}Si(e){const t=e.store(Lr);return t.ee((r,i)=>{const s=Ui(i),o=Yg(this.serializer,s);return t.put(o)})}bi(e,t){const r=t.store(Mn),i=[];return r.ee((s,o)=>{const c=t.store(Uo),u=function(m){return m.document?new L(ie.fromString(m.document.name).popFirst(5)):m.noDocument?L.fromSegments(m.noDocument.path):m.unknownDocument?L.fromSegments(m.unknownDocument.path):F(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>A.waitFor(i))}Di(e,t){const r=t.store(gt),i=u_(this.serializer),s=new cl(Da.Vi,this.serializer.yt);return r.J().next(o=>{const c=new Map;return o.forEach(u=>{var f;let h=(f=c.get(u.userId))!=null?f:X();Fn(this.serializer,u).keys().forEach(m=>h=h.add(m)),c.set(u.userId,h)}),A.forEach(c,(u,h)=>{const f=new Ve(h),m=ka.wt(this.serializer,f),y=s.getIndexManager(f),S=Na.wt(f,this.serializer,y,s.referenceDelegate);return new l_(i,S,m,y).recalculateAndSaveOverlaysForDocumentKeys(new ru(t,Ye.ce),u).next()})})}}function xf(n){n.createObjectStore(Fr,{keyPath:xA}).createIndex(zu,MA,{unique:!0}),n.createObjectStore(Lr,{keyPath:"targetId"}).createIndex(Hm,OA,{unique:!0}),n.createObjectStore(zn)}const on="IndexedDbPersistence",Pc=18e5,Cc=5e3,kc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",_S="main";class ul{constructor(e,t,r,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=s,this.window=o,this.document=c,this.Fi=h,this.Mi=f,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=y=>Promise.resolve(),!ul.v())throw new V(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iS(this,i),this.qi=t+_S,this.serializer=new Jg(u),this.Ki=new gn(this.qi,this.xi,new gS(this.serializer)),this.ci=new HR,this.li=new tS(this.referenceDelegate,this.serializer),this.remoteDocumentCache=u_(this.serializer),this.Pi=new GR,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&Ie(on,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(C.FAILED_PRECONDITION,kc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new Ye(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}zi(e){return this.ki=t=>p(this,null,function*(){if(this.started)return e(t)}),e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K(t=>p(this,null,function*(){t.newVersion===null&&(yield e())}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(()=>p(this,null,function*(){this.started&&(yield this.$i())})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ao(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(e)).next(t=>this.isPrimary&&!t?this.Hi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(Rn(e))return k(on,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return k(on,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return ki(e).get(pr).next(t=>A.resolve(this.Xi(t)))}Yi(e){return ao(e).delete(this.clientId)}es(){return p(this,null,function*(){if(this.isPrimary&&!this.ts(this.Li,Pc)){this.Li=Date.now();const e=yield this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ke(t,Ur);return r.J().next(i=>{const s=this.ns(i,Pc),o=i.filter(c=>s.indexOf(c)===-1);return A.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}})}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?A.resolve(!0):ki(e).get(pr).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Cc)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new V(C.FAILED_PRECONDITION,kc);return!1}}return!(!this.networkEnabled||!this.inForeground)||ao(e).J().next(r=>this.ns(r,Cc).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&k(on,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}shutdown(){return p(this,null,function*(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),yield this.Ki.runTransaction("shutdown","readwrite",[ks,Ur],e=>{const t=new ru(e,Ye.ce);return this.Hi(t).next(()=>this.Yi(t))}),this.Ki.close(),this.ls()})}ns(e,t){return e.filter(r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>ao(e).J().next(t=>this.ns(t,Pc).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return Na.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new eS(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return ka.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){k(on,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===18?ZA:u===17?eg:u===16?XA:u===15?Hu:u===14?Zm:u===13?Xm:u===12?YA:u===11?Ym:void F(60245)}(this.xi);let o;return this.Ki.runTransaction(e,i,s,c=>(o=new ru(c,this.ai?this.ai.next():Ye.ce),t==="readwrite-primary"?this.ji(o).next(u=>!!u||this.Ji(o)).next(u=>{if(!u)throw Ie(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new V(C.FAILED_PRECONDITION,$m);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ps(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ps(e){return ki(e).get(pr).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Cc)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(C.FAILED_PRECONDITION,kc)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ki(e).put(pr,t)}static v(){return gn.v()}Hi(e){const t=ki(e);return t.get(pr).next(r=>this.Xi(r)?(k(on,"Releasing primary lease."),t.delete(pr)):A.resolve())}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ie(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;Dp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return k(on,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ie(on,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){Ie("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch(e){}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ki(n){return ke(n,ks)}function ao(n){return ke(n,Ur)}function h_(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=X(),i=X();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ll(e,t.fromCache,r,i)}}/**
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
 */class yS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Dp()?8:jm(be())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yS;return this.ys(e,t,o).next(c=>{if(s.result=c,this.As)return this.ws(e,t,o,c.size)})}).next(()=>s.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(Er()<=ee.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Er()<=ee.DEBUG&&k("QueryEngine","Query:",Tr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Er()<=ee.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,at(t))):A.resolve())}gs(e,t){if(sf(t))return A.resolve(null);let r=at(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=jo(t,null,"F"),r=at(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=X(...s);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(t,c);return this.bs(t,h,o,u.readTime)?this.gs(e,jo(t,null,"F")):this.Ds(e,h,t,u)}))})))}ps(e,t,r,i){return sf(t)||i.isEqual(q.min())?A.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(t,s);return this.bs(t,o,r,i)?A.resolve(null):(Er()<=ee.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tr(t)),this.Ds(e,o,t,Um(i,xr)).next(c=>c))})}Ss(e,t){let r=new ae(wg(e));return t.forEach((i,s)=>{Vs(e,s)&&(r=r.add(s))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return Er()<=ee.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Tr(t)),this.fs.getDocumentsMatchingQuery(e,t,ut.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="LocalStore",IS=3e8;class ES{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new ue(z),this.Fs=new Gt(s=>Zn(s),Ns),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function f_(n,e,t,r){return new ES(n,e,t,r)}function p_(n,e){return p(this,null,function*(){const t=U(n);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=X();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:c}))})})})}function TS(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,y=m.keys();let S=A.resolve();return y.forEach(N=>{S=S.next(()=>f.getEntry(u,N)).next(O=>{const D=h.docVersions.get(N);$(D!==null,48541),O.version.compareTo(D)<0&&(m.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function m_(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function wS(n,e){const t=U(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;c.push(t.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.li.addMatchingKeys(s,f.addedDocuments,m)));let S=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Ee.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(O,D,K){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=IS?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(y,S,f)&&c.push(t.li.updateTargetData(s,S))});let u=st(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(vS(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(q.min())){const f=t.li.getLastRemoteSnapshotVersion(s).next(m=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return A.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.vs=i,s))}function vS(n,e,t){let r=X(),i=X();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=st();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):k(hl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function AS(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=jn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Jo(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.li.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):t.li.allocateTargetId(r).next(o=>(i=new Lt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}function Wr(n,e,t){return p(this,null,function*(){const r=U(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Rn(o))throw o;k(hl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)})}function _u(n,e,t){const r=U(n);let i=q.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=U(u),y=m.Fs.get(f);return y!==void 0?A.resolve(m.vs.get(y)):m.li.getTargetData(h,f)}(r,o,at(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:q.min(),t?s:X())).next(c=>(y_(r,Tg(e),c),{documents:c,ks:s})))}function g_(n,e){const t=U(n),r=U(t.li),i=t.vs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.At(s,e).next(o=>o?o.target:null))}function __(n,e){const t=U(n),r=t.Ms.get(e)||q.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.xs.getAllFromCollectionGroup(i,e,Um(r,xr),Number.MAX_SAFE_INTEGER)).then(i=>(y_(t,e,i),i))}function y_(n,e,t){let r=n.Ms.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ms.set(e,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="firestore_clients";function Mf(n,e){return`${I_}_${n}_${e}`}const E_="firestore_mutations";function Lf(n,e,t){let r=`${E_}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const T_="firestore_targets";function Nc(n,e){return`${T_}_${n}_${e}`}/**
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
 */const vt="SharedClientState";class Yo{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static $s(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new V(i.error.code,i.error.message))),o?new Yo(e,t,i.state,s):(Ie(vt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class es{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static $s(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new V(r.error.code,r.error.message))),s?new es(e,r.state,i):(Ie(vt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Xu();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=zm(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Xo(e,s):(Ie(vt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class dl{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new dl(t.clientId,t.onlineState):(Ie(vt,`Failed to parse online state: ${e}`),null)}}class yu{constructor(){this.activeTargetIds=Xu()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dc{constructor(e,t,r,i,s){this.window=e,this.Ci=t,this.persistenceKey=r,this.zs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new ue(z),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=Mf(this.persistenceKey,this.zs),this.Ys=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new yu),this.eo=new RegExp(`^${I_}_${o}_([^_]*)$`),this.no=new RegExp(`^${E_}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${T_}_${o}_(\\d+)$`),this.io=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.so=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}start(){return p(this,null,function*(){const e=yield this.syncEngine.hs();for(const r of e){if(r===this.zs)continue;const i=this.getItem(Mf(this.persistenceKey,r));if(i){const s=Xo.$s(r,i);s&&(this.Hs=this.Hs.insert(s.clientId,s))}}this.oo();const t=this.storage.getItem(this.io);if(t){const r=this._o(t);r&&this.ao(r)}for(const r of this.Zs)this.Js(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0})}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(e){let t=!1;return this.Hs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,r){this.co(e,t,r),this.lo(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Nc(this.persistenceKey,e));if(i){const s=es.$s(e,i);s&&(r=s.state)}}return t&&this.ho.Qs(e),this.oo(),r}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Nc(this.persistenceKey,e))}updateQueryState(e,t,r){this.Po(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.lo(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return k(vt,"READ",e,t),t}setItem(e,t){k(vt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){k(vt,"REMOVE",e),this.storage.removeItem(e)}Js(e){const t=e;if(t.storageArea===this.storage){if(k(vt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void Ie("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable(()=>p(this,null,function*(){if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const r=this.Io(t.key);return this.Ro(r,null)}{const r=this.Ao(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.no.test(t.key)){if(t.newValue!==null){const r=this.Vo(t.key,t.newValue);if(r)return this.mo(r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(t.key===this.io){if(t.newValue!==null){const r=this._o(t.newValue);if(r)return this.ao(r)}}else if(t.key===this.Ys){const r=function(s){let o=Ye.ce;if(s!=null)try{const c=JSON.parse(s);$(typeof c=="number",30636,{yo:s}),o=c}catch(c){Ie(vt,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Ye.ce&&this.sequenceNumberHandler(r)}else if(t.key===this.so){const r=this.wo(t.newValue);yield Promise.all(r.map(i=>this.syncEngine.So(i)))}}}else this.Zs.push(t)}))}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,r){const i=new Yo(this.currentUser,e,t,r),s=Lf(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}lo(e){const t=Lf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,r){const i=Nc(this.persistenceKey,e),s=new es(e,t,r);this.setItem(i,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Io(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const r=this.Io(e);return Xo.$s(r,t)}Vo(e,t){const r=this.no.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Yo.$s(new Ve(s),i,t)}fo(e,t){const r=this.ro.exec(e),i=Number(r[1]);return es.$s(i,t)}_o(e){return dl.$s(e)}wo(e){return JSON.parse(e)}mo(e){return p(this,null,function*(){if(e.user.uid===this.currentUser.uid)return this.syncEngine.bo(e.batchId,e.state,e.error);k(vt,`Ignoring mutation for non-active user ${e.user.uid}`)})}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Hs.insert(e,t):this.Hs.remove(e),i=this.uo(this.Hs),s=this.uo(r),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.Co(o,c).then(()=>{this.Hs=r})}ao(e){this.Hs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=Xu();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class w_{constructor(){this.vo=new yu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new yu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="ConnectivityMonitor";class Uf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){k(Ff,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){k(Ff,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let co=null;function Iu(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="RestConnection",SS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class bS{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===fs?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=Iu(),c=this.Qo(e,t.toUriEncodedString());k(Vc,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(c),f=vn(h);return this.zo(e,c,u,r,f).then(m=>(k(Vc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Yn(Vc,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ti}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,t){const r=SS[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection",Ni=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Dr extends bS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Dr.c_){const e=Dm();Ni(e,Nm.STAT_EVENT,t=>{t.stat===Yc.PROXY?k(Fe,"STAT_EVENT: detected buffering proxy"):t.stat===Yc.NOPROXY&&k(Fe,"STAT_EVENT: detected no buffering proxy")}),Dr.c_=!0}}zo(e,t,r,i,s){const o=Iu();return new Promise((c,u)=>{const h=new Cm;h.setWithCredentials(!0),h.listenOnce(km.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case yo.NO_ERROR:const m=h.getResponseJson();k(Fe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case yo.TIMEOUT:k(Fe,`RPC '${e}' ${o} timed out`),u(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const y=h.getStatus();if(k(Fe,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const O=function(K){const j=K.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN}(N.status);u(new V(O,N.message))}else u(new V(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(C.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{k(Fe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);k(Fe,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}T_(e,t,r){const i=Iu(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");k(Fe,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);this.E_(f);let m=!1,y=!1;const S=new PS({Jo:N=>{y?k(Fe,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(k(Fe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),k(Fe,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},Ho:()=>f.close()});return Ni(f,Mi.EventType.OPEN,()=>{y||(k(Fe,`RPC '${e}' stream ${i} transport opened.`),S.i_())}),Ni(f,Mi.EventType.CLOSE,()=>{y||(y=!0,k(Fe,`RPC '${e}' stream ${i} transport closed`),S.o_(),this.I_(f))}),Ni(f,Mi.EventType.ERROR,N=>{y||(y=!0,Yn(Fe,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),S.o_(new V(C.UNAVAILABLE,"The operation could not be completed")))}),Ni(f,Mi.EventType.MESSAGE,N=>{var O;if(!y){const D=N.data[0];$(!!D,16349);const K=D,j=(K==null?void 0:K.error)||((O=K[0])==null?void 0:O.error);if(j){k(Fe,`RPC '${e}' stream ${i} received error:`,j);const B=j.status;let H=function(T){const _=Te[T];if(_!==void 0)return xg(_)}(B),W=j.message;B==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&Yn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),H===void 0&&(H=C.INTERNAL,W="Unknown error status: "+B+" with message "+j.message),y=!0,S.o_(new V(H,W)),f.close()}else k(Fe,`RPC '${e}' stream ${i} received:`,D),S.__(D)}}),Dr.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Vm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(n){return new Dr(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(){return typeof window!="undefined"?window:null}function Po(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){return new xR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr.c_=!1;class A_{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="PersistentStream";class R_{constructor(e,t,r,i,s,o,c,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new A_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return p(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}k_(){return p(this,null,function*(){if(this.O_())return this.close(0)})}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return p(this,null,function*(){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ie(t.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.t_(t)})}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(()=>p(this,null,function*(){this.state=0,this.start()}))}z_(e){return k(Bf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(k(Bf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kS extends R_{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=FR(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?We(o.readTime):q.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=du(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=$o(u)?{documents:jg(s,u)}:{query:zg(s,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Fg(s,o.resumeToken);const h=lu(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=Hr(s,o.snapshotVersion.toTimestamp());const h=lu(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=BR(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=du(this.serializer),t.removeTarget=e,this.q_(t)}}class NS extends R_{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return $(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){$(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=UR(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=du(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ko(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{}class VS extends DS{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,hu(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(C.UNKNOWN,s.toString())})}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,hu(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(C.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function OS(n,e,t,r){return new VS(n,e,t,r)}class xS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ie(t),this.aa=!1):k("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="RemoteStore";class MS{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(()=>p(this,null,function*(){lr(this)&&(k(ir,"Restarting streams for network reachability change."),yield function(u){return p(this,null,function*(){const h=U(u);h.Ia.add(4),yield Ms(h),h.Va.set("Unknown"),h.Ia.delete(4),yield Oa(h)})}(this))}))}),this.Va=new xS(r,i)}}function Oa(n){return p(this,null,function*(){if(lr(n))for(const e of n.Ra)yield e(!0)})}function Ms(n){return p(this,null,function*(){for(const e of n.Ra)yield e(!1)})}function xa(n,e){const t=U(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),ml(t)?pl(t):si(t).O_()&&fl(t,e))}function Qr(n,e){const t=U(n),r=si(t);t.Ea.delete(e),r.O_()&&S_(t,e),t.Ea.size===0&&(r.O_()?r.L_():lr(t)&&t.Va.set("Unknown"))}function fl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}si(n).Z_(e)}function S_(n,e){n.da.$e(e),si(n).X_(e)}function pl(n){n.da=new NR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),si(n).start(),n.Va.ua()}function ml(n){return lr(n)&&!si(n).x_()&&n.Ea.size>0}function lr(n){return U(n).Ia.size===0}function b_(n){n.da=void 0}function LS(n){return p(this,null,function*(){n.Va.set("Online")})}function FS(n){return p(this,null,function*(){n.Ea.forEach((e,t)=>{fl(n,e)})})}function US(n,e){return p(this,null,function*(){b_(n),ml(n)?(n.Va.ha(e),pl(n)):n.Va.set("Unknown")})}function BS(n,e,t){return p(this,null,function*(){if(n.Va.set("Online"),e instanceof Lg&&e.state===2&&e.cause)try{yield function(i,s){return p(this,null,function*(){const o=s.cause;for(const c of s.targetIds)i.Ea.has(c)&&(yield i.remoteSyncer.rejectListen(c,o),i.Ea.delete(c),i.da.removeTarget(c))})}(n,e)}catch(r){k(ir,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield Zo(n,r)}else if(e instanceof So?n.da.Xe(e):e instanceof Mg?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const r=yield m_(n.localStore);t.compareTo(r)>=0&&(yield function(s,o){const c=s.da.Tt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ea.get(h);f&&s.Ea.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=s.Ea.get(u);if(!f)return;s.Ea.set(u,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),S_(s,u);const m=new Lt(f.target,u,h,f.sequenceNumber);fl(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t))}catch(r){k(ir,"Failed to raise snapshot:",r),yield Zo(n,r)}})}function Zo(n,e,t){return p(this,null,function*(){if(!Rn(e))throw e;n.Ia.add(1),yield Ms(n),n.Va.set("Offline"),t||(t=()=>m_(n.localStore)),n.asyncQueue.enqueueRetryable(()=>p(this,null,function*(){k(ir,"Retrying IndexedDB access"),yield t(),n.Ia.delete(1),yield Oa(n)}))})}function P_(n,e){return e().catch(t=>Zo(n,t,e))}function ii(n){return p(this,null,function*(){const e=U(n),t=En(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jn;for(;$S(e);)try{const i=yield AS(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,qS(e,i)}catch(i){yield Zo(e,i)}C_(e)&&k_(e)})}function $S(n){return lr(n)&&n.Ta.length<10}function qS(n,e){n.Ta.push(e);const t=En(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function C_(n){return lr(n)&&!En(n).x_()&&n.Ta.length>0}function k_(n){En(n).start()}function jS(n){return p(this,null,function*(){En(n).ra()})}function zS(n){return p(this,null,function*(){const e=En(n);for(const t of n.Ta)e.ea(t.mutations)})}function KS(n,e,t){return p(this,null,function*(){const r=n.Ta.shift(),i=tl.from(r,e,t);yield P_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),yield ii(n)})}function GS(n,e){return p(this,null,function*(){e&&En(n).Y_&&(yield function(r,i){return p(this,null,function*(){if(function(o){return PR(o)&&o!==C.ABORTED}(i.code)){const s=r.Ta.shift();En(r).B_(),yield P_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield ii(r)}})}(n,e)),C_(n)&&k_(n)})}function $f(n,e){return p(this,null,function*(){const t=U(n);t.asyncQueue.verifyOperationInProgress(),k(ir,"RemoteStore received new credentials");const r=lr(t);t.Ia.add(3),yield Ms(t),r&&t.Va.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),yield Oa(t)})}function Eu(n,e){return p(this,null,function*(){const t=U(n);e?(t.Ia.delete(2),yield Oa(t)):e||(t.Ia.add(2),yield Ms(t),t.Va.set("Unknown"))})}function si(n){return n.ma||(n.ma=function(t,r,i){const s=U(t);return s.sa(),new kS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:LS.bind(null,n),Yo:FS.bind(null,n),t_:US.bind(null,n),H_:BS.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.ma.B_(),ml(n)?pl(n):n.Va.set("Unknown")):(yield n.ma.stop(),b_(n))}))),n.ma}function En(n){return n.fa||(n.fa=function(t,r,i){const s=U(t);return s.sa(),new NS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:jS.bind(null,n),t_:GS.bind(null,n),ta:zS.bind(null,n),na:KS.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.fa.B_(),yield ii(n)):(yield n.fa.stop(),n.Ta.length>0&&(k(ir,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new gl(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _l(n,e){if(Ie("AsyncQueue",`${e}: ${n}`),Rn(n))return new V(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{static emptySet(e){return new Vr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Li(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.ga=new ue(L.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Jr{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Jr(e,t,Vr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class WS{constructor(){this.queries=jf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=U(t),s=i.queries;i.queries=jf(),s.forEach((o,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new V(C.ABORTED,"Firestore shutting down"))}}function jf(){return new Gt(n=>Eg(n),Ra)}function yl(n,e){return p(this,null,function*(){const t=U(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new HS,r=e.Da()?0:1);try{switch(r){case 0:s.wa=yield t.onListen(i,!0);break;case 1:s.wa=yield t.onListen(i,!1);break;case 2:yield t.onFirstRemoteStoreListen(i)}}catch(o){const c=_l(o,`Initialization of query '${Tr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&El(t)})}function Il(n,e){return p(this,null,function*(){const t=U(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function QS(n,e){const t=U(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.Sa)c.Fa(i)&&(r=!0);o.wa=i}}r&&El(t)}function JS(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function El(n){n.Ca.forEach(e=>{e.next()})}var Tu,zf;(zf=Tu||(Tu={})).Ma="default",zf.Cache="cache";class Tl{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Tu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.key=e}}class D_{constructor(e){this.key=e}}class YS{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.eu=wg(e),this.tu=new Vr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new qf,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),S=Vs(this.query,m)?m:null,N=!!y&&this.mutatedKeys.has(y.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;y&&S?y.data.isEqual(S.data)?N!==O&&(r.track({type:3,doc:S}),D=!0):this.su(y,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.eu(S,u)>0||h&&this.eu(S,h)<0)&&(c=!0)):!y&&S?(r.track({type:0,doc:S}),D=!0):y&&!S&&(r.track({type:1,doc:y}),D=!0,(u||h)&&(c=!0)),D&&(S?(o=o.add(S),s=O?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:c,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(S,N){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:D})}};return O(S)-O(N)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i!=null?i:!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new Jr(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qf,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new D_(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new N_(r))}),t}cu(e){this.Za=e.ks,this.Ya=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Jr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const oi="SyncEngine";class XS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ZS{constructor(e){this.key=e,this.hu=!1}}class eb{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Gt(c=>Eg(c),Ra),this.Eu=new Map,this.Iu=new Set,this.Ru=new ue(L.comparator),this.Au=new Map,this.Vu=new al,this.du={},this.mu=new Map,this.fu=rr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function tb(n,e,t=!0){return p(this,null,function*(){const r=Ma(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=yield V_(r,e,t,!0),i})}function nb(n,e){return p(this,null,function*(){const t=Ma(n);yield V_(t,e,!0,!1)})}function V_(n,e,t,r){return p(this,null,function*(){const i=yield Jo(n.localStore,at(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=yield wl(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&xa(n.remoteStore,i),c})}function wl(n,e,t,r,i){return p(this,null,function*(){n.pu=(m,y,S)=>function(O,D,K,j){return p(this,null,function*(){let B=D.view.ru(K);B.bs&&(B=yield _u(O.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,B)));const H=j&&j.targetChanges.get(D.targetId),W=j&&j.targetMismatches.get(D.targetId)!=null,Y=D.view.applyChanges(B,O.isPrimaryClient,H,W);return wu(O,D.targetId,Y.au),Y.snapshot})}(n,m,y,S);const s=yield _u(n.localStore,e,!0),o=new YS(e,s.ks),c=o.ru(s.documents),u=xs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);wu(n,t,h.au);const f=new XS(e,t,o);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot})}function rb(n,e,t){return p(this,null,function*(){const r=U(n),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Ra(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||(yield Wr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Qr(r.remoteStore,i.targetId),Yr(r,i.targetId)}).catch(An))):(Yr(r,i.targetId),yield Wr(r.localStore,i.targetId,!0))})}function ib(n,e){return p(this,null,function*(){const t=U(n),r=t.Tu.get(e),i=t.Eu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qr(t.remoteStore,r.targetId))})}function sb(n,e,t){return p(this,null,function*(){const r=Sl(n);try{const i=yield function(o,c){const u=U(o),h=se.now(),f=c.reduce((S,N)=>S.add(N.key),X());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=st(),O=X();return u.xs.getEntries(S,f).next(D=>{N=D,N.forEach((K,j)=>{j.isValidDocument()||(O=O.add(K))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,N)).next(D=>{m=D;const K=[];for(const j of c){const B=SR(j,m.get(j.key).overlayedDocument);B!=null&&K.push(new Ht(j.key,B,lg(B.value.mapValue),$e.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,K,c)}).next(D=>{y=D;const K=D.applyToLocalDocumentSet(m,O);return u.documentOverlayCache.saveOverlays(S,D.batchId,K)})}).then(()=>({batchId:y.batchId,changes:Ag(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.du[o.currentUser.toKey()];h||(h=new ue(z)),h=h.insert(c,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,t),yield bn(r,i.changes),yield ii(r.remoteStore)}catch(i){const s=_l(i,"Failed to persist write");t.reject(s)}})}function O_(n,e){return p(this,null,function*(){const t=U(n);try{const r=yield wS(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?$(o.hu,14607):i.removedDocuments.size>0&&($(o.hu,42227),o.hu=!1))}),yield bn(t,r,e)}catch(r){yield An(r)}})}function Kf(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=U(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.Sa)y.va(c)&&(h=!0)}),h&&El(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function ob(n,e,t){return p(this,null,function*(){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ue(L.comparator);o=o.insert(s,pe.newNoDocument(s,q.min()));const c=X().add(s),u=new Os(q.min(),new Map,new ue(z),o,c);yield O_(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Rl(r)}else yield Wr(r.localStore,e,!1).then(()=>Yr(r,e,t)).catch(An)})}function ab(n,e){return p(this,null,function*(){const t=U(n),r=e.batch.batchId;try{const i=yield TS(t.localStore,e);Al(t,r,null),vl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield bn(t,i)}catch(i){yield An(i)}})}function cb(n,e,t){return p(this,null,function*(){const r=U(n);try{const i=yield function(o,c){const u=U(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>($(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Al(r,e,t),vl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield bn(r,i)}catch(i){yield An(i)}})}function vl(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Al(n,e,t){const r=U(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Yr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||x_(n,r)})}function x_(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Qr(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Rl(n))}function wu(n,e,t){for(const r of t)r instanceof N_?(n.Vu.addReference(r.key,e),ub(n,r)):r instanceof D_?(k(oi,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||x_(n,r.key)):F(19791,{wu:r})}function ub(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(k(oi,"New document in limbo: "+t),n.Iu.add(r),Rl(n))}function Rl(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(ie.fromString(e)),r=n.fu.next();n.Au.set(r,new ZS(t)),n.Ru=n.Ru.insert(t,r),xa(n.remoteStore,new Lt(at(Ds(t.path)),r,"TargetPurposeLimboResolution",Ye.ce))}}function bn(n,e,t){return p(this,null,function*(){const r=U(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{o.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=ll.Is(u.targetId,h);s.push(m)}}))}),yield Promise.all(o),r.Pu.H_(i),yield function(u,h){return p(this,null,function*(){const f=U(u);try{yield f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>A.forEach(h,y=>A.forEach(y.Ts,S=>f.persistence.referenceDelegate.addReference(m,y.targetId,S)).next(()=>A.forEach(y.Es,S=>f.persistence.referenceDelegate.removeReference(m,y.targetId,S)))))}catch(m){if(!Rn(m))throw m;k(hl,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const S=f.vs.get(y),N=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(N);f.vs=f.vs.insert(y,O)}}})}(r.localStore,s))})}function lb(n,e){return p(this,null,function*(){const t=U(n);if(!t.currentUser.isEqual(e)){k(oi,"User change. New user:",e.toKey());const r=yield p_(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(c=>{c.forEach(u=>{u.reject(new V(C.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield bn(t,r.Ns)}})}function hb(n,e){const t=U(n),r=t.Au.get(e);if(r&&r.hu)return X().add(r.key);{let i=X();const s=t.Eu.get(e);if(!s)return i;for(const o of s){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function db(n,e){return p(this,null,function*(){const t=U(n),r=yield _u(t.localStore,e.query,!0),i=e.view.cu(r);return t.isPrimaryClient&&wu(t,e.targetId,i.au),i})}function fb(n,e){return p(this,null,function*(){const t=U(n);return __(t.localStore,e).then(r=>bn(t,r))})}function pb(n,e,t,r){return p(this,null,function*(){const i=U(n),s=yield function(c,u){const h=U(c),f=U(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,u).next(y=>y?h.localDocuments.getDocuments(m,y):A.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?yield ii(i.remoteStore):t==="acknowledged"||t==="rejected"?(Al(i,e,r||null),vl(i,e),function(c,u){U(U(c).mutationQueue).nr(u)}(i.localStore,e)):F(6720,"Unknown batchState",{Su:t}),yield bn(i,s)):k(oi,"Cannot apply mutation batch with id: "+e)})}function mb(n,e){return p(this,null,function*(){const t=U(n);if(Ma(t),Sl(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=yield Gf(t,r.toArray());t.gu=!0,yield Eu(t.remoteStore,!0);for(const s of i)xa(t.remoteStore,s)}else if(e===!1&&t.gu!==!1){const r=[];let i=Promise.resolve();t.Eu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Yr(t,o),Wr(t.localStore,o,!0))),Qr(t.remoteStore,o)}),yield i,yield Gf(t,r),function(o){const c=U(o);c.Au.forEach((u,h)=>{Qr(c.remoteStore,h)}),c.Vu.zr(),c.Au=new Map,c.Ru=new ue(L.comparator)}(t),t.gu=!1,yield Eu(t.remoteStore,!1)}})}function Gf(n,e,t){return p(this,null,function*(){const r=U(n),i=[],s=[];for(const o of e){let c;const u=r.Eu.get(o);if(u&&u.length!==0){c=yield Jo(r.localStore,at(u[0]));for(const h of u){const f=r.Tu.get(h),m=yield db(r,f);m.snapshot&&s.push(m.snapshot)}}else{const h=yield g_(r.localStore,o);c=yield Jo(r.localStore,h),yield wl(r,M_(h),o,!1,c.resumeToken)}i.push(c)}return r.Pu.H_(s),i})}function M_(n){return yg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function gb(n){return function(t){return U(U(t).persistence).hs()}(U(n).localStore)}function _b(n,e,t,r){return p(this,null,function*(){const i=U(n);if(i.gu)return void k(oi,"Ignoring unexpected query state notification.");const s=i.Eu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=yield __(i.localStore,Tg(s[0])),c=Os.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ee.EMPTY_BYTE_STRING);yield bn(i,o,c);break}case"rejected":yield Wr(i.localStore,e,!0),Yr(i,e,r);break;default:F(64155,t)}})}function yb(n,e,t){return p(this,null,function*(){const r=Ma(n);if(r.gu){for(const i of e){if(r.Eu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){k(oi,"Adding an already active target "+i);continue}const s=yield g_(r.localStore,i),o=yield Jo(r.localStore,s);yield wl(r,M_(s),o.targetId,!1,o.resumeToken),xa(r.remoteStore,o)}for(const i of t)r.Eu.has(i)&&(yield Wr(r.localStore,i,!1).then(()=>{Qr(r.remoteStore,i),Yr(r,i)}).catch(An))}})}function Ma(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=O_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ob.bind(null,e),e.Pu.H_=QS.bind(null,e.eventManager),e.Pu.yu=JS.bind(null,e.eventManager),e}function Sl(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cb.bind(null,e),e}class ys{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){this.serializer=Va(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)})}Fu(e,t){return null}Mu(e,t){return null}vu(e){return f_(this.persistence,new d_,e.initialUser,this.serializer)}Cu(e){return new cl(Da.Vi,this.serializer)}Du(e){return new w_}terminate(){return p(this,null,function*(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}ys.provider={build:()=>new ys};class Ib extends ys{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){$(this.persistence.referenceDelegate instanceof Qo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new o_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new cl(r=>Qo.Vi(r,t),this.serializer)}}class La extends ys{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){yield Vt(La.prototype,this,"initialize").call(this,e),yield this.xu.initialize(this,e),yield Sl(this.xu.syncEngine),yield ii(this.xu.remoteStore),yield this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))})}vu(e){return f_(this.persistence,new d_,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new o_(r,e.asyncQueue,t)}Mu(e,t){const r=new bA(t,this.persistence);return new SA(e.asyncQueue,r)}Cu(e){const t=h_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new ul(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,v_(),Po(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new w_}}class bl extends La{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}initialize(e){return p(this,null,function*(){yield Vt(bl.prototype,this,"initialize").call(this,e);const t=this.xu.syncEngine;this.sharedClientState instanceof Dc&&(this.sharedClientState.syncEngine={bo:pb.bind(null,t),Do:_b.bind(null,t),Co:yb.bind(null,t),hs:gb.bind(null,t),So:fb.bind(null,t)},yield this.sharedClientState.start()),yield this.persistence.zi(r=>p(this,null,function*(){yield mb(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))})}Du(e){const t=v_();if(!Dc.v(t))throw new V(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=h_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Dc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Is{initialize(e,t){return p(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lb.bind(null,this.syncEngine),yield Eu(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new WS}()}createDatastore(e){const t=Va(e.databaseInfo.databaseId),r=CS(e.databaseInfo);return OS(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new MS(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Kf(this.syncEngine,t,0),function(){return Uf.v()?new Uf:new RS}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){const m=new eb(i,s,o,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return p(this,null,function*(){var e,t;yield function(i){return p(this,null,function*(){const s=U(i);k(ir,"RemoteStore shutting down."),s.Ia.add(5),yield Ms(s),s.Aa.shutdown(),s.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()})}}Is.provider={build:()=>new Is};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ie("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="FirestoreClient";class Eb{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=$u.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,o=>p(this,null,function*(){k(Tn,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,o=>(k(Tn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>p(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_l(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function Oc(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),k(Tn,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(i=>p(this,null,function*(){r.isEqual(i)||(yield p_(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e})}function Hf(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield Tb(n);k(Tn,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>$f(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>$f(e.remoteStore,i)),n._onlineComponents=e})}function Tb(n){return p(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(Tn,"Using user provided OfflineComponentProvider");try{yield Oc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Yn("Error using user provided cache. Falling back to memory cache: "+t),yield Oc(n,new ys)}}else k(Tn,"Using default OfflineComponentProvider"),yield Oc(n,new Ib(void 0));return n._offlineComponents})}function L_(n){return p(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(Tn,"Using user provided OnlineComponentProvider"),yield Hf(n,n._uninitializedComponentsProvider._online)):(k(Tn,"Using default OnlineComponentProvider"),yield Hf(n,new Is))),n._onlineComponents})}function wb(n){return L_(n).then(e=>e.syncEngine)}function ea(n){return p(this,null,function*(){const e=yield L_(n),t=e.eventManager;return t.onListen=tb.bind(null,e.syncEngine),t.onUnlisten=rb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ib.bind(null,e.syncEngine),t})}function vb(n,e,t,r){const i=new Pl(r),s=new Tl(e,i,t);return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return yl(yield ea(n),s)})),()=>{i.Nu(),n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return Il(yield ea(n),s)}))}}function Ab(n,e,t={}){const r=new bt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,c,u,h){const f=new Pl({next:y=>{f.Nu(),o.enqueueAndForget(()=>Il(s,m));const S=y.docs.has(c);!S&&y.fromCache?h.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&u&&u.source==="server"?h.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Tl(Ds(c.path),f,{includeMetadataChanges:!0,qa:!0});return yl(s,m)}(yield ea(n),n.asyncQueue,e,t,r)})),r.promise}function Rb(n,e,t={}){const r=new bt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,c,u,h){const f=new Pl({next:y=>{f.Nu(),o.enqueueAndForget(()=>Il(s,m)),y.fromCache&&u.source==="server"?h.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Tl(c,f,{includeMetadataChanges:!0,qa:!0});return yl(s,m)}(yield ea(n),n.asyncQueue,e,t,r)})),r.promise}function Sb(n,e){const t=new bt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return sb(yield wb(n),e,t)})),t.promise}/**
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
 */function F_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="ComponentProvider",Wf=new Map;function Pb(n,e,t,r,i){return new tR(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,F_(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="firestore.googleapis.com",Qf=!0;class Jf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=U_,this.ssl=Qf}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:Qf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=t_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<s_)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=F_((r=e.experimentalLongPollingOptions)!=null?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dA;switch(r.type){case"firstParty":return new gA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return p(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wf.get(t);r&&(k(bb,"Removing Datastore"),Wf.delete(t),r.terminate())}(this),Promise.resolve()}}function Cb(n,e,t,r={}){var h;n=tt(n,Fa);const i=vn(e),s=n._getSettings(),o=xe(J({},s),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&sa(`https://${c}`),s.host!==U_&&s.host!==c&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=xe(J({},s),{host:c,ssl:i,emulatorOptions:r});if(!Ft(u,o)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ve.MOCK_USER;else{f=kp(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ve(y)}n._authCredentials=new fA(new xm(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wt(this.firestore,e,this._query)}}class me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Cs(t,me._jsonSchema))return new me(e,r||null,new L(ie.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:Ae("string",me._jsonSchemaVersion),referencePath:Ae("string")};class _n extends Wt{constructor(e,t,r){super(e,t,Ds(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new L(e))}withConverter(e){return new _n(this.firestore,e,this._path)}}function yk(n,e,...t){if(n=G(n),Lm("collection","path",e),n instanceof Fa){const r=ie.fromString(e,...t);return Ud(r),new _n(n,null,r)}{if(!(n instanceof me||n instanceof _n))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Ud(r),new _n(n.firestore,null,r)}}function kb(n,e,...t){if(n=G(n),arguments.length===1&&(e=$u.newId()),Lm("doc","path",e),n instanceof Fa){const r=ie.fromString(e,...t);return Fd(r),new me(n,null,new L(r))}{if(!(n instanceof me||n instanceof _n))throw new V(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Fd(r),new me(n.firestore,n instanceof _n?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="AsyncQueue";class Xf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new A_(this,"async_queue_retry"),this._c=()=>{const r=Po();r&&k(Yf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Po();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Po();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new bt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}lc(){return p(this,null,function*(){if(this.Yu.length!==0){try{yield this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Rn(e))throw e;k(Yf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}})}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ie("INTERNAL UNHANDLED ERROR: ",Zf(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=gl.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:Zf(this.nc)})}verifyOperationInProgress(){}Tc(){return p(this,null,function*(){let e;do e=this.ac,yield e;while(e!==this.ac)})}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Zf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class zt extends Fa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Xf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return p(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xf(e),this._firestoreClient=void 0,yield e}})}}function Ik(n,e,t){t||(t=fs);const r=Dt(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Ft(s,e))return i;throw new V(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<s_)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&vn(e.host)&&sa(e.host),r.initialize({options:e,instanceIdentifier:t})}function Ek(n,e){const t=typeof n=="object"?n:As(),r=typeof n=="string"?n:e||fs,i=Dt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bp("firestore");s&&Cb(i,...s)}return i}function Ua(n){if(n._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Nb(n),n._firestoreClient}function Nb(n){var r,i,s,o;const e=n._freezeSettings(),t=Pb(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Eb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pt(Ee.fromBase64String(e))}catch(t){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pt(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Cs(e,pt._jsonSchema))return pt.fromBase64String(e.bytes)}}pt._jsonSchemaVersion="firestore/bytes/1.0",pt._jsonSchema={type:Ae("string",pt._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pt._jsonSchemaVersion}}static fromJSON(e){if(Cs(e,Pt._jsonSchema))return new Pt(e.latitude,e.longitude)}}Pt._jsonSchemaVersion="firestore/geoPoint/1.0",Pt._jsonSchema={type:Ae("string",Pt._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Cs(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yt(e.vectorValues);throw new V(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:Ae("string",yt._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=/^__.*__$/;class Vb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}class B_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class Ba{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ba(J(J({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ta(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if($_(this.dataSource)&&Db.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Ob{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Va(e)}A(e,t,r,i=!1){return new Ba({dataSource:e,methodName:t,targetDoc:r,path:de.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $a(n){const e=n._freezeSettings(),t=Va(n._databaseId);return new Ob(n._databaseId,!!e.ignoreUndefinedProperties,t)}function q_(n,e,t,r,i,s={}){const o=n.A(s.merge||s.mergeFields?2:0,e,t,i);Vl("Data must be an object, but it was:",o,r);const c=j_(r,o);let u,h;if(s.merge)u=new Xe(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=sr(e,m,t);if(!o.contains(y))throw new V(C.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);G_(f,y)||f.push(y)}u=new Xe(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new Vb(new Be(c),u,h)}class qa extends ai{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qa}}function xb(n,e,t){return new Ba({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class kl extends ai{_toFieldTransform(e){return new ba(e.path,new zr)}isEqual(e){return e instanceof kl}}class Nl extends ai{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=xb(this,e,!0),r=this.Sc.map(s=>ci(s,t)),i=new er(r);return new ba(e.path,i)}isEqual(e){return e instanceof Nl&&Ft(this.Sc,e.Sc)}}class Dl extends ai{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new Gr(e.serializer,bg(e.serializer,this.bc));return new ba(e.path,t)}isEqual(e){return e instanceof Dl&&this.bc===e.bc}}function Mb(n,e,t,r){const i=n.A(1,e,t);Vl("Data must be an object, but it was:",i,r);const s=[],o=Be.empty();Sn(r,(u,h)=>{const f=K_(e,u,t);h=G(h);const m=i.fc(f);if(h instanceof qa)s.push(f);else{const y=ci(h,m);y!=null&&(s.push(f),o.set(f,y))}});const c=new Xe(s);return new B_(o,c,i.fieldTransforms)}function Lb(n,e,t,r,i,s){const o=n.A(1,e,t),c=[sr(e,r,t)],u=[i];if(s.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)c.push(sr(e,s[y])),u.push(s[y+1]);const h=[],f=Be.empty();for(let y=c.length-1;y>=0;--y)if(!G_(h,c[y])){const S=c[y];let N=u[y];N=G(N);const O=o.fc(S);if(N instanceof qa)h.push(S);else{const D=ci(N,O);D!=null&&(h.push(S),f.set(S,D))}}const m=new Xe(h);return new B_(f,m,o.fieldTransforms)}function Fb(n,e,t,r=!1){return ci(t,n.A(r?4:3,e))}function ci(n,e){if(z_(n=G(n)))return Vl("Unsupported field value:",e,n),j_(n,e);if(n instanceof ai)return function(r,i){if(!$_(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=ci(c,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=G(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=se.fromDate(r);return{timestampValue:Hr(i.serializer,s)}}if(r instanceof se){const s=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hr(i.serializer,s)}}if(r instanceof Pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pt)return{bytesValue:Fg(i.serializer,r._byteString)};if(r instanceof me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:il(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yt)return function(o,c){const u=o instanceof yt?o.toArray():o;return{mapValue:{fields:{[Qu]:{stringValue:Ju},[Br]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return Zu(c.serializer,f)})}}}}}}(r,i);if(Qg(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${_a(r)}`)}(n,e)}function j_(n,e){const t={};return tg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sn(n,(r,i)=>{const s=ci(i,e.dc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function z_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Pt||n instanceof pt||n instanceof me||n instanceof ai||n instanceof yt||Qg(n))}function Vl(n,e,t){if(!z_(t)||!Fm(t)){const r=_a(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function sr(n,e,t){if((e=G(e))instanceof Cl)return e._internalPath;if(typeof e=="string")return K_(n,e);throw ta("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ub=new RegExp("[~\\*/\\[\\]]");function K_(n,e,t){if(e.search(Ub)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cl(...e.split("."))._internalPath}catch(r){throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ta(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new V(C.INVALID_ARGUMENT,c+n+u)}function G_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{convertValue(e,t="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Sn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[Br].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>he(o.doubleValue));return new yt(t)}convertGeoPoint(e){return new Pt(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=va(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=qt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);$(Wg(r),9688,{name:e});const i=new Xn(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||Ie(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class Ol extends Bb{constructor(e){super(),this.firestore=e}convertBytes(e){return new pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function Tk(){return new kl("serverTimestamp")}function wk(...n){return new Nl("arrayUnion",n)}function vk(n){return new Dl("increment",n)}const ep="@firebase/firestore",tp="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $b(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e,t;return(t=(e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)!=null?t:void 0}get(e){if(this._document){const t=this._document.data.field(sr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $b extends H_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xl{}class Ml extends xl{}function Ak(n,e,...t){let r=[];e instanceof xl&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Ll).length,c=s.filter(u=>u instanceof ja).length;if(o>1||o>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ja extends Ml{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ja(e,t,r)}_apply(e){const t=this._parse(e);return Q_(e._query,t),new Wt(e.firestore,e.converter,uu(e._query,t))}_parse(e){const t=$a(e.firestore);return function(s,o,c,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ip(m,f);const N=[];for(const O of m)N.push(rp(u,s,O));y={arrayValue:{values:N}}}else y=rp(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ip(m,f),y=Fb(c,o,m,f==="in"||f==="not-in");return te.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rk(n,e,t){const r=e,i=sr("where",n);return ja._create(i,r,t)}class Ll extends xl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ll(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)Q_(o,u),o=uu(o,u)}(e._query,t),new Wt(e.firestore,e.converter,uu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fl extends Ml{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _s(s,o)}(e._query,this._field,this._direction);return new Wt(e.firestore,e.converter,mR(e._query,t))}}function Sk(n,e="asc"){const t=e,r=sr("orderBy",n);return Fl._create(r,t)}class Ul extends Ml{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ul(e,t,r)}_apply(e){return new Wt(e.firestore,e.converter,jo(e._query,this._limit,this._limitType))}}function bk(n){return vA("limit",n),Ul._create("limit",n,"F")}function rp(n,e,t){if(typeof(t=G(t))=="string"){if(t==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ig(e)&&t.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!L.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ms(n,new L(r))}if(t instanceof me)return ms(n,t._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_a(t)}.`)}function ip(n,e){if(!Array.isArray(n)||n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Q_(n,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function J_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class qb{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Kb(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Pk(n){return new qb(n)}class jb{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Is.provider,this._offlineComponentProvider={build:t=>new La(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class zb{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Is.provider,this._offlineComponentProvider={build:t=>new bl(t,e==null?void 0:e.cacheSizeBytes)}}}function Kb(n){return new jb(n==null?void 0:n.forceOwnership)}function Ck(){return new zb}class Bi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gn extends H_{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(sr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Gn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gn._jsonSchema={type:Ae("string",Gn._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Co extends Gn{data(e={}){return super.data(e)}}class Hn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Bi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Co(this._firestore,this._userDataWriter,r.key,r,new Bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new Co(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Co(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Gb(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$u.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Gb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */Hn._jsonSchemaVersion="firestore/querySnapshot/1.0",Hn._jsonSchema={type:Ae("string",Hn._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(n){n=tt(n,me);const e=tt(n.firestore,zt),t=Ua(e);return Ab(t,n._key).then(r=>Y_(e,n,r))}function Nk(n){n=tt(n,Wt);const e=tt(n.firestore,zt),t=Ua(e),r=new Ol(e);return W_(n._query),Rb(t,n._query).then(i=>new Hn(e,r,n,i))}function Dk(n,e,t){n=tt(n,me);const r=tt(n.firestore,zt),i=J_(n.converter,e,t),s=$a(r);return za(r,[q_(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,$e.none())])}function Vk(n,e,t,...r){n=tt(n,me);const i=tt(n.firestore,zt),s=$a(i);let o;return o=typeof(e=G(e))=="string"||e instanceof Cl?Lb(s,"updateDoc",n._key,e,t,r):Mb(s,"updateDoc",n._key,e),za(i,[o.toMutation(n._key,$e.exists(!0))])}function Ok(n){return za(tt(n.firestore,zt),[new Ca(n._key,$e.none())])}function xk(n,e){const t=tt(n.firestore,zt),r=kb(n),i=J_(n.converter,e),s=$a(n.firestore);return za(t,[q_(s,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,$e.exists(!1))]).then(()=>r)}function Mk(n,...e){var h,f,m;n=G(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||np(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(np(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(m=y.complete)==null?void 0:m.bind(y)}let s,o,c;if(n instanceof me)o=tt(n.firestore,zt),c=Ds(n._key.path),s={next:y=>{e[r]&&e[r](Y_(o,n,y))},error:e[r+1],complete:e[r+2]};else{const y=tt(n,Wt);o=tt(y.firestore,zt),c=y._query;const S=new Ol(o);s={next:N=>{e[r]&&e[r](new Hn(o,S,y,N))},error:e[r+1],complete:e[r+2]},W_(n._query)}const u=Ua(o);return vb(u,c,i,s)}function za(n,e){const t=Ua(n);return Sb(t,e)}function Y_(n,e,t){const r=t.docs.get(e._key),i=new Ol(n);return new Gn(n,i,e._key,r,new Bi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){hA(ur),ct(new nt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new zt(new pA(r.getProvider("auth-internal")),new _A(o,r.getProvider("app-check-internal")),nR(o,i),o);return s=J({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ge(ep,tp,e),Ge(ep,tp,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="firebasestorage.googleapis.com",Z_="storageBucket",Hb=2*60*1e3,Wb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends It{constructor(e,t,r=0){super(xc(e),`Firebase Storage: ${t} (${xc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function xc(n){return"storage/"+n}function Bl(){const n="An unknown error occurred, please check the error payload for server response.";return new _e(ge.UNKNOWN,n)}function Qb(n){return new _e(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Jb(n){return new _e(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Yb(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(ge.UNAUTHENTICATED,n)}function Xb(){return new _e(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Zb(n){return new _e(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function eP(){return new _e(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tP(){return new _e(ge.CANCELED,"User canceled the upload/download.")}function nP(n){return new _e(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function rP(n){return new _e(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function iP(){return new _e(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Z_+"' property when initializing the app?")}function sP(){return new _e(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function oP(){return new _e(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aP(n){return new _e(ge.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vu(n){return new _e(ge.INVALID_ARGUMENT,n)}function ey(){return new _e(ge.APP_DELETED,"The Firebase app was deleted.")}function cP(n){return new _e(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ts(n,e){return new _e(ge.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Di(n){throw new _e(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ot.makeFromUrl(e,t)}catch(i){return new ot(e,"")}if(r.path==="")return r;throw rP(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(H){H.path_=decodeURIComponent(H.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${f}/b/${i}/o${y}`,"i"),N={bucket:1,path:3},O=t===X_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",K=new RegExp(`^https?://${O}/${i}/${D}`,"i"),B=[{regex:c,indices:u,postModify:s},{regex:S,indices:N,postModify:h},{regex:K,indices:{bucket:1,path:2},postModify:h}];for(let H=0;H<B.length;H++){const W=B[H],Y=W.regex.exec(e);if(Y){const T=Y[W.indices.bucket];let _=Y[W.indices.path];_||(_=""),r=new ot(T,_),W.postModify(r);break}}if(r==null)throw nP(e);return r}}class uP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(n,e,t){let r=1,i=null,s=null,o=!1,c=0;function u(){return c===2}let h=!1;function f(...D){h||(h=!0,e.apply(null,D))}function m(D){i=setTimeout(()=>{i=null,n(S,u())},D)}function y(){s&&clearTimeout(s)}function S(D,...K){if(h){y();return}if(D){y(),f.call(null,D,...K);return}if(u()||o){y(),f.call(null,D,...K);return}r<64&&(r*=2);let B;c===1?(c=2,B=0):B=(r+Math.random())*1e3,m(B)}let N=!1;function O(D){N||(N=!0,y(),!h&&(i!==null?(D||(c=2),clearTimeout(i),m(0)):D||(c=1)))}return m(0),s=setTimeout(()=>{o=!0,O(!0)},t),O}function hP(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(n){return n!==void 0}function fP(n){return typeof n=="object"&&!Array.isArray(n)}function $l(n){return typeof n=="string"||n instanceof String}function sp(n){return ql()&&n instanceof Blob}function ql(){return typeof Blob!="undefined"}function op(n,e,t,r){if(r<e)throw vu(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw vu(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function ty(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Wn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Wn||(Wn={}));/**
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
 */function pP(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,t,r,i,s,o,c,u,h,f,m,y=!0,S=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=y,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,O)=>{this.resolve_=N,this.reject_=O,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new uo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===Wn.NO_ERROR,u=s.getStatus();if(!c||pP(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Wn.ABORT;r(!1,new uo(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new uo(h,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());dP(u)?s(u):s()}catch(u){o(u)}else if(c!==null){const u=Bl();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?ey():tP();o(u)}else{const u=eP();o(u)}};this.canceled_?t(!1,new uo(!1,null,!0)):this.backoffId_=lP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function gP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function _P(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function yP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function IP(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function EP(n,e,t,r,i,s,o=!0,c=!1){const u=ty(n.urlParams),h=n.url+u,f=Object.assign({},n.headers);return yP(f,e),gP(f,t),_P(f,s),IP(f,r),new mP(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function wP(...n){const e=TP();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ql())return new Blob(n);throw new _e(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vP(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function AP(n){if(typeof atob=="undefined")throw aP("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mc{constructor(e,t){this.data=e,this.contentType=t||null}}function RP(n,e){switch(n){case St.RAW:return new Mc(ny(e));case St.BASE64:case St.BASE64URL:return new Mc(ry(n,e));case St.DATA_URL:return new Mc(bP(e),PP(e))}throw Bl()}function ny(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function SP(n){let e;try{e=decodeURIComponent(n)}catch(t){throw ts(St.DATA_URL,"Malformed data URL.")}return ny(e)}function ry(n,e){switch(n){case St.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ts(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ts(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=AP(e)}catch(i){throw i.message.includes("polyfill")?i:ts(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class iy{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ts(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=CP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function bP(n){const e=new iy(n);return e.base64?ry(St.BASE64,e.rest):SP(e.rest)}function PP(n){return new iy(n).contentType}function CP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t){let r=0,i="";sp(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(sp(this.data_)){const r=this.data_,i=vP(r,e,t);return i===null?null:new un(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new un(r,!0)}}static getBlob(...e){if(ql()){const t=e.map(r=>r instanceof un?r.data_:r);return new un(wP.apply(null,t))}else{const t=e.map(o=>$l(o)?RP(St.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[s++]=o[c]}),new un(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n){let e;try{e=JSON.parse(n)}catch(t){return null}return fP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function NP(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function oy(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(n,e){return e}class Ke{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||DP}}let lo=null;function VP(n){return!$l(n)||n.length<2?n:oy(n)}function ay(){if(lo)return lo;const n=[];n.push(new Ke("bucket")),n.push(new Ke("generation")),n.push(new Ke("metageneration")),n.push(new Ke("name","fullPath",!0));function e(s,o){return VP(o)}const t=new Ke("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Ke("size");return i.xform=r,n.push(i),n.push(new Ke("timeCreated")),n.push(new Ke("updated")),n.push(new Ke("md5Hash",null,!0)),n.push(new Ke("cacheControl",null,!0)),n.push(new Ke("contentDisposition",null,!0)),n.push(new Ke("contentEncoding",null,!0)),n.push(new Ke("contentLanguage",null,!0)),n.push(new Ke("contentType",null,!0)),n.push(new Ke("metadata","customMetadata",!0)),lo=n,lo}function OP(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new ot(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function xP(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return OP(r,n),r}function cy(n,e,t){const r=sy(e);return r===null?null:xP(n,r,t)}function MP(n,e,t,r){const i=sy(e);if(i===null||!$l(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=n.bucket,m=n.fullPath,y="/b/"+o(f)+"/o/"+o(m),S=jl(y,t,r),N=ty({alt:"media",token:h});return S+N})[0]}function LP(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class uy{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){if(!n)throw Bl()}function FP(n,e){function t(r,i){const s=cy(n,i,e);return ly(s!==null),s}return t}function UP(n,e){function t(r,i){const s=cy(n,i,e);return ly(s!==null),MP(s,i,n.host,n._protocol)}return t}function hy(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=Xb():i=Yb():t.getStatus()===402?i=Jb(n.bucket):t.getStatus()===403?i=Zb(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function BP(n){const e=hy(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Qb(n.path)),s.serverResponse=i.serverResponse,s}return t}function $P(n,e,t){const r=e.fullServerUrl(),i=jl(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,c=new uy(i,s,UP(n,t),o);return c.errorHandler=BP(e),c}function qP(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function jP(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=qP(null,e)),r}function zP(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let B="";for(let H=0;H<2;H++)B=B+Math.random().toString().slice(2);return B}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const h=jP(e,r,i),f=LP(h,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+u+"--",S=un.getBlob(m,r,y);if(S===null)throw sP();const N={name:h.fullPath},O=jl(s,n.host,n._protocol),D="POST",K=n.maxUploadRetryTime,j=new uy(O,D,FP(n,t),K);return j.urlParams=N,j.headers=o,j.body=S.uploadData(),j.errorHandler=hy(e),j}class KP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,s){if(this.sent_)throw Di("cannot .send() more than once");if(vn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Di("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Di("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Di("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Di("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GP extends KP{initXhr(){this.xhr_.responseType="text"}}function dy(){return new GP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this._service=e,t instanceof ot?this._location=t:this._location=ot.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new or(e,t)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return oy(this._location.path)}get storage(){return this._service}get parent(){const e=kP(this._location.path);if(e===null)return null;const t=new ot(this._location.bucket,e);return new or(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw cP(e)}}function HP(n,e,t){n._throwIfRoot("uploadBytes");const r=zP(n.storage,n._location,ay(),new un(e,!0),t);return n.storage.makeRequestWithTokens(r,dy).then(i=>({metadata:i,ref:n}))}function WP(n){n._throwIfRoot("getDownloadURL");const e=$P(n.storage,n._location,ay());return n.storage.makeRequestWithTokens(e,dy).then(t=>{if(t===null)throw oP();return t})}function QP(n,e){const t=NP(n._location.path,e),r=new ot(n._location.bucket,t);return new or(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(n){return/^[A-Za-z]+:\/\//.test(n)}function YP(n,e){return new or(n,e)}function fy(n,e){if(n instanceof zl){const t=n;if(t._bucket==null)throw iP();const r=new or(t,t._bucket);return e!=null?fy(r,e):r}else return e!==void 0?QP(n,e):n}function XP(n,e){if(e&&JP(e)){if(n instanceof zl)return YP(n,e);throw vu("To use ref(service, url), the first argument must be a Storage instance.")}else return fy(n,e)}function ap(n,e){const t=e==null?void 0:e[Z_];return t==null?null:ot.makeFromBucketSpec(t,n)}function ZP(n,e,t,r={}){n.host=`${e}:${t}`;const i=vn(e);i&&sa(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:kp(s,n.app.options.projectId))}class zl{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=X_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Hb,this._maxUploadRetryTime=Wb,this._requests=new Set,i!=null?this._bucket=ot.makeFromBucketSpec(i,this._host):this._bucket=ap(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=ap(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){op("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){op("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return p(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return p(this,null,function*(){if(ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new or(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new uP(ey());{const o=EP(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}makeRequestWithTokens(e,t){return p(this,null,function*(){const[r,i]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()})}}const cp="@firebase/storage",up="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="storage";function Lk(n,e,t){return n=G(n),HP(n,e,t)}function Fk(n){return n=G(n),WP(n)}function Uk(n,e){return n=G(n),XP(n,e)}function Bk(n=As(),e){n=G(n);const r=Dt(n,py).getImmediate({identifier:e}),i=bp("storage");return i&&eC(r,...i),r}function eC(n,e,t,r={}){ZP(n,e,t,r)}function tC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new zl(t,r,i,e,ur)}function nC(){ct(new nt(py,tC,"PUBLIC").setMultipleInstances(!0)),Ge(cp,up,""),Ge(cp,up,"esm2020")}nC();const my="@firebase/installations",Kl="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=1e4,_y=`w:${Kl}`,yy="FIS_v2",rC="https://firebaseinstallations.googleapis.com/v1",iC=60*60*1e3,sC="installations",oC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ar=new wn(sC,oC,aC);function Iy(n){return n instanceof It&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey({projectId:n}){return`${rC}/projects/${n}/installations`}function Ty(n){return{token:n.token,requestStatus:2,expiresIn:uC(n.expiresIn),creationTime:Date.now()}}function wy(n,e){return p(this,null,function*(){const r=(yield e.json()).error;return ar.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function vy({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function cC(n,{refreshToken:e}){const t=vy(n);return t.append("Authorization",lC(e)),t}function Ay(n){return p(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function uC(n){return Number(n.replace("s","000"))}function lC(n){return`${yy} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Ey(n),o=vy(n),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={fid:t,authVersion:yy,appId:n.appId,sdkVersion:_y},h={method:"POST",headers:o,body:JSON.stringify(u)},f=yield Ay(()=>fetch(s,h));if(f.ok){const m=yield f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:Ty(m.authToken)}}else throw yield wy("Create Installation",f)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=/^[cdef][\w-]{21}$/,Au="";function pC(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=mC(n);return fC.test(t)?t:Au}catch(n){return Au}}function mC(n){return dC(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new Map;function by(n,e){const t=Ka(n);Py(t,e),gC(t,e)}function Py(n,e){const t=Sy.get(n);if(t)for(const r of t)r(e)}function gC(n,e){const t=_C();t&&t.postMessage({key:n,fid:e}),yC()}let qn=null;function _C(){return!qn&&"BroadcastChannel"in self&&(qn=new BroadcastChannel("[Firebase] FID Change"),qn.onmessage=n=>{Py(n.data.key,n.data.fid)}),qn}function yC(){Sy.size===0&&qn&&(qn.close(),qn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="firebase-installations-database",EC=1,cr="firebase-installations-store";let Lc=null;function Gl(){return Lc||(Lc=ra(IC,EC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(cr)}}})),Lc}function na(n,e){return p(this,null,function*(){const t=Ka(n),i=(yield Gl()).transaction(cr,"readwrite"),s=i.objectStore(cr),o=yield s.get(t);return yield s.put(e,t),yield i.done,(!o||o.fid!==e.fid)&&by(n,e.fid),e})}function Cy(n){return p(this,null,function*(){const e=Ka(n),r=(yield Gl()).transaction(cr,"readwrite");yield r.objectStore(cr).delete(e),yield r.done})}function Ga(n,e){return p(this,null,function*(){const t=Ka(n),i=(yield Gl()).transaction(cr,"readwrite"),s=i.objectStore(cr),o=yield s.get(t),c=e(o);return c===void 0?yield s.delete(t):yield s.put(c,t),yield i.done,c&&(!o||o.fid!==c.fid)&&by(n,c.fid),c})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){return p(this,null,function*(){let e;const t=yield Ga(n.appConfig,r=>{const i=TC(r),s=wC(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Au?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function TC(n){const e=n||{fid:pC(),registrationStatus:0};return ky(e)}function wC(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ar.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vC(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:AC(n)}:{installationEntry:e}}function vC(n,e){return p(this,null,function*(){try{const t=yield hC(n,e);return na(n.appConfig,t)}catch(t){throw Iy(t)&&t.customData.serverCode===409?yield Cy(n.appConfig):yield na(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function AC(n){return p(this,null,function*(){let e=yield lp(n.appConfig);for(;e.registrationStatus===1;)yield Ry(100),e=yield lp(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=yield Hl(n);return r||t}return e})}function lp(n){return Ga(n,e=>{if(!e)throw ar.create("installation-not-found");return ky(e)})}function ky(n){return RC(n)?{fid:n.fid,registrationStatus:0}:n}function RC(n){return n.registrationStatus===1&&n.registrationTime+gy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const s=bC(n,t),o=cC(n,t),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={installation:{sdkVersion:_y,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(u)},f=yield Ay(()=>fetch(s,h));if(f.ok){const m=yield f.json();return Ty(m)}else throw yield wy("Generate Auth Token",f)})}function bC(n,{fid:e}){return`${Ey(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n,e=!1){return p(this,null,function*(){let t;const r=yield Ga(n.appConfig,s=>{if(!Ny(s))throw ar.create("not-registered");const o=s.authToken;if(!e&&kC(o))return s;if(o.requestStatus===1)return t=PC(n,e),s;{if(!navigator.onLine)throw ar.create("app-offline");const c=DC(s);return t=CC(n,c),c}});return t?yield t:r.authToken})}function PC(n,e){return p(this,null,function*(){let t=yield hp(n.appConfig);for(;t.authToken.requestStatus===1;)yield Ry(100),t=yield hp(n.appConfig);const r=t.authToken;return r.requestStatus===0?Wl(n,e):r})}function hp(n){return Ga(n,e=>{if(!Ny(e))throw ar.create("not-registered");const t=e.authToken;return VC(t)?xe(J({},e),{authToken:{requestStatus:0}}):e})}function CC(n,e){return p(this,null,function*(){try{const t=yield SC(n,e),r=xe(J({},e),{authToken:t});return yield na(n.appConfig,r),t}catch(t){if(Iy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield Cy(n.appConfig);else{const r=xe(J({},e),{authToken:{requestStatus:0}});yield na(n.appConfig,r)}throw t}})}function Ny(n){return n!==void 0&&n.registrationStatus===2}function kC(n){return n.requestStatus===2&&!NC(n)}function NC(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+iC}function DC(n){const e={requestStatus:1,requestTime:Date.now()};return xe(J({},n),{authToken:e})}function VC(n){return n.requestStatus===1&&n.requestTime+gy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(n){return p(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:r}=yield Hl(e);return r?r.catch(console.error):Wl(e).catch(console.error),t.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(n,e=!1){return p(this,null,function*(){const t=n;return yield MC(t),(yield Wl(t,e)).token})}function MC(n){return p(this,null,function*(){const{registrationPromise:e}=yield Hl(n);e&&(yield e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(n){if(!n||!n.options)throw Fc("App Configuration");if(!n.name)throw Fc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Fc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Fc(n){return ar.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="installations",FC="installations-internal",UC=n=>{const e=n.getProvider("app").getImmediate(),t=LC(e),r=Dt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},BC=n=>{const e=n.getProvider("app").getImmediate(),t=Dt(e,Dy).getImmediate();return{getId:()=>OC(t),getToken:i=>xC(t,i)}};function $C(){ct(new nt(Dy,UC,"PUBLIC")),ct(new nt(FC,BC,"PRIVATE"))}$C();Ge(my,Kl);Ge(my,Kl,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="/firebase-messaging-sw.js",jC="/firebase-cloud-messaging-push-scope",Vy="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",zC="https://fcmregistrations.googleapis.com/v1",Oy="google.c.a.c_id",KC="google.c.a.c_l",GC="google.c.a.ts",HC="google.c.a.e",dp=1e4;var fp;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(fp||(fp={}));/**
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
 */var Es;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Es||(Es={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function WC(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="fcm_token_details_db",QC=5,pp="fcm_token_object_Store";function JC(n){return p(this,null,function*(){if("databases"in indexedDB&&!(yield indexedDB.databases()).map(s=>s.name).includes(Uc))return null;let e=null;return(yield ra(Uc,QC,{upgrade:(r,i,s,o)=>p(this,null,function*(){var h;if(i<2||!r.objectStoreNames.contains(pp))return;const c=o.objectStore(pp),u=yield c.index("fcmSenderId").get(n);if(yield c.clear(),!!u){if(i===2){const f=u;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(h=f.createTime)!=null?h:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Ot(f.vapidKey)}}}else if(i===3){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Ot(f.auth),p256dh:Ot(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Ot(f.vapidKey)}}}else if(i===4){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Ot(f.auth),p256dh:Ot(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Ot(f.vapidKey)}}}}})})).close(),yield Ic(Uc),yield Ic("fcm_vapid_details_db"),yield Ic("undefined"),YC(e)?e:null})}function YC(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="firebase-messaging-database",ZC=1,Ts="firebase-messaging-store";let Bc=null;function xy(){return Bc||(Bc=ra(XC,ZC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ts)}}})),Bc}function e0(n){return p(this,null,function*(){const e=My(n),r=yield(yield xy()).transaction(Ts).objectStore(Ts).get(e);if(r)return r;{const i=yield JC(n.appConfig.senderId);if(i)return yield Ql(n,i),i}})}function Ql(n,e){return p(this,null,function*(){const t=My(n),i=(yield xy()).transaction(Ts,"readwrite");return yield i.objectStore(Ts).put(e,t),yield i.done,e})}function My({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Qe=new wn("messaging","Messaging",t0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(n,e){return p(this,null,function*(){const t=yield Yl(n),r=Ly(e),i={method:"POST",headers:t,body:JSON.stringify(r)};let s;try{s=yield(yield fetch(Jl(n.appConfig),i)).json()}catch(o){throw Qe.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Qe.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Qe.create("token-subscribe-no-token");return s.token})}function r0(n,e){return p(this,null,function*(){const t=yield Yl(n),r=Ly(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)};let s;try{s=yield(yield fetch(`${Jl(n.appConfig)}/${e.token}`,i)).json()}catch(o){throw Qe.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Qe.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Qe.create("token-update-no-token");return s.token})}function i0(n,e){return p(this,null,function*(){const r={method:"DELETE",headers:yield Yl(n)};try{const s=yield(yield fetch(`${Jl(n.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Qe.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Qe.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}})}function Jl({projectId:n}){return`${zC}/projects/${n}/registrations`}function Yl(t){return p(this,arguments,function*({appConfig:n,installations:e}){const r=yield e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})})}function Ly({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const i={web:{endpoint:t,auth:e,p256dh:n}};return r!==Vy&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=7*24*60*60*1e3;function o0(n){return p(this,null,function*(){const e=yield c0(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Ot(e.getKey("auth")),p256dh:Ot(e.getKey("p256dh"))},r=yield e0(n.firebaseDependencies);if(r){if(u0(r.subscriptionOptions,t))return Date.now()>=r.createTime+s0?a0(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{yield i0(n.firebaseDependencies,r.token)}catch(i){}return mp(n.firebaseDependencies,t)}else return mp(n.firebaseDependencies,t)})}function a0(n,e){return p(this,null,function*(){try{const t=yield r0(n.firebaseDependencies,e),r=xe(J({},e),{token:t,createTime:Date.now()});return yield Ql(n.firebaseDependencies,r),t}catch(t){throw t}})}function mp(n,e){return p(this,null,function*(){const r={token:yield n0(n,e),createTime:Date.now(),subscriptionOptions:e};return yield Ql(n,r),r.token})}function c0(n,e){return p(this,null,function*(){const t=yield n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:WC(e)})})}function u0(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,s=e.p256dh===n.p256dh;return t&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return l0(e,n),h0(e,n),d0(e,n),e}function l0(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const i=e.notification.image;i&&(n.notification.image=i);const s=e.notification.icon;s&&(n.notification.icon=s)}function h0(n,e){e.data&&(n.data=e.data)}function d0(n,e){var i,s,o,c,u;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;n.fcmOptions={};const t=(c=(s=e.fcmOptions)==null?void 0:s.link)!=null?c:(o=e.notification)==null?void 0:o.click_action;t&&(n.fcmOptions.link=t);const r=(u=e.fcmOptions)==null?void 0:u.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){return typeof n=="object"&&!!n&&Oy in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */p0("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function p0(n,e){const t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(n){if(!n||!n.options)throw $c("App Configuration Object");if(!n.name)throw $c("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw $c(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function $c(n){return Qe.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=m0(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(n){return p(this,null,function*(){try{n.swRegistration=yield navigator.serviceWorker.register(qC,{scope:jC}),n.swRegistration.update().catch(()=>{}),yield y0(n.swRegistration)}catch(e){throw Qe.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}})}function y0(n){return p(this,null,function*(){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${dp} ms`)),dp),i=n.installing||n.waiting;n.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n,e){return p(this,null,function*(){if(!e&&!n.swRegistration&&(yield _0(n)),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Qe.create("invalid-sw-registration");n.swRegistration=e}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(n,e){return p(this,null,function*(){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Vy)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n,e){return p(this,null,function*(){if(!navigator)throw Qe.create("only-available-in-window");if(Notification.permission==="default"&&(yield Notification.requestPermission()),Notification.permission!=="granted")throw Qe.create("permission-blocked");return yield E0(n,e==null?void 0:e.vapidKey),yield I0(n,e==null?void 0:e.serviceWorkerRegistration),o0(n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(n,e,t){return p(this,null,function*(){const r=w0(e);(yield n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Oy],message_name:t[KC],message_time:t[GC],message_device_time:Math.floor(Date.now()/1e3)})})}function w0(n){switch(n){case Es.NOTIFICATION_CLICKED:return"notification_open";case Es.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(n,e){return p(this,null,function*(){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Es.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(gp(t)):n.onMessageHandler.next(gp(t)));const r=t.data;f0(r)&&r[HC]==="1"&&(yield T0(n,t.messageType,r))})}const _p="@firebase/messaging",yp="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=n=>{const e=new g0(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>v0(e,t)),e},R0=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Fy(e,r)}};function S0(){ct(new nt("messaging",A0,"PUBLIC")),ct(new nt("messaging-internal",R0,"PRIVATE")),Ge(_p,yp),Ge(_p,yp,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return p(this,null,function*(){try{yield Op()}catch(n){return!1}return typeof window!="undefined"&&vs()&&QI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n=As()){return b0().then(e=>{if(!e)throw Qe.create("unsupported-browser")},e=>{throw Qe.create("indexed-db-unsupported")}),Dt(G(n),"messaging").getImmediate()}function qk(n,e){return p(this,null,function*(){return n=G(n),Fy(n,e)})}S0();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map,Uy={activated:!1,tokenObservers:[]},P0={initialized:!1,enabled:!1};function Se(n){return Ru.get(n)||J({},Uy)}function C0(n,e){return Ru.set(n,e),Ru.get(n)}function Ha(){return P0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="https://content-firebaseappcheck.googleapis.com/v1",k0="exchangeRecaptchaV3Token",N0="exchangeDebugToken",Ip={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},D0=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}process(e){return p(this,null,function*(){this.stop();try{this.pending=new ns,this.pending.promise.catch(t=>{}),yield O0(this.getNextRun(e)),this.pending.resolve(),yield this.pending.promise,this.pending=new ns,this.pending.promise.catch(t=>{}),yield this.operation(),this.pending.resolve(),yield this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}})}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function O0(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ze=new wn("appCheck","AppCheck",x0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n=!1){var e;return n?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function Xl(n){if(!Se(n).activated)throw Ze.create("use-before-activation",{appName:n.name})}function $y(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),s=e-t*3600*24-r*3600-i*60;let o="";return t&&(o+=ho(t)+"d:"),r&&(o+=ho(r)+"h:"),o+=ho(i)+"m:"+ho(s)+"s",o}function ho(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(r,i){return p(this,arguments,function*({url:n,body:e},t){const s={"Content-Type":"application/json"},o=t.getImmediate({optional:!0});if(o){const S=yield o.getHeartbeatsHeader();S&&(s["X-Firebase-Client"]=S)}const c={method:"POST",body:JSON.stringify(e),headers:s};let u;try{u=yield fetch(n,c)}catch(S){throw Ze.create("fetch-network-error",{originalErrorMessage:S==null?void 0:S.message})}if(u.status!==200)throw Ze.create("fetch-status-error",{httpStatus:u.status});let h;try{h=yield u.json()}catch(S){throw Ze.create("fetch-parse-error",{originalErrorMessage:S==null?void 0:S.message})}const f=h.ttl.match(/^([\d.]+)(s)$/);if(!f||!f[2]||isNaN(Number(f[1])))throw Ze.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${h.ttl}`});const m=Number(f[1])*1e3,y=Date.now();return{token:h.token,expireTimeMillis:y+m,issuedAtTimeMillis:y}})}function M0(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${By}/projects/${t}/apps/${r}:${k0}?key=${i}`,body:{recaptcha_v3_token:e}}}function qy(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${By}/projects/${t}/apps/${r}:${N0}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="firebase-app-check-database",F0=1,ws="firebase-app-check-store",jy="debug-token";let fo=null;function zy(){return fo||(fo=new Promise((n,e)=>{try{const t=indexedDB.open(L0,F0);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(Ze.create("storage-open",{originalErrorMessage:(i=r.target.error)==null?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(ws,{keyPath:"compositeKey"})}}}catch(t){e(Ze.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),fo)}function U0(n){return Gy(Hy(n))}function B0(n,e){return Ky(Hy(n),e)}function $0(n){return Ky(jy,n)}function q0(){return Gy(jy)}function Ky(n,e){return p(this,null,function*(){const r=(yield zy()).transaction(ws,"readwrite"),s=r.objectStore(ws).put({compositeKey:n,value:e});return new Promise((o,c)=>{s.onsuccess=u=>{o()},r.onerror=u=>{var h;c(Ze.create("storage-set",{originalErrorMessage:(h=u.target.error)==null?void 0:h.message}))}})})}function Gy(n){return p(this,null,function*(){const t=(yield zy()).transaction(ws,"readonly"),i=t.objectStore(ws).get(n);return new Promise((s,o)=>{i.onsuccess=c=>{const u=c.target.result;s(u?u.value:void 0)},t.onerror=c=>{var u;o(Ze.create("storage-get",{originalErrorMessage:(u=c.target.error)==null?void 0:u.message}))}})})}function Hy(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new oa("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(n){return p(this,null,function*(){if(vs()){let e;try{e=yield U0(n)}catch(t){dn.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}})}function qc(n,e){return vs()?B0(n,e).catch(t=>{dn.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}function z0(){return p(this,null,function*(){let n;try{n=yield q0()}catch(e){}if(n)return n;{const e=crypto.randomUUID();return $0(e).catch(t=>dn.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return Ha().enabled}function th(){return p(this,null,function*(){const n=Ha();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)})}function K0(){const n=Pu(),e=Ha();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new ns;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(z0())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0={error:"UNKNOWN_ERROR"};function H0(n){return bu.encodeString(JSON.stringify(n),!1)}function Su(n,e=!1,t=!1){return p(this,null,function*(){const r=n.app;Xl(r);const i=Se(r);let s=i.token,o;if(s&&!Rr(s)&&(i.token=void 0,s=void 0),!s){const h=yield i.cachedTokenPromise;h&&(Rr(h)?s=h:yield qc(r,void 0))}if(!e&&s&&Rr(s))return{token:s.token};let c=!1;if(eh())try{const h=yield th();i.exchangeTokenPromise||(i.exchangeTokenPromise=Zl(qy(r,h),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),c=!0);const f=yield i.exchangeTokenPromise;return yield qc(r,f),i.token=f,{token:f.token}}catch(h){return h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?dn.warn(h.message):t&&dn.error(h),jc(h)}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),c=!0),s=yield Se(r).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?dn.warn(h.message):t&&dn.error(h),o=h}let u;return s?o?Rr(s)?u={token:s.token,internalError:o}:u=jc(o):(u={token:s.token},i.token=s,yield qc(r,s)):u=jc(o),c&&Jy(r,u),u})}function W0(n){return p(this,null,function*(){const e=n.app;Xl(e);const{provider:t}=Se(e);if(eh()){const r=yield th(),{token:i}=yield Zl(qy(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=yield t.getToken();return{token:r}}})}function Wy(n,e,t,r){const{app:i}=n,s=Se(i),o={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Rr(s.token)){const c=s.token;Promise.resolve().then(()=>{t({token:c.token}),Tp(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Tp(n))}function Qy(n,e){const t=Se(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function Tp(n){const{app:e}=n,t=Se(e);let r=t.tokenRefresher;r||(r=Q0(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function Q0(n){const{app:e}=n;return new V0(()=>p(this,null,function*(){const t=Se(e);let r;if(t.token?r=yield Su(n,!0):r=yield Su(n),r.error)throw r.error;if(r.internalError)throw r.internalError}),()=>!0,()=>{const t=Se(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Ip.RETRIAL_MIN_WAIT,Ip.RETRIAL_MAX_WAIT)}function Jy(n,e){const t=Se(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch(i){}}function Rr(n){return n.expireTimeMillis-Date.now()>0}function jc(n){return{token:H0(G0),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Se(this.app);for(const t of e)Qy(this.app,t.next);return Promise.resolve()}}function Y0(n,e){return new J0(n,e)}function X0(n){return{getToken:e=>Su(n,e),getLimitedUseToken:()=>W0(n),addTokenListener:e=>Wy(n,"INTERNAL",e),removeTokenListener:e=>Qy(n.app,e)}}const Z0="@firebase/app-check",ek="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="https://www.google.com/recaptcha/api.js";function nk(n,e){const t=new ns,r=Se(n);r.reCAPTCHAState={initialized:t};const i=rk(n),s=Ep(!1);return s?wp(n,e,s,i,t):ok(()=>{const o=Ep(!1);if(!o)throw new Error("no recaptcha");wp(n,e,o,i,t)}),t.promise}function wp(n,e,t,r,i){t.ready(()=>{sk(n,e,t,r),i.resolve(t)})}function rk(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}function ik(n){return p(this,null,function*(){Xl(n);const t=yield Se(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const s=Se(n).reCAPTCHAState;t.ready(()=>{r(t.execute(s.widgetId,{action:"fire_app_check"}))})})})}function sk(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{Se(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Se(n).reCAPTCHAState.succeeded=!1}}),s=Se(n);s.reCAPTCHAState=xe(J({},s.reCAPTCHAState),{widgetId:i})}function ok(n){const e=document.createElement("script");e.src=tk,e.onload=n,document.head.appendChild(e)}/**
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
 */class Yy{constructor(e){this._siteKey=e,this._throttleData=null}getToken(){return p(this,null,function*(){var r,i,s;ck(this._throttleData);const e=yield ik(this._app).catch(o=>{throw Ze.create("recaptcha-error")});if(!((r=Se(this._app).reCAPTCHAState)!=null&&r.succeeded))throw Ze.create("recaptcha-error");let t;try{t=yield Zl(M0(this._app,e),this._heartbeatServiceProvider)}catch(o){throw(i=o.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=ak(Number((s=o.customData)==null?void 0:s.httpStatus),this._throttleData),Ze.create("initial-throttle",{time:$y(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,t})}initialize(e){this._app=e,this._heartbeatServiceProvider=Dt(e,"heartbeat"),nk(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Yy?this._siteKey===e._siteKey:!1}}function ak(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+D0,httpStatus:n};{const t=e?e.backoffCount:0,r=aE(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function ck(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Ze.create("throttled",{time:$y(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(n=As(),e){n=G(n);const t=Dt(n,"app-check");if(Ha().initialized||K0(),eh()&&th().then(i=>{}),t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return i;throw Ze.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return uk(n,e.provider,e.isTokenAutoRefreshEnabled),Se(n).isTokenAutoRefreshEnabled&&Wy(r,"INTERNAL",()=>{}),r}function uk(n,e,t=!1){const r=C0(n,J({},Uy));r.activated=!0,r.provider=e,r.cachedTokenPromise=j0(n).then(i=>(i&&Rr(i)&&(r.token=i,Jy(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&dn.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(n)}const lk="app-check",vp="app-check-internal";function hk(){ct(new nt(lk,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return Y0(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(vp).initialize()})),ct(new nt(vp,n=>{const e=n.getProvider("app-check").getImmediate();return X0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ge(Z0,ek)}hk();var Sr;(function(n){n.IndexedDbLocal="INDEXED_DB_LOCAL",n.InMemory="IN_MEMORY",n.BrowserLocal="BROWSER_LOCAL",n.BrowserSession="BROWSER_SESSION"})(Sr||(Sr={}));var an;(function(n){n.APPLE="apple.com",n.FACEBOOK="facebook.com",n.GAME_CENTER="gc.apple.com",n.GITHUB="github.com",n.GOOGLE="google.com",n.MICROSOFT="microsoft.com",n.PLAY_GAMES="playgames.google.com",n.TWITTER="twitter.com",n.YAHOO="yahoo.com",n.PASSWORD="password",n.PHONE="phone"})(an||(an={}));const zk=OI("FirebaseAuthentication",{web:()=>xI(()=>Promise.resolve().then(()=>dk),void 0).then(n=>new n.FirebaseAuthenticationWeb)});class re extends MI{constructor(){super(),this.lastConfirmationResult=new Map;const e=Z();e.onAuthStateChanged(t=>this.handleAuthStateChange(t)),e.onIdTokenChanged(t=>void this.handleIdTokenChange(t))}applyActionCode(e){return p(this,null,function*(){const t=Z();return Iw(t,e.oobCode)})}createUserWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield Ew(t,e.email,e.password);return this.createSignInResult(r,null)})}confirmPasswordReset(e){return p(this,null,function*(){const t=Z();return yw(t,e.oobCode,e.newPassword)})}confirmVerificationCode(e){return p(this,null,function*(){const{verificationCode:t,verificationId:r}=e,i=this.lastConfirmationResult.get(r);if(!i)throw new Error(re.ERROR_CONFIRMATION_RESULT_MISSING);const s=yield i.confirm(t);return this.createSignInResult(s,null)})}deleteUser(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return qw(t)})}fetchSignInMethodsForEmail(e){return p(this,null,function*(){const t=Z();return{signInMethods:yield Sw(t,e.email)}})}getPendingAuthResult(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}getCurrentUser(){return p(this,null,function*(){const e=Z();return{user:this.createUserResult(e.currentUser)}})}getIdToken(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return{token:(yield t.currentUser.getIdToken(e==null?void 0:e.forceRefresh))||""}})}getIdTokenResult(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield t.currentUser.getIdTokenResult(e==null?void 0:e.forceRefresh);return Object.assign(Object.assign({},r),{authTime:Date.parse(r.authTime),expirationTime:Date.parse(r.expirationTime),issuedAtTime:Date.parse(r.issuedAtTime)})})}getRedirectResult(){return p(this,null,function*(){const e=Z(),t=yield vv(e),r=t?ye.credentialFromResult(t):null;return this.createSignInResult(t,r)})}getTenantId(){return p(this,null,function*(){return{tenantId:Z().tenantId}})}isSignInWithEmailLink(e){return p(this,null,function*(){const t=Z();return{isSignInWithEmailLink:vw(t,e.emailLink)}})}linkWithApple(e){return p(this,null,function*(){const t=new ye(an.APPLE);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithEmailAndPassword(e){return p(this,null,function*(){const t=$t.credential(e.email,e.password),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithEmailLink(e){return p(this,null,function*(){const t=$t.credentialWithLink(e.email,e.emailLink),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithFacebook(e){return p(this,null,function*(){const t=new lt;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=lt.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithGithub(e){return p(this,null,function*(){const t=new dt;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=dt.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithGoogle(e){return p(this,null,function*(){const t=new ht;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ht.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithMicrosoft(e){return p(this,null,function*(){const t=new ye(an.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithPhoneNumber(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof bd))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);try{const i=yield uv(r,e.phoneNumber,e.recaptchaVerifier),{verificationId:s}=i;this.lastConfirmationResult.set(s,i);const o={verificationId:s};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,o)}catch(i){const s={message:this.getErrorMessage(i)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,s)}})}linkWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithTwitter(e){return p(this,null,function*(){const t=new ft;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ft.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithYahoo(e){return p(this,null,function*(){const t=new ye(an.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}reload(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return zp(t)})}revokeAccessToken(e){return p(this,null,function*(){const t=Z();return $w(t,e.token)})}sendEmailVerification(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return bw(r,e==null?void 0:e.actionCodeSettings)})}sendPasswordResetEmail(e){return p(this,null,function*(){const t=Z();return _w(t,e.email,e.actionCodeSettings)})}sendSignInLinkToEmail(e){return p(this,null,function*(){const t=Z();return ww(t,e.email,e.actionCodeSettings)})}setLanguageCode(e){return p(this,null,function*(){const t=Z();t.languageCode=e.languageCode})}setPersistence(e){return p(this,null,function*(){const t=Z();switch(e.persistence){case Sr.BrowserLocal:yield to(t,pm);break;case Sr.BrowserSession:yield to(t,Lu);break;case Sr.IndexedDbLocal:yield to(t,Im);break;case Sr.InMemory:yield to(t,Wc);break}})}setTenantId(e){return p(this,null,function*(){const t=Z();t.tenantId=e.tenantId})}signInAnonymously(){return p(this,null,function*(){const e=Z(),t=yield dw(e);return this.createSignInResult(t,null)})}signInWithApple(e){return p(this,null,function*(){const t=new ye(an.APPLE);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithCustomToken(e){return p(this,null,function*(){const t=Z(),r=yield gw(t,e.token);return this.createSignInResult(r,null)})}signInWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield Tw(t,e.email,e.password);return this.createSignInResult(r,null)})}signInWithEmailLink(e){return p(this,null,function*(){const t=Z(),r=yield Aw(t,e.email,e.emailLink);return this.createSignInResult(r,null)})}signInWithFacebook(e){return p(this,null,function*(){const t=new lt;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=lt.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithGithub(e){return p(this,null,function*(){const t=new dt;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=dt.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithGoogle(e){return p(this,null,function*(){const t=new ht;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ht.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithMicrosoft(e){return p(this,null,function*(){const t=new ye(an.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.signInWithPopupOrRedirect(t,e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithPhoneNumber(e){return p(this,null,function*(){if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof bd))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);const t=Z();try{const r=yield cv(t,e.phoneNumber,e.recaptchaVerifier),{verificationId:i}=r;this.lastConfirmationResult.set(i,r);const s={verificationId:i};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,s)}catch(r){const i={message:this.getErrorMessage(r)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,i)}})}signInWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithTwitter(e){return p(this,null,function*(){const t=new ft;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ft.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithYahoo(e){return p(this,null,function*(){const t=new ye(an.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signOut(){return p(this,null,function*(){yield Z().signOut()})}unlink(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield fw(t.currentUser,e.providerId);return{user:this.createUserResult(r)}})}updateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Nw(r,e.newEmail)})}updatePassword(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Dw(r,e.newPassword)})}updateProfile(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return kw(r,{displayName:e.displayName,photoURL:e.photoUrl})})}useAppLanguage(){return p(this,null,function*(){Z().useDeviceLanguage()})}useEmulator(e){return p(this,null,function*(){const t=Z(),r=e.port||9099,i=e.scheme||"http";e.host.includes("://")?Qc(t,`${e.host}:${r}`):Qc(t,`${i}://${e.host}:${r}`)})}verifyBeforeUpdateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Pw(r,e==null?void 0:e.newEmail,e==null?void 0:e.actionCodeSettings)})}handleAuthStateChange(e){const r={user:this.createUserResult(e)};this.notifyListeners(re.AUTH_STATE_CHANGE_EVENT,r,!0)}handleIdTokenChange(e){return p(this,null,function*(){if(!e)return;const r={token:yield e.getIdToken(!1)};this.notifyListeners(re.ID_TOKEN_CHANGE_EVENT,r,!0)})}applySignInOptions(e,t){if(e.customParameters){const r={};e.customParameters.map(i=>{r[i.key]=i.value}),t.setCustomParameters(r)}if(e.scopes)for(const r of e.scopes)t.addScope(r)}signInWithPopupOrRedirect(e,t){const r=Z();return t==="redirect"?Iv(r,e):pv(r,e)}linkCurrentUserWithPopupOrRedirect(e,t){const r=Z();if(!r.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return t==="redirect"?Tv(r.currentUser,e):mv(r.currentUser,e)}linkCurrentUserWithCredential(e){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return lm(t.currentUser,e)}requestAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}checkAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}createSignInResult(e,t){const r=this.createUserResult((e==null?void 0:e.user)||null),i=this.createCredentialResult(t),s=this.createAdditionalUserInfoResult(e);return{user:r,credential:i,additionalUserInfo:s}}createCredentialResult(e){if(!e)return null;const t={providerId:e.providerId};return e instanceof Ct&&(t.accessToken=e.accessToken,t.idToken=e.idToken,t.secret=e.secret),t}createUserResult(e){return e?{displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,isAnonymous:e.isAnonymous,metadata:this.createUserMetadataResult(e.metadata),phoneNumber:e.phoneNumber,photoUrl:e.photoURL,providerData:this.createUserProviderDataResult(e.providerData),providerId:e.providerId,tenantId:e.tenantId,uid:e.uid}:null}createUserMetadataResult(e){const t={};return e.creationTime&&(t.creationTime=Date.parse(e.creationTime)),e.lastSignInTime&&(t.lastSignInTime=Date.parse(e.lastSignInTime)),t}createUserProviderDataResult(e){return e.map(t=>({displayName:t.displayName,email:t.email,phoneNumber:t.phoneNumber,photoUrl:t.photoURL,providerId:t.providerId,uid:t.uid}))}createAdditionalUserInfoResult(e){if(!e)return null;const t=Fw(e);if(!t)return null;const{isNewUser:r,profile:i,providerId:s,username:o}=t,c={isNewUser:r};return s!==null&&(c.providerId=s),i!==null&&(c.profile=i),o!=null&&(c.username=o),c}getErrorMessage(e){return e instanceof Object&&"message"in e&&typeof e.message=="string"?e.message:JSON.stringify(e)}}re.AUTH_STATE_CHANGE_EVENT="authStateChange";re.ID_TOKEN_CHANGE_EVENT="idTokenChange";re.PHONE_CODE_SENT_EVENT="phoneCodeSent";re.PHONE_VERIFICATION_FAILED_EVENT="phoneVerificationFailed";re.ERROR_NO_USER_SIGNED_IN="No user is signed in.";re.ERROR_PHONE_NUMBER_MISSING="phoneNumber must be provided.";re.ERROR_RECAPTCHA_VERIFIER_MISSING="recaptchaVerifier must be provided and must be an instance of RecaptchaVerifier.";re.ERROR_CONFIRMATION_RESULT_MISSING="No confirmation result with this verification id was found.";const dk=Object.freeze(Object.defineProperty({__proto__:null,FirebaseAuthenticationWeb:re},Symbol.toStringTag,{value:"Module"}));export{gk as A,xk as B,yk as C,Vk as D,Ak as E,zk as F,ht as G,Rk as H,Mk as I,qk as J,Nk as K,bk as L,Sk as M,Ok as N,Uk as O,Lk as P,Fk as Q,Yy as R,qw as S,wk as T,vk as U,jk as a,Ik as b,Ck as c,Ek as d,Bk as e,b0 as f,Z as g,$k as h,QE as i,pm as j,gw as k,xu as l,kb as m,Tk as n,mk as o,Pk as p,Dk as q,kk as r,to as s,vv as t,Ew as u,Tw as v,pv as w,Iv as x,bd as y,cv as z};
