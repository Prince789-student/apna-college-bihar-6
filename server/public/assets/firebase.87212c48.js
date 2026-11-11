var EE=Object.defineProperty,TE=Object.defineProperties;var wE=Object.getOwnPropertyDescriptors;var uo=Object.getOwnPropertySymbols,vE=Object.getPrototypeOf,Vd=Object.prototype.hasOwnProperty,Od=Object.prototype.propertyIsEnumerable,AE=Reflect.get;var Dd=(n,e,t)=>e in n?EE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,J=(n,e)=>{for(var t in e||(e={}))Vd.call(e,t)&&Dd(n,t,e[t]);if(uo)for(var t of uo(e))Od.call(e,t)&&Dd(n,t,e[t]);return n},De=(n,e)=>TE(n,wE(e));var lo=(n,e)=>{var t={};for(var r in n)Vd.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&uo)for(var r of uo(n))e.indexOf(r)<0&&Od.call(n,r)&&(t[r]=n[r]);return t};var Ft=(n,e,t)=>AE(vE(n),t,e);var p=(n,e,t)=>new Promise((r,s)=>{var i=u=>{try{c(t.next(u))}catch(l){s(l)}},o=u=>{try{c(t.throw(u))}catch(l){s(l)}},c=u=>u.done?r(u.value):Promise.resolve(u.value).then(i,o);c((t=t.apply(n,e)).next())});import{r as RE,_ as bE,W as SE}from"./capacitor.5c152815.js";const PE=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,u=s+2<n.length,l=u?n[s+2]:0,d=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|l>>6,A=l&63;u||(A=64,o||(_=64)),r.push(t[d],t[m],t[_],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||l==null||m==null)throw new CE;const _=i<<2|c>>4;if(r.push(_),l!==64){const A=c<<4&240|l>>2;if(r.push(A),m!==64){const C=l<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class CE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NE=function(n){const e=rm(n);return Wu.encodeByteArray(e,!0)},qo=function(n){return NE(n).replace(/\./g,"")},sm=function(n){try{return Wu.decodeString(n,!0)}catch(e){}return null};/**
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
 */function Qu(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DE=()=>Qu().__FIREBASE_DEFAULTS__,VE=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},OE=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&sm(n[1]);return e&&JSON.parse(e)},ga=()=>{try{return PE()||DE()||VE()||OE()}catch(n){return}},im=n=>{var e,t;return(t=(e=ga())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},om=n=>{const e=im(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},am=()=>{var n;return(n=ga())==null?void 0:n.config},cm=n=>{var e;return(e=ga())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function um(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=J({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[qo(JSON.stringify(t)),qo(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xE(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function lm(){var e;const n=(e=ga())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function ME(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function LE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function UE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FE(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hm(){return!lm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dm(){return!lm()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Ni(){try{return typeof indexedDB=="object"}catch(n){return!1}}function fm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function BE(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="FirebaseError";class vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qE,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$E(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vt(s,c,r)}}function $E(n,e){return n.replace(jE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jE=/\{\$([^}]+)}/g;function zE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(xd(i)&&xd(o)){if(!Gt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function xd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function js(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function GE(n,e){const t=new HE(n,e);return t.subscribe.bind(t)}class HE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");KE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Oc),s.error===void 0&&(s.error=Oc),s.complete===void 0&&(s.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Oc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=1e3,QE=2,JE=4*60*60*1e3,YE=.5;function XE(n,e=WE,t=QE){const r=e*Math.pow(t,n),s=Math.round(YE*r*(Math.random()-.5)*2);return Math.min(JE,r+s)}/**
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
 */function Cn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function _a(n){return p(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}class st{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var s;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(s=e==null?void 0:e.optional)!=null?s:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tT(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch(i){}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return p(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var o;const r=this.normalizeInstanceIdentifier(t),s=(o=this.onInitCallbacks.get(r))!=null?o:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(s){}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eT(n){return n===qn?void 0:n}function tT(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ZE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const rT={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},sT=ee.INFO,iT={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},oT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=iT[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=sT,this._logHandler=oT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const aT=(n,e)=>e.some(t=>n instanceof t);let Md,Ld;function cT(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uT(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pm=new WeakMap,uu=new WeakMap,mm=new WeakMap,xc=new WeakMap,Ju=new WeakMap;function lT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(zt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pm.set(t,n)}).catch(()=>{}),Ju.set(e,n),e}function hT(n){if(uu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});uu.set(n,e)}let lu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dT(n){lu=n(lu)}function fT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Mc(this),e,...t);return mm.set(r,e.sort?e.sort():[e]),zt(r)}:uT().includes(n)?function(...e){return n.apply(Mc(this),e),zt(pm.get(this))}:function(...e){return zt(n.apply(Mc(this),e))}}function pT(n){return typeof n=="function"?fT(n):(n instanceof IDBTransaction&&hT(n),aT(n,cT())?new Proxy(n,lu):n)}function zt(n){if(n instanceof IDBRequest)return lT(n);if(xc.has(n))return xc.get(n);const e=pT(n);return e!==n&&(xc.set(n,e),Ju.set(e,n)),e}const Mc=n=>Ju.get(n);function Ia(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=zt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zt(o.result),u.oldVersion,u.newVersion,zt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function Lc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),zt(t).then(()=>{})}const mT=["get","getKey","getAll","getAllKeys","count"],gT=["put","add","delete","clear"],Uc=new Map;function Ud(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=gT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mT.includes(t)))return;const i=function(o,...c){return p(this,null,function*(){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(c.shift())),(yield Promise.all([l[t](...c),s&&u.done]))[0]})};return Uc.set(e,i),i}dT(n=>De(J({},n),{get:(e,t,r)=>Ud(e,t)||n.get(e,t,r),has:(e,t)=>!!Ud(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hu="@firebase/app",Fd="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new ya("@firebase/app"),IT="@firebase/app-compat",ET="@firebase/analytics-compat",TT="@firebase/analytics",wT="@firebase/app-check-compat",vT="@firebase/app-check",AT="@firebase/auth",RT="@firebase/auth-compat",bT="@firebase/database",ST="@firebase/data-connect",PT="@firebase/database-compat",kT="@firebase/functions",CT="@firebase/functions-compat",NT="@firebase/installations",DT="@firebase/installations-compat",VT="@firebase/messaging",OT="@firebase/messaging-compat",xT="@firebase/performance",MT="@firebase/performance-compat",LT="@firebase/remote-config",UT="@firebase/remote-config-compat",FT="@firebase/storage",BT="@firebase/storage-compat",qT="@firebase/firestore",$T="@firebase/ai",jT="@firebase/firestore-compat",zT="firebase",GT="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="[DEFAULT]",HT={[hu]:"fire-core",[IT]:"fire-core-compat",[TT]:"fire-analytics",[ET]:"fire-analytics-compat",[vT]:"fire-app-check",[wT]:"fire-app-check-compat",[AT]:"fire-auth",[RT]:"fire-auth-compat",[bT]:"fire-rtdb",[ST]:"fire-data-connect",[PT]:"fire-rtdb-compat",[kT]:"fire-fn",[CT]:"fire-fn-compat",[NT]:"fire-iid",[DT]:"fire-iid-compat",[VT]:"fire-fcm",[OT]:"fire-fcm-compat",[xT]:"fire-perf",[MT]:"fire-perf-compat",[LT]:"fire-rc",[UT]:"fire-rc-compat",[FT]:"fire-gcs",[BT]:"fire-gcs-compat",[qT]:"fire-fst",[jT]:"fire-fst-compat",[$T]:"fire-vertex","fire-js":"fire-js",[zT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Map,KT=new Map,fu=new Map;function Bd(n,e){try{n.container.addComponent(e)}catch(t){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ut(n){const e=n.name;if(fu.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;fu.set(e,n);for(const t of $o.values())Bd(t,n);for(const t of KT.values())Bd(t,n);return!0}function Lt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ve(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new kn("app","Firebase",WT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t,r){this._isDeleted=!1,this._options=J({},e),this._config=J({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=GT;function JT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=J({name:du,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});if(t||(t=am()),!t)throw En.create("no-options");const i=$o.get(s);if(i){if(Gt(t,i.options)&&Gt(r,i.config))return i;throw En.create("duplicate-app",{appName:s})}const o=new nT(s);for(const u of fu.values())o.addComponent(u);const c=new QT(t,r,o);return $o.set(s,c),c}function Di(n=du){const e=$o.get(n);if(!e&&n===du&&am())return JT();if(!e)throw En.create("no-app",{appName:n});return e}function Qe(n,e,t){var o;let r=(o=HT[n])!=null?o:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(c.join(" "));return}ut(new st(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const YT="firebase-heartbeat-database",XT=1,di="firebase-heartbeat-store";let Fc=null;function gm(){return Fc||(Fc=Ia(YT,XT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(di)}catch(t){}}}}).catch(n=>{throw En.create("idb-open",{originalErrorMessage:n.message})})),Fc}function ZT(n){return p(this,null,function*(){try{const t=(yield gm()).transaction(di),r=yield t.objectStore(di).get(_m(n));return yield t.done,r}catch(e){if(e instanceof vt)Ht.warn(e.message);else{const t=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(t.message)}}})}function qd(n,e){return p(this,null,function*(){try{const r=(yield gm()).transaction(di,"readwrite");yield r.objectStore(di).put(e,_m(n)),yield r.done}catch(t){if(t instanceof vt)Ht.warn(t.message);else{const r=En.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(r.message)}}})}function _m(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ew=1024,tw=30;class nw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return p(this,null,function*(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$d();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>tw){const o=iw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ht.warn(r)}})}getHeartbeatsHeader(){return p(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$d(),{heartbeatsToSend:r,unsentEntries:s}=rw(this._heartbeatsCache.heartbeats),i=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ht.warn(t),""}})}}function $d(){return new Date().toISOString().substring(0,10)}function rw(n,e=ew){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jd(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),jd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return p(this,null,function*(){return Ni()?fm().then(()=>!0).catch(()=>!1):!1})}read(){return p(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield ZT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return qd(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return p(this,null,function*(){var r;if(yield this._canUseIndexedDBPromise){const s=yield this.read();return qd(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return})}}function jd(n){return qo(JSON.stringify({version:2,heartbeats:n})).length}function iw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(n){ut(new st("platform-logger",e=>new _T(e),"PRIVATE")),ut(new st("heartbeat",e=>new nw(e),"PRIVATE")),Qe(hu,Fd,n),Qe(hu,Fd,"esm2020"),Qe("fire-js","")}ow("");function ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aw=ym,Im=new kn("auth","Firebase",ym());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new ya("@firebase/auth");function cw(n,...e){jo.logLevel<=ee.WARN&&jo.warn(`Auth (${_r}): ${n}`,...e)}function Ro(n,...e){jo.logLevel<=ee.ERROR&&jo.error(`Auth (${_r}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,...e){throw Xu(n,...e)}function rt(n,...e){return Xu(n,...e)}function Yu(n,e,t){const r=De(J({},aw()),{[e]:t});return new kn("auth","Firebase",r).create(e,{appName:n.name})}function Je(n){return Yu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ea(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&_t(n,"argument-error"),Yu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Im.create(n,...e)}function M(n,e,...t){if(!n)throw Xu(e,...t)}function qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ro(e),new Error(e)}function Kt(n,e){n||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function Zu(){return zd()==="http:"||zd()==="https:"}function zd(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zu()||LE()||"connection"in navigator)?navigator.onLine:!0}function lw(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kt(t>e,"Short delay should be less than long delay!"),this.isMobile=xE()||UE()}get(){return uw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n,e){Kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fw=new Vi(3e4,6e4);function Pe(n,e){return n.tenantId&&!e.tenantId?De(J({},e),{tenantId:n.tenantId}):e}function ke(i,o,c,u){return p(this,arguments,function*(n,e,t,r,s={}){return Tm(n,s,()=>p(this,null,function*(){let l={},d={};r&&(e==="GET"?d=r:l={body:JSON.stringify(r)});const m=os(J({key:n.config.apiKey},d)).slice(1),_=yield n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const A=J({method:e,headers:_},l);return ME()||(A.referrerPolicy="no-referrer"),n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(A.credentials="include"),Em.fetch()(yield wm(n,n.config.apiHost,t,m),A)}))})}function Tm(n,e,t){return p(this,null,function*(){n._canInitEmulator=!1;const r=J(J({},hw),e);try{const s=new mw(n),i=yield Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=yield i.json();if("needConfirmation"in o)throw zs(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw zs(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw zs(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw zs(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yu(n,d,l);_t(n,d)}}catch(s){if(s instanceof vt)throw s;_t(n,"network-request-failed",{message:String(s)})}})}function Yt(i,o,c,u){return p(this,arguments,function*(n,e,t,r,s={}){const l=yield ke(n,e,t,r,s);return"mfaPendingCredential"in l&&_t(n,"multi-factor-auth-required",{_serverResponse:l}),l})}function wm(n,e,t,r){return p(this,null,function*(){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?el(n.config,s):`${n.config.apiScheme}://${s}`;return dw.includes(t)&&(yield i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o})}function pw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),fw.get())})}}function zs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=rt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){return n!==void 0&&n.getResponse!==void 0}function Hd(n){return n!==void 0&&n.enterprise!==void 0}class vm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return pw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(n){return p(this,null,function*(){return(yield ke(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""})}function Am(n,e){return p(this,null,function*(){return ke(n,"GET","/v2/recaptchaConfig",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:delete",e)})}function yw(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:update",e)})}function zo(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function Iw(n,e=!1){return p(this,null,function*(){const t=z(n),r=yield t.getIdToken(e),s=Ta(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(Bc(s.auth_time)),issuedAtTime:Js(Bc(s.iat)),expirationTime:Js(Bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}})}function Bc(n){return Number(n)*1e3}function Ta(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=sm(t);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kd(n){const e=Ta(n);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n,e,t=!1){return p(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof vt&&Ew(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function Ew({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>p(this,null,function*(){yield this.iteration()}),t)}iteration(){return p(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){return p(this,null,function*(){var m;const e=n.auth,t=yield n.getIdToken(),r=yield nr(n,zo(e,{idToken:t}));M(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?bm(s.providerUserInfo):[],o=ww(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),l=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,d)})}function Rm(n){return p(this,null,function*(){const e=z(n);yield pi(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function ww(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bm(n){return n.map(r=>{var s=r,{providerId:e}=s,t=lo(s,["providerId"]);return{providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n,e){return p(this,null,function*(){const t=yield Tm(n,{},()=>p(this,null,function*(){const r=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=yield wm(n,s,"/v1/token",`key=${i}`),c=yield n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(u.credentials="include"),Em.fetch()(o,u)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function Aw(n,e){return p(this,null,function*(){return ke(n,"POST","/v2/accounts:revokeToken",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Kd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Kd(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return p(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return p(this,null,function*(){const{accessToken:r,refreshToken:s,expiresIn:i}=yield vw(e,t);this.updateTokensAndExpiration(r,s,Number(i))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new xr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n,e){M(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Et{constructor(i){var o=i,{uid:e,auth:t,stsTokenManager:r}=o,s=lo(o,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pu(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return p(this,null,function*(){const t=yield nr(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return Iw(this,e)}reload(){return Rm(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>J({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et(De(J({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return p(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield pi(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return p(this,null,function*(){if(ve(this.auth.app))return Promise.reject(Je(this.auth));const e=yield this.getIdToken();return yield nr(this,_w(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return De(J({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>J({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var $,F,H,W,Q,T,y,E;const r=($=t.displayName)!=null?$:void 0,s=(F=t.email)!=null?F:void 0,i=(H=t.phoneNumber)!=null?H:void 0,o=(W=t.photoURL)!=null?W:void 0,c=(Q=t.tenantId)!=null?Q:void 0,u=(T=t._redirectEventId)!=null?T:void 0,l=(y=t.createdAt)!=null?y:void 0,d=(E=t.lastLoginAt)!=null?E:void 0,{uid:m,emailVerified:_,isAnonymous:A,providerData:C,stsTokenManager:V}=t;M(m&&V,e,"internal-error");const D=xr.fromJSON(this.name,V);M(typeof m=="string",e,"internal-error"),ln(r,e.name),ln(s,e.name),M(typeof _=="boolean",e,"internal-error"),M(typeof A=="boolean",e,"internal-error"),ln(i,e.name),ln(o,e.name),ln(c,e.name),ln(u,e.name),ln(l,e.name),ln(d,e.name);const G=new Et({uid:m,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:l,lastLoginAt:d});return C&&Array.isArray(C)&&(G.providerData=C.map(v=>J({},v))),u&&(G._redirectEventId=u),G}static _fromIdTokenResponse(e,t,r=!1){return p(this,null,function*(){const s=new xr;s.updateFromServerResponse(t);const i=new Et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return yield pi(i),i})}static _fromGetAccountInfoResponse(e,t,r){return p(this,null,function*(){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new xr;c.updateFromIdToken(r);const u=new Et({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Map;function $t(n){Kt(n instanceof Function,"Expected a class definition");let e=Wd.get(n);return e?(Kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return p(this,null,function*(){return!0})}_set(e,t){return p(this,null,function*(){this.storage[e]=t})}_get(e){return p(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return p(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}Sm.type="NONE";const mu=Sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e,t){return`firebase:${n}:${e}:${t}`}class Mr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=bo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return p(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield zo(this.auth,{idToken:e}).catch(()=>{});return t?Et._fromGetAccountInfoResponse(this.auth,t,e):null}return Et._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return p(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return p(this,null,function*(){if(!t.length)return new Mr($t(mu),e,r);const s=(yield Promise.all(t.map(l=>p(this,null,function*(){if(yield l._isAvailable())return l})))).filter(l=>l);let i=s[0]||$t(mu);const o=bo(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=yield l._get(o);if(d){let m;if(typeof d=="string"){const _=yield zo(e,{idToken:d}).catch(()=>{});if(!_)break;m=yield Et._fromGetAccountInfoResponse(e,_,d)}else m=Et._fromJSON(e,d);l!==i&&(c=m),i=l;break}}catch(d){}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Mr(i,e,r):(i=u[0],c&&(yield i._set(o,c.toJSON())),yield Promise.all(t.map(l=>p(this,null,function*(){if(l!==i)try{yield l._remove(o)}catch(d){}}))),new Mr(i,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vm(e))return"Blackberry";if(Om(e))return"Webos";if(km(e))return"Safari";if((e.includes("chrome/")||Cm(e))&&!e.includes("edge/"))return"Chrome";if(Dm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pm(n=Se()){return/firefox\//i.test(n)}function km(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cm(n=Se()){return/crios\//i.test(n)}function Nm(n=Se()){return/iemobile/i.test(n)}function Dm(n=Se()){return/android/i.test(n)}function Vm(n=Se()){return/blackberry/i.test(n)}function Om(n=Se()){return/webos/i.test(n)}function tl(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rw(n=Se()){var e;return tl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function bw(){return FE()&&document.documentMode===10}function xm(n=Se()){return tl(n)||Dm(n)||Om(n)||Vm(n)||/windows phone/i.test(n)||Nm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(n,e=[]){let t;switch(n){case"Browser":t=Qd(Se());break;case"Worker":t=`${Qd(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_r}/${r}`}/**
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
 */class Sw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}runMiddleware(e){return p(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
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
 */function Pw(t){return p(this,arguments,function*(n,e={}){return ke(n,"GET","/v2/passwordPolicy",Pe(n,e))})}/**
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
 */const kw=6;class Cw{constructor(e){var r,s,i,o;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=t.minPasswordLength)!=null?r:kw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))!=null?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,s,i,o,c,u;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(r=t.meetsMinPasswordLength)!=null?r:!0),t.isValid&&(t.isValid=(s=t.meetsMaxPasswordLength)!=null?s:!0),t.isValid&&(t.isValid=(i=t.containsLowercaseLetter)!=null?i:!0),t.isValid&&(t.isValid=(o=t.containsUppercaseLetter)!=null?o:!0),t.isValid&&(t.isValid=(c=t.containsNumericCharacter)!=null?c:!0),t.isValid&&(t.isValid=(u=t.containsNonAlphanumericCharacter)!=null?u:!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jd(this),this.idTokenSubscription=new Jd(this),this.beforeStateQueue=new Sw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Im,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(()=>p(this,null,function*(){var r,s,i;if(!this._deleted&&(this.persistenceManager=yield Mr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return p(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return p(this,null,function*(){try{const t=yield zo(this,{idToken:e}),r=yield Et._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return p(this,null,function*(){var i;if(ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=yield this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=yield this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)})}tryRedirectSignIn(e){return p(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return p(this,null,function*(){try{yield pi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=lw()}_delete(){return p(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return p(this,null,function*(){if(ve(this.app))return Promise.reject(Je(this));const t=e?z(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return p(this,null,function*(){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>p(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return p(this,null,function*(){return ve(this.app)?Promise.reject(Je(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return ve(this.app)?Promise.reject(Je(this)):this.queue(()=>p(this,null,function*(){yield this.assertedPersistence.setPersistence($t(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return p(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return p(this,null,function*(){const e=yield Pw(this),t=new Cw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return p(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield Aw(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}_setRedirectUser(e,t){return p(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return p(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=yield Mr.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return p(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>p(this,null,function*(){}))),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return p(this,null,function*(){if(e===this.currentUser)return this.queue(()=>p(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(t=this.currentUser)==null?void 0:t.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}directlySetCurrentUser(e){return p(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return p(this,null,function*(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=yield(s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=yield this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e})}_getAppCheckToken(){return p(this,null,function*(){var t;if(ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=yield(t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken();return e!=null&&e.error&&cw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token})}}function xe(n){return z(n)}class Jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=GE(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi={loadJS(){return p(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dw(n){Oi=n}function nl(n){return Oi.loadJS(n)}function Vw(){return Oi.recaptchaV2Script}function Ow(){return Oi.recaptchaEnterpriseScript}function xw(){return Oi.gapiScript}function Lm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=500,Lw=6e4,ho=1e12;class Uw{constructor(e){this.auth=e,this.counter=ho,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new qw(e,this.auth.name,t||{})),this.counter++,r}reset(e){var r;const t=e||ho;(r=this._widgets.get(t))==null||r.delete(),this._widgets.delete(t)}getResponse(e){var r;const t=e||ho;return((r=this._widgets.get(t))==null?void 0:r.getResponse())||""}execute(e){return p(this,null,function*(){var r;const t=e||ho;return(r=this._widgets.get(t))==null||r.execute(),""})}}class Fw{constructor(){this.enterprise=new Bw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Bw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qw{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;M(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$w(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(r){}this.isVisible&&this.execute()},Lw)},Mw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $w(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const jw="recaptcha-enterprise",Ys="NO_RECAPTCHA";class Um{constructor(e){this.type=jw,this.auth=xe(e)}verify(e="verify",t=!1){return p(this,null,function*(){function r(i){return p(this,null,function*(){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise((o,c)=>p(this,null,function*(){Am(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new vm(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{c(u)})}))})}function s(i,o,c){const u=window.grecaptcha;Hd(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ys)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&Hd(window.grecaptcha))s(c,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ow();u.length!==0&&(u+=c),nl(u).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})})}}function Os(n,e,t,r=!1,s=!1){return p(this,null,function*(){const i=new Um(n);let o;if(s)o=Ys;else try{o=yield i.verify(t)}catch(u){o=yield i.verify(t,!0)}const c=J({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c})}function Tn(n,e,t,r,s){return p(this,null,function*(){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=yield Os(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(c=>p(this,null,function*(){if(c.code==="auth/missing-recaptcha-token"){const u=yield Os(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)}));else if(s==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const c=yield Os(n,e,t);return r(n,c).catch(u=>p(this,null,function*(){var l;if(((l=n._getRecaptchaConfig())==null?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){const d=yield Os(n,e,t,!1,!0);return r(n,d)}return Promise.reject(u)}))}else{const c=yield Os(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(s+" provider is not supported.")})}function zw(n){return p(this,null,function*(){const e=xe(n),t=yield Am(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new vm(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Um(e).verify()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(n,e){const t=Lt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Gt(i,e!=null?e:{}))return s;_t(s,"already-initialized")}return t.initialize({options:e})}function Hw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map($t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gu(n,e,t){const r=xe(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Fm(e),{host:o,port:c}=Kw(e),u=c===null?"":`:${c}`,l={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(Gt(l,r.config.emulator)&&Gt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Cn(o)?_a(`${i}//${o}${u}`):s||Ww()}function Fm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kw(n){const e=Fm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yd(o)}}}function Yd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ww(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:resetPassword",Pe(n,e))})}function Jw(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:update",e)})}function Yw(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:signUp",e)})}function Xw(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:update",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n,e){return p(this,null,function*(){return Yt(n,"POST","/v1/accounts:signInWithPassword",Pe(n,e))})}function va(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:sendOobCode",Pe(n,e))})}function ev(n,e){return p(this,null,function*(){return va(n,e)})}function tv(n,e){return p(this,null,function*(){return va(n,e)})}function nv(n,e){return p(this,null,function*(){return va(n,e)})}function rv(n,e){return p(this,null,function*(){return va(n,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n,e){return p(this,null,function*(){return Yt(n,"POST","/v1/accounts:signInWithEmailLink",Pe(n,e))})}function iv(n,e){return p(this,null,function*(){return Yt(n,"POST","/v1/accounts:signInWithEmailLink",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends wa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new mi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new mi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return p(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tn(e,t,"signInWithPassword",Zw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return sv(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}})}_linkToIdToken(e,t){return p(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tn(e,r,"signUpPassword",Yw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return iv(e,{idToken:t,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n,e){return p(this,null,function*(){return Yt(n,"POST","/v1/accounts:signInWithIdp",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="http://localhost";class Vt extends wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=c,i=lo(c,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Lr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Lr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lr(e,t)}buildRequest(){const e={requestUri:ov,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=os(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:sendVerificationCode",Pe(n,e))})}function av(n,e){return p(this,null,function*(){return Yt(n,"POST","/v1/accounts:signInWithPhoneNumber",Pe(n,e))})}function cv(n,e){return p(this,null,function*(){const t=yield Yt(n,"POST","/v1/accounts:signInWithPhoneNumber",Pe(n,e));if(t.temporaryProof)throw zs(n,"account-exists-with-different-credential",t);return t})}const uv={USER_NOT_FOUND:"user-not-found"};function lv(n,e){return p(this,null,function*(){const t=De(J({},e),{operation:"REAUTH"});return Yt(n,"POST","/v1/accounts:signInWithPhoneNumber",Pe(n,t),uv)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends wa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Xs({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Xs({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return av(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return cv(e,J({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return lv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Xs({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dv(n){const e=$s(js(n)).link,t=e?$s(js(e)).deep_link_id:null,r=$s(js(n)).deep_link_id;return(r?$s(js(r)).link:null)||r||t||e||n}class Aa{constructor(e){var o,c,u,l,d,m;const t=$s(js(e)),r=(o=t.apiKey)!=null?o:null,s=(c=t.oobCode)!=null?c:null,i=hv((u=t.mode)!=null?u:null);M(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=(l=t.continueUrl)!=null?l:null,this.languageCode=(d=t.lang)!=null?d:null,this.tenantId=(m=t.tenantId)!=null?m:null}static parseLink(e){const t=dv(e);try{return new Aa(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.providerId=Wt.PROVIDER_ID}static credential(e,t){return mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Aa.parseLink(t);return M(r,"argument-error"),mi._fromEmailAndCode(e,r.code,r.tenantId)}}Wt.PROVIDER_ID="password";Wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends as{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ye extends cs{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return M("providerId"in t&&"signInMethod"in t,"argument-error"),Vt._fromParams(t)}credential(e){return this._credential(De(J({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),Vt._fromParams(De(J({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ye.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ye.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:c}=e;if(!r&&!s&&!t&&!i||!c)return null;try{return new ye(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch(u){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends cs{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch(t){return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dt.credential(t,r)}catch(s){return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends cs{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends cs{constructor(){super("twitter.com")}static credential(e,t){return Vt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pt.credential(t,r)}catch(s){return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n,e){return p(this,null,function*(){return Yt(n,"POST","/v1/accounts:signUp",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,s=!1){return p(this,null,function*(){const i=yield Et._fromIdTokenResponse(e,r,s),o=Zd(r);return new Ot({user:i,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return p(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const s=Zd(r);return new Ot({user:e,providerId:s,_tokenResponse:r,operationType:t})})}}function Zd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n){return p(this,null,function*(){var s;if(ve(n.app))return Promise.reject(Je(n));const e=xe(n);if(yield e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new Ot({user:e.currentUser,providerId:null,operationType:"signIn"});const t=yield Bm(e,{returnSecureToken:!0}),r=yield Ot._fromIdTokenResponse(e,"signIn",t,!0);return yield e._updateCurrentUser(r.user),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends vt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!=null?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Go(e,t,r,s)}}function qm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n,e){return p(this,null,function*(){const t=z(n);yield Ra(!0,t,e);const{providerUserInfo:r}=yield yw(t.auth,{idToken:yield t.getIdToken(),deleteProvider:[e]}),s=$m(r||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),yield t.auth._persistUserIfCurrent(t),t})}function jm(n,e,t=!1){return p(this,null,function*(){const r=yield nr(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return Ot._forOperation(n,"link",r)})}function Ra(n,e,t){return p(this,null,function*(){yield pi(e);const r=$m(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";M(r.has(t)===n,e.auth,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e,t=!1){return p(this,null,function*(){const{auth:r}=n;if(ve(r.app))return Promise.reject(Je(r));const s="reauthenticate";try{const i=yield nr(n,qm(r,s,e,n),t);M(i.idToken,r,"internal-error");const o=Ta(i.idToken);M(o,r,"internal-error");const{sub:c}=o;return M(n.uid===c,r,"user-mismatch"),Ot._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),i}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n,e,t=!1){return p(this,null,function*(){if(ve(n.app))return Promise.reject(Je(n));const r="signIn",s=yield qm(n,r,e),i=yield Ot._fromIdTokenResponse(n,r,s);return t||(yield n._updateCurrentUser(i.user)),i})}function rl(n,e){return p(this,null,function*(){return zm(xe(n),e)})}function Gm(n,e){return p(this,null,function*(){const t=z(n);return yield Ra(!1,t,e.providerId),jm(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(n,e){return p(this,null,function*(){return Yt(n,"POST","/v1/accounts:signInWithCustomToken",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n,e){return p(this,null,function*(){if(ve(n.app))return Promise.reject(Je(n));const t=xe(n),r=yield gv(t,{token:e,returnSecureToken:!0}),s=yield Ot._fromIdTokenResponse(t,"signIn",r);return yield t._updateCurrentUser(s.user),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,e,t){var r;M(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),M(typeof t.linkDomain=="undefined"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){return p(this,null,function*(){const e=xe(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function yv(n,e,t){return p(this,null,function*(){const r=xe(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&ba(r,s,t),yield Tn(r,s,"getOobCode",tv,"EMAIL_PASSWORD_PROVIDER")})}function Iv(n,e,t){return p(this,null,function*(){yield Qw(z(n),{oobCode:e,newPassword:t}).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&sl(n),r}))})}function Ev(n,e){return p(this,null,function*(){yield Xw(z(n),{oobCode:e})})}function Tv(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(Je(n));const r=xe(n),o=yield Tn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bm,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&sl(n),u}),c=yield Ot._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(c.user),c})}function wv(n,e,t){return ve(n.app)?Promise.reject(Je(n)):rl(z(n),Wt.credential(e,t)).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&sl(n),r}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n,e,t){return p(this,null,function*(){const r=xe(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,c){M(c.handleCodeInApp,r,"argument-error"),c&&ba(r,o,c)}i(s,t),yield Tn(r,s,"getOobCode",nv,"EMAIL_PASSWORD_PROVIDER")})}function Av(n,e){const t=Aa.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}function Rv(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(Je(n));const r=z(n),s=Wt.credentialWithLink(e,t||fi());return M(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),rl(r,s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:createAuthUri",Pe(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n,e){return p(this,null,function*(){const t=Zu()?fi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=yield bv(z(n),r);return s||[]})}function Pv(n,e){return p(this,null,function*(){const t=z(n),s={requestType:"VERIFY_EMAIL",idToken:yield n.getIdToken()};e&&ba(t.auth,s,e);const{email:i}=yield ev(t.auth,s);i!==n.email&&(yield n.reload())})}function kv(n,e,t){return p(this,null,function*(){const r=z(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:yield n.getIdToken(),newEmail:e};t&&ba(r.auth,i,t);const{email:o}=yield rv(r.auth,i);o!==n.email&&(yield n.reload())})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n,e){return p(this,null,function*(){return ke(n,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(r,s){return p(this,arguments,function*(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=z(n),c={idToken:yield i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=yield nr(i,Cv(i.auth,c));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const l=i.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),yield i._updateTokensIfNecessary(u)})}function Dv(n,e){const t=z(n);return ve(t.auth.app)?Promise.reject(Je(t.auth)):Hm(t,e,null)}function Vv(n,e){return Hm(z(n),null,e)}function Hm(n,e,t){return p(this,null,function*(){const{auth:r}=n,i={idToken:yield n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=yield nr(n,Jw(r,i));yield n._updateTokensIfNecessary(o,!0)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n){var s,i;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const o=(i=(s=Ta(n.idToken))==null?void 0:s.firebase)==null?void 0:i.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Ur(r,c)}}if(!e)return null;switch(e){case"facebook.com":return new xv(r,t);case"github.com":return new Mv(r,t);case"google.com":return new Lv(r,t);case"twitter.com":return new Uv(r,t,n.screenName||null);case"custom":case"anonymous":return new Ur(r,null);default:return new Ur(r,e,t)}}class Ur{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Km extends Ur{constructor(e,t,r,s){super(e,t,r),this.username=s}}class xv extends Ur{constructor(e,t){super(e,"facebook.com",t)}}class Mv extends Km{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Lv extends Ur{constructor(e,t){super(e,"google.com",t)}}class Uv extends Km{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Fv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Ov(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,e){return z(n).setPersistence(e)}function Bv(n,e,t,r){return z(n).onIdTokenChanged(e,t,r)}function qv(n,e,t){return z(n).beforeAuthStateChanged(e,t)}function tD(n,e,t,r){return z(n).onAuthStateChanged(e,t,r)}function nD(n){return z(n).signOut()}function $v(n,e){return xe(n).revokeAccessToken(e)}function jv(n){return p(this,null,function*(){return z(n).delete()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n,e){return ke(n,"POST","/v2/accounts/mfaEnrollment:start",Pe(n,e))}const Ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=1e3,Gv=10;class Fr extends Wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);bw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return p(this,null,function*(){yield Ft(Fr.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return p(this,null,function*(){const t=yield Ft(Fr.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return p(this,null,function*(){yield Ft(Fr.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}Fr.type="LOCAL";const Qm=Fr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm extends Wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jm.type="SESSION";const il=Jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(n){return Promise.all(n.map(e=>p(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return p(this,null,function*(){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(l=>p(this,null,function*(){return l(t.origin,i)})),u=yield Hv(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return p(this,null,function*(){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const l=Pa("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===l)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return window}function Wv(n){we().location.href=n}/**
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
 */function ol(){return typeof we().WorkerGlobalScope!="undefined"&&typeof we().importScripts=="function"}function Qv(){return p(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function Jv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Yv(){return ol()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="firebaseLocalStorageDb",Xv=1,Ko="firebaseLocalStorage",Xm="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ka(n,e){return n.transaction([Ko],e?"readwrite":"readonly").objectStore(Ko)}function Zv(){const n=indexedDB.deleteDatabase(Ym);return new xi(n).toPromise()}function _u(){const n=indexedDB.open(Ym,Xv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ko,{keyPath:Xm})}catch(s){t(s)}}),n.addEventListener("success",()=>p(this,null,function*(){const r=n.result;r.objectStoreNames.contains(Ko)?e(r):(r.close(),yield Zv(),e(yield _u()))}))})}function tf(n,e,t){return p(this,null,function*(){const r=ka(n,!0).put({[Xm]:e,value:t});return new xi(r).toPromise()})}function eA(n,e){return p(this,null,function*(){const t=ka(n,!1).get(e),r=yield new xi(t).toPromise();return r===void 0?null:r.value})}function nf(n,e){const t=ka(n,!0).delete(e);return new xi(t).toPromise()}const tA=800,nA=3;class Zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return p(this,null,function*(){return this.db?this.db:(this.db=yield _u(),this.db)})}_withRetries(e){return p(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>nA)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return p(this,null,function*(){return ol()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return p(this,null,function*(){this.receiver=Sa._getInstance(Yv()),this.receiver._subscribe("keyChanged",(e,t)=>p(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>p(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return p(this,null,function*(){var t,r;if(this.activeServiceWorker=yield Qv(),!this.activeServiceWorker)return;this.sender=new Kv(this.activeServiceWorker);const e=yield this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return p(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||Jv()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return p(this,null,function*(){try{if(!indexedDB)return!1;const e=yield _u();return yield tf(e,Ho,"1"),yield nf(e,Ho),!0}catch(e){}return!1})}_withPendingWrite(e){return p(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(r=>tf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return p(this,null,function*(){const t=yield this._withRetries(r=>eA(r,e));return this.localCache[e]=t,t})}_remove(e){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(t=>nf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return p(this,null,function*(){const e=yield this._withRetries(s=>{const i=ka(s,!1).getAll();return new xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>p(this,null,function*(){return this._poll()}),tA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zm.type="LOCAL";const eg=Zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n,e){return ke(n,"POST","/v2/accounts/mfaSignIn:start",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=Lm("rcb"),rA=new Vi(3e4,6e4);class sA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=we().grecaptcha)!=null&&e.render)}load(e,t=""){return M(iA(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Gd(we().grecaptcha)?Promise.resolve(we().grecaptcha):new Promise((r,s)=>{const i=we().setTimeout(()=>{s(rt(e,"network-request-failed"))},rA.get());we()[qc]=()=>{we().clearTimeout(i),delete we()[qc];const c=we().grecaptcha;if(!c||!Gd(c)){s(rt(e,"internal-error"));return}const u=c.render;c.render=(l,d)=>{const m=u(l,d);return this.counter++,m},this.hostLanguage=t,r(c)};const o=`${Vw()}?${os({onload:qc,render:"explicit",hl:t})}`;nl(o).catch(()=>{clearTimeout(i),s(rt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=we().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iA(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class oA{load(e){return p(this,null,function*(){return new Uw(e)})}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="recaptcha",aA={theme:"light",type:"image"};class sf{constructor(e,t,r=J({},aA)){this.parameters=r,this.type=Zs,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;M(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new oA:new sA,this.validateStartingState()}verify(){return p(this,null,function*(){this.assertNotDestroyed();const e=yield this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=we()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}makeRenderPromise(){return p(this,null,function*(){if(yield this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId})}init(){return p(this,null,function*(){M(Zu()&&!ol(),this.auth,"internal-error"),yield cA(),this.recaptcha=yield this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=yield gw(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e})}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function cA(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Xs._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}function uA(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(Je(n));const r=xe(n),s=yield ng(r,e,z(t));return new tg(s,i=>rl(r,i))})}function lA(n,e,t){return p(this,null,function*(){const r=z(n);yield Ra(!1,r,"phone");const s=yield ng(r.auth,e,z(t));return new tg(s,i=>Gm(r,i))})}function ng(n,e,t){return p(this,null,function*(){var r;if(!n._getRecaptchaConfig())try{yield zw(n)}catch(s){}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){M(i.type==="enroll",n,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(yield Tn(n,o,"mfaSmsEnrollment",(d,m)=>p(this,null,function*(){if(m.phoneEnrollmentInfo.captchaResponse===Ys){M((t==null?void 0:t.type)===Zs,d,"argument-error");const _=yield $c(d,m,t);return ef(d,_)}return ef(d,m)}),"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{M(i.type==="signin",n,"internal-error");const o=((r=s.multiFactorHint)==null?void 0:r.uid)||s.multiFactorUid;M(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(yield Tn(n,c,"mfaSmsSignIn",(m,_)=>p(this,null,function*(){if(_.phoneSignInInfo.captchaResponse===Ys){M((t==null?void 0:t.type)===Zs,m,"argument-error");const A=yield $c(m,_,t);return rf(m,A)}return rf(m,_)}),"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(yield Tn(n,i,"sendVerificationCode",(l,d)=>p(this,null,function*(){if(d.captchaResponse===Ys){M((t==null?void 0:t.type)===Zs,l,"argument-error");const m=yield $c(l,d,t);return Xd(l,m)}return Xd(l,d)}),"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}})}function $c(n,e,t){return p(this,null,function*(){M(t.type===Zs,n,"argument-error");const r=yield t.verify();M(typeof r=="string",n,"argument-error");const s=J({},e);if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,c=s.phoneEnrollmentInfo.clientType,u=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,c=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:c}}),s}else return Object.assign(s,{recaptchaToken:r}),s})}/**
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
 */function Mi(n,e){return e?$t(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hA(n){return zm(n.auth,new al(n),n.bypassAuthState)}function dA(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),mv(t,new al(n),n.bypassAuthState)}function fA(n){return p(this,null,function*(){const{auth:e,user:t}=n;return M(t,e,"internal-error"),jm(t,new al(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>p(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return p(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(c)(u))}catch(l){this.reject(l)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hA;case"linkViaPopup":case"linkViaRedirect":return fA;case"reauthViaPopup":case"reauthViaRedirect":return dA;default:_t(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new Vi(2e3,1e4);function mA(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(rt(n,"operation-not-supported-in-this-environment"));const r=xe(n);Ea(n,e,as);const s=Mi(r,t);return new _n(r,"signInViaPopup",e,s).executeNotNull()})}function gA(n,e,t){return p(this,null,function*(){const r=z(n);Ea(r.auth,e,as);const s=Mi(r.auth,t);return new _n(r.auth,"linkViaPopup",e,s,r).executeNotNull()})}class _n extends rg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}executeNotNull(){return p(this,null,function*(){const e=yield this.execute();return M(e,this.auth,"internal-error"),e})}onExecution(){return p(this,null,function*(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=Pa();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pA.get())};e()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="pendingRedirect",So=new Map;class ei extends rg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return p(this,null,function*(){let e=So.get(this.auth._key());if(!e){try{const r=(yield yA(this.resolver,this.auth))?yield Ft(ei.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return p(this,null,function*(){if(e.type==="signInViaRedirect")return Ft(ei.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,Ft(ei.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return p(this,null,function*(){})}cleanUp(){}}function yA(n,e){return p(this,null,function*(){const t=og(e),r=ig(n);if(!(yield r._isAvailable()))return!1;const s=(yield r._get(t))==="true";return yield r._remove(t),s})}function sg(n,e){return p(this,null,function*(){return ig(n)._set(og(e),"true")})}function IA(n,e){So.set(n._key(),e)}function ig(n){return $t(n._redirectPersistence)}function og(n){return bo(_A,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(n,e,t){return TA(n,e,t)}function TA(n,e,t){return p(this,null,function*(){if(ve(n.app))return Promise.reject(Je(n));const r=xe(n);Ea(n,e,as),yield r._initializationPromise;const s=Mi(r,t);return yield sg(s,r),s._openRedirect(r,e,"signInViaRedirect")})}function wA(n,e,t){return vA(n,e,t)}function vA(n,e,t){return p(this,null,function*(){const r=z(n);Ea(r.auth,e,as),yield r.auth._initializationPromise;const s=Mi(r.auth,t);yield Ra(!1,r,e.providerId),yield sg(s,r.auth);const i=yield RA(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)})}function AA(n,e){return p(this,null,function*(){return yield xe(n)._initializationPromise,ag(n,e,!1)})}function ag(n,e,t=!1){return p(this,null,function*(){if(ve(n.app))return Promise.reject(Je(n));const r=xe(n),s=Mi(r,e),o=yield new ei(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}function RA(n){return p(this,null,function*(){const e=Pa(`${n.uid}:::`);return n._redirectEventId=e,yield n.auth._setRedirectUser(n),yield n.auth._persistUserIfCurrent(n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=10*60*1e3;class SA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!cg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bA&&this.cachedEventUids.clear(),this.cachedEventUids.has(of(e))}saveEventToCache(e){this.cachedEventUids.add(of(e)),this.lastProcessedEventTime=Date.now()}}function of(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){return p(this,arguments,function*(n,e={}){return ke(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NA=/^https?/;function DA(n){return p(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield kA(n);for(const t of e)try{if(VA(t))return}catch(r){}_t(n,"unauthorized-domain")})}function VA(n){const e=fi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!NA.test(t))return!1;if(CA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OA=new Vi(3e4,6e4);function af(){const n=we().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xA(n){return new Promise((e,t)=>{var s,i,o;function r(){af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{af(),t(rt(n,"network-request-failed"))},timeout:OA.get()})}if((i=(s=we().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=we().gapi)!=null&&o.load)r();else{const c=Lm("iframefcb");return we()[c]=()=>{gapi.load?r():t(rt(n,"network-request-failed"))},nl(`${xw()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Po=null,e})}let Po=null;function MA(n){return Po=Po||xA(n),Po}/**
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
 */const LA=new Vi(5e3,15e3),UA="__/auth/iframe",FA="emulator/auth/iframe",BA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $A(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?el(e,FA):`https://${n.config.authDomain}/${UA}`,r={apiKey:e.apiKey,appName:n.name,v:_r},s=qA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${os(r).slice(1)}`}function jA(n){return p(this,null,function*(){const e=yield MA(n),t=we().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:$A(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BA,dontclear:!0},r=>new Promise((s,i)=>p(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=rt(n,"network-request-failed"),c=we().setTimeout(()=>{i(o)},LA.get());function u(){we().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})})))})}/**
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
 */const zA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GA=500,HA=600,KA="_blank",WA="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function QA(n,e,t,r=GA,s=HA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=De(J({},zA),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Se().toLowerCase();t&&(c=Cm(l)?KA:t),Pm(l)&&(e=e||WA,u.scrollbars="yes");const d=Object.entries(u).reduce((_,[A,C])=>`${_}${A}=${C},`,"");if(Rw(l)&&c!=="_self")return JA(e||"",c),new cf(null);const m=window.open(e||"",c,d);M(m,n,"popup-blocked");try{m.focus()}catch(_){}return new cf(m)}function JA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const YA="__/auth/handler",XA="emulator/auth/handler",ZA=encodeURIComponent("fac");function uf(n,e,t,r,s,i){return p(this,null,function*(){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_r,eventId:s};if(e instanceof as){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries(i||{}))o[d]=m}if(e instanceof cs){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=yield n._getAppCheckToken(),l=u?`#${ZA}=${encodeURIComponent(u)}`:"";return`${eR(n)}?${os(c).slice(1)}${l}`})}function eR({config:n}){return n.emulator?el(n,XA):`https://${n.authDomain}/${YA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class tR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=il,this._completeRedirectFn=ag,this._overrideRedirectResult=IA}_openPopup(e,t,r,s){return p(this,null,function*(){var o;Kt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=yield uf(e,t,r,fi(),s);return QA(e,i,Pa())})}_openRedirect(e,t,r,s){return p(this,null,function*(){yield this._originValidation(e);const i=yield uf(e,t,r,fi(),s);return Wv(i),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Kt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return p(this,null,function*(){const t=yield jA(e),r=new SA(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jc,{type:jc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[jc];i!==void 0&&t(!!i),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xm()||km()||tl()}}const nR=tR;var lf="@firebase/auth",hf="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}getToken(e){return p(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iR(n){ut(new st("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mm(n)},l=new Nw(r,s,i,u);return Hw(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ut(new st("auth-internal",e=>{const t=xe(e.getProvider("auth").getImmediate());return(r=>new rR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(lf,hf,sR(n)),Qe(lf,hf,"esm2020")}/**
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
 */const oR=5*60,aR=cm("authIdTokenMaxAge")||oR;let df=null;const cR=n=>e=>p(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>aR)return;const s=t==null?void 0:t.token;df!==s&&(df=s,yield fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});function Z(n=Di()){const e=Lt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gw(n,{popupRedirectResolver:nR,persistence:[eg,Qm,il]}),r=cm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=cR(i.toString());qv(t,o,()=>o(t.currentUser)),Bv(t,c=>o(c))}}const s=im("auth");return s&&gu(t,`http://${s}`),t}function uR(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}Dw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",uR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iR("Browser");var lR="firebase",hR="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(lR,hR,"app");var ff=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wn,ug;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.F=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,S){for(var I=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)I[Ze-2]=arguments[Ze];return y.prototype[w].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,E){E||(E=0);const v=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)v[w]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],w=T.g[2];let S=T.g[3],I;I=y+(S^E&(w^S))+v[0]+3614090360&4294967295,y=E+(I<<7&4294967295|I>>>25),I=S+(w^y&(E^w))+v[1]+3905402710&4294967295,S=y+(I<<12&4294967295|I>>>20),I=w+(E^S&(y^E))+v[2]+606105819&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(y^w&(S^y))+v[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(S^E&(w^S))+v[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=S+(w^y&(E^w))+v[5]+1200080426&4294967295,S=y+(I<<12&4294967295|I>>>20),I=w+(E^S&(y^E))+v[6]+2821735955&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(y^w&(S^y))+v[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(S^E&(w^S))+v[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=S+(w^y&(E^w))+v[9]+2336552879&4294967295,S=y+(I<<12&4294967295|I>>>20),I=w+(E^S&(y^E))+v[10]+4294925233&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(y^w&(S^y))+v[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(S^E&(w^S))+v[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=S+(w^y&(E^w))+v[13]+4254626195&4294967295,S=y+(I<<12&4294967295|I>>>20),I=w+(E^S&(y^E))+v[14]+2792965006&4294967295,w=S+(I<<17&4294967295|I>>>15),I=E+(y^w&(S^y))+v[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=y+(w^S&(E^w))+v[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(y^E))+v[6]+3225465664&4294967295,S=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(S^y))+v[11]+643717713&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(w^S))+v[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(w^S&(E^w))+v[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(y^E))+v[10]+38016083&4294967295,S=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(S^y))+v[15]+3634488961&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(w^S))+v[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(w^S&(E^w))+v[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(y^E))+v[14]+3275163606&4294967295,S=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(S^y))+v[3]+4107603335&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(w^S))+v[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(w^S&(E^w))+v[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=S+(E^w&(y^E))+v[2]+4243563512&4294967295,S=y+(I<<9&4294967295|I>>>23),I=w+(y^E&(S^y))+v[7]+1735328473&4294967295,w=S+(I<<14&4294967295|I>>>18),I=E+(S^y&(w^S))+v[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=y+(E^w^S)+v[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^w)+v[8]+2272392833&4294967295,S=y+(I<<11&4294967295|I>>>21),I=w+(S^y^E)+v[11]+1839030562&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^y)+v[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(E^w^S)+v[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^w)+v[4]+1272893353&4294967295,S=y+(I<<11&4294967295|I>>>21),I=w+(S^y^E)+v[7]+4139469664&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^y)+v[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(E^w^S)+v[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^w)+v[0]+3936430074&4294967295,S=y+(I<<11&4294967295|I>>>21),I=w+(S^y^E)+v[3]+3572445317&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^y)+v[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(E^w^S)+v[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=S+(y^E^w)+v[12]+3873151461&4294967295,S=y+(I<<11&4294967295|I>>>21),I=w+(S^y^E)+v[15]+530742520&4294967295,w=S+(I<<16&4294967295|I>>>16),I=E+(w^S^y)+v[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=y+(w^(E|~S))+v[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~w))+v[7]+1126891415&4294967295,S=y+(I<<10&4294967295|I>>>22),I=w+(y^(S|~E))+v[14]+2878612391&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~y))+v[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=y+(w^(E|~S))+v[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~w))+v[3]+2399980690&4294967295,S=y+(I<<10&4294967295|I>>>22),I=w+(y^(S|~E))+v[10]+4293915773&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~y))+v[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=y+(w^(E|~S))+v[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~w))+v[15]+4264355552&4294967295,S=y+(I<<10&4294967295|I>>>22),I=w+(y^(S|~E))+v[6]+2734768916&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~y))+v[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=y+(w^(E|~S))+v[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=S+(E^(y|~w))+v[11]+3174756917&4294967295,S=y+(I<<10&4294967295|I>>>22),I=w+(y^(S|~E))+v[2]+718787259&4294967295,w=S+(I<<15&4294967295|I>>>17),I=E+(S^(w|~y))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const E=y-this.blockSize,v=this.C;let w=this.h,S=0;for(;S<y;){if(w==0)for(;S<=E;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<y;)if(v[w++]=T.charCodeAt(S++),w==this.blockSize){s(this,v),w=0;break}}else for(;S<y;)if(v[w++]=T[S++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[y++]=this.g[E]>>>v&255;return T};function i(T,y){var E=c;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function o(T,y){this.h=y;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const S=T[w]|0;v&&S==y||(E[w]=S,v=!1)}this.g=E}var c={};function u(T){return-128<=T&&T<128?i(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return D(l(-T));const y=[];let E=1;for(let v=0;T>=E;v++)y[v]=T/E|0,E*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return D(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=l(Math.pow(y,8));let v=m;for(let S=0;S<T.length;S+=8){var w=Math.min(8,T.length-S);const I=parseInt(T.substring(S,S+w),y);w<8?(w=l(Math.pow(y,w)),v=v.j(w).add(l(I))):(v=v.j(E),v=v.add(l(I)))}return v}var m=u(0),_=u(1),A=u(16777216);n=o.prototype,n.m=function(){if(V(this))return-D(this).m();let T=0,y=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(V(this))return"-"+D(this).toString(T);const y=l(Math.pow(T,6));var E=this;let v="";for(;;){const w=H(E,y).g;E=G(E,w.j(y));let S=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,C(E))return S+v;for(;S.length<6;)S="0"+S;v=S+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=G(this,T),V(T)?-1:C(T)?0:1};function D(T){const y=T.g.length,E=[];for(let v=0;v<y;v++)E[v]=~T.g[v];return new o(E,~T.h).add(_)}n.abs=function(){return V(this)?D(this):this},n.add=function(T){const y=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=y;w++){let S=v+(this.i(w)&65535)+(T.i(w)&65535),I=(S>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=I>>>16,S&=65535,I&=65535,E[w]=I<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function G(T,y){return T.add(D(y))}n.j=function(T){if(C(this)||C(T))return m;if(V(this))return V(T)?D(this).j(D(T)):D(D(this).j(T));if(V(T))return D(this.j(D(T)));if(this.l(A)<0&&T.l(A)<0)return l(this.m()*T.m());const y=this.g.length+T.g.length,E=[];for(var v=0;v<2*y;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const S=this.i(v)>>>16,I=this.i(v)&65535,Ze=T.i(w)>>>16,nn=T.i(w)&65535;E[2*v+2*w]+=I*nn,$(E,2*v+2*w),E[2*v+2*w+1]+=S*nn,$(E,2*v+2*w+1),E[2*v+2*w+1]+=I*Ze,$(E,2*v+2*w+1),E[2*v+2*w+2]+=S*Ze,$(E,2*v+2*w+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new o(E,0)};function $(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function F(T,y){this.g=T,this.h=y}function H(T,y){if(C(y))throw Error("division by zero");if(C(T))return new F(m,m);if(V(T))return y=H(D(T),y),new F(D(y.g),D(y.h));if(V(y))return y=H(T,D(y)),new F(D(y.g),y.h);if(T.g.length>30){if(V(T)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var E=_,v=y;v.l(T)<=0;)E=W(E),v=W(v);var w=Q(E,1),S=Q(v,1);for(v=Q(v,2),E=Q(E,2);!C(v);){var I=S.add(v);I.l(T)<=0&&(w=w.add(E),S=I),v=Q(v,1),E=Q(E,1)}return y=G(T,w.j(y)),new F(w,y)}for(w=m;T.l(y)>=0;){for(E=Math.max(1,Math.floor(T.m()/y.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),S=l(E),I=S.j(y);V(I)||I.l(T)>0;)E-=v,S=l(E),I=S.j(y);C(S)&&(S=_),w=w.add(S),T=G(T,I)}return new F(w,T)}n.B=function(T){return H(this,T).h},n.and=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)&T.i(v);return new o(E,this.h&T.h)},n.or=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)|T.i(v);return new o(E,this.h|T.h)},n.xor=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)^T.i(v);return new o(E,this.h^T.h)};function W(T){const y=T.g.length+1,E=[];for(let v=0;v<y;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(E,T.h)}function Q(T,y){const E=y>>5;y%=32;const v=T.g.length-E,w=[];for(let S=0;S<v;S++)w[S]=y>0?T.i(S+E)>>>y|T.i(S+E+1)<<32-y:T.i(S+E);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ug=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,wn=o}).apply(typeof ff!="undefined"?ff:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var po=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lg,Gs,hg,ko,yu,dg,fg,pg;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof po=="object"&&po];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function l(a,h,f){return l=u,l.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,b,P){for(var x=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)x[Y-2]=arguments[Y];return h.prototype[b].apply(g,x)}}var _=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const b=arguments[g];var f=typeof b;if(f=f!="object"?f:b?Array.isArray(b)?"array":f:"null",f=="array"||f=="object"&&typeof b.length=="number"){f=a.length||0;const P=b.length||0;a.length=f+P;for(let x=0;x<P;x++)a[f+x]=b[x]}else a.push(b)}}class V{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function G(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,f){const g=F.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var F=new V(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let W,Q=!1,T=new $,y=()=>{const a=Promise.resolve(void 0);W=()=>{a.then(E)}};function E(){for(var a;a=G();){try{a.h.call(a.g)}catch(f){D(f)}var h=F;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Q=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch(f){}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Ze(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Ze,w),Ze.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ze.Z.h.call(this)},Ze.prototype.h=function(){Ze.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nn="closure_listenable_"+(Math.random()*1e6|0),jI=0;function zI(a,h,f,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++jI,this.da=this.fa=!1}function Wi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Qi(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function GI(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Ch(a){const h={};for(const f in a)h[f]=a[f];return h}const Nh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dh(a,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let P=0;P<Nh.length;P++)f=Nh[P],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Ji(a){this.src=a,this.g={},this.h=0}Ji.prototype.add=function(a,h,f,g,b){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const x=lc(a,h,g,b);return x>-1?(h=a[x],f||(h.fa=!1)):(h=new zI(h,this.src,P,!!g,b),h.fa=f,a.push(h)),h};function uc(a,h){const f=h.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,h,void 0),P;(P=b>=0)&&Array.prototype.splice.call(g,b,1),P&&(Wi(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function lc(a,h,f,g){for(let b=0;b<a.length;++b){const P=a[b];if(!P.da&&P.listener==h&&P.capture==!!f&&P.ha==g)return b}return-1}var hc="closure_lm_"+(Math.random()*1e6|0),dc={};function Vh(a,h,f,g,b){if(g&&g.once)return xh(a,h,f,g,b);if(Array.isArray(h)){for(let P=0;P<h.length;P++)Vh(a,h[P],f,g,b);return null}return f=gc(f),a&&a[nn]?a.J(h,f,c(g)?!!g.capture:!!g,b):Oh(a,h,f,!1,g,b)}function Oh(a,h,f,g,b,P){if(!h)throw Error("Invalid event type");const x=c(b)?!!b.capture:!!b;let Y=pc(a);if(Y||(a[hc]=Y=new Ji(a)),f=Y.add(h,f,g,x,P),f.proxy)return f;if(g=HI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)S||(b=x),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(Lh(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function HI(){function a(f){return h.call(a.src,a.listener,f)}const h=KI;return a}function xh(a,h,f,g,b){if(Array.isArray(h)){for(let P=0;P<h.length;P++)xh(a,h[P],f,g,b);return null}return f=gc(f),a&&a[nn]?a.K(h,f,c(g)?!!g.capture:!!g,b):Oh(a,h,f,!0,g,b)}function Mh(a,h,f,g,b){if(Array.isArray(h))for(var P=0;P<h.length;P++)Mh(a,h[P],f,g,b);else g=c(g)?!!g.capture:!!g,f=gc(f),a&&a[nn]?(a=a.i,P=String(h).toString(),P in a.g&&(h=a.g[P],f=lc(h,f,g,b),f>-1&&(Wi(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[P],a.h--)))):a&&(a=pc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=lc(h,f,g,b)),(f=a>-1?h[a]:null)&&fc(f))}function fc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[nn])uc(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Lh(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=pc(h))?(uc(f,a),f.h==0&&(f.src=null,h[hc]=null)):Wi(a)}}}function Lh(a){return a in dc?dc[a]:dc[a]="on"+a}function KI(a,h){if(a.da)a=!0;else{h=new Ze(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&fc(a),a=f.call(g,h)}return a}function pc(a){return a=a[hc],a instanceof Ji?a:null}var mc="__closure_events_fn_"+(Math.random()*1e9>>>0);function gc(a){return typeof a=="function"?a:(a[mc]||(a[mc]=function(h){return a.handleEvent(h)}),a[mc])}function Fe(){v.call(this),this.i=new Ji(this),this.M=this,this.G=null}m(Fe,v),Fe.prototype[nn]=!0,Fe.prototype.removeEventListener=function(a,h,f,g){Mh(this,a,h,f,g)};function Ge(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var b=h;h=new w(g,a),Dh(h,b)}b=!0;let P,x;if(f)for(x=f.length-1;x>=0;x--)P=h.g=f[x],b=Yi(P,g,!0,h)&&b;if(P=h.g=a,b=Yi(P,g,!0,h)&&b,b=Yi(P,g,!1,h)&&b,f)for(x=0;x<f.length;x++)P=h.g=f[x],b=Yi(P,g,!1,h)&&b}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)Wi(f[g]);delete a.g[h],a.h--}}this.G=null},Fe.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Fe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Yi(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let P=0;P<h.length;++P){const x=h[P];if(x&&!x.da&&x.capture==f){const Y=x.listener,Re=x.ha||x.src;x.fa&&uc(a.i,x),b=Y.call(Re,g)!==!1&&b}}return b&&!g.defaultPrevented}function WI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Uh(a){a.g=WI(()=>{a.g=null,a.i&&(a.i=!1,Uh(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class QI extends v{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Uh(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(a){v.call(this),this.h=a,this.g={}}m(ys,v);var Fh=[];function Bh(a){Qi(a.g,function(h,f){this.g.hasOwnProperty(f)&&fc(h)},a),a.g={}}ys.prototype.N=function(){ys.Z.N.call(this),Bh(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _c=o.JSON.stringify,JI=o.JSON.parse,YI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function qh(){}function $h(){}var Is={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yc(){w.call(this,"d")}m(yc,w);function Ic(){w.call(this,"c")}m(Ic,w);var xn={},jh=null;function Xi(){return jh=jh||new Fe}xn.Ia="serverreachability";function zh(a){w.call(this,xn.Ia,a)}m(zh,w);function Es(a){const h=Xi();Ge(h,new zh(h))}xn.STAT_EVENT="statevent";function Gh(a,h){w.call(this,xn.STAT_EVENT,a),this.stat=h}m(Gh,w);function He(a){const h=Xi();Ge(h,new Gh(h,a))}xn.Ja="timingevent";function Hh(a,h){w.call(this,xn.Ja,a),this.size=h}m(Hh,w);function Ts(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function XI(a,h,f,g,b,P){a.info(function(){if(a.g)if(P){var x="",Y=P.split("&");for(let ce=0;ce<Y.length;ce++){var Re=Y[ce].split("=");if(Re.length>1){const Ne=Re[0];Re=Re[1];const Rt=Ne.split("_");x=Rt.length>=2&&Rt[1]=="type"?x+(Ne+"="+Re+"&"):x+(Ne+"=redacted&")}}}else x=null;else x=P;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+x})}function ZI(a,h,f,g,b,P,x){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+P+" "+x})}function Ir(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+tE(a,f)+(g?" "+g:"")})}function eE(a,h){a.info(function(){return"TIMEOUT: "+h})}ws.prototype.info=function(){};function tE(a,h){if(!a.g)return h;if(!h)return null;try{const P=JSON.parse(h);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var f=P[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var b=g[0];if(b!="noop"&&b!="stop"&&b!="close")for(let x=1;x<g.length;x++)g[x]=""}}}}return _c(P)}catch(P){return h}}var Zi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wh;function Ec(){}m(Ec,qh),Ec.prototype.g=function(){return new XMLHttpRequest},Wh=new Ec;function vs(a){return encodeURIComponent(String(a))}function nE(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function rn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new ys(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qh}function Qh(){this.i=null,this.g="",this.h=!1}var Jh={},Tc={};function wc(a,h,f){a.M=1,a.A=to(At(h)),a.u=f,a.R=!0,Yh(a,null)}function Yh(a,h){a.F=Date.now(),eo(a),a.B=At(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),ld(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Qh,a.g=Pd(a.j,f?h:null,!a.u),a.P>0&&(a.O=new QI(l(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Fh[0]=b.toString()),b=Fh);for(let P=0;P<b.length;P++){const x=Vh(f,b[P],g||h.handleEvent,!1,h.h||h);if(!x)break;h.g[x.key]=x}h=a.J?Ch(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Es(),XI(a.i,a.v,a.B,a.l,a.S,a.u)}rn.prototype.ba=function(a){a=a.target;const h=this.O;h&&an(a)==3?h.j():this.Y(a)},rn.prototype.Y=function(a){try{if(a==this.g)e:{const Y=an(this.g),Re=this.g.ya(),ce=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||_d(this.g)))){this.K||Y!=4||Re==7||(Re==8||ce<=0?Es(3):Es(2)),vc(this);var h=this.g.ca();this.X=h;var f=rE(this);if(this.o=h==200,ZI(this.i,this.v,this.B,this.l,this.S,Y,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,b=this.g;if((g=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var P=g;break t}}P=null}if(a=P)Ir(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ac(this,a);else{this.o=!1,this.m=3,He(12),Mn(this),As(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<f.length;)if(Ne=sE(this,f),Ne==Tc){Y==4&&(this.m=4,He(14),a=!1),Ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Jh){this.m=4,He(15),Ir(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ir(this.i,this.l,Ne,null),Ac(this,Ne);if(Xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||f.length!=0||this.h.h||(this.m=1,He(16),a=!1),this.o=this.o&&a,!a)Ir(this.i,this.l,f,"[Invalid Chunked Response]"),Mn(this),As(this);else if(f.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Dc(x),x.P=!0,He(11))}}else Ir(this.i,this.l,f,null),Ac(this,f);Y==4&&Mn(this),this.o&&!this.K&&(Y==4?Ad(this.j,this):(this.o=!1,eo(this)))}else yE(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),Mn(this),As(this)}}}catch(Y){}finally{}};function rE(a){if(!Xh(a))return a.g.la();const h=_d(a.g);if(h==="")return"";let f="";const g=h.length,b=an(a.g)==4;if(!a.h.i){if(typeof TextDecoder=="undefined")return Mn(a),As(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<g;P++)a.h.h=!0,f+=a.h.i.decode(h[P],{stream:!(b&&P==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Xh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function sE(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Tc:(f=Number(h.substring(f,g)),isNaN(f)?Jh:(g+=1,g+f>h.length?Tc:(h=h.slice(g,g+f),a.C=g+f,h)))}rn.prototype.cancel=function(){this.K=!0,Mn(this)};function eo(a){a.T=Date.now()+a.H,Zh(a,a.H)}function Zh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ts(l(a.aa,a),h)}function vc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}rn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(eE(this.i,this.B),this.M!=2&&(Es(),He(17)),Mn(this),this.m=2,As(this)):Zh(this,this.T-a)};function As(a){a.j.I==0||a.K||Ad(a.j,a)}function Mn(a){vc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Bh(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Ac(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Rc(f.h,a))){if(!a.L&&Rc(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch(ce){g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)oo(f),so(f);else break e;Nc(f),He(18)}}else f.xa=b[1],0<f.xa-f.K&&b[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ts(l(f.Va,f),6e3));nd(f.h)<=1&&f.ta&&(f.ta=void 0)}else Un(f,11)}else if((a.L||f.g==a)&&oo(f),!I(h))for(b=f.Ba.g.parse(h),h=0;h<b.length;h++){let ce=b[h];const Ne=ce[0];if(!(Ne<=f.K))if(f.K=Ne,ce=ce[1],f.I==2)if(ce[0]=="c"){f.M=ce[1],f.ba=ce[2];const Rt=ce[3];Rt!=null&&(f.ka=Rt,f.j.info("VER="+f.ka));const Fn=ce[4];Fn!=null&&(f.za=Fn,f.j.info("SVER="+f.za));const cn=ce[5];cn!=null&&typeof cn=="number"&&cn>0&&(g=1.5*cn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const un=a.g;if(un){const co=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(co){var P=g.h;P.g||co.indexOf("spdy")==-1&&co.indexOf("quic")==-1&&co.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(bc(P,P.h),P.h=null))}if(g.G){const Vc=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Vc&&(g.wa=Vc,he(g.J,g.G,Vc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var x=a;if(g.na=Sd(g,g.L?g.ba:null,g.W),x.L){rd(g.h,x);var Y=x,Re=g.O;Re&&(Y.H=Re),Y.D&&(vc(Y),eo(Y)),g.g=x}else wd(g);f.i.length>0&&io(f)}else ce[0]!="stop"&&ce[0]!="close"||Un(f,7);else f.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Un(f,7):Cc(f):ce[0]!="noop"&&f.l&&f.l.qa(ce),f.A=0)}}Es(4)}catch(ce){}}var iE=class{constructor(a,h){this.g=a,this.map=h}};function ed(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function td(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nd(a){return a.h?1:a.g?a.g.size:0}function Rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function bc(a,h){a.g?a.g.add(h):a.h=h}function rd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ed.prototype.cancel=function(){if(this.i=sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return A(a.i)}var id=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oE(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let b,P=null;g>=0?(b=a[f].substring(0,g),P=a[f].substring(g+1)):b=a[f],h(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function sn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof sn?(this.l=a.l,Rs(this,a.j),this.o=a.o,this.g=a.g,bs(this,a.u),this.h=a.h,Sc(this,hd(a.i)),this.m=a.m):a&&(h=String(a).match(id))?(this.l=!1,Rs(this,h[1]||"",!0),this.o=Ss(h[2]||""),this.g=Ss(h[3]||"",!0),bs(this,h[4]),this.h=Ss(h[5]||"",!0),Sc(this,h[6]||"",!0),this.m=Ss(h[7]||"")):(this.l=!1,this.i=new ks(null,this.l))}sn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ps(h,od,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ps(h,od,!0),"@"),a.push(vs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ps(f,f.charAt(0)=="/"?uE:cE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ps(f,hE)),a.join("")},sn.prototype.resolve=function(a){const h=At(this);let f=!!a.j;f?Rs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)bs(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var b=h.h.lastIndexOf("/");b!=-1&&(g=h.h.slice(0,b+1)+g)}if(b=g,b==".."||b==".")g="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){g=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let x=0;x<b.length;){const Y=b[x++];Y=="."?g&&x==b.length&&P.push(""):Y==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&x==b.length&&P.push("")):(P.push(Y),g=!0)}g=P.join("/")}else g=b}return f?h.h=g:f=a.i.toString()!=="",f?Sc(h,hd(a.i)):f=!!a.m,f&&(h.m=a.m),h};function At(a){return new sn(a)}function Rs(a,h,f){a.j=f?Ss(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function bs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Sc(a,h,f){h instanceof ks?(a.i=h,dE(a.i,a.l)):(f||(h=Ps(h,lE)),a.i=new ks(h,a.l))}function he(a,h,f){a.i.set(h,f)}function to(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ss(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,aE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function aE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var od=/[#\/\?@]/g,cE=/[#\?:]/g,uE=/[#\?]/g,lE=/[#\?@]/g,hE=/#/g;function ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&oE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=ks.prototype,n.add=function(a,h){Ln(this),this.i=null,a=Er(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ad(a,h){Ln(a),h=Er(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cd(a,h){return Ln(a),h=Er(a,h),a.g.has(h)}n.forEach=function(a,h){Ln(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(h,b,g,this)},this)},this)};function ud(a,h){Ln(a);let f=[];if(typeof h=="string")cd(a,h)&&(f=f.concat(a.g.get(Er(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}n.set=function(a,h){return Ln(this),this.i=null,a=Er(this,a),cd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=ud(this,a),a.length>0?String(a[0]):h):h};function ld(a,h,f){ad(a,h),f.length>0&&(a.i=null,a.g.set(Er(a,h),A(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const b=vs(f);f=ud(this,f);for(let P=0;P<f.length;P++){let x=b;f[P]!==""&&(x+="="+vs(f[P])),a.push(x)}}return this.i=a.join("&")};function hd(a){const h=new ks;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Er(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function dE(a,h){h&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(f,g){const b=g.toLowerCase();g!=b&&(ad(this,g),ld(this,b,f))},a)),a.j=h}function fE(a,h){const f=new ws;if(o.Image){const g=new Image;g.onload=d(on,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(on,f,"TestLoadImage: error",!1,h,g),g.onabort=d(on,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(on,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function pE(a,h){const f=new ws,g=new AbortController,b=setTimeout(()=>{g.abort(),on(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(b),P.ok?on(f,"TestPingServer: ok",!0,h):on(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),on(f,"TestPingServer: error",!1,h)})}function on(a,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch(P){}}function mE(){this.g=new YI}function Pc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Pc,qh),Pc.prototype.g=function(){return new no(this.i,this.h)};function no(a,h){Fe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(no,Fe),n=no.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ns(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Cs(this):Ns(this),this.readyState==3&&dd(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},n.Na=function(a){this.g&&(this.response=a,Cs(this))},n.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ns(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(no.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fd(a){let h="";return Qi(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function kc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=fd(f),typeof a=="string"?f!=null&&vs(f):he(a,h,f))}function me(a){Fe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(me,Fe);var gE=/^https?$/i,_E=["POST","PUT"];n=me.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wh.g(),this.g.onreadystatechange=_(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(P){pd(this,P);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(_E,h,void 0)>=0)||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of f)this.g.setRequestHeader(P,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){pd(this,P)}};function pd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,md(a),ro(a)}function md(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ge(this,"complete"),Ge(this,"abort"),ro(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ro(this,!0)),me.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?gd(this):this.Xa())},n.Xa=function(){gd(this)};function gd(a){if(a.h&&typeof i!="undefined"){if(a.v&&an(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ge(a,"readystatechange"),an(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=P===0){let x=String(a.D).match(id)[1]||null;!x&&o.self&&o.self.location&&(x=o.self.location.protocol.slice(0,-1)),g=!gE.test(x?x.toLowerCase():"")}f=g}if(f)Ge(a,"complete"),Ge(a,"success");else{a.o=6;try{var b=an(a)>2?a.g.statusText:""}catch(x){b=""}a.l=b+" ["+a.ca()+"]",md(a)}}finally{ro(a)}}}}function ro(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Ge(a,"ready");try{f.onreadystatechange=null}catch(g){}}}n.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}n.ca=function(){try{return an(this)>2?this.g.status:-1}catch(a){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),JI(h)}};function _d(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(h){return null}}function yE(a){const h={};a=(a.g&&an(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var f=nE(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=h[b]||[];h[b]=P,P.push(f)}GI(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function yd(a){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ds("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ds("baseRetryDelayMs",5e3,a),this.Za=Ds("retryDelaySeedMs",1e4,a),this.Ta=Ds("forwardChannelMaxRetries",2,a),this.va=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ed(a&&a.concurrentRequestLimit),this.Ba=new mE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=yd.prototype,n.ka=8,n.I=1,n.connect=function(a,h,f,g){He(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Sd(this,null,this.W),io(this)};function Cc(a){if(Id(a),a.I==3){var h=a.V++,f=At(a.J);if(he(f,"SID",a.M),he(f,"RID",h),he(f,"TYPE","terminate"),Vs(a,f),h=new rn(a,a.j,h),h.M=2,h.A=to(At(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch(g){}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Pd(h.j,null),h.g.ea(h.A)),h.F=Date.now(),eo(h)}bd(a)}function so(a){a.g&&(Dc(a),a.g.cancel(),a.g=null)}function Id(a){so(a),a.v&&(o.clearTimeout(a.v),a.v=null),oo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function io(a){if(!td(a.h)&&!a.m){a.m=!0;var h=a.Ea;W||y(),Q||(W(),Q=!0),T.add(h,a),a.D=0}}function IE(a,h){return nd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ts(l(a.Ea,a,h),Rd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new rn(this,this.j,a);let P=this.o;if(this.U&&(P?(P=Ch(P),Dh(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Td(this,b,h),f=At(this.J),he(f,"RID",a),he(f,"CVER",22),this.G&&he(f,"X-HTTP-Session-Id",this.G),Vs(this,f),P&&(this.R?h="headers="+vs(fd(P))+"&"+h:this.u&&kc(f,this.u,P)),bc(this.h,b),this.Ra&&he(f,"TYPE","init"),this.S?(he(f,"$req",h),he(f,"SID","null"),b.U=!0,wc(b,f,null)):wc(b,f,h),this.I=2}}else this.I==3&&(a?Ed(this,a):this.i.length==0||td(this.h)||Ed(this))};function Ed(a,h){var f;h?f=h.l:f=a.V++;const g=At(a.J);he(g,"SID",a.M),he(g,"RID",f),he(g,"AID",a.K),Vs(a,g),a.u&&a.o&&kc(g,a.u,a.o),f=new rn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Td(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bc(a.h,f),wc(f,g,h)}function Vs(a,h){a.H&&Qi(a.H,function(f,g){he(h,g,f)}),a.l&&Qi({},function(f,g){he(h,g,f)})}function Td(a,h,f){f=Math.min(a.i.length,f);const g=a.l?l(a.l.Ka,a.l,a):null;e:{var b=a.i;let Y=-1;for(;;){const Re=["count="+f];Y==-1?f>0?(Y=b[0].g,Re.push("ofs="+Y)):Y=0:Re.push("ofs="+Y);let ce=!0;for(let Ne=0;Ne<f;Ne++){var P=b[Ne].g;const Rt=b[Ne].map;if(P-=Y,P<0)Y=Math.max(0,b[Ne].g-100),ce=!1;else try{P="req"+P+"_"||"";try{var x=Rt instanceof Map?Rt:Object.entries(Rt);for(const[Fn,cn]of x){let un=cn;c(cn)&&(un=_c(cn)),Re.push(P+Fn+"="+encodeURIComponent(un))}}catch(Fn){throw Re.push(P+"type="+encodeURIComponent("_badmap")),Fn}}catch(Fn){g&&g(Rt)}}if(ce){x=Re.join("&");break e}}x=void 0}return a=a.i.splice(0,f),h.G=a,x}function wd(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;W||y(),Q||(W(),Q=!0),T.add(h,a),a.A=0}}function Nc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ts(l(a.Da,a),Rd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,vd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ts(l(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),so(this),vd(this))};function Dc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vd(a){a.g=new rn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=At(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Vs(a,h),a.u&&a.o&&kc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=to(At(h)),f.u=null,f.R=!0,Yh(f,a)}n.Va=function(){this.C!=null&&(this.C=null,so(this),Nc(this),He(19))};function oo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ad(a,h){var f=null;if(a.g==h){oo(a),Dc(a),a.g=null;var g=2}else if(Rc(a.h,h))f=h.G,rd(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;g=Xi(),Ge(g,new Hh(g,f)),io(a)}else wd(a);else if(b=h.m,b==3||b==0&&h.X>0||!(g==1&&IE(a,h)||g==2&&Nc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),b){case 1:Un(a,5);break;case 4:Un(a,10);break;case 3:Un(a,6);break;default:Un(a,2)}}}function Rd(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Un(a,h){if(a.j.info("Error code "+h),h==2){var f=l(a.bb,a),g=a.Ua;const b=!g;g=new sn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Rs(g,"https"),to(g),b?fE(g.toString(),f):pE(g.toString(),f)}else He(2);a.I=0,a.l&&a.l.pa(h),bd(a),Id(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function bd(a){if(a.I=0,a.ja=[],a.l){const h=sd(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Sd(a,h,f){var g=f instanceof sn?At(f):new sn(f);if(g.g!="")h&&(g.g=h+"."+g.g),bs(g,g.u);else{var b=o.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const P=new sn(null);g&&Rs(P,g),h&&(P.g=h),b&&bs(P,b),f&&(P.h=f),g=P}return f=a.G,h=a.wa,f&&h&&he(g,f,h),he(g,"VER",a.ka),Vs(a,g),g}function Pd(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new me(new Pc({ab:f})):new me(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function kd(){}n=kd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ao(){}ao.prototype.g=function(a,h){return new it(a,h)};function it(a,h){Fe.call(this),this.g=new yd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Tr(this)}m(it,Fe),it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){Cc(this.g)},it.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=_c(a),a=f);h.i.push(new iE(h.Ya++,a)),h.I==3&&io(h)},it.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,it.Z.N.call(this)};function Cd(a){yc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Cd,yc);function Nd(){Ic.call(this),this.status=1}m(Nd,Ic);function Tr(a){this.g=a}m(Tr,kd),Tr.prototype.ra=function(){Ge(this.g,"a")},Tr.prototype.qa=function(a){Ge(this.g,new Cd(a))},Tr.prototype.pa=function(a){Ge(this.g,new Nd)},Tr.prototype.oa=function(){Ge(this.g,"b")},ao.prototype.createWebChannel=ao.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,pg=function(){return new ao},fg=function(){return Xi()},dg=xn,yu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Zi.NO_ERROR=0,Zi.TIMEOUT=8,Zi.HTTP_ERROR=6,ko=Zi,Kh.COMPLETE="complete",hg=Kh,$h.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,Gs=$h,me.prototype.listenOnce=me.prototype.K,me.prototype.getLastError=me.prototype.Ha,me.prototype.getLastErrorCode=me.prototype.ya,me.prototype.getStatus=me.prototype.ca,me.prototype.getResponseJson=me.prototype.La,me.prototype.getResponseText=me.prototype.la,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Fa,lg=me}).apply(typeof po!="undefined"?po:typeof self!="undefined"?self:typeof window!="undefined"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let us="12.11.0";function dR(n){us=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const rr=new ya("@firebase/firestore");function kr(){return rr.logLevel}function N(n,...e){if(rr.logLevel<=ee.DEBUG){const t=e.map(cl);rr.debug(`Firestore (${us}): ${n}`,...t)}}function Ie(n,...e){if(rr.logLevel<=ee.ERROR){const t=e.map(cl);rr.error(`Firestore (${us}): ${n}`,...t)}}function sr(n,...e){if(rr.logLevel<=ee.WARN){const t=e.map(cl);rr.warn(`Firestore (${us}): ${n}`,...t)}}function cl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,mg(n,r,t)}function mg(n,e,t){let r=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(s){r+=" CONTEXT: "+t}throw Ie(r),new Error(r)}function q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||mg(e,s,r)}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class pR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mR{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(()=>p(this,null,function*(){yield u.promise,yield s(this.currentUser)}))},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string",31837,{l:r}),new gg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class gR{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class _R{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new gR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=IR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function Iu(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return zc(s)===zc(i)?K(s,i):zc(s)?1:-1}return K(n.length,e.length)}const ER=55296,TR=57343;function zc(n){const e=n.charCodeAt(0);return e>=ER&&e<=TR}function $r(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function _g(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="__name__";class bt{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=bt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const r=bt.isNumericId(e),s=bt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?bt.extractNumericId(e).compare(bt.extractNumericId(t)):Iu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wn.fromString(e.substring(4,e.length-2))}}class se extends bt{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const wR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends bt{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return wR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mf}static keyField(){return new pe([mf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new O(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,e,t){if(!t)throw new O(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vR(n,e,t,r){if(e===!0&&r===!0)throw new O(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gf(n){if(!L.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _f(n){if(L.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ig(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ca(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ca(n);throw new O(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function AR(n,e){if(e<=0)throw new O(k.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function Li(n,e){if(!Ig(n))throw new O(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=-62135596800,If=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*If);return new ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yf)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/If}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Li(e,ie._jsonSchema))return new ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:Ae("string",ie._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ie(0,0))}static max(){return new j(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jr=-1;class Wo{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Eu(n){return n.fields.find(e=>e.kind===2)}function $n(n){return n.fields.filter(e=>e.kind!==2)}Wo.UNKNOWN_ID=-1;class Co{constructor(e,t){this.fieldPath=e,this.kind=t}}class gi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gi(0,lt.min())}}function Eg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new ie(t+1,0):new ie(t,r));return new lt(s,L.empty(),e)}function Tg(n){return new lt(n.readTime,n.key,jr)}class lt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new lt(j.min(),L.empty(),jr)}static max(){return new lt(j.max(),L.empty(),jr)}}function ll(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n){return p(this,null,function*(){if(n.code!==k.FAILED_PRECONDITION||n.message!==wg)throw n;N("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next(d=>{o[l]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new R((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="SimpleDb";class Na{static open(e,t,r,s){try{return new Na(t,e.transaction(s,r))}catch(i){throw new ti(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Tt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ti(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=hl(r.target.error);this.S.reject(new ti(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(N(ot,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new bR(t)}}class vn{static delete(e){return N(ot,"Removing database:",e),zn(Qu().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Ni())return!1;if(vn.F())return!0;const e=Se(),t=vn.M(e),r=0<t&&t<10,s=Ag(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,vn.M(Se())===12.2&&Ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}L(e){return p(this,null,function*(){return this.db||(N(ot,"Opening database:",this.name),this.db=yield new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ti(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new O(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ti(e,o))},s.onupgradeneeded=i=>{N(ot,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next(()=>{N(ot,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db})}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}runTransaction(e,t,r,s){return p(this,null,function*(){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=yield this.L(e);const c=Na.open(this.db,e,i?"readonly":"readwrite",r),u=s(c).next(l=>(c.C(),l)).catch(l=>(c.abort(l),R.reject(l))).toPromise();return u.catch(()=>{}),yield c.D,u}catch(c){const u=c,l=u.name!=="FirebaseError"&&o<3;if(N(ot,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}})}close(){this.db&&this.db.close(),this.db=void 0}}function Ag(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class RR{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return zn(this.U.delete())}}class ti extends O{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Dn(n){return n.name==="IndexedDbTransactionError"}class bR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(N(ot,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(N(ot,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),zn(r)}add(e){return N(ot,"ADD",this.store.name,e,e),zn(this.store.add(e))}get(e){return zn(this.store.get(e)).next(t=>(t===void 0&&(t=null),N(ot,"GET",this.store.name,e,t),t))}delete(e){return N(ot,"DELETE",this.store.name,e),zn(this.store.delete(e))}count(){return N(ot,"COUNT",this.store.name),zn(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new R((o,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.H(i,(c,u)=>{o.push(u)}).next(()=>o)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}X(e,t){N(ot,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.H(s,(i,o,c)=>c.delete())}ee(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.H(s,t)}te(e){const t=this.cursor({});return new R((r,s)=>{t.onerror=i=>{const o=hl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}H(e,t){const r=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const u=new RR(c),l=t(c.primaryKey,c.value,u);if(l instanceof R){const d=l.catch(m=>(u.done(),R.reject(m)));r.push(d)}u.isDone?s():u.G===null?c.continue():c.continue(u.G)}}).next(()=>R.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function zn(n){return new R((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=hl(r.target.error);t(s)}})}let Ef=!1;function hl(n){const e=vn.M(Se());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ef||(Ef=!0,setTimeout(()=>{throw r},0)),r}}return n}const ni="IndexBackfiller";class SR{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){N(ni,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,()=>p(this,null,function*(){this.task=null;try{const t=yield this.ne.ie();N(ni,`Documents written: ${t}`)}catch(t){Dn(t)?N(ni,"Ignoring IndexedDB error during index backfill: ",t):yield Nn(t)}yield this.re(6e4)}))}}class PR{constructor(e,t){this.localStore=e,this.persistence=t}ie(e=50){return p(this,null,function*(){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))})}se(e,t){const r=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N(ni,`Processing collection: ${o}`),this.oe(e,o,s).next(c=>{s-=c,r.add(o)});i=!1})).next(()=>t-s)}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(s,i)).next(c=>(N(ni,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}_e(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Tg(i);ll(o,r)>0&&(r=o)}),new lt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class et{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}et.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=-1;function Da(n){return n==null}function _i(n){return n===0&&1/n==-1/0}function Rg(n){return typeof n=="number"&&Number.isInteger(n)&&!_i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="";function ze(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Tf(e)),e=kR(n.get(t),e);return Tf(e)}function kR(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Qo:t+="";break;default:t+=i}}return t}function Tf(n){return n+Qo+""}function kt(n){const e=n.length;if(q(e>=2,64408,{path:n}),e===2)return q(n.charAt(0)===Qo&&n.charAt(1)==="",56145,{path:n}),se.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Qo,i);switch((o<0||o>t)&&U(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(i,o);let u;s.length===0?u=c:(s+=c,u=s,s=""),r.push(u);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:U(61167,{path:n})}i=o+2}return new se(r)}/**
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
 */const jn="remoteDocuments",Ui="owner",wr="owner",yi="mutationQueues",CR="userId",yt="mutations",wf="batchId",Wn="userMutationsIndex",vf=["userId","batchId"];/**
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
 */function No(n,e){return[n,ze(e)]}function bg(n,e,t){return[n,ze(e),t]}const NR={},zr="documentMutations",Jo="remoteDocumentsV14",DR=["prefixPath","collectionGroup","readTime","documentId"],Do="documentKeyIndex",VR=["prefixPath","collectionGroup","documentId"],Sg="collectionGroupIndex",OR=["collectionGroup","readTime","prefixPath","documentId"],Ii="remoteDocumentGlobal",Tu="remoteDocumentGlobalKey",Gr="targets",Pg="queryTargetsIndex",xR=["canonicalId","targetId"],Hr="targetDocuments",MR=["targetId","path"],dl="documentTargetsIndex",LR=["path","targetId"],Yo="targetGlobalKey",Yn="targetGlobal",Ei="collectionParents",UR=["collectionId","parent"],Kr="clientMetadata",FR="clientId",Va="bundles",BR="bundleId",Oa="namedQueries",qR="name",fl="indexConfiguration",$R="indexId",wu="collectionGroupIndex",jR="collectionGroup",ri="indexState",zR=["indexId","uid"],kg="sequenceNumberIndex",GR=["uid","sequenceNumber"],si="indexEntries",HR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Cg="documentKeyIndex",KR=["indexId","uid","orderedDocumentKey"],xa="documentOverlays",WR=["userId","collectionPath","documentId"],vu="collectionPathOverlayIndex",QR=["userId","collectionPath","largestBatchId"],Ng="collectionGroupOverlayIndex",JR=["userId","collectionGroup","largestBatchId"],pl="globals",YR="name",Dg=[yi,yt,zr,jn,Gr,Ui,Yn,Hr,Kr,Ii,Ei,Va,Oa],XR=[...Dg,xa],Vg=[yi,yt,zr,Jo,Gr,Ui,Yn,Hr,Kr,Ii,Ei,Va,Oa,xa],Og=Vg,ml=[...Og,fl,ri,si],ZR=ml,xg=[...ml,pl],eb=xg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends vg{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ce(n,e){const t=B(n);return vn.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tb(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Mg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r!=null?r:Me.RED,this.left=s!=null?s:Me.EMPTY,this.right=i!=null?i:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Me(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rf(this.data.getIterator())}getIteratorFrom(e){return new Rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class Rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function vr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new tt([])}unionWith(e){let t=new ae(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new tt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $r(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new Lg("Invalid base64 string: "+i):i}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const nb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(q(!!n,39018),typeof n=="string"){let e=0;const t=nb.exec(n);if(q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="server_timestamp",Fg="__type__",Bg="__previous_value__",qg="__local_write_time__";function gl(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Fg])==null?void 0:r.stringValue)===Ug}function Ma(n){const e=n.mapValue.fields[Bg];return gl(e)?Ma(e):e}function Ti(n){const e=Qt(n.mapValue.fields[qg].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t,r,s,i,o,c,u,l,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=d,this.apiKey=m}}const wi="(default)";class ir{constructor(e,t){this.projectId=e,this.database=t||wi}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database===wi}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}function sb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="__type__",$g="__max__",yn={mapValue:{fields:{__type__:{stringValue:$g}}}},yl="__vector__",Wr="value",Vo={nullValue:"NULL_VALUE"};function Rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gl(n)?4:jg(n)?9007199254740991:La(n)?10:11:U(28295,{value:n})}function xt(n,e){if(n===e)return!0;const t=Rn(n);if(t!==Rn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ti(n).isEqual(Ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qt(s.timestampValue),c=Qt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=de(s.doubleValue),c=de(i.doubleValue);return o===c?_i(o)===_i(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return $r(n.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Af(o)!==Af(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!xt(o[u],c[u])))return!1;return!0}(n,e);default:return U(52216,{left:n})}}function vi(n,e){return(n.values||[]).find(t=>xt(t,e))!==void 0}function bn(n,e){if(n===e)return 0;const t=Rn(n),r=Rn(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=de(i.integerValue||i.doubleValue),u=de(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return bf(n.timestampValue,e.timestampValue);case 4:return bf(Ti(n),Ti(e));case 5:return Iu(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Jt(i),u=Jt(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const d=K(c[l],u[l]);if(d!==0)return d}return K(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=K(de(i.latitude),de(o.latitude));return c!==0?c:K(de(i.longitude),de(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Sf(n.arrayValue,e.arrayValue);case 10:return function(i,o){var _,A,C,V;const c=i.fields||{},u=o.fields||{},l=(_=c[Wr])==null?void 0:_.arrayValue,d=(A=u[Wr])==null?void 0:A.arrayValue,m=K(((C=l==null?void 0:l.values)==null?void 0:C.length)||0,((V=d==null?void 0:d.values)==null?void 0:V.length)||0);return m!==0?m:Sf(l,d)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===yn.mapValue&&o===yn.mapValue)return 0;if(i===yn.mapValue)return 1;if(o===yn.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const _=Iu(u[m],d[m]);if(_!==0)return _;const A=bn(c[u[m]],l[d[m]]);if(A!==0)return A}return K(u.length,d.length)}(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function bf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Qt(n),r=Qt(e),s=K(t.seconds,r.seconds);return s!==0?s:K(t.nanos,r.nanos)}function Sf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=bn(t[s],r[s]);if(i)return i}return K(t.length,r.length)}function Qr(n){return Ru(n)}function Ru(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ru(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ru(t.fields[o])}`;return s+"}"}(n.mapValue):U(61005,{value:n})}function Oo(n){switch(Rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ma(n);return e?16+Oo(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Oo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Vn(r.fields,(i,o)=>{s+=i.length+Oo(o)}),s}(n.mapValue);default:throw U(13486,{value:n})}}function Ai(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bu(n){return!!n&&"integerValue"in n}function Ri(n){return!!n&&"arrayValue"in n}function Pf(n){return!!n&&"nullValue"in n}function kf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xo(n){return!!n&&"mapValue"in n}function La(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[_l])==null?void 0:r.stringValue)===yl}function ii(n){if(n.geoPointValue)return{geoPointValue:J({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:J({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Vn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ii(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ii(n.arrayValue.values[t]);return e}return J({},n)}function jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$g}const zg={mapValue:{fields:{[_l]:{stringValue:yl},[Wr]:{arrayValue:{}}}}};function ib(n){return"nullValue"in n?Vo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ai(ir.empty(),L.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?La(n)?zg:{mapValue:{}}:U(35942,{value:n})}function ob(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ai(ir.empty(),L.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?zg:"mapValue"in n?La(n)?{mapValue:{}}:yn:U(61959,{value:n})}function Cf(n,e){const t=bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Nf(n,e){const t=bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ii(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());xo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Vn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Le(ii(this.value))}}function Gg(n){const e=[];return Vn(n.fields,(t,r)=>{const s=new pe([t]);if(xo(r)){const i=Gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ge(e,0,j.min(),j.min(),j.min(),Le.empty(),0)}static newFoundDocument(e,t,r,s){return new ge(e,1,t,j.min(),r,s,0)}static newNoDocument(e,t){return new ge(e,2,t,j.min(),j.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,j.min(),j.min(),Le.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jr{constructor(e,t){this.position=e,this.inclusive=t}}function Df(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=bn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class bi{constructor(e,t="asc"){this.field=e,this.dir=t}}function ab(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Hg{}class te extends Hg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cb(e,t,r):t==="array-contains"?new hb(e,r):t==="in"?new Xg(e,r):t==="not-in"?new db(e,r):t==="array-contains-any"?new fb(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ub(e,r):new lb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bn(t,this.value)):t!==null&&Rn(this.value)===Rn(t)&&this.matchesComparison(bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends Hg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new oe(e,t)}matches(e){return Yr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Yr(n){return n.op==="and"}function Su(n){return n.op==="or"}function Il(n){return Kg(n)&&Yr(n)}function Kg(n){for(const e of n.filters)if(e instanceof oe)return!1;return!0}function Pu(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+Qr(n.value);if(Il(n))return n.filters.map(e=>Pu(e)).join(",");{const e=n.filters.map(t=>Pu(t)).join(",");return`${n.op}(${e})`}}function Wg(n,e){return n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)}(n,e):n instanceof oe?function(r,s){return s instanceof oe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Wg(o,s.filters[c]),!0):!1}(n,e):void U(19439)}function Qg(n,e){const t=n.filters.concat(e);return oe.create(t,n.op)}function Jg(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Qr(t.value)}`}(n):n instanceof oe?function(t){return t.op.toString()+" {"+t.getFilters().map(Jg).join(" ,")+"}"}(n):"Filter"}class cb extends te{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class ub extends te{constructor(e,t){super(e,"in",t),this.keys=Yg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lb extends te{constructor(e,t){super(e,"not-in",t),this.keys=Yg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yg(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class hb extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ri(t)&&vi(t.arrayValue,this.value)}}class Xg extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vi(this.value.arrayValue,t)}}class db extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vi(this.value.arrayValue,t)}}class fb extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ri(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function ku(n,e=null,t=[],r=[],s=null,i=null,o=null){return new pb(n,e,t,r,s,i,o)}function or(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Pu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Da(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Qr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Qr(r)).join(",")),e.Te=t}return e.Te}function Fi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ab(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vf(n.startAt,e.startAt)&&Vf(n.endAt,e.endAt)}function Xo(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Zo(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function Of(n,e,t){let r=Vo,s=!0;for(const i of Zo(n,e)){let o=Vo,c=!0;switch(i.op){case"<":case"<=":o=ib(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Vo}Cf({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Cf({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function xf(n,e,t){let r=yn,s=!0;for(const i of Zo(n,e)){let o=yn,c=!0;switch(i.op){case">=":case">":o=ob(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=yn}Nf({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Nf({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Zg(n,e,t,r,s,i,o,c){return new ls(n,e,t,r,s,i,o,c)}function Bi(n){return new ls(n)}function Mf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mb(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function e_(n){return n.collectionGroup!==null}function oi(n){const e=B(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ae(pe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(c=c.add(l.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new bi(i,r))}),t.has(pe.keyField().canonicalString())||e.Ee.push(new bi(pe.keyField(),r))}return e.Ee}function ct(n){const e=B(n);return e.Ie||(e.Ie=t_(e,oi(n))),e.Ie}function gb(n){const e=B(n);return e.Re||(e.Re=t_(e,n.explicitOrderBy)),e.Re}function t_(n,e){if(n.limitType==="F")return ku(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bi(s.field,i)});const t=n.endAt?new Jr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jr(n.startAt.position,n.startAt.inclusive):null;return ku(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cu(n,e){const t=n.filters.concat([e]);return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function _b(n,e){const t=n.explicitOrderBy.concat([e]);return new ls(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function ea(n,e,t){return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ua(n,e){return Fi(ct(n),ct(e))&&n.limitType===e.limitType}function n_(n){return`${or(ct(n))}|lt:${n.limitType}`}function Cr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Jg(s)).join(", ")}]`),Da(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Qr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Qr(s)).join(",")),`Target(${r})`}(ct(n))}; limitType=${n.limitType})`}function qi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const l=Df(o,c,u);return o.inclusive?l<=0:l<0}(r.startAt,oi(r),s)||r.endAt&&!function(o,c,u){const l=Df(o,c,u);return o.inclusive?l>=0:l>0}(r.endAt,oi(r),s))}(n,e)}function r_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function s_(n){return(e,t)=>{let r=!1;for(const s of oi(n)){const i=yb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yb(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,o,c){const u=o.data.field(i),l=c.data.field(i);return u!==null&&l!==null?bn(u,l):U(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new ue(L.comparator);function at(){return Ib}const i_=new ue(L.comparator);function Hs(...n){let e=i_;for(const t of n)e=e.insert(t.key,t);return e}function o_(n){let e=i_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ct(){return ai()}function a_(){return ai()}function ai(){return new Xt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Eb=new ue(L.comparator),Tb=new ae(L.comparator);function X(...n){let e=Tb;for(const t of n)e=e.add(t);return e}const wb=new ae(K);function El(){return wb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(e)?"-0":e}}function c_(n){return{integerValue:""+n}}function u_(n,e){return Rg(e)?c_(e):Tl(n,e)}/**
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
 */class Fa{constructor(){this._=void 0}}function vb(n,e,t){return n instanceof Xr?function(s,i){const o={fields:{[Fg]:{stringValue:Ug},[qg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gl(i)&&(i=Ma(i)),i&&(o.fields[Bg]=i),{mapValue:o}}(t,e):n instanceof ar?h_(n,e):n instanceof Zr?d_(n,e):function(s,i){const o=l_(s,i),c=Lf(o)+Lf(s.Ae);return bu(o)&&bu(s.Ae)?c_(c):Tl(s.serializer,c)}(n,e)}function Ab(n,e,t){return n instanceof ar?h_(n,e):n instanceof Zr?d_(n,e):t}function l_(n,e){return n instanceof es?function(r){return bu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xr extends Fa{}class ar extends Fa{constructor(e){super(),this.elements=e}}function h_(n,e){const t=f_(e);for(const r of n.elements)t.some(s=>xt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Zr extends Fa{constructor(e){super(),this.elements=e}}function d_(n,e){let t=f_(e);for(const r of n.elements)t=t.filter(s=>!xt(s,r));return{arrayValue:{values:t}}}class es extends Fa{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Lf(n){return de(n.integerValue||n.doubleValue)}function f_(n){return Ri(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.field=e,this.transform=t}}function Rb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ar&&s instanceof ar||r instanceof Zr&&s instanceof Zr?$r(r.elements,s.elements,xt):r instanceof es&&s instanceof es?xt(r.Ae,s.Ae):r instanceof Xr&&s instanceof Xr}(n.transform,e.transform)}class bb{constructor(e,t){this.version=e,this.transformResults=t}}class $e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $e}static exists(e){return new $e(void 0,e)}static updateTime(e){return new $e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qa{}function p_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $a(n.key,$e.none()):new hs(n.key,n.data,$e.none());{const t=n.data,r=Le.empty();let s=new ae(pe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Zt(n.key,r,new tt(s.toArray()),$e.none())}}function Sb(n,e,t){n instanceof hs?function(s,i,o){const c=s.value.clone(),u=Ff(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Zt?function(s,i,o){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ff(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(m_(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ci(n,e,t,r){return n instanceof hs?function(i,o,c,u){if(!Mo(i.precondition,o))return c;const l=i.value.clone(),d=Bf(i.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zt?function(i,o,c,u){if(!Mo(i.precondition,o))return c;const l=Bf(i.fieldTransforms,u,o),d=o.data;return d.setAll(m_(i)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,c){return Mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Pb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=l_(r.transform,s||null);i!=null&&(t===null&&(t=Le.empty()),t.set(r.field,i))}return t||null}function Uf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$r(r,s,(i,o)=>Rb(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hs extends qa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zt extends qa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function m_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ff(n,e,t){const r=new Map;q(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Ab(o,c,t[s]))}return r}function Bf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,vb(i,o,e))}return r}class $a extends qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g_ extends qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Sb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ci(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ci(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=a_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const u=p_(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&$r(this.mutations,e.mutations,(t,r)=>Uf(t,r))&&$r(this.baseMutations,e.baseMutations,(t,r)=>Uf(t,r))}}class vl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Eb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vl(e,t,r,s)}}/**
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
 */class Al{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kb{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ne;function Nb(n){switch(n){case k.OK:return U(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function __(n){if(n===void 0)return Ie("GRPC error has no .code"),k.UNKNOWN;switch(n){case Te.OK:return k.OK;case Te.CANCELLED:return k.CANCELLED;case Te.UNKNOWN:return k.UNKNOWN;case Te.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Te.INTERNAL:return k.INTERNAL;case Te.UNAVAILABLE:return k.UNAVAILABLE;case Te.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Te.NOT_FOUND:return k.NOT_FOUND;case Te.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Te.ABORTED:return k.ABORTED;case Te.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Te.DATA_LOSS:return k.DATA_LOSS;default:return U(39323,{code:n})}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Db(){return new TextEncoder}/**
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
 */const Vb=new wn([4294967295,4294967295],0);function qf(n){const e=Db().encode(n),t=new ug;return t.update(e),new Uint8Array(t.digest())}function $f(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wn([t,r],0),new wn([s,i],0)]}class Rl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ks(`Invalid padding: ${t}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=wn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(wn.fromNumber(r)));return s.compare(Vb)===1&&(s=new wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=qf(e),[r,s]=$f(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Rl(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=qf(e),[r,s]=$f(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $i(j.min(),s,new ue(K),at(),X())}}class ji{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ji(r,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class y_{constructor(e,t){this.targetId=e,this.Ce=t}}class I_{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class jf{constructor(){this.ve=0,this.Fe=zf(),this.Me=Ee.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),r=X();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U(38017,{changeType:i})}}),new ji(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=zf()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ob{constructor(e){this.Ge=e,this.ze=new Map,this.je=at(),this.Je=go(),this.He=go(),this.Ze=new ue(K)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:U(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Xo(i))if(r===0){const o=new L(i.path);this.et(t,o,ge.newNoDocument(o,j.min()))}else q(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,l)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Jt(r).toUint8Array()}catch(u){if(u instanceof Lg)return sr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Rl(o,s,i)}catch(u){return sr(u instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Xo(c.target)){const u=new L(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,ge.newNoDocument(u,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=X();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const l=this.ot(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new $i(e,t,this.Ze,this.je,r);return this.je=at(),this.Je=go(),this.He=go(),this.Ze=new ue(K),s}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new jf,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ae(K),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ae(K),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new jf),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function go(){return new ue(L.comparator)}function zf(){return new ue(L.comparator)}const xb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Lb=(()=>({and:"AND",or:"OR"}))();class Ub{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nu(n,e){return n.useProto3Json||Da(e)?e:{value:e}}function ts(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Fb(n,e){return ts(n,e.toTimestamp())}function Xe(n){return q(!!n,49232),j.fromTimestamp(function(t){const r=Qt(t);return new ie(r.seconds,r.nanos)}(n))}function bl(n,e){return Du(n,e).canonicalString()}function Du(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function T_(n){const e=se.fromString(n);return q(k_(e),10190,{key:e.toString()}),e}function ta(n,e){return bl(n.databaseId,e.path)}function Xn(n,e){const t=T_(e);if(t.get(1)!==n.databaseId.projectId)throw new O(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(A_(t))}function w_(n,e){return bl(n.databaseId,e)}function v_(n){const e=T_(n);return e.length===4?se.emptyPath():A_(e)}function Vu(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function A_(n){return q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gf(n,e,t){return{name:ta(n,e),fields:t.value.mapValue.fields}}function Bb(n,e,t){const r=Xn(n,e.name),s=Xe(e.updateTime),i=e.createTime?Xe(e.createTime):j.min(),o=new Le({mapValue:{fields:e.fields}}),c=ge.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function qb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,d){return l.useProto3Json?(q(d===void 0||typeof d=="string",58123),Ee.fromBase64String(d||"")):(q(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ee.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(l){const d=l.code===void 0?k.UNKNOWN:__(l.code);return new O(d,l.message||"")}(o);t=new I_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xn(n,r.document.name),i=Xe(r.document.updateTime),o=r.document.createTime?Xe(r.document.createTime):j.min(),c=new Le({mapValue:{fields:r.document.fields}}),u=ge.newFoundDocument(s,i,o,c),l=r.targetIds||[],d=r.removedTargetIds||[];t=new Lo(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xn(n,r.document),i=r.readTime?Xe(r.readTime):j.min(),o=ge.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Lo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xn(n,r.document),i=r.removedTargetIds||[];t=new Lo([],i,s,null)}else{if(!("filter"in e))return U(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Cb(s,i),c=r.targetId;t=new y_(c,o)}}return t}function na(n,e){let t;if(e instanceof hs)t={update:Gf(n,e.key,e.value)};else if(e instanceof $a)t={delete:ta(n,e.key)};else if(e instanceof Zt)t={update:Gf(n,e.key,e.data),updateMask:Wb(e.fieldMask)};else{if(!(e instanceof g_))return U(16599,{dt:e.type});t={verify:ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Xr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ar)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof es)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw U(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Fb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)}(n,e.precondition)),t}function Ou(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?$e.updateTime(Xe(i.updateTime)):i.exists!==void 0?$e.exists(i.exists):$e.none()}(e.currentDocument):$e.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let u=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Xr;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];u=new ar(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];u=new Zr(d)}else"increment"in c?u=new es(o,c.increment):U(16584,{proto:c});const l=pe.fromServerFormat(c.fieldPath);return new Ba(l,u)}(n,s)):[];if(e.update){e.update.name;const s=Xn(n,e.update.name),i=new Le({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const l=u.fieldPaths||[];return new tt(l.map(d=>pe.fromServerFormat(d)))}(e.updateMask);return new Zt(s,i,o,t,r)}return new hs(s,i,t,r)}if(e.delete){const s=Xn(n,e.delete);return new $a(s,t)}if(e.verify){const s=Xn(n,e.verify);return new g_(s,t)}return U(1463,{proto:e})}function $b(n,e){return n&&n.length>0?(q(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?Xe(s.updateTime):Xe(i);return o.isEqual(j.min())&&(o=Xe(i)),new bb(o,s.transformResults||[])}(t,e))):[]}function R_(n,e){return{documents:[w_(n,e.path)]}}function Sl(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=w_(n,s);const i=function(l){if(l.length!==0)return P_(oe.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(d=>function(_){return{field:mn(_.field),direction:Gb(_.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Nu(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ft:t,parent:s}}function jb(n,e,t,r){const{ft:s,parent:i}=Sl(n,e),o={},c=[];let u=0;return t.forEach(l=>{const d=r?l.alias:"aggregate_"+u++;o[d]=l.alias,l.aggregateType==="count"?c.push({alias:d,count:{}}):l.aggregateType==="avg"?c.push({alias:d,avg:{field:mn(l.fieldPath)}}):l.aggregateType==="sum"&&c.push({alias:d,sum:{field:mn(l.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function b_(n){let e=v_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){q(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(m){const _=S_(m);return _ instanceof oe&&Il(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(C){return new bi(Nr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,Da(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(m){const _=!!m.before,A=m.values||[];return new Jr(A,_)}(t.startAt));let l=null;return t.endAt&&(l=function(m){const _=!m.before,A=m.values||[];return new Jr(A,_)}(t.endAt)),Zg(e,s,o,i,c,"F",u,l)}function zb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function S_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nr(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Nr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(t){return te.create(Nr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return oe.create(t.compositeFilter.filters.map(r=>S_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(n):U(30097,{filter:n})}function Gb(n){return xb[n]}function Hb(n){return Mb[n]}function Kb(n){return Lb[n]}function mn(n){return{fieldPath:n.canonicalString()}}function Nr(n){return pe.fromServerFormat(n.fieldPath)}function P_(n){return n instanceof te?function(t){if(t.op==="=="){if(kf(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NAN"}};if(Pf(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kf(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NOT_NAN"}};if(Pf(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(t.field),op:Hb(t.op),value:t.value}}}(n):n instanceof oe?function(t){const r=t.getFilters().map(s=>P_(s));return r.length===1?r[0]:{compositeFilter:{op:Kb(t.op),filters:r}}}(n):U(54877,{filter:n})}function Wb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function k_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function C_(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,r,s,i=j.min(),o=j.min(),c=Ee.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.yt=e}}function Qb(n,e){let t;if(e.document)t=Bb(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),s=ur(e.noDocument.readTime);t=ge.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U(56709);{const r=L.fromSegments(e.unknownDocument.path),s=ur(e.unknownDocument.version);t=ge.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ie(s[0],s[1]);return j.fromTimestamp(i)}(e.readTime)),t}function Hf(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ra(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:ta(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ts(i,o.version.toTimestamp()),createTime:ts(i,o.createTime.toTimestamp())}}(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:cr(e.version)};else{if(!e.isUnknownDocument())return U(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:cr(e.version)}}return r}function ra(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function cr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ur(n){const e=new ie(n.seconds,n.nanoseconds);return j.fromTimestamp(e)}function Gn(n,e){const t=(e.baseMutations||[]).map(i=>Ou(n.yt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Ou(n.yt,i)),s=ie.fromMillis(e.localWriteTimeMs);return new wl(e.batchId,s,t,r)}function Ws(n){const e=ur(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ur(n.lastLimboFreeSnapshotVersion):j.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return q(o===1,1966,{count:o}),ct(Bi(v_(i.documents[0])))}(n.query):function(i){return ct(b_(i))}(n.query),new jt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ee.fromBase64String(n.resumeToken))}function D_(n,e){const t=cr(e.snapshotVersion),r=cr(e.lastLimboFreeSnapshotVersion);let s;s=Xo(e.target)?R_(n.yt,e.target):Sl(n.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:or(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function V_(n){const e=b_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ea(e,e.limit,"L"):e}function Gc(n,e){return new Al(e.largestBatchId,Ou(n.yt,e.overlayMutation))}function Kf(n,e){const t=e.path.lastSegment();return[n,ze(e.path.popLast()),t]}function Wf(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:cr(r.readTime),documentKey:ze(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{getBundleMetadata(e,t){return Qf(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:ur(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Qf(e).put(function(s){return{bundleId:s.id,createTime:cr(Xe(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Jf(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:V_(i.bundledQuery),readTime:ur(i.readTime)}}(r)})}saveNamedQuery(e,t){return Jf(e).put(function(s){return{name:s.name,readTime:cr(Xe(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Qf(n){return Ce(n,Va)}function Jf(n){return Ce(n,Oa)}/**
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
 */class ja{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new ja(e,r)}getOverlay(e,t){return xs(e).get(Kf(this.userId,t)).next(r=>r?Gc(this.serializer,r):null)}getOverlays(e,t){const r=Ct();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const c=new Al(t,o);s.push(this.St(e,c))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(ze(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(xs(e).X(vu,c))}),R.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Ct(),i=ze(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return xs(e).J(vu,o).next(c=>{for(const u of c){const l=Gc(this.serializer,u);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Ct();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return xs(e).ee({index:Ng,range:c},(u,l,d)=>{const m=Gc(this.serializer,l);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):d.done()}).next(()=>i)}St(e,t){return xs(e).put(function(s,i,o){const[c,u,l]=Kf(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:na(s.yt,o.mutation)}}(this.serializer,this.userId,t))}}function xs(n){return Ce(n,xa)}/**
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
 */class Yb{bt(e){return Ce(e,pl)}getSessionToken(e){return this.bt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ee.fromUint8Array(r):Ee.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Hn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(de(e.integerValue));else if("doubleValue"in e){const r=de(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),_i(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Qt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Jt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?jg(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):La(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):U(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const s of Object.keys(r))this.Ot(s,t),this.Ct(r[s],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const s=Wr,i=((c=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(de(i)),this.Ot(s,t),this.Ct(r[s],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const s of r)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),L.fromName(e).path.forEach(r=>{this.Ft(t,60),this.$t(r,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Hn.Wt=new Hn;/**
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
 */const Ar=255;function Xb(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Yf(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=Xb(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class Zb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(e){const t=this.en(e),r=Yf(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),r=Yf(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(Ar),this.sn(255)}_n(){this.an(Ar),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Ar?(this.sn(Ar),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Ar?(this.an(Ar),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class eS{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class tS{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ms{constructor(){this.cn=new Zb,this.ascending=new eS(this.cn),this.descending=new tS(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Kn{constructor(e,t,r,s){this.hn=e,this.Pn=t,this.Tn=r,this.En=s}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new Kn(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:Uo(this.Tn),directionalValue:Uo(this.En),orderedDocumentKey:Uo(t),documentKey:r.path.toArray()}}An(e,t,r){const s=this.Rn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function hn(n,e){let t=n.hn-e.hn;return t!==0?t:(t=Xf(n.Tn,e.Tn),t!==0?t:(t=Xf(n.En,e.En),t!==0?t:L.comparator(n.Pn,e.Pn)))}function Xf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Uo(n){return dm()?function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r}(n):n}function Zf(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(n)}class ep{constructor(e){this.Vn=new ae((t,r)=>pe.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(q(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=Eu(e);if(t!==void 0&&!this.pn(t))return!1;const r=$n(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.pn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=r[i];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ae(pe.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Co(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Co(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Co(r.field,r.dir==="asc"?0:1)));return new Wo(Wo.UNKNOWN_ID,this.collectionId,t,gi.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function O_(n){var t,r;if(q(n instanceof te||n instanceof oe,20012),n instanceof te){if(n instanceof Xg){const s=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map(i=>te.create(n.field,"==",i)))||[];return oe.create(s,"or")}return n}const e=n.filters.map(s=>O_(s));return oe.create(e,n.op)}function nS(n){if(n.getFilters().length===0)return[];const e=Lu(O_(n));return q(x_(e),7391),xu(e)||Mu(e)?[e]:e.getFilters()}function xu(n){return n instanceof te}function Mu(n){return n instanceof oe&&Il(n)}function x_(n){return xu(n)||Mu(n)||function(t){if(t instanceof oe&&Su(t)){for(const r of t.getFilters())if(!xu(r)&&!Mu(r))return!1;return!0}return!1}(n)}function Lu(n){if(q(n instanceof te||n instanceof oe,34018),n instanceof te)return n;if(n.filters.length===1)return Lu(n.filters[0]);const e=n.filters.map(r=>Lu(r));let t=oe.create(e,n.op);return t=sa(t),x_(t)?t:(q(t instanceof oe,64498),q(Yr(t),40251),q(t.filters.length>1,57927),t.filters.reduce((r,s)=>Pl(r,s)))}function Pl(n,e){let t;return q(n instanceof te||n instanceof oe,38388),q(e instanceof te||e instanceof oe,25473),t=n instanceof te?e instanceof te?function(s,i){return oe.create([s,i],"and")}(n,e):tp(n,e):e instanceof te?tp(e,n):function(s,i){if(q(s.filters.length>0&&i.filters.length>0,48005),Yr(s)&&Yr(i))return Qg(s,i.getFilters());const o=Su(s)?s:i,c=Su(s)?i:s,u=o.filters.map(l=>Pl(l,c));return oe.create(u,"or")}(n,e),sa(t)}function tp(n,e){if(Yr(e))return Qg(e,n.getFilters());{const t=e.filters.map(r=>Pl(n,r));return oe.create(t,"or")}}function sa(n){if(q(n instanceof te||n instanceof oe,11850),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return sa(e[0]);if(Kg(n))return n;const t=e.map(s=>sa(s)),r=[];return t.forEach(s=>{s instanceof te?r.push(s):s instanceof oe&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:oe.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.bn=new kl}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(lt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(lt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class kl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ae(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ae(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="IndexedDbIndexManager",_o=new Uint8Array(0);class sS{constructor(e,t){this.databaseId=t,this.Dn=new kl,this.Cn=new Xt(r=>or(r),(r,s)=>Fi(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Dn.add(t)});const i={collectionId:r,parent:ze(s)};return rp(e).put(i)}return R.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[_g(t),""],!1,!0);return rp(e).J(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(kt(o.parent))}return r})}addFieldIndex(e,t){const r=Ls(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=br(e);return i.next(c=>{o.put(Wf(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Ls(e),s=br(e),i=Rr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ls(e),r=Rr(e),s=br(e);return t.X().next(()=>r.X()).next(()=>s.X())}createTargetIndexes(e,t){return R.forEach(this.vn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new ep(r).Sn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=Rr(e);let s=!0;const i=new Map;return R.forEach(this.vn(t),o=>this.Fn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=X();const c=[];return R.forEach(i,(u,l)=>{N(np,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(u)} to execute ${or(t)}`);const d=function(F,H){const W=Eu(H);if(W===void 0)return null;for(const Q of Zo(F,W.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(l,u),m=function(F,H){const W=new Map;for(const Q of $n(H))for(const T of Zo(F,Q.fieldPath))switch(T.op){case"==":case"in":W.set(Q.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return W.set(Q.fieldPath.canonicalString(),T.value),Array.from(W.values())}return null}(l,u),_=function(F,H){const W=[];let Q=!0;for(const T of $n(H)){const y=T.kind===0?Of(F,T.fieldPath,F.startAt):xf(F,T.fieldPath,F.startAt);W.push(y.value),Q&&(Q=y.inclusive)}return new Jr(W,Q)}(l,u),A=function(F,H){const W=[];let Q=!0;for(const T of $n(H)){const y=T.kind===0?xf(F,T.fieldPath,F.endAt):Of(F,T.fieldPath,F.endAt);W.push(y.value),Q&&(Q=y.inclusive)}return new Jr(W,Q)}(l,u),C=this.Mn(u,l,_),V=this.Mn(u,l,A),D=this.xn(u,l,m),G=this.On(u.indexId,d,C,_.inclusive,V,A.inclusive,D);return R.forEach(G,$=>r.Z($,t.limit).next(F=>{F.forEach(H=>{const W=L.fromSegments(H.documentKey);o.has(W)||(o=o.add(W),c.push(W))})}))}).next(()=>c)}return R.resolve(null)})}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=nS(oe.create(e.filters,"and")).map(r=>ku(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}On(e,t,r,s,i,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,i.length),l=u/(t!=null?t.length:1),d=[];for(let m=0;m<u;++m){const _=t?this.Nn(t[m/l]):_o,A=this.Bn(e,_,r[m%l],s),C=this.Ln(e,_,i[m%l],o),V=c.map(D=>this.Bn(e,_,D,!0));d.push(...this.createRange(A,C,V))}return d}Bn(e,t,r,s){const i=new Kn(e,L.empty(),t,r);return s?i:i.In()}Ln(e,t,r,s){const i=new Kn(e,L.empty(),t,r);return s?i.In():i}Fn(e,t){const r=new ep(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const s=this.vn(t);return R.forEach(s,i=>this.Fn(e,i).next(o=>{o?r!==0&&o.fields.length<function(u){let l=new ae(pe.comparator),d=!1;for(const m of u.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?d=!0:l=l.add(_.field));for(const m of u.orderBy)m.field.isKeyField()||(l=l.add(m.field));return l.size+(d?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}kn(e,t){const r=new Ms;for(const s of $n(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.ln(s.kind);Hn.Wt.Dt(i,o)}return r.un()}Nn(e){const t=new Ms;return Hn.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new Ms;return Hn.Wt.Dt(Ai(this.databaseId,t),r.ln(function(i){const o=$n(i);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,t,r){if(r===null)return[];let s=[];s.push(new Ms);let i=0;for(const o of $n(e)){const c=r[i++];for(const u of s)if(this.Kn(t,o.fieldPath)&&Ri(c))s=this.Un(s,o,c);else{const l=u.ln(o.kind);Hn.Wt.Dt(c,l)}}return this.$n(s)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const u=new Ms;u.seed(c.un()),Hn.Wt.Dt(o,u.ln(t.kind)),i.push(u)}return i}Kn(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ls(e),s=br(e);return(t?r.J(wu,IDBKeyRange.bound(t,t)):r.J()).next(i=>{const o=[];return R.forEach(i,c=>s.get([c.indexId,this.uid]).next(u=>{o.push(function(d,m){const _=m?new gi(m.sequenceNumber,new lt(ur(m.readTime),new L(kt(m.documentKey)),m.largestBatchId)):gi.empty(),A=d.fields.map(([C,V])=>new Co(pe.fromServerFormat(C),V));return new Wo(d.indexId,d.collectionGroup,A,_)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:K(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Ls(e),i=br(e);return this.Wn(e).next(o=>s.J(wu,IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,u=>i.put(Wf(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(r.set(s.collectionGroup,c),R.forEach(c,u=>this.Qn(e,s,u).next(l=>{const d=this.Gn(i,u);return l.isEqual(d)?R.resolve():this.zn(e,i,u,l,d)}))))})}jn(e,t,r,s){return Rr(e).put(s.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,s){return Rr(e).delete(s.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const s=Rr(e);let i=new ae(hn);return s.ee({index:Cg,range:IDBKeyRange.only([r.indexId,this.uid,Uo(this.qn(r,t))])},(o,c)=>{i=i.add(new Kn(r.indexId,t,Zf(c.arrayValue),Zf(c.directionalValue)))}).next(()=>i)}Gn(e,t){let r=new ae(hn);const s=this.kn(t,e);if(s==null)return r;const i=Eu(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ri(o))for(const c of o.arrayValue.values||[])r=r.add(new Kn(t.indexId,e.key,this.Nn(c),s))}else r=r.add(new Kn(t.indexId,e.key,_o,s));return r}zn(e,t,r,s,i){N(np,"Updating index entries for document '%s'",t.key);const o=[];return function(u,l,d,m,_){const A=u.getIterator(),C=l.getIterator();let V=vr(A),D=vr(C);for(;V||D;){let G=!1,$=!1;if(V&&D){const F=d(V,D);F<0?$=!0:F>0&&(G=!0)}else V!=null?$=!0:G=!0;G?(m(D),D=vr(C)):$?(_(V),V=vr(A)):(V=vr(A),D=vr(C))}}(s,i,hn,c=>{o.push(this.jn(e,t,r,c))},c=>{o.push(this.Jn(e,t,r,c))}),R.waitFor(o)}Wn(e){let t=1;return br(e).ee({index:kg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>hn(o,c)).filter((o,c,u)=>!c||hn(o,u[c-1])!==0);const s=[];s.push(e);for(const o of r){const c=hn(o,e),u=hn(o,t);if(c===0)s[0]=e.In();else if(c>0&&u<0)s.push(o),s.push(o.In());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const c=s[o].An(this.uid,_o,L.empty()),u=s[o+1].An(this.uid,_o,L.empty());i.push(IDBKeyRange.bound(c,u))}return i}Hn(e,t){return hn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sp)}getMinOffset(e,t){return R.mapArray(this.vn(t),r=>this.Fn(e,r).next(s=>s||U(44426))).next(sp)}}function rp(n){return Ce(n,Ei)}function Rr(n){return Ce(n,si)}function Ls(n){return Ce(n,fl)}function br(n){return Ce(n,ri)}function sp(n){q(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;ll(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new lt(e.readTime,e.documentKey,t)}/**
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
 */const ip={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},M_=41943040;class qe{static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n,e,t){const r=n.store(yt),s=n.store(zr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},(d,m,_)=>(c++,_.delete()));i.push(u.next(()=>{q(c===1,47070,{batchId:t.batchId})}));const l=[];for(const d of t.mutations){const m=bg(e,d.key.path,t.batchId);i.push(s.delete(m)),l.push(d.key)}return R.waitFor(i).next(()=>l)}function ia(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw U(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(M_,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);class za{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static wt(e,t,r,s){q(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new za(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dn(e).ee({index:Wn,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Dr(e),o=dn(e);return o.add({}).next(c=>{q(typeof c=="number",49019);const u=new wl(c,t,r,s),l=function(A,C,V){const D=V.baseMutations.map($=>na(A.yt,$)),G=V.mutations.map($=>na(A.yt,$));return{userId:C,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:D,mutations:G}}(this.serializer,this.userId,u),d=[];let m=new ae((_,A)=>K(_.canonicalString(),A.canonicalString()));for(const _ of s){const A=bg(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),d.push(o.put(l)),d.push(i.put(A,NR))}return m.forEach(_=>{d.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),R.waitFor(d).next(()=>u)})}lookupMutationBatch(e,t){return dn(e).get(t).next(r=>r?(q(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Gn(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?R.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Zn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return dn(e).ee({index:Wn,range:s},(o,c,u)=>{c.userId===this.userId&&(q(c.batchId>=r,47524,{Yn:r}),i=Gn(this.serializer,c)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Jn;return dn(e).ee({index:Wn,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Jn],[this.userId,Number.POSITIVE_INFINITY]);return dn(e).J(Wn,t).next(r=>r.map(s=>Gn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=No(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Dr(e).ee({range:s},(o,c,u)=>{const[l,d,m]=o,_=kt(d);if(l===this.userId&&t.path.isEqual(_))return dn(e).get(m).next(A=>{if(!A)throw U(61480,{er:o,batchId:m});q(A.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:A.userId,batchId:m}),i.push(Gn(this.serializer,A))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(K);const s=[];return t.forEach(i=>{const o=No(this.userId,i.path),c=IDBKeyRange.lowerBound(o),u=Dr(e).ee({range:c},(l,d,m)=>{const[_,A,C]=l,V=kt(A);_===this.userId&&i.path.isEqual(V)?r=r.add(C):m.done()});s.push(u)}),R.waitFor(s).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=No(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ae(K);return Dr(e).ee({range:o},(u,l,d)=>{const[m,_,A]=u,C=kt(_);m===this.userId&&r.isPrefixOf(C)?C.length===s&&(c=c.add(A)):d.done()}).next(()=>this.tr(e,c))}tr(e,t){const r=[],s=[];return t.forEach(i=>{s.push(dn(e).get(i).next(o=>{if(o===null)throw U(35274,{batchId:i});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(Gn(this.serializer,o))}))}),R.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return L_(e.le,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.nr(t.batchId)}),R.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Dr(e).ee({range:r},(i,o,c)=>{if(i[0]===this.userId){const u=kt(i[1]);s.push(u)}else c.done()}).next(()=>{q(s.length===0,56720,{rr:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return U_(e,this.userId,t)}ir(e){return F_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Jn,lastStreamToken:""})}}function U_(n,e,t){const r=No(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Dr(n).ee({range:i,Y:!0},(c,u,l)=>{const[d,m,_]=c;d===e&&m===s&&(o=!0),l.done()}).next(()=>o)}function dn(n){return Ce(n,yt)}function Dr(n){return Ce(n,zr)}function F_(n){return Ce(n,yi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new lr(0)}static ar(){return new lr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next(t=>{const r=new lr(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(t=>j.fromTimestamp(new ie(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.ur(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.cr(e,s)))}addTargetData(e,t){return this.lr(e,t).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Sr(e).delete(t.targetId)).next(()=>this.ur(e)).next(r=>(q(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Sr(e).ee((o,c)=>{const u=Ws(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Sr(e).ee((r,s)=>{const i=Ws(s);t(i)})}ur(e){return op(e).get(Yo).next(t=>(q(t!==null,2888),t))}cr(e,t){return op(e).put(Yo,t)}lr(e,t){return Sr(e).put(D_(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(t=>t.targetCount)}getTargetData(e,t){const r=or(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Sr(e).ee({range:s,index:Pg},(o,c,u)=>{const l=Ws(c);Fi(t,l.target)&&(i=l,u.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=gn(e);return t.forEach(o=>{const c=ze(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))}),R.waitFor(s)}removeMatchingKeys(e,t,r){const s=gn(e);return R.forEach(t,i=>{const o=ze(i.path);return R.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=gn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=gn(e);let i=X();return s.ee({range:r,Y:!0},(o,c,u)=>{const l=kt(o[1]),d=new L(l);i=i.add(d)}).next(()=>i)}containsKey(e,t){const r=ze(t.path),s=IDBKeyRange.bound([r],[_g(r)],!1,!0);let i=0;return gn(e).ee({index:dl,Y:!0,range:s},([o,c],u,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}At(e,t){return Sr(e).get(t).next(r=>r?Ws(r):null)}}function Sr(n){return Ce(n,Gr)}function op(n){return Ce(n,Yn)}function gn(n){return Ce(n,Hr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="LruGarbageCollector",B_=1048576;function cp([n,e],[t,r]){const s=K(n,t);return s===0?K(e,r):s}class oS{constructor(e){this.Pr=e,this.buffer=new ae(cp),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();cp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class q_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(ap,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>p(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dn(t)?N(ap,"Ignoring IndexedDB error during garbage collection: ",t):yield Nn(t)}yield this.Ar(3e5)}))}}class aS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(et.ce);const r=new oS(t);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ip)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ip):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(l=Date.now(),kr()<=ee.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function $_(n,e){return new aS(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,t){this.db=e,this.garbageCollector=$_(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,(r,s)=>t(s))}addReference(e,t,r){return yo(e,r)}removeReference(e,t,r){return yo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return yo(e,t)}wr(e,t){return function(s,i){let o=!1;return F_(s).te(c=>U_(s,c,i).next(u=>(u&&(o=!0),R.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,(o,c)=>{if(c<=t){const u=this.wr(e,o).next(l=>{if(!l)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),gn(e).delete(function(m){return[0,ze(m.path)]}(o))))});s.push(u)}}).next(()=>R.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return yo(e,t)}yr(e,t){const r=gn(e);let s,i=et.ce;return r.ee({index:dl},([o,c],{path:u,sequenceNumber:l})=>{o===0?(i!==et.ce&&t(new L(kt(s)),i),i=l,s=u):i=et.ce}).next(()=>{i!==et.ce&&t(new L(kt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function yo(n,e){return gn(n).put(function(r,s){return{targetId:0,path:ze(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.changes=new Xt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Bn(e).put(r)}removeEntry(e,t,r){return Bn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],ra(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Sr(e,r)))}getEntry(e,t){let r=ge.newInvalidDocument(t);return Bn(e).ee({index:Do,range:IDBKeyRange.only(Us(t))},(s,i)=>{r=this.br(t,i)}).next(()=>r)}Dr(e,t){let r={size:0,document:ge.newInvalidDocument(t)};return Bn(e).ee({index:Do,range:IDBKeyRange.only(Us(t))},(s,i)=>{r={document:this.br(t,i),size:ia(i)}}).next(()=>r)}getEntries(e,t){let r=at();return this.Cr(e,t,(s,i)=>{const o=this.br(s,i);r=r.insert(s,o)}).next(()=>r)}vr(e,t){let r=at(),s=new ue(L.comparator);return this.Cr(e,t,(i,o)=>{const c=this.br(i,o);r=r.insert(i,c),s=s.insert(i,ia(o))}).next(()=>({documents:r,Fr:s}))}Cr(e,t,r){if(t.isEmpty())return R.resolve();let s=new ae(hp);t.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound(Us(s.first()),Us(s.last())),o=s.getIterator();let c=o.getNext();return Bn(e).ee({index:Do,range:i},(u,l,d)=>{const m=L.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;c&&hp(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,l),c=o.hasNext()?o.getNext():null),c?d.j(Us(c)):d.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),ra(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Bn(e).J(IDBKeyRange.bound(c,u,!0)).next(l=>{i==null||i.incrementDocumentReadCount(l.length);let d=at();for(const m of l){const _=this.br(L.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(qi(t,_)||s.has(_.key))&&(d=d.insert(_.key,_))}return d})}getAllFromCollectionGroup(e,t,r,s){let i=at();const o=lp(t,r),c=lp(t,lt.max());return Bn(e).ee({index:Sg,range:IDBKeyRange.bound(o,c,!0)},(u,l,d)=>{const m=this.br(L.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(m.key,m),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new lS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return up(e).get(Tu).next(t=>(q(!!t,20021),t))}Sr(e,t){return up(e).put(Tu,t)}br(e,t){if(t){const r=Qb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return ge.newInvalidDocument(e)}}function z_(n){return new uS(n)}class lS extends j_{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new Xt(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ae((i,o)=>K(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Or.get(i);if(t.push(this.Mr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const u=Hf(this.Mr.serializer,o);s=s.add(i.path.popLast());const l=ia(u);r+=l-c.size,t.push(this.Mr.addEntry(e,i,u))}else if(r-=c.size,this.trackRemovals){const u=Hf(this.Mr.serializer,o.convertToNoDocument(j.min()));t.push(this.Mr.addEntry(e,i,u))}}),s.forEach(i=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Mr.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next(r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Mr.vr(e,t).next(({documents:r,Fr:s})=>(s.forEach((i,o)=>{this.Or.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function up(n){return Ce(n,Ii)}function Bn(n){return Ce(n,Jo)}function Us(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lp(n,e){const t=e.documentKey.path.toArray();return[n,ra(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function hp(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=K(t[i],r[i]),s)return s;return s=K(t.length,r.length),s||(s=K(t[t.length-2],r[r.length-2]),s||K(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ci(r.mutation,s,tt.empty(),ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=Ct();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Hs();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=at();const o=ai(),c=function(){return ai()}();return t.forEach((u,l)=>{const d=r.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof Zt)?i=i.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),ci(d.mutation,l,d.mutation.getFieldMask(),ie.now())):o.set(l.key,tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((l,d)=>o.set(l,d)),t.forEach((l,d)=>{var m;return c.set(l,new hS(d,(m=o.get(l))!=null?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ai();let s=new ue((o,c)=>o-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const l=t.get(u);if(l===null)return;let d=r.get(u)||tt.empty();d=c.applyToLocalView(l,d),r.set(u,d);const m=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,d=u.value,m=a_();d.forEach(_=>{if(!i.has(_)){const A=p_(t.get(_),r.get(_));A!==null&&m.set(_,A),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,m))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return mb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):e_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(Ct());let c=jr,u=i;return o.next(l=>R.forEach(l,(d,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(d)?R.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{u=u.insert(d,_)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,u,l,X())).next(d=>({batchId:c,changes:o_(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,u=>{const l=function(m,_){return new ls(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(d=>{d.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((u,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,ge.newInvalidDocument(d)))});let c=Hs();return o.forEach((u,l)=>{const d=i.get(u);d!==void 0&&ci(d.mutation,l,tt.empty(),ie.now()),qi(t,l)&&(c=c.insert(u,l))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:V_(s.bundledQuery),readTime:Xe(s.readTime)}}(t)),R.resolve()}}/**
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
 */class fS{constructor(){this.overlays=new ue(L.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ct();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=Ct(),i=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ue((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let d=i.get(l.largestBatchId);d===null&&(d=Ct(),i=i.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const c=Ct(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,d)=>c.set(l,d)),!(c.size()>=s)););return R.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Al(t,r));let i=this.Lr.get(t);i===void 0&&(i=X(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class pS{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.kr=new ae(Ve.qr),this.Kr=new ae(Ve.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ve(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new L(new se([])),r=new Ve(t,e),s=new Ve(t,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new L(new se([])),r=new Ve(t,e),s=new Ve(t,e+1);let i=X();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ve(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return L.comparator(e.key,t.key)||K(e.Jr,t.Jr)}static Ur(e,t){return K(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ae(Ve.qr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wl(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Ve(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Jn:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),s=new Ve(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const c=this.Zr(o.Jr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(K);return t.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],c=>{r=r.add(c.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new L(i),0);let c=new ae(K);return this.Hr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(c=c.add(u.Jr)),!0)},o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){q(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(t.mutations,s=>{const i=new Ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new Ve(t,0),s=this.Hr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.ti=e,this.docs=function(){return new ue(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let r=at();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ge.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=at();const o=t.path,c=new L(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:l,value:{document:d}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ll(Tg(d),r)<=0||(s.has(d.key)||qi(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U(9500)}ni(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _S(this)}getSize(e){return R.resolve(this.size)}}class _S extends j_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.persistence=e,this.ri=new Xt(t=>or(t),Fi),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.ii=0,this.si=new Cl,this.targetCount=0,this.oi=lr._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new lr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t){this._i={},this.overlays={},this.ai=new et(0),this.ui=!1,this.ui=!0,this.ci=new pS,this.referenceDelegate=e(this),this.li=new yS(this),this.indexManager=new rS,this.remoteDocumentCache=function(s){return new gS(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new N_(t),this.Pi=new dS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new mS(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new IS(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,t){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class IS extends vg{constructor(e){super(),this.currentSequenceNumber=e}}class Ga{constructor(e){this.persistence=e,this.Ri=new Cl,this.Ai=null}static Vi(e){return new Ga(e)}get di(){if(this.Ai)return this.Ai;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const s=L.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,j.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class oa{constructor(e,t){this.persistence=e,this.fi=new Xt(r=>ze(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=$_(this,t)}static Vi(e,t){return new oa(e,t)}Ti(){}Ei(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return R.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?R.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,t).next(c=>{c||(r++,i.removeEntry(o,j.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Oo(e.data.value)),t}wr(e,t,r){return R.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.serializer=e}k(e,t,r,s){const i=new Na("createOrUpgrade",t);r<1&&s>=1&&(function(u){u.createObjectStore(Ui)}(e),function(u){u.createObjectStore(yi,{keyPath:CR}),u.createObjectStore(yt,{keyPath:wf,autoIncrement:!0}).createIndex(Wn,vf,{unique:!0}),u.createObjectStore(zr)}(e),dp(e),function(u){u.createObjectStore(jn)}(e));let o=R.resolve();return r<3&&s>=3&&(r!==0&&(function(u){u.deleteObjectStore(Hr),u.deleteObjectStore(Gr),u.deleteObjectStore(Yn)}(e),dp(e)),o=o.next(()=>function(u){const l=u.store(Yn),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return l.put(Yo,d)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(u,l){return l.store(yt).J().next(m=>{u.deleteObjectStore(yt),u.createObjectStore(yt,{keyPath:wf,autoIncrement:!0}).createIndex(Wn,vf,{unique:!0});const _=l.store(yt),A=m.map(C=>_.put(C));return R.waitFor(A)})}(e,i))),o=o.next(()=>{(function(u){u.createObjectStore(Kr,{keyPath:FR})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.gi(i))),r<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Ii)}(e),this.pi(i)))),r<7&&s>=7&&(o=o.next(()=>this.yi(i))),r<8&&s>=8&&(o=o.next(()=>this.wi(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Si(i))),r<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Va,{keyPath:BR})})(e),function(u){u.createObjectStore(Oa,{keyPath:qR})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(u){const l=u.createObjectStore(xa,{keyPath:WR});l.createIndex(vu,QR,{unique:!1}),l.createIndex(Ng,JR,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(u){const l=u.createObjectStore(Jo,{keyPath:DR});l.createIndex(Do,VR),l.createIndex(Sg,OR)}(e)).next(()=>this.bi(e,i)).next(()=>e.deleteObjectStore(jn))),r<14&&s>=14&&(o=o.next(()=>this.Di(e,i))),r<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore(fl,{keyPath:$R,autoIncrement:!0}).createIndex(wu,jR,{unique:!1}),u.createObjectStore(ri,{keyPath:zR}).createIndex(kg,GR,{unique:!1}),u.createObjectStore(si,{keyPath:HR}).createIndex(Cg,KR,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(ri).clear()}).next(()=>{t.objectStore(si).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(pl,{keyPath:YR})})(e)})),r<18&&s>=18&&dm()&&(o=o.next(()=>{t.objectStore(ri).clear()}).next(()=>{t.objectStore(si).clear()})),o}pi(e){let t=0;return e.store(jn).ee((r,s)=>{t+=ia(s)}).next(()=>{const r={byteSize:t};return e.store(Ii).put(Tu,r)})}gi(e){const t=e.store(yi),r=e.store(yt);return t.J().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Jn],[i.userId,i.lastAcknowledgedBatchId]);return r.J(Wn,o).next(c=>R.forEach(c,u=>{q(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=Gn(this.serializer,u);return L_(e,i.userId,l).next(()=>{})}))}))}yi(e){const t=e.store(Hr),r=e.store(jn);return e.store(Yn).get(Yo).next(s=>{const i=[];return r.ee((o,c)=>{const u=new se(o),l=function(m){return[0,ze(m)]}(u);i.push(t.get(l).next(d=>d?R.resolve():(m=>t.put({targetId:0,path:ze(m),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>R.waitFor(i))})}wi(e,t){e.createObjectStore(Ei,{keyPath:UR});const r=t.store(Ei),s=new kl,i=o=>{if(s.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:ze(u)})}};return t.store(jn).ee({Y:!0},(o,c)=>{const u=new se(o);return i(u.popLast())}).next(()=>t.store(zr).ee({Y:!0},([o,c,u],l)=>{const d=kt(c);return i(d.popLast())}))}Si(e){const t=e.store(Gr);return t.ee((r,s)=>{const i=Ws(s),o=D_(this.serializer,i);return t.put(o)})}bi(e,t){const r=t.store(jn),s=[];return r.ee((i,o)=>{const c=t.store(Jo),u=function(m){return m.document?new L(se.fromString(m.document.name).popFirst(5)):m.noDocument?L.fromSegments(m.noDocument.path):m.unknownDocument?L.fromSegments(m.unknownDocument.path):U(36783)}(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(l))}).next(()=>R.waitFor(s))}Di(e,t){const r=t.store(yt),s=z_(this.serializer),i=new Nl(Ga.Vi,this.serializer.yt);return r.J().next(o=>{const c=new Map;return o.forEach(u=>{var d;let l=(d=c.get(u.userId))!=null?d:X();Gn(this.serializer,u).keys().forEach(m=>l=l.add(m)),c.set(u.userId,l)}),R.forEach(c,(u,l)=>{const d=new Oe(l),m=ja.wt(this.serializer,d),_=i.getIndexManager(d),A=za.wt(d,this.serializer,_,i.referenceDelegate);return new G_(s,A,m,_).recalculateAndSaveOverlaysForDocumentKeys(new Au(t,et.ce),u).next()})})}}function dp(n){n.createObjectStore(Hr,{keyPath:MR}).createIndex(dl,LR,{unique:!0}),n.createObjectStore(Gr,{keyPath:"targetId"}).createIndex(Pg,xR,{unique:!0}),n.createObjectStore(Yn)}const fn="IndexedDbPersistence",Hc=18e5,Kc=5e3,Wc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",TS="main";class Dl{constructor(e,t,r,s,i,o,c,u,l,d,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=i,this.window=o,this.document=c,this.Fi=l,this.Mi=d,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=_=>Promise.resolve(),!Dl.v())throw new O(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cS(this,s),this.qi=t+TS,this.serializer=new N_(u),this.Ki=new vn(this.qi,this.xi,new ES(this.serializer)),this.ci=new Yb,this.li=new iS(this.referenceDelegate,this.serializer),this.remoteDocumentCache=z_(this.serializer),this.Pi=new Jb,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&Ie(fn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(k.FAILED_PRECONDITION,Wc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new et(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}zi(e){return this.ki=t=>p(this,null,function*(){if(this.started)return e(t)}),e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K(t=>p(this,null,function*(){t.newVersion===null&&(yield e())}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(()=>p(this,null,function*(){this.started&&(yield this.$i())})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Io(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(e)).next(t=>this.isPrimary&&!t?this.Hi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(Dn(e))return N(fn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N(fn,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return Fs(e).get(wr).next(t=>R.resolve(this.Xi(t)))}Yi(e){return Io(e).delete(this.clientId)}es(){return p(this,null,function*(){if(this.isPrimary&&!this.ts(this.Li,Hc)){this.Li=Date.now();const e=yield this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Ce(t,Kr);return r.J().next(s=>{const i=this.ns(s,Hc),o=s.filter(c=>i.indexOf(c)===-1);return R.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}})}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?R.resolve(!0):Fs(e).get(wr).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Kc)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new O(k.FAILED_PRECONDITION,Wc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Io(e).J().next(r=>this.ns(r,Kc).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N(fn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}shutdown(){return p(this,null,function*(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),yield this.Ki.runTransaction("shutdown","readwrite",[Ui,Kr],e=>{const t=new Au(e,et.ce);return this.Hi(t).next(()=>this.Yi(t))}),this.Ki.close(),this.ls()})}ns(e,t){return e.filter(r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>Io(e).J().next(t=>this.ns(t,Hc).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return za.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sS(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return ja.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){N(fn,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(u){return u===18?eb:u===17?xg:u===16?ZR:u===15?ml:u===14?Og:u===13?Vg:u===12?XR:u===11?Dg:void U(60245)}(this.xi);let o;return this.Ki.runTransaction(e,s,i,c=>(o=new Au(c,this.ai?this.ai.next():et.ce),t==="readwrite-primary"?this.ji(o).next(u=>!!u||this.Ji(o)).next(u=>{if(!u)throw Ie(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new O(k.FAILED_PRECONDITION,wg);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ps(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ps(e){return Fs(e).get(wr).next(t=>{if(t!==null&&this.ts(t.leaseTimestampMs,Kc)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(k.FAILED_PRECONDITION,Wc)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fs(e).put(wr,t)}static v(){return vn.v()}Hi(e){const t=Fs(e);return t.get(wr).next(r=>this.Xi(r)?(N(fn,"Releasing primary lease."),t.delete(wr)):R.resolve())}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ie(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;hm()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return N(fn,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ie(fn,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){Ie("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch(e){}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Fs(n){return Ce(n,Ui)}function Io(n){return Ce(n,Kr)}function H_(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=s}static Is(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vl(e,t.fromCache,r,s)}}/**
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
 */class wS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return hm()?8:Ag(Se())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wS;return this.ys(e,t,o).next(c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(kr()<=ee.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(kr()<=ee.DEBUG&&N("QueryEngine","Query:",Cr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(kr()<=ee.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):R.resolve())}gs(e,t){if(Mf(t))return R.resolve(null);let r=ct(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ea(t,null,"F"),r=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=X(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Ss(t,c);return this.bs(t,l,o,u.readTime)?this.gs(e,ea(t,null,"F")):this.Ds(e,l,t,u)}))})))}ps(e,t,r,s){return Mf(t)||s.isEqual(j.min())?R.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(t,i);return this.bs(t,o,r,s)?R.resolve(null):(kr()<=ee.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(t)),this.Ds(e,o,t,Eg(s,jr)).next(c=>c))})}Ss(e,t){let r=new ae(s_(e));return t.forEach((s,i)=>{qi(e,i)&&(r=r.add(i))}),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return kr()<=ee.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Cr(t)),this.fs.getDocumentsMatchingQuery(e,t,lt.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="LocalStore",vS=3e8;class AS{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ue(K),this.Fs=new Xt(i=>or(i),Fi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function W_(n,e,t,r){return new AS(n,e,t,r)}function Q_(n,e){return p(this,null,function*(){const t=B(n);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=X();for(const l of s){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of i){c.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(l=>({Ns:l,removedBatchIds:o,addedBatchIds:c}))})})})}function RS(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,l,d){const m=l.batch,_=m.keys();let A=R.resolve();return _.forEach(C=>{A=A.next(()=>d.getEntry(u,C)).next(V=>{const D=l.docVersions.get(C);q(D!==null,48541),V.version.compareTo(D)<0&&(m.applyToRemoteDocument(V,l),V.isValidDocument()&&(V.setReadTime(l.commitVersion),d.addEntry(V)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function J_(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function bS(n,e){const t=B(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach((d,m)=>{const _=s.get(m);if(!_)return;c.push(t.li.removeMatchingKeys(i,d.removedDocuments,m).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,m)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(Ee.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,r)),s=s.insert(m,A),function(V,D,G){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=vS?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(_,A,d)&&c.push(t.li.updateTargetData(i,A))});let u=at(),l=X();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(SS(i,o,e.documentUpdates).next(d=>{u=d.Bs,l=d.Ls})),!r.isEqual(j.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(m=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return R.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(t.vs=s,i))}function SS(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=at();return t.forEach((c,u)=>{const l=i.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N(Ol,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function PS(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Jn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aa(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):t.li.allocateTargetId(r).next(o=>(s=new jt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}function ns(n,e,t){return p(this,null,function*(){const r=B(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Dn(o))throw o;N(Ol,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)})}function Uu(n,e,t){const r=B(n);let s=j.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,d){const m=B(u),_=m.Fs.get(d);return _!==void 0?R.resolve(m.vs.get(_)):m.li.getTargetData(l,d)}(r,o,ct(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:j.min(),t?i:X())).next(c=>(Z_(r,r_(e),c),{documents:c,ks:i})))}function Y_(n,e){const t=B(n),r=B(t.li),s=t.vs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.At(i,e).next(o=>o?o.target:null))}function X_(n,e){const t=B(n),r=t.Ms.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.xs.getAllFromCollectionGroup(s,e,Eg(r,jr),Number.MAX_SAFE_INTEGER)).then(s=>(Z_(t,e,s),s))}function Z_(n,e,t){let r=n.Ms.get(e)||j.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="firestore_clients";function fp(n,e){return`${ey}_${n}_${e}`}const ty="firestore_mutations";function pp(n,e,t){let r=`${ty}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const ny="firestore_targets";function Qc(n,e){return`${ny}_${n}_${e}`}/**
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
 */const St="SharedClientState";class ca{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static $s(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new O(s.error.code,s.error.message))),o?new ca(e,t,s.state,i):(Ie(St,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ui{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static $s(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new O(r.error.code,r.error.message))),i?new ui(e,r.state,s):(Ie(St,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ua{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=El();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Rg(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new ua(e,i):(Ie(St,`Failed to parse client data for instance '${e}': ${t}`),null)}}class xl{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new xl(t.clientId,t.onlineState):(Ie(St,`Failed to parse online state: ${e}`),null)}}class Fu{constructor(){this.activeTargetIds=El()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jc{constructor(e,t,r,s,i){this.window=e,this.Ci=t,this.persistenceKey=r,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new ue(K),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=fp(this.persistenceKey,this.zs),this.Ys=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new Fu),this.eo=new RegExp(`^${ey}_${o}_([^_]*)$`),this.no=new RegExp(`^${ty}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${ny}_${o}_(\\d+)$`),this.io=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.so=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}start(){return p(this,null,function*(){const e=yield this.syncEngine.hs();for(const r of e){if(r===this.zs)continue;const s=this.getItem(fp(this.persistenceKey,r));if(s){const i=ua.$s(r,s);i&&(this.Hs=this.Hs.insert(i.clientId,i))}}this.oo();const t=this.storage.getItem(this.io);if(t){const r=this._o(t);r&&this.ao(r)}for(const r of this.Zs)this.Js(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0})}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(e){let t=!1;return this.Hs.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,r){this.co(e,t,r),this.lo(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Qc(this.persistenceKey,e));if(s){const i=ui.$s(e,s);i&&(r=i.state)}}return t&&this.ho.Qs(e),this.oo(),r}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Qc(this.persistenceKey,e))}updateQueryState(e,t,r){this.Po(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.lo(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N(St,"READ",e,t),t}setItem(e,t){N(St,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){N(St,"REMOVE",e),this.storage.removeItem(e)}Js(e){const t=e;if(t.storageArea===this.storage){if(N(St,"EVENT",t.key,t.newValue),t.key===this.Xs)return void Ie("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable(()=>p(this,null,function*(){if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const r=this.Io(t.key);return this.Ro(r,null)}{const r=this.Ao(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.no.test(t.key)){if(t.newValue!==null){const r=this.Vo(t.key,t.newValue);if(r)return this.mo(r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(t.key===this.io){if(t.newValue!==null){const r=this._o(t.newValue);if(r)return this.ao(r)}}else if(t.key===this.Ys){const r=function(i){let o=et.ce;if(i!=null)try{const c=JSON.parse(i);q(typeof c=="number",30636,{yo:i}),o=c}catch(c){Ie(St,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==et.ce&&this.sequenceNumberHandler(r)}else if(t.key===this.so){const r=this.wo(t.newValue);yield Promise.all(r.map(s=>this.syncEngine.So(s)))}}}else this.Zs.push(t)}))}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,r){const s=new ca(this.currentUser,e,t,r),i=pp(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}lo(e){const t=pp(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,r){const s=Qc(this.persistenceKey,e),i=new ui(e,t,r);this.setItem(s,i.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Io(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const r=this.Io(e);return ua.$s(r,t)}Vo(e,t){const r=this.no.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return ca.$s(new Oe(i),s,t)}fo(e,t){const r=this.ro.exec(e),s=Number(r[1]);return ui.$s(s,t)}_o(e){return xl.$s(e)}wo(e){return JSON.parse(e)}mo(e){return p(this,null,function*(){if(e.user.uid===this.currentUser.uid)return this.syncEngine.bo(e.batchId,e.state,e.error);N(St,`Ignoring mutation for non-active user ${e.user.uid}`)})}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Hs.insert(e,t):this.Hs.remove(e),s=this.uo(this.Hs),i=this.uo(r),o=[],c=[];return i.forEach(u=>{s.has(u)||o.push(u)}),s.forEach(u=>{i.has(u)||c.push(u)}),this.syncEngine.Co(o,c).then(()=>{this.Hs=r})}ao(e){this.Hs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=El();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class ry{constructor(){this.vo=new Fu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Fu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="ConnectivityMonitor";class gp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(mp,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(mp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eo=null;function Bu(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="RestConnection",CS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class NS{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===wi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=Bu(),c=this.Qo(e,t.toUriEncodedString());N(Yc,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:l}=new URL(c),d=Cn(l);return this.zo(e,c,u,r,d).then(m=>(N(Yc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw sr(Yc,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+us}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=CS[e];let s=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection",Bs=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Br extends NS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Br.c_){const e=fg();Bs(e,dg.STAT_EVENT,t=>{t.stat===yu.PROXY?N(Be,"STAT_EVENT: detected buffering proxy"):t.stat===yu.NOPROXY&&N(Be,"STAT_EVENT: detected no buffering proxy")}),Br.c_=!0}}zo(e,t,r,s,i){const o=Bu();return new Promise((c,u)=>{const l=new lg;l.setWithCredentials(!0),l.listenOnce(hg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ko.NO_ERROR:const m=l.getResponseJson();N(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case ko.TIMEOUT:N(Be,`RPC '${e}' ${o} timed out`),u(new O(k.DEADLINE_EXCEEDED,"Request time out"));break;case ko.HTTP_ERROR:const _=l.getStatus();if(N(Be,`RPC '${e}' ${o} failed with status:`,_,"response text:",l.getResponseText()),_>0){let A=l.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const V=function(G){const $=G.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN}(C.status);u(new O(V,C.message))}else u(new O(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new O(k.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{N(Be,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);N(Be,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",d,r,15)})}T_(e,t,r){const s=Bu(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");N(Be,`Creating RPC '${e}' stream ${s}: ${l}`,c);const d=o.createWebChannel(l,c);this.E_(d);let m=!1,_=!1;const A=new DS({Jo:C=>{_?N(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(N(Be,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),N(Be,`RPC '${e}' stream ${s} sending:`,C),d.send(C))},Ho:()=>d.close()});return Bs(d,Gs.EventType.OPEN,()=>{_||(N(Be,`RPC '${e}' stream ${s} transport opened.`),A.i_())}),Bs(d,Gs.EventType.CLOSE,()=>{_||(_=!0,N(Be,`RPC '${e}' stream ${s} transport closed`),A.o_(),this.I_(d))}),Bs(d,Gs.EventType.ERROR,C=>{_||(_=!0,sr(Be,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),A.o_(new O(k.UNAVAILABLE,"The operation could not be completed")))}),Bs(d,Gs.EventType.MESSAGE,C=>{var V;if(!_){const D=C.data[0];q(!!D,16349);const G=D,$=(G==null?void 0:G.error)||((V=G[0])==null?void 0:V.error);if($){N(Be,`RPC '${e}' stream ${s} received error:`,$);const F=$.status;let H=function(T){const y=Te[T];if(y!==void 0)return __(y)}(F),W=$.message;F==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&sr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),H===void 0&&(H=k.INTERNAL,W="Unknown error status: "+F+" with message "+$.message),_=!0,A.o_(new O(H,W)),d.close()}else N(Be,`RPC '${e}' stream ${s} received:`,D),A.__(D)}}),Br.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return pg()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(n){return new Br(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(){return typeof window!="undefined"?window:null}function Fo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){return new Ub(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br.c_=!1;class iy{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="PersistentStream";class oy{constructor(e,t,r,s,i,o,c,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iy(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return p(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}k_(){return p(this,null,function*(){if(this.O_())return this.close(0)})}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return p(this,null,function*(){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Ie(t.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.t_(t)})}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new O(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(()=>p(this,null,function*(){this.state=0,this.start()}))}z_(e){return N(_p,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(_p,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OS extends oy{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=qb(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Xe(o.readTime):j.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Vu(this.serializer),t.addTarget=function(i,o){let c;const u=o.target;if(c=Xo(u)?{documents:R_(i,u)}:{query:Sl(i,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=E_(i,o.resumeToken);const l=Nu(i,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=ts(i,o.snapshotVersion.toTimestamp());const l=Nu(i,o.expectedCount);l!==null&&(c.expectedCount=l)}return c}(this.serializer,e);const r=zb(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=Vu(this.serializer),t.removeTarget=e,this.q_(t)}}class xS extends oy{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=$b(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Vu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>na(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{}class LS extends MS{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Du(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(k.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Du(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(k.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function US(n,e,t,r){return new LS(n,e,t,r)}class FS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ie(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="RemoteStore";class BS{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(()=>p(this,null,function*(){yr(this)&&(N(hr,"Restarting streams for network reachability change."),yield function(u){return p(this,null,function*(){const l=B(u);l.Ia.add(4),yield zi(l),l.Va.set("Unknown"),l.Ia.delete(4),yield Ka(l)})}(this))}))}),this.Va=new FS(r,s)}}function Ka(n){return p(this,null,function*(){if(yr(n))for(const e of n.Ra)yield e(!0)})}function zi(n){return p(this,null,function*(){for(const e of n.Ra)yield e(!1)})}function Wa(n,e){const t=B(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Ul(t)?Ll(t):fs(t).O_()&&Ml(t,e))}function rs(n,e){const t=B(n),r=fs(t);t.Ea.delete(e),r.O_()&&ay(t,e),t.Ea.size===0&&(r.O_()?r.L_():yr(t)&&t.Va.set("Unknown"))}function Ml(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fs(n).Z_(e)}function ay(n,e){n.da.$e(e),fs(n).X_(e)}function Ll(n){n.da=new Ob({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),fs(n).start(),n.Va.ua()}function Ul(n){return yr(n)&&!fs(n).x_()&&n.Ea.size>0}function yr(n){return B(n).Ia.size===0}function cy(n){n.da=void 0}function qS(n){return p(this,null,function*(){n.Va.set("Online")})}function $S(n){return p(this,null,function*(){n.Ea.forEach((e,t)=>{Ml(n,e)})})}function jS(n,e){return p(this,null,function*(){cy(n),Ul(n)?(n.Va.ha(e),Ll(n)):n.Va.set("Unknown")})}function zS(n,e,t){return p(this,null,function*(){if(n.Va.set("Online"),e instanceof I_&&e.state===2&&e.cause)try{yield function(s,i){return p(this,null,function*(){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(yield s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))})}(n,e)}catch(r){N(hr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield la(n,r)}else if(e instanceof Lo?n.da.Xe(e):e instanceof y_?n.da.st(e):n.da.tt(e),!t.isEqual(j.min()))try{const r=yield J_(n.localStore);t.compareTo(r)>=0&&(yield function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ea.get(l);d&&i.Ea.set(l,d.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,l)=>{const d=i.Ea.get(u);if(!d)return;i.Ea.set(u,d.withResumeToken(Ee.EMPTY_BYTE_STRING,d.snapshotVersion)),ay(i,u);const m=new jt(d.target,u,l,d.sequenceNumber);Ml(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t))}catch(r){N(hr,"Failed to raise snapshot:",r),yield la(n,r)}})}function la(n,e,t){return p(this,null,function*(){if(!Dn(e))throw e;n.Ia.add(1),yield zi(n),n.Va.set("Offline"),t||(t=()=>J_(n.localStore)),n.asyncQueue.enqueueRetryable(()=>p(this,null,function*(){N(hr,"Retrying IndexedDB access"),yield t(),n.Ia.delete(1),yield Ka(n)}))})}function uy(n,e){return e().catch(t=>la(n,t,e))}function ds(n){return p(this,null,function*(){const e=B(n),t=Sn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jn;for(;GS(e);)try{const s=yield PS(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,HS(e,s)}catch(s){yield la(e,s)}ly(e)&&hy(e)})}function GS(n){return yr(n)&&n.Ta.length<10}function HS(n,e){n.Ta.push(e);const t=Sn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function ly(n){return yr(n)&&!Sn(n).x_()&&n.Ta.length>0}function hy(n){Sn(n).start()}function KS(n){return p(this,null,function*(){Sn(n).ra()})}function WS(n){return p(this,null,function*(){const e=Sn(n);for(const t of n.Ta)e.ea(t.mutations)})}function QS(n,e,t){return p(this,null,function*(){const r=n.Ta.shift(),s=vl.from(r,e,t);yield uy(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),yield ds(n)})}function JS(n,e){return p(this,null,function*(){e&&Sn(n).Y_&&(yield function(r,s){return p(this,null,function*(){if(function(o){return Nb(o)&&o!==k.ABORTED}(s.code)){const i=r.Ta.shift();Sn(r).B_(),yield uy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),yield ds(r)}})}(n,e)),ly(n)&&hy(n)})}function yp(n,e){return p(this,null,function*(){const t=B(n);t.asyncQueue.verifyOperationInProgress(),N(hr,"RemoteStore received new credentials");const r=yr(t);t.Ia.add(3),yield zi(t),r&&t.Va.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),yield Ka(t)})}function qu(n,e){return p(this,null,function*(){const t=B(n);e?(t.Ia.delete(2),yield Ka(t)):e||(t.Ia.add(2),yield zi(t),t.Va.set("Unknown"))})}function fs(n){return n.ma||(n.ma=function(t,r,s){const i=B(t);return i.sa(),new OS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:qS.bind(null,n),Yo:$S.bind(null,n),t_:jS.bind(null,n),H_:zS.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.ma.B_(),Ul(n)?Ll(n):n.Va.set("Unknown")):(yield n.ma.stop(),cy(n))}))),n.ma}function Sn(n){return n.fa||(n.fa=function(t,r,s){const i=B(t);return i.sa(),new xS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:KS.bind(null,n),t_:JS.bind(null,n),ta:WS.bind(null,n),na:QS.bind(null,n)}),n.Ra.push(e=>p(this,null,function*(){e?(n.fa.B_(),yield ds(n)):(yield n.fa.stop(),n.Ta.length>0&&(N(hr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Fl(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(n,e){if(Ie("AsyncQueue",`${e}: ${n}`),Dn(n))return new O(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{static emptySet(e){return new qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Hs(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.ga=new ue(L.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ss{constructor(e,t,r,s,i,o,c,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new ss(e,t,qr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class XS{constructor(){this.queries=Ep(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=B(t),i=s.queries;s.queries=Ep(),i.forEach((o,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new O(k.ABORTED,"Firestore shutting down"))}}function Ep(){return new Xt(n=>n_(n),Ua)}function ql(n,e){return p(this,null,function*(){const t=B(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new YS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=yield t.onListen(s,!0);break;case 1:i.wa=yield t.onListen(s,!1);break;case 2:yield t.onFirstRemoteStoreListen(s)}}catch(o){const c=Bl(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&jl(t)})}function $l(n,e){return p(this,null,function*(){const t=B(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function ZS(n,e){const t=B(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&jl(t)}function eP(n,e,t){const r=B(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function jl(n){n.Ca.forEach(e=>{e.next()})}var $u,Tp;(Tp=$u||($u={})).Ma="default",Tp.Cache="cache";class zl{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.key=e}}class fy{constructor(e){this.key=e}}class tP{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=X(),this.mutatedKeys=X(),this.eu=s_(e),this.tu=new qr(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Ip,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,m)=>{const _=s.get(d),A=qi(this.query,m)?m:null,C=!!_&&this.mutatedKeys.has(_.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;_&&A?_.data.isEqual(A.data)?C!==V&&(r.track({type:3,doc:A}),D=!0):this.su(_,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.eu(A,u)>0||l&&this.eu(A,l)<0)&&(c=!0)):!_&&A?(r.track({type:0,doc:A}),D=!0):_&&!A&&(r.track({type:1,doc:_}),D=!0,(u||l)&&(c=!0)),D&&(A?(o=o.add(A),i=V?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,m)=>function(A,C){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:D})}};return V(A)-V(C)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(r),s=s!=null?s:!1;const c=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,l=u!==this.Xa;return this.Xa=u,o.length!==0||l?{snapshot:new ss(this.query,e.tu,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ip,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=X(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new fy(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new dy(r))}),t}cu(e){this.Za=e.ks,this.Ya=X();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ss.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ps="SyncEngine";class nP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rP{constructor(e){this.key=e,this.hu=!1}}class sP{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xt(c=>n_(c),Ua),this.Eu=new Map,this.Iu=new Set,this.Ru=new ue(L.comparator),this.Au=new Map,this.Vu=new Cl,this.du={},this.mu=new Map,this.fu=lr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function iP(n,e,t=!0){return p(this,null,function*(){const r=Qa(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=yield py(r,e,t,!0),s})}function oP(n,e){return p(this,null,function*(){const t=Qa(n);yield py(t,e,!0,!1)})}function py(n,e,t,r){return p(this,null,function*(){const s=yield aa(n.localStore,ct(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=yield Gl(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Wa(n.remoteStore,s),c})}function Gl(n,e,t,r,s){return p(this,null,function*(){n.pu=(m,_,A)=>function(V,D,G,$){return p(this,null,function*(){let F=D.view.ru(G);F.bs&&(F=yield Uu(V.localStore,D.query,!1).then(({documents:T})=>D.view.ru(T,F)));const H=$&&$.targetChanges.get(D.targetId),W=$&&$.targetMismatches.get(D.targetId)!=null,Q=D.view.applyChanges(F,V.isPrimaryClient,H,W);return ju(V,D.targetId,Q.au),Q.snapshot})}(n,m,_,A);const i=yield Uu(n.localStore,e,!0),o=new tP(e,i.ks),c=o.ru(i.documents),u=ji.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(c,n.isPrimaryClient,u);ju(n,t,l.au);const d=new nP(e,t,o);return n.Tu.set(e,d),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),l.snapshot})}function aP(n,e,t){return p(this,null,function*(){const r=B(n),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!Ua(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||(yield ns(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&rs(r.remoteStore,s.targetId),is(r,s.targetId)}).catch(Nn))):(is(r,s.targetId),yield ns(r.localStore,s.targetId,!0))})}function cP(n,e){return p(this,null,function*(){const t=B(n),r=t.Tu.get(e),s=t.Eu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),rs(t.remoteStore,r.targetId))})}function uP(n,e,t){return p(this,null,function*(){const r=Ql(n);try{const s=yield function(o,c){const u=B(o),l=ie.now(),d=c.reduce((A,C)=>A.add(C.key),X());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=at(),V=X();return u.xs.getEntries(A,d).next(D=>{C=D,C.forEach((G,$)=>{$.isValidDocument()||(V=V.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(D=>{m=D;const G=[];for(const $ of c){const F=Pb($,m.get($.key).overlayedDocument);F!=null&&G.push(new Zt($.key,F,Gg(F.value.mapValue),$e.exists(!0)))}return u.mutationQueue.addMutationBatch(A,l,G,c)}).next(D=>{_=D;const G=D.applyToLocalDocumentSet(m,V);return u.documentOverlayCache.saveOverlays(A,D.batchId,G)})}).then(()=>({batchId:_.batchId,changes:o_(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let l=o.du[o.currentUser.toKey()];l||(l=new ue(K)),l=l.insert(c,u),o.du[o.currentUser.toKey()]=l}(r,s.batchId,t),yield On(r,s.changes),yield ds(r.remoteStore)}catch(s){const i=Bl(s,"Failed to persist write");t.reject(i)}})}function my(n,e){return p(this,null,function*(){const t=B(n);try{const r=yield bS(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?q(o.hu,14607):s.removedDocuments.size>0&&(q(o.hu,42227),o.hu=!1))}),yield On(t,r,e)}catch(r){yield Nn(r)}})}function wp(n,e,t){const r=B(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=B(o);u.onlineState=c;let l=!1;u.queries.forEach((d,m)=>{for(const _ of m.Sa)_.va(c)&&(l=!0)}),l&&jl(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function lP(n,e,t){return p(this,null,function*(){const r=B(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ue(L.comparator);o=o.insert(i,ge.newNoDocument(i,j.min()));const c=X().add(i),u=new $i(j.min(),new Map,new ue(K),o,c);yield my(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Wl(r)}else yield ns(r.localStore,e,!1).then(()=>is(r,e,t)).catch(Nn)})}function hP(n,e){return p(this,null,function*(){const t=B(n),r=e.batch.batchId;try{const s=yield RS(t.localStore,e);Kl(t,r,null),Hl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield On(t,s)}catch(s){yield Nn(s)}})}function dP(n,e,t){return p(this,null,function*(){const r=B(n);try{const s=yield function(o,c){const u=B(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return u.mutationQueue.lookupMutationBatch(l,c).next(m=>(q(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(l,m))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>u.localDocuments.getDocuments(l,d))})}(r.localStore,e);Kl(r,e,t),Hl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield On(r,s)}catch(s){yield Nn(s)}})}function Hl(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Kl(n,e,t){const r=B(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function is(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||gy(n,r)})}function gy(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(rs(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Wl(n))}function ju(n,e,t){for(const r of t)r instanceof dy?(n.Vu.addReference(r.key,e),fP(n,r)):r instanceof fy?(N(ps,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||gy(n,r.key)):U(19791,{wu:r})}function fP(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(N(ps,"New document in limbo: "+t),n.Iu.add(r),Wl(n))}function Wl(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(se.fromString(e)),r=n.fu.next();n.Au.set(r,new rP(t)),n.Ru=n.Ru.insert(t,r),Wa(n.remoteStore,new jt(ct(Bi(t.path)),r,"TargetPurposeLimboResolution",et.ce))}}function On(n,e,t){return p(this,null,function*(){const r=B(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{o.push(r.pu(u,e,t).then(l=>{var d;if((l||t)&&r.isPrimaryClient){const m=l?!l.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(l){s.push(l);const m=Vl.Is(u.targetId,l);i.push(m)}}))}),yield Promise.all(o),r.Pu.H_(s),yield function(u,l){return p(this,null,function*(){const d=B(u);try{yield d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>R.forEach(l,_=>R.forEach(_.Ts,A=>d.persistence.referenceDelegate.addReference(m,_.targetId,A)).next(()=>R.forEach(_.Es,A=>d.persistence.referenceDelegate.removeReference(m,_.targetId,A)))))}catch(m){if(!Dn(m))throw m;N(Ol,"Failed to update sequence numbers: "+m)}for(const m of l){const _=m.targetId;if(!m.fromCache){const A=d.vs.get(_),C=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(C);d.vs=d.vs.insert(_,V)}}})}(r.localStore,i))})}function pP(n,e){return p(this,null,function*(){const t=B(n);if(!t.currentUser.isEqual(e)){N(ps,"User change. New user:",e.toKey());const r=yield Q_(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new O(k.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield On(t,r.Ns)}})}function mP(n,e){const t=B(n),r=t.Au.get(e);if(r&&r.hu)return X().add(r.key);{let s=X();const i=t.Eu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function gP(n,e){return p(this,null,function*(){const t=B(n),r=yield Uu(t.localStore,e.query,!0),s=e.view.cu(r);return t.isPrimaryClient&&ju(t,e.targetId,s.au),s})}function _P(n,e){return p(this,null,function*(){const t=B(n);return X_(t.localStore,e).then(r=>On(t,r))})}function yP(n,e,t,r){return p(this,null,function*(){const s=B(n),i=yield function(c,u){const l=B(c),d=B(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",m=>d.Xn(m,u).next(_=>_?l.localDocuments.getDocuments(m,_):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?yield ds(s.remoteStore):t==="acknowledged"||t==="rejected"?(Kl(s,e,r||null),Hl(s,e),function(c,u){B(B(c).mutationQueue).nr(u)}(s.localStore,e)):U(6720,"Unknown batchState",{Su:t}),yield On(s,i)):N(ps,"Cannot apply mutation batch with id: "+e)})}function IP(n,e){return p(this,null,function*(){const t=B(n);if(Qa(t),Ql(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=yield vp(t,r.toArray());t.gu=!0,yield qu(t.remoteStore,!0);for(const i of s)Wa(t.remoteStore,i)}else if(e===!1&&t.gu!==!1){const r=[];let s=Promise.resolve();t.Eu.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(is(t,o),ns(t.localStore,o,!0))),rs(t.remoteStore,o)}),yield s,yield vp(t,r),function(o){const c=B(o);c.Au.forEach((u,l)=>{rs(c.remoteStore,l)}),c.Vu.zr(),c.Au=new Map,c.Ru=new ue(L.comparator)}(t),t.gu=!1,yield qu(t.remoteStore,!1)}})}function vp(n,e,t){return p(this,null,function*(){const r=B(n),s=[],i=[];for(const o of e){let c;const u=r.Eu.get(o);if(u&&u.length!==0){c=yield aa(r.localStore,ct(u[0]));for(const l of u){const d=r.Tu.get(l),m=yield gP(r,d);m.snapshot&&i.push(m.snapshot)}}else{const l=yield Y_(r.localStore,o);c=yield aa(r.localStore,l),yield Gl(r,_y(l),o,!1,c.resumeToken)}s.push(c)}return r.Pu.H_(i),s})}function _y(n){return Zg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function EP(n){return function(t){return B(B(t).persistence).hs()}(B(n).localStore)}function TP(n,e,t,r){return p(this,null,function*(){const s=B(n);if(s.gu)return void N(ps,"Ignoring unexpected query state notification.");const i=s.Eu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=yield X_(s.localStore,r_(i[0])),c=$i.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ee.EMPTY_BYTE_STRING);yield On(s,o,c);break}case"rejected":yield ns(s.localStore,e,!0),is(s,e,r);break;default:U(64155,t)}})}function wP(n,e,t){return p(this,null,function*(){const r=Qa(n);if(r.gu){for(const s of e){if(r.Eu.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){N(ps,"Adding an already active target "+s);continue}const i=yield Y_(r.localStore,s),o=yield aa(r.localStore,i);yield Gl(r,_y(i),o.targetId,!1,o.resumeToken),Wa(r.remoteStore,o)}for(const s of t)r.Eu.has(s)&&(yield ns(r.localStore,s,!1).then(()=>{rs(r.remoteStore,s),is(r,s)}).catch(Nn))}})}function Qa(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=my.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lP.bind(null,e),e.Pu.H_=ZS.bind(null,e.eventManager),e.Pu.yu=eP.bind(null,e.eventManager),e}function Ql(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dP.bind(null,e),e}class Si{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){this.serializer=Ha(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)})}Fu(e,t){return null}Mu(e,t){return null}vu(e){return W_(this.persistence,new K_,e.initialUser,this.serializer)}Cu(e){return new Nl(Ga.Vi,this.serializer)}Du(e){return new ry}terminate(){return p(this,null,function*(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}Si.provider={build:()=>new Si};class vP extends Si{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){q(this.persistence.referenceDelegate instanceof oa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new q_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new Nl(r=>oa.Vi(r,t),this.serializer)}}class Ja extends Si{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){yield Ft(Ja.prototype,this,"initialize").call(this,e),yield this.xu.initialize(this,e),yield Ql(this.xu.syncEngine),yield ds(this.xu.remoteStore),yield this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))})}vu(e){return W_(this.persistence,new K_,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new q_(r,e.asyncQueue,t)}Mu(e,t){const r=new PR(t,this.persistence);return new SR(e.asyncQueue,r)}Cu(e){const t=H_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new Dl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sy(),Fo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new ry}}class Jl extends Ja{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}initialize(e){return p(this,null,function*(){yield Ft(Jl.prototype,this,"initialize").call(this,e);const t=this.xu.syncEngine;this.sharedClientState instanceof Jc&&(this.sharedClientState.syncEngine={bo:yP.bind(null,t),Do:TP.bind(null,t),Co:wP.bind(null,t),hs:EP.bind(null,t),So:_P.bind(null,t)},yield this.sharedClientState.start()),yield this.persistence.zi(r=>p(this,null,function*(){yield IP(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))})}Du(e){const t=sy();if(!Jc.v(t))throw new O(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=H_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Jc(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Pi{initialize(e,t){return p(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pP.bind(null,this.syncEngine),yield qu(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new XS}()}createDatastore(e){const t=Ha(e.databaseInfo.databaseId),r=VS(e.databaseInfo);return US(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new BS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>wp(this.syncEngine,t,0),function(){return gp.v()?new gp:new kS}())}createSyncEngine(e,t){return function(s,i,o,c,u,l,d){const m=new sP(s,i,o,c,u,l);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return p(this,null,function*(){var e,t;yield function(s){return p(this,null,function*(){const i=B(s);N(hr,"RemoteStore shutting down."),i.Ia.add(5),yield zi(i),i.Aa.shutdown(),i.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()})}}Pi.provider={build:()=>new Pi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ie("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="FirestoreClient";class AP{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=ul.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,o=>p(this,null,function*(){N(Pn,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,o=>(N(Pn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>p(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function Xc(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),N(Pn,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(s=>p(this,null,function*(){r.isEqual(s)||(yield Q_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e})}function Ap(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield RP(n);N(Pn,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>yp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>yp(e.remoteStore,s)),n._onlineComponents=e})}function RP(n){return p(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Pn,"Using user provided OfflineComponentProvider");try{yield Xc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;sr("Error using user provided cache. Falling back to memory cache: "+t),yield Xc(n,new Si)}}else N(Pn,"Using default OfflineComponentProvider"),yield Xc(n,new vP(void 0));return n._offlineComponents})}function Xl(n){return p(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Pn,"Using user provided OnlineComponentProvider"),yield Ap(n,n._uninitializedComponentsProvider._online)):(N(Pn,"Using default OnlineComponentProvider"),yield Ap(n,new Pi))),n._onlineComponents})}function bP(n){return Xl(n).then(e=>e.syncEngine)}function SP(n){return Xl(n).then(e=>e.datastore)}function ha(n){return p(this,null,function*(){const e=yield Xl(n),t=e.eventManager;return t.onListen=iP.bind(null,e.syncEngine),t.onUnlisten=aP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cP.bind(null,e.syncEngine),t})}function PP(n,e,t,r){const s=new Yl(r),i=new zl(e,s,t);return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return ql(yield ha(n),i)})),()=>{s.Nu(),n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return $l(yield ha(n),i)}))}}function kP(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(i,o,c,u,l){const d=new Yl({next:_=>{d.Nu(),o.enqueueAndForget(()=>$l(i,m));const A=_.docs.has(c);!A&&_.fromCache?l.reject(new O(k.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&u&&u.source==="server"?l.reject(new O(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(_)},error:_=>l.reject(_)}),m=new zl(Bi(c.path),d,{includeMetadataChanges:!0,qa:!0});return ql(i,m)}(yield ha(n),n.asyncQueue,e,t,r)})),r.promise}function CP(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(i,o,c,u,l){const d=new Yl({next:_=>{d.Nu(),o.enqueueAndForget(()=>$l(i,m)),_.fromCache&&u.source==="server"?l.reject(new O(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(_)},error:_=>l.reject(_)}),m=new zl(c,d,{includeMetadataChanges:!0,qa:!0});return ql(i,m)}(yield ha(n),n.asyncQueue,e,t,r)})),r.promise}function NP(n,e,t){const r=new Tt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){try{const s=yield SP(n);r.resolve(function(o,c,u){return p(this,null,function*(){var V;const l=B(o),{request:d,gt:m,parent:_}=jb(l.serializer,gb(c),u);l.connection.qo||delete d.parent;const A=(yield l.jo("RunAggregationQuery",l.serializer.databaseId,_,d,1)).filter(D=>!!D.result);q(A.length===1,64727);const C=(V=A[0].result)==null?void 0:V.aggregateFields;return Object.keys(C).reduce((D,G)=>(D[m[G]]=C[G],D),{})})}(s,e,t))}catch(s){r.reject(s)}})),r.promise}function DP(n,e){const t=new Tt;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return uP(yield bP(n),e,t)})),t.promise}/**
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
 */function yy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="ComponentProvider",Rp=new Map;function OP(n,e,t,r,s){return new rb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,yy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firestore.googleapis.com",bp=!0;class Sp{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iy,this.ssl=bp}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:bp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=M_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<B_)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yy((r=e.experimentalLongPollingOptions)!=null?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ya{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fR;switch(r.type){case"firstParty":return new _R(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return p(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Rp.get(t);r&&(N(VP,"Removing Datastore"),Rp.delete(t),r.terminate())}(this),Promise.resolve()}}function xP(n,e,t,r={}){var l;n=Ye(n,Ya);const s=Cn(e),i=n._getSettings(),o=De(J({},i),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s&&_a(`https://${c}`),i.host!==Iy&&i.host!==c&&sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=De(J({},i),{host:c,ssl:s,emulatorOptions:r});if(!Gt(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Oe.MOCK_USER;else{d=um(r.mockUserToken,(l=n._app)==null?void 0:l.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new O(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Oe(_)}n._authCredentials=new pR(new gg(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new en(this.firestore,e,this._query)}}class _e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Li(t,_e._jsonSchema))return new _e(e,r||null,new L(se.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:Ae("string",_e._jsonSchemaVersion),referencePath:Ae("string")};class An extends en{constructor(e,t,r){super(e,t,Bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new L(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function sD(n,e,...t){if(n=z(n),yg("collection","path",e),n instanceof Ya){const r=se.fromString(e,...t);return _f(r),new An(n,null,r)}{if(!(n instanceof _e||n instanceof An))throw new O(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return _f(r),new An(n.firestore,null,r)}}function MP(n,e,...t){if(n=z(n),arguments.length===1&&(e=ul.newId()),yg("doc","path",e),n instanceof Ya){const r=se.fromString(e,...t);return gf(r),new _e(n,null,new L(r))}{if(!(n instanceof _e||n instanceof An))throw new O(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return gf(r),new _e(n.firestore,n instanceof An?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="AsyncQueue";class kp{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iy(this,"async_queue_retry"),this._c=()=>{const r=Fo();r&&N(Pp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Fo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Tt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}lc(){return p(this,null,function*(){if(this.Yu.length!==0){try{yield this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Dn(e))throw e;N(Pp,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}})}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ie("INTERNAL UNHANDLED ERROR: ",Cp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Fl.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:Cp(this.nc)})}verifyOperationInProgress(){}Tc(){return p(this,null,function*(){let e;do e=this.ac,yield e;while(e!==this.ac)})}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Cp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Mt extends Ya{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new kp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return p(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kp(e),this._firestoreClient=void 0,yield e}})}}function iD(n,e,t){t||(t=wi);const r=Lt(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Gt(i,e))return s;throw new O(k.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(k.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<B_)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Cn(e.host)&&_a(e.host),r.initialize({options:e,instanceIdentifier:t})}function oD(n,e){const t=typeof n=="object"?n:Di(),r=typeof n=="string"?n:e||wi,s=Lt(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=om("firestore");i&&xP(s,...i)}return s}function Gi(n){if(n._terminated)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LP(n),n._firestoreClient}function LP(n){var r,s,i,o;const e=n._freezeSettings(),t=OP(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new AP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(Ee.fromBase64String(e))}catch(t){throw new O(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Li(e,mt._jsonSchema))return mt.fromBase64String(e.bytes)}}mt._jsonSchemaVersion="firestore/bytes/1.0",mt._jsonSchema={type:Ae("string",mt._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(e){if(Li(e,Nt._jsonSchema))return new Nt(e.latitude,e.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:Ae("string",Nt._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class wt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Li(e,wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new wt(e.vectorValues);throw new O(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wt._jsonSchemaVersion="firestore/vectorValue/1.0",wt._jsonSchema={type:Ae("string",wt._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=/^__.*__$/;class FP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new hs(e,this.data,t,this.fieldTransforms)}}class Ey{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ty(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{dataSource:n})}}class Xa{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Xa(J(J({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return da(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Ty(this.dataSource)&&UP.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class BP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ha(e)}A(e,t,r,s=!1){return new Xa({dataSource:e,methodName:t,targetDoc:r,path:pe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Za(n){const e=n._freezeSettings(),t=Ha(n._databaseId);return new BP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wy(n,e,t,r,s,i={}){const o=n.A(i.merge||i.mergeFields?2:0,e,t,s);rh("Data must be an object, but it was:",o,r);const c=vy(r,o);let u,l;if(i.merge)u=new tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const _=dr(e,m,t);if(!o.contains(_))throw new O(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);by(d,_)||d.push(_)}u=new tt(d),l=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,l=o.fieldTransforms;return new FP(new Le(c),u,l)}class ec extends ms{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function qP(n,e,t){return new Xa({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class eh extends ms{_toFieldTransform(e){return new Ba(e.path,new Xr)}isEqual(e){return e instanceof eh}}class th extends ms{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=qP(this,e,!0),r=this.Sc.map(i=>gs(i,t)),s=new ar(r);return new Ba(e.path,s)}isEqual(e){return e instanceof th&&Gt(this.Sc,e.Sc)}}class nh extends ms{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new es(e.serializer,u_(e.serializer,this.bc));return new Ba(e.path,t)}isEqual(e){return e instanceof nh&&this.bc===e.bc}}function $P(n,e,t,r){const s=n.A(1,e,t);rh("Data must be an object, but it was:",s,r);const i=[],o=Le.empty();Vn(r,(u,l)=>{const d=Ry(e,u,t);l=z(l);const m=s.fc(d);if(l instanceof ec)i.push(d);else{const _=gs(l,m);_!=null&&(i.push(d),o.set(d,_))}});const c=new tt(i);return new Ey(o,c,s.fieldTransforms)}function jP(n,e,t,r,s,i){const o=n.A(1,e,t),c=[dr(e,r,t)],u=[s];if(i.length%2!=0)throw new O(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(dr(e,i[_])),u.push(i[_+1]);const l=[],d=Le.empty();for(let _=c.length-1;_>=0;--_)if(!by(l,c[_])){const A=c[_];let C=u[_];C=z(C);const V=o.fc(A);if(C instanceof ec)l.push(A);else{const D=gs(C,V);D!=null&&(l.push(A),d.set(A,D))}}const m=new tt(l);return new Ey(d,m,o.fieldTransforms)}function zP(n,e,t,r=!1){return gs(t,n.A(r?4:3,e))}function gs(n,e){if(Ay(n=z(n)))return rh("Unsupported field value:",e,n),vy(n,e);if(n instanceof ms)return function(r,s){if(!Ty(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=gs(c,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return u_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ie.fromDate(r);return{timestampValue:ts(s.serializer,i)}}if(r instanceof ie){const i=new ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ts(s.serializer,i)}}if(r instanceof Nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mt)return{bytesValue:E_(s.serializer,r._byteString)};if(r instanceof _e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wt)return function(o,c){const u=o instanceof wt?o.toArray():o;return{mapValue:{fields:{[_l]:{stringValue:yl},[Wr]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw c.yc("VectorValues must only contain numeric values.");return Tl(c.serializer,d)})}}}}}}(r,s);if(C_(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Ca(r)}`)}(n,e)}function vy(n,e){const t={};return Mg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vn(n,(r,s)=>{const i=gs(s,e.dc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ay(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof Nt||n instanceof mt||n instanceof _e||n instanceof ms||n instanceof wt||C_(n))}function rh(n,e,t){if(!Ay(t)||!Ig(t)){const r=Ca(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function dr(n,e,t){if((e=z(e))instanceof Zl)return e._internalPath;if(typeof e=="string")return Ry(n,e);throw da("Field path arguments must be of type string or ",n,!1,void 0,t)}const GP=new RegExp("[~\\*/\\[\\]]");function Ry(n,e,t){if(e.search(GP)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zl(...e.split("."))._internalPath}catch(r){throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function da(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new O(k.INVALID_ARGUMENT,c+n+u)}function by(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{convertValue(e,t="none"){switch(Rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Vn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Wr].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>de(o.doubleValue));return new wt(t)}convertGeoPoint(e){return new Nt(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ma(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ti(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);q(k_(r),9688,{name:e});const s=new ir(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||Ie(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class tc extends HP{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,t)}}function aD(){return new eh("serverTimestamp")}function cD(...n){return new th("arrayUnion",n)}function uD(n){return new nh("increment",n)}const Np="@firebase/firestore",Dp="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class KP{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class WP{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Le({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e,t;return(t=(e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)!=null?t:void 0}get(e){if(this._document){const t=this._document.data.field(dr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QP extends Sy{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}class ih extends sh{}function lD(n,e,...t){let r=[];e instanceof sh&&r.push(e),r=r.concat(t),function(i){const o=i.filter(u=>u instanceof oh).length,c=i.filter(u=>u instanceof nc).length;if(o>1||o>0&&c>0)throw new O(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class nc extends ih{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new nc(e,t,r)}_apply(e){const t=this._parse(e);return ky(e._query,t),new en(e.firestore,e.converter,Cu(e._query,t))}_parse(e){const t=Za(e.firestore);return function(i,o,c,u,l,d,m){let _;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new O(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){xp(m,d);const C=[];for(const V of m)C.push(Op(u,i,V));_={arrayValue:{values:C}}}else _=Op(u,i,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||xp(m,d),_=zP(c,o,m,d==="in"||d==="not-in");return te.create(l,d,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function hD(n,e,t){const r=e,s=dr("where",n);return nc._create(s,r,t)}class oh extends sh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new oh(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)ky(o,u),o=Cu(o,u)}(e._query,t),new en(e.firestore,e.converter,Cu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ah extends ih{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ah(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new O(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bi(i,o)}(e._query,this._field,this._direction);return new en(e.firestore,e.converter,_b(e._query,t))}}function dD(n,e="asc"){const t=e,r=dr("orderBy",n);return ah._create(r,t)}class ch extends ih{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ch(e,t,r)}_apply(e){return new en(e.firestore,e.converter,ea(e._query,this._limit,this._limitType))}}function fD(n){return AR("limit",n),ch._create("limit",n,"F")}function Op(n,e,t){if(typeof(t=z(t))=="string"){if(t==="")throw new O(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e_(e)&&t.indexOf("/")!==-1)throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!L.isDocumentKey(r))throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ai(n,new L(r))}if(t instanceof _e)return Ai(n,t._key);throw new O(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ca(t)}.`)}function xp(n,e){if(!Array.isArray(n)||n.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ky(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Cy(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}function JP(){return new KP("count")}/**
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
 */function pD(n){return YP(n,{count:JP()})}function YP(n,e){const t=Ye(n.firestore,Mt),r=Gi(t),s=tb(e,(i,o)=>new kb(o,i.aggregateType,i._internalFieldPath));return NP(r,n._query,s).then(i=>function(c,u,l){const d=new tc(c);return new WP(u,d,l)}(t,n,i))}class XP{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=tk(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function mD(n){return new XP(n)}class ZP{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Pi.provider,this._offlineComponentProvider={build:t=>new Ja(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class ek{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Pi.provider,this._offlineComponentProvider={build:t=>new Jl(t,e==null?void 0:e.cacheSizeBytes)}}}function tk(n){return new ZP(n==null?void 0:n.forceOwnership)}function gD(){return new ek}class Qs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zn extends Sy{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(dr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Zn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Zn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zn._jsonSchema={type:Ae("string",Zn._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Bo extends Zn{data(e={}){return super.data(e)}}class er{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Bo(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new Bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:nk(c.type),doc:u,oldIndex:l,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ul.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */er._jsonSchemaVersion="firestore/querySnapshot/1.0",er._jsonSchema={type:Ae("string",er._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(n){n=Ye(n,_e);const e=Ye(n.firestore,Mt),t=Gi(e);return kP(t,n._key).then(r=>Ny(e,n,r))}function yD(n){n=Ye(n,en);const e=Ye(n.firestore,Mt),t=Gi(e),r=new tc(e);return Py(n._query),CP(t,n._query).then(s=>new er(e,r,n,s))}function ID(n,e,t){n=Ye(n,_e);const r=Ye(n.firestore,Mt),s=Cy(n.converter,e,t),i=Za(r);return rc(r,[wy(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$e.none())])}function ED(n,e,t,...r){n=Ye(n,_e);const s=Ye(n.firestore,Mt),i=Za(s);let o;return o=typeof(e=z(e))=="string"||e instanceof Zl?jP(i,"updateDoc",n._key,e,t,r):$P(i,"updateDoc",n._key,e),rc(s,[o.toMutation(n._key,$e.exists(!0))])}function TD(n){return rc(Ye(n.firestore,Mt),[new $a(n._key,$e.none())])}function wD(n,e){const t=Ye(n.firestore,Mt),r=MP(n),s=Cy(n.converter,e),i=Za(n.firestore);return rc(t,[wy(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,$e.exists(!1))]).then(()=>r)}function vD(n,...e){var l,d,m;n=z(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Vp(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Vp(e[r])){const _=e[r];e[r]=(l=_.next)==null?void 0:l.bind(_),e[r+1]=(d=_.error)==null?void 0:d.bind(_),e[r+2]=(m=_.complete)==null?void 0:m.bind(_)}let i,o,c;if(n instanceof _e)o=Ye(n.firestore,Mt),c=Bi(n._key.path),i={next:_=>{e[r]&&e[r](Ny(o,n,_))},error:e[r+1],complete:e[r+2]};else{const _=Ye(n,en);o=Ye(_.firestore,Mt),c=_._query;const A=new tc(o);i={next:C=>{e[r]&&e[r](new er(o,A,_,C))},error:e[r+1],complete:e[r+2]},Py(n._query)}const u=Gi(o);return PP(u,c,s,i)}function rc(n,e){const t=Gi(n);return DP(t,e)}function Ny(n,e,t){const r=t.docs.get(e._key),s=new tc(n);return new Zn(n,s,e._key,r,new Qs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){dR(_r),ut(new st("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Mt(new mR(r.getProvider("auth-internal")),new yR(o,r.getProvider("app-check-internal")),sb(o,s),o);return i=J({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Qe(Np,Dp,e),Qe(Np,Dp,"esm2020")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map,Dy={activated:!1,tokenObservers:[]},rk={initialized:!1,enabled:!1};function be(n){return zu.get(n)||J({},Dy)}function sk(n,e){return zu.set(n,e),zu.get(n)}function sc(){return rk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="https://content-firebaseappcheck.googleapis.com/v1",ik="exchangeRecaptchaV3Token",ok="exchangeDebugToken",Mp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},ak=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,r,s,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}process(e){return p(this,null,function*(){this.stop();try{this.pending=new hi,this.pending.promise.catch(t=>{}),yield uk(this.getNextRun(e)),this.pending.resolve(),yield this.pending.promise,this.pending=new hi,this.pending.promise.catch(t=>{}),yield this.operation(),this.pending.resolve(),yield this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}})}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function uk(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},nt=new kn("appCheck","AppCheck",lk);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n=!1){var e;return n?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function uh(n){if(!be(n).activated)throw nt.create("use-before-activation",{appName:n.name})}function Oy(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),s=Math.floor((e-t*3600*24-r*3600)/60),i=e-t*3600*24-r*3600-s*60;let o="";return t&&(o+=To(t)+"d:"),r&&(o+=To(r)+"h:"),o+=To(s)+"m:"+To(i)+"s",o}function To(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(r,s){return p(this,arguments,function*({url:n,body:e},t){const i={"Content-Type":"application/json"},o=t.getImmediate({optional:!0});if(o){const A=yield o.getHeartbeatsHeader();A&&(i["X-Firebase-Client"]=A)}const c={method:"POST",body:JSON.stringify(e),headers:i};let u;try{u=yield fetch(n,c)}catch(A){throw nt.create("fetch-network-error",{originalErrorMessage:A==null?void 0:A.message})}if(u.status!==200)throw nt.create("fetch-status-error",{httpStatus:u.status});let l;try{l=yield u.json()}catch(A){throw nt.create("fetch-parse-error",{originalErrorMessage:A==null?void 0:A.message})}const d=l.ttl.match(/^([\d.]+)(s)$/);if(!d||!d[2]||isNaN(Number(d[1])))throw nt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const m=Number(d[1])*1e3,_=Date.now();return{token:l.token,expireTimeMillis:_+m,issuedAtTimeMillis:_}})}function hk(n,e){const{projectId:t,appId:r,apiKey:s}=n.options;return{url:`${Vy}/projects/${t}/apps/${r}:${ik}?key=${s}`,body:{recaptcha_v3_token:e}}}function xy(n,e){const{projectId:t,appId:r,apiKey:s}=n.options;return{url:`${Vy}/projects/${t}/apps/${r}:${ok}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="firebase-app-check-database",fk=1,ki="firebase-app-check-store",My="debug-token";let wo=null;function Ly(){return wo||(wo=new Promise((n,e)=>{try{const t=indexedDB.open(dk,fk);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var s;e(nt.create("storage-open",{originalErrorMessage:(s=r.target.error)==null?void 0:s.message}))},t.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(ki,{keyPath:"compositeKey"})}}}catch(t){e(nt.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),wo)}function pk(n){return Fy(By(n))}function mk(n,e){return Uy(By(n),e)}function gk(n){return Uy(My,n)}function _k(){return Fy(My)}function Uy(n,e){return p(this,null,function*(){const r=(yield Ly()).transaction(ki,"readwrite"),i=r.objectStore(ki).put({compositeKey:n,value:e});return new Promise((o,c)=>{i.onsuccess=u=>{o()},r.onerror=u=>{var l;c(nt.create("storage-set",{originalErrorMessage:(l=u.target.error)==null?void 0:l.message}))}})})}function Fy(n){return p(this,null,function*(){const t=(yield Ly()).transaction(ki,"readonly"),s=t.objectStore(ki).get(n);return new Promise((i,o)=>{s.onsuccess=c=>{const u=c.target.result;i(u?u.value:void 0)},t.onerror=c=>{var u;o(nt.create("storage-get",{originalErrorMessage:(u=c.target.error)==null?void 0:u.message}))}})})}function By(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new ya("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(n){return p(this,null,function*(){if(Ni()){let e;try{e=yield pk(n)}catch(t){In.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}})}function Zc(n,e){return Ni()?mk(n,e).catch(t=>{In.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}function Ik(){return p(this,null,function*(){let n;try{n=yield _k()}catch(e){}if(n)return n;{const e=crypto.randomUUID();return gk(e).catch(t=>In.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){return sc().enabled}function dh(){return p(this,null,function*(){const n=sc();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)})}function Ek(){const n=Qu(),e=sc();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new hi;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(Ik())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={error:"UNKNOWN_ERROR"};function wk(n){return Wu.encodeString(JSON.stringify(n),!1)}function Gu(n,e=!1,t=!1){return p(this,null,function*(){const r=n.app;uh(r);const s=be(r);let i=s.token,o;if(i&&!Vr(i)&&(s.token=void 0,i=void 0),!i){const l=yield s.cachedTokenPromise;l&&(Vr(l)?i=l:yield Zc(r,void 0))}if(!e&&i&&Vr(i))return{token:i.token};let c=!1;if(hh())try{const l=yield dh();s.exchangeTokenPromise||(s.exchangeTokenPromise=lh(xy(r,l),n.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),c=!0);const d=yield s.exchangeTokenPromise;return yield Zc(r,d),s.token=d,{token:d.token}}catch(l){return l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?In.warn(l.message):t&&In.error(l),eu(l)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),c=!0),i=yield be(r).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?In.warn(l.message):t&&In.error(l),o=l}let u;return i?o?Vr(i)?u={token:i.token,internalError:o}:u=eu(o):(u={token:i.token},s.token=i,yield Zc(r,i)):u=eu(o),c&&jy(r,u),u})}function vk(n){return p(this,null,function*(){const e=n.app;uh(e);const{provider:t}=be(e);if(hh()){const r=yield dh(),{token:s}=yield lh(xy(e,r),n.heartbeatServiceProvider);return{token:s}}else{const{token:r}=yield t.getToken();return{token:r}}})}function qy(n,e,t,r){const{app:s}=n,i=be(s),o={next:t,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Vr(i.token)){const c=i.token;Promise.resolve().then(()=>{t({token:c.token}),Up(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Up(n))}function $y(n,e){const t=be(n),r=t.tokenObservers.filter(s=>s.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function Up(n){const{app:e}=n,t=be(e);let r=t.tokenRefresher;r||(r=Ak(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function Ak(n){const{app:e}=n;return new ck(()=>p(this,null,function*(){const t=be(e);let r;if(t.token?r=yield Gu(n,!0):r=yield Gu(n),r.error)throw r.error;if(r.internalError)throw r.internalError}),()=>!0,()=>{const t=be(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Mp.RETRIAL_MIN_WAIT,Mp.RETRIAL_MAX_WAIT)}function jy(n,e){const t=be(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch(s){}}function Vr(n){return n.expireTimeMillis-Date.now()>0}function eu(n){return{token:wk(Tk),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=be(this.app);for(const t of e)$y(this.app,t.next);return Promise.resolve()}}function bk(n,e){return new Rk(n,e)}function Sk(n){return{getToken:e=>Gu(n,e),getLimitedUseToken:()=>vk(n),addTokenListener:e=>qy(n,"INTERNAL",e),removeTokenListener:e=>$y(n.app,e)}}const Pk="@firebase/app-check",kk="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="https://www.google.com/recaptcha/api.js";function Nk(n,e){const t=new hi,r=be(n);r.reCAPTCHAState={initialized:t};const s=Dk(n),i=Lp(!1);return i?Fp(n,e,i,s,t):xk(()=>{const o=Lp(!1);if(!o)throw new Error("no recaptcha");Fp(n,e,o,s,t)}),t.promise}function Fp(n,e,t,r,s){t.ready(()=>{Ok(n,e,t,r),s.resolve(t)})}function Dk(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}function Vk(n){return p(this,null,function*(){uh(n);const t=yield be(n).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=be(n).reCAPTCHAState;t.ready(()=>{r(t.execute(i.widgetId,{action:"fire_app_check"}))})})})}function Ok(n,e,t,r){const s=t.render(r,{sitekey:e,size:"invisible",callback:()=>{be(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{be(n).reCAPTCHAState.succeeded=!1}}),i=be(n);i.reCAPTCHAState=De(J({},i.reCAPTCHAState),{widgetId:s})}function xk(n){const e=document.createElement("script");e.src=Ck,e.onload=n,document.head.appendChild(e)}/**
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
 */class zy{constructor(e){this._siteKey=e,this._throttleData=null}getToken(){return p(this,null,function*(){var r,s,i;Lk(this._throttleData);const e=yield Vk(this._app).catch(o=>{throw nt.create("recaptcha-error")});if(!((r=be(this._app).reCAPTCHAState)!=null&&r.succeeded))throw nt.create("recaptcha-error");let t;try{t=yield lh(hk(this._app,e),this._heartbeatServiceProvider)}catch(o){throw(s=o.code)!=null&&s.includes("fetch-status-error")?(this._throttleData=Mk(Number((i=o.customData)==null?void 0:i.httpStatus),this._throttleData),nt.create("initial-throttle",{time:Oy(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,t})}initialize(e){this._app=e,this._heartbeatServiceProvider=Lt(e,"heartbeat"),Nk(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof zy?this._siteKey===e._siteKey:!1}}function Mk(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+ak,httpStatus:n};{const t=e?e.backoffCount:0,r=XE(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function Lk(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw nt.create("throttled",{time:Oy(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(n=Di(),e){n=z(n);const t=Lt(n,"app-check");if(sc().initialized||Ek(),hh()&&dh().then(s=>{}),t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw nt.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return Uk(n,e.provider,e.isTokenAutoRefreshEnabled),be(n).isTokenAutoRefreshEnabled&&qy(r,"INTERNAL",()=>{}),r}function Uk(n,e,t=!1){const r=sk(n,J({},Dy));r.activated=!0,r.provider=e,r.cachedTokenPromise=yk(n).then(s=>(s&&Vr(s)&&(r.token=s,jy(n,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&In.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(n)}const Fk="app-check",Bp="app-check-internal";function Bk(){ut(new st(Fk,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return bk(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Bp).initialize()})),ut(new st(Bp,n=>{const e=n.getProvider("app-check").getImmediate();return Sk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qe(Pk,kk)}Bk();var Or;(function(n){n.IndexedDbLocal="INDEXED_DB_LOCAL",n.InMemory="IN_MEMORY",n.BrowserLocal="BROWSER_LOCAL",n.BrowserSession="BROWSER_SESSION"})(Or||(Or={}));var pn;(function(n){n.APPLE="apple.com",n.FACEBOOK="facebook.com",n.GAME_CENTER="gc.apple.com",n.GITHUB="github.com",n.GOOGLE="google.com",n.MICROSOFT="microsoft.com",n.PLAY_GAMES="playgames.google.com",n.TWITTER="twitter.com",n.YAHOO="yahoo.com",n.PASSWORD="password",n.PHONE="phone"})(pn||(pn={}));const RD=RE("FirebaseAuthentication",{web:()=>bE(()=>Promise.resolve().then(()=>XN),void 0).then(n=>new n.FirebaseAuthenticationWeb)});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="firebasestorage.googleapis.com",Hy="storageBucket",qk=2*60*1e3,$k=10*60*1e3,jk=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends vt{constructor(e,t,r=0){super(tu(e),`Firebase Storage: ${t} (${tu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var le;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(le||(le={}));function tu(n){return"storage/"+n}function fh(){const n="An unknown error occurred, please check the error payload for server response.";return new fe(le.UNKNOWN,n)}function zk(n){return new fe(le.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Gk(n){return new fe(le.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Hk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(le.UNAUTHENTICATED,n)}function Kk(){return new fe(le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wk(n){return new fe(le.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Ky(){return new fe(le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wy(){return new fe(le.CANCELED,"User canceled the upload/download.")}function Qk(n){return new fe(le.INVALID_URL,"Invalid URL '"+n+"'.")}function Jk(n){return new fe(le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Yk(){return new fe(le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hy+"' property when initializing the app?")}function Qy(){return new fe(le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Xk(){return new fe(le.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Zk(){return new fe(le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function eC(n){return new fe(le.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fa(n){return new fe(le.INVALID_ARGUMENT,n)}function Jy(){return new fe(le.APP_DELETED,"The Firebase app was deleted.")}function Yy(n){return new fe(le.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function li(n,e){return new fe(le.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function qs(n){throw new fe(le.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=je.makeFromUrl(e,t)}catch(s){return new je(e,"")}if(r.path==="")return r;throw Jk(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function l(H){H.path_=decodeURIComponent(H.path)}const d="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${d}/b/${s}/o${_}`,"i"),C={bucket:1,path:3},V=t===Gy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",G=new RegExp(`^https?://${V}/${s}/${D}`,"i"),F=[{regex:c,indices:u,postModify:i},{regex:A,indices:C,postModify:l},{regex:G,indices:{bucket:1,path:2},postModify:l}];for(let H=0;H<F.length;H++){const W=F[H],Q=W.regex.exec(e);if(Q){const T=Q[W.indices.bucket];let y=Q[W.indices.path];y||(y=""),r=new je(T,y),W.postModify(r);break}}if(r==null)throw Qk(e);return r}}class tC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let l=!1;function d(...D){l||(l=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,n(A,u())},D)}function _(){i&&clearTimeout(i)}function A(D,...G){if(l){_();return}if(D){_(),d.call(null,D,...G);return}if(u()||o){_(),d.call(null,D,...G);return}r<64&&(r*=2);let F;c===1?(c=2,F=0):F=(r+Math.random())*1e3,m(F)}let C=!1;function V(D){C||(C=!0,_(),!l&&(s!==null?(D||(c=2),clearTimeout(s),m(0)):D||(c=1)))}return m(0),i=setTimeout(()=>{o=!0,V(!0)},t),V}function rC(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(n){return n!==void 0}function iC(n){return typeof n=="function"}function oC(n){return typeof n=="object"&&!Array.isArray(n)}function ic(n){return typeof n=="string"||n instanceof String}function qp(n){return ph()&&n instanceof Blob}function ph(){return typeof Blob!="undefined"}function Hu(n,e,t,r){if(r<e)throw fa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw fa(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Xy(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var tr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(tr||(tr={}));/**
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
 */function Zy(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t,r,s,i,o,c,u,l,d,m,_=!0,A=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=m,this.retry=_,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,V)=>{this.resolve_=C,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new vo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,l=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===tr.NO_ERROR,u=i.getStatus();if(!c||Zy(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===tr.ABORT;r(!1,new vo(!1,null,d));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new vo(l,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());sC(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=fh();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Jy():Wy();o(u)}else{const u=Ky();o(u)}};this.canceled_?t(!1,new vo(!1,null,!0)):this.backoffId_=nC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function cC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function uC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function lC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function hC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function dC(n,e,t,r,s,i,o=!0,c=!1){const u=Xy(n.urlParams),l=n.url+u,d=Object.assign({},n.headers);return lC(d,e),cC(d,t),uC(d,i),hC(d,r),new aC(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function pC(...n){const e=fC();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ph())return new Blob(n);throw new fe(le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mC(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function gC(n){if(typeof atob=="undefined")throw eC("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nu{constructor(e,t){this.data=e,this.contentType=t||null}}function mh(n,e){switch(n){case gt.RAW:return new nu(eI(e));case gt.BASE64:case gt.BASE64URL:return new nu(tI(n,e));case gt.DATA_URL:return new nu(yC(e),IC(e))}throw fh()}function eI(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _C(n){let e;try{e=decodeURIComponent(n)}catch(t){throw li(gt.DATA_URL,"Malformed data URL.")}return eI(e)}function tI(n,e){switch(n){case gt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw li(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case gt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw li(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=gC(e)}catch(s){throw s.message.includes("polyfill")?s:li(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class nI{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw li(gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=EC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yC(n){const e=new nI(n);return e.base64?tI(gt.BASE64,e.rest):_C(e.rest)}function IC(n){return new nI(n).contentType}function EC(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){let r=0,s="";qp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(qp(this.data_)){const r=this.data_,s=mC(r,e,t);return s===null?null:new Pt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Pt(r,!0)}}static getBlob(...e){if(ph()){const t=e.map(r=>r instanceof Pt?r.data_:r);return new Pt(pC.apply(null,t))}else{const t=e.map(o=>ic(o)?mh(gt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new Pt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){let e;try{e=JSON.parse(n)}catch(t){return null}return oC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function wC(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function rI(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n,e){return e}class Ke{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||vC}}let Ao=null;function AC(n){return!ic(n)||n.length<2?n:rI(n)}function Hi(){if(Ao)return Ao;const n=[];n.push(new Ke("bucket")),n.push(new Ke("generation")),n.push(new Ke("metageneration")),n.push(new Ke("name","fullPath",!0));function e(i,o){return AC(o)}const t=new Ke("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new Ke("size");return s.xform=r,n.push(s),n.push(new Ke("timeCreated")),n.push(new Ke("updated")),n.push(new Ke("md5Hash",null,!0)),n.push(new Ke("cacheControl",null,!0)),n.push(new Ke("contentDisposition",null,!0)),n.push(new Ke("contentEncoding",null,!0)),n.push(new Ke("contentLanguage",null,!0)),n.push(new Ke("contentType",null,!0)),n.push(new Ke("metadata","customMetadata",!0)),Ao=n,Ao}function RC(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new je(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function bC(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return RC(r,n),r}function sI(n,e,t){const r=gh(e);return r===null?null:bC(n,r,t)}function SC(n,e,t,r){const s=gh(e);if(s===null||!ic(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const d=n.bucket,m=n.fullPath,_="/b/"+o(d)+"/o/"+o(m),A=tn(_,t,r),C=Xy({alt:"media",token:l});return A+C})[0]}function _h(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="prefixes",jp="items";function PC(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[$p])for(const s of t[$p]){const i=s.replace(/\/$/,""),o=n._makeStorageReference(new je(e,i));r.prefixes.push(o)}if(t[jp])for(const s of t[jp]){const i=n._makeStorageReference(new je(e,s.name));r.items.push(i)}return r}function kC(n,e,t){const r=gh(t);return r===null?null:PC(n,e,r)}class Ut{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n){if(!n)throw fh()}function oc(n,e){function t(r,s){const i=sI(n,s,e);return Dt(i!==null),i}return t}function CC(n,e){function t(r,s){const i=kC(n,e,s);return Dt(i!==null),i}return t}function NC(n,e){function t(r,s){const i=sI(n,s,e);return Dt(i!==null),SC(i,s,n.host,n._protocol)}return t}function _s(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Kk():s=Hk():t.getStatus()===402?s=Gk(n.bucket):t.getStatus()===403?s=Wk(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ki(n){const e=_s(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=zk(n.path)),i.serverResponse=s.serverResponse,i}return t}function iI(n,e,t){const r=e.fullServerUrl(),s=tn(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new Ut(s,i,oc(n,t),o);return c.errorHandler=Ki(e),c}function DC(n,e,t,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",t&&t.length>0&&(i.delimiter=t),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),c=tn(o,n.host,n._protocol),u="GET",l=n.maxOperationRetryTime,d=new Ut(c,u,CC(n,e.bucket),l);return d.urlParams=i,d.errorHandler=_s(e),d}function oI(n,e,t){const r=e.fullServerUrl(),s=tn(r,n.host,n._protocol)+"?alt=media",i="GET",o=n.maxOperationRetryTime,c=new Ut(s,i,(u,l)=>l,o);return c.errorHandler=Ki(e),t!==void 0&&(c.headers.Range=`bytes=0-${t}`,c.successCodes=[200,206]),c}function VC(n,e,t){const r=e.fullServerUrl(),s=tn(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,c=new Ut(s,i,NC(n,t),o);return c.errorHandler=Ki(e),c}function OC(n,e,t,r){const s=e.fullServerUrl(),i=tn(s,n.host,n._protocol),o="PATCH",c=_h(t,r),u={"Content-Type":"application/json; charset=utf-8"},l=n.maxOperationRetryTime,d=new Ut(i,o,oc(n,r),l);return d.headers=u,d.body=c,d.errorHandler=Ki(e),d}function xC(n,e){const t=e.fullServerUrl(),r=tn(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function o(u,l){}const c=new Ut(r,s,o,i);return c.successCodes=[200,204],c.errorHandler=Ki(e),c}function MC(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function aI(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=MC(null,e)),r}function cI(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let F="";for(let H=0;H<2;H++)F=F+Math.random().toString().slice(2);return F}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const l=aI(e,r,s),d=_h(l,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,_=`\r
--`+u+"--",A=Pt.getBlob(m,r,_);if(A===null)throw Qy();const C={name:l.fullPath},V=tn(i,n.host,n._protocol),D="POST",G=n.maxUploadRetryTime,$=new Ut(V,D,oc(n,t),G);return $.urlParams=C,$.headers=o,$.body=A.uploadData(),$.errorHandler=_s(e),$}class pa{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function yh(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch(s){Dt(!1)}return Dt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function LC(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o=aI(e,r,s),c={name:o.fullPath},u=tn(i,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=_h(o,t),_=n.maxUploadRetryTime;function A(V){yh(V);let D;try{D=V.getResponseHeader("X-Goog-Upload-URL")}catch(G){Dt(!1)}return Dt(ic(D)),D}const C=new Ut(u,l,A,_);return C.urlParams=c,C.headers=d,C.body=m,C.errorHandler=_s(e),C}function UC(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const d=yh(l,["active","final"]);let m=null;try{m=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch(A){Dt(!1)}m||Dt(!1);const _=Number(m);return Dt(!isNaN(_)),new pa(_,r.size(),d==="final")}const o="POST",c=n.maxUploadRetryTime,u=new Ut(t,o,i,c);return u.headers=s,u.errorHandler=_s(e),u}const zp=256*1024;function FC(n,e,t,r,s,i,o,c){const u=new pa(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw Xk();const l=u.total-u.current;let d=l;s>0&&(d=Math.min(d,s));const m=u.current,_=m+d;let A="";d===0?A="finalize":l===d?A="upload, finalize":A="upload";const C={"X-Goog-Upload-Command":A,"X-Goog-Upload-Offset":`${u.current}`},V=r.slice(m,_);if(V===null)throw Qy();function D(H,W){const Q=yh(H,["active","final"]),T=u.current+d,y=r.size();let E;return Q==="final"?E=oc(e,i)(H,W):E=null,new pa(T,y,Q==="final",E)}const G="POST",$=e.maxUploadRetryTime,F=new Ut(t,G,D,$);return F.headers=C,F.body=V.uploadData(),F.progressCallback=c||null,F.errorHandler=_s(n),F}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC={STATE_CHANGED:"state_changed"},We={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ru(n){switch(n){case"running":case"pausing":case"canceling":return We.RUNNING;case"paused":return We.PAUSED;case"success":return We.SUCCESS;case"canceled":return We.CANCELED;case"error":return We.ERROR;default:return We.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,t,r){if(iC(e)||t!=null||r!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=r!=null?r:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Ih{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=tr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=tr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=tr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw qs("cannot .send() more than once");if(Cn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $C extends Ih{initXhr(){this.xhr_.responseType="text"}}function It(){return new $C}class jC extends Ih{initXhr(){this.xhr_.responseType="arraybuffer"}}function zC(){return new jC}class GC extends Ih{initXhr(){this.xhr_.responseType="blob"}}function HC(){return new GC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Hi(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(le.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Zy(s.status,[]))if(i)s=Ky();else{this.sleepTime=Math.max(this.sleepTime*2,jk),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(le.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=LC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,It,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=UC(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,It,t,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zp*this._chunkMultiplier,t=new pa(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=FC(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const c=this._ref.storage._makeRequest(o,It,s,i,!1);this._request=c,c.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=iI(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,It,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=cI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,It,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Wy(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ru(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new qC(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ru(this._state)){case We.SUCCESS:Pr(this._resolve.bind(null,this.snapshot))();break;case We.CANCELED:case We.ERROR:const t=this._reject;Pr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ru(this._state)){case We.RUNNING:case We.PAUSED:e.next&&Pr(e.next.bind(e,this.snapshot))();break;case We.SUCCESS:e.complete&&Pr(e.complete.bind(e))();break;case We.CANCELED:case We.ERROR:e.error&&Pr(e.error.bind(e,this._error))();break;default:e.error&&Pr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this._service=e,t instanceof je?this._location=t:this._location=je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fr(e,t)}get root(){const e=new je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rI(this._location.path)}get storage(){return this._service}get parent(){const e=TC(this._location.path);if(e===null)return null;const t=new je(this._location.bucket,e);return new fr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Yy(e)}}function KC(n,e){n._throwIfRoot("getBytes");const t=oI(n.storage,n._location,e);return n.storage.makeRequestWithTokens(t,zC).then(r=>e!==void 0?r.slice(0,e):r)}function WC(n,e){n._throwIfRoot("getBlob");const t=oI(n.storage,n._location,e);return n.storage.makeRequestWithTokens(t,HC).then(r=>e!==void 0?r.slice(0,e):r)}function lI(n,e,t){n._throwIfRoot("uploadBytes");const r=cI(n.storage,n._location,Hi(),new Pt(e,!0),t);return n.storage.makeRequestWithTokens(r,It).then(s=>({metadata:s,ref:n}))}function QC(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new uI(n,new Pt(e),t)}function JC(n,e,t=gt.RAW,r){n._throwIfRoot("uploadString");const s=mh(t,e),i=J({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),lI(n,s.data,i)}function YC(n){const e={prefixes:[],items:[]};return hI(n,e).then(()=>e)}function hI(n,e,t){return p(this,null,function*(){const s=yield dI(n,{pageToken:t});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&(yield hI(n,e,s.nextPageToken))})}function dI(n,e){e!=null&&typeof e.maxResults=="number"&&Hu("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=DC(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,It)}function XC(n){n._throwIfRoot("getMetadata");const e=iI(n.storage,n._location,Hi());return n.storage.makeRequestWithTokens(e,It)}function ZC(n,e){n._throwIfRoot("updateMetadata");const t=OC(n.storage,n._location,e,Hi());return n.storage.makeRequestWithTokens(t,It)}function e0(n){n._throwIfRoot("getDownloadURL");const e=VC(n.storage,n._location,Hi());return n.storage.makeRequestWithTokens(e,It).then(t=>{if(t===null)throw Zk();return t})}function t0(n){n._throwIfRoot("deleteObject");const e=xC(n.storage,n._location);return n.storage.makeRequestWithTokens(e,It)}function fI(n,e){const t=wC(n._location.path,e),r=new je(n._location.bucket,t);return new fr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(n){return/^[A-Za-z]+:\/\//.test(n)}function r0(n,e){return new fr(n,e)}function pI(n,e){if(n instanceof Eh){const t=n;if(t._bucket==null)throw Yk();const r=new fr(t,t._bucket);return e!=null?pI(r,e):r}else return e!==void 0?fI(n,e):n}function s0(n,e){if(e&&n0(e)){if(n instanceof Eh)return r0(n,e);throw fa("To use ref(service, url), the first argument must be a Storage instance.")}else return pI(n,e)}function Gp(n,e){const t=e==null?void 0:e[Hy];return t==null?null:je.makeFromBucketSpec(t,n)}function i0(n,e,t,r={}){n.host=`${e}:${t}`;const s=Cn(e);s&&_a(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:um(i,n.app.options.projectId))}class Eh{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Gy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qk,this._maxUploadRetryTime=$k,this._requests=new Set,s!=null?this._bucket=je.makeFromBucketSpec(s,this._host):this._bucket=Gp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=je.makeFromBucketSpec(this._url,e):this._bucket=Gp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return p(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return p(this,null,function*(){if(ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new tC(Jy());{const o=dC(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}makeRequestWithTokens(e,t){return p(this,null,function*(){const[r,s]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()})}}const Hp="@firebase/storage",Kp="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(n,e){return n=z(n),KC(n,e)}function a0(n,e,t){return n=z(n),lI(n,e,t)}function c0(n,e,t,r){return n=z(n),JC(n,e,t,r)}function u0(n,e,t){return n=z(n),QC(n,e,t)}function l0(n){return n=z(n),XC(n)}function h0(n,e){return n=z(n),ZC(n,e)}function d0(n,e){return n=z(n),dI(n,e)}function f0(n){return n=z(n),YC(n)}function p0(n){return n=z(n),e0(n)}function m0(n){return n=z(n),t0(n)}function g0(n,e){return n=z(n),s0(n,e)}function _0(n,e){return fI(n,e)}function y0(n=Di(),e){n=z(n);const r=Lt(n,mI).getImmediate({identifier:e}),s=om("storage");return s&&gI(r,...s),r}function gI(n,e,t,r={}){i0(n,e,t,r)}/**
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
 */function I0(n,e){return n=z(n),WC(n,e)}function E0(n,e){throw new Error("getStream() is only supported by NodeJS builds")}function T0(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Eh(t,r,s,e,_r)}function w0(){ut(new st(mI,T0,"PUBLIC").setMultipleInstances(!0)),Qe(Hp,Kp,""),Qe(Hp,Kp,"esm2020")}w0();const bD=Object.freeze(Object.defineProperty({__proto__:null,StorageError:fe,get StorageErrorCode(){return le},StringFormat:gt,_FbsBlob:Pt,_Location:je,_TaskEvent:BC,_TaskState:We,_UploadTask:uI,_dataFromString:mh,_getChild:_0,_invalidArgument:fa,_invalidRootOperation:Yy,connectStorageEmulator:gI,deleteObject:m0,getBlob:I0,getBytes:o0,getDownloadURL:p0,getMetadata:l0,getStorage:y0,getStream:E0,list:d0,listAll:f0,ref:g0,updateMetadata:h0,uploadBytes:a0,uploadBytesResumable:u0,uploadString:c0},Symbol.toStringTag,{value:"Module"})),_I="@firebase/installations",Th="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=1e4,II=`w:${Th}`,EI="FIS_v2",v0="https://firebaseinstallations.googleapis.com/v1",A0=60*60*1e3,R0="installations",b0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pr=new kn(R0,b0,S0);function TI(n){return n instanceof vt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI({projectId:n}){return`${v0}/projects/${n}/installations`}function vI(n){return{token:n.token,requestStatus:2,expiresIn:k0(n.expiresIn),creationTime:Date.now()}}function AI(n,e){return p(this,null,function*(){const r=(yield e.json()).error;return pr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function RI({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function P0(n,{refreshToken:e}){const t=RI(n);return t.append("Authorization",C0(e)),t}function bI(n){return p(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function k0(n){return Number(n.replace("s","000"))}function C0(n){return`${EI} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(r,s){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=wI(n),o=RI(n),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={fid:t,authVersion:EI,appId:n.appId,sdkVersion:II},l={method:"POST",headers:o,body:JSON.stringify(u)},d=yield bI(()=>fetch(i,l));if(d.ok){const m=yield d.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:vI(m.authToken)}}else throw yield AI("Create Installation",d)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=/^[cdef][\w-]{21}$/,Ku="";function O0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=x0(n);return V0.test(t)?t:Ku}catch(n){return Ku}}function x0(n){return D0(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Map;function kI(n,e){const t=ac(n);CI(t,e),M0(t,e)}function CI(n,e){const t=PI.get(n);if(t)for(const r of t)r(e)}function M0(n,e){const t=L0();t&&t.postMessage({key:n,fid:e}),U0()}let Qn=null;function L0(){return!Qn&&"BroadcastChannel"in self&&(Qn=new BroadcastChannel("[Firebase] FID Change"),Qn.onmessage=n=>{CI(n.data.key,n.data.fid)}),Qn}function U0(){PI.size===0&&Qn&&(Qn.close(),Qn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="firebase-installations-database",B0=1,mr="firebase-installations-store";let su=null;function wh(){return su||(su=Ia(F0,B0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(mr)}}})),su}function ma(n,e){return p(this,null,function*(){const t=ac(n),s=(yield wh()).transaction(mr,"readwrite"),i=s.objectStore(mr),o=yield i.get(t);return yield i.put(e,t),yield s.done,(!o||o.fid!==e.fid)&&kI(n,e.fid),e})}function NI(n){return p(this,null,function*(){const e=ac(n),r=(yield wh()).transaction(mr,"readwrite");yield r.objectStore(mr).delete(e),yield r.done})}function cc(n,e){return p(this,null,function*(){const t=ac(n),s=(yield wh()).transaction(mr,"readwrite"),i=s.objectStore(mr),o=yield i.get(t),c=e(o);return c===void 0?yield i.delete(t):yield i.put(c,t),yield s.done,c&&(!o||o.fid!==c.fid)&&kI(n,c.fid),c})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n){return p(this,null,function*(){let e;const t=yield cc(n.appConfig,r=>{const s=q0(r),i=$0(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ku?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function q0(n){const e=n||{fid:O0(),registrationStatus:0};return DI(e)}function $0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(pr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=j0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:z0(n)}:{installationEntry:e}}function j0(n,e){return p(this,null,function*(){try{const t=yield N0(n,e);return ma(n.appConfig,t)}catch(t){throw TI(t)&&t.customData.serverCode===409?yield NI(n.appConfig):yield ma(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function z0(n){return p(this,null,function*(){let e=yield Wp(n.appConfig);for(;e.registrationStatus===1;)yield SI(100),e=yield Wp(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=yield vh(n);return r||t}return e})}function Wp(n){return cc(n,e=>{if(!e)throw pr.create("installation-not-found");return DI(e)})}function DI(n){return G0(n)?{fid:n.fid,registrationStatus:0}:n}function G0(n){return n.registrationStatus===1&&n.registrationTime+yI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(r,s){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const i=K0(n,t),o=P0(n,t),c=e.getImmediate({optional:!0});if(c){const m=yield c.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={installation:{sdkVersion:II,appId:n.appId}},l={method:"POST",headers:o,body:JSON.stringify(u)},d=yield bI(()=>fetch(i,l));if(d.ok){const m=yield d.json();return vI(m)}else throw yield AI("Generate Auth Token",d)})}function K0(n,{fid:e}){return`${wI(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n,e=!1){return p(this,null,function*(){let t;const r=yield cc(n.appConfig,i=>{if(!VI(i))throw pr.create("not-registered");const o=i.authToken;if(!e&&J0(o))return i;if(o.requestStatus===1)return t=W0(n,e),i;{if(!navigator.onLine)throw pr.create("app-offline");const c=X0(i);return t=Q0(n,c),c}});return t?yield t:r.authToken})}function W0(n,e){return p(this,null,function*(){let t=yield Qp(n.appConfig);for(;t.authToken.requestStatus===1;)yield SI(100),t=yield Qp(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ah(n,e):r})}function Qp(n){return cc(n,e=>{if(!VI(e))throw pr.create("not-registered");const t=e.authToken;return Z0(t)?De(J({},e),{authToken:{requestStatus:0}}):e})}function Q0(n,e){return p(this,null,function*(){try{const t=yield H0(n,e),r=De(J({},e),{authToken:t});return yield ma(n.appConfig,r),t}catch(t){if(TI(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield NI(n.appConfig);else{const r=De(J({},e),{authToken:{requestStatus:0}});yield ma(n.appConfig,r)}throw t}})}function VI(n){return n!==void 0&&n.registrationStatus===2}function J0(n){return n.requestStatus===2&&!Y0(n)}function Y0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+A0}function X0(n){const e={requestStatus:1,requestTime:Date.now()};return De(J({},n),{authToken:e})}function Z0(n){return n.requestStatus===1&&n.requestTime+yI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(n){return p(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:r}=yield vh(e);return r?r.catch(console.error):Ah(e).catch(console.error),t.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n,e=!1){return p(this,null,function*(){const t=n;return yield nN(t),(yield Ah(t,e)).token})}function nN(n){return p(this,null,function*(){const{registrationPromise:e}=yield vh(n);e&&(yield e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(n){if(!n||!n.options)throw iu("App Configuration");if(!n.name)throw iu("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw iu(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function iu(n){return pr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="installations",sN="installations-internal",iN=n=>{const e=n.getProvider("app").getImmediate(),t=rN(e),r=Lt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oN=n=>{const e=n.getProvider("app").getImmediate(),t=Lt(e,OI).getImmediate();return{getId:()=>eN(t),getToken:s=>tN(t,s)}};function aN(){ut(new st(OI,iN,"PUBLIC")),ut(new st(sN,oN,"PRIVATE"))}aN();Qe(_I,Th);Qe(_I,Th,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="/firebase-messaging-sw.js",uN="/firebase-cloud-messaging-push-scope",xI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",lN="https://fcmregistrations.googleapis.com/v1",MI="google.c.a.c_id",hN="google.c.a.c_l",dN="google.c.a.ts",fN="google.c.a.e",Jp=1e4;var Yp;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Yp||(Yp={}));/**
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
 */var Ci;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Ci||(Ci={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function pN(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="fcm_token_details_db",mN=5,Xp="fcm_token_object_Store";function gN(n){return p(this,null,function*(){if("databases"in indexedDB&&!(yield indexedDB.databases()).map(i=>i.name).includes(ou))return null;let e=null;return(yield Ia(ou,mN,{upgrade:(r,s,i,o)=>p(this,null,function*(){var l;if(s<2||!r.objectStoreNames.contains(Xp))return;const c=o.objectStore(Xp),u=yield c.index("fcmSenderId").get(n);if(yield c.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(l=d.createTime)!=null?l:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Bt(d.vapidKey)}}}else if(s===3){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Bt(d.auth),p256dh:Bt(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Bt(d.vapidKey)}}}else if(s===4){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Bt(d.auth),p256dh:Bt(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Bt(d.vapidKey)}}}}})})).close(),yield Lc(ou),yield Lc("fcm_vapid_details_db"),yield Lc("undefined"),_N(e)?e:null})}function _N(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="firebase-messaging-database",IN=1,gr="firebase-messaging-store";let au=null;function Rh(){return au||(au=Ia(yN,IN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(gr)}}})),au}function LI(n){return p(this,null,function*(){const e=Sh(n),r=yield(yield Rh()).transaction(gr).objectStore(gr).get(e);if(r)return r;{const s=yield gN(n.appConfig.senderId);if(s)return yield bh(n,s),s}})}function bh(n,e){return p(this,null,function*(){const t=Sh(n),s=(yield Rh()).transaction(gr,"readwrite");return yield s.objectStore(gr).put(e,t),yield s.done,e})}function EN(n){return p(this,null,function*(){const e=Sh(n),r=(yield Rh()).transaction(gr,"readwrite");yield r.objectStore(gr).delete(e),yield r.done})}function Sh({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ue=new kn("messaging","Messaging",TN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(n,e){return p(this,null,function*(){const t=yield kh(n),r=FI(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=yield(yield fetch(Ph(n.appConfig),s)).json()}catch(o){throw Ue.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ue.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Ue.create("token-subscribe-no-token");return i.token})}function vN(n,e){return p(this,null,function*(){const t=yield kh(n),r=FI(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=yield(yield fetch(`${Ph(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw Ue.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ue.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Ue.create("token-update-no-token");return i.token})}function UI(n,e){return p(this,null,function*(){const r={method:"DELETE",headers:yield kh(n)};try{const i=yield(yield fetch(`${Ph(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Ue.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Ue.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}})}function Ph({projectId:n}){return`${lN}/projects/${n}/registrations`}function kh(t){return p(this,arguments,function*({appConfig:n,installations:e}){const r=yield e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})})}function FI({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==xI&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=7*24*60*60*1e3;function RN(n){return p(this,null,function*(){const e=yield PN(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Bt(e.getKey("auth")),p256dh:Bt(e.getKey("p256dh"))},r=yield LI(n.firebaseDependencies);if(r){if(kN(r.subscriptionOptions,t))return Date.now()>=r.createTime+AN?SN(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{yield UI(n.firebaseDependencies,r.token)}catch(s){}return Zp(n.firebaseDependencies,t)}else return Zp(n.firebaseDependencies,t)})}function bN(n){return p(this,null,function*(){const e=yield LI(n.firebaseDependencies);e&&(yield UI(n.firebaseDependencies,e.token),yield EN(n.firebaseDependencies));const t=yield n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0})}function SN(n,e){return p(this,null,function*(){try{const t=yield vN(n.firebaseDependencies,e),r=De(J({},e),{token:t,createTime:Date.now()});return yield bh(n.firebaseDependencies,r),t}catch(t){throw t}})}function Zp(n,e){return p(this,null,function*(){const r={token:yield wN(n,e),createTime:Date.now(),subscriptionOptions:e};return yield bh(n,r),r.token})}function PN(n,e){return p(this,null,function*(){const t=yield n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pN(e)})})}function kN(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return CN(e,n),NN(e,n),DN(e,n),e}function CN(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function NN(n,e){e.data&&(n.data=e.data)}function DN(n,e){var s,i,o,c,u;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;n.fcmOptions={};const t=(c=(i=e.fcmOptions)==null?void 0:i.link)!=null?c:(o=e.notification)==null?void 0:o.click_action;t&&(n.fcmOptions.link=t);const r=(u=e.fcmOptions)==null?void 0:u.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(n){return typeof n=="object"&&!!n&&MI in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ON("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function ON(n,e){const t=[];for(let r=0;r<n.length;r++)t.push(n.charAt(r)),r<e.length&&t.push(e.charAt(r));return t.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(n){if(!n||!n.options)throw cu("App Configuration Object");if(!n.name)throw cu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw cu(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function cu(n){return Ue.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=xN(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n){return p(this,null,function*(){try{n.swRegistration=yield navigator.serviceWorker.register(cN,{scope:uN}),n.swRegistration.update().catch(()=>{}),yield LN(n.swRegistration)}catch(e){throw Ue.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}})}function LN(n){return p(this,null,function*(){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${Jp} ms`)),Jp),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(n,e){return p(this,null,function*(){if(!e&&!n.swRegistration&&(yield BI(n)),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ue.create("invalid-sw-registration");n.swRegistration=e}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(n,e){return p(this,null,function*(){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=xI)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(n,e){return p(this,null,function*(){if(!navigator)throw Ue.create("only-available-in-window");if(Notification.permission==="default"&&(yield Notification.requestPermission()),Notification.permission!=="granted")throw Ue.create("permission-blocked");return yield FN(n,e==null?void 0:e.vapidKey),yield UN(n,e==null?void 0:e.serviceWorkerRegistration),RN(n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(n,e,t){return p(this,null,function*(){const r=qN(e);(yield n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[MI],message_name:t[hN],message_time:t[dN],message_device_time:Math.floor(Date.now()/1e3)})})}function qN(n){switch(n){case Ci.NOTIFICATION_CLICKED:return"notification_open";case Ci.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(n,e){return p(this,null,function*(){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Ci.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(em(t)):n.onMessageHandler.next(em(t)));const r=t.data;VN(r)&&r[fN]==="1"&&(yield BN(n,t.messageType,r))})}const tm="@firebase/messaging",nm="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=n=>{const e=new MN(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>$N(e,t)),e},zN=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>qI(e,r)}};function GN(){ut(new st("messaging",jN,"PUBLIC")),ut(new st("messaging-internal",zN,"PRIVATE")),Qe(tm,nm),Qe(tm,nm,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(){return p(this,null,function*(){try{yield fm()}catch(n){return!1}return typeof window!="undefined"&&Ni()&&BE()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(n){return p(this,null,function*(){if(!navigator)throw Ue.create("only-available-in-window");return n.swRegistration||(yield BI(n)),bN(n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(n,e){if(!navigator)throw Ue.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(n=Di()){return $I().then(e=>{if(!e)throw Ue.create("unsupported-browser")},e=>{throw Ue.create("indexed-db-unsupported")}),Lt(z(n),"messaging").getImmediate()}function QN(n,e){return p(this,null,function*(){return n=z(n),qI(n,e)})}function JN(n){return n=z(n),HN(n)}function YN(n,e){return n=z(n),KN(n,e)}GN();const SD=Object.freeze(Object.defineProperty({__proto__:null,deleteToken:JN,getMessaging:WN,getToken:QN,isSupported:$I,onMessage:YN},Symbol.toStringTag,{value:"Module"}));class re extends SE{constructor(){super(),this.lastConfirmationResult=new Map;const e=Z();e.onAuthStateChanged(t=>this.handleAuthStateChange(t)),e.onIdTokenChanged(t=>void this.handleIdTokenChange(t))}applyActionCode(e){return p(this,null,function*(){const t=Z();return Ev(t,e.oobCode)})}createUserWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield Tv(t,e.email,e.password);return this.createSignInResult(r,null)})}confirmPasswordReset(e){return p(this,null,function*(){const t=Z();return Iv(t,e.oobCode,e.newPassword)})}confirmVerificationCode(e){return p(this,null,function*(){const{verificationCode:t,verificationId:r}=e,s=this.lastConfirmationResult.get(r);if(!s)throw new Error(re.ERROR_CONFIRMATION_RESULT_MISSING);const i=yield s.confirm(t);return this.createSignInResult(i,null)})}deleteUser(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return jv(t)})}fetchSignInMethodsForEmail(e){return p(this,null,function*(){const t=Z();return{signInMethods:yield Sv(t,e.email)}})}getPendingAuthResult(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}getCurrentUser(){return p(this,null,function*(){const e=Z();return{user:this.createUserResult(e.currentUser)}})}getIdToken(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return{token:(yield t.currentUser.getIdToken(e==null?void 0:e.forceRefresh))||""}})}getIdTokenResult(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield t.currentUser.getIdTokenResult(e==null?void 0:e.forceRefresh);return Object.assign(Object.assign({},r),{authTime:Date.parse(r.authTime),expirationTime:Date.parse(r.expirationTime),issuedAtTime:Date.parse(r.issuedAtTime)})})}getRedirectResult(){return p(this,null,function*(){const e=Z(),t=yield AA(e),r=t?ye.credentialFromResult(t):null;return this.createSignInResult(t,r)})}getTenantId(){return p(this,null,function*(){return{tenantId:Z().tenantId}})}isSignInWithEmailLink(e){return p(this,null,function*(){const t=Z();return{isSignInWithEmailLink:Av(t,e.emailLink)}})}linkWithApple(e){return p(this,null,function*(){const t=new ye(pn.APPLE);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}linkWithEmailAndPassword(e){return p(this,null,function*(){const t=Wt.credential(e.email,e.password),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithEmailLink(e){return p(this,null,function*(){const t=Wt.credentialWithLink(e.email,e.emailLink),r=yield this.linkCurrentUserWithCredential(t);return this.createSignInResult(r,t)})}linkWithFacebook(e){return p(this,null,function*(){const t=new ht;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ht.credentialFromResult(r);return this.createSignInResult(r,s)})}linkWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithGithub(e){return p(this,null,function*(){const t=new ft;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ft.credentialFromResult(r);return this.createSignInResult(r,s)})}linkWithGoogle(e){return p(this,null,function*(){const t=new dt;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),s=dt.credentialFromResult(r);return this.createSignInResult(r,s)})}linkWithMicrosoft(e){return p(this,null,function*(){const t=new ye(pn.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}linkWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}linkWithPhoneNumber(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof sf))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);try{const s=yield lA(r,e.phoneNumber,e.recaptchaVerifier),{verificationId:i}=s;this.lastConfirmationResult.set(i,s);const o={verificationId:i};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,o)}catch(s){const i={message:this.getErrorMessage(s)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,i)}})}linkWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}linkWithTwitter(e){return p(this,null,function*(){const t=new pt;this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),s=pt.credentialFromResult(r);return this.createSignInResult(r,s)})}linkWithYahoo(e){return p(this,null,function*(){const t=new ye(pn.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.linkCurrentUserWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}reload(){return p(this,null,function*(){const t=Z().currentUser;if(!t)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Rm(t)})}revokeAccessToken(e){return p(this,null,function*(){const t=Z();return $v(t,e.token)})}sendEmailVerification(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Pv(r,e==null?void 0:e.actionCodeSettings)})}sendPasswordResetEmail(e){return p(this,null,function*(){const t=Z();return yv(t,e.email,e.actionCodeSettings)})}sendSignInLinkToEmail(e){return p(this,null,function*(){const t=Z();return vv(t,e.email,e.actionCodeSettings)})}setLanguageCode(e){return p(this,null,function*(){const t=Z();t.languageCode=e.languageCode})}setPersistence(e){return p(this,null,function*(){const t=Z();switch(e.persistence){case Or.BrowserLocal:yield fo(t,Qm);break;case Or.BrowserSession:yield fo(t,il);break;case Or.IndexedDbLocal:yield fo(t,eg);break;case Or.InMemory:yield fo(t,mu);break}})}setTenantId(e){return p(this,null,function*(){const t=Z();t.tenantId=e.tenantId})}signInAnonymously(){return p(this,null,function*(){const e=Z(),t=yield fv(e);return this.createSignInResult(t,null)})}signInWithApple(e){return p(this,null,function*(){const t=new ye(pn.APPLE);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}signInWithCustomToken(e){return p(this,null,function*(){const t=Z(),r=yield _v(t,e.token);return this.createSignInResult(r,null)})}signInWithEmailAndPassword(e){return p(this,null,function*(){const t=Z(),r=yield wv(t,e.email,e.password);return this.createSignInResult(r,null)})}signInWithEmailLink(e){return p(this,null,function*(){const t=Z(),r=yield Rv(t,e.email,e.emailLink);return this.createSignInResult(r,null)})}signInWithFacebook(e){return p(this,null,function*(){const t=new ht;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ht.credentialFromResult(r);return this.createSignInResult(r,s)})}signInWithGithub(e){return p(this,null,function*(){const t=new ft;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ft.credentialFromResult(r);return this.createSignInResult(r,s)})}signInWithGoogle(e){return p(this,null,function*(){const t=new dt;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),s=dt.credentialFromResult(r);return this.createSignInResult(r,s)})}signInWithMicrosoft(e){return p(this,null,function*(){const t=new ye(pn.MICROSOFT);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}signInWithOpenIdConnect(e){return p(this,null,function*(){const t=new ye(e.providerId);this.applySignInOptions(e,t);const r=yield this.signInWithPopupOrRedirect(t,e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}signInWithPhoneNumber(e){return p(this,null,function*(){if(!e.phoneNumber)throw new Error(re.ERROR_PHONE_NUMBER_MISSING);if(!e.recaptchaVerifier||!(e.recaptchaVerifier instanceof sf))throw new Error(re.ERROR_RECAPTCHA_VERIFIER_MISSING);const t=Z();try{const r=yield uA(t,e.phoneNumber,e.recaptchaVerifier),{verificationId:s}=r;this.lastConfirmationResult.set(s,r);const i={verificationId:s};this.notifyListeners(re.PHONE_CODE_SENT_EVENT,i)}catch(r){const s={message:this.getErrorMessage(r)};this.notifyListeners(re.PHONE_VERIFICATION_FAILED_EVENT,s)}})}signInWithPlayGames(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithGameCenter(){return p(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}signInWithTwitter(e){return p(this,null,function*(){const t=new pt;this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),s=pt.credentialFromResult(r);return this.createSignInResult(r,s)})}signInWithYahoo(e){return p(this,null,function*(){const t=new ye(pn.YAHOO);this.applySignInOptions(e||{},t);const r=yield this.signInWithPopupOrRedirect(t,e==null?void 0:e.mode),s=ye.credentialFromResult(r);return this.createSignInResult(r,s)})}signOut(){return p(this,null,function*(){yield Z().signOut()})}unlink(e){return p(this,null,function*(){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);const r=yield pv(t.currentUser,e.providerId);return{user:this.createUserResult(r)}})}updateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Dv(r,e.newEmail)})}updatePassword(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Vv(r,e.newPassword)})}updateProfile(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Nv(r,{displayName:e.displayName,photoURL:e.photoUrl})})}useAppLanguage(){return p(this,null,function*(){Z().useDeviceLanguage()})}useEmulator(e){return p(this,null,function*(){const t=Z(),r=e.port||9099,s=e.scheme||"http";e.host.includes("://")?gu(t,`${e.host}:${r}`):gu(t,`${s}://${e.host}:${r}`)})}verifyBeforeUpdateEmail(e){return p(this,null,function*(){const r=Z().currentUser;if(!r)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return kv(r,e==null?void 0:e.newEmail,e==null?void 0:e.actionCodeSettings)})}handleAuthStateChange(e){const r={user:this.createUserResult(e)};this.notifyListeners(re.AUTH_STATE_CHANGE_EVENT,r,!0)}handleIdTokenChange(e){return p(this,null,function*(){if(!e)return;const r={token:yield e.getIdToken(!1)};this.notifyListeners(re.ID_TOKEN_CHANGE_EVENT,r,!0)})}applySignInOptions(e,t){if(e.customParameters){const r={};e.customParameters.map(s=>{r[s.key]=s.value}),t.setCustomParameters(r)}if(e.scopes)for(const r of e.scopes)t.addScope(r)}signInWithPopupOrRedirect(e,t){const r=Z();return t==="redirect"?EA(r,e):mA(r,e)}linkCurrentUserWithPopupOrRedirect(e,t){const r=Z();if(!r.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return t==="redirect"?wA(r.currentUser,e):gA(r.currentUser,e)}linkCurrentUserWithCredential(e){const t=Z();if(!t.currentUser)throw new Error(re.ERROR_NO_USER_SIGNED_IN);return Gm(t.currentUser,e)}requestAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}checkAppTrackingTransparencyPermission(){throw this.unimplemented("Not implemented on web.")}createSignInResult(e,t){const r=this.createUserResult((e==null?void 0:e.user)||null),s=this.createCredentialResult(t),i=this.createAdditionalUserInfoResult(e);return{user:r,credential:s,additionalUserInfo:i}}createCredentialResult(e){if(!e)return null;const t={providerId:e.providerId};return e instanceof Vt&&(t.accessToken=e.accessToken,t.idToken=e.idToken,t.secret=e.secret),t}createUserResult(e){return e?{displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,isAnonymous:e.isAnonymous,metadata:this.createUserMetadataResult(e.metadata),phoneNumber:e.phoneNumber,photoUrl:e.photoURL,providerData:this.createUserProviderDataResult(e.providerData),providerId:e.providerId,tenantId:e.tenantId,uid:e.uid}:null}createUserMetadataResult(e){const t={};return e.creationTime&&(t.creationTime=Date.parse(e.creationTime)),e.lastSignInTime&&(t.lastSignInTime=Date.parse(e.lastSignInTime)),t}createUserProviderDataResult(e){return e.map(t=>({displayName:t.displayName,email:t.email,phoneNumber:t.phoneNumber,photoUrl:t.photoURL,providerId:t.providerId,uid:t.uid}))}createAdditionalUserInfoResult(e){if(!e)return null;const t=Fv(e);if(!t)return null;const{isNewUser:r,profile:s,providerId:i,username:o}=t,c={isNewUser:r};return i!==null&&(c.providerId=i),s!==null&&(c.profile=s),o!=null&&(c.username=o),c}getErrorMessage(e){return e instanceof Object&&"message"in e&&typeof e.message=="string"?e.message:JSON.stringify(e)}}re.AUTH_STATE_CHANGE_EVENT="authStateChange";re.ID_TOKEN_CHANGE_EVENT="idTokenChange";re.PHONE_CODE_SENT_EVENT="phoneCodeSent";re.PHONE_VERIFICATION_FAILED_EVENT="phoneVerificationFailed";re.ERROR_NO_USER_SIGNED_IN="No user is signed in.";re.ERROR_PHONE_NUMBER_MISSING="phoneNumber must be provided.";re.ERROR_RECAPTCHA_VERIFIER_MISSING="recaptchaVerifier must be provided and must be an instance of RecaptchaVerifier.";re.ERROR_CONFIRMATION_RESULT_MISSING="No confirmation result with this verification id was found.";const XN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseAuthenticationWeb:re},Symbol.toStringTag,{value:"Module"}));export{ED as A,vD as B,yD as C,lD as D,fD as E,RD as F,dt as G,dD as H,pD as I,TD as J,hD as K,jv as L,cD as M,uD as N,bD as O,SD as P,zy as R,AD as a,iD as b,gD as c,oD as d,Qm as e,_v as f,Z as g,rl as h,JT as i,MP as j,aD as k,ID as l,_D as m,AA as n,tD as o,mD as p,Tv as q,wv as r,fo as s,mA as t,EA as u,sf as v,uA as w,nD as x,wD as y,sD as z};
