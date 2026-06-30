var nI=Object.defineProperty,rI=Object.defineProperties;var iI=Object.getOwnPropertyDescriptors;var Ks=Object.getOwnPropertySymbols,sI=Object.getPrototypeOf,qh=Object.prototype.hasOwnProperty,$h=Object.prototype.propertyIsEnumerable,oI=Reflect.get;var Bh=(n,e,t)=>e in n?nI(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Y=(n,e)=>{for(var t in e||(e={}))qh.call(e,t)&&Bh(n,t,e[t]);if(Ks)for(var t of Ks(e))$h.call(e,t)&&Bh(n,t,e[t]);return n},Ve=(n,e)=>rI(n,iI(e));var Gs=(n,e)=>{var t={};for(var r in n)qh.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&Ks)for(var r of Ks(n))e.indexOf(r)<0&&$h.call(n,r)&&(t[r]=n[r]);return t};var Zt=(n,e,t)=>oI(sI(n),t,e);var p=(n,e,t)=>new Promise((r,i)=>{var s=u=>{try{c(t.next(u))}catch(h){i(h)}},o=u=>{try{c(t.throw(u))}catch(h){i(h)}},c=u=>u.done?r(u.value):Promise.resolve(u.value).then(s,o);c((t=t.apply(n,e)).next())});import{o as Ho,d as ac,r as aI,_ as cI,W as uI}from"./dependencies.06c0bbde.js";const lI=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let y=(c&15)<<2|h>>6,b=h&63;u||(b=64,o||(y=64)),r.push(t[f],t[m],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(op(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new dI;const y=s<<2|c>>4;if(r.push(y),h!==64){const b=c<<4&240|h>>2;if(r.push(b),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fI=function(n){const e=op(n);return hu.encodeByteArray(e,!0)},wo=function(n){return fI(n).replace(/\./g,"")},ap=function(n){try{return hu.decodeString(n,!0)}catch(e){}return null};/**
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
 */function du(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pI=()=>du().__FIREBASE_DEFAULTS__,mI=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gI=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&ap(n[1]);return e&&JSON.parse(e)},Qo=()=>{try{return lI()||pI()||mI()||gI()}catch(n){return}},cp=n=>{var e,t;return(t=(e=Qo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},up=n=>{const e=cp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lp=()=>{var n;return(n=Qo())==null?void 0:n.config},hp=n=>{var e;return(e=Qo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function dp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Y({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[wo(JSON.stringify(t)),wo(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _I(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function fp(){var e;const n=(e=Qo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function yI(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function II(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function EI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pp(){return!fp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mp(){return!fp()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function fs(){try{return typeof indexedDB=="object"}catch(n){return!1}}function gp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}function wI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Tt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=vI,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AI(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,c,r)}}function AI(n,e){return n.replace(RI,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const RI=/\{\$([^}]+)}/g;function bI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _n(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(jh(s)&&jh(o)){if(!_n(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function jh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function SI(n,e){const t=new PI(n,e);return t.subscribe.bind(t)}class PI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");CI(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=cc),i.error===void 0&&(i.error=cc),i.complete===void 0&&(i.complete=cc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=1e3,NI=2,DI=4*60*60*1e3,VI=.5;function OI(n,e=kI,t=NI){const r=e*Math.pow(t,n),i=Math.round(VI*r*(Math.random()-.5)*2);return Math.min(DI,r+i)}/**
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
 */function z(n){return n&&n._delegate?n._delegate:n}/**
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
 */function or(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function fu(n){return p(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}class tt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var i;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LI(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return p(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var o;const r=this.normalizeInstanceIdentifier(t),i=(o=this.onInitCallbacks.get(r))!=null?o:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MI(n){return n===Dn?void 0:n}function LI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const UI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},BI=ee.INFO,qI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},$I=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=qI[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yo{constructor(e){this.name=e,this._logLevel=BI,this._logHandler=$I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(KI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function KI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",Kh="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Yo("@firebase/app"),GI="@firebase/app-compat",zI="@firebase/analytics-compat",WI="@firebase/analytics",HI="@firebase/app-check-compat",QI="@firebase/app-check",YI="@firebase/auth",JI="@firebase/auth-compat",XI="@firebase/database",ZI="@firebase/data-connect",eE="@firebase/database-compat",tE="@firebase/functions",nE="@firebase/functions-compat",rE="@firebase/installations",iE="@firebase/installations-compat",sE="@firebase/messaging",oE="@firebase/messaging-compat",aE="@firebase/performance",cE="@firebase/performance-compat",uE="@firebase/remote-config",lE="@firebase/remote-config-compat",hE="@firebase/storage",dE="@firebase/storage-compat",fE="@firebase/firestore",pE="@firebase/ai",mE="@firebase/firestore-compat",gE="firebase",_E="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",yE={[kc]:"fire-core",[GI]:"fire-core-compat",[WI]:"fire-analytics",[zI]:"fire-analytics-compat",[QI]:"fire-app-check",[HI]:"fire-app-check-compat",[YI]:"fire-auth",[JI]:"fire-auth-compat",[XI]:"fire-rtdb",[ZI]:"fire-data-connect",[eE]:"fire-rtdb-compat",[tE]:"fire-fn",[nE]:"fire-fn-compat",[rE]:"fire-iid",[iE]:"fire-iid-compat",[sE]:"fire-fcm",[oE]:"fire-fcm-compat",[aE]:"fire-perf",[cE]:"fire-perf-compat",[uE]:"fire-rc",[lE]:"fire-rc-compat",[hE]:"fire-gcs",[dE]:"fire-gcs-compat",[fE]:"fire-fst",[mE]:"fire-fst-compat",[pE]:"fire-vertex","fire-js":"fire-js",[gE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map,IE=new Map,Dc=new Map;function Gh(n,e){try{n.container.addComponent(e)}catch(t){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ot(n){const e=n.name;if(Dc.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,n);for(const t of vo.values())Gh(t,n);for(const t of IE.values())Gh(t,n);return!0}function qt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Te(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new vn("app","Firebase",EE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t,r){this._isDeleted=!1,this._options=Y({},e),this._config=Y({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=_E;function wE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Y({name:Nc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(t||(t=lp()),!t)throw dn.create("no-options");const s=vo.get(i);if(s){if(_n(t,s.options)&&_n(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new FI(i);for(const u of Dc.values())o.addComponent(u);const c=new TE(t,r,o);return vo.set(i,c),c}function ps(n=Nc){const e=vo.get(n);if(!e&&n===Nc&&lp())return wE();if(!e)throw dn.create("no-app",{appName:n});return e}function We(n,e,t){var o;let r=(o=yE[n])!=null?o:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(c.join(" "));return}ot(new tt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const vE="firebase-heartbeat-database",AE=1,Hi="firebase-heartbeat-store";let uc=null;function _p(){return uc||(uc=Ho(vE,AE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hi)}catch(t){}}}}).catch(n=>{throw dn.create("idb-open",{originalErrorMessage:n.message})})),uc}function RE(n){return p(this,null,function*(){try{const t=(yield _p()).transaction(Hi),r=yield t.objectStore(Hi).get(yp(n));return yield t.done,r}catch(e){if(e instanceof Tt)Mt.warn(e.message);else{const t=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(t.message)}}})}function zh(n,e){return p(this,null,function*(){try{const r=(yield _p()).transaction(Hi,"readwrite");yield r.objectStore(Hi).put(e,yp(n)),yield r.done}catch(t){if(t instanceof Tt)Mt.warn(t.message);else{const r=dn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(r.message)}}})}function yp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bE=1024,SE=30;class PE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return p(this,null,function*(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>SE){const o=NE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mt.warn(r)}})}getHeartbeatsHeader(){return p(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wh(),{heartbeatsToSend:r,unsentEntries:i}=CE(this._heartbeatsCache.heartbeats),s=wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Mt.warn(t),""}})}}function Wh(){return new Date().toISOString().substring(0,10)}function CE(n,e=bE){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Hh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class kE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return p(this,null,function*(){return fs()?gp().then(()=>!0).catch(()=>!1):!1})}read(){return p(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield RE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return zh(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return zh(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function Hh(n){return wo(JSON.stringify({version:2,heartbeats:n})).length}function NE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){ot(new tt("platform-logger",e=>new jI(e),"PRIVATE")),ot(new tt("heartbeat",e=>new PE(e),"PRIVATE")),We(kc,Kh,n),We(kc,Kh,"esm2020"),We("fire-js","")}DE("");function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VE=Ip,Ep=new vn("auth","Firebase",Ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Yo("@firebase/auth");function OE(n,...e){Ao.logLevel<=ee.WARN&&Ao.warn(`Auth (${ar}): ${n}`,...e)}function so(n,...e){Ao.logLevel<=ee.ERROR&&Ao.error(`Auth (${ar}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,...e){throw mu(n,...e)}function et(n,...e){return mu(n,...e)}function pu(n,e,t){const r=Ve(Y({},VE()),{[e]:t});return new vn("auth","Firebase",r).create(e,{appName:n.name})}function He(n){return pu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&mt(n,"argument-error"),pu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ep.create(n,...e)}function M(n,e,...t){if(!n)throw mu(e,...t)}function Vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw so(e),new Error(e)}function Lt(n,e){n||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function gu(){return Qh()==="http:"||Qh()==="https:"}function Qh(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gu()||II()||"connection"in navigator)?navigator.onLine:!0}function ME(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lt(t>e,"Short delay should be less than long delay!"),this.isMobile=_I()||EI()}get(){return xE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e){Lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UE=new ms(3e4,6e4);function Se(n,e){return n.tenantId&&!e.tenantId?Ve(Y({},e),{tenantId:n.tenantId}):e}function Pe(s,o,c,u){return p(this,arguments,function*(n,e,t,r,i={}){return wp(n,i,()=>p(this,null,function*(){let h={},f={};r&&(e==="GET"?f=r:h={body:JSON.stringify(r)});const m=zr(Y({key:n.config.apiKey},f)).slice(1),y=yield n._getAdditionalHeaders();y["Content-Type"]="application/json",n.languageCode&&(y["X-Firebase-Locale"]=n.languageCode);const b=Y({method:e,headers:y},h);return yI()||(b.referrerPolicy="no-referrer"),n.emulatorConfig&&or(n.emulatorConfig.host)&&(b.credentials="include"),Tp.fetch()(yield vp(n,n.config.apiHost,t,m),b)}))})}function wp(n,e,t){return p(this,null,function*(){n._canInitEmulator=!1;const r=Y(Y({},LE),e);try{const i=new qE(n),s=yield Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=yield s.json();if("needConfirmation"in o)throw Si(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Si(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Si(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pu(n,f,h);mt(n,f)}}catch(i){if(i instanceof Tt)throw i;mt(n,"network-request-failed",{message:String(i)})}})}function $t(s,o,c,u){return p(this,arguments,function*(n,e,t,r,i={}){const h=yield Pe(n,e,t,r,i);return"mfaPendingCredential"in h&&mt(n,"multi-factor-auth-required",{_serverResponse:h}),h})}function vp(n,e,t,r){return p(this,null,function*(){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?_u(n.config,i):`${n.config.apiScheme}://${i}`;return FE.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o})}function BE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),UE.get())})}}function Si(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n){return n!==void 0&&n.getResponse!==void 0}function Jh(n){return n!==void 0&&n.enterprise!==void 0}class Ap{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return BE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n){return p(this,null,function*(){return(yield Pe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""})}function Rp(n,e){return p(this,null,function*(){return Pe(n,"GET","/v2/recaptchaConfig",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:delete",e)})}function KE(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:update",e)})}function Ro(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function GE(n,e=!1){return p(this,null,function*(){const t=z(n),r=yield t.getIdToken(e),i=Xo(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vi(lc(i.auth_time)),issuedAtTime:Vi(lc(i.iat)),expirationTime:Vi(lc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function lc(n){return Number(n)*1e3}function Xo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const i=ap(t);return i?JSON.parse(i):(so("Failed to decode base64 JWT payload"),null)}catch(i){return so("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xh(n){const e=Xo(n);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,e,t=!1){return p(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof Tt&&zE(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function zE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>p(this,null,function*(){yield this.iteration()}),t)}iteration(){return p(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){return p(this,null,function*(){var m;const e=n.auth,t=yield n.getIdToken(),r=yield Wn(n,Ro(e,{idToken:t}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Sp(i.providerUserInfo):[],o=HE(n.providerData,s),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)})}function bp(n){return p(this,null,function*(){const e=z(n);yield Yi(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function HE(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sp(n){return n.map(r=>{var i=r,{providerId:e}=i,t=Gs(i,["providerId"]);return{providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n,e){return p(this,null,function*(){const t=yield wp(n,{},()=>p(this,null,function*(){const r=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yield vp(n,i,"/v1/token",`key=${s}`),c=yield n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&or(n.emulatorConfig.host)&&(u.credentials="include"),Tp.fetch()(o,u)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function YE(n,e){return p(this,null,function*(){return Pe(n,"POST","/v2/accounts:revokeToken",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Xh(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return p(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return p(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield QE(e,t);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Rr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,e){M(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class _t{constructor(s){var o=s,{uid:e,auth:t,stsTokenManager:r}=o,i=Gs(o,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vc(i.createdAt||void 0,i.lastLoginAt||void 0)}getIdToken(e){return p(this,null,function*(){const t=yield Wn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return GE(this,e)}reload(){return bp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Y({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _t(Ve(Y({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return p(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield Yi(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return p(this,null,function*(){if(Te(this.auth.app))return Promise.reject(He(this.auth));const e=yield this.getIdToken();return yield Wn(this,jE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Ve(Y({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Y({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var $,U,W,H,J,T,_,E;const r=($=t.displayName)!=null?$:void 0,i=(U=t.email)!=null?U:void 0,s=(W=t.phoneNumber)!=null?W:void 0,o=(H=t.photoURL)!=null?H:void 0,c=(J=t.tenantId)!=null?J:void 0,u=(T=t._redirectEventId)!=null?T:void 0,h=(_=t.createdAt)!=null?_:void 0,f=(E=t.lastLoginAt)!=null?E:void 0,{uid:m,emailVerified:y,isAnonymous:b,providerData:k,stsTokenManager:V}=t;M(m&&V,e,"internal-error");const N=Rr.fromJSON(this.name,V);M(typeof m=="string",e,"internal-error"),en(r,e.name),en(i,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof b=="boolean",e,"internal-error"),en(s,e.name),en(o,e.name),en(c,e.name),en(u,e.name),en(h,e.name),en(f,e.name);const j=new _t({uid:m,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:b,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:f});return k&&Array.isArray(k)&&(j.providerData=k.map(v=>Y({},v))),u&&(j._redirectEventId=u),j}static _fromIdTokenResponse(e,t,r=!1){return p(this,null,function*(){const i=new Rr;i.updateFromServerResponse(t);const s=new _t({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield Yi(s),s})}static _fromGetAccountInfoResponse(e,t,r){return p(this,null,function*(){const i=t.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Rr;c.updateFromIdToken(r);const u=new _t({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Map;function Ot(n){Lt(n instanceof Function,"Expected a class definition");let e=Zh.get(n);return e?(Lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return p(this,null,function*(){return!0})}_set(e,t){return p(this,null,function*(){this.storage[e]=t})}_get(e){return p(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return p(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}Pp.type="NONE";const Oc=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e,t){return`firebase:${n}:${e}:${t}`}class br{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oo(this.userKey,i.apiKey,s),this.fullPersistenceKey=oo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return p(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield Ro(this.auth,{idToken:e}).catch(()=>{});return t?_t._fromGetAccountInfoResponse(this.auth,t,e):null}return _t._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return p(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return p(this,null,function*(){if(!t.length)return new br(Ot(Oc),e,r);const i=(yield Promise.all(t.map(h=>p(this,null,function*(){if(yield h._isAvailable())return h})))).filter(h=>h);let s=i[0]||Ot(Oc);const o=oo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=yield h._get(o);if(f){let m;if(typeof f=="string"){const y=yield Ro(e,{idToken:f}).catch(()=>{});if(!y)break;m=yield _t._fromGetAccountInfoResponse(e,y,f)}else m=_t._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch(f){}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new br(s,e,r):(s=u[0],c&&(yield s._set(o,c.toJSON())),yield Promise.all(t.map(h=>p(this,null,function*(){if(h!==s)try{yield h._remove(o)}catch(f){}}))),new br(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Op(e))return"Blackberry";if(xp(e))return"Webos";if(kp(e))return"Safari";if((e.includes("chrome/")||Np(e))&&!e.includes("edge/"))return"Chrome";if(Vp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cp(n=be()){return/firefox\//i.test(n)}function kp(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Np(n=be()){return/crios\//i.test(n)}function Dp(n=be()){return/iemobile/i.test(n)}function Vp(n=be()){return/android/i.test(n)}function Op(n=be()){return/blackberry/i.test(n)}function xp(n=be()){return/webos/i.test(n)}function yu(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function JE(n=be()){var e;return yu(n)&&!!((e=window.navigator)!=null&&e.standalone)}function XE(){return TI()&&document.documentMode===10}function Mp(n=be()){return yu(n)||Vp(n)||xp(n)||Op(n)||/windows phone/i.test(n)||Dp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n,e=[]){let t;switch(n){case"Browser":t=ed(be());break;case"Worker":t=`${ed(be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ar}/${r}`}/**
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
 */class ZE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return p(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
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
 */function eT(t){return p(this,arguments,function*(n,e={}){return Pe(n,"GET","/v2/passwordPolicy",Se(n,e))})}/**
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
 */const tT=6;class nT{constructor(e){var r,i,s,o;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=t.minPasswordLength)!=null?r:tT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))!=null?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,i,s,o,c,u;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(r=t.meetsMinPasswordLength)!=null?r:!0),t.isValid&&(t.isValid=(i=t.meetsMaxPasswordLength)!=null?i:!0),t.isValid&&(t.isValid=(s=t.containsLowercaseLetter)!=null?s:!0),t.isValid&&(t.isValid=(o=t.containsUppercaseLetter)!=null?o:!0),t.isValid&&(t.isValid=(c=t.containsNumericCharacter)!=null?c:!0),t.isValid&&(t.isValid=(u=t.containsNonAlphanumericCharacter)!=null?u:!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new ZE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ep,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(()=>p(this,null,function*(){var r,i,s;if(!this._deleted&&(this.persistenceManager=yield br.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return p(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return p(this,null,function*(){try{const t=yield Ro(this,{idToken:e}),r=yield _t._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return p(this,null,function*(){var s;if(Te(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=yield this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=r==null?void 0:r._redirectEventId,u=yield this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{yield this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)})}tryRedirectSignIn(e){return p(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return p(this,null,function*(){try{yield Yi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=ME()}_delete(){return p(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return p(this,null,function*(){if(Te(this.app))return Promise.reject(He(this));const t=e?z(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return p(this,null,function*(){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>p(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return p(this,null,function*(){return Te(this.app)?Promise.reject(He(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return Te(this.app)?Promise.reject(He(this)):this.queue(()=>p(this,null,function*(){yield this.assertedPersistence.setPersistence(Ot(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return p(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return p(this,null,function*(){const e=yield eT(this),t=new nT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return p(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield YE(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}_setRedirectUser(e,t){return p(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return p(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=yield br.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return p(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>p(this,null,function*(){}))),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return p(this,null,function*(){if(e===this.currentUser)return this.queue(()=>p(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(t=this.currentUser)==null?void 0:t.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}directlySetCurrentUser(e){return p(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return p(this,null,function*(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=yield(i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=yield this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e})}_getAppCheckToken(){return p(this,null,function*(){var t;if(Te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=yield(t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken();return e!=null&&e.error&&OE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token})}}function De(n){return z(n)}class td{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs={loadJS(){return p(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iT(n){gs=n}function Iu(n){return gs.loadJS(n)}function sT(){return gs.recaptchaV2Script}function oT(){return gs.recaptchaEnterpriseScript}function aT(){return gs.gapiScript}function Fp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=500,uT=6e4,zs=1e12;class lT{constructor(e){this.auth=e,this.counter=zs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new fT(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||zs;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||zs;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}execute(e){return p(this,null,function*(){var r;const t=e||zs;return(r=this._widgets.get(t))==null||r.execute(),""})}}class hT{constructor(){this.enterprise=new dT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fT{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;M(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=pT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(r){}this.isVisible&&this.execute()},uT)},cT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function pT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const mT="recaptcha-enterprise",Oi="NO_RECAPTCHA";class Up{constructor(e){this.type=mT,this.auth=De(e)}verify(e="verify",t=!1){return p(this,null,function*(){function r(s){return p(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((o,c)=>p(this,null,function*(){Rp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ap(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})}))})}function i(s,o,c){const u=window.grecaptcha;Jh(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Oi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&Jh(window.grecaptcha))i(c,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=oT();u.length!==0&&(u+=c),Iu(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})})}}function _i(n,e,t,r=!1,i=!1){return p(this,null,function*(){const s=new Up(n);let o;if(i)o=Oi;else try{o=yield s.verify(t)}catch(u){o=yield s.verify(t,!0)}const c=Y({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c})}function fn(n,e,t,r,i){return p(this,null,function*(){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=yield _i(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(c=>p(this,null,function*(){if(c.code==="auth/missing-recaptcha-token"){const u=yield _i(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)}));else if(i==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=yield _i(n,e,t);return r(n,c).catch(u=>p(this,null,function*(){var h;if(((h=n._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){const f=yield _i(n,e,t,!1,!0);return r(n,f)}return Promise.reject(u)}))}else{const c=yield _i(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")})}function gT(n){return p(this,null,function*(){const e=De(n),t=yield Rp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ap(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Up(e).verify()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(n,e){const t=qt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(_n(s,e!=null?e:{}))return i;mt(i,"already-initialized")}return t.initialize({options:e})}function yT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xc(n,e,t){const r=De(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Bp(e),{host:o,port:c}=IT(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(_n(h,r.config.emulator)&&_n(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,or(o)?fu(`${s}//${o}${u}`):i||ET()}function Bp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function IT(n){const e=Bp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:nd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:nd(o)}}}function nd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ET(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,t){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:resetPassword",Se(n,e))})}function wT(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:update",e)})}function vT(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:signUp",e)})}function AT(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:update",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signInWithPassword",Se(n,e))})}function ea(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:sendOobCode",Se(n,e))})}function bT(n,e){return p(this,null,function*(){return ea(n,e)})}function ST(n,e){return p(this,null,function*(){return ea(n,e)})}function PT(n,e){return p(this,null,function*(){return ea(n,e)})}function CT(n,e){return p(this,null,function*(){return ea(n,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))})}function NT(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Zo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ji(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ji(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return p(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fn(e,t,"signInWithPassword",RT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return kT(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}})}_linkToIdToken(e,t){return p(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fn(e,r,"signUpPassword",vT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return NT(e,{idToken:t,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signInWithIdp",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="http://localhost";class Ct extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=c,s=Gs(c,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ct(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Sr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Sr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sr(e,t)}buildRequest(){const e={requestUri:DT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:sendVerificationCode",Se(n,e))})}function VT(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e))})}function OT(n,e){return p(this,null,function*(){const t=yield $t(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e));if(t.temporaryProof)throw Si(n,"account-exists-with-different-credential",t);return t})}const xT={USER_NOT_FOUND:"user-not-found"};function MT(n,e){return p(this,null,function*(){const t=Ve(Y({},e),{operation:"REAUTH"});return $t(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,t),xT)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Zo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new xi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new xi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return VT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return OT(e,Y({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return MT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new xi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FT(n){const e=Ri(bi(n)).link,t=e?Ri(bi(e)).deep_link_id:null,r=Ri(bi(n)).deep_link_id;return(r?Ri(bi(r)).link:null)||r||t||e||n}class ta{constructor(e){var o,c,u,h,f,m;const t=Ri(bi(e)),r=(o=t.apiKey)!=null?o:null,i=(c=t.oobCode)!=null?c:null,s=LT((u=t.mode)!=null?u:null);M(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=(h=t.continueUrl)!=null?h:null,this.languageCode=(f=t.lang)!=null?f:null,this.tenantId=(m=t.tenantId)!=null?m:null}static parseLink(e){const t=FT(e);try{return new ta(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.providerId=Ft.PROVIDER_ID}static credential(e,t){return Ji._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ta.parseLink(t);return M(r,"argument-error"),Ji._fromEmailAndCode(e,r.code,r.tenantId)}}Ft.PROVIDER_ID="password";Ft.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ft.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ye extends Hr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return M("providerId"in t&&"signInMethod"in t,"argument-error"),Ct._fromParams(t)}credential(e){return this._credential(Ve(Y({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),Ct._fromParams(Ve(Y({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ye.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ye.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!t&&!s||!c)return null;try{return new ye(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch(u){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Hr{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch(t){return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ct._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ut.credential(t,r)}catch(i){return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Hr{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch(t){return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Hr{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ht.credential(t,r)}catch(i){return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signUp",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,i=!1){return p(this,null,function*(){const s=yield _t._fromIdTokenResponse(e,r,i),o=id(r);return new kt({user:s,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return p(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=id(r);return new kt({user:e,providerId:i,_tokenResponse:r,operationType:t})})}}function id(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(n){return p(this,null,function*(){var i;if(Te(n.app))return Promise.reject(He(n));const e=De(n);if(yield e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new kt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=yield qp(e,{returnSecureToken:!0}),r=yield kt._fromIdTokenResponse(e,"signIn",t,!0);return yield e._updateCurrentUser(r.user),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Tt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!=null?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new bo(e,t,r,i)}}function $p(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(n,e){return p(this,null,function*(){const t=z(n);yield na(!0,t,e);const{providerUserInfo:r}=yield KE(t.auth,{idToken:yield t.getIdToken(),deleteProvider:[e]}),i=jp(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),yield t.auth._persistUserIfCurrent(t),t})}function Kp(n,e,t=!1){return p(this,null,function*(){const r=yield Wn(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return kt._forOperation(n,"link",r)})}function na(n,e,t){return p(this,null,function*(){yield Yi(e);const r=jp(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";M(r.has(t)===n,e.auth,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n,e,t=!1){return p(this,null,function*(){const{auth:r}=n;if(Te(r.app))return Promise.reject(He(r));const i="reauthenticate";try{const s=yield Wn(n,$p(r,i,e,n),t);M(s.idToken,r,"internal-error");const o=Xo(s.idToken);M(o,r,"internal-error");const{sub:c}=o;return M(n.uid===c,r,"user-mismatch"),kt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(n,e,t=!1){return p(this,null,function*(){if(Te(n.app))return Promise.reject(He(n));const r="signIn",i=yield $p(n,r,e),s=yield kt._fromIdTokenResponse(n,r,i);return t||(yield n._updateCurrentUser(s.user)),s})}function Eu(n,e){return p(this,null,function*(){return Gp(De(n),e)})}function zp(n,e){return p(this,null,function*(){const t=z(n);return yield na(!1,t,e.providerId),Kp(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signInWithCustomToken",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(n,e){return p(this,null,function*(){if(Te(n.app))return Promise.reject(He(n));const t=De(n),r=yield $T(t,{token:e,returnSecureToken:!0}),i=yield kt._fromIdTokenResponse(t,"signIn",r);return yield t._updateCurrentUser(i.user),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e,t){var r;M(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),M(typeof t.linkDomain=="undefined"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n){return p(this,null,function*(){const e=De(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function KT(n,e,t){return p(this,null,function*(){const r=De(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&ra(r,i,t),yield fn(r,i,"getOobCode",ST,"EMAIL_PASSWORD_PROVIDER")})}function GT(n,e,t){return p(this,null,function*(){yield TT(z(n),{oobCode:e,newPassword:t}).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Tu(n),r}))})}function zT(n,e){return p(this,null,function*(){yield AT(z(n),{oobCode:e})})}function WT(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(He(n));const r=De(n),o=yield fn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qp,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Tu(n),u}),c=yield kt._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(c.user),c})}function HT(n,e,t){return Te(n.app)?Promise.reject(He(n)):Eu(z(n),Ft.credential(e,t)).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Tu(n),r}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n,e,t){return p(this,null,function*(){const r=De(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){M(c.handleCodeInApp,r,"argument-error"),c&&ra(r,o,c)}s(i,t),yield fn(r,i,"getOobCode",PT,"EMAIL_PASSWORD_PROVIDER")})}function YT(n,e){const t=ta.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}function JT(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(He(n));const r=z(n),i=Ft.credentialWithLink(e,t||Qi());return M(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Eu(r,i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:createAuthUri",Se(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n,e){return p(this,null,function*(){const t=gu()?Qi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=yield XT(z(n),r);return i||[]})}function ew(n,e){return p(this,null,function*(){const t=z(n),i={requestType:"VERIFY_EMAIL",idToken:yield n.getIdToken()};e&&ra(t.auth,i,e);const{email:s}=yield bT(t.auth,i);s!==n.email&&(yield n.reload())})}function tw(n,e,t){return p(this,null,function*(){const r=z(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:yield n.getIdToken(),newEmail:e};t&&ra(r.auth,s,t);const{email:o}=yield CT(r.auth,s);o!==n.email&&(yield n.reload())})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e){return p(this,null,function*(){return Pe(n,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(r,i){return p(this,arguments,function*(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=z(n),c={idToken:yield s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=yield Wn(s,nw(s.auth,c));s.displayName=u.displayName||null,s.photoURL=u.photoUrl||null;const h=s.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=s.displayName,h.photoURL=s.photoURL),yield s._updateTokensIfNecessary(u)})}function iw(n,e){const t=z(n);return Te(t.auth.app)?Promise.reject(He(t.auth)):Wp(t,e,null)}function sw(n,e){return Wp(z(n),null,e)}function Wp(n,e,t){return p(this,null,function*(){const{auth:r}=n,s={idToken:yield n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=yield Wn(n,wT(r,s));yield n._updateTokensIfNecessary(o,!0)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(n){var i,s;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(s=(i=Xo(n.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Pr(r,c)}}if(!e)return null;switch(e){case"facebook.com":return new aw(r,t);case"github.com":return new cw(r,t);case"google.com":return new uw(r,t);case"twitter.com":return new lw(r,t,n.screenName||null);case"custom":case"anonymous":return new Pr(r,null);default:return new Pr(r,e,t)}}class Pr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Hp extends Pr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class aw extends Pr{constructor(e,t){super(e,"facebook.com",t)}}class cw extends Hp{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class uw extends Pr{constructor(e,t){super(e,"google.com",t)}}class lw extends Hp{constructor(e,t,r){super(e,"twitter.com",t,r)}}function hw(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:ow(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){return z(n).setPersistence(e)}function dw(n,e,t,r){return z(n).onIdTokenChanged(e,t,r)}function fw(n,e,t){return z(n).beforeAuthStateChanged(e,t)}function X0(n,e,t,r){return z(n).onAuthStateChanged(e,t,r)}function Z0(n){return z(n).signOut()}function pw(n,e){return De(n).revokeAccessToken(e)}function mw(n){return p(this,null,function*(){return z(n).delete()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n,e){return Pe(n,"POST","/v2/accounts/mfaEnrollment:start",Se(n,e))}const So="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=1e3,_w=10;class Cr extends Qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_w):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return p(this,null,function*(){yield Zt(Cr.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return p(this,null,function*(){const t=yield Zt(Cr.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return p(this,null,function*(){yield Zt(Cr.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}Cr.type="LOCAL";const Yp=Cr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends Qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jp.type="SESSION";const wu=Jp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n){return Promise.all(n.map(e=>p(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return p(this,null,function*(){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(h=>p(this,null,function*(){return h(t.origin,s)})),u=yield yw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return p(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=sa("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return window}function Ew(n){Ee().location.href=n}/**
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
 */function vu(){return typeof Ee().WorkerGlobalScope!="undefined"&&typeof Ee().importScripts=="function"}function Tw(){return p(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function ww(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function vw(){return vu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="firebaseLocalStorageDb",Aw=1,Po="firebaseLocalStorage",Zp="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oa(n,e){return n.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function Rw(){const n=indexedDB.deleteDatabase(Xp);return new _s(n).toPromise()}function Mc(){const n=indexedDB.open(Xp,Aw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Po,{keyPath:Zp})}catch(i){t(i)}}),n.addEventListener("success",()=>p(this,null,function*(){const r=n.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),yield Rw(),e(yield Mc()))}))})}function od(n,e,t){return p(this,null,function*(){const r=oa(n,!0).put({[Zp]:e,value:t});return new _s(r).toPromise()})}function bw(n,e){return p(this,null,function*(){const t=oa(n,!1).get(e),r=yield new _s(t).toPromise();return r===void 0?null:r.value})}function ad(n,e){const t=oa(n,!0).delete(e);return new _s(t).toPromise()}const Sw=800,Pw=3;class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return p(this,null,function*(){return this.db?this.db:(this.db=yield Mc(),this.db)})}_withRetries(e){return p(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>Pw)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return p(this,null,function*(){return vu()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return p(this,null,function*(){this.receiver=ia._getInstance(vw()),this.receiver._subscribe("keyChanged",(e,t)=>p(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>p(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return p(this,null,function*(){var t,r;if(this.activeServiceWorker=yield Tw(),!this.activeServiceWorker)return;this.sender=new Iw(this.activeServiceWorker);const e=yield this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return p(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||ww()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return p(this,null,function*(){try{if(!indexedDB)return!1;const e=yield Mc();return yield od(e,So,"1"),yield ad(e,So),!0}catch(e){}return!1})}_withPendingWrite(e){return p(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(r=>od(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return p(this,null,function*(){const t=yield this._withRetries(r=>bw(r,e));return this.localCache[e]=t,t})}_remove(e){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(t=>ad(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return p(this,null,function*(){const e=yield this._withRetries(i=>{const s=oa(i,!1).getAll();return new _s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>p(this,null,function*(){return this._poll()}),Sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}em.type="LOCAL";const tm=em;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n,e){return Pe(n,"POST","/v2/accounts/mfaSignIn:start",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=Fp("rcb"),Cw=new ms(3e4,6e4);class kw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ee().grecaptcha)!=null&&e.render)}load(e,t=""){return M(Nw(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Yh(Ee().grecaptcha)?Promise.resolve(Ee().grecaptcha):new Promise((r,i)=>{const s=Ee().setTimeout(()=>{i(et(e,"network-request-failed"))},Cw.get());Ee()[hc]=()=>{Ee().clearTimeout(s),delete Ee()[hc];const c=Ee().grecaptcha;if(!c||!Yh(c)){i(et(e,"internal-error"));return}const u=c.render;c.render=(h,f)=>{const m=u(h,f);return this.counter++,m},this.hostLanguage=t,r(c)};const o=`${sT()}?${zr({onload:hc,render:"explicit",hl:t})}`;Iu(o).catch(()=>{clearTimeout(s),i(et(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Ee().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Nw(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Dw{load(e){return p(this,null,function*(){return new lT(e)})}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="recaptcha",Vw={theme:"light",type:"image"};class ud{constructor(e,t,r=Y({},Vw)){this.parameters=r,this.type=Mi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=De(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;M(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Dw:new kw,this.validateStartingState()}verify(){return p(this,null,function*(){this.assertNotDestroyed();const e=yield this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ee()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}makeRenderPromise(){return p(this,null,function*(){if(yield this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId})}init(){return p(this,null,function*(){M(gu()&&!vu(),this.auth,"internal-error"),yield Ow(),this.recaptcha=yield this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=yield $E(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e})}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ow(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=xi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}function xw(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(He(n));const r=De(n),i=yield rm(r,e,z(t));return new nm(i,s=>Eu(r,s))})}function Mw(n,e,t){return p(this,null,function*(){const r=z(n);yield na(!1,r,"phone");const i=yield rm(r.auth,e,z(t));return new nm(i,s=>zp(r,s))})}function rm(n,e,t){return p(this,null,function*(){var r;if(!n._getRecaptchaConfig())try{yield gT(n)}catch(i){}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){M(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(yield fn(n,o,"mfaSmsEnrollment",(f,m)=>p(this,null,function*(){if(m.phoneEnrollmentInfo.captchaResponse===Oi){M((t==null?void 0:t.type)===Mi,f,"argument-error");const y=yield dc(f,m,t);return sd(f,y)}return sd(f,m)}),"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{M(s.type==="signin",n,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;M(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(yield fn(n,c,"mfaSmsSignIn",(m,y)=>p(this,null,function*(){if(y.phoneSignInInfo.captchaResponse===Oi){M((t==null?void 0:t.type)===Mi,m,"argument-error");const b=yield dc(m,y,t);return cd(m,b)}return cd(m,y)}),"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(yield fn(n,s,"sendVerificationCode",(h,f)=>p(this,null,function*(){if(f.captchaResponse===Oi){M((t==null?void 0:t.type)===Mi,h,"argument-error");const m=yield dc(h,f,t);return rd(h,m)}return rd(h,f)}),"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}})}function dc(n,e,t){return p(this,null,function*(){M(t.type===Mi,n,"argument-error");const r=yield t.verify();M(typeof r=="string",n,"argument-error");const i=Y({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i})}/**
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
 */function ys(n,e){return e?Ot(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lw(n){return Gp(n.auth,new Au(n),n.bypassAuthState)}function Fw(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),qT(t,new Au(n),n.bypassAuthState)}function Uw(n){return p(this,null,function*(){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Kp(t,new Au(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>p(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return p(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(c)(u))}catch(h){this.reject(h)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lw;case"linkViaPopup":case"linkViaRedirect":return Uw;case"reauthViaPopup":case"reauthViaRedirect":return Fw;default:mt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new ms(2e3,1e4);function qw(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(et(n,"operation-not-supported-in-this-environment"));const r=De(n);Jo(n,e,Wr);const i=ys(r,t);return new un(r,"signInViaPopup",e,i).executeNotNull()})}function $w(n,e,t){return p(this,null,function*(){const r=z(n);Jo(r.auth,e,Wr);const i=ys(r.auth,t);return new un(r.auth,"linkViaPopup",e,i,r).executeNotNull()})}class un extends im{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}executeNotNull(){return p(this,null,function*(){const e=yield this.execute();return M(e,this.auth,"internal-error"),e})}onExecution(){return p(this,null,function*(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=sa();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bw.get())};e()}}un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="pendingRedirect",ao=new Map;class Li extends im{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return p(this,null,function*(){let e=ao.get(this.auth._key());if(!e){try{const r=(yield Kw(this.resolver,this.auth))?yield Zt(Li.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return p(this,null,function*(){if(e.type==="signInViaRedirect")return Zt(Li.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,Zt(Li.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return p(this,null,function*(){})}cleanUp(){}}function Kw(n,e){return p(this,null,function*(){const t=am(e),r=om(n);if(!(yield r._isAvailable()))return!1;const i=(yield r._get(t))==="true";return yield r._remove(t),i})}function sm(n,e){return p(this,null,function*(){return om(n)._set(am(e),"true")})}function Gw(n,e){ao.set(n._key(),e)}function om(n){return Ot(n._redirectPersistence)}function am(n){return oo(jw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n,e,t){return Ww(n,e,t)}function Ww(n,e,t){return p(this,null,function*(){if(Te(n.app))return Promise.reject(He(n));const r=De(n);Jo(n,e,Wr),yield r._initializationPromise;const i=ys(r,t);return yield sm(i,r),i._openRedirect(r,e,"signInViaRedirect")})}function Hw(n,e,t){return Qw(n,e,t)}function Qw(n,e,t){return p(this,null,function*(){const r=z(n);Jo(r.auth,e,Wr),yield r.auth._initializationPromise;const i=ys(r.auth,t);yield na(!1,r,e.providerId),yield sm(i,r.auth);const s=yield Jw(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)})}function Yw(n,e){return p(this,null,function*(){return yield De(n)._initializationPromise,cm(n,e,!1)})}function cm(n,e,t=!1){return p(this,null,function*(){if(Te(n.app))return Promise.reject(He(n));const r=De(n),i=ys(r,e),o=yield new Li(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}function Jw(n){return p(this,null,function*(){const e=sa(`${n.uid}:::`);return n._redirectEventId=e,yield n.auth._setRedirectUser(n),yield n.auth._persistUserIfCurrent(n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=10*60*1e3;class Zw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ev(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!um(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ld(e))}saveEventToCache(e){this.cachedEventUids.add(ld(e)),this.lastProcessedEventTime=Date.now()}}function ld(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function um({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ev(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return um(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){return p(this,arguments,function*(n,e={}){return Pe(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rv=/^https?/;function iv(n){return p(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield tv(n);for(const t of e)try{if(sv(t))return}catch(r){}mt(n,"unauthorized-domain")})}function sv(n){const e=Qi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!rv.test(t))return!1;if(nv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ov=new ms(3e4,6e4);function hd(){const n=Ee().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function av(n){return new Promise((e,t)=>{var i,s,o;function r(){hd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hd(),t(et(n,"network-request-failed"))},timeout:ov.get()})}if((s=(i=Ee().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ee().gapi)!=null&&o.load)r();else{const c=Fp("iframefcb");return Ee()[c]=()=>{gapi.load?r():t(et(n,"network-request-failed"))},Iu(`${aT()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw co=null,e})}let co=null;function cv(n){return co=co||av(n),co}/**
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
 */const uv=new ms(5e3,15e3),lv="__/auth/iframe",hv="emulator/auth/iframe",dv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pv(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_u(e,hv):`https://${n.config.authDomain}/${lv}`,r={apiKey:e.apiKey,appName:n.name,v:ar},i=fv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${zr(r).slice(1)}`}function mv(n){return p(this,null,function*(){const e=yield cv(n),t=Ee().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:pv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dv,dontclear:!0},r=>new Promise((i,s)=>p(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=et(n,"network-request-failed"),c=Ee().setTimeout(()=>{s(o)},uv.get());function u(){Ee().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})})))})}/**
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
 */const gv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_v=500,yv=600,Iv="_blank",Ev="http://localhost";class dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tv(n,e,t,r=_v,i=yv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Ve(Y({},gv),{width:r.toString(),height:i.toString(),top:s,left:o}),h=be().toLowerCase();t&&(c=Np(h)?Iv:t),Cp(h)&&(e=e||Ev,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[b,k])=>`${y}${b}=${k},`,"");if(JE(h)&&c!=="_self")return wv(e||"",c),new dd(null);const m=window.open(e||"",c,f);M(m,n,"popup-blocked");try{m.focus()}catch(y){}return new dd(m)}function wv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const vv="__/auth/handler",Av="emulator/auth/handler",Rv=encodeURIComponent("fac");function fd(n,e,t,r,i,s){return p(this,null,function*(){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ar,eventId:i};if(e instanceof Wr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",bI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof Hr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=yield n._getAppCheckToken(),h=u?`#${Rv}=${encodeURIComponent(u)}`:"";return`${bv(n)}?${zr(c).slice(1)}${h}`})}function bv({config:n}){return n.emulator?_u(n,Av):`https://${n.authDomain}/${vv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="webStorageSupport";class Sv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wu,this._completeRedirectFn=cm,this._overrideRedirectResult=Gw}_openPopup(e,t,r,i){return p(this,null,function*(){var o;Lt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=yield fd(e,t,r,Qi(),i);return Tv(e,s,sa())})}_openRedirect(e,t,r,i){return p(this,null,function*(){yield this._originValidation(e);const s=yield fd(e,t,r,Qi(),i);return Ew(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return p(this,null,function*(){const t=yield mv(e),r=new Zw(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fc,{type:fc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[fc];s!==void 0&&t(!!s),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mp()||kp()||yu()}}const Pv=Sv;var pd="@firebase/auth",md="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}getToken(e){return p(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nv(n){ot(new tt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lp(n)},h=new rT(r,i,s,u);return yT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ot(new tt("auth-internal",e=>{const t=De(e.getProvider("auth").getImmediate());return(r=>new Cv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(pd,md,kv(n)),We(pd,md,"esm2020")}/**
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
 */const Dv=5*60,Vv=hp("authIdTokenMaxAge")||Dv;let gd=null;const Ov=n=>e=>p(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Vv)return;const i=t==null?void 0:t.token;gd!==i&&(gd=i,yield fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function Z(n=ps()){const e=qt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_T(n,{popupRedirectResolver:Pv,persistence:[tm,Yp,wu]}),r=hp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ov(s.toString());fw(t,o,()=>o(t.currentUser)),dw(t,c=>o(c))}}const i=cp("auth");return i&&xc(t,`http://${i}`),t}function xv(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}iT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",xv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nv("Browser");var Mv="firebase",Lv="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(Mv,Lv,"app");var _d=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pn,lm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.F=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,S){for(var I=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)I[Je-2]=arguments[Je];return _.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,E){E||(E=0);const v=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)v[w]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],w=T.g[2];let S=T.g[3],I;I=_+(S^E&(w^S))+v[0]+3614090360&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[1]+3905402710&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[2]+606105819&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[4]+4118548399&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[5]+1200080426&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[6]+2821735955&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[8]+1770035416&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[9]+2336552879&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[10]+4294925233&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(S^E&(w^S))+v[12]+1804603682&4294967295,_=E+(I<<7&4294967295|I>>>25),I=S+(w^_&(E^w))+v[13]+4254626195&4294967295,S=_+(I<<12&4294967295|I>>>20),I=w+(E^S&(_^E))+v[14]+2792965006&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(_^w&(S^_))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=_+(w^S&(E^w))+v[1]+4129170786&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[6]+3225465664&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[11]+643717713&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[5]+3593408605&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[10]+38016083&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[15]+3634488961&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[9]+568446438&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[14]+3275163606&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[3]+4107603335&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(w^S&(E^w))+v[13]+2850285829&4294967295,_=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(_^E))+v[2]+4243563512&4294967295,S=_+(I<<9&4294967295|I>>>23),I=w+(_^E&(S^_))+v[7]+1735328473&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^_&(w^S))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=_+(E^w^S)+v[5]+4294588738&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[8]+2272392833&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[11]+1839030562&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[1]+2763975236&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[4]+1272893353&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[7]+4139469664&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[13]+681279174&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[0]+3936430074&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[3]+3572445317&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(E^w^S)+v[9]+3654602809&4294967295,_=E+(I<<4&4294967295|I>>>28),I=S+(_^E^w)+v[12]+3873151461&4294967295,S=_+(I<<11&4294967295|I>>>21),I=w+(S^_^E)+v[15]+530742520&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^_)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=_+(w^(E|~S))+v[0]+4096336452&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[7]+1126891415&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[14]+2878612391&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[12]+1700485571&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[3]+2399980690&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[10]+4293915773&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[8]+1873313359&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[15]+4264355552&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[6]+2734768916&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=_+(w^(E|~S))+v[4]+4149444226&4294967295,_=E+(I<<6&4294967295|I>>>26),I=S+(E^(_|~w))+v[11]+3174756917&4294967295,S=_+(I<<10&4294967295|I>>>22),I=w+(_^(S|~E))+v[2]+718787259&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const E=_-this.blockSize,v=this.C;let w=this.h,S=0;for(;S<_;){if(w==0)for(;S<=E;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(v[w++]=T.charCodeAt(S++),w==this.blockSize){i(this,v),w=0;break}}else for(;S<_;)if(v[w++]=T[S++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[_++]=this.g[E]>>>v&255;return T};function s(T,_){var E=c;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function o(T,_){this.h=_;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const S=T[w]|0;v&&S==_||(E[w]=S,v=!1)}this.g=E}var c={};function u(T){return-128<=T&&T<128?s(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return N(h(-T));const _=[];let E=1;for(let v=0;T>=E;v++)_[v]=T/E|0,E*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return N(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let v=m;for(let S=0;S<T.length;S+=8){var w=Math.min(8,T.length-S);const I=parseInt(T.substring(S,S+w),_);w<8?(w=h(Math.pow(_,w)),v=v.j(w).add(h(I))):(v=v.j(E),v=v.add(h(I)))}return v}var m=u(0),y=u(1),b=u(16777216);n=o.prototype,n.m=function(){if(V(this))return-N(this).m();let T=0,_=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(V(this))return"-"+N(this).toString(T);const _=h(Math.pow(T,6));var E=this;let v="";for(;;){const w=W(E,_).g;E=j(E,w.j(_));let S=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,k(E))return S+v;for(;S.length<6;)S="0"+S;v=S+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=j(this,T),V(T)?-1:k(T)?0:1};function N(T){const _=T.g.length,E=[];for(let v=0;v<_;v++)E[v]=~T.g[v];return new o(E,~T.h).add(y)}n.abs=function(){return V(this)?N(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=_;w++){let S=v+(this.i(w)&65535)+(T.i(w)&65535),I=(S>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,S&=65535,I&=65535,E[w]=I<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function j(T,_){return T.add(N(_))}n.j=function(T){if(k(this)||k(T))return m;if(V(this))return V(T)?N(this).j(N(T)):N(N(this).j(T));if(V(T))return N(this.j(N(T)));if(this.l(b)<0&&T.l(b)<0)return h(this.m()*T.m());const _=this.g.length+T.g.length,E=[];for(var v=0;v<2*_;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const S=this.i(v)>>>16,I=this.i(v)&65535,Je=T.i(w)>>>16,zt=T.i(w)&65535;E[2*v+2*w]+=I*zt,$(E,2*v+2*w),E[2*v+2*w+1]+=S*zt,$(E,2*v+2*w+1),E[2*v+2*w+1]+=I*Je,$(E,2*v+2*w+1),E[2*v+2*w+2]+=S*Je,$(E,2*v+2*w+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function $(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function U(T,_){this.g=T,this.h=_}function W(T,_){if(k(_))throw Error("division by zero");if(k(T))return new U(m,m);if(V(T))return _=W(N(T),_),new U(N(_.g),N(_.h));if(V(_))return _=W(T,N(_)),new U(N(_.g),_.h);if(T.g.length>30){if(V(T)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var E=y,v=_;v.l(T)<=0;)E=H(E),v=H(v);var w=J(E,1),S=J(v,1);for(v=J(v,2),E=J(E,2);!k(v);){var I=S.add(v);I.l(T)<=0&&(w=w.add(E),S=I),v=J(v,1),E=J(E,1)}return _=j(T,w.j(_)),new U(w,_)}for(w=m;T.l(_)>=0;){for(E=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),S=h(E),I=S.j(_);V(I)||I.l(T)>0;)E-=v,S=h(E),I=S.j(_);k(S)&&(S=y),w=w.add(S),T=j(T,I)}return new U(w,T)}n.B=function(T){return W(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function H(T){const _=T.g.length+1,E=[];for(let v=0;v<_;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function J(T,_){const E=_>>5;_%=32;const v=T.g.length-E,w=[];for(let S=0;S<v;S++)w[S]=_>0?T.i(S+E)>>>_|T.i(S+E+1)<<32-_:T.i(S+E);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,lm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,pn=o}).apply(typeof _d!="undefined"?_d:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Hs=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hm,Pi,dm,uo,Lc,fm,pm,mm;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hs=="object"&&Hs];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,l){if(l)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],l=l(g),l!=g&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,d){return a.call.apply(a.bind,arguments)}function h(a,l,d){return h=u,h.apply(null,arguments)}function f(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,l){function d(){}d.prototype=l.prototype,a.Z=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,P){for(var x=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)x[Q-2]=arguments[Q];return l.prototype[A].apply(g,x)}}var y=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function b(a){const l=a.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=a[g];return d}return[]}function k(a,l){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const P=A.length||0;a.length=d+P;for(let x=0;x<P;x++)a[d+x]=A[x]}else a.push(A)}}class V{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function N(a){o.setTimeout(()=>{throw a},0)}function j(){var a=T;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ${constructor(){this.h=this.g=null}add(l,d){const g=U.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var U=new V(()=>new W,a=>a.reset());class W{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let H,J=!1,T=new $,_=()=>{const a=Promise.resolve(void 0);H=()=>{a.then(E)}};function E(){for(var a;a=j();){try{a.h.call(a.g)}catch(d){N(d)}var l=U;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}J=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,l),o.removeEventListener("test",d,l)}catch(d){}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Je(a,l){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}m(Je,w),Je.prototype.init=function(a,l){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Je.Z.h.call(this)},Je.prototype.h=function(){Je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var zt="closure_listenable_"+(Math.random()*1e6|0),Ry=0;function by(a,l,d,g,A){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=A,this.key=++Ry,this.da=this.fa=!1}function Cs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ks(a,l,d){for(const g in a)l.call(d,a[g],g,a)}function Sy(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function Fl(a){const l={};for(const d in a)l[d]=a[d];return l}const Ul="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bl(a,l){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let P=0;P<Ul.length;P++)d=Ul[P],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Ns(a){this.src=a,this.g={},this.h=0}Ns.prototype.add=function(a,l,d,g,A){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const x=La(a,l,g,A);return x>-1?(l=a[x],d||(l.fa=!1)):(l=new by(l,this.src,P,!!g,A),l.fa=d,a.push(l)),l};function Ma(a,l){const d=l.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,l,void 0),P;(P=A>=0)&&Array.prototype.splice.call(g,A,1),P&&(Cs(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function La(a,l,d,g){for(let A=0;A<a.length;++A){const P=a[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return A}return-1}var Fa="closure_lm_"+(Math.random()*1e6|0),Ua={};function ql(a,l,d,g,A){if(g&&g.once)return jl(a,l,d,g,A);if(Array.isArray(l)){for(let P=0;P<l.length;P++)ql(a,l[P],d,g,A);return null}return d=ja(d),a&&a[zt]?a.J(l,d,c(g)?!!g.capture:!!g,A):$l(a,l,d,!1,g,A)}function $l(a,l,d,g,A,P){if(!l)throw Error("Invalid event type");const x=c(A)?!!A.capture:!!A;let Q=qa(a);if(Q||(a[Fa]=Q=new Ns(a)),d=Q.add(l,d,g,x,P),d.proxy)return d;if(g=Py(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(A=x),A===void 0&&(A=!1),a.addEventListener(l.toString(),g,A);else if(a.attachEvent)a.attachEvent(Gl(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Py(){function a(d){return l.call(a.src,a.listener,d)}const l=Cy;return a}function jl(a,l,d,g,A){if(Array.isArray(l)){for(let P=0;P<l.length;P++)jl(a,l[P],d,g,A);return null}return d=ja(d),a&&a[zt]?a.K(l,d,c(g)?!!g.capture:!!g,A):$l(a,l,d,!0,g,A)}function Kl(a,l,d,g,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)Kl(a,l[P],d,g,A);else g=c(g)?!!g.capture:!!g,d=ja(d),a&&a[zt]?(a=a.i,P=String(l).toString(),P in a.g&&(l=a.g[P],d=La(l,d,g,A),d>-1&&(Cs(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete a.g[P],a.h--)))):a&&(a=qa(a))&&(l=a.g[l.toString()],a=-1,l&&(a=La(l,d,g,A)),(d=a>-1?l[a]:null)&&Ba(d))}function Ba(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[zt])Ma(l.i,a);else{var d=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(d,g,a.capture):l.detachEvent?l.detachEvent(Gl(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=qa(l))?(Ma(d,a),d.h==0&&(d.src=null,l[Fa]=null)):Cs(a)}}}function Gl(a){return a in Ua?Ua[a]:Ua[a]="on"+a}function Cy(a,l){if(a.da)a=!0;else{l=new Je(l,this);const d=a.listener,g=a.ha||a.src;a.fa&&Ba(a),a=d.call(g,l)}return a}function qa(a){return a=a[Fa],a instanceof Ns?a:null}var $a="__closure_events_fn_"+(Math.random()*1e9>>>0);function ja(a){return typeof a=="function"?a:(a[$a]||(a[$a]=function(l){return a.handleEvent(l)}),a[$a])}function Le(){v.call(this),this.i=new Ns(this),this.M=this,this.G=null}m(Le,v),Le.prototype[zt]=!0,Le.prototype.removeEventListener=function(a,l,d,g){Kl(this,a,l,d,g)};function je(a,l){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new w(l,a);else if(l instanceof w)l.target=l.target||a;else{var A=l;l=new w(g,a),Bl(l,A)}A=!0;let P,x;if(d)for(x=d.length-1;x>=0;x--)P=l.g=d[x],A=Ds(P,g,!0,l)&&A;if(P=l.g=a,A=Ds(P,g,!0,l)&&A,A=Ds(P,g,!1,l)&&A,d)for(x=0;x<d.length;x++)P=l.g=d[x],A=Ds(P,g,!1,l)&&A}Le.prototype.N=function(){if(Le.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const d=a.g[l];for(let g=0;g<d.length;g++)Cs(d[g]);delete a.g[l],a.h--}}this.G=null},Le.prototype.J=function(a,l,d,g){return this.i.add(String(a),l,!1,d,g)},Le.prototype.K=function(a,l,d,g){return this.i.add(String(a),l,!0,d,g)};function Ds(a,l,d,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let P=0;P<l.length;++P){const x=l[P];if(x&&!x.da&&x.capture==d){const Q=x.listener,Ae=x.ha||x.src;x.fa&&Ma(a.i,x),A=Q.call(Ae,g)!==!1&&A}}return A&&!g.defaultPrevented}function ky(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function zl(a){a.g=ky(()=>{a.g=null,a.i&&(a.i=!1,zl(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Ny extends v{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:zl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(a){v.call(this),this.h=a,this.g={}}m(ti,v);var Wl=[];function Hl(a){ks(a.g,function(l,d){this.g.hasOwnProperty(d)&&Ba(l)},a),a.g={}}ti.prototype.N=function(){ti.Z.N.call(this),Hl(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ka=o.JSON.stringify,Dy=o.JSON.parse,Vy=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ql(){}function Yl(){}var ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ga(){w.call(this,"d")}m(Ga,w);function za(){w.call(this,"c")}m(za,w);var bn={},Jl=null;function Vs(){return Jl=Jl||new Le}bn.Ia="serverreachability";function Xl(a){w.call(this,bn.Ia,a)}m(Xl,w);function ri(a){const l=Vs();je(l,new Xl(l))}bn.STAT_EVENT="statevent";function Zl(a,l){w.call(this,bn.STAT_EVENT,a),this.stat=l}m(Zl,w);function Ke(a){const l=Vs();je(l,new Zl(l,a))}bn.Ja="timingevent";function eh(a,l){w.call(this,bn.Ja,a),this.size=l}m(eh,w);function ii(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function si(){this.g=!0}si.prototype.ua=function(){this.g=!1};function Oy(a,l,d,g,A,P){a.info(function(){if(a.g)if(P){var x="",Q=P.split("&");for(let ce=0;ce<Q.length;ce++){var Ae=Q[ce].split("=");if(Ae.length>1){const ke=Ae[0];Ae=Ae[1];const vt=ke.split("_");x=vt.length>=2&&vt[1]=="type"?x+(ke+"="+Ae+"&"):x+(ke+"=redacted&")}}}else x=null;else x=P;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+l+`
`+d+`
`+x})}function xy(a,l,d,g,A,P,x){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+x})}function lr(a,l,d,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ly(a,d)+(g?" "+g:"")})}function My(a,l){a.info(function(){return"TIMEOUT: "+l})}si.prototype.info=function(){};function Ly(a,l){if(!a.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let x=1;x<g.length;x++)g[x]=""}}}}return Ka(P)}catch(P){return l}}var Os={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},th={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nh;function Wa(){}m(Wa,Ql),Wa.prototype.g=function(){return new XMLHttpRequest},nh=new Wa;function oi(a){return encodeURIComponent(String(a))}function Fy(a){var l=1;a=a.split(":");const d=[];for(;l>0&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function Wt(a,l,d,g){this.j=a,this.i=l,this.l=d,this.S=g||1,this.V=new ti(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new rh}function rh(){this.i=null,this.g="",this.h=!1}var ih={},Ha={};function Qa(a,l,d){a.M=1,a.A=Ms(wt(l)),a.u=d,a.R=!0,sh(a,null)}function sh(a,l){a.F=Date.now(),xs(a),a.B=wt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),yh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new rh,a.g=Mh(a.j,d?l:null,!a.u),a.P>0&&(a.O=new Ny(h(a.Y,a,a.g),a.P)),l=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Wl[0]=A.toString()),A=Wl);for(let P=0;P<A.length;P++){const x=ql(d,A[P],g||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.J?Fl(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),ri(),Oy(a.i,a.v,a.B,a.l,a.S,a.u)}Wt.prototype.ba=function(a){a=a.target;const l=this.O;l&&Yt(a)==3?l.j():this.Y(a)},Wt.prototype.Y=function(a){try{if(a==this.g)e:{const Q=Yt(this.g),Ae=this.g.ya(),ce=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Rh(this.g)))){this.K||Q!=4||Ae==7||(Ae==8||ce<=0?ri(3):ri(2)),Ya(this);var l=this.g.ca();this.X=l;var d=Uy(this);if(this.o=l==200,xy(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var P=g;break t}}P=null}if(a=P)lr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ja(this,a);else{this.o=!1,this.m=3,Ke(12),Sn(this),ai(this);break e}}if(this.R){a=!0;let ke;for(;!this.K&&this.C<d.length;)if(ke=By(this,d),ke==Ha){Q==4&&(this.m=4,Ke(14),a=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==ih){this.m=4,Ke(15),lr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else lr(this.i,this.l,ke,null),Ja(this,ke);if(oh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,Ke(16),a=!1),this.o=this.o&&a,!a)lr(this.i,this.l,d,"[Invalid Chunked Response]"),Sn(this),ai(this);else if(d.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),sc(x),x.P=!0,Ke(11))}}else lr(this.i,this.l,d,null),Ja(this,d);Q==4&&Sn(this),this.o&&!this.K&&(Q==4?Dh(this.j,this):(this.o=!1,xs(this)))}else eI(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),Sn(this),ai(this)}}}catch(Q){}finally{}};function Uy(a){if(!oh(a))return a.g.la();const l=Rh(a.g);if(l==="")return"";let d="";const g=l.length,A=Yt(a.g)==4;if(!a.h.i){if(typeof TextDecoder=="undefined")return Sn(a),ai(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<g;P++)a.h.h=!0,d+=a.h.i.decode(l[P],{stream:!(A&&P==g-1)});return l.length=0,a.h.g+=d,a.C=0,a.h.g}function oh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function By(a,l){var d=a.C,g=l.indexOf(`
`,d);return g==-1?Ha:(d=Number(l.substring(d,g)),isNaN(d)?ih:(g+=1,g+d>l.length?Ha:(l=l.slice(g,g+d),a.C=g+d,l)))}Wt.prototype.cancel=function(){this.K=!0,Sn(this)};function xs(a){a.T=Date.now()+a.H,ah(a,a.H)}function ah(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ii(h(a.aa,a),l)}function Ya(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(My(this.i,this.B),this.M!=2&&(ri(),Ke(17)),Sn(this),this.m=2,ai(this)):ah(this,this.T-a)};function ai(a){a.j.I==0||a.K||Dh(a.j,a)}function Sn(a){Ya(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Hl(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Ja(a,l){try{var d=a.j;if(d.I!=0&&(d.g==a||Xa(d.h,a))){if(!a.L&&Xa(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch(ce){g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)qs(d),Us(d);else break e;ic(d),Ke(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ii(h(d.Va,d),6e3));lh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Cn(d,11)}else if((a.L||d.g==a)&&qs(d),!I(l))for(A=d.Ba.g.parse(l),l=0;l<A.length;l++){let ce=A[l];const ke=ce[0];if(!(ke<=d.K))if(d.K=ke,ce=ce[1],d.I==2)if(ce[0]=="c"){d.M=ce[1],d.ba=ce[2];const vt=ce[3];vt!=null&&(d.ka=vt,d.j.info("VER="+d.ka));const kn=ce[4];kn!=null&&(d.za=kn,d.j.info("SVER="+d.za));const Jt=ce[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(g=1.5*Jt,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Xt=a.g;if(Xt){const js=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var P=g.h;P.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Za(P,P.h),P.h=null))}if(g.G){const oc=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;oc&&(g.wa=oc,ue(g.J,g.G,oc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var x=a;if(g.na=xh(g,g.L?g.ba:null,g.W),x.L){hh(g.h,x);var Q=x,Ae=g.O;Ae&&(Q.H=Ae),Q.D&&(Ya(Q),xs(Q)),g.g=x}else kh(g);d.i.length>0&&Bs(d)}else ce[0]!="stop"&&ce[0]!="close"||Cn(d,7);else d.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Cn(d,7):rc(d):ce[0]!="noop"&&d.l&&d.l.qa(ce),d.A=0)}}ri(4)}catch(ce){}}var qy=class{constructor(a,l){this.g=a,this.map=l}};function ch(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function uh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lh(a){return a.h?1:a.g?a.g.size:0}function Xa(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Za(a,l){a.g?a.g.add(l):a.h=l}function hh(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}ch.prototype.cancel=function(){if(this.i=dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.G);return l}return b(a.i)}var fh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $y(a,l){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,P=null;g>=0?(A=a[d].substring(0,g),P=a[d].substring(g+1)):A=a[d],l(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ht(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Ht?(this.l=a.l,ci(this,a.j),this.o=a.o,this.g=a.g,ui(this,a.u),this.h=a.h,ec(this,Ih(a.i)),this.m=a.m):a&&(l=String(a).match(fh))?(this.l=!1,ci(this,l[1]||"",!0),this.o=li(l[2]||""),this.g=li(l[3]||"",!0),ui(this,l[4]),this.h=li(l[5]||"",!0),ec(this,l[6]||"",!0),this.m=li(l[7]||"")):(this.l=!1,this.i=new di(null,this.l))}Ht.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(hi(l,ph,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(hi(l,ph,!0),"@"),a.push(oi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(hi(d,d.charAt(0)=="/"?Gy:Ky,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",hi(d,Wy)),a.join("")},Ht.prototype.resolve=function(a){const l=wt(this);let d=!!a.j;d?ci(l,a.j):d=!!a.o,d?l.o=a.o:d=!!a.g,d?l.g=a.g:d=a.u!=null;var g=a.h;if(d)ui(l,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=l.h.lastIndexOf("/");A!=-1&&(g=l.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let x=0;x<A.length;){const Q=A[x++];Q=="."?g&&x==A.length&&P.push(""):Q==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&x==A.length&&P.push("")):(P.push(Q),g=!0)}g=P.join("/")}else g=A}return d?l.h=g:d=a.i.toString()!=="",d?ec(l,Ih(a.i)):d=!!a.m,d&&(l.m=a.m),l};function wt(a){return new Ht(a)}function ci(a,l,d){a.j=d?li(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function ui(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function ec(a,l,d){l instanceof di?(a.i=l,Hy(a.i,a.l)):(d||(l=hi(l,zy)),a.i=new di(l,a.l))}function ue(a,l,d){a.i.set(l,d)}function Ms(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function li(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hi(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,jy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ph=/[#\/\?@]/g,Ky=/[#\?:]/g,Gy=/[#\?]/g,zy=/[#\?@]/g,Wy=/#/g;function di(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&$y(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=di.prototype,n.add=function(a,l){Pn(this),this.i=null,a=hr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function mh(a,l){Pn(a),l=hr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function gh(a,l){return Pn(a),l=hr(a,l),a.g.has(l)}n.forEach=function(a,l){Pn(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(l,A,g,this)},this)},this)};function _h(a,l){Pn(a);let d=[];if(typeof l=="string")gh(a,l)&&(d=d.concat(a.g.get(hr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)d=d.concat(a[l]);return d}n.set=function(a,l){return Pn(this),this.i=null,a=hr(this,a),gh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=_h(this,a),a.length>0?String(a[0]):l):l};function yh(a,l,d){mh(a,l),d.length>0&&(a.i=null,a.g.set(hr(a,l),b(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const A=oi(d);d=_h(this,d);for(let P=0;P<d.length;P++){let x=A;d[P]!==""&&(x+="="+oi(d[P])),a.push(x)}}return this.i=a.join("&")};function Ih(a){const l=new di;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function hr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Hy(a,l){l&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(mh(this,g),yh(this,A,d))},a)),a.j=l}function Qy(a,l){const d=new si;if(o.Image){const g=new Image;g.onload=f(Qt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(Qt,d,"TestLoadImage: error",!1,l,g),g.onabort=f(Qt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(Qt,d,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function Yy(a,l){const d=new si,g=new AbortController,A=setTimeout(()=>{g.abort(),Qt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(A),P.ok?Qt(d,"TestPingServer: ok",!0,l):Qt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Qt(d,"TestPingServer: error",!1,l)})}function Qt(a,l,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch(P){}}function Jy(){this.g=new Vy}function tc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(tc,Ql),tc.prototype.g=function(){return new Ls(this.i,this.h)};function Ls(a,l){Le.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ls,Le),n=Ls.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,pi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?fi(this):pi(this),this.readyState==3&&Eh(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,fi(this))},n.Na=function(a){this.g&&(this.response=a,fi(this))},n.ga=function(){this.g&&fi(this)};function fi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,pi(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Th(a){let l="";return ks(a,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function nc(a,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Th(d),typeof a=="string"?d!=null&&oi(d):ue(a,l,d))}function fe(a){Le.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(fe,Le);var Xy=/^https?$/i,Zy=["POST","PUT"];n=fe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nh.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){wh(this,P);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Zy,l,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of d)this.g.setRequestHeader(P,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){wh(this,P)}};function wh(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,vh(a),Fs(a)}function vh(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,je(this,"complete"),je(this,"abort"),Fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fs(this,!0)),fe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ah(this):this.Xa())},n.Xa=function(){Ah(this)};function Ah(a){if(a.h&&typeof s!="undefined"){if(a.v&&Yt(a)==4)setTimeout(a.Ca.bind(a),0);else if(je(a,"readystatechange"),Yt(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=P===0){let x=String(a.D).match(fh)[1]||null;!x&&o.self&&o.self.location&&(x=o.self.location.protocol.slice(0,-1)),g=!Xy.test(x?x.toLowerCase():"")}d=g}if(d)je(a,"complete"),je(a,"success");else{a.o=6;try{var A=Yt(a)>2?a.g.statusText:""}catch(x){A=""}a.l=A+" ["+a.ca()+"]",vh(a)}}finally{Fs(a)}}}}function Fs(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,l||je(a,"ready");try{d.onreadystatechange=null}catch(g){}}}n.isActive=function(){return!!this.g};function Yt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch(a){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Dy(l)}};function Rh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(l){return null}}function eI(a){const l={};a=(a.g&&Yt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var d=Fy(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}Sy(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function bh(a){this.za=0,this.i=[],this.j=new si,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mi("baseRetryDelayMs",5e3,a),this.Za=mi("retryDelaySeedMs",1e4,a),this.Ta=mi("forwardChannelMaxRetries",2,a),this.va=mi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ch(a&&a.concurrentRequestLimit),this.Ba=new Jy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=bh.prototype,n.ka=8,n.I=1,n.connect=function(a,l,d,g){Ke(0),this.W=a,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=xh(this,null,this.W),Bs(this)};function rc(a){if(Sh(a),a.I==3){var l=a.V++,d=wt(a.J);if(ue(d,"SID",a.M),ue(d,"RID",l),ue(d,"TYPE","terminate"),gi(a,d),l=new Wt(a,a.j,l),l.M=2,l.A=Ms(wt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(l.A.toString(),"")}catch(g){}!d&&o.Image&&(new Image().src=l.A,d=!0),d||(l.g=Mh(l.j,null),l.g.ea(l.A)),l.F=Date.now(),xs(l)}Oh(a)}function Us(a){a.g&&(sc(a),a.g.cancel(),a.g=null)}function Sh(a){Us(a),a.v&&(o.clearTimeout(a.v),a.v=null),qs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Bs(a){if(!uh(a.h)&&!a.m){a.m=!0;var l=a.Ea;H||_(),J||(H(),J=!0),T.add(l,a),a.D=0}}function tI(a,l){return lh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ii(h(a.Ea,a,l),Vh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Wt(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Fl(P),Bl(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Ch(this,A,l),d=wt(this.J),ue(d,"RID",a),ue(d,"CVER",22),this.G&&ue(d,"X-HTTP-Session-Id",this.G),gi(this,d),P&&(this.R?l="headers="+oi(Th(P))+"&"+l:this.u&&nc(d,this.u,P)),Za(this.h,A),this.Ra&&ue(d,"TYPE","init"),this.S?(ue(d,"$req",l),ue(d,"SID","null"),A.U=!0,Qa(A,d,null)):Qa(A,d,l),this.I=2}}else this.I==3&&(a?Ph(this,a):this.i.length==0||uh(this.h)||Ph(this))};function Ph(a,l){var d;l?d=l.l:d=a.V++;const g=wt(a.J);ue(g,"SID",a.M),ue(g,"RID",d),ue(g,"AID",a.K),gi(a,g),a.u&&a.o&&nc(g,a.u,a.o),d=new Wt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Ch(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Za(a.h,d),Qa(d,g,l)}function gi(a,l){a.H&&ks(a.H,function(d,g){ue(l,g,d)}),a.l&&ks({},function(d,g){ue(l,g,d)})}function Ch(a,l,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var A=a.i;let Q=-1;for(;;){const Ae=["count="+d];Q==-1?d>0?(Q=A[0].g,Ae.push("ofs="+Q)):Q=0:Ae.push("ofs="+Q);let ce=!0;for(let ke=0;ke<d;ke++){var P=A[ke].g;const vt=A[ke].map;if(P-=Q,P<0)Q=Math.max(0,A[ke].g-100),ce=!1;else try{P="req"+P+"_"||"";try{var x=vt instanceof Map?vt:Object.entries(vt);for(const[kn,Jt]of x){let Xt=Jt;c(Jt)&&(Xt=Ka(Jt)),Ae.push(P+kn+"="+encodeURIComponent(Xt))}}catch(kn){throw Ae.push(P+"type="+encodeURIComponent("_badmap")),kn}}catch(kn){g&&g(vt)}}if(ce){x=Ae.join("&");break e}}x=void 0}return a=a.i.splice(0,d),l.G=a,x}function kh(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;H||_(),J||(H(),J=!0),T.add(l,a),a.A=0}}function ic(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ii(h(a.Da,a),Vh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Nh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ii(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),Us(this),Nh(this))};function sc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nh(a){a.g=new Wt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=wt(a.na);ue(l,"RID","rpc"),ue(l,"SID",a.M),ue(l,"AID",a.K),ue(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(l,"TO",a.ia),ue(l,"TYPE","xmlhttp"),gi(a,l),a.u&&a.o&&nc(l,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ms(wt(l)),d.u=null,d.R=!0,sh(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Us(this),ic(this),Ke(19))};function qs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Dh(a,l){var d=null;if(a.g==l){qs(a),sc(a),a.g=null;var g=2}else if(Xa(a.h,l))d=l.G,hh(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var A=a.D;g=Vs(),je(g,new eh(g,d)),Bs(a)}else kh(a);else if(A=l.m,A==3||A==0&&l.X>0||!(g==1&&tI(a,l)||g==2&&ic(a)))switch(d&&d.length>0&&(l=a.h,l.i=l.i.concat(d)),A){case 1:Cn(a,5);break;case 4:Cn(a,10);break;case 3:Cn(a,6);break;default:Cn(a,2)}}}function Vh(a,l){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*l}function Cn(a,l){if(a.j.info("Error code "+l),l==2){var d=h(a.bb,a),g=a.Ua;const A=!g;g=new Ht(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ci(g,"https"),Ms(g),A?Qy(g.toString(),d):Yy(g.toString(),d)}else Ke(2);a.I=0,a.l&&a.l.pa(l),Oh(a),Sh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Oh(a){if(a.I=0,a.ja=[],a.l){const l=dh(a.h);(l.length!=0||a.i.length!=0)&&(k(a.ja,l),k(a.ja,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.oa()}}function xh(a,l,d){var g=d instanceof Ht?wt(d):new Ht(d);if(g.g!="")l&&(g.g=l+"."+g.g),ui(g,g.u);else{var A=o.location;g=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const P=new Ht(null);g&&ci(P,g),l&&(P.g=l),A&&ui(P,A),d&&(P.h=d),g=P}return d=a.G,l=a.wa,d&&l&&ue(g,d,l),ue(g,"VER",a.ka),gi(a,g),g}function Mh(a,l,d){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new fe(new tc({ab:d})):new fe(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lh(){}n=Lh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function $s(){}$s.prototype.g=function(a,l){return new nt(a,l)};function nt(a,l){Le.call(this),this.g=new bh(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!I(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!I(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new dr(this)}m(nt,Le),nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){rc(this.g)},nt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ka(a),a=d);l.i.push(new qy(l.Ya++,a)),l.I==3&&Bs(l)},nt.prototype.N=function(){this.g.l=null,delete this.j,rc(this.g),delete this.g,nt.Z.N.call(this)};function Fh(a){Ga.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}m(Fh,Ga);function Uh(){za.call(this),this.status=1}m(Uh,za);function dr(a){this.g=a}m(dr,Lh),dr.prototype.ra=function(){je(this.g,"a")},dr.prototype.qa=function(a){je(this.g,new Fh(a))},dr.prototype.pa=function(a){je(this.g,new Uh)},dr.prototype.oa=function(){je(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,mm=function(){return new $s},pm=function(){return Vs()},fm=bn,Lc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,uo=Os,th.COMPLETE="complete",dm=th,Yl.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",Le.prototype.listen=Le.prototype.J,Pi=Yl,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,hm=fe}).apply(typeof Hs!="undefined"?Hs:typeof self!="undefined"?self:typeof window!="undefined"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr="12.11.0";function Fv(n){Qr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Hn=new Yo("@firebase/firestore");function Ir(){return Hn.logLevel}function D(n,...e){if(Hn.logLevel<=ee.DEBUG){const t=e.map(Ru);Hn.debug(`Firestore (${Qr}): ${n}`,...t)}}function ze(n,...e){if(Hn.logLevel<=ee.ERROR){const t=e.map(Ru);Hn.error(`Firestore (${Qr}): ${n}`,...t)}}function yn(n,...e){if(Hn.logLevel<=ee.WARN){const t=e.map(Ru);Hn.warn(`Firestore (${Qr}): ${n}`,...t)}}function Ru(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,gm(n,r,t)}function gm(n,e,t){let r=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(i){r+=" CONTEXT: "+t}throw ze(r),new Error(r)}function B(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||gm(e,i,r)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class Bv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qv{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){B(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(()=>p(this,null,function*(){yield u.promise,yield i(this.currentUser)}))},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string",31837,{l:r}),new _m(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class $v{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class jv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new $v(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){B(this.o===void 0,3512);const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(B(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Gv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function Fc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return pc(i)===pc(s)?G(i,s):pc(i)?1:-1}return G(n.length,e.length)}const zv=55296,Wv=57343;function pc(n){const e=n.charCodeAt(0);return e>=zv&&e<=Wv}function Dr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function ym(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="__name__";class At{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return At.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof At?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=At.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return G(e.length,t.length)}static compareSegments(e,t){const r=At.isNumericId(e),i=At.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?At.extractNumericId(e).compare(At.extractNumericId(t)):Fc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pn.fromString(e.substring(4,e.length-2))}}class ie extends At{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const Hv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends At{construct(e,t,r){return new de(e,t,r)}static isValidIdentifier(e){return Hv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Id}static keyField(){return new de([Id])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Im(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qv(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ed(n){if(!L.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Td(n){if(L.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Em(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function aa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function qe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=aa(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Yv(n,e){if(e<=0)throw new O(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function we(n,e){const t={typeString:n};return e&&(t.value=e),t}function Is(n,e){if(!Em(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=-62135596800,vd=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*vd);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wd)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vd}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Is(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:we("string",se._jsonSchemaVersion),seconds:we("number"),nanoseconds:we("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xi=-1;class Co{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Uc(n){return n.fields.find(e=>e.kind===2)}function Vn(n){return n.fields.filter(e=>e.kind!==2)}Co.UNKNOWN_ID=-1;class lo{constructor(e,t){this.fieldPath=e,this.kind=t}}class Zi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Zi(0,at.min())}}function Jv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new at(i,L.empty(),e)}function Tm(n){return new at(n.readTime,n.key,Xi)}class at{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new at(q.min(),L.empty(),Xi)}static max(){return new at(q.max(),L.empty(),Xi)}}function Su(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n){return p(this,null,function*(){if(n.code!==C.FAILED_PRECONDITION||n.message!==wm)throw n;D("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(i=>i?R.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new R((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new R((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="SimpleDb";class ca{static open(e,t,r,i){try{return new ca(t,e.transaction(i,r))}catch(s){throw new Fi(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new yt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Fi(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=Pu(r.target.error);this.S.reject(new Fi(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D(rt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Zv(t)}}class mn{static delete(e){return D(rt,"Removing database:",e),xn(du().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!fs())return!1;if(mn.F())return!0;const e=be(),t=mn.M(e),r=0<t&&t<10,i=Am(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,mn.M(be())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}L(e){return p(this,null,function*(){return this.db||(D(rt,"Opening database:",this.name),this.db=yield new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Fi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new O(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Fi(e,o))},i.onupgradeneeded=s=>{D(rt,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{D(rt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db})}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}runTransaction(e,t,r,i){return p(this,null,function*(){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=yield this.L(e);const c=ca.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.C(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return u.catch(()=>{}),yield c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(D(rt,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}})}close(){this.db&&this.db.close(),this.db=void 0}}function Am(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Xv{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return xn(this.U.delete())}}class Fi extends O{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function An(n){return n.name==="IndexedDbTransactionError"}class Zv{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(D(rt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(D(rt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),xn(r)}add(e){return D(rt,"ADD",this.store.name,e,e),xn(this.store.add(e))}get(e){return xn(this.store.get(e)).next(t=>(t===void 0&&(t=null),D(rt,"GET",this.store.name,e,t),t))}delete(e){return D(rt,"DELETE",this.store.name,e),xn(this.store.delete(e))}count(){return D(rt,"COUNT",this.store.name),xn(this.store.count())}J(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new R((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.H(s,(c,u)=>{o.push(u)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}X(e,t){D(rt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.H(i,(s,o,c)=>c.delete())}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}te(e){const t=this.cursor({});return new R((r,i)=>{t.onerror=s=>{const o=Pu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}H(e,t){const r=[];return new R((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new Xv(c),h=t(c.primaryKey,c.value,u);if(h instanceof R){const f=h.catch(m=>(u.done(),R.reject(m)));r.push(f)}u.isDone?i():u.G===null?c.continue():c.continue(u.G)}}).next(()=>R.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function xn(n){return new R((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Pu(r.target.error);t(i)}})}let Ad=!1;function Pu(n){const e=mn.M(be());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ad||(Ad=!0,setTimeout(()=>{throw r},0)),r}}return n}const Ui="IndexBackfiller";class eA{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){D(Ui,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,()=>p(this,null,function*(){this.task=null;try{const t=yield this.ne.ie();D(Ui,`Documents written: ${t}`)}catch(t){An(t)?D(Ui,"Ignoring IndexedDB error during index backfill: ",t):yield cr(t)}yield this.re(6e4)}))}}class tA{constructor(e,t){this.localStore=e,this.persistence=t}ie(e=50){return p(this,null,function*(){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))})}se(e,t){const r=new Set;let i=t,s=!0;return R.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return D(Ui,`Processing collection: ${o}`),this.oe(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(c=>(D(Ui,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}_e(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Tm(s);Su(o,r)>0&&(r=o)}),new at(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class ft{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ft.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=-1;function ua(n){return n==null}function es(n){return n===0&&1/n==-1/0}function nA(n){return typeof n=="number"&&Number.isInteger(n)&&!es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="";function $e(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Rd(e)),e=rA(n.get(t),e);return Rd(e)}function rA(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case ko:t+="";break;default:t+=s}}return t}function Rd(n){return n+ko+""}function Rt(n){const e=n.length;if(B(e>=2,64408,{path:n}),e===2)return B(n.charAt(0)===ko&&n.charAt(1)==="",56145,{path:n}),ie.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(ko,s);switch((o<0||o>t)&&F(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:F(61167,{path:n})}s=o+2}return new ie(r)}/**
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
 */const On="remoteDocuments",Es="owner",fr="owner",ts="mutationQueues",iA="userId",gt="mutations",bd="batchId",Un="userMutationsIndex",Sd=["userId","batchId"];/**
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
 */function ho(n,e){return[n,$e(e)]}function Rm(n,e,t){return[n,$e(e),t]}const sA={},Vr="documentMutations",No="remoteDocumentsV14",oA=["prefixPath","collectionGroup","readTime","documentId"],fo="documentKeyIndex",aA=["prefixPath","collectionGroup","documentId"],bm="collectionGroupIndex",cA=["collectionGroup","readTime","prefixPath","documentId"],ns="remoteDocumentGlobal",Bc="remoteDocumentGlobalKey",Or="targets",Sm="queryTargetsIndex",uA=["canonicalId","targetId"],xr="targetDocuments",lA=["targetId","path"],Cu="documentTargetsIndex",hA=["path","targetId"],Do="targetGlobalKey",$n="targetGlobal",rs="collectionParents",dA=["collectionId","parent"],Mr="clientMetadata",fA="clientId",la="bundles",pA="bundleId",ha="namedQueries",mA="name",ku="indexConfiguration",gA="indexId",qc="collectionGroupIndex",_A="collectionGroup",Bi="indexState",yA=["indexId","uid"],Pm="sequenceNumberIndex",IA=["uid","sequenceNumber"],qi="indexEntries",EA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Cm="documentKeyIndex",TA=["indexId","uid","orderedDocumentKey"],da="documentOverlays",wA=["userId","collectionPath","documentId"],$c="collectionPathOverlayIndex",vA=["userId","collectionPath","largestBatchId"],km="collectionGroupOverlayIndex",AA=["userId","collectionGroup","largestBatchId"],Nu="globals",RA="name",Nm=[ts,gt,Vr,On,Or,Es,$n,xr,Mr,ns,rs,la,ha],bA=[...Nm,da],Dm=[ts,gt,Vr,No,Or,Es,$n,xr,Mr,ns,rs,la,ha,da],Vm=Dm,Du=[...Vm,ku,Bi,qi],SA=Du,Om=[...Du,Nu],PA=Om;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends vm{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ce(n,e){const t=K(n);return mn.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function CA(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function xm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qs(this.root,e,this.comparator,!0)}}class Qs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:xe.RED,this.left=i!=null?i:xe.EMPTY,this.right=s!=null?s:xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new xe(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cd(this.data.getIterator())}getIteratorFrom(e){return new Cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class Cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function pr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new ae(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Mm("Invalid base64 string: "+s):s}}(e);return new ve(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const kA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(B(!!n,39018),typeof n=="string"){let e=0;const t=kA.exec(n);if(B(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="server_timestamp",Fm="__type__",Um="__previous_value__",Bm="__local_write_time__";function Vu(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Fm])==null?void 0:r.stringValue)===Lm}function fa(n){const e=n.mapValue.fields[Um];return Vu(e)?fa(e):e}function is(n){const e=Ut(n.mapValue.fields[Bm].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t,r,i,s,o,c,u,h,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const Vo="(default)";class Qn{constructor(e,t){this.projectId=e,this.database=t||Vo}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database===Vo}isEqual(e){return e instanceof Qn&&e.projectId===this.projectId&&e.database===this.database}}function DA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="__type__",qm="__max__",ln={mapValue:{fields:{__type__:{stringValue:qm}}}},xu="__vector__",Lr="value",po={nullValue:"NULL_VALUE"};function In(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vu(n)?4:$m(n)?9007199254740991:pa(n)?10:11:F(28295,{value:n})}function Nt(n,e){if(n===e)return!0;const t=In(n);if(t!==In(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return is(n).isEqual(is(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ut(i.timestampValue),c=Ut(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Bt(i.bytesValue).isEqual(Bt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=le(i.doubleValue),c=le(s.doubleValue);return o===c?es(o)===es(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Dr(n.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Pd(o)!==Pd(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Nt(o[u],c[u])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function ss(n,e){return(n.values||[]).find(t=>Nt(t,e))!==void 0}function En(n,e){if(n===e)return 0;const t=In(n),r=In(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=le(s.integerValue||s.doubleValue),u=le(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return kd(n.timestampValue,e.timestampValue);case 4:return kd(is(n),is(e));case 5:return Fc(n.stringValue,e.stringValue);case 6:return function(s,o){const c=Bt(s),u=Bt(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=G(c[h],u[h]);if(f!==0)return f}return G(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=G(le(s.latitude),le(o.latitude));return c!==0?c:G(le(s.longitude),le(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Nd(n.arrayValue,e.arrayValue);case 10:return function(s,o){var y,b,k,V;const c=s.fields||{},u=o.fields||{},h=(y=c[Lr])==null?void 0:y.arrayValue,f=(b=u[Lr])==null?void 0:b.arrayValue,m=G(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return m!==0?m:Nd(h,f)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===ln.mapValue&&o===ln.mapValue)return 0;if(s===ln.mapValue)return 1;if(o===ln.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=Fc(u[m],f[m]);if(y!==0)return y;const b=En(c[u[m]],h[f[m]]);if(b!==0)return b}return G(u.length,f.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function kd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Ut(n),r=Ut(e),i=G(t.seconds,r.seconds);return i!==0?i:G(t.nanos,r.nanos)}function Nd(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=En(t[i],r[i]);if(s)return s}return G(t.length,r.length)}function Fr(n){return Kc(n)}function Kc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ut(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Kc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Kc(t.fields[o])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function mo(n){switch(In(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fa(n);return e?16+mo(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+mo(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Rn(r.fields,(s,o)=>{i+=s.length+mo(o)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function os(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gc(n){return!!n&&"integerValue"in n}function as(n){return!!n&&"arrayValue"in n}function Dd(n){return!!n&&"nullValue"in n}function Vd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function go(n){return!!n&&"mapValue"in n}function pa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ou])==null?void 0:r.stringValue)===xu}function $i(n){if(n.geoPointValue)return{geoPointValue:Y({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Y({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=$i(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$i(n.arrayValue.values[t]);return e}return Y({},n)}function $m(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===qm}const jm={mapValue:{fields:{[Ou]:{stringValue:xu},[Lr]:{arrayValue:{}}}}};function VA(n){return"nullValue"in n?po:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?os(Qn.empty(),L.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?pa(n)?jm:{mapValue:{}}:F(35942,{value:n})}function OA(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?os(Qn.empty(),L.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?jm:"mapValue"in n?pa(n)?{mapValue:{}}:ln:F(61959,{value:n})}function Od(n,e){const t=En(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function xd(n,e){const t=En(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!go(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$i(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=$i(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());go(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];go(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Rn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Me($i(this.value))}}function Km(n){const e=[];return Rn(n.fields,(t,r)=>{const i=new de([t]);if(go(r)){const s=Km(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new pe(e,0,q.min(),q.min(),q.min(),Me.empty(),0)}static newFoundDocument(e,t,r,i){return new pe(e,1,t,q.min(),r,i,0)}static newNoDocument(e,t){return new pe(e,2,t,q.min(),q.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new pe(e,3,t,q.min(),q.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ur{constructor(e,t){this.position=e,this.inclusive=t}}function Md(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=En(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ld(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function xA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Gm{}class te extends Gm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new MA(e,t,r):t==="array-contains"?new UA(e,r):t==="in"?new Jm(e,r):t==="not-in"?new BA(e,r):t==="array-contains-any"?new qA(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new LA(e,r):new FA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(En(t,this.value)):t!==null&&In(this.value)===In(t)&&this.matchesComparison(En(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends Gm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new oe(e,t)}matches(e){return Br(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Br(n){return n.op==="and"}function zc(n){return n.op==="or"}function Mu(n){return zm(n)&&Br(n)}function zm(n){for(const e of n.filters)if(e instanceof oe)return!1;return!0}function Wc(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+Fr(n.value);if(Mu(n))return n.filters.map(e=>Wc(e)).join(",");{const e=n.filters.map(t=>Wc(t)).join(",");return`${n.op}(${e})`}}function Wm(n,e){return n instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)}(n,e):n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&Wm(o,i.filters[c]),!0):!1}(n,e):void F(19439)}function Hm(n,e){const t=n.filters.concat(e);return oe.create(t,n.op)}function Qm(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Fr(t.value)}`}(n):n instanceof oe?function(t){return t.op.toString()+" {"+t.getFilters().map(Qm).join(" ,")+"}"}(n):"Filter"}class MA extends te{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class LA extends te{constructor(e,t){super(e,"in",t),this.keys=Ym("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class FA extends te{constructor(e,t){super(e,"not-in",t),this.keys=Ym("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ym(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class UA extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return as(t)&&ss(t.arrayValue,this.value)}}class Jm extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ss(this.value.arrayValue,t)}}class BA extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ss(this.value.arrayValue,t)}}class qA extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!as(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ss(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function Hc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new $A(n,e,t,r,i,s,o)}function Yn(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Wc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ua(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Fr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Fr(r)).join(",")),e.Te=t}return e.Te}function Ts(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ld(n.startAt,e.startAt)&&Ld(n.endAt,e.endAt)}function Oo(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function xo(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function Fd(n,e,t){let r=po,i=!0;for(const s of xo(n,e)){let o=po,c=!0;switch(s.op){case"<":case"<=":o=VA(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=po}Od({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Od({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Ud(n,e,t){let r=ln,i=!0;for(const s of xo(n,e)){let o=ln,c=!0;switch(s.op){case">=":case">":o=OA(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=ln}xd({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];xd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function jA(n,e,t,r,i,s,o,c){return new Yr(n,e,t,r,i,s,o,c)}function ws(n){return new Yr(n)}function Bd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function KA(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xm(n){return n.collectionGroup!==null}function ji(n){const e=K(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ae(de.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new cs(s,r))}),t.has(de.keyField().canonicalString())||e.Ee.push(new cs(de.keyField(),r))}return e.Ee}function pt(n){const e=K(n);return e.Ie||(e.Ie=Zm(e,ji(n))),e.Ie}function GA(n){const e=K(n);return e.Re||(e.Re=Zm(e,n.explicitOrderBy)),e.Re}function Zm(n,e){if(n.limitType==="F")return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cs(i.field,s)});const t=n.endAt?new Ur(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ur(n.startAt.position,n.startAt.inclusive):null;return Hc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qc(n,e){const t=n.filters.concat([e]);return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zA(n,e){const t=n.explicitOrderBy.concat([e]);return new Yr(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Mo(n,e,t){return new Yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ma(n,e){return Ts(pt(n),pt(e))&&n.limitType===e.limitType}function eg(n){return`${Yn(pt(n))}|lt:${n.limitType}`}function Er(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Qm(i)).join(", ")}]`),ua(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Fr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Fr(i)).join(",")),`Target(${r})`}(pt(n))}; limitType=${n.limitType})`}function vs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ji(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const h=Md(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,ji(r),i)||r.endAt&&!function(o,c,u){const h=Md(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,ji(r),i))}(n,e)}function WA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tg(n){return(e,t)=>{let r=!1;for(const i of ji(n)){const s=HA(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HA(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?En(u,h):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new he(L.comparator);function it(){return QA}const ng=new he(L.comparator);function Ci(...n){let e=ng;for(const t of n)e=e.insert(t.key,t);return e}function rg(n){let e=ng;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function bt(){return Ki()}function ig(){return Ki()}function Ki(){return new jt(n=>n.toString(),(n,e)=>n.isEqual(e))}const YA=new he(L.comparator),JA=new ae(L.comparator);function X(...n){let e=JA;for(const t of n)e=e.add(t);return e}const XA=new ae(G);function ZA(){return XA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(e)?"-0":e}}function sg(n){return{integerValue:""+n}}function og(n,e){return nA(e)?sg(e):Lu(n,e)}/**
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
 */class ga{constructor(){this._=void 0}}function eR(n,e,t){return n instanceof qr?function(i,s){const o={fields:{[Fm]:{stringValue:Lm},[Bm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vu(s)&&(s=fa(s)),s&&(o.fields[Um]=s),{mapValue:o}}(t,e):n instanceof Jn?cg(n,e):n instanceof $r?ug(n,e):function(i,s){const o=ag(i,s),c=qd(o)+qd(i.Ae);return Gc(o)&&Gc(i.Ae)?sg(c):Lu(i.serializer,c)}(n,e)}function tR(n,e,t){return n instanceof Jn?cg(n,e):n instanceof $r?ug(n,e):t}function ag(n,e){return n instanceof jr?function(r){return Gc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class qr extends ga{}class Jn extends ga{constructor(e){super(),this.elements=e}}function cg(n,e){const t=lg(e);for(const r of n.elements)t.some(i=>Nt(i,r))||t.push(r);return{arrayValue:{values:t}}}class $r extends ga{constructor(e){super(),this.elements=e}}function ug(n,e){let t=lg(e);for(const r of n.elements)t=t.filter(i=>!Nt(i,r));return{arrayValue:{values:t}}}class jr extends ga{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function qd(n){return le(n.integerValue||n.doubleValue)}function lg(n){return as(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.field=e,this.transform=t}}function nR(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Jn&&i instanceof Jn||r instanceof $r&&i instanceof $r?Dr(r.elements,i.elements,Nt):r instanceof jr&&i instanceof jr?Nt(r.Ae,i.Ae):r instanceof qr&&i instanceof qr}(n.transform,e.transform)}class rR{constructor(e,t){this.version=e,this.transformResults=t}}class Be{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ya{}function hg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ia(n.key,Be.none()):new Jr(n.key,n.data,Be.none());{const t=n.data,r=Me.empty();let i=new ae(de.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kt(n.key,r,new Xe(i.toArray()),Be.none())}}function iR(n,e,t){n instanceof Jr?function(i,s,o){const c=i.value.clone(),u=jd(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Kt?function(i,s,o){if(!_o(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=jd(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(dg(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Gi(n,e,t,r){return n instanceof Jr?function(s,o,c,u){if(!_o(s.precondition,o))return c;const h=s.value.clone(),f=Kd(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Kt?function(s,o,c,u){if(!_o(s.precondition,o))return c;const h=Kd(s.fieldTransforms,u,o),f=o.data;return f.setAll(dg(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return _o(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function sR(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ag(r.transform,i||null);s!=null&&(t===null&&(t=Me.empty()),t.set(r.field,s))}return t||null}function $d(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Dr(r,i,(s,o)=>nR(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jr extends ya{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends ya{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function dg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jd(n,e,t){const r=new Map;B(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,tR(o,c,t[i]))}return r}function Kd(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,eR(s,o,e))}return r}class Ia extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fg extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&iR(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Gi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Gi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ig();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=hg(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,(t,r)=>$d(t,r))&&Dr(this.baseMutations,e.baseMutations,(t,r)=>$d(t,r))}}class Uu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){B(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return YA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Uu(e,t,r,i)}}/**
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
 */class Bu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class oR{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ne;function cR(n){switch(n){case C.OK:return F(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function pg(n){if(n===void 0)return ze("GRPC error has no .code"),C.UNKNOWN;switch(n){case Ie.OK:return C.OK;case Ie.CANCELLED:return C.CANCELLED;case Ie.UNKNOWN:return C.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return C.INTERNAL;case Ie.UNAVAILABLE:return C.UNAVAILABLE;case Ie.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ie.NOT_FOUND:return C.NOT_FOUND;case Ie.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ie.ABORTED:return C.ABORTED;case Ie.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ie.DATA_LOSS:return C.DATA_LOSS;default:return F(39323,{code:n})}}(ne=Ie||(Ie={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uR(){return new TextEncoder}/**
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
 */const lR=new pn([4294967295,4294967295],0);function Gd(n){const e=uR().encode(n),t=new lm;return t.update(e),new Uint8Array(t.digest())}function zd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pn([t,r],0),new pn([i,s],0)]}class qu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ki(`Invalid padding: ${t}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ki(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=pn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(pn.fromNumber(r)));return i.compare(lR)===1&&(i=new pn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gd(e),[r,i]=zd(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qu(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=Gd(e),[r,i]=zd(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,As.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ea(q.min(),i,new he(G),it(),X())}}class As{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new As(r,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class mg{constructor(e,t){this.targetId=e,this.Ce=t}}class gg{constructor(e,t,r=ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Wd{constructor(){this.ve=0,this.Fe=Hd(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),r=X();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:F(38017,{changeType:s})}}),new As(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Hd()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,B(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hR{constructor(e){this.Ge=e,this.ze=new Map,this.je=it(),this.Je=Ys(),this.He=Ys(),this.Ze=new he(G)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Oo(s))if(r===0){const o=new L(s.path);this.et(t,o,pe.newNoDocument(o,q.min()))}else B(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=Bt(r).toUint8Array()}catch(u){if(u instanceof Mm)return yn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new qu(o,i,s)}catch(u){return yn(u instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const c=this.ot(o);if(c){if(s.current&&Oo(c.target)){const u=new L(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,pe.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=X();this.He.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ea(e,t,this.Ze,this.je,r);return this.je=it(),this.Je=Ys(),this.He=Ys(),this.Ze=new he(G),i}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,t)?i.Ke(t,1):i.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Wd,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ae(G),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ae(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wd),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ys(){return new he(L.comparator)}function Hd(){return new he(L.comparator)}const dR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pR=(()=>({and:"AND",or:"OR"}))();class mR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yc(n,e){return n.useProto3Json||ua(e)?e:{value:e}}function Kr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _g(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gR(n,e){return Kr(n,e.toTimestamp())}function Qe(n){return B(!!n,49232),q.fromTimestamp(function(t){const r=Ut(t);return new se(r.seconds,r.nanos)}(n))}function $u(n,e){return Jc(n,e).canonicalString()}function Jc(n,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yg(n){const e=ie.fromString(n);return B(bg(e),10190,{key:e.toString()}),e}function Lo(n,e){return $u(n.databaseId,e.path)}function jn(n,e){const t=yg(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Tg(t))}function Ig(n,e){return $u(n.databaseId,e)}function Eg(n){const e=yg(n);return e.length===4?ie.emptyPath():Tg(e)}function Xc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tg(n){return B(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qd(n,e,t){return{name:Lo(n,e),fields:t.value.mapValue.fields}}function _R(n,e,t){const r=jn(n,e.name),i=Qe(e.updateTime),s=e.createTime?Qe(e.createTime):q.min(),o=new Me({mapValue:{fields:e.fields}}),c=pe.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function yR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(B(f===void 0||typeof f=="string",58123),ve.fromBase64String(f||"")):(B(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ve.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:pg(h.code);return new O(f,h.message||"")}(o);t=new gg(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jn(n,r.document.name),s=Qe(r.document.updateTime),o=r.document.createTime?Qe(r.document.createTime):q.min(),c=new Me({mapValue:{fields:r.document.fields}}),u=pe.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new yo(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jn(n,r.document),s=r.readTime?Qe(r.readTime):q.min(),o=pe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new yo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jn(n,r.document),s=r.removedTargetIds||[];t=new yo([],s,i,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aR(i,s),c=r.targetId;t=new mg(c,o)}}return t}function Fo(n,e){let t;if(e instanceof Jr)t={update:Qd(n,e.key,e.value)};else if(e instanceof Ia)t={delete:Lo(n,e.key)};else if(e instanceof Kt)t={update:Qd(n,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof fg))return F(16599,{dt:e.type});t={verify:Lo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof qr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Jn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof $r)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof jr)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw F(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F(27497)}(n,e.precondition)),t}function Zc(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Be.updateTime(Qe(s.updateTime)):s.exists!==void 0?Be.exists(s.exists):Be.none()}(e.currentDocument):Be.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)B(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new qr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new Jn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new $r(f)}else"increment"in c?u=new jr(o,c.increment):F(16584,{proto:c});const h=de.fromServerFormat(c.fieldPath);return new _a(h,u)}(n,i)):[];if(e.update){e.update.name;const i=jn(n,e.update.name),s=new Me({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new Xe(h.map(f=>de.fromServerFormat(f)))}(e.updateMask);return new Kt(i,s,o,t,r)}return new Jr(i,s,t,r)}if(e.delete){const i=jn(n,e.delete);return new Ia(i,t)}if(e.verify){const i=jn(n,e.verify);return new fg(i,t)}return F(1463,{proto:e})}function IR(n,e){return n&&n.length>0?(B(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?Qe(i.updateTime):Qe(s);return o.isEqual(q.min())&&(o=Qe(s)),new rR(o,i.transformResults||[])}(t,e))):[]}function wg(n,e){return{documents:[Ig(n,e.path)]}}function ju(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ig(n,i);const s=function(h){if(h.length!==0)return Rg(oe.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:on(y.field),direction:wR(y.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Yc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:i}}function ER(n,e,t,r){const{ft:i,parent:s}=ju(n,e),o={},c=[];let u=0;return t.forEach(h=>{const f=r?h.alias:"aggregate_"+u++;o[f]=h.alias,h.aggregateType==="count"?c.push({alias:f,count:{}}):h.aggregateType==="avg"?c.push({alias:f,avg:{field:on(h.fieldPath)}}):h.aggregateType==="sum"&&c.push({alias:f,sum:{field:on(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function vg(n){let e=Eg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){B(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const y=Ag(m);return y instanceof oe&&Mu(y)?y.getFilters():[y]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(y=>function(k){return new cs(Tr(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(m){let y;return y=typeof m=="object"?m.value:m,ua(y)?null:y}(t.limit));let u=null;t.startAt&&(u=function(m){const y=!!m.before,b=m.values||[];return new Ur(b,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,b=m.values||[];return new Ur(b,y)}(t.endAt)),jA(e,i,o,s,c,"F",u,h)}function TR(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ag(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Tr(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Tr(t.unaryFilter.field);return te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Tr(t.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Tr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return te.create(Tr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return oe.create(t.compositeFilter.filters.map(r=>Ag(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function wR(n){return dR[n]}function vR(n){return fR[n]}function AR(n){return pR[n]}function on(n){return{fieldPath:n.canonicalString()}}function Tr(n){return de.fromServerFormat(n.fieldPath)}function Rg(n){return n instanceof te?function(t){if(t.op==="=="){if(Vd(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NAN"}};if(Dd(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vd(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NAN"}};if(Dd(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(t.field),op:vR(t.op),value:t.value}}}(n):n instanceof oe?function(t){const r=t.getFilters().map(i=>Rg(i));return r.length===1?r[0]:{compositeFilter:{op:AR(t.op),filters:r}}}(n):F(54877,{filter:n})}function RR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,r,i,s=q.min(),o=q.min(),c=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.yt=e}}function bR(n,e){let t;if(e.document)t=_R(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Zn(e.noDocument.readTime);t=pe.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F(56709);{const r=L.fromSegments(e.unknownDocument.path),i=Zn(e.unknownDocument.version);t=pe.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new se(i[0],i[1]);return q.fromTimestamp(s)}(e.readTime)),t}function Yd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Uo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Lo(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Kr(s,o.version.toTimestamp()),createTime:Kr(s,o.createTime.toTimestamp())}}(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Xn(e.version)};else{if(!e.isUnknownDocument())return F(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Xn(e.version)}}return r}function Uo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Xn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Zn(n){const e=new se(n.seconds,n.nanoseconds);return q.fromTimestamp(e)}function Mn(n,e){const t=(e.baseMutations||[]).map(s=>Zc(n.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Zc(n.yt,s)),i=se.fromMillis(e.localWriteTimeMs);return new Fu(e.batchId,i,t,r)}function Ni(n){const e=Zn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Zn(n.lastLimboFreeSnapshotVersion):q.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){const o=s.documents.length;return B(o===1,1966,{count:o}),pt(ws(Eg(s.documents[0])))}(n.query):function(s){return pt(vg(s))}(n.query),new xt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ve.fromBase64String(n.resumeToken))}function Cg(n,e){const t=Xn(e.snapshotVersion),r=Xn(e.lastLimboFreeSnapshotVersion);let i;i=Oo(e.target)?wg(n.yt,e.target):ju(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Yn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function kg(n){const e=vg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mo(e,e.limit,"L"):e}function mc(n,e){return new Bu(e.largestBatchId,Zc(n.yt,e.overlayMutation))}function Jd(n,e){const t=e.path.lastSegment();return[n,$e(e.path.popLast()),t]}function Xd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Xn(r.readTime),documentKey:$e(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{getBundleMetadata(e,t){return Zd(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Zn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Zd(e).put(function(i){return{bundleId:i.id,createTime:Xn(Qe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return ef(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:kg(s.bundledQuery),readTime:Zn(s.readTime)}}(r)})}saveNamedQuery(e,t){return ef(e).put(function(i){return{name:i.name,readTime:Xn(Qe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Zd(n){return Ce(n,la)}function ef(n){return Ce(n,ha)}/**
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
 */class Ta{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new Ta(e,r)}getOverlay(e,t){return yi(e).get(Jd(this.userId,t)).next(r=>r?mc(this.serializer,r):null)}getOverlays(e,t){const r=bt();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const c=new Bu(t,o);i.push(this.St(e,c))}),R.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add($e(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(yi(e).X($c,c))}),R.waitFor(s)}getOverlaysForCollection(e,t,r){const i=bt(),s=$e(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return yi(e).J($c,o).next(c=>{for(const u of c){const h=mc(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=bt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return yi(e).ee({index:km,range:c},(u,h,f)=>{const m=mc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}St(e,t){return yi(e).put(function(i,s,o){const[c,u,h]=Jd(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Fo(i.yt,o.mutation)}}(this.serializer,this.userId,t))}}function yi(n){return Ce(n,da)}/**
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
 */class PR{bt(e){return Ce(e,Nu)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?ve.fromUint8Array(r):ve.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ln{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(le(e.integerValue));else if("doubleValue"in e){const r=le(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),es(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Ut(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Bt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?$m(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):pa(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):F(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const i=Lr,s=((c=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(le(s)),this.Ot(i,t),this.Ct(r[i],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),L.fromName(e).path.forEach(r=>{this.Ft(t,60),this.$t(r,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Ln.Wt=new Ln;/**
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
 */const mr=255;function CR(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function tf(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=CR(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class kR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Yt(e){const t=this.en(e),r=tf(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=tf(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(mr),this.sn(255)}_n(){this.an(mr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===mr?(this.sn(mr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===mr?(this.an(mr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class NR{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class DR{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ii{constructor(){this.cn=new kR,this.ascending=new NR(this.cn),this.descending=new DR(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Fn{constructor(e,t,r,i){this.hn=e,this.Pn=t,this.Tn=r,this.En=i}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new Fn(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:Io(this.Tn),directionalValue:Io(this.En),orderedDocumentKey:Io(t),documentKey:r.path.toArray()}}An(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function tn(n,e){let t=n.hn-e.hn;return t!==0?t:(t=nf(n.Tn,e.Tn),t!==0?t:(t=nf(n.En,e.En),t!==0?t:L.comparator(n.Pn,e.Pn)))}function nf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Io(n){return mp()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function rf(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}class sf{constructor(e){this.Vn=new ae((t,r)=>de.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(B(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=Uc(e);if(t!==void 0&&!this.pn(t))return!1;const r=Vn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=r[s];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ae(de.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new lo(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new lo(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new lo(r.field,r.dir==="asc"?0:1)));return new Co(Co.UNKNOWN_ID,this.collectionId,t,Zi.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Ng(n){var t,r;if(B(n instanceof te||n instanceof oe,20012),n instanceof te){if(n instanceof Jm){const i=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map(s=>te.create(n.field,"==",s)))||[];return oe.create(i,"or")}return n}const e=n.filters.map(i=>Ng(i));return oe.create(e,n.op)}function VR(n){if(n.getFilters().length===0)return[];const e=nu(Ng(n));return B(Dg(e),7391),eu(e)||tu(e)?[e]:e.getFilters()}function eu(n){return n instanceof te}function tu(n){return n instanceof oe&&Mu(n)}function Dg(n){return eu(n)||tu(n)||function(t){if(t instanceof oe&&zc(t)){for(const r of t.getFilters())if(!eu(r)&&!tu(r))return!1;return!0}return!1}(n)}function nu(n){if(B(n instanceof te||n instanceof oe,34018),n instanceof te)return n;if(n.filters.length===1)return nu(n.filters[0]);const e=n.filters.map(r=>nu(r));let t=oe.create(e,n.op);return t=Bo(t),Dg(t)?t:(B(t instanceof oe,64498),B(Br(t),40251),B(t.filters.length>1,57927),t.filters.reduce((r,i)=>Ku(r,i)))}function Ku(n,e){let t;return B(n instanceof te||n instanceof oe,38388),B(e instanceof te||e instanceof oe,25473),t=n instanceof te?e instanceof te?function(i,s){return oe.create([i,s],"and")}(n,e):of(n,e):e instanceof te?of(e,n):function(i,s){if(B(i.filters.length>0&&s.filters.length>0,48005),Br(i)&&Br(s))return Hm(i,s.getFilters());const o=zc(i)?i:s,c=zc(i)?s:i,u=o.filters.map(h=>Ku(h,c));return oe.create(u,"or")}(n,e),Bo(t)}function of(n,e){if(Br(e))return Hm(e,n.getFilters());{const t=e.filters.map(r=>Ku(n,r));return oe.create(t,"or")}}function Bo(n){if(B(n instanceof te||n instanceof oe,11850),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return Bo(e[0]);if(zm(n))return n;const t=e.map(i=>Bo(i)),r=[];return t.forEach(i=>{i instanceof te?r.push(i):i instanceof oe&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:oe.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.bn=new Gu}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(at.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(at.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Gu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ae(ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ae(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="IndexedDbIndexManager",Js=new Uint8Array(0);class xR{constructor(e,t){this.databaseId=t,this.Dn=new Gu,this.Cn=new jt(r=>Yn(r),(r,i)=>Ts(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Dn.add(t)});const s={collectionId:r,parent:$e(i)};return cf(e).put(s)}return R.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[ym(t),""],!1,!0);return cf(e).J(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Rt(o.parent))}return r})}addFieldIndex(e,t){const r=Ei(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=_r(e);return s.next(c=>{o.put(Xd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ei(e),i=_r(e),s=gr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ei(e),r=gr(e),i=_r(e);return t.X().next(()=>r.X()).next(()=>i.X())}createTargetIndexes(e,t){return R.forEach(this.vn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new sf(r).Sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=gr(e);let i=!0;const s=new Map;return R.forEach(this.vn(t),o=>this.Fn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=X();const c=[];return R.forEach(s,(u,h)=>{D(af,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(u)} to execute ${Yn(t)}`);const f=function(U,W){const H=Uc(W);if(H===void 0)return null;for(const J of xo(U,H.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(h,u),m=function(U,W){const H=new Map;for(const J of Vn(W))for(const T of xo(U,J.fieldPath))switch(T.op){case"==":case"in":H.set(J.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return H.set(J.fieldPath.canonicalString(),T.value),Array.from(H.values())}return null}(h,u),y=function(U,W){const H=[];let J=!0;for(const T of Vn(W)){const _=T.kind===0?Fd(U,T.fieldPath,U.startAt):Ud(U,T.fieldPath,U.startAt);H.push(_.value),J&&(J=_.inclusive)}return new Ur(H,J)}(h,u),b=function(U,W){const H=[];let J=!0;for(const T of Vn(W)){const _=T.kind===0?Ud(U,T.fieldPath,U.endAt):Fd(U,T.fieldPath,U.endAt);H.push(_.value),J&&(J=_.inclusive)}return new Ur(H,J)}(h,u),k=this.Mn(u,h,y),V=this.Mn(u,h,b),N=this.xn(u,h,m),j=this.On(u.indexId,f,k,y.inclusive,V,b.inclusive,N);return R.forEach(j,$=>r.Z($,t.limit).next(U=>{U.forEach(W=>{const H=L.fromSegments(W.documentKey);o.has(H)||(o=o.add(H),c.push(H))})}))}).next(()=>c)}return R.resolve(null)})}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=VR(oe.create(e.filters,"and")).map(r=>Hc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}On(e,t,r,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const y=t?this.Nn(t[m/h]):Js,b=this.Bn(e,y,r[m%h],i),k=this.Ln(e,y,s[m%h],o),V=c.map(N=>this.Bn(e,y,N,!0));f.push(...this.createRange(b,k,V))}return f}Bn(e,t,r,i){const s=new Fn(e,L.empty(),t,r);return i?s:s.In()}Ln(e,t,r,i){const s=new Fn(e,L.empty(),t,r);return i?s.In():s}Fn(e,t){const r=new sf(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const i=this.vn(t);return R.forEach(i,s=>this.Fn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new ae(de.comparator),f=!1;for(const m of u.filters)for(const y of m.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?f=!0:h=h.add(y.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}kn(e,t){const r=new Ii;for(const i of Vn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);Ln.Wt.Dt(s,o)}return r.un()}Nn(e){const t=new Ii;return Ln.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new Ii;return Ln.Wt.Dt(os(this.databaseId,t),r.ln(function(s){const o=Vn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,t,r){if(r===null)return[];let i=[];i.push(new Ii);let s=0;for(const o of Vn(e)){const c=r[s++];for(const u of i)if(this.Kn(t,o.fieldPath)&&as(c))i=this.Un(i,o,c);else{const h=u.ln(o.kind);Ln.Wt.Dt(c,h)}}return this.$n(i)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const u=new Ii;u.seed(c.un()),Ln.Wt.Dt(o,u.ln(t.kind)),s.push(u)}return s}Kn(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ei(e),i=_r(e);return(t?r.J(qc,IDBKeyRange.bound(t,t)):r.J()).next(s=>{const o=[];return R.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){const y=m?new Zi(m.sequenceNumber,new at(Zn(m.readTime),new L(Rt(m.documentKey)),m.largestBatchId)):Zi.empty(),b=f.fields.map(([k,V])=>new lo(de.fromServerFormat(k),V));return new Co(f.indexId,f.collectionGroup,b,y)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:G(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ei(e),s=_r(e);return this.Wn(e).next(o=>i.J(qc,IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,u=>s.put(Xd(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),R.forEach(c,u=>this.Qn(e,i,u).next(h=>{const f=this.Gn(s,u);return h.isEqual(f)?R.resolve():this.zn(e,s,u,h,f)}))))})}jn(e,t,r,i){return gr(e).put(i.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,i){return gr(e).delete(i.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const i=gr(e);let s=new ae(tn);return i.ee({index:Cm,range:IDBKeyRange.only([r.indexId,this.uid,Io(this.qn(r,t))])},(o,c)=>{s=s.add(new Fn(r.indexId,t,rf(c.arrayValue),rf(c.directionalValue)))}).next(()=>s)}Gn(e,t){let r=new ae(tn);const i=this.kn(t,e);if(i==null)return r;const s=Uc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(as(o))for(const c of o.arrayValue.values||[])r=r.add(new Fn(t.indexId,e.key,this.Nn(c),i))}else r=r.add(new Fn(t.indexId,e.key,Js,i));return r}zn(e,t,r,i,s){D(af,"Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,m,y){const b=u.getIterator(),k=h.getIterator();let V=pr(b),N=pr(k);for(;V||N;){let j=!1,$=!1;if(V&&N){const U=f(V,N);U<0?$=!0:U>0&&(j=!0)}else V!=null?$=!0:j=!0;j?(m(N),N=pr(k)):$?(y(V),V=pr(b)):(V=pr(b),N=pr(k))}}(i,s,tn,c=>{o.push(this.jn(e,t,r,c))},c=>{o.push(this.Jn(e,t,r,c))}),R.waitFor(o)}Wn(e){let t=1;return _r(e).ee({index:Pm,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>tn(o,c)).filter((o,c,u)=>!c||tn(o,u[c-1])!==0);const i=[];i.push(e);for(const o of r){const c=tn(o,e),u=tn(o,t);if(c===0)i[0]=e.In();else if(c>0&&u<0)i.push(o),i.push(o.In());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Hn(i[o],i[o+1]))return[];const c=i[o].An(this.uid,Js,L.empty()),u=i[o+1].An(this.uid,Js,L.empty());s.push(IDBKeyRange.bound(c,u))}return s}Hn(e,t){return tn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(uf)}getMinOffset(e,t){return R.mapArray(this.vn(t),r=>this.Fn(e,r).next(i=>i||F(44426))).next(uf)}}function cf(n){return Ce(n,rs)}function gr(n){return Ce(n,qi)}function Ei(n){return Ce(n,ku)}function _r(n){return Ce(n,Bi)}function uf(n){B(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Su(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new at(e.readTime,e.documentKey,t)}/**
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
 */const lf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vg=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n,e,t){const r=n.store(gt),i=n.store(Vr),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},(f,m,y)=>(c++,y.delete()));s.push(u.next(()=>{B(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const m=Rm(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return R.waitFor(s).next(()=>h)}function qo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw F(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(Vg,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);class wa{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,t,r,i){B(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new wa(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return nn(e).ee({index:Un,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=wr(e),o=nn(e);return o.add({}).next(c=>{B(typeof c=="number",49019);const u=new Fu(c,t,r,i),h=function(b,k,V){const N=V.baseMutations.map($=>Fo(b.yt,$)),j=V.mutations.map($=>Fo(b.yt,$));return{userId:k,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:N,mutations:j}}(this.serializer,this.userId,u),f=[];let m=new ae((y,b)=>G(y.canonicalString(),b.canonicalString()));for(const y of i){const b=Rm(this.userId,y.key.path,c);m=m.add(y.key.path.popLast()),f.push(o.put(h)),f.push(s.put(b,sA))}return m.forEach(y=>{f.push(this.indexManager.addToCollectionParentIndex(e,y))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),R.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return nn(e).get(t).next(r=>r?(B(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Mn(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?R.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return nn(e).ee({index:Un,range:i},(o,c,u)=>{c.userId===this.userId&&(B(c.batchId>=r,47524,{Yn:r}),s=Mn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=qn;return nn(e).ee({index:Un,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,qn],[this.userId,Number.POSITIVE_INFINITY]);return nn(e).J(Un,t).next(r=>r.map(i=>Mn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ho(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return wr(e).ee({range:i},(o,c,u)=>{const[h,f,m]=o,y=Rt(f);if(h===this.userId&&t.path.isEqual(y))return nn(e).get(m).next(b=>{if(!b)throw F(61480,{er:o,batchId:m});B(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:m}),s.push(Mn(this.serializer,b))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(G);const i=[];return t.forEach(s=>{const o=ho(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=wr(e).ee({range:c},(h,f,m)=>{const[y,b,k]=h,V=Rt(b);y===this.userId&&s.path.isEqual(V)?r=r.add(k):m.done()});i.push(u)}),R.waitFor(i).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=ho(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new ae(G);return wr(e).ee({range:o},(u,h,f)=>{const[m,y,b]=u,k=Rt(y);m===this.userId&&r.isPrefixOf(k)?k.length===i&&(c=c.add(b)):f.done()}).next(()=>this.tr(e,c))}tr(e,t){const r=[],i=[];return t.forEach(s=>{i.push(nn(e).get(s).next(o=>{if(o===null)throw F(35274,{batchId:s});B(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(Mn(this.serializer,o))}))}),R.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Og(e.le,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.nr(t.batchId)}),R.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return wr(e).ee({range:r},(s,o,c)=>{if(s[0]===this.userId){const u=Rt(s[1]);i.push(u)}else c.done()}).next(()=>{B(i.length===0,56720,{rr:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return xg(e,this.userId,t)}ir(e){return Mg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:qn,lastStreamToken:""})}}function xg(n,e,t){const r=ho(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return wr(n).ee({range:s,Y:!0},(c,u,h)=>{const[f,m,y]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function nn(n){return Ce(n,gt)}function wr(n){return Ce(n,Vr)}function Mg(n){return Ce(n,ts)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new er(0)}static ar(){return new er(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next(t=>{const r=new er(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(t=>q.fromTimestamp(new se(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.ur(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.cr(e,i)))}addTargetData(e,t){return this.lr(e,t).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>yr(e).delete(t.targetId)).next(()=>this.ur(e)).next(r=>(B(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return yr(e).ee((o,c)=>{const u=Ni(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>R.waitFor(s)).next(()=>i)}forEachTarget(e,t){return yr(e).ee((r,i)=>{const s=Ni(i);t(s)})}ur(e){return hf(e).get(Do).next(t=>(B(t!==null,2888),t))}cr(e,t){return hf(e).put(Do,t)}lr(e,t){return yr(e).put(Cg(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Yn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return yr(e).ee({range:i,index:Sm},(o,c,u)=>{const h=Ni(c);Ts(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=an(e);return t.forEach(o=>{const c=$e(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),R.waitFor(i)}removeMatchingKeys(e,t,r){const i=an(e);return R.forEach(t,s=>{const o=$e(s.path);return R.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=an(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=an(e);let s=X();return i.ee({range:r,Y:!0},(o,c,u)=>{const h=Rt(o[1]),f=new L(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=$e(t.path),i=IDBKeyRange.bound([r],[ym(r)],!1,!0);let s=0;return an(e).ee({index:Cu,Y:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}At(e,t){return yr(e).get(t).next(r=>r?Ni(r):null)}}function yr(n){return Ce(n,Or)}function hf(n){return Ce(n,$n)}function an(n){return Ce(n,xr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="LruGarbageCollector",LR=1048576;function ff([n,e],[t,r]){const i=G(n,t);return i===0?G(e,r):i}class FR{constructor(e){this.Pr=e,this.buffer=new ae(ff),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ff(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Lg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){D(df,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>p(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){An(t)?D(df,"Ignoring IndexedDB error during garbage collection: ",t):yield cr(t)}yield this.Ar(3e5)}))}}class UR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(ft.ce);const r=new FR(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(lf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lf):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Ir()<=ee.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Fg(n,e){return new UR(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t){this.db=e,this.garbageCollector=Fg(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,(r,i)=>t(i))}addReference(e,t,r){return Xs(e,r)}removeReference(e,t,r){return Xs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Xs(e,t)}wr(e,t){return function(i,s){let o=!1;return Mg(i).te(c=>xg(i,c,s).next(u=>(u&&(o=!0),R.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,(o,c)=>{if(c<=t){const u=this.wr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,q.min()),an(e).delete(function(m){return[0,$e(m.path)]}(o))))});i.push(u)}}).next(()=>R.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Xs(e,t)}yr(e,t){const r=an(e);let i,s=ft.ce;return r.ee({index:Cu},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==ft.ce&&t(new L(Rt(i)),s),s=h,i=u):s=ft.ce}).next(()=>{s!==ft.ce&&t(new L(Rt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xs(n,e){return an(n).put(function(r,i){return{targetId:0,path:$e(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.changes=new jt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Nn(e).put(r)}removeEntry(e,t,r){return Nn(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Uo(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Sr(e,r)))}getEntry(e,t){let r=pe.newInvalidDocument(t);return Nn(e).ee({index:fo,range:IDBKeyRange.only(Ti(t))},(i,s)=>{r=this.br(t,s)}).next(()=>r)}Dr(e,t){let r={size:0,document:pe.newInvalidDocument(t)};return Nn(e).ee({index:fo,range:IDBKeyRange.only(Ti(t))},(i,s)=>{r={document:this.br(t,s),size:qo(s)}}).next(()=>r)}getEntries(e,t){let r=it();return this.Cr(e,t,(i,s)=>{const o=this.br(i,s);r=r.insert(i,o)}).next(()=>r)}vr(e,t){let r=it(),i=new he(L.comparator);return this.Cr(e,t,(s,o)=>{const c=this.br(s,o);r=r.insert(s,c),i=i.insert(s,qo(o))}).next(()=>({documents:r,Fr:i}))}Cr(e,t,r){if(t.isEmpty())return R.resolve();let i=new ae(gf);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Ti(i.first()),Ti(i.last())),o=i.getIterator();let c=o.getNext();return Nn(e).ee({index:fo,range:s},(u,h,f)=>{const m=L.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&gf(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.j(Ti(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Uo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Nn(e).J(IDBKeyRange.bound(c,u,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=it();for(const m of h){const y=this.br(L.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);y.isFoundDocument()&&(vs(t,y)||i.has(y.key))&&(f=f.insert(y.key,y))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=it();const o=mf(t,r),c=mf(t,at.max());return Nn(e).ee({index:bm,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const m=this.br(L.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new $R(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return pf(e).get(Bc).next(t=>(B(!!t,20021),t))}Sr(e,t){return pf(e).put(Bc,t)}br(e,t){if(t){const r=bR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(q.min())))return r}return pe.newInvalidDocument(e)}}function Bg(n){return new qR(n)}class $R extends Ug{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new jt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new ae((s,o)=>G(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.Or.get(s);if(t.push(this.Mr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=Yd(this.Mr.serializer,o);i=i.add(s.path.popLast());const h=qo(u);r+=h-c.size,t.push(this.Mr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){const u=Yd(this.Mr.serializer,o.convertToNoDocument(q.min()));t.push(this.Mr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Mr.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next(r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Mr.vr(e,t).next(({documents:r,Fr:i})=>(i.forEach((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function pf(n){return Ce(n,ns)}function Nn(n){return Ce(n,No)}function Ti(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function mf(n,e){const t=e.documentKey.path.toArray();return[n,Uo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function gf(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=G(t[s],r[s]),i)return i;return i=G(t.length,r.length),i||(i=G(t[t.length-2],r[r.length-2]),i||G(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Gi(r.mutation,i,Xe.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const i=bt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ci();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=it();const o=Ki(),c=function(){return Ki()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Kt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Gi(f.mutation,h,f.mutation.getFieldMask(),se.now())):o.set(h.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new jR(f,(m=o.get(h))!=null?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Ki();let i=new he((o,c)=>o-c),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Xe.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(i.get(c.batchId)||X()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=ig();f.forEach(y=>{if(!s.has(y)){const b=hg(t.get(y),r.get(y));b!==null&&m.set(y,b),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return KA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):R.resolve(bt());let c=Xi,u=s;return o.next(h=>R.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,X())).next(f=>({batchId:c,changes:rg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=Ci();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ci();return this.indexManager.getCollectionParents(e,s).next(c=>R.forEach(c,u=>{const h=function(m,y){return new Yr(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,pe.newInvalidDocument(f)))});let c=Ci();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Gi(f.mutation,h,Xe.empty(),se.now()),vs(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:kg(i.bundledQuery),readTime:Qe(i.readTime)}}(t)),R.resolve()}}/**
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
 */class GR{constructor(){this.overlays=new he(L.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=bt();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const i=bt(),s=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new he((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=bt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=bt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return R.resolve(c)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bu(t,r));let s=this.Lr.get(t);s===void 0&&(s=X(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}/**
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
 */class zR{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.kr=new ae(Ne.qr),this.Kr=new ae(Ne.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ne(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ne(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new L(new ie([])),r=new Ne(t,e),i=new Ne(t,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new L(new ie([])),r=new Ne(t,e),i=new Ne(t,e+1);let s=X();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ne(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return L.comparator(e.key,t.key)||G(e.Jr,t.Jr)}static Ur(e,t){return G(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ae(Ne.qr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fu(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Hr=this.Hr.add(new Ne(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?qn:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ne(t,0),i=new Ne(t,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const c=this.Zr(o.Jr);s.push(c)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(G);return t.forEach(i=>{const s=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],c=>{r=r.add(c.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Ne(new L(s),0);let c=new ae(G);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Jr)),!0)},o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){B(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(t.mutations,i=>{const s=new Ne(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Ne(t,0),i=this.Hr.firstAfterOrEqual(r);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.ti=e,this.docs=function(){return new he(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():pe.newInvalidDocument(t))}getEntries(e,t){let r=it();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pe.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=it();const o=t.path,c=new L(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Su(Tm(f),r)<=0||(i.has(f.key)||vs(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,t,r,i){F(9500)}ni(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new QR(this)}getSize(e){return R.resolve(this.size)}}class QR extends Ug{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.persistence=e,this.ri=new jt(t=>Yn(t),Ts),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new zu,this.targetCount=0,this.oi=er._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new er(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this._i={},this.overlays={},this.ai=new ft(0),this.ui=!1,this.ui=!0,this.ci=new zR,this.referenceDelegate=e(this),this.li=new YR(this),this.indexManager=new OR,this.remoteDocumentCache=function(i){return new HR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Pg(t),this.Pi=new KR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new WR(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new JR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,t){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class JR extends vm{constructor(e){super(),this.currentSequenceNumber=e}}class va{constructor(e){this.persistence=e,this.Ri=new zu,this.Ai=null}static Vi(e){return new va(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=L.fromPath(r);return this.mi(e,i).next(s=>{s||t.removeEntry(i,q.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class $o{constructor(e,t){this.persistence=e,this.fi=new jt(r=>$e(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Fg(this,t)}static Vi(e,t){return new $o(e,t)}Ti(){}Ei(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return R.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?R.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,t).next(c=>{c||(r++,s.removeEntry(o,q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mo(e.data.value)),t}wr(e,t,r){return R.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.serializer=e}k(e,t,r,i){const s=new ca("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore(Es)}(e),function(u){u.createObjectStore(ts,{keyPath:iA}),u.createObjectStore(gt,{keyPath:bd,autoIncrement:!0}).createIndex(Un,Sd,{unique:!0}),u.createObjectStore(Vr)}(e),_f(e),function(u){u.createObjectStore(On)}(e));let o=R.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(xr),u.deleteObjectStore(Or),u.deleteObjectStore($n)}(e),_f(e)),o=o.next(()=>function(u){const h=u.store($n),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return h.put(Do,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store(gt).J().next(m=>{u.deleteObjectStore(gt),u.createObjectStore(gt,{keyPath:bd,autoIncrement:!0}).createIndex(Un,Sd,{unique:!0});const y=h.store(gt),b=m.map(k=>y.put(k));return R.waitFor(b)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Mr,{keyPath:fA})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.gi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(ns)}(e),this.pi(s)))),r<7&&i>=7&&(o=o.next(()=>this.yi(s))),r<8&&i>=8&&(o=o.next(()=>this.wi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Si(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(la,{keyPath:pA})})(e),function(u){u.createObjectStore(ha,{keyPath:mA})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore(da,{keyPath:wA});h.createIndex($c,vA,{unique:!1}),h.createIndex(km,AA,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore(No,{keyPath:oA});h.createIndex(fo,aA),h.createIndex(bm,cA)}(e)).next(()=>this.bi(e,s)).next(()=>e.deleteObjectStore(On))),r<14&&i>=14&&(o=o.next(()=>this.Di(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(ku,{keyPath:gA,autoIncrement:!0}).createIndex(qc,_A,{unique:!1}),u.createObjectStore(Bi,{keyPath:yA}).createIndex(Pm,IA,{unique:!1}),u.createObjectStore(qi,{keyPath:EA}).createIndex(Cm,TA,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(Bi).clear()}).next(()=>{t.objectStore(qi).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(Nu,{keyPath:RA})})(e)})),r<18&&i>=18&&mp()&&(o=o.next(()=>{t.objectStore(Bi).clear()}).next(()=>{t.objectStore(qi).clear()})),o}pi(e){let t=0;return e.store(On).ee((r,i)=>{t+=qo(i)}).next(()=>{const r={byteSize:t};return e.store(ns).put(Bc,r)})}gi(e){const t=e.store(ts),r=e.store(gt);return t.J().next(i=>R.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,qn],[s.userId,s.lastAcknowledgedBatchId]);return r.J(Un,o).next(c=>R.forEach(c,u=>{B(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=Mn(this.serializer,u);return Og(e,s.userId,h).next(()=>{})}))}))}yi(e){const t=e.store(xr),r=e.store(On);return e.store($n).get(Do).next(i=>{const s=[];return r.ee((o,c)=>{const u=new ie(o),h=function(m){return[0,$e(m)]}(u);s.push(t.get(h).next(f=>f?R.resolve():(m=>t.put({targetId:0,path:$e(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>R.waitFor(s))})}wi(e,t){e.createObjectStore(rs,{keyPath:dA});const r=t.store(rs),i=new Gu,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:$e(u)})}};return t.store(On).ee({Y:!0},(o,c)=>{const u=new ie(o);return s(u.popLast())}).next(()=>t.store(Vr).ee({Y:!0},([o,c,u],h)=>{const f=Rt(c);return s(f.popLast())}))}Si(e){const t=e.store(Or);return t.ee((r,i)=>{const s=Ni(i),o=Cg(this.serializer,s);return t.put(o)})}bi(e,t){const r=t.store(On),i=[];return r.ee((s,o)=>{const c=t.store(No),u=function(m){return m.document?new L(ie.fromString(m.document.name).popFirst(5)):m.noDocument?L.fromSegments(m.noDocument.path):m.unknownDocument?L.fromSegments(m.unknownDocument.path):F(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>R.waitFor(i))}Di(e,t){const r=t.store(gt),i=Bg(this.serializer),s=new Wu(va.Vi,this.serializer.yt);return r.J().next(o=>{const c=new Map;return o.forEach(u=>{var f;let h=(f=c.get(u.userId))!=null?f:X();Mn(this.serializer,u).keys().forEach(m=>h=h.add(m)),c.set(u.userId,h)}),R.forEach(c,(u,h)=>{const f=new Oe(h),m=Ta.wt(this.serializer,f),y=s.getIndexManager(f),b=wa.wt(f,this.serializer,y,s.referenceDelegate);return new qg(i,b,m,y).recalculateAndSaveOverlaysForDocumentKeys(new jc(t,ft.ce),u).next()})})}}function _f(n){n.createObjectStore(xr,{keyPath:lA}).createIndex(Cu,hA,{unique:!0}),n.createObjectStore(Or,{keyPath:"targetId"}).createIndex(Sm,uA,{unique:!0}),n.createObjectStore($n)}const rn="IndexedDbPersistence",gc=18e5,_c=5e3,yc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ZR="main";class Hu{constructor(e,t,r,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=s,this.window=o,this.document=c,this.Fi=h,this.Mi=f,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=y=>Promise.resolve(),!Hu.v())throw new O(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new BR(this,i),this.qi=t+ZR,this.serializer=new Pg(u),this.Ki=new mn(this.qi,this.xi,new XR(this.serializer)),this.ci=new PR,this.li=new MR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Bg(this.serializer),this.Pi=new SR,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&ze(rn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,yc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new ft(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}zi(e){return this.ki=t=>p(this,null,function*(){if(this.started)return e(t)}),e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K(t=>p(this,null,function*(){t.newVersion===null&&(yield e())}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(()=>p(this,null,function*(){this.started&&(yield this.$i())})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(e)).next(t=>this.isPrimary&&!t?this.Hi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(An(e))return D(rn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(rn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return wi(e).get(fr).next(t=>R.resolve(this.Xi(t)))}Yi(e){return Zs(e).delete(this.clientId)}es(){return p(this,null,function*(){if(this.isPrimary&&!this.ts(this.Li,gc)){this.Li=Date.now();const e=yield this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ce(t,Mr);return r.J().next(i=>{const s=this.ns(i,gc),o=i.filter(c=>s.indexOf(c)===-1);return R.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}})}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?R.resolve(!0):wi(e).get(fr).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,_c)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,yc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zs(e).J().next(r=>this.ns(r,_c).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D(rn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}shutdown(){return p(this,null,function*(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),yield this.Ki.runTransaction("shutdown","readwrite",[Es,Mr],e=>{const t=new jc(e,ft.ce);return this.Hi(t).next(()=>this.Yi(t))}),this.Ki.close(),this.ls()})}ns(e,t){return e.filter(r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>Zs(e).J().next(t=>this.ns(t,gc).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return wa.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new xR(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Ta.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){D(rn,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===18?PA:u===17?Om:u===16?SA:u===15?Du:u===14?Vm:u===13?Dm:u===12?bA:u===11?Nm:void F(60245)}(this.xi);let o;return this.Ki.runTransaction(e,i,s,c=>(o=new jc(c,this.ai?this.ai.next():ft.ce),t==="readwrite-primary"?this.ji(o).next(u=>!!u||this.Ji(o)).next(u=>{if(!u)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new O(C.FAILED_PRECONDITION,wm);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ps(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ps(e){return wi(e).get(fr).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,_c)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(C.FAILED_PRECONDITION,yc)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wi(e).put(fr,t)}static v(){return mn.v()}Hi(e){const t=wi(e);return t.get(fr).next(r=>this.Xi(r)?(D(rn,"Releasing primary lease."),t.delete(fr)):R.resolve())}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;pp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return D(rn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ze(rn,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch(e){}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wi(n){return Ce(n,Es)}function Zs(n){return Ce(n,Mr)}function eb(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=X(),i=X();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qu(e,t.fromCache,r,i)}}/**
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
 */class tb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return pp()?8:Am(be())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tb;return this.ys(e,t,o).next(c=>{if(s.result=c,this.As)return this.ws(e,t,o,c.size)})}).next(()=>s.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(Ir()<=ee.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Er(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Ir()<=ee.DEBUG&&D("QueryEngine","Query:",Er(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ir()<=ee.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Er(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pt(t))):R.resolve())}gs(e,t){if(Bd(t))return R.resolve(null);let r=pt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Mo(t,null,"F"),r=pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=X(...s);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(t,c);return this.bs(t,h,o,u.readTime)?this.gs(e,Mo(t,null,"F")):this.Ds(e,h,t,u)}))})))}ps(e,t,r,i){return Bd(t)||i.isEqual(q.min())?R.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(t,s);return this.bs(t,o,r,i)?R.resolve(null):(Ir()<=ee.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Er(t)),this.Ds(e,o,t,Jv(i,Xi)).next(c=>c))})}Ss(e,t){let r=new ae(tg(e));return t.forEach((i,s)=>{vs(e,s)&&(r=r.add(s))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return Ir()<=ee.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Er(t)),this.fs.getDocumentsMatchingQuery(e,t,at.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="LocalStore",nb=3e8;class rb{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new he(G),this.Fs=new jt(s=>Yn(s),Ts),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qg(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function jg(n,e,t,r){return new rb(n,e,t,r)}function Kg(n,e){return p(this,null,function*(){const t=K(n);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=X();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:c}))})})})}function ib(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,y=m.keys();let b=R.resolve();return y.forEach(k=>{b=b.next(()=>f.getEntry(u,k)).next(V=>{const N=h.docVersions.get(k);B(N!==null,48541),V.version.compareTo(N)<0&&(m.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Gg(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function sb(n,e){const t=K(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;c.push(t.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.li.addMatchingKeys(s,f.addedDocuments,m)));let b=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(ve.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),i=i.insert(m,b),function(V,N,j){return V.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=nb?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(y,b,f)&&c.push(t.li.updateTargetData(s,b))});let u=it(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(ob(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(q.min())){const f=t.li.getLastRemoteSnapshotVersion(s).next(m=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return R.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.vs=i,s))}function ob(n,e,t){let r=X(),i=X();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=it();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):D(Yu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function ab(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=qn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cb(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.li.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):t.li.allocateTargetId(r).next(o=>(i=new xt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}function ru(n,e,t){return p(this,null,function*(){const r=K(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!An(o))throw o;D(Yu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)})}function yf(n,e,t){const r=K(n);let i=q.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=K(u),y=m.Fs.get(f);return y!==void 0?R.resolve(m.vs.get(y)):m.li.getTargetData(h,f)}(r,o,pt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:q.min(),t?s:X())).next(c=>(ub(r,WA(e),c),{documents:c,ks:s})))}function ub(n,e,t){let r=n.Ms.get(e)||q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ms.set(e,r)}class If{constructor(){this.activeTargetIds=ZA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zg{constructor(){this.vo=new If,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new If,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="ConnectivityMonitor";class Tf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(Ef,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){D(Ef,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eo=null;function iu(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="RestConnection",hb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class db{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Vo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=iu(),c=this.Qo(e,t.toUriEncodedString());D(Ic,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(c),f=or(h);return this.zo(e,c,u,r,f).then(m=>(D(Ic,`Received RPC '${e}' ${o}: `,m),m),m=>{throw yn(Ic,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,t){const r=hb[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection",vi=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class kr extends db{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!kr.c_){const e=pm();vi(e,fm.STAT_EVENT,t=>{t.stat===Lc.PROXY?D(Fe,"STAT_EVENT: detected buffering proxy"):t.stat===Lc.NOPROXY&&D(Fe,"STAT_EVENT: detected no buffering proxy")}),kr.c_=!0}}zo(e,t,r,i,s){const o=iu();return new Promise((c,u)=>{const h=new hm;h.setWithCredentials(!0),h.listenOnce(dm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case uo.NO_ERROR:const m=h.getResponseJson();D(Fe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case uo.TIMEOUT:D(Fe,`RPC '${e}' ${o} timed out`),u(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const y=h.getStatus();if(D(Fe,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const k=b==null?void 0:b.error;if(k&&k.status&&k.message){const V=function(j){const $=j.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf($)>=0?$:C.UNKNOWN}(k.status);u(new O(V,k.message))}else u(new O(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new O(C.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{D(Fe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);D(Fe,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}T_(e,t,r){const i=iu(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");D(Fe,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);this.E_(f);let m=!1,y=!1;const b=new fb({Jo:k=>{y?D(Fe,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(D(Fe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),D(Fe,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Ho:()=>f.close()});return vi(f,Pi.EventType.OPEN,()=>{y||(D(Fe,`RPC '${e}' stream ${i} transport opened.`),b.i_())}),vi(f,Pi.EventType.CLOSE,()=>{y||(y=!0,D(Fe,`RPC '${e}' stream ${i} transport closed`),b.o_(),this.I_(f))}),vi(f,Pi.EventType.ERROR,k=>{y||(y=!0,yn(Fe,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),b.o_(new O(C.UNAVAILABLE,"The operation could not be completed")))}),vi(f,Pi.EventType.MESSAGE,k=>{var V;if(!y){const N=k.data[0];B(!!N,16349);const j=N,$=(j==null?void 0:j.error)||((V=j[0])==null?void 0:V.error);if($){D(Fe,`RPC '${e}' stream ${i} received error:`,$);const U=$.status;let W=function(T){const _=Ie[T];if(_!==void 0)return pg(_)}(U),H=$.message;U==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&yn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),W===void 0&&(W=C.INTERNAL,H="Unknown error status: "+U+" with message "+$.message),y=!0,b.o_(new O(W,H)),f.close()}else D(Fe,`RPC '${e}' stream ${i} received:`,N),b.__(N)}}),kr.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return mm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){return new kr(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){return typeof window!="undefined"?window:null}function Eo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){return new mR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kr.c_=!1;class Wg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="PersistentStream";class Hg{constructor(e,t,r,i,s,o,c,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Wg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return p(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}k_(){return p(this,null,function*(){if(this.O_())return this.close(0)})}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return p(this,null,function*(){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.t_(t)})}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(()=>p(this,null,function*(){this.state=0,this.start()}))}z_(e){return D(wf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(D(wf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gb extends Hg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yR(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Qe(o.readTime):q.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Xc(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=Oo(u)?{documents:wg(s,u)}:{query:ju(s,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=_g(s,o.resumeToken);const h=Yc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=Kr(s,o.snapshotVersion.toTimestamp());const h=Yc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=TR(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=Xc(this.serializer),t.removeTarget=e,this.q_(t)}}class _b extends Hg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return B(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,B(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){B(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=IR(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Xc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Fo(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{}class Ib extends yb{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Jc(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(C.UNKNOWN,s.toString())})}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Jc(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Eb(n,e,t,r){return new Ib(n,e,t,r)}class Tb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ze(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="RemoteStore";class wb{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(()=>p(this,null,function*(){ur(this)&&(D(tr,"Restarting streams for network reachability change."),yield function(u){return p(this,null,function*(){const h=K(u);h.Ia.add(4),yield Rs(h),h.Va.set("Unknown"),h.Ia.delete(4),yield Ra(h)})}(this))}))}),this.Va=new Tb(r,i)}}function Ra(n){return p(this,null,function*(){if(ur(n))for(const e of n.Ra)yield e(!0)})}function Rs(n){return p(this,null,function*(){for(const e of n.Ra)yield e(!1)})}function Qg(n,e){const t=K(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),el(t)?Zu(t):Xr(t).O_()&&Xu(t,e))}function Ju(n,e){const t=K(n),r=Xr(t);t.Ea.delete(e),r.O_()&&Yg(t,e),t.Ea.size===0&&(r.O_()?r.L_():ur(t)&&t.Va.set("Unknown"))}function Xu(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xr(n).Z_(e)}function Yg(n,e){n.da.$e(e),Xr(n).X_(e)}function Zu(n){n.da=new hR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Xr(n).start(),n.Va.ua()}function el(n){return ur(n)&&!Xr(n).x_()&&n.Ea.size>0}function ur(n){return K(n).Ia.size===0}function Jg(n){n.da=void 0}function vb(n){return p(this,null,function*(){n.Va.set("Online")})}function Ab(n){return p(this,null,function*(){n.Ea.forEach((e,t)=>{Xu(n,e)})})}function Rb(n,e){return p(this,null,function*(){Jg(n),el(n)?(n.Va.ha(e),Zu(n)):n.Va.set("Unknown")})}function bb(n,e,t){return p(this,null,function*(){if(n.Va.set("Online"),e instanceof gg&&e.state===2&&e.cause)try{yield function(i,s){return p(this,null,function*(){const o=s.cause;for(const c of s.targetIds)i.Ea.has(c)&&(yield i.remoteSyncer.rejectListen(c,o),i.Ea.delete(c),i.da.removeTarget(c))})}(n,e)}catch(r){D(tr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield jo(n,r)}else if(e instanceof yo?n.da.Xe(e):e instanceof mg?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const r=yield Gg(n.localStore);t.compareTo(r)>=0&&(yield function(s,o){const c=s.da.Tt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ea.get(h);f&&s.Ea.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=s.Ea.get(u);if(!f)return;s.Ea.set(u,f.withResumeToken(ve.EMPTY_BYTE_STRING,f.snapshotVersion)),Yg(s,u);const m=new xt(f.target,u,h,f.sequenceNumber);Xu(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t))}catch(r){D(tr,"Failed to raise snapshot:",r),yield jo(n,r)}})}function jo(n,e,t){return p(this,null,function*(){if(!An(e))throw e;n.Ia.add(1),yield Rs(n),n.Va.set("Offline"),t||(t=()=>Gg(n.localStore)),n.asyncQueue.enqueueRetryable(()=>p(this,null,function*(){D(tr,"Retrying IndexedDB access"),yield t(),n.Ia.delete(1),yield Ra(n)}))})}function Xg(n,e){return e().catch(t=>jo(n,t,e))}function bs(n){return p(this,null,function*(){const e=K(n),t=Tn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qn;for(;Sb(e);)try{const i=yield ab(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Pb(e,i)}catch(i){yield jo(e,i)}Zg(e)&&e_(e)})}function Sb(n){return ur(n)&&n.Ta.length<10}function Pb(n,e){n.Ta.push(e);const t=Tn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Zg(n){return ur(n)&&!Tn(n).x_()&&n.Ta.length>0}function e_(n){Tn(n).start()}function Cb(n){return p(this,null,function*(){Tn(n).ra()})}function kb(n){return p(this,null,function*(){const e=Tn(n);for(const t of n.Ta)e.ea(t.mutations)})}function Nb(n,e,t){return p(this,null,function*(){const r=n.Ta.shift(),i=Uu.from(r,e,t);yield Xg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),yield bs(n)})}function Db(n,e){return p(this,null,function*(){e&&Tn(n).Y_&&(yield function(r,i){return p(this,null,function*(){if(function(o){return cR(o)&&o!==C.ABORTED}(i.code)){const s=r.Ta.shift();Tn(r).B_(),yield Xg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield bs(r)}})}(n,e)),Zg(n)&&e_(n)})}function vf(n,e){return p(this,null,function*(){const t=K(n);t.asyncQueue.verifyOperationInProgress(),D(tr,"RemoteStore received new credentials");const r=ur(t);t.Ia.add(3),yield Rs(t),r&&t.Va.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),yield Ra(t)})}function Vb(n,e){return p(this,null,function*(){const t=K(n);e?(t.Ia.delete(2),yield Ra(t)):e||(t.Ia.add(2),yield Rs(t),t.Va.set("Unknown"))})}function Xr(n){return n.ma||(n.ma=function(t,r,i){const s=K(t);return s.sa(),new gb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:vb.bind(null,n),Yo:Ab.bind(null,n),t_:Rb.bind(null,n),H_:bb.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.ma.B_(),el(n)?Zu(n):n.Va.set("Unknown")):(yield n.ma.stop(),Jg(n))}))),n.ma}function Tn(n){return n.fa||(n.fa=function(t,r,i){const s=K(t);return s.sa(),new _b(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Cb.bind(null,n),t_:Db.bind(null,n),ta:kb.bind(null,n),na:Nb.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.fa.B_(),yield bs(n)):(yield n.fa.stop(),n.Ta.length>0&&(D(tr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new tl(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nl(n,e){if(ze("AsyncQueue",`${e}: ${n}`),An(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{static emptySet(e){return new Nr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Ci(),this.sortedSet=new he(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.ga=new he(L.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Gr{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Gr(e,t,Nr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class xb{constructor(){this.queries=Rf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=K(t),s=i.queries;i.queries=Rf(),s.forEach((o,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Rf(){return new jt(n=>eg(n),ma)}function rl(n,e){return p(this,null,function*(){const t=K(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Ob,r=e.Da()?0:1);try{switch(r){case 0:s.wa=yield t.onListen(i,!0);break;case 1:s.wa=yield t.onListen(i,!1);break;case 2:yield t.onFirstRemoteStoreListen(i)}}catch(o){const c=nl(o,`Initialization of query '${Er(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&sl(t)})}function il(n,e){return p(this,null,function*(){const t=K(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function Mb(n,e){const t=K(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.Sa)c.Fa(i)&&(r=!0);o.wa=i}}r&&sl(t)}function Lb(n,e,t){const r=K(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function sl(n){n.Ca.forEach(e=>{e.next()})}var su,bf;(bf=su||(su={})).Ma="default",bf.Cache="cache";class ol{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==su.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.key=e}}class n_{constructor(e){this.key=e}}class Fb{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.eu=tg(e),this.tu=new Nr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Af,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),b=vs(this.query,m)?m:null,k=!!y&&this.mutatedKeys.has(y.key),V=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;y&&b?y.data.isEqual(b.data)?k!==V&&(r.track({type:3,doc:b}),N=!0):this.su(y,b)||(r.track({type:2,doc:b}),N=!0,(u&&this.eu(b,u)>0||h&&this.eu(b,h)<0)&&(c=!0)):!y&&b?(r.track({type:0,doc:b}),N=!0):y&&!b&&(r.track({type:1,doc:y}),N=!0,(u||h)&&(c=!0)),N&&(b?(o=o.add(b),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:c,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(b,k){const V=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:N})}};return V(b)-V(k)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i!=null?i:!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new Gr(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Af,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new n_(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new t_(r))}),t}cu(e){this.Za=e.ks,this.Ya=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Gr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const al="SyncEngine";class Ub{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Bb{constructor(e){this.key=e,this.hu=!1}}class qb{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jt(c=>eg(c),ma),this.Eu=new Map,this.Iu=new Set,this.Ru=new he(L.comparator),this.Au=new Map,this.Vu=new zu,this.du={},this.mu=new Map,this.fu=er.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function $b(n,e,t=!0){return p(this,null,function*(){const r=c_(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=yield r_(r,e,t,!0),i})}function jb(n,e){return p(this,null,function*(){const t=c_(n);yield r_(t,e,!0,!1)})}function r_(n,e,t,r){return p(this,null,function*(){const i=yield cb(n.localStore,pt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=yield Kb(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Qg(n.remoteStore,i),c})}function Kb(n,e,t,r,i){return p(this,null,function*(){n.pu=(m,y,b)=>function(V,N,j,$){return p(this,null,function*(){let U=N.view.ru(j);U.bs&&(U=yield yf(V.localStore,N.query,!1).then(({documents:T})=>N.view.ru(T,U)));const W=$&&$.targetChanges.get(N.targetId),H=$&&$.targetMismatches.get(N.targetId)!=null,J=N.view.applyChanges(U,V.isPrimaryClient,W,H);return Pf(V,N.targetId,J.au),J.snapshot})}(n,m,y,b);const s=yield yf(n.localStore,e,!0),o=new Fb(e,s.ks),c=o.ru(s.documents),u=As.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);Pf(n,t,h.au);const f=new Ub(e,t,o);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot})}function Gb(n,e,t){return p(this,null,function*(){const r=K(n),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!ma(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||(yield ru(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ju(r.remoteStore,i.targetId),ou(r,i.targetId)}).catch(cr))):(ou(r,i.targetId),yield ru(r.localStore,i.targetId,!0))})}function zb(n,e){return p(this,null,function*(){const t=K(n),r=t.Tu.get(e),i=t.Eu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ju(t.remoteStore,r.targetId))})}function Wb(n,e,t){return p(this,null,function*(){const r=u_(n);try{const i=yield function(o,c){const u=K(o),h=se.now(),f=c.reduce((b,k)=>b.add(k.key),X());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=it(),V=X();return u.xs.getEntries(b,f).next(N=>{k=N,k.forEach((j,$)=>{$.isValidDocument()||(V=V.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,k)).next(N=>{m=N;const j=[];for(const $ of c){const U=sR($,m.get($.key).overlayedDocument);U!=null&&j.push(new Kt($.key,U,Km(U.value.mapValue),Be.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,j,c)}).next(N=>{y=N;const j=N.applyToLocalDocumentSet(m,V);return u.documentOverlayCache.saveOverlays(b,N.batchId,j)})}).then(()=>({batchId:y.batchId,changes:rg(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.du[o.currentUser.toKey()];h||(h=new he(G)),h=h.insert(c,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,t),yield Ss(r,i.changes),yield bs(r.remoteStore)}catch(i){const s=nl(i,"Failed to persist write");t.reject(s)}})}function i_(n,e){return p(this,null,function*(){const t=K(n);try{const r=yield sb(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&(B(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?B(o.hu,14607):i.removedDocuments.size>0&&(B(o.hu,42227),o.hu=!1))}),yield Ss(t,r,e)}catch(r){yield cr(r)}})}function Sf(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=K(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.Sa)y.va(c)&&(h=!0)}),h&&sl(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function Hb(n,e,t){return p(this,null,function*(){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new he(L.comparator);o=o.insert(s,pe.newNoDocument(s,q.min()));const c=X().add(s),u=new Ea(q.min(),new Map,new he(G),o,c);yield i_(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),cl(r)}else yield ru(r.localStore,e,!1).then(()=>ou(r,e,t)).catch(cr)})}function Qb(n,e){return p(this,null,function*(){const t=K(n),r=e.batch.batchId;try{const i=yield ib(t.localStore,e);o_(t,r,null),s_(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield Ss(t,i)}catch(i){yield cr(i)}})}function Yb(n,e,t){return p(this,null,function*(){const r=K(n);try{const i=yield function(o,c){const u=K(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(B(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);o_(r,e,t),s_(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield Ss(r,i)}catch(i){yield cr(i)}})}function s_(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function o_(n,e,t){const r=K(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function ou(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||a_(n,r)})}function a_(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Ju(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),cl(n))}function Pf(n,e,t){for(const r of t)r instanceof t_?(n.Vu.addReference(r.key,e),Jb(n,r)):r instanceof n_?(D(al,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||a_(n,r.key)):F(19791,{wu:r})}function Jb(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(D(al,"New document in limbo: "+t),n.Iu.add(r),cl(n))}function cl(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(ie.fromString(e)),r=n.fu.next();n.Au.set(r,new Bb(t)),n.Ru=n.Ru.insert(t,r),Qg(n.remoteStore,new xt(pt(ws(t.path)),r,"TargetPurposeLimboResolution",ft.ce))}}function Ss(n,e,t){return p(this,null,function*(){const r=K(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{o.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Qu.Is(u.targetId,h);s.push(m)}}))}),yield Promise.all(o),r.Pu.H_(i),yield function(u,h){return p(this,null,function*(){const f=K(u);try{yield f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>R.forEach(h,y=>R.forEach(y.Ts,b=>f.persistence.referenceDelegate.addReference(m,y.targetId,b)).next(()=>R.forEach(y.Es,b=>f.persistence.referenceDelegate.removeReference(m,y.targetId,b)))))}catch(m){if(!An(m))throw m;D(Yu,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const b=f.vs.get(y),k=b.snapshotVersion,V=b.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(y,V)}}})}(r.localStore,s))})}function Xb(n,e){return p(this,null,function*(){const t=K(n);if(!t.currentUser.isEqual(e)){D(al,"User change. New user:",e.toKey());const r=yield Kg(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(c=>{c.forEach(u=>{u.reject(new O(C.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield Ss(t,r.Ns)}})}function Zb(n,e){const t=K(n),r=t.Au.get(e);if(r&&r.hu)return X().add(r.key);{let i=X();const s=t.Eu.get(e);if(!s)return i;for(const o of s){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function c_(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=i_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hb.bind(null,e),e.Pu.H_=Mb.bind(null,e.eventManager),e.Pu.yu=Lb.bind(null,e.eventManager),e}function u_(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class us{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)})}Fu(e,t){return null}Mu(e,t){return null}vu(e){return jg(this.persistence,new $g,e.initialUser,this.serializer)}Cu(e){return new Wu(va.Vi,this.serializer)}Du(e){return new zg}terminate(){return p(this,null,function*(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}us.provider={build:()=>new us};class eS extends us{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){B(this.persistence.referenceDelegate instanceof $o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Lg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new Wu(r=>$o.Vi(r,t),this.serializer)}}class ul extends us{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){yield Zt(ul.prototype,this,"initialize").call(this,e),yield this.xu.initialize(this,e),yield u_(this.xu.syncEngine),yield bs(this.xu.remoteStore),yield this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))})}vu(e){return jg(this.persistence,new $g,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Lg(r,e.asyncQueue,t)}Mu(e,t){const r=new tA(t,this.persistence);return new eA(e.asyncQueue,r)}Cu(e){const t=eb(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new Hu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,mb(),Eo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new zg}}class Ko{initialize(e,t){return p(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xb.bind(null,this.syncEngine),yield Vb(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new xb}()}createDatastore(e){const t=Aa(e.databaseInfo.databaseId),r=pb(e.databaseInfo);return Eb(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new wb(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Sf(this.syncEngine,t,0),function(){return Tf.v()?new Tf:new lb}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){const m=new qb(i,s,o,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return p(this,null,function*(){var e,t;yield function(i){return p(this,null,function*(){const s=K(i);D(tr,"RemoteStore shutting down."),s.Ia.add(5),yield Rs(s),s.Aa.shutdown(),s.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()})}}Ko.provider={build:()=>new Ko};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ll{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="FirestoreClient";class tS{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,o=>p(this,null,function*(){D(wn,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,o=>(D(wn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>p(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=nl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function Ec(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),D(wn,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(i=>p(this,null,function*(){r.isEqual(i)||(yield Kg(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e})}function Cf(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield nS(n);D(wn,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>vf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>vf(e.remoteStore,i)),n._onlineComponents=e})}function nS(n){return p(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(wn,"Using user provided OfflineComponentProvider");try{yield Ec(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;yn("Error using user provided cache. Falling back to memory cache: "+t),yield Ec(n,new us)}}else D(wn,"Using default OfflineComponentProvider"),yield Ec(n,new eS(void 0));return n._offlineComponents})}function hl(n){return p(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(wn,"Using user provided OnlineComponentProvider"),yield Cf(n,n._uninitializedComponentsProvider._online)):(D(wn,"Using default OnlineComponentProvider"),yield Cf(n,new Ko))),n._onlineComponents})}function rS(n){return hl(n).then(e=>e.syncEngine)}function iS(n){return hl(n).then(e=>e.datastore)}function Go(n){return p(this,null,function*(){const e=yield hl(n),t=e.eventManager;return t.onListen=$b.bind(null,e.syncEngine),t.onUnlisten=Gb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zb.bind(null,e.syncEngine),t})}function sS(n,e,t,r){const i=new ll(r),s=new ol(e,i,t);return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return rl(yield Go(n),s)})),()=>{i.Nu(),n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return il(yield Go(n),s)}))}}function oS(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,c,u,h){const f=new ll({next:y=>{f.Nu(),o.enqueueAndForget(()=>il(s,m));const b=y.docs.has(c);!b&&y.fromCache?h.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&u&&u.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new ol(ws(c.path),f,{includeMetadataChanges:!0,qa:!0});return rl(s,m)}(yield Go(n),n.asyncQueue,e,t,r)})),r.promise}function aS(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,c,u,h){const f=new ll({next:y=>{f.Nu(),o.enqueueAndForget(()=>il(s,m)),y.fromCache&&u.source==="server"?h.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new ol(c,f,{includeMetadataChanges:!0,qa:!0});return rl(s,m)}(yield Go(n),n.asyncQueue,e,t,r)})),r.promise}function cS(n,e,t){const r=new yt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){try{const i=yield iS(n);r.resolve(function(o,c,u){return p(this,null,function*(){var V;const h=K(o),{request:f,gt:m,parent:y}=ER(h.serializer,GA(c),u);h.connection.qo||delete f.parent;const b=(yield h.jo("RunAggregationQuery",h.serializer.databaseId,y,f,1)).filter(N=>!!N.result);B(b.length===1,64727);const k=(V=b[0].result)==null?void 0:V.aggregateFields;return Object.keys(k).reduce((N,j)=>(N[m[j]]=k[j],N),{})})}(i,e,t))}catch(i){r.reject(i)}})),r.promise}function uS(n,e){const t=new yt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return Wb(yield rS(n),e,t)})),t.promise}/**
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
 */function l_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="ComponentProvider",kf=new Map;function hS(n,e,t,r,i){return new NA(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,l_(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="firestore.googleapis.com",Nf=!0;class Df{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h_,this.ssl=Nf}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:Nf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LR)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l_((r=e.experimentalLongPollingOptions)!=null?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ba{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Df({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Df(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Uv;switch(r.type){case"firstParty":return new jv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return p(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=kf.get(t);r&&(D(lS,"Removing Datastore"),kf.delete(t),r.terminate())}(this),Promise.resolve()}}function dS(n,e,t,r={}){var h;n=qe(n,ba);const i=or(e),s=n._getSettings(),o=Ve(Y({},s),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&fu(`https://${c}`),s.host!==h_&&s.host!==c&&yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Ve(Y({},s),{host:c,ssl:i,emulatorOptions:r});if(!_n(u,o)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Oe.MOCK_USER;else{f=dp(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Oe(y)}n._authCredentials=new Bv(new _m(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Is(t,me._jsonSchema))return new me(e,r||null,new L(ie.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:we("string",me._jsonSchemaVersion),referencePath:we("string")};class gn extends Gt{constructor(e,t,r){super(e,t,ws(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new L(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function tk(n,e,...t){if(n=z(n),Im("collection","path",e),n instanceof ba){const r=ie.fromString(e,...t);return Td(r),new gn(n,null,r)}{if(!(n instanceof me||n instanceof gn))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Td(r),new gn(n.firestore,null,r)}}function fS(n,e,...t){if(n=z(n),arguments.length===1&&(e=bu.newId()),Im("doc","path",e),n instanceof ba){const r=ie.fromString(e,...t);return Ed(r),new me(n,null,new L(r))}{if(!(n instanceof me||n instanceof gn))throw new O(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Ed(r),new me(n.firestore,n instanceof gn?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="AsyncQueue";class Of{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Wg(this,"async_queue_retry"),this._c=()=>{const r=Eo();r&&D(Vf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Eo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new yt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}lc(){return p(this,null,function*(){if(this.Yu.length!==0){try{yield this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!An(e))throw e;D(Vf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}})}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ze("INTERNAL UNHANDLED ERROR: ",xf(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=tl.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:xf(this.nc)})}verifyOperationInProgress(){}Tc(){return p(this,null,function*(){let e;do e=this.ac,yield e;while(e!==this.ac)})}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function xf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Et extends ba{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Of,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return p(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Of(e),this._firestoreClient=void 0,yield e}})}}function nk(n,e){const t=typeof n=="object"?n:ps(),r=typeof n=="string"?n:e||Vo,i=qt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=up("firestore");s&&dS(i,...s)}return i}function Ps(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||d_(n),n._firestoreClient}function d_(n){var r,i,s,o;const e=n._freezeSettings(),t=hS(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new tS(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}function rk(n,e){yn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return pS(n,Ko.provider,{build:r=>new ul(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function pS(n,e,t){if((n=qe(n,Et))._firestoreClient||n._terminated)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new O(C.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},d_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dt(ve.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dt(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Is(e,dt._jsonSchema))return dt.fromBase64String(e.bytes)}}dt._jsonSchemaVersion="firestore/bytes/1.0",dt._jsonSchema={type:we("string",dt._jsonSchemaVersion),bytes:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pt._jsonSchemaVersion}}static fromJSON(e){if(Is(e,Pt._jsonSchema))return new Pt(e.latitude,e.longitude)}}Pt._jsonSchemaVersion="firestore/geoPoint/1.0",Pt._jsonSchema={type:we("string",Pt._jsonSchemaVersion),latitude:we("number"),longitude:we("number")};/**
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
 */class It{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:It._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Is(e,It._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new It(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}It._jsonSchemaVersion="firestore/vectorValue/1.0",It._jsonSchema={type:we("string",It._jsonSchemaVersion),vectorValues:we("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=/^__.*__$/;class gS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jr(e,this.data,t,this.fieldTransforms)}}class f_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function p_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class Sa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Sa(Y(Y({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return zo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(p_(this.dataSource)&&mS.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class _S{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Aa(e)}A(e,t,r,i=!1){return new Sa({dataSource:e,methodName:t,targetDoc:r,path:de.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pa(n){const e=n._freezeSettings(),t=Aa(n._databaseId);return new _S(n._databaseId,!!e.ignoreUndefinedProperties,t)}function m_(n,e,t,r,i,s={}){const o=n.A(s.merge||s.mergeFields?2:0,e,t,i);gl("Data must be an object, but it was:",o,r);const c=g_(r,o);let u,h;if(s.merge)u=new Xe(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=nr(e,m,t);if(!o.contains(y))throw new O(C.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);I_(f,y)||f.push(y)}u=new Xe(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new gS(new Me(c),u,h)}class Ca extends Zr{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ca}}function yS(n,e,t){return new Sa({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fl extends Zr{_toFieldTransform(e){return new _a(e.path,new qr)}isEqual(e){return e instanceof fl}}class pl extends Zr{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=yS(this,e,!0),r=this.Sc.map(s=>ei(s,t)),i=new Jn(r);return new _a(e.path,i)}isEqual(e){return e instanceof pl&&_n(this.Sc,e.Sc)}}class ml extends Zr{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new jr(e.serializer,og(e.serializer,this.bc));return new _a(e.path,t)}isEqual(e){return e instanceof ml&&this.bc===e.bc}}function IS(n,e,t,r){const i=n.A(1,e,t);gl("Data must be an object, but it was:",i,r);const s=[],o=Me.empty();Rn(r,(u,h)=>{const f=y_(e,u,t);h=z(h);const m=i.fc(f);if(h instanceof Ca)s.push(f);else{const y=ei(h,m);y!=null&&(s.push(f),o.set(f,y))}});const c=new Xe(s);return new f_(o,c,i.fieldTransforms)}function ES(n,e,t,r,i,s){const o=n.A(1,e,t),c=[nr(e,r,t)],u=[i];if(s.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)c.push(nr(e,s[y])),u.push(s[y+1]);const h=[],f=Me.empty();for(let y=c.length-1;y>=0;--y)if(!I_(h,c[y])){const b=c[y];let k=u[y];k=z(k);const V=o.fc(b);if(k instanceof Ca)h.push(b);else{const N=ei(k,V);N!=null&&(h.push(b),f.set(b,N))}}const m=new Xe(h);return new f_(f,m,o.fieldTransforms)}function TS(n,e,t,r=!1){return ei(t,n.A(r?4:3,e))}function ei(n,e){if(__(n=z(n)))return gl("Unsupported field value:",e,n),g_(n,e);if(n instanceof Zr)return function(r,i){if(!p_(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=ei(c,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return og(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=se.fromDate(r);return{timestampValue:Kr(i.serializer,s)}}if(r instanceof se){const s=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kr(i.serializer,s)}}if(r instanceof Pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dt)return{bytesValue:_g(i.serializer,r._byteString)};if(r instanceof me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$u(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof It)return function(o,c){const u=o instanceof It?o.toArray():o;return{mapValue:{fields:{[Ou]:{stringValue:xu},[Lr]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return Lu(c.serializer,f)})}}}}}}(r,i);if(Sg(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${aa(r)}`)}(n,e)}function g_(n,e){const t={};return xm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rn(n,(r,i)=>{const s=ei(i,e.dc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function __(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Pt||n instanceof dt||n instanceof me||n instanceof Zr||n instanceof It||Sg(n))}function gl(n,e,t){if(!__(t)||!Em(t)){const r=aa(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function nr(n,e,t){if((e=z(e))instanceof dl)return e._internalPath;if(typeof e=="string")return y_(n,e);throw zo("Field path arguments must be of type string or ",n,!1,void 0,t)}const wS=new RegExp("[~\\*/\\[\\]]");function y_(n,e,t){if(e.search(wS)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dl(...e.split("."))._internalPath}catch(r){throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new O(C.INVALID_ARGUMENT,c+n+u)}function I_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{convertValue(e,t="none"){switch(In(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[Lr].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>le(o.doubleValue));return new It(t)}convertGeoPoint(e){return new Pt(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(is(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);B(bg(r),9688,{name:e});const i=new Qn(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class ka extends vS{constructor(e){super(),this.firestore=e}convertBytes(e){return new dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function ik(){return new fl("serverTimestamp")}function sk(...n){return new pl("arrayUnion",n)}function ok(n){return new ml("increment",n)}const Mf="@firebase/firestore",Lf="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class AS{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class RS{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Me({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e,t;return(t=(e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)!=null?t:void 0}get(e){if(this._document){const t=this._document.data.field(nr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bS extends E_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _l{}class yl extends _l{}function ak(n,e,...t){let r=[];e instanceof _l&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Il).length,c=s.filter(u=>u instanceof Na).length;if(o>1||o>0&&c>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Na extends yl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Na(e,t,r)}_apply(e){const t=this._parse(e);return w_(e._query,t),new Gt(e.firestore,e.converter,Qc(e._query,t))}_parse(e){const t=Pa(e.firestore);return function(s,o,c,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bf(m,f);const k=[];for(const V of m)k.push(Uf(u,s,V));y={arrayValue:{values:k}}}else y=Uf(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bf(m,f),y=TS(c,o,m,f==="in"||f==="not-in");return te.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ck(n,e,t){const r=e,i=nr("where",n);return Na._create(i,r,t)}class Il extends _l{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Il(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)w_(o,u),o=Qc(o,u)}(e._query,t),new Gt(e.firestore,e.converter,Qc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class El extends yl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new El(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cs(s,o)}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,zA(e._query,t))}}function uk(n,e="asc"){const t=e,r=nr("orderBy",n);return El._create(r,t)}class Tl extends yl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Tl(e,t,r)}_apply(e){return new Gt(e.firestore,e.converter,Mo(e._query,this._limit,this._limitType))}}function lk(n){return Yv("limit",n),Tl._create("limit",n,"F")}function Uf(n,e,t){if(typeof(t=z(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xm(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!L.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return os(n,new L(r))}if(t instanceof me)return os(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aa(t)}.`)}function Bf(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function w_(n,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function v_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}function SS(){return new AS("count")}/**
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
 */function hk(n){return PS(n,{count:SS()})}function PS(n,e){const t=qe(n.firestore,Et),r=Ps(t),i=CA(e,(s,o)=>new oR(o,s.aggregateType,s._internalFieldPath));return cS(r,n._query,i).then(s=>function(c,u,h){const f=new ka(c);return new RS(u,f,h)}(t,n,s))}class Di{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kn extends E_{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Kn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Kn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kn._jsonSchema={type:we("string",Kn._jsonSchemaVersion),bundleSource:we("string","DocumentSnapshot"),bundleName:we("string"),bundle:we("string")};class To extends Kn{data(e={}){return super.data(e)}}class Gn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Di(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new To(this._firestore,this._userDataWriter,r.key,r,new Di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new To(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Di(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new To(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Di(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:CS(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */Gn._jsonSchemaVersion="firestore/querySnapshot/1.0",Gn._jsonSchema={type:we("string",Gn._jsonSchemaVersion),bundleSource:we("string","QuerySnapshot"),bundleName:we("string"),bundle:we("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(n){n=qe(n,me);const e=qe(n.firestore,Et),t=Ps(e);return oS(t,n._key).then(r=>A_(e,n,r))}function fk(n){n=qe(n,Gt);const e=qe(n.firestore,Et),t=Ps(e),r=new ka(e);return T_(n._query),aS(t,n._query).then(i=>new Gn(e,r,n,i))}function pk(n,e,t){n=qe(n,me);const r=qe(n.firestore,Et),i=v_(n.converter,e,t),s=Pa(r);return Da(r,[m_(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Be.none())])}function mk(n,e,t,...r){n=qe(n,me);const i=qe(n.firestore,Et),s=Pa(i);let o;return o=typeof(e=z(e))=="string"||e instanceof dl?ES(s,"updateDoc",n._key,e,t,r):IS(s,"updateDoc",n._key,e),Da(i,[o.toMutation(n._key,Be.exists(!0))])}function gk(n){return Da(qe(n.firestore,Et),[new Ia(n._key,Be.none())])}function _k(n,e){const t=qe(n.firestore,Et),r=fS(n),i=v_(n.converter,e),s=Pa(n.firestore);return Da(t,[m_(s,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then(()=>r)}function yk(n,...e){var h,f,m;n=z(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Ff(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ff(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(m=y.complete)==null?void 0:m.bind(y)}let s,o,c;if(n instanceof me)o=qe(n.firestore,Et),c=ws(n._key.path),s={next:y=>{e[r]&&e[r](A_(o,n,y))},error:e[r+1],complete:e[r+2]};else{const y=qe(n,Gt);o=qe(y.firestore,Et),c=y._query;const b=new ka(o);s={next:k=>{e[r]&&e[r](new Gn(o,b,y,k))},error:e[r+1],complete:e[r+2]},T_(n._query)}const u=Ps(o);return sS(u,c,i,s)}function Da(n,e){const t=Ps(n);return uS(t,e)}function A_(n,e,t){const r=t.docs.get(e._key),i=new ka(n);return new Kn(n,i,e._key,r,new Di(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Fv(ar),ot(new tt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new Et(new qv(r.getProvider("auth-internal")),new Kv(o,r.getProvider("app-check-internal")),DA(o,i),o);return s=Y({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),We(Mf,Lf,e),We(Mf,Lf,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="firebasestorage.googleapis.com",b_="storageBucket",kS=2*60*1e3,NS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Tt{constructor(e,t,r=0){super(Tc(e),`Firebase Storage: ${t} (${Tc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function Tc(n){return"storage/"+n}function wl(){const n="An unknown error occurred, please check the error payload for server response.";return new _e(ge.UNKNOWN,n)}function DS(n){return new _e(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function VS(n){return new _e(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(ge.UNAUTHENTICATED,n)}function xS(){return new _e(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function MS(n){return new _e(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function LS(){return new _e(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FS(){return new _e(ge.CANCELED,"User canceled the upload/download.")}function US(n){return new _e(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function BS(n){return new _e(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qS(){return new _e(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+b_+"' property when initializing the app?")}function $S(){return new _e(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jS(){return new _e(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KS(n){return new _e(ge.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function au(n){return new _e(ge.INVALID_ARGUMENT,n)}function S_(){return new _e(ge.APP_DELETED,"The Firebase app was deleted.")}function GS(n){return new _e(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zi(n,e){return new _e(ge.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ai(n){throw new _e(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=st.makeFromUrl(e,t)}catch(i){return new st(e,"")}if(r.path==="")return r;throw BS(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(W){W.path_=decodeURIComponent(W.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${f}/b/${i}/o${y}`,"i"),k={bucket:1,path:3},V=t===R_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,N="([^?#]*)",j=new RegExp(`^https?://${V}/${i}/${N}`,"i"),U=[{regex:c,indices:u,postModify:s},{regex:b,indices:k,postModify:h},{regex:j,indices:{bucket:1,path:2},postModify:h}];for(let W=0;W<U.length;W++){const H=U[W],J=H.regex.exec(e);if(J){const T=J[H.indices.bucket];let _=J[H.indices.path];_||(_=""),r=new st(T,_),H.postModify(r);break}}if(r==null)throw US(e);return r}}class zS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(n,e,t){let r=1,i=null,s=null,o=!1,c=0;function u(){return c===2}let h=!1;function f(...N){h||(h=!0,e.apply(null,N))}function m(N){i=setTimeout(()=>{i=null,n(b,u())},N)}function y(){s&&clearTimeout(s)}function b(N,...j){if(h){y();return}if(N){y(),f.call(null,N,...j);return}if(u()||o){y(),f.call(null,N,...j);return}r<64&&(r*=2);let U;c===1?(c=2,U=0):U=(r+Math.random())*1e3,m(U)}let k=!1;function V(N){k||(k=!0,y(),!h&&(i!==null?(N||(c=2),clearTimeout(i),m(0)):N||(c=1)))}return m(0),s=setTimeout(()=>{o=!0,V(!0)},t),V}function HS(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(n){return n!==void 0}function YS(n){return typeof n=="object"&&!Array.isArray(n)}function vl(n){return typeof n=="string"||n instanceof String}function qf(n){return Al()&&n instanceof Blob}function Al(){return typeof Blob!="undefined"}function $f(n,e,t,r){if(r<e)throw au(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw au(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function P_(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var zn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(zn||(zn={}));/**
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
 */function JS(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t,r,i,s,o,c,u,h,f,m,y=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=y,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,V)=>{this.resolve_=k,this.reject_=V,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new to(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===zn.NO_ERROR,u=s.getStatus();if(!c||JS(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===zn.ABORT;r(!1,new to(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new to(h,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());QS(u)?s(u):s()}catch(u){o(u)}else if(c!==null){const u=wl();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?S_():FS();o(u)}else{const u=LS();o(u)}};this.canceled_?t(!1,new to(!1,null,!0)):this.backoffId_=WS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class to{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ZS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function eP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function tP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function nP(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function rP(n,e,t,r,i,s,o=!0,c=!1){const u=P_(n.urlParams),h=n.url+u,f=Object.assign({},n.headers);return tP(f,e),ZS(f,t),eP(f,s),nP(f,r),new XS(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function sP(...n){const e=iP();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Al())return new Blob(n);throw new _e(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oP(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function aP(n){if(typeof atob=="undefined")throw KS("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wc{constructor(e,t){this.data=e,this.contentType=t||null}}function cP(n,e){switch(n){case St.RAW:return new wc(C_(e));case St.BASE64:case St.BASE64URL:return new wc(k_(n,e));case St.DATA_URL:return new wc(lP(e),hP(e))}throw wl()}function C_(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uP(n){let e;try{e=decodeURIComponent(n)}catch(t){throw zi(St.DATA_URL,"Malformed data URL.")}return C_(e)}function k_(n,e){switch(n){case St.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw zi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw zi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=aP(e)}catch(i){throw i.message.includes("polyfill")?i:zi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class N_{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw zi(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=dP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lP(n){const e=new N_(n);return e.base64?k_(St.BASE64,e.rest):uP(e.rest)}function hP(n){return new N_(n).contentType}function dP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){let r=0,i="";qf(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(qf(this.data_)){const r=this.data_,i=oP(r,e,t);return i===null?null:new cn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new cn(r,!0)}}static getBlob(...e){if(Al()){const t=e.map(r=>r instanceof cn?r.data_:r);return new cn(sP.apply(null,t))}else{const t=e.map(o=>vl(o)?cP(St.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[s++]=o[c]}),new cn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n){let e;try{e=JSON.parse(n)}catch(t){return null}return YS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function pP(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function V_(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(n,e){return e}class Ge{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||mP}}let no=null;function gP(n){return!vl(n)||n.length<2?n:V_(n)}function O_(){if(no)return no;const n=[];n.push(new Ge("bucket")),n.push(new Ge("generation")),n.push(new Ge("metageneration")),n.push(new Ge("name","fullPath",!0));function e(s,o){return gP(o)}const t=new Ge("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Ge("size");return i.xform=r,n.push(i),n.push(new Ge("timeCreated")),n.push(new Ge("updated")),n.push(new Ge("md5Hash",null,!0)),n.push(new Ge("cacheControl",null,!0)),n.push(new Ge("contentDisposition",null,!0)),n.push(new Ge("contentEncoding",null,!0)),n.push(new Ge("contentLanguage",null,!0)),n.push(new Ge("contentType",null,!0)),n.push(new Ge("metadata","customMetadata",!0)),no=n,no}function _P(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new st(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function yP(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return _P(r,n),r}function x_(n,e,t){const r=D_(e);return r===null?null:yP(n,r,t)}function IP(n,e,t,r){const i=D_(e);if(i===null||!vl(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=n.bucket,m=n.fullPath,y="/b/"+o(f)+"/o/"+o(m),b=Rl(y,t,r),k=P_({alt:"media",token:h});return b+k})[0]}function EP(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class M_{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n){if(!n)throw wl()}function TP(n,e){function t(r,i){const s=x_(n,i,e);return L_(s!==null),s}return t}function wP(n,e){function t(r,i){const s=x_(n,i,e);return L_(s!==null),IP(s,i,n.host,n._protocol)}return t}function F_(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=xS():i=OS():t.getStatus()===402?i=VS(n.bucket):t.getStatus()===403?i=MS(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vP(n){const e=F_(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=DS(n.path)),s.serverResponse=i.serverResponse,s}return t}function AP(n,e,t){const r=e.fullServerUrl(),i=Rl(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,c=new M_(i,s,wP(n,t),o);return c.errorHandler=vP(e),c}function RP(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function bP(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=RP(null,e)),r}function SP(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let U="";for(let W=0;W<2;W++)U=U+Math.random().toString().slice(2);return U}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const h=bP(e,r,i),f=EP(h,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+u+"--",b=cn.getBlob(m,r,y);if(b===null)throw $S();const k={name:h.fullPath},V=Rl(s,n.host,n._protocol),N="POST",j=n.maxUploadRetryTime,$=new M_(V,N,TP(n,t),j);return $.urlParams=k,$.headers=o,$.body=b.uploadData(),$.errorHandler=F_(e),$}class PP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,s){if(this.sent_)throw Ai("cannot .send() more than once");if(or(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ai("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ai("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Ai("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ai("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class CP extends PP{initXhr(){this.xhr_.responseType="text"}}function U_(){return new CP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){this._service=e,t instanceof st?this._location=t:this._location=st.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new rr(e,t)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V_(this._location.path)}get storage(){return this._service}get parent(){const e=fP(this._location.path);if(e===null)return null;const t=new st(this._location.bucket,e);return new rr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw GS(e)}}function kP(n,e,t){n._throwIfRoot("uploadBytes");const r=SP(n.storage,n._location,O_(),new cn(e,!0),t);return n.storage.makeRequestWithTokens(r,U_).then(i=>({metadata:i,ref:n}))}function NP(n){n._throwIfRoot("getDownloadURL");const e=AP(n.storage,n._location,O_());return n.storage.makeRequestWithTokens(e,U_).then(t=>{if(t===null)throw jS();return t})}function DP(n,e){const t=pP(n._location.path,e),r=new st(n._location.bucket,t);return new rr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(n){return/^[A-Za-z]+:\/\//.test(n)}function OP(n,e){return new rr(n,e)}function B_(n,e){if(n instanceof bl){const t=n;if(t._bucket==null)throw qS();const r=new rr(t,t._bucket);return e!=null?B_(r,e):r}else return e!==void 0?DP(n,e):n}function xP(n,e){if(e&&VP(e)){if(n instanceof bl)return OP(n,e);throw au("To use ref(service, url), the first argument must be a Storage instance.")}else return B_(n,e)}function jf(n,e){const t=e==null?void 0:e[b_];return t==null?null:st.makeFromBucketSpec(t,n)}function MP(n,e,t,r={}){n.host=`${e}:${t}`;const i=or(e);i&&fu(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:dp(s,n.app.options.projectId))}class bl{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=R_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kS,this._maxUploadRetryTime=NS,this._requests=new Set,i!=null?this._bucket=st.makeFromBucketSpec(i,this._host):this._bucket=jf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=jf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$f("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$f("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return p(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return p(this,null,function*(){if(Te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rr(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new zS(S_());{const o=rP(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}makeRequestWithTokens(e,t){return p(this,null,function*(){const[r,i]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()})}}const Kf="@firebase/storage",Gf="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="storage";function Ik(n,e,t){return n=z(n),kP(n,e,t)}function Ek(n){return n=z(n),NP(n)}function Tk(n,e){return n=z(n),xP(n,e)}function wk(n=ps(),e){n=z(n);const r=qt(n,q_).getImmediate({identifier:e}),i=up("storage");return i&&LP(r,...i),r}function LP(n,e,t,r={}){MP(n,e,t,r)}function FP(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new bl(t,r,i,e,ar)}function UP(){ot(new tt(q_,FP,"PUBLIC").setMultipleInstances(!0)),We(Kf,Gf,""),We(Kf,Gf,"esm2020")}UP();const $_="@firebase/installations",Sl="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=1e4,K_=`w:${Sl}`,G_="FIS_v2",BP="https://firebaseinstallations.googleapis.com/v1",qP=60*60*1e3,$P="installations",jP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ir=new vn($P,jP,KP);function z_(n){return n instanceof Tt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_({projectId:n}){return`${BP}/projects/${n}/installations`}function H_(n){return{token:n.token,requestStatus:2,expiresIn:zP(n.expiresIn),creationTime:Date.now()}}function Q_(n,e){return p(this,null,function*(){const r=(yield e.json()).error;return ir.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function Y_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function GP(n,{refreshToken:e}){const t=Y_(n);return t.append("Authorization",WP(e)),t}function J_(n){return p(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function zP(n){return Number(n.replace("s","000"))}function WP(n){return`${G_} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=W_(n),o=Y_(n),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={fid:t,authVersion:G_,appId:n.appId,sdkVersion:K_},h={method:"POST",headers:o,body:JSON.stringify(u)},f=yield J_(()=>fetch(s,h));if(f.ok){const m=yield f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:H_(m.authToken)}}else throw yield Q_("Create Installation",f)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/^[cdef][\w-]{21}$/,cu="";function JP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=XP(n);return YP.test(t)?t:cu}catch(n){return cu}}function XP(n){return QP(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new Map;function ey(n,e){const t=Va(n);ty(t,e),ZP(t,e)}function ty(n,e){const t=Z_.get(n);if(t)for(const r of t)r(e)}function ZP(n,e){const t=eC();t&&t.postMessage({key:n,fid:e}),tC()}let Bn=null;function eC(){return!Bn&&"BroadcastChannel"in self&&(Bn=new BroadcastChannel("[Firebase] FID Change"),Bn.onmessage=n=>{ty(n.data.key,n.data.fid)}),Bn}function tC(){Z_.size===0&&Bn&&(Bn.close(),Bn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-installations-database",rC=1,sr="firebase-installations-store";let vc=null;function Pl(){return vc||(vc=Ho(nC,rC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(sr)}}})),vc}function Wo(n,e){return p(this,null,function*(){const t=Va(n),i=(yield Pl()).transaction(sr,"readwrite"),s=i.objectStore(sr),o=yield s.get(t);return yield s.put(e,t),yield i.done,(!o||o.fid!==e.fid)&&ey(n,e.fid),e})}function ny(n){return p(this,null,function*(){const e=Va(n),r=(yield Pl()).transaction(sr,"readwrite");yield r.objectStore(sr).delete(e),yield r.done})}function Oa(n,e){return p(this,null,function*(){const t=Va(n),i=(yield Pl()).transaction(sr,"readwrite"),s=i.objectStore(sr),o=yield s.get(t),c=e(o);return c===void 0?yield s.delete(t):yield s.put(c,t),yield i.done,c&&(!o||o.fid!==c.fid)&&ey(n,c.fid),c})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){return p(this,null,function*(){let e;const t=yield Oa(n.appConfig,r=>{const i=iC(r),s=sC(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===cu?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function iC(n){const e=n||{fid:JP(),registrationStatus:0};return ry(e)}function sC(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ir.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oC(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aC(n)}:{installationEntry:e}}function oC(n,e){return p(this,null,function*(){try{const t=yield HP(n,e);return Wo(n.appConfig,t)}catch(t){throw z_(t)&&t.customData.serverCode===409?yield ny(n.appConfig):yield Wo(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function aC(n){return p(this,null,function*(){let e=yield zf(n.appConfig);for(;e.registrationStatus===1;)yield X_(100),e=yield zf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=yield Cl(n);return r||t}return e})}function zf(n){return Oa(n,e=>{if(!e)throw ir.create("installation-not-found");return ry(e)})}function ry(n){return cC(n)?{fid:n.fid,registrationStatus:0}:n}function cC(n){return n.registrationStatus===1&&n.registrationTime+j_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const s=lC(n,t),o=GP(n,t),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={installation:{sdkVersion:K_,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(u)},f=yield J_(()=>fetch(s,h));if(f.ok){const m=yield f.json();return H_(m)}else throw yield Q_("Generate Auth Token",f)})}function lC(n,{fid:e}){return`${W_(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n,e=!1){return p(this,null,function*(){let t;const r=yield Oa(n.appConfig,s=>{if(!iy(s))throw ir.create("not-registered");const o=s.authToken;if(!e&&fC(o))return s;if(o.requestStatus===1)return t=hC(n,e),s;{if(!navigator.onLine)throw ir.create("app-offline");const c=mC(s);return t=dC(n,c),c}});return t?yield t:r.authToken})}function hC(n,e){return p(this,null,function*(){let t=yield Wf(n.appConfig);for(;t.authToken.requestStatus===1;)yield X_(100),t=yield Wf(n.appConfig);const r=t.authToken;return r.requestStatus===0?kl(n,e):r})}function Wf(n){return Oa(n,e=>{if(!iy(e))throw ir.create("not-registered");const t=e.authToken;return gC(t)?Ve(Y({},e),{authToken:{requestStatus:0}}):e})}function dC(n,e){return p(this,null,function*(){try{const t=yield uC(n,e),r=Ve(Y({},e),{authToken:t});return yield Wo(n.appConfig,r),t}catch(t){if(z_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield ny(n.appConfig);else{const r=Ve(Y({},e),{authToken:{requestStatus:0}});yield Wo(n.appConfig,r)}throw t}})}function iy(n){return n!==void 0&&n.registrationStatus===2}function fC(n){return n.requestStatus===2&&!pC(n)}function pC(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+qP}function mC(n){const e={requestStatus:1,requestTime:Date.now()};return Ve(Y({},n),{authToken:e})}function gC(n){return n.requestStatus===1&&n.requestTime+j_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(n){return p(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:r}=yield Cl(e);return r?r.catch(console.error):kl(e).catch(console.error),t.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n,e=!1){return p(this,null,function*(){const t=n;return yield IC(t),(yield kl(t,e)).token})}function IC(n){return p(this,null,function*(){const{registrationPromise:e}=yield Cl(n);e&&(yield e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(n){if(!n||!n.options)throw Ac("App Configuration");if(!n.name)throw Ac("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ac(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ac(n){return ir.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="installations",TC="installations-internal",wC=n=>{const e=n.getProvider("app").getImmediate(),t=EC(e),r=qt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vC=n=>{const e=n.getProvider("app").getImmediate(),t=qt(e,sy).getImmediate();return{getId:()=>_C(t),getToken:i=>yC(t,i)}};function AC(){ot(new tt(sy,wC,"PUBLIC")),ot(new tt(TC,vC,"PRIVATE"))}AC();We($_,Sl);We($_,Sl,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="/firebase-messaging-sw.js",bC="/firebase-cloud-messaging-push-scope",oy="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",SC="https://fcmregistrations.googleapis.com/v1",ay="google.c.a.c_id",PC="google.c.a.c_l",CC="google.c.a.ts",kC="google.c.a.e",Hf=1e4;var Qf;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Qf||(Qf={}));/**
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
 */var ls;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(ls||(ls={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function NC(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="fcm_token_details_db",DC=5,Yf="fcm_token_object_Store";function VC(n){return p(this,null,function*(){if("databases"in indexedDB&&!(yield indexedDB.databases()).map(s=>s.name).includes(Rc))return null;let e=null;return(yield Ho(Rc,DC,{upgrade:(r,i,s,o)=>p(this,null,function*(){var h;if(i<2||!r.objectStoreNames.contains(Yf))return;const c=o.objectStore(Yf),u=yield c.index("fcmSenderId").get(n);if(yield c.clear(),!!u){if(i===2){const f=u;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(h=f.createTime)!=null?h:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Dt(f.vapidKey)}}}else if(i===3){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Dt(f.auth),p256dh:Dt(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Dt(f.vapidKey)}}}else if(i===4){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Dt(f.auth),p256dh:Dt(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Dt(f.vapidKey)}}}}})})).close(),yield ac(Rc),yield ac("fcm_vapid_details_db"),yield ac("undefined"),OC(e)?e:null})}function OC(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="firebase-messaging-database",MC=1,hs="firebase-messaging-store";let bc=null;function cy(){return bc||(bc=Ho(xC,MC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hs)}}})),bc}function LC(n){return p(this,null,function*(){const e=uy(n),r=yield(yield cy()).transaction(hs).objectStore(hs).get(e);if(r)return r;{const i=yield VC(n.appConfig.senderId);if(i)return yield Nl(n,i),i}})}function Nl(n,e){return p(this,null,function*(){const t=uy(n),i=(yield cy()).transaction(hs,"readwrite");return yield i.objectStore(hs).put(e,t),yield i.done,e})}function uy({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ye=new vn("messaging","Messaging",FC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(n,e){return p(this,null,function*(){const t=yield Vl(n),r=ly(e),i={method:"POST",headers:t,body:JSON.stringify(r)};let s;try{s=yield(yield fetch(Dl(n.appConfig),i)).json()}catch(o){throw Ye.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ye.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ye.create("token-subscribe-no-token");return s.token})}function BC(n,e){return p(this,null,function*(){const t=yield Vl(n),r=ly(e.subscriptionOptions),i={method:"PATCH",headers:t,body:JSON.stringify(r)};let s;try{s=yield(yield fetch(`${Dl(n.appConfig)}/${e.token}`,i)).json()}catch(o){throw Ye.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ye.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ye.create("token-update-no-token");return s.token})}function qC(n,e){return p(this,null,function*(){const r={method:"DELETE",headers:yield Vl(n)};try{const s=yield(yield fetch(`${Dl(n.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Ye.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Ye.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}})}function Dl({projectId:n}){return`${SC}/projects/${n}/registrations`}function Vl(t){return p(this,arguments,function*({appConfig:n,installations:e}){const r=yield e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})})}function ly({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const i={web:{endpoint:t,auth:e,p256dh:n}};return r!==oy&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=7*24*60*60*1e3;function jC(n){return p(this,null,function*(){const e=yield GC(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Dt(e.getKey("auth")),p256dh:Dt(e.getKey("p256dh"))},r=yield LC(n.firebaseDependencies);if(r){if(zC(r.subscriptionOptions,t))return Date.now()>=r.createTime+$C?KC(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{yield qC(n.firebaseDependencies,r.token)}catch(i){}return Jf(n.firebaseDependencies,t)}else return Jf(n.firebaseDependencies,t)})}function KC(n,e){return p(this,null,function*(){try{const t=yield BC(n.firebaseDependencies,e),r=Ve(Y({},e),{token:t,createTime:Date.now()});return yield Nl(n.firebaseDependencies,r),t}catch(t){throw t}})}function Jf(n,e){return p(this,null,function*(){const r={token:yield UC(n,e),createTime:Date.now(),subscriptionOptions:e};return yield Nl(n,r),r.token})}function GC(n,e){return p(this,null,function*(){const t=yield n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:NC(e)})})}function zC(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,i=e.auth===n.auth,s=e.p256dh===n.p256dh;return t&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return WC(e,n),HC(e,n),QC(e,n),e}function WC(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const i=e.notification.image;i&&(n.notification.image=i);const s=e.notification.icon;s&&(n.notification.icon=s)}function HC(n,e){e.data&&(n.data=e.data)}function QC(n,e){var i,s,o,c,u;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;n.fcmOptions={};const t=(c=(s=e.fcmOptions)==null?void 0:s.link)!=null?c:(o=e.notification)==null?void 0:o.click_action;t&&(n.fcmOptions.link=t);const r=(u=e.fcmOptions)==null?void 0:u.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(n){return typeof n=="object"&&!!n&&ay in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */JC("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function JC(n,e){const t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(n){if(!n||!n.options)throw Sc("App Configuration Object");if(!n.name)throw Sc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Sc(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Sc(n){return Ye.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=XC(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(n){return p(this,null,function*(){try{n.swRegistration=yield navigator.serviceWorker.register(RC,{scope:bC}),n.swRegistration.update().catch(()=>{}),yield t0(n.swRegistration)}catch(e){throw Ye.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}})}function t0(n){return p(this,null,function*(){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${Hf} ms`)),Hf),i=n.installing||n.waiting;n.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(n,e){return p(this,null,function*(){if(!e&&!n.swRegistration&&(yield e0(n)),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ye.create("invalid-sw-registration");n.swRegistration=e}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(n,e){return p(this,null,function*(){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=oy)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n,e){return p(this,null,function*(){if(!navigator)throw Ye.create("only-available-in-window");if(Notification.permission==="default"&&(yield Notification.requestPermission()),Notification.permission!=="granted")throw Ye.create("permission-blocked");return yield r0(n,e==null?void 0:e.vapidKey),yield n0(n,e==null?void 0:e.serviceWorkerRegistration),jC(n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n,e,t){return p(this,null,function*(){const r=s0(e);(yield n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[ay],message_name:t[PC],message_time:t[CC],message_device_time:Math.floor(Date.now()/1e3)})})}function s0(n){switch(n){case ls.NOTIFICATION_CLICKED:return"notification_open";case ls.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(n,e){return p(this,null,function*(){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===ls.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Xf(t)):n.onMessageHandler.next(Xf(t)));const r=t.data;YC(r)&&r[kC]==="1"&&(yield i0(n,t.messageType,r))})}const Zf="@firebase/messaging",ep="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=n=>{const e=new ZC(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>o0(e,t)),e},c0=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>hy(e,r)}};function u0(){ot(new tt("messaging",a0,"PUBLIC")),ot(new tt("messaging-internal",c0,"PRIVATE")),We(Zf,ep),We(Zf,ep,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(){return p(this,null,function*(){try{yield gp()}catch(n){return!1}return typeof window!="undefined"&&fs()&&wI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(n=ps()){return l0().then(e=>{if(!e)throw Ye.create("unsupported-browser")},e=>{throw Ye.create("indexed-db-unsupported")}),qt(z(n),"messaging").getImmediate()}function Ak(n,e){return p(this,null,function*(){return n=z(n),hy(n,e)})}u0();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Map,dy={activated:!1,tokenObservers:[]},h0={initialized:!1,enabled:!1};function Re(n){return uu.get(n)||Y({},dy)}function d0(n,e){return uu.set(n,e),uu.get(n)}function xa(){return h0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="https://content-firebaseappcheck.googleapis.com/v1",f0="exchangeRecaptchaV3Token",p0="exchangeDebugToken",tp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},m0=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}process(e){return p(this,null,function*(){this.stop();try{this.pending=new Wi,this.pending.promise.catch(t=>{}),yield _0(this.getNextRun(e)),this.pending.resolve(),yield this.pending.promise,this.pending=new Wi,this.pending.promise.catch(t=>{}),yield this.operation(),this.pending.resolve(),yield this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}})}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function _0(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Ze=new vn("appCheck","AppCheck",y0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n=!1){var e;return n?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function Ol(n){if(!Re(n).activated)throw Ze.create("use-before-activation",{appName:n.name})}function py(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),s=e-t*3600*24-r*3600-i*60;let o="";return t&&(o+=ro(t)+"d:"),r&&(o+=ro(r)+"h:"),o+=ro(i)+"m:"+ro(s)+"s",o}function ro(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(r,i){return p(this,arguments,function*({url:n,body:e},t){const s={"Content-Type":"application/json"},o=t.getImmediate({optional:!0});if(o){const b=yield o.getHeartbeatsHeader();b&&(s["X-Firebase-Client"]=b)}const c={method:"POST",body:JSON.stringify(e),headers:s};let u;try{u=yield fetch(n,c)}catch(b){throw Ze.create("fetch-network-error",{originalErrorMessage:b==null?void 0:b.message})}if(u.status!==200)throw Ze.create("fetch-status-error",{httpStatus:u.status});let h;try{h=yield u.json()}catch(b){throw Ze.create("fetch-parse-error",{originalErrorMessage:b==null?void 0:b.message})}const f=h.ttl.match(/^([\d.]+)(s)$/);if(!f||!f[2]||isNaN(Number(f[1])))throw Ze.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${h.ttl}`});const m=Number(f[1])*1e3,y=Date.now();return{token:h.token,expireTimeMillis:y+m,issuedAtTimeMillis:y}})}function I0(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${fy}/projects/${t}/apps/${r}:${f0}?key=${i}`,body:{recaptcha_v3_token:e}}}function my(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${fy}/projects/${t}/apps/${r}:${p0}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="firebase-app-check-database",T0=1,ds="firebase-app-check-store",gy="debug-token";let io=null;function _y(){return io||(io=new Promise((n,e)=>{try{const t=indexedDB.open(E0,T0);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(Ze.create("storage-open",{originalErrorMessage:(i=r.target.error)==null?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(ds,{keyPath:"compositeKey"})}}}catch(t){e(Ze.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),io)}function w0(n){return Iy(Ey(n))}function v0(n,e){return yy(Ey(n),e)}function A0(n){return yy(gy,n)}function R0(){return Iy(gy)}function yy(n,e){return p(this,null,function*(){const r=(yield _y()).transaction(ds,"readwrite"),s=r.objectStore(ds).put({compositeKey:n,value:e});return new Promise((o,c)=>{s.onsuccess=u=>{o()},r.onerror=u=>{var h;c(Ze.create("storage-set",{originalErrorMessage:(h=u.target.error)==null?void 0:h.message}))}})})}function Iy(n){return p(this,null,function*(){const t=(yield _y()).transaction(ds,"readonly"),i=t.objectStore(ds).get(n);return new Promise((s,o)=>{i.onsuccess=c=>{const u=c.target.result;s(u?u.value:void 0)},t.onerror=c=>{var u;o(Ze.create("storage-get",{originalErrorMessage:(u=c.target.error)==null?void 0:u.message}))}})})}function Ey(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Yo("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(n){return p(this,null,function*(){if(fs()){let e;try{e=yield w0(n)}catch(t){hn.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}})}function Pc(n,e){return fs()?v0(n,e).catch(t=>{hn.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}function S0(){return p(this,null,function*(){let n;try{n=yield R0()}catch(e){}if(n)return n;{const e=crypto.randomUUID();return A0(e).catch(t=>hn.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){return xa().enabled}function Ll(){return p(this,null,function*(){const n=xa();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)})}function P0(){const n=du(),e=xa();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Wi;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(S0())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0={error:"UNKNOWN_ERROR"};function k0(n){return hu.encodeString(JSON.stringify(n),!1)}function lu(n,e=!1,t=!1){return p(this,null,function*(){const r=n.app;Ol(r);const i=Re(r);let s=i.token,o;if(s&&!vr(s)&&(i.token=void 0,s=void 0),!s){const h=yield i.cachedTokenPromise;h&&(vr(h)?s=h:yield Pc(r,void 0))}if(!e&&s&&vr(s))return{token:s.token};let c=!1;if(Ml())try{const h=yield Ll();i.exchangeTokenPromise||(i.exchangeTokenPromise=xl(my(r,h),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),c=!0);const f=yield i.exchangeTokenPromise;return yield Pc(r,f),i.token=f,{token:f.token}}catch(h){return h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?hn.warn(h.message):t&&hn.error(h),Cc(h)}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),c=!0),s=yield Re(r).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?hn.warn(h.message):t&&hn.error(h),o=h}let u;return s?o?vr(s)?u={token:s.token,internalError:o}:u=Cc(o):(u={token:s.token},i.token=s,yield Pc(r,s)):u=Cc(o),c&&vy(r,u),u})}function N0(n){return p(this,null,function*(){const e=n.app;Ol(e);const{provider:t}=Re(e);if(Ml()){const r=yield Ll(),{token:i}=yield xl(my(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=yield t.getToken();return{token:r}}})}function Ty(n,e,t,r){const{app:i}=n,s=Re(i),o={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&vr(s.token)){const c=s.token;Promise.resolve().then(()=>{t({token:c.token}),rp(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>rp(n))}function wy(n,e){const t=Re(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function rp(n){const{app:e}=n,t=Re(e);let r=t.tokenRefresher;r||(r=D0(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function D0(n){const{app:e}=n;return new g0(()=>p(this,null,function*(){const t=Re(e);let r;if(t.token?r=yield lu(n,!0):r=yield lu(n),r.error)throw r.error;if(r.internalError)throw r.internalError}),()=>!0,()=>{const t=Re(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},tp.RETRIAL_MIN_WAIT,tp.RETRIAL_MAX_WAIT)}function vy(n,e){const t=Re(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch(i){}}function vr(n){return n.expireTimeMillis-Date.now()>0}function Cc(n){return{token:k0(C0),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Re(this.app);for(const t of e)wy(this.app,t.next);return Promise.resolve()}}function O0(n,e){return new V0(n,e)}function x0(n){return{getToken:e=>lu(n,e),getLimitedUseToken:()=>N0(n),addTokenListener:e=>Ty(n,"INTERNAL",e),removeTokenListener:e=>wy(n.app,e)}}const M0="@firebase/app-check",L0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="https://www.google.com/recaptcha/api.js";function U0(n,e){const t=new Wi,r=Re(n);r.reCAPTCHAState={initialized:t};const i=B0(n),s=np(!1);return s?ip(n,e,s,i,t):j0(()=>{const o=np(!1);if(!o)throw new Error("no recaptcha");ip(n,e,o,i,t)}),t.promise}function ip(n,e,t,r,i){t.ready(()=>{$0(n,e,t,r),i.resolve(t)})}function B0(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}function q0(n){return p(this,null,function*(){Ol(n);const t=yield Re(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const s=Re(n).reCAPTCHAState;t.ready(()=>{r(t.execute(s.widgetId,{action:"fire_app_check"}))})})})}function $0(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{Re(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Re(n).reCAPTCHAState.succeeded=!1}}),s=Re(n);s.reCAPTCHAState=Ve(Y({},s.reCAPTCHAState),{widgetId:i})}function j0(n){const e=document.createElement("script");e.src=F0,e.onload=n,document.head.appendChild(e)}/**
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
 */class Ay{constructor(e){this._siteKey=e,this._throttleData=null}getToken(){return p(this,null,function*(){var r,i,s;G0(this._throttleData);const e=yield q0(this._app).catch(o=>{throw Ze.create("recaptcha-error")});if(!((r=Re(this._app).reCAPTCHAState)!=null&&r.succeeded))throw Ze.create("recaptcha-error");let t;try{t=yield xl(I0(this._app,e),this._heartbeatServiceProvider)}catch(o){throw(i=o.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=K0(Number((s=o.customData)==null?void 0:s.httpStatus),this._throttleData),Ze.create("initial-throttle",{time:py(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,t})}initialize(e){this._app=e,this._heartbeatServiceProvider=qt(e,"heartbeat"),U0(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Ay?this._siteKey===e._siteKey:!1}}function K0(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+m0,httpStatus:n};{const t=e?e.backoffCount:0,r=OI(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function G0(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Ze.create("throttled",{time:py(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n=ps(),e){n=z(n);const t=qt(n,"app-check");if(xa().initialized||P0(),Ml()&&Ll().then(i=>{}),t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return i;throw Ze.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return z0(n,e.provider,e.isTokenAutoRefreshEnabled),Re(n).isTokenAutoRefreshEnabled&&Ty(r,"INTERNAL",()=>{}),r}function z0(n,e,t=!1){const r=d0(n,Y({},dy));r.activated=!0,r.provider=e,r.cachedTokenPromise=b0(n).then(i=>(i&&vr(i)&&(r.token=i,vy(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&hn.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(n)}const W0="app-check",sp="app-check-internal";function H0(){ot(new tt(W0,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return O0(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(sp).initialize()})),ot(new tt(sp,n=>{const e=n.getProvider("app-check").getImmediate();return x0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),We(M0,L0)}H0();var Ar;(function(n){n.IndexedDbLocal="INDEXED_DB_LOCAL",n.InMemory="IN_MEMORY",n.BrowserLocal="BROWSER_LOCAL",n.BrowserSession="BROWSER_SESSION"})(Ar||(Ar={}));var sn;(function(n){n.APPLE="apple.com",n.FACEBOOK="facebook.com",n.GAME_CENTER="gc.apple.com",n.GITHUB="github.com",n.GOOGLE="google.com",n.MICROSOFT="microsoft.com",n.PLAY_GAMES="playgames.google.com",n.TWITTER="twitter.com",n.YAHOO="yahoo.com",n.PASSWORD="password",n.PHONE="phone"})(sn||(sn={}));const bk=aI("FirebaseAuthentication",{web:()=>cI(()=>Promise.resolve().then(()=>Q0),void 0).then(n=>new n.FirebaseAuthenticationWeb)});class re extends uI{constructor(){super(),this.lastConfirmationResult=new Map;const e=Z();e.onAuthStateChanged(t=>this.handleAuthStateChange(t)),e.onIdTokenChanged(t=>void this.handleIdTokenChange(t))}applyActionCode(e){return p(this,null,function*(){const t=Z();return zT(t,e.oobCode)})}createUserWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield WT(t,e.email,e.password);return this.createSignInResult(r,null)})}confirmPasswordReset(e){return p(this,null,function*(){const t=Z();return GT(t,e.oobCode,e.newPassword)})}confirmVerificationCode(e){return p(this,null,function*(){const{verificationCode:t,verificationId:r}=e,i=this.lastConfirmationResult.get(r);if(!i)throw new Error(re.ERROR_CONFIRMATION_RESULT_MISSING);const s=yield i.confirm(t);return this.createSignInResult(s,null)})}deleteUser(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return mw(t)})}fetchSignInMethodsForEmail(e){return p(this,null,function*(){const t=Z();return{signInMethods:yield ZT(t,e.email)}})}getPendingAuthResult(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}getCurrentUser(){return p(this,null,function*(){const e=Z();return{user:this.createUserResult(e.currentUser)}})}getIdToken(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return{token:(yield t.currentUser.getIdToken(e==null?void 0:e.forceRefresh))||""}})}getIdTokenResult(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield t.currentUser.getIdTokenResult(e==null?void 0:e.forceRefresh);return Object.assign(Object.assign({},r),{authTime:Date.parse(r.authTime),expirationTime:Date.parse(r.expirationTime),issuedAtTime:Date.parse(r.issuedAtTime)})})}getRedirectResult(){return p(this,null,function*(){const e=Z(),t=yield Yw(e),r=t?ye.credentialFromResult(t):null;return this.createSignInResult(t,r)})}getTenantId(){return p(this,null,function*(){return{tenantId:Z().tenantId}})}isSignInWithEmailLink(e){return p(this,null,function*(){const t=Z();return{isSignInWithEmailLink:YT(t,e.emailLink)}})}linkWithApple(e){return p(this,null,function*(){const t=new ye(sn.APPLE);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithEmailAndPassword(e){return p(this,null,function*(){const t=Ft.credential(e.email,e.password),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithEmailLink(e){return p(this,null,function*(){const t=Ft.credentialWithLink(e.email,e.emailLink),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithFacebook(e){return p(this,null,function*(){const t=new ct;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ct.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithGithub(e){return p(this,null,function*(){const t=new lt;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=lt.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithGoogle(e){return p(this,null,function*(){const t=new ut;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ut.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithMicrosoft(e){return p(this,null,function*(){const t=new ye(sn.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithPhoneNumber(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof ud))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);try{const i=yield Mw(r,e.phoneNumber,e.recaptchaVerifier),{verificationId:s}=i;this.lastConfirmationResult.set(s,i);const o={verificationId:s};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,o)}catch(i){const s={message:this.getErrorMessage(i)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,s)}})}linkWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithTwitter(e){return p(this,null,function*(){const t=new ht;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ht.credentialFromResult(r);return this.createSignInResult(r,i)})}linkWithYahoo(e){return p(this,null,function*(){const t=new ye(sn.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}reload(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return bp(t)})}revokeAccessToken(e){return p(this,null,function*(){const t=Z();return pw(t,e.token)})}sendEmailVerification(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return ew(r,e==null?void 0:e.actionCodeSettings)})}sendPasswordResetEmail(e){return p(this,null,function*(){const t=Z();return KT(t,e.email,e.actionCodeSettings)})}sendSignInLinkToEmail(e){return p(this,null,function*(){const t=Z();return QT(t,e.email,e.actionCodeSettings)})}setLanguageCode(e){return p(this,null,function*(){const t=Z();t.languageCode=e.languageCode})}setPersistence(e){return p(this,null,function*(){const t=Z();switch(e.persistence){case Ar.BrowserLocal:yield Ws(t,Yp);break;case Ar.BrowserSession:yield Ws(t,wu);break;case Ar.IndexedDbLocal:yield Ws(t,tm);break;case Ar.InMemory:yield Ws(t,Oc);break}})}setTenantId(e){return p(this,null,function*(){const t=Z();t.tenantId=e.tenantId})}signInAnonymously(){return p(this,null,function*(){const e=Z(),t=yield UT(e);return this.createSignInResult(t,null)})}signInWithApple(e){return p(this,null,function*(){const t=new ye(sn.APPLE);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithCustomToken(e){return p(this,null,function*(){const t=Z(),r=yield jT(t,e.token);return this.createSignInResult(r,null)})}signInWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield HT(t,e.email,e.password);return this.createSignInResult(r,null)})}signInWithEmailLink(e){return p(this,null,function*(){const t=Z(),r=yield JT(t,e.email,e.emailLink);return this.createSignInResult(r,null)})}signInWithFacebook(e){return p(this,null,function*(){const t=new ct;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ct.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithGithub(e){return p(this,null,function*(){const t=new lt;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=lt.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithGoogle(e){return p(this,null,function*(){const t=new ut;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ut.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithMicrosoft(e){return p(this,null,function*(){const t=new ye(sn.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.signInWithPopupOrRedirect(t,e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithPhoneNumber(e){return p(this,null,function*(){if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof ud))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);const t=Z();try{const r=yield xw(t,e.phoneNumber,e.recaptchaVerifier),{verificationId:i}=r;this.lastConfirmationResult.set(i,r);const s={verificationId:i};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,s)}catch(r){const i={message:this.getErrorMessage(r)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,i)}})}signInWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithTwitter(e){return p(this,null,function*(){const t=new ht;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ht.credentialFromResult(r);return this.createSignInResult(r,i)})}signInWithYahoo(e){return p(this,null,function*(){const t=new ye(sn.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),i=ye.credentialFromResult(r);return this.createSignInResult(r,i)})}signOut(){return p(this,null,function*(){yield Z().signOut()})}unlink(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield BT(t.currentUser,e.providerId);return{user:this.createUserResult(r)}})}updateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return iw(r,e.newEmail)})}updatePassword(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return sw(r,e.newPassword)})}updateProfile(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return rw(r,{displayName:e.displayName,photoURL:e.photoUrl})})}useAppLanguage(){return p(this,null,function*(){Z().useDeviceLanguage()})}useEmulator(e){return p(this,null,function*(){const t=Z(),r=e.port||9099,i=e.scheme||"http";e.host.includes("://")?xc(t,`${e.host}:${r}`):xc(t,`${i}://${e.host}:${r}`)})}verifyBeforeUpdateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return tw(r,e==null?void 0:e.newEmail,e==null?void 0:e.actionCodeSettings)})}handleAuthStateChange(e){const r={user:this.createUserResult(e)};this.notifyListeners(re.AUTH_STATE_CHANGE_EVENT,r,!0)}handleIdTokenChange(e){return p(this,null,function*(){if(!e)return;const r={token:yield e.getIdToken(!1)};this.notifyListeners(re.ID_TOKEN_CHANGE_EVENT,r,!0)})}applySignInOptions(e,t){if(e.customParameters){const r={};e.customParameters.map(i=>{r[i.key]=i.value}),t.setCustomParameters(r)}if(e.scopes)for(const r of e.scopes)t.addScope(r)}signInWithPopupOrRedirect(e,t){const r=Z();return t==="redirect"?zw(r,e):qw(r,e)}linkCurrentUserWithPopupOrRedirect(e,t){const r=Z();if(!r.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return t==="redirect"?Hw(r.currentUser,e):$w(r.currentUser,e)}linkCurrentUserWithCredential(e){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return zp(t.currentUser,e)}requestAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}checkAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}createSignInResult(e,t){const r=this.createUserResult((e==null?void 0:e.user)||null),i=this.createCredentialResult(t),s=this.createAdditionalUserInfoResult(e);return{user:r,credential:i,additionalUserInfo:s}}createCredentialResult(e){if(!e)return null;const t={providerId:e.providerId};return e instanceof Ct&&(t.accessToken=e.accessToken,t.idToken=e.idToken,t.secret=e.secret),t}createUserResult(e){return e?{displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,isAnonymous:e.isAnonymous,metadata:this.createUserMetadataResult(e.metadata),phoneNumber:e.phoneNumber,photoUrl:e.photoURL,providerData:this.createUserProviderDataResult(e.providerData),providerId:e.providerId,tenantId:e.tenantId,uid:e.uid}:null}createUserMetadataResult(e){const t={};return e.creationTime&&(t.creationTime=Date.parse(e.creationTime)),e.lastSignInTime&&(t.lastSignInTime=Date.parse(e.lastSignInTime)),t}createUserProviderDataResult(e){return e.map(t=>({displayName:t.displayName,email:t.email,phoneNumber:t.phoneNumber,photoUrl:t.photoURL,providerId:t.providerId,uid:t.uid}))}createAdditionalUserInfoResult(e){if(!e)return null;const t=hw(e);if(!t)return null;const{isNewUser:r,profile:i,providerId:s,username:o}=t,c={isNewUser:r};return s!==null&&(c.providerId=s),i!==null&&(c.profile=i),o!=null&&(c.username=o),c}getErrorMessage(e){return e instanceof Object&&"message"in e&&typeof e.message=="string"?e.message:JSON.stringify(e)}}re.AUTH_STATE_CHANGE_EVENT="authStateChange";re.ID_TOKEN_CHANGE_EVENT="idTokenChange";re.PHONE_CODE_SENT_EVENT="phoneCodeSent";re.PHONE_VERIFICATION_FAILED_EVENT="phoneVerificationFailed";re.ERROR_NO_USER_SIGNED_IN="No user is signed in.";re.ERROR_PHONE_NUMBER_MISSING="phoneNumber must be provided.";re.ERROR_RECAPTCHA_VERIFIER_MISSING="recaptchaVerifier must be provided and must be an instance of RecaptchaVerifier.";re.ERROR_CONFIRMATION_RESULT_MISSING="No confirmation result with this verification id was found.";const Q0=Object.freeze(Object.defineProperty({__proto__:null,FirebaseAuthenticationWeb:re},Symbol.toStringTag,{value:"Module"}));export{tk as A,ak as B,ck as C,yk as D,Ak as E,bk as F,ut as G,fk as H,lk as I,uk as J,hk as K,gk as L,Tk as M,Ik as N,Ek as O,mw as P,sk as Q,Ay as R,ok as S,Rk as a,nk as b,wk as c,l0 as d,rk as e,vk as f,Z as g,Yp as h,wE as i,Yw as j,fS as k,dk as l,ik as m,pk as n,X0 as o,WT as p,HT as q,Eu as r,Ws as s,qw as t,mk as u,zw as v,ud as w,xw as x,Z0 as y,_k as z};
